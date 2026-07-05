import os
import json
import csv
import pathlib
from dotenv import load_dotenv
from azure.identity import DefaultAzureCredential
from azure.ai.projects import AIProjectClient

def download_results():
    print("================================================================================")
    print("Step 1: Connecting to Microsoft Foundry")
    print("================================================================================")
    load_dotenv()
    endpoint = os.environ.get("AZURE_AI_PROJECT_ENDPOINT")
    if not endpoint:
        raise ValueError("AZURE_AI_PROJECT_ENDPOINT not set in .env")

    client = AIProjectClient(endpoint=endpoint, credential=DefaultAzureCredential())
    openai_client = client.get_openai_client()

    eval_id = "eval_f3db4c390ed84d27928ebd17c2ea18b2"
    run_id = "evalrun_ed3abb6f1b9e423883df68b6b5e381a4"

    print(f"✓ Connected! Downloading items for Eval: {eval_id}, Run: {run_id}...")

    print("\n================================================================================")
    print("Step 2: Downloading Evaluation Items from Cloud")
    print("================================================================================")
    items_pager = openai_client.evals.runs.output_items.list(run_id=run_id, eval_id=eval_id)
    items = list(items_pager)
    print(f"✓ Downloaded {len(items)} evaluation output records!")

    # Dump raw data
    dumped_items = []
    for item in items:
        if hasattr(item, "model_dump"):
            dumped_items.append(item.model_dump())
        elif hasattr(item, "__dict__"):
            dumped_items.append({k: str(v) for k, v in item.__dict__.items() if not k.startswith("_")})
        else:
            dumped_items.append(str(item))

    # Save complete JSON
    json_path = pathlib.Path("data/evaluation_detailed_results.json")
    json_path.write_text(json.dumps(dumped_items, indent=2, default=str), encoding="utf-8")
    print(f"✓ Saved complete raw results to: {json_path}")

    # Parse scores and generate CSV / Summary
    scores = {
        "intent_resolution": [],
        "relevance": [],
        "groundedness": []
    }
    
    csv_rows = []
    
    for d in dumped_items:
        if isinstance(d, dict):
            # Extract metrics directly or from nested lists
            outputs = d.get("evaluator_outputs") or d.get("outputs") or [d]
            for out in outputs:
                if isinstance(out, dict):
                    name = out.get("name") or out.get("metric")
                    score = out.get("score")
                    passed = out.get("passed") or (out.get("label") == "pass")
                    reason = out.get("reason") or ""
                    
                    if name in scores and score is not None:
                        try:
                            val = float(score)
                            scores[name].append(val)
                            csv_rows.append({
                                "Evaluator": name,
                                "Score": val,
                                "Passed": passed,
                                "Reason": str(reason).replace("\n", " ")
                            })
                        except (ValueError, TypeError):
                            pass

    # Save CSV
    csv_path = pathlib.Path("data/evaluation_summary_table.csv")
    if csv_rows:
        with open(csv_path, "w", newline="", encoding="utf-8") as f:
            writer = csv.DictWriter(f, fieldnames=["Evaluator", "Score", "Passed", "Reason"])
            writer.writeheader()
            writer.writerows(csv_rows)
        print(f"✓ Saved tabular summary to: {csv_path}")

    # Generate summary text
    print("\n================================================================================")
    print("Step 3: Generating Official Summary Report")
    print("================================================================================")
    lines = [
        "=" * 80,
        " Trail Guide Agent - Evaluation Results",
        "=" * 80,
        f"\n  Eval ID      : {eval_id}",
        f"  Run ID       : {run_id}",
        f"  Total records: {len(dumped_items)}",
        "\nAverage Scores (1-5 scale, threshold: 3)"
    ]
    
    labels = [
        ("intent_resolution", "Intent Resolution"),
        ("relevance", "Relevance        "),
        ("groundedness", "Groundedness     ")
    ]
    
    for key, label in labels:
        vals = scores[key]
        if vals:
            avg = sum(vals) / len(vals)
            lines.append(f"  {label}: {avg:.2f} (n={len(vals)})")
        else:
            lines.append(f"  {label}: N/A (no scores extracted)")
            
    lines.append("\nPass Rates (score >= 3)")
    for key, label in labels:
        vals = scores[key]
        if vals:
            passed = sum(1 for v in vals if v >= 3)
            rate = (passed / len(vals)) * 100
            lines.append(f"  {label}: {rate:.1f}% ({passed}/{len(vals)})")
        else:
            lines.append(f"  {label}: N/A")
            
    summary_text = "\n".join(lines)
    print(summary_text)
    
    res_path = pathlib.Path("evaluation_results.txt")
    res_path.write_text(summary_text, encoding="utf-8")
    print(f"\n✓ Saved official report to: {res_path}")

if __name__ == "__main__":
    download_results()
