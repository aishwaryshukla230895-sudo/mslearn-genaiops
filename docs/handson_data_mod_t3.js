// AI-300 Hands-On Enterprise Implementation Simulator (MOD Tier - Track 3: Automated Evaluation & LLM-as-a-Judge)
window.HANDSON_DATA_MOD_T3 = [
  {
    "id": 2801,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/evaluators/evaluate_agent.py` (#1), you are uploading the 89-item cloud evaluation dataset `data/trail_guide_evaluation_dataset.jsonl` to Azure AI Foundry.",
    "question": "Which SDK method call correctly uploads the local JSONL file to the Foundry project workspace?",
    "options": [
      "dataset = project_client.datasets.upload_file(file_path='data/trail_guide_evaluation_dataset.jsonl', purpose='evaluations')",
      "dataset = project_client.evals.upload_dataset(path='...', format='jsonl')",
      "dataset = project_client.storage.create_blob(container='evals', file='...')",
      "dataset = project_client.data.register_table(name='trail_evals')"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In `azure-ai-projects`, datasets for evaluation are uploaded using `project_client.datasets.upload_file(file_path=..., purpose='evaluations')`."
  },
  {
    "id": 2802,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are defining an LLM-as-a-Judge evaluation run in `evaluate_agent.py` (#1) to score responses on Groundedness, Relevance, and Intent Resolution.",
    "question": "Which built-in classes from `azure.ai.evaluation` represent these three core quality evaluators?",
    "options": [
      "GroundednessEvaluator, RelevanceEvaluator, IntentResolutionEvaluator (or SimilarityEvaluator)",
      "HallucinationChecker, FluffDetector, GoalCompleter",
      "BleuScoreEvaluator, RougeScoreEvaluator, F1ScoreEvaluator",
      "SafetyRiskEvaluator, HateSpeechEvaluator, ViolenceEvaluator"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: `azure.ai.evaluation` provides built-in AI-assisted quality evaluators including `GroundednessEvaluator`, `RelevanceEvaluator`, and `SimilarityEvaluator`/`IntentResolutionEvaluator`."
  },
  {
    "id": 2803,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "When executing `evaluate_agent.py` (#1), you check the Azure AI Foundry web portal under Cluster Analysis. The UI displays: `Total Samples: 1, Passed: 0, Failed: 1`, even though your dataset had 89 items.",
    "question": "Why does Cluster Analysis display only 1 sample instead of 89?",
    "options": [
      "Cluster Analysis is strictly an error-clustering tool; it filters out all passing evaluations (scores >= 3) and only groups failed test items (scores < 3) by root cause.",
      "The dataset upload timed out after processing the first row in JSONL.",
      "You must upgrade your Azure AI Foundry pricing tier to view more than 1 sample.",
      "The LLM Judge model (`gpt-5.1`) encountered a fatal exception on row 2."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: A critical exam concept: In Azure AI Foundry, Cluster Analysis is exclusively an error-discovery tool. It hides passing tests and clusters only failed evaluations by semantic root cause."
  },
  {
    "id": 2804,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are writing a custom evaluator in Python for Trail Guide (#1) to verify that responses never recommend closed winter trails.",
    "question": "What is the correct structural signature for a custom evaluator class or function in `azure.ai.evaluation`?",
    "options": [
      "def evaluate(self, *, query: str, response: str, **kwargs) -> dict: return {'safety_score': 5, 'reason': 'No closed trails mentioned'}",
      "def check_trail(prompt, answer): return True",
      "class TrailEval(BaseMetric): def calculate(): pass",
      "def run_eval(item_index): return os.system('check_trail')"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Custom evaluators in `azure.ai.evaluation` must accept keyword-only arguments matching dataset column names (`query`, `response`, `context`) and return a dictionary of metric scores/reasons."
  },
  {
    "id": 2805,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `data/trail_guide_evaluation_dataset.jsonl` (#1), what are the three mandatory column keys required for running `GroundednessEvaluator`?",
    "question": "What is the correct structural signature for a custom evaluator class or function in `azure.ai.evaluation`?",
    "options": [
      "`query` (user question), `response` (agent answer), and `context` (ground truth / retrieved RAG documents)",
      "`prompt`, `completion`, and `tokens`",
      "`input_text`, `output_text`, and `label_id`",
      "`question`, `prediction`, and `bleu_score`"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Evaluating groundedness (hallucination detection) requires comparing the agent's `response` against the authoritative source `context` for a given user `query`."
  },
  {
    "id": 2806,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "During cloud evaluation execution (#1), `client.evals.runs.create()` launches asynchronous cloud workers using GPT-5.1 as the LLM Judge.",
    "question": "How should your script monitor the evaluation run until completion without timing out or causing infinite loops?",
    "options": [
      "Implement a polling loop using `client.evals.runs.retrieve(run_id)` every 10 seconds until `run.status` reaches `'completed'` or `'failed'`.",
      "Execute `time.sleep(3600)` immediately after calling `create()`.",
      "Use a WebSocket callback listener on port 8080.",
      "Call `client.evals.runs.wait_for_completion(timeout=10)`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Cloud evaluation runs are asynchronous. Robust MLOps scripts poll `client.evals.runs.retrieve(run_id)` in a timed loop until status reaches terminal states (`completed`, `failed`, `canceled`)."
  },
  {
    "id": 2807,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `evaluation_results.txt` (#1), you notice that Groundedness score dropped from 4.8 to 2.1 after switching from prompt `v2_structured.txt` to `v3_verbose.txt`.",
    "question": "Why did verbose prompting cause a severe drop in Groundedness score?",
    "options": [
      "Verbose prompting encourages the model to generate extra conversational filler and unverified background lore not present in the RAG RAG context, triggering hallucination penalties by the LLM Judge.",
      "The LLM Judge model ran out of token context window.",
      "Verbose prompts automatically disable Azure AI Content Safety filters.",
      "The evaluation dataset JSONL became corrupted during Git commit."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Groundedness measures strict adherence to provided source context. Verbose prompts (`v3`) instruct models to elaborate extensively, frequently introducing unverified claims (hallucinations)."
  },
  {
    "id": 2808,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You want to evaluate Trail Guide Agent (#1) for potential jailbreak vulnerabilities and adversarial prompt injections using Safety & Risk evaluators.",
    "question": "Which built-in safety evaluators from `azure.ai.evaluation` should be included in the evaluation run?",
    "options": [
      "ViolenceEvaluator, HateUnfairnessEvaluator, SelfHarmEvaluator, and SexualEvaluator (accompanied by IndirectAttackEvaluator)",
      "BleuScoreEvaluator and F1ScoreEvaluator",
      "LatencyEvaluator and TokenCountEvaluator",
      "NetworkSecurityEvaluator and FirewallRuleEvaluator"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Azure AI Foundry provides specialized Safety & Risk evaluators (`Violence`, `HateUnfairness`, `SelfHarm`, `Sexual`, `IndirectAttack`) that output severity levels (Very Low to High)."
  },
  {
    "id": 2809,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "An MLOps engineer executes `evaluate_agent.py` (#1) locally and wants to export item-level evaluation results to a CSV file for team review.",
    "question": "Which property of the evaluation output object contains the per-row Pandas DataFrame or dictionary list?",
    "options": [
      "`eval_result.rows` (or `eval_result['rows']`), which contains item-level metrics and explanations for each dataset row.",
      "`eval_result.summary_only`",
      "`eval_result.metrics_average`",
      "`eval_result.console_logs`"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: When running local evaluations in `azure.ai.evaluation`, the returned object contains `.rows` (item-level results) and `.metrics` (aggregate averages)."
  },
  {
    "id": 2810,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/evaluators/download_eval_results.py` (#1), you need to programmatically fetch the average scores of a completed cloud evaluation run.",
    "question": "Which SDK call retrieves the output metric summary of a cloud run?",
    "options": [
      "metrics = project_client.evals.runs.get_metrics(run_id=eval_run_id)",
      "metrics = os.cat('cloud_results.json')",
      "metrics = project_client.telemetry.get_last_span()",
      "metrics = project_client.models.list_scores()"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In `AIProjectClient`, retrieving aggregate evaluation results from the cloud database is performed via `project_client.evals.runs.get_metrics(run_id)` or inspecting output items."
  },
  {
    "id": 2811,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/evaluators/evaluate_agent.py` (#2), you are uploading the 89-item cloud evaluation dataset `data/trail_guide_evaluation_dataset.jsonl` to Azure AI Foundry.",
    "question": "Which SDK method call correctly uploads the local JSONL file to the Foundry project workspace?",
    "options": [
      "dataset = project_client.datasets.upload_file(file_path='data/trail_guide_evaluation_dataset.jsonl', purpose='evaluations')",
      "dataset = project_client.evals.upload_dataset(path='...', format='jsonl')",
      "dataset = project_client.storage.create_blob(container='evals', file='...')",
      "dataset = project_client.data.register_table(name='trail_evals')"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In `azure-ai-projects`, datasets for evaluation are uploaded using `project_client.datasets.upload_file(file_path=..., purpose='evaluations')`."
  },
  {
    "id": 2812,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are defining an LLM-as-a-Judge evaluation run in `evaluate_agent.py` (#2) to score responses on Groundedness, Relevance, and Intent Resolution.",
    "question": "Which built-in classes from `azure.ai.evaluation` represent these three core quality evaluators?",
    "options": [
      "GroundednessEvaluator, RelevanceEvaluator, IntentResolutionEvaluator (or SimilarityEvaluator)",
      "HallucinationChecker, FluffDetector, GoalCompleter",
      "BleuScoreEvaluator, RougeScoreEvaluator, F1ScoreEvaluator",
      "SafetyRiskEvaluator, HateSpeechEvaluator, ViolenceEvaluator"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: `azure.ai.evaluation` provides built-in AI-assisted quality evaluators including `GroundednessEvaluator`, `RelevanceEvaluator`, and `SimilarityEvaluator`/`IntentResolutionEvaluator`."
  },
  {
    "id": 2813,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "When executing `evaluate_agent.py` (#2), you check the Azure AI Foundry web portal under Cluster Analysis. The UI displays: `Total Samples: 1, Passed: 0, Failed: 1`, even though your dataset had 89 items.",
    "question": "Why does Cluster Analysis display only 1 sample instead of 89?",
    "options": [
      "Cluster Analysis is strictly an error-clustering tool; it filters out all passing evaluations (scores >= 3) and only groups failed test items (scores < 3) by root cause.",
      "The dataset upload timed out after processing the first row in JSONL.",
      "You must upgrade your Azure AI Foundry pricing tier to view more than 1 sample.",
      "The LLM Judge model (`gpt-5.1`) encountered a fatal exception on row 2."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: A critical exam concept: In Azure AI Foundry, Cluster Analysis is exclusively an error-discovery tool. It hides passing tests and clusters only failed evaluations by semantic root cause."
  },
  {
    "id": 2814,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are writing a custom evaluator in Python for Trail Guide (#2) to verify that responses never recommend closed winter trails.",
    "question": "What is the correct structural signature for a custom evaluator class or function in `azure.ai.evaluation`?",
    "options": [
      "def evaluate(self, *, query: str, response: str, **kwargs) -> dict: return {'safety_score': 5, 'reason': 'No closed trails mentioned'}",
      "def check_trail(prompt, answer): return True",
      "class TrailEval(BaseMetric): def calculate(): pass",
      "def run_eval(item_index): return os.system('check_trail')"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Custom evaluators in `azure.ai.evaluation` must accept keyword-only arguments matching dataset column names (`query`, `response`, `context`) and return a dictionary of metric scores/reasons."
  },
  {
    "id": 2815,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `data/trail_guide_evaluation_dataset.jsonl` (#2), what are the three mandatory column keys required for running `GroundednessEvaluator`?",
    "question": "What is the correct structural signature for a custom evaluator class or function in `azure.ai.evaluation`?",
    "options": [
      "`query` (user question), `response` (agent answer), and `context` (ground truth / retrieved RAG documents)",
      "`prompt`, `completion`, and `tokens`",
      "`input_text`, `output_text`, and `label_id`",
      "`question`, `prediction`, and `bleu_score`"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Evaluating groundedness (hallucination detection) requires comparing the agent's `response` against the authoritative source `context` for a given user `query`."
  },
  {
    "id": 2816,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "During cloud evaluation execution (#2), `client.evals.runs.create()` launches asynchronous cloud workers using GPT-5.1 as the LLM Judge.",
    "question": "How should your script monitor the evaluation run until completion without timing out or causing infinite loops?",
    "options": [
      "Implement a polling loop using `client.evals.runs.retrieve(run_id)` every 10 seconds until `run.status` reaches `'completed'` or `'failed'`.",
      "Execute `time.sleep(3600)` immediately after calling `create()`.",
      "Use a WebSocket callback listener on port 8080.",
      "Call `client.evals.runs.wait_for_completion(timeout=10)`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Cloud evaluation runs are asynchronous. Robust MLOps scripts poll `client.evals.runs.retrieve(run_id)` in a timed loop until status reaches terminal states (`completed`, `failed`, `canceled`)."
  },
  {
    "id": 2817,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `evaluation_results.txt` (#2), you notice that Groundedness score dropped from 4.8 to 2.1 after switching from prompt `v2_structured.txt` to `v3_verbose.txt`.",
    "question": "Why did verbose prompting cause a severe drop in Groundedness score?",
    "options": [
      "Verbose prompting encourages the model to generate extra conversational filler and unverified background lore not present in the RAG RAG context, triggering hallucination penalties by the LLM Judge.",
      "The LLM Judge model ran out of token context window.",
      "Verbose prompts automatically disable Azure AI Content Safety filters.",
      "The evaluation dataset JSONL became corrupted during Git commit."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Groundedness measures strict adherence to provided source context. Verbose prompts (`v3`) instruct models to elaborate extensively, frequently introducing unverified claims (hallucinations)."
  },
  {
    "id": 2818,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You want to evaluate Trail Guide Agent (#2) for potential jailbreak vulnerabilities and adversarial prompt injections using Safety & Risk evaluators.",
    "question": "Which built-in safety evaluators from `azure.ai.evaluation` should be included in the evaluation run?",
    "options": [
      "ViolenceEvaluator, HateUnfairnessEvaluator, SelfHarmEvaluator, and SexualEvaluator (accompanied by IndirectAttackEvaluator)",
      "BleuScoreEvaluator and F1ScoreEvaluator",
      "LatencyEvaluator and TokenCountEvaluator",
      "NetworkSecurityEvaluator and FirewallRuleEvaluator"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Azure AI Foundry provides specialized Safety & Risk evaluators (`Violence`, `HateUnfairness`, `SelfHarm`, `Sexual`, `IndirectAttack`) that output severity levels (Very Low to High)."
  },
  {
    "id": 2819,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "An MLOps engineer executes `evaluate_agent.py` (#2) locally and wants to export item-level evaluation results to a CSV file for team review.",
    "question": "Which property of the evaluation output object contains the per-row Pandas DataFrame or dictionary list?",
    "options": [
      "`eval_result.rows` (or `eval_result['rows']`), which contains item-level metrics and explanations for each dataset row.",
      "`eval_result.summary_only`",
      "`eval_result.metrics_average`",
      "`eval_result.console_logs`"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: When running local evaluations in `azure.ai.evaluation`, the returned object contains `.rows` (item-level results) and `.metrics` (aggregate averages)."
  },
  {
    "id": 2820,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/evaluators/download_eval_results.py` (#2), you need to programmatically fetch the average scores of a completed cloud evaluation run.",
    "question": "Which SDK call retrieves the output metric summary of a cloud run?",
    "options": [
      "metrics = project_client.evals.runs.get_metrics(run_id=eval_run_id)",
      "metrics = os.cat('cloud_results.json')",
      "metrics = project_client.telemetry.get_last_span()",
      "metrics = project_client.models.list_scores()"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In `AIProjectClient`, retrieving aggregate evaluation results from the cloud database is performed via `project_client.evals.runs.get_metrics(run_id)` or inspecting output items."
  },
  {
    "id": 2821,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/evaluators/evaluate_agent.py` (#3), you are uploading the 89-item cloud evaluation dataset `data/trail_guide_evaluation_dataset.jsonl` to Azure AI Foundry.",
    "question": "Which SDK method call correctly uploads the local JSONL file to the Foundry project workspace?",
    "options": [
      "dataset = project_client.datasets.upload_file(file_path='data/trail_guide_evaluation_dataset.jsonl', purpose='evaluations')",
      "dataset = project_client.evals.upload_dataset(path='...', format='jsonl')",
      "dataset = project_client.storage.create_blob(container='evals', file='...')",
      "dataset = project_client.data.register_table(name='trail_evals')"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In `azure-ai-projects`, datasets for evaluation are uploaded using `project_client.datasets.upload_file(file_path=..., purpose='evaluations')`."
  },
  {
    "id": 2822,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are defining an LLM-as-a-Judge evaluation run in `evaluate_agent.py` (#3) to score responses on Groundedness, Relevance, and Intent Resolution.",
    "question": "Which built-in classes from `azure.ai.evaluation` represent these three core quality evaluators?",
    "options": [
      "GroundednessEvaluator, RelevanceEvaluator, IntentResolutionEvaluator (or SimilarityEvaluator)",
      "HallucinationChecker, FluffDetector, GoalCompleter",
      "BleuScoreEvaluator, RougeScoreEvaluator, F1ScoreEvaluator",
      "SafetyRiskEvaluator, HateSpeechEvaluator, ViolenceEvaluator"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: `azure.ai.evaluation` provides built-in AI-assisted quality evaluators including `GroundednessEvaluator`, `RelevanceEvaluator`, and `SimilarityEvaluator`/`IntentResolutionEvaluator`."
  },
  {
    "id": 2823,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "When executing `evaluate_agent.py` (#3), you check the Azure AI Foundry web portal under Cluster Analysis. The UI displays: `Total Samples: 1, Passed: 0, Failed: 1`, even though your dataset had 89 items.",
    "question": "Why does Cluster Analysis display only 1 sample instead of 89?",
    "options": [
      "Cluster Analysis is strictly an error-clustering tool; it filters out all passing evaluations (scores >= 3) and only groups failed test items (scores < 3) by root cause.",
      "The dataset upload timed out after processing the first row in JSONL.",
      "You must upgrade your Azure AI Foundry pricing tier to view more than 1 sample.",
      "The LLM Judge model (`gpt-5.1`) encountered a fatal exception on row 2."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: A critical exam concept: In Azure AI Foundry, Cluster Analysis is exclusively an error-discovery tool. It hides passing tests and clusters only failed evaluations by semantic root cause."
  },
  {
    "id": 2824,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are writing a custom evaluator in Python for Trail Guide (#3) to verify that responses never recommend closed winter trails.",
    "question": "What is the correct structural signature for a custom evaluator class or function in `azure.ai.evaluation`?",
    "options": [
      "def evaluate(self, *, query: str, response: str, **kwargs) -> dict: return {'safety_score': 5, 'reason': 'No closed trails mentioned'}",
      "def check_trail(prompt, answer): return True",
      "class TrailEval(BaseMetric): def calculate(): pass",
      "def run_eval(item_index): return os.system('check_trail')"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Custom evaluators in `azure.ai.evaluation` must accept keyword-only arguments matching dataset column names (`query`, `response`, `context`) and return a dictionary of metric scores/reasons."
  },
  {
    "id": 2825,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `data/trail_guide_evaluation_dataset.jsonl` (#3), what are the three mandatory column keys required for running `GroundednessEvaluator`?",
    "question": "What is the correct structural signature for a custom evaluator class or function in `azure.ai.evaluation`?",
    "options": [
      "`query` (user question), `response` (agent answer), and `context` (ground truth / retrieved RAG documents)",
      "`prompt`, `completion`, and `tokens`",
      "`input_text`, `output_text`, and `label_id`",
      "`question`, `prediction`, and `bleu_score`"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Evaluating groundedness (hallucination detection) requires comparing the agent's `response` against the authoritative source `context` for a given user `query`."
  },
  {
    "id": 2826,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "During cloud evaluation execution (#3), `client.evals.runs.create()` launches asynchronous cloud workers using GPT-5.1 as the LLM Judge.",
    "question": "How should your script monitor the evaluation run until completion without timing out or causing infinite loops?",
    "options": [
      "Implement a polling loop using `client.evals.runs.retrieve(run_id)` every 10 seconds until `run.status` reaches `'completed'` or `'failed'`.",
      "Execute `time.sleep(3600)` immediately after calling `create()`.",
      "Use a WebSocket callback listener on port 8080.",
      "Call `client.evals.runs.wait_for_completion(timeout=10)`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Cloud evaluation runs are asynchronous. Robust MLOps scripts poll `client.evals.runs.retrieve(run_id)` in a timed loop until status reaches terminal states (`completed`, `failed`, `canceled`)."
  },
  {
    "id": 2827,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `evaluation_results.txt` (#3), you notice that Groundedness score dropped from 4.8 to 2.1 after switching from prompt `v2_structured.txt` to `v3_verbose.txt`.",
    "question": "Why did verbose prompting cause a severe drop in Groundedness score?",
    "options": [
      "Verbose prompting encourages the model to generate extra conversational filler and unverified background lore not present in the RAG RAG context, triggering hallucination penalties by the LLM Judge.",
      "The LLM Judge model ran out of token context window.",
      "Verbose prompts automatically disable Azure AI Content Safety filters.",
      "The evaluation dataset JSONL became corrupted during Git commit."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Groundedness measures strict adherence to provided source context. Verbose prompts (`v3`) instruct models to elaborate extensively, frequently introducing unverified claims (hallucinations)."
  },
  {
    "id": 2828,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You want to evaluate Trail Guide Agent (#3) for potential jailbreak vulnerabilities and adversarial prompt injections using Safety & Risk evaluators.",
    "question": "Which built-in safety evaluators from `azure.ai.evaluation` should be included in the evaluation run?",
    "options": [
      "ViolenceEvaluator, HateUnfairnessEvaluator, SelfHarmEvaluator, and SexualEvaluator (accompanied by IndirectAttackEvaluator)",
      "BleuScoreEvaluator and F1ScoreEvaluator",
      "LatencyEvaluator and TokenCountEvaluator",
      "NetworkSecurityEvaluator and FirewallRuleEvaluator"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Azure AI Foundry provides specialized Safety & Risk evaluators (`Violence`, `HateUnfairness`, `SelfHarm`, `Sexual`, `IndirectAttack`) that output severity levels (Very Low to High)."
  },
  {
    "id": 2829,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "An MLOps engineer executes `evaluate_agent.py` (#3) locally and wants to export item-level evaluation results to a CSV file for team review.",
    "question": "Which property of the evaluation output object contains the per-row Pandas DataFrame or dictionary list?",
    "options": [
      "`eval_result.rows` (or `eval_result['rows']`), which contains item-level metrics and explanations for each dataset row.",
      "`eval_result.summary_only`",
      "`eval_result.metrics_average`",
      "`eval_result.console_logs`"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: When running local evaluations in `azure.ai.evaluation`, the returned object contains `.rows` (item-level results) and `.metrics` (aggregate averages)."
  },
  {
    "id": 2830,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/evaluators/download_eval_results.py` (#3), you need to programmatically fetch the average scores of a completed cloud evaluation run.",
    "question": "Which SDK call retrieves the output metric summary of a cloud run?",
    "options": [
      "metrics = project_client.evals.runs.get_metrics(run_id=eval_run_id)",
      "metrics = os.cat('cloud_results.json')",
      "metrics = project_client.telemetry.get_last_span()",
      "metrics = project_client.models.list_scores()"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In `AIProjectClient`, retrieving aggregate evaluation results from the cloud database is performed via `project_client.evals.runs.get_metrics(run_id)` or inspecting output items."
  },
  {
    "id": 2831,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/evaluators/evaluate_agent.py` (#4), you are uploading the 89-item cloud evaluation dataset `data/trail_guide_evaluation_dataset.jsonl` to Azure AI Foundry.",
    "question": "Which SDK method call correctly uploads the local JSONL file to the Foundry project workspace?",
    "options": [
      "dataset = project_client.datasets.upload_file(file_path='data/trail_guide_evaluation_dataset.jsonl', purpose='evaluations')",
      "dataset = project_client.evals.upload_dataset(path='...', format='jsonl')",
      "dataset = project_client.storage.create_blob(container='evals', file='...')",
      "dataset = project_client.data.register_table(name='trail_evals')"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In `azure-ai-projects`, datasets for evaluation are uploaded using `project_client.datasets.upload_file(file_path=..., purpose='evaluations')`."
  },
  {
    "id": 2832,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are defining an LLM-as-a-Judge evaluation run in `evaluate_agent.py` (#4) to score responses on Groundedness, Relevance, and Intent Resolution.",
    "question": "Which built-in classes from `azure.ai.evaluation` represent these three core quality evaluators?",
    "options": [
      "GroundednessEvaluator, RelevanceEvaluator, IntentResolutionEvaluator (or SimilarityEvaluator)",
      "HallucinationChecker, FluffDetector, GoalCompleter",
      "BleuScoreEvaluator, RougeScoreEvaluator, F1ScoreEvaluator",
      "SafetyRiskEvaluator, HateSpeechEvaluator, ViolenceEvaluator"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: `azure.ai.evaluation` provides built-in AI-assisted quality evaluators including `GroundednessEvaluator`, `RelevanceEvaluator`, and `SimilarityEvaluator`/`IntentResolutionEvaluator`."
  },
  {
    "id": 2833,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "When executing `evaluate_agent.py` (#4), you check the Azure AI Foundry web portal under Cluster Analysis. The UI displays: `Total Samples: 1, Passed: 0, Failed: 1`, even though your dataset had 89 items.",
    "question": "Why does Cluster Analysis display only 1 sample instead of 89?",
    "options": [
      "Cluster Analysis is strictly an error-clustering tool; it filters out all passing evaluations (scores >= 3) and only groups failed test items (scores < 3) by root cause.",
      "The dataset upload timed out after processing the first row in JSONL.",
      "You must upgrade your Azure AI Foundry pricing tier to view more than 1 sample.",
      "The LLM Judge model (`gpt-5.1`) encountered a fatal exception on row 2."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: A critical exam concept: In Azure AI Foundry, Cluster Analysis is exclusively an error-discovery tool. It hides passing tests and clusters only failed evaluations by semantic root cause."
  },
  {
    "id": 2834,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are writing a custom evaluator in Python for Trail Guide (#4) to verify that responses never recommend closed winter trails.",
    "question": "What is the correct structural signature for a custom evaluator class or function in `azure.ai.evaluation`?",
    "options": [
      "def evaluate(self, *, query: str, response: str, **kwargs) -> dict: return {'safety_score': 5, 'reason': 'No closed trails mentioned'}",
      "def check_trail(prompt, answer): return True",
      "class TrailEval(BaseMetric): def calculate(): pass",
      "def run_eval(item_index): return os.system('check_trail')"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Custom evaluators in `azure.ai.evaluation` must accept keyword-only arguments matching dataset column names (`query`, `response`, `context`) and return a dictionary of metric scores/reasons."
  },
  {
    "id": 2835,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `data/trail_guide_evaluation_dataset.jsonl` (#4), what are the three mandatory column keys required for running `GroundednessEvaluator`?",
    "question": "What is the correct structural signature for a custom evaluator class or function in `azure.ai.evaluation`?",
    "options": [
      "`query` (user question), `response` (agent answer), and `context` (ground truth / retrieved RAG documents)",
      "`prompt`, `completion`, and `tokens`",
      "`input_text`, `output_text`, and `label_id`",
      "`question`, `prediction`, and `bleu_score`"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Evaluating groundedness (hallucination detection) requires comparing the agent's `response` against the authoritative source `context` for a given user `query`."
  },
  {
    "id": 2836,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "During cloud evaluation execution (#4), `client.evals.runs.create()` launches asynchronous cloud workers using GPT-5.1 as the LLM Judge.",
    "question": "How should your script monitor the evaluation run until completion without timing out or causing infinite loops?",
    "options": [
      "Implement a polling loop using `client.evals.runs.retrieve(run_id)` every 10 seconds until `run.status` reaches `'completed'` or `'failed'`.",
      "Execute `time.sleep(3600)` immediately after calling `create()`.",
      "Use a WebSocket callback listener on port 8080.",
      "Call `client.evals.runs.wait_for_completion(timeout=10)`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Cloud evaluation runs are asynchronous. Robust MLOps scripts poll `client.evals.runs.retrieve(run_id)` in a timed loop until status reaches terminal states (`completed`, `failed`, `canceled`)."
  },
  {
    "id": 2837,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `evaluation_results.txt` (#4), you notice that Groundedness score dropped from 4.8 to 2.1 after switching from prompt `v2_structured.txt` to `v3_verbose.txt`.",
    "question": "Why did verbose prompting cause a severe drop in Groundedness score?",
    "options": [
      "Verbose prompting encourages the model to generate extra conversational filler and unverified background lore not present in the RAG RAG context, triggering hallucination penalties by the LLM Judge.",
      "The LLM Judge model ran out of token context window.",
      "Verbose prompts automatically disable Azure AI Content Safety filters.",
      "The evaluation dataset JSONL became corrupted during Git commit."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Groundedness measures strict adherence to provided source context. Verbose prompts (`v3`) instruct models to elaborate extensively, frequently introducing unverified claims (hallucinations)."
  },
  {
    "id": 2838,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You want to evaluate Trail Guide Agent (#4) for potential jailbreak vulnerabilities and adversarial prompt injections using Safety & Risk evaluators.",
    "question": "Which built-in safety evaluators from `azure.ai.evaluation` should be included in the evaluation run?",
    "options": [
      "ViolenceEvaluator, HateUnfairnessEvaluator, SelfHarmEvaluator, and SexualEvaluator (accompanied by IndirectAttackEvaluator)",
      "BleuScoreEvaluator and F1ScoreEvaluator",
      "LatencyEvaluator and TokenCountEvaluator",
      "NetworkSecurityEvaluator and FirewallRuleEvaluator"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Azure AI Foundry provides specialized Safety & Risk evaluators (`Violence`, `HateUnfairness`, `SelfHarm`, `Sexual`, `IndirectAttack`) that output severity levels (Very Low to High)."
  },
  {
    "id": 2839,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "An MLOps engineer executes `evaluate_agent.py` (#4) locally and wants to export item-level evaluation results to a CSV file for team review.",
    "question": "Which property of the evaluation output object contains the per-row Pandas DataFrame or dictionary list?",
    "options": [
      "`eval_result.rows` (or `eval_result['rows']`), which contains item-level metrics and explanations for each dataset row.",
      "`eval_result.summary_only`",
      "`eval_result.metrics_average`",
      "`eval_result.console_logs`"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: When running local evaluations in `azure.ai.evaluation`, the returned object contains `.rows` (item-level results) and `.metrics` (aggregate averages)."
  },
  {
    "id": 2840,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/evaluators/download_eval_results.py` (#4), you need to programmatically fetch the average scores of a completed cloud evaluation run.",
    "question": "Which SDK call retrieves the output metric summary of a cloud run?",
    "options": [
      "metrics = project_client.evals.runs.get_metrics(run_id=eval_run_id)",
      "metrics = os.cat('cloud_results.json')",
      "metrics = project_client.telemetry.get_last_span()",
      "metrics = project_client.models.list_scores()"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In `AIProjectClient`, retrieving aggregate evaluation results from the cloud database is performed via `project_client.evals.runs.get_metrics(run_id)` or inspecting output items."
  },
  {
    "id": 2841,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/evaluators/evaluate_agent.py` (#5), you are uploading the 89-item cloud evaluation dataset `data/trail_guide_evaluation_dataset.jsonl` to Azure AI Foundry.",
    "question": "Which SDK method call correctly uploads the local JSONL file to the Foundry project workspace?",
    "options": [
      "dataset = project_client.datasets.upload_file(file_path='data/trail_guide_evaluation_dataset.jsonl', purpose='evaluations')",
      "dataset = project_client.evals.upload_dataset(path='...', format='jsonl')",
      "dataset = project_client.storage.create_blob(container='evals', file='...')",
      "dataset = project_client.data.register_table(name='trail_evals')"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In `azure-ai-projects`, datasets for evaluation are uploaded using `project_client.datasets.upload_file(file_path=..., purpose='evaluations')`."
  },
  {
    "id": 2842,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are defining an LLM-as-a-Judge evaluation run in `evaluate_agent.py` (#5) to score responses on Groundedness, Relevance, and Intent Resolution.",
    "question": "Which built-in classes from `azure.ai.evaluation` represent these three core quality evaluators?",
    "options": [
      "GroundednessEvaluator, RelevanceEvaluator, IntentResolutionEvaluator (or SimilarityEvaluator)",
      "HallucinationChecker, FluffDetector, GoalCompleter",
      "BleuScoreEvaluator, RougeScoreEvaluator, F1ScoreEvaluator",
      "SafetyRiskEvaluator, HateSpeechEvaluator, ViolenceEvaluator"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: `azure.ai.evaluation` provides built-in AI-assisted quality evaluators including `GroundednessEvaluator`, `RelevanceEvaluator`, and `SimilarityEvaluator`/`IntentResolutionEvaluator`."
  },
  {
    "id": 2843,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "When executing `evaluate_agent.py` (#5), you check the Azure AI Foundry web portal under Cluster Analysis. The UI displays: `Total Samples: 1, Passed: 0, Failed: 1`, even though your dataset had 89 items.",
    "question": "Why does Cluster Analysis display only 1 sample instead of 89?",
    "options": [
      "Cluster Analysis is strictly an error-clustering tool; it filters out all passing evaluations (scores >= 3) and only groups failed test items (scores < 3) by root cause.",
      "The dataset upload timed out after processing the first row in JSONL.",
      "You must upgrade your Azure AI Foundry pricing tier to view more than 1 sample.",
      "The LLM Judge model (`gpt-5.1`) encountered a fatal exception on row 2."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: A critical exam concept: In Azure AI Foundry, Cluster Analysis is exclusively an error-discovery tool. It hides passing tests and clusters only failed evaluations by semantic root cause."
  },
  {
    "id": 2844,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are writing a custom evaluator in Python for Trail Guide (#5) to verify that responses never recommend closed winter trails.",
    "question": "What is the correct structural signature for a custom evaluator class or function in `azure.ai.evaluation`?",
    "options": [
      "def evaluate(self, *, query: str, response: str, **kwargs) -> dict: return {'safety_score': 5, 'reason': 'No closed trails mentioned'}",
      "def check_trail(prompt, answer): return True",
      "class TrailEval(BaseMetric): def calculate(): pass",
      "def run_eval(item_index): return os.system('check_trail')"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Custom evaluators in `azure.ai.evaluation` must accept keyword-only arguments matching dataset column names (`query`, `response`, `context`) and return a dictionary of metric scores/reasons."
  },
  {
    "id": 2845,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `data/trail_guide_evaluation_dataset.jsonl` (#5), what are the three mandatory column keys required for running `GroundednessEvaluator`?",
    "question": "What is the correct structural signature for a custom evaluator class or function in `azure.ai.evaluation`?",
    "options": [
      "`query` (user question), `response` (agent answer), and `context` (ground truth / retrieved RAG documents)",
      "`prompt`, `completion`, and `tokens`",
      "`input_text`, `output_text`, and `label_id`",
      "`question`, `prediction`, and `bleu_score`"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Evaluating groundedness (hallucination detection) requires comparing the agent's `response` against the authoritative source `context` for a given user `query`."
  },
  {
    "id": 2846,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "During cloud evaluation execution (#5), `client.evals.runs.create()` launches asynchronous cloud workers using GPT-5.1 as the LLM Judge.",
    "question": "How should your script monitor the evaluation run until completion without timing out or causing infinite loops?",
    "options": [
      "Implement a polling loop using `client.evals.runs.retrieve(run_id)` every 10 seconds until `run.status` reaches `'completed'` or `'failed'`.",
      "Execute `time.sleep(3600)` immediately after calling `create()`.",
      "Use a WebSocket callback listener on port 8080.",
      "Call `client.evals.runs.wait_for_completion(timeout=10)`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Cloud evaluation runs are asynchronous. Robust MLOps scripts poll `client.evals.runs.retrieve(run_id)` in a timed loop until status reaches terminal states (`completed`, `failed`, `canceled`)."
  },
  {
    "id": 2847,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `evaluation_results.txt` (#5), you notice that Groundedness score dropped from 4.8 to 2.1 after switching from prompt `v2_structured.txt` to `v3_verbose.txt`.",
    "question": "Why did verbose prompting cause a severe drop in Groundedness score?",
    "options": [
      "Verbose prompting encourages the model to generate extra conversational filler and unverified background lore not present in the RAG RAG context, triggering hallucination penalties by the LLM Judge.",
      "The LLM Judge model ran out of token context window.",
      "Verbose prompts automatically disable Azure AI Content Safety filters.",
      "The evaluation dataset JSONL became corrupted during Git commit."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Groundedness measures strict adherence to provided source context. Verbose prompts (`v3`) instruct models to elaborate extensively, frequently introducing unverified claims (hallucinations)."
  },
  {
    "id": 2848,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You want to evaluate Trail Guide Agent (#5) for potential jailbreak vulnerabilities and adversarial prompt injections using Safety & Risk evaluators.",
    "question": "Which built-in safety evaluators from `azure.ai.evaluation` should be included in the evaluation run?",
    "options": [
      "ViolenceEvaluator, HateUnfairnessEvaluator, SelfHarmEvaluator, and SexualEvaluator (accompanied by IndirectAttackEvaluator)",
      "BleuScoreEvaluator and F1ScoreEvaluator",
      "LatencyEvaluator and TokenCountEvaluator",
      "NetworkSecurityEvaluator and FirewallRuleEvaluator"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Azure AI Foundry provides specialized Safety & Risk evaluators (`Violence`, `HateUnfairness`, `SelfHarm`, `Sexual`, `IndirectAttack`) that output severity levels (Very Low to High)."
  },
  {
    "id": 2849,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "An MLOps engineer executes `evaluate_agent.py` (#5) locally and wants to export item-level evaluation results to a CSV file for team review.",
    "question": "Which property of the evaluation output object contains the per-row Pandas DataFrame or dictionary list?",
    "options": [
      "`eval_result.rows` (or `eval_result['rows']`), which contains item-level metrics and explanations for each dataset row.",
      "`eval_result.summary_only`",
      "`eval_result.metrics_average`",
      "`eval_result.console_logs`"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: When running local evaluations in `azure.ai.evaluation`, the returned object contains `.rows` (item-level results) and `.metrics` (aggregate averages)."
  },
  {
    "id": 2850,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/evaluators/download_eval_results.py` (#5), you need to programmatically fetch the average scores of a completed cloud evaluation run.",
    "question": "Which SDK call retrieves the output metric summary of a cloud run?",
    "options": [
      "metrics = project_client.evals.runs.get_metrics(run_id=eval_run_id)",
      "metrics = os.cat('cloud_results.json')",
      "metrics = project_client.telemetry.get_last_span()",
      "metrics = project_client.models.list_scores()"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In `AIProjectClient`, retrieving aggregate evaluation results from the cloud database is performed via `project_client.evals.runs.get_metrics(run_id)` or inspecting output items."
  },
  {
    "id": 2851,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/evaluators/evaluate_agent.py` (#6), you are uploading the 89-item cloud evaluation dataset `data/trail_guide_evaluation_dataset.jsonl` to Azure AI Foundry.",
    "question": "Which SDK method call correctly uploads the local JSONL file to the Foundry project workspace?",
    "options": [
      "dataset = project_client.datasets.upload_file(file_path='data/trail_guide_evaluation_dataset.jsonl', purpose='evaluations')",
      "dataset = project_client.evals.upload_dataset(path='...', format='jsonl')",
      "dataset = project_client.storage.create_blob(container='evals', file='...')",
      "dataset = project_client.data.register_table(name='trail_evals')"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In `azure-ai-projects`, datasets for evaluation are uploaded using `project_client.datasets.upload_file(file_path=..., purpose='evaluations')`."
  },
  {
    "id": 2852,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are defining an LLM-as-a-Judge evaluation run in `evaluate_agent.py` (#6) to score responses on Groundedness, Relevance, and Intent Resolution.",
    "question": "Which built-in classes from `azure.ai.evaluation` represent these three core quality evaluators?",
    "options": [
      "GroundednessEvaluator, RelevanceEvaluator, IntentResolutionEvaluator (or SimilarityEvaluator)",
      "HallucinationChecker, FluffDetector, GoalCompleter",
      "BleuScoreEvaluator, RougeScoreEvaluator, F1ScoreEvaluator",
      "SafetyRiskEvaluator, HateSpeechEvaluator, ViolenceEvaluator"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: `azure.ai.evaluation` provides built-in AI-assisted quality evaluators including `GroundednessEvaluator`, `RelevanceEvaluator`, and `SimilarityEvaluator`/`IntentResolutionEvaluator`."
  },
  {
    "id": 2853,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "When executing `evaluate_agent.py` (#6), you check the Azure AI Foundry web portal under Cluster Analysis. The UI displays: `Total Samples: 1, Passed: 0, Failed: 1`, even though your dataset had 89 items.",
    "question": "Why does Cluster Analysis display only 1 sample instead of 89?",
    "options": [
      "Cluster Analysis is strictly an error-clustering tool; it filters out all passing evaluations (scores >= 3) and only groups failed test items (scores < 3) by root cause.",
      "The dataset upload timed out after processing the first row in JSONL.",
      "You must upgrade your Azure AI Foundry pricing tier to view more than 1 sample.",
      "The LLM Judge model (`gpt-5.1`) encountered a fatal exception on row 2."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: A critical exam concept: In Azure AI Foundry, Cluster Analysis is exclusively an error-discovery tool. It hides passing tests and clusters only failed evaluations by semantic root cause."
  },
  {
    "id": 2854,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are writing a custom evaluator in Python for Trail Guide (#6) to verify that responses never recommend closed winter trails.",
    "question": "What is the correct structural signature for a custom evaluator class or function in `azure.ai.evaluation`?",
    "options": [
      "def evaluate(self, *, query: str, response: str, **kwargs) -> dict: return {'safety_score': 5, 'reason': 'No closed trails mentioned'}",
      "def check_trail(prompt, answer): return True",
      "class TrailEval(BaseMetric): def calculate(): pass",
      "def run_eval(item_index): return os.system('check_trail')"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Custom evaluators in `azure.ai.evaluation` must accept keyword-only arguments matching dataset column names (`query`, `response`, `context`) and return a dictionary of metric scores/reasons."
  },
  {
    "id": 2855,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `data/trail_guide_evaluation_dataset.jsonl` (#6), what are the three mandatory column keys required for running `GroundednessEvaluator`?",
    "question": "What is the correct structural signature for a custom evaluator class or function in `azure.ai.evaluation`?",
    "options": [
      "`query` (user question), `response` (agent answer), and `context` (ground truth / retrieved RAG documents)",
      "`prompt`, `completion`, and `tokens`",
      "`input_text`, `output_text`, and `label_id`",
      "`question`, `prediction`, and `bleu_score`"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Evaluating groundedness (hallucination detection) requires comparing the agent's `response` against the authoritative source `context` for a given user `query`."
  },
  {
    "id": 2856,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "During cloud evaluation execution (#6), `client.evals.runs.create()` launches asynchronous cloud workers using GPT-5.1 as the LLM Judge.",
    "question": "How should your script monitor the evaluation run until completion without timing out or causing infinite loops?",
    "options": [
      "Implement a polling loop using `client.evals.runs.retrieve(run_id)` every 10 seconds until `run.status` reaches `'completed'` or `'failed'`.",
      "Execute `time.sleep(3600)` immediately after calling `create()`.",
      "Use a WebSocket callback listener on port 8080.",
      "Call `client.evals.runs.wait_for_completion(timeout=10)`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Cloud evaluation runs are asynchronous. Robust MLOps scripts poll `client.evals.runs.retrieve(run_id)` in a timed loop until status reaches terminal states (`completed`, `failed`, `canceled`)."
  },
  {
    "id": 2857,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `evaluation_results.txt` (#6), you notice that Groundedness score dropped from 4.8 to 2.1 after switching from prompt `v2_structured.txt` to `v3_verbose.txt`.",
    "question": "Why did verbose prompting cause a severe drop in Groundedness score?",
    "options": [
      "Verbose prompting encourages the model to generate extra conversational filler and unverified background lore not present in the RAG RAG context, triggering hallucination penalties by the LLM Judge.",
      "The LLM Judge model ran out of token context window.",
      "Verbose prompts automatically disable Azure AI Content Safety filters.",
      "The evaluation dataset JSONL became corrupted during Git commit."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Groundedness measures strict adherence to provided source context. Verbose prompts (`v3`) instruct models to elaborate extensively, frequently introducing unverified claims (hallucinations)."
  },
  {
    "id": 2858,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You want to evaluate Trail Guide Agent (#6) for potential jailbreak vulnerabilities and adversarial prompt injections using Safety & Risk evaluators.",
    "question": "Which built-in safety evaluators from `azure.ai.evaluation` should be included in the evaluation run?",
    "options": [
      "ViolenceEvaluator, HateUnfairnessEvaluator, SelfHarmEvaluator, and SexualEvaluator (accompanied by IndirectAttackEvaluator)",
      "BleuScoreEvaluator and F1ScoreEvaluator",
      "LatencyEvaluator and TokenCountEvaluator",
      "NetworkSecurityEvaluator and FirewallRuleEvaluator"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Azure AI Foundry provides specialized Safety & Risk evaluators (`Violence`, `HateUnfairness`, `SelfHarm`, `Sexual`, `IndirectAttack`) that output severity levels (Very Low to High)."
  },
  {
    "id": 2859,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "An MLOps engineer executes `evaluate_agent.py` (#6) locally and wants to export item-level evaluation results to a CSV file for team review.",
    "question": "Which property of the evaluation output object contains the per-row Pandas DataFrame or dictionary list?",
    "options": [
      "`eval_result.rows` (or `eval_result['rows']`), which contains item-level metrics and explanations for each dataset row.",
      "`eval_result.summary_only`",
      "`eval_result.metrics_average`",
      "`eval_result.console_logs`"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: When running local evaluations in `azure.ai.evaluation`, the returned object contains `.rows` (item-level results) and `.metrics` (aggregate averages)."
  },
  {
    "id": 2860,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/evaluators/download_eval_results.py` (#6), you need to programmatically fetch the average scores of a completed cloud evaluation run.",
    "question": "Which SDK call retrieves the output metric summary of a cloud run?",
    "options": [
      "metrics = project_client.evals.runs.get_metrics(run_id=eval_run_id)",
      "metrics = os.cat('cloud_results.json')",
      "metrics = project_client.telemetry.get_last_span()",
      "metrics = project_client.models.list_scores()"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In `AIProjectClient`, retrieving aggregate evaluation results from the cloud database is performed via `project_client.evals.runs.get_metrics(run_id)` or inspecting output items."
  },
  {
    "id": 2861,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/evaluators/evaluate_agent.py` (#7), you are uploading the 89-item cloud evaluation dataset `data/trail_guide_evaluation_dataset.jsonl` to Azure AI Foundry.",
    "question": "Which SDK method call correctly uploads the local JSONL file to the Foundry project workspace?",
    "options": [
      "dataset = project_client.datasets.upload_file(file_path='data/trail_guide_evaluation_dataset.jsonl', purpose='evaluations')",
      "dataset = project_client.evals.upload_dataset(path='...', format='jsonl')",
      "dataset = project_client.storage.create_blob(container='evals', file='...')",
      "dataset = project_client.data.register_table(name='trail_evals')"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In `azure-ai-projects`, datasets for evaluation are uploaded using `project_client.datasets.upload_file(file_path=..., purpose='evaluations')`."
  },
  {
    "id": 2862,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are defining an LLM-as-a-Judge evaluation run in `evaluate_agent.py` (#7) to score responses on Groundedness, Relevance, and Intent Resolution.",
    "question": "Which built-in classes from `azure.ai.evaluation` represent these three core quality evaluators?",
    "options": [
      "GroundednessEvaluator, RelevanceEvaluator, IntentResolutionEvaluator (or SimilarityEvaluator)",
      "HallucinationChecker, FluffDetector, GoalCompleter",
      "BleuScoreEvaluator, RougeScoreEvaluator, F1ScoreEvaluator",
      "SafetyRiskEvaluator, HateSpeechEvaluator, ViolenceEvaluator"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: `azure.ai.evaluation` provides built-in AI-assisted quality evaluators including `GroundednessEvaluator`, `RelevanceEvaluator`, and `SimilarityEvaluator`/`IntentResolutionEvaluator`."
  },
  {
    "id": 2863,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "When executing `evaluate_agent.py` (#7), you check the Azure AI Foundry web portal under Cluster Analysis. The UI displays: `Total Samples: 1, Passed: 0, Failed: 1`, even though your dataset had 89 items.",
    "question": "Why does Cluster Analysis display only 1 sample instead of 89?",
    "options": [
      "Cluster Analysis is strictly an error-clustering tool; it filters out all passing evaluations (scores >= 3) and only groups failed test items (scores < 3) by root cause.",
      "The dataset upload timed out after processing the first row in JSONL.",
      "You must upgrade your Azure AI Foundry pricing tier to view more than 1 sample.",
      "The LLM Judge model (`gpt-5.1`) encountered a fatal exception on row 2."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: A critical exam concept: In Azure AI Foundry, Cluster Analysis is exclusively an error-discovery tool. It hides passing tests and clusters only failed evaluations by semantic root cause."
  },
  {
    "id": 2864,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are writing a custom evaluator in Python for Trail Guide (#7) to verify that responses never recommend closed winter trails.",
    "question": "What is the correct structural signature for a custom evaluator class or function in `azure.ai.evaluation`?",
    "options": [
      "def evaluate(self, *, query: str, response: str, **kwargs) -> dict: return {'safety_score': 5, 'reason': 'No closed trails mentioned'}",
      "def check_trail(prompt, answer): return True",
      "class TrailEval(BaseMetric): def calculate(): pass",
      "def run_eval(item_index): return os.system('check_trail')"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Custom evaluators in `azure.ai.evaluation` must accept keyword-only arguments matching dataset column names (`query`, `response`, `context`) and return a dictionary of metric scores/reasons."
  },
  {
    "id": 2865,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `data/trail_guide_evaluation_dataset.jsonl` (#7), what are the three mandatory column keys required for running `GroundednessEvaluator`?",
    "question": "What is the correct structural signature for a custom evaluator class or function in `azure.ai.evaluation`?",
    "options": [
      "`query` (user question), `response` (agent answer), and `context` (ground truth / retrieved RAG documents)",
      "`prompt`, `completion`, and `tokens`",
      "`input_text`, `output_text`, and `label_id`",
      "`question`, `prediction`, and `bleu_score`"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Evaluating groundedness (hallucination detection) requires comparing the agent's `response` against the authoritative source `context` for a given user `query`."
  },
  {
    "id": 2866,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "During cloud evaluation execution (#7), `client.evals.runs.create()` launches asynchronous cloud workers using GPT-5.1 as the LLM Judge.",
    "question": "How should your script monitor the evaluation run until completion without timing out or causing infinite loops?",
    "options": [
      "Implement a polling loop using `client.evals.runs.retrieve(run_id)` every 10 seconds until `run.status` reaches `'completed'` or `'failed'`.",
      "Execute `time.sleep(3600)` immediately after calling `create()`.",
      "Use a WebSocket callback listener on port 8080.",
      "Call `client.evals.runs.wait_for_completion(timeout=10)`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Cloud evaluation runs are asynchronous. Robust MLOps scripts poll `client.evals.runs.retrieve(run_id)` in a timed loop until status reaches terminal states (`completed`, `failed`, `canceled`)."
  },
  {
    "id": 2867,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `evaluation_results.txt` (#7), you notice that Groundedness score dropped from 4.8 to 2.1 after switching from prompt `v2_structured.txt` to `v3_verbose.txt`.",
    "question": "Why did verbose prompting cause a severe drop in Groundedness score?",
    "options": [
      "Verbose prompting encourages the model to generate extra conversational filler and unverified background lore not present in the RAG RAG context, triggering hallucination penalties by the LLM Judge.",
      "The LLM Judge model ran out of token context window.",
      "Verbose prompts automatically disable Azure AI Content Safety filters.",
      "The evaluation dataset JSONL became corrupted during Git commit."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Groundedness measures strict adherence to provided source context. Verbose prompts (`v3`) instruct models to elaborate extensively, frequently introducing unverified claims (hallucinations)."
  },
  {
    "id": 2868,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You want to evaluate Trail Guide Agent (#7) for potential jailbreak vulnerabilities and adversarial prompt injections using Safety & Risk evaluators.",
    "question": "Which built-in safety evaluators from `azure.ai.evaluation` should be included in the evaluation run?",
    "options": [
      "ViolenceEvaluator, HateUnfairnessEvaluator, SelfHarmEvaluator, and SexualEvaluator (accompanied by IndirectAttackEvaluator)",
      "BleuScoreEvaluator and F1ScoreEvaluator",
      "LatencyEvaluator and TokenCountEvaluator",
      "NetworkSecurityEvaluator and FirewallRuleEvaluator"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Azure AI Foundry provides specialized Safety & Risk evaluators (`Violence`, `HateUnfairness`, `SelfHarm`, `Sexual`, `IndirectAttack`) that output severity levels (Very Low to High)."
  },
  {
    "id": 2869,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "An MLOps engineer executes `evaluate_agent.py` (#7) locally and wants to export item-level evaluation results to a CSV file for team review.",
    "question": "Which property of the evaluation output object contains the per-row Pandas DataFrame or dictionary list?",
    "options": [
      "`eval_result.rows` (or `eval_result['rows']`), which contains item-level metrics and explanations for each dataset row.",
      "`eval_result.summary_only`",
      "`eval_result.metrics_average`",
      "`eval_result.console_logs`"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: When running local evaluations in `azure.ai.evaluation`, the returned object contains `.rows` (item-level results) and `.metrics` (aggregate averages)."
  },
  {
    "id": 2870,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/evaluators/download_eval_results.py` (#7), you need to programmatically fetch the average scores of a completed cloud evaluation run.",
    "question": "Which SDK call retrieves the output metric summary of a cloud run?",
    "options": [
      "metrics = project_client.evals.runs.get_metrics(run_id=eval_run_id)",
      "metrics = os.cat('cloud_results.json')",
      "metrics = project_client.telemetry.get_last_span()",
      "metrics = project_client.models.list_scores()"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In `AIProjectClient`, retrieving aggregate evaluation results from the cloud database is performed via `project_client.evals.runs.get_metrics(run_id)` or inspecting output items."
  },
  {
    "id": 2871,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/evaluators/evaluate_agent.py` (#8), you are uploading the 89-item cloud evaluation dataset `data/trail_guide_evaluation_dataset.jsonl` to Azure AI Foundry.",
    "question": "Which SDK method call correctly uploads the local JSONL file to the Foundry project workspace?",
    "options": [
      "dataset = project_client.datasets.upload_file(file_path='data/trail_guide_evaluation_dataset.jsonl', purpose='evaluations')",
      "dataset = project_client.evals.upload_dataset(path='...', format='jsonl')",
      "dataset = project_client.storage.create_blob(container='evals', file='...')",
      "dataset = project_client.data.register_table(name='trail_evals')"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In `azure-ai-projects`, datasets for evaluation are uploaded using `project_client.datasets.upload_file(file_path=..., purpose='evaluations')`."
  },
  {
    "id": 2872,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are defining an LLM-as-a-Judge evaluation run in `evaluate_agent.py` (#8) to score responses on Groundedness, Relevance, and Intent Resolution.",
    "question": "Which built-in classes from `azure.ai.evaluation` represent these three core quality evaluators?",
    "options": [
      "GroundednessEvaluator, RelevanceEvaluator, IntentResolutionEvaluator (or SimilarityEvaluator)",
      "HallucinationChecker, FluffDetector, GoalCompleter",
      "BleuScoreEvaluator, RougeScoreEvaluator, F1ScoreEvaluator",
      "SafetyRiskEvaluator, HateSpeechEvaluator, ViolenceEvaluator"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: `azure.ai.evaluation` provides built-in AI-assisted quality evaluators including `GroundednessEvaluator`, `RelevanceEvaluator`, and `SimilarityEvaluator`/`IntentResolutionEvaluator`."
  },
  {
    "id": 2873,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "When executing `evaluate_agent.py` (#8), you check the Azure AI Foundry web portal under Cluster Analysis. The UI displays: `Total Samples: 1, Passed: 0, Failed: 1`, even though your dataset had 89 items.",
    "question": "Why does Cluster Analysis display only 1 sample instead of 89?",
    "options": [
      "Cluster Analysis is strictly an error-clustering tool; it filters out all passing evaluations (scores >= 3) and only groups failed test items (scores < 3) by root cause.",
      "The dataset upload timed out after processing the first row in JSONL.",
      "You must upgrade your Azure AI Foundry pricing tier to view more than 1 sample.",
      "The LLM Judge model (`gpt-5.1`) encountered a fatal exception on row 2."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: A critical exam concept: In Azure AI Foundry, Cluster Analysis is exclusively an error-discovery tool. It hides passing tests and clusters only failed evaluations by semantic root cause."
  },
  {
    "id": 2874,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are writing a custom evaluator in Python for Trail Guide (#8) to verify that responses never recommend closed winter trails.",
    "question": "What is the correct structural signature for a custom evaluator class or function in `azure.ai.evaluation`?",
    "options": [
      "def evaluate(self, *, query: str, response: str, **kwargs) -> dict: return {'safety_score': 5, 'reason': 'No closed trails mentioned'}",
      "def check_trail(prompt, answer): return True",
      "class TrailEval(BaseMetric): def calculate(): pass",
      "def run_eval(item_index): return os.system('check_trail')"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Custom evaluators in `azure.ai.evaluation` must accept keyword-only arguments matching dataset column names (`query`, `response`, `context`) and return a dictionary of metric scores/reasons."
  },
  {
    "id": 2875,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `data/trail_guide_evaluation_dataset.jsonl` (#8), what are the three mandatory column keys required for running `GroundednessEvaluator`?",
    "question": "What is the correct structural signature for a custom evaluator class or function in `azure.ai.evaluation`?",
    "options": [
      "`query` (user question), `response` (agent answer), and `context` (ground truth / retrieved RAG documents)",
      "`prompt`, `completion`, and `tokens`",
      "`input_text`, `output_text`, and `label_id`",
      "`question`, `prediction`, and `bleu_score`"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Evaluating groundedness (hallucination detection) requires comparing the agent's `response` against the authoritative source `context` for a given user `query`."
  },
  {
    "id": 2876,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "During cloud evaluation execution (#8), `client.evals.runs.create()` launches asynchronous cloud workers using GPT-5.1 as the LLM Judge.",
    "question": "How should your script monitor the evaluation run until completion without timing out or causing infinite loops?",
    "options": [
      "Implement a polling loop using `client.evals.runs.retrieve(run_id)` every 10 seconds until `run.status` reaches `'completed'` or `'failed'`.",
      "Execute `time.sleep(3600)` immediately after calling `create()`.",
      "Use a WebSocket callback listener on port 8080.",
      "Call `client.evals.runs.wait_for_completion(timeout=10)`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Cloud evaluation runs are asynchronous. Robust MLOps scripts poll `client.evals.runs.retrieve(run_id)` in a timed loop until status reaches terminal states (`completed`, `failed`, `canceled`)."
  },
  {
    "id": 2877,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `evaluation_results.txt` (#8), you notice that Groundedness score dropped from 4.8 to 2.1 after switching from prompt `v2_structured.txt` to `v3_verbose.txt`.",
    "question": "Why did verbose prompting cause a severe drop in Groundedness score?",
    "options": [
      "Verbose prompting encourages the model to generate extra conversational filler and unverified background lore not present in the RAG RAG context, triggering hallucination penalties by the LLM Judge.",
      "The LLM Judge model ran out of token context window.",
      "Verbose prompts automatically disable Azure AI Content Safety filters.",
      "The evaluation dataset JSONL became corrupted during Git commit."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Groundedness measures strict adherence to provided source context. Verbose prompts (`v3`) instruct models to elaborate extensively, frequently introducing unverified claims (hallucinations)."
  },
  {
    "id": 2878,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You want to evaluate Trail Guide Agent (#8) for potential jailbreak vulnerabilities and adversarial prompt injections using Safety & Risk evaluators.",
    "question": "Which built-in safety evaluators from `azure.ai.evaluation` should be included in the evaluation run?",
    "options": [
      "ViolenceEvaluator, HateUnfairnessEvaluator, SelfHarmEvaluator, and SexualEvaluator (accompanied by IndirectAttackEvaluator)",
      "BleuScoreEvaluator and F1ScoreEvaluator",
      "LatencyEvaluator and TokenCountEvaluator",
      "NetworkSecurityEvaluator and FirewallRuleEvaluator"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Azure AI Foundry provides specialized Safety & Risk evaluators (`Violence`, `HateUnfairness`, `SelfHarm`, `Sexual`, `IndirectAttack`) that output severity levels (Very Low to High)."
  },
  {
    "id": 2879,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "An MLOps engineer executes `evaluate_agent.py` (#8) locally and wants to export item-level evaluation results to a CSV file for team review.",
    "question": "Which property of the evaluation output object contains the per-row Pandas DataFrame or dictionary list?",
    "options": [
      "`eval_result.rows` (or `eval_result['rows']`), which contains item-level metrics and explanations for each dataset row.",
      "`eval_result.summary_only`",
      "`eval_result.metrics_average`",
      "`eval_result.console_logs`"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: When running local evaluations in `azure.ai.evaluation`, the returned object contains `.rows` (item-level results) and `.metrics` (aggregate averages)."
  },
  {
    "id": 2880,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/evaluators/download_eval_results.py` (#8), you need to programmatically fetch the average scores of a completed cloud evaluation run.",
    "question": "Which SDK call retrieves the output metric summary of a cloud run?",
    "options": [
      "metrics = project_client.evals.runs.get_metrics(run_id=eval_run_id)",
      "metrics = os.cat('cloud_results.json')",
      "metrics = project_client.telemetry.get_last_span()",
      "metrics = project_client.models.list_scores()"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In `AIProjectClient`, retrieving aggregate evaluation results from the cloud database is performed via `project_client.evals.runs.get_metrics(run_id)` or inspecting output items."
  },
  {
    "id": 2881,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/evaluators/evaluate_agent.py` (#9), you are uploading the 89-item cloud evaluation dataset `data/trail_guide_evaluation_dataset.jsonl` to Azure AI Foundry.",
    "question": "Which SDK method call correctly uploads the local JSONL file to the Foundry project workspace?",
    "options": [
      "dataset = project_client.datasets.upload_file(file_path='data/trail_guide_evaluation_dataset.jsonl', purpose='evaluations')",
      "dataset = project_client.evals.upload_dataset(path='...', format='jsonl')",
      "dataset = project_client.storage.create_blob(container='evals', file='...')",
      "dataset = project_client.data.register_table(name='trail_evals')"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In `azure-ai-projects`, datasets for evaluation are uploaded using `project_client.datasets.upload_file(file_path=..., purpose='evaluations')`."
  },
  {
    "id": 2882,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are defining an LLM-as-a-Judge evaluation run in `evaluate_agent.py` (#9) to score responses on Groundedness, Relevance, and Intent Resolution.",
    "question": "Which built-in classes from `azure.ai.evaluation` represent these three core quality evaluators?",
    "options": [
      "GroundednessEvaluator, RelevanceEvaluator, IntentResolutionEvaluator (or SimilarityEvaluator)",
      "HallucinationChecker, FluffDetector, GoalCompleter",
      "BleuScoreEvaluator, RougeScoreEvaluator, F1ScoreEvaluator",
      "SafetyRiskEvaluator, HateSpeechEvaluator, ViolenceEvaluator"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: `azure.ai.evaluation` provides built-in AI-assisted quality evaluators including `GroundednessEvaluator`, `RelevanceEvaluator`, and `SimilarityEvaluator`/`IntentResolutionEvaluator`."
  },
  {
    "id": 2883,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "When executing `evaluate_agent.py` (#9), you check the Azure AI Foundry web portal under Cluster Analysis. The UI displays: `Total Samples: 1, Passed: 0, Failed: 1`, even though your dataset had 89 items.",
    "question": "Why does Cluster Analysis display only 1 sample instead of 89?",
    "options": [
      "Cluster Analysis is strictly an error-clustering tool; it filters out all passing evaluations (scores >= 3) and only groups failed test items (scores < 3) by root cause.",
      "The dataset upload timed out after processing the first row in JSONL.",
      "You must upgrade your Azure AI Foundry pricing tier to view more than 1 sample.",
      "The LLM Judge model (`gpt-5.1`) encountered a fatal exception on row 2."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: A critical exam concept: In Azure AI Foundry, Cluster Analysis is exclusively an error-discovery tool. It hides passing tests and clusters only failed evaluations by semantic root cause."
  },
  {
    "id": 2884,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are writing a custom evaluator in Python for Trail Guide (#9) to verify that responses never recommend closed winter trails.",
    "question": "What is the correct structural signature for a custom evaluator class or function in `azure.ai.evaluation`?",
    "options": [
      "def evaluate(self, *, query: str, response: str, **kwargs) -> dict: return {'safety_score': 5, 'reason': 'No closed trails mentioned'}",
      "def check_trail(prompt, answer): return True",
      "class TrailEval(BaseMetric): def calculate(): pass",
      "def run_eval(item_index): return os.system('check_trail')"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Custom evaluators in `azure.ai.evaluation` must accept keyword-only arguments matching dataset column names (`query`, `response`, `context`) and return a dictionary of metric scores/reasons."
  },
  {
    "id": 2885,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `data/trail_guide_evaluation_dataset.jsonl` (#9), what are the three mandatory column keys required for running `GroundednessEvaluator`?",
    "question": "What is the correct structural signature for a custom evaluator class or function in `azure.ai.evaluation`?",
    "options": [
      "`query` (user question), `response` (agent answer), and `context` (ground truth / retrieved RAG documents)",
      "`prompt`, `completion`, and `tokens`",
      "`input_text`, `output_text`, and `label_id`",
      "`question`, `prediction`, and `bleu_score`"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Evaluating groundedness (hallucination detection) requires comparing the agent's `response` against the authoritative source `context` for a given user `query`."
  },
  {
    "id": 2886,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "During cloud evaluation execution (#9), `client.evals.runs.create()` launches asynchronous cloud workers using GPT-5.1 as the LLM Judge.",
    "question": "How should your script monitor the evaluation run until completion without timing out or causing infinite loops?",
    "options": [
      "Implement a polling loop using `client.evals.runs.retrieve(run_id)` every 10 seconds until `run.status` reaches `'completed'` or `'failed'`.",
      "Execute `time.sleep(3600)` immediately after calling `create()`.",
      "Use a WebSocket callback listener on port 8080.",
      "Call `client.evals.runs.wait_for_completion(timeout=10)`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Cloud evaluation runs are asynchronous. Robust MLOps scripts poll `client.evals.runs.retrieve(run_id)` in a timed loop until status reaches terminal states (`completed`, `failed`, `canceled`)."
  },
  {
    "id": 2887,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `evaluation_results.txt` (#9), you notice that Groundedness score dropped from 4.8 to 2.1 after switching from prompt `v2_structured.txt` to `v3_verbose.txt`.",
    "question": "Why did verbose prompting cause a severe drop in Groundedness score?",
    "options": [
      "Verbose prompting encourages the model to generate extra conversational filler and unverified background lore not present in the RAG RAG context, triggering hallucination penalties by the LLM Judge.",
      "The LLM Judge model ran out of token context window.",
      "Verbose prompts automatically disable Azure AI Content Safety filters.",
      "The evaluation dataset JSONL became corrupted during Git commit."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Groundedness measures strict adherence to provided source context. Verbose prompts (`v3`) instruct models to elaborate extensively, frequently introducing unverified claims (hallucinations)."
  },
  {
    "id": 2888,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You want to evaluate Trail Guide Agent (#9) for potential jailbreak vulnerabilities and adversarial prompt injections using Safety & Risk evaluators.",
    "question": "Which built-in safety evaluators from `azure.ai.evaluation` should be included in the evaluation run?",
    "options": [
      "ViolenceEvaluator, HateUnfairnessEvaluator, SelfHarmEvaluator, and SexualEvaluator (accompanied by IndirectAttackEvaluator)",
      "BleuScoreEvaluator and F1ScoreEvaluator",
      "LatencyEvaluator and TokenCountEvaluator",
      "NetworkSecurityEvaluator and FirewallRuleEvaluator"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Azure AI Foundry provides specialized Safety & Risk evaluators (`Violence`, `HateUnfairness`, `SelfHarm`, `Sexual`, `IndirectAttack`) that output severity levels (Very Low to High)."
  },
  {
    "id": 2889,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "An MLOps engineer executes `evaluate_agent.py` (#9) locally and wants to export item-level evaluation results to a CSV file for team review.",
    "question": "Which property of the evaluation output object contains the per-row Pandas DataFrame or dictionary list?",
    "options": [
      "`eval_result.rows` (or `eval_result['rows']`), which contains item-level metrics and explanations for each dataset row.",
      "`eval_result.summary_only`",
      "`eval_result.metrics_average`",
      "`eval_result.console_logs`"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: When running local evaluations in `azure.ai.evaluation`, the returned object contains `.rows` (item-level results) and `.metrics` (aggregate averages)."
  },
  {
    "id": 2890,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/evaluators/download_eval_results.py` (#9), you need to programmatically fetch the average scores of a completed cloud evaluation run.",
    "question": "Which SDK call retrieves the output metric summary of a cloud run?",
    "options": [
      "metrics = project_client.evals.runs.get_metrics(run_id=eval_run_id)",
      "metrics = os.cat('cloud_results.json')",
      "metrics = project_client.telemetry.get_last_span()",
      "metrics = project_client.models.list_scores()"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In `AIProjectClient`, retrieving aggregate evaluation results from the cloud database is performed via `project_client.evals.runs.get_metrics(run_id)` or inspecting output items."
  },
  {
    "id": 2891,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/evaluators/evaluate_agent.py` (#10), you are uploading the 89-item cloud evaluation dataset `data/trail_guide_evaluation_dataset.jsonl` to Azure AI Foundry.",
    "question": "Which SDK method call correctly uploads the local JSONL file to the Foundry project workspace?",
    "options": [
      "dataset = project_client.datasets.upload_file(file_path='data/trail_guide_evaluation_dataset.jsonl', purpose='evaluations')",
      "dataset = project_client.evals.upload_dataset(path='...', format='jsonl')",
      "dataset = project_client.storage.create_blob(container='evals', file='...')",
      "dataset = project_client.data.register_table(name='trail_evals')"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In `azure-ai-projects`, datasets for evaluation are uploaded using `project_client.datasets.upload_file(file_path=..., purpose='evaluations')`."
  },
  {
    "id": 2892,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are defining an LLM-as-a-Judge evaluation run in `evaluate_agent.py` (#10) to score responses on Groundedness, Relevance, and Intent Resolution.",
    "question": "Which built-in classes from `azure.ai.evaluation` represent these three core quality evaluators?",
    "options": [
      "GroundednessEvaluator, RelevanceEvaluator, IntentResolutionEvaluator (or SimilarityEvaluator)",
      "HallucinationChecker, FluffDetector, GoalCompleter",
      "BleuScoreEvaluator, RougeScoreEvaluator, F1ScoreEvaluator",
      "SafetyRiskEvaluator, HateSpeechEvaluator, ViolenceEvaluator"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: `azure.ai.evaluation` provides built-in AI-assisted quality evaluators including `GroundednessEvaluator`, `RelevanceEvaluator`, and `SimilarityEvaluator`/`IntentResolutionEvaluator`."
  },
  {
    "id": 2893,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "When executing `evaluate_agent.py` (#10), you check the Azure AI Foundry web portal under Cluster Analysis. The UI displays: `Total Samples: 1, Passed: 0, Failed: 1`, even though your dataset had 89 items.",
    "question": "Why does Cluster Analysis display only 1 sample instead of 89?",
    "options": [
      "Cluster Analysis is strictly an error-clustering tool; it filters out all passing evaluations (scores >= 3) and only groups failed test items (scores < 3) by root cause.",
      "The dataset upload timed out after processing the first row in JSONL.",
      "You must upgrade your Azure AI Foundry pricing tier to view more than 1 sample.",
      "The LLM Judge model (`gpt-5.1`) encountered a fatal exception on row 2."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: A critical exam concept: In Azure AI Foundry, Cluster Analysis is exclusively an error-discovery tool. It hides passing tests and clusters only failed evaluations by semantic root cause."
  },
  {
    "id": 2894,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are writing a custom evaluator in Python for Trail Guide (#10) to verify that responses never recommend closed winter trails.",
    "question": "What is the correct structural signature for a custom evaluator class or function in `azure.ai.evaluation`?",
    "options": [
      "def evaluate(self, *, query: str, response: str, **kwargs) -> dict: return {'safety_score': 5, 'reason': 'No closed trails mentioned'}",
      "def check_trail(prompt, answer): return True",
      "class TrailEval(BaseMetric): def calculate(): pass",
      "def run_eval(item_index): return os.system('check_trail')"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Custom evaluators in `azure.ai.evaluation` must accept keyword-only arguments matching dataset column names (`query`, `response`, `context`) and return a dictionary of metric scores/reasons."
  },
  {
    "id": 2895,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `data/trail_guide_evaluation_dataset.jsonl` (#10), what are the three mandatory column keys required for running `GroundednessEvaluator`?",
    "question": "What is the correct structural signature for a custom evaluator class or function in `azure.ai.evaluation`?",
    "options": [
      "`query` (user question), `response` (agent answer), and `context` (ground truth / retrieved RAG documents)",
      "`prompt`, `completion`, and `tokens`",
      "`input_text`, `output_text`, and `label_id`",
      "`question`, `prediction`, and `bleu_score`"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Evaluating groundedness (hallucination detection) requires comparing the agent's `response` against the authoritative source `context` for a given user `query`."
  },
  {
    "id": 2896,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "During cloud evaluation execution (#10), `client.evals.runs.create()` launches asynchronous cloud workers using GPT-5.1 as the LLM Judge.",
    "question": "How should your script monitor the evaluation run until completion without timing out or causing infinite loops?",
    "options": [
      "Implement a polling loop using `client.evals.runs.retrieve(run_id)` every 10 seconds until `run.status` reaches `'completed'` or `'failed'`.",
      "Execute `time.sleep(3600)` immediately after calling `create()`.",
      "Use a WebSocket callback listener on port 8080.",
      "Call `client.evals.runs.wait_for_completion(timeout=10)`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Cloud evaluation runs are asynchronous. Robust MLOps scripts poll `client.evals.runs.retrieve(run_id)` in a timed loop until status reaches terminal states (`completed`, `failed`, `canceled`)."
  },
  {
    "id": 2897,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `evaluation_results.txt` (#10), you notice that Groundedness score dropped from 4.8 to 2.1 after switching from prompt `v2_structured.txt` to `v3_verbose.txt`.",
    "question": "Why did verbose prompting cause a severe drop in Groundedness score?",
    "options": [
      "Verbose prompting encourages the model to generate extra conversational filler and unverified background lore not present in the RAG RAG context, triggering hallucination penalties by the LLM Judge.",
      "The LLM Judge model ran out of token context window.",
      "Verbose prompts automatically disable Azure AI Content Safety filters.",
      "The evaluation dataset JSONL became corrupted during Git commit."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Groundedness measures strict adherence to provided source context. Verbose prompts (`v3`) instruct models to elaborate extensively, frequently introducing unverified claims (hallucinations)."
  },
  {
    "id": 2898,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You want to evaluate Trail Guide Agent (#10) for potential jailbreak vulnerabilities and adversarial prompt injections using Safety & Risk evaluators.",
    "question": "Which built-in safety evaluators from `azure.ai.evaluation` should be included in the evaluation run?",
    "options": [
      "ViolenceEvaluator, HateUnfairnessEvaluator, SelfHarmEvaluator, and SexualEvaluator (accompanied by IndirectAttackEvaluator)",
      "BleuScoreEvaluator and F1ScoreEvaluator",
      "LatencyEvaluator and TokenCountEvaluator",
      "NetworkSecurityEvaluator and FirewallRuleEvaluator"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Azure AI Foundry provides specialized Safety & Risk evaluators (`Violence`, `HateUnfairness`, `SelfHarm`, `Sexual`, `IndirectAttack`) that output severity levels (Very Low to High)."
  },
  {
    "id": 2899,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "An MLOps engineer executes `evaluate_agent.py` (#10) locally and wants to export item-level evaluation results to a CSV file for team review.",
    "question": "Which property of the evaluation output object contains the per-row Pandas DataFrame or dictionary list?",
    "options": [
      "`eval_result.rows` (or `eval_result['rows']`), which contains item-level metrics and explanations for each dataset row.",
      "`eval_result.summary_only`",
      "`eval_result.metrics_average`",
      "`eval_result.console_logs`"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: When running local evaluations in `azure.ai.evaluation`, the returned object contains `.rows` (item-level results) and `.metrics` (aggregate averages)."
  },
  {
    "id": 2900,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/evaluators/download_eval_results.py` (#10), you need to programmatically fetch the average scores of a completed cloud evaluation run.",
    "question": "Which SDK call retrieves the output metric summary of a cloud run?",
    "options": [
      "metrics = project_client.evals.runs.get_metrics(run_id=eval_run_id)",
      "metrics = os.cat('cloud_results.json')",
      "metrics = project_client.telemetry.get_last_span()",
      "metrics = project_client.models.list_scores()"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In `AIProjectClient`, retrieving aggregate evaluation results from the cloud database is performed via `project_client.evals.runs.get_metrics(run_id)` or inspecting output items."
  }
];
