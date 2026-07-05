// AI-300 Hands-On Enterprise Implementation Simulator (MOD Tier - Track 4: Continuous Observability & KQL Tracing)
window.HANDSON_DATA_MOD_T4 = [
  {
    "id": 2901,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/tests/run_monitoring.py` (#1), you need to configure OpenTelemetry (OTel) to automatically export trace spans to Azure Application Insights.",
    "question": "Which two code steps correctly initialize Azure Monitor distributed tracing for Azure AI Foundry?",
    "options": [
      "conn_str = project_client.telemetry.get_application_insights_connection_string(); configure_azure_monitor(connection_string=conn_str)",
      "import logging; logging.basicConfig(filename='app.log')",
      "app_insights = AzureLogClient(api_key='secret'); app_insights.start()",
      "os.environ['ENABLE_TRACING'] = 'true'; sys.stdout = open('trace.txt', 'w')"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Native Azure AI Foundry tracing requires retrieving the connection string via `project_client.telemetry.get_application_insights_connection_string()` and passing it to `configure_azure_monitor()`."
  },
  {
    "id": 2902,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You want to create a custom OpenTelemetry span in `trail_guide_agent.py` (#1) to measure the exact execution duration of a RAG vector database lookup.",
    "question": "Which OTel Python SDK syntax correctly wraps the function execution in a custom child span?",
    "options": [
      "from opentelemetry import trace; tracer = trace.get_tracer(__name__); with tracer.start_as_current_span('rag_vector_lookup') as span: span.set_attribute('index_name', 'trails_idx')",
      "with azure.monitor.start_timer('rag_lookup'): pass",
      "span = ApplicationInsights.create_span('rag_lookup'); span.stop()",
      "@log_latency(table='AppDependencies')"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In OpenTelemetry, custom tracing spans are created using `with tracer.start_as_current_span('span_name') as span:`, where custom metadata is logged via `span.set_attribute()`."
  },
  {
    "id": 2903,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "After executing `interact_with_agent.py` (#1), you immediately open the Azure AI Foundry portal under `Operate -> Tracing`. You do not see your latest trace spans.",
    "question": "What is the operational explanation for this missing data, and how can you verify traces immediately?",
    "options": [
      "The Foundry web portal has a ~5 to 10 minute indexing lag. To verify immediately without waiting, query the `AppDependencies` table in Azure Log Analytics using Kusto Query Language (KQL).",
      "OpenTelemetry tracing is disabled by default in Python SDK v2; you must rebuild `.venv`.",
      "Application Insights drops 99% of spans due to sampling rules.",
      "Traces are stored in Azure Key Vault and must be decrypted first."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: The web portal UI exhibits a 5-10 minute indexing delay. For real-time debugging during MLOps CI/CD pipelines, engineers query the Log Analytics `AppDependencies` table directly via KQL."
  },
  {
    "id": 2904,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are writing a Kusto Query Language (KQL) script in Log Analytics (#1) to find all failed Azure OpenAI completion calls where latency exceeded 5,000 ms.",
    "question": "Which KQL query correctly filters the `AppDependencies` table?",
    "options": [
      "AppDependencies | where Target contains 'openai' and DurationMs > 5000 | project TimeGenerated, Name, DurationMs, ResultCode, Data",
      "Select * from Traces where service='openai' and latency > 5000",
      "AppEvents | filter type == 'LLM' and time > 5s",
      "AzureMetrics | where MetricName == 'OpenAI_Latency' and Average > 5000"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In Azure Monitor Log Analytics, OpenTelemetry outbound calls (including Azure OpenAI inference) are recorded in the `AppDependencies` table, where duration is stored in `DurationMs`."
  },
  {
    "id": 2905,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/tests/check_traces.py` (#1), you need to programmatically query Log Analytics workspace logs using Python `azure-monitor-query` SDK.",
    "question": "Which client class and method execute KQL queries against a Log Analytics workspace?",
    "options": [
      "client = LogsQueryClient(DefaultAzureCredential()); response = client.query_workspace(workspace_id=..., query=kql_query, timespan=timedelta(days=1))",
      "client = AppInsightsClient(); response = client.get_traces(query=kql_query)",
      "client = AIProjectClient(); response = client.telemetry.run_kql(kql_query)",
      "client = LogAnalyticsWorkspace(); response = client.execute_sql(query)"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: The `azure-monitor-query` Python package provides `LogsQueryClient.query_workspace(workspace_id, query, timespan)` for programmatic KQL execution."
  },
  {
    "id": 2906,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "When inspecting trace spans for Trail Guide Agent (#1), you observe that prompt token attributes (`gen_ai.usage.input_tokens`) are 4,500 tokens per request.",
    "question": "Which semantic convention prefix is used by OpenTelemetry in Azure AI Foundry to record LLM token counts and model names?",
    "options": [
      "`gen_ai.*` (e.g., `gen_ai.usage.input_tokens`, `gen_ai.usage.output_tokens`, `gen_ai.system`)",
      "`openai.tokens.*`",
      "`azure.cognitive.*`",
      "`llm.metrics.*`"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Azure AI Foundry adopts OpenTelemetry semantic conventions for Generative AI, prefixing span attributes with `gen_ai.*` (e.g., `gen_ai.usage.input_tokens`)."
  },
  {
    "id": 2907,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are analyzing the latency vs cost trade-off between prompt iterations in `docs/LAB_04_MONITORING_AND_TRACING_REPORT.md` (#1).",
    "question": "Why did switching from `v3_verbose.txt` to `v4_optimized_concise.txt` reduce average latency from ~11,000 ms to ~4,000 ms?",
    "options": [
      "Concise prompts reduce both input token processing overhead and output completion length, directly decreasing autoregressive token generation time (TTLB).",
      "Concise prompts automatically switch the model from GPT-5.1 to a smaller model.",
      "Verbose prompts cause network packet fragmentation across Azure firewalls.",
      "Application Insights throttles spans that contain more than 1,000 words."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In LLM inference, generation time is dominated by output token decoding (autoregressive generation). Concise prompts (`v4`) instruct models to generate succinct answers, slashing TTLB latency."
  },
  {
    "id": 2908,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/agents/monitoring_agent/error-prompt.py` (#1), you deliberately send a malformed payload to test exception logging.",
    "question": "How does OpenTelemetry record unhandled exceptions in Application Insights trace trees?",
    "options": [
      "The span status is set to `StatusCode.ERROR`, and an `exception` event is recorded on the span containing stack trace and error message.",
      "The entire trace tree is deleted to prevent log corruption.",
      "An email alert is immediately broadcast to all Azure subscription owners.",
      "The span is moved to the `AppExceptions` table and removed from `AppDependencies`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In OpenTelemetry, when an exception occurs inside a traced block, `span.record_exception(e)` and `span.set_status(Status(StatusCode.ERROR))` ensure full traceback visibility in Application Insights."
  },
  {
    "id": 2909,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "An MLOps team wants to set up an Azure Monitor Alert Rule (#1) that triggers a PagerDuty notification whenever average agent latency exceeds 8,000 ms over a 5-minute window.",
    "question": "Which Azure resource type is evaluated by the metric alert rule?",
    "options": [
      "The Application Insights resource associated with the Azure AI Foundry project workspace.",
      "The Bicep template file `infra/main.bicep`.",
      "The Python script `trail_guide_agent.py`.",
      "The local `.env` configuration file."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Azure Monitor metric alerts evaluate time-series telemetry stored in Azure Application Insights (or Log Analytics), triggering action groups when thresholds are breached."
  },
  {
    "id": 2910,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are debugging a distributed trace tree in `Operate -> Tracing` (#1). The root span is named `trail_guide_v3`, which contains three child spans: `embed_query`, `ai_search_lookup`, and `chat_completion`.",
    "question": "What is this parent-child hierarchical execution graph called in distributed tracing terminology?",
    "options": [
      "A Trace Waterfall (or Trace Directed Acyclic Graph / DAG), where child spans represent sequential or parallel dependency operations within the parent root span.",
      "A Neural Network Backpropagation Tree",
      "A Git Commit History Log",
      "A Bicep Dependency Mesh"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: A distributed trace waterfall displays the chronological parent-child relationships of execution spans, allowing engineers to isolate which exact RAG or inference step caused latency spikes."
  },
  {
    "id": 2911,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/tests/run_monitoring.py` (#2), you need to configure OpenTelemetry (OTel) to automatically export trace spans to Azure Application Insights.",
    "question": "Which two code steps correctly initialize Azure Monitor distributed tracing for Azure AI Foundry?",
    "options": [
      "conn_str = project_client.telemetry.get_application_insights_connection_string(); configure_azure_monitor(connection_string=conn_str)",
      "import logging; logging.basicConfig(filename='app.log')",
      "app_insights = AzureLogClient(api_key='secret'); app_insights.start()",
      "os.environ['ENABLE_TRACING'] = 'true'; sys.stdout = open('trace.txt', 'w')"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Native Azure AI Foundry tracing requires retrieving the connection string via `project_client.telemetry.get_application_insights_connection_string()` and passing it to `configure_azure_monitor()`."
  },
  {
    "id": 2912,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You want to create a custom OpenTelemetry span in `trail_guide_agent.py` (#2) to measure the exact execution duration of a RAG vector database lookup.",
    "question": "Which OTel Python SDK syntax correctly wraps the function execution in a custom child span?",
    "options": [
      "from opentelemetry import trace; tracer = trace.get_tracer(__name__); with tracer.start_as_current_span('rag_vector_lookup') as span: span.set_attribute('index_name', 'trails_idx')",
      "with azure.monitor.start_timer('rag_lookup'): pass",
      "span = ApplicationInsights.create_span('rag_lookup'); span.stop()",
      "@log_latency(table='AppDependencies')"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In OpenTelemetry, custom tracing spans are created using `with tracer.start_as_current_span('span_name') as span:`, where custom metadata is logged via `span.set_attribute()`."
  },
  {
    "id": 2913,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "After executing `interact_with_agent.py` (#2), you immediately open the Azure AI Foundry portal under `Operate -> Tracing`. You do not see your latest trace spans.",
    "question": "What is the operational explanation for this missing data, and how can you verify traces immediately?",
    "options": [
      "The Foundry web portal has a ~5 to 10 minute indexing lag. To verify immediately without waiting, query the `AppDependencies` table in Azure Log Analytics using Kusto Query Language (KQL).",
      "OpenTelemetry tracing is disabled by default in Python SDK v2; you must rebuild `.venv`.",
      "Application Insights drops 99% of spans due to sampling rules.",
      "Traces are stored in Azure Key Vault and must be decrypted first."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: The web portal UI exhibits a 5-10 minute indexing delay. For real-time debugging during MLOps CI/CD pipelines, engineers query the Log Analytics `AppDependencies` table directly via KQL."
  },
  {
    "id": 2914,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are writing a Kusto Query Language (KQL) script in Log Analytics (#2) to find all failed Azure OpenAI completion calls where latency exceeded 5,000 ms.",
    "question": "Which KQL query correctly filters the `AppDependencies` table?",
    "options": [
      "AppDependencies | where Target contains 'openai' and DurationMs > 5000 | project TimeGenerated, Name, DurationMs, ResultCode, Data",
      "Select * from Traces where service='openai' and latency > 5000",
      "AppEvents | filter type == 'LLM' and time > 5s",
      "AzureMetrics | where MetricName == 'OpenAI_Latency' and Average > 5000"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In Azure Monitor Log Analytics, OpenTelemetry outbound calls (including Azure OpenAI inference) are recorded in the `AppDependencies` table, where duration is stored in `DurationMs`."
  },
  {
    "id": 2915,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/tests/check_traces.py` (#2), you need to programmatically query Log Analytics workspace logs using Python `azure-monitor-query` SDK.",
    "question": "Which client class and method execute KQL queries against a Log Analytics workspace?",
    "options": [
      "client = LogsQueryClient(DefaultAzureCredential()); response = client.query_workspace(workspace_id=..., query=kql_query, timespan=timedelta(days=1))",
      "client = AppInsightsClient(); response = client.get_traces(query=kql_query)",
      "client = AIProjectClient(); response = client.telemetry.run_kql(kql_query)",
      "client = LogAnalyticsWorkspace(); response = client.execute_sql(query)"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: The `azure-monitor-query` Python package provides `LogsQueryClient.query_workspace(workspace_id, query, timespan)` for programmatic KQL execution."
  },
  {
    "id": 2916,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "When inspecting trace spans for Trail Guide Agent (#2), you observe that prompt token attributes (`gen_ai.usage.input_tokens`) are 4,500 tokens per request.",
    "question": "Which semantic convention prefix is used by OpenTelemetry in Azure AI Foundry to record LLM token counts and model names?",
    "options": [
      "`gen_ai.*` (e.g., `gen_ai.usage.input_tokens`, `gen_ai.usage.output_tokens`, `gen_ai.system`)",
      "`openai.tokens.*`",
      "`azure.cognitive.*`",
      "`llm.metrics.*`"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Azure AI Foundry adopts OpenTelemetry semantic conventions for Generative AI, prefixing span attributes with `gen_ai.*` (e.g., `gen_ai.usage.input_tokens`)."
  },
  {
    "id": 2917,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are analyzing the latency vs cost trade-off between prompt iterations in `docs/LAB_04_MONITORING_AND_TRACING_REPORT.md` (#2).",
    "question": "Why did switching from `v3_verbose.txt` to `v4_optimized_concise.txt` reduce average latency from ~11,000 ms to ~4,000 ms?",
    "options": [
      "Concise prompts reduce both input token processing overhead and output completion length, directly decreasing autoregressive token generation time (TTLB).",
      "Concise prompts automatically switch the model from GPT-5.1 to a smaller model.",
      "Verbose prompts cause network packet fragmentation across Azure firewalls.",
      "Application Insights throttles spans that contain more than 1,000 words."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In LLM inference, generation time is dominated by output token decoding (autoregressive generation). Concise prompts (`v4`) instruct models to generate succinct answers, slashing TTLB latency."
  },
  {
    "id": 2918,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/agents/monitoring_agent/error-prompt.py` (#2), you deliberately send a malformed payload to test exception logging.",
    "question": "How does OpenTelemetry record unhandled exceptions in Application Insights trace trees?",
    "options": [
      "The span status is set to `StatusCode.ERROR`, and an `exception` event is recorded on the span containing stack trace and error message.",
      "The entire trace tree is deleted to prevent log corruption.",
      "An email alert is immediately broadcast to all Azure subscription owners.",
      "The span is moved to the `AppExceptions` table and removed from `AppDependencies`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In OpenTelemetry, when an exception occurs inside a traced block, `span.record_exception(e)` and `span.set_status(Status(StatusCode.ERROR))` ensure full traceback visibility in Application Insights."
  },
  {
    "id": 2919,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "An MLOps team wants to set up an Azure Monitor Alert Rule (#2) that triggers a PagerDuty notification whenever average agent latency exceeds 8,000 ms over a 5-minute window.",
    "question": "Which Azure resource type is evaluated by the metric alert rule?",
    "options": [
      "The Application Insights resource associated with the Azure AI Foundry project workspace.",
      "The Bicep template file `infra/main.bicep`.",
      "The Python script `trail_guide_agent.py`.",
      "The local `.env` configuration file."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Azure Monitor metric alerts evaluate time-series telemetry stored in Azure Application Insights (or Log Analytics), triggering action groups when thresholds are breached."
  },
  {
    "id": 2920,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are debugging a distributed trace tree in `Operate -> Tracing` (#2). The root span is named `trail_guide_v3`, which contains three child spans: `embed_query`, `ai_search_lookup`, and `chat_completion`.",
    "question": "What is this parent-child hierarchical execution graph called in distributed tracing terminology?",
    "options": [
      "A Trace Waterfall (or Trace Directed Acyclic Graph / DAG), where child spans represent sequential or parallel dependency operations within the parent root span.",
      "A Neural Network Backpropagation Tree",
      "A Git Commit History Log",
      "A Bicep Dependency Mesh"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: A distributed trace waterfall displays the chronological parent-child relationships of execution spans, allowing engineers to isolate which exact RAG or inference step caused latency spikes."
  },
  {
    "id": 2921,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/tests/run_monitoring.py` (#3), you need to configure OpenTelemetry (OTel) to automatically export trace spans to Azure Application Insights.",
    "question": "Which two code steps correctly initialize Azure Monitor distributed tracing for Azure AI Foundry?",
    "options": [
      "conn_str = project_client.telemetry.get_application_insights_connection_string(); configure_azure_monitor(connection_string=conn_str)",
      "import logging; logging.basicConfig(filename='app.log')",
      "app_insights = AzureLogClient(api_key='secret'); app_insights.start()",
      "os.environ['ENABLE_TRACING'] = 'true'; sys.stdout = open('trace.txt', 'w')"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Native Azure AI Foundry tracing requires retrieving the connection string via `project_client.telemetry.get_application_insights_connection_string()` and passing it to `configure_azure_monitor()`."
  },
  {
    "id": 2922,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You want to create a custom OpenTelemetry span in `trail_guide_agent.py` (#3) to measure the exact execution duration of a RAG vector database lookup.",
    "question": "Which OTel Python SDK syntax correctly wraps the function execution in a custom child span?",
    "options": [
      "from opentelemetry import trace; tracer = trace.get_tracer(__name__); with tracer.start_as_current_span('rag_vector_lookup') as span: span.set_attribute('index_name', 'trails_idx')",
      "with azure.monitor.start_timer('rag_lookup'): pass",
      "span = ApplicationInsights.create_span('rag_lookup'); span.stop()",
      "@log_latency(table='AppDependencies')"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In OpenTelemetry, custom tracing spans are created using `with tracer.start_as_current_span('span_name') as span:`, where custom metadata is logged via `span.set_attribute()`."
  },
  {
    "id": 2923,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "After executing `interact_with_agent.py` (#3), you immediately open the Azure AI Foundry portal under `Operate -> Tracing`. You do not see your latest trace spans.",
    "question": "What is the operational explanation for this missing data, and how can you verify traces immediately?",
    "options": [
      "The Foundry web portal has a ~5 to 10 minute indexing lag. To verify immediately without waiting, query the `AppDependencies` table in Azure Log Analytics using Kusto Query Language (KQL).",
      "OpenTelemetry tracing is disabled by default in Python SDK v2; you must rebuild `.venv`.",
      "Application Insights drops 99% of spans due to sampling rules.",
      "Traces are stored in Azure Key Vault and must be decrypted first."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: The web portal UI exhibits a 5-10 minute indexing delay. For real-time debugging during MLOps CI/CD pipelines, engineers query the Log Analytics `AppDependencies` table directly via KQL."
  },
  {
    "id": 2924,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are writing a Kusto Query Language (KQL) script in Log Analytics (#3) to find all failed Azure OpenAI completion calls where latency exceeded 5,000 ms.",
    "question": "Which KQL query correctly filters the `AppDependencies` table?",
    "options": [
      "AppDependencies | where Target contains 'openai' and DurationMs > 5000 | project TimeGenerated, Name, DurationMs, ResultCode, Data",
      "Select * from Traces where service='openai' and latency > 5000",
      "AppEvents | filter type == 'LLM' and time > 5s",
      "AzureMetrics | where MetricName == 'OpenAI_Latency' and Average > 5000"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In Azure Monitor Log Analytics, OpenTelemetry outbound calls (including Azure OpenAI inference) are recorded in the `AppDependencies` table, where duration is stored in `DurationMs`."
  },
  {
    "id": 2925,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/tests/check_traces.py` (#3), you need to programmatically query Log Analytics workspace logs using Python `azure-monitor-query` SDK.",
    "question": "Which client class and method execute KQL queries against a Log Analytics workspace?",
    "options": [
      "client = LogsQueryClient(DefaultAzureCredential()); response = client.query_workspace(workspace_id=..., query=kql_query, timespan=timedelta(days=1))",
      "client = AppInsightsClient(); response = client.get_traces(query=kql_query)",
      "client = AIProjectClient(); response = client.telemetry.run_kql(kql_query)",
      "client = LogAnalyticsWorkspace(); response = client.execute_sql(query)"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: The `azure-monitor-query` Python package provides `LogsQueryClient.query_workspace(workspace_id, query, timespan)` for programmatic KQL execution."
  },
  {
    "id": 2926,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "When inspecting trace spans for Trail Guide Agent (#3), you observe that prompt token attributes (`gen_ai.usage.input_tokens`) are 4,500 tokens per request.",
    "question": "Which semantic convention prefix is used by OpenTelemetry in Azure AI Foundry to record LLM token counts and model names?",
    "options": [
      "`gen_ai.*` (e.g., `gen_ai.usage.input_tokens`, `gen_ai.usage.output_tokens`, `gen_ai.system`)",
      "`openai.tokens.*`",
      "`azure.cognitive.*`",
      "`llm.metrics.*`"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Azure AI Foundry adopts OpenTelemetry semantic conventions for Generative AI, prefixing span attributes with `gen_ai.*` (e.g., `gen_ai.usage.input_tokens`)."
  },
  {
    "id": 2927,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are analyzing the latency vs cost trade-off between prompt iterations in `docs/LAB_04_MONITORING_AND_TRACING_REPORT.md` (#3).",
    "question": "Why did switching from `v3_verbose.txt` to `v4_optimized_concise.txt` reduce average latency from ~11,000 ms to ~4,000 ms?",
    "options": [
      "Concise prompts reduce both input token processing overhead and output completion length, directly decreasing autoregressive token generation time (TTLB).",
      "Concise prompts automatically switch the model from GPT-5.1 to a smaller model.",
      "Verbose prompts cause network packet fragmentation across Azure firewalls.",
      "Application Insights throttles spans that contain more than 1,000 words."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In LLM inference, generation time is dominated by output token decoding (autoregressive generation). Concise prompts (`v4`) instruct models to generate succinct answers, slashing TTLB latency."
  },
  {
    "id": 2928,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/agents/monitoring_agent/error-prompt.py` (#3), you deliberately send a malformed payload to test exception logging.",
    "question": "How does OpenTelemetry record unhandled exceptions in Application Insights trace trees?",
    "options": [
      "The span status is set to `StatusCode.ERROR`, and an `exception` event is recorded on the span containing stack trace and error message.",
      "The entire trace tree is deleted to prevent log corruption.",
      "An email alert is immediately broadcast to all Azure subscription owners.",
      "The span is moved to the `AppExceptions` table and removed from `AppDependencies`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In OpenTelemetry, when an exception occurs inside a traced block, `span.record_exception(e)` and `span.set_status(Status(StatusCode.ERROR))` ensure full traceback visibility in Application Insights."
  },
  {
    "id": 2929,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "An MLOps team wants to set up an Azure Monitor Alert Rule (#3) that triggers a PagerDuty notification whenever average agent latency exceeds 8,000 ms over a 5-minute window.",
    "question": "Which Azure resource type is evaluated by the metric alert rule?",
    "options": [
      "The Application Insights resource associated with the Azure AI Foundry project workspace.",
      "The Bicep template file `infra/main.bicep`.",
      "The Python script `trail_guide_agent.py`.",
      "The local `.env` configuration file."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Azure Monitor metric alerts evaluate time-series telemetry stored in Azure Application Insights (or Log Analytics), triggering action groups when thresholds are breached."
  },
  {
    "id": 2930,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are debugging a distributed trace tree in `Operate -> Tracing` (#3). The root span is named `trail_guide_v3`, which contains three child spans: `embed_query`, `ai_search_lookup`, and `chat_completion`.",
    "question": "What is this parent-child hierarchical execution graph called in distributed tracing terminology?",
    "options": [
      "A Trace Waterfall (or Trace Directed Acyclic Graph / DAG), where child spans represent sequential or parallel dependency operations within the parent root span.",
      "A Neural Network Backpropagation Tree",
      "A Git Commit History Log",
      "A Bicep Dependency Mesh"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: A distributed trace waterfall displays the chronological parent-child relationships of execution spans, allowing engineers to isolate which exact RAG or inference step caused latency spikes."
  },
  {
    "id": 2931,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/tests/run_monitoring.py` (#4), you need to configure OpenTelemetry (OTel) to automatically export trace spans to Azure Application Insights.",
    "question": "Which two code steps correctly initialize Azure Monitor distributed tracing for Azure AI Foundry?",
    "options": [
      "conn_str = project_client.telemetry.get_application_insights_connection_string(); configure_azure_monitor(connection_string=conn_str)",
      "import logging; logging.basicConfig(filename='app.log')",
      "app_insights = AzureLogClient(api_key='secret'); app_insights.start()",
      "os.environ['ENABLE_TRACING'] = 'true'; sys.stdout = open('trace.txt', 'w')"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Native Azure AI Foundry tracing requires retrieving the connection string via `project_client.telemetry.get_application_insights_connection_string()` and passing it to `configure_azure_monitor()`."
  },
  {
    "id": 2932,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You want to create a custom OpenTelemetry span in `trail_guide_agent.py` (#4) to measure the exact execution duration of a RAG vector database lookup.",
    "question": "Which OTel Python SDK syntax correctly wraps the function execution in a custom child span?",
    "options": [
      "from opentelemetry import trace; tracer = trace.get_tracer(__name__); with tracer.start_as_current_span('rag_vector_lookup') as span: span.set_attribute('index_name', 'trails_idx')",
      "with azure.monitor.start_timer('rag_lookup'): pass",
      "span = ApplicationInsights.create_span('rag_lookup'); span.stop()",
      "@log_latency(table='AppDependencies')"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In OpenTelemetry, custom tracing spans are created using `with tracer.start_as_current_span('span_name') as span:`, where custom metadata is logged via `span.set_attribute()`."
  },
  {
    "id": 2933,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "After executing `interact_with_agent.py` (#4), you immediately open the Azure AI Foundry portal under `Operate -> Tracing`. You do not see your latest trace spans.",
    "question": "What is the operational explanation for this missing data, and how can you verify traces immediately?",
    "options": [
      "The Foundry web portal has a ~5 to 10 minute indexing lag. To verify immediately without waiting, query the `AppDependencies` table in Azure Log Analytics using Kusto Query Language (KQL).",
      "OpenTelemetry tracing is disabled by default in Python SDK v2; you must rebuild `.venv`.",
      "Application Insights drops 99% of spans due to sampling rules.",
      "Traces are stored in Azure Key Vault and must be decrypted first."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: The web portal UI exhibits a 5-10 minute indexing delay. For real-time debugging during MLOps CI/CD pipelines, engineers query the Log Analytics `AppDependencies` table directly via KQL."
  },
  {
    "id": 2934,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are writing a Kusto Query Language (KQL) script in Log Analytics (#4) to find all failed Azure OpenAI completion calls where latency exceeded 5,000 ms.",
    "question": "Which KQL query correctly filters the `AppDependencies` table?",
    "options": [
      "AppDependencies | where Target contains 'openai' and DurationMs > 5000 | project TimeGenerated, Name, DurationMs, ResultCode, Data",
      "Select * from Traces where service='openai' and latency > 5000",
      "AppEvents | filter type == 'LLM' and time > 5s",
      "AzureMetrics | where MetricName == 'OpenAI_Latency' and Average > 5000"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In Azure Monitor Log Analytics, OpenTelemetry outbound calls (including Azure OpenAI inference) are recorded in the `AppDependencies` table, where duration is stored in `DurationMs`."
  },
  {
    "id": 2935,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/tests/check_traces.py` (#4), you need to programmatically query Log Analytics workspace logs using Python `azure-monitor-query` SDK.",
    "question": "Which client class and method execute KQL queries against a Log Analytics workspace?",
    "options": [
      "client = LogsQueryClient(DefaultAzureCredential()); response = client.query_workspace(workspace_id=..., query=kql_query, timespan=timedelta(days=1))",
      "client = AppInsightsClient(); response = client.get_traces(query=kql_query)",
      "client = AIProjectClient(); response = client.telemetry.run_kql(kql_query)",
      "client = LogAnalyticsWorkspace(); response = client.execute_sql(query)"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: The `azure-monitor-query` Python package provides `LogsQueryClient.query_workspace(workspace_id, query, timespan)` for programmatic KQL execution."
  },
  {
    "id": 2936,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "When inspecting trace spans for Trail Guide Agent (#4), you observe that prompt token attributes (`gen_ai.usage.input_tokens`) are 4,500 tokens per request.",
    "question": "Which semantic convention prefix is used by OpenTelemetry in Azure AI Foundry to record LLM token counts and model names?",
    "options": [
      "`gen_ai.*` (e.g., `gen_ai.usage.input_tokens`, `gen_ai.usage.output_tokens`, `gen_ai.system`)",
      "`openai.tokens.*`",
      "`azure.cognitive.*`",
      "`llm.metrics.*`"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Azure AI Foundry adopts OpenTelemetry semantic conventions for Generative AI, prefixing span attributes with `gen_ai.*` (e.g., `gen_ai.usage.input_tokens`)."
  },
  {
    "id": 2937,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are analyzing the latency vs cost trade-off between prompt iterations in `docs/LAB_04_MONITORING_AND_TRACING_REPORT.md` (#4).",
    "question": "Why did switching from `v3_verbose.txt` to `v4_optimized_concise.txt` reduce average latency from ~11,000 ms to ~4,000 ms?",
    "options": [
      "Concise prompts reduce both input token processing overhead and output completion length, directly decreasing autoregressive token generation time (TTLB).",
      "Concise prompts automatically switch the model from GPT-5.1 to a smaller model.",
      "Verbose prompts cause network packet fragmentation across Azure firewalls.",
      "Application Insights throttles spans that contain more than 1,000 words."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In LLM inference, generation time is dominated by output token decoding (autoregressive generation). Concise prompts (`v4`) instruct models to generate succinct answers, slashing TTLB latency."
  },
  {
    "id": 2938,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/agents/monitoring_agent/error-prompt.py` (#4), you deliberately send a malformed payload to test exception logging.",
    "question": "How does OpenTelemetry record unhandled exceptions in Application Insights trace trees?",
    "options": [
      "The span status is set to `StatusCode.ERROR`, and an `exception` event is recorded on the span containing stack trace and error message.",
      "The entire trace tree is deleted to prevent log corruption.",
      "An email alert is immediately broadcast to all Azure subscription owners.",
      "The span is moved to the `AppExceptions` table and removed from `AppDependencies`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In OpenTelemetry, when an exception occurs inside a traced block, `span.record_exception(e)` and `span.set_status(Status(StatusCode.ERROR))` ensure full traceback visibility in Application Insights."
  },
  {
    "id": 2939,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "An MLOps team wants to set up an Azure Monitor Alert Rule (#4) that triggers a PagerDuty notification whenever average agent latency exceeds 8,000 ms over a 5-minute window.",
    "question": "Which Azure resource type is evaluated by the metric alert rule?",
    "options": [
      "The Application Insights resource associated with the Azure AI Foundry project workspace.",
      "The Bicep template file `infra/main.bicep`.",
      "The Python script `trail_guide_agent.py`.",
      "The local `.env` configuration file."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Azure Monitor metric alerts evaluate time-series telemetry stored in Azure Application Insights (or Log Analytics), triggering action groups when thresholds are breached."
  },
  {
    "id": 2940,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are debugging a distributed trace tree in `Operate -> Tracing` (#4). The root span is named `trail_guide_v3`, which contains three child spans: `embed_query`, `ai_search_lookup`, and `chat_completion`.",
    "question": "What is this parent-child hierarchical execution graph called in distributed tracing terminology?",
    "options": [
      "A Trace Waterfall (or Trace Directed Acyclic Graph / DAG), where child spans represent sequential or parallel dependency operations within the parent root span.",
      "A Neural Network Backpropagation Tree",
      "A Git Commit History Log",
      "A Bicep Dependency Mesh"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: A distributed trace waterfall displays the chronological parent-child relationships of execution spans, allowing engineers to isolate which exact RAG or inference step caused latency spikes."
  },
  {
    "id": 2941,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/tests/run_monitoring.py` (#5), you need to configure OpenTelemetry (OTel) to automatically export trace spans to Azure Application Insights.",
    "question": "Which two code steps correctly initialize Azure Monitor distributed tracing for Azure AI Foundry?",
    "options": [
      "conn_str = project_client.telemetry.get_application_insights_connection_string(); configure_azure_monitor(connection_string=conn_str)",
      "import logging; logging.basicConfig(filename='app.log')",
      "app_insights = AzureLogClient(api_key='secret'); app_insights.start()",
      "os.environ['ENABLE_TRACING'] = 'true'; sys.stdout = open('trace.txt', 'w')"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Native Azure AI Foundry tracing requires retrieving the connection string via `project_client.telemetry.get_application_insights_connection_string()` and passing it to `configure_azure_monitor()`."
  },
  {
    "id": 2942,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You want to create a custom OpenTelemetry span in `trail_guide_agent.py` (#5) to measure the exact execution duration of a RAG vector database lookup.",
    "question": "Which OTel Python SDK syntax correctly wraps the function execution in a custom child span?",
    "options": [
      "from opentelemetry import trace; tracer = trace.get_tracer(__name__); with tracer.start_as_current_span('rag_vector_lookup') as span: span.set_attribute('index_name', 'trails_idx')",
      "with azure.monitor.start_timer('rag_lookup'): pass",
      "span = ApplicationInsights.create_span('rag_lookup'); span.stop()",
      "@log_latency(table='AppDependencies')"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In OpenTelemetry, custom tracing spans are created using `with tracer.start_as_current_span('span_name') as span:`, where custom metadata is logged via `span.set_attribute()`."
  },
  {
    "id": 2943,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "After executing `interact_with_agent.py` (#5), you immediately open the Azure AI Foundry portal under `Operate -> Tracing`. You do not see your latest trace spans.",
    "question": "What is the operational explanation for this missing data, and how can you verify traces immediately?",
    "options": [
      "The Foundry web portal has a ~5 to 10 minute indexing lag. To verify immediately without waiting, query the `AppDependencies` table in Azure Log Analytics using Kusto Query Language (KQL).",
      "OpenTelemetry tracing is disabled by default in Python SDK v2; you must rebuild `.venv`.",
      "Application Insights drops 99% of spans due to sampling rules.",
      "Traces are stored in Azure Key Vault and must be decrypted first."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: The web portal UI exhibits a 5-10 minute indexing delay. For real-time debugging during MLOps CI/CD pipelines, engineers query the Log Analytics `AppDependencies` table directly via KQL."
  },
  {
    "id": 2944,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are writing a Kusto Query Language (KQL) script in Log Analytics (#5) to find all failed Azure OpenAI completion calls where latency exceeded 5,000 ms.",
    "question": "Which KQL query correctly filters the `AppDependencies` table?",
    "options": [
      "AppDependencies | where Target contains 'openai' and DurationMs > 5000 | project TimeGenerated, Name, DurationMs, ResultCode, Data",
      "Select * from Traces where service='openai' and latency > 5000",
      "AppEvents | filter type == 'LLM' and time > 5s",
      "AzureMetrics | where MetricName == 'OpenAI_Latency' and Average > 5000"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In Azure Monitor Log Analytics, OpenTelemetry outbound calls (including Azure OpenAI inference) are recorded in the `AppDependencies` table, where duration is stored in `DurationMs`."
  },
  {
    "id": 2945,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/tests/check_traces.py` (#5), you need to programmatically query Log Analytics workspace logs using Python `azure-monitor-query` SDK.",
    "question": "Which client class and method execute KQL queries against a Log Analytics workspace?",
    "options": [
      "client = LogsQueryClient(DefaultAzureCredential()); response = client.query_workspace(workspace_id=..., query=kql_query, timespan=timedelta(days=1))",
      "client = AppInsightsClient(); response = client.get_traces(query=kql_query)",
      "client = AIProjectClient(); response = client.telemetry.run_kql(kql_query)",
      "client = LogAnalyticsWorkspace(); response = client.execute_sql(query)"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: The `azure-monitor-query` Python package provides `LogsQueryClient.query_workspace(workspace_id, query, timespan)` for programmatic KQL execution."
  },
  {
    "id": 2946,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "When inspecting trace spans for Trail Guide Agent (#5), you observe that prompt token attributes (`gen_ai.usage.input_tokens`) are 4,500 tokens per request.",
    "question": "Which semantic convention prefix is used by OpenTelemetry in Azure AI Foundry to record LLM token counts and model names?",
    "options": [
      "`gen_ai.*` (e.g., `gen_ai.usage.input_tokens`, `gen_ai.usage.output_tokens`, `gen_ai.system`)",
      "`openai.tokens.*`",
      "`azure.cognitive.*`",
      "`llm.metrics.*`"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Azure AI Foundry adopts OpenTelemetry semantic conventions for Generative AI, prefixing span attributes with `gen_ai.*` (e.g., `gen_ai.usage.input_tokens`)."
  },
  {
    "id": 2947,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are analyzing the latency vs cost trade-off between prompt iterations in `docs/LAB_04_MONITORING_AND_TRACING_REPORT.md` (#5).",
    "question": "Why did switching from `v3_verbose.txt` to `v4_optimized_concise.txt` reduce average latency from ~11,000 ms to ~4,000 ms?",
    "options": [
      "Concise prompts reduce both input token processing overhead and output completion length, directly decreasing autoregressive token generation time (TTLB).",
      "Concise prompts automatically switch the model from GPT-5.1 to a smaller model.",
      "Verbose prompts cause network packet fragmentation across Azure firewalls.",
      "Application Insights throttles spans that contain more than 1,000 words."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In LLM inference, generation time is dominated by output token decoding (autoregressive generation). Concise prompts (`v4`) instruct models to generate succinct answers, slashing TTLB latency."
  },
  {
    "id": 2948,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/agents/monitoring_agent/error-prompt.py` (#5), you deliberately send a malformed payload to test exception logging.",
    "question": "How does OpenTelemetry record unhandled exceptions in Application Insights trace trees?",
    "options": [
      "The span status is set to `StatusCode.ERROR`, and an `exception` event is recorded on the span containing stack trace and error message.",
      "The entire trace tree is deleted to prevent log corruption.",
      "An email alert is immediately broadcast to all Azure subscription owners.",
      "The span is moved to the `AppExceptions` table and removed from `AppDependencies`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In OpenTelemetry, when an exception occurs inside a traced block, `span.record_exception(e)` and `span.set_status(Status(StatusCode.ERROR))` ensure full traceback visibility in Application Insights."
  },
  {
    "id": 2949,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "An MLOps team wants to set up an Azure Monitor Alert Rule (#5) that triggers a PagerDuty notification whenever average agent latency exceeds 8,000 ms over a 5-minute window.",
    "question": "Which Azure resource type is evaluated by the metric alert rule?",
    "options": [
      "The Application Insights resource associated with the Azure AI Foundry project workspace.",
      "The Bicep template file `infra/main.bicep`.",
      "The Python script `trail_guide_agent.py`.",
      "The local `.env` configuration file."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Azure Monitor metric alerts evaluate time-series telemetry stored in Azure Application Insights (or Log Analytics), triggering action groups when thresholds are breached."
  },
  {
    "id": 2950,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are debugging a distributed trace tree in `Operate -> Tracing` (#5). The root span is named `trail_guide_v3`, which contains three child spans: `embed_query`, `ai_search_lookup`, and `chat_completion`.",
    "question": "What is this parent-child hierarchical execution graph called in distributed tracing terminology?",
    "options": [
      "A Trace Waterfall (or Trace Directed Acyclic Graph / DAG), where child spans represent sequential or parallel dependency operations within the parent root span.",
      "A Neural Network Backpropagation Tree",
      "A Git Commit History Log",
      "A Bicep Dependency Mesh"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: A distributed trace waterfall displays the chronological parent-child relationships of execution spans, allowing engineers to isolate which exact RAG or inference step caused latency spikes."
  },
  {
    "id": 2951,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/tests/run_monitoring.py` (#6), you need to configure OpenTelemetry (OTel) to automatically export trace spans to Azure Application Insights.",
    "question": "Which two code steps correctly initialize Azure Monitor distributed tracing for Azure AI Foundry?",
    "options": [
      "conn_str = project_client.telemetry.get_application_insights_connection_string(); configure_azure_monitor(connection_string=conn_str)",
      "import logging; logging.basicConfig(filename='app.log')",
      "app_insights = AzureLogClient(api_key='secret'); app_insights.start()",
      "os.environ['ENABLE_TRACING'] = 'true'; sys.stdout = open('trace.txt', 'w')"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Native Azure AI Foundry tracing requires retrieving the connection string via `project_client.telemetry.get_application_insights_connection_string()` and passing it to `configure_azure_monitor()`."
  },
  {
    "id": 2952,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You want to create a custom OpenTelemetry span in `trail_guide_agent.py` (#6) to measure the exact execution duration of a RAG vector database lookup.",
    "question": "Which OTel Python SDK syntax correctly wraps the function execution in a custom child span?",
    "options": [
      "from opentelemetry import trace; tracer = trace.get_tracer(__name__); with tracer.start_as_current_span('rag_vector_lookup') as span: span.set_attribute('index_name', 'trails_idx')",
      "with azure.monitor.start_timer('rag_lookup'): pass",
      "span = ApplicationInsights.create_span('rag_lookup'); span.stop()",
      "@log_latency(table='AppDependencies')"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In OpenTelemetry, custom tracing spans are created using `with tracer.start_as_current_span('span_name') as span:`, where custom metadata is logged via `span.set_attribute()`."
  },
  {
    "id": 2953,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "After executing `interact_with_agent.py` (#6), you immediately open the Azure AI Foundry portal under `Operate -> Tracing`. You do not see your latest trace spans.",
    "question": "What is the operational explanation for this missing data, and how can you verify traces immediately?",
    "options": [
      "The Foundry web portal has a ~5 to 10 minute indexing lag. To verify immediately without waiting, query the `AppDependencies` table in Azure Log Analytics using Kusto Query Language (KQL).",
      "OpenTelemetry tracing is disabled by default in Python SDK v2; you must rebuild `.venv`.",
      "Application Insights drops 99% of spans due to sampling rules.",
      "Traces are stored in Azure Key Vault and must be decrypted first."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: The web portal UI exhibits a 5-10 minute indexing delay. For real-time debugging during MLOps CI/CD pipelines, engineers query the Log Analytics `AppDependencies` table directly via KQL."
  },
  {
    "id": 2954,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are writing a Kusto Query Language (KQL) script in Log Analytics (#6) to find all failed Azure OpenAI completion calls where latency exceeded 5,000 ms.",
    "question": "Which KQL query correctly filters the `AppDependencies` table?",
    "options": [
      "AppDependencies | where Target contains 'openai' and DurationMs > 5000 | project TimeGenerated, Name, DurationMs, ResultCode, Data",
      "Select * from Traces where service='openai' and latency > 5000",
      "AppEvents | filter type == 'LLM' and time > 5s",
      "AzureMetrics | where MetricName == 'OpenAI_Latency' and Average > 5000"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In Azure Monitor Log Analytics, OpenTelemetry outbound calls (including Azure OpenAI inference) are recorded in the `AppDependencies` table, where duration is stored in `DurationMs`."
  },
  {
    "id": 2955,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/tests/check_traces.py` (#6), you need to programmatically query Log Analytics workspace logs using Python `azure-monitor-query` SDK.",
    "question": "Which client class and method execute KQL queries against a Log Analytics workspace?",
    "options": [
      "client = LogsQueryClient(DefaultAzureCredential()); response = client.query_workspace(workspace_id=..., query=kql_query, timespan=timedelta(days=1))",
      "client = AppInsightsClient(); response = client.get_traces(query=kql_query)",
      "client = AIProjectClient(); response = client.telemetry.run_kql(kql_query)",
      "client = LogAnalyticsWorkspace(); response = client.execute_sql(query)"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: The `azure-monitor-query` Python package provides `LogsQueryClient.query_workspace(workspace_id, query, timespan)` for programmatic KQL execution."
  },
  {
    "id": 2956,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "When inspecting trace spans for Trail Guide Agent (#6), you observe that prompt token attributes (`gen_ai.usage.input_tokens`) are 4,500 tokens per request.",
    "question": "Which semantic convention prefix is used by OpenTelemetry in Azure AI Foundry to record LLM token counts and model names?",
    "options": [
      "`gen_ai.*` (e.g., `gen_ai.usage.input_tokens`, `gen_ai.usage.output_tokens`, `gen_ai.system`)",
      "`openai.tokens.*`",
      "`azure.cognitive.*`",
      "`llm.metrics.*`"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Azure AI Foundry adopts OpenTelemetry semantic conventions for Generative AI, prefixing span attributes with `gen_ai.*` (e.g., `gen_ai.usage.input_tokens`)."
  },
  {
    "id": 2957,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are analyzing the latency vs cost trade-off between prompt iterations in `docs/LAB_04_MONITORING_AND_TRACING_REPORT.md` (#6).",
    "question": "Why did switching from `v3_verbose.txt` to `v4_optimized_concise.txt` reduce average latency from ~11,000 ms to ~4,000 ms?",
    "options": [
      "Concise prompts reduce both input token processing overhead and output completion length, directly decreasing autoregressive token generation time (TTLB).",
      "Concise prompts automatically switch the model from GPT-5.1 to a smaller model.",
      "Verbose prompts cause network packet fragmentation across Azure firewalls.",
      "Application Insights throttles spans that contain more than 1,000 words."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In LLM inference, generation time is dominated by output token decoding (autoregressive generation). Concise prompts (`v4`) instruct models to generate succinct answers, slashing TTLB latency."
  },
  {
    "id": 2958,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/agents/monitoring_agent/error-prompt.py` (#6), you deliberately send a malformed payload to test exception logging.",
    "question": "How does OpenTelemetry record unhandled exceptions in Application Insights trace trees?",
    "options": [
      "The span status is set to `StatusCode.ERROR`, and an `exception` event is recorded on the span containing stack trace and error message.",
      "The entire trace tree is deleted to prevent log corruption.",
      "An email alert is immediately broadcast to all Azure subscription owners.",
      "The span is moved to the `AppExceptions` table and removed from `AppDependencies`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In OpenTelemetry, when an exception occurs inside a traced block, `span.record_exception(e)` and `span.set_status(Status(StatusCode.ERROR))` ensure full traceback visibility in Application Insights."
  },
  {
    "id": 2959,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "An MLOps team wants to set up an Azure Monitor Alert Rule (#6) that triggers a PagerDuty notification whenever average agent latency exceeds 8,000 ms over a 5-minute window.",
    "question": "Which Azure resource type is evaluated by the metric alert rule?",
    "options": [
      "The Application Insights resource associated with the Azure AI Foundry project workspace.",
      "The Bicep template file `infra/main.bicep`.",
      "The Python script `trail_guide_agent.py`.",
      "The local `.env` configuration file."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Azure Monitor metric alerts evaluate time-series telemetry stored in Azure Application Insights (or Log Analytics), triggering action groups when thresholds are breached."
  },
  {
    "id": 2960,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are debugging a distributed trace tree in `Operate -> Tracing` (#6). The root span is named `trail_guide_v3`, which contains three child spans: `embed_query`, `ai_search_lookup`, and `chat_completion`.",
    "question": "What is this parent-child hierarchical execution graph called in distributed tracing terminology?",
    "options": [
      "A Trace Waterfall (or Trace Directed Acyclic Graph / DAG), where child spans represent sequential or parallel dependency operations within the parent root span.",
      "A Neural Network Backpropagation Tree",
      "A Git Commit History Log",
      "A Bicep Dependency Mesh"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: A distributed trace waterfall displays the chronological parent-child relationships of execution spans, allowing engineers to isolate which exact RAG or inference step caused latency spikes."
  },
  {
    "id": 2961,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/tests/run_monitoring.py` (#7), you need to configure OpenTelemetry (OTel) to automatically export trace spans to Azure Application Insights.",
    "question": "Which two code steps correctly initialize Azure Monitor distributed tracing for Azure AI Foundry?",
    "options": [
      "conn_str = project_client.telemetry.get_application_insights_connection_string(); configure_azure_monitor(connection_string=conn_str)",
      "import logging; logging.basicConfig(filename='app.log')",
      "app_insights = AzureLogClient(api_key='secret'); app_insights.start()",
      "os.environ['ENABLE_TRACING'] = 'true'; sys.stdout = open('trace.txt', 'w')"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Native Azure AI Foundry tracing requires retrieving the connection string via `project_client.telemetry.get_application_insights_connection_string()` and passing it to `configure_azure_monitor()`."
  },
  {
    "id": 2962,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You want to create a custom OpenTelemetry span in `trail_guide_agent.py` (#7) to measure the exact execution duration of a RAG vector database lookup.",
    "question": "Which OTel Python SDK syntax correctly wraps the function execution in a custom child span?",
    "options": [
      "from opentelemetry import trace; tracer = trace.get_tracer(__name__); with tracer.start_as_current_span('rag_vector_lookup') as span: span.set_attribute('index_name', 'trails_idx')",
      "with azure.monitor.start_timer('rag_lookup'): pass",
      "span = ApplicationInsights.create_span('rag_lookup'); span.stop()",
      "@log_latency(table='AppDependencies')"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In OpenTelemetry, custom tracing spans are created using `with tracer.start_as_current_span('span_name') as span:`, where custom metadata is logged via `span.set_attribute()`."
  },
  {
    "id": 2963,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "After executing `interact_with_agent.py` (#7), you immediately open the Azure AI Foundry portal under `Operate -> Tracing`. You do not see your latest trace spans.",
    "question": "What is the operational explanation for this missing data, and how can you verify traces immediately?",
    "options": [
      "The Foundry web portal has a ~5 to 10 minute indexing lag. To verify immediately without waiting, query the `AppDependencies` table in Azure Log Analytics using Kusto Query Language (KQL).",
      "OpenTelemetry tracing is disabled by default in Python SDK v2; you must rebuild `.venv`.",
      "Application Insights drops 99% of spans due to sampling rules.",
      "Traces are stored in Azure Key Vault and must be decrypted first."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: The web portal UI exhibits a 5-10 minute indexing delay. For real-time debugging during MLOps CI/CD pipelines, engineers query the Log Analytics `AppDependencies` table directly via KQL."
  },
  {
    "id": 2964,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are writing a Kusto Query Language (KQL) script in Log Analytics (#7) to find all failed Azure OpenAI completion calls where latency exceeded 5,000 ms.",
    "question": "Which KQL query correctly filters the `AppDependencies` table?",
    "options": [
      "AppDependencies | where Target contains 'openai' and DurationMs > 5000 | project TimeGenerated, Name, DurationMs, ResultCode, Data",
      "Select * from Traces where service='openai' and latency > 5000",
      "AppEvents | filter type == 'LLM' and time > 5s",
      "AzureMetrics | where MetricName == 'OpenAI_Latency' and Average > 5000"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In Azure Monitor Log Analytics, OpenTelemetry outbound calls (including Azure OpenAI inference) are recorded in the `AppDependencies` table, where duration is stored in `DurationMs`."
  },
  {
    "id": 2965,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/tests/check_traces.py` (#7), you need to programmatically query Log Analytics workspace logs using Python `azure-monitor-query` SDK.",
    "question": "Which client class and method execute KQL queries against a Log Analytics workspace?",
    "options": [
      "client = LogsQueryClient(DefaultAzureCredential()); response = client.query_workspace(workspace_id=..., query=kql_query, timespan=timedelta(days=1))",
      "client = AppInsightsClient(); response = client.get_traces(query=kql_query)",
      "client = AIProjectClient(); response = client.telemetry.run_kql(kql_query)",
      "client = LogAnalyticsWorkspace(); response = client.execute_sql(query)"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: The `azure-monitor-query` Python package provides `LogsQueryClient.query_workspace(workspace_id, query, timespan)` for programmatic KQL execution."
  },
  {
    "id": 2966,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "When inspecting trace spans for Trail Guide Agent (#7), you observe that prompt token attributes (`gen_ai.usage.input_tokens`) are 4,500 tokens per request.",
    "question": "Which semantic convention prefix is used by OpenTelemetry in Azure AI Foundry to record LLM token counts and model names?",
    "options": [
      "`gen_ai.*` (e.g., `gen_ai.usage.input_tokens`, `gen_ai.usage.output_tokens`, `gen_ai.system`)",
      "`openai.tokens.*`",
      "`azure.cognitive.*`",
      "`llm.metrics.*`"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Azure AI Foundry adopts OpenTelemetry semantic conventions for Generative AI, prefixing span attributes with `gen_ai.*` (e.g., `gen_ai.usage.input_tokens`)."
  },
  {
    "id": 2967,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are analyzing the latency vs cost trade-off between prompt iterations in `docs/LAB_04_MONITORING_AND_TRACING_REPORT.md` (#7).",
    "question": "Why did switching from `v3_verbose.txt` to `v4_optimized_concise.txt` reduce average latency from ~11,000 ms to ~4,000 ms?",
    "options": [
      "Concise prompts reduce both input token processing overhead and output completion length, directly decreasing autoregressive token generation time (TTLB).",
      "Concise prompts automatically switch the model from GPT-5.1 to a smaller model.",
      "Verbose prompts cause network packet fragmentation across Azure firewalls.",
      "Application Insights throttles spans that contain more than 1,000 words."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In LLM inference, generation time is dominated by output token decoding (autoregressive generation). Concise prompts (`v4`) instruct models to generate succinct answers, slashing TTLB latency."
  },
  {
    "id": 2968,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/agents/monitoring_agent/error-prompt.py` (#7), you deliberately send a malformed payload to test exception logging.",
    "question": "How does OpenTelemetry record unhandled exceptions in Application Insights trace trees?",
    "options": [
      "The span status is set to `StatusCode.ERROR`, and an `exception` event is recorded on the span containing stack trace and error message.",
      "The entire trace tree is deleted to prevent log corruption.",
      "An email alert is immediately broadcast to all Azure subscription owners.",
      "The span is moved to the `AppExceptions` table and removed from `AppDependencies`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In OpenTelemetry, when an exception occurs inside a traced block, `span.record_exception(e)` and `span.set_status(Status(StatusCode.ERROR))` ensure full traceback visibility in Application Insights."
  },
  {
    "id": 2969,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "An MLOps team wants to set up an Azure Monitor Alert Rule (#7) that triggers a PagerDuty notification whenever average agent latency exceeds 8,000 ms over a 5-minute window.",
    "question": "Which Azure resource type is evaluated by the metric alert rule?",
    "options": [
      "The Application Insights resource associated with the Azure AI Foundry project workspace.",
      "The Bicep template file `infra/main.bicep`.",
      "The Python script `trail_guide_agent.py`.",
      "The local `.env` configuration file."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Azure Monitor metric alerts evaluate time-series telemetry stored in Azure Application Insights (or Log Analytics), triggering action groups when thresholds are breached."
  },
  {
    "id": 2970,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are debugging a distributed trace tree in `Operate -> Tracing` (#7). The root span is named `trail_guide_v3`, which contains three child spans: `embed_query`, `ai_search_lookup`, and `chat_completion`.",
    "question": "What is this parent-child hierarchical execution graph called in distributed tracing terminology?",
    "options": [
      "A Trace Waterfall (or Trace Directed Acyclic Graph / DAG), where child spans represent sequential or parallel dependency operations within the parent root span.",
      "A Neural Network Backpropagation Tree",
      "A Git Commit History Log",
      "A Bicep Dependency Mesh"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: A distributed trace waterfall displays the chronological parent-child relationships of execution spans, allowing engineers to isolate which exact RAG or inference step caused latency spikes."
  },
  {
    "id": 2971,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/tests/run_monitoring.py` (#8), you need to configure OpenTelemetry (OTel) to automatically export trace spans to Azure Application Insights.",
    "question": "Which two code steps correctly initialize Azure Monitor distributed tracing for Azure AI Foundry?",
    "options": [
      "conn_str = project_client.telemetry.get_application_insights_connection_string(); configure_azure_monitor(connection_string=conn_str)",
      "import logging; logging.basicConfig(filename='app.log')",
      "app_insights = AzureLogClient(api_key='secret'); app_insights.start()",
      "os.environ['ENABLE_TRACING'] = 'true'; sys.stdout = open('trace.txt', 'w')"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Native Azure AI Foundry tracing requires retrieving the connection string via `project_client.telemetry.get_application_insights_connection_string()` and passing it to `configure_azure_monitor()`."
  },
  {
    "id": 2972,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You want to create a custom OpenTelemetry span in `trail_guide_agent.py` (#8) to measure the exact execution duration of a RAG vector database lookup.",
    "question": "Which OTel Python SDK syntax correctly wraps the function execution in a custom child span?",
    "options": [
      "from opentelemetry import trace; tracer = trace.get_tracer(__name__); with tracer.start_as_current_span('rag_vector_lookup') as span: span.set_attribute('index_name', 'trails_idx')",
      "with azure.monitor.start_timer('rag_lookup'): pass",
      "span = ApplicationInsights.create_span('rag_lookup'); span.stop()",
      "@log_latency(table='AppDependencies')"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In OpenTelemetry, custom tracing spans are created using `with tracer.start_as_current_span('span_name') as span:`, where custom metadata is logged via `span.set_attribute()`."
  },
  {
    "id": 2973,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "After executing `interact_with_agent.py` (#8), you immediately open the Azure AI Foundry portal under `Operate -> Tracing`. You do not see your latest trace spans.",
    "question": "What is the operational explanation for this missing data, and how can you verify traces immediately?",
    "options": [
      "The Foundry web portal has a ~5 to 10 minute indexing lag. To verify immediately without waiting, query the `AppDependencies` table in Azure Log Analytics using Kusto Query Language (KQL).",
      "OpenTelemetry tracing is disabled by default in Python SDK v2; you must rebuild `.venv`.",
      "Application Insights drops 99% of spans due to sampling rules.",
      "Traces are stored in Azure Key Vault and must be decrypted first."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: The web portal UI exhibits a 5-10 minute indexing delay. For real-time debugging during MLOps CI/CD pipelines, engineers query the Log Analytics `AppDependencies` table directly via KQL."
  },
  {
    "id": 2974,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are writing a Kusto Query Language (KQL) script in Log Analytics (#8) to find all failed Azure OpenAI completion calls where latency exceeded 5,000 ms.",
    "question": "Which KQL query correctly filters the `AppDependencies` table?",
    "options": [
      "AppDependencies | where Target contains 'openai' and DurationMs > 5000 | project TimeGenerated, Name, DurationMs, ResultCode, Data",
      "Select * from Traces where service='openai' and latency > 5000",
      "AppEvents | filter type == 'LLM' and time > 5s",
      "AzureMetrics | where MetricName == 'OpenAI_Latency' and Average > 5000"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In Azure Monitor Log Analytics, OpenTelemetry outbound calls (including Azure OpenAI inference) are recorded in the `AppDependencies` table, where duration is stored in `DurationMs`."
  },
  {
    "id": 2975,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/tests/check_traces.py` (#8), you need to programmatically query Log Analytics workspace logs using Python `azure-monitor-query` SDK.",
    "question": "Which client class and method execute KQL queries against a Log Analytics workspace?",
    "options": [
      "client = LogsQueryClient(DefaultAzureCredential()); response = client.query_workspace(workspace_id=..., query=kql_query, timespan=timedelta(days=1))",
      "client = AppInsightsClient(); response = client.get_traces(query=kql_query)",
      "client = AIProjectClient(); response = client.telemetry.run_kql(kql_query)",
      "client = LogAnalyticsWorkspace(); response = client.execute_sql(query)"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: The `azure-monitor-query` Python package provides `LogsQueryClient.query_workspace(workspace_id, query, timespan)` for programmatic KQL execution."
  },
  {
    "id": 2976,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "When inspecting trace spans for Trail Guide Agent (#8), you observe that prompt token attributes (`gen_ai.usage.input_tokens`) are 4,500 tokens per request.",
    "question": "Which semantic convention prefix is used by OpenTelemetry in Azure AI Foundry to record LLM token counts and model names?",
    "options": [
      "`gen_ai.*` (e.g., `gen_ai.usage.input_tokens`, `gen_ai.usage.output_tokens`, `gen_ai.system`)",
      "`openai.tokens.*`",
      "`azure.cognitive.*`",
      "`llm.metrics.*`"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Azure AI Foundry adopts OpenTelemetry semantic conventions for Generative AI, prefixing span attributes with `gen_ai.*` (e.g., `gen_ai.usage.input_tokens`)."
  },
  {
    "id": 2977,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are analyzing the latency vs cost trade-off between prompt iterations in `docs/LAB_04_MONITORING_AND_TRACING_REPORT.md` (#8).",
    "question": "Why did switching from `v3_verbose.txt` to `v4_optimized_concise.txt` reduce average latency from ~11,000 ms to ~4,000 ms?",
    "options": [
      "Concise prompts reduce both input token processing overhead and output completion length, directly decreasing autoregressive token generation time (TTLB).",
      "Concise prompts automatically switch the model from GPT-5.1 to a smaller model.",
      "Verbose prompts cause network packet fragmentation across Azure firewalls.",
      "Application Insights throttles spans that contain more than 1,000 words."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In LLM inference, generation time is dominated by output token decoding (autoregressive generation). Concise prompts (`v4`) instruct models to generate succinct answers, slashing TTLB latency."
  },
  {
    "id": 2978,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/agents/monitoring_agent/error-prompt.py` (#8), you deliberately send a malformed payload to test exception logging.",
    "question": "How does OpenTelemetry record unhandled exceptions in Application Insights trace trees?",
    "options": [
      "The span status is set to `StatusCode.ERROR`, and an `exception` event is recorded on the span containing stack trace and error message.",
      "The entire trace tree is deleted to prevent log corruption.",
      "An email alert is immediately broadcast to all Azure subscription owners.",
      "The span is moved to the `AppExceptions` table and removed from `AppDependencies`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In OpenTelemetry, when an exception occurs inside a traced block, `span.record_exception(e)` and `span.set_status(Status(StatusCode.ERROR))` ensure full traceback visibility in Application Insights."
  },
  {
    "id": 2979,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "An MLOps team wants to set up an Azure Monitor Alert Rule (#8) that triggers a PagerDuty notification whenever average agent latency exceeds 8,000 ms over a 5-minute window.",
    "question": "Which Azure resource type is evaluated by the metric alert rule?",
    "options": [
      "The Application Insights resource associated with the Azure AI Foundry project workspace.",
      "The Bicep template file `infra/main.bicep`.",
      "The Python script `trail_guide_agent.py`.",
      "The local `.env` configuration file."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Azure Monitor metric alerts evaluate time-series telemetry stored in Azure Application Insights (or Log Analytics), triggering action groups when thresholds are breached."
  },
  {
    "id": 2980,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are debugging a distributed trace tree in `Operate -> Tracing` (#8). The root span is named `trail_guide_v3`, which contains three child spans: `embed_query`, `ai_search_lookup`, and `chat_completion`.",
    "question": "What is this parent-child hierarchical execution graph called in distributed tracing terminology?",
    "options": [
      "A Trace Waterfall (or Trace Directed Acyclic Graph / DAG), where child spans represent sequential or parallel dependency operations within the parent root span.",
      "A Neural Network Backpropagation Tree",
      "A Git Commit History Log",
      "A Bicep Dependency Mesh"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: A distributed trace waterfall displays the chronological parent-child relationships of execution spans, allowing engineers to isolate which exact RAG or inference step caused latency spikes."
  },
  {
    "id": 2981,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/tests/run_monitoring.py` (#9), you need to configure OpenTelemetry (OTel) to automatically export trace spans to Azure Application Insights.",
    "question": "Which two code steps correctly initialize Azure Monitor distributed tracing for Azure AI Foundry?",
    "options": [
      "conn_str = project_client.telemetry.get_application_insights_connection_string(); configure_azure_monitor(connection_string=conn_str)",
      "import logging; logging.basicConfig(filename='app.log')",
      "app_insights = AzureLogClient(api_key='secret'); app_insights.start()",
      "os.environ['ENABLE_TRACING'] = 'true'; sys.stdout = open('trace.txt', 'w')"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Native Azure AI Foundry tracing requires retrieving the connection string via `project_client.telemetry.get_application_insights_connection_string()` and passing it to `configure_azure_monitor()`."
  },
  {
    "id": 2982,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You want to create a custom OpenTelemetry span in `trail_guide_agent.py` (#9) to measure the exact execution duration of a RAG vector database lookup.",
    "question": "Which OTel Python SDK syntax correctly wraps the function execution in a custom child span?",
    "options": [
      "from opentelemetry import trace; tracer = trace.get_tracer(__name__); with tracer.start_as_current_span('rag_vector_lookup') as span: span.set_attribute('index_name', 'trails_idx')",
      "with azure.monitor.start_timer('rag_lookup'): pass",
      "span = ApplicationInsights.create_span('rag_lookup'); span.stop()",
      "@log_latency(table='AppDependencies')"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In OpenTelemetry, custom tracing spans are created using `with tracer.start_as_current_span('span_name') as span:`, where custom metadata is logged via `span.set_attribute()`."
  },
  {
    "id": 2983,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "After executing `interact_with_agent.py` (#9), you immediately open the Azure AI Foundry portal under `Operate -> Tracing`. You do not see your latest trace spans.",
    "question": "What is the operational explanation for this missing data, and how can you verify traces immediately?",
    "options": [
      "The Foundry web portal has a ~5 to 10 minute indexing lag. To verify immediately without waiting, query the `AppDependencies` table in Azure Log Analytics using Kusto Query Language (KQL).",
      "OpenTelemetry tracing is disabled by default in Python SDK v2; you must rebuild `.venv`.",
      "Application Insights drops 99% of spans due to sampling rules.",
      "Traces are stored in Azure Key Vault and must be decrypted first."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: The web portal UI exhibits a 5-10 minute indexing delay. For real-time debugging during MLOps CI/CD pipelines, engineers query the Log Analytics `AppDependencies` table directly via KQL."
  },
  {
    "id": 2984,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are writing a Kusto Query Language (KQL) script in Log Analytics (#9) to find all failed Azure OpenAI completion calls where latency exceeded 5,000 ms.",
    "question": "Which KQL query correctly filters the `AppDependencies` table?",
    "options": [
      "AppDependencies | where Target contains 'openai' and DurationMs > 5000 | project TimeGenerated, Name, DurationMs, ResultCode, Data",
      "Select * from Traces where service='openai' and latency > 5000",
      "AppEvents | filter type == 'LLM' and time > 5s",
      "AzureMetrics | where MetricName == 'OpenAI_Latency' and Average > 5000"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In Azure Monitor Log Analytics, OpenTelemetry outbound calls (including Azure OpenAI inference) are recorded in the `AppDependencies` table, where duration is stored in `DurationMs`."
  },
  {
    "id": 2985,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/tests/check_traces.py` (#9), you need to programmatically query Log Analytics workspace logs using Python `azure-monitor-query` SDK.",
    "question": "Which client class and method execute KQL queries against a Log Analytics workspace?",
    "options": [
      "client = LogsQueryClient(DefaultAzureCredential()); response = client.query_workspace(workspace_id=..., query=kql_query, timespan=timedelta(days=1))",
      "client = AppInsightsClient(); response = client.get_traces(query=kql_query)",
      "client = AIProjectClient(); response = client.telemetry.run_kql(kql_query)",
      "client = LogAnalyticsWorkspace(); response = client.execute_sql(query)"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: The `azure-monitor-query` Python package provides `LogsQueryClient.query_workspace(workspace_id, query, timespan)` for programmatic KQL execution."
  },
  {
    "id": 2986,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "When inspecting trace spans for Trail Guide Agent (#9), you observe that prompt token attributes (`gen_ai.usage.input_tokens`) are 4,500 tokens per request.",
    "question": "Which semantic convention prefix is used by OpenTelemetry in Azure AI Foundry to record LLM token counts and model names?",
    "options": [
      "`gen_ai.*` (e.g., `gen_ai.usage.input_tokens`, `gen_ai.usage.output_tokens`, `gen_ai.system`)",
      "`openai.tokens.*`",
      "`azure.cognitive.*`",
      "`llm.metrics.*`"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Azure AI Foundry adopts OpenTelemetry semantic conventions for Generative AI, prefixing span attributes with `gen_ai.*` (e.g., `gen_ai.usage.input_tokens`)."
  },
  {
    "id": 2987,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are analyzing the latency vs cost trade-off between prompt iterations in `docs/LAB_04_MONITORING_AND_TRACING_REPORT.md` (#9).",
    "question": "Why did switching from `v3_verbose.txt` to `v4_optimized_concise.txt` reduce average latency from ~11,000 ms to ~4,000 ms?",
    "options": [
      "Concise prompts reduce both input token processing overhead and output completion length, directly decreasing autoregressive token generation time (TTLB).",
      "Concise prompts automatically switch the model from GPT-5.1 to a smaller model.",
      "Verbose prompts cause network packet fragmentation across Azure firewalls.",
      "Application Insights throttles spans that contain more than 1,000 words."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In LLM inference, generation time is dominated by output token decoding (autoregressive generation). Concise prompts (`v4`) instruct models to generate succinct answers, slashing TTLB latency."
  },
  {
    "id": 2988,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/agents/monitoring_agent/error-prompt.py` (#9), you deliberately send a malformed payload to test exception logging.",
    "question": "How does OpenTelemetry record unhandled exceptions in Application Insights trace trees?",
    "options": [
      "The span status is set to `StatusCode.ERROR`, and an `exception` event is recorded on the span containing stack trace and error message.",
      "The entire trace tree is deleted to prevent log corruption.",
      "An email alert is immediately broadcast to all Azure subscription owners.",
      "The span is moved to the `AppExceptions` table and removed from `AppDependencies`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In OpenTelemetry, when an exception occurs inside a traced block, `span.record_exception(e)` and `span.set_status(Status(StatusCode.ERROR))` ensure full traceback visibility in Application Insights."
  },
  {
    "id": 2989,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "An MLOps team wants to set up an Azure Monitor Alert Rule (#9) that triggers a PagerDuty notification whenever average agent latency exceeds 8,000 ms over a 5-minute window.",
    "question": "Which Azure resource type is evaluated by the metric alert rule?",
    "options": [
      "The Application Insights resource associated with the Azure AI Foundry project workspace.",
      "The Bicep template file `infra/main.bicep`.",
      "The Python script `trail_guide_agent.py`.",
      "The local `.env` configuration file."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Azure Monitor metric alerts evaluate time-series telemetry stored in Azure Application Insights (or Log Analytics), triggering action groups when thresholds are breached."
  },
  {
    "id": 2990,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are debugging a distributed trace tree in `Operate -> Tracing` (#9). The root span is named `trail_guide_v3`, which contains three child spans: `embed_query`, `ai_search_lookup`, and `chat_completion`.",
    "question": "What is this parent-child hierarchical execution graph called in distributed tracing terminology?",
    "options": [
      "A Trace Waterfall (or Trace Directed Acyclic Graph / DAG), where child spans represent sequential or parallel dependency operations within the parent root span.",
      "A Neural Network Backpropagation Tree",
      "A Git Commit History Log",
      "A Bicep Dependency Mesh"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: A distributed trace waterfall displays the chronological parent-child relationships of execution spans, allowing engineers to isolate which exact RAG or inference step caused latency spikes."
  },
  {
    "id": 2991,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/tests/run_monitoring.py` (#10), you need to configure OpenTelemetry (OTel) to automatically export trace spans to Azure Application Insights.",
    "question": "Which two code steps correctly initialize Azure Monitor distributed tracing for Azure AI Foundry?",
    "options": [
      "conn_str = project_client.telemetry.get_application_insights_connection_string(); configure_azure_monitor(connection_string=conn_str)",
      "import logging; logging.basicConfig(filename='app.log')",
      "app_insights = AzureLogClient(api_key='secret'); app_insights.start()",
      "os.environ['ENABLE_TRACING'] = 'true'; sys.stdout = open('trace.txt', 'w')"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Native Azure AI Foundry tracing requires retrieving the connection string via `project_client.telemetry.get_application_insights_connection_string()` and passing it to `configure_azure_monitor()`."
  },
  {
    "id": 2992,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You want to create a custom OpenTelemetry span in `trail_guide_agent.py` (#10) to measure the exact execution duration of a RAG vector database lookup.",
    "question": "Which OTel Python SDK syntax correctly wraps the function execution in a custom child span?",
    "options": [
      "from opentelemetry import trace; tracer = trace.get_tracer(__name__); with tracer.start_as_current_span('rag_vector_lookup') as span: span.set_attribute('index_name', 'trails_idx')",
      "with azure.monitor.start_timer('rag_lookup'): pass",
      "span = ApplicationInsights.create_span('rag_lookup'); span.stop()",
      "@log_latency(table='AppDependencies')"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In OpenTelemetry, custom tracing spans are created using `with tracer.start_as_current_span('span_name') as span:`, where custom metadata is logged via `span.set_attribute()`."
  },
  {
    "id": 2993,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "After executing `interact_with_agent.py` (#10), you immediately open the Azure AI Foundry portal under `Operate -> Tracing`. You do not see your latest trace spans.",
    "question": "What is the operational explanation for this missing data, and how can you verify traces immediately?",
    "options": [
      "The Foundry web portal has a ~5 to 10 minute indexing lag. To verify immediately without waiting, query the `AppDependencies` table in Azure Log Analytics using Kusto Query Language (KQL).",
      "OpenTelemetry tracing is disabled by default in Python SDK v2; you must rebuild `.venv`.",
      "Application Insights drops 99% of spans due to sampling rules.",
      "Traces are stored in Azure Key Vault and must be decrypted first."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: The web portal UI exhibits a 5-10 minute indexing delay. For real-time debugging during MLOps CI/CD pipelines, engineers query the Log Analytics `AppDependencies` table directly via KQL."
  },
  {
    "id": 2994,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are writing a Kusto Query Language (KQL) script in Log Analytics (#10) to find all failed Azure OpenAI completion calls where latency exceeded 5,000 ms.",
    "question": "Which KQL query correctly filters the `AppDependencies` table?",
    "options": [
      "AppDependencies | where Target contains 'openai' and DurationMs > 5000 | project TimeGenerated, Name, DurationMs, ResultCode, Data",
      "Select * from Traces where service='openai' and latency > 5000",
      "AppEvents | filter type == 'LLM' and time > 5s",
      "AzureMetrics | where MetricName == 'OpenAI_Latency' and Average > 5000"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In Azure Monitor Log Analytics, OpenTelemetry outbound calls (including Azure OpenAI inference) are recorded in the `AppDependencies` table, where duration is stored in `DurationMs`."
  },
  {
    "id": 2995,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/tests/check_traces.py` (#10), you need to programmatically query Log Analytics workspace logs using Python `azure-monitor-query` SDK.",
    "question": "Which client class and method execute KQL queries against a Log Analytics workspace?",
    "options": [
      "client = LogsQueryClient(DefaultAzureCredential()); response = client.query_workspace(workspace_id=..., query=kql_query, timespan=timedelta(days=1))",
      "client = AppInsightsClient(); response = client.get_traces(query=kql_query)",
      "client = AIProjectClient(); response = client.telemetry.run_kql(kql_query)",
      "client = LogAnalyticsWorkspace(); response = client.execute_sql(query)"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: The `azure-monitor-query` Python package provides `LogsQueryClient.query_workspace(workspace_id, query, timespan)` for programmatic KQL execution."
  },
  {
    "id": 2996,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "When inspecting trace spans for Trail Guide Agent (#10), you observe that prompt token attributes (`gen_ai.usage.input_tokens`) are 4,500 tokens per request.",
    "question": "Which semantic convention prefix is used by OpenTelemetry in Azure AI Foundry to record LLM token counts and model names?",
    "options": [
      "`gen_ai.*` (e.g., `gen_ai.usage.input_tokens`, `gen_ai.usage.output_tokens`, `gen_ai.system`)",
      "`openai.tokens.*`",
      "`azure.cognitive.*`",
      "`llm.metrics.*`"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Azure AI Foundry adopts OpenTelemetry semantic conventions for Generative AI, prefixing span attributes with `gen_ai.*` (e.g., `gen_ai.usage.input_tokens`)."
  },
  {
    "id": 2997,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are analyzing the latency vs cost trade-off between prompt iterations in `docs/LAB_04_MONITORING_AND_TRACING_REPORT.md` (#10).",
    "question": "Why did switching from `v3_verbose.txt` to `v4_optimized_concise.txt` reduce average latency from ~11,000 ms to ~4,000 ms?",
    "options": [
      "Concise prompts reduce both input token processing overhead and output completion length, directly decreasing autoregressive token generation time (TTLB).",
      "Concise prompts automatically switch the model from GPT-5.1 to a smaller model.",
      "Verbose prompts cause network packet fragmentation across Azure firewalls.",
      "Application Insights throttles spans that contain more than 1,000 words."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In LLM inference, generation time is dominated by output token decoding (autoregressive generation). Concise prompts (`v4`) instruct models to generate succinct answers, slashing TTLB latency."
  },
  {
    "id": 2998,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/agents/monitoring_agent/error-prompt.py` (#10), you deliberately send a malformed payload to test exception logging.",
    "question": "How does OpenTelemetry record unhandled exceptions in Application Insights trace trees?",
    "options": [
      "The span status is set to `StatusCode.ERROR`, and an `exception` event is recorded on the span containing stack trace and error message.",
      "The entire trace tree is deleted to prevent log corruption.",
      "An email alert is immediately broadcast to all Azure subscription owners.",
      "The span is moved to the `AppExceptions` table and removed from `AppDependencies`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In OpenTelemetry, when an exception occurs inside a traced block, `span.record_exception(e)` and `span.set_status(Status(StatusCode.ERROR))` ensure full traceback visibility in Application Insights."
  },
  {
    "id": 2999,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "An MLOps team wants to set up an Azure Monitor Alert Rule (#10) that triggers a PagerDuty notification whenever average agent latency exceeds 8,000 ms over a 5-minute window.",
    "question": "Which Azure resource type is evaluated by the metric alert rule?",
    "options": [
      "The Application Insights resource associated with the Azure AI Foundry project workspace.",
      "The Bicep template file `infra/main.bicep`.",
      "The Python script `trail_guide_agent.py`.",
      "The local `.env` configuration file."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Azure Monitor metric alerts evaluate time-series telemetry stored in Azure Application Insights (or Log Analytics), triggering action groups when thresholds are breached."
  },
  {
    "id": 3000,
    "track": "T4",
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are debugging a distributed trace tree in `Operate -> Tracing` (#10). The root span is named `trail_guide_v3`, which contains three child spans: `embed_query`, `ai_search_lookup`, and `chat_completion`.",
    "question": "What is this parent-child hierarchical execution graph called in distributed tracing terminology?",
    "options": [
      "A Trace Waterfall (or Trace Directed Acyclic Graph / DAG), where child spans represent sequential or parallel dependency operations within the parent root span.",
      "A Neural Network Backpropagation Tree",
      "A Git Commit History Log",
      "A Bicep Dependency Mesh"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: A distributed trace waterfall displays the chronological parent-child relationships of execution spans, allowing engineers to isolate which exact RAG or inference step caused latency spikes."
  }
];
