window.HANDSON_DATA_MOD_T1 = [
  {
    "id": 2601,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Adventure Works Core Hub` implementing `Bicep `Microsoft.MachineLearningServices/workspaces``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `purging soft-deleted AI Foundry resources via AZD` (Implementation Task #1).",
    "question": "[MOD Coding Task #1] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.MachineLearningServices/workspaces`` when implementing `purging soft-deleted AI Foundry resources via AZD`?",
    "options": [
      "A) Running `azd down --force --purge` to permanently delete soft-deleted Cognitive Services during CI/CD teardown.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Running `azd down --force --purge` to permanently delete soft-deleted Cognitive Services during CI/CD teardown.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.MachineLearningServices/workspaces``, Running `azd down --force --purge` to permanently delete soft-deleted Cognitive Services during CI/CD teardown. is the officially required syntax for `purging soft-deleted AI Foundry resources via AZD`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2602,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Contoso Health AI` implementing `Bicep `Microsoft.CognitiveServices/accounts``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `purging soft-deleted AI Foundry resources via AZD` (Implementation Task #2).",
    "question": "[MOD Coding Task #2] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.CognitiveServices/accounts`` when implementing `purging soft-deleted AI Foundry resources via AZD`?",
    "options": [
      "A) Running `azd down --force --purge` to permanently delete soft-deleted Cognitive Services during CI/CD teardown.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Running `azd down --force --purge` to permanently delete soft-deleted Cognitive Services during CI/CD teardown.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.CognitiveServices/accounts``, Running `azd down --force --purge` to permanently delete soft-deleted Cognitive Services during CI/CD teardown. is the officially required syntax for `purging soft-deleted AI Foundry resources via AZD`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2603,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Fabrikam Logistics Agent` implementing `Bicep `Microsoft.KeyVault/vaults``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `purging soft-deleted AI Foundry resources via AZD` (Implementation Task #3).",
    "question": "[MOD Coding Task #3] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.KeyVault/vaults`` when implementing `purging soft-deleted AI Foundry resources via AZD`?",
    "options": [
      "A) Running `azd down --force --purge` to permanently delete soft-deleted Cognitive Services during CI/CD teardown.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Running `azd down --force --purge` to permanently delete soft-deleted Cognitive Services during CI/CD teardown.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.KeyVault/vaults``, Running `azd down --force --purge` to permanently delete soft-deleted Cognitive Services during CI/CD teardown. is the officially required syntax for `purging soft-deleted AI Foundry resources via AZD`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2604,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Trey Research Lab` implementing `Bicep `Microsoft.Storage/storageAccounts``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `purging soft-deleted AI Foundry resources via AZD` (Implementation Task #4).",
    "question": "[MOD Coding Task #4] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Bicep `Microsoft.Storage/storageAccounts`` for `purging soft-deleted AI Foundry resources via AZD`? (Select three)",
    "options": [
      "A) Running `azd down --force --purge` to permanently delete soft-deleted Cognitive Services during CI/CD teardown.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Bicep `Microsoft.Storage/storageAccounts`` for `purging soft-deleted AI Foundry resources via AZD`, enterprise coding standards mandate: (1) Running `azd down --force --purge` to permanently delete soft-deleted Cognitive Services during CI/CD teardown., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2605,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Northwind Traders Bot` implementing `Bicep `Microsoft.OperationalInsights/workspaces``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `purging soft-deleted AI Foundry resources via AZD` (Implementation Task #5).",
    "question": "[MOD Coding Task #5] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.OperationalInsights/workspaces`` when implementing `purging soft-deleted AI Foundry resources via AZD`?",
    "options": [
      "A) Running `azd down --force --purge` to permanently delete soft-deleted Cognitive Services during CI/CD teardown.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Running `azd down --force --purge` to permanently delete soft-deleted Cognitive Services during CI/CD teardown.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.OperationalInsights/workspaces``, Running `azd down --force --purge` to permanently delete soft-deleted Cognitive Services during CI/CD teardown. is the officially required syntax for `purging soft-deleted AI Foundry resources via AZD`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2606,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Woodgrove Bank Virtual Assistant` implementing `Bicep `Microsoft.Insights/components``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `purging soft-deleted AI Foundry resources via AZD` (Implementation Task #6).",
    "question": "[MOD Coding Task #6] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.Insights/components`` when implementing `purging soft-deleted AI Foundry resources via AZD`?",
    "options": [
      "A) Running `azd down --force --purge` to permanently delete soft-deleted Cognitive Services during CI/CD teardown.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Running `azd down --force --purge` to permanently delete soft-deleted Cognitive Services during CI/CD teardown.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.Insights/components``, Running `azd down --force --purge` to permanently delete soft-deleted Cognitive Services during CI/CD teardown. is the officially required syntax for `purging soft-deleted AI Foundry resources via AZD`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2607,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Litware Legal Evaluator` implementing `Bicep `Microsoft.Network/privateEndpoints``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `purging soft-deleted AI Foundry resources via AZD` (Implementation Task #7).",
    "question": "[MOD Coding Task #7] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.Network/privateEndpoints`` when implementing `purging soft-deleted AI Foundry resources via AZD`?",
    "options": [
      "A) Running `azd down --force --purge` to permanently delete soft-deleted Cognitive Services during CI/CD teardown.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Running `azd down --force --purge` to permanently delete soft-deleted Cognitive Services during CI/CD teardown.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.Network/privateEndpoints``, Running `azd down --force --purge` to permanently delete soft-deleted Cognitive Services during CI/CD teardown. is the officially required syntax for `purging soft-deleted AI Foundry resources via AZD`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2608,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `A.Datum Retail Copilot` implementing `AZD `azure.yaml` Root Orchestration File`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `purging soft-deleted AI Foundry resources via AZD` (Implementation Task #8).",
    "question": "[MOD Coding Task #8] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `AZD `azure.yaml` Root Orchestration File` for `purging soft-deleted AI Foundry resources via AZD`? (Select three)",
    "options": [
      "A) Running `azd down --force --purge` to permanently delete soft-deleted Cognitive Services during CI/CD teardown.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `AZD `azure.yaml` Root Orchestration File` for `purging soft-deleted AI Foundry resources via AZD`, enterprise coding standards mandate: (1) Running `azd down --force --purge` to permanently delete soft-deleted Cognitive Services during CI/CD teardown., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2609,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Alpine Ski Field Technician` implementing `Bicep `infra/main.parameters.json` & `abbreviations.json``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `purging soft-deleted AI Foundry resources via AZD` (Implementation Task #9).",
    "question": "[MOD Coding Task #9] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `infra/main.parameters.json` & `abbreviations.json`` when implementing `purging soft-deleted AI Foundry resources via AZD`?",
    "options": [
      "A) Running `azd down --force --purge` to permanently delete soft-deleted Cognitive Services during CI/CD teardown.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Running `azd down --force --purge` to permanently delete soft-deleted Cognitive Services during CI/CD teardown.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `infra/main.parameters.json` & `abbreviations.json``, Running `azd down --force --purge` to permanently delete soft-deleted Cognitive Services during CI/CD teardown. is the officially required syntax for `purging soft-deleted AI Foundry resources via AZD`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2610,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Tailwind Traders Multi-Agent` implementing `AZD CLI Command Flags (`azd up`, `azd down`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `purging soft-deleted AI Foundry resources via AZD` (Implementation Task #10).",
    "question": "[MOD Coding Task #10] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `AZD CLI Command Flags (`azd up`, `azd down`)` when implementing `purging soft-deleted AI Foundry resources via AZD`?",
    "options": [
      "A) Running `azd down --force --purge` to permanently delete soft-deleted Cognitive Services during CI/CD teardown.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Running `azd down --force --purge` to permanently delete soft-deleted Cognitive Services during CI/CD teardown.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `AZD CLI Command Flags (`azd up`, `azd down`)`, Running `azd down --force --purge` to permanently delete soft-deleted Cognitive Services during CI/CD teardown. is the officially required syntax for `purging soft-deleted AI Foundry resources via AZD`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2611,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Adventure Works Core Hub` implementing `Bicep `Microsoft.MachineLearningServices/workspaces``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `assigning 'Cognitive Services OpenAI User' role via Bicep` (Implementation Task #11).",
    "question": "[MOD Coding Task #11] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.MachineLearningServices/workspaces`` when implementing `assigning 'Cognitive Services OpenAI User' role via Bicep`?",
    "options": [
      "A) Creating a `Microsoft.Authorization/roleAssignments` resource block referencing `roleDefinitionId: '5e0bd9bd-7b93-4f28-af87-19fc36ad61bd'`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Creating a `Microsoft.Authorization/roleAssignments` resource block referencing `roleDefinitionId: '5e0bd9bd-7b93-4f28-af87-19fc36ad61bd'`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.MachineLearningServices/workspaces``, Creating a `Microsoft.Authorization/roleAssignments` resource block referencing `roleDefinitionId: '5e0bd9bd-7b93-4f28-af87-19fc36ad61bd'`. is the officially required syntax for `assigning 'Cognitive Services OpenAI User' role via Bicep`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2612,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Contoso Health AI` implementing `Bicep `Microsoft.CognitiveServices/accounts``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `assigning 'Cognitive Services OpenAI User' role via Bicep` (Implementation Task #12).",
    "question": "[MOD Coding Task #12] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Bicep `Microsoft.CognitiveServices/accounts`` for `assigning 'Cognitive Services OpenAI User' role via Bicep`? (Select three)",
    "options": [
      "A) Creating a `Microsoft.Authorization/roleAssignments` resource block referencing `roleDefinitionId: '5e0bd9bd-7b93-4f28-af87-19fc36ad61bd'`.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Bicep `Microsoft.CognitiveServices/accounts`` for `assigning 'Cognitive Services OpenAI User' role via Bicep`, enterprise coding standards mandate: (1) Creating a `Microsoft.Authorization/roleAssignments` resource block referencing `roleDefinitionId: '5e0bd9bd-7b93-4f28-af87-19fc36ad61bd'`., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2613,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Fabrikam Logistics Agent` implementing `Bicep `Microsoft.KeyVault/vaults``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `assigning 'Cognitive Services OpenAI User' role via Bicep` (Implementation Task #13).",
    "question": "[MOD Coding Task #13] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.KeyVault/vaults`` when implementing `assigning 'Cognitive Services OpenAI User' role via Bicep`?",
    "options": [
      "A) Creating a `Microsoft.Authorization/roleAssignments` resource block referencing `roleDefinitionId: '5e0bd9bd-7b93-4f28-af87-19fc36ad61bd'`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Creating a `Microsoft.Authorization/roleAssignments` resource block referencing `roleDefinitionId: '5e0bd9bd-7b93-4f28-af87-19fc36ad61bd'`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.KeyVault/vaults``, Creating a `Microsoft.Authorization/roleAssignments` resource block referencing `roleDefinitionId: '5e0bd9bd-7b93-4f28-af87-19fc36ad61bd'`. is the officially required syntax for `assigning 'Cognitive Services OpenAI User' role via Bicep`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2614,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Trey Research Lab` implementing `Bicep `Microsoft.Storage/storageAccounts``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `assigning 'Cognitive Services OpenAI User' role via Bicep` (Implementation Task #14).",
    "question": "[MOD Coding Task #14] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.Storage/storageAccounts`` when implementing `assigning 'Cognitive Services OpenAI User' role via Bicep`?",
    "options": [
      "A) Creating a `Microsoft.Authorization/roleAssignments` resource block referencing `roleDefinitionId: '5e0bd9bd-7b93-4f28-af87-19fc36ad61bd'`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Creating a `Microsoft.Authorization/roleAssignments` resource block referencing `roleDefinitionId: '5e0bd9bd-7b93-4f28-af87-19fc36ad61bd'`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.Storage/storageAccounts``, Creating a `Microsoft.Authorization/roleAssignments` resource block referencing `roleDefinitionId: '5e0bd9bd-7b93-4f28-af87-19fc36ad61bd'`. is the officially required syntax for `assigning 'Cognitive Services OpenAI User' role via Bicep`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2615,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Northwind Traders Bot` implementing `Bicep `Microsoft.OperationalInsights/workspaces``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `assigning 'Cognitive Services OpenAI User' role via Bicep` (Implementation Task #15).",
    "question": "[MOD Coding Task #15] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.OperationalInsights/workspaces`` when implementing `assigning 'Cognitive Services OpenAI User' role via Bicep`?",
    "options": [
      "A) Creating a `Microsoft.Authorization/roleAssignments` resource block referencing `roleDefinitionId: '5e0bd9bd-7b93-4f28-af87-19fc36ad61bd'`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Creating a `Microsoft.Authorization/roleAssignments` resource block referencing `roleDefinitionId: '5e0bd9bd-7b93-4f28-af87-19fc36ad61bd'`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.OperationalInsights/workspaces``, Creating a `Microsoft.Authorization/roleAssignments` resource block referencing `roleDefinitionId: '5e0bd9bd-7b93-4f28-af87-19fc36ad61bd'`. is the officially required syntax for `assigning 'Cognitive Services OpenAI User' role via Bicep`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2616,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Woodgrove Bank Virtual Assistant` implementing `Bicep `Microsoft.Insights/components``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `assigning 'Cognitive Services OpenAI User' role via Bicep` (Implementation Task #16).",
    "question": "[MOD Coding Task #16] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Bicep `Microsoft.Insights/components`` for `assigning 'Cognitive Services OpenAI User' role via Bicep`? (Select three)",
    "options": [
      "A) Creating a `Microsoft.Authorization/roleAssignments` resource block referencing `roleDefinitionId: '5e0bd9bd-7b93-4f28-af87-19fc36ad61bd'`.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Bicep `Microsoft.Insights/components`` for `assigning 'Cognitive Services OpenAI User' role via Bicep`, enterprise coding standards mandate: (1) Creating a `Microsoft.Authorization/roleAssignments` resource block referencing `roleDefinitionId: '5e0bd9bd-7b93-4f28-af87-19fc36ad61bd'`., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2617,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Litware Legal Evaluator` implementing `Bicep `Microsoft.Network/privateEndpoints``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `assigning 'Cognitive Services OpenAI User' role via Bicep` (Implementation Task #17).",
    "question": "[MOD Coding Task #17] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.Network/privateEndpoints`` when implementing `assigning 'Cognitive Services OpenAI User' role via Bicep`?",
    "options": [
      "A) Creating a `Microsoft.Authorization/roleAssignments` resource block referencing `roleDefinitionId: '5e0bd9bd-7b93-4f28-af87-19fc36ad61bd'`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Creating a `Microsoft.Authorization/roleAssignments` resource block referencing `roleDefinitionId: '5e0bd9bd-7b93-4f28-af87-19fc36ad61bd'`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.Network/privateEndpoints``, Creating a `Microsoft.Authorization/roleAssignments` resource block referencing `roleDefinitionId: '5e0bd9bd-7b93-4f28-af87-19fc36ad61bd'`. is the officially required syntax for `assigning 'Cognitive Services OpenAI User' role via Bicep`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2618,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `A.Datum Retail Copilot` implementing `AZD `azure.yaml` Root Orchestration File`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `assigning 'Cognitive Services OpenAI User' role via Bicep` (Implementation Task #18).",
    "question": "[MOD Coding Task #18] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `AZD `azure.yaml` Root Orchestration File` when implementing `assigning 'Cognitive Services OpenAI User' role via Bicep`?",
    "options": [
      "A) Creating a `Microsoft.Authorization/roleAssignments` resource block referencing `roleDefinitionId: '5e0bd9bd-7b93-4f28-af87-19fc36ad61bd'`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Creating a `Microsoft.Authorization/roleAssignments` resource block referencing `roleDefinitionId: '5e0bd9bd-7b93-4f28-af87-19fc36ad61bd'`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `AZD `azure.yaml` Root Orchestration File`, Creating a `Microsoft.Authorization/roleAssignments` resource block referencing `roleDefinitionId: '5e0bd9bd-7b93-4f28-af87-19fc36ad61bd'`. is the officially required syntax for `assigning 'Cognitive Services OpenAI User' role via Bicep`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2619,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Alpine Ski Field Technician` implementing `Bicep `infra/main.parameters.json` & `abbreviations.json``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `assigning 'Cognitive Services OpenAI User' role via Bicep` (Implementation Task #19).",
    "question": "[MOD Coding Task #19] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `infra/main.parameters.json` & `abbreviations.json`` when implementing `assigning 'Cognitive Services OpenAI User' role via Bicep`?",
    "options": [
      "A) Creating a `Microsoft.Authorization/roleAssignments` resource block referencing `roleDefinitionId: '5e0bd9bd-7b93-4f28-af87-19fc36ad61bd'`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Creating a `Microsoft.Authorization/roleAssignments` resource block referencing `roleDefinitionId: '5e0bd9bd-7b93-4f28-af87-19fc36ad61bd'`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `infra/main.parameters.json` & `abbreviations.json``, Creating a `Microsoft.Authorization/roleAssignments` resource block referencing `roleDefinitionId: '5e0bd9bd-7b93-4f28-af87-19fc36ad61bd'`. is the officially required syntax for `assigning 'Cognitive Services OpenAI User' role via Bicep`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2620,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Tailwind Traders Multi-Agent` implementing `AZD CLI Command Flags (`azd up`, `azd down`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `assigning 'Cognitive Services OpenAI User' role via Bicep` (Implementation Task #20).",
    "question": "[MOD Coding Task #20] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `AZD CLI Command Flags (`azd up`, `azd down`)` for `assigning 'Cognitive Services OpenAI User' role via Bicep`? (Select three)",
    "options": [
      "A) Creating a `Microsoft.Authorization/roleAssignments` resource block referencing `roleDefinitionId: '5e0bd9bd-7b93-4f28-af87-19fc36ad61bd'`.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `AZD CLI Command Flags (`azd up`, `azd down`)` for `assigning 'Cognitive Services OpenAI User' role via Bicep`, enterprise coding standards mandate: (1) Creating a `Microsoft.Authorization/roleAssignments` resource block referencing `roleDefinitionId: '5e0bd9bd-7b93-4f28-af87-19fc36ad61bd'`., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2621,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Adventure Works Core Hub` implementing `Bicep `Microsoft.MachineLearningServices/workspaces``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `configuring private endpoint subnets in Bicep` (Implementation Task #21).",
    "question": "[MOD Coding Task #21] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.MachineLearningServices/workspaces`` when implementing `configuring private endpoint subnets in Bicep`?",
    "options": [
      "A) Writing `properties: { subnet: { id: vnet.properties.subnets[0].id }, privateLinkServiceConnections: [...] }` inside Bicep.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `properties: { subnet: { id: vnet.properties.subnets[0].id }, privateLinkServiceConnections: [...] }` inside Bicep.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.MachineLearningServices/workspaces``, Writing `properties: { subnet: { id: vnet.properties.subnets[0].id }, privateLinkServiceConnections: [...] }` inside Bicep. is the officially required syntax for `configuring private endpoint subnets in Bicep`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2622,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Contoso Health AI` implementing `Bicep `Microsoft.CognitiveServices/accounts``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `configuring private endpoint subnets in Bicep` (Implementation Task #22).",
    "question": "[MOD Coding Task #22] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.CognitiveServices/accounts`` when implementing `configuring private endpoint subnets in Bicep`?",
    "options": [
      "A) Writing `properties: { subnet: { id: vnet.properties.subnets[0].id }, privateLinkServiceConnections: [...] }` inside Bicep.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `properties: { subnet: { id: vnet.properties.subnets[0].id }, privateLinkServiceConnections: [...] }` inside Bicep.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.CognitiveServices/accounts``, Writing `properties: { subnet: { id: vnet.properties.subnets[0].id }, privateLinkServiceConnections: [...] }` inside Bicep. is the officially required syntax for `configuring private endpoint subnets in Bicep`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2623,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Fabrikam Logistics Agent` implementing `Bicep `Microsoft.KeyVault/vaults``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `configuring private endpoint subnets in Bicep` (Implementation Task #23).",
    "question": "[MOD Coding Task #23] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.KeyVault/vaults`` when implementing `configuring private endpoint subnets in Bicep`?",
    "options": [
      "A) Writing `properties: { subnet: { id: vnet.properties.subnets[0].id }, privateLinkServiceConnections: [...] }` inside Bicep.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `properties: { subnet: { id: vnet.properties.subnets[0].id }, privateLinkServiceConnections: [...] }` inside Bicep.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.KeyVault/vaults``, Writing `properties: { subnet: { id: vnet.properties.subnets[0].id }, privateLinkServiceConnections: [...] }` inside Bicep. is the officially required syntax for `configuring private endpoint subnets in Bicep`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2624,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Trey Research Lab` implementing `Bicep `Microsoft.Storage/storageAccounts``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `configuring private endpoint subnets in Bicep` (Implementation Task #24).",
    "question": "[MOD Coding Task #24] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Bicep `Microsoft.Storage/storageAccounts`` for `configuring private endpoint subnets in Bicep`? (Select three)",
    "options": [
      "A) Writing `properties: { subnet: { id: vnet.properties.subnets[0].id }, privateLinkServiceConnections: [...] }` inside Bicep.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Bicep `Microsoft.Storage/storageAccounts`` for `configuring private endpoint subnets in Bicep`, enterprise coding standards mandate: (1) Writing `properties: { subnet: { id: vnet.properties.subnets[0].id }, privateLinkServiceConnections: [...] }` inside Bicep., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2625,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Northwind Traders Bot` implementing `Bicep `Microsoft.OperationalInsights/workspaces``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `configuring private endpoint subnets in Bicep` (Implementation Task #25).",
    "question": "[MOD Coding Task #25] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.OperationalInsights/workspaces`` when implementing `configuring private endpoint subnets in Bicep`?",
    "options": [
      "A) Writing `properties: { subnet: { id: vnet.properties.subnets[0].id }, privateLinkServiceConnections: [...] }` inside Bicep.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `properties: { subnet: { id: vnet.properties.subnets[0].id }, privateLinkServiceConnections: [...] }` inside Bicep.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.OperationalInsights/workspaces``, Writing `properties: { subnet: { id: vnet.properties.subnets[0].id }, privateLinkServiceConnections: [...] }` inside Bicep. is the officially required syntax for `configuring private endpoint subnets in Bicep`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2626,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Woodgrove Bank Virtual Assistant` implementing `Bicep `Microsoft.Insights/components``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `configuring private endpoint subnets in Bicep` (Implementation Task #26).",
    "question": "[MOD Coding Task #26] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.Insights/components`` when implementing `configuring private endpoint subnets in Bicep`?",
    "options": [
      "A) Writing `properties: { subnet: { id: vnet.properties.subnets[0].id }, privateLinkServiceConnections: [...] }` inside Bicep.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `properties: { subnet: { id: vnet.properties.subnets[0].id }, privateLinkServiceConnections: [...] }` inside Bicep.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.Insights/components``, Writing `properties: { subnet: { id: vnet.properties.subnets[0].id }, privateLinkServiceConnections: [...] }` inside Bicep. is the officially required syntax for `configuring private endpoint subnets in Bicep`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2627,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Litware Legal Evaluator` implementing `Bicep `Microsoft.Network/privateEndpoints``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `configuring private endpoint subnets in Bicep` (Implementation Task #27).",
    "question": "[MOD Coding Task #27] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.Network/privateEndpoints`` when implementing `configuring private endpoint subnets in Bicep`?",
    "options": [
      "A) Writing `properties: { subnet: { id: vnet.properties.subnets[0].id }, privateLinkServiceConnections: [...] }` inside Bicep.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `properties: { subnet: { id: vnet.properties.subnets[0].id }, privateLinkServiceConnections: [...] }` inside Bicep.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.Network/privateEndpoints``, Writing `properties: { subnet: { id: vnet.properties.subnets[0].id }, privateLinkServiceConnections: [...] }` inside Bicep. is the officially required syntax for `configuring private endpoint subnets in Bicep`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2628,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `A.Datum Retail Copilot` implementing `AZD `azure.yaml` Root Orchestration File`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `configuring private endpoint subnets in Bicep` (Implementation Task #28).",
    "question": "[MOD Coding Task #28] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `AZD `azure.yaml` Root Orchestration File` for `configuring private endpoint subnets in Bicep`? (Select three)",
    "options": [
      "A) Writing `properties: { subnet: { id: vnet.properties.subnets[0].id }, privateLinkServiceConnections: [...] }` inside Bicep.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `AZD `azure.yaml` Root Orchestration File` for `configuring private endpoint subnets in Bicep`, enterprise coding standards mandate: (1) Writing `properties: { subnet: { id: vnet.properties.subnets[0].id }, privateLinkServiceConnections: [...] }` inside Bicep., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2629,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Alpine Ski Field Technician` implementing `Bicep `infra/main.parameters.json` & `abbreviations.json``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `configuring private endpoint subnets in Bicep` (Implementation Task #29).",
    "question": "[MOD Coding Task #29] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `infra/main.parameters.json` & `abbreviations.json`` when implementing `configuring private endpoint subnets in Bicep`?",
    "options": [
      "A) Writing `properties: { subnet: { id: vnet.properties.subnets[0].id }, privateLinkServiceConnections: [...] }` inside Bicep.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `properties: { subnet: { id: vnet.properties.subnets[0].id }, privateLinkServiceConnections: [...] }` inside Bicep.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `infra/main.parameters.json` & `abbreviations.json``, Writing `properties: { subnet: { id: vnet.properties.subnets[0].id }, privateLinkServiceConnections: [...] }` inside Bicep. is the officially required syntax for `configuring private endpoint subnets in Bicep`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2630,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Tailwind Traders Multi-Agent` implementing `AZD CLI Command Flags (`azd up`, `azd down`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `configuring private endpoint subnets in Bicep` (Implementation Task #30).",
    "question": "[MOD Coding Task #30] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `AZD CLI Command Flags (`azd up`, `azd down`)` when implementing `configuring private endpoint subnets in Bicep`?",
    "options": [
      "A) Writing `properties: { subnet: { id: vnet.properties.subnets[0].id }, privateLinkServiceConnections: [...] }` inside Bicep.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `properties: { subnet: { id: vnet.properties.subnets[0].id }, privateLinkServiceConnections: [...] }` inside Bicep.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `AZD CLI Command Flags (`azd up`, `azd down`)`, Writing `properties: { subnet: { id: vnet.properties.subnets[0].id }, privateLinkServiceConnections: [...] }` inside Bicep. is the officially required syntax for `configuring private endpoint subnets in Bicep`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2631,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Adventure Works Core Hub` implementing `Bicep `Microsoft.MachineLearningServices/workspaces``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `wiring pre-provision lifecycle hooks in `azure.yaml`` (Implementation Task #31).",
    "question": "[MOD Coding Task #31] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.MachineLearningServices/workspaces`` when implementing `wiring pre-provision lifecycle hooks in `azure.yaml``?",
    "options": [
      "A) Specifying `hooks: preprovision: shell: sh, run: ./scripts/validate-env.sh` inside `azure.yaml` before infrastructure build.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Specifying `hooks: preprovision: shell: sh, run: ./scripts/validate-env.sh` inside `azure.yaml` before infrastructure build.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.MachineLearningServices/workspaces``, Specifying `hooks: preprovision: shell: sh, run: ./scripts/validate-env.sh` inside `azure.yaml` before infrastructure build. is the officially required syntax for `wiring pre-provision lifecycle hooks in `azure.yaml``. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2632,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Contoso Health AI` implementing `Bicep `Microsoft.CognitiveServices/accounts``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `wiring pre-provision lifecycle hooks in `azure.yaml`` (Implementation Task #32).",
    "question": "[MOD Coding Task #32] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Bicep `Microsoft.CognitiveServices/accounts`` for `wiring pre-provision lifecycle hooks in `azure.yaml``? (Select three)",
    "options": [
      "A) Specifying `hooks: preprovision: shell: sh, run: ./scripts/validate-env.sh` inside `azure.yaml` before infrastructure build.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Bicep `Microsoft.CognitiveServices/accounts`` for `wiring pre-provision lifecycle hooks in `azure.yaml``, enterprise coding standards mandate: (1) Specifying `hooks: preprovision: shell: sh, run: ./scripts/validate-env.sh` inside `azure.yaml` before infrastructure build., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2633,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Fabrikam Logistics Agent` implementing `Bicep `Microsoft.KeyVault/vaults``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `wiring pre-provision lifecycle hooks in `azure.yaml`` (Implementation Task #33).",
    "question": "[MOD Coding Task #33] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.KeyVault/vaults`` when implementing `wiring pre-provision lifecycle hooks in `azure.yaml``?",
    "options": [
      "A) Specifying `hooks: preprovision: shell: sh, run: ./scripts/validate-env.sh` inside `azure.yaml` before infrastructure build.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Specifying `hooks: preprovision: shell: sh, run: ./scripts/validate-env.sh` inside `azure.yaml` before infrastructure build.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.KeyVault/vaults``, Specifying `hooks: preprovision: shell: sh, run: ./scripts/validate-env.sh` inside `azure.yaml` before infrastructure build. is the officially required syntax for `wiring pre-provision lifecycle hooks in `azure.yaml``. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2634,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Trey Research Lab` implementing `Bicep `Microsoft.Storage/storageAccounts``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `wiring pre-provision lifecycle hooks in `azure.yaml`` (Implementation Task #34).",
    "question": "[MOD Coding Task #34] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.Storage/storageAccounts`` when implementing `wiring pre-provision lifecycle hooks in `azure.yaml``?",
    "options": [
      "A) Specifying `hooks: preprovision: shell: sh, run: ./scripts/validate-env.sh` inside `azure.yaml` before infrastructure build.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Specifying `hooks: preprovision: shell: sh, run: ./scripts/validate-env.sh` inside `azure.yaml` before infrastructure build.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.Storage/storageAccounts``, Specifying `hooks: preprovision: shell: sh, run: ./scripts/validate-env.sh` inside `azure.yaml` before infrastructure build. is the officially required syntax for `wiring pre-provision lifecycle hooks in `azure.yaml``. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2635,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Northwind Traders Bot` implementing `Bicep `Microsoft.OperationalInsights/workspaces``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `wiring pre-provision lifecycle hooks in `azure.yaml`` (Implementation Task #35).",
    "question": "[MOD Coding Task #35] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.OperationalInsights/workspaces`` when implementing `wiring pre-provision lifecycle hooks in `azure.yaml``?",
    "options": [
      "A) Specifying `hooks: preprovision: shell: sh, run: ./scripts/validate-env.sh` inside `azure.yaml` before infrastructure build.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Specifying `hooks: preprovision: shell: sh, run: ./scripts/validate-env.sh` inside `azure.yaml` before infrastructure build.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.OperationalInsights/workspaces``, Specifying `hooks: preprovision: shell: sh, run: ./scripts/validate-env.sh` inside `azure.yaml` before infrastructure build. is the officially required syntax for `wiring pre-provision lifecycle hooks in `azure.yaml``. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2636,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Woodgrove Bank Virtual Assistant` implementing `Bicep `Microsoft.Insights/components``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `wiring pre-provision lifecycle hooks in `azure.yaml`` (Implementation Task #36).",
    "question": "[MOD Coding Task #36] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Bicep `Microsoft.Insights/components`` for `wiring pre-provision lifecycle hooks in `azure.yaml``? (Select three)",
    "options": [
      "A) Specifying `hooks: preprovision: shell: sh, run: ./scripts/validate-env.sh` inside `azure.yaml` before infrastructure build.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Bicep `Microsoft.Insights/components`` for `wiring pre-provision lifecycle hooks in `azure.yaml``, enterprise coding standards mandate: (1) Specifying `hooks: preprovision: shell: sh, run: ./scripts/validate-env.sh` inside `azure.yaml` before infrastructure build., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2637,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Litware Legal Evaluator` implementing `Bicep `Microsoft.Network/privateEndpoints``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `wiring pre-provision lifecycle hooks in `azure.yaml`` (Implementation Task #37).",
    "question": "[MOD Coding Task #37] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.Network/privateEndpoints`` when implementing `wiring pre-provision lifecycle hooks in `azure.yaml``?",
    "options": [
      "A) Specifying `hooks: preprovision: shell: sh, run: ./scripts/validate-env.sh` inside `azure.yaml` before infrastructure build.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Specifying `hooks: preprovision: shell: sh, run: ./scripts/validate-env.sh` inside `azure.yaml` before infrastructure build.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.Network/privateEndpoints``, Specifying `hooks: preprovision: shell: sh, run: ./scripts/validate-env.sh` inside `azure.yaml` before infrastructure build. is the officially required syntax for `wiring pre-provision lifecycle hooks in `azure.yaml``. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2638,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `A.Datum Retail Copilot` implementing `AZD `azure.yaml` Root Orchestration File`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `wiring pre-provision lifecycle hooks in `azure.yaml`` (Implementation Task #38).",
    "question": "[MOD Coding Task #38] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `AZD `azure.yaml` Root Orchestration File` when implementing `wiring pre-provision lifecycle hooks in `azure.yaml``?",
    "options": [
      "A) Specifying `hooks: preprovision: shell: sh, run: ./scripts/validate-env.sh` inside `azure.yaml` before infrastructure build.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Specifying `hooks: preprovision: shell: sh, run: ./scripts/validate-env.sh` inside `azure.yaml` before infrastructure build.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `AZD `azure.yaml` Root Orchestration File`, Specifying `hooks: preprovision: shell: sh, run: ./scripts/validate-env.sh` inside `azure.yaml` before infrastructure build. is the officially required syntax for `wiring pre-provision lifecycle hooks in `azure.yaml``. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2639,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Alpine Ski Field Technician` implementing `Bicep `infra/main.parameters.json` & `abbreviations.json``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `wiring pre-provision lifecycle hooks in `azure.yaml`` (Implementation Task #39).",
    "question": "[MOD Coding Task #39] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `infra/main.parameters.json` & `abbreviations.json`` when implementing `wiring pre-provision lifecycle hooks in `azure.yaml``?",
    "options": [
      "A) Specifying `hooks: preprovision: shell: sh, run: ./scripts/validate-env.sh` inside `azure.yaml` before infrastructure build.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Specifying `hooks: preprovision: shell: sh, run: ./scripts/validate-env.sh` inside `azure.yaml` before infrastructure build.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `infra/main.parameters.json` & `abbreviations.json``, Specifying `hooks: preprovision: shell: sh, run: ./scripts/validate-env.sh` inside `azure.yaml` before infrastructure build. is the officially required syntax for `wiring pre-provision lifecycle hooks in `azure.yaml``. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2640,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Tailwind Traders Multi-Agent` implementing `AZD CLI Command Flags (`azd up`, `azd down`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `wiring pre-provision lifecycle hooks in `azure.yaml`` (Implementation Task #40).",
    "question": "[MOD Coding Task #40] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `AZD CLI Command Flags (`azd up`, `azd down`)` for `wiring pre-provision lifecycle hooks in `azure.yaml``? (Select three)",
    "options": [
      "A) Specifying `hooks: preprovision: shell: sh, run: ./scripts/validate-env.sh` inside `azure.yaml` before infrastructure build.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `AZD CLI Command Flags (`azd up`, `azd down`)` for `wiring pre-provision lifecycle hooks in `azure.yaml``, enterprise coding standards mandate: (1) Specifying `hooks: preprovision: shell: sh, run: ./scripts/validate-env.sh` inside `azure.yaml` before infrastructure build., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2641,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Adventure Works Core Hub` implementing `Bicep `Microsoft.MachineLearningServices/workspaces``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `outputting AI Foundry connection string in Bicep` (Implementation Task #41).",
    "question": "[MOD Coding Task #41] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.MachineLearningServices/workspaces`` when implementing `outputting AI Foundry connection string in Bicep`?",
    "options": [
      "A) Declaring `output PROJECT_CONNECTION_STRING string = aiProject.properties.connectionString` at the end of Bicep.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Declaring `output PROJECT_CONNECTION_STRING string = aiProject.properties.connectionString` at the end of Bicep.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.MachineLearningServices/workspaces``, Declaring `output PROJECT_CONNECTION_STRING string = aiProject.properties.connectionString` at the end of Bicep. is the officially required syntax for `outputting AI Foundry connection string in Bicep`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2642,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Contoso Health AI` implementing `Bicep `Microsoft.CognitiveServices/accounts``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `outputting AI Foundry connection string in Bicep` (Implementation Task #42).",
    "question": "[MOD Coding Task #42] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.CognitiveServices/accounts`` when implementing `outputting AI Foundry connection string in Bicep`?",
    "options": [
      "A) Declaring `output PROJECT_CONNECTION_STRING string = aiProject.properties.connectionString` at the end of Bicep.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Declaring `output PROJECT_CONNECTION_STRING string = aiProject.properties.connectionString` at the end of Bicep.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.CognitiveServices/accounts``, Declaring `output PROJECT_CONNECTION_STRING string = aiProject.properties.connectionString` at the end of Bicep. is the officially required syntax for `outputting AI Foundry connection string in Bicep`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2643,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Fabrikam Logistics Agent` implementing `Bicep `Microsoft.KeyVault/vaults``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `outputting AI Foundry connection string in Bicep` (Implementation Task #43).",
    "question": "[MOD Coding Task #43] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.KeyVault/vaults`` when implementing `outputting AI Foundry connection string in Bicep`?",
    "options": [
      "A) Declaring `output PROJECT_CONNECTION_STRING string = aiProject.properties.connectionString` at the end of Bicep.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Declaring `output PROJECT_CONNECTION_STRING string = aiProject.properties.connectionString` at the end of Bicep.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.KeyVault/vaults``, Declaring `output PROJECT_CONNECTION_STRING string = aiProject.properties.connectionString` at the end of Bicep. is the officially required syntax for `outputting AI Foundry connection string in Bicep`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2644,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Trey Research Lab` implementing `Bicep `Microsoft.Storage/storageAccounts``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `outputting AI Foundry connection string in Bicep` (Implementation Task #44).",
    "question": "[MOD Coding Task #44] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Bicep `Microsoft.Storage/storageAccounts`` for `outputting AI Foundry connection string in Bicep`? (Select three)",
    "options": [
      "A) Declaring `output PROJECT_CONNECTION_STRING string = aiProject.properties.connectionString` at the end of Bicep.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Bicep `Microsoft.Storage/storageAccounts`` for `outputting AI Foundry connection string in Bicep`, enterprise coding standards mandate: (1) Declaring `output PROJECT_CONNECTION_STRING string = aiProject.properties.connectionString` at the end of Bicep., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2645,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Northwind Traders Bot` implementing `Bicep `Microsoft.OperationalInsights/workspaces``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `outputting AI Foundry connection string in Bicep` (Implementation Task #45).",
    "question": "[MOD Coding Task #45] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.OperationalInsights/workspaces`` when implementing `outputting AI Foundry connection string in Bicep`?",
    "options": [
      "A) Declaring `output PROJECT_CONNECTION_STRING string = aiProject.properties.connectionString` at the end of Bicep.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Declaring `output PROJECT_CONNECTION_STRING string = aiProject.properties.connectionString` at the end of Bicep.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.OperationalInsights/workspaces``, Declaring `output PROJECT_CONNECTION_STRING string = aiProject.properties.connectionString` at the end of Bicep. is the officially required syntax for `outputting AI Foundry connection string in Bicep`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2646,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Woodgrove Bank Virtual Assistant` implementing `Bicep `Microsoft.Insights/components``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `outputting AI Foundry connection string in Bicep` (Implementation Task #46).",
    "question": "[MOD Coding Task #46] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.Insights/components`` when implementing `outputting AI Foundry connection string in Bicep`?",
    "options": [
      "A) Declaring `output PROJECT_CONNECTION_STRING string = aiProject.properties.connectionString` at the end of Bicep.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Declaring `output PROJECT_CONNECTION_STRING string = aiProject.properties.connectionString` at the end of Bicep.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.Insights/components``, Declaring `output PROJECT_CONNECTION_STRING string = aiProject.properties.connectionString` at the end of Bicep. is the officially required syntax for `outputting AI Foundry connection string in Bicep`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2647,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Litware Legal Evaluator` implementing `Bicep `Microsoft.Network/privateEndpoints``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `outputting AI Foundry connection string in Bicep` (Implementation Task #47).",
    "question": "[MOD Coding Task #47] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.Network/privateEndpoints`` when implementing `outputting AI Foundry connection string in Bicep`?",
    "options": [
      "A) Declaring `output PROJECT_CONNECTION_STRING string = aiProject.properties.connectionString` at the end of Bicep.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Declaring `output PROJECT_CONNECTION_STRING string = aiProject.properties.connectionString` at the end of Bicep.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.Network/privateEndpoints``, Declaring `output PROJECT_CONNECTION_STRING string = aiProject.properties.connectionString` at the end of Bicep. is the officially required syntax for `outputting AI Foundry connection string in Bicep`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2648,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `A.Datum Retail Copilot` implementing `AZD `azure.yaml` Root Orchestration File`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `outputting AI Foundry connection string in Bicep` (Implementation Task #48).",
    "question": "[MOD Coding Task #48] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `AZD `azure.yaml` Root Orchestration File` for `outputting AI Foundry connection string in Bicep`? (Select three)",
    "options": [
      "A) Declaring `output PROJECT_CONNECTION_STRING string = aiProject.properties.connectionString` at the end of Bicep.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `AZD `azure.yaml` Root Orchestration File` for `outputting AI Foundry connection string in Bicep`, enterprise coding standards mandate: (1) Declaring `output PROJECT_CONNECTION_STRING string = aiProject.properties.connectionString` at the end of Bicep., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2649,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Alpine Ski Field Technician` implementing `Bicep `infra/main.parameters.json` & `abbreviations.json``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `outputting AI Foundry connection string in Bicep` (Implementation Task #49).",
    "question": "[MOD Coding Task #49] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `infra/main.parameters.json` & `abbreviations.json`` when implementing `outputting AI Foundry connection string in Bicep`?",
    "options": [
      "A) Declaring `output PROJECT_CONNECTION_STRING string = aiProject.properties.connectionString` at the end of Bicep.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Declaring `output PROJECT_CONNECTION_STRING string = aiProject.properties.connectionString` at the end of Bicep.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `infra/main.parameters.json` & `abbreviations.json``, Declaring `output PROJECT_CONNECTION_STRING string = aiProject.properties.connectionString` at the end of Bicep. is the officially required syntax for `outputting AI Foundry connection string in Bicep`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2650,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Tailwind Traders Multi-Agent` implementing `AZD CLI Command Flags (`azd up`, `azd down`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `outputting AI Foundry connection string in Bicep` (Implementation Task #50).",
    "question": "[MOD Coding Task #50] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `AZD CLI Command Flags (`azd up`, `azd down`)` when implementing `outputting AI Foundry connection string in Bicep`?",
    "options": [
      "A) Declaring `output PROJECT_CONNECTION_STRING string = aiProject.properties.connectionString` at the end of Bicep.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Declaring `output PROJECT_CONNECTION_STRING string = aiProject.properties.connectionString` at the end of Bicep.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `AZD CLI Command Flags (`azd up`, `azd down`)`, Declaring `output PROJECT_CONNECTION_STRING string = aiProject.properties.connectionString` at the end of Bicep. is the officially required syntax for `outputting AI Foundry connection string in Bicep`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2651,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Adventure Works Core Hub` implementing `Bicep `Microsoft.MachineLearningServices/workspaces``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `handling custom DNS group configs for private endpoints` (Implementation Task #51).",
    "question": "[MOD Coding Task #51] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.MachineLearningServices/workspaces`` when implementing `handling custom DNS group configs for private endpoints`?",
    "options": [
      "A) Creating `Microsoft.Network/privateEndpoints/privateDnsZoneGroups` mapping to `privatelink.api.azureml.ms` and `privatelink.openai.azure.com`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Creating `Microsoft.Network/privateEndpoints/privateDnsZoneGroups` mapping to `privatelink.api.azureml.ms` and `privatelink.openai.azure.com`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.MachineLearningServices/workspaces``, Creating `Microsoft.Network/privateEndpoints/privateDnsZoneGroups` mapping to `privatelink.api.azureml.ms` and `privatelink.openai.azure.com`. is the officially required syntax for `handling custom DNS group configs for private endpoints`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2652,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Contoso Health AI` implementing `Bicep `Microsoft.CognitiveServices/accounts``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `handling custom DNS group configs for private endpoints` (Implementation Task #52).",
    "question": "[MOD Coding Task #52] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Bicep `Microsoft.CognitiveServices/accounts`` for `handling custom DNS group configs for private endpoints`? (Select three)",
    "options": [
      "A) Creating `Microsoft.Network/privateEndpoints/privateDnsZoneGroups` mapping to `privatelink.api.azureml.ms` and `privatelink.openai.azure.com`.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Bicep `Microsoft.CognitiveServices/accounts`` for `handling custom DNS group configs for private endpoints`, enterprise coding standards mandate: (1) Creating `Microsoft.Network/privateEndpoints/privateDnsZoneGroups` mapping to `privatelink.api.azureml.ms` and `privatelink.openai.azure.com`., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2653,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Fabrikam Logistics Agent` implementing `Bicep `Microsoft.KeyVault/vaults``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `handling custom DNS group configs for private endpoints` (Implementation Task #53).",
    "question": "[MOD Coding Task #53] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.KeyVault/vaults`` when implementing `handling custom DNS group configs for private endpoints`?",
    "options": [
      "A) Creating `Microsoft.Network/privateEndpoints/privateDnsZoneGroups` mapping to `privatelink.api.azureml.ms` and `privatelink.openai.azure.com`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Creating `Microsoft.Network/privateEndpoints/privateDnsZoneGroups` mapping to `privatelink.api.azureml.ms` and `privatelink.openai.azure.com`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.KeyVault/vaults``, Creating `Microsoft.Network/privateEndpoints/privateDnsZoneGroups` mapping to `privatelink.api.azureml.ms` and `privatelink.openai.azure.com`. is the officially required syntax for `handling custom DNS group configs for private endpoints`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2654,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Trey Research Lab` implementing `Bicep `Microsoft.Storage/storageAccounts``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `handling custom DNS group configs for private endpoints` (Implementation Task #54).",
    "question": "[MOD Coding Task #54] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.Storage/storageAccounts`` when implementing `handling custom DNS group configs for private endpoints`?",
    "options": [
      "A) Creating `Microsoft.Network/privateEndpoints/privateDnsZoneGroups` mapping to `privatelink.api.azureml.ms` and `privatelink.openai.azure.com`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Creating `Microsoft.Network/privateEndpoints/privateDnsZoneGroups` mapping to `privatelink.api.azureml.ms` and `privatelink.openai.azure.com`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.Storage/storageAccounts``, Creating `Microsoft.Network/privateEndpoints/privateDnsZoneGroups` mapping to `privatelink.api.azureml.ms` and `privatelink.openai.azure.com`. is the officially required syntax for `handling custom DNS group configs for private endpoints`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2655,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Northwind Traders Bot` implementing `Bicep `Microsoft.OperationalInsights/workspaces``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `handling custom DNS group configs for private endpoints` (Implementation Task #55).",
    "question": "[MOD Coding Task #55] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.OperationalInsights/workspaces`` when implementing `handling custom DNS group configs for private endpoints`?",
    "options": [
      "A) Creating `Microsoft.Network/privateEndpoints/privateDnsZoneGroups` mapping to `privatelink.api.azureml.ms` and `privatelink.openai.azure.com`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Creating `Microsoft.Network/privateEndpoints/privateDnsZoneGroups` mapping to `privatelink.api.azureml.ms` and `privatelink.openai.azure.com`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.OperationalInsights/workspaces``, Creating `Microsoft.Network/privateEndpoints/privateDnsZoneGroups` mapping to `privatelink.api.azureml.ms` and `privatelink.openai.azure.com`. is the officially required syntax for `handling custom DNS group configs for private endpoints`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2656,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Woodgrove Bank Virtual Assistant` implementing `Bicep `Microsoft.Insights/components``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `handling custom DNS group configs for private endpoints` (Implementation Task #56).",
    "question": "[MOD Coding Task #56] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Bicep `Microsoft.Insights/components`` for `handling custom DNS group configs for private endpoints`? (Select three)",
    "options": [
      "A) Creating `Microsoft.Network/privateEndpoints/privateDnsZoneGroups` mapping to `privatelink.api.azureml.ms` and `privatelink.openai.azure.com`.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Bicep `Microsoft.Insights/components`` for `handling custom DNS group configs for private endpoints`, enterprise coding standards mandate: (1) Creating `Microsoft.Network/privateEndpoints/privateDnsZoneGroups` mapping to `privatelink.api.azureml.ms` and `privatelink.openai.azure.com`., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2657,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Litware Legal Evaluator` implementing `Bicep `Microsoft.Network/privateEndpoints``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `handling custom DNS group configs for private endpoints` (Implementation Task #57).",
    "question": "[MOD Coding Task #57] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.Network/privateEndpoints`` when implementing `handling custom DNS group configs for private endpoints`?",
    "options": [
      "A) Creating `Microsoft.Network/privateEndpoints/privateDnsZoneGroups` mapping to `privatelink.api.azureml.ms` and `privatelink.openai.azure.com`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Creating `Microsoft.Network/privateEndpoints/privateDnsZoneGroups` mapping to `privatelink.api.azureml.ms` and `privatelink.openai.azure.com`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.Network/privateEndpoints``, Creating `Microsoft.Network/privateEndpoints/privateDnsZoneGroups` mapping to `privatelink.api.azureml.ms` and `privatelink.openai.azure.com`. is the officially required syntax for `handling custom DNS group configs for private endpoints`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2658,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `A.Datum Retail Copilot` implementing `AZD `azure.yaml` Root Orchestration File`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `handling custom DNS group configs for private endpoints` (Implementation Task #58).",
    "question": "[MOD Coding Task #58] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `AZD `azure.yaml` Root Orchestration File` when implementing `handling custom DNS group configs for private endpoints`?",
    "options": [
      "A) Creating `Microsoft.Network/privateEndpoints/privateDnsZoneGroups` mapping to `privatelink.api.azureml.ms` and `privatelink.openai.azure.com`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Creating `Microsoft.Network/privateEndpoints/privateDnsZoneGroups` mapping to `privatelink.api.azureml.ms` and `privatelink.openai.azure.com`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `AZD `azure.yaml` Root Orchestration File`, Creating `Microsoft.Network/privateEndpoints/privateDnsZoneGroups` mapping to `privatelink.api.azureml.ms` and `privatelink.openai.azure.com`. is the officially required syntax for `handling custom DNS group configs for private endpoints`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2659,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Alpine Ski Field Technician` implementing `Bicep `infra/main.parameters.json` & `abbreviations.json``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `handling custom DNS group configs for private endpoints` (Implementation Task #59).",
    "question": "[MOD Coding Task #59] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `infra/main.parameters.json` & `abbreviations.json`` when implementing `handling custom DNS group configs for private endpoints`?",
    "options": [
      "A) Creating `Microsoft.Network/privateEndpoints/privateDnsZoneGroups` mapping to `privatelink.api.azureml.ms` and `privatelink.openai.azure.com`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Creating `Microsoft.Network/privateEndpoints/privateDnsZoneGroups` mapping to `privatelink.api.azureml.ms` and `privatelink.openai.azure.com`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `infra/main.parameters.json` & `abbreviations.json``, Creating `Microsoft.Network/privateEndpoints/privateDnsZoneGroups` mapping to `privatelink.api.azureml.ms` and `privatelink.openai.azure.com`. is the officially required syntax for `handling custom DNS group configs for private endpoints`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2660,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Tailwind Traders Multi-Agent` implementing `AZD CLI Command Flags (`azd up`, `azd down`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `handling custom DNS group configs for private endpoints` (Implementation Task #60).",
    "question": "[MOD Coding Task #60] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `AZD CLI Command Flags (`azd up`, `azd down`)` for `handling custom DNS group configs for private endpoints`? (Select three)",
    "options": [
      "A) Creating `Microsoft.Network/privateEndpoints/privateDnsZoneGroups` mapping to `privatelink.api.azureml.ms` and `privatelink.openai.azure.com`.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `AZD CLI Command Flags (`azd up`, `azd down`)` for `handling custom DNS group configs for private endpoints`, enterprise coding standards mandate: (1) Creating `Microsoft.Network/privateEndpoints/privateDnsZoneGroups` mapping to `privatelink.api.azureml.ms` and `privatelink.openai.azure.com`., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2661,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Adventure Works Core Hub` implementing `Bicep `Microsoft.MachineLearningServices/workspaces``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `restricting network access via `publicNetworkAccess`` (Implementation Task #61).",
    "question": "[MOD Coding Task #61] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.MachineLearningServices/workspaces`` when implementing `restricting network access via `publicNetworkAccess``?",
    "options": [
      "A) Setting `publicNetworkAccess: 'Disabled'` on Cognitive Services account resources while enabling trusted Azure services bypass.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Setting `publicNetworkAccess: 'Disabled'` on Cognitive Services account resources while enabling trusted Azure services bypass.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.MachineLearningServices/workspaces``, Setting `publicNetworkAccess: 'Disabled'` on Cognitive Services account resources while enabling trusted Azure services bypass. is the officially required syntax for `restricting network access via `publicNetworkAccess``. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2662,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Contoso Health AI` implementing `Bicep `Microsoft.CognitiveServices/accounts``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `restricting network access via `publicNetworkAccess`` (Implementation Task #62).",
    "question": "[MOD Coding Task #62] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.CognitiveServices/accounts`` when implementing `restricting network access via `publicNetworkAccess``?",
    "options": [
      "A) Setting `publicNetworkAccess: 'Disabled'` on Cognitive Services account resources while enabling trusted Azure services bypass.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Setting `publicNetworkAccess: 'Disabled'` on Cognitive Services account resources while enabling trusted Azure services bypass.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.CognitiveServices/accounts``, Setting `publicNetworkAccess: 'Disabled'` on Cognitive Services account resources while enabling trusted Azure services bypass. is the officially required syntax for `restricting network access via `publicNetworkAccess``. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2663,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Fabrikam Logistics Agent` implementing `Bicep `Microsoft.KeyVault/vaults``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `restricting network access via `publicNetworkAccess`` (Implementation Task #63).",
    "question": "[MOD Coding Task #63] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.KeyVault/vaults`` when implementing `restricting network access via `publicNetworkAccess``?",
    "options": [
      "A) Setting `publicNetworkAccess: 'Disabled'` on Cognitive Services account resources while enabling trusted Azure services bypass.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Setting `publicNetworkAccess: 'Disabled'` on Cognitive Services account resources while enabling trusted Azure services bypass.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.KeyVault/vaults``, Setting `publicNetworkAccess: 'Disabled'` on Cognitive Services account resources while enabling trusted Azure services bypass. is the officially required syntax for `restricting network access via `publicNetworkAccess``. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2664,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Trey Research Lab` implementing `Bicep `Microsoft.Storage/storageAccounts``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `restricting network access via `publicNetworkAccess`` (Implementation Task #64).",
    "question": "[MOD Coding Task #64] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Bicep `Microsoft.Storage/storageAccounts`` for `restricting network access via `publicNetworkAccess``? (Select three)",
    "options": [
      "A) Setting `publicNetworkAccess: 'Disabled'` on Cognitive Services account resources while enabling trusted Azure services bypass.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Bicep `Microsoft.Storage/storageAccounts`` for `restricting network access via `publicNetworkAccess``, enterprise coding standards mandate: (1) Setting `publicNetworkAccess: 'Disabled'` on Cognitive Services account resources while enabling trusted Azure services bypass., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2665,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Northwind Traders Bot` implementing `Bicep `Microsoft.OperationalInsights/workspaces``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `restricting network access via `publicNetworkAccess`` (Implementation Task #65).",
    "question": "[MOD Coding Task #65] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.OperationalInsights/workspaces`` when implementing `restricting network access via `publicNetworkAccess``?",
    "options": [
      "A) Setting `publicNetworkAccess: 'Disabled'` on Cognitive Services account resources while enabling trusted Azure services bypass.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Setting `publicNetworkAccess: 'Disabled'` on Cognitive Services account resources while enabling trusted Azure services bypass.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.OperationalInsights/workspaces``, Setting `publicNetworkAccess: 'Disabled'` on Cognitive Services account resources while enabling trusted Azure services bypass. is the officially required syntax for `restricting network access via `publicNetworkAccess``. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2666,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Woodgrove Bank Virtual Assistant` implementing `Bicep `Microsoft.Insights/components``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `restricting network access via `publicNetworkAccess`` (Implementation Task #66).",
    "question": "[MOD Coding Task #66] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.Insights/components`` when implementing `restricting network access via `publicNetworkAccess``?",
    "options": [
      "A) Setting `publicNetworkAccess: 'Disabled'` on Cognitive Services account resources while enabling trusted Azure services bypass.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Setting `publicNetworkAccess: 'Disabled'` on Cognitive Services account resources while enabling trusted Azure services bypass.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.Insights/components``, Setting `publicNetworkAccess: 'Disabled'` on Cognitive Services account resources while enabling trusted Azure services bypass. is the officially required syntax for `restricting network access via `publicNetworkAccess``. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2667,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Litware Legal Evaluator` implementing `Bicep `Microsoft.Network/privateEndpoints``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `restricting network access via `publicNetworkAccess`` (Implementation Task #67).",
    "question": "[MOD Coding Task #67] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.Network/privateEndpoints`` when implementing `restricting network access via `publicNetworkAccess``?",
    "options": [
      "A) Setting `publicNetworkAccess: 'Disabled'` on Cognitive Services account resources while enabling trusted Azure services bypass.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Setting `publicNetworkAccess: 'Disabled'` on Cognitive Services account resources while enabling trusted Azure services bypass.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.Network/privateEndpoints``, Setting `publicNetworkAccess: 'Disabled'` on Cognitive Services account resources while enabling trusted Azure services bypass. is the officially required syntax for `restricting network access via `publicNetworkAccess``. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2668,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `A.Datum Retail Copilot` implementing `AZD `azure.yaml` Root Orchestration File`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `restricting network access via `publicNetworkAccess`` (Implementation Task #68).",
    "question": "[MOD Coding Task #68] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `AZD `azure.yaml` Root Orchestration File` for `restricting network access via `publicNetworkAccess``? (Select three)",
    "options": [
      "A) Setting `publicNetworkAccess: 'Disabled'` on Cognitive Services account resources while enabling trusted Azure services bypass.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `AZD `azure.yaml` Root Orchestration File` for `restricting network access via `publicNetworkAccess``, enterprise coding standards mandate: (1) Setting `publicNetworkAccess: 'Disabled'` on Cognitive Services account resources while enabling trusted Azure services bypass., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2669,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Alpine Ski Field Technician` implementing `Bicep `infra/main.parameters.json` & `abbreviations.json``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `restricting network access via `publicNetworkAccess`` (Implementation Task #69).",
    "question": "[MOD Coding Task #69] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `infra/main.parameters.json` & `abbreviations.json`` when implementing `restricting network access via `publicNetworkAccess``?",
    "options": [
      "A) Setting `publicNetworkAccess: 'Disabled'` on Cognitive Services account resources while enabling trusted Azure services bypass.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Setting `publicNetworkAccess: 'Disabled'` on Cognitive Services account resources while enabling trusted Azure services bypass.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `infra/main.parameters.json` & `abbreviations.json``, Setting `publicNetworkAccess: 'Disabled'` on Cognitive Services account resources while enabling trusted Azure services bypass. is the officially required syntax for `restricting network access via `publicNetworkAccess``. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2670,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Tailwind Traders Multi-Agent` implementing `AZD CLI Command Flags (`azd up`, `azd down`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `restricting network access via `publicNetworkAccess`` (Implementation Task #70).",
    "question": "[MOD Coding Task #70] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `AZD CLI Command Flags (`azd up`, `azd down`)` when implementing `restricting network access via `publicNetworkAccess``?",
    "options": [
      "A) Setting `publicNetworkAccess: 'Disabled'` on Cognitive Services account resources while enabling trusted Azure services bypass.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Setting `publicNetworkAccess: 'Disabled'` on Cognitive Services account resources while enabling trusted Azure services bypass.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `AZD CLI Command Flags (`azd up`, `azd down`)`, Setting `publicNetworkAccess: 'Disabled'` on Cognitive Services account resources while enabling trusted Azure services bypass. is the officially required syntax for `restricting network access via `publicNetworkAccess``. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2671,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Adventure Works Core Hub` implementing `Bicep `Microsoft.MachineLearningServices/workspaces``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `parameterizing model deployments inside Bicep loops` (Implementation Task #71).",
    "question": "[MOD Coding Task #71] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.MachineLearningServices/workspaces`` when implementing `parameterizing model deployments inside Bicep loops`?",
    "options": [
      "A) Writing `resource deployments 'Microsoft.CognitiveServices/accounts/deployments@2024-04-01-preview' = [for model in models: { ... }]`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `resource deployments 'Microsoft.CognitiveServices/accounts/deployments@2024-04-01-preview' = [for model in models: { ... }]`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.MachineLearningServices/workspaces``, Writing `resource deployments 'Microsoft.CognitiveServices/accounts/deployments@2024-04-01-preview' = [for model in models: { ... }]`. is the officially required syntax for `parameterizing model deployments inside Bicep loops`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2672,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Contoso Health AI` implementing `Bicep `Microsoft.CognitiveServices/accounts``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `parameterizing model deployments inside Bicep loops` (Implementation Task #72).",
    "question": "[MOD Coding Task #72] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Bicep `Microsoft.CognitiveServices/accounts`` for `parameterizing model deployments inside Bicep loops`? (Select three)",
    "options": [
      "A) Writing `resource deployments 'Microsoft.CognitiveServices/accounts/deployments@2024-04-01-preview' = [for model in models: { ... }]`.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Bicep `Microsoft.CognitiveServices/accounts`` for `parameterizing model deployments inside Bicep loops`, enterprise coding standards mandate: (1) Writing `resource deployments 'Microsoft.CognitiveServices/accounts/deployments@2024-04-01-preview' = [for model in models: { ... }]`., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2673,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Fabrikam Logistics Agent` implementing `Bicep `Microsoft.KeyVault/vaults``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `parameterizing model deployments inside Bicep loops` (Implementation Task #73).",
    "question": "[MOD Coding Task #73] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.KeyVault/vaults`` when implementing `parameterizing model deployments inside Bicep loops`?",
    "options": [
      "A) Writing `resource deployments 'Microsoft.CognitiveServices/accounts/deployments@2024-04-01-preview' = [for model in models: { ... }]`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `resource deployments 'Microsoft.CognitiveServices/accounts/deployments@2024-04-01-preview' = [for model in models: { ... }]`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.KeyVault/vaults``, Writing `resource deployments 'Microsoft.CognitiveServices/accounts/deployments@2024-04-01-preview' = [for model in models: { ... }]`. is the officially required syntax for `parameterizing model deployments inside Bicep loops`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2674,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Trey Research Lab` implementing `Bicep `Microsoft.Storage/storageAccounts``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `parameterizing model deployments inside Bicep loops` (Implementation Task #74).",
    "question": "[MOD Coding Task #74] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.Storage/storageAccounts`` when implementing `parameterizing model deployments inside Bicep loops`?",
    "options": [
      "A) Writing `resource deployments 'Microsoft.CognitiveServices/accounts/deployments@2024-04-01-preview' = [for model in models: { ... }]`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `resource deployments 'Microsoft.CognitiveServices/accounts/deployments@2024-04-01-preview' = [for model in models: { ... }]`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.Storage/storageAccounts``, Writing `resource deployments 'Microsoft.CognitiveServices/accounts/deployments@2024-04-01-preview' = [for model in models: { ... }]`. is the officially required syntax for `parameterizing model deployments inside Bicep loops`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2675,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Northwind Traders Bot` implementing `Bicep `Microsoft.OperationalInsights/workspaces``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `parameterizing model deployments inside Bicep loops` (Implementation Task #75).",
    "question": "[MOD Coding Task #75] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.OperationalInsights/workspaces`` when implementing `parameterizing model deployments inside Bicep loops`?",
    "options": [
      "A) Writing `resource deployments 'Microsoft.CognitiveServices/accounts/deployments@2024-04-01-preview' = [for model in models: { ... }]`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `resource deployments 'Microsoft.CognitiveServices/accounts/deployments@2024-04-01-preview' = [for model in models: { ... }]`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.OperationalInsights/workspaces``, Writing `resource deployments 'Microsoft.CognitiveServices/accounts/deployments@2024-04-01-preview' = [for model in models: { ... }]`. is the officially required syntax for `parameterizing model deployments inside Bicep loops`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2676,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Woodgrove Bank Virtual Assistant` implementing `Bicep `Microsoft.Insights/components``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `parameterizing model deployments inside Bicep loops` (Implementation Task #76).",
    "question": "[MOD Coding Task #76] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Bicep `Microsoft.Insights/components`` for `parameterizing model deployments inside Bicep loops`? (Select three)",
    "options": [
      "A) Writing `resource deployments 'Microsoft.CognitiveServices/accounts/deployments@2024-04-01-preview' = [for model in models: { ... }]`.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Bicep `Microsoft.Insights/components`` for `parameterizing model deployments inside Bicep loops`, enterprise coding standards mandate: (1) Writing `resource deployments 'Microsoft.CognitiveServices/accounts/deployments@2024-04-01-preview' = [for model in models: { ... }]`., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2677,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Litware Legal Evaluator` implementing `Bicep `Microsoft.Network/privateEndpoints``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `parameterizing model deployments inside Bicep loops` (Implementation Task #77).",
    "question": "[MOD Coding Task #77] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.Network/privateEndpoints`` when implementing `parameterizing model deployments inside Bicep loops`?",
    "options": [
      "A) Writing `resource deployments 'Microsoft.CognitiveServices/accounts/deployments@2024-04-01-preview' = [for model in models: { ... }]`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `resource deployments 'Microsoft.CognitiveServices/accounts/deployments@2024-04-01-preview' = [for model in models: { ... }]`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.Network/privateEndpoints``, Writing `resource deployments 'Microsoft.CognitiveServices/accounts/deployments@2024-04-01-preview' = [for model in models: { ... }]`. is the officially required syntax for `parameterizing model deployments inside Bicep loops`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2678,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `A.Datum Retail Copilot` implementing `AZD `azure.yaml` Root Orchestration File`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `parameterizing model deployments inside Bicep loops` (Implementation Task #78).",
    "question": "[MOD Coding Task #78] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `AZD `azure.yaml` Root Orchestration File` when implementing `parameterizing model deployments inside Bicep loops`?",
    "options": [
      "A) Writing `resource deployments 'Microsoft.CognitiveServices/accounts/deployments@2024-04-01-preview' = [for model in models: { ... }]`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `resource deployments 'Microsoft.CognitiveServices/accounts/deployments@2024-04-01-preview' = [for model in models: { ... }]`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `AZD `azure.yaml` Root Orchestration File`, Writing `resource deployments 'Microsoft.CognitiveServices/accounts/deployments@2024-04-01-preview' = [for model in models: { ... }]`. is the officially required syntax for `parameterizing model deployments inside Bicep loops`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2679,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Alpine Ski Field Technician` implementing `Bicep `infra/main.parameters.json` & `abbreviations.json``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `parameterizing model deployments inside Bicep loops` (Implementation Task #79).",
    "question": "[MOD Coding Task #79] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `infra/main.parameters.json` & `abbreviations.json`` when implementing `parameterizing model deployments inside Bicep loops`?",
    "options": [
      "A) Writing `resource deployments 'Microsoft.CognitiveServices/accounts/deployments@2024-04-01-preview' = [for model in models: { ... }]`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `resource deployments 'Microsoft.CognitiveServices/accounts/deployments@2024-04-01-preview' = [for model in models: { ... }]`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `infra/main.parameters.json` & `abbreviations.json``, Writing `resource deployments 'Microsoft.CognitiveServices/accounts/deployments@2024-04-01-preview' = [for model in models: { ... }]`. is the officially required syntax for `parameterizing model deployments inside Bicep loops`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2680,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Tailwind Traders Multi-Agent` implementing `AZD CLI Command Flags (`azd up`, `azd down`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `parameterizing model deployments inside Bicep loops` (Implementation Task #80).",
    "question": "[MOD Coding Task #80] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `AZD CLI Command Flags (`azd up`, `azd down`)` for `parameterizing model deployments inside Bicep loops`? (Select three)",
    "options": [
      "A) Writing `resource deployments 'Microsoft.CognitiveServices/accounts/deployments@2024-04-01-preview' = [for model in models: { ... }]`.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `AZD CLI Command Flags (`azd up`, `azd down`)` for `parameterizing model deployments inside Bicep loops`, enterprise coding standards mandate: (1) Writing `resource deployments 'Microsoft.CognitiveServices/accounts/deployments@2024-04-01-preview' = [for model in models: { ... }]`., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2681,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Adventure Works Core Hub` implementing `Bicep `Microsoft.MachineLearningServices/workspaces``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `storing state securely in Azure Blob backend via AZD` (Implementation Task #81).",
    "question": "[MOD Coding Task #81] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.MachineLearningServices/workspaces`` when implementing `storing state securely in Azure Blob backend via AZD`?",
    "options": [
      "A) Executing `azd config set state.backend azure` and defining remote storage account connection variables.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Executing `azd config set state.backend azure` and defining remote storage account connection variables.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.MachineLearningServices/workspaces``, Executing `azd config set state.backend azure` and defining remote storage account connection variables. is the officially required syntax for `storing state securely in Azure Blob backend via AZD`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2682,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Contoso Health AI` implementing `Bicep `Microsoft.CognitiveServices/accounts``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `storing state securely in Azure Blob backend via AZD` (Implementation Task #82).",
    "question": "[MOD Coding Task #82] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.CognitiveServices/accounts`` when implementing `storing state securely in Azure Blob backend via AZD`?",
    "options": [
      "A) Executing `azd config set state.backend azure` and defining remote storage account connection variables.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Executing `azd config set state.backend azure` and defining remote storage account connection variables.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.CognitiveServices/accounts``, Executing `azd config set state.backend azure` and defining remote storage account connection variables. is the officially required syntax for `storing state securely in Azure Blob backend via AZD`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2683,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Fabrikam Logistics Agent` implementing `Bicep `Microsoft.KeyVault/vaults``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `storing state securely in Azure Blob backend via AZD` (Implementation Task #83).",
    "question": "[MOD Coding Task #83] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.KeyVault/vaults`` when implementing `storing state securely in Azure Blob backend via AZD`?",
    "options": [
      "A) Executing `azd config set state.backend azure` and defining remote storage account connection variables.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Executing `azd config set state.backend azure` and defining remote storage account connection variables.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.KeyVault/vaults``, Executing `azd config set state.backend azure` and defining remote storage account connection variables. is the officially required syntax for `storing state securely in Azure Blob backend via AZD`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2684,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Trey Research Lab` implementing `Bicep `Microsoft.Storage/storageAccounts``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `storing state securely in Azure Blob backend via AZD` (Implementation Task #84).",
    "question": "[MOD Coding Task #84] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Bicep `Microsoft.Storage/storageAccounts`` for `storing state securely in Azure Blob backend via AZD`? (Select three)",
    "options": [
      "A) Executing `azd config set state.backend azure` and defining remote storage account connection variables.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Bicep `Microsoft.Storage/storageAccounts`` for `storing state securely in Azure Blob backend via AZD`, enterprise coding standards mandate: (1) Executing `azd config set state.backend azure` and defining remote storage account connection variables., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2685,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Northwind Traders Bot` implementing `Bicep `Microsoft.OperationalInsights/workspaces``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `storing state securely in Azure Blob backend via AZD` (Implementation Task #85).",
    "question": "[MOD Coding Task #85] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.OperationalInsights/workspaces`` when implementing `storing state securely in Azure Blob backend via AZD`?",
    "options": [
      "A) Executing `azd config set state.backend azure` and defining remote storage account connection variables.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Executing `azd config set state.backend azure` and defining remote storage account connection variables.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.OperationalInsights/workspaces``, Executing `azd config set state.backend azure` and defining remote storage account connection variables. is the officially required syntax for `storing state securely in Azure Blob backend via AZD`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2686,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Woodgrove Bank Virtual Assistant` implementing `Bicep `Microsoft.Insights/components``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `storing state securely in Azure Blob backend via AZD` (Implementation Task #86).",
    "question": "[MOD Coding Task #86] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.Insights/components`` when implementing `storing state securely in Azure Blob backend via AZD`?",
    "options": [
      "A) Executing `azd config set state.backend azure` and defining remote storage account connection variables.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Executing `azd config set state.backend azure` and defining remote storage account connection variables.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.Insights/components``, Executing `azd config set state.backend azure` and defining remote storage account connection variables. is the officially required syntax for `storing state securely in Azure Blob backend via AZD`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2687,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Litware Legal Evaluator` implementing `Bicep `Microsoft.Network/privateEndpoints``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `storing state securely in Azure Blob backend via AZD` (Implementation Task #87).",
    "question": "[MOD Coding Task #87] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.Network/privateEndpoints`` when implementing `storing state securely in Azure Blob backend via AZD`?",
    "options": [
      "A) Executing `azd config set state.backend azure` and defining remote storage account connection variables.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Executing `azd config set state.backend azure` and defining remote storage account connection variables.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.Network/privateEndpoints``, Executing `azd config set state.backend azure` and defining remote storage account connection variables. is the officially required syntax for `storing state securely in Azure Blob backend via AZD`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2688,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `A.Datum Retail Copilot` implementing `AZD `azure.yaml` Root Orchestration File`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `storing state securely in Azure Blob backend via AZD` (Implementation Task #88).",
    "question": "[MOD Coding Task #88] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `AZD `azure.yaml` Root Orchestration File` for `storing state securely in Azure Blob backend via AZD`? (Select three)",
    "options": [
      "A) Executing `azd config set state.backend azure` and defining remote storage account connection variables.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `AZD `azure.yaml` Root Orchestration File` for `storing state securely in Azure Blob backend via AZD`, enterprise coding standards mandate: (1) Executing `azd config set state.backend azure` and defining remote storage account connection variables., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2689,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Alpine Ski Field Technician` implementing `Bicep `infra/main.parameters.json` & `abbreviations.json``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `storing state securely in Azure Blob backend via AZD` (Implementation Task #89).",
    "question": "[MOD Coding Task #89] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `infra/main.parameters.json` & `abbreviations.json`` when implementing `storing state securely in Azure Blob backend via AZD`?",
    "options": [
      "A) Executing `azd config set state.backend azure` and defining remote storage account connection variables.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Executing `azd config set state.backend azure` and defining remote storage account connection variables.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `infra/main.parameters.json` & `abbreviations.json``, Executing `azd config set state.backend azure` and defining remote storage account connection variables. is the officially required syntax for `storing state securely in Azure Blob backend via AZD`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2690,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Tailwind Traders Multi-Agent` implementing `AZD CLI Command Flags (`azd up`, `azd down`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `storing state securely in Azure Blob backend via AZD` (Implementation Task #90).",
    "question": "[MOD Coding Task #90] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `AZD CLI Command Flags (`azd up`, `azd down`)` when implementing `storing state securely in Azure Blob backend via AZD`?",
    "options": [
      "A) Executing `azd config set state.backend azure` and defining remote storage account connection variables.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Executing `azd config set state.backend azure` and defining remote storage account connection variables.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `AZD CLI Command Flags (`azd up`, `azd down`)`, Executing `azd config set state.backend azure` and defining remote storage account connection variables. is the officially required syntax for `storing state securely in Azure Blob backend via AZD`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2691,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Adventure Works Core Hub` implementing `Bicep `Microsoft.MachineLearningServices/workspaces``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `configuring cost alerting action groups in Bicep` (Implementation Task #91).",
    "question": "[MOD Coding Task #91] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.MachineLearningServices/workspaces`` when implementing `configuring cost alerting action groups in Bicep`?",
    "options": [
      "A) Creating `Microsoft.Consumption/budgets` with `notifications: { ContactEmails: [...] }` triggered when threshold reaches 80%.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Creating `Microsoft.Consumption/budgets` with `notifications: { ContactEmails: [...] }` triggered when threshold reaches 80%.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.MachineLearningServices/workspaces``, Creating `Microsoft.Consumption/budgets` with `notifications: { ContactEmails: [...] }` triggered when threshold reaches 80%. is the officially required syntax for `configuring cost alerting action groups in Bicep`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2692,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Contoso Health AI` implementing `Bicep `Microsoft.CognitiveServices/accounts``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `configuring cost alerting action groups in Bicep` (Implementation Task #92).",
    "question": "[MOD Coding Task #92] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Bicep `Microsoft.CognitiveServices/accounts`` for `configuring cost alerting action groups in Bicep`? (Select three)",
    "options": [
      "A) Creating `Microsoft.Consumption/budgets` with `notifications: { ContactEmails: [...] }` triggered when threshold reaches 80%.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Bicep `Microsoft.CognitiveServices/accounts`` for `configuring cost alerting action groups in Bicep`, enterprise coding standards mandate: (1) Creating `Microsoft.Consumption/budgets` with `notifications: { ContactEmails: [...] }` triggered when threshold reaches 80%., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2693,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Fabrikam Logistics Agent` implementing `Bicep `Microsoft.KeyVault/vaults``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `configuring cost alerting action groups in Bicep` (Implementation Task #93).",
    "question": "[MOD Coding Task #93] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.KeyVault/vaults`` when implementing `configuring cost alerting action groups in Bicep`?",
    "options": [
      "A) Creating `Microsoft.Consumption/budgets` with `notifications: { ContactEmails: [...] }` triggered when threshold reaches 80%.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Creating `Microsoft.Consumption/budgets` with `notifications: { ContactEmails: [...] }` triggered when threshold reaches 80%.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.KeyVault/vaults``, Creating `Microsoft.Consumption/budgets` with `notifications: { ContactEmails: [...] }` triggered when threshold reaches 80%. is the officially required syntax for `configuring cost alerting action groups in Bicep`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2694,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Trey Research Lab` implementing `Bicep `Microsoft.Storage/storageAccounts``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `configuring cost alerting action groups in Bicep` (Implementation Task #94).",
    "question": "[MOD Coding Task #94] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.Storage/storageAccounts`` when implementing `configuring cost alerting action groups in Bicep`?",
    "options": [
      "A) Creating `Microsoft.Consumption/budgets` with `notifications: { ContactEmails: [...] }` triggered when threshold reaches 80%.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Creating `Microsoft.Consumption/budgets` with `notifications: { ContactEmails: [...] }` triggered when threshold reaches 80%.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.Storage/storageAccounts``, Creating `Microsoft.Consumption/budgets` with `notifications: { ContactEmails: [...] }` triggered when threshold reaches 80%. is the officially required syntax for `configuring cost alerting action groups in Bicep`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2695,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Northwind Traders Bot` implementing `Bicep `Microsoft.OperationalInsights/workspaces``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `configuring cost alerting action groups in Bicep` (Implementation Task #95).",
    "question": "[MOD Coding Task #95] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.OperationalInsights/workspaces`` when implementing `configuring cost alerting action groups in Bicep`?",
    "options": [
      "A) Creating `Microsoft.Consumption/budgets` with `notifications: { ContactEmails: [...] }` triggered when threshold reaches 80%.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Creating `Microsoft.Consumption/budgets` with `notifications: { ContactEmails: [...] }` triggered when threshold reaches 80%.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.OperationalInsights/workspaces``, Creating `Microsoft.Consumption/budgets` with `notifications: { ContactEmails: [...] }` triggered when threshold reaches 80%. is the officially required syntax for `configuring cost alerting action groups in Bicep`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2696,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Woodgrove Bank Virtual Assistant` implementing `Bicep `Microsoft.Insights/components``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `configuring cost alerting action groups in Bicep` (Implementation Task #96).",
    "question": "[MOD Coding Task #96] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Bicep `Microsoft.Insights/components`` for `configuring cost alerting action groups in Bicep`? (Select three)",
    "options": [
      "A) Creating `Microsoft.Consumption/budgets` with `notifications: { ContactEmails: [...] }` triggered when threshold reaches 80%.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Bicep `Microsoft.Insights/components`` for `configuring cost alerting action groups in Bicep`, enterprise coding standards mandate: (1) Creating `Microsoft.Consumption/budgets` with `notifications: { ContactEmails: [...] }` triggered when threshold reaches 80%., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2697,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Litware Legal Evaluator` implementing `Bicep `Microsoft.Network/privateEndpoints``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `configuring cost alerting action groups in Bicep` (Implementation Task #97).",
    "question": "[MOD Coding Task #97] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `Microsoft.Network/privateEndpoints`` when implementing `configuring cost alerting action groups in Bicep`?",
    "options": [
      "A) Creating `Microsoft.Consumption/budgets` with `notifications: { ContactEmails: [...] }` triggered when threshold reaches 80%.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Creating `Microsoft.Consumption/budgets` with `notifications: { ContactEmails: [...] }` triggered when threshold reaches 80%.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `Microsoft.Network/privateEndpoints``, Creating `Microsoft.Consumption/budgets` with `notifications: { ContactEmails: [...] }` triggered when threshold reaches 80%. is the officially required syntax for `configuring cost alerting action groups in Bicep`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2698,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `A.Datum Retail Copilot` implementing `AZD `azure.yaml` Root Orchestration File`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `configuring cost alerting action groups in Bicep` (Implementation Task #98).",
    "question": "[MOD Coding Task #98] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `AZD `azure.yaml` Root Orchestration File` when implementing `configuring cost alerting action groups in Bicep`?",
    "options": [
      "A) Creating `Microsoft.Consumption/budgets` with `notifications: { ContactEmails: [...] }` triggered when threshold reaches 80%.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Creating `Microsoft.Consumption/budgets` with `notifications: { ContactEmails: [...] }` triggered when threshold reaches 80%.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `AZD `azure.yaml` Root Orchestration File`, Creating `Microsoft.Consumption/budgets` with `notifications: { ContactEmails: [...] }` triggered when threshold reaches 80%. is the officially required syntax for `configuring cost alerting action groups in Bicep`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2699,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Alpine Ski Field Technician` implementing `Bicep `infra/main.parameters.json` & `abbreviations.json``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `configuring cost alerting action groups in Bicep` (Implementation Task #99).",
    "question": "[MOD Coding Task #99] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Bicep `infra/main.parameters.json` & `abbreviations.json`` when implementing `configuring cost alerting action groups in Bicep`?",
    "options": [
      "A) Creating `Microsoft.Consumption/budgets` with `notifications: { ContactEmails: [...] }` triggered when threshold reaches 80%.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Creating `Microsoft.Consumption/budgets` with `notifications: { ContactEmails: [...] }` triggered when threshold reaches 80%.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Bicep `infra/main.parameters.json` & `abbreviations.json``, Creating `Microsoft.Consumption/budgets` with `notifications: { ContactEmails: [...] }` triggered when threshold reaches 80%. is the officially required syntax for `configuring cost alerting action groups in Bicep`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2700,
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Tailwind Traders Multi-Agent` implementing `AZD CLI Command Flags (`azd up`, `azd down`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `configuring cost alerting action groups in Bicep` (Implementation Task #100).",
    "question": "[MOD Coding Task #100] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `AZD CLI Command Flags (`azd up`, `azd down`)` for `configuring cost alerting action groups in Bicep`? (Select three)",
    "options": [
      "A) Creating `Microsoft.Consumption/budgets` with `notifications: { ContactEmails: [...] }` triggered when threshold reaches 80%.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `AZD CLI Command Flags (`azd up`, `azd down`)` for `configuring cost alerting action groups in Bicep`, enterprise coding standards mandate: (1) Creating `Microsoft.Consumption/budgets` with `notifications: { ContactEmails: [...] }` triggered when threshold reaches 80%., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  }
];
