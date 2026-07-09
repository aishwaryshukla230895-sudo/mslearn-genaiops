window.HANDSON_DATA_EASY_T1 = [
  {
    "id": 2001,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Adventure Works Core Hub` implementing `Bicep `Microsoft.MachineLearningServices/workspaces``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `setting the Hub `kind` property in Bicep` (Implementation Task #1).",
    "question": "[EASY Coding Task #1] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.MachineLearningServices/workspaces`` when implementing `setting the Hub `kind` property in Bicep`?",
    "options": [
      "A) Defining `kind: 'Hub'` and `sku: { name: 'Basic', tier: 'Basic' }` in the workspace resource block.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Defining `kind: 'Hub'` and `sku: { name: 'Basic', tier: 'Basic' }` in the workspace resource block.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.MachineLearningServices/workspaces``, Defining `kind: 'Hub'` and `sku: { name: 'Basic', tier: 'Basic' }` in the workspace resource block. is the officially required syntax for `setting the Hub `kind` property in Bicep`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2002,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Contoso Health AI` implementing `Bicep `Microsoft.CognitiveServices/accounts``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `setting the Hub `kind` property in Bicep` (Implementation Task #2).",
    "question": "[EASY Coding Task #2] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.CognitiveServices/accounts`` when implementing `setting the Hub `kind` property in Bicep`?",
    "options": [
      "A) Defining `kind: 'Hub'` and `sku: { name: 'Basic', tier: 'Basic' }` in the workspace resource block.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Defining `kind: 'Hub'` and `sku: { name: 'Basic', tier: 'Basic' }` in the workspace resource block.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.CognitiveServices/accounts``, Defining `kind: 'Hub'` and `sku: { name: 'Basic', tier: 'Basic' }` in the workspace resource block. is the officially required syntax for `setting the Hub `kind` property in Bicep`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2003,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Fabrikam Logistics Agent` implementing `Bicep `Microsoft.KeyVault/vaults``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `setting the Hub `kind` property in Bicep` (Implementation Task #3).",
    "question": "[EASY Coding Task #3] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.KeyVault/vaults`` when implementing `setting the Hub `kind` property in Bicep`?",
    "options": [
      "A) Defining `kind: 'Hub'` and `sku: { name: 'Basic', tier: 'Basic' }` in the workspace resource block.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Defining `kind: 'Hub'` and `sku: { name: 'Basic', tier: 'Basic' }` in the workspace resource block.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.KeyVault/vaults``, Defining `kind: 'Hub'` and `sku: { name: 'Basic', tier: 'Basic' }` in the workspace resource block. is the officially required syntax for `setting the Hub `kind` property in Bicep`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2004,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Trey Research Lab` implementing `Bicep `Microsoft.Storage/storageAccounts``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `setting the Hub `kind` property in Bicep` (Implementation Task #4).",
    "question": "[EASY Coding Task #4] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Bicep `Microsoft.Storage/storageAccounts`` for `setting the Hub `kind` property in Bicep`? (Select three)",
    "options": [
      "A) Defining `kind: 'Hub'` and `sku: { name: 'Basic', tier: 'Basic' }` in the workspace resource block.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Bicep `Microsoft.Storage/storageAccounts`` for `setting the Hub `kind` property in Bicep`, enterprise coding standards mandate: (1) Defining `kind: 'Hub'` and `sku: { name: 'Basic', tier: 'Basic' }` in the workspace resource block., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2005,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Northwind Traders Bot` implementing `Bicep `Microsoft.OperationalInsights/workspaces``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `setting the Hub `kind` property in Bicep` (Implementation Task #5).",
    "question": "[EASY Coding Task #5] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.OperationalInsights/workspaces`` when implementing `setting the Hub `kind` property in Bicep`?",
    "options": [
      "A) Defining `kind: 'Hub'` and `sku: { name: 'Basic', tier: 'Basic' }` in the workspace resource block.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Defining `kind: 'Hub'` and `sku: { name: 'Basic', tier: 'Basic' }` in the workspace resource block.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.OperationalInsights/workspaces``, Defining `kind: 'Hub'` and `sku: { name: 'Basic', tier: 'Basic' }` in the workspace resource block. is the officially required syntax for `setting the Hub `kind` property in Bicep`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2006,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Woodgrove Bank Virtual Assistant` implementing `Bicep `Microsoft.Insights/components``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `setting the Hub `kind` property in Bicep` (Implementation Task #6).",
    "question": "[EASY Coding Task #6] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.Insights/components`` when implementing `setting the Hub `kind` property in Bicep`?",
    "options": [
      "A) Defining `kind: 'Hub'` and `sku: { name: 'Basic', tier: 'Basic' }` in the workspace resource block.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Defining `kind: 'Hub'` and `sku: { name: 'Basic', tier: 'Basic' }` in the workspace resource block.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.Insights/components``, Defining `kind: 'Hub'` and `sku: { name: 'Basic', tier: 'Basic' }` in the workspace resource block. is the officially required syntax for `setting the Hub `kind` property in Bicep`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2007,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Litware Legal Evaluator` implementing `Bicep `Microsoft.Network/privateEndpoints``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `setting the Hub `kind` property in Bicep` (Implementation Task #7).",
    "question": "[EASY Coding Task #7] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.Network/privateEndpoints`` when implementing `setting the Hub `kind` property in Bicep`?",
    "options": [
      "A) Defining `kind: 'Hub'` and `sku: { name: 'Basic', tier: 'Basic' }` in the workspace resource block.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Defining `kind: 'Hub'` and `sku: { name: 'Basic', tier: 'Basic' }` in the workspace resource block.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.Network/privateEndpoints``, Defining `kind: 'Hub'` and `sku: { name: 'Basic', tier: 'Basic' }` in the workspace resource block. is the officially required syntax for `setting the Hub `kind` property in Bicep`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2008,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `A.Datum Retail Copilot` implementing `AZD `azure.yaml` Root Orchestration File`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `setting the Hub `kind` property in Bicep` (Implementation Task #8).",
    "question": "[EASY Coding Task #8] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `AZD `azure.yaml` Root Orchestration File` for `setting the Hub `kind` property in Bicep`? (Select three)",
    "options": [
      "A) Defining `kind: 'Hub'` and `sku: { name: 'Basic', tier: 'Basic' }` in the workspace resource block.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `AZD `azure.yaml` Root Orchestration File` for `setting the Hub `kind` property in Bicep`, enterprise coding standards mandate: (1) Defining `kind: 'Hub'` and `sku: { name: 'Basic', tier: 'Basic' }` in the workspace resource block., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2009,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Alpine Ski Field Technician` implementing `Bicep `infra/main.parameters.json` & `abbreviations.json``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `setting the Hub `kind` property in Bicep` (Implementation Task #9).",
    "question": "[EASY Coding Task #9] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `infra/main.parameters.json` & `abbreviations.json`` when implementing `setting the Hub `kind` property in Bicep`?",
    "options": [
      "A) Defining `kind: 'Hub'` and `sku: { name: 'Basic', tier: 'Basic' }` in the workspace resource block.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Defining `kind: 'Hub'` and `sku: { name: 'Basic', tier: 'Basic' }` in the workspace resource block.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `infra/main.parameters.json` & `abbreviations.json``, Defining `kind: 'Hub'` and `sku: { name: 'Basic', tier: 'Basic' }` in the workspace resource block. is the officially required syntax for `setting the Hub `kind` property in Bicep`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2010,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Tailwind Traders Multi-Agent` implementing `AZD CLI Command Flags (`azd up`, `azd down`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `setting the Hub `kind` property in Bicep` (Implementation Task #10).",
    "question": "[EASY Coding Task #10] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `AZD CLI Command Flags (`azd up`, `azd down`)` when implementing `setting the Hub `kind` property in Bicep`?",
    "options": [
      "A) Defining `kind: 'Hub'` and `sku: { name: 'Basic', tier: 'Basic' }` in the workspace resource block.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Defining `kind: 'Hub'` and `sku: { name: 'Basic', tier: 'Basic' }` in the workspace resource block.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `AZD CLI Command Flags (`azd up`, `azd down`)`, Defining `kind: 'Hub'` and `sku: { name: 'Basic', tier: 'Basic' }` in the workspace resource block. is the officially required syntax for `setting the Hub `kind` property in Bicep`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2011,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Adventure Works Core Hub` implementing `Bicep `Microsoft.MachineLearningServices/workspaces``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `defining the Project `kind` and `hubResourceId`` (Implementation Task #11).",
    "question": "[EASY Coding Task #11] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.MachineLearningServices/workspaces`` when implementing `defining the Project `kind` and `hubResourceId``?",
    "options": [
      "A) Defining `kind: 'Project'` and linking `workspaceHubConfig: { hubResourceId: aiHub.id }` inside the Bicep template.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Defining `kind: 'Project'` and linking `workspaceHubConfig: { hubResourceId: aiHub.id }` inside the Bicep template.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.MachineLearningServices/workspaces``, Defining `kind: 'Project'` and linking `workspaceHubConfig: { hubResourceId: aiHub.id }` inside the Bicep template. is the officially required syntax for `defining the Project `kind` and `hubResourceId``. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2012,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Contoso Health AI` implementing `Bicep `Microsoft.CognitiveServices/accounts``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `defining the Project `kind` and `hubResourceId`` (Implementation Task #12).",
    "question": "[EASY Coding Task #12] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Bicep `Microsoft.CognitiveServices/accounts`` for `defining the Project `kind` and `hubResourceId``? (Select three)",
    "options": [
      "A) Defining `kind: 'Project'` and linking `workspaceHubConfig: { hubResourceId: aiHub.id }` inside the Bicep template.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Bicep `Microsoft.CognitiveServices/accounts`` for `defining the Project `kind` and `hubResourceId``, enterprise coding standards mandate: (1) Defining `kind: 'Project'` and linking `workspaceHubConfig: { hubResourceId: aiHub.id }` inside the Bicep template., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2013,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Fabrikam Logistics Agent` implementing `Bicep `Microsoft.KeyVault/vaults``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `defining the Project `kind` and `hubResourceId`` (Implementation Task #13).",
    "question": "[EASY Coding Task #13] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.KeyVault/vaults`` when implementing `defining the Project `kind` and `hubResourceId``?",
    "options": [
      "A) Defining `kind: 'Project'` and linking `workspaceHubConfig: { hubResourceId: aiHub.id }` inside the Bicep template.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Defining `kind: 'Project'` and linking `workspaceHubConfig: { hubResourceId: aiHub.id }` inside the Bicep template.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.KeyVault/vaults``, Defining `kind: 'Project'` and linking `workspaceHubConfig: { hubResourceId: aiHub.id }` inside the Bicep template. is the officially required syntax for `defining the Project `kind` and `hubResourceId``. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2014,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Trey Research Lab` implementing `Bicep `Microsoft.Storage/storageAccounts``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `defining the Project `kind` and `hubResourceId`` (Implementation Task #14).",
    "question": "[EASY Coding Task #14] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.Storage/storageAccounts`` when implementing `defining the Project `kind` and `hubResourceId``?",
    "options": [
      "A) Defining `kind: 'Project'` and linking `workspaceHubConfig: { hubResourceId: aiHub.id }` inside the Bicep template.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Defining `kind: 'Project'` and linking `workspaceHubConfig: { hubResourceId: aiHub.id }` inside the Bicep template.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.Storage/storageAccounts``, Defining `kind: 'Project'` and linking `workspaceHubConfig: { hubResourceId: aiHub.id }` inside the Bicep template. is the officially required syntax for `defining the Project `kind` and `hubResourceId``. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2015,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Northwind Traders Bot` implementing `Bicep `Microsoft.OperationalInsights/workspaces``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `defining the Project `kind` and `hubResourceId`` (Implementation Task #15).",
    "question": "[EASY Coding Task #15] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.OperationalInsights/workspaces`` when implementing `defining the Project `kind` and `hubResourceId``?",
    "options": [
      "A) Defining `kind: 'Project'` and linking `workspaceHubConfig: { hubResourceId: aiHub.id }` inside the Bicep template.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Defining `kind: 'Project'` and linking `workspaceHubConfig: { hubResourceId: aiHub.id }` inside the Bicep template.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.OperationalInsights/workspaces``, Defining `kind: 'Project'` and linking `workspaceHubConfig: { hubResourceId: aiHub.id }` inside the Bicep template. is the officially required syntax for `defining the Project `kind` and `hubResourceId``. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2016,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Woodgrove Bank Virtual Assistant` implementing `Bicep `Microsoft.Insights/components``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `defining the Project `kind` and `hubResourceId`` (Implementation Task #16).",
    "question": "[EASY Coding Task #16] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Bicep `Microsoft.Insights/components`` for `defining the Project `kind` and `hubResourceId``? (Select three)",
    "options": [
      "A) Defining `kind: 'Project'` and linking `workspaceHubConfig: { hubResourceId: aiHub.id }` inside the Bicep template.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Bicep `Microsoft.Insights/components`` for `defining the Project `kind` and `hubResourceId``, enterprise coding standards mandate: (1) Defining `kind: 'Project'` and linking `workspaceHubConfig: { hubResourceId: aiHub.id }` inside the Bicep template., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2017,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Litware Legal Evaluator` implementing `Bicep `Microsoft.Network/privateEndpoints``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `defining the Project `kind` and `hubResourceId`` (Implementation Task #17).",
    "question": "[EASY Coding Task #17] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.Network/privateEndpoints`` when implementing `defining the Project `kind` and `hubResourceId``?",
    "options": [
      "A) Defining `kind: 'Project'` and linking `workspaceHubConfig: { hubResourceId: aiHub.id }` inside the Bicep template.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Defining `kind: 'Project'` and linking `workspaceHubConfig: { hubResourceId: aiHub.id }` inside the Bicep template.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.Network/privateEndpoints``, Defining `kind: 'Project'` and linking `workspaceHubConfig: { hubResourceId: aiHub.id }` inside the Bicep template. is the officially required syntax for `defining the Project `kind` and `hubResourceId``. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2018,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `A.Datum Retail Copilot` implementing `AZD `azure.yaml` Root Orchestration File`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `defining the Project `kind` and `hubResourceId`` (Implementation Task #18).",
    "question": "[EASY Coding Task #18] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `AZD `azure.yaml` Root Orchestration File` when implementing `defining the Project `kind` and `hubResourceId``?",
    "options": [
      "A) Defining `kind: 'Project'` and linking `workspaceHubConfig: { hubResourceId: aiHub.id }` inside the Bicep template.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Defining `kind: 'Project'` and linking `workspaceHubConfig: { hubResourceId: aiHub.id }` inside the Bicep template.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `AZD `azure.yaml` Root Orchestration File`, Defining `kind: 'Project'` and linking `workspaceHubConfig: { hubResourceId: aiHub.id }` inside the Bicep template. is the officially required syntax for `defining the Project `kind` and `hubResourceId``. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2019,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Alpine Ski Field Technician` implementing `Bicep `infra/main.parameters.json` & `abbreviations.json``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `defining the Project `kind` and `hubResourceId`` (Implementation Task #19).",
    "question": "[EASY Coding Task #19] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `infra/main.parameters.json` & `abbreviations.json`` when implementing `defining the Project `kind` and `hubResourceId``?",
    "options": [
      "A) Defining `kind: 'Project'` and linking `workspaceHubConfig: { hubResourceId: aiHub.id }` inside the Bicep template.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Defining `kind: 'Project'` and linking `workspaceHubConfig: { hubResourceId: aiHub.id }` inside the Bicep template.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `infra/main.parameters.json` & `abbreviations.json``, Defining `kind: 'Project'` and linking `workspaceHubConfig: { hubResourceId: aiHub.id }` inside the Bicep template. is the officially required syntax for `defining the Project `kind` and `hubResourceId``. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2020,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Tailwind Traders Multi-Agent` implementing `AZD CLI Command Flags (`azd up`, `azd down`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `defining the Project `kind` and `hubResourceId`` (Implementation Task #20).",
    "question": "[EASY Coding Task #20] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `AZD CLI Command Flags (`azd up`, `azd down`)` for `defining the Project `kind` and `hubResourceId``? (Select three)",
    "options": [
      "A) Defining `kind: 'Project'` and linking `workspaceHubConfig: { hubResourceId: aiHub.id }` inside the Bicep template.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `AZD CLI Command Flags (`azd up`, `azd down`)` for `defining the Project `kind` and `hubResourceId``, enterprise coding standards mandate: (1) Defining `kind: 'Project'` and linking `workspaceHubConfig: { hubResourceId: aiHub.id }` inside the Bicep template., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2021,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Adventure Works Core Hub` implementing `Bicep `Microsoft.MachineLearningServices/workspaces``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `enabling RBAC authorization on Key Vault` (Implementation Task #21).",
    "question": "[EASY Coding Task #21] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.MachineLearningServices/workspaces`` when implementing `enabling RBAC authorization on Key Vault`?",
    "options": [
      "A) Specifying `properties: { enableRbacAuthorization: true }` inside the Bicep Key Vault definition block.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Specifying `properties: { enableRbacAuthorization: true }` inside the Bicep Key Vault definition block.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.MachineLearningServices/workspaces``, Specifying `properties: { enableRbacAuthorization: true }` inside the Bicep Key Vault definition block. is the officially required syntax for `enabling RBAC authorization on Key Vault`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2022,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Contoso Health AI` implementing `Bicep `Microsoft.CognitiveServices/accounts``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `enabling RBAC authorization on Key Vault` (Implementation Task #22).",
    "question": "[EASY Coding Task #22] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.CognitiveServices/accounts`` when implementing `enabling RBAC authorization on Key Vault`?",
    "options": [
      "A) Specifying `properties: { enableRbacAuthorization: true }` inside the Bicep Key Vault definition block.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Specifying `properties: { enableRbacAuthorization: true }` inside the Bicep Key Vault definition block.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.CognitiveServices/accounts``, Specifying `properties: { enableRbacAuthorization: true }` inside the Bicep Key Vault definition block. is the officially required syntax for `enabling RBAC authorization on Key Vault`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2023,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Fabrikam Logistics Agent` implementing `Bicep `Microsoft.KeyVault/vaults``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `enabling RBAC authorization on Key Vault` (Implementation Task #23).",
    "question": "[EASY Coding Task #23] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.KeyVault/vaults`` when implementing `enabling RBAC authorization on Key Vault`?",
    "options": [
      "A) Specifying `properties: { enableRbacAuthorization: true }` inside the Bicep Key Vault definition block.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Specifying `properties: { enableRbacAuthorization: true }` inside the Bicep Key Vault definition block.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.KeyVault/vaults``, Specifying `properties: { enableRbacAuthorization: true }` inside the Bicep Key Vault definition block. is the officially required syntax for `enabling RBAC authorization on Key Vault`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2024,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Trey Research Lab` implementing `Bicep `Microsoft.Storage/storageAccounts``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `enabling RBAC authorization on Key Vault` (Implementation Task #24).",
    "question": "[EASY Coding Task #24] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Bicep `Microsoft.Storage/storageAccounts`` for `enabling RBAC authorization on Key Vault`? (Select three)",
    "options": [
      "A) Specifying `properties: { enableRbacAuthorization: true }` inside the Bicep Key Vault definition block.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Bicep `Microsoft.Storage/storageAccounts`` for `enabling RBAC authorization on Key Vault`, enterprise coding standards mandate: (1) Specifying `properties: { enableRbacAuthorization: true }` inside the Bicep Key Vault definition block., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2025,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Northwind Traders Bot` implementing `Bicep `Microsoft.OperationalInsights/workspaces``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `enabling RBAC authorization on Key Vault` (Implementation Task #25).",
    "question": "[EASY Coding Task #25] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.OperationalInsights/workspaces`` when implementing `enabling RBAC authorization on Key Vault`?",
    "options": [
      "A) Specifying `properties: { enableRbacAuthorization: true }` inside the Bicep Key Vault definition block.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Specifying `properties: { enableRbacAuthorization: true }` inside the Bicep Key Vault definition block.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.OperationalInsights/workspaces``, Specifying `properties: { enableRbacAuthorization: true }` inside the Bicep Key Vault definition block. is the officially required syntax for `enabling RBAC authorization on Key Vault`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2026,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Woodgrove Bank Virtual Assistant` implementing `Bicep `Microsoft.Insights/components``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `enabling RBAC authorization on Key Vault` (Implementation Task #26).",
    "question": "[EASY Coding Task #26] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.Insights/components`` when implementing `enabling RBAC authorization on Key Vault`?",
    "options": [
      "A) Specifying `properties: { enableRbacAuthorization: true }` inside the Bicep Key Vault definition block.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Specifying `properties: { enableRbacAuthorization: true }` inside the Bicep Key Vault definition block.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.Insights/components``, Specifying `properties: { enableRbacAuthorization: true }` inside the Bicep Key Vault definition block. is the officially required syntax for `enabling RBAC authorization on Key Vault`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2027,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Litware Legal Evaluator` implementing `Bicep `Microsoft.Network/privateEndpoints``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `enabling RBAC authorization on Key Vault` (Implementation Task #27).",
    "question": "[EASY Coding Task #27] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.Network/privateEndpoints`` when implementing `enabling RBAC authorization on Key Vault`?",
    "options": [
      "A) Specifying `properties: { enableRbacAuthorization: true }` inside the Bicep Key Vault definition block.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Specifying `properties: { enableRbacAuthorization: true }` inside the Bicep Key Vault definition block.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.Network/privateEndpoints``, Specifying `properties: { enableRbacAuthorization: true }` inside the Bicep Key Vault definition block. is the officially required syntax for `enabling RBAC authorization on Key Vault`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2028,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `A.Datum Retail Copilot` implementing `AZD `azure.yaml` Root Orchestration File`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `enabling RBAC authorization on Key Vault` (Implementation Task #28).",
    "question": "[EASY Coding Task #28] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `AZD `azure.yaml` Root Orchestration File` for `enabling RBAC authorization on Key Vault`? (Select three)",
    "options": [
      "A) Specifying `properties: { enableRbacAuthorization: true }` inside the Bicep Key Vault definition block.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `AZD `azure.yaml` Root Orchestration File` for `enabling RBAC authorization on Key Vault`, enterprise coding standards mandate: (1) Specifying `properties: { enableRbacAuthorization: true }` inside the Bicep Key Vault definition block., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2029,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Alpine Ski Field Technician` implementing `Bicep `infra/main.parameters.json` & `abbreviations.json``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `enabling RBAC authorization on Key Vault` (Implementation Task #29).",
    "question": "[EASY Coding Task #29] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `infra/main.parameters.json` & `abbreviations.json`` when implementing `enabling RBAC authorization on Key Vault`?",
    "options": [
      "A) Specifying `properties: { enableRbacAuthorization: true }` inside the Bicep Key Vault definition block.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Specifying `properties: { enableRbacAuthorization: true }` inside the Bicep Key Vault definition block.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `infra/main.parameters.json` & `abbreviations.json``, Specifying `properties: { enableRbacAuthorization: true }` inside the Bicep Key Vault definition block. is the officially required syntax for `enabling RBAC authorization on Key Vault`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2030,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Tailwind Traders Multi-Agent` implementing `AZD CLI Command Flags (`azd up`, `azd down`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `enabling RBAC authorization on Key Vault` (Implementation Task #30).",
    "question": "[EASY Coding Task #30] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `AZD CLI Command Flags (`azd up`, `azd down`)` when implementing `enabling RBAC authorization on Key Vault`?",
    "options": [
      "A) Specifying `properties: { enableRbacAuthorization: true }` inside the Bicep Key Vault definition block.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Specifying `properties: { enableRbacAuthorization: true }` inside the Bicep Key Vault definition block.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `AZD CLI Command Flags (`azd up`, `azd down`)`, Specifying `properties: { enableRbacAuthorization: true }` inside the Bicep Key Vault definition block. is the officially required syntax for `enabling RBAC authorization on Key Vault`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2031,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Adventure Works Core Hub` implementing `Bicep `Microsoft.MachineLearningServices/workspaces``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `enabling System-Assigned Managed Identity` (Implementation Task #31).",
    "question": "[EASY Coding Task #31] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.MachineLearningServices/workspaces`` when implementing `enabling System-Assigned Managed Identity`?",
    "options": [
      "A) Adding `identity: { type: 'SystemAssigned' }` to the Azure AI Foundry Bicep resource block.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Adding `identity: { type: 'SystemAssigned' }` to the Azure AI Foundry Bicep resource block.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.MachineLearningServices/workspaces``, Adding `identity: { type: 'SystemAssigned' }` to the Azure AI Foundry Bicep resource block. is the officially required syntax for `enabling System-Assigned Managed Identity`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2032,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Contoso Health AI` implementing `Bicep `Microsoft.CognitiveServices/accounts``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `enabling System-Assigned Managed Identity` (Implementation Task #32).",
    "question": "[EASY Coding Task #32] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Bicep `Microsoft.CognitiveServices/accounts`` for `enabling System-Assigned Managed Identity`? (Select three)",
    "options": [
      "A) Adding `identity: { type: 'SystemAssigned' }` to the Azure AI Foundry Bicep resource block.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Bicep `Microsoft.CognitiveServices/accounts`` for `enabling System-Assigned Managed Identity`, enterprise coding standards mandate: (1) Adding `identity: { type: 'SystemAssigned' }` to the Azure AI Foundry Bicep resource block., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2033,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Fabrikam Logistics Agent` implementing `Bicep `Microsoft.KeyVault/vaults``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `enabling System-Assigned Managed Identity` (Implementation Task #33).",
    "question": "[EASY Coding Task #33] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.KeyVault/vaults`` when implementing `enabling System-Assigned Managed Identity`?",
    "options": [
      "A) Adding `identity: { type: 'SystemAssigned' }` to the Azure AI Foundry Bicep resource block.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Adding `identity: { type: 'SystemAssigned' }` to the Azure AI Foundry Bicep resource block.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.KeyVault/vaults``, Adding `identity: { type: 'SystemAssigned' }` to the Azure AI Foundry Bicep resource block. is the officially required syntax for `enabling System-Assigned Managed Identity`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2034,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Trey Research Lab` implementing `Bicep `Microsoft.Storage/storageAccounts``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `enabling System-Assigned Managed Identity` (Implementation Task #34).",
    "question": "[EASY Coding Task #34] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.Storage/storageAccounts`` when implementing `enabling System-Assigned Managed Identity`?",
    "options": [
      "A) Adding `identity: { type: 'SystemAssigned' }` to the Azure AI Foundry Bicep resource block.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Adding `identity: { type: 'SystemAssigned' }` to the Azure AI Foundry Bicep resource block.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.Storage/storageAccounts``, Adding `identity: { type: 'SystemAssigned' }` to the Azure AI Foundry Bicep resource block. is the officially required syntax for `enabling System-Assigned Managed Identity`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2035,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Northwind Traders Bot` implementing `Bicep `Microsoft.OperationalInsights/workspaces``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `enabling System-Assigned Managed Identity` (Implementation Task #35).",
    "question": "[EASY Coding Task #35] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.OperationalInsights/workspaces`` when implementing `enabling System-Assigned Managed Identity`?",
    "options": [
      "A) Adding `identity: { type: 'SystemAssigned' }` to the Azure AI Foundry Bicep resource block.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Adding `identity: { type: 'SystemAssigned' }` to the Azure AI Foundry Bicep resource block.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.OperationalInsights/workspaces``, Adding `identity: { type: 'SystemAssigned' }` to the Azure AI Foundry Bicep resource block. is the officially required syntax for `enabling System-Assigned Managed Identity`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2036,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Woodgrove Bank Virtual Assistant` implementing `Bicep `Microsoft.Insights/components``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `enabling System-Assigned Managed Identity` (Implementation Task #36).",
    "question": "[EASY Coding Task #36] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Bicep `Microsoft.Insights/components`` for `enabling System-Assigned Managed Identity`? (Select three)",
    "options": [
      "A) Adding `identity: { type: 'SystemAssigned' }` to the Azure AI Foundry Bicep resource block.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Bicep `Microsoft.Insights/components`` for `enabling System-Assigned Managed Identity`, enterprise coding standards mandate: (1) Adding `identity: { type: 'SystemAssigned' }` to the Azure AI Foundry Bicep resource block., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2037,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Litware Legal Evaluator` implementing `Bicep `Microsoft.Network/privateEndpoints``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `enabling System-Assigned Managed Identity` (Implementation Task #37).",
    "question": "[EASY Coding Task #37] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.Network/privateEndpoints`` when implementing `enabling System-Assigned Managed Identity`?",
    "options": [
      "A) Adding `identity: { type: 'SystemAssigned' }` to the Azure AI Foundry Bicep resource block.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Adding `identity: { type: 'SystemAssigned' }` to the Azure AI Foundry Bicep resource block.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.Network/privateEndpoints``, Adding `identity: { type: 'SystemAssigned' }` to the Azure AI Foundry Bicep resource block. is the officially required syntax for `enabling System-Assigned Managed Identity`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2038,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `A.Datum Retail Copilot` implementing `AZD `azure.yaml` Root Orchestration File`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `enabling System-Assigned Managed Identity` (Implementation Task #38).",
    "question": "[EASY Coding Task #38] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `AZD `azure.yaml` Root Orchestration File` when implementing `enabling System-Assigned Managed Identity`?",
    "options": [
      "A) Adding `identity: { type: 'SystemAssigned' }` to the Azure AI Foundry Bicep resource block.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Adding `identity: { type: 'SystemAssigned' }` to the Azure AI Foundry Bicep resource block.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `AZD `azure.yaml` Root Orchestration File`, Adding `identity: { type: 'SystemAssigned' }` to the Azure AI Foundry Bicep resource block. is the officially required syntax for `enabling System-Assigned Managed Identity`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2039,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Alpine Ski Field Technician` implementing `Bicep `infra/main.parameters.json` & `abbreviations.json``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `enabling System-Assigned Managed Identity` (Implementation Task #39).",
    "question": "[EASY Coding Task #39] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `infra/main.parameters.json` & `abbreviations.json`` when implementing `enabling System-Assigned Managed Identity`?",
    "options": [
      "A) Adding `identity: { type: 'SystemAssigned' }` to the Azure AI Foundry Bicep resource block.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Adding `identity: { type: 'SystemAssigned' }` to the Azure AI Foundry Bicep resource block.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `infra/main.parameters.json` & `abbreviations.json``, Adding `identity: { type: 'SystemAssigned' }` to the Azure AI Foundry Bicep resource block. is the officially required syntax for `enabling System-Assigned Managed Identity`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2040,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Tailwind Traders Multi-Agent` implementing `AZD CLI Command Flags (`azd up`, `azd down`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `enabling System-Assigned Managed Identity` (Implementation Task #40).",
    "question": "[EASY Coding Task #40] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `AZD CLI Command Flags (`azd up`, `azd down`)` for `enabling System-Assigned Managed Identity`? (Select three)",
    "options": [
      "A) Adding `identity: { type: 'SystemAssigned' }` to the Azure AI Foundry Bicep resource block.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `AZD CLI Command Flags (`azd up`, `azd down`)` for `enabling System-Assigned Managed Identity`, enterprise coding standards mandate: (1) Adding `identity: { type: 'SystemAssigned' }` to the Azure AI Foundry Bicep resource block., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2041,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Adventure Works Core Hub` implementing `Bicep `Microsoft.MachineLearningServices/workspaces``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `linking Application Insights to AI Foundry Hub` (Implementation Task #41).",
    "question": "[EASY Coding Task #41] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.MachineLearningServices/workspaces`` when implementing `linking Application Insights to AI Foundry Hub`?",
    "options": [
      "A) Referencing `applicationInsights: appInsights.id` inside the Hub `workspaceProperties` dictionary.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Referencing `applicationInsights: appInsights.id` inside the Hub `workspaceProperties` dictionary.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.MachineLearningServices/workspaces``, Referencing `applicationInsights: appInsights.id` inside the Hub `workspaceProperties` dictionary. is the officially required syntax for `linking Application Insights to AI Foundry Hub`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2042,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Contoso Health AI` implementing `Bicep `Microsoft.CognitiveServices/accounts``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `linking Application Insights to AI Foundry Hub` (Implementation Task #42).",
    "question": "[EASY Coding Task #42] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.CognitiveServices/accounts`` when implementing `linking Application Insights to AI Foundry Hub`?",
    "options": [
      "A) Referencing `applicationInsights: appInsights.id` inside the Hub `workspaceProperties` dictionary.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Referencing `applicationInsights: appInsights.id` inside the Hub `workspaceProperties` dictionary.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.CognitiveServices/accounts``, Referencing `applicationInsights: appInsights.id` inside the Hub `workspaceProperties` dictionary. is the officially required syntax for `linking Application Insights to AI Foundry Hub`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2043,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Fabrikam Logistics Agent` implementing `Bicep `Microsoft.KeyVault/vaults``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `linking Application Insights to AI Foundry Hub` (Implementation Task #43).",
    "question": "[EASY Coding Task #43] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.KeyVault/vaults`` when implementing `linking Application Insights to AI Foundry Hub`?",
    "options": [
      "A) Referencing `applicationInsights: appInsights.id` inside the Hub `workspaceProperties` dictionary.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Referencing `applicationInsights: appInsights.id` inside the Hub `workspaceProperties` dictionary.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.KeyVault/vaults``, Referencing `applicationInsights: appInsights.id` inside the Hub `workspaceProperties` dictionary. is the officially required syntax for `linking Application Insights to AI Foundry Hub`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2044,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Trey Research Lab` implementing `Bicep `Microsoft.Storage/storageAccounts``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `linking Application Insights to AI Foundry Hub` (Implementation Task #44).",
    "question": "[EASY Coding Task #44] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Bicep `Microsoft.Storage/storageAccounts`` for `linking Application Insights to AI Foundry Hub`? (Select three)",
    "options": [
      "A) Referencing `applicationInsights: appInsights.id` inside the Hub `workspaceProperties` dictionary.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Bicep `Microsoft.Storage/storageAccounts`` for `linking Application Insights to AI Foundry Hub`, enterprise coding standards mandate: (1) Referencing `applicationInsights: appInsights.id` inside the Hub `workspaceProperties` dictionary., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2045,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Northwind Traders Bot` implementing `Bicep `Microsoft.OperationalInsights/workspaces``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `linking Application Insights to AI Foundry Hub` (Implementation Task #45).",
    "question": "[EASY Coding Task #45] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.OperationalInsights/workspaces`` when implementing `linking Application Insights to AI Foundry Hub`?",
    "options": [
      "A) Referencing `applicationInsights: appInsights.id` inside the Hub `workspaceProperties` dictionary.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Referencing `applicationInsights: appInsights.id` inside the Hub `workspaceProperties` dictionary.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.OperationalInsights/workspaces``, Referencing `applicationInsights: appInsights.id` inside the Hub `workspaceProperties` dictionary. is the officially required syntax for `linking Application Insights to AI Foundry Hub`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2046,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Woodgrove Bank Virtual Assistant` implementing `Bicep `Microsoft.Insights/components``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `linking Application Insights to AI Foundry Hub` (Implementation Task #46).",
    "question": "[EASY Coding Task #46] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.Insights/components`` when implementing `linking Application Insights to AI Foundry Hub`?",
    "options": [
      "A) Referencing `applicationInsights: appInsights.id` inside the Hub `workspaceProperties` dictionary.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Referencing `applicationInsights: appInsights.id` inside the Hub `workspaceProperties` dictionary.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.Insights/components``, Referencing `applicationInsights: appInsights.id` inside the Hub `workspaceProperties` dictionary. is the officially required syntax for `linking Application Insights to AI Foundry Hub`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2047,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Litware Legal Evaluator` implementing `Bicep `Microsoft.Network/privateEndpoints``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `linking Application Insights to AI Foundry Hub` (Implementation Task #47).",
    "question": "[EASY Coding Task #47] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.Network/privateEndpoints`` when implementing `linking Application Insights to AI Foundry Hub`?",
    "options": [
      "A) Referencing `applicationInsights: appInsights.id` inside the Hub `workspaceProperties` dictionary.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Referencing `applicationInsights: appInsights.id` inside the Hub `workspaceProperties` dictionary.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.Network/privateEndpoints``, Referencing `applicationInsights: appInsights.id` inside the Hub `workspaceProperties` dictionary. is the officially required syntax for `linking Application Insights to AI Foundry Hub`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2048,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `A.Datum Retail Copilot` implementing `AZD `azure.yaml` Root Orchestration File`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `linking Application Insights to AI Foundry Hub` (Implementation Task #48).",
    "question": "[EASY Coding Task #48] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `AZD `azure.yaml` Root Orchestration File` for `linking Application Insights to AI Foundry Hub`? (Select three)",
    "options": [
      "A) Referencing `applicationInsights: appInsights.id` inside the Hub `workspaceProperties` dictionary.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `AZD `azure.yaml` Root Orchestration File` for `linking Application Insights to AI Foundry Hub`, enterprise coding standards mandate: (1) Referencing `applicationInsights: appInsights.id` inside the Hub `workspaceProperties` dictionary., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2049,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Alpine Ski Field Technician` implementing `Bicep `infra/main.parameters.json` & `abbreviations.json``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `linking Application Insights to AI Foundry Hub` (Implementation Task #49).",
    "question": "[EASY Coding Task #49] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `infra/main.parameters.json` & `abbreviations.json`` when implementing `linking Application Insights to AI Foundry Hub`?",
    "options": [
      "A) Referencing `applicationInsights: appInsights.id` inside the Hub `workspaceProperties` dictionary.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Referencing `applicationInsights: appInsights.id` inside the Hub `workspaceProperties` dictionary.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `infra/main.parameters.json` & `abbreviations.json``, Referencing `applicationInsights: appInsights.id` inside the Hub `workspaceProperties` dictionary. is the officially required syntax for `linking Application Insights to AI Foundry Hub`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2050,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Tailwind Traders Multi-Agent` implementing `AZD CLI Command Flags (`azd up`, `azd down`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `linking Application Insights to AI Foundry Hub` (Implementation Task #50).",
    "question": "[EASY Coding Task #50] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `AZD CLI Command Flags (`azd up`, `azd down`)` when implementing `linking Application Insights to AI Foundry Hub`?",
    "options": [
      "A) Referencing `applicationInsights: appInsights.id` inside the Hub `workspaceProperties` dictionary.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Referencing `applicationInsights: appInsights.id` inside the Hub `workspaceProperties` dictionary.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `AZD CLI Command Flags (`azd up`, `azd down`)`, Referencing `applicationInsights: appInsights.id` inside the Hub `workspaceProperties` dictionary. is the officially required syntax for `linking Application Insights to AI Foundry Hub`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2051,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Adventure Works Core Hub` implementing `Bicep `Microsoft.MachineLearningServices/workspaces``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `configuring `azure.yaml` metadata block` (Implementation Task #51).",
    "question": "[EASY Coding Task #51] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.MachineLearningServices/workspaces`` when implementing `configuring `azure.yaml` metadata block`?",
    "options": [
      "A) Writing `name: adventure-works-ai` and `metadata: template: ai-project-azd@0.1.0` inside `azure.yaml`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `name: adventure-works-ai` and `metadata: template: ai-project-azd@0.1.0` inside `azure.yaml`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.MachineLearningServices/workspaces``, Writing `name: adventure-works-ai` and `metadata: template: ai-project-azd@0.1.0` inside `azure.yaml`. is the officially required syntax for `configuring `azure.yaml` metadata block`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2052,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Contoso Health AI` implementing `Bicep `Microsoft.CognitiveServices/accounts``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `configuring `azure.yaml` metadata block` (Implementation Task #52).",
    "question": "[EASY Coding Task #52] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Bicep `Microsoft.CognitiveServices/accounts`` for `configuring `azure.yaml` metadata block`? (Select three)",
    "options": [
      "A) Writing `name: adventure-works-ai` and `metadata: template: ai-project-azd@0.1.0` inside `azure.yaml`.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Bicep `Microsoft.CognitiveServices/accounts`` for `configuring `azure.yaml` metadata block`, enterprise coding standards mandate: (1) Writing `name: adventure-works-ai` and `metadata: template: ai-project-azd@0.1.0` inside `azure.yaml`., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2053,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Fabrikam Logistics Agent` implementing `Bicep `Microsoft.KeyVault/vaults``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `configuring `azure.yaml` metadata block` (Implementation Task #53).",
    "question": "[EASY Coding Task #53] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.KeyVault/vaults`` when implementing `configuring `azure.yaml` metadata block`?",
    "options": [
      "A) Writing `name: adventure-works-ai` and `metadata: template: ai-project-azd@0.1.0` inside `azure.yaml`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `name: adventure-works-ai` and `metadata: template: ai-project-azd@0.1.0` inside `azure.yaml`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.KeyVault/vaults``, Writing `name: adventure-works-ai` and `metadata: template: ai-project-azd@0.1.0` inside `azure.yaml`. is the officially required syntax for `configuring `azure.yaml` metadata block`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2054,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Trey Research Lab` implementing `Bicep `Microsoft.Storage/storageAccounts``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `configuring `azure.yaml` metadata block` (Implementation Task #54).",
    "question": "[EASY Coding Task #54] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.Storage/storageAccounts`` when implementing `configuring `azure.yaml` metadata block`?",
    "options": [
      "A) Writing `name: adventure-works-ai` and `metadata: template: ai-project-azd@0.1.0` inside `azure.yaml`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `name: adventure-works-ai` and `metadata: template: ai-project-azd@0.1.0` inside `azure.yaml`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.Storage/storageAccounts``, Writing `name: adventure-works-ai` and `metadata: template: ai-project-azd@0.1.0` inside `azure.yaml`. is the officially required syntax for `configuring `azure.yaml` metadata block`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2055,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Northwind Traders Bot` implementing `Bicep `Microsoft.OperationalInsights/workspaces``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `configuring `azure.yaml` metadata block` (Implementation Task #55).",
    "question": "[EASY Coding Task #55] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.OperationalInsights/workspaces`` when implementing `configuring `azure.yaml` metadata block`?",
    "options": [
      "A) Writing `name: adventure-works-ai` and `metadata: template: ai-project-azd@0.1.0` inside `azure.yaml`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `name: adventure-works-ai` and `metadata: template: ai-project-azd@0.1.0` inside `azure.yaml`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.OperationalInsights/workspaces``, Writing `name: adventure-works-ai` and `metadata: template: ai-project-azd@0.1.0` inside `azure.yaml`. is the officially required syntax for `configuring `azure.yaml` metadata block`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2056,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Woodgrove Bank Virtual Assistant` implementing `Bicep `Microsoft.Insights/components``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `configuring `azure.yaml` metadata block` (Implementation Task #56).",
    "question": "[EASY Coding Task #56] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Bicep `Microsoft.Insights/components`` for `configuring `azure.yaml` metadata block`? (Select three)",
    "options": [
      "A) Writing `name: adventure-works-ai` and `metadata: template: ai-project-azd@0.1.0` inside `azure.yaml`.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Bicep `Microsoft.Insights/components`` for `configuring `azure.yaml` metadata block`, enterprise coding standards mandate: (1) Writing `name: adventure-works-ai` and `metadata: template: ai-project-azd@0.1.0` inside `azure.yaml`., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2057,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Litware Legal Evaluator` implementing `Bicep `Microsoft.Network/privateEndpoints``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `configuring `azure.yaml` metadata block` (Implementation Task #57).",
    "question": "[EASY Coding Task #57] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.Network/privateEndpoints`` when implementing `configuring `azure.yaml` metadata block`?",
    "options": [
      "A) Writing `name: adventure-works-ai` and `metadata: template: ai-project-azd@0.1.0` inside `azure.yaml`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `name: adventure-works-ai` and `metadata: template: ai-project-azd@0.1.0` inside `azure.yaml`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.Network/privateEndpoints``, Writing `name: adventure-works-ai` and `metadata: template: ai-project-azd@0.1.0` inside `azure.yaml`. is the officially required syntax for `configuring `azure.yaml` metadata block`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2058,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `A.Datum Retail Copilot` implementing `AZD `azure.yaml` Root Orchestration File`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `configuring `azure.yaml` metadata block` (Implementation Task #58).",
    "question": "[EASY Coding Task #58] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `AZD `azure.yaml` Root Orchestration File` when implementing `configuring `azure.yaml` metadata block`?",
    "options": [
      "A) Writing `name: adventure-works-ai` and `metadata: template: ai-project-azd@0.1.0` inside `azure.yaml`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `name: adventure-works-ai` and `metadata: template: ai-project-azd@0.1.0` inside `azure.yaml`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `AZD `azure.yaml` Root Orchestration File`, Writing `name: adventure-works-ai` and `metadata: template: ai-project-azd@0.1.0` inside `azure.yaml`. is the officially required syntax for `configuring `azure.yaml` metadata block`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2059,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Alpine Ski Field Technician` implementing `Bicep `infra/main.parameters.json` & `abbreviations.json``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `configuring `azure.yaml` metadata block` (Implementation Task #59).",
    "question": "[EASY Coding Task #59] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `infra/main.parameters.json` & `abbreviations.json`` when implementing `configuring `azure.yaml` metadata block`?",
    "options": [
      "A) Writing `name: adventure-works-ai` and `metadata: template: ai-project-azd@0.1.0` inside `azure.yaml`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `name: adventure-works-ai` and `metadata: template: ai-project-azd@0.1.0` inside `azure.yaml`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `infra/main.parameters.json` & `abbreviations.json``, Writing `name: adventure-works-ai` and `metadata: template: ai-project-azd@0.1.0` inside `azure.yaml`. is the officially required syntax for `configuring `azure.yaml` metadata block`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2060,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Tailwind Traders Multi-Agent` implementing `AZD CLI Command Flags (`azd up`, `azd down`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `configuring `azure.yaml` metadata block` (Implementation Task #60).",
    "question": "[EASY Coding Task #60] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `AZD CLI Command Flags (`azd up`, `azd down`)` for `configuring `azure.yaml` metadata block`? (Select three)",
    "options": [
      "A) Writing `name: adventure-works-ai` and `metadata: template: ai-project-azd@0.1.0` inside `azure.yaml`.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `AZD CLI Command Flags (`azd up`, `azd down`)` for `configuring `azure.yaml` metadata block`, enterprise coding standards mandate: (1) Writing `name: adventure-works-ai` and `metadata: template: ai-project-azd@0.1.0` inside `azure.yaml`., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2061,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Adventure Works Core Hub` implementing `Bicep `Microsoft.MachineLearningServices/workspaces``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `referencing Bicep parameter defaults` (Implementation Task #61).",
    "question": "[EASY Coding Task #61] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.MachineLearningServices/workspaces`` when implementing `referencing Bicep parameter defaults`?",
    "options": [
      "A) Declaring `param location string = resourceGroup().location` at the top of `infra/main.bicep`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Declaring `param location string = resourceGroup().location` at the top of `infra/main.bicep`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.MachineLearningServices/workspaces``, Declaring `param location string = resourceGroup().location` at the top of `infra/main.bicep`. is the officially required syntax for `referencing Bicep parameter defaults`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2062,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Contoso Health AI` implementing `Bicep `Microsoft.CognitiveServices/accounts``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `referencing Bicep parameter defaults` (Implementation Task #62).",
    "question": "[EASY Coding Task #62] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.CognitiveServices/accounts`` when implementing `referencing Bicep parameter defaults`?",
    "options": [
      "A) Declaring `param location string = resourceGroup().location` at the top of `infra/main.bicep`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Declaring `param location string = resourceGroup().location` at the top of `infra/main.bicep`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.CognitiveServices/accounts``, Declaring `param location string = resourceGroup().location` at the top of `infra/main.bicep`. is the officially required syntax for `referencing Bicep parameter defaults`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2063,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Fabrikam Logistics Agent` implementing `Bicep `Microsoft.KeyVault/vaults``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `referencing Bicep parameter defaults` (Implementation Task #63).",
    "question": "[EASY Coding Task #63] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.KeyVault/vaults`` when implementing `referencing Bicep parameter defaults`?",
    "options": [
      "A) Declaring `param location string = resourceGroup().location` at the top of `infra/main.bicep`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Declaring `param location string = resourceGroup().location` at the top of `infra/main.bicep`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.KeyVault/vaults``, Declaring `param location string = resourceGroup().location` at the top of `infra/main.bicep`. is the officially required syntax for `referencing Bicep parameter defaults`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2064,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Trey Research Lab` implementing `Bicep `Microsoft.Storage/storageAccounts``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `referencing Bicep parameter defaults` (Implementation Task #64).",
    "question": "[EASY Coding Task #64] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Bicep `Microsoft.Storage/storageAccounts`` for `referencing Bicep parameter defaults`? (Select three)",
    "options": [
      "A) Declaring `param location string = resourceGroup().location` at the top of `infra/main.bicep`.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Bicep `Microsoft.Storage/storageAccounts`` for `referencing Bicep parameter defaults`, enterprise coding standards mandate: (1) Declaring `param location string = resourceGroup().location` at the top of `infra/main.bicep`., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2065,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Northwind Traders Bot` implementing `Bicep `Microsoft.OperationalInsights/workspaces``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `referencing Bicep parameter defaults` (Implementation Task #65).",
    "question": "[EASY Coding Task #65] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.OperationalInsights/workspaces`` when implementing `referencing Bicep parameter defaults`?",
    "options": [
      "A) Declaring `param location string = resourceGroup().location` at the top of `infra/main.bicep`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Declaring `param location string = resourceGroup().location` at the top of `infra/main.bicep`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.OperationalInsights/workspaces``, Declaring `param location string = resourceGroup().location` at the top of `infra/main.bicep`. is the officially required syntax for `referencing Bicep parameter defaults`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2066,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Woodgrove Bank Virtual Assistant` implementing `Bicep `Microsoft.Insights/components``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `referencing Bicep parameter defaults` (Implementation Task #66).",
    "question": "[EASY Coding Task #66] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.Insights/components`` when implementing `referencing Bicep parameter defaults`?",
    "options": [
      "A) Declaring `param location string = resourceGroup().location` at the top of `infra/main.bicep`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Declaring `param location string = resourceGroup().location` at the top of `infra/main.bicep`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.Insights/components``, Declaring `param location string = resourceGroup().location` at the top of `infra/main.bicep`. is the officially required syntax for `referencing Bicep parameter defaults`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2067,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Litware Legal Evaluator` implementing `Bicep `Microsoft.Network/privateEndpoints``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `referencing Bicep parameter defaults` (Implementation Task #67).",
    "question": "[EASY Coding Task #67] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.Network/privateEndpoints`` when implementing `referencing Bicep parameter defaults`?",
    "options": [
      "A) Declaring `param location string = resourceGroup().location` at the top of `infra/main.bicep`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Declaring `param location string = resourceGroup().location` at the top of `infra/main.bicep`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.Network/privateEndpoints``, Declaring `param location string = resourceGroup().location` at the top of `infra/main.bicep`. is the officially required syntax for `referencing Bicep parameter defaults`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2068,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `A.Datum Retail Copilot` implementing `AZD `azure.yaml` Root Orchestration File`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `referencing Bicep parameter defaults` (Implementation Task #68).",
    "question": "[EASY Coding Task #68] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `AZD `azure.yaml` Root Orchestration File` for `referencing Bicep parameter defaults`? (Select three)",
    "options": [
      "A) Declaring `param location string = resourceGroup().location` at the top of `infra/main.bicep`.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `AZD `azure.yaml` Root Orchestration File` for `referencing Bicep parameter defaults`, enterprise coding standards mandate: (1) Declaring `param location string = resourceGroup().location` at the top of `infra/main.bicep`., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2069,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Alpine Ski Field Technician` implementing `Bicep `infra/main.parameters.json` & `abbreviations.json``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `referencing Bicep parameter defaults` (Implementation Task #69).",
    "question": "[EASY Coding Task #69] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `infra/main.parameters.json` & `abbreviations.json`` when implementing `referencing Bicep parameter defaults`?",
    "options": [
      "A) Declaring `param location string = resourceGroup().location` at the top of `infra/main.bicep`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Declaring `param location string = resourceGroup().location` at the top of `infra/main.bicep`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `infra/main.parameters.json` & `abbreviations.json``, Declaring `param location string = resourceGroup().location` at the top of `infra/main.bicep`. is the officially required syntax for `referencing Bicep parameter defaults`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2070,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Tailwind Traders Multi-Agent` implementing `AZD CLI Command Flags (`azd up`, `azd down`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `referencing Bicep parameter defaults` (Implementation Task #70).",
    "question": "[EASY Coding Task #70] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `AZD CLI Command Flags (`azd up`, `azd down`)` when implementing `referencing Bicep parameter defaults`?",
    "options": [
      "A) Declaring `param location string = resourceGroup().location` at the top of `infra/main.bicep`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Declaring `param location string = resourceGroup().location` at the top of `infra/main.bicep`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `AZD CLI Command Flags (`azd up`, `azd down`)`, Declaring `param location string = resourceGroup().location` at the top of `infra/main.bicep`. is the officially required syntax for `referencing Bicep parameter defaults`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2071,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Adventure Works Core Hub` implementing `Bicep `Microsoft.MachineLearningServices/workspaces``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `executing initial `azd up` command` (Implementation Task #71).",
    "question": "[EASY Coding Task #71] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.MachineLearningServices/workspaces`` when implementing `executing initial `azd up` command`?",
    "options": [
      "A) Running `azd up --environment prod-env` from the project root to provision infrastructure and deploy code.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Running `azd up --environment prod-env` from the project root to provision infrastructure and deploy code.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.MachineLearningServices/workspaces``, Running `azd up --environment prod-env` from the project root to provision infrastructure and deploy code. is the officially required syntax for `executing initial `azd up` command`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2072,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Contoso Health AI` implementing `Bicep `Microsoft.CognitiveServices/accounts``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `executing initial `azd up` command` (Implementation Task #72).",
    "question": "[EASY Coding Task #72] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Bicep `Microsoft.CognitiveServices/accounts`` for `executing initial `azd up` command`? (Select three)",
    "options": [
      "A) Running `azd up --environment prod-env` from the project root to provision infrastructure and deploy code.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Bicep `Microsoft.CognitiveServices/accounts`` for `executing initial `azd up` command`, enterprise coding standards mandate: (1) Running `azd up --environment prod-env` from the project root to provision infrastructure and deploy code., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2073,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Fabrikam Logistics Agent` implementing `Bicep `Microsoft.KeyVault/vaults``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `executing initial `azd up` command` (Implementation Task #73).",
    "question": "[EASY Coding Task #73] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.KeyVault/vaults`` when implementing `executing initial `azd up` command`?",
    "options": [
      "A) Running `azd up --environment prod-env` from the project root to provision infrastructure and deploy code.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Running `azd up --environment prod-env` from the project root to provision infrastructure and deploy code.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.KeyVault/vaults``, Running `azd up --environment prod-env` from the project root to provision infrastructure and deploy code. is the officially required syntax for `executing initial `azd up` command`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2074,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Trey Research Lab` implementing `Bicep `Microsoft.Storage/storageAccounts``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `executing initial `azd up` command` (Implementation Task #74).",
    "question": "[EASY Coding Task #74] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.Storage/storageAccounts`` when implementing `executing initial `azd up` command`?",
    "options": [
      "A) Running `azd up --environment prod-env` from the project root to provision infrastructure and deploy code.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Running `azd up --environment prod-env` from the project root to provision infrastructure and deploy code.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.Storage/storageAccounts``, Running `azd up --environment prod-env` from the project root to provision infrastructure and deploy code. is the officially required syntax for `executing initial `azd up` command`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2075,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Northwind Traders Bot` implementing `Bicep `Microsoft.OperationalInsights/workspaces``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `executing initial `azd up` command` (Implementation Task #75).",
    "question": "[EASY Coding Task #75] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.OperationalInsights/workspaces`` when implementing `executing initial `azd up` command`?",
    "options": [
      "A) Running `azd up --environment prod-env` from the project root to provision infrastructure and deploy code.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Running `azd up --environment prod-env` from the project root to provision infrastructure and deploy code.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.OperationalInsights/workspaces``, Running `azd up --environment prod-env` from the project root to provision infrastructure and deploy code. is the officially required syntax for `executing initial `azd up` command`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2076,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Woodgrove Bank Virtual Assistant` implementing `Bicep `Microsoft.Insights/components``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `executing initial `azd up` command` (Implementation Task #76).",
    "question": "[EASY Coding Task #76] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Bicep `Microsoft.Insights/components`` for `executing initial `azd up` command`? (Select three)",
    "options": [
      "A) Running `azd up --environment prod-env` from the project root to provision infrastructure and deploy code.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Bicep `Microsoft.Insights/components`` for `executing initial `azd up` command`, enterprise coding standards mandate: (1) Running `azd up --environment prod-env` from the project root to provision infrastructure and deploy code., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2077,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Litware Legal Evaluator` implementing `Bicep `Microsoft.Network/privateEndpoints``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `executing initial `azd up` command` (Implementation Task #77).",
    "question": "[EASY Coding Task #77] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.Network/privateEndpoints`` when implementing `executing initial `azd up` command`?",
    "options": [
      "A) Running `azd up --environment prod-env` from the project root to provision infrastructure and deploy code.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Running `azd up --environment prod-env` from the project root to provision infrastructure and deploy code.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.Network/privateEndpoints``, Running `azd up --environment prod-env` from the project root to provision infrastructure and deploy code. is the officially required syntax for `executing initial `azd up` command`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2078,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `A.Datum Retail Copilot` implementing `AZD `azure.yaml` Root Orchestration File`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `executing initial `azd up` command` (Implementation Task #78).",
    "question": "[EASY Coding Task #78] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `AZD `azure.yaml` Root Orchestration File` when implementing `executing initial `azd up` command`?",
    "options": [
      "A) Running `azd up --environment prod-env` from the project root to provision infrastructure and deploy code.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Running `azd up --environment prod-env` from the project root to provision infrastructure and deploy code.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `AZD `azure.yaml` Root Orchestration File`, Running `azd up --environment prod-env` from the project root to provision infrastructure and deploy code. is the officially required syntax for `executing initial `azd up` command`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2079,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Alpine Ski Field Technician` implementing `Bicep `infra/main.parameters.json` & `abbreviations.json``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `executing initial `azd up` command` (Implementation Task #79).",
    "question": "[EASY Coding Task #79] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `infra/main.parameters.json` & `abbreviations.json`` when implementing `executing initial `azd up` command`?",
    "options": [
      "A) Running `azd up --environment prod-env` from the project root to provision infrastructure and deploy code.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Running `azd up --environment prod-env` from the project root to provision infrastructure and deploy code.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `infra/main.parameters.json` & `abbreviations.json``, Running `azd up --environment prod-env` from the project root to provision infrastructure and deploy code. is the officially required syntax for `executing initial `azd up` command`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2080,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Tailwind Traders Multi-Agent` implementing `AZD CLI Command Flags (`azd up`, `azd down`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `executing initial `azd up` command` (Implementation Task #80).",
    "question": "[EASY Coding Task #80] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `AZD CLI Command Flags (`azd up`, `azd down`)` for `executing initial `azd up` command`? (Select three)",
    "options": [
      "A) Running `azd up --environment prod-env` from the project root to provision infrastructure and deploy code.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `AZD CLI Command Flags (`azd up`, `azd down`)` for `executing initial `azd up` command`, enterprise coding standards mandate: (1) Running `azd up --environment prod-env` from the project root to provision infrastructure and deploy code., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2081,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Adventure Works Core Hub` implementing `Bicep `Microsoft.MachineLearningServices/workspaces``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `setting diagnostic logs destination in Bicep` (Implementation Task #81).",
    "question": "[EASY Coding Task #81] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.MachineLearningServices/workspaces`` when implementing `setting diagnostic logs destination in Bicep`?",
    "options": [
      "A) Creating `Microsoft.Insights/diagnosticSettings` referencing `workspaceId: logAnalytics.id`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Creating `Microsoft.Insights/diagnosticSettings` referencing `workspaceId: logAnalytics.id`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.MachineLearningServices/workspaces``, Creating `Microsoft.Insights/diagnosticSettings` referencing `workspaceId: logAnalytics.id`. is the officially required syntax for `setting diagnostic logs destination in Bicep`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2082,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Contoso Health AI` implementing `Bicep `Microsoft.CognitiveServices/accounts``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `setting diagnostic logs destination in Bicep` (Implementation Task #82).",
    "question": "[EASY Coding Task #82] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.CognitiveServices/accounts`` when implementing `setting diagnostic logs destination in Bicep`?",
    "options": [
      "A) Creating `Microsoft.Insights/diagnosticSettings` referencing `workspaceId: logAnalytics.id`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Creating `Microsoft.Insights/diagnosticSettings` referencing `workspaceId: logAnalytics.id`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.CognitiveServices/accounts``, Creating `Microsoft.Insights/diagnosticSettings` referencing `workspaceId: logAnalytics.id`. is the officially required syntax for `setting diagnostic logs destination in Bicep`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2083,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Fabrikam Logistics Agent` implementing `Bicep `Microsoft.KeyVault/vaults``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `setting diagnostic logs destination in Bicep` (Implementation Task #83).",
    "question": "[EASY Coding Task #83] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.KeyVault/vaults`` when implementing `setting diagnostic logs destination in Bicep`?",
    "options": [
      "A) Creating `Microsoft.Insights/diagnosticSettings` referencing `workspaceId: logAnalytics.id`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Creating `Microsoft.Insights/diagnosticSettings` referencing `workspaceId: logAnalytics.id`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.KeyVault/vaults``, Creating `Microsoft.Insights/diagnosticSettings` referencing `workspaceId: logAnalytics.id`. is the officially required syntax for `setting diagnostic logs destination in Bicep`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2084,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Trey Research Lab` implementing `Bicep `Microsoft.Storage/storageAccounts``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `setting diagnostic logs destination in Bicep` (Implementation Task #84).",
    "question": "[EASY Coding Task #84] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Bicep `Microsoft.Storage/storageAccounts`` for `setting diagnostic logs destination in Bicep`? (Select three)",
    "options": [
      "A) Creating `Microsoft.Insights/diagnosticSettings` referencing `workspaceId: logAnalytics.id`.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Bicep `Microsoft.Storage/storageAccounts`` for `setting diagnostic logs destination in Bicep`, enterprise coding standards mandate: (1) Creating `Microsoft.Insights/diagnosticSettings` referencing `workspaceId: logAnalytics.id`., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2085,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Northwind Traders Bot` implementing `Bicep `Microsoft.OperationalInsights/workspaces``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `setting diagnostic logs destination in Bicep` (Implementation Task #85).",
    "question": "[EASY Coding Task #85] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.OperationalInsights/workspaces`` when implementing `setting diagnostic logs destination in Bicep`?",
    "options": [
      "A) Creating `Microsoft.Insights/diagnosticSettings` referencing `workspaceId: logAnalytics.id`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Creating `Microsoft.Insights/diagnosticSettings` referencing `workspaceId: logAnalytics.id`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.OperationalInsights/workspaces``, Creating `Microsoft.Insights/diagnosticSettings` referencing `workspaceId: logAnalytics.id`. is the officially required syntax for `setting diagnostic logs destination in Bicep`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2086,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Woodgrove Bank Virtual Assistant` implementing `Bicep `Microsoft.Insights/components``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `setting diagnostic logs destination in Bicep` (Implementation Task #86).",
    "question": "[EASY Coding Task #86] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.Insights/components`` when implementing `setting diagnostic logs destination in Bicep`?",
    "options": [
      "A) Creating `Microsoft.Insights/diagnosticSettings` referencing `workspaceId: logAnalytics.id`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Creating `Microsoft.Insights/diagnosticSettings` referencing `workspaceId: logAnalytics.id`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.Insights/components``, Creating `Microsoft.Insights/diagnosticSettings` referencing `workspaceId: logAnalytics.id`. is the officially required syntax for `setting diagnostic logs destination in Bicep`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2087,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Litware Legal Evaluator` implementing `Bicep `Microsoft.Network/privateEndpoints``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `setting diagnostic logs destination in Bicep` (Implementation Task #87).",
    "question": "[EASY Coding Task #87] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.Network/privateEndpoints`` when implementing `setting diagnostic logs destination in Bicep`?",
    "options": [
      "A) Creating `Microsoft.Insights/diagnosticSettings` referencing `workspaceId: logAnalytics.id`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Creating `Microsoft.Insights/diagnosticSettings` referencing `workspaceId: logAnalytics.id`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.Network/privateEndpoints``, Creating `Microsoft.Insights/diagnosticSettings` referencing `workspaceId: logAnalytics.id`. is the officially required syntax for `setting diagnostic logs destination in Bicep`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2088,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `A.Datum Retail Copilot` implementing `AZD `azure.yaml` Root Orchestration File`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `setting diagnostic logs destination in Bicep` (Implementation Task #88).",
    "question": "[EASY Coding Task #88] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `AZD `azure.yaml` Root Orchestration File` for `setting diagnostic logs destination in Bicep`? (Select three)",
    "options": [
      "A) Creating `Microsoft.Insights/diagnosticSettings` referencing `workspaceId: logAnalytics.id`.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `AZD `azure.yaml` Root Orchestration File` for `setting diagnostic logs destination in Bicep`, enterprise coding standards mandate: (1) Creating `Microsoft.Insights/diagnosticSettings` referencing `workspaceId: logAnalytics.id`., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2089,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Alpine Ski Field Technician` implementing `Bicep `infra/main.parameters.json` & `abbreviations.json``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `setting diagnostic logs destination in Bicep` (Implementation Task #89).",
    "question": "[EASY Coding Task #89] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `infra/main.parameters.json` & `abbreviations.json`` when implementing `setting diagnostic logs destination in Bicep`?",
    "options": [
      "A) Creating `Microsoft.Insights/diagnosticSettings` referencing `workspaceId: logAnalytics.id`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Creating `Microsoft.Insights/diagnosticSettings` referencing `workspaceId: logAnalytics.id`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `infra/main.parameters.json` & `abbreviations.json``, Creating `Microsoft.Insights/diagnosticSettings` referencing `workspaceId: logAnalytics.id`. is the officially required syntax for `setting diagnostic logs destination in Bicep`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2090,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Tailwind Traders Multi-Agent` implementing `AZD CLI Command Flags (`azd up`, `azd down`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `setting diagnostic logs destination in Bicep` (Implementation Task #90).",
    "question": "[EASY Coding Task #90] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `AZD CLI Command Flags (`azd up`, `azd down`)` when implementing `setting diagnostic logs destination in Bicep`?",
    "options": [
      "A) Creating `Microsoft.Insights/diagnosticSettings` referencing `workspaceId: logAnalytics.id`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Creating `Microsoft.Insights/diagnosticSettings` referencing `workspaceId: logAnalytics.id`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `AZD CLI Command Flags (`azd up`, `azd down`)`, Creating `Microsoft.Insights/diagnosticSettings` referencing `workspaceId: logAnalytics.id`. is the officially required syntax for `setting diagnostic logs destination in Bicep`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2091,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Adventure Works Core Hub` implementing `Bicep `Microsoft.MachineLearningServices/workspaces``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `generating deterministic resource names` (Implementation Task #91).",
    "question": "[EASY Coding Task #91] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.MachineLearningServices/workspaces`` when implementing `generating deterministic resource names`?",
    "options": [
      "A) Using `${abbreviations.keyVaultVaults}${uniqueString(resourceGroup().id)}` inside Bicep parameter assignment.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Using `${abbreviations.keyVaultVaults}${uniqueString(resourceGroup().id)}` inside Bicep parameter assignment.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.MachineLearningServices/workspaces``, Using `${abbreviations.keyVaultVaults}${uniqueString(resourceGroup().id)}` inside Bicep parameter assignment. is the officially required syntax for `generating deterministic resource names`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2092,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Contoso Health AI` implementing `Bicep `Microsoft.CognitiveServices/accounts``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `generating deterministic resource names` (Implementation Task #92).",
    "question": "[EASY Coding Task #92] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Bicep `Microsoft.CognitiveServices/accounts`` for `generating deterministic resource names`? (Select three)",
    "options": [
      "A) Using `${abbreviations.keyVaultVaults}${uniqueString(resourceGroup().id)}` inside Bicep parameter assignment.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Bicep `Microsoft.CognitiveServices/accounts`` for `generating deterministic resource names`, enterprise coding standards mandate: (1) Using `${abbreviations.keyVaultVaults}${uniqueString(resourceGroup().id)}` inside Bicep parameter assignment., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2093,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Fabrikam Logistics Agent` implementing `Bicep `Microsoft.KeyVault/vaults``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `generating deterministic resource names` (Implementation Task #93).",
    "question": "[EASY Coding Task #93] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.KeyVault/vaults`` when implementing `generating deterministic resource names`?",
    "options": [
      "A) Using `${abbreviations.keyVaultVaults}${uniqueString(resourceGroup().id)}` inside Bicep parameter assignment.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Using `${abbreviations.keyVaultVaults}${uniqueString(resourceGroup().id)}` inside Bicep parameter assignment.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.KeyVault/vaults``, Using `${abbreviations.keyVaultVaults}${uniqueString(resourceGroup().id)}` inside Bicep parameter assignment. is the officially required syntax for `generating deterministic resource names`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2094,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Trey Research Lab` implementing `Bicep `Microsoft.Storage/storageAccounts``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `generating deterministic resource names` (Implementation Task #94).",
    "question": "[EASY Coding Task #94] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.Storage/storageAccounts`` when implementing `generating deterministic resource names`?",
    "options": [
      "A) Using `${abbreviations.keyVaultVaults}${uniqueString(resourceGroup().id)}` inside Bicep parameter assignment.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Using `${abbreviations.keyVaultVaults}${uniqueString(resourceGroup().id)}` inside Bicep parameter assignment.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.Storage/storageAccounts``, Using `${abbreviations.keyVaultVaults}${uniqueString(resourceGroup().id)}` inside Bicep parameter assignment. is the officially required syntax for `generating deterministic resource names`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2095,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Northwind Traders Bot` implementing `Bicep `Microsoft.OperationalInsights/workspaces``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `generating deterministic resource names` (Implementation Task #95).",
    "question": "[EASY Coding Task #95] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.OperationalInsights/workspaces`` when implementing `generating deterministic resource names`?",
    "options": [
      "A) Using `${abbreviations.keyVaultVaults}${uniqueString(resourceGroup().id)}` inside Bicep parameter assignment.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Using `${abbreviations.keyVaultVaults}${uniqueString(resourceGroup().id)}` inside Bicep parameter assignment.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.OperationalInsights/workspaces``, Using `${abbreviations.keyVaultVaults}${uniqueString(resourceGroup().id)}` inside Bicep parameter assignment. is the officially required syntax for `generating deterministic resource names`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2096,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Woodgrove Bank Virtual Assistant` implementing `Bicep `Microsoft.Insights/components``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `generating deterministic resource names` (Implementation Task #96).",
    "question": "[EASY Coding Task #96] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Bicep `Microsoft.Insights/components`` for `generating deterministic resource names`? (Select three)",
    "options": [
      "A) Using `${abbreviations.keyVaultVaults}${uniqueString(resourceGroup().id)}` inside Bicep parameter assignment.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Bicep `Microsoft.Insights/components`` for `generating deterministic resource names`, enterprise coding standards mandate: (1) Using `${abbreviations.keyVaultVaults}${uniqueString(resourceGroup().id)}` inside Bicep parameter assignment., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2097,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Litware Legal Evaluator` implementing `Bicep `Microsoft.Network/privateEndpoints``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `generating deterministic resource names` (Implementation Task #97).",
    "question": "[EASY Coding Task #97] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.Network/privateEndpoints`` when implementing `generating deterministic resource names`?",
    "options": [
      "A) Using `${abbreviations.keyVaultVaults}${uniqueString(resourceGroup().id)}` inside Bicep parameter assignment.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Using `${abbreviations.keyVaultVaults}${uniqueString(resourceGroup().id)}` inside Bicep parameter assignment.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.Network/privateEndpoints``, Using `${abbreviations.keyVaultVaults}${uniqueString(resourceGroup().id)}` inside Bicep parameter assignment. is the officially required syntax for `generating deterministic resource names`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2098,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `A.Datum Retail Copilot` implementing `AZD `azure.yaml` Root Orchestration File`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `generating deterministic resource names` (Implementation Task #98).",
    "question": "[EASY Coding Task #98] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `AZD `azure.yaml` Root Orchestration File` when implementing `generating deterministic resource names`?",
    "options": [
      "A) Using `${abbreviations.keyVaultVaults}${uniqueString(resourceGroup().id)}` inside Bicep parameter assignment.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Using `${abbreviations.keyVaultVaults}${uniqueString(resourceGroup().id)}` inside Bicep parameter assignment.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `AZD `azure.yaml` Root Orchestration File`, Using `${abbreviations.keyVaultVaults}${uniqueString(resourceGroup().id)}` inside Bicep parameter assignment. is the officially required syntax for `generating deterministic resource names`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2099,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Alpine Ski Field Technician` implementing `Bicep `infra/main.parameters.json` & `abbreviations.json``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `generating deterministic resource names` (Implementation Task #99).",
    "question": "[EASY Coding Task #99] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `infra/main.parameters.json` & `abbreviations.json`` when implementing `generating deterministic resource names`?",
    "options": [
      "A) Using `${abbreviations.keyVaultVaults}${uniqueString(resourceGroup().id)}` inside Bicep parameter assignment.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Using `${abbreviations.keyVaultVaults}${uniqueString(resourceGroup().id)}` inside Bicep parameter assignment.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `infra/main.parameters.json` & `abbreviations.json``, Using `${abbreviations.keyVaultVaults}${uniqueString(resourceGroup().id)}` inside Bicep parameter assignment. is the officially required syntax for `generating deterministic resource names`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2100,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Tailwind Traders Multi-Agent` implementing `AZD CLI Command Flags (`azd up`, `azd down`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `generating deterministic resource names` (Implementation Task #100).",
    "question": "[EASY Coding Task #100] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `AZD CLI Command Flags (`azd up`, `azd down`)` for `generating deterministic resource names`? (Select three)",
    "options": [
      "A) Using `${abbreviations.keyVaultVaults}${uniqueString(resourceGroup().id)}` inside Bicep parameter assignment.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `AZD CLI Command Flags (`azd up`, `azd down`)` for `generating deterministic resource names`, enterprise coding standards mandate: (1) Using `${abbreviations.keyVaultVaults}${uniqueString(resourceGroup().id)}` inside Bicep parameter assignment., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  }
];
