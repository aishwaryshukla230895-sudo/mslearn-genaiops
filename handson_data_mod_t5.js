window.HANDSON_DATA_MOD_T5 = [
  {
    "id": 3001,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Adventure Works Core Hub` implementing `GitHub Actions Workflow Trigger (`on: push: branches: [main]`, `paths-ignore`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `parsing `evaluation_results.txt` inside CI step to block PRs` (Implementation Task #1).",
    "question": "[MOD Coding Task #1] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `GitHub Actions Workflow Trigger (`on: push: branches: [main]`, `paths-ignore`)` when implementing `parsing `evaluation_results.txt` inside CI step to block PRs`?",
    "options": [
      "A) Writing `- name: Check Quality Gate\n  run: |\n    SCORE=$(grep 'Groundedness:' evaluation_results.txt | awk '{print $2}')\n    if (( $(echo \"$SCORE < 3.8\" | bc -l) )); then\n      echo \"Quality Gate Failed: Groundedness $SCORE < 3.8\"; exit 1;\n    fi`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `- name: Check Quality Gate\n  run: |\n    SCORE=$(grep 'Groundedness:' evaluation_results.txt | awk '{print $2}')\n    if (( $(echo \"$SCORE < 3.8\" | bc -l) )); then\n      echo \"Quality Gate Failed: Groundedness $SCORE < 3.8\"; exit 1;\n    fi`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `GitHub Actions Workflow Trigger (`on: push: branches: [main]`, `paths-ignore`)`, Writing `- name: Check Quality Gate\n  run: |\n    SCORE=$(grep 'Groundedness:' evaluation_results.txt | awk '{print $2}')\n    if (( $(echo \"$SCORE < 3.8\" | bc -l) )); then\n      echo \"Quality Gate Failed: Groundedness $SCORE < 3.8\"; exit 1;\n    fi`. is the officially required syntax for `parsing `evaluation_results.txt` inside CI step to block PRs`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3002,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Contoso Health AI` implementing `OIDC Workload Identity Federation (`id-token: write`, `azure/login@v1`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `parsing `evaluation_results.txt` inside CI step to block PRs` (Implementation Task #2).",
    "question": "[MOD Coding Task #2] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `OIDC Workload Identity Federation (`id-token: write`, `azure/login@v1`)` when implementing `parsing `evaluation_results.txt` inside CI step to block PRs`?",
    "options": [
      "A) Writing `- name: Check Quality Gate\n  run: |\n    SCORE=$(grep 'Groundedness:' evaluation_results.txt | awk '{print $2}')\n    if (( $(echo \"$SCORE < 3.8\" | bc -l) )); then\n      echo \"Quality Gate Failed: Groundedness $SCORE < 3.8\"; exit 1;\n    fi`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `- name: Check Quality Gate\n  run: |\n    SCORE=$(grep 'Groundedness:' evaluation_results.txt | awk '{print $2}')\n    if (( $(echo \"$SCORE < 3.8\" | bc -l) )); then\n      echo \"Quality Gate Failed: Groundedness $SCORE < 3.8\"; exit 1;\n    fi`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `OIDC Workload Identity Federation (`id-token: write`, `azure/login@v1`)`, Writing `- name: Check Quality Gate\n  run: |\n    SCORE=$(grep 'Groundedness:' evaluation_results.txt | awk '{print $2}')\n    if (( $(echo \"$SCORE < 3.8\" | bc -l) )); then\n      echo \"Quality Gate Failed: Groundedness $SCORE < 3.8\"; exit 1;\n    fi`. is the officially required syntax for `parsing `evaluation_results.txt` inside CI step to block PRs`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3003,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Fabrikam Logistics Agent` implementing `Azure CLI & ML Extension Installation (`az extension add -n ml -y`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `parsing `evaluation_results.txt` inside CI step to block PRs` (Implementation Task #3).",
    "question": "[MOD Coding Task #3] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Azure CLI & ML Extension Installation (`az extension add -n ml -y`)` when implementing `parsing `evaluation_results.txt` inside CI step to block PRs`?",
    "options": [
      "A) Writing `- name: Check Quality Gate\n  run: |\n    SCORE=$(grep 'Groundedness:' evaluation_results.txt | awk '{print $2}')\n    if (( $(echo \"$SCORE < 3.8\" | bc -l) )); then\n      echo \"Quality Gate Failed: Groundedness $SCORE < 3.8\"; exit 1;\n    fi`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `- name: Check Quality Gate\n  run: |\n    SCORE=$(grep 'Groundedness:' evaluation_results.txt | awk '{print $2}')\n    if (( $(echo \"$SCORE < 3.8\" | bc -l) )); then\n      echo \"Quality Gate Failed: Groundedness $SCORE < 3.8\"; exit 1;\n    fi`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Azure CLI & ML Extension Installation (`az extension add -n ml -y`)`, Writing `- name: Check Quality Gate\n  run: |\n    SCORE=$(grep 'Groundedness:' evaluation_results.txt | awk '{print $2}')\n    if (( $(echo \"$SCORE < 3.8\" | bc -l) )); then\n      echo \"Quality Gate Failed: Groundedness $SCORE < 3.8\"; exit 1;\n    fi`. is the officially required syntax for `parsing `evaluation_results.txt` inside CI step to block PRs`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3004,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Trey Research Lab` implementing `Bicep Linter & What-If Validation (`az deployment group what-if`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `parsing `evaluation_results.txt` inside CI step to block PRs` (Implementation Task #4).",
    "question": "[MOD Coding Task #4] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Bicep Linter & What-If Validation (`az deployment group what-if`)` for `parsing `evaluation_results.txt` inside CI step to block PRs`? (Select three)",
    "options": [
      "A) Writing `- name: Check Quality Gate\n  run: |\n    SCORE=$(grep 'Groundedness:' evaluation_results.txt | awk '{print $2}')\n    if (( $(echo \"$SCORE < 3.8\" | bc -l) )); then\n      echo \"Quality Gate Failed: Groundedness $SCORE < 3.8\"; exit 1;\n    fi`.",
      "B) Authenticating via zero-trust `DefaultAzureCredential()` (`User-Assigned Managed Identity`) or OIDC workload identity federation (`id-token: write`).",
      "C) Enabling structured diagnostic log forwarding (`AgentTelemetry`, `AppDependencies`) directly to Log Analytics for continuous KQL tracing.",
      "D) Disabling all Private Endpoints (`publicNetworkAccess: 'Enabled'`) and exposing model inference ports directly to public `0.0.0.0/0` internet traffic.",
      "E) Storing production OpenAI `api-key` strings directly inside client-side frontend bundle files to bypass Key Vault secret retrieval overhead."
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Bicep Linter & What-If Validation (`az deployment group what-if`)` for `parsing `evaluation_results.txt` inside CI step to block PRs`, enterprise coding standards mandate: (1) Writing `- name: Check Quality Gate\n  run: |\n    SCORE=$(grep 'Groundedness:' evaluation_results.txt | awk '{print $2}')\n    if (( $(echo \"$SCORE < 3.8\" | bc -l) )); then\n      echo \"Quality Gate Failed: Groundedness $SCORE < 3.8\"; exit 1;\n    fi`., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 3005,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Northwind Traders Bot` implementing `Python Unit Testing & Code Quality (`pytest src/tests/ --junitxml`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `parsing `evaluation_results.txt` inside CI step to block PRs` (Implementation Task #5).",
    "question": "[MOD Coding Task #5] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Python Unit Testing & Code Quality (`pytest src/tests/ --junitxml`)` when implementing `parsing `evaluation_results.txt` inside CI step to block PRs`?",
    "options": [
      "A) Writing `- name: Check Quality Gate\n  run: |\n    SCORE=$(grep 'Groundedness:' evaluation_results.txt | awk '{print $2}')\n    if (( $(echo \"$SCORE < 3.8\" | bc -l) )); then\n      echo \"Quality Gate Failed: Groundedness $SCORE < 3.8\"; exit 1;\n    fi`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `- name: Check Quality Gate\n  run: |\n    SCORE=$(grep 'Groundedness:' evaluation_results.txt | awk '{print $2}')\n    if (( $(echo \"$SCORE < 3.8\" | bc -l) )); then\n      echo \"Quality Gate Failed: Groundedness $SCORE < 3.8\"; exit 1;\n    fi`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Python Unit Testing & Code Quality (`pytest src/tests/ --junitxml`)`, Writing `- name: Check Quality Gate\n  run: |\n    SCORE=$(grep 'Groundedness:' evaluation_results.txt | awk '{print $2}')\n    if (( $(echo \"$SCORE < 3.8\" | bc -l) )); then\n      echo \"Quality Gate Failed: Groundedness $SCORE < 3.8\"; exit 1;\n    fi`. is the officially required syntax for `parsing `evaluation_results.txt` inside CI step to block PRs`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3006,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Woodgrove Bank Virtual Assistant` implementing `Evaluation Quality Gating Script (`python -c 'assert groundedness >= 3.8'`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `parsing `evaluation_results.txt` inside CI step to block PRs` (Implementation Task #6).",
    "question": "[MOD Coding Task #6] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Evaluation Quality Gating Script (`python -c 'assert groundedness >= 3.8'`)` when implementing `parsing `evaluation_results.txt` inside CI step to block PRs`?",
    "options": [
      "A) Writing `- name: Check Quality Gate\n  run: |\n    SCORE=$(grep 'Groundedness:' evaluation_results.txt | awk '{print $2}')\n    if (( $(echo \"$SCORE < 3.8\" | bc -l) )); then\n      echo \"Quality Gate Failed: Groundedness $SCORE < 3.8\"; exit 1;\n    fi`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `- name: Check Quality Gate\n  run: |\n    SCORE=$(grep 'Groundedness:' evaluation_results.txt | awk '{print $2}')\n    if (( $(echo \"$SCORE < 3.8\" | bc -l) )); then\n      echo \"Quality Gate Failed: Groundedness $SCORE < 3.8\"; exit 1;\n    fi`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Evaluation Quality Gating Script (`python -c 'assert groundedness >= 3.8'`)`, Writing `- name: Check Quality Gate\n  run: |\n    SCORE=$(grep 'Groundedness:' evaluation_results.txt | awk '{print $2}')\n    if (( $(echo \"$SCORE < 3.8\" | bc -l) )); then\n      echo \"Quality Gate Failed: Groundedness $SCORE < 3.8\"; exit 1;\n    fi`. is the officially required syntax for `parsing `evaluation_results.txt` inside CI step to block PRs`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3007,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Litware Legal Evaluator` implementing `Model Promotion Registry Command (`az ml model show / create`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `parsing `evaluation_results.txt` inside CI step to block PRs` (Implementation Task #7).",
    "question": "[MOD Coding Task #7] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Model Promotion Registry Command (`az ml model show / create`)` when implementing `parsing `evaluation_results.txt` inside CI step to block PRs`?",
    "options": [
      "A) Writing `- name: Check Quality Gate\n  run: |\n    SCORE=$(grep 'Groundedness:' evaluation_results.txt | awk '{print $2}')\n    if (( $(echo \"$SCORE < 3.8\" | bc -l) )); then\n      echo \"Quality Gate Failed: Groundedness $SCORE < 3.8\"; exit 1;\n    fi`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `- name: Check Quality Gate\n  run: |\n    SCORE=$(grep 'Groundedness:' evaluation_results.txt | awk '{print $2}')\n    if (( $(echo \"$SCORE < 3.8\" | bc -l) )); then\n      echo \"Quality Gate Failed: Groundedness $SCORE < 3.8\"; exit 1;\n    fi`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Model Promotion Registry Command (`az ml model show / create`)`, Writing `- name: Check Quality Gate\n  run: |\n    SCORE=$(grep 'Groundedness:' evaluation_results.txt | awk '{print $2}')\n    if (( $(echo \"$SCORE < 3.8\" | bc -l) )); then\n      echo \"Quality Gate Failed: Groundedness $SCORE < 3.8\"; exit 1;\n    fi`. is the officially required syntax for `parsing `evaluation_results.txt` inside CI step to block PRs`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3008,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `A.Datum Retail Copilot` implementing `GitHub Environments & PR Approval Rules (`environment: prod-review`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `parsing `evaluation_results.txt` inside CI step to block PRs` (Implementation Task #8).",
    "question": "[MOD Coding Task #8] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `GitHub Environments & PR Approval Rules (`environment: prod-review`)` for `parsing `evaluation_results.txt` inside CI step to block PRs`? (Select three)",
    "options": [
      "A) Writing `- name: Check Quality Gate\n  run: |\n    SCORE=$(grep 'Groundedness:' evaluation_results.txt | awk '{print $2}')\n    if (( $(echo \"$SCORE < 3.8\" | bc -l) )); then\n      echo \"Quality Gate Failed: Groundedness $SCORE < 3.8\"; exit 1;\n    fi`.",
      "B) Authenticating via zero-trust `DefaultAzureCredential()` (`User-Assigned Managed Identity`) or OIDC workload identity federation (`id-token: write`).",
      "C) Enabling structured diagnostic log forwarding (`AgentTelemetry`, `AppDependencies`) directly to Log Analytics for continuous KQL tracing.",
      "D) Disabling all Private Endpoints (`publicNetworkAccess: 'Enabled'`) and exposing model inference ports directly to public `0.0.0.0/0` internet traffic.",
      "E) Storing production OpenAI `api-key` strings directly inside client-side frontend bundle files to bypass Key Vault secret retrieval overhead."
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `GitHub Environments & PR Approval Rules (`environment: prod-review`)` for `parsing `evaluation_results.txt` inside CI step to block PRs`, enterprise coding standards mandate: (1) Writing `- name: Check Quality Gate\n  run: |\n    SCORE=$(grep 'Groundedness:' evaluation_results.txt | awk '{print $2}')\n    if (( $(echo \"$SCORE < 3.8\" | bc -l) )); then\n      echo \"Quality Gate Failed: Groundedness $SCORE < 3.8\"; exit 1;\n    fi`., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 3009,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Alpine Ski Field Technician` implementing `Canary Traffic Splitting Rollout (`az ml online-endpoint update --traffic`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `parsing `evaluation_results.txt` inside CI step to block PRs` (Implementation Task #9).",
    "question": "[MOD Coding Task #9] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Canary Traffic Splitting Rollout (`az ml online-endpoint update --traffic`)` when implementing `parsing `evaluation_results.txt` inside CI step to block PRs`?",
    "options": [
      "A) Writing `- name: Check Quality Gate\n  run: |\n    SCORE=$(grep 'Groundedness:' evaluation_results.txt | awk '{print $2}')\n    if (( $(echo \"$SCORE < 3.8\" | bc -l) )); then\n      echo \"Quality Gate Failed: Groundedness $SCORE < 3.8\"; exit 1;\n    fi`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `- name: Check Quality Gate\n  run: |\n    SCORE=$(grep 'Groundedness:' evaluation_results.txt | awk '{print $2}')\n    if (( $(echo \"$SCORE < 3.8\" | bc -l) )); then\n      echo \"Quality Gate Failed: Groundedness $SCORE < 3.8\"; exit 1;\n    fi`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Canary Traffic Splitting Rollout (`az ml online-endpoint update --traffic`)`, Writing `- name: Check Quality Gate\n  run: |\n    SCORE=$(grep 'Groundedness:' evaluation_results.txt | awk '{print $2}')\n    if (( $(echo \"$SCORE < 3.8\" | bc -l) )); then\n      echo \"Quality Gate Failed: Groundedness $SCORE < 3.8\"; exit 1;\n    fi`. is the officially required syntax for `parsing `evaluation_results.txt` inside CI step to block PRs`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3010,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Tailwind Traders Multi-Agent` implementing `Pipeline Artifact Upload & Caching (`actions/upload-artifact@v4`, `cache@v4`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `parsing `evaluation_results.txt` inside CI step to block PRs` (Implementation Task #10).",
    "question": "[MOD Coding Task #10] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Pipeline Artifact Upload & Caching (`actions/upload-artifact@v4`, `cache@v4`)` when implementing `parsing `evaluation_results.txt` inside CI step to block PRs`?",
    "options": [
      "A) Writing `- name: Check Quality Gate\n  run: |\n    SCORE=$(grep 'Groundedness:' evaluation_results.txt | awk '{print $2}')\n    if (( $(echo \"$SCORE < 3.8\" | bc -l) )); then\n      echo \"Quality Gate Failed: Groundedness $SCORE < 3.8\"; exit 1;\n    fi`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `- name: Check Quality Gate\n  run: |\n    SCORE=$(grep 'Groundedness:' evaluation_results.txt | awk '{print $2}')\n    if (( $(echo \"$SCORE < 3.8\" | bc -l) )); then\n      echo \"Quality Gate Failed: Groundedness $SCORE < 3.8\"; exit 1;\n    fi`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Pipeline Artifact Upload & Caching (`actions/upload-artifact@v4`, `cache@v4`)`, Writing `- name: Check Quality Gate\n  run: |\n    SCORE=$(grep 'Groundedness:' evaluation_results.txt | awk '{print $2}')\n    if (( $(echo \"$SCORE < 3.8\" | bc -l) )); then\n      echo \"Quality Gate Failed: Groundedness $SCORE < 3.8\"; exit 1;\n    fi`. is the officially required syntax for `parsing `evaluation_results.txt` inside CI step to block PRs`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3011,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Adventure Works Core Hub` implementing `GitHub Actions Workflow Trigger (`on: push: branches: [main]`, `paths-ignore`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `configuring path filtering (`paths-ignore`) to save GPU minutes` (Implementation Task #11).",
    "question": "[MOD Coding Task #11] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `GitHub Actions Workflow Trigger (`on: push: branches: [main]`, `paths-ignore`)` when implementing `configuring path filtering (`paths-ignore`) to save GPU minutes`?",
    "options": [
      "A) Writing `on:\n  pull_request:\n    branches: [main]\n    paths-ignore:\n      - '**.md'\n      - 'docs/**'\n      - 'LICENSE'` inside the trigger block.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `on:\n  pull_request:\n    branches: [main]\n    paths-ignore:\n      - '**.md'\n      - 'docs/**'\n      - 'LICENSE'` inside the trigger block.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `GitHub Actions Workflow Trigger (`on: push: branches: [main]`, `paths-ignore`)`, Writing `on:\n  pull_request:\n    branches: [main]\n    paths-ignore:\n      - '**.md'\n      - 'docs/**'\n      - 'LICENSE'` inside the trigger block. is the officially required syntax for `configuring path filtering (`paths-ignore`) to save GPU minutes`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3012,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Contoso Health AI` implementing `OIDC Workload Identity Federation (`id-token: write`, `azure/login@v1`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `configuring path filtering (`paths-ignore`) to save GPU minutes` (Implementation Task #12).",
    "question": "[MOD Coding Task #12] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `OIDC Workload Identity Federation (`id-token: write`, `azure/login@v1`)` for `configuring path filtering (`paths-ignore`) to save GPU minutes`? (Select three)",
    "options": [
      "A) Writing `on:\n  pull_request:\n    branches: [main]\n    paths-ignore:\n      - '**.md'\n      - 'docs/**'\n      - 'LICENSE'` inside the trigger block.",
      "B) Authenticating via zero-trust `DefaultAzureCredential()` (`User-Assigned Managed Identity`) or OIDC workload identity federation (`id-token: write`).",
      "C) Enabling structured diagnostic log forwarding (`AgentTelemetry`, `AppDependencies`) directly to Log Analytics for continuous KQL tracing.",
      "D) Disabling all Private Endpoints (`publicNetworkAccess: 'Enabled'`) and exposing model inference ports directly to public `0.0.0.0/0` internet traffic.",
      "E) Storing production OpenAI `api-key` strings directly inside client-side frontend bundle files to bypass Key Vault secret retrieval overhead."
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `OIDC Workload Identity Federation (`id-token: write`, `azure/login@v1`)` for `configuring path filtering (`paths-ignore`) to save GPU minutes`, enterprise coding standards mandate: (1) Writing `on:\n  pull_request:\n    branches: [main]\n    paths-ignore:\n      - '**.md'\n      - 'docs/**'\n      - 'LICENSE'` inside the trigger block., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 3013,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Fabrikam Logistics Agent` implementing `Azure CLI & ML Extension Installation (`az extension add -n ml -y`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `configuring path filtering (`paths-ignore`) to save GPU minutes` (Implementation Task #13).",
    "question": "[MOD Coding Task #13] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Azure CLI & ML Extension Installation (`az extension add -n ml -y`)` when implementing `configuring path filtering (`paths-ignore`) to save GPU minutes`?",
    "options": [
      "A) Writing `on:\n  pull_request:\n    branches: [main]\n    paths-ignore:\n      - '**.md'\n      - 'docs/**'\n      - 'LICENSE'` inside the trigger block.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `on:\n  pull_request:\n    branches: [main]\n    paths-ignore:\n      - '**.md'\n      - 'docs/**'\n      - 'LICENSE'` inside the trigger block.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Azure CLI & ML Extension Installation (`az extension add -n ml -y`)`, Writing `on:\n  pull_request:\n    branches: [main]\n    paths-ignore:\n      - '**.md'\n      - 'docs/**'\n      - 'LICENSE'` inside the trigger block. is the officially required syntax for `configuring path filtering (`paths-ignore`) to save GPU minutes`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3014,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Trey Research Lab` implementing `Bicep Linter & What-If Validation (`az deployment group what-if`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `configuring path filtering (`paths-ignore`) to save GPU minutes` (Implementation Task #14).",
    "question": "[MOD Coding Task #14] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep Linter & What-If Validation (`az deployment group what-if`)` when implementing `configuring path filtering (`paths-ignore`) to save GPU minutes`?",
    "options": [
      "A) Writing `on:\n  pull_request:\n    branches: [main]\n    paths-ignore:\n      - '**.md'\n      - 'docs/**'\n      - 'LICENSE'` inside the trigger block.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `on:\n  pull_request:\n    branches: [main]\n    paths-ignore:\n      - '**.md'\n      - 'docs/**'\n      - 'LICENSE'` inside the trigger block.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep Linter & What-If Validation (`az deployment group what-if`)`, Writing `on:\n  pull_request:\n    branches: [main]\n    paths-ignore:\n      - '**.md'\n      - 'docs/**'\n      - 'LICENSE'` inside the trigger block. is the officially required syntax for `configuring path filtering (`paths-ignore`) to save GPU minutes`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3015,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Northwind Traders Bot` implementing `Python Unit Testing & Code Quality (`pytest src/tests/ --junitxml`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `configuring path filtering (`paths-ignore`) to save GPU minutes` (Implementation Task #15).",
    "question": "[MOD Coding Task #15] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Python Unit Testing & Code Quality (`pytest src/tests/ --junitxml`)` when implementing `configuring path filtering (`paths-ignore`) to save GPU minutes`?",
    "options": [
      "A) Writing `on:\n  pull_request:\n    branches: [main]\n    paths-ignore:\n      - '**.md'\n      - 'docs/**'\n      - 'LICENSE'` inside the trigger block.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `on:\n  pull_request:\n    branches: [main]\n    paths-ignore:\n      - '**.md'\n      - 'docs/**'\n      - 'LICENSE'` inside the trigger block.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Python Unit Testing & Code Quality (`pytest src/tests/ --junitxml`)`, Writing `on:\n  pull_request:\n    branches: [main]\n    paths-ignore:\n      - '**.md'\n      - 'docs/**'\n      - 'LICENSE'` inside the trigger block. is the officially required syntax for `configuring path filtering (`paths-ignore`) to save GPU minutes`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3016,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Woodgrove Bank Virtual Assistant` implementing `Evaluation Quality Gating Script (`python -c 'assert groundedness >= 3.8'`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `configuring path filtering (`paths-ignore`) to save GPU minutes` (Implementation Task #16).",
    "question": "[MOD Coding Task #16] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Evaluation Quality Gating Script (`python -c 'assert groundedness >= 3.8'`)` for `configuring path filtering (`paths-ignore`) to save GPU minutes`? (Select three)",
    "options": [
      "A) Writing `on:\n  pull_request:\n    branches: [main]\n    paths-ignore:\n      - '**.md'\n      - 'docs/**'\n      - 'LICENSE'` inside the trigger block.",
      "B) Authenticating via zero-trust `DefaultAzureCredential()` (`User-Assigned Managed Identity`) or OIDC workload identity federation (`id-token: write`).",
      "C) Enabling structured diagnostic log forwarding (`AgentTelemetry`, `AppDependencies`) directly to Log Analytics for continuous KQL tracing.",
      "D) Disabling all Private Endpoints (`publicNetworkAccess: 'Enabled'`) and exposing model inference ports directly to public `0.0.0.0/0` internet traffic.",
      "E) Storing production OpenAI `api-key` strings directly inside client-side frontend bundle files to bypass Key Vault secret retrieval overhead."
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Evaluation Quality Gating Script (`python -c 'assert groundedness >= 3.8'`)` for `configuring path filtering (`paths-ignore`) to save GPU minutes`, enterprise coding standards mandate: (1) Writing `on:\n  pull_request:\n    branches: [main]\n    paths-ignore:\n      - '**.md'\n      - 'docs/**'\n      - 'LICENSE'` inside the trigger block., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 3017,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Litware Legal Evaluator` implementing `Model Promotion Registry Command (`az ml model show / create`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `configuring path filtering (`paths-ignore`) to save GPU minutes` (Implementation Task #17).",
    "question": "[MOD Coding Task #17] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Model Promotion Registry Command (`az ml model show / create`)` when implementing `configuring path filtering (`paths-ignore`) to save GPU minutes`?",
    "options": [
      "A) Writing `on:\n  pull_request:\n    branches: [main]\n    paths-ignore:\n      - '**.md'\n      - 'docs/**'\n      - 'LICENSE'` inside the trigger block.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `on:\n  pull_request:\n    branches: [main]\n    paths-ignore:\n      - '**.md'\n      - 'docs/**'\n      - 'LICENSE'` inside the trigger block.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Model Promotion Registry Command (`az ml model show / create`)`, Writing `on:\n  pull_request:\n    branches: [main]\n    paths-ignore:\n      - '**.md'\n      - 'docs/**'\n      - 'LICENSE'` inside the trigger block. is the officially required syntax for `configuring path filtering (`paths-ignore`) to save GPU minutes`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3018,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `A.Datum Retail Copilot` implementing `GitHub Environments & PR Approval Rules (`environment: prod-review`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `configuring path filtering (`paths-ignore`) to save GPU minutes` (Implementation Task #18).",
    "question": "[MOD Coding Task #18] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `GitHub Environments & PR Approval Rules (`environment: prod-review`)` when implementing `configuring path filtering (`paths-ignore`) to save GPU minutes`?",
    "options": [
      "A) Writing `on:\n  pull_request:\n    branches: [main]\n    paths-ignore:\n      - '**.md'\n      - 'docs/**'\n      - 'LICENSE'` inside the trigger block.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `on:\n  pull_request:\n    branches: [main]\n    paths-ignore:\n      - '**.md'\n      - 'docs/**'\n      - 'LICENSE'` inside the trigger block.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `GitHub Environments & PR Approval Rules (`environment: prod-review`)`, Writing `on:\n  pull_request:\n    branches: [main]\n    paths-ignore:\n      - '**.md'\n      - 'docs/**'\n      - 'LICENSE'` inside the trigger block. is the officially required syntax for `configuring path filtering (`paths-ignore`) to save GPU minutes`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3019,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Alpine Ski Field Technician` implementing `Canary Traffic Splitting Rollout (`az ml online-endpoint update --traffic`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `configuring path filtering (`paths-ignore`) to save GPU minutes` (Implementation Task #19).",
    "question": "[MOD Coding Task #19] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Canary Traffic Splitting Rollout (`az ml online-endpoint update --traffic`)` when implementing `configuring path filtering (`paths-ignore`) to save GPU minutes`?",
    "options": [
      "A) Writing `on:\n  pull_request:\n    branches: [main]\n    paths-ignore:\n      - '**.md'\n      - 'docs/**'\n      - 'LICENSE'` inside the trigger block.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `on:\n  pull_request:\n    branches: [main]\n    paths-ignore:\n      - '**.md'\n      - 'docs/**'\n      - 'LICENSE'` inside the trigger block.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Canary Traffic Splitting Rollout (`az ml online-endpoint update --traffic`)`, Writing `on:\n  pull_request:\n    branches: [main]\n    paths-ignore:\n      - '**.md'\n      - 'docs/**'\n      - 'LICENSE'` inside the trigger block. is the officially required syntax for `configuring path filtering (`paths-ignore`) to save GPU minutes`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3020,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Tailwind Traders Multi-Agent` implementing `Pipeline Artifact Upload & Caching (`actions/upload-artifact@v4`, `cache@v4`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `configuring path filtering (`paths-ignore`) to save GPU minutes` (Implementation Task #20).",
    "question": "[MOD Coding Task #20] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Pipeline Artifact Upload & Caching (`actions/upload-artifact@v4`, `cache@v4`)` for `configuring path filtering (`paths-ignore`) to save GPU minutes`? (Select three)",
    "options": [
      "A) Writing `on:\n  pull_request:\n    branches: [main]\n    paths-ignore:\n      - '**.md'\n      - 'docs/**'\n      - 'LICENSE'` inside the trigger block.",
      "B) Authenticating via zero-trust `DefaultAzureCredential()` (`User-Assigned Managed Identity`) or OIDC workload identity federation (`id-token: write`).",
      "C) Enabling structured diagnostic log forwarding (`AgentTelemetry`, `AppDependencies`) directly to Log Analytics for continuous KQL tracing.",
      "D) Disabling all Private Endpoints (`publicNetworkAccess: 'Enabled'`) and exposing model inference ports directly to public `0.0.0.0/0` internet traffic.",
      "E) Storing production OpenAI `api-key` strings directly inside client-side frontend bundle files to bypass Key Vault secret retrieval overhead."
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Pipeline Artifact Upload & Caching (`actions/upload-artifact@v4`, `cache@v4`)` for `configuring path filtering (`paths-ignore`) to save GPU minutes`, enterprise coding standards mandate: (1) Writing `on:\n  pull_request:\n    branches: [main]\n    paths-ignore:\n      - '**.md'\n      - 'docs/**'\n      - 'LICENSE'` inside the trigger block., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 3021,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Adventure Works Core Hub` implementing `GitHub Actions Workflow Trigger (`on: push: branches: [main]`, `paths-ignore`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `executing `az deployment group what-if` on Pull Request stage` (Implementation Task #21).",
    "question": "[MOD Coding Task #21] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `GitHub Actions Workflow Trigger (`on: push: branches: [main]`, `paths-ignore`)` when implementing `executing `az deployment group what-if` on Pull Request stage`?",
    "options": [
      "A) Writing `- name: What-If Infrastructure Check\n  run: az deployment group what-if --resource-group ${{ env.RG }} --template-file infra/main.bicep --parameters infra/main.parameters.json`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `- name: What-If Infrastructure Check\n  run: az deployment group what-if --resource-group ${{ env.RG }} --template-file infra/main.bicep --parameters infra/main.parameters.json`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `GitHub Actions Workflow Trigger (`on: push: branches: [main]`, `paths-ignore`)`, Writing `- name: What-If Infrastructure Check\n  run: az deployment group what-if --resource-group ${{ env.RG }} --template-file infra/main.bicep --parameters infra/main.parameters.json`. is the officially required syntax for `executing `az deployment group what-if` on Pull Request stage`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3022,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Contoso Health AI` implementing `OIDC Workload Identity Federation (`id-token: write`, `azure/login@v1`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `executing `az deployment group what-if` on Pull Request stage` (Implementation Task #22).",
    "question": "[MOD Coding Task #22] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `OIDC Workload Identity Federation (`id-token: write`, `azure/login@v1`)` when implementing `executing `az deployment group what-if` on Pull Request stage`?",
    "options": [
      "A) Writing `- name: What-If Infrastructure Check\n  run: az deployment group what-if --resource-group ${{ env.RG }} --template-file infra/main.bicep --parameters infra/main.parameters.json`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `- name: What-If Infrastructure Check\n  run: az deployment group what-if --resource-group ${{ env.RG }} --template-file infra/main.bicep --parameters infra/main.parameters.json`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `OIDC Workload Identity Federation (`id-token: write`, `azure/login@v1`)`, Writing `- name: What-If Infrastructure Check\n  run: az deployment group what-if --resource-group ${{ env.RG }} --template-file infra/main.bicep --parameters infra/main.parameters.json`. is the officially required syntax for `executing `az deployment group what-if` on Pull Request stage`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3023,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Fabrikam Logistics Agent` implementing `Azure CLI & ML Extension Installation (`az extension add -n ml -y`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `executing `az deployment group what-if` on Pull Request stage` (Implementation Task #23).",
    "question": "[MOD Coding Task #23] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Azure CLI & ML Extension Installation (`az extension add -n ml -y`)` when implementing `executing `az deployment group what-if` on Pull Request stage`?",
    "options": [
      "A) Writing `- name: What-If Infrastructure Check\n  run: az deployment group what-if --resource-group ${{ env.RG }} --template-file infra/main.bicep --parameters infra/main.parameters.json`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `- name: What-If Infrastructure Check\n  run: az deployment group what-if --resource-group ${{ env.RG }} --template-file infra/main.bicep --parameters infra/main.parameters.json`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Azure CLI & ML Extension Installation (`az extension add -n ml -y`)`, Writing `- name: What-If Infrastructure Check\n  run: az deployment group what-if --resource-group ${{ env.RG }} --template-file infra/main.bicep --parameters infra/main.parameters.json`. is the officially required syntax for `executing `az deployment group what-if` on Pull Request stage`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3024,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Trey Research Lab` implementing `Bicep Linter & What-If Validation (`az deployment group what-if`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `executing `az deployment group what-if` on Pull Request stage` (Implementation Task #24).",
    "question": "[MOD Coding Task #24] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Bicep Linter & What-If Validation (`az deployment group what-if`)` for `executing `az deployment group what-if` on Pull Request stage`? (Select three)",
    "options": [
      "A) Writing `- name: What-If Infrastructure Check\n  run: az deployment group what-if --resource-group ${{ env.RG }} --template-file infra/main.bicep --parameters infra/main.parameters.json`.",
      "B) Authenticating via zero-trust `DefaultAzureCredential()` (`User-Assigned Managed Identity`) or OIDC workload identity federation (`id-token: write`).",
      "C) Enabling structured diagnostic log forwarding (`AgentTelemetry`, `AppDependencies`) directly to Log Analytics for continuous KQL tracing.",
      "D) Disabling all Private Endpoints (`publicNetworkAccess: 'Enabled'`) and exposing model inference ports directly to public `0.0.0.0/0` internet traffic.",
      "E) Storing production OpenAI `api-key` strings directly inside client-side frontend bundle files to bypass Key Vault secret retrieval overhead."
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Bicep Linter & What-If Validation (`az deployment group what-if`)` for `executing `az deployment group what-if` on Pull Request stage`, enterprise coding standards mandate: (1) Writing `- name: What-If Infrastructure Check\n  run: az deployment group what-if --resource-group ${{ env.RG }} --template-file infra/main.bicep --parameters infra/main.parameters.json`., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 3025,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Northwind Traders Bot` implementing `Python Unit Testing & Code Quality (`pytest src/tests/ --junitxml`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `executing `az deployment group what-if` on Pull Request stage` (Implementation Task #25).",
    "question": "[MOD Coding Task #25] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Python Unit Testing & Code Quality (`pytest src/tests/ --junitxml`)` when implementing `executing `az deployment group what-if` on Pull Request stage`?",
    "options": [
      "A) Writing `- name: What-If Infrastructure Check\n  run: az deployment group what-if --resource-group ${{ env.RG }} --template-file infra/main.bicep --parameters infra/main.parameters.json`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `- name: What-If Infrastructure Check\n  run: az deployment group what-if --resource-group ${{ env.RG }} --template-file infra/main.bicep --parameters infra/main.parameters.json`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Python Unit Testing & Code Quality (`pytest src/tests/ --junitxml`)`, Writing `- name: What-If Infrastructure Check\n  run: az deployment group what-if --resource-group ${{ env.RG }} --template-file infra/main.bicep --parameters infra/main.parameters.json`. is the officially required syntax for `executing `az deployment group what-if` on Pull Request stage`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3026,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Woodgrove Bank Virtual Assistant` implementing `Evaluation Quality Gating Script (`python -c 'assert groundedness >= 3.8'`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `executing `az deployment group what-if` on Pull Request stage` (Implementation Task #26).",
    "question": "[MOD Coding Task #26] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Evaluation Quality Gating Script (`python -c 'assert groundedness >= 3.8'`)` when implementing `executing `az deployment group what-if` on Pull Request stage`?",
    "options": [
      "A) Writing `- name: What-If Infrastructure Check\n  run: az deployment group what-if --resource-group ${{ env.RG }} --template-file infra/main.bicep --parameters infra/main.parameters.json`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `- name: What-If Infrastructure Check\n  run: az deployment group what-if --resource-group ${{ env.RG }} --template-file infra/main.bicep --parameters infra/main.parameters.json`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Evaluation Quality Gating Script (`python -c 'assert groundedness >= 3.8'`)`, Writing `- name: What-If Infrastructure Check\n  run: az deployment group what-if --resource-group ${{ env.RG }} --template-file infra/main.bicep --parameters infra/main.parameters.json`. is the officially required syntax for `executing `az deployment group what-if` on Pull Request stage`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3027,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Litware Legal Evaluator` implementing `Model Promotion Registry Command (`az ml model show / create`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `executing `az deployment group what-if` on Pull Request stage` (Implementation Task #27).",
    "question": "[MOD Coding Task #27] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Model Promotion Registry Command (`az ml model show / create`)` when implementing `executing `az deployment group what-if` on Pull Request stage`?",
    "options": [
      "A) Writing `- name: What-If Infrastructure Check\n  run: az deployment group what-if --resource-group ${{ env.RG }} --template-file infra/main.bicep --parameters infra/main.parameters.json`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `- name: What-If Infrastructure Check\n  run: az deployment group what-if --resource-group ${{ env.RG }} --template-file infra/main.bicep --parameters infra/main.parameters.json`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Model Promotion Registry Command (`az ml model show / create`)`, Writing `- name: What-If Infrastructure Check\n  run: az deployment group what-if --resource-group ${{ env.RG }} --template-file infra/main.bicep --parameters infra/main.parameters.json`. is the officially required syntax for `executing `az deployment group what-if` on Pull Request stage`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3028,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `A.Datum Retail Copilot` implementing `GitHub Environments & PR Approval Rules (`environment: prod-review`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `executing `az deployment group what-if` on Pull Request stage` (Implementation Task #28).",
    "question": "[MOD Coding Task #28] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `GitHub Environments & PR Approval Rules (`environment: prod-review`)` for `executing `az deployment group what-if` on Pull Request stage`? (Select three)",
    "options": [
      "A) Writing `- name: What-If Infrastructure Check\n  run: az deployment group what-if --resource-group ${{ env.RG }} --template-file infra/main.bicep --parameters infra/main.parameters.json`.",
      "B) Authenticating via zero-trust `DefaultAzureCredential()` (`User-Assigned Managed Identity`) or OIDC workload identity federation (`id-token: write`).",
      "C) Enabling structured diagnostic log forwarding (`AgentTelemetry`, `AppDependencies`) directly to Log Analytics for continuous KQL tracing.",
      "D) Disabling all Private Endpoints (`publicNetworkAccess: 'Enabled'`) and exposing model inference ports directly to public `0.0.0.0/0` internet traffic.",
      "E) Storing production OpenAI `api-key` strings directly inside client-side frontend bundle files to bypass Key Vault secret retrieval overhead."
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `GitHub Environments & PR Approval Rules (`environment: prod-review`)` for `executing `az deployment group what-if` on Pull Request stage`, enterprise coding standards mandate: (1) Writing `- name: What-If Infrastructure Check\n  run: az deployment group what-if --resource-group ${{ env.RG }} --template-file infra/main.bicep --parameters infra/main.parameters.json`., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 3029,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Alpine Ski Field Technician` implementing `Canary Traffic Splitting Rollout (`az ml online-endpoint update --traffic`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `executing `az deployment group what-if` on Pull Request stage` (Implementation Task #29).",
    "question": "[MOD Coding Task #29] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Canary Traffic Splitting Rollout (`az ml online-endpoint update --traffic`)` when implementing `executing `az deployment group what-if` on Pull Request stage`?",
    "options": [
      "A) Writing `- name: What-If Infrastructure Check\n  run: az deployment group what-if --resource-group ${{ env.RG }} --template-file infra/main.bicep --parameters infra/main.parameters.json`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `- name: What-If Infrastructure Check\n  run: az deployment group what-if --resource-group ${{ env.RG }} --template-file infra/main.bicep --parameters infra/main.parameters.json`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Canary Traffic Splitting Rollout (`az ml online-endpoint update --traffic`)`, Writing `- name: What-If Infrastructure Check\n  run: az deployment group what-if --resource-group ${{ env.RG }} --template-file infra/main.bicep --parameters infra/main.parameters.json`. is the officially required syntax for `executing `az deployment group what-if` on Pull Request stage`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3030,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Tailwind Traders Multi-Agent` implementing `Pipeline Artifact Upload & Caching (`actions/upload-artifact@v4`, `cache@v4`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `executing `az deployment group what-if` on Pull Request stage` (Implementation Task #30).",
    "question": "[MOD Coding Task #30] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Pipeline Artifact Upload & Caching (`actions/upload-artifact@v4`, `cache@v4`)` when implementing `executing `az deployment group what-if` on Pull Request stage`?",
    "options": [
      "A) Writing `- name: What-If Infrastructure Check\n  run: az deployment group what-if --resource-group ${{ env.RG }} --template-file infra/main.bicep --parameters infra/main.parameters.json`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `- name: What-If Infrastructure Check\n  run: az deployment group what-if --resource-group ${{ env.RG }} --template-file infra/main.bicep --parameters infra/main.parameters.json`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Pipeline Artifact Upload & Caching (`actions/upload-artifact@v4`, `cache@v4`)`, Writing `- name: What-If Infrastructure Check\n  run: az deployment group what-if --resource-group ${{ env.RG }} --template-file infra/main.bicep --parameters infra/main.parameters.json`. is the officially required syntax for `executing `az deployment group what-if` on Pull Request stage`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3031,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Adventure Works Core Hub` implementing `GitHub Actions Workflow Trigger (`on: push: branches: [main]`, `paths-ignore`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `configuring GitHub Environment protection rules (`staging` -> `prod`)` (Implementation Task #31).",
    "question": "[MOD Coding Task #31] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `GitHub Actions Workflow Trigger (`on: push: branches: [main]`, `paths-ignore`)` when implementing `configuring GitHub Environment protection rules (`staging` -> `prod`)`?",
    "options": [
      "A) Writing `jobs:\n  deploy_prod:\n    runs-on: ubuntu-latest\n    environment: production\n    needs: [validate_staging]` where `production` requires 2 mandatory engineering reviewer approvals.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `jobs:\n  deploy_prod:\n    runs-on: ubuntu-latest\n    environment: production\n    needs: [validate_staging]` where `production` requires 2 mandatory engineering reviewer approvals.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `GitHub Actions Workflow Trigger (`on: push: branches: [main]`, `paths-ignore`)`, Writing `jobs:\n  deploy_prod:\n    runs-on: ubuntu-latest\n    environment: production\n    needs: [validate_staging]` where `production` requires 2 mandatory engineering reviewer approvals. is the officially required syntax for `configuring GitHub Environment protection rules (`staging` -> `prod`)`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3032,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Contoso Health AI` implementing `OIDC Workload Identity Federation (`id-token: write`, `azure/login@v1`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `configuring GitHub Environment protection rules (`staging` -> `prod`)` (Implementation Task #32).",
    "question": "[MOD Coding Task #32] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `OIDC Workload Identity Federation (`id-token: write`, `azure/login@v1`)` for `configuring GitHub Environment protection rules (`staging` -> `prod`)`? (Select three)",
    "options": [
      "A) Writing `jobs:\n  deploy_prod:\n    runs-on: ubuntu-latest\n    environment: production\n    needs: [validate_staging]` where `production` requires 2 mandatory engineering reviewer approvals.",
      "B) Authenticating via zero-trust `DefaultAzureCredential()` (`User-Assigned Managed Identity`) or OIDC workload identity federation (`id-token: write`).",
      "C) Enabling structured diagnostic log forwarding (`AgentTelemetry`, `AppDependencies`) directly to Log Analytics for continuous KQL tracing.",
      "D) Disabling all Private Endpoints (`publicNetworkAccess: 'Enabled'`) and exposing model inference ports directly to public `0.0.0.0/0` internet traffic.",
      "E) Storing production OpenAI `api-key` strings directly inside client-side frontend bundle files to bypass Key Vault secret retrieval overhead."
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `OIDC Workload Identity Federation (`id-token: write`, `azure/login@v1`)` for `configuring GitHub Environment protection rules (`staging` -> `prod`)`, enterprise coding standards mandate: (1) Writing `jobs:\n  deploy_prod:\n    runs-on: ubuntu-latest\n    environment: production\n    needs: [validate_staging]` where `production` requires 2 mandatory engineering reviewer approvals., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 3033,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Fabrikam Logistics Agent` implementing `Azure CLI & ML Extension Installation (`az extension add -n ml -y`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `configuring GitHub Environment protection rules (`staging` -> `prod`)` (Implementation Task #33).",
    "question": "[MOD Coding Task #33] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Azure CLI & ML Extension Installation (`az extension add -n ml -y`)` when implementing `configuring GitHub Environment protection rules (`staging` -> `prod`)`?",
    "options": [
      "A) Writing `jobs:\n  deploy_prod:\n    runs-on: ubuntu-latest\n    environment: production\n    needs: [validate_staging]` where `production` requires 2 mandatory engineering reviewer approvals.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `jobs:\n  deploy_prod:\n    runs-on: ubuntu-latest\n    environment: production\n    needs: [validate_staging]` where `production` requires 2 mandatory engineering reviewer approvals.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Azure CLI & ML Extension Installation (`az extension add -n ml -y`)`, Writing `jobs:\n  deploy_prod:\n    runs-on: ubuntu-latest\n    environment: production\n    needs: [validate_staging]` where `production` requires 2 mandatory engineering reviewer approvals. is the officially required syntax for `configuring GitHub Environment protection rules (`staging` -> `prod`)`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3034,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Trey Research Lab` implementing `Bicep Linter & What-If Validation (`az deployment group what-if`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `configuring GitHub Environment protection rules (`staging` -> `prod`)` (Implementation Task #34).",
    "question": "[MOD Coding Task #34] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep Linter & What-If Validation (`az deployment group what-if`)` when implementing `configuring GitHub Environment protection rules (`staging` -> `prod`)`?",
    "options": [
      "A) Writing `jobs:\n  deploy_prod:\n    runs-on: ubuntu-latest\n    environment: production\n    needs: [validate_staging]` where `production` requires 2 mandatory engineering reviewer approvals.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `jobs:\n  deploy_prod:\n    runs-on: ubuntu-latest\n    environment: production\n    needs: [validate_staging]` where `production` requires 2 mandatory engineering reviewer approvals.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep Linter & What-If Validation (`az deployment group what-if`)`, Writing `jobs:\n  deploy_prod:\n    runs-on: ubuntu-latest\n    environment: production\n    needs: [validate_staging]` where `production` requires 2 mandatory engineering reviewer approvals. is the officially required syntax for `configuring GitHub Environment protection rules (`staging` -> `prod`)`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3035,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Northwind Traders Bot` implementing `Python Unit Testing & Code Quality (`pytest src/tests/ --junitxml`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `configuring GitHub Environment protection rules (`staging` -> `prod`)` (Implementation Task #35).",
    "question": "[MOD Coding Task #35] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Python Unit Testing & Code Quality (`pytest src/tests/ --junitxml`)` when implementing `configuring GitHub Environment protection rules (`staging` -> `prod`)`?",
    "options": [
      "A) Writing `jobs:\n  deploy_prod:\n    runs-on: ubuntu-latest\n    environment: production\n    needs: [validate_staging]` where `production` requires 2 mandatory engineering reviewer approvals.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `jobs:\n  deploy_prod:\n    runs-on: ubuntu-latest\n    environment: production\n    needs: [validate_staging]` where `production` requires 2 mandatory engineering reviewer approvals.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Python Unit Testing & Code Quality (`pytest src/tests/ --junitxml`)`, Writing `jobs:\n  deploy_prod:\n    runs-on: ubuntu-latest\n    environment: production\n    needs: [validate_staging]` where `production` requires 2 mandatory engineering reviewer approvals. is the officially required syntax for `configuring GitHub Environment protection rules (`staging` -> `prod`)`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3036,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Woodgrove Bank Virtual Assistant` implementing `Evaluation Quality Gating Script (`python -c 'assert groundedness >= 3.8'`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `configuring GitHub Environment protection rules (`staging` -> `prod`)` (Implementation Task #36).",
    "question": "[MOD Coding Task #36] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Evaluation Quality Gating Script (`python -c 'assert groundedness >= 3.8'`)` for `configuring GitHub Environment protection rules (`staging` -> `prod`)`? (Select three)",
    "options": [
      "A) Writing `jobs:\n  deploy_prod:\n    runs-on: ubuntu-latest\n    environment: production\n    needs: [validate_staging]` where `production` requires 2 mandatory engineering reviewer approvals.",
      "B) Authenticating via zero-trust `DefaultAzureCredential()` (`User-Assigned Managed Identity`) or OIDC workload identity federation (`id-token: write`).",
      "C) Enabling structured diagnostic log forwarding (`AgentTelemetry`, `AppDependencies`) directly to Log Analytics for continuous KQL tracing.",
      "D) Disabling all Private Endpoints (`publicNetworkAccess: 'Enabled'`) and exposing model inference ports directly to public `0.0.0.0/0` internet traffic.",
      "E) Storing production OpenAI `api-key` strings directly inside client-side frontend bundle files to bypass Key Vault secret retrieval overhead."
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Evaluation Quality Gating Script (`python -c 'assert groundedness >= 3.8'`)` for `configuring GitHub Environment protection rules (`staging` -> `prod`)`, enterprise coding standards mandate: (1) Writing `jobs:\n  deploy_prod:\n    runs-on: ubuntu-latest\n    environment: production\n    needs: [validate_staging]` where `production` requires 2 mandatory engineering reviewer approvals., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 3037,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Litware Legal Evaluator` implementing `Model Promotion Registry Command (`az ml model show / create`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `configuring GitHub Environment protection rules (`staging` -> `prod`)` (Implementation Task #37).",
    "question": "[MOD Coding Task #37] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Model Promotion Registry Command (`az ml model show / create`)` when implementing `configuring GitHub Environment protection rules (`staging` -> `prod`)`?",
    "options": [
      "A) Writing `jobs:\n  deploy_prod:\n    runs-on: ubuntu-latest\n    environment: production\n    needs: [validate_staging]` where `production` requires 2 mandatory engineering reviewer approvals.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `jobs:\n  deploy_prod:\n    runs-on: ubuntu-latest\n    environment: production\n    needs: [validate_staging]` where `production` requires 2 mandatory engineering reviewer approvals.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Model Promotion Registry Command (`az ml model show / create`)`, Writing `jobs:\n  deploy_prod:\n    runs-on: ubuntu-latest\n    environment: production\n    needs: [validate_staging]` where `production` requires 2 mandatory engineering reviewer approvals. is the officially required syntax for `configuring GitHub Environment protection rules (`staging` -> `prod`)`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3038,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `A.Datum Retail Copilot` implementing `GitHub Environments & PR Approval Rules (`environment: prod-review`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `configuring GitHub Environment protection rules (`staging` -> `prod`)` (Implementation Task #38).",
    "question": "[MOD Coding Task #38] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `GitHub Environments & PR Approval Rules (`environment: prod-review`)` when implementing `configuring GitHub Environment protection rules (`staging` -> `prod`)`?",
    "options": [
      "A) Writing `jobs:\n  deploy_prod:\n    runs-on: ubuntu-latest\n    environment: production\n    needs: [validate_staging]` where `production` requires 2 mandatory engineering reviewer approvals.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `jobs:\n  deploy_prod:\n    runs-on: ubuntu-latest\n    environment: production\n    needs: [validate_staging]` where `production` requires 2 mandatory engineering reviewer approvals.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `GitHub Environments & PR Approval Rules (`environment: prod-review`)`, Writing `jobs:\n  deploy_prod:\n    runs-on: ubuntu-latest\n    environment: production\n    needs: [validate_staging]` where `production` requires 2 mandatory engineering reviewer approvals. is the officially required syntax for `configuring GitHub Environment protection rules (`staging` -> `prod`)`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3039,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Alpine Ski Field Technician` implementing `Canary Traffic Splitting Rollout (`az ml online-endpoint update --traffic`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `configuring GitHub Environment protection rules (`staging` -> `prod`)` (Implementation Task #39).",
    "question": "[MOD Coding Task #39] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Canary Traffic Splitting Rollout (`az ml online-endpoint update --traffic`)` when implementing `configuring GitHub Environment protection rules (`staging` -> `prod`)`?",
    "options": [
      "A) Writing `jobs:\n  deploy_prod:\n    runs-on: ubuntu-latest\n    environment: production\n    needs: [validate_staging]` where `production` requires 2 mandatory engineering reviewer approvals.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `jobs:\n  deploy_prod:\n    runs-on: ubuntu-latest\n    environment: production\n    needs: [validate_staging]` where `production` requires 2 mandatory engineering reviewer approvals.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Canary Traffic Splitting Rollout (`az ml online-endpoint update --traffic`)`, Writing `jobs:\n  deploy_prod:\n    runs-on: ubuntu-latest\n    environment: production\n    needs: [validate_staging]` where `production` requires 2 mandatory engineering reviewer approvals. is the officially required syntax for `configuring GitHub Environment protection rules (`staging` -> `prod`)`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3040,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Tailwind Traders Multi-Agent` implementing `Pipeline Artifact Upload & Caching (`actions/upload-artifact@v4`, `cache@v4`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `configuring GitHub Environment protection rules (`staging` -> `prod`)` (Implementation Task #40).",
    "question": "[MOD Coding Task #40] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Pipeline Artifact Upload & Caching (`actions/upload-artifact@v4`, `cache@v4`)` for `configuring GitHub Environment protection rules (`staging` -> `prod`)`? (Select three)",
    "options": [
      "A) Writing `jobs:\n  deploy_prod:\n    runs-on: ubuntu-latest\n    environment: production\n    needs: [validate_staging]` where `production` requires 2 mandatory engineering reviewer approvals.",
      "B) Authenticating via zero-trust `DefaultAzureCredential()` (`User-Assigned Managed Identity`) or OIDC workload identity federation (`id-token: write`).",
      "C) Enabling structured diagnostic log forwarding (`AgentTelemetry`, `AppDependencies`) directly to Log Analytics for continuous KQL tracing.",
      "D) Disabling all Private Endpoints (`publicNetworkAccess: 'Enabled'`) and exposing model inference ports directly to public `0.0.0.0/0` internet traffic.",
      "E) Storing production OpenAI `api-key` strings directly inside client-side frontend bundle files to bypass Key Vault secret retrieval overhead."
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Pipeline Artifact Upload & Caching (`actions/upload-artifact@v4`, `cache@v4`)` for `configuring GitHub Environment protection rules (`staging` -> `prod`)`, enterprise coding standards mandate: (1) Writing `jobs:\n  deploy_prod:\n    runs-on: ubuntu-latest\n    environment: production\n    needs: [validate_staging]` where `production` requires 2 mandatory engineering reviewer approvals., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 3041,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Adventure Works Core Hub` implementing `GitHub Actions Workflow Trigger (`on: push: branches: [main]`, `paths-ignore`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `executing canary traffic rollout step via Azure CLI` (Implementation Task #41).",
    "question": "[MOD Coding Task #41] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `GitHub Actions Workflow Trigger (`on: push: branches: [main]`, `paths-ignore`)` when implementing `executing canary traffic rollout step via Azure CLI`?",
    "options": [
      "A) Writing `- name: Canary 10% Rollout\n  run: az ml online-endpoint update --name endpoint-trail-guide --traffic '{\"blue\": 90, \"green\": 10}' --resource-group ${{ env.RG }} --workspace-name ${{ env.WS }}`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `- name: Canary 10% Rollout\n  run: az ml online-endpoint update --name endpoint-trail-guide --traffic '{\"blue\": 90, \"green\": 10}' --resource-group ${{ env.RG }} --workspace-name ${{ env.WS }}`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `GitHub Actions Workflow Trigger (`on: push: branches: [main]`, `paths-ignore`)`, Writing `- name: Canary 10% Rollout\n  run: az ml online-endpoint update --name endpoint-trail-guide --traffic '{\"blue\": 90, \"green\": 10}' --resource-group ${{ env.RG }} --workspace-name ${{ env.WS }}`. is the officially required syntax for `executing canary traffic rollout step via Azure CLI`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3042,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Contoso Health AI` implementing `OIDC Workload Identity Federation (`id-token: write`, `azure/login@v1`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `executing canary traffic rollout step via Azure CLI` (Implementation Task #42).",
    "question": "[MOD Coding Task #42] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `OIDC Workload Identity Federation (`id-token: write`, `azure/login@v1`)` when implementing `executing canary traffic rollout step via Azure CLI`?",
    "options": [
      "A) Writing `- name: Canary 10% Rollout\n  run: az ml online-endpoint update --name endpoint-trail-guide --traffic '{\"blue\": 90, \"green\": 10}' --resource-group ${{ env.RG }} --workspace-name ${{ env.WS }}`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `- name: Canary 10% Rollout\n  run: az ml online-endpoint update --name endpoint-trail-guide --traffic '{\"blue\": 90, \"green\": 10}' --resource-group ${{ env.RG }} --workspace-name ${{ env.WS }}`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `OIDC Workload Identity Federation (`id-token: write`, `azure/login@v1`)`, Writing `- name: Canary 10% Rollout\n  run: az ml online-endpoint update --name endpoint-trail-guide --traffic '{\"blue\": 90, \"green\": 10}' --resource-group ${{ env.RG }} --workspace-name ${{ env.WS }}`. is the officially required syntax for `executing canary traffic rollout step via Azure CLI`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3043,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Fabrikam Logistics Agent` implementing `Azure CLI & ML Extension Installation (`az extension add -n ml -y`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `executing canary traffic rollout step via Azure CLI` (Implementation Task #43).",
    "question": "[MOD Coding Task #43] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Azure CLI & ML Extension Installation (`az extension add -n ml -y`)` when implementing `executing canary traffic rollout step via Azure CLI`?",
    "options": [
      "A) Writing `- name: Canary 10% Rollout\n  run: az ml online-endpoint update --name endpoint-trail-guide --traffic '{\"blue\": 90, \"green\": 10}' --resource-group ${{ env.RG }} --workspace-name ${{ env.WS }}`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `- name: Canary 10% Rollout\n  run: az ml online-endpoint update --name endpoint-trail-guide --traffic '{\"blue\": 90, \"green\": 10}' --resource-group ${{ env.RG }} --workspace-name ${{ env.WS }}`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Azure CLI & ML Extension Installation (`az extension add -n ml -y`)`, Writing `- name: Canary 10% Rollout\n  run: az ml online-endpoint update --name endpoint-trail-guide --traffic '{\"blue\": 90, \"green\": 10}' --resource-group ${{ env.RG }} --workspace-name ${{ env.WS }}`. is the officially required syntax for `executing canary traffic rollout step via Azure CLI`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3044,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Trey Research Lab` implementing `Bicep Linter & What-If Validation (`az deployment group what-if`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `executing canary traffic rollout step via Azure CLI` (Implementation Task #44).",
    "question": "[MOD Coding Task #44] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Bicep Linter & What-If Validation (`az deployment group what-if`)` for `executing canary traffic rollout step via Azure CLI`? (Select three)",
    "options": [
      "A) Writing `- name: Canary 10% Rollout\n  run: az ml online-endpoint update --name endpoint-trail-guide --traffic '{\"blue\": 90, \"green\": 10}' --resource-group ${{ env.RG }} --workspace-name ${{ env.WS }}`.",
      "B) Authenticating via zero-trust `DefaultAzureCredential()` (`User-Assigned Managed Identity`) or OIDC workload identity federation (`id-token: write`).",
      "C) Enabling structured diagnostic log forwarding (`AgentTelemetry`, `AppDependencies`) directly to Log Analytics for continuous KQL tracing.",
      "D) Disabling all Private Endpoints (`publicNetworkAccess: 'Enabled'`) and exposing model inference ports directly to public `0.0.0.0/0` internet traffic.",
      "E) Storing production OpenAI `api-key` strings directly inside client-side frontend bundle files to bypass Key Vault secret retrieval overhead."
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Bicep Linter & What-If Validation (`az deployment group what-if`)` for `executing canary traffic rollout step via Azure CLI`, enterprise coding standards mandate: (1) Writing `- name: Canary 10% Rollout\n  run: az ml online-endpoint update --name endpoint-trail-guide --traffic '{\"blue\": 90, \"green\": 10}' --resource-group ${{ env.RG }} --workspace-name ${{ env.WS }}`., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 3045,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Northwind Traders Bot` implementing `Python Unit Testing & Code Quality (`pytest src/tests/ --junitxml`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `executing canary traffic rollout step via Azure CLI` (Implementation Task #45).",
    "question": "[MOD Coding Task #45] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Python Unit Testing & Code Quality (`pytest src/tests/ --junitxml`)` when implementing `executing canary traffic rollout step via Azure CLI`?",
    "options": [
      "A) Writing `- name: Canary 10% Rollout\n  run: az ml online-endpoint update --name endpoint-trail-guide --traffic '{\"blue\": 90, \"green\": 10}' --resource-group ${{ env.RG }} --workspace-name ${{ env.WS }}`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `- name: Canary 10% Rollout\n  run: az ml online-endpoint update --name endpoint-trail-guide --traffic '{\"blue\": 90, \"green\": 10}' --resource-group ${{ env.RG }} --workspace-name ${{ env.WS }}`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Python Unit Testing & Code Quality (`pytest src/tests/ --junitxml`)`, Writing `- name: Canary 10% Rollout\n  run: az ml online-endpoint update --name endpoint-trail-guide --traffic '{\"blue\": 90, \"green\": 10}' --resource-group ${{ env.RG }} --workspace-name ${{ env.WS }}`. is the officially required syntax for `executing canary traffic rollout step via Azure CLI`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3046,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Woodgrove Bank Virtual Assistant` implementing `Evaluation Quality Gating Script (`python -c 'assert groundedness >= 3.8'`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `executing canary traffic rollout step via Azure CLI` (Implementation Task #46).",
    "question": "[MOD Coding Task #46] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Evaluation Quality Gating Script (`python -c 'assert groundedness >= 3.8'`)` when implementing `executing canary traffic rollout step via Azure CLI`?",
    "options": [
      "A) Writing `- name: Canary 10% Rollout\n  run: az ml online-endpoint update --name endpoint-trail-guide --traffic '{\"blue\": 90, \"green\": 10}' --resource-group ${{ env.RG }} --workspace-name ${{ env.WS }}`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `- name: Canary 10% Rollout\n  run: az ml online-endpoint update --name endpoint-trail-guide --traffic '{\"blue\": 90, \"green\": 10}' --resource-group ${{ env.RG }} --workspace-name ${{ env.WS }}`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Evaluation Quality Gating Script (`python -c 'assert groundedness >= 3.8'`)`, Writing `- name: Canary 10% Rollout\n  run: az ml online-endpoint update --name endpoint-trail-guide --traffic '{\"blue\": 90, \"green\": 10}' --resource-group ${{ env.RG }} --workspace-name ${{ env.WS }}`. is the officially required syntax for `executing canary traffic rollout step via Azure CLI`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3047,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Litware Legal Evaluator` implementing `Model Promotion Registry Command (`az ml model show / create`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `executing canary traffic rollout step via Azure CLI` (Implementation Task #47).",
    "question": "[MOD Coding Task #47] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Model Promotion Registry Command (`az ml model show / create`)` when implementing `executing canary traffic rollout step via Azure CLI`?",
    "options": [
      "A) Writing `- name: Canary 10% Rollout\n  run: az ml online-endpoint update --name endpoint-trail-guide --traffic '{\"blue\": 90, \"green\": 10}' --resource-group ${{ env.RG }} --workspace-name ${{ env.WS }}`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `- name: Canary 10% Rollout\n  run: az ml online-endpoint update --name endpoint-trail-guide --traffic '{\"blue\": 90, \"green\": 10}' --resource-group ${{ env.RG }} --workspace-name ${{ env.WS }}`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Model Promotion Registry Command (`az ml model show / create`)`, Writing `- name: Canary 10% Rollout\n  run: az ml online-endpoint update --name endpoint-trail-guide --traffic '{\"blue\": 90, \"green\": 10}' --resource-group ${{ env.RG }} --workspace-name ${{ env.WS }}`. is the officially required syntax for `executing canary traffic rollout step via Azure CLI`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3048,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `A.Datum Retail Copilot` implementing `GitHub Environments & PR Approval Rules (`environment: prod-review`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `executing canary traffic rollout step via Azure CLI` (Implementation Task #48).",
    "question": "[MOD Coding Task #48] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `GitHub Environments & PR Approval Rules (`environment: prod-review`)` for `executing canary traffic rollout step via Azure CLI`? (Select three)",
    "options": [
      "A) Writing `- name: Canary 10% Rollout\n  run: az ml online-endpoint update --name endpoint-trail-guide --traffic '{\"blue\": 90, \"green\": 10}' --resource-group ${{ env.RG }} --workspace-name ${{ env.WS }}`.",
      "B) Authenticating via zero-trust `DefaultAzureCredential()` (`User-Assigned Managed Identity`) or OIDC workload identity federation (`id-token: write`).",
      "C) Enabling structured diagnostic log forwarding (`AgentTelemetry`, `AppDependencies`) directly to Log Analytics for continuous KQL tracing.",
      "D) Disabling all Private Endpoints (`publicNetworkAccess: 'Enabled'`) and exposing model inference ports directly to public `0.0.0.0/0` internet traffic.",
      "E) Storing production OpenAI `api-key` strings directly inside client-side frontend bundle files to bypass Key Vault secret retrieval overhead."
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `GitHub Environments & PR Approval Rules (`environment: prod-review`)` for `executing canary traffic rollout step via Azure CLI`, enterprise coding standards mandate: (1) Writing `- name: Canary 10% Rollout\n  run: az ml online-endpoint update --name endpoint-trail-guide --traffic '{\"blue\": 90, \"green\": 10}' --resource-group ${{ env.RG }} --workspace-name ${{ env.WS }}`., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 3049,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Alpine Ski Field Technician` implementing `Canary Traffic Splitting Rollout (`az ml online-endpoint update --traffic`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `executing canary traffic rollout step via Azure CLI` (Implementation Task #49).",
    "question": "[MOD Coding Task #49] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Canary Traffic Splitting Rollout (`az ml online-endpoint update --traffic`)` when implementing `executing canary traffic rollout step via Azure CLI`?",
    "options": [
      "A) Writing `- name: Canary 10% Rollout\n  run: az ml online-endpoint update --name endpoint-trail-guide --traffic '{\"blue\": 90, \"green\": 10}' --resource-group ${{ env.RG }} --workspace-name ${{ env.WS }}`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `- name: Canary 10% Rollout\n  run: az ml online-endpoint update --name endpoint-trail-guide --traffic '{\"blue\": 90, \"green\": 10}' --resource-group ${{ env.RG }} --workspace-name ${{ env.WS }}`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Canary Traffic Splitting Rollout (`az ml online-endpoint update --traffic`)`, Writing `- name: Canary 10% Rollout\n  run: az ml online-endpoint update --name endpoint-trail-guide --traffic '{\"blue\": 90, \"green\": 10}' --resource-group ${{ env.RG }} --workspace-name ${{ env.WS }}`. is the officially required syntax for `executing canary traffic rollout step via Azure CLI`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3050,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Tailwind Traders Multi-Agent` implementing `Pipeline Artifact Upload & Caching (`actions/upload-artifact@v4`, `cache@v4`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `executing canary traffic rollout step via Azure CLI` (Implementation Task #50).",
    "question": "[MOD Coding Task #50] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Pipeline Artifact Upload & Caching (`actions/upload-artifact@v4`, `cache@v4`)` when implementing `executing canary traffic rollout step via Azure CLI`?",
    "options": [
      "A) Writing `- name: Canary 10% Rollout\n  run: az ml online-endpoint update --name endpoint-trail-guide --traffic '{\"blue\": 90, \"green\": 10}' --resource-group ${{ env.RG }} --workspace-name ${{ env.WS }}`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `- name: Canary 10% Rollout\n  run: az ml online-endpoint update --name endpoint-trail-guide --traffic '{\"blue\": 90, \"green\": 10}' --resource-group ${{ env.RG }} --workspace-name ${{ env.WS }}`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Pipeline Artifact Upload & Caching (`actions/upload-artifact@v4`, `cache@v4`)`, Writing `- name: Canary 10% Rollout\n  run: az ml online-endpoint update --name endpoint-trail-guide --traffic '{\"blue\": 90, \"green\": 10}' --resource-group ${{ env.RG }} --workspace-name ${{ env.WS }}`. is the officially required syntax for `executing canary traffic rollout step via Azure CLI`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3051,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Adventure Works Core Hub` implementing `GitHub Actions Workflow Trigger (`on: push: branches: [main]`, `paths-ignore`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `dynamically querying latest registered model version from workspace` (Implementation Task #51).",
    "question": "[MOD Coding Task #51] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `GitHub Actions Workflow Trigger (`on: push: branches: [main]`, `paths-ignore`)` when implementing `dynamically querying latest registered model version from workspace`?",
    "options": [
      "A) Writing `- name: Get Model Version\n  run: |\n    VER=$(az ml model list --name model-trail-guide --query '[0].version' -o tsv)\n    echo \"LATEST_VER=$VER\" >> $GITHUB_ENV`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `- name: Get Model Version\n  run: |\n    VER=$(az ml model list --name model-trail-guide --query '[0].version' -o tsv)\n    echo \"LATEST_VER=$VER\" >> $GITHUB_ENV`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `GitHub Actions Workflow Trigger (`on: push: branches: [main]`, `paths-ignore`)`, Writing `- name: Get Model Version\n  run: |\n    VER=$(az ml model list --name model-trail-guide --query '[0].version' -o tsv)\n    echo \"LATEST_VER=$VER\" >> $GITHUB_ENV`. is the officially required syntax for `dynamically querying latest registered model version from workspace`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3052,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Contoso Health AI` implementing `OIDC Workload Identity Federation (`id-token: write`, `azure/login@v1`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `dynamically querying latest registered model version from workspace` (Implementation Task #52).",
    "question": "[MOD Coding Task #52] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `OIDC Workload Identity Federation (`id-token: write`, `azure/login@v1`)` for `dynamically querying latest registered model version from workspace`? (Select three)",
    "options": [
      "A) Writing `- name: Get Model Version\n  run: |\n    VER=$(az ml model list --name model-trail-guide --query '[0].version' -o tsv)\n    echo \"LATEST_VER=$VER\" >> $GITHUB_ENV`.",
      "B) Authenticating via zero-trust `DefaultAzureCredential()` (`User-Assigned Managed Identity`) or OIDC workload identity federation (`id-token: write`).",
      "C) Enabling structured diagnostic log forwarding (`AgentTelemetry`, `AppDependencies`) directly to Log Analytics for continuous KQL tracing.",
      "D) Disabling all Private Endpoints (`publicNetworkAccess: 'Enabled'`) and exposing model inference ports directly to public `0.0.0.0/0` internet traffic.",
      "E) Storing production OpenAI `api-key` strings directly inside client-side frontend bundle files to bypass Key Vault secret retrieval overhead."
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `OIDC Workload Identity Federation (`id-token: write`, `azure/login@v1`)` for `dynamically querying latest registered model version from workspace`, enterprise coding standards mandate: (1) Writing `- name: Get Model Version\n  run: |\n    VER=$(az ml model list --name model-trail-guide --query '[0].version' -o tsv)\n    echo \"LATEST_VER=$VER\" >> $GITHUB_ENV`., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 3053,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Fabrikam Logistics Agent` implementing `Azure CLI & ML Extension Installation (`az extension add -n ml -y`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `dynamically querying latest registered model version from workspace` (Implementation Task #53).",
    "question": "[MOD Coding Task #53] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Azure CLI & ML Extension Installation (`az extension add -n ml -y`)` when implementing `dynamically querying latest registered model version from workspace`?",
    "options": [
      "A) Writing `- name: Get Model Version\n  run: |\n    VER=$(az ml model list --name model-trail-guide --query '[0].version' -o tsv)\n    echo \"LATEST_VER=$VER\" >> $GITHUB_ENV`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `- name: Get Model Version\n  run: |\n    VER=$(az ml model list --name model-trail-guide --query '[0].version' -o tsv)\n    echo \"LATEST_VER=$VER\" >> $GITHUB_ENV`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Azure CLI & ML Extension Installation (`az extension add -n ml -y`)`, Writing `- name: Get Model Version\n  run: |\n    VER=$(az ml model list --name model-trail-guide --query '[0].version' -o tsv)\n    echo \"LATEST_VER=$VER\" >> $GITHUB_ENV`. is the officially required syntax for `dynamically querying latest registered model version from workspace`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3054,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Trey Research Lab` implementing `Bicep Linter & What-If Validation (`az deployment group what-if`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `dynamically querying latest registered model version from workspace` (Implementation Task #54).",
    "question": "[MOD Coding Task #54] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep Linter & What-If Validation (`az deployment group what-if`)` when implementing `dynamically querying latest registered model version from workspace`?",
    "options": [
      "A) Writing `- name: Get Model Version\n  run: |\n    VER=$(az ml model list --name model-trail-guide --query '[0].version' -o tsv)\n    echo \"LATEST_VER=$VER\" >> $GITHUB_ENV`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `- name: Get Model Version\n  run: |\n    VER=$(az ml model list --name model-trail-guide --query '[0].version' -o tsv)\n    echo \"LATEST_VER=$VER\" >> $GITHUB_ENV`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep Linter & What-If Validation (`az deployment group what-if`)`, Writing `- name: Get Model Version\n  run: |\n    VER=$(az ml model list --name model-trail-guide --query '[0].version' -o tsv)\n    echo \"LATEST_VER=$VER\" >> $GITHUB_ENV`. is the officially required syntax for `dynamically querying latest registered model version from workspace`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3055,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Northwind Traders Bot` implementing `Python Unit Testing & Code Quality (`pytest src/tests/ --junitxml`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `dynamically querying latest registered model version from workspace` (Implementation Task #55).",
    "question": "[MOD Coding Task #55] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Python Unit Testing & Code Quality (`pytest src/tests/ --junitxml`)` when implementing `dynamically querying latest registered model version from workspace`?",
    "options": [
      "A) Writing `- name: Get Model Version\n  run: |\n    VER=$(az ml model list --name model-trail-guide --query '[0].version' -o tsv)\n    echo \"LATEST_VER=$VER\" >> $GITHUB_ENV`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `- name: Get Model Version\n  run: |\n    VER=$(az ml model list --name model-trail-guide --query '[0].version' -o tsv)\n    echo \"LATEST_VER=$VER\" >> $GITHUB_ENV`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Python Unit Testing & Code Quality (`pytest src/tests/ --junitxml`)`, Writing `- name: Get Model Version\n  run: |\n    VER=$(az ml model list --name model-trail-guide --query '[0].version' -o tsv)\n    echo \"LATEST_VER=$VER\" >> $GITHUB_ENV`. is the officially required syntax for `dynamically querying latest registered model version from workspace`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3056,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Woodgrove Bank Virtual Assistant` implementing `Evaluation Quality Gating Script (`python -c 'assert groundedness >= 3.8'`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `dynamically querying latest registered model version from workspace` (Implementation Task #56).",
    "question": "[MOD Coding Task #56] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Evaluation Quality Gating Script (`python -c 'assert groundedness >= 3.8'`)` for `dynamically querying latest registered model version from workspace`? (Select three)",
    "options": [
      "A) Writing `- name: Get Model Version\n  run: |\n    VER=$(az ml model list --name model-trail-guide --query '[0].version' -o tsv)\n    echo \"LATEST_VER=$VER\" >> $GITHUB_ENV`.",
      "B) Authenticating via zero-trust `DefaultAzureCredential()` (`User-Assigned Managed Identity`) or OIDC workload identity federation (`id-token: write`).",
      "C) Enabling structured diagnostic log forwarding (`AgentTelemetry`, `AppDependencies`) directly to Log Analytics for continuous KQL tracing.",
      "D) Disabling all Private Endpoints (`publicNetworkAccess: 'Enabled'`) and exposing model inference ports directly to public `0.0.0.0/0` internet traffic.",
      "E) Storing production OpenAI `api-key` strings directly inside client-side frontend bundle files to bypass Key Vault secret retrieval overhead."
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Evaluation Quality Gating Script (`python -c 'assert groundedness >= 3.8'`)` for `dynamically querying latest registered model version from workspace`, enterprise coding standards mandate: (1) Writing `- name: Get Model Version\n  run: |\n    VER=$(az ml model list --name model-trail-guide --query '[0].version' -o tsv)\n    echo \"LATEST_VER=$VER\" >> $GITHUB_ENV`., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 3057,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Litware Legal Evaluator` implementing `Model Promotion Registry Command (`az ml model show / create`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `dynamically querying latest registered model version from workspace` (Implementation Task #57).",
    "question": "[MOD Coding Task #57] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Model Promotion Registry Command (`az ml model show / create`)` when implementing `dynamically querying latest registered model version from workspace`?",
    "options": [
      "A) Writing `- name: Get Model Version\n  run: |\n    VER=$(az ml model list --name model-trail-guide --query '[0].version' -o tsv)\n    echo \"LATEST_VER=$VER\" >> $GITHUB_ENV`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `- name: Get Model Version\n  run: |\n    VER=$(az ml model list --name model-trail-guide --query '[0].version' -o tsv)\n    echo \"LATEST_VER=$VER\" >> $GITHUB_ENV`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Model Promotion Registry Command (`az ml model show / create`)`, Writing `- name: Get Model Version\n  run: |\n    VER=$(az ml model list --name model-trail-guide --query '[0].version' -o tsv)\n    echo \"LATEST_VER=$VER\" >> $GITHUB_ENV`. is the officially required syntax for `dynamically querying latest registered model version from workspace`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3058,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `A.Datum Retail Copilot` implementing `GitHub Environments & PR Approval Rules (`environment: prod-review`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `dynamically querying latest registered model version from workspace` (Implementation Task #58).",
    "question": "[MOD Coding Task #58] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `GitHub Environments & PR Approval Rules (`environment: prod-review`)` when implementing `dynamically querying latest registered model version from workspace`?",
    "options": [
      "A) Writing `- name: Get Model Version\n  run: |\n    VER=$(az ml model list --name model-trail-guide --query '[0].version' -o tsv)\n    echo \"LATEST_VER=$VER\" >> $GITHUB_ENV`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `- name: Get Model Version\n  run: |\n    VER=$(az ml model list --name model-trail-guide --query '[0].version' -o tsv)\n    echo \"LATEST_VER=$VER\" >> $GITHUB_ENV`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `GitHub Environments & PR Approval Rules (`environment: prod-review`)`, Writing `- name: Get Model Version\n  run: |\n    VER=$(az ml model list --name model-trail-guide --query '[0].version' -o tsv)\n    echo \"LATEST_VER=$VER\" >> $GITHUB_ENV`. is the officially required syntax for `dynamically querying latest registered model version from workspace`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3059,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Alpine Ski Field Technician` implementing `Canary Traffic Splitting Rollout (`az ml online-endpoint update --traffic`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `dynamically querying latest registered model version from workspace` (Implementation Task #59).",
    "question": "[MOD Coding Task #59] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Canary Traffic Splitting Rollout (`az ml online-endpoint update --traffic`)` when implementing `dynamically querying latest registered model version from workspace`?",
    "options": [
      "A) Writing `- name: Get Model Version\n  run: |\n    VER=$(az ml model list --name model-trail-guide --query '[0].version' -o tsv)\n    echo \"LATEST_VER=$VER\" >> $GITHUB_ENV`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `- name: Get Model Version\n  run: |\n    VER=$(az ml model list --name model-trail-guide --query '[0].version' -o tsv)\n    echo \"LATEST_VER=$VER\" >> $GITHUB_ENV`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Canary Traffic Splitting Rollout (`az ml online-endpoint update --traffic`)`, Writing `- name: Get Model Version\n  run: |\n    VER=$(az ml model list --name model-trail-guide --query '[0].version' -o tsv)\n    echo \"LATEST_VER=$VER\" >> $GITHUB_ENV`. is the officially required syntax for `dynamically querying latest registered model version from workspace`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3060,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Tailwind Traders Multi-Agent` implementing `Pipeline Artifact Upload & Caching (`actions/upload-artifact@v4`, `cache@v4`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `dynamically querying latest registered model version from workspace` (Implementation Task #60).",
    "question": "[MOD Coding Task #60] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Pipeline Artifact Upload & Caching (`actions/upload-artifact@v4`, `cache@v4`)` for `dynamically querying latest registered model version from workspace`? (Select three)",
    "options": [
      "A) Writing `- name: Get Model Version\n  run: |\n    VER=$(az ml model list --name model-trail-guide --query '[0].version' -o tsv)\n    echo \"LATEST_VER=$VER\" >> $GITHUB_ENV`.",
      "B) Authenticating via zero-trust `DefaultAzureCredential()` (`User-Assigned Managed Identity`) or OIDC workload identity federation (`id-token: write`).",
      "C) Enabling structured diagnostic log forwarding (`AgentTelemetry`, `AppDependencies`) directly to Log Analytics for continuous KQL tracing.",
      "D) Disabling all Private Endpoints (`publicNetworkAccess: 'Enabled'`) and exposing model inference ports directly to public `0.0.0.0/0` internet traffic.",
      "E) Storing production OpenAI `api-key` strings directly inside client-side frontend bundle files to bypass Key Vault secret retrieval overhead."
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Pipeline Artifact Upload & Caching (`actions/upload-artifact@v4`, `cache@v4`)` for `dynamically querying latest registered model version from workspace`, enterprise coding standards mandate: (1) Writing `- name: Get Model Version\n  run: |\n    VER=$(az ml model list --name model-trail-guide --query '[0].version' -o tsv)\n    echo \"LATEST_VER=$VER\" >> $GITHUB_ENV`., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 3061,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Adventure Works Core Hub` implementing `GitHub Actions Workflow Trigger (`on: push: branches: [main]`, `paths-ignore`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `linking Azure DevOps Variable Groups directly to Key Vault` (Implementation Task #61).",
    "question": "[MOD Coding Task #61] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `GitHub Actions Workflow Trigger (`on: push: branches: [main]`, `paths-ignore`)` when implementing `linking Azure DevOps Variable Groups directly to Key Vault`?",
    "options": [
      "A) Writing `- variables:\n  - group: kv-ai300-secrets\n- script: echo \"Using endpoint $(AI-FOUNDRY-CONNECTION-STRING)\"` inside Azure DevOps `azure-pipelines.yml`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `- variables:\n  - group: kv-ai300-secrets\n- script: echo \"Using endpoint $(AI-FOUNDRY-CONNECTION-STRING)\"` inside Azure DevOps `azure-pipelines.yml`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `GitHub Actions Workflow Trigger (`on: push: branches: [main]`, `paths-ignore`)`, Writing `- variables:\n  - group: kv-ai300-secrets\n- script: echo \"Using endpoint $(AI-FOUNDRY-CONNECTION-STRING)\"` inside Azure DevOps `azure-pipelines.yml`. is the officially required syntax for `linking Azure DevOps Variable Groups directly to Key Vault`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3062,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Contoso Health AI` implementing `OIDC Workload Identity Federation (`id-token: write`, `azure/login@v1`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `linking Azure DevOps Variable Groups directly to Key Vault` (Implementation Task #62).",
    "question": "[MOD Coding Task #62] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `OIDC Workload Identity Federation (`id-token: write`, `azure/login@v1`)` when implementing `linking Azure DevOps Variable Groups directly to Key Vault`?",
    "options": [
      "A) Writing `- variables:\n  - group: kv-ai300-secrets\n- script: echo \"Using endpoint $(AI-FOUNDRY-CONNECTION-STRING)\"` inside Azure DevOps `azure-pipelines.yml`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `- variables:\n  - group: kv-ai300-secrets\n- script: echo \"Using endpoint $(AI-FOUNDRY-CONNECTION-STRING)\"` inside Azure DevOps `azure-pipelines.yml`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `OIDC Workload Identity Federation (`id-token: write`, `azure/login@v1`)`, Writing `- variables:\n  - group: kv-ai300-secrets\n- script: echo \"Using endpoint $(AI-FOUNDRY-CONNECTION-STRING)\"` inside Azure DevOps `azure-pipelines.yml`. is the officially required syntax for `linking Azure DevOps Variable Groups directly to Key Vault`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3063,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Fabrikam Logistics Agent` implementing `Azure CLI & ML Extension Installation (`az extension add -n ml -y`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `linking Azure DevOps Variable Groups directly to Key Vault` (Implementation Task #63).",
    "question": "[MOD Coding Task #63] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Azure CLI & ML Extension Installation (`az extension add -n ml -y`)` when implementing `linking Azure DevOps Variable Groups directly to Key Vault`?",
    "options": [
      "A) Writing `- variables:\n  - group: kv-ai300-secrets\n- script: echo \"Using endpoint $(AI-FOUNDRY-CONNECTION-STRING)\"` inside Azure DevOps `azure-pipelines.yml`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `- variables:\n  - group: kv-ai300-secrets\n- script: echo \"Using endpoint $(AI-FOUNDRY-CONNECTION-STRING)\"` inside Azure DevOps `azure-pipelines.yml`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Azure CLI & ML Extension Installation (`az extension add -n ml -y`)`, Writing `- variables:\n  - group: kv-ai300-secrets\n- script: echo \"Using endpoint $(AI-FOUNDRY-CONNECTION-STRING)\"` inside Azure DevOps `azure-pipelines.yml`. is the officially required syntax for `linking Azure DevOps Variable Groups directly to Key Vault`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3064,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Trey Research Lab` implementing `Bicep Linter & What-If Validation (`az deployment group what-if`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `linking Azure DevOps Variable Groups directly to Key Vault` (Implementation Task #64).",
    "question": "[MOD Coding Task #64] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Bicep Linter & What-If Validation (`az deployment group what-if`)` for `linking Azure DevOps Variable Groups directly to Key Vault`? (Select three)",
    "options": [
      "A) Writing `- variables:\n  - group: kv-ai300-secrets\n- script: echo \"Using endpoint $(AI-FOUNDRY-CONNECTION-STRING)\"` inside Azure DevOps `azure-pipelines.yml`.",
      "B) Authenticating via zero-trust `DefaultAzureCredential()` (`User-Assigned Managed Identity`) or OIDC workload identity federation (`id-token: write`).",
      "C) Enabling structured diagnostic log forwarding (`AgentTelemetry`, `AppDependencies`) directly to Log Analytics for continuous KQL tracing.",
      "D) Disabling all Private Endpoints (`publicNetworkAccess: 'Enabled'`) and exposing model inference ports directly to public `0.0.0.0/0` internet traffic.",
      "E) Storing production OpenAI `api-key` strings directly inside client-side frontend bundle files to bypass Key Vault secret retrieval overhead."
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Bicep Linter & What-If Validation (`az deployment group what-if`)` for `linking Azure DevOps Variable Groups directly to Key Vault`, enterprise coding standards mandate: (1) Writing `- variables:\n  - group: kv-ai300-secrets\n- script: echo \"Using endpoint $(AI-FOUNDRY-CONNECTION-STRING)\"` inside Azure DevOps `azure-pipelines.yml`., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 3065,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Northwind Traders Bot` implementing `Python Unit Testing & Code Quality (`pytest src/tests/ --junitxml`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `linking Azure DevOps Variable Groups directly to Key Vault` (Implementation Task #65).",
    "question": "[MOD Coding Task #65] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Python Unit Testing & Code Quality (`pytest src/tests/ --junitxml`)` when implementing `linking Azure DevOps Variable Groups directly to Key Vault`?",
    "options": [
      "A) Writing `- variables:\n  - group: kv-ai300-secrets\n- script: echo \"Using endpoint $(AI-FOUNDRY-CONNECTION-STRING)\"` inside Azure DevOps `azure-pipelines.yml`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `- variables:\n  - group: kv-ai300-secrets\n- script: echo \"Using endpoint $(AI-FOUNDRY-CONNECTION-STRING)\"` inside Azure DevOps `azure-pipelines.yml`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Python Unit Testing & Code Quality (`pytest src/tests/ --junitxml`)`, Writing `- variables:\n  - group: kv-ai300-secrets\n- script: echo \"Using endpoint $(AI-FOUNDRY-CONNECTION-STRING)\"` inside Azure DevOps `azure-pipelines.yml`. is the officially required syntax for `linking Azure DevOps Variable Groups directly to Key Vault`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3066,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Woodgrove Bank Virtual Assistant` implementing `Evaluation Quality Gating Script (`python -c 'assert groundedness >= 3.8'`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `linking Azure DevOps Variable Groups directly to Key Vault` (Implementation Task #66).",
    "question": "[MOD Coding Task #66] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Evaluation Quality Gating Script (`python -c 'assert groundedness >= 3.8'`)` when implementing `linking Azure DevOps Variable Groups directly to Key Vault`?",
    "options": [
      "A) Writing `- variables:\n  - group: kv-ai300-secrets\n- script: echo \"Using endpoint $(AI-FOUNDRY-CONNECTION-STRING)\"` inside Azure DevOps `azure-pipelines.yml`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `- variables:\n  - group: kv-ai300-secrets\n- script: echo \"Using endpoint $(AI-FOUNDRY-CONNECTION-STRING)\"` inside Azure DevOps `azure-pipelines.yml`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Evaluation Quality Gating Script (`python -c 'assert groundedness >= 3.8'`)`, Writing `- variables:\n  - group: kv-ai300-secrets\n- script: echo \"Using endpoint $(AI-FOUNDRY-CONNECTION-STRING)\"` inside Azure DevOps `azure-pipelines.yml`. is the officially required syntax for `linking Azure DevOps Variable Groups directly to Key Vault`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3067,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Litware Legal Evaluator` implementing `Model Promotion Registry Command (`az ml model show / create`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `linking Azure DevOps Variable Groups directly to Key Vault` (Implementation Task #67).",
    "question": "[MOD Coding Task #67] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Model Promotion Registry Command (`az ml model show / create`)` when implementing `linking Azure DevOps Variable Groups directly to Key Vault`?",
    "options": [
      "A) Writing `- variables:\n  - group: kv-ai300-secrets\n- script: echo \"Using endpoint $(AI-FOUNDRY-CONNECTION-STRING)\"` inside Azure DevOps `azure-pipelines.yml`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `- variables:\n  - group: kv-ai300-secrets\n- script: echo \"Using endpoint $(AI-FOUNDRY-CONNECTION-STRING)\"` inside Azure DevOps `azure-pipelines.yml`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Model Promotion Registry Command (`az ml model show / create`)`, Writing `- variables:\n  - group: kv-ai300-secrets\n- script: echo \"Using endpoint $(AI-FOUNDRY-CONNECTION-STRING)\"` inside Azure DevOps `azure-pipelines.yml`. is the officially required syntax for `linking Azure DevOps Variable Groups directly to Key Vault`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3068,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `A.Datum Retail Copilot` implementing `GitHub Environments & PR Approval Rules (`environment: prod-review`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `linking Azure DevOps Variable Groups directly to Key Vault` (Implementation Task #68).",
    "question": "[MOD Coding Task #68] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `GitHub Environments & PR Approval Rules (`environment: prod-review`)` for `linking Azure DevOps Variable Groups directly to Key Vault`? (Select three)",
    "options": [
      "A) Writing `- variables:\n  - group: kv-ai300-secrets\n- script: echo \"Using endpoint $(AI-FOUNDRY-CONNECTION-STRING)\"` inside Azure DevOps `azure-pipelines.yml`.",
      "B) Authenticating via zero-trust `DefaultAzureCredential()` (`User-Assigned Managed Identity`) or OIDC workload identity federation (`id-token: write`).",
      "C) Enabling structured diagnostic log forwarding (`AgentTelemetry`, `AppDependencies`) directly to Log Analytics for continuous KQL tracing.",
      "D) Disabling all Private Endpoints (`publicNetworkAccess: 'Enabled'`) and exposing model inference ports directly to public `0.0.0.0/0` internet traffic.",
      "E) Storing production OpenAI `api-key` strings directly inside client-side frontend bundle files to bypass Key Vault secret retrieval overhead."
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `GitHub Environments & PR Approval Rules (`environment: prod-review`)` for `linking Azure DevOps Variable Groups directly to Key Vault`, enterprise coding standards mandate: (1) Writing `- variables:\n  - group: kv-ai300-secrets\n- script: echo \"Using endpoint $(AI-FOUNDRY-CONNECTION-STRING)\"` inside Azure DevOps `azure-pipelines.yml`., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 3069,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Alpine Ski Field Technician` implementing `Canary Traffic Splitting Rollout (`az ml online-endpoint update --traffic`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `linking Azure DevOps Variable Groups directly to Key Vault` (Implementation Task #69).",
    "question": "[MOD Coding Task #69] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Canary Traffic Splitting Rollout (`az ml online-endpoint update --traffic`)` when implementing `linking Azure DevOps Variable Groups directly to Key Vault`?",
    "options": [
      "A) Writing `- variables:\n  - group: kv-ai300-secrets\n- script: echo \"Using endpoint $(AI-FOUNDRY-CONNECTION-STRING)\"` inside Azure DevOps `azure-pipelines.yml`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `- variables:\n  - group: kv-ai300-secrets\n- script: echo \"Using endpoint $(AI-FOUNDRY-CONNECTION-STRING)\"` inside Azure DevOps `azure-pipelines.yml`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Canary Traffic Splitting Rollout (`az ml online-endpoint update --traffic`)`, Writing `- variables:\n  - group: kv-ai300-secrets\n- script: echo \"Using endpoint $(AI-FOUNDRY-CONNECTION-STRING)\"` inside Azure DevOps `azure-pipelines.yml`. is the officially required syntax for `linking Azure DevOps Variable Groups directly to Key Vault`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3070,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Tailwind Traders Multi-Agent` implementing `Pipeline Artifact Upload & Caching (`actions/upload-artifact@v4`, `cache@v4`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `linking Azure DevOps Variable Groups directly to Key Vault` (Implementation Task #70).",
    "question": "[MOD Coding Task #70] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Pipeline Artifact Upload & Caching (`actions/upload-artifact@v4`, `cache@v4`)` when implementing `linking Azure DevOps Variable Groups directly to Key Vault`?",
    "options": [
      "A) Writing `- variables:\n  - group: kv-ai300-secrets\n- script: echo \"Using endpoint $(AI-FOUNDRY-CONNECTION-STRING)\"` inside Azure DevOps `azure-pipelines.yml`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `- variables:\n  - group: kv-ai300-secrets\n- script: echo \"Using endpoint $(AI-FOUNDRY-CONNECTION-STRING)\"` inside Azure DevOps `azure-pipelines.yml`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Pipeline Artifact Upload & Caching (`actions/upload-artifact@v4`, `cache@v4`)`, Writing `- variables:\n  - group: kv-ai300-secrets\n- script: echo \"Using endpoint $(AI-FOUNDRY-CONNECTION-STRING)\"` inside Azure DevOps `azure-pipelines.yml`. is the officially required syntax for `linking Azure DevOps Variable Groups directly to Key Vault`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3071,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Adventure Works Core Hub` implementing `GitHub Actions Workflow Trigger (`on: push: branches: [main]`, `paths-ignore`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `passing multi-job outputs (`needs.train.outputs.run_id`) across stages` (Implementation Task #71).",
    "question": "[MOD Coding Task #71] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `GitHub Actions Workflow Trigger (`on: push: branches: [main]`, `paths-ignore`)` when implementing `passing multi-job outputs (`needs.train.outputs.run_id`) across stages`?",
    "options": [
      "A) Writing `outputs:\n  job_id: ${{ steps.submit.outputs.run_id }}\nrun: echo \"run_id=$(az ml job show --name ... --query name -o tsv)\" >> $GITHUB_OUTPUT` inside the training stage.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `outputs:\n  job_id: ${{ steps.submit.outputs.run_id }}\nrun: echo \"run_id=$(az ml job show --name ... --query name -o tsv)\" >> $GITHUB_OUTPUT` inside the training stage.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `GitHub Actions Workflow Trigger (`on: push: branches: [main]`, `paths-ignore`)`, Writing `outputs:\n  job_id: ${{ steps.submit.outputs.run_id }}\nrun: echo \"run_id=$(az ml job show --name ... --query name -o tsv)\" >> $GITHUB_OUTPUT` inside the training stage. is the officially required syntax for `passing multi-job outputs (`needs.train.outputs.run_id`) across stages`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3072,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Contoso Health AI` implementing `OIDC Workload Identity Federation (`id-token: write`, `azure/login@v1`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `passing multi-job outputs (`needs.train.outputs.run_id`) across stages` (Implementation Task #72).",
    "question": "[MOD Coding Task #72] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `OIDC Workload Identity Federation (`id-token: write`, `azure/login@v1`)` for `passing multi-job outputs (`needs.train.outputs.run_id`) across stages`? (Select three)",
    "options": [
      "A) Writing `outputs:\n  job_id: ${{ steps.submit.outputs.run_id }}\nrun: echo \"run_id=$(az ml job show --name ... --query name -o tsv)\" >> $GITHUB_OUTPUT` inside the training stage.",
      "B) Authenticating via zero-trust `DefaultAzureCredential()` (`User-Assigned Managed Identity`) or OIDC workload identity federation (`id-token: write`).",
      "C) Enabling structured diagnostic log forwarding (`AgentTelemetry`, `AppDependencies`) directly to Log Analytics for continuous KQL tracing.",
      "D) Disabling all Private Endpoints (`publicNetworkAccess: 'Enabled'`) and exposing model inference ports directly to public `0.0.0.0/0` internet traffic.",
      "E) Storing production OpenAI `api-key` strings directly inside client-side frontend bundle files to bypass Key Vault secret retrieval overhead."
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `OIDC Workload Identity Federation (`id-token: write`, `azure/login@v1`)` for `passing multi-job outputs (`needs.train.outputs.run_id`) across stages`, enterprise coding standards mandate: (1) Writing `outputs:\n  job_id: ${{ steps.submit.outputs.run_id }}\nrun: echo \"run_id=$(az ml job show --name ... --query name -o tsv)\" >> $GITHUB_OUTPUT` inside the training stage., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 3073,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Fabrikam Logistics Agent` implementing `Azure CLI & ML Extension Installation (`az extension add -n ml -y`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `passing multi-job outputs (`needs.train.outputs.run_id`) across stages` (Implementation Task #73).",
    "question": "[MOD Coding Task #73] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Azure CLI & ML Extension Installation (`az extension add -n ml -y`)` when implementing `passing multi-job outputs (`needs.train.outputs.run_id`) across stages`?",
    "options": [
      "A) Writing `outputs:\n  job_id: ${{ steps.submit.outputs.run_id }}\nrun: echo \"run_id=$(az ml job show --name ... --query name -o tsv)\" >> $GITHUB_OUTPUT` inside the training stage.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `outputs:\n  job_id: ${{ steps.submit.outputs.run_id }}\nrun: echo \"run_id=$(az ml job show --name ... --query name -o tsv)\" >> $GITHUB_OUTPUT` inside the training stage.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Azure CLI & ML Extension Installation (`az extension add -n ml -y`)`, Writing `outputs:\n  job_id: ${{ steps.submit.outputs.run_id }}\nrun: echo \"run_id=$(az ml job show --name ... --query name -o tsv)\" >> $GITHUB_OUTPUT` inside the training stage. is the officially required syntax for `passing multi-job outputs (`needs.train.outputs.run_id`) across stages`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3074,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Trey Research Lab` implementing `Bicep Linter & What-If Validation (`az deployment group what-if`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `passing multi-job outputs (`needs.train.outputs.run_id`) across stages` (Implementation Task #74).",
    "question": "[MOD Coding Task #74] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep Linter & What-If Validation (`az deployment group what-if`)` when implementing `passing multi-job outputs (`needs.train.outputs.run_id`) across stages`?",
    "options": [
      "A) Writing `outputs:\n  job_id: ${{ steps.submit.outputs.run_id }}\nrun: echo \"run_id=$(az ml job show --name ... --query name -o tsv)\" >> $GITHUB_OUTPUT` inside the training stage.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `outputs:\n  job_id: ${{ steps.submit.outputs.run_id }}\nrun: echo \"run_id=$(az ml job show --name ... --query name -o tsv)\" >> $GITHUB_OUTPUT` inside the training stage.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep Linter & What-If Validation (`az deployment group what-if`)`, Writing `outputs:\n  job_id: ${{ steps.submit.outputs.run_id }}\nrun: echo \"run_id=$(az ml job show --name ... --query name -o tsv)\" >> $GITHUB_OUTPUT` inside the training stage. is the officially required syntax for `passing multi-job outputs (`needs.train.outputs.run_id`) across stages`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3075,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Northwind Traders Bot` implementing `Python Unit Testing & Code Quality (`pytest src/tests/ --junitxml`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `passing multi-job outputs (`needs.train.outputs.run_id`) across stages` (Implementation Task #75).",
    "question": "[MOD Coding Task #75] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Python Unit Testing & Code Quality (`pytest src/tests/ --junitxml`)` when implementing `passing multi-job outputs (`needs.train.outputs.run_id`) across stages`?",
    "options": [
      "A) Writing `outputs:\n  job_id: ${{ steps.submit.outputs.run_id }}\nrun: echo \"run_id=$(az ml job show --name ... --query name -o tsv)\" >> $GITHUB_OUTPUT` inside the training stage.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `outputs:\n  job_id: ${{ steps.submit.outputs.run_id }}\nrun: echo \"run_id=$(az ml job show --name ... --query name -o tsv)\" >> $GITHUB_OUTPUT` inside the training stage.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Python Unit Testing & Code Quality (`pytest src/tests/ --junitxml`)`, Writing `outputs:\n  job_id: ${{ steps.submit.outputs.run_id }}\nrun: echo \"run_id=$(az ml job show --name ... --query name -o tsv)\" >> $GITHUB_OUTPUT` inside the training stage. is the officially required syntax for `passing multi-job outputs (`needs.train.outputs.run_id`) across stages`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3076,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Woodgrove Bank Virtual Assistant` implementing `Evaluation Quality Gating Script (`python -c 'assert groundedness >= 3.8'`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `passing multi-job outputs (`needs.train.outputs.run_id`) across stages` (Implementation Task #76).",
    "question": "[MOD Coding Task #76] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Evaluation Quality Gating Script (`python -c 'assert groundedness >= 3.8'`)` for `passing multi-job outputs (`needs.train.outputs.run_id`) across stages`? (Select three)",
    "options": [
      "A) Writing `outputs:\n  job_id: ${{ steps.submit.outputs.run_id }}\nrun: echo \"run_id=$(az ml job show --name ... --query name -o tsv)\" >> $GITHUB_OUTPUT` inside the training stage.",
      "B) Authenticating via zero-trust `DefaultAzureCredential()` (`User-Assigned Managed Identity`) or OIDC workload identity federation (`id-token: write`).",
      "C) Enabling structured diagnostic log forwarding (`AgentTelemetry`, `AppDependencies`) directly to Log Analytics for continuous KQL tracing.",
      "D) Disabling all Private Endpoints (`publicNetworkAccess: 'Enabled'`) and exposing model inference ports directly to public `0.0.0.0/0` internet traffic.",
      "E) Storing production OpenAI `api-key` strings directly inside client-side frontend bundle files to bypass Key Vault secret retrieval overhead."
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Evaluation Quality Gating Script (`python -c 'assert groundedness >= 3.8'`)` for `passing multi-job outputs (`needs.train.outputs.run_id`) across stages`, enterprise coding standards mandate: (1) Writing `outputs:\n  job_id: ${{ steps.submit.outputs.run_id }}\nrun: echo \"run_id=$(az ml job show --name ... --query name -o tsv)\" >> $GITHUB_OUTPUT` inside the training stage., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 3077,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Litware Legal Evaluator` implementing `Model Promotion Registry Command (`az ml model show / create`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `passing multi-job outputs (`needs.train.outputs.run_id`) across stages` (Implementation Task #77).",
    "question": "[MOD Coding Task #77] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Model Promotion Registry Command (`az ml model show / create`)` when implementing `passing multi-job outputs (`needs.train.outputs.run_id`) across stages`?",
    "options": [
      "A) Writing `outputs:\n  job_id: ${{ steps.submit.outputs.run_id }}\nrun: echo \"run_id=$(az ml job show --name ... --query name -o tsv)\" >> $GITHUB_OUTPUT` inside the training stage.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `outputs:\n  job_id: ${{ steps.submit.outputs.run_id }}\nrun: echo \"run_id=$(az ml job show --name ... --query name -o tsv)\" >> $GITHUB_OUTPUT` inside the training stage.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Model Promotion Registry Command (`az ml model show / create`)`, Writing `outputs:\n  job_id: ${{ steps.submit.outputs.run_id }}\nrun: echo \"run_id=$(az ml job show --name ... --query name -o tsv)\" >> $GITHUB_OUTPUT` inside the training stage. is the officially required syntax for `passing multi-job outputs (`needs.train.outputs.run_id`) across stages`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3078,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `A.Datum Retail Copilot` implementing `GitHub Environments & PR Approval Rules (`environment: prod-review`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `passing multi-job outputs (`needs.train.outputs.run_id`) across stages` (Implementation Task #78).",
    "question": "[MOD Coding Task #78] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `GitHub Environments & PR Approval Rules (`environment: prod-review`)` when implementing `passing multi-job outputs (`needs.train.outputs.run_id`) across stages`?",
    "options": [
      "A) Writing `outputs:\n  job_id: ${{ steps.submit.outputs.run_id }}\nrun: echo \"run_id=$(az ml job show --name ... --query name -o tsv)\" >> $GITHUB_OUTPUT` inside the training stage.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `outputs:\n  job_id: ${{ steps.submit.outputs.run_id }}\nrun: echo \"run_id=$(az ml job show --name ... --query name -o tsv)\" >> $GITHUB_OUTPUT` inside the training stage.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `GitHub Environments & PR Approval Rules (`environment: prod-review`)`, Writing `outputs:\n  job_id: ${{ steps.submit.outputs.run_id }}\nrun: echo \"run_id=$(az ml job show --name ... --query name -o tsv)\" >> $GITHUB_OUTPUT` inside the training stage. is the officially required syntax for `passing multi-job outputs (`needs.train.outputs.run_id`) across stages`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3079,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Alpine Ski Field Technician` implementing `Canary Traffic Splitting Rollout (`az ml online-endpoint update --traffic`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `passing multi-job outputs (`needs.train.outputs.run_id`) across stages` (Implementation Task #79).",
    "question": "[MOD Coding Task #79] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Canary Traffic Splitting Rollout (`az ml online-endpoint update --traffic`)` when implementing `passing multi-job outputs (`needs.train.outputs.run_id`) across stages`?",
    "options": [
      "A) Writing `outputs:\n  job_id: ${{ steps.submit.outputs.run_id }}\nrun: echo \"run_id=$(az ml job show --name ... --query name -o tsv)\" >> $GITHUB_OUTPUT` inside the training stage.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `outputs:\n  job_id: ${{ steps.submit.outputs.run_id }}\nrun: echo \"run_id=$(az ml job show --name ... --query name -o tsv)\" >> $GITHUB_OUTPUT` inside the training stage.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Canary Traffic Splitting Rollout (`az ml online-endpoint update --traffic`)`, Writing `outputs:\n  job_id: ${{ steps.submit.outputs.run_id }}\nrun: echo \"run_id=$(az ml job show --name ... --query name -o tsv)\" >> $GITHUB_OUTPUT` inside the training stage. is the officially required syntax for `passing multi-job outputs (`needs.train.outputs.run_id`) across stages`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3080,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Tailwind Traders Multi-Agent` implementing `Pipeline Artifact Upload & Caching (`actions/upload-artifact@v4`, `cache@v4`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `passing multi-job outputs (`needs.train.outputs.run_id`) across stages` (Implementation Task #80).",
    "question": "[MOD Coding Task #80] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Pipeline Artifact Upload & Caching (`actions/upload-artifact@v4`, `cache@v4`)` for `passing multi-job outputs (`needs.train.outputs.run_id`) across stages`? (Select three)",
    "options": [
      "A) Writing `outputs:\n  job_id: ${{ steps.submit.outputs.run_id }}\nrun: echo \"run_id=$(az ml job show --name ... --query name -o tsv)\" >> $GITHUB_OUTPUT` inside the training stage.",
      "B) Authenticating via zero-trust `DefaultAzureCredential()` (`User-Assigned Managed Identity`) or OIDC workload identity federation (`id-token: write`).",
      "C) Enabling structured diagnostic log forwarding (`AgentTelemetry`, `AppDependencies`) directly to Log Analytics for continuous KQL tracing.",
      "D) Disabling all Private Endpoints (`publicNetworkAccess: 'Enabled'`) and exposing model inference ports directly to public `0.0.0.0/0` internet traffic.",
      "E) Storing production OpenAI `api-key` strings directly inside client-side frontend bundle files to bypass Key Vault secret retrieval overhead."
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Pipeline Artifact Upload & Caching (`actions/upload-artifact@v4`, `cache@v4`)` for `passing multi-job outputs (`needs.train.outputs.run_id`) across stages`, enterprise coding standards mandate: (1) Writing `outputs:\n  job_id: ${{ steps.submit.outputs.run_id }}\nrun: echo \"run_id=$(az ml job show --name ... --query name -o tsv)\" >> $GITHUB_OUTPUT` inside the training stage., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 3081,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Adventure Works Core Hub` implementing `GitHub Actions Workflow Trigger (`on: push: branches: [main]`, `paths-ignore`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `automating container image signing with Cosign (`DOCKER_CONTENT_TRUST`)` (Implementation Task #81).",
    "question": "[MOD Coding Task #81] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `GitHub Actions Workflow Trigger (`on: push: branches: [main]`, `paths-ignore`)` when implementing `automating container image signing with Cosign (`DOCKER_CONTENT_TRUST`)`?",
    "options": [
      "A) Writing `- name: Sign Container Image\n  run: cosign sign --key azure-kms://... ${{ env.ACR_NAME }}.azurecr.io/ai-env:${{ github.sha }}` right after Docker push.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `- name: Sign Container Image\n  run: cosign sign --key azure-kms://... ${{ env.ACR_NAME }}.azurecr.io/ai-env:${{ github.sha }}` right after Docker push.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `GitHub Actions Workflow Trigger (`on: push: branches: [main]`, `paths-ignore`)`, Writing `- name: Sign Container Image\n  run: cosign sign --key azure-kms://... ${{ env.ACR_NAME }}.azurecr.io/ai-env:${{ github.sha }}` right after Docker push. is the officially required syntax for `automating container image signing with Cosign (`DOCKER_CONTENT_TRUST`)`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3082,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Contoso Health AI` implementing `OIDC Workload Identity Federation (`id-token: write`, `azure/login@v1`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `automating container image signing with Cosign (`DOCKER_CONTENT_TRUST`)` (Implementation Task #82).",
    "question": "[MOD Coding Task #82] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `OIDC Workload Identity Federation (`id-token: write`, `azure/login@v1`)` when implementing `automating container image signing with Cosign (`DOCKER_CONTENT_TRUST`)`?",
    "options": [
      "A) Writing `- name: Sign Container Image\n  run: cosign sign --key azure-kms://... ${{ env.ACR_NAME }}.azurecr.io/ai-env:${{ github.sha }}` right after Docker push.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `- name: Sign Container Image\n  run: cosign sign --key azure-kms://... ${{ env.ACR_NAME }}.azurecr.io/ai-env:${{ github.sha }}` right after Docker push.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `OIDC Workload Identity Federation (`id-token: write`, `azure/login@v1`)`, Writing `- name: Sign Container Image\n  run: cosign sign --key azure-kms://... ${{ env.ACR_NAME }}.azurecr.io/ai-env:${{ github.sha }}` right after Docker push. is the officially required syntax for `automating container image signing with Cosign (`DOCKER_CONTENT_TRUST`)`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3083,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Fabrikam Logistics Agent` implementing `Azure CLI & ML Extension Installation (`az extension add -n ml -y`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `automating container image signing with Cosign (`DOCKER_CONTENT_TRUST`)` (Implementation Task #83).",
    "question": "[MOD Coding Task #83] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Azure CLI & ML Extension Installation (`az extension add -n ml -y`)` when implementing `automating container image signing with Cosign (`DOCKER_CONTENT_TRUST`)`?",
    "options": [
      "A) Writing `- name: Sign Container Image\n  run: cosign sign --key azure-kms://... ${{ env.ACR_NAME }}.azurecr.io/ai-env:${{ github.sha }}` right after Docker push.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `- name: Sign Container Image\n  run: cosign sign --key azure-kms://... ${{ env.ACR_NAME }}.azurecr.io/ai-env:${{ github.sha }}` right after Docker push.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Azure CLI & ML Extension Installation (`az extension add -n ml -y`)`, Writing `- name: Sign Container Image\n  run: cosign sign --key azure-kms://... ${{ env.ACR_NAME }}.azurecr.io/ai-env:${{ github.sha }}` right after Docker push. is the officially required syntax for `automating container image signing with Cosign (`DOCKER_CONTENT_TRUST`)`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3084,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Trey Research Lab` implementing `Bicep Linter & What-If Validation (`az deployment group what-if`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `automating container image signing with Cosign (`DOCKER_CONTENT_TRUST`)` (Implementation Task #84).",
    "question": "[MOD Coding Task #84] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Bicep Linter & What-If Validation (`az deployment group what-if`)` for `automating container image signing with Cosign (`DOCKER_CONTENT_TRUST`)`? (Select three)",
    "options": [
      "A) Writing `- name: Sign Container Image\n  run: cosign sign --key azure-kms://... ${{ env.ACR_NAME }}.azurecr.io/ai-env:${{ github.sha }}` right after Docker push.",
      "B) Authenticating via zero-trust `DefaultAzureCredential()` (`User-Assigned Managed Identity`) or OIDC workload identity federation (`id-token: write`).",
      "C) Enabling structured diagnostic log forwarding (`AgentTelemetry`, `AppDependencies`) directly to Log Analytics for continuous KQL tracing.",
      "D) Disabling all Private Endpoints (`publicNetworkAccess: 'Enabled'`) and exposing model inference ports directly to public `0.0.0.0/0` internet traffic.",
      "E) Storing production OpenAI `api-key` strings directly inside client-side frontend bundle files to bypass Key Vault secret retrieval overhead."
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Bicep Linter & What-If Validation (`az deployment group what-if`)` for `automating container image signing with Cosign (`DOCKER_CONTENT_TRUST`)`, enterprise coding standards mandate: (1) Writing `- name: Sign Container Image\n  run: cosign sign --key azure-kms://... ${{ env.ACR_NAME }}.azurecr.io/ai-env:${{ github.sha }}` right after Docker push., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 3085,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Northwind Traders Bot` implementing `Python Unit Testing & Code Quality (`pytest src/tests/ --junitxml`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `automating container image signing with Cosign (`DOCKER_CONTENT_TRUST`)` (Implementation Task #85).",
    "question": "[MOD Coding Task #85] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Python Unit Testing & Code Quality (`pytest src/tests/ --junitxml`)` when implementing `automating container image signing with Cosign (`DOCKER_CONTENT_TRUST`)`?",
    "options": [
      "A) Writing `- name: Sign Container Image\n  run: cosign sign --key azure-kms://... ${{ env.ACR_NAME }}.azurecr.io/ai-env:${{ github.sha }}` right after Docker push.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `- name: Sign Container Image\n  run: cosign sign --key azure-kms://... ${{ env.ACR_NAME }}.azurecr.io/ai-env:${{ github.sha }}` right after Docker push.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Python Unit Testing & Code Quality (`pytest src/tests/ --junitxml`)`, Writing `- name: Sign Container Image\n  run: cosign sign --key azure-kms://... ${{ env.ACR_NAME }}.azurecr.io/ai-env:${{ github.sha }}` right after Docker push. is the officially required syntax for `automating container image signing with Cosign (`DOCKER_CONTENT_TRUST`)`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3086,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Woodgrove Bank Virtual Assistant` implementing `Evaluation Quality Gating Script (`python -c 'assert groundedness >= 3.8'`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `automating container image signing with Cosign (`DOCKER_CONTENT_TRUST`)` (Implementation Task #86).",
    "question": "[MOD Coding Task #86] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Evaluation Quality Gating Script (`python -c 'assert groundedness >= 3.8'`)` when implementing `automating container image signing with Cosign (`DOCKER_CONTENT_TRUST`)`?",
    "options": [
      "A) Writing `- name: Sign Container Image\n  run: cosign sign --key azure-kms://... ${{ env.ACR_NAME }}.azurecr.io/ai-env:${{ github.sha }}` right after Docker push.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `- name: Sign Container Image\n  run: cosign sign --key azure-kms://... ${{ env.ACR_NAME }}.azurecr.io/ai-env:${{ github.sha }}` right after Docker push.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Evaluation Quality Gating Script (`python -c 'assert groundedness >= 3.8'`)`, Writing `- name: Sign Container Image\n  run: cosign sign --key azure-kms://... ${{ env.ACR_NAME }}.azurecr.io/ai-env:${{ github.sha }}` right after Docker push. is the officially required syntax for `automating container image signing with Cosign (`DOCKER_CONTENT_TRUST`)`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3087,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Litware Legal Evaluator` implementing `Model Promotion Registry Command (`az ml model show / create`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `automating container image signing with Cosign (`DOCKER_CONTENT_TRUST`)` (Implementation Task #87).",
    "question": "[MOD Coding Task #87] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Model Promotion Registry Command (`az ml model show / create`)` when implementing `automating container image signing with Cosign (`DOCKER_CONTENT_TRUST`)`?",
    "options": [
      "A) Writing `- name: Sign Container Image\n  run: cosign sign --key azure-kms://... ${{ env.ACR_NAME }}.azurecr.io/ai-env:${{ github.sha }}` right after Docker push.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `- name: Sign Container Image\n  run: cosign sign --key azure-kms://... ${{ env.ACR_NAME }}.azurecr.io/ai-env:${{ github.sha }}` right after Docker push.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Model Promotion Registry Command (`az ml model show / create`)`, Writing `- name: Sign Container Image\n  run: cosign sign --key azure-kms://... ${{ env.ACR_NAME }}.azurecr.io/ai-env:${{ github.sha }}` right after Docker push. is the officially required syntax for `automating container image signing with Cosign (`DOCKER_CONTENT_TRUST`)`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3088,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `A.Datum Retail Copilot` implementing `GitHub Environments & PR Approval Rules (`environment: prod-review`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `automating container image signing with Cosign (`DOCKER_CONTENT_TRUST`)` (Implementation Task #88).",
    "question": "[MOD Coding Task #88] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `GitHub Environments & PR Approval Rules (`environment: prod-review`)` for `automating container image signing with Cosign (`DOCKER_CONTENT_TRUST`)`? (Select three)",
    "options": [
      "A) Writing `- name: Sign Container Image\n  run: cosign sign --key azure-kms://... ${{ env.ACR_NAME }}.azurecr.io/ai-env:${{ github.sha }}` right after Docker push.",
      "B) Authenticating via zero-trust `DefaultAzureCredential()` (`User-Assigned Managed Identity`) or OIDC workload identity federation (`id-token: write`).",
      "C) Enabling structured diagnostic log forwarding (`AgentTelemetry`, `AppDependencies`) directly to Log Analytics for continuous KQL tracing.",
      "D) Disabling all Private Endpoints (`publicNetworkAccess: 'Enabled'`) and exposing model inference ports directly to public `0.0.0.0/0` internet traffic.",
      "E) Storing production OpenAI `api-key` strings directly inside client-side frontend bundle files to bypass Key Vault secret retrieval overhead."
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `GitHub Environments & PR Approval Rules (`environment: prod-review`)` for `automating container image signing with Cosign (`DOCKER_CONTENT_TRUST`)`, enterprise coding standards mandate: (1) Writing `- name: Sign Container Image\n  run: cosign sign --key azure-kms://... ${{ env.ACR_NAME }}.azurecr.io/ai-env:${{ github.sha }}` right after Docker push., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 3089,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Alpine Ski Field Technician` implementing `Canary Traffic Splitting Rollout (`az ml online-endpoint update --traffic`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `automating container image signing with Cosign (`DOCKER_CONTENT_TRUST`)` (Implementation Task #89).",
    "question": "[MOD Coding Task #89] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Canary Traffic Splitting Rollout (`az ml online-endpoint update --traffic`)` when implementing `automating container image signing with Cosign (`DOCKER_CONTENT_TRUST`)`?",
    "options": [
      "A) Writing `- name: Sign Container Image\n  run: cosign sign --key azure-kms://... ${{ env.ACR_NAME }}.azurecr.io/ai-env:${{ github.sha }}` right after Docker push.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `- name: Sign Container Image\n  run: cosign sign --key azure-kms://... ${{ env.ACR_NAME }}.azurecr.io/ai-env:${{ github.sha }}` right after Docker push.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Canary Traffic Splitting Rollout (`az ml online-endpoint update --traffic`)`, Writing `- name: Sign Container Image\n  run: cosign sign --key azure-kms://... ${{ env.ACR_NAME }}.azurecr.io/ai-env:${{ github.sha }}` right after Docker push. is the officially required syntax for `automating container image signing with Cosign (`DOCKER_CONTENT_TRUST`)`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3090,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Tailwind Traders Multi-Agent` implementing `Pipeline Artifact Upload & Caching (`actions/upload-artifact@v4`, `cache@v4`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `automating container image signing with Cosign (`DOCKER_CONTENT_TRUST`)` (Implementation Task #90).",
    "question": "[MOD Coding Task #90] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Pipeline Artifact Upload & Caching (`actions/upload-artifact@v4`, `cache@v4`)` when implementing `automating container image signing with Cosign (`DOCKER_CONTENT_TRUST`)`?",
    "options": [
      "A) Writing `- name: Sign Container Image\n  run: cosign sign --key azure-kms://... ${{ env.ACR_NAME }}.azurecr.io/ai-env:${{ github.sha }}` right after Docker push.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `- name: Sign Container Image\n  run: cosign sign --key azure-kms://... ${{ env.ACR_NAME }}.azurecr.io/ai-env:${{ github.sha }}` right after Docker push.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Pipeline Artifact Upload & Caching (`actions/upload-artifact@v4`, `cache@v4`)`, Writing `- name: Sign Container Image\n  run: cosign sign --key azure-kms://... ${{ env.ACR_NAME }}.azurecr.io/ai-env:${{ github.sha }}` right after Docker push. is the officially required syntax for `automating container image signing with Cosign (`DOCKER_CONTENT_TRUST`)`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3091,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Adventure Works Core Hub` implementing `GitHub Actions Workflow Trigger (`on: push: branches: [main]`, `paths-ignore`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `building an automated PR comment feedback step with evaluation diffs` (Implementation Task #91).",
    "question": "[MOD Coding Task #91] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `GitHub Actions Workflow Trigger (`on: push: branches: [main]`, `paths-ignore`)` when implementing `building an automated PR comment feedback step with evaluation diffs`?",
    "options": [
      "A) Writing `- name: Post PR Comment\n  uses: actions/github-script@v7\n  with:\n    script: |\n      const fs = require('fs');\n      const summary = fs.readFileSync('evaluation_results.txt', 'utf8');\n      github.rest.issues.createComment({ issue_number: context.issue.number, owner: context.repo.owner, repo: context.repo.repo, body: '### Evaluation Gate:\\n```\\n' + summary + '\\n```' });`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `- name: Post PR Comment\n  uses: actions/github-script@v7\n  with:\n    script: |\n      const fs = require('fs');\n      const summary = fs.readFileSync('evaluation_results.txt', 'utf8');\n      github.rest.issues.createComment({ issue_number: context.issue.number, owner: context.repo.owner, repo: context.repo.repo, body: '### Evaluation Gate:\\n```\\n' + summary + '\\n```' });`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `GitHub Actions Workflow Trigger (`on: push: branches: [main]`, `paths-ignore`)`, Writing `- name: Post PR Comment\n  uses: actions/github-script@v7\n  with:\n    script: |\n      const fs = require('fs');\n      const summary = fs.readFileSync('evaluation_results.txt', 'utf8');\n      github.rest.issues.createComment({ issue_number: context.issue.number, owner: context.repo.owner, repo: context.repo.repo, body: '### Evaluation Gate:\\n```\\n' + summary + '\\n```' });`. is the officially required syntax for `building an automated PR comment feedback step with evaluation diffs`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3092,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Contoso Health AI` implementing `OIDC Workload Identity Federation (`id-token: write`, `azure/login@v1`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `building an automated PR comment feedback step with evaluation diffs` (Implementation Task #92).",
    "question": "[MOD Coding Task #92] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `OIDC Workload Identity Federation (`id-token: write`, `azure/login@v1`)` for `building an automated PR comment feedback step with evaluation diffs`? (Select three)",
    "options": [
      "A) Writing `- name: Post PR Comment\n  uses: actions/github-script@v7\n  with:\n    script: |\n      const fs = require('fs');\n      const summary = fs.readFileSync('evaluation_results.txt', 'utf8');\n      github.rest.issues.createComment({ issue_number: context.issue.number, owner: context.repo.owner, repo: context.repo.repo, body: '### Evaluation Gate:\\n```\\n' + summary + '\\n```' });`.",
      "B) Authenticating via zero-trust `DefaultAzureCredential()` (`User-Assigned Managed Identity`) or OIDC workload identity federation (`id-token: write`).",
      "C) Enabling structured diagnostic log forwarding (`AgentTelemetry`, `AppDependencies`) directly to Log Analytics for continuous KQL tracing.",
      "D) Disabling all Private Endpoints (`publicNetworkAccess: 'Enabled'`) and exposing model inference ports directly to public `0.0.0.0/0` internet traffic.",
      "E) Storing production OpenAI `api-key` strings directly inside client-side frontend bundle files to bypass Key Vault secret retrieval overhead."
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `OIDC Workload Identity Federation (`id-token: write`, `azure/login@v1`)` for `building an automated PR comment feedback step with evaluation diffs`, enterprise coding standards mandate: (1) Writing `- name: Post PR Comment\n  uses: actions/github-script@v7\n  with:\n    script: |\n      const fs = require('fs');\n      const summary = fs.readFileSync('evaluation_results.txt', 'utf8');\n      github.rest.issues.createComment({ issue_number: context.issue.number, owner: context.repo.owner, repo: context.repo.repo, body: '### Evaluation Gate:\\n```\\n' + summary + '\\n```' });`., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 3093,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Fabrikam Logistics Agent` implementing `Azure CLI & ML Extension Installation (`az extension add -n ml -y`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `building an automated PR comment feedback step with evaluation diffs` (Implementation Task #93).",
    "question": "[MOD Coding Task #93] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Azure CLI & ML Extension Installation (`az extension add -n ml -y`)` when implementing `building an automated PR comment feedback step with evaluation diffs`?",
    "options": [
      "A) Writing `- name: Post PR Comment\n  uses: actions/github-script@v7\n  with:\n    script: |\n      const fs = require('fs');\n      const summary = fs.readFileSync('evaluation_results.txt', 'utf8');\n      github.rest.issues.createComment({ issue_number: context.issue.number, owner: context.repo.owner, repo: context.repo.repo, body: '### Evaluation Gate:\\n```\\n' + summary + '\\n```' });`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `- name: Post PR Comment\n  uses: actions/github-script@v7\n  with:\n    script: |\n      const fs = require('fs');\n      const summary = fs.readFileSync('evaluation_results.txt', 'utf8');\n      github.rest.issues.createComment({ issue_number: context.issue.number, owner: context.repo.owner, repo: context.repo.repo, body: '### Evaluation Gate:\\n```\\n' + summary + '\\n```' });`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Azure CLI & ML Extension Installation (`az extension add -n ml -y`)`, Writing `- name: Post PR Comment\n  uses: actions/github-script@v7\n  with:\n    script: |\n      const fs = require('fs');\n      const summary = fs.readFileSync('evaluation_results.txt', 'utf8');\n      github.rest.issues.createComment({ issue_number: context.issue.number, owner: context.repo.owner, repo: context.repo.repo, body: '### Evaluation Gate:\\n```\\n' + summary + '\\n```' });`. is the officially required syntax for `building an automated PR comment feedback step with evaluation diffs`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3094,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Trey Research Lab` implementing `Bicep Linter & What-If Validation (`az deployment group what-if`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `building an automated PR comment feedback step with evaluation diffs` (Implementation Task #94).",
    "question": "[MOD Coding Task #94] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep Linter & What-If Validation (`az deployment group what-if`)` when implementing `building an automated PR comment feedback step with evaluation diffs`?",
    "options": [
      "A) Writing `- name: Post PR Comment\n  uses: actions/github-script@v7\n  with:\n    script: |\n      const fs = require('fs');\n      const summary = fs.readFileSync('evaluation_results.txt', 'utf8');\n      github.rest.issues.createComment({ issue_number: context.issue.number, owner: context.repo.owner, repo: context.repo.repo, body: '### Evaluation Gate:\\n```\\n' + summary + '\\n```' });`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `- name: Post PR Comment\n  uses: actions/github-script@v7\n  with:\n    script: |\n      const fs = require('fs');\n      const summary = fs.readFileSync('evaluation_results.txt', 'utf8');\n      github.rest.issues.createComment({ issue_number: context.issue.number, owner: context.repo.owner, repo: context.repo.repo, body: '### Evaluation Gate:\\n```\\n' + summary + '\\n```' });`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep Linter & What-If Validation (`az deployment group what-if`)`, Writing `- name: Post PR Comment\n  uses: actions/github-script@v7\n  with:\n    script: |\n      const fs = require('fs');\n      const summary = fs.readFileSync('evaluation_results.txt', 'utf8');\n      github.rest.issues.createComment({ issue_number: context.issue.number, owner: context.repo.owner, repo: context.repo.repo, body: '### Evaluation Gate:\\n```\\n' + summary + '\\n```' });`. is the officially required syntax for `building an automated PR comment feedback step with evaluation diffs`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3095,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Northwind Traders Bot` implementing `Python Unit Testing & Code Quality (`pytest src/tests/ --junitxml`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `building an automated PR comment feedback step with evaluation diffs` (Implementation Task #95).",
    "question": "[MOD Coding Task #95] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Python Unit Testing & Code Quality (`pytest src/tests/ --junitxml`)` when implementing `building an automated PR comment feedback step with evaluation diffs`?",
    "options": [
      "A) Writing `- name: Post PR Comment\n  uses: actions/github-script@v7\n  with:\n    script: |\n      const fs = require('fs');\n      const summary = fs.readFileSync('evaluation_results.txt', 'utf8');\n      github.rest.issues.createComment({ issue_number: context.issue.number, owner: context.repo.owner, repo: context.repo.repo, body: '### Evaluation Gate:\\n```\\n' + summary + '\\n```' });`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `- name: Post PR Comment\n  uses: actions/github-script@v7\n  with:\n    script: |\n      const fs = require('fs');\n      const summary = fs.readFileSync('evaluation_results.txt', 'utf8');\n      github.rest.issues.createComment({ issue_number: context.issue.number, owner: context.repo.owner, repo: context.repo.repo, body: '### Evaluation Gate:\\n```\\n' + summary + '\\n```' });`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Python Unit Testing & Code Quality (`pytest src/tests/ --junitxml`)`, Writing `- name: Post PR Comment\n  uses: actions/github-script@v7\n  with:\n    script: |\n      const fs = require('fs');\n      const summary = fs.readFileSync('evaluation_results.txt', 'utf8');\n      github.rest.issues.createComment({ issue_number: context.issue.number, owner: context.repo.owner, repo: context.repo.repo, body: '### Evaluation Gate:\\n```\\n' + summary + '\\n```' });`. is the officially required syntax for `building an automated PR comment feedback step with evaluation diffs`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3096,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Woodgrove Bank Virtual Assistant` implementing `Evaluation Quality Gating Script (`python -c 'assert groundedness >= 3.8'`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `building an automated PR comment feedback step with evaluation diffs` (Implementation Task #96).",
    "question": "[MOD Coding Task #96] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Evaluation Quality Gating Script (`python -c 'assert groundedness >= 3.8'`)` for `building an automated PR comment feedback step with evaluation diffs`? (Select three)",
    "options": [
      "A) Writing `- name: Post PR Comment\n  uses: actions/github-script@v7\n  with:\n    script: |\n      const fs = require('fs');\n      const summary = fs.readFileSync('evaluation_results.txt', 'utf8');\n      github.rest.issues.createComment({ issue_number: context.issue.number, owner: context.repo.owner, repo: context.repo.repo, body: '### Evaluation Gate:\\n```\\n' + summary + '\\n```' });`.",
      "B) Authenticating via zero-trust `DefaultAzureCredential()` (`User-Assigned Managed Identity`) or OIDC workload identity federation (`id-token: write`).",
      "C) Enabling structured diagnostic log forwarding (`AgentTelemetry`, `AppDependencies`) directly to Log Analytics for continuous KQL tracing.",
      "D) Disabling all Private Endpoints (`publicNetworkAccess: 'Enabled'`) and exposing model inference ports directly to public `0.0.0.0/0` internet traffic.",
      "E) Storing production OpenAI `api-key` strings directly inside client-side frontend bundle files to bypass Key Vault secret retrieval overhead."
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Evaluation Quality Gating Script (`python -c 'assert groundedness >= 3.8'`)` for `building an automated PR comment feedback step with evaluation diffs`, enterprise coding standards mandate: (1) Writing `- name: Post PR Comment\n  uses: actions/github-script@v7\n  with:\n    script: |\n      const fs = require('fs');\n      const summary = fs.readFileSync('evaluation_results.txt', 'utf8');\n      github.rest.issues.createComment({ issue_number: context.issue.number, owner: context.repo.owner, repo: context.repo.repo, body: '### Evaluation Gate:\\n```\\n' + summary + '\\n```' });`., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 3097,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Litware Legal Evaluator` implementing `Model Promotion Registry Command (`az ml model show / create`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `building an automated PR comment feedback step with evaluation diffs` (Implementation Task #97).",
    "question": "[MOD Coding Task #97] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Model Promotion Registry Command (`az ml model show / create`)` when implementing `building an automated PR comment feedback step with evaluation diffs`?",
    "options": [
      "A) Writing `- name: Post PR Comment\n  uses: actions/github-script@v7\n  with:\n    script: |\n      const fs = require('fs');\n      const summary = fs.readFileSync('evaluation_results.txt', 'utf8');\n      github.rest.issues.createComment({ issue_number: context.issue.number, owner: context.repo.owner, repo: context.repo.repo, body: '### Evaluation Gate:\\n```\\n' + summary + '\\n```' });`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `- name: Post PR Comment\n  uses: actions/github-script@v7\n  with:\n    script: |\n      const fs = require('fs');\n      const summary = fs.readFileSync('evaluation_results.txt', 'utf8');\n      github.rest.issues.createComment({ issue_number: context.issue.number, owner: context.repo.owner, repo: context.repo.repo, body: '### Evaluation Gate:\\n```\\n' + summary + '\\n```' });`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Model Promotion Registry Command (`az ml model show / create`)`, Writing `- name: Post PR Comment\n  uses: actions/github-script@v7\n  with:\n    script: |\n      const fs = require('fs');\n      const summary = fs.readFileSync('evaluation_results.txt', 'utf8');\n      github.rest.issues.createComment({ issue_number: context.issue.number, owner: context.repo.owner, repo: context.repo.repo, body: '### Evaluation Gate:\\n```\\n' + summary + '\\n```' });`. is the officially required syntax for `building an automated PR comment feedback step with evaluation diffs`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3098,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `A.Datum Retail Copilot` implementing `GitHub Environments & PR Approval Rules (`environment: prod-review`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `building an automated PR comment feedback step with evaluation diffs` (Implementation Task #98).",
    "question": "[MOD Coding Task #98] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `GitHub Environments & PR Approval Rules (`environment: prod-review`)` when implementing `building an automated PR comment feedback step with evaluation diffs`?",
    "options": [
      "A) Writing `- name: Post PR Comment\n  uses: actions/github-script@v7\n  with:\n    script: |\n      const fs = require('fs');\n      const summary = fs.readFileSync('evaluation_results.txt', 'utf8');\n      github.rest.issues.createComment({ issue_number: context.issue.number, owner: context.repo.owner, repo: context.repo.repo, body: '### Evaluation Gate:\\n```\\n' + summary + '\\n```' });`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `- name: Post PR Comment\n  uses: actions/github-script@v7\n  with:\n    script: |\n      const fs = require('fs');\n      const summary = fs.readFileSync('evaluation_results.txt', 'utf8');\n      github.rest.issues.createComment({ issue_number: context.issue.number, owner: context.repo.owner, repo: context.repo.repo, body: '### Evaluation Gate:\\n```\\n' + summary + '\\n```' });`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `GitHub Environments & PR Approval Rules (`environment: prod-review`)`, Writing `- name: Post PR Comment\n  uses: actions/github-script@v7\n  with:\n    script: |\n      const fs = require('fs');\n      const summary = fs.readFileSync('evaluation_results.txt', 'utf8');\n      github.rest.issues.createComment({ issue_number: context.issue.number, owner: context.repo.owner, repo: context.repo.repo, body: '### Evaluation Gate:\\n```\\n' + summary + '\\n```' });`. is the officially required syntax for `building an automated PR comment feedback step with evaluation diffs`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3099,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Alpine Ski Field Technician` implementing `Canary Traffic Splitting Rollout (`az ml online-endpoint update --traffic`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `building an automated PR comment feedback step with evaluation diffs` (Implementation Task #99).",
    "question": "[MOD Coding Task #99] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Canary Traffic Splitting Rollout (`az ml online-endpoint update --traffic`)` when implementing `building an automated PR comment feedback step with evaluation diffs`?",
    "options": [
      "A) Writing `- name: Post PR Comment\n  uses: actions/github-script@v7\n  with:\n    script: |\n      const fs = require('fs');\n      const summary = fs.readFileSync('evaluation_results.txt', 'utf8');\n      github.rest.issues.createComment({ issue_number: context.issue.number, owner: context.repo.owner, repo: context.repo.repo, body: '### Evaluation Gate:\\n```\\n' + summary + '\\n```' });`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `- name: Post PR Comment\n  uses: actions/github-script@v7\n  with:\n    script: |\n      const fs = require('fs');\n      const summary = fs.readFileSync('evaluation_results.txt', 'utf8');\n      github.rest.issues.createComment({ issue_number: context.issue.number, owner: context.repo.owner, repo: context.repo.repo, body: '### Evaluation Gate:\\n```\\n' + summary + '\\n```' });`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Canary Traffic Splitting Rollout (`az ml online-endpoint update --traffic`)`, Writing `- name: Post PR Comment\n  uses: actions/github-script@v7\n  with:\n    script: |\n      const fs = require('fs');\n      const summary = fs.readFileSync('evaluation_results.txt', 'utf8');\n      github.rest.issues.createComment({ issue_number: context.issue.number, owner: context.repo.owner, repo: context.repo.repo, body: '### Evaluation Gate:\\n```\\n' + summary + '\\n```' });`. is the officially required syntax for `building an automated PR comment feedback step with evaluation diffs`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3100,
    "domain": "Track 5: MLOps CI/CD Automation & Quality Gating",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Tailwind Traders Multi-Agent` implementing `Pipeline Artifact Upload & Caching (`actions/upload-artifact@v4`, `cache@v4`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `building an automated PR comment feedback step with evaluation diffs` (Implementation Task #100).",
    "question": "[MOD Coding Task #100] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Pipeline Artifact Upload & Caching (`actions/upload-artifact@v4`, `cache@v4`)` for `building an automated PR comment feedback step with evaluation diffs`? (Select three)",
    "options": [
      "A) Writing `- name: Post PR Comment\n  uses: actions/github-script@v7\n  with:\n    script: |\n      const fs = require('fs');\n      const summary = fs.readFileSync('evaluation_results.txt', 'utf8');\n      github.rest.issues.createComment({ issue_number: context.issue.number, owner: context.repo.owner, repo: context.repo.repo, body: '### Evaluation Gate:\\n```\\n' + summary + '\\n```' });`.",
      "B) Authenticating via zero-trust `DefaultAzureCredential()` (`User-Assigned Managed Identity`) or OIDC workload identity federation (`id-token: write`).",
      "C) Enabling structured diagnostic log forwarding (`AgentTelemetry`, `AppDependencies`) directly to Log Analytics for continuous KQL tracing.",
      "D) Disabling all Private Endpoints (`publicNetworkAccess: 'Enabled'`) and exposing model inference ports directly to public `0.0.0.0/0` internet traffic.",
      "E) Storing production OpenAI `api-key` strings directly inside client-side frontend bundle files to bypass Key Vault secret retrieval overhead."
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Pipeline Artifact Upload & Caching (`actions/upload-artifact@v4`, `cache@v4`)` for `building an automated PR comment feedback step with evaluation diffs`, enterprise coding standards mandate: (1) Writing `- name: Post PR Comment\n  uses: actions/github-script@v7\n  with:\n    script: |\n      const fs = require('fs');\n      const summary = fs.readFileSync('evaluation_results.txt', 'utf8');\n      github.rest.issues.createComment({ issue_number: context.issue.number, owner: context.repo.owner, repo: context.repo.repo, body: '### Evaluation Gate:\\n```\\n' + summary + '\\n```' });`., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  }
];
