// AI-300 Hands-On Enterprise Implementation Simulator (EASY Tier - Track 3: Automated Evaluation & LLM-as-a-Judge)
window.HANDSON_DATA_EASY_T3 = [
  {
    "id": 2201,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2202,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2203,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2204,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2205,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2206,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2207,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2208,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2209,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2210,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2211,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2212,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2213,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2214,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2215,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2216,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2217,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2218,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2219,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2220,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2221,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2222,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2223,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2224,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2225,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2226,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2227,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2228,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2229,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2230,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2231,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2232,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2233,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2234,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2235,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2236,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2237,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2238,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2239,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2240,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2241,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2242,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2243,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2244,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2245,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2246,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2247,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2248,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2249,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2250,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2251,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2252,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2253,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2254,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2255,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2256,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2257,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2258,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2259,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2260,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2261,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2262,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2263,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2264,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2265,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2266,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2267,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2268,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2269,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2270,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2271,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2272,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2273,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2274,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2275,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2276,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2277,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2278,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2279,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2280,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2281,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2282,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2283,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2284,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2285,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2286,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2287,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2288,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2289,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2290,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2291,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2292,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2293,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2294,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2295,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2296,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2297,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2298,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2299,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
    "id": 2300,
    "track": "T3",
    "domain": "Track 3: Automated Evaluation & LLM-as-a-Judge",
    "difficulty": "Easy",
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
