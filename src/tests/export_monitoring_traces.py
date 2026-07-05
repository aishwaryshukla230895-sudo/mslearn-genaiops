import os
import json
import csv
import pathlib
from datetime import timedelta
from dotenv import load_dotenv
from azure.identity import DefaultAzureCredential
from azure.monitor.query import LogsQueryClient, LogsQueryStatus
from azure.mgmt.applicationinsights import ApplicationInsightsManagementClient
from azure.mgmt.subscription import SubscriptionClient
from azure.mgmt.loganalytics import LogAnalyticsManagementClient
from azure.ai.projects import AIProjectClient

def export_traces():
    print("================================================================================")
    print("Step 1: Connecting to Azure Log Analytics & Application Insights")
    print("================================================================================")
    load_dotenv()
    credential = DefaultAzureCredential()
    
    project_endpoint = os.environ["AZURE_AI_PROJECT_ENDPOINT"]
    project_client = AIProjectClient(endpoint=project_endpoint, credential=credential)
    connection_string = project_client.telemetry.get_application_insights_connection_string()
    
    instrumentation_key = next(
        part.split("=", 1)[1]
        for part in connection_string.split(";")
        if part.startswith("InstrumentationKey")
    )
    
    sub_client = SubscriptionClient(credential)
    subscription_id = next(sub_client.subscriptions.list()).subscription_id
    
    ai_mgmt = ApplicationInsightsManagementClient(credential, subscription_id)
    workspace_resource_id = None
    for component in ai_mgmt.components.list():
        if instrumentation_key in (component.instrumentation_key or ""):
            workspace_resource_id = component.workspace_resource_id
            break
            
    resource_group = workspace_resource_id.split("/")[4]
    workspace_name = workspace_resource_id.split("/")[-1]
    
    la_client = LogAnalyticsManagementClient(credential, subscription_id)
    workspace = la_client.workspaces.get(resource_group, workspace_name)
    workspace_id = workspace.customer_id
    print(f"✓ Connected! Log Analytics Workspace ID: {workspace_id}")

    print("\n================================================================================")
    print("Step 2: Querying Distributed Trace Spans from Cloud Database")
    print("================================================================================")
    query = """
    AppDependencies
    | where TimeGenerated > ago(24h)
    | where Name startswith "trail_guide_" or Name startswith "v1_" or Name startswith "v2_" or Name startswith "v3_" or Name startswith "v4_" or Name startswith "chat "
    | summarize arg_max(TimeGenerated, *) by Id
    | project
        TimeGenerated,
        Id,
        ParentId,
        OperationId,
        Name,
        DurationMs,
        Success,
        PromptVersion    = tostring(Properties["prompt.version"]),
        TestName         = tostring(Properties["test.name"]),
        TotalTokens      = tostring(Properties["response.total_tokens"]),
        PromptTokens     = tostring(Properties["response.prompt_tokens"]),
        CompletionTokens = tostring(Properties["response.completion_tokens"])
    | order by TimeGenerated desc
    """
    
    logs_client = LogsQueryClient(credential)
    result = logs_client.query_workspace(
        workspace_id=workspace_id,
        query=query,
        timespan=timedelta(hours=24),
    )
    
    if result.status != LogsQueryStatus.SUCCESS:
        raise RuntimeError(f"Query failed: {result.partial_error}")
        
    rows = result.tables[0].rows
    print(f"✓ Downloaded {len(rows)} trace span records across all prompt versions!")
    
    # Structure data for JSON and CSV
    json_records = []
    csv_rows = []
    
    for row in rows:
        time_gen, span_id, parent_id, op_id, name, dur, ok, ver, test, total, prompt, compl = row
        record = {
            "Timestamp": str(time_gen),
            "SpanId": span_id,
            "ParentSpanId": parent_id,
            "TraceId": op_id,
            "SpanName": name,
            "DurationMs": dur,
            "Success": ok,
            "PromptVersion": ver or "",
            "TestName": test or "",
            "TotalTokens": total or "",
            "PromptTokens": prompt or "",
            "CompletionTokens": compl or ""
        }
        json_records.append(record)
        csv_rows.append(record)
        
    # Ensure data directory exists
    pathlib.Path("data").mkdir(exist_ok=True)
    
    # Save JSON
    json_path = pathlib.Path("data/monitoring_traces.json")
    json_path.write_text(json.dumps(json_records, indent=2, default=str), encoding="utf-8")
    print(f"✓ Saved complete raw trace tree to: {json_path}")
    
    # Save CSV
    csv_path = pathlib.Path("data/monitoring_traces_summary.csv")
    if csv_rows:
        fieldnames = list(csv_rows[0].keys())
        with open(csv_path, "w", newline="", encoding="utf-8") as f:
            writer = csv.DictWriter(f, fieldnames=fieldnames)
            writer.writeheader()
            writer.writerows(csv_rows)
        print(f"✓ Saved tabular span spreadsheet to: {csv_path}")

    print("\n================================================================================")
    print("Export Complete! All monitoring results saved locally.")
    print("================================================================================")

if __name__ == "__main__":
    export_traces()
