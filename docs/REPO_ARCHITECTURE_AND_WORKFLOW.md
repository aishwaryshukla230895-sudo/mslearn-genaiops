# GenAIOps Architecture & File Reference Guide
**Repository:** `mslearn-genaiops` (Adventure Works Trail Guide Agent)  
**Platform:** Microsoft Foundry (Azure AI Services Hub & Projects)  

---

## 📖 Executive Summary
This repository implements a complete **Generative AI Operations (GenAIOps)** lifecycle for the **Adventure Works Trail Guide Agent** using **Microsoft Foundry**. It provides automated infrastructure provisioning, prompt engineering versioning, local and batch interactive testing, automated cloud evaluations (using an LLM Judge), continuous observability, and CI/CD automation.

The table below and subsequent detailed walkthrough organize the entire repository in **ascending order of execution**—from initial cloud setup to automated production deployment.

---

## 🗂️ Complete File Reference Table (Ascending Process Order)

| Process Step | File / Directory Path | Reason & Core Role in Microsoft Foundry |
| :--- | :--- | :--- |
| **1. Cloud Setup** | `azure.yaml` | **AZD Template Config**: Defines project metadata and instructs Azure Developer CLI (`azd`) on which Bicep templates to deploy. |
| **1. Cloud Setup** | `infra/main.bicep` | **Root Infrastructure Template**: Orchestrates the provisioning of Azure Resource Group, Foundry Hub, Project, Log Analytics, and Application Insights. |
| **1. Cloud Setup** | `infra/main.parameters.json` | **Bicep Parameters**: Supplies default parameters (environment name, location, resource prefix) for cloud deployment. |
| **1. Cloud Setup** | `infra/abbreviations.json` | **Naming Conventions**: Standardizes Azure resource naming prefixes across deployed cloud components. |
| **1. Cloud Setup** | `infra/core/*` (`ai/`, `host/`, `monitor/`, `search/`, `storage/`) | **Modular Bicep Modules**: Granular Bicep modules defining the exact configuration for AI Services Accounts, Foundry Projects, Model Deployments (`gpt-5.1`), and Telemetry. |
| **1. Cloud Setup** | `.env` | **Runtime Environment Variables**: Stores secret-free cloud endpoints (`AZURE_AI_PROJECT_ENDPOINT`), model names (`gpt-5.1`), and agent identifiers used by Python SDKs. |
| **2. Environment** | `requirements.txt` | **Python Dependencies**: Defines required Azure SDKs (`azure-ai-projects`, `azure-identity`), OpenAI clients, visualization tools, and evaluation libraries. |
| **2. Environment** | `.venv/` | **Virtual Environment**: Local isolated Python environment containing installed dependency packages. |
| **2. Environment** | `.gitignore` | **Git Exclusion Rules**: Prevents sensitive local files (`.env`, `.venv`, cache, build artifacts) from being committed to source control. |
| **3. Agent Dev** | `src/agents/trail_guide_agent/trail_guide_agent.py` | **Core Agent Implementation**: Initializes `AIProjectClient`, connects to Microsoft Foundry, loads system instructions, and handles conversational inference. |
| **3. Agent Dev** | `src/agents/trail_guide_agent/agent.yaml` | **Agent Configuration Manifest**: Defines agent metadata, model parameters, and default prompt file mappings. |
| **3. Agent Dev** | `src/agents/trail_guide_agent/prompts/*` (`v1` to `v4`) | **Prompt Versioning Storage**: Stores historical iterations of system prompts (`v1_instructions.txt` to `v4_optimized_concise.txt`) for quality tuning and regressions. |
| **4. Testing** | `src/tests/interact_with_agent.py` | **Interactive CLI Tester**: Enables real-time, single-turn or multi-turn terminal chat with the agent running in Microsoft Foundry. |
| **4. Testing** | `src/tests/run_batch_tests.py` | **Batch Execution Runner**: Automatically executes multiple test prompts against the agent to quickly validate responses without manual typing. |
| **4. Testing** | `src/tests/test-prompts/*` (`day-hike-gear.txt`, etc.) | **Test Case Library**: Collection of specialized hiking scenarios (winter hiking, camping, gear lists) used by batch testing scripts. |
| **5. Evaluation** | `data/trail_guide_evaluation_dataset.jsonl` | **Cloud Evaluation Dataset**: Contains 89 curated query-response-groundtruth triples used to evaluate model accuracy at scale. |
| **5. Evaluation** | `src/evaluators/evaluate_agent.py` | **Automated Cloud Evaluator**: Uploads dataset to Foundry, creates evaluation definitions, triggers cloud LLM Judge scoring, polls for completion, and exports reports. |
| **5. Evaluation** | `evaluation_results.txt` | **Evaluation Summary Report**: Generated plaintext report storing average quality scores (Intent Resolution, Relevance, Groundedness) for CI/CD tracking. |
| **6. Monitoring** | `src/tests/run_monitoring.py` | **Live Telemetry Generator**: Generates simulated user traffic and logs custom metrics/events to Azure Application Insights and Log Analytics. |
| **6. Monitoring** | `src/tests/check_traces.py` | **Trace & Log Inspector**: Queries OpenTelemetry spans and logs in Microsoft Foundry to debug latency, token usage, and execution paths. |
| **6. Monitoring** | `src/agents/monitoring_agent/*` (`error-prompt.py`, etc.) | **Stress & Error Scenarios**: Specialized scripts designed to test agent resilience under edge cases, error conditions, and prompt injections. |
| **7. CI/CD & Docs**| `.github/workflows/evaluate-agent.yml` | **GitHub Actions Pipeline**: Automated CI/CD workflow that triggers cloud evaluations on Pull Requests and blocks merges if quality thresholds drop. |
| **7. CI/CD & Docs**| `.github/CONTRIBUTING.md`, `PULL_REQUEST_TEMPLATE.md`, `ISSUE_TEMPLATE/*` | **Governance & Collaboration**: Standardizes code review processes, pull request checklists, and bug reporting for team development. |
| **7. CI/CD & Docs**| `index.md`, `_config.yml`, `_build.yml`, `LICENSE` | **Documentation & Licensing**: GitHub Pages documentation configuration, build scripts, and open-source licensing terms. |

---

## ⚙️ Detailed Process Workflow & Role of `.py` Scripts

The GenAIOps workflow operates sequentially across seven distinct phases. Here is how each Python script and its associated files drive the Microsoft Foundry integration:

### Step 1: Infrastructure & Cloud Provisioning (Bicep & AZD)
* **Goal**: Establish the foundational cloud hardware, networking, and AI models in Azure.
* **Mechanism**: When `azd up` is executed, it reads `azure.yaml` and executes `infra/main.bicep`. This creates the **Microsoft Foundry Hub** (`ai-account-...`), the **Foundry Project** (`ai-project-...`), and deploys the **`gpt-5.1`** Azure OpenAI model.
* **Bridge**: Upon completion, `azd` outputs critical endpoints and resource IDs directly into the local `.env` file, establishing the secure authenticated bridge for Python scripts.

### Step 2: Environment & SDK Initialization
* **Goal**: Equip the local machine with necessary Azure AI SDKs.
* **Mechanism**: Running `pip install -r requirements.txt` within `.venv` installs `azure-ai-projects` and `azure-identity`.
* **Authentication**: Python scripts utilize `DefaultAzureCredential()`, which reads your active developer login (`az login` / `azd auth login`) to authenticate against Microsoft Foundry without hardcoded passwords or API keys.

### Step 3: Core Agent Execution (`trail_guide_agent.py`)
* **Associated Files**: `agent.yaml`, `prompts/v1_instructions.txt` through `v4_optimized_concise.txt`.
* **How it works in Foundry**:
  1. **Initialization**: `trail_guide_agent.py` loads `AZURE_AI_PROJECT_ENDPOINT` from `.env` and initializes `AIProjectClient`.
  2. **Model Binding**: It retrieves the OpenAI-compatible chat client and binds to the model deployment specified by `MODEL_NAME` (`gpt-5.1`).
  3. **Prompt Injection**: The script reads the active system instruction file (e.g., `v4_optimized_concise.txt`) from the `prompts/` directory and injects it as the system message.
  4. **Inference**: When queried, it sends the conversational payload to the Microsoft Foundry backend, receives the streaming or complete completion, and formats the response for the user.

### Step 4: Interactive & Batch Validation (`interact_with_agent.py` & `run_batch_tests.py`)
* **Associated Files**: `src/tests/test-prompts/*`.
* **How it works in Foundry**:
  * `interact_with_agent.py` opens an interactive terminal loop. Each prompt typed by the developer is dynamically routed through `AIProjectClient` to the live Foundry project, allowing instant verification of persona tone and hiking domain knowledge.
  * `run_batch_tests.py` automates this by iterating through the files in `src/tests/test-prompts/` (e.g., `winter-hiking.txt`, `overnight-camping.txt`). It sends each prompt sequentially to Foundry, measuring response times and logging outputs for rapid smoke-testing.

### Step 5: Automated Cloud Evaluation at Scale (`evaluate_agent.py`)
* **Associated Files**: `data/trail_guide_evaluation_dataset.jsonl`, `evaluation_results.txt`.
* **How it works in Foundry**:
  This is the core Quality Assurance engine of the repository. It executes a 5-step cloud orchestration:
  1. **Dataset Upload**: Reads `trail_guide_evaluation_dataset.jsonl` (89 hiking queries, agent responses, and ground truth answers) and uploads it to Microsoft Foundry via `project_client.datasets.upload_file()`.
  2. **Definition Registration**: Creates an evaluation definition in Foundry (`client.evals.create()`), mapping dataset columns to three built-in AI quality evaluators:
     * **Intent Resolution**: Evaluates if the response fully addresses the user's underlying hiking request.
     * **Relevance**: Evaluates if the response remains strictly pertinent to the query without rambling.
     * **Groundedness**: Evaluates if the response is factual and supported by the provided context/ground truth.
  3. **Cloud Run Trigger**: Triggers an asynchronous cloud evaluation job (`client.evals.runs.create()`). Microsoft Foundry spins up parallel cloud workers using **GPT-5.1** as an **LLM Judge** to score all 89 items simultaneously.
  4. **Resilient Polling**: The script loops every 10 seconds (`client.evals.runs.retrieve()`), monitoring cloud execution until the run status reaches `completed`.
  5. **Report Generation**: Pulls individual item scores (`client.evals.runs.output_items.list()`), calculates average scores and pass rates (threshold >= 3.0 on a 1-5 scale), displays a formatted console summary, and writes the output to `evaluation_results.txt`.

### Step 6: Observability, Tracing & Stress Testing (`run_monitoring.py` & `check_traces.py`)
* **Associated Files**: `src/agents/monitoring_agent/*`.
* **How it works in Foundry**:
  * `run_monitoring.py` connects to Azure Application Insights and Log Analytics (provisioned in Step 1). It sends synthetic production traffic and logs custom telemetry events, token usage metrics, and latency histograms.
  * `check_traces.py` queries OpenTelemetry spans generated during agent interactions. It allows developers to inspect the exact request-response headers, token counts, and execution paths stored in Foundry's observability backend.
  * The scripts in `monitoring_agent/` (`error-prompt.py`, `short-prompt.py`, `solution-prompt.py`) deliberately trigger edge cases (such as malformed queries or ambiguous hiking requests) to verify that the agent fails gracefully and records appropriate error traces in Log Analytics.

### Step 7: CI/CD Pipeline Automation (`.github/workflows/evaluate-agent.yml`)
* **Associated Files**: `evaluation_results.txt`, `PULL_REQUEST_TEMPLATE.md`.
* **How it works in Foundry**:
  When a developer submits a Pull Request modifying agent prompts or logic, GitHub Actions automatically executes `evaluate_agent.py` against the cloud Foundry environment. It compares the resulting scores in `evaluation_results.txt` against baseline quality thresholds. If scores drop below acceptable pass rates, the CI/CD pipeline fails, preventing degraded AI models from being merged into production.

---
*Documentation auto-generated as part of the MSLearn GenAIOps Adventure Works Trail Guide Project.*
