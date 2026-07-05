// AI-300 Hands-On Enterprise Implementation Simulator (MOD Tier - Track 5: MLOps CI/CD Automation & Gating)
window.HANDSON_DATA_MOD_T5 = [
  {
    "id": 3001,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `.github/workflows/evaluate-agent.yml` (#1), you are configuring automated CI/CD quality gating for Pull Requests.",
    "question": "Which GitHub Actions authentication mechanism provides secure, secret-free login to Azure AI Foundry without storing permanent passwords or client secrets in GitHub Secrets?",
    "options": [
      "OpenID Connect (OIDC) Federation using `azure/login@v2` with `client-id`, `tenant-id`, and `subscription-id` (accompanied by `permissions: id-token: write`).",
      "Storing a permanent Azure Service Principal Client Secret in `secret.AZURE_PASSWORD`.",
      "Committing your personal `.env` file into the GitHub repository branch.",
      "Running `az login --interactive` inside the automated CI/CD runner."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Modern MLOps CI/CD best practices mandate OpenID Connect (OIDC) workload identity federation (`id-token: write`), eliminating long-lived credentials in GitHub Secrets."
  },
  {
    "id": 3002,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are designing the CI/CD pull request gate in `.github/workflows/evaluate-agent.yml` (#1). If `evaluate_agent.py` generates an average Groundedness score below 3.0 in `evaluation_results.txt`, the build must fail.",
    "question": "Which shell command step in GitHub Actions correctly parses `evaluation_results.txt` and fails the workflow if thresholds are breached?",
    "options": [
      "python -c \"scores = open('evaluation_results.txt').read(); assert float(scores.split('Groundedness: ')[1].split()[0]) >= 3.0, 'Quality Gate Failed!'\"",
      "exit 0 # Ignore scores and merge PR",
      "git commit --amend --no-verify",
      "echo 'Score low' >> $GITHUB_STEP_SUMMARY; return True"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In MLOps pipelines, automated quality gating requires parsing the evaluation output file (`evaluation_results.txt`) and raising a non-zero exit code (via assertion or `exit 1`) if metrics fall below threshold."
  },
  {
    "id": 3003,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In your GitHub repository (#1), you want to enforce that no engineer can merge code into `main` without passing the automated cloud evaluation CI/CD pipeline.",
    "question": "Which repository setting in GitHub or Azure DevOps enforces this workflow requirement?",
    "options": [
      "Branch Protection Rules (or Rulesets) on `main` requiring status check `evaluate-agent` to pass before merging is allowed.",
      "Setting file permissions on `trail_guide_agent.py` to read-only in Windows Explorer.",
      "Adding a comment in `PULL_REQUEST_TEMPLATE.md` asking reviewers to check scores manually.",
      "Disabling Git Push in `.gitignore`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Branch protection rules in source control enforce CI/CD governance by blocking pull request merges until designated automated workflow jobs (like LLM evaluations) return success."
  },
  {
    "id": 3004,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "During CI/CD execution (#1), the GitHub Actions runner fails with `ModuleNotFoundError: No module named 'azure.ai.projects'`.",
    "question": "Which workflow step must be executed prior to running `src/evaluators/evaluate_agent.py` in the pipeline?",
    "options": [
      "python -m pip install --upgrade pip && pip install -r requirements.txt",
      "sudo apt-get install azure-cli",
      "git pull origin main --force",
      "azd init --template mslearn-genaiops"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: CI/CD runners are clean, ephemeral virtual machines. Dependencies declared in `requirements.txt` must be explicitly installed via `pip install` in an earlier workflow step."
  },
  {
    "id": 3005,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You want to optimize CI/CD pipeline speed (#1) by preventing `evaluate_agent.py` from running when changes only affect documentation files (`*.md`).",
    "question": "Which YAML trigger filtering syntax in `.github/workflows/evaluate-agent.yml` achieves this optimization?",
    "options": [
      "on: pull_request: paths-ignore: [ '**.md', 'docs/**' ] (or paths: [ 'src/**', 'data/**', 'infra/**' ])",
      "on: pull_request: ignore_docs: true",
      "jobs: eval: if: github.file_type != 'markdown'",
      "trigger: exclude: '*.md'"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Using `paths-ignore: ['**.md']` or specific `paths:` filters in GitHub Actions prevents expensive cloud LLM evaluation runs from triggering on typo fixes or readme edits."
  },
  {
    "id": 3006,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/evaluators/evaluate_agent.py` (#1), you want to output evaluation results as a markdown table directly into the GitHub Actions Pull Request summary UI.",
    "question": "Which special environment variable file path is used in GitHub Actions to append custom markdown summaries?",
    "options": [
      "with open(os.environ['GITHUB_STEP_SUMMARY'], 'a') as f: f.write('| Metric | Score |\\n|---|---|\\n| Groundedness | 4.5 |')",
      "sys.stdout.write('PR_SUMMARY: Groundedness = 4.5')",
      "os.system('git comment pr --text \"Score 4.5\"')",
      "open('.github/summary.md', 'w').write('Score: 4.5')"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Writing markdown text to the file path specified by `os.environ['GITHUB_STEP_SUMMARY']` automatically renders a rich visual dashboard on the GitHub Actions workflow run page."
  },
  {
    "id": 3007,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "An MLOps team manages three separate Azure environments: Dev, Staging, and Prod (#1). In GitHub Actions, how should environment-specific endpoints (`AZURE_AI_PROJECT_ENDPOINT`) be injected into the runner?",
    "question": "Which special environment variable file path is used in GitHub Actions to append custom markdown summaries?",
    "options": [
      "Use GitHub Environments (`environment: staging`) and reference environment-scoped variables via `${{ vars.AZURE_AI_PROJECT_ENDPOINT }}`.",
      "Hardcode all three production endpoints directly inside `trail_guide_agent.py` with an `if/else` statement.",
      "Create three duplicate GitHub repositories, one for each environment.",
      "Store production endpoints in `abbreviations.json`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: GitHub Environments allow scoping variables (`vars.*`) and secrets (`secrets.*`) to specific deployment targets (Dev, Staging, Prod), enabling clean promotion pipelines without code changes."
  },
  {
    "id": 3008,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You want to automate the provisioning of cloud infrastructure as part of a nightly CI/CD regression test (#1).",
    "question": "Which CLI sequence correctly initializes, provisions, and tests the environment non-interactively?",
    "options": [
      "azd auth login --client-id ... && azd provision --no-prompt && python src/evaluators/evaluate_agent.py",
      "az group create && bicep compile main.bicep && python trail_guide_agent.py",
      "terraform apply -auto-approve && npm run dev",
      "docker build . -t trail-guide && docker run trail-guide"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In an automated AZD CI/CD pipeline, authenticating via service principal and running `azd provision --no-prompt` ensures non-interactive infrastructure deployment before test execution."
  },
  {
    "id": 3009,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "During a pull request build (#1), `evaluate_agent.py` takes 25 minutes to evaluate 500 items sequentially, causing CI/CD queue bottlenecks.",
    "question": "How does Azure AI Foundry cloud evaluation (`client.evals.runs.create()`) natively solve this sequential processing bottleneck?",
    "options": [
      "Cloud evaluation runs execute in parallel across distributed serverless AI workers in Azure AI Foundry, scoring hundreds of dataset rows concurrently without blocking local CPU.",
      "You must manually split the JSONL file into 50 separate files and run 50 parallel GitHub Action jobs.",
      "Azure AI Foundry reduces latency by skipping Groundedness evaluation on even-numbered rows.",
      "You must upgrade your GitHub Actions runner from 2-core to 64-core CPU."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Offloading evaluations to `client.evals.runs.create()` leverages Azure AI Foundry's distributed cloud compute, automatically parallelizing LLM-as-a-Judge scoring across large datasets."
  },
  {
    "id": 3010,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `PULL_REQUEST_TEMPLATE.md` (#1), you are establishing team governance rules for prompt engineering modifications.",
    "question": "Which mandatory checklist item should be required before merging any changes to files in `src/agents/trail_guide_agent/prompts/`?",
    "options": [
      "\"[ ] I have executed `python src/evaluators/evaluate_agent.py` and verified in `evaluation_results.txt` that Groundedness >= 3.5 and Relevance >= 3.5.\"",
      "\"[ ] I have deleted all previous prompt versions from Git history.\"",
      "\"[ ] I have disabled OpenTelemetry tracing to save storage costs.\"",
      "\"[ ] I have hardcoded my personal Azure API key in `.env`.\""
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Proper GenAIOps governance mandates that any modification to prompt instructions must be empirically validated against benchmark evaluation datasets before peer review approval."
  },
  {
    "id": 3011,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `.github/workflows/evaluate-agent.yml` (#2), you are configuring automated CI/CD quality gating for Pull Requests.",
    "question": "Which GitHub Actions authentication mechanism provides secure, secret-free login to Azure AI Foundry without storing permanent passwords or client secrets in GitHub Secrets?",
    "options": [
      "OpenID Connect (OIDC) Federation using `azure/login@v2` with `client-id`, `tenant-id`, and `subscription-id` (accompanied by `permissions: id-token: write`).",
      "Storing a permanent Azure Service Principal Client Secret in `secret.AZURE_PASSWORD`.",
      "Committing your personal `.env` file into the GitHub repository branch.",
      "Running `az login --interactive` inside the automated CI/CD runner."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Modern MLOps CI/CD best practices mandate OpenID Connect (OIDC) workload identity federation (`id-token: write`), eliminating long-lived credentials in GitHub Secrets."
  },
  {
    "id": 3012,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are designing the CI/CD pull request gate in `.github/workflows/evaluate-agent.yml` (#2). If `evaluate_agent.py` generates an average Groundedness score below 3.0 in `evaluation_results.txt`, the build must fail.",
    "question": "Which shell command step in GitHub Actions correctly parses `evaluation_results.txt` and fails the workflow if thresholds are breached?",
    "options": [
      "python -c \"scores = open('evaluation_results.txt').read(); assert float(scores.split('Groundedness: ')[1].split()[0]) >= 3.0, 'Quality Gate Failed!'\"",
      "exit 0 # Ignore scores and merge PR",
      "git commit --amend --no-verify",
      "echo 'Score low' >> $GITHUB_STEP_SUMMARY; return True"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In MLOps pipelines, automated quality gating requires parsing the evaluation output file (`evaluation_results.txt`) and raising a non-zero exit code (via assertion or `exit 1`) if metrics fall below threshold."
  },
  {
    "id": 3013,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In your GitHub repository (#2), you want to enforce that no engineer can merge code into `main` without passing the automated cloud evaluation CI/CD pipeline.",
    "question": "Which repository setting in GitHub or Azure DevOps enforces this workflow requirement?",
    "options": [
      "Branch Protection Rules (or Rulesets) on `main` requiring status check `evaluate-agent` to pass before merging is allowed.",
      "Setting file permissions on `trail_guide_agent.py` to read-only in Windows Explorer.",
      "Adding a comment in `PULL_REQUEST_TEMPLATE.md` asking reviewers to check scores manually.",
      "Disabling Git Push in `.gitignore`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Branch protection rules in source control enforce CI/CD governance by blocking pull request merges until designated automated workflow jobs (like LLM evaluations) return success."
  },
  {
    "id": 3014,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "During CI/CD execution (#2), the GitHub Actions runner fails with `ModuleNotFoundError: No module named 'azure.ai.projects'`.",
    "question": "Which workflow step must be executed prior to running `src/evaluators/evaluate_agent.py` in the pipeline?",
    "options": [
      "python -m pip install --upgrade pip && pip install -r requirements.txt",
      "sudo apt-get install azure-cli",
      "git pull origin main --force",
      "azd init --template mslearn-genaiops"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: CI/CD runners are clean, ephemeral virtual machines. Dependencies declared in `requirements.txt` must be explicitly installed via `pip install` in an earlier workflow step."
  },
  {
    "id": 3015,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You want to optimize CI/CD pipeline speed (#2) by preventing `evaluate_agent.py` from running when changes only affect documentation files (`*.md`).",
    "question": "Which YAML trigger filtering syntax in `.github/workflows/evaluate-agent.yml` achieves this optimization?",
    "options": [
      "on: pull_request: paths-ignore: [ '**.md', 'docs/**' ] (or paths: [ 'src/**', 'data/**', 'infra/**' ])",
      "on: pull_request: ignore_docs: true",
      "jobs: eval: if: github.file_type != 'markdown'",
      "trigger: exclude: '*.md'"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Using `paths-ignore: ['**.md']` or specific `paths:` filters in GitHub Actions prevents expensive cloud LLM evaluation runs from triggering on typo fixes or readme edits."
  },
  {
    "id": 3016,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/evaluators/evaluate_agent.py` (#2), you want to output evaluation results as a markdown table directly into the GitHub Actions Pull Request summary UI.",
    "question": "Which special environment variable file path is used in GitHub Actions to append custom markdown summaries?",
    "options": [
      "with open(os.environ['GITHUB_STEP_SUMMARY'], 'a') as f: f.write('| Metric | Score |\\n|---|---|\\n| Groundedness | 4.5 |')",
      "sys.stdout.write('PR_SUMMARY: Groundedness = 4.5')",
      "os.system('git comment pr --text \"Score 4.5\"')",
      "open('.github/summary.md', 'w').write('Score: 4.5')"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Writing markdown text to the file path specified by `os.environ['GITHUB_STEP_SUMMARY']` automatically renders a rich visual dashboard on the GitHub Actions workflow run page."
  },
  {
    "id": 3017,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "An MLOps team manages three separate Azure environments: Dev, Staging, and Prod (#2). In GitHub Actions, how should environment-specific endpoints (`AZURE_AI_PROJECT_ENDPOINT`) be injected into the runner?",
    "question": "Which special environment variable file path is used in GitHub Actions to append custom markdown summaries?",
    "options": [
      "Use GitHub Environments (`environment: staging`) and reference environment-scoped variables via `${{ vars.AZURE_AI_PROJECT_ENDPOINT }}`.",
      "Hardcode all three production endpoints directly inside `trail_guide_agent.py` with an `if/else` statement.",
      "Create three duplicate GitHub repositories, one for each environment.",
      "Store production endpoints in `abbreviations.json`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: GitHub Environments allow scoping variables (`vars.*`) and secrets (`secrets.*`) to specific deployment targets (Dev, Staging, Prod), enabling clean promotion pipelines without code changes."
  },
  {
    "id": 3018,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You want to automate the provisioning of cloud infrastructure as part of a nightly CI/CD regression test (#2).",
    "question": "Which CLI sequence correctly initializes, provisions, and tests the environment non-interactively?",
    "options": [
      "azd auth login --client-id ... && azd provision --no-prompt && python src/evaluators/evaluate_agent.py",
      "az group create && bicep compile main.bicep && python trail_guide_agent.py",
      "terraform apply -auto-approve && npm run dev",
      "docker build . -t trail-guide && docker run trail-guide"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In an automated AZD CI/CD pipeline, authenticating via service principal and running `azd provision --no-prompt` ensures non-interactive infrastructure deployment before test execution."
  },
  {
    "id": 3019,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "During a pull request build (#2), `evaluate_agent.py` takes 25 minutes to evaluate 500 items sequentially, causing CI/CD queue bottlenecks.",
    "question": "How does Azure AI Foundry cloud evaluation (`client.evals.runs.create()`) natively solve this sequential processing bottleneck?",
    "options": [
      "Cloud evaluation runs execute in parallel across distributed serverless AI workers in Azure AI Foundry, scoring hundreds of dataset rows concurrently without blocking local CPU.",
      "You must manually split the JSONL file into 50 separate files and run 50 parallel GitHub Action jobs.",
      "Azure AI Foundry reduces latency by skipping Groundedness evaluation on even-numbered rows.",
      "You must upgrade your GitHub Actions runner from 2-core to 64-core CPU."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Offloading evaluations to `client.evals.runs.create()` leverages Azure AI Foundry's distributed cloud compute, automatically parallelizing LLM-as-a-Judge scoring across large datasets."
  },
  {
    "id": 3020,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `PULL_REQUEST_TEMPLATE.md` (#2), you are establishing team governance rules for prompt engineering modifications.",
    "question": "Which mandatory checklist item should be required before merging any changes to files in `src/agents/trail_guide_agent/prompts/`?",
    "options": [
      "\"[ ] I have executed `python src/evaluators/evaluate_agent.py` and verified in `evaluation_results.txt` that Groundedness >= 3.5 and Relevance >= 3.5.\"",
      "\"[ ] I have deleted all previous prompt versions from Git history.\"",
      "\"[ ] I have disabled OpenTelemetry tracing to save storage costs.\"",
      "\"[ ] I have hardcoded my personal Azure API key in `.env`.\""
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Proper GenAIOps governance mandates that any modification to prompt instructions must be empirically validated against benchmark evaluation datasets before peer review approval."
  },
  {
    "id": 3021,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `.github/workflows/evaluate-agent.yml` (#3), you are configuring automated CI/CD quality gating for Pull Requests.",
    "question": "Which GitHub Actions authentication mechanism provides secure, secret-free login to Azure AI Foundry without storing permanent passwords or client secrets in GitHub Secrets?",
    "options": [
      "OpenID Connect (OIDC) Federation using `azure/login@v2` with `client-id`, `tenant-id`, and `subscription-id` (accompanied by `permissions: id-token: write`).",
      "Storing a permanent Azure Service Principal Client Secret in `secret.AZURE_PASSWORD`.",
      "Committing your personal `.env` file into the GitHub repository branch.",
      "Running `az login --interactive` inside the automated CI/CD runner."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Modern MLOps CI/CD best practices mandate OpenID Connect (OIDC) workload identity federation (`id-token: write`), eliminating long-lived credentials in GitHub Secrets."
  },
  {
    "id": 3022,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are designing the CI/CD pull request gate in `.github/workflows/evaluate-agent.yml` (#3). If `evaluate_agent.py` generates an average Groundedness score below 3.0 in `evaluation_results.txt`, the build must fail.",
    "question": "Which shell command step in GitHub Actions correctly parses `evaluation_results.txt` and fails the workflow if thresholds are breached?",
    "options": [
      "python -c \"scores = open('evaluation_results.txt').read(); assert float(scores.split('Groundedness: ')[1].split()[0]) >= 3.0, 'Quality Gate Failed!'\"",
      "exit 0 # Ignore scores and merge PR",
      "git commit --amend --no-verify",
      "echo 'Score low' >> $GITHUB_STEP_SUMMARY; return True"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In MLOps pipelines, automated quality gating requires parsing the evaluation output file (`evaluation_results.txt`) and raising a non-zero exit code (via assertion or `exit 1`) if metrics fall below threshold."
  },
  {
    "id": 3023,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In your GitHub repository (#3), you want to enforce that no engineer can merge code into `main` without passing the automated cloud evaluation CI/CD pipeline.",
    "question": "Which repository setting in GitHub or Azure DevOps enforces this workflow requirement?",
    "options": [
      "Branch Protection Rules (or Rulesets) on `main` requiring status check `evaluate-agent` to pass before merging is allowed.",
      "Setting file permissions on `trail_guide_agent.py` to read-only in Windows Explorer.",
      "Adding a comment in `PULL_REQUEST_TEMPLATE.md` asking reviewers to check scores manually.",
      "Disabling Git Push in `.gitignore`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Branch protection rules in source control enforce CI/CD governance by blocking pull request merges until designated automated workflow jobs (like LLM evaluations) return success."
  },
  {
    "id": 3024,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "During CI/CD execution (#3), the GitHub Actions runner fails with `ModuleNotFoundError: No module named 'azure.ai.projects'`.",
    "question": "Which workflow step must be executed prior to running `src/evaluators/evaluate_agent.py` in the pipeline?",
    "options": [
      "python -m pip install --upgrade pip && pip install -r requirements.txt",
      "sudo apt-get install azure-cli",
      "git pull origin main --force",
      "azd init --template mslearn-genaiops"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: CI/CD runners are clean, ephemeral virtual machines. Dependencies declared in `requirements.txt` must be explicitly installed via `pip install` in an earlier workflow step."
  },
  {
    "id": 3025,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You want to optimize CI/CD pipeline speed (#3) by preventing `evaluate_agent.py` from running when changes only affect documentation files (`*.md`).",
    "question": "Which YAML trigger filtering syntax in `.github/workflows/evaluate-agent.yml` achieves this optimization?",
    "options": [
      "on: pull_request: paths-ignore: [ '**.md', 'docs/**' ] (or paths: [ 'src/**', 'data/**', 'infra/**' ])",
      "on: pull_request: ignore_docs: true",
      "jobs: eval: if: github.file_type != 'markdown'",
      "trigger: exclude: '*.md'"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Using `paths-ignore: ['**.md']` or specific `paths:` filters in GitHub Actions prevents expensive cloud LLM evaluation runs from triggering on typo fixes or readme edits."
  },
  {
    "id": 3026,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/evaluators/evaluate_agent.py` (#3), you want to output evaluation results as a markdown table directly into the GitHub Actions Pull Request summary UI.",
    "question": "Which special environment variable file path is used in GitHub Actions to append custom markdown summaries?",
    "options": [
      "with open(os.environ['GITHUB_STEP_SUMMARY'], 'a') as f: f.write('| Metric | Score |\\n|---|---|\\n| Groundedness | 4.5 |')",
      "sys.stdout.write('PR_SUMMARY: Groundedness = 4.5')",
      "os.system('git comment pr --text \"Score 4.5\"')",
      "open('.github/summary.md', 'w').write('Score: 4.5')"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Writing markdown text to the file path specified by `os.environ['GITHUB_STEP_SUMMARY']` automatically renders a rich visual dashboard on the GitHub Actions workflow run page."
  },
  {
    "id": 3027,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "An MLOps team manages three separate Azure environments: Dev, Staging, and Prod (#3). In GitHub Actions, how should environment-specific endpoints (`AZURE_AI_PROJECT_ENDPOINT`) be injected into the runner?",
    "question": "Which special environment variable file path is used in GitHub Actions to append custom markdown summaries?",
    "options": [
      "Use GitHub Environments (`environment: staging`) and reference environment-scoped variables via `${{ vars.AZURE_AI_PROJECT_ENDPOINT }}`.",
      "Hardcode all three production endpoints directly inside `trail_guide_agent.py` with an `if/else` statement.",
      "Create three duplicate GitHub repositories, one for each environment.",
      "Store production endpoints in `abbreviations.json`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: GitHub Environments allow scoping variables (`vars.*`) and secrets (`secrets.*`) to specific deployment targets (Dev, Staging, Prod), enabling clean promotion pipelines without code changes."
  },
  {
    "id": 3028,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You want to automate the provisioning of cloud infrastructure as part of a nightly CI/CD regression test (#3).",
    "question": "Which CLI sequence correctly initializes, provisions, and tests the environment non-interactively?",
    "options": [
      "azd auth login --client-id ... && azd provision --no-prompt && python src/evaluators/evaluate_agent.py",
      "az group create && bicep compile main.bicep && python trail_guide_agent.py",
      "terraform apply -auto-approve && npm run dev",
      "docker build . -t trail-guide && docker run trail-guide"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In an automated AZD CI/CD pipeline, authenticating via service principal and running `azd provision --no-prompt` ensures non-interactive infrastructure deployment before test execution."
  },
  {
    "id": 3029,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "During a pull request build (#3), `evaluate_agent.py` takes 25 minutes to evaluate 500 items sequentially, causing CI/CD queue bottlenecks.",
    "question": "How does Azure AI Foundry cloud evaluation (`client.evals.runs.create()`) natively solve this sequential processing bottleneck?",
    "options": [
      "Cloud evaluation runs execute in parallel across distributed serverless AI workers in Azure AI Foundry, scoring hundreds of dataset rows concurrently without blocking local CPU.",
      "You must manually split the JSONL file into 50 separate files and run 50 parallel GitHub Action jobs.",
      "Azure AI Foundry reduces latency by skipping Groundedness evaluation on even-numbered rows.",
      "You must upgrade your GitHub Actions runner from 2-core to 64-core CPU."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Offloading evaluations to `client.evals.runs.create()` leverages Azure AI Foundry's distributed cloud compute, automatically parallelizing LLM-as-a-Judge scoring across large datasets."
  },
  {
    "id": 3030,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `PULL_REQUEST_TEMPLATE.md` (#3), you are establishing team governance rules for prompt engineering modifications.",
    "question": "Which mandatory checklist item should be required before merging any changes to files in `src/agents/trail_guide_agent/prompts/`?",
    "options": [
      "\"[ ] I have executed `python src/evaluators/evaluate_agent.py` and verified in `evaluation_results.txt` that Groundedness >= 3.5 and Relevance >= 3.5.\"",
      "\"[ ] I have deleted all previous prompt versions from Git history.\"",
      "\"[ ] I have disabled OpenTelemetry tracing to save storage costs.\"",
      "\"[ ] I have hardcoded my personal Azure API key in `.env`.\""
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Proper GenAIOps governance mandates that any modification to prompt instructions must be empirically validated against benchmark evaluation datasets before peer review approval."
  },
  {
    "id": 3031,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `.github/workflows/evaluate-agent.yml` (#4), you are configuring automated CI/CD quality gating for Pull Requests.",
    "question": "Which GitHub Actions authentication mechanism provides secure, secret-free login to Azure AI Foundry without storing permanent passwords or client secrets in GitHub Secrets?",
    "options": [
      "OpenID Connect (OIDC) Federation using `azure/login@v2` with `client-id`, `tenant-id`, and `subscription-id` (accompanied by `permissions: id-token: write`).",
      "Storing a permanent Azure Service Principal Client Secret in `secret.AZURE_PASSWORD`.",
      "Committing your personal `.env` file into the GitHub repository branch.",
      "Running `az login --interactive` inside the automated CI/CD runner."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Modern MLOps CI/CD best practices mandate OpenID Connect (OIDC) workload identity federation (`id-token: write`), eliminating long-lived credentials in GitHub Secrets."
  },
  {
    "id": 3032,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are designing the CI/CD pull request gate in `.github/workflows/evaluate-agent.yml` (#4). If `evaluate_agent.py` generates an average Groundedness score below 3.0 in `evaluation_results.txt`, the build must fail.",
    "question": "Which shell command step in GitHub Actions correctly parses `evaluation_results.txt` and fails the workflow if thresholds are breached?",
    "options": [
      "python -c \"scores = open('evaluation_results.txt').read(); assert float(scores.split('Groundedness: ')[1].split()[0]) >= 3.0, 'Quality Gate Failed!'\"",
      "exit 0 # Ignore scores and merge PR",
      "git commit --amend --no-verify",
      "echo 'Score low' >> $GITHUB_STEP_SUMMARY; return True"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In MLOps pipelines, automated quality gating requires parsing the evaluation output file (`evaluation_results.txt`) and raising a non-zero exit code (via assertion or `exit 1`) if metrics fall below threshold."
  },
  {
    "id": 3033,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In your GitHub repository (#4), you want to enforce that no engineer can merge code into `main` without passing the automated cloud evaluation CI/CD pipeline.",
    "question": "Which repository setting in GitHub or Azure DevOps enforces this workflow requirement?",
    "options": [
      "Branch Protection Rules (or Rulesets) on `main` requiring status check `evaluate-agent` to pass before merging is allowed.",
      "Setting file permissions on `trail_guide_agent.py` to read-only in Windows Explorer.",
      "Adding a comment in `PULL_REQUEST_TEMPLATE.md` asking reviewers to check scores manually.",
      "Disabling Git Push in `.gitignore`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Branch protection rules in source control enforce CI/CD governance by blocking pull request merges until designated automated workflow jobs (like LLM evaluations) return success."
  },
  {
    "id": 3034,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "During CI/CD execution (#4), the GitHub Actions runner fails with `ModuleNotFoundError: No module named 'azure.ai.projects'`.",
    "question": "Which workflow step must be executed prior to running `src/evaluators/evaluate_agent.py` in the pipeline?",
    "options": [
      "python -m pip install --upgrade pip && pip install -r requirements.txt",
      "sudo apt-get install azure-cli",
      "git pull origin main --force",
      "azd init --template mslearn-genaiops"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: CI/CD runners are clean, ephemeral virtual machines. Dependencies declared in `requirements.txt` must be explicitly installed via `pip install` in an earlier workflow step."
  },
  {
    "id": 3035,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You want to optimize CI/CD pipeline speed (#4) by preventing `evaluate_agent.py` from running when changes only affect documentation files (`*.md`).",
    "question": "Which YAML trigger filtering syntax in `.github/workflows/evaluate-agent.yml` achieves this optimization?",
    "options": [
      "on: pull_request: paths-ignore: [ '**.md', 'docs/**' ] (or paths: [ 'src/**', 'data/**', 'infra/**' ])",
      "on: pull_request: ignore_docs: true",
      "jobs: eval: if: github.file_type != 'markdown'",
      "trigger: exclude: '*.md'"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Using `paths-ignore: ['**.md']` or specific `paths:` filters in GitHub Actions prevents expensive cloud LLM evaluation runs from triggering on typo fixes or readme edits."
  },
  {
    "id": 3036,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/evaluators/evaluate_agent.py` (#4), you want to output evaluation results as a markdown table directly into the GitHub Actions Pull Request summary UI.",
    "question": "Which special environment variable file path is used in GitHub Actions to append custom markdown summaries?",
    "options": [
      "with open(os.environ['GITHUB_STEP_SUMMARY'], 'a') as f: f.write('| Metric | Score |\\n|---|---|\\n| Groundedness | 4.5 |')",
      "sys.stdout.write('PR_SUMMARY: Groundedness = 4.5')",
      "os.system('git comment pr --text \"Score 4.5\"')",
      "open('.github/summary.md', 'w').write('Score: 4.5')"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Writing markdown text to the file path specified by `os.environ['GITHUB_STEP_SUMMARY']` automatically renders a rich visual dashboard on the GitHub Actions workflow run page."
  },
  {
    "id": 3037,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "An MLOps team manages three separate Azure environments: Dev, Staging, and Prod (#4). In GitHub Actions, how should environment-specific endpoints (`AZURE_AI_PROJECT_ENDPOINT`) be injected into the runner?",
    "question": "Which special environment variable file path is used in GitHub Actions to append custom markdown summaries?",
    "options": [
      "Use GitHub Environments (`environment: staging`) and reference environment-scoped variables via `${{ vars.AZURE_AI_PROJECT_ENDPOINT }}`.",
      "Hardcode all three production endpoints directly inside `trail_guide_agent.py` with an `if/else` statement.",
      "Create three duplicate GitHub repositories, one for each environment.",
      "Store production endpoints in `abbreviations.json`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: GitHub Environments allow scoping variables (`vars.*`) and secrets (`secrets.*`) to specific deployment targets (Dev, Staging, Prod), enabling clean promotion pipelines without code changes."
  },
  {
    "id": 3038,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You want to automate the provisioning of cloud infrastructure as part of a nightly CI/CD regression test (#4).",
    "question": "Which CLI sequence correctly initializes, provisions, and tests the environment non-interactively?",
    "options": [
      "azd auth login --client-id ... && azd provision --no-prompt && python src/evaluators/evaluate_agent.py",
      "az group create && bicep compile main.bicep && python trail_guide_agent.py",
      "terraform apply -auto-approve && npm run dev",
      "docker build . -t trail-guide && docker run trail-guide"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In an automated AZD CI/CD pipeline, authenticating via service principal and running `azd provision --no-prompt` ensures non-interactive infrastructure deployment before test execution."
  },
  {
    "id": 3039,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "During a pull request build (#4), `evaluate_agent.py` takes 25 minutes to evaluate 500 items sequentially, causing CI/CD queue bottlenecks.",
    "question": "How does Azure AI Foundry cloud evaluation (`client.evals.runs.create()`) natively solve this sequential processing bottleneck?",
    "options": [
      "Cloud evaluation runs execute in parallel across distributed serverless AI workers in Azure AI Foundry, scoring hundreds of dataset rows concurrently without blocking local CPU.",
      "You must manually split the JSONL file into 50 separate files and run 50 parallel GitHub Action jobs.",
      "Azure AI Foundry reduces latency by skipping Groundedness evaluation on even-numbered rows.",
      "You must upgrade your GitHub Actions runner from 2-core to 64-core CPU."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Offloading evaluations to `client.evals.runs.create()` leverages Azure AI Foundry's distributed cloud compute, automatically parallelizing LLM-as-a-Judge scoring across large datasets."
  },
  {
    "id": 3040,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `PULL_REQUEST_TEMPLATE.md` (#4), you are establishing team governance rules for prompt engineering modifications.",
    "question": "Which mandatory checklist item should be required before merging any changes to files in `src/agents/trail_guide_agent/prompts/`?",
    "options": [
      "\"[ ] I have executed `python src/evaluators/evaluate_agent.py` and verified in `evaluation_results.txt` that Groundedness >= 3.5 and Relevance >= 3.5.\"",
      "\"[ ] I have deleted all previous prompt versions from Git history.\"",
      "\"[ ] I have disabled OpenTelemetry tracing to save storage costs.\"",
      "\"[ ] I have hardcoded my personal Azure API key in `.env`.\""
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Proper GenAIOps governance mandates that any modification to prompt instructions must be empirically validated against benchmark evaluation datasets before peer review approval."
  },
  {
    "id": 3041,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `.github/workflows/evaluate-agent.yml` (#5), you are configuring automated CI/CD quality gating for Pull Requests.",
    "question": "Which GitHub Actions authentication mechanism provides secure, secret-free login to Azure AI Foundry without storing permanent passwords or client secrets in GitHub Secrets?",
    "options": [
      "OpenID Connect (OIDC) Federation using `azure/login@v2` with `client-id`, `tenant-id`, and `subscription-id` (accompanied by `permissions: id-token: write`).",
      "Storing a permanent Azure Service Principal Client Secret in `secret.AZURE_PASSWORD`.",
      "Committing your personal `.env` file into the GitHub repository branch.",
      "Running `az login --interactive` inside the automated CI/CD runner."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Modern MLOps CI/CD best practices mandate OpenID Connect (OIDC) workload identity federation (`id-token: write`), eliminating long-lived credentials in GitHub Secrets."
  },
  {
    "id": 3042,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are designing the CI/CD pull request gate in `.github/workflows/evaluate-agent.yml` (#5). If `evaluate_agent.py` generates an average Groundedness score below 3.0 in `evaluation_results.txt`, the build must fail.",
    "question": "Which shell command step in GitHub Actions correctly parses `evaluation_results.txt` and fails the workflow if thresholds are breached?",
    "options": [
      "python -c \"scores = open('evaluation_results.txt').read(); assert float(scores.split('Groundedness: ')[1].split()[0]) >= 3.0, 'Quality Gate Failed!'\"",
      "exit 0 # Ignore scores and merge PR",
      "git commit --amend --no-verify",
      "echo 'Score low' >> $GITHUB_STEP_SUMMARY; return True"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In MLOps pipelines, automated quality gating requires parsing the evaluation output file (`evaluation_results.txt`) and raising a non-zero exit code (via assertion or `exit 1`) if metrics fall below threshold."
  },
  {
    "id": 3043,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In your GitHub repository (#5), you want to enforce that no engineer can merge code into `main` without passing the automated cloud evaluation CI/CD pipeline.",
    "question": "Which repository setting in GitHub or Azure DevOps enforces this workflow requirement?",
    "options": [
      "Branch Protection Rules (or Rulesets) on `main` requiring status check `evaluate-agent` to pass before merging is allowed.",
      "Setting file permissions on `trail_guide_agent.py` to read-only in Windows Explorer.",
      "Adding a comment in `PULL_REQUEST_TEMPLATE.md` asking reviewers to check scores manually.",
      "Disabling Git Push in `.gitignore`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Branch protection rules in source control enforce CI/CD governance by blocking pull request merges until designated automated workflow jobs (like LLM evaluations) return success."
  },
  {
    "id": 3044,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "During CI/CD execution (#5), the GitHub Actions runner fails with `ModuleNotFoundError: No module named 'azure.ai.projects'`.",
    "question": "Which workflow step must be executed prior to running `src/evaluators/evaluate_agent.py` in the pipeline?",
    "options": [
      "python -m pip install --upgrade pip && pip install -r requirements.txt",
      "sudo apt-get install azure-cli",
      "git pull origin main --force",
      "azd init --template mslearn-genaiops"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: CI/CD runners are clean, ephemeral virtual machines. Dependencies declared in `requirements.txt` must be explicitly installed via `pip install` in an earlier workflow step."
  },
  {
    "id": 3045,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You want to optimize CI/CD pipeline speed (#5) by preventing `evaluate_agent.py` from running when changes only affect documentation files (`*.md`).",
    "question": "Which YAML trigger filtering syntax in `.github/workflows/evaluate-agent.yml` achieves this optimization?",
    "options": [
      "on: pull_request: paths-ignore: [ '**.md', 'docs/**' ] (or paths: [ 'src/**', 'data/**', 'infra/**' ])",
      "on: pull_request: ignore_docs: true",
      "jobs: eval: if: github.file_type != 'markdown'",
      "trigger: exclude: '*.md'"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Using `paths-ignore: ['**.md']` or specific `paths:` filters in GitHub Actions prevents expensive cloud LLM evaluation runs from triggering on typo fixes or readme edits."
  },
  {
    "id": 3046,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/evaluators/evaluate_agent.py` (#5), you want to output evaluation results as a markdown table directly into the GitHub Actions Pull Request summary UI.",
    "question": "Which special environment variable file path is used in GitHub Actions to append custom markdown summaries?",
    "options": [
      "with open(os.environ['GITHUB_STEP_SUMMARY'], 'a') as f: f.write('| Metric | Score |\\n|---|---|\\n| Groundedness | 4.5 |')",
      "sys.stdout.write('PR_SUMMARY: Groundedness = 4.5')",
      "os.system('git comment pr --text \"Score 4.5\"')",
      "open('.github/summary.md', 'w').write('Score: 4.5')"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Writing markdown text to the file path specified by `os.environ['GITHUB_STEP_SUMMARY']` automatically renders a rich visual dashboard on the GitHub Actions workflow run page."
  },
  {
    "id": 3047,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "An MLOps team manages three separate Azure environments: Dev, Staging, and Prod (#5). In GitHub Actions, how should environment-specific endpoints (`AZURE_AI_PROJECT_ENDPOINT`) be injected into the runner?",
    "question": "Which special environment variable file path is used in GitHub Actions to append custom markdown summaries?",
    "options": [
      "Use GitHub Environments (`environment: staging`) and reference environment-scoped variables via `${{ vars.AZURE_AI_PROJECT_ENDPOINT }}`.",
      "Hardcode all three production endpoints directly inside `trail_guide_agent.py` with an `if/else` statement.",
      "Create three duplicate GitHub repositories, one for each environment.",
      "Store production endpoints in `abbreviations.json`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: GitHub Environments allow scoping variables (`vars.*`) and secrets (`secrets.*`) to specific deployment targets (Dev, Staging, Prod), enabling clean promotion pipelines without code changes."
  },
  {
    "id": 3048,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You want to automate the provisioning of cloud infrastructure as part of a nightly CI/CD regression test (#5).",
    "question": "Which CLI sequence correctly initializes, provisions, and tests the environment non-interactively?",
    "options": [
      "azd auth login --client-id ... && azd provision --no-prompt && python src/evaluators/evaluate_agent.py",
      "az group create && bicep compile main.bicep && python trail_guide_agent.py",
      "terraform apply -auto-approve && npm run dev",
      "docker build . -t trail-guide && docker run trail-guide"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In an automated AZD CI/CD pipeline, authenticating via service principal and running `azd provision --no-prompt` ensures non-interactive infrastructure deployment before test execution."
  },
  {
    "id": 3049,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "During a pull request build (#5), `evaluate_agent.py` takes 25 minutes to evaluate 500 items sequentially, causing CI/CD queue bottlenecks.",
    "question": "How does Azure AI Foundry cloud evaluation (`client.evals.runs.create()`) natively solve this sequential processing bottleneck?",
    "options": [
      "Cloud evaluation runs execute in parallel across distributed serverless AI workers in Azure AI Foundry, scoring hundreds of dataset rows concurrently without blocking local CPU.",
      "You must manually split the JSONL file into 50 separate files and run 50 parallel GitHub Action jobs.",
      "Azure AI Foundry reduces latency by skipping Groundedness evaluation on even-numbered rows.",
      "You must upgrade your GitHub Actions runner from 2-core to 64-core CPU."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Offloading evaluations to `client.evals.runs.create()` leverages Azure AI Foundry's distributed cloud compute, automatically parallelizing LLM-as-a-Judge scoring across large datasets."
  },
  {
    "id": 3050,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `PULL_REQUEST_TEMPLATE.md` (#5), you are establishing team governance rules for prompt engineering modifications.",
    "question": "Which mandatory checklist item should be required before merging any changes to files in `src/agents/trail_guide_agent/prompts/`?",
    "options": [
      "\"[ ] I have executed `python src/evaluators/evaluate_agent.py` and verified in `evaluation_results.txt` that Groundedness >= 3.5 and Relevance >= 3.5.\"",
      "\"[ ] I have deleted all previous prompt versions from Git history.\"",
      "\"[ ] I have disabled OpenTelemetry tracing to save storage costs.\"",
      "\"[ ] I have hardcoded my personal Azure API key in `.env`.\""
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Proper GenAIOps governance mandates that any modification to prompt instructions must be empirically validated against benchmark evaluation datasets before peer review approval."
  },
  {
    "id": 3051,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `.github/workflows/evaluate-agent.yml` (#6), you are configuring automated CI/CD quality gating for Pull Requests.",
    "question": "Which GitHub Actions authentication mechanism provides secure, secret-free login to Azure AI Foundry without storing permanent passwords or client secrets in GitHub Secrets?",
    "options": [
      "OpenID Connect (OIDC) Federation using `azure/login@v2` with `client-id`, `tenant-id`, and `subscription-id` (accompanied by `permissions: id-token: write`).",
      "Storing a permanent Azure Service Principal Client Secret in `secret.AZURE_PASSWORD`.",
      "Committing your personal `.env` file into the GitHub repository branch.",
      "Running `az login --interactive` inside the automated CI/CD runner."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Modern MLOps CI/CD best practices mandate OpenID Connect (OIDC) workload identity federation (`id-token: write`), eliminating long-lived credentials in GitHub Secrets."
  },
  {
    "id": 3052,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are designing the CI/CD pull request gate in `.github/workflows/evaluate-agent.yml` (#6). If `evaluate_agent.py` generates an average Groundedness score below 3.0 in `evaluation_results.txt`, the build must fail.",
    "question": "Which shell command step in GitHub Actions correctly parses `evaluation_results.txt` and fails the workflow if thresholds are breached?",
    "options": [
      "python -c \"scores = open('evaluation_results.txt').read(); assert float(scores.split('Groundedness: ')[1].split()[0]) >= 3.0, 'Quality Gate Failed!'\"",
      "exit 0 # Ignore scores and merge PR",
      "git commit --amend --no-verify",
      "echo 'Score low' >> $GITHUB_STEP_SUMMARY; return True"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In MLOps pipelines, automated quality gating requires parsing the evaluation output file (`evaluation_results.txt`) and raising a non-zero exit code (via assertion or `exit 1`) if metrics fall below threshold."
  },
  {
    "id": 3053,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In your GitHub repository (#6), you want to enforce that no engineer can merge code into `main` without passing the automated cloud evaluation CI/CD pipeline.",
    "question": "Which repository setting in GitHub or Azure DevOps enforces this workflow requirement?",
    "options": [
      "Branch Protection Rules (or Rulesets) on `main` requiring status check `evaluate-agent` to pass before merging is allowed.",
      "Setting file permissions on `trail_guide_agent.py` to read-only in Windows Explorer.",
      "Adding a comment in `PULL_REQUEST_TEMPLATE.md` asking reviewers to check scores manually.",
      "Disabling Git Push in `.gitignore`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Branch protection rules in source control enforce CI/CD governance by blocking pull request merges until designated automated workflow jobs (like LLM evaluations) return success."
  },
  {
    "id": 3054,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "During CI/CD execution (#6), the GitHub Actions runner fails with `ModuleNotFoundError: No module named 'azure.ai.projects'`.",
    "question": "Which workflow step must be executed prior to running `src/evaluators/evaluate_agent.py` in the pipeline?",
    "options": [
      "python -m pip install --upgrade pip && pip install -r requirements.txt",
      "sudo apt-get install azure-cli",
      "git pull origin main --force",
      "azd init --template mslearn-genaiops"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: CI/CD runners are clean, ephemeral virtual machines. Dependencies declared in `requirements.txt` must be explicitly installed via `pip install` in an earlier workflow step."
  },
  {
    "id": 3055,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You want to optimize CI/CD pipeline speed (#6) by preventing `evaluate_agent.py` from running when changes only affect documentation files (`*.md`).",
    "question": "Which YAML trigger filtering syntax in `.github/workflows/evaluate-agent.yml` achieves this optimization?",
    "options": [
      "on: pull_request: paths-ignore: [ '**.md', 'docs/**' ] (or paths: [ 'src/**', 'data/**', 'infra/**' ])",
      "on: pull_request: ignore_docs: true",
      "jobs: eval: if: github.file_type != 'markdown'",
      "trigger: exclude: '*.md'"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Using `paths-ignore: ['**.md']` or specific `paths:` filters in GitHub Actions prevents expensive cloud LLM evaluation runs from triggering on typo fixes or readme edits."
  },
  {
    "id": 3056,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/evaluators/evaluate_agent.py` (#6), you want to output evaluation results as a markdown table directly into the GitHub Actions Pull Request summary UI.",
    "question": "Which special environment variable file path is used in GitHub Actions to append custom markdown summaries?",
    "options": [
      "with open(os.environ['GITHUB_STEP_SUMMARY'], 'a') as f: f.write('| Metric | Score |\\n|---|---|\\n| Groundedness | 4.5 |')",
      "sys.stdout.write('PR_SUMMARY: Groundedness = 4.5')",
      "os.system('git comment pr --text \"Score 4.5\"')",
      "open('.github/summary.md', 'w').write('Score: 4.5')"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Writing markdown text to the file path specified by `os.environ['GITHUB_STEP_SUMMARY']` automatically renders a rich visual dashboard on the GitHub Actions workflow run page."
  },
  {
    "id": 3057,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "An MLOps team manages three separate Azure environments: Dev, Staging, and Prod (#6). In GitHub Actions, how should environment-specific endpoints (`AZURE_AI_PROJECT_ENDPOINT`) be injected into the runner?",
    "question": "Which special environment variable file path is used in GitHub Actions to append custom markdown summaries?",
    "options": [
      "Use GitHub Environments (`environment: staging`) and reference environment-scoped variables via `${{ vars.AZURE_AI_PROJECT_ENDPOINT }}`.",
      "Hardcode all three production endpoints directly inside `trail_guide_agent.py` with an `if/else` statement.",
      "Create three duplicate GitHub repositories, one for each environment.",
      "Store production endpoints in `abbreviations.json`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: GitHub Environments allow scoping variables (`vars.*`) and secrets (`secrets.*`) to specific deployment targets (Dev, Staging, Prod), enabling clean promotion pipelines without code changes."
  },
  {
    "id": 3058,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You want to automate the provisioning of cloud infrastructure as part of a nightly CI/CD regression test (#6).",
    "question": "Which CLI sequence correctly initializes, provisions, and tests the environment non-interactively?",
    "options": [
      "azd auth login --client-id ... && azd provision --no-prompt && python src/evaluators/evaluate_agent.py",
      "az group create && bicep compile main.bicep && python trail_guide_agent.py",
      "terraform apply -auto-approve && npm run dev",
      "docker build . -t trail-guide && docker run trail-guide"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In an automated AZD CI/CD pipeline, authenticating via service principal and running `azd provision --no-prompt` ensures non-interactive infrastructure deployment before test execution."
  },
  {
    "id": 3059,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "During a pull request build (#6), `evaluate_agent.py` takes 25 minutes to evaluate 500 items sequentially, causing CI/CD queue bottlenecks.",
    "question": "How does Azure AI Foundry cloud evaluation (`client.evals.runs.create()`) natively solve this sequential processing bottleneck?",
    "options": [
      "Cloud evaluation runs execute in parallel across distributed serverless AI workers in Azure AI Foundry, scoring hundreds of dataset rows concurrently without blocking local CPU.",
      "You must manually split the JSONL file into 50 separate files and run 50 parallel GitHub Action jobs.",
      "Azure AI Foundry reduces latency by skipping Groundedness evaluation on even-numbered rows.",
      "You must upgrade your GitHub Actions runner from 2-core to 64-core CPU."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Offloading evaluations to `client.evals.runs.create()` leverages Azure AI Foundry's distributed cloud compute, automatically parallelizing LLM-as-a-Judge scoring across large datasets."
  },
  {
    "id": 3060,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `PULL_REQUEST_TEMPLATE.md` (#6), you are establishing team governance rules for prompt engineering modifications.",
    "question": "Which mandatory checklist item should be required before merging any changes to files in `src/agents/trail_guide_agent/prompts/`?",
    "options": [
      "\"[ ] I have executed `python src/evaluators/evaluate_agent.py` and verified in `evaluation_results.txt` that Groundedness >= 3.5 and Relevance >= 3.5.\"",
      "\"[ ] I have deleted all previous prompt versions from Git history.\"",
      "\"[ ] I have disabled OpenTelemetry tracing to save storage costs.\"",
      "\"[ ] I have hardcoded my personal Azure API key in `.env`.\""
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Proper GenAIOps governance mandates that any modification to prompt instructions must be empirically validated against benchmark evaluation datasets before peer review approval."
  },
  {
    "id": 3061,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `.github/workflows/evaluate-agent.yml` (#7), you are configuring automated CI/CD quality gating for Pull Requests.",
    "question": "Which GitHub Actions authentication mechanism provides secure, secret-free login to Azure AI Foundry without storing permanent passwords or client secrets in GitHub Secrets?",
    "options": [
      "OpenID Connect (OIDC) Federation using `azure/login@v2` with `client-id`, `tenant-id`, and `subscription-id` (accompanied by `permissions: id-token: write`).",
      "Storing a permanent Azure Service Principal Client Secret in `secret.AZURE_PASSWORD`.",
      "Committing your personal `.env` file into the GitHub repository branch.",
      "Running `az login --interactive` inside the automated CI/CD runner."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Modern MLOps CI/CD best practices mandate OpenID Connect (OIDC) workload identity federation (`id-token: write`), eliminating long-lived credentials in GitHub Secrets."
  },
  {
    "id": 3062,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are designing the CI/CD pull request gate in `.github/workflows/evaluate-agent.yml` (#7). If `evaluate_agent.py` generates an average Groundedness score below 3.0 in `evaluation_results.txt`, the build must fail.",
    "question": "Which shell command step in GitHub Actions correctly parses `evaluation_results.txt` and fails the workflow if thresholds are breached?",
    "options": [
      "python -c \"scores = open('evaluation_results.txt').read(); assert float(scores.split('Groundedness: ')[1].split()[0]) >= 3.0, 'Quality Gate Failed!'\"",
      "exit 0 # Ignore scores and merge PR",
      "git commit --amend --no-verify",
      "echo 'Score low' >> $GITHUB_STEP_SUMMARY; return True"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In MLOps pipelines, automated quality gating requires parsing the evaluation output file (`evaluation_results.txt`) and raising a non-zero exit code (via assertion or `exit 1`) if metrics fall below threshold."
  },
  {
    "id": 3063,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In your GitHub repository (#7), you want to enforce that no engineer can merge code into `main` without passing the automated cloud evaluation CI/CD pipeline.",
    "question": "Which repository setting in GitHub or Azure DevOps enforces this workflow requirement?",
    "options": [
      "Branch Protection Rules (or Rulesets) on `main` requiring status check `evaluate-agent` to pass before merging is allowed.",
      "Setting file permissions on `trail_guide_agent.py` to read-only in Windows Explorer.",
      "Adding a comment in `PULL_REQUEST_TEMPLATE.md` asking reviewers to check scores manually.",
      "Disabling Git Push in `.gitignore`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Branch protection rules in source control enforce CI/CD governance by blocking pull request merges until designated automated workflow jobs (like LLM evaluations) return success."
  },
  {
    "id": 3064,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "During CI/CD execution (#7), the GitHub Actions runner fails with `ModuleNotFoundError: No module named 'azure.ai.projects'`.",
    "question": "Which workflow step must be executed prior to running `src/evaluators/evaluate_agent.py` in the pipeline?",
    "options": [
      "python -m pip install --upgrade pip && pip install -r requirements.txt",
      "sudo apt-get install azure-cli",
      "git pull origin main --force",
      "azd init --template mslearn-genaiops"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: CI/CD runners are clean, ephemeral virtual machines. Dependencies declared in `requirements.txt` must be explicitly installed via `pip install` in an earlier workflow step."
  },
  {
    "id": 3065,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You want to optimize CI/CD pipeline speed (#7) by preventing `evaluate_agent.py` from running when changes only affect documentation files (`*.md`).",
    "question": "Which YAML trigger filtering syntax in `.github/workflows/evaluate-agent.yml` achieves this optimization?",
    "options": [
      "on: pull_request: paths-ignore: [ '**.md', 'docs/**' ] (or paths: [ 'src/**', 'data/**', 'infra/**' ])",
      "on: pull_request: ignore_docs: true",
      "jobs: eval: if: github.file_type != 'markdown'",
      "trigger: exclude: '*.md'"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Using `paths-ignore: ['**.md']` or specific `paths:` filters in GitHub Actions prevents expensive cloud LLM evaluation runs from triggering on typo fixes or readme edits."
  },
  {
    "id": 3066,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/evaluators/evaluate_agent.py` (#7), you want to output evaluation results as a markdown table directly into the GitHub Actions Pull Request summary UI.",
    "question": "Which special environment variable file path is used in GitHub Actions to append custom markdown summaries?",
    "options": [
      "with open(os.environ['GITHUB_STEP_SUMMARY'], 'a') as f: f.write('| Metric | Score |\\n|---|---|\\n| Groundedness | 4.5 |')",
      "sys.stdout.write('PR_SUMMARY: Groundedness = 4.5')",
      "os.system('git comment pr --text \"Score 4.5\"')",
      "open('.github/summary.md', 'w').write('Score: 4.5')"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Writing markdown text to the file path specified by `os.environ['GITHUB_STEP_SUMMARY']` automatically renders a rich visual dashboard on the GitHub Actions workflow run page."
  },
  {
    "id": 3067,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "An MLOps team manages three separate Azure environments: Dev, Staging, and Prod (#7). In GitHub Actions, how should environment-specific endpoints (`AZURE_AI_PROJECT_ENDPOINT`) be injected into the runner?",
    "question": "Which special environment variable file path is used in GitHub Actions to append custom markdown summaries?",
    "options": [
      "Use GitHub Environments (`environment: staging`) and reference environment-scoped variables via `${{ vars.AZURE_AI_PROJECT_ENDPOINT }}`.",
      "Hardcode all three production endpoints directly inside `trail_guide_agent.py` with an `if/else` statement.",
      "Create three duplicate GitHub repositories, one for each environment.",
      "Store production endpoints in `abbreviations.json`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: GitHub Environments allow scoping variables (`vars.*`) and secrets (`secrets.*`) to specific deployment targets (Dev, Staging, Prod), enabling clean promotion pipelines without code changes."
  },
  {
    "id": 3068,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You want to automate the provisioning of cloud infrastructure as part of a nightly CI/CD regression test (#7).",
    "question": "Which CLI sequence correctly initializes, provisions, and tests the environment non-interactively?",
    "options": [
      "azd auth login --client-id ... && azd provision --no-prompt && python src/evaluators/evaluate_agent.py",
      "az group create && bicep compile main.bicep && python trail_guide_agent.py",
      "terraform apply -auto-approve && npm run dev",
      "docker build . -t trail-guide && docker run trail-guide"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In an automated AZD CI/CD pipeline, authenticating via service principal and running `azd provision --no-prompt` ensures non-interactive infrastructure deployment before test execution."
  },
  {
    "id": 3069,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "During a pull request build (#7), `evaluate_agent.py` takes 25 minutes to evaluate 500 items sequentially, causing CI/CD queue bottlenecks.",
    "question": "How does Azure AI Foundry cloud evaluation (`client.evals.runs.create()`) natively solve this sequential processing bottleneck?",
    "options": [
      "Cloud evaluation runs execute in parallel across distributed serverless AI workers in Azure AI Foundry, scoring hundreds of dataset rows concurrently without blocking local CPU.",
      "You must manually split the JSONL file into 50 separate files and run 50 parallel GitHub Action jobs.",
      "Azure AI Foundry reduces latency by skipping Groundedness evaluation on even-numbered rows.",
      "You must upgrade your GitHub Actions runner from 2-core to 64-core CPU."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Offloading evaluations to `client.evals.runs.create()` leverages Azure AI Foundry's distributed cloud compute, automatically parallelizing LLM-as-a-Judge scoring across large datasets."
  },
  {
    "id": 3070,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `PULL_REQUEST_TEMPLATE.md` (#7), you are establishing team governance rules for prompt engineering modifications.",
    "question": "Which mandatory checklist item should be required before merging any changes to files in `src/agents/trail_guide_agent/prompts/`?",
    "options": [
      "\"[ ] I have executed `python src/evaluators/evaluate_agent.py` and verified in `evaluation_results.txt` that Groundedness >= 3.5 and Relevance >= 3.5.\"",
      "\"[ ] I have deleted all previous prompt versions from Git history.\"",
      "\"[ ] I have disabled OpenTelemetry tracing to save storage costs.\"",
      "\"[ ] I have hardcoded my personal Azure API key in `.env`.\""
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Proper GenAIOps governance mandates that any modification to prompt instructions must be empirically validated against benchmark evaluation datasets before peer review approval."
  },
  {
    "id": 3071,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `.github/workflows/evaluate-agent.yml` (#8), you are configuring automated CI/CD quality gating for Pull Requests.",
    "question": "Which GitHub Actions authentication mechanism provides secure, secret-free login to Azure AI Foundry without storing permanent passwords or client secrets in GitHub Secrets?",
    "options": [
      "OpenID Connect (OIDC) Federation using `azure/login@v2` with `client-id`, `tenant-id`, and `subscription-id` (accompanied by `permissions: id-token: write`).",
      "Storing a permanent Azure Service Principal Client Secret in `secret.AZURE_PASSWORD`.",
      "Committing your personal `.env` file into the GitHub repository branch.",
      "Running `az login --interactive` inside the automated CI/CD runner."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Modern MLOps CI/CD best practices mandate OpenID Connect (OIDC) workload identity federation (`id-token: write`), eliminating long-lived credentials in GitHub Secrets."
  },
  {
    "id": 3072,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are designing the CI/CD pull request gate in `.github/workflows/evaluate-agent.yml` (#8). If `evaluate_agent.py` generates an average Groundedness score below 3.0 in `evaluation_results.txt`, the build must fail.",
    "question": "Which shell command step in GitHub Actions correctly parses `evaluation_results.txt` and fails the workflow if thresholds are breached?",
    "options": [
      "python -c \"scores = open('evaluation_results.txt').read(); assert float(scores.split('Groundedness: ')[1].split()[0]) >= 3.0, 'Quality Gate Failed!'\"",
      "exit 0 # Ignore scores and merge PR",
      "git commit --amend --no-verify",
      "echo 'Score low' >> $GITHUB_STEP_SUMMARY; return True"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In MLOps pipelines, automated quality gating requires parsing the evaluation output file (`evaluation_results.txt`) and raising a non-zero exit code (via assertion or `exit 1`) if metrics fall below threshold."
  },
  {
    "id": 3073,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In your GitHub repository (#8), you want to enforce that no engineer can merge code into `main` without passing the automated cloud evaluation CI/CD pipeline.",
    "question": "Which repository setting in GitHub or Azure DevOps enforces this workflow requirement?",
    "options": [
      "Branch Protection Rules (or Rulesets) on `main` requiring status check `evaluate-agent` to pass before merging is allowed.",
      "Setting file permissions on `trail_guide_agent.py` to read-only in Windows Explorer.",
      "Adding a comment in `PULL_REQUEST_TEMPLATE.md` asking reviewers to check scores manually.",
      "Disabling Git Push in `.gitignore`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Branch protection rules in source control enforce CI/CD governance by blocking pull request merges until designated automated workflow jobs (like LLM evaluations) return success."
  },
  {
    "id": 3074,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "During CI/CD execution (#8), the GitHub Actions runner fails with `ModuleNotFoundError: No module named 'azure.ai.projects'`.",
    "question": "Which workflow step must be executed prior to running `src/evaluators/evaluate_agent.py` in the pipeline?",
    "options": [
      "python -m pip install --upgrade pip && pip install -r requirements.txt",
      "sudo apt-get install azure-cli",
      "git pull origin main --force",
      "azd init --template mslearn-genaiops"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: CI/CD runners are clean, ephemeral virtual machines. Dependencies declared in `requirements.txt` must be explicitly installed via `pip install` in an earlier workflow step."
  },
  {
    "id": 3075,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You want to optimize CI/CD pipeline speed (#8) by preventing `evaluate_agent.py` from running when changes only affect documentation files (`*.md`).",
    "question": "Which YAML trigger filtering syntax in `.github/workflows/evaluate-agent.yml` achieves this optimization?",
    "options": [
      "on: pull_request: paths-ignore: [ '**.md', 'docs/**' ] (or paths: [ 'src/**', 'data/**', 'infra/**' ])",
      "on: pull_request: ignore_docs: true",
      "jobs: eval: if: github.file_type != 'markdown'",
      "trigger: exclude: '*.md'"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Using `paths-ignore: ['**.md']` or specific `paths:` filters in GitHub Actions prevents expensive cloud LLM evaluation runs from triggering on typo fixes or readme edits."
  },
  {
    "id": 3076,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/evaluators/evaluate_agent.py` (#8), you want to output evaluation results as a markdown table directly into the GitHub Actions Pull Request summary UI.",
    "question": "Which special environment variable file path is used in GitHub Actions to append custom markdown summaries?",
    "options": [
      "with open(os.environ['GITHUB_STEP_SUMMARY'], 'a') as f: f.write('| Metric | Score |\\n|---|---|\\n| Groundedness | 4.5 |')",
      "sys.stdout.write('PR_SUMMARY: Groundedness = 4.5')",
      "os.system('git comment pr --text \"Score 4.5\"')",
      "open('.github/summary.md', 'w').write('Score: 4.5')"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Writing markdown text to the file path specified by `os.environ['GITHUB_STEP_SUMMARY']` automatically renders a rich visual dashboard on the GitHub Actions workflow run page."
  },
  {
    "id": 3077,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "An MLOps team manages three separate Azure environments: Dev, Staging, and Prod (#8). In GitHub Actions, how should environment-specific endpoints (`AZURE_AI_PROJECT_ENDPOINT`) be injected into the runner?",
    "question": "Which special environment variable file path is used in GitHub Actions to append custom markdown summaries?",
    "options": [
      "Use GitHub Environments (`environment: staging`) and reference environment-scoped variables via `${{ vars.AZURE_AI_PROJECT_ENDPOINT }}`.",
      "Hardcode all three production endpoints directly inside `trail_guide_agent.py` with an `if/else` statement.",
      "Create three duplicate GitHub repositories, one for each environment.",
      "Store production endpoints in `abbreviations.json`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: GitHub Environments allow scoping variables (`vars.*`) and secrets (`secrets.*`) to specific deployment targets (Dev, Staging, Prod), enabling clean promotion pipelines without code changes."
  },
  {
    "id": 3078,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You want to automate the provisioning of cloud infrastructure as part of a nightly CI/CD regression test (#8).",
    "question": "Which CLI sequence correctly initializes, provisions, and tests the environment non-interactively?",
    "options": [
      "azd auth login --client-id ... && azd provision --no-prompt && python src/evaluators/evaluate_agent.py",
      "az group create && bicep compile main.bicep && python trail_guide_agent.py",
      "terraform apply -auto-approve && npm run dev",
      "docker build . -t trail-guide && docker run trail-guide"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In an automated AZD CI/CD pipeline, authenticating via service principal and running `azd provision --no-prompt` ensures non-interactive infrastructure deployment before test execution."
  },
  {
    "id": 3079,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "During a pull request build (#8), `evaluate_agent.py` takes 25 minutes to evaluate 500 items sequentially, causing CI/CD queue bottlenecks.",
    "question": "How does Azure AI Foundry cloud evaluation (`client.evals.runs.create()`) natively solve this sequential processing bottleneck?",
    "options": [
      "Cloud evaluation runs execute in parallel across distributed serverless AI workers in Azure AI Foundry, scoring hundreds of dataset rows concurrently without blocking local CPU.",
      "You must manually split the JSONL file into 50 separate files and run 50 parallel GitHub Action jobs.",
      "Azure AI Foundry reduces latency by skipping Groundedness evaluation on even-numbered rows.",
      "You must upgrade your GitHub Actions runner from 2-core to 64-core CPU."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Offloading evaluations to `client.evals.runs.create()` leverages Azure AI Foundry's distributed cloud compute, automatically parallelizing LLM-as-a-Judge scoring across large datasets."
  },
  {
    "id": 3080,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `PULL_REQUEST_TEMPLATE.md` (#8), you are establishing team governance rules for prompt engineering modifications.",
    "question": "Which mandatory checklist item should be required before merging any changes to files in `src/agents/trail_guide_agent/prompts/`?",
    "options": [
      "\"[ ] I have executed `python src/evaluators/evaluate_agent.py` and verified in `evaluation_results.txt` that Groundedness >= 3.5 and Relevance >= 3.5.\"",
      "\"[ ] I have deleted all previous prompt versions from Git history.\"",
      "\"[ ] I have disabled OpenTelemetry tracing to save storage costs.\"",
      "\"[ ] I have hardcoded my personal Azure API key in `.env`.\""
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Proper GenAIOps governance mandates that any modification to prompt instructions must be empirically validated against benchmark evaluation datasets before peer review approval."
  },
  {
    "id": 3081,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `.github/workflows/evaluate-agent.yml` (#9), you are configuring automated CI/CD quality gating for Pull Requests.",
    "question": "Which GitHub Actions authentication mechanism provides secure, secret-free login to Azure AI Foundry without storing permanent passwords or client secrets in GitHub Secrets?",
    "options": [
      "OpenID Connect (OIDC) Federation using `azure/login@v2` with `client-id`, `tenant-id`, and `subscription-id` (accompanied by `permissions: id-token: write`).",
      "Storing a permanent Azure Service Principal Client Secret in `secret.AZURE_PASSWORD`.",
      "Committing your personal `.env` file into the GitHub repository branch.",
      "Running `az login --interactive` inside the automated CI/CD runner."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Modern MLOps CI/CD best practices mandate OpenID Connect (OIDC) workload identity federation (`id-token: write`), eliminating long-lived credentials in GitHub Secrets."
  },
  {
    "id": 3082,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are designing the CI/CD pull request gate in `.github/workflows/evaluate-agent.yml` (#9). If `evaluate_agent.py` generates an average Groundedness score below 3.0 in `evaluation_results.txt`, the build must fail.",
    "question": "Which shell command step in GitHub Actions correctly parses `evaluation_results.txt` and fails the workflow if thresholds are breached?",
    "options": [
      "python -c \"scores = open('evaluation_results.txt').read(); assert float(scores.split('Groundedness: ')[1].split()[0]) >= 3.0, 'Quality Gate Failed!'\"",
      "exit 0 # Ignore scores and merge PR",
      "git commit --amend --no-verify",
      "echo 'Score low' >> $GITHUB_STEP_SUMMARY; return True"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In MLOps pipelines, automated quality gating requires parsing the evaluation output file (`evaluation_results.txt`) and raising a non-zero exit code (via assertion or `exit 1`) if metrics fall below threshold."
  },
  {
    "id": 3083,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In your GitHub repository (#9), you want to enforce that no engineer can merge code into `main` without passing the automated cloud evaluation CI/CD pipeline.",
    "question": "Which repository setting in GitHub or Azure DevOps enforces this workflow requirement?",
    "options": [
      "Branch Protection Rules (or Rulesets) on `main` requiring status check `evaluate-agent` to pass before merging is allowed.",
      "Setting file permissions on `trail_guide_agent.py` to read-only in Windows Explorer.",
      "Adding a comment in `PULL_REQUEST_TEMPLATE.md` asking reviewers to check scores manually.",
      "Disabling Git Push in `.gitignore`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Branch protection rules in source control enforce CI/CD governance by blocking pull request merges until designated automated workflow jobs (like LLM evaluations) return success."
  },
  {
    "id": 3084,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "During CI/CD execution (#9), the GitHub Actions runner fails with `ModuleNotFoundError: No module named 'azure.ai.projects'`.",
    "question": "Which workflow step must be executed prior to running `src/evaluators/evaluate_agent.py` in the pipeline?",
    "options": [
      "python -m pip install --upgrade pip && pip install -r requirements.txt",
      "sudo apt-get install azure-cli",
      "git pull origin main --force",
      "azd init --template mslearn-genaiops"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: CI/CD runners are clean, ephemeral virtual machines. Dependencies declared in `requirements.txt` must be explicitly installed via `pip install` in an earlier workflow step."
  },
  {
    "id": 3085,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You want to optimize CI/CD pipeline speed (#9) by preventing `evaluate_agent.py` from running when changes only affect documentation files (`*.md`).",
    "question": "Which YAML trigger filtering syntax in `.github/workflows/evaluate-agent.yml` achieves this optimization?",
    "options": [
      "on: pull_request: paths-ignore: [ '**.md', 'docs/**' ] (or paths: [ 'src/**', 'data/**', 'infra/**' ])",
      "on: pull_request: ignore_docs: true",
      "jobs: eval: if: github.file_type != 'markdown'",
      "trigger: exclude: '*.md'"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Using `paths-ignore: ['**.md']` or specific `paths:` filters in GitHub Actions prevents expensive cloud LLM evaluation runs from triggering on typo fixes or readme edits."
  },
  {
    "id": 3086,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/evaluators/evaluate_agent.py` (#9), you want to output evaluation results as a markdown table directly into the GitHub Actions Pull Request summary UI.",
    "question": "Which special environment variable file path is used in GitHub Actions to append custom markdown summaries?",
    "options": [
      "with open(os.environ['GITHUB_STEP_SUMMARY'], 'a') as f: f.write('| Metric | Score |\\n|---|---|\\n| Groundedness | 4.5 |')",
      "sys.stdout.write('PR_SUMMARY: Groundedness = 4.5')",
      "os.system('git comment pr --text \"Score 4.5\"')",
      "open('.github/summary.md', 'w').write('Score: 4.5')"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Writing markdown text to the file path specified by `os.environ['GITHUB_STEP_SUMMARY']` automatically renders a rich visual dashboard on the GitHub Actions workflow run page."
  },
  {
    "id": 3087,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "An MLOps team manages three separate Azure environments: Dev, Staging, and Prod (#9). In GitHub Actions, how should environment-specific endpoints (`AZURE_AI_PROJECT_ENDPOINT`) be injected into the runner?",
    "question": "Which special environment variable file path is used in GitHub Actions to append custom markdown summaries?",
    "options": [
      "Use GitHub Environments (`environment: staging`) and reference environment-scoped variables via `${{ vars.AZURE_AI_PROJECT_ENDPOINT }}`.",
      "Hardcode all three production endpoints directly inside `trail_guide_agent.py` with an `if/else` statement.",
      "Create three duplicate GitHub repositories, one for each environment.",
      "Store production endpoints in `abbreviations.json`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: GitHub Environments allow scoping variables (`vars.*`) and secrets (`secrets.*`) to specific deployment targets (Dev, Staging, Prod), enabling clean promotion pipelines without code changes."
  },
  {
    "id": 3088,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You want to automate the provisioning of cloud infrastructure as part of a nightly CI/CD regression test (#9).",
    "question": "Which CLI sequence correctly initializes, provisions, and tests the environment non-interactively?",
    "options": [
      "azd auth login --client-id ... && azd provision --no-prompt && python src/evaluators/evaluate_agent.py",
      "az group create && bicep compile main.bicep && python trail_guide_agent.py",
      "terraform apply -auto-approve && npm run dev",
      "docker build . -t trail-guide && docker run trail-guide"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In an automated AZD CI/CD pipeline, authenticating via service principal and running `azd provision --no-prompt` ensures non-interactive infrastructure deployment before test execution."
  },
  {
    "id": 3089,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "During a pull request build (#9), `evaluate_agent.py` takes 25 minutes to evaluate 500 items sequentially, causing CI/CD queue bottlenecks.",
    "question": "How does Azure AI Foundry cloud evaluation (`client.evals.runs.create()`) natively solve this sequential processing bottleneck?",
    "options": [
      "Cloud evaluation runs execute in parallel across distributed serverless AI workers in Azure AI Foundry, scoring hundreds of dataset rows concurrently without blocking local CPU.",
      "You must manually split the JSONL file into 50 separate files and run 50 parallel GitHub Action jobs.",
      "Azure AI Foundry reduces latency by skipping Groundedness evaluation on even-numbered rows.",
      "You must upgrade your GitHub Actions runner from 2-core to 64-core CPU."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Offloading evaluations to `client.evals.runs.create()` leverages Azure AI Foundry's distributed cloud compute, automatically parallelizing LLM-as-a-Judge scoring across large datasets."
  },
  {
    "id": 3090,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `PULL_REQUEST_TEMPLATE.md` (#9), you are establishing team governance rules for prompt engineering modifications.",
    "question": "Which mandatory checklist item should be required before merging any changes to files in `src/agents/trail_guide_agent/prompts/`?",
    "options": [
      "\"[ ] I have executed `python src/evaluators/evaluate_agent.py` and verified in `evaluation_results.txt` that Groundedness >= 3.5 and Relevance >= 3.5.\"",
      "\"[ ] I have deleted all previous prompt versions from Git history.\"",
      "\"[ ] I have disabled OpenTelemetry tracing to save storage costs.\"",
      "\"[ ] I have hardcoded my personal Azure API key in `.env`.\""
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Proper GenAIOps governance mandates that any modification to prompt instructions must be empirically validated against benchmark evaluation datasets before peer review approval."
  },
  {
    "id": 3091,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `.github/workflows/evaluate-agent.yml` (#10), you are configuring automated CI/CD quality gating for Pull Requests.",
    "question": "Which GitHub Actions authentication mechanism provides secure, secret-free login to Azure AI Foundry without storing permanent passwords or client secrets in GitHub Secrets?",
    "options": [
      "OpenID Connect (OIDC) Federation using `azure/login@v2` with `client-id`, `tenant-id`, and `subscription-id` (accompanied by `permissions: id-token: write`).",
      "Storing a permanent Azure Service Principal Client Secret in `secret.AZURE_PASSWORD`.",
      "Committing your personal `.env` file into the GitHub repository branch.",
      "Running `az login --interactive` inside the automated CI/CD runner."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Modern MLOps CI/CD best practices mandate OpenID Connect (OIDC) workload identity federation (`id-token: write`), eliminating long-lived credentials in GitHub Secrets."
  },
  {
    "id": 3092,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are designing the CI/CD pull request gate in `.github/workflows/evaluate-agent.yml` (#10). If `evaluate_agent.py` generates an average Groundedness score below 3.0 in `evaluation_results.txt`, the build must fail.",
    "question": "Which shell command step in GitHub Actions correctly parses `evaluation_results.txt` and fails the workflow if thresholds are breached?",
    "options": [
      "python -c \"scores = open('evaluation_results.txt').read(); assert float(scores.split('Groundedness: ')[1].split()[0]) >= 3.0, 'Quality Gate Failed!'\"",
      "exit 0 # Ignore scores and merge PR",
      "git commit --amend --no-verify",
      "echo 'Score low' >> $GITHUB_STEP_SUMMARY; return True"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In MLOps pipelines, automated quality gating requires parsing the evaluation output file (`evaluation_results.txt`) and raising a non-zero exit code (via assertion or `exit 1`) if metrics fall below threshold."
  },
  {
    "id": 3093,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In your GitHub repository (#10), you want to enforce that no engineer can merge code into `main` without passing the automated cloud evaluation CI/CD pipeline.",
    "question": "Which repository setting in GitHub or Azure DevOps enforces this workflow requirement?",
    "options": [
      "Branch Protection Rules (or Rulesets) on `main` requiring status check `evaluate-agent` to pass before merging is allowed.",
      "Setting file permissions on `trail_guide_agent.py` to read-only in Windows Explorer.",
      "Adding a comment in `PULL_REQUEST_TEMPLATE.md` asking reviewers to check scores manually.",
      "Disabling Git Push in `.gitignore`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Branch protection rules in source control enforce CI/CD governance by blocking pull request merges until designated automated workflow jobs (like LLM evaluations) return success."
  },
  {
    "id": 3094,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "During CI/CD execution (#10), the GitHub Actions runner fails with `ModuleNotFoundError: No module named 'azure.ai.projects'`.",
    "question": "Which workflow step must be executed prior to running `src/evaluators/evaluate_agent.py` in the pipeline?",
    "options": [
      "python -m pip install --upgrade pip && pip install -r requirements.txt",
      "sudo apt-get install azure-cli",
      "git pull origin main --force",
      "azd init --template mslearn-genaiops"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: CI/CD runners are clean, ephemeral virtual machines. Dependencies declared in `requirements.txt` must be explicitly installed via `pip install` in an earlier workflow step."
  },
  {
    "id": 3095,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You want to optimize CI/CD pipeline speed (#10) by preventing `evaluate_agent.py` from running when changes only affect documentation files (`*.md`).",
    "question": "Which YAML trigger filtering syntax in `.github/workflows/evaluate-agent.yml` achieves this optimization?",
    "options": [
      "on: pull_request: paths-ignore: [ '**.md', 'docs/**' ] (or paths: [ 'src/**', 'data/**', 'infra/**' ])",
      "on: pull_request: ignore_docs: true",
      "jobs: eval: if: github.file_type != 'markdown'",
      "trigger: exclude: '*.md'"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Using `paths-ignore: ['**.md']` or specific `paths:` filters in GitHub Actions prevents expensive cloud LLM evaluation runs from triggering on typo fixes or readme edits."
  },
  {
    "id": 3096,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/evaluators/evaluate_agent.py` (#10), you want to output evaluation results as a markdown table directly into the GitHub Actions Pull Request summary UI.",
    "question": "Which special environment variable file path is used in GitHub Actions to append custom markdown summaries?",
    "options": [
      "with open(os.environ['GITHUB_STEP_SUMMARY'], 'a') as f: f.write('| Metric | Score |\\n|---|---|\\n| Groundedness | 4.5 |')",
      "sys.stdout.write('PR_SUMMARY: Groundedness = 4.5')",
      "os.system('git comment pr --text \"Score 4.5\"')",
      "open('.github/summary.md', 'w').write('Score: 4.5')"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Writing markdown text to the file path specified by `os.environ['GITHUB_STEP_SUMMARY']` automatically renders a rich visual dashboard on the GitHub Actions workflow run page."
  },
  {
    "id": 3097,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "An MLOps team manages three separate Azure environments: Dev, Staging, and Prod (#10). In GitHub Actions, how should environment-specific endpoints (`AZURE_AI_PROJECT_ENDPOINT`) be injected into the runner?",
    "question": "Which special environment variable file path is used in GitHub Actions to append custom markdown summaries?",
    "options": [
      "Use GitHub Environments (`environment: staging`) and reference environment-scoped variables via `${{ vars.AZURE_AI_PROJECT_ENDPOINT }}`.",
      "Hardcode all three production endpoints directly inside `trail_guide_agent.py` with an `if/else` statement.",
      "Create three duplicate GitHub repositories, one for each environment.",
      "Store production endpoints in `abbreviations.json`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: GitHub Environments allow scoping variables (`vars.*`) and secrets (`secrets.*`) to specific deployment targets (Dev, Staging, Prod), enabling clean promotion pipelines without code changes."
  },
  {
    "id": 3098,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You want to automate the provisioning of cloud infrastructure as part of a nightly CI/CD regression test (#10).",
    "question": "Which CLI sequence correctly initializes, provisions, and tests the environment non-interactively?",
    "options": [
      "azd auth login --client-id ... && azd provision --no-prompt && python src/evaluators/evaluate_agent.py",
      "az group create && bicep compile main.bicep && python trail_guide_agent.py",
      "terraform apply -auto-approve && npm run dev",
      "docker build . -t trail-guide && docker run trail-guide"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In an automated AZD CI/CD pipeline, authenticating via service principal and running `azd provision --no-prompt` ensures non-interactive infrastructure deployment before test execution."
  },
  {
    "id": 3099,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "During a pull request build (#10), `evaluate_agent.py` takes 25 minutes to evaluate 500 items sequentially, causing CI/CD queue bottlenecks.",
    "question": "How does Azure AI Foundry cloud evaluation (`client.evals.runs.create()`) natively solve this sequential processing bottleneck?",
    "options": [
      "Cloud evaluation runs execute in parallel across distributed serverless AI workers in Azure AI Foundry, scoring hundreds of dataset rows concurrently without blocking local CPU.",
      "You must manually split the JSONL file into 50 separate files and run 50 parallel GitHub Action jobs.",
      "Azure AI Foundry reduces latency by skipping Groundedness evaluation on even-numbered rows.",
      "You must upgrade your GitHub Actions runner from 2-core to 64-core CPU."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Offloading evaluations to `client.evals.runs.create()` leverages Azure AI Foundry's distributed cloud compute, automatically parallelizing LLM-as-a-Judge scoring across large datasets."
  },
  {
    "id": 3100,
    "track": "T5",
    "domain": "Track 5: MLOps CI/CD Automation & Gating",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `PULL_REQUEST_TEMPLATE.md` (#10), you are establishing team governance rules for prompt engineering modifications.",
    "question": "Which mandatory checklist item should be required before merging any changes to files in `src/agents/trail_guide_agent/prompts/`?",
    "options": [
      "\"[ ] I have executed `python src/evaluators/evaluate_agent.py` and verified in `evaluation_results.txt` that Groundedness >= 3.5 and Relevance >= 3.5.\"",
      "\"[ ] I have deleted all previous prompt versions from Git history.\"",
      "\"[ ] I have disabled OpenTelemetry tracing to save storage costs.\"",
      "\"[ ] I have hardcoded my personal Azure API key in `.env`.\""
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Proper GenAIOps governance mandates that any modification to prompt instructions must be empirically validated against benchmark evaluation datasets before peer review approval."
  }
];
