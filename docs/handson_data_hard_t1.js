// AI-300 Hands-On Enterprise Implementation Simulator (HARD Tier - Track 1: Bicep IaC & AZD Infrastructure Provisioning)
window.HANDSON_DATA_HARD_T1 = [
  {
    "id": 3201,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "In the Adventure Works Trail Guide project (iteration #1), an MLOps engineer executes `azd up` to provision cloud resources. The deployment fails during the Azure AI Foundry hub creation in `infra/main.bicep` with error code `AccountNameAlreadyExists`.",
    "question": "Which Bicep parameterization best practice or naming convention from `infra/abbreviations.json` solves this global DNS naming collision?",
    "options": [
      "Append `uniqueString(resourceGroup().id)` to the `abbreviations.aiAccount` prefix when declaring the resource name in `main.bicep`.",
      "Hardcode a random 4-digit integer in `main.parameters.json` under `environmentName` without using `uniqueString()`.",
      "Change the target Azure region in `azure.yaml` to a paired secondary region.",
      "Set the `publicNetworkAccess` parameter to `Disabled` in the Cognitive Services Bicep module."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In Azure AI Foundry and Cognitive Services, hub names must be globally unique. Using Bicep's `uniqueString(resourceGroup().id)` concatenated with `abbreviations.json` prefixes ensures deterministically unique names per environment without manual intervention."
  },
  {
    "id": 3202,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "During automated tear-down of test environment `env-test-1`, the DevOps team runs `azd down`. However, the next deployment fails because the Cognitive Services account is locked in a soft-delete recovery state.",
    "question": "Which exact Azure Developer CLI (`azd`) command flag must be executed to permanently bypass the 90-day soft-delete retention period?",
    "options": [
      "azd down --force --purge",
      "azd down --delete-all --no-wait",
      "az group delete --name rg-env-test --yes --no-wait",
      "azd provision --reset-quota --purge"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Standard `azd down` or `az group delete` places Cognitive Services and Azure Key Vault into soft-delete state. Executing `azd down --force --purge` instructs the Azure Developer CLI to permanently purge soft-deleted resources immediately."
  },
  {
    "id": 3203,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "You are reviewing `infra/core/ai/project.bicep` for the Trail Guide GenAIOps setup (#1). The project must automatically link to an existing Azure Log Analytics workspace and Application Insights instance for OpenTelemetry tracing.",
    "question": "Which Bicep property block within the `Microsoft.MachineLearningServices/workspaces` resource correctly establishes the Application Insights dependency?",
    "options": [
      "applicationInsights: applicationInsights.id",
      "monitoringWorkspace: logAnalyticsWorkspace.properties.customerId",
      "telemetryConfig: { instrumentationKey: applicationInsights.properties.InstrumentationKey }",
      "diagnosticSettings: { workspaceId: logAnalyticsWorkspace.id }"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In Azure AI Foundry project declarations (`Microsoft.MachineLearningServices/workspaces`), linking observability requires setting the `applicationInsights` property directly to the resource ID (`applicationInsights.id`) of the Application Insights instance."
  },
  {
    "id": 3204,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "An MLOps engineer is configuring `azure.yaml` for multi-environment provisioning (Development, Staging, Production #1). They need `azd` to pass custom tag values to `infra/main.bicep` during pipeline execution.",
    "question": "How should custom environment variables be passed into Bicep parameters using `azd` configuration?",
    "options": [
      "Define them in `.azure/environment/api.env` or use `azd env set <PARAM_NAME> <VALUE>`, which automatically maps to Bicep parameters of matching names.",
      "Modify the `azure.yaml` file to include a `bicepParameters` array with hardcoded plain text values.",
      "Pass them as command-line arguments using `azd up --bicep-arg param=value`.",
      "Write a custom shell script to replace tokens inside `main.parameters.json` before calling `azd provision`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: The Azure Developer CLI (`azd`) automatically maps environment variables set via `azd env set` (stored in `.azure/<env>/.env`) to Bicep parameters of the exact same name during `azd provision`."
  },
  {
    "id": 3205,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "In `infra/main.bicep` (#1), you need to deploy an Azure OpenAI model deployment (`gpt-5.1`) with a specific token capacity (PTU/PTM or Standard TPM rate limits).",
    "question": "Which resource type and SKU configuration syntax is required inside the model deployment module?",
    "options": [
      "resource modelDeployment 'Microsoft.CognitiveServices/accounts/deployments@2023-05-01' = { sku: { name: 'Standard', capacity: 30 } ... }",
      "resource modelDeployment 'Microsoft.MachineLearningServices/workspaces/models@2023-08-01-preview' = { properties: { tpmLimit: 30000 } ... }",
      "resource openai 'Microsoft.AI/foundry/models@2024-01-01' = { capacity: '30k-tokens' }",
      "resource deployment 'Microsoft.OpenAI/endpoints/deployments@2023-10-01' = { rateLimit: 3000 }"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Azure OpenAI model deployments are declared as child resources under `Microsoft.CognitiveServices/accounts/deployments`. The rate limit (in thousands of TPM) is controlled by the `sku.capacity` integer property."
  },
  {
    "id": 3206,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "A security audit of Trail Guide environment #1 reveals that the Azure AI Foundry storage account allows public blob access. You must enforce private endpoint isolation in Bicep.",
    "question": "Which two Bicep properties must be set on the `Microsoft.Storage/storageAccounts` resource to disable public internet access?",
    "options": [
      "publicNetworkAccess: 'Disabled' and allowBlobPublicAccess: false",
      "networkRuleSet: { defaultAction: 'Deny' } and encryption: { services: { blob: { enabled: true } } }",
      "privateEndpointConnections: [ { properties: { privateLinkServiceConnectionState: { status: 'Approved' } } } ]",
      "firewallRules: [ { ipAddressOrRange: '10.0.0.0/16' } ] and requireHttpsTrafficOnly: true"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: To fully lock down an Azure Storage Account against public internet exposure in Bicep, explicitly set `publicNetworkAccess: 'Disabled'` and `allowBlobPublicAccess: false`."
  },
  {
    "id": 3207,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "During CI/CD automated deployment #1, Bicep deployment fails with `PrincipalNotFound` when assigning the `Cognitive Services OpenAI User` role to the Trail Guide managed identity.",
    "question": "Why does role assignment fail immediately after managed identity creation, and how should it be fixed in Bicep?",
    "options": [
      "Azure AD / Entra ID propagation delay; fix by adding `dependsOn: [ identity ]` and setting `principalType: 'ServicePrincipal'` in the role assignment.",
      "The role definition ID is incorrect; replace it with the GUID for Owner role.",
      "Managed identities cannot be assigned roles in Bicep; assign via Azure CLI post-deployment.",
      "The Bicep API version is deprecated; upgrade `Microsoft.Authorization/roleAssignments` to `2015-07-01`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: When creating a user-assigned identity and assigning roles in the same Bicep template, Entra ID replication lag can cause `PrincipalNotFound`. Setting `principalType: 'ServicePrincipal'` helps Azure Resource Manager retry appropriately."
  },
  {
    "id": 3208,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "You are building a custom Bicep module `infra/core/search/ai-search.bicep` (#1) to host the vector database for Trail Guide RAG grounding.",
    "question": "Which SKU name is the minimum required in Azure AI Search to support vector search with semantic hybrid ranking?",
    "options": [
      "'basic' or 'standard' (Free tier does not support semantic ranking scalable vector index storage)",
      "'free' (supports unlimited vector dimensions and semantic ranking)",
      "'storage_optimized_l1' only",
      "'premium_p3' only"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: While Basic tier supports vector search, semantic ranking and enterprise vector scaling require at least Basic or Standard tier in Azure AI Search. Free tier lacks necessary capacity."
  },
  {
    "id": 3209,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "An MLOps engineer wants to modularize `infra/main.bicep` (#1) so that the monitoring stack (Log Analytics + App Insights) is deployed only if `enableMonitoring` parameter is true.",
    "question": "Which Bicep conditional deployment syntax is correct for module invocation?",
    "options": [
      "module monitoring 'core/monitor/monitoring.bicep' = if (enableMonitoring) { name: 'monitor-deploy', params: { ... } }",
      "if (enableMonitoring) { module monitoring 'core/monitor/monitoring.bicep' = { ... } }",
      "module monitoring 'core/monitor/monitoring.bicep' ? { ... } : null",
      "resource monitoring 'core/monitor/monitoring.bicep' = [for item in enableMonitoring: { ... }]"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In Bicep, conditional deployment of a module or resource is written using the `= if (condition)` syntax directly after the module declaration string."
  },
  {
    "id": 3210,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "You are configuring Key Vault access policy in `infra/core/security/keyvault.bicep` (#1) for Azure AI Foundry secrets encryption.",
    "question": "Which modern Azure best practice should replace legacy access policies in enterprise Bicep templates?",
    "options": [
      "Set `enableRbacAuthorization: true` on Key Vault and assign Entra ID RBAC roles (e.g., Key Vault Secrets Officer).",
      "Use Key Vault Access Policies with wildcard permissions (`secrets: [ 'all' ]`).",
      "Store secrets directly in `azure.yaml` plaintext environment variables.",
      "Disable Key Vault firewall and allow all networks."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Modern Azure enterprise architecture mandates setting `enableRbacAuthorization: true` on Azure Key Vaults, replacing legacy access policies with granular Azure RBAC roles."
  },
  {
    "id": 3211,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "In the Adventure Works Trail Guide project (iteration #2), an MLOps engineer executes `azd up` to provision cloud resources. The deployment fails during the Azure AI Foundry hub creation in `infra/main.bicep` with error code `AccountNameAlreadyExists`.",
    "question": "Which Bicep parameterization best practice or naming convention from `infra/abbreviations.json` solves this global DNS naming collision?",
    "options": [
      "Append `uniqueString(resourceGroup().id)` to the `abbreviations.aiAccount` prefix when declaring the resource name in `main.bicep`.",
      "Hardcode a random 4-digit integer in `main.parameters.json` under `environmentName` without using `uniqueString()`.",
      "Change the target Azure region in `azure.yaml` to a paired secondary region.",
      "Set the `publicNetworkAccess` parameter to `Disabled` in the Cognitive Services Bicep module."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In Azure AI Foundry and Cognitive Services, hub names must be globally unique. Using Bicep's `uniqueString(resourceGroup().id)` concatenated with `abbreviations.json` prefixes ensures deterministically unique names per environment without manual intervention."
  },
  {
    "id": 3212,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "During automated tear-down of test environment `env-test-2`, the DevOps team runs `azd down`. However, the next deployment fails because the Cognitive Services account is locked in a soft-delete recovery state.",
    "question": "Which exact Azure Developer CLI (`azd`) command flag must be executed to permanently bypass the 90-day soft-delete retention period?",
    "options": [
      "azd down --force --purge",
      "azd down --delete-all --no-wait",
      "az group delete --name rg-env-test --yes --no-wait",
      "azd provision --reset-quota --purge"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Standard `azd down` or `az group delete` places Cognitive Services and Azure Key Vault into soft-delete state. Executing `azd down --force --purge` instructs the Azure Developer CLI to permanently purge soft-deleted resources immediately."
  },
  {
    "id": 3213,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "You are reviewing `infra/core/ai/project.bicep` for the Trail Guide GenAIOps setup (#2). The project must automatically link to an existing Azure Log Analytics workspace and Application Insights instance for OpenTelemetry tracing.",
    "question": "Which Bicep property block within the `Microsoft.MachineLearningServices/workspaces` resource correctly establishes the Application Insights dependency?",
    "options": [
      "applicationInsights: applicationInsights.id",
      "monitoringWorkspace: logAnalyticsWorkspace.properties.customerId",
      "telemetryConfig: { instrumentationKey: applicationInsights.properties.InstrumentationKey }",
      "diagnosticSettings: { workspaceId: logAnalyticsWorkspace.id }"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In Azure AI Foundry project declarations (`Microsoft.MachineLearningServices/workspaces`), linking observability requires setting the `applicationInsights` property directly to the resource ID (`applicationInsights.id`) of the Application Insights instance."
  },
  {
    "id": 3214,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "An MLOps engineer is configuring `azure.yaml` for multi-environment provisioning (Development, Staging, Production #2). They need `azd` to pass custom tag values to `infra/main.bicep` during pipeline execution.",
    "question": "How should custom environment variables be passed into Bicep parameters using `azd` configuration?",
    "options": [
      "Define them in `.azure/environment/api.env` or use `azd env set <PARAM_NAME> <VALUE>`, which automatically maps to Bicep parameters of matching names.",
      "Modify the `azure.yaml` file to include a `bicepParameters` array with hardcoded plain text values.",
      "Pass them as command-line arguments using `azd up --bicep-arg param=value`.",
      "Write a custom shell script to replace tokens inside `main.parameters.json` before calling `azd provision`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: The Azure Developer CLI (`azd`) automatically maps environment variables set via `azd env set` (stored in `.azure/<env>/.env`) to Bicep parameters of the exact same name during `azd provision`."
  },
  {
    "id": 3215,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "In `infra/main.bicep` (#2), you need to deploy an Azure OpenAI model deployment (`gpt-5.1`) with a specific token capacity (PTU/PTM or Standard TPM rate limits).",
    "question": "Which resource type and SKU configuration syntax is required inside the model deployment module?",
    "options": [
      "resource modelDeployment 'Microsoft.CognitiveServices/accounts/deployments@2023-05-01' = { sku: { name: 'Standard', capacity: 30 } ... }",
      "resource modelDeployment 'Microsoft.MachineLearningServices/workspaces/models@2023-08-01-preview' = { properties: { tpmLimit: 30000 } ... }",
      "resource openai 'Microsoft.AI/foundry/models@2024-01-01' = { capacity: '30k-tokens' }",
      "resource deployment 'Microsoft.OpenAI/endpoints/deployments@2023-10-01' = { rateLimit: 3000 }"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Azure OpenAI model deployments are declared as child resources under `Microsoft.CognitiveServices/accounts/deployments`. The rate limit (in thousands of TPM) is controlled by the `sku.capacity` integer property."
  },
  {
    "id": 3216,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "A security audit of Trail Guide environment #2 reveals that the Azure AI Foundry storage account allows public blob access. You must enforce private endpoint isolation in Bicep.",
    "question": "Which two Bicep properties must be set on the `Microsoft.Storage/storageAccounts` resource to disable public internet access?",
    "options": [
      "publicNetworkAccess: 'Disabled' and allowBlobPublicAccess: false",
      "networkRuleSet: { defaultAction: 'Deny' } and encryption: { services: { blob: { enabled: true } } }",
      "privateEndpointConnections: [ { properties: { privateLinkServiceConnectionState: { status: 'Approved' } } } ]",
      "firewallRules: [ { ipAddressOrRange: '10.0.0.0/16' } ] and requireHttpsTrafficOnly: true"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: To fully lock down an Azure Storage Account against public internet exposure in Bicep, explicitly set `publicNetworkAccess: 'Disabled'` and `allowBlobPublicAccess: false`."
  },
  {
    "id": 3217,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "During CI/CD automated deployment #2, Bicep deployment fails with `PrincipalNotFound` when assigning the `Cognitive Services OpenAI User` role to the Trail Guide managed identity.",
    "question": "Why does role assignment fail immediately after managed identity creation, and how should it be fixed in Bicep?",
    "options": [
      "Azure AD / Entra ID propagation delay; fix by adding `dependsOn: [ identity ]` and setting `principalType: 'ServicePrincipal'` in the role assignment.",
      "The role definition ID is incorrect; replace it with the GUID for Owner role.",
      "Managed identities cannot be assigned roles in Bicep; assign via Azure CLI post-deployment.",
      "The Bicep API version is deprecated; upgrade `Microsoft.Authorization/roleAssignments` to `2015-07-01`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: When creating a user-assigned identity and assigning roles in the same Bicep template, Entra ID replication lag can cause `PrincipalNotFound`. Setting `principalType: 'ServicePrincipal'` helps Azure Resource Manager retry appropriately."
  },
  {
    "id": 3218,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "You are building a custom Bicep module `infra/core/search/ai-search.bicep` (#2) to host the vector database for Trail Guide RAG grounding.",
    "question": "Which SKU name is the minimum required in Azure AI Search to support vector search with semantic hybrid ranking?",
    "options": [
      "'basic' or 'standard' (Free tier does not support semantic ranking scalable vector index storage)",
      "'free' (supports unlimited vector dimensions and semantic ranking)",
      "'storage_optimized_l1' only",
      "'premium_p3' only"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: While Basic tier supports vector search, semantic ranking and enterprise vector scaling require at least Basic or Standard tier in Azure AI Search. Free tier lacks necessary capacity."
  },
  {
    "id": 3219,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "An MLOps engineer wants to modularize `infra/main.bicep` (#2) so that the monitoring stack (Log Analytics + App Insights) is deployed only if `enableMonitoring` parameter is true.",
    "question": "Which Bicep conditional deployment syntax is correct for module invocation?",
    "options": [
      "module monitoring 'core/monitor/monitoring.bicep' = if (enableMonitoring) { name: 'monitor-deploy', params: { ... } }",
      "if (enableMonitoring) { module monitoring 'core/monitor/monitoring.bicep' = { ... } }",
      "module monitoring 'core/monitor/monitoring.bicep' ? { ... } : null",
      "resource monitoring 'core/monitor/monitoring.bicep' = [for item in enableMonitoring: { ... }]"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In Bicep, conditional deployment of a module or resource is written using the `= if (condition)` syntax directly after the module declaration string."
  },
  {
    "id": 3220,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "You are configuring Key Vault access policy in `infra/core/security/keyvault.bicep` (#2) for Azure AI Foundry secrets encryption.",
    "question": "Which modern Azure best practice should replace legacy access policies in enterprise Bicep templates?",
    "options": [
      "Set `enableRbacAuthorization: true` on Key Vault and assign Entra ID RBAC roles (e.g., Key Vault Secrets Officer).",
      "Use Key Vault Access Policies with wildcard permissions (`secrets: [ 'all' ]`).",
      "Store secrets directly in `azure.yaml` plaintext environment variables.",
      "Disable Key Vault firewall and allow all networks."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Modern Azure enterprise architecture mandates setting `enableRbacAuthorization: true` on Azure Key Vaults, replacing legacy access policies with granular Azure RBAC roles."
  },
  {
    "id": 3221,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "In the Adventure Works Trail Guide project (iteration #3), an MLOps engineer executes `azd up` to provision cloud resources. The deployment fails during the Azure AI Foundry hub creation in `infra/main.bicep` with error code `AccountNameAlreadyExists`.",
    "question": "Which Bicep parameterization best practice or naming convention from `infra/abbreviations.json` solves this global DNS naming collision?",
    "options": [
      "Append `uniqueString(resourceGroup().id)` to the `abbreviations.aiAccount` prefix when declaring the resource name in `main.bicep`.",
      "Hardcode a random 4-digit integer in `main.parameters.json` under `environmentName` without using `uniqueString()`.",
      "Change the target Azure region in `azure.yaml` to a paired secondary region.",
      "Set the `publicNetworkAccess` parameter to `Disabled` in the Cognitive Services Bicep module."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In Azure AI Foundry and Cognitive Services, hub names must be globally unique. Using Bicep's `uniqueString(resourceGroup().id)` concatenated with `abbreviations.json` prefixes ensures deterministically unique names per environment without manual intervention."
  },
  {
    "id": 3222,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "During automated tear-down of test environment `env-test-3`, the DevOps team runs `azd down`. However, the next deployment fails because the Cognitive Services account is locked in a soft-delete recovery state.",
    "question": "Which exact Azure Developer CLI (`azd`) command flag must be executed to permanently bypass the 90-day soft-delete retention period?",
    "options": [
      "azd down --force --purge",
      "azd down --delete-all --no-wait",
      "az group delete --name rg-env-test --yes --no-wait",
      "azd provision --reset-quota --purge"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Standard `azd down` or `az group delete` places Cognitive Services and Azure Key Vault into soft-delete state. Executing `azd down --force --purge` instructs the Azure Developer CLI to permanently purge soft-deleted resources immediately."
  },
  {
    "id": 3223,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "You are reviewing `infra/core/ai/project.bicep` for the Trail Guide GenAIOps setup (#3). The project must automatically link to an existing Azure Log Analytics workspace and Application Insights instance for OpenTelemetry tracing.",
    "question": "Which Bicep property block within the `Microsoft.MachineLearningServices/workspaces` resource correctly establishes the Application Insights dependency?",
    "options": [
      "applicationInsights: applicationInsights.id",
      "monitoringWorkspace: logAnalyticsWorkspace.properties.customerId",
      "telemetryConfig: { instrumentationKey: applicationInsights.properties.InstrumentationKey }",
      "diagnosticSettings: { workspaceId: logAnalyticsWorkspace.id }"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In Azure AI Foundry project declarations (`Microsoft.MachineLearningServices/workspaces`), linking observability requires setting the `applicationInsights` property directly to the resource ID (`applicationInsights.id`) of the Application Insights instance."
  },
  {
    "id": 3224,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "An MLOps engineer is configuring `azure.yaml` for multi-environment provisioning (Development, Staging, Production #3). They need `azd` to pass custom tag values to `infra/main.bicep` during pipeline execution.",
    "question": "How should custom environment variables be passed into Bicep parameters using `azd` configuration?",
    "options": [
      "Define them in `.azure/environment/api.env` or use `azd env set <PARAM_NAME> <VALUE>`, which automatically maps to Bicep parameters of matching names.",
      "Modify the `azure.yaml` file to include a `bicepParameters` array with hardcoded plain text values.",
      "Pass them as command-line arguments using `azd up --bicep-arg param=value`.",
      "Write a custom shell script to replace tokens inside `main.parameters.json` before calling `azd provision`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: The Azure Developer CLI (`azd`) automatically maps environment variables set via `azd env set` (stored in `.azure/<env>/.env`) to Bicep parameters of the exact same name during `azd provision`."
  },
  {
    "id": 3225,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "In `infra/main.bicep` (#3), you need to deploy an Azure OpenAI model deployment (`gpt-5.1`) with a specific token capacity (PTU/PTM or Standard TPM rate limits).",
    "question": "Which resource type and SKU configuration syntax is required inside the model deployment module?",
    "options": [
      "resource modelDeployment 'Microsoft.CognitiveServices/accounts/deployments@2023-05-01' = { sku: { name: 'Standard', capacity: 30 } ... }",
      "resource modelDeployment 'Microsoft.MachineLearningServices/workspaces/models@2023-08-01-preview' = { properties: { tpmLimit: 30000 } ... }",
      "resource openai 'Microsoft.AI/foundry/models@2024-01-01' = { capacity: '30k-tokens' }",
      "resource deployment 'Microsoft.OpenAI/endpoints/deployments@2023-10-01' = { rateLimit: 3000 }"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Azure OpenAI model deployments are declared as child resources under `Microsoft.CognitiveServices/accounts/deployments`. The rate limit (in thousands of TPM) is controlled by the `sku.capacity` integer property."
  },
  {
    "id": 3226,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "A security audit of Trail Guide environment #3 reveals that the Azure AI Foundry storage account allows public blob access. You must enforce private endpoint isolation in Bicep.",
    "question": "Which two Bicep properties must be set on the `Microsoft.Storage/storageAccounts` resource to disable public internet access?",
    "options": [
      "publicNetworkAccess: 'Disabled' and allowBlobPublicAccess: false",
      "networkRuleSet: { defaultAction: 'Deny' } and encryption: { services: { blob: { enabled: true } } }",
      "privateEndpointConnections: [ { properties: { privateLinkServiceConnectionState: { status: 'Approved' } } } ]",
      "firewallRules: [ { ipAddressOrRange: '10.0.0.0/16' } ] and requireHttpsTrafficOnly: true"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: To fully lock down an Azure Storage Account against public internet exposure in Bicep, explicitly set `publicNetworkAccess: 'Disabled'` and `allowBlobPublicAccess: false`."
  },
  {
    "id": 3227,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "During CI/CD automated deployment #3, Bicep deployment fails with `PrincipalNotFound` when assigning the `Cognitive Services OpenAI User` role to the Trail Guide managed identity.",
    "question": "Why does role assignment fail immediately after managed identity creation, and how should it be fixed in Bicep?",
    "options": [
      "Azure AD / Entra ID propagation delay; fix by adding `dependsOn: [ identity ]` and setting `principalType: 'ServicePrincipal'` in the role assignment.",
      "The role definition ID is incorrect; replace it with the GUID for Owner role.",
      "Managed identities cannot be assigned roles in Bicep; assign via Azure CLI post-deployment.",
      "The Bicep API version is deprecated; upgrade `Microsoft.Authorization/roleAssignments` to `2015-07-01`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: When creating a user-assigned identity and assigning roles in the same Bicep template, Entra ID replication lag can cause `PrincipalNotFound`. Setting `principalType: 'ServicePrincipal'` helps Azure Resource Manager retry appropriately."
  },
  {
    "id": 3228,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "You are building a custom Bicep module `infra/core/search/ai-search.bicep` (#3) to host the vector database for Trail Guide RAG grounding.",
    "question": "Which SKU name is the minimum required in Azure AI Search to support vector search with semantic hybrid ranking?",
    "options": [
      "'basic' or 'standard' (Free tier does not support semantic ranking scalable vector index storage)",
      "'free' (supports unlimited vector dimensions and semantic ranking)",
      "'storage_optimized_l1' only",
      "'premium_p3' only"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: While Basic tier supports vector search, semantic ranking and enterprise vector scaling require at least Basic or Standard tier in Azure AI Search. Free tier lacks necessary capacity."
  },
  {
    "id": 3229,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "An MLOps engineer wants to modularize `infra/main.bicep` (#3) so that the monitoring stack (Log Analytics + App Insights) is deployed only if `enableMonitoring` parameter is true.",
    "question": "Which Bicep conditional deployment syntax is correct for module invocation?",
    "options": [
      "module monitoring 'core/monitor/monitoring.bicep' = if (enableMonitoring) { name: 'monitor-deploy', params: { ... } }",
      "if (enableMonitoring) { module monitoring 'core/monitor/monitoring.bicep' = { ... } }",
      "module monitoring 'core/monitor/monitoring.bicep' ? { ... } : null",
      "resource monitoring 'core/monitor/monitoring.bicep' = [for item in enableMonitoring: { ... }]"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In Bicep, conditional deployment of a module or resource is written using the `= if (condition)` syntax directly after the module declaration string."
  },
  {
    "id": 3230,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "You are configuring Key Vault access policy in `infra/core/security/keyvault.bicep` (#3) for Azure AI Foundry secrets encryption.",
    "question": "Which modern Azure best practice should replace legacy access policies in enterprise Bicep templates?",
    "options": [
      "Set `enableRbacAuthorization: true` on Key Vault and assign Entra ID RBAC roles (e.g., Key Vault Secrets Officer).",
      "Use Key Vault Access Policies with wildcard permissions (`secrets: [ 'all' ]`).",
      "Store secrets directly in `azure.yaml` plaintext environment variables.",
      "Disable Key Vault firewall and allow all networks."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Modern Azure enterprise architecture mandates setting `enableRbacAuthorization: true` on Azure Key Vaults, replacing legacy access policies with granular Azure RBAC roles."
  },
  {
    "id": 3231,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "In the Adventure Works Trail Guide project (iteration #4), an MLOps engineer executes `azd up` to provision cloud resources. The deployment fails during the Azure AI Foundry hub creation in `infra/main.bicep` with error code `AccountNameAlreadyExists`.",
    "question": "Which Bicep parameterization best practice or naming convention from `infra/abbreviations.json` solves this global DNS naming collision?",
    "options": [
      "Append `uniqueString(resourceGroup().id)` to the `abbreviations.aiAccount` prefix when declaring the resource name in `main.bicep`.",
      "Hardcode a random 4-digit integer in `main.parameters.json` under `environmentName` without using `uniqueString()`.",
      "Change the target Azure region in `azure.yaml` to a paired secondary region.",
      "Set the `publicNetworkAccess` parameter to `Disabled` in the Cognitive Services Bicep module."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In Azure AI Foundry and Cognitive Services, hub names must be globally unique. Using Bicep's `uniqueString(resourceGroup().id)` concatenated with `abbreviations.json` prefixes ensures deterministically unique names per environment without manual intervention."
  },
  {
    "id": 3232,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "During automated tear-down of test environment `env-test-4`, the DevOps team runs `azd down`. However, the next deployment fails because the Cognitive Services account is locked in a soft-delete recovery state.",
    "question": "Which exact Azure Developer CLI (`azd`) command flag must be executed to permanently bypass the 90-day soft-delete retention period?",
    "options": [
      "azd down --force --purge",
      "azd down --delete-all --no-wait",
      "az group delete --name rg-env-test --yes --no-wait",
      "azd provision --reset-quota --purge"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Standard `azd down` or `az group delete` places Cognitive Services and Azure Key Vault into soft-delete state. Executing `azd down --force --purge` instructs the Azure Developer CLI to permanently purge soft-deleted resources immediately."
  },
  {
    "id": 3233,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "You are reviewing `infra/core/ai/project.bicep` for the Trail Guide GenAIOps setup (#4). The project must automatically link to an existing Azure Log Analytics workspace and Application Insights instance for OpenTelemetry tracing.",
    "question": "Which Bicep property block within the `Microsoft.MachineLearningServices/workspaces` resource correctly establishes the Application Insights dependency?",
    "options": [
      "applicationInsights: applicationInsights.id",
      "monitoringWorkspace: logAnalyticsWorkspace.properties.customerId",
      "telemetryConfig: { instrumentationKey: applicationInsights.properties.InstrumentationKey }",
      "diagnosticSettings: { workspaceId: logAnalyticsWorkspace.id }"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In Azure AI Foundry project declarations (`Microsoft.MachineLearningServices/workspaces`), linking observability requires setting the `applicationInsights` property directly to the resource ID (`applicationInsights.id`) of the Application Insights instance."
  },
  {
    "id": 3234,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "An MLOps engineer is configuring `azure.yaml` for multi-environment provisioning (Development, Staging, Production #4). They need `azd` to pass custom tag values to `infra/main.bicep` during pipeline execution.",
    "question": "How should custom environment variables be passed into Bicep parameters using `azd` configuration?",
    "options": [
      "Define them in `.azure/environment/api.env` or use `azd env set <PARAM_NAME> <VALUE>`, which automatically maps to Bicep parameters of matching names.",
      "Modify the `azure.yaml` file to include a `bicepParameters` array with hardcoded plain text values.",
      "Pass them as command-line arguments using `azd up --bicep-arg param=value`.",
      "Write a custom shell script to replace tokens inside `main.parameters.json` before calling `azd provision`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: The Azure Developer CLI (`azd`) automatically maps environment variables set via `azd env set` (stored in `.azure/<env>/.env`) to Bicep parameters of the exact same name during `azd provision`."
  },
  {
    "id": 3235,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "In `infra/main.bicep` (#4), you need to deploy an Azure OpenAI model deployment (`gpt-5.1`) with a specific token capacity (PTU/PTM or Standard TPM rate limits).",
    "question": "Which resource type and SKU configuration syntax is required inside the model deployment module?",
    "options": [
      "resource modelDeployment 'Microsoft.CognitiveServices/accounts/deployments@2023-05-01' = { sku: { name: 'Standard', capacity: 30 } ... }",
      "resource modelDeployment 'Microsoft.MachineLearningServices/workspaces/models@2023-08-01-preview' = { properties: { tpmLimit: 30000 } ... }",
      "resource openai 'Microsoft.AI/foundry/models@2024-01-01' = { capacity: '30k-tokens' }",
      "resource deployment 'Microsoft.OpenAI/endpoints/deployments@2023-10-01' = { rateLimit: 3000 }"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Azure OpenAI model deployments are declared as child resources under `Microsoft.CognitiveServices/accounts/deployments`. The rate limit (in thousands of TPM) is controlled by the `sku.capacity` integer property."
  },
  {
    "id": 3236,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "A security audit of Trail Guide environment #4 reveals that the Azure AI Foundry storage account allows public blob access. You must enforce private endpoint isolation in Bicep.",
    "question": "Which two Bicep properties must be set on the `Microsoft.Storage/storageAccounts` resource to disable public internet access?",
    "options": [
      "publicNetworkAccess: 'Disabled' and allowBlobPublicAccess: false",
      "networkRuleSet: { defaultAction: 'Deny' } and encryption: { services: { blob: { enabled: true } } }",
      "privateEndpointConnections: [ { properties: { privateLinkServiceConnectionState: { status: 'Approved' } } } ]",
      "firewallRules: [ { ipAddressOrRange: '10.0.0.0/16' } ] and requireHttpsTrafficOnly: true"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: To fully lock down an Azure Storage Account against public internet exposure in Bicep, explicitly set `publicNetworkAccess: 'Disabled'` and `allowBlobPublicAccess: false`."
  },
  {
    "id": 3237,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "During CI/CD automated deployment #4, Bicep deployment fails with `PrincipalNotFound` when assigning the `Cognitive Services OpenAI User` role to the Trail Guide managed identity.",
    "question": "Why does role assignment fail immediately after managed identity creation, and how should it be fixed in Bicep?",
    "options": [
      "Azure AD / Entra ID propagation delay; fix by adding `dependsOn: [ identity ]` and setting `principalType: 'ServicePrincipal'` in the role assignment.",
      "The role definition ID is incorrect; replace it with the GUID for Owner role.",
      "Managed identities cannot be assigned roles in Bicep; assign via Azure CLI post-deployment.",
      "The Bicep API version is deprecated; upgrade `Microsoft.Authorization/roleAssignments` to `2015-07-01`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: When creating a user-assigned identity and assigning roles in the same Bicep template, Entra ID replication lag can cause `PrincipalNotFound`. Setting `principalType: 'ServicePrincipal'` helps Azure Resource Manager retry appropriately."
  },
  {
    "id": 3238,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "You are building a custom Bicep module `infra/core/search/ai-search.bicep` (#4) to host the vector database for Trail Guide RAG grounding.",
    "question": "Which SKU name is the minimum required in Azure AI Search to support vector search with semantic hybrid ranking?",
    "options": [
      "'basic' or 'standard' (Free tier does not support semantic ranking scalable vector index storage)",
      "'free' (supports unlimited vector dimensions and semantic ranking)",
      "'storage_optimized_l1' only",
      "'premium_p3' only"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: While Basic tier supports vector search, semantic ranking and enterprise vector scaling require at least Basic or Standard tier in Azure AI Search. Free tier lacks necessary capacity."
  },
  {
    "id": 3239,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "An MLOps engineer wants to modularize `infra/main.bicep` (#4) so that the monitoring stack (Log Analytics + App Insights) is deployed only if `enableMonitoring` parameter is true.",
    "question": "Which Bicep conditional deployment syntax is correct for module invocation?",
    "options": [
      "module monitoring 'core/monitor/monitoring.bicep' = if (enableMonitoring) { name: 'monitor-deploy', params: { ... } }",
      "if (enableMonitoring) { module monitoring 'core/monitor/monitoring.bicep' = { ... } }",
      "module monitoring 'core/monitor/monitoring.bicep' ? { ... } : null",
      "resource monitoring 'core/monitor/monitoring.bicep' = [for item in enableMonitoring: { ... }]"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In Bicep, conditional deployment of a module or resource is written using the `= if (condition)` syntax directly after the module declaration string."
  },
  {
    "id": 3240,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "You are configuring Key Vault access policy in `infra/core/security/keyvault.bicep` (#4) for Azure AI Foundry secrets encryption.",
    "question": "Which modern Azure best practice should replace legacy access policies in enterprise Bicep templates?",
    "options": [
      "Set `enableRbacAuthorization: true` on Key Vault and assign Entra ID RBAC roles (e.g., Key Vault Secrets Officer).",
      "Use Key Vault Access Policies with wildcard permissions (`secrets: [ 'all' ]`).",
      "Store secrets directly in `azure.yaml` plaintext environment variables.",
      "Disable Key Vault firewall and allow all networks."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Modern Azure enterprise architecture mandates setting `enableRbacAuthorization: true` on Azure Key Vaults, replacing legacy access policies with granular Azure RBAC roles."
  },
  {
    "id": 3241,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "In the Adventure Works Trail Guide project (iteration #5), an MLOps engineer executes `azd up` to provision cloud resources. The deployment fails during the Azure AI Foundry hub creation in `infra/main.bicep` with error code `AccountNameAlreadyExists`.",
    "question": "Which Bicep parameterization best practice or naming convention from `infra/abbreviations.json` solves this global DNS naming collision?",
    "options": [
      "Append `uniqueString(resourceGroup().id)` to the `abbreviations.aiAccount` prefix when declaring the resource name in `main.bicep`.",
      "Hardcode a random 4-digit integer in `main.parameters.json` under `environmentName` without using `uniqueString()`.",
      "Change the target Azure region in `azure.yaml` to a paired secondary region.",
      "Set the `publicNetworkAccess` parameter to `Disabled` in the Cognitive Services Bicep module."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In Azure AI Foundry and Cognitive Services, hub names must be globally unique. Using Bicep's `uniqueString(resourceGroup().id)` concatenated with `abbreviations.json` prefixes ensures deterministically unique names per environment without manual intervention."
  },
  {
    "id": 3242,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "During automated tear-down of test environment `env-test-5`, the DevOps team runs `azd down`. However, the next deployment fails because the Cognitive Services account is locked in a soft-delete recovery state.",
    "question": "Which exact Azure Developer CLI (`azd`) command flag must be executed to permanently bypass the 90-day soft-delete retention period?",
    "options": [
      "azd down --force --purge",
      "azd down --delete-all --no-wait",
      "az group delete --name rg-env-test --yes --no-wait",
      "azd provision --reset-quota --purge"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Standard `azd down` or `az group delete` places Cognitive Services and Azure Key Vault into soft-delete state. Executing `azd down --force --purge` instructs the Azure Developer CLI to permanently purge soft-deleted resources immediately."
  },
  {
    "id": 3243,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "You are reviewing `infra/core/ai/project.bicep` for the Trail Guide GenAIOps setup (#5). The project must automatically link to an existing Azure Log Analytics workspace and Application Insights instance for OpenTelemetry tracing.",
    "question": "Which Bicep property block within the `Microsoft.MachineLearningServices/workspaces` resource correctly establishes the Application Insights dependency?",
    "options": [
      "applicationInsights: applicationInsights.id",
      "monitoringWorkspace: logAnalyticsWorkspace.properties.customerId",
      "telemetryConfig: { instrumentationKey: applicationInsights.properties.InstrumentationKey }",
      "diagnosticSettings: { workspaceId: logAnalyticsWorkspace.id }"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In Azure AI Foundry project declarations (`Microsoft.MachineLearningServices/workspaces`), linking observability requires setting the `applicationInsights` property directly to the resource ID (`applicationInsights.id`) of the Application Insights instance."
  },
  {
    "id": 3244,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "An MLOps engineer is configuring `azure.yaml` for multi-environment provisioning (Development, Staging, Production #5). They need `azd` to pass custom tag values to `infra/main.bicep` during pipeline execution.",
    "question": "How should custom environment variables be passed into Bicep parameters using `azd` configuration?",
    "options": [
      "Define them in `.azure/environment/api.env` or use `azd env set <PARAM_NAME> <VALUE>`, which automatically maps to Bicep parameters of matching names.",
      "Modify the `azure.yaml` file to include a `bicepParameters` array with hardcoded plain text values.",
      "Pass them as command-line arguments using `azd up --bicep-arg param=value`.",
      "Write a custom shell script to replace tokens inside `main.parameters.json` before calling `azd provision`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: The Azure Developer CLI (`azd`) automatically maps environment variables set via `azd env set` (stored in `.azure/<env>/.env`) to Bicep parameters of the exact same name during `azd provision`."
  },
  {
    "id": 3245,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "In `infra/main.bicep` (#5), you need to deploy an Azure OpenAI model deployment (`gpt-5.1`) with a specific token capacity (PTU/PTM or Standard TPM rate limits).",
    "question": "Which resource type and SKU configuration syntax is required inside the model deployment module?",
    "options": [
      "resource modelDeployment 'Microsoft.CognitiveServices/accounts/deployments@2023-05-01' = { sku: { name: 'Standard', capacity: 30 } ... }",
      "resource modelDeployment 'Microsoft.MachineLearningServices/workspaces/models@2023-08-01-preview' = { properties: { tpmLimit: 30000 } ... }",
      "resource openai 'Microsoft.AI/foundry/models@2024-01-01' = { capacity: '30k-tokens' }",
      "resource deployment 'Microsoft.OpenAI/endpoints/deployments@2023-10-01' = { rateLimit: 3000 }"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Azure OpenAI model deployments are declared as child resources under `Microsoft.CognitiveServices/accounts/deployments`. The rate limit (in thousands of TPM) is controlled by the `sku.capacity` integer property."
  },
  {
    "id": 3246,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "A security audit of Trail Guide environment #5 reveals that the Azure AI Foundry storage account allows public blob access. You must enforce private endpoint isolation in Bicep.",
    "question": "Which two Bicep properties must be set on the `Microsoft.Storage/storageAccounts` resource to disable public internet access?",
    "options": [
      "publicNetworkAccess: 'Disabled' and allowBlobPublicAccess: false",
      "networkRuleSet: { defaultAction: 'Deny' } and encryption: { services: { blob: { enabled: true } } }",
      "privateEndpointConnections: [ { properties: { privateLinkServiceConnectionState: { status: 'Approved' } } } ]",
      "firewallRules: [ { ipAddressOrRange: '10.0.0.0/16' } ] and requireHttpsTrafficOnly: true"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: To fully lock down an Azure Storage Account against public internet exposure in Bicep, explicitly set `publicNetworkAccess: 'Disabled'` and `allowBlobPublicAccess: false`."
  },
  {
    "id": 3247,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "During CI/CD automated deployment #5, Bicep deployment fails with `PrincipalNotFound` when assigning the `Cognitive Services OpenAI User` role to the Trail Guide managed identity.",
    "question": "Why does role assignment fail immediately after managed identity creation, and how should it be fixed in Bicep?",
    "options": [
      "Azure AD / Entra ID propagation delay; fix by adding `dependsOn: [ identity ]` and setting `principalType: 'ServicePrincipal'` in the role assignment.",
      "The role definition ID is incorrect; replace it with the GUID for Owner role.",
      "Managed identities cannot be assigned roles in Bicep; assign via Azure CLI post-deployment.",
      "The Bicep API version is deprecated; upgrade `Microsoft.Authorization/roleAssignments` to `2015-07-01`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: When creating a user-assigned identity and assigning roles in the same Bicep template, Entra ID replication lag can cause `PrincipalNotFound`. Setting `principalType: 'ServicePrincipal'` helps Azure Resource Manager retry appropriately."
  },
  {
    "id": 3248,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "You are building a custom Bicep module `infra/core/search/ai-search.bicep` (#5) to host the vector database for Trail Guide RAG grounding.",
    "question": "Which SKU name is the minimum required in Azure AI Search to support vector search with semantic hybrid ranking?",
    "options": [
      "'basic' or 'standard' (Free tier does not support semantic ranking scalable vector index storage)",
      "'free' (supports unlimited vector dimensions and semantic ranking)",
      "'storage_optimized_l1' only",
      "'premium_p3' only"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: While Basic tier supports vector search, semantic ranking and enterprise vector scaling require at least Basic or Standard tier in Azure AI Search. Free tier lacks necessary capacity."
  },
  {
    "id": 3249,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "An MLOps engineer wants to modularize `infra/main.bicep` (#5) so that the monitoring stack (Log Analytics + App Insights) is deployed only if `enableMonitoring` parameter is true.",
    "question": "Which Bicep conditional deployment syntax is correct for module invocation?",
    "options": [
      "module monitoring 'core/monitor/monitoring.bicep' = if (enableMonitoring) { name: 'monitor-deploy', params: { ... } }",
      "if (enableMonitoring) { module monitoring 'core/monitor/monitoring.bicep' = { ... } }",
      "module monitoring 'core/monitor/monitoring.bicep' ? { ... } : null",
      "resource monitoring 'core/monitor/monitoring.bicep' = [for item in enableMonitoring: { ... }]"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In Bicep, conditional deployment of a module or resource is written using the `= if (condition)` syntax directly after the module declaration string."
  },
  {
    "id": 3250,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "You are configuring Key Vault access policy in `infra/core/security/keyvault.bicep` (#5) for Azure AI Foundry secrets encryption.",
    "question": "Which modern Azure best practice should replace legacy access policies in enterprise Bicep templates?",
    "options": [
      "Set `enableRbacAuthorization: true` on Key Vault and assign Entra ID RBAC roles (e.g., Key Vault Secrets Officer).",
      "Use Key Vault Access Policies with wildcard permissions (`secrets: [ 'all' ]`).",
      "Store secrets directly in `azure.yaml` plaintext environment variables.",
      "Disable Key Vault firewall and allow all networks."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Modern Azure enterprise architecture mandates setting `enableRbacAuthorization: true` on Azure Key Vaults, replacing legacy access policies with granular Azure RBAC roles."
  },
  {
    "id": 3251,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "In the Adventure Works Trail Guide project (iteration #6), an MLOps engineer executes `azd up` to provision cloud resources. The deployment fails during the Azure AI Foundry hub creation in `infra/main.bicep` with error code `AccountNameAlreadyExists`.",
    "question": "Which Bicep parameterization best practice or naming convention from `infra/abbreviations.json` solves this global DNS naming collision?",
    "options": [
      "Append `uniqueString(resourceGroup().id)` to the `abbreviations.aiAccount` prefix when declaring the resource name in `main.bicep`.",
      "Hardcode a random 4-digit integer in `main.parameters.json` under `environmentName` without using `uniqueString()`.",
      "Change the target Azure region in `azure.yaml` to a paired secondary region.",
      "Set the `publicNetworkAccess` parameter to `Disabled` in the Cognitive Services Bicep module."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In Azure AI Foundry and Cognitive Services, hub names must be globally unique. Using Bicep's `uniqueString(resourceGroup().id)` concatenated with `abbreviations.json` prefixes ensures deterministically unique names per environment without manual intervention."
  },
  {
    "id": 3252,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "During automated tear-down of test environment `env-test-6`, the DevOps team runs `azd down`. However, the next deployment fails because the Cognitive Services account is locked in a soft-delete recovery state.",
    "question": "Which exact Azure Developer CLI (`azd`) command flag must be executed to permanently bypass the 90-day soft-delete retention period?",
    "options": [
      "azd down --force --purge",
      "azd down --delete-all --no-wait",
      "az group delete --name rg-env-test --yes --no-wait",
      "azd provision --reset-quota --purge"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Standard `azd down` or `az group delete` places Cognitive Services and Azure Key Vault into soft-delete state. Executing `azd down --force --purge` instructs the Azure Developer CLI to permanently purge soft-deleted resources immediately."
  },
  {
    "id": 3253,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "You are reviewing `infra/core/ai/project.bicep` for the Trail Guide GenAIOps setup (#6). The project must automatically link to an existing Azure Log Analytics workspace and Application Insights instance for OpenTelemetry tracing.",
    "question": "Which Bicep property block within the `Microsoft.MachineLearningServices/workspaces` resource correctly establishes the Application Insights dependency?",
    "options": [
      "applicationInsights: applicationInsights.id",
      "monitoringWorkspace: logAnalyticsWorkspace.properties.customerId",
      "telemetryConfig: { instrumentationKey: applicationInsights.properties.InstrumentationKey }",
      "diagnosticSettings: { workspaceId: logAnalyticsWorkspace.id }"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In Azure AI Foundry project declarations (`Microsoft.MachineLearningServices/workspaces`), linking observability requires setting the `applicationInsights` property directly to the resource ID (`applicationInsights.id`) of the Application Insights instance."
  },
  {
    "id": 3254,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "An MLOps engineer is configuring `azure.yaml` for multi-environment provisioning (Development, Staging, Production #6). They need `azd` to pass custom tag values to `infra/main.bicep` during pipeline execution.",
    "question": "How should custom environment variables be passed into Bicep parameters using `azd` configuration?",
    "options": [
      "Define them in `.azure/environment/api.env` or use `azd env set <PARAM_NAME> <VALUE>`, which automatically maps to Bicep parameters of matching names.",
      "Modify the `azure.yaml` file to include a `bicepParameters` array with hardcoded plain text values.",
      "Pass them as command-line arguments using `azd up --bicep-arg param=value`.",
      "Write a custom shell script to replace tokens inside `main.parameters.json` before calling `azd provision`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: The Azure Developer CLI (`azd`) automatically maps environment variables set via `azd env set` (stored in `.azure/<env>/.env`) to Bicep parameters of the exact same name during `azd provision`."
  },
  {
    "id": 3255,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "In `infra/main.bicep` (#6), you need to deploy an Azure OpenAI model deployment (`gpt-5.1`) with a specific token capacity (PTU/PTM or Standard TPM rate limits).",
    "question": "Which resource type and SKU configuration syntax is required inside the model deployment module?",
    "options": [
      "resource modelDeployment 'Microsoft.CognitiveServices/accounts/deployments@2023-05-01' = { sku: { name: 'Standard', capacity: 30 } ... }",
      "resource modelDeployment 'Microsoft.MachineLearningServices/workspaces/models@2023-08-01-preview' = { properties: { tpmLimit: 30000 } ... }",
      "resource openai 'Microsoft.AI/foundry/models@2024-01-01' = { capacity: '30k-tokens' }",
      "resource deployment 'Microsoft.OpenAI/endpoints/deployments@2023-10-01' = { rateLimit: 3000 }"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Azure OpenAI model deployments are declared as child resources under `Microsoft.CognitiveServices/accounts/deployments`. The rate limit (in thousands of TPM) is controlled by the `sku.capacity` integer property."
  },
  {
    "id": 3256,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "A security audit of Trail Guide environment #6 reveals that the Azure AI Foundry storage account allows public blob access. You must enforce private endpoint isolation in Bicep.",
    "question": "Which two Bicep properties must be set on the `Microsoft.Storage/storageAccounts` resource to disable public internet access?",
    "options": [
      "publicNetworkAccess: 'Disabled' and allowBlobPublicAccess: false",
      "networkRuleSet: { defaultAction: 'Deny' } and encryption: { services: { blob: { enabled: true } } }",
      "privateEndpointConnections: [ { properties: { privateLinkServiceConnectionState: { status: 'Approved' } } } ]",
      "firewallRules: [ { ipAddressOrRange: '10.0.0.0/16' } ] and requireHttpsTrafficOnly: true"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: To fully lock down an Azure Storage Account against public internet exposure in Bicep, explicitly set `publicNetworkAccess: 'Disabled'` and `allowBlobPublicAccess: false`."
  },
  {
    "id": 3257,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "During CI/CD automated deployment #6, Bicep deployment fails with `PrincipalNotFound` when assigning the `Cognitive Services OpenAI User` role to the Trail Guide managed identity.",
    "question": "Why does role assignment fail immediately after managed identity creation, and how should it be fixed in Bicep?",
    "options": [
      "Azure AD / Entra ID propagation delay; fix by adding `dependsOn: [ identity ]` and setting `principalType: 'ServicePrincipal'` in the role assignment.",
      "The role definition ID is incorrect; replace it with the GUID for Owner role.",
      "Managed identities cannot be assigned roles in Bicep; assign via Azure CLI post-deployment.",
      "The Bicep API version is deprecated; upgrade `Microsoft.Authorization/roleAssignments` to `2015-07-01`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: When creating a user-assigned identity and assigning roles in the same Bicep template, Entra ID replication lag can cause `PrincipalNotFound`. Setting `principalType: 'ServicePrincipal'` helps Azure Resource Manager retry appropriately."
  },
  {
    "id": 3258,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "You are building a custom Bicep module `infra/core/search/ai-search.bicep` (#6) to host the vector database for Trail Guide RAG grounding.",
    "question": "Which SKU name is the minimum required in Azure AI Search to support vector search with semantic hybrid ranking?",
    "options": [
      "'basic' or 'standard' (Free tier does not support semantic ranking scalable vector index storage)",
      "'free' (supports unlimited vector dimensions and semantic ranking)",
      "'storage_optimized_l1' only",
      "'premium_p3' only"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: While Basic tier supports vector search, semantic ranking and enterprise vector scaling require at least Basic or Standard tier in Azure AI Search. Free tier lacks necessary capacity."
  },
  {
    "id": 3259,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "An MLOps engineer wants to modularize `infra/main.bicep` (#6) so that the monitoring stack (Log Analytics + App Insights) is deployed only if `enableMonitoring` parameter is true.",
    "question": "Which Bicep conditional deployment syntax is correct for module invocation?",
    "options": [
      "module monitoring 'core/monitor/monitoring.bicep' = if (enableMonitoring) { name: 'monitor-deploy', params: { ... } }",
      "if (enableMonitoring) { module monitoring 'core/monitor/monitoring.bicep' = { ... } }",
      "module monitoring 'core/monitor/monitoring.bicep' ? { ... } : null",
      "resource monitoring 'core/monitor/monitoring.bicep' = [for item in enableMonitoring: { ... }]"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In Bicep, conditional deployment of a module or resource is written using the `= if (condition)` syntax directly after the module declaration string."
  },
  {
    "id": 3260,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "You are configuring Key Vault access policy in `infra/core/security/keyvault.bicep` (#6) for Azure AI Foundry secrets encryption.",
    "question": "Which modern Azure best practice should replace legacy access policies in enterprise Bicep templates?",
    "options": [
      "Set `enableRbacAuthorization: true` on Key Vault and assign Entra ID RBAC roles (e.g., Key Vault Secrets Officer).",
      "Use Key Vault Access Policies with wildcard permissions (`secrets: [ 'all' ]`).",
      "Store secrets directly in `azure.yaml` plaintext environment variables.",
      "Disable Key Vault firewall and allow all networks."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Modern Azure enterprise architecture mandates setting `enableRbacAuthorization: true` on Azure Key Vaults, replacing legacy access policies with granular Azure RBAC roles."
  },
  {
    "id": 3261,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "In the Adventure Works Trail Guide project (iteration #7), an MLOps engineer executes `azd up` to provision cloud resources. The deployment fails during the Azure AI Foundry hub creation in `infra/main.bicep` with error code `AccountNameAlreadyExists`.",
    "question": "Which Bicep parameterization best practice or naming convention from `infra/abbreviations.json` solves this global DNS naming collision?",
    "options": [
      "Append `uniqueString(resourceGroup().id)` to the `abbreviations.aiAccount` prefix when declaring the resource name in `main.bicep`.",
      "Hardcode a random 4-digit integer in `main.parameters.json` under `environmentName` without using `uniqueString()`.",
      "Change the target Azure region in `azure.yaml` to a paired secondary region.",
      "Set the `publicNetworkAccess` parameter to `Disabled` in the Cognitive Services Bicep module."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In Azure AI Foundry and Cognitive Services, hub names must be globally unique. Using Bicep's `uniqueString(resourceGroup().id)` concatenated with `abbreviations.json` prefixes ensures deterministically unique names per environment without manual intervention."
  },
  {
    "id": 3262,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "During automated tear-down of test environment `env-test-7`, the DevOps team runs `azd down`. However, the next deployment fails because the Cognitive Services account is locked in a soft-delete recovery state.",
    "question": "Which exact Azure Developer CLI (`azd`) command flag must be executed to permanently bypass the 90-day soft-delete retention period?",
    "options": [
      "azd down --force --purge",
      "azd down --delete-all --no-wait",
      "az group delete --name rg-env-test --yes --no-wait",
      "azd provision --reset-quota --purge"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Standard `azd down` or `az group delete` places Cognitive Services and Azure Key Vault into soft-delete state. Executing `azd down --force --purge` instructs the Azure Developer CLI to permanently purge soft-deleted resources immediately."
  },
  {
    "id": 3263,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "You are reviewing `infra/core/ai/project.bicep` for the Trail Guide GenAIOps setup (#7). The project must automatically link to an existing Azure Log Analytics workspace and Application Insights instance for OpenTelemetry tracing.",
    "question": "Which Bicep property block within the `Microsoft.MachineLearningServices/workspaces` resource correctly establishes the Application Insights dependency?",
    "options": [
      "applicationInsights: applicationInsights.id",
      "monitoringWorkspace: logAnalyticsWorkspace.properties.customerId",
      "telemetryConfig: { instrumentationKey: applicationInsights.properties.InstrumentationKey }",
      "diagnosticSettings: { workspaceId: logAnalyticsWorkspace.id }"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In Azure AI Foundry project declarations (`Microsoft.MachineLearningServices/workspaces`), linking observability requires setting the `applicationInsights` property directly to the resource ID (`applicationInsights.id`) of the Application Insights instance."
  },
  {
    "id": 3264,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "An MLOps engineer is configuring `azure.yaml` for multi-environment provisioning (Development, Staging, Production #7). They need `azd` to pass custom tag values to `infra/main.bicep` during pipeline execution.",
    "question": "How should custom environment variables be passed into Bicep parameters using `azd` configuration?",
    "options": [
      "Define them in `.azure/environment/api.env` or use `azd env set <PARAM_NAME> <VALUE>`, which automatically maps to Bicep parameters of matching names.",
      "Modify the `azure.yaml` file to include a `bicepParameters` array with hardcoded plain text values.",
      "Pass them as command-line arguments using `azd up --bicep-arg param=value`.",
      "Write a custom shell script to replace tokens inside `main.parameters.json` before calling `azd provision`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: The Azure Developer CLI (`azd`) automatically maps environment variables set via `azd env set` (stored in `.azure/<env>/.env`) to Bicep parameters of the exact same name during `azd provision`."
  },
  {
    "id": 3265,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "In `infra/main.bicep` (#7), you need to deploy an Azure OpenAI model deployment (`gpt-5.1`) with a specific token capacity (PTU/PTM or Standard TPM rate limits).",
    "question": "Which resource type and SKU configuration syntax is required inside the model deployment module?",
    "options": [
      "resource modelDeployment 'Microsoft.CognitiveServices/accounts/deployments@2023-05-01' = { sku: { name: 'Standard', capacity: 30 } ... }",
      "resource modelDeployment 'Microsoft.MachineLearningServices/workspaces/models@2023-08-01-preview' = { properties: { tpmLimit: 30000 } ... }",
      "resource openai 'Microsoft.AI/foundry/models@2024-01-01' = { capacity: '30k-tokens' }",
      "resource deployment 'Microsoft.OpenAI/endpoints/deployments@2023-10-01' = { rateLimit: 3000 }"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Azure OpenAI model deployments are declared as child resources under `Microsoft.CognitiveServices/accounts/deployments`. The rate limit (in thousands of TPM) is controlled by the `sku.capacity` integer property."
  },
  {
    "id": 3266,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "A security audit of Trail Guide environment #7 reveals that the Azure AI Foundry storage account allows public blob access. You must enforce private endpoint isolation in Bicep.",
    "question": "Which two Bicep properties must be set on the `Microsoft.Storage/storageAccounts` resource to disable public internet access?",
    "options": [
      "publicNetworkAccess: 'Disabled' and allowBlobPublicAccess: false",
      "networkRuleSet: { defaultAction: 'Deny' } and encryption: { services: { blob: { enabled: true } } }",
      "privateEndpointConnections: [ { properties: { privateLinkServiceConnectionState: { status: 'Approved' } } } ]",
      "firewallRules: [ { ipAddressOrRange: '10.0.0.0/16' } ] and requireHttpsTrafficOnly: true"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: To fully lock down an Azure Storage Account against public internet exposure in Bicep, explicitly set `publicNetworkAccess: 'Disabled'` and `allowBlobPublicAccess: false`."
  },
  {
    "id": 3267,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "During CI/CD automated deployment #7, Bicep deployment fails with `PrincipalNotFound` when assigning the `Cognitive Services OpenAI User` role to the Trail Guide managed identity.",
    "question": "Why does role assignment fail immediately after managed identity creation, and how should it be fixed in Bicep?",
    "options": [
      "Azure AD / Entra ID propagation delay; fix by adding `dependsOn: [ identity ]` and setting `principalType: 'ServicePrincipal'` in the role assignment.",
      "The role definition ID is incorrect; replace it with the GUID for Owner role.",
      "Managed identities cannot be assigned roles in Bicep; assign via Azure CLI post-deployment.",
      "The Bicep API version is deprecated; upgrade `Microsoft.Authorization/roleAssignments` to `2015-07-01`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: When creating a user-assigned identity and assigning roles in the same Bicep template, Entra ID replication lag can cause `PrincipalNotFound`. Setting `principalType: 'ServicePrincipal'` helps Azure Resource Manager retry appropriately."
  },
  {
    "id": 3268,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "You are building a custom Bicep module `infra/core/search/ai-search.bicep` (#7) to host the vector database for Trail Guide RAG grounding.",
    "question": "Which SKU name is the minimum required in Azure AI Search to support vector search with semantic hybrid ranking?",
    "options": [
      "'basic' or 'standard' (Free tier does not support semantic ranking scalable vector index storage)",
      "'free' (supports unlimited vector dimensions and semantic ranking)",
      "'storage_optimized_l1' only",
      "'premium_p3' only"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: While Basic tier supports vector search, semantic ranking and enterprise vector scaling require at least Basic or Standard tier in Azure AI Search. Free tier lacks necessary capacity."
  },
  {
    "id": 3269,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "An MLOps engineer wants to modularize `infra/main.bicep` (#7) so that the monitoring stack (Log Analytics + App Insights) is deployed only if `enableMonitoring` parameter is true.",
    "question": "Which Bicep conditional deployment syntax is correct for module invocation?",
    "options": [
      "module monitoring 'core/monitor/monitoring.bicep' = if (enableMonitoring) { name: 'monitor-deploy', params: { ... } }",
      "if (enableMonitoring) { module monitoring 'core/monitor/monitoring.bicep' = { ... } }",
      "module monitoring 'core/monitor/monitoring.bicep' ? { ... } : null",
      "resource monitoring 'core/monitor/monitoring.bicep' = [for item in enableMonitoring: { ... }]"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In Bicep, conditional deployment of a module or resource is written using the `= if (condition)` syntax directly after the module declaration string."
  },
  {
    "id": 3270,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "You are configuring Key Vault access policy in `infra/core/security/keyvault.bicep` (#7) for Azure AI Foundry secrets encryption.",
    "question": "Which modern Azure best practice should replace legacy access policies in enterprise Bicep templates?",
    "options": [
      "Set `enableRbacAuthorization: true` on Key Vault and assign Entra ID RBAC roles (e.g., Key Vault Secrets Officer).",
      "Use Key Vault Access Policies with wildcard permissions (`secrets: [ 'all' ]`).",
      "Store secrets directly in `azure.yaml` plaintext environment variables.",
      "Disable Key Vault firewall and allow all networks."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Modern Azure enterprise architecture mandates setting `enableRbacAuthorization: true` on Azure Key Vaults, replacing legacy access policies with granular Azure RBAC roles."
  },
  {
    "id": 3271,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "In the Adventure Works Trail Guide project (iteration #8), an MLOps engineer executes `azd up` to provision cloud resources. The deployment fails during the Azure AI Foundry hub creation in `infra/main.bicep` with error code `AccountNameAlreadyExists`.",
    "question": "Which Bicep parameterization best practice or naming convention from `infra/abbreviations.json` solves this global DNS naming collision?",
    "options": [
      "Append `uniqueString(resourceGroup().id)` to the `abbreviations.aiAccount` prefix when declaring the resource name in `main.bicep`.",
      "Hardcode a random 4-digit integer in `main.parameters.json` under `environmentName` without using `uniqueString()`.",
      "Change the target Azure region in `azure.yaml` to a paired secondary region.",
      "Set the `publicNetworkAccess` parameter to `Disabled` in the Cognitive Services Bicep module."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In Azure AI Foundry and Cognitive Services, hub names must be globally unique. Using Bicep's `uniqueString(resourceGroup().id)` concatenated with `abbreviations.json` prefixes ensures deterministically unique names per environment without manual intervention."
  },
  {
    "id": 3272,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "During automated tear-down of test environment `env-test-8`, the DevOps team runs `azd down`. However, the next deployment fails because the Cognitive Services account is locked in a soft-delete recovery state.",
    "question": "Which exact Azure Developer CLI (`azd`) command flag must be executed to permanently bypass the 90-day soft-delete retention period?",
    "options": [
      "azd down --force --purge",
      "azd down --delete-all --no-wait",
      "az group delete --name rg-env-test --yes --no-wait",
      "azd provision --reset-quota --purge"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Standard `azd down` or `az group delete` places Cognitive Services and Azure Key Vault into soft-delete state. Executing `azd down --force --purge` instructs the Azure Developer CLI to permanently purge soft-deleted resources immediately."
  },
  {
    "id": 3273,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "You are reviewing `infra/core/ai/project.bicep` for the Trail Guide GenAIOps setup (#8). The project must automatically link to an existing Azure Log Analytics workspace and Application Insights instance for OpenTelemetry tracing.",
    "question": "Which Bicep property block within the `Microsoft.MachineLearningServices/workspaces` resource correctly establishes the Application Insights dependency?",
    "options": [
      "applicationInsights: applicationInsights.id",
      "monitoringWorkspace: logAnalyticsWorkspace.properties.customerId",
      "telemetryConfig: { instrumentationKey: applicationInsights.properties.InstrumentationKey }",
      "diagnosticSettings: { workspaceId: logAnalyticsWorkspace.id }"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In Azure AI Foundry project declarations (`Microsoft.MachineLearningServices/workspaces`), linking observability requires setting the `applicationInsights` property directly to the resource ID (`applicationInsights.id`) of the Application Insights instance."
  },
  {
    "id": 3274,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "An MLOps engineer is configuring `azure.yaml` for multi-environment provisioning (Development, Staging, Production #8). They need `azd` to pass custom tag values to `infra/main.bicep` during pipeline execution.",
    "question": "How should custom environment variables be passed into Bicep parameters using `azd` configuration?",
    "options": [
      "Define them in `.azure/environment/api.env` or use `azd env set <PARAM_NAME> <VALUE>`, which automatically maps to Bicep parameters of matching names.",
      "Modify the `azure.yaml` file to include a `bicepParameters` array with hardcoded plain text values.",
      "Pass them as command-line arguments using `azd up --bicep-arg param=value`.",
      "Write a custom shell script to replace tokens inside `main.parameters.json` before calling `azd provision`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: The Azure Developer CLI (`azd`) automatically maps environment variables set via `azd env set` (stored in `.azure/<env>/.env`) to Bicep parameters of the exact same name during `azd provision`."
  },
  {
    "id": 3275,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "In `infra/main.bicep` (#8), you need to deploy an Azure OpenAI model deployment (`gpt-5.1`) with a specific token capacity (PTU/PTM or Standard TPM rate limits).",
    "question": "Which resource type and SKU configuration syntax is required inside the model deployment module?",
    "options": [
      "resource modelDeployment 'Microsoft.CognitiveServices/accounts/deployments@2023-05-01' = { sku: { name: 'Standard', capacity: 30 } ... }",
      "resource modelDeployment 'Microsoft.MachineLearningServices/workspaces/models@2023-08-01-preview' = { properties: { tpmLimit: 30000 } ... }",
      "resource openai 'Microsoft.AI/foundry/models@2024-01-01' = { capacity: '30k-tokens' }",
      "resource deployment 'Microsoft.OpenAI/endpoints/deployments@2023-10-01' = { rateLimit: 3000 }"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Azure OpenAI model deployments are declared as child resources under `Microsoft.CognitiveServices/accounts/deployments`. The rate limit (in thousands of TPM) is controlled by the `sku.capacity` integer property."
  },
  {
    "id": 3276,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "A security audit of Trail Guide environment #8 reveals that the Azure AI Foundry storage account allows public blob access. You must enforce private endpoint isolation in Bicep.",
    "question": "Which two Bicep properties must be set on the `Microsoft.Storage/storageAccounts` resource to disable public internet access?",
    "options": [
      "publicNetworkAccess: 'Disabled' and allowBlobPublicAccess: false",
      "networkRuleSet: { defaultAction: 'Deny' } and encryption: { services: { blob: { enabled: true } } }",
      "privateEndpointConnections: [ { properties: { privateLinkServiceConnectionState: { status: 'Approved' } } } ]",
      "firewallRules: [ { ipAddressOrRange: '10.0.0.0/16' } ] and requireHttpsTrafficOnly: true"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: To fully lock down an Azure Storage Account against public internet exposure in Bicep, explicitly set `publicNetworkAccess: 'Disabled'` and `allowBlobPublicAccess: false`."
  },
  {
    "id": 3277,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "During CI/CD automated deployment #8, Bicep deployment fails with `PrincipalNotFound` when assigning the `Cognitive Services OpenAI User` role to the Trail Guide managed identity.",
    "question": "Why does role assignment fail immediately after managed identity creation, and how should it be fixed in Bicep?",
    "options": [
      "Azure AD / Entra ID propagation delay; fix by adding `dependsOn: [ identity ]` and setting `principalType: 'ServicePrincipal'` in the role assignment.",
      "The role definition ID is incorrect; replace it with the GUID for Owner role.",
      "Managed identities cannot be assigned roles in Bicep; assign via Azure CLI post-deployment.",
      "The Bicep API version is deprecated; upgrade `Microsoft.Authorization/roleAssignments` to `2015-07-01`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: When creating a user-assigned identity and assigning roles in the same Bicep template, Entra ID replication lag can cause `PrincipalNotFound`. Setting `principalType: 'ServicePrincipal'` helps Azure Resource Manager retry appropriately."
  },
  {
    "id": 3278,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "You are building a custom Bicep module `infra/core/search/ai-search.bicep` (#8) to host the vector database for Trail Guide RAG grounding.",
    "question": "Which SKU name is the minimum required in Azure AI Search to support vector search with semantic hybrid ranking?",
    "options": [
      "'basic' or 'standard' (Free tier does not support semantic ranking scalable vector index storage)",
      "'free' (supports unlimited vector dimensions and semantic ranking)",
      "'storage_optimized_l1' only",
      "'premium_p3' only"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: While Basic tier supports vector search, semantic ranking and enterprise vector scaling require at least Basic or Standard tier in Azure AI Search. Free tier lacks necessary capacity."
  },
  {
    "id": 3279,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "An MLOps engineer wants to modularize `infra/main.bicep` (#8) so that the monitoring stack (Log Analytics + App Insights) is deployed only if `enableMonitoring` parameter is true.",
    "question": "Which Bicep conditional deployment syntax is correct for module invocation?",
    "options": [
      "module monitoring 'core/monitor/monitoring.bicep' = if (enableMonitoring) { name: 'monitor-deploy', params: { ... } }",
      "if (enableMonitoring) { module monitoring 'core/monitor/monitoring.bicep' = { ... } }",
      "module monitoring 'core/monitor/monitoring.bicep' ? { ... } : null",
      "resource monitoring 'core/monitor/monitoring.bicep' = [for item in enableMonitoring: { ... }]"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In Bicep, conditional deployment of a module or resource is written using the `= if (condition)` syntax directly after the module declaration string."
  },
  {
    "id": 3280,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "You are configuring Key Vault access policy in `infra/core/security/keyvault.bicep` (#8) for Azure AI Foundry secrets encryption.",
    "question": "Which modern Azure best practice should replace legacy access policies in enterprise Bicep templates?",
    "options": [
      "Set `enableRbacAuthorization: true` on Key Vault and assign Entra ID RBAC roles (e.g., Key Vault Secrets Officer).",
      "Use Key Vault Access Policies with wildcard permissions (`secrets: [ 'all' ]`).",
      "Store secrets directly in `azure.yaml` plaintext environment variables.",
      "Disable Key Vault firewall and allow all networks."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Modern Azure enterprise architecture mandates setting `enableRbacAuthorization: true` on Azure Key Vaults, replacing legacy access policies with granular Azure RBAC roles."
  },
  {
    "id": 3281,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "In the Adventure Works Trail Guide project (iteration #9), an MLOps engineer executes `azd up` to provision cloud resources. The deployment fails during the Azure AI Foundry hub creation in `infra/main.bicep` with error code `AccountNameAlreadyExists`.",
    "question": "Which Bicep parameterization best practice or naming convention from `infra/abbreviations.json` solves this global DNS naming collision?",
    "options": [
      "Append `uniqueString(resourceGroup().id)` to the `abbreviations.aiAccount` prefix when declaring the resource name in `main.bicep`.",
      "Hardcode a random 4-digit integer in `main.parameters.json` under `environmentName` without using `uniqueString()`.",
      "Change the target Azure region in `azure.yaml` to a paired secondary region.",
      "Set the `publicNetworkAccess` parameter to `Disabled` in the Cognitive Services Bicep module."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In Azure AI Foundry and Cognitive Services, hub names must be globally unique. Using Bicep's `uniqueString(resourceGroup().id)` concatenated with `abbreviations.json` prefixes ensures deterministically unique names per environment without manual intervention."
  },
  {
    "id": 3282,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "During automated tear-down of test environment `env-test-9`, the DevOps team runs `azd down`. However, the next deployment fails because the Cognitive Services account is locked in a soft-delete recovery state.",
    "question": "Which exact Azure Developer CLI (`azd`) command flag must be executed to permanently bypass the 90-day soft-delete retention period?",
    "options": [
      "azd down --force --purge",
      "azd down --delete-all --no-wait",
      "az group delete --name rg-env-test --yes --no-wait",
      "azd provision --reset-quota --purge"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Standard `azd down` or `az group delete` places Cognitive Services and Azure Key Vault into soft-delete state. Executing `azd down --force --purge` instructs the Azure Developer CLI to permanently purge soft-deleted resources immediately."
  },
  {
    "id": 3283,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "You are reviewing `infra/core/ai/project.bicep` for the Trail Guide GenAIOps setup (#9). The project must automatically link to an existing Azure Log Analytics workspace and Application Insights instance for OpenTelemetry tracing.",
    "question": "Which Bicep property block within the `Microsoft.MachineLearningServices/workspaces` resource correctly establishes the Application Insights dependency?",
    "options": [
      "applicationInsights: applicationInsights.id",
      "monitoringWorkspace: logAnalyticsWorkspace.properties.customerId",
      "telemetryConfig: { instrumentationKey: applicationInsights.properties.InstrumentationKey }",
      "diagnosticSettings: { workspaceId: logAnalyticsWorkspace.id }"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In Azure AI Foundry project declarations (`Microsoft.MachineLearningServices/workspaces`), linking observability requires setting the `applicationInsights` property directly to the resource ID (`applicationInsights.id`) of the Application Insights instance."
  },
  {
    "id": 3284,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "An MLOps engineer is configuring `azure.yaml` for multi-environment provisioning (Development, Staging, Production #9). They need `azd` to pass custom tag values to `infra/main.bicep` during pipeline execution.",
    "question": "How should custom environment variables be passed into Bicep parameters using `azd` configuration?",
    "options": [
      "Define them in `.azure/environment/api.env` or use `azd env set <PARAM_NAME> <VALUE>`, which automatically maps to Bicep parameters of matching names.",
      "Modify the `azure.yaml` file to include a `bicepParameters` array with hardcoded plain text values.",
      "Pass them as command-line arguments using `azd up --bicep-arg param=value`.",
      "Write a custom shell script to replace tokens inside `main.parameters.json` before calling `azd provision`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: The Azure Developer CLI (`azd`) automatically maps environment variables set via `azd env set` (stored in `.azure/<env>/.env`) to Bicep parameters of the exact same name during `azd provision`."
  },
  {
    "id": 3285,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "In `infra/main.bicep` (#9), you need to deploy an Azure OpenAI model deployment (`gpt-5.1`) with a specific token capacity (PTU/PTM or Standard TPM rate limits).",
    "question": "Which resource type and SKU configuration syntax is required inside the model deployment module?",
    "options": [
      "resource modelDeployment 'Microsoft.CognitiveServices/accounts/deployments@2023-05-01' = { sku: { name: 'Standard', capacity: 30 } ... }",
      "resource modelDeployment 'Microsoft.MachineLearningServices/workspaces/models@2023-08-01-preview' = { properties: { tpmLimit: 30000 } ... }",
      "resource openai 'Microsoft.AI/foundry/models@2024-01-01' = { capacity: '30k-tokens' }",
      "resource deployment 'Microsoft.OpenAI/endpoints/deployments@2023-10-01' = { rateLimit: 3000 }"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Azure OpenAI model deployments are declared as child resources under `Microsoft.CognitiveServices/accounts/deployments`. The rate limit (in thousands of TPM) is controlled by the `sku.capacity` integer property."
  },
  {
    "id": 3286,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "A security audit of Trail Guide environment #9 reveals that the Azure AI Foundry storage account allows public blob access. You must enforce private endpoint isolation in Bicep.",
    "question": "Which two Bicep properties must be set on the `Microsoft.Storage/storageAccounts` resource to disable public internet access?",
    "options": [
      "publicNetworkAccess: 'Disabled' and allowBlobPublicAccess: false",
      "networkRuleSet: { defaultAction: 'Deny' } and encryption: { services: { blob: { enabled: true } } }",
      "privateEndpointConnections: [ { properties: { privateLinkServiceConnectionState: { status: 'Approved' } } } ]",
      "firewallRules: [ { ipAddressOrRange: '10.0.0.0/16' } ] and requireHttpsTrafficOnly: true"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: To fully lock down an Azure Storage Account against public internet exposure in Bicep, explicitly set `publicNetworkAccess: 'Disabled'` and `allowBlobPublicAccess: false`."
  },
  {
    "id": 3287,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "During CI/CD automated deployment #9, Bicep deployment fails with `PrincipalNotFound` when assigning the `Cognitive Services OpenAI User` role to the Trail Guide managed identity.",
    "question": "Why does role assignment fail immediately after managed identity creation, and how should it be fixed in Bicep?",
    "options": [
      "Azure AD / Entra ID propagation delay; fix by adding `dependsOn: [ identity ]` and setting `principalType: 'ServicePrincipal'` in the role assignment.",
      "The role definition ID is incorrect; replace it with the GUID for Owner role.",
      "Managed identities cannot be assigned roles in Bicep; assign via Azure CLI post-deployment.",
      "The Bicep API version is deprecated; upgrade `Microsoft.Authorization/roleAssignments` to `2015-07-01`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: When creating a user-assigned identity and assigning roles in the same Bicep template, Entra ID replication lag can cause `PrincipalNotFound`. Setting `principalType: 'ServicePrincipal'` helps Azure Resource Manager retry appropriately."
  },
  {
    "id": 3288,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "You are building a custom Bicep module `infra/core/search/ai-search.bicep` (#9) to host the vector database for Trail Guide RAG grounding.",
    "question": "Which SKU name is the minimum required in Azure AI Search to support vector search with semantic hybrid ranking?",
    "options": [
      "'basic' or 'standard' (Free tier does not support semantic ranking scalable vector index storage)",
      "'free' (supports unlimited vector dimensions and semantic ranking)",
      "'storage_optimized_l1' only",
      "'premium_p3' only"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: While Basic tier supports vector search, semantic ranking and enterprise vector scaling require at least Basic or Standard tier in Azure AI Search. Free tier lacks necessary capacity."
  },
  {
    "id": 3289,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "An MLOps engineer wants to modularize `infra/main.bicep` (#9) so that the monitoring stack (Log Analytics + App Insights) is deployed only if `enableMonitoring` parameter is true.",
    "question": "Which Bicep conditional deployment syntax is correct for module invocation?",
    "options": [
      "module monitoring 'core/monitor/monitoring.bicep' = if (enableMonitoring) { name: 'monitor-deploy', params: { ... } }",
      "if (enableMonitoring) { module monitoring 'core/monitor/monitoring.bicep' = { ... } }",
      "module monitoring 'core/monitor/monitoring.bicep' ? { ... } : null",
      "resource monitoring 'core/monitor/monitoring.bicep' = [for item in enableMonitoring: { ... }]"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In Bicep, conditional deployment of a module or resource is written using the `= if (condition)` syntax directly after the module declaration string."
  },
  {
    "id": 3290,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "You are configuring Key Vault access policy in `infra/core/security/keyvault.bicep` (#9) for Azure AI Foundry secrets encryption.",
    "question": "Which modern Azure best practice should replace legacy access policies in enterprise Bicep templates?",
    "options": [
      "Set `enableRbacAuthorization: true` on Key Vault and assign Entra ID RBAC roles (e.g., Key Vault Secrets Officer).",
      "Use Key Vault Access Policies with wildcard permissions (`secrets: [ 'all' ]`).",
      "Store secrets directly in `azure.yaml` plaintext environment variables.",
      "Disable Key Vault firewall and allow all networks."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Modern Azure enterprise architecture mandates setting `enableRbacAuthorization: true` on Azure Key Vaults, replacing legacy access policies with granular Azure RBAC roles."
  },
  {
    "id": 3291,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "In the Adventure Works Trail Guide project (iteration #10), an MLOps engineer executes `azd up` to provision cloud resources. The deployment fails during the Azure AI Foundry hub creation in `infra/main.bicep` with error code `AccountNameAlreadyExists`.",
    "question": "Which Bicep parameterization best practice or naming convention from `infra/abbreviations.json` solves this global DNS naming collision?",
    "options": [
      "Append `uniqueString(resourceGroup().id)` to the `abbreviations.aiAccount` prefix when declaring the resource name in `main.bicep`.",
      "Hardcode a random 4-digit integer in `main.parameters.json` under `environmentName` without using `uniqueString()`.",
      "Change the target Azure region in `azure.yaml` to a paired secondary region.",
      "Set the `publicNetworkAccess` parameter to `Disabled` in the Cognitive Services Bicep module."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In Azure AI Foundry and Cognitive Services, hub names must be globally unique. Using Bicep's `uniqueString(resourceGroup().id)` concatenated with `abbreviations.json` prefixes ensures deterministically unique names per environment without manual intervention."
  },
  {
    "id": 3292,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "During automated tear-down of test environment `env-test-10`, the DevOps team runs `azd down`. However, the next deployment fails because the Cognitive Services account is locked in a soft-delete recovery state.",
    "question": "Which exact Azure Developer CLI (`azd`) command flag must be executed to permanently bypass the 90-day soft-delete retention period?",
    "options": [
      "azd down --force --purge",
      "azd down --delete-all --no-wait",
      "az group delete --name rg-env-test --yes --no-wait",
      "azd provision --reset-quota --purge"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Standard `azd down` or `az group delete` places Cognitive Services and Azure Key Vault into soft-delete state. Executing `azd down --force --purge` instructs the Azure Developer CLI to permanently purge soft-deleted resources immediately."
  },
  {
    "id": 3293,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "You are reviewing `infra/core/ai/project.bicep` for the Trail Guide GenAIOps setup (#10). The project must automatically link to an existing Azure Log Analytics workspace and Application Insights instance for OpenTelemetry tracing.",
    "question": "Which Bicep property block within the `Microsoft.MachineLearningServices/workspaces` resource correctly establishes the Application Insights dependency?",
    "options": [
      "applicationInsights: applicationInsights.id",
      "monitoringWorkspace: logAnalyticsWorkspace.properties.customerId",
      "telemetryConfig: { instrumentationKey: applicationInsights.properties.InstrumentationKey }",
      "diagnosticSettings: { workspaceId: logAnalyticsWorkspace.id }"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In Azure AI Foundry project declarations (`Microsoft.MachineLearningServices/workspaces`), linking observability requires setting the `applicationInsights` property directly to the resource ID (`applicationInsights.id`) of the Application Insights instance."
  },
  {
    "id": 3294,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "An MLOps engineer is configuring `azure.yaml` for multi-environment provisioning (Development, Staging, Production #10). They need `azd` to pass custom tag values to `infra/main.bicep` during pipeline execution.",
    "question": "How should custom environment variables be passed into Bicep parameters using `azd` configuration?",
    "options": [
      "Define them in `.azure/environment/api.env` or use `azd env set <PARAM_NAME> <VALUE>`, which automatically maps to Bicep parameters of matching names.",
      "Modify the `azure.yaml` file to include a `bicepParameters` array with hardcoded plain text values.",
      "Pass them as command-line arguments using `azd up --bicep-arg param=value`.",
      "Write a custom shell script to replace tokens inside `main.parameters.json` before calling `azd provision`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: The Azure Developer CLI (`azd`) automatically maps environment variables set via `azd env set` (stored in `.azure/<env>/.env`) to Bicep parameters of the exact same name during `azd provision`."
  },
  {
    "id": 3295,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "In `infra/main.bicep` (#10), you need to deploy an Azure OpenAI model deployment (`gpt-5.1`) with a specific token capacity (PTU/PTM or Standard TPM rate limits).",
    "question": "Which resource type and SKU configuration syntax is required inside the model deployment module?",
    "options": [
      "resource modelDeployment 'Microsoft.CognitiveServices/accounts/deployments@2023-05-01' = { sku: { name: 'Standard', capacity: 30 } ... }",
      "resource modelDeployment 'Microsoft.MachineLearningServices/workspaces/models@2023-08-01-preview' = { properties: { tpmLimit: 30000 } ... }",
      "resource openai 'Microsoft.AI/foundry/models@2024-01-01' = { capacity: '30k-tokens' }",
      "resource deployment 'Microsoft.OpenAI/endpoints/deployments@2023-10-01' = { rateLimit: 3000 }"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Azure OpenAI model deployments are declared as child resources under `Microsoft.CognitiveServices/accounts/deployments`. The rate limit (in thousands of TPM) is controlled by the `sku.capacity` integer property."
  },
  {
    "id": 3296,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "A security audit of Trail Guide environment #10 reveals that the Azure AI Foundry storage account allows public blob access. You must enforce private endpoint isolation in Bicep.",
    "question": "Which two Bicep properties must be set on the `Microsoft.Storage/storageAccounts` resource to disable public internet access?",
    "options": [
      "publicNetworkAccess: 'Disabled' and allowBlobPublicAccess: false",
      "networkRuleSet: { defaultAction: 'Deny' } and encryption: { services: { blob: { enabled: true } } }",
      "privateEndpointConnections: [ { properties: { privateLinkServiceConnectionState: { status: 'Approved' } } } ]",
      "firewallRules: [ { ipAddressOrRange: '10.0.0.0/16' } ] and requireHttpsTrafficOnly: true"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: To fully lock down an Azure Storage Account against public internet exposure in Bicep, explicitly set `publicNetworkAccess: 'Disabled'` and `allowBlobPublicAccess: false`."
  },
  {
    "id": 3297,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "During CI/CD automated deployment #10, Bicep deployment fails with `PrincipalNotFound` when assigning the `Cognitive Services OpenAI User` role to the Trail Guide managed identity.",
    "question": "Why does role assignment fail immediately after managed identity creation, and how should it be fixed in Bicep?",
    "options": [
      "Azure AD / Entra ID propagation delay; fix by adding `dependsOn: [ identity ]` and setting `principalType: 'ServicePrincipal'` in the role assignment.",
      "The role definition ID is incorrect; replace it with the GUID for Owner role.",
      "Managed identities cannot be assigned roles in Bicep; assign via Azure CLI post-deployment.",
      "The Bicep API version is deprecated; upgrade `Microsoft.Authorization/roleAssignments` to `2015-07-01`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: When creating a user-assigned identity and assigning roles in the same Bicep template, Entra ID replication lag can cause `PrincipalNotFound`. Setting `principalType: 'ServicePrincipal'` helps Azure Resource Manager retry appropriately."
  },
  {
    "id": 3298,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "You are building a custom Bicep module `infra/core/search/ai-search.bicep` (#10) to host the vector database for Trail Guide RAG grounding.",
    "question": "Which SKU name is the minimum required in Azure AI Search to support vector search with semantic hybrid ranking?",
    "options": [
      "'basic' or 'standard' (Free tier does not support semantic ranking scalable vector index storage)",
      "'free' (supports unlimited vector dimensions and semantic ranking)",
      "'storage_optimized_l1' only",
      "'premium_p3' only"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: While Basic tier supports vector search, semantic ranking and enterprise vector scaling require at least Basic or Standard tier in Azure AI Search. Free tier lacks necessary capacity."
  },
  {
    "id": 3299,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "An MLOps engineer wants to modularize `infra/main.bicep` (#10) so that the monitoring stack (Log Analytics + App Insights) is deployed only if `enableMonitoring` parameter is true.",
    "question": "Which Bicep conditional deployment syntax is correct for module invocation?",
    "options": [
      "module monitoring 'core/monitor/monitoring.bicep' = if (enableMonitoring) { name: 'monitor-deploy', params: { ... } }",
      "if (enableMonitoring) { module monitoring 'core/monitor/monitoring.bicep' = { ... } }",
      "module monitoring 'core/monitor/monitoring.bicep' ? { ... } : null",
      "resource monitoring 'core/monitor/monitoring.bicep' = [for item in enableMonitoring: { ... }]"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In Bicep, conditional deployment of a module or resource is written using the `= if (condition)` syntax directly after the module declaration string."
  },
  {
    "id": 3300,
    "track": "T1",
    "domain": "Track 1: Bicep IaC & AZD Infrastructure Provisioning",
    "difficulty": "Hard",
    "type": "single",
    "scenario": "You are configuring Key Vault access policy in `infra/core/security/keyvault.bicep` (#10) for Azure AI Foundry secrets encryption.",
    "question": "Which modern Azure best practice should replace legacy access policies in enterprise Bicep templates?",
    "options": [
      "Set `enableRbacAuthorization: true` on Key Vault and assign Entra ID RBAC roles (e.g., Key Vault Secrets Officer).",
      "Use Key Vault Access Policies with wildcard permissions (`secrets: [ 'all' ]`).",
      "Store secrets directly in `azure.yaml` plaintext environment variables.",
      "Disable Key Vault firewall and allow all networks."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Modern Azure enterprise architecture mandates setting `enableRbacAuthorization: true` on Azure Key Vaults, replacing legacy access policies with granular Azure RBAC roles."
  }
];
