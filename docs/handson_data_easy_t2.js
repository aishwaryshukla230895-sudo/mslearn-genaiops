window.HANDSON_DATA_EASY_T2 = [
  {
    "id": 2101,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Adventure Works Core Hub` implementing ``azure.ai.projects.AIProjectClient` Initialization`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `initializing `AIProjectClient.from_connection_string`` (Implementation Task #1).",
    "question": "[EASY Coding Task #1] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for ``azure.ai.projects.AIProjectClient` Initialization` when implementing `initializing `AIProjectClient.from_connection_string``?",
    "options": [
      "A) Writing `project_client = AIProjectClient.from_connection_string(credential=DefaultAzureCredential(), conn_str='endpoint=https://...;subscription_id=...')`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `project_client = AIProjectClient.from_connection_string(credential=DefaultAzureCredential(), conn_str='endpoint=https://...;subscription_id=...')`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for ``azure.ai.projects.AIProjectClient` Initialization`, Writing `project_client = AIProjectClient.from_connection_string(credential=DefaultAzureCredential(), conn_str='endpoint=https://...;subscription_id=...')`. is the officially required syntax for `initializing `AIProjectClient.from_connection_string``. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2102,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Contoso Health AI` implementing `OpenAI Chat Completions Client (`get_chat_completions_client`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `initializing `AIProjectClient.from_connection_string`` (Implementation Task #2).",
    "question": "[EASY Coding Task #2] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `OpenAI Chat Completions Client (`get_chat_completions_client`)` when implementing `initializing `AIProjectClient.from_connection_string``?",
    "options": [
      "A) Writing `project_client = AIProjectClient.from_connection_string(credential=DefaultAzureCredential(), conn_str='endpoint=https://...;subscription_id=...')`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `project_client = AIProjectClient.from_connection_string(credential=DefaultAzureCredential(), conn_str='endpoint=https://...;subscription_id=...')`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `OpenAI Chat Completions Client (`get_chat_completions_client`)`, Writing `project_client = AIProjectClient.from_connection_string(credential=DefaultAzureCredential(), conn_str='endpoint=https://...;subscription_id=...')`. is the officially required syntax for `initializing `AIProjectClient.from_connection_string``. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2103,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Fabrikam Logistics Agent` implementing `OpenAI Embeddings Client (`get_embeddings_client`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `initializing `AIProjectClient.from_connection_string`` (Implementation Task #3).",
    "question": "[EASY Coding Task #3] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `OpenAI Embeddings Client (`get_embeddings_client`)` when implementing `initializing `AIProjectClient.from_connection_string``?",
    "options": [
      "A) Writing `project_client = AIProjectClient.from_connection_string(credential=DefaultAzureCredential(), conn_str='endpoint=https://...;subscription_id=...')`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `project_client = AIProjectClient.from_connection_string(credential=DefaultAzureCredential(), conn_str='endpoint=https://...;subscription_id=...')`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `OpenAI Embeddings Client (`get_embeddings_client`)`, Writing `project_client = AIProjectClient.from_connection_string(credential=DefaultAzureCredential(), conn_str='endpoint=https://...;subscription_id=...')`. is the officially required syntax for `initializing `AIProjectClient.from_connection_string``. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2104,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Trey Research Lab` implementing `Agent Tool Calling Payload (`tools=[{'type': 'function'...}]`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `initializing `AIProjectClient.from_connection_string`` (Implementation Task #4).",
    "question": "[EASY Coding Task #4] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Agent Tool Calling Payload (`tools=[{'type': 'function'...}]`)` for `initializing `AIProjectClient.from_connection_string``? (Select three)",
    "options": [
      "A) Writing `project_client = AIProjectClient.from_connection_string(credential=DefaultAzureCredential(), conn_str='endpoint=https://...;subscription_id=...')`.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Agent Tool Calling Payload (`tools=[{'type': 'function'...}]`)` for `initializing `AIProjectClient.from_connection_string``, enterprise coding standards mandate: (1) Writing `project_client = AIProjectClient.from_connection_string(credential=DefaultAzureCredential(), conn_str='endpoint=https://...;subscription_id=...')`., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2105,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Northwind Traders Bot` implementing `File Upload & Agent Vector Store (`project_client.agents`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `initializing `AIProjectClient.from_connection_string`` (Implementation Task #5).",
    "question": "[EASY Coding Task #5] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `File Upload & Agent Vector Store (`project_client.agents`)` when implementing `initializing `AIProjectClient.from_connection_string``?",
    "options": [
      "A) Writing `project_client = AIProjectClient.from_connection_string(credential=DefaultAzureCredential(), conn_str='endpoint=https://...;subscription_id=...')`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `project_client = AIProjectClient.from_connection_string(credential=DefaultAzureCredential(), conn_str='endpoint=https://...;subscription_id=...')`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `File Upload & Agent Vector Store (`project_client.agents`)`, Writing `project_client = AIProjectClient.from_connection_string(credential=DefaultAzureCredential(), conn_str='endpoint=https://...;subscription_id=...')`. is the officially required syntax for `initializing `AIProjectClient.from_connection_string``. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2106,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Woodgrove Bank Virtual Assistant` implementing `Prompt Template Engine (`prompts/trail_guide.jinja2`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `initializing `AIProjectClient.from_connection_string`` (Implementation Task #6).",
    "question": "[EASY Coding Task #6] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Prompt Template Engine (`prompts/trail_guide.jinja2`)` when implementing `initializing `AIProjectClient.from_connection_string``?",
    "options": [
      "A) Writing `project_client = AIProjectClient.from_connection_string(credential=DefaultAzureCredential(), conn_str='endpoint=https://...;subscription_id=...')`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `project_client = AIProjectClient.from_connection_string(credential=DefaultAzureCredential(), conn_str='endpoint=https://...;subscription_id=...')`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Prompt Template Engine (`prompts/trail_guide.jinja2`)`, Writing `project_client = AIProjectClient.from_connection_string(credential=DefaultAzureCredential(), conn_str='endpoint=https://...;subscription_id=...')`. is the officially required syntax for `initializing `AIProjectClient.from_connection_string``. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2107,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Litware Legal Evaluator` implementing `HTTP Rate Limit Handling (`@retry`, `HttpResponseError`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `initializing `AIProjectClient.from_connection_string`` (Implementation Task #7).",
    "question": "[EASY Coding Task #7] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `HTTP Rate Limit Handling (`@retry`, `HttpResponseError`)` when implementing `initializing `AIProjectClient.from_connection_string``?",
    "options": [
      "A) Writing `project_client = AIProjectClient.from_connection_string(credential=DefaultAzureCredential(), conn_str='endpoint=https://...;subscription_id=...')`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `project_client = AIProjectClient.from_connection_string(credential=DefaultAzureCredential(), conn_str='endpoint=https://...;subscription_id=...')`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `HTTP Rate Limit Handling (`@retry`, `HttpResponseError`)`, Writing `project_client = AIProjectClient.from_connection_string(credential=DefaultAzureCredential(), conn_str='endpoint=https://...;subscription_id=...')`. is the officially required syntax for `initializing `AIProjectClient.from_connection_string``. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2108,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `A.Datum Retail Copilot` implementing `OpenTelemetry Tracing Integration (`configure_azure_monitor`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `initializing `AIProjectClient.from_connection_string`` (Implementation Task #8).",
    "question": "[EASY Coding Task #8] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `OpenTelemetry Tracing Integration (`configure_azure_monitor`)` for `initializing `AIProjectClient.from_connection_string``? (Select three)",
    "options": [
      "A) Writing `project_client = AIProjectClient.from_connection_string(credential=DefaultAzureCredential(), conn_str='endpoint=https://...;subscription_id=...')`.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `OpenTelemetry Tracing Integration (`configure_azure_monitor`)` for `initializing `AIProjectClient.from_connection_string``, enterprise coding standards mandate: (1) Writing `project_client = AIProjectClient.from_connection_string(credential=DefaultAzureCredential(), conn_str='endpoint=https://...;subscription_id=...')`., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2109,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Alpine Ski Field Technician` implementing `Streaming Response Handling (`stream=True`, `SSE`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `initializing `AIProjectClient.from_connection_string`` (Implementation Task #9).",
    "question": "[EASY Coding Task #9] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Streaming Response Handling (`stream=True`, `SSE`)` when implementing `initializing `AIProjectClient.from_connection_string``?",
    "options": [
      "A) Writing `project_client = AIProjectClient.from_connection_string(credential=DefaultAzureCredential(), conn_str='endpoint=https://...;subscription_id=...')`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `project_client = AIProjectClient.from_connection_string(credential=DefaultAzureCredential(), conn_str='endpoint=https://...;subscription_id=...')`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Streaming Response Handling (`stream=True`, `SSE`)`, Writing `project_client = AIProjectClient.from_connection_string(credential=DefaultAzureCredential(), conn_str='endpoint=https://...;subscription_id=...')`. is the officially required syntax for `initializing `AIProjectClient.from_connection_string``. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2110,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Tailwind Traders Multi-Agent` implementing `Model Deployment Discovery (`list_models`, `get_deployment`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `initializing `AIProjectClient.from_connection_string`` (Implementation Task #10).",
    "question": "[EASY Coding Task #10] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Model Deployment Discovery (`list_models`, `get_deployment`)` when implementing `initializing `AIProjectClient.from_connection_string``?",
    "options": [
      "A) Writing `project_client = AIProjectClient.from_connection_string(credential=DefaultAzureCredential(), conn_str='endpoint=https://...;subscription_id=...')`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `project_client = AIProjectClient.from_connection_string(credential=DefaultAzureCredential(), conn_str='endpoint=https://...;subscription_id=...')`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Model Deployment Discovery (`list_models`, `get_deployment`)`, Writing `project_client = AIProjectClient.from_connection_string(credential=DefaultAzureCredential(), conn_str='endpoint=https://...;subscription_id=...')`. is the officially required syntax for `initializing `AIProjectClient.from_connection_string``. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2111,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Adventure Works Core Hub` implementing ``azure.ai.projects.AIProjectClient` Initialization`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `retrieving the chat completion client` (Implementation Task #11).",
    "question": "[EASY Coding Task #11] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for ``azure.ai.projects.AIProjectClient` Initialization` when implementing `retrieving the chat completion client`?",
    "options": [
      "A) Executing `chat_client = project_client.inference.get_chat_completions_client()` to obtain an authenticated client.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Executing `chat_client = project_client.inference.get_chat_completions_client()` to obtain an authenticated client.. Explanation: In Microsoft AI-300 enterprise hands-on coding for ``azure.ai.projects.AIProjectClient` Initialization`, Executing `chat_client = project_client.inference.get_chat_completions_client()` to obtain an authenticated client. is the officially required syntax for `retrieving the chat completion client`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2112,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Contoso Health AI` implementing `OpenAI Chat Completions Client (`get_chat_completions_client`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `retrieving the chat completion client` (Implementation Task #12).",
    "question": "[EASY Coding Task #12] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `OpenAI Chat Completions Client (`get_chat_completions_client`)` for `retrieving the chat completion client`? (Select three)",
    "options": [
      "A) Executing `chat_client = project_client.inference.get_chat_completions_client()` to obtain an authenticated client.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `OpenAI Chat Completions Client (`get_chat_completions_client`)` for `retrieving the chat completion client`, enterprise coding standards mandate: (1) Executing `chat_client = project_client.inference.get_chat_completions_client()` to obtain an authenticated client., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2113,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Fabrikam Logistics Agent` implementing `OpenAI Embeddings Client (`get_embeddings_client`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `retrieving the chat completion client` (Implementation Task #13).",
    "question": "[EASY Coding Task #13] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `OpenAI Embeddings Client (`get_embeddings_client`)` when implementing `retrieving the chat completion client`?",
    "options": [
      "A) Executing `chat_client = project_client.inference.get_chat_completions_client()` to obtain an authenticated client.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Executing `chat_client = project_client.inference.get_chat_completions_client()` to obtain an authenticated client.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `OpenAI Embeddings Client (`get_embeddings_client`)`, Executing `chat_client = project_client.inference.get_chat_completions_client()` to obtain an authenticated client. is the officially required syntax for `retrieving the chat completion client`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2114,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Trey Research Lab` implementing `Agent Tool Calling Payload (`tools=[{'type': 'function'...}]`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `retrieving the chat completion client` (Implementation Task #14).",
    "question": "[EASY Coding Task #14] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Agent Tool Calling Payload (`tools=[{'type': 'function'...}]`)` when implementing `retrieving the chat completion client`?",
    "options": [
      "A) Executing `chat_client = project_client.inference.get_chat_completions_client()` to obtain an authenticated client.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Executing `chat_client = project_client.inference.get_chat_completions_client()` to obtain an authenticated client.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Agent Tool Calling Payload (`tools=[{'type': 'function'...}]`)`, Executing `chat_client = project_client.inference.get_chat_completions_client()` to obtain an authenticated client. is the officially required syntax for `retrieving the chat completion client`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2115,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Northwind Traders Bot` implementing `File Upload & Agent Vector Store (`project_client.agents`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `retrieving the chat completion client` (Implementation Task #15).",
    "question": "[EASY Coding Task #15] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `File Upload & Agent Vector Store (`project_client.agents`)` when implementing `retrieving the chat completion client`?",
    "options": [
      "A) Executing `chat_client = project_client.inference.get_chat_completions_client()` to obtain an authenticated client.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Executing `chat_client = project_client.inference.get_chat_completions_client()` to obtain an authenticated client.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `File Upload & Agent Vector Store (`project_client.agents`)`, Executing `chat_client = project_client.inference.get_chat_completions_client()` to obtain an authenticated client. is the officially required syntax for `retrieving the chat completion client`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2116,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Woodgrove Bank Virtual Assistant` implementing `Prompt Template Engine (`prompts/trail_guide.jinja2`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `retrieving the chat completion client` (Implementation Task #16).",
    "question": "[EASY Coding Task #16] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Prompt Template Engine (`prompts/trail_guide.jinja2`)` for `retrieving the chat completion client`? (Select three)",
    "options": [
      "A) Executing `chat_client = project_client.inference.get_chat_completions_client()` to obtain an authenticated client.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Prompt Template Engine (`prompts/trail_guide.jinja2`)` for `retrieving the chat completion client`, enterprise coding standards mandate: (1) Executing `chat_client = project_client.inference.get_chat_completions_client()` to obtain an authenticated client., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2117,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Litware Legal Evaluator` implementing `HTTP Rate Limit Handling (`@retry`, `HttpResponseError`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `retrieving the chat completion client` (Implementation Task #17).",
    "question": "[EASY Coding Task #17] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `HTTP Rate Limit Handling (`@retry`, `HttpResponseError`)` when implementing `retrieving the chat completion client`?",
    "options": [
      "A) Executing `chat_client = project_client.inference.get_chat_completions_client()` to obtain an authenticated client.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Executing `chat_client = project_client.inference.get_chat_completions_client()` to obtain an authenticated client.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `HTTP Rate Limit Handling (`@retry`, `HttpResponseError`)`, Executing `chat_client = project_client.inference.get_chat_completions_client()` to obtain an authenticated client. is the officially required syntax for `retrieving the chat completion client`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2118,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `A.Datum Retail Copilot` implementing `OpenTelemetry Tracing Integration (`configure_azure_monitor`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `retrieving the chat completion client` (Implementation Task #18).",
    "question": "[EASY Coding Task #18] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `OpenTelemetry Tracing Integration (`configure_azure_monitor`)` when implementing `retrieving the chat completion client`?",
    "options": [
      "A) Executing `chat_client = project_client.inference.get_chat_completions_client()` to obtain an authenticated client.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Executing `chat_client = project_client.inference.get_chat_completions_client()` to obtain an authenticated client.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `OpenTelemetry Tracing Integration (`configure_azure_monitor`)`, Executing `chat_client = project_client.inference.get_chat_completions_client()` to obtain an authenticated client. is the officially required syntax for `retrieving the chat completion client`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2119,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Alpine Ski Field Technician` implementing `Streaming Response Handling (`stream=True`, `SSE`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `retrieving the chat completion client` (Implementation Task #19).",
    "question": "[EASY Coding Task #19] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Streaming Response Handling (`stream=True`, `SSE`)` when implementing `retrieving the chat completion client`?",
    "options": [
      "A) Executing `chat_client = project_client.inference.get_chat_completions_client()` to obtain an authenticated client.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Executing `chat_client = project_client.inference.get_chat_completions_client()` to obtain an authenticated client.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Streaming Response Handling (`stream=True`, `SSE`)`, Executing `chat_client = project_client.inference.get_chat_completions_client()` to obtain an authenticated client. is the officially required syntax for `retrieving the chat completion client`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2120,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Tailwind Traders Multi-Agent` implementing `Model Deployment Discovery (`list_models`, `get_deployment`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `retrieving the chat completion client` (Implementation Task #20).",
    "question": "[EASY Coding Task #20] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Model Deployment Discovery (`list_models`, `get_deployment`)` for `retrieving the chat completion client`? (Select three)",
    "options": [
      "A) Executing `chat_client = project_client.inference.get_chat_completions_client()` to obtain an authenticated client.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Model Deployment Discovery (`list_models`, `get_deployment`)` for `retrieving the chat completion client`, enterprise coding standards mandate: (1) Executing `chat_client = project_client.inference.get_chat_completions_client()` to obtain an authenticated client., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2121,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Adventure Works Core Hub` implementing ``azure.ai.projects.AIProjectClient` Initialization`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `calling `chat.completions.create` for a basic prompt` (Implementation Task #21).",
    "question": "[EASY Coding Task #21] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for ``azure.ai.projects.AIProjectClient` Initialization` when implementing `calling `chat.completions.create` for a basic prompt`?",
    "options": [
      "A) Writing `response = chat_client.chat.completions.create(model='gpt-4o', messages=[{'role': 'user', 'content': 'Hello'}])`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `response = chat_client.chat.completions.create(model='gpt-4o', messages=[{'role': 'user', 'content': 'Hello'}])`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for ``azure.ai.projects.AIProjectClient` Initialization`, Writing `response = chat_client.chat.completions.create(model='gpt-4o', messages=[{'role': 'user', 'content': 'Hello'}])`. is the officially required syntax for `calling `chat.completions.create` for a basic prompt`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2122,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Contoso Health AI` implementing `OpenAI Chat Completions Client (`get_chat_completions_client`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `calling `chat.completions.create` for a basic prompt` (Implementation Task #22).",
    "question": "[EASY Coding Task #22] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `OpenAI Chat Completions Client (`get_chat_completions_client`)` when implementing `calling `chat.completions.create` for a basic prompt`?",
    "options": [
      "A) Writing `response = chat_client.chat.completions.create(model='gpt-4o', messages=[{'role': 'user', 'content': 'Hello'}])`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `response = chat_client.chat.completions.create(model='gpt-4o', messages=[{'role': 'user', 'content': 'Hello'}])`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `OpenAI Chat Completions Client (`get_chat_completions_client`)`, Writing `response = chat_client.chat.completions.create(model='gpt-4o', messages=[{'role': 'user', 'content': 'Hello'}])`. is the officially required syntax for `calling `chat.completions.create` for a basic prompt`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2123,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Fabrikam Logistics Agent` implementing `OpenAI Embeddings Client (`get_embeddings_client`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `calling `chat.completions.create` for a basic prompt` (Implementation Task #23).",
    "question": "[EASY Coding Task #23] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `OpenAI Embeddings Client (`get_embeddings_client`)` when implementing `calling `chat.completions.create` for a basic prompt`?",
    "options": [
      "A) Writing `response = chat_client.chat.completions.create(model='gpt-4o', messages=[{'role': 'user', 'content': 'Hello'}])`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `response = chat_client.chat.completions.create(model='gpt-4o', messages=[{'role': 'user', 'content': 'Hello'}])`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `OpenAI Embeddings Client (`get_embeddings_client`)`, Writing `response = chat_client.chat.completions.create(model='gpt-4o', messages=[{'role': 'user', 'content': 'Hello'}])`. is the officially required syntax for `calling `chat.completions.create` for a basic prompt`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2124,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Trey Research Lab` implementing `Agent Tool Calling Payload (`tools=[{'type': 'function'...}]`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `calling `chat.completions.create` for a basic prompt` (Implementation Task #24).",
    "question": "[EASY Coding Task #24] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Agent Tool Calling Payload (`tools=[{'type': 'function'...}]`)` for `calling `chat.completions.create` for a basic prompt`? (Select three)",
    "options": [
      "A) Writing `response = chat_client.chat.completions.create(model='gpt-4o', messages=[{'role': 'user', 'content': 'Hello'}])`.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Agent Tool Calling Payload (`tools=[{'type': 'function'...}]`)` for `calling `chat.completions.create` for a basic prompt`, enterprise coding standards mandate: (1) Writing `response = chat_client.chat.completions.create(model='gpt-4o', messages=[{'role': 'user', 'content': 'Hello'}])`., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2125,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Northwind Traders Bot` implementing `File Upload & Agent Vector Store (`project_client.agents`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `calling `chat.completions.create` for a basic prompt` (Implementation Task #25).",
    "question": "[EASY Coding Task #25] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `File Upload & Agent Vector Store (`project_client.agents`)` when implementing `calling `chat.completions.create` for a basic prompt`?",
    "options": [
      "A) Writing `response = chat_client.chat.completions.create(model='gpt-4o', messages=[{'role': 'user', 'content': 'Hello'}])`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `response = chat_client.chat.completions.create(model='gpt-4o', messages=[{'role': 'user', 'content': 'Hello'}])`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `File Upload & Agent Vector Store (`project_client.agents`)`, Writing `response = chat_client.chat.completions.create(model='gpt-4o', messages=[{'role': 'user', 'content': 'Hello'}])`. is the officially required syntax for `calling `chat.completions.create` for a basic prompt`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2126,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Woodgrove Bank Virtual Assistant` implementing `Prompt Template Engine (`prompts/trail_guide.jinja2`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `calling `chat.completions.create` for a basic prompt` (Implementation Task #26).",
    "question": "[EASY Coding Task #26] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Prompt Template Engine (`prompts/trail_guide.jinja2`)` when implementing `calling `chat.completions.create` for a basic prompt`?",
    "options": [
      "A) Writing `response = chat_client.chat.completions.create(model='gpt-4o', messages=[{'role': 'user', 'content': 'Hello'}])`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `response = chat_client.chat.completions.create(model='gpt-4o', messages=[{'role': 'user', 'content': 'Hello'}])`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Prompt Template Engine (`prompts/trail_guide.jinja2`)`, Writing `response = chat_client.chat.completions.create(model='gpt-4o', messages=[{'role': 'user', 'content': 'Hello'}])`. is the officially required syntax for `calling `chat.completions.create` for a basic prompt`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2127,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Litware Legal Evaluator` implementing `HTTP Rate Limit Handling (`@retry`, `HttpResponseError`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `calling `chat.completions.create` for a basic prompt` (Implementation Task #27).",
    "question": "[EASY Coding Task #27] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `HTTP Rate Limit Handling (`@retry`, `HttpResponseError`)` when implementing `calling `chat.completions.create` for a basic prompt`?",
    "options": [
      "A) Writing `response = chat_client.chat.completions.create(model='gpt-4o', messages=[{'role': 'user', 'content': 'Hello'}])`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `response = chat_client.chat.completions.create(model='gpt-4o', messages=[{'role': 'user', 'content': 'Hello'}])`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `HTTP Rate Limit Handling (`@retry`, `HttpResponseError`)`, Writing `response = chat_client.chat.completions.create(model='gpt-4o', messages=[{'role': 'user', 'content': 'Hello'}])`. is the officially required syntax for `calling `chat.completions.create` for a basic prompt`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2128,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `A.Datum Retail Copilot` implementing `OpenTelemetry Tracing Integration (`configure_azure_monitor`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `calling `chat.completions.create` for a basic prompt` (Implementation Task #28).",
    "question": "[EASY Coding Task #28] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `OpenTelemetry Tracing Integration (`configure_azure_monitor`)` for `calling `chat.completions.create` for a basic prompt`? (Select three)",
    "options": [
      "A) Writing `response = chat_client.chat.completions.create(model='gpt-4o', messages=[{'role': 'user', 'content': 'Hello'}])`.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `OpenTelemetry Tracing Integration (`configure_azure_monitor`)` for `calling `chat.completions.create` for a basic prompt`, enterprise coding standards mandate: (1) Writing `response = chat_client.chat.completions.create(model='gpt-4o', messages=[{'role': 'user', 'content': 'Hello'}])`., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2129,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Alpine Ski Field Technician` implementing `Streaming Response Handling (`stream=True`, `SSE`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `calling `chat.completions.create` for a basic prompt` (Implementation Task #29).",
    "question": "[EASY Coding Task #29] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Streaming Response Handling (`stream=True`, `SSE`)` when implementing `calling `chat.completions.create` for a basic prompt`?",
    "options": [
      "A) Writing `response = chat_client.chat.completions.create(model='gpt-4o', messages=[{'role': 'user', 'content': 'Hello'}])`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `response = chat_client.chat.completions.create(model='gpt-4o', messages=[{'role': 'user', 'content': 'Hello'}])`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Streaming Response Handling (`stream=True`, `SSE`)`, Writing `response = chat_client.chat.completions.create(model='gpt-4o', messages=[{'role': 'user', 'content': 'Hello'}])`. is the officially required syntax for `calling `chat.completions.create` for a basic prompt`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2130,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Tailwind Traders Multi-Agent` implementing `Model Deployment Discovery (`list_models`, `get_deployment`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `calling `chat.completions.create` for a basic prompt` (Implementation Task #30).",
    "question": "[EASY Coding Task #30] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Model Deployment Discovery (`list_models`, `get_deployment`)` when implementing `calling `chat.completions.create` for a basic prompt`?",
    "options": [
      "A) Writing `response = chat_client.chat.completions.create(model='gpt-4o', messages=[{'role': 'user', 'content': 'Hello'}])`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `response = chat_client.chat.completions.create(model='gpt-4o', messages=[{'role': 'user', 'content': 'Hello'}])`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Model Deployment Discovery (`list_models`, `get_deployment`)`, Writing `response = chat_client.chat.completions.create(model='gpt-4o', messages=[{'role': 'user', 'content': 'Hello'}])`. is the officially required syntax for `calling `chat.completions.create` for a basic prompt`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2131,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Adventure Works Core Hub` implementing ``azure.ai.projects.AIProjectClient` Initialization`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `extracting the text from chat completion response` (Implementation Task #31).",
    "question": "[EASY Coding Task #31] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for ``azure.ai.projects.AIProjectClient` Initialization` when implementing `extracting the text from chat completion response`?",
    "options": [
      "A) Reading `answer_text = response.choices[0].message.content` from the returned `ChatCompletion` object.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Reading `answer_text = response.choices[0].message.content` from the returned `ChatCompletion` object.. Explanation: In Microsoft AI-300 enterprise hands-on coding for ``azure.ai.projects.AIProjectClient` Initialization`, Reading `answer_text = response.choices[0].message.content` from the returned `ChatCompletion` object. is the officially required syntax for `extracting the text from chat completion response`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2132,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Contoso Health AI` implementing `OpenAI Chat Completions Client (`get_chat_completions_client`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `extracting the text from chat completion response` (Implementation Task #32).",
    "question": "[EASY Coding Task #32] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `OpenAI Chat Completions Client (`get_chat_completions_client`)` for `extracting the text from chat completion response`? (Select three)",
    "options": [
      "A) Reading `answer_text = response.choices[0].message.content` from the returned `ChatCompletion` object.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `OpenAI Chat Completions Client (`get_chat_completions_client`)` for `extracting the text from chat completion response`, enterprise coding standards mandate: (1) Reading `answer_text = response.choices[0].message.content` from the returned `ChatCompletion` object., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2133,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Fabrikam Logistics Agent` implementing `OpenAI Embeddings Client (`get_embeddings_client`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `extracting the text from chat completion response` (Implementation Task #33).",
    "question": "[EASY Coding Task #33] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `OpenAI Embeddings Client (`get_embeddings_client`)` when implementing `extracting the text from chat completion response`?",
    "options": [
      "A) Reading `answer_text = response.choices[0].message.content` from the returned `ChatCompletion` object.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Reading `answer_text = response.choices[0].message.content` from the returned `ChatCompletion` object.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `OpenAI Embeddings Client (`get_embeddings_client`)`, Reading `answer_text = response.choices[0].message.content` from the returned `ChatCompletion` object. is the officially required syntax for `extracting the text from chat completion response`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2134,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Trey Research Lab` implementing `Agent Tool Calling Payload (`tools=[{'type': 'function'...}]`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `extracting the text from chat completion response` (Implementation Task #34).",
    "question": "[EASY Coding Task #34] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Agent Tool Calling Payload (`tools=[{'type': 'function'...}]`)` when implementing `extracting the text from chat completion response`?",
    "options": [
      "A) Reading `answer_text = response.choices[0].message.content` from the returned `ChatCompletion` object.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Reading `answer_text = response.choices[0].message.content` from the returned `ChatCompletion` object.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Agent Tool Calling Payload (`tools=[{'type': 'function'...}]`)`, Reading `answer_text = response.choices[0].message.content` from the returned `ChatCompletion` object. is the officially required syntax for `extracting the text from chat completion response`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2135,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Northwind Traders Bot` implementing `File Upload & Agent Vector Store (`project_client.agents`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `extracting the text from chat completion response` (Implementation Task #35).",
    "question": "[EASY Coding Task #35] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `File Upload & Agent Vector Store (`project_client.agents`)` when implementing `extracting the text from chat completion response`?",
    "options": [
      "A) Reading `answer_text = response.choices[0].message.content` from the returned `ChatCompletion` object.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Reading `answer_text = response.choices[0].message.content` from the returned `ChatCompletion` object.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `File Upload & Agent Vector Store (`project_client.agents`)`, Reading `answer_text = response.choices[0].message.content` from the returned `ChatCompletion` object. is the officially required syntax for `extracting the text from chat completion response`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2136,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Woodgrove Bank Virtual Assistant` implementing `Prompt Template Engine (`prompts/trail_guide.jinja2`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `extracting the text from chat completion response` (Implementation Task #36).",
    "question": "[EASY Coding Task #36] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Prompt Template Engine (`prompts/trail_guide.jinja2`)` for `extracting the text from chat completion response`? (Select three)",
    "options": [
      "A) Reading `answer_text = response.choices[0].message.content` from the returned `ChatCompletion` object.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Prompt Template Engine (`prompts/trail_guide.jinja2`)` for `extracting the text from chat completion response`, enterprise coding standards mandate: (1) Reading `answer_text = response.choices[0].message.content` from the returned `ChatCompletion` object., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2137,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Litware Legal Evaluator` implementing `HTTP Rate Limit Handling (`@retry`, `HttpResponseError`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `extracting the text from chat completion response` (Implementation Task #37).",
    "question": "[EASY Coding Task #37] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `HTTP Rate Limit Handling (`@retry`, `HttpResponseError`)` when implementing `extracting the text from chat completion response`?",
    "options": [
      "A) Reading `answer_text = response.choices[0].message.content` from the returned `ChatCompletion` object.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Reading `answer_text = response.choices[0].message.content` from the returned `ChatCompletion` object.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `HTTP Rate Limit Handling (`@retry`, `HttpResponseError`)`, Reading `answer_text = response.choices[0].message.content` from the returned `ChatCompletion` object. is the officially required syntax for `extracting the text from chat completion response`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2138,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `A.Datum Retail Copilot` implementing `OpenTelemetry Tracing Integration (`configure_azure_monitor`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `extracting the text from chat completion response` (Implementation Task #38).",
    "question": "[EASY Coding Task #38] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `OpenTelemetry Tracing Integration (`configure_azure_monitor`)` when implementing `extracting the text from chat completion response`?",
    "options": [
      "A) Reading `answer_text = response.choices[0].message.content` from the returned `ChatCompletion` object.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Reading `answer_text = response.choices[0].message.content` from the returned `ChatCompletion` object.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `OpenTelemetry Tracing Integration (`configure_azure_monitor`)`, Reading `answer_text = response.choices[0].message.content` from the returned `ChatCompletion` object. is the officially required syntax for `extracting the text from chat completion response`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2139,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Alpine Ski Field Technician` implementing `Streaming Response Handling (`stream=True`, `SSE`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `extracting the text from chat completion response` (Implementation Task #39).",
    "question": "[EASY Coding Task #39] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Streaming Response Handling (`stream=True`, `SSE`)` when implementing `extracting the text from chat completion response`?",
    "options": [
      "A) Reading `answer_text = response.choices[0].message.content` from the returned `ChatCompletion` object.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Reading `answer_text = response.choices[0].message.content` from the returned `ChatCompletion` object.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Streaming Response Handling (`stream=True`, `SSE`)`, Reading `answer_text = response.choices[0].message.content` from the returned `ChatCompletion` object. is the officially required syntax for `extracting the text from chat completion response`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2140,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Tailwind Traders Multi-Agent` implementing `Model Deployment Discovery (`list_models`, `get_deployment`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `extracting the text from chat completion response` (Implementation Task #40).",
    "question": "[EASY Coding Task #40] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Model Deployment Discovery (`list_models`, `get_deployment`)` for `extracting the text from chat completion response`? (Select three)",
    "options": [
      "A) Reading `answer_text = response.choices[0].message.content` from the returned `ChatCompletion` object.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Model Deployment Discovery (`list_models`, `get_deployment`)` for `extracting the text from chat completion response`, enterprise coding standards mandate: (1) Reading `answer_text = response.choices[0].message.content` from the returned `ChatCompletion` object., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2141,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Adventure Works Core Hub` implementing ``azure.ai.projects.AIProjectClient` Initialization`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `retrieving the embeddings client from `AIProjectClient`` (Implementation Task #41).",
    "question": "[EASY Coding Task #41] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for ``azure.ai.projects.AIProjectClient` Initialization` when implementing `retrieving the embeddings client from `AIProjectClient``?",
    "options": [
      "A) Executing `embed_client = project_client.inference.get_embeddings_client()` to access vectorization endpoints.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Executing `embed_client = project_client.inference.get_embeddings_client()` to access vectorization endpoints.. Explanation: In Microsoft AI-300 enterprise hands-on coding for ``azure.ai.projects.AIProjectClient` Initialization`, Executing `embed_client = project_client.inference.get_embeddings_client()` to access vectorization endpoints. is the officially required syntax for `retrieving the embeddings client from `AIProjectClient``. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2142,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Contoso Health AI` implementing `OpenAI Chat Completions Client (`get_chat_completions_client`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `retrieving the embeddings client from `AIProjectClient`` (Implementation Task #42).",
    "question": "[EASY Coding Task #42] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `OpenAI Chat Completions Client (`get_chat_completions_client`)` when implementing `retrieving the embeddings client from `AIProjectClient``?",
    "options": [
      "A) Executing `embed_client = project_client.inference.get_embeddings_client()` to access vectorization endpoints.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Executing `embed_client = project_client.inference.get_embeddings_client()` to access vectorization endpoints.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `OpenAI Chat Completions Client (`get_chat_completions_client`)`, Executing `embed_client = project_client.inference.get_embeddings_client()` to access vectorization endpoints. is the officially required syntax for `retrieving the embeddings client from `AIProjectClient``. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2143,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Fabrikam Logistics Agent` implementing `OpenAI Embeddings Client (`get_embeddings_client`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `retrieving the embeddings client from `AIProjectClient`` (Implementation Task #43).",
    "question": "[EASY Coding Task #43] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `OpenAI Embeddings Client (`get_embeddings_client`)` when implementing `retrieving the embeddings client from `AIProjectClient``?",
    "options": [
      "A) Executing `embed_client = project_client.inference.get_embeddings_client()` to access vectorization endpoints.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Executing `embed_client = project_client.inference.get_embeddings_client()` to access vectorization endpoints.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `OpenAI Embeddings Client (`get_embeddings_client`)`, Executing `embed_client = project_client.inference.get_embeddings_client()` to access vectorization endpoints. is the officially required syntax for `retrieving the embeddings client from `AIProjectClient``. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2144,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Trey Research Lab` implementing `Agent Tool Calling Payload (`tools=[{'type': 'function'...}]`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `retrieving the embeddings client from `AIProjectClient`` (Implementation Task #44).",
    "question": "[EASY Coding Task #44] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Agent Tool Calling Payload (`tools=[{'type': 'function'...}]`)` for `retrieving the embeddings client from `AIProjectClient``? (Select three)",
    "options": [
      "A) Executing `embed_client = project_client.inference.get_embeddings_client()` to access vectorization endpoints.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Agent Tool Calling Payload (`tools=[{'type': 'function'...}]`)` for `retrieving the embeddings client from `AIProjectClient``, enterprise coding standards mandate: (1) Executing `embed_client = project_client.inference.get_embeddings_client()` to access vectorization endpoints., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2145,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Northwind Traders Bot` implementing `File Upload & Agent Vector Store (`project_client.agents`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `retrieving the embeddings client from `AIProjectClient`` (Implementation Task #45).",
    "question": "[EASY Coding Task #45] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `File Upload & Agent Vector Store (`project_client.agents`)` when implementing `retrieving the embeddings client from `AIProjectClient``?",
    "options": [
      "A) Executing `embed_client = project_client.inference.get_embeddings_client()` to access vectorization endpoints.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Executing `embed_client = project_client.inference.get_embeddings_client()` to access vectorization endpoints.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `File Upload & Agent Vector Store (`project_client.agents`)`, Executing `embed_client = project_client.inference.get_embeddings_client()` to access vectorization endpoints. is the officially required syntax for `retrieving the embeddings client from `AIProjectClient``. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2146,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Woodgrove Bank Virtual Assistant` implementing `Prompt Template Engine (`prompts/trail_guide.jinja2`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `retrieving the embeddings client from `AIProjectClient`` (Implementation Task #46).",
    "question": "[EASY Coding Task #46] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Prompt Template Engine (`prompts/trail_guide.jinja2`)` when implementing `retrieving the embeddings client from `AIProjectClient``?",
    "options": [
      "A) Executing `embed_client = project_client.inference.get_embeddings_client()` to access vectorization endpoints.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Executing `embed_client = project_client.inference.get_embeddings_client()` to access vectorization endpoints.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Prompt Template Engine (`prompts/trail_guide.jinja2`)`, Executing `embed_client = project_client.inference.get_embeddings_client()` to access vectorization endpoints. is the officially required syntax for `retrieving the embeddings client from `AIProjectClient``. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2147,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Litware Legal Evaluator` implementing `HTTP Rate Limit Handling (`@retry`, `HttpResponseError`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `retrieving the embeddings client from `AIProjectClient`` (Implementation Task #47).",
    "question": "[EASY Coding Task #47] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `HTTP Rate Limit Handling (`@retry`, `HttpResponseError`)` when implementing `retrieving the embeddings client from `AIProjectClient``?",
    "options": [
      "A) Executing `embed_client = project_client.inference.get_embeddings_client()` to access vectorization endpoints.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Executing `embed_client = project_client.inference.get_embeddings_client()` to access vectorization endpoints.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `HTTP Rate Limit Handling (`@retry`, `HttpResponseError`)`, Executing `embed_client = project_client.inference.get_embeddings_client()` to access vectorization endpoints. is the officially required syntax for `retrieving the embeddings client from `AIProjectClient``. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2148,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `A.Datum Retail Copilot` implementing `OpenTelemetry Tracing Integration (`configure_azure_monitor`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `retrieving the embeddings client from `AIProjectClient`` (Implementation Task #48).",
    "question": "[EASY Coding Task #48] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `OpenTelemetry Tracing Integration (`configure_azure_monitor`)` for `retrieving the embeddings client from `AIProjectClient``? (Select three)",
    "options": [
      "A) Executing `embed_client = project_client.inference.get_embeddings_client()` to access vectorization endpoints.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `OpenTelemetry Tracing Integration (`configure_azure_monitor`)` for `retrieving the embeddings client from `AIProjectClient``, enterprise coding standards mandate: (1) Executing `embed_client = project_client.inference.get_embeddings_client()` to access vectorization endpoints., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2149,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Alpine Ski Field Technician` implementing `Streaming Response Handling (`stream=True`, `SSE`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `retrieving the embeddings client from `AIProjectClient`` (Implementation Task #49).",
    "question": "[EASY Coding Task #49] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Streaming Response Handling (`stream=True`, `SSE`)` when implementing `retrieving the embeddings client from `AIProjectClient``?",
    "options": [
      "A) Executing `embed_client = project_client.inference.get_embeddings_client()` to access vectorization endpoints.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Executing `embed_client = project_client.inference.get_embeddings_client()` to access vectorization endpoints.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Streaming Response Handling (`stream=True`, `SSE`)`, Executing `embed_client = project_client.inference.get_embeddings_client()` to access vectorization endpoints. is the officially required syntax for `retrieving the embeddings client from `AIProjectClient``. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2150,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Tailwind Traders Multi-Agent` implementing `Model Deployment Discovery (`list_models`, `get_deployment`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `retrieving the embeddings client from `AIProjectClient`` (Implementation Task #50).",
    "question": "[EASY Coding Task #50] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Model Deployment Discovery (`list_models`, `get_deployment`)` when implementing `retrieving the embeddings client from `AIProjectClient``?",
    "options": [
      "A) Executing `embed_client = project_client.inference.get_embeddings_client()` to access vectorization endpoints.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Executing `embed_client = project_client.inference.get_embeddings_client()` to access vectorization endpoints.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Model Deployment Discovery (`list_models`, `get_deployment`)`, Executing `embed_client = project_client.inference.get_embeddings_client()` to access vectorization endpoints. is the officially required syntax for `retrieving the embeddings client from `AIProjectClient``. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2151,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Adventure Works Core Hub` implementing ``azure.ai.projects.AIProjectClient` Initialization`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `generating embeddings for a single text string` (Implementation Task #51).",
    "question": "[EASY Coding Task #51] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for ``azure.ai.projects.AIProjectClient` Initialization` when implementing `generating embeddings for a single text string`?",
    "options": [
      "A) Writing `vectors = embed_client.embeddings.create(model='text-embedding-3-large', input='Adventure Works catalog')`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `vectors = embed_client.embeddings.create(model='text-embedding-3-large', input='Adventure Works catalog')`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for ``azure.ai.projects.AIProjectClient` Initialization`, Writing `vectors = embed_client.embeddings.create(model='text-embedding-3-large', input='Adventure Works catalog')`. is the officially required syntax for `generating embeddings for a single text string`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2152,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Contoso Health AI` implementing `OpenAI Chat Completions Client (`get_chat_completions_client`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `generating embeddings for a single text string` (Implementation Task #52).",
    "question": "[EASY Coding Task #52] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `OpenAI Chat Completions Client (`get_chat_completions_client`)` for `generating embeddings for a single text string`? (Select three)",
    "options": [
      "A) Writing `vectors = embed_client.embeddings.create(model='text-embedding-3-large', input='Adventure Works catalog')`.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `OpenAI Chat Completions Client (`get_chat_completions_client`)` for `generating embeddings for a single text string`, enterprise coding standards mandate: (1) Writing `vectors = embed_client.embeddings.create(model='text-embedding-3-large', input='Adventure Works catalog')`., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2153,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Fabrikam Logistics Agent` implementing `OpenAI Embeddings Client (`get_embeddings_client`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `generating embeddings for a single text string` (Implementation Task #53).",
    "question": "[EASY Coding Task #53] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `OpenAI Embeddings Client (`get_embeddings_client`)` when implementing `generating embeddings for a single text string`?",
    "options": [
      "A) Writing `vectors = embed_client.embeddings.create(model='text-embedding-3-large', input='Adventure Works catalog')`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `vectors = embed_client.embeddings.create(model='text-embedding-3-large', input='Adventure Works catalog')`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `OpenAI Embeddings Client (`get_embeddings_client`)`, Writing `vectors = embed_client.embeddings.create(model='text-embedding-3-large', input='Adventure Works catalog')`. is the officially required syntax for `generating embeddings for a single text string`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2154,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Trey Research Lab` implementing `Agent Tool Calling Payload (`tools=[{'type': 'function'...}]`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `generating embeddings for a single text string` (Implementation Task #54).",
    "question": "[EASY Coding Task #54] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Agent Tool Calling Payload (`tools=[{'type': 'function'...}]`)` when implementing `generating embeddings for a single text string`?",
    "options": [
      "A) Writing `vectors = embed_client.embeddings.create(model='text-embedding-3-large', input='Adventure Works catalog')`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `vectors = embed_client.embeddings.create(model='text-embedding-3-large', input='Adventure Works catalog')`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Agent Tool Calling Payload (`tools=[{'type': 'function'...}]`)`, Writing `vectors = embed_client.embeddings.create(model='text-embedding-3-large', input='Adventure Works catalog')`. is the officially required syntax for `generating embeddings for a single text string`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2155,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Northwind Traders Bot` implementing `File Upload & Agent Vector Store (`project_client.agents`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `generating embeddings for a single text string` (Implementation Task #55).",
    "question": "[EASY Coding Task #55] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `File Upload & Agent Vector Store (`project_client.agents`)` when implementing `generating embeddings for a single text string`?",
    "options": [
      "A) Writing `vectors = embed_client.embeddings.create(model='text-embedding-3-large', input='Adventure Works catalog')`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `vectors = embed_client.embeddings.create(model='text-embedding-3-large', input='Adventure Works catalog')`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `File Upload & Agent Vector Store (`project_client.agents`)`, Writing `vectors = embed_client.embeddings.create(model='text-embedding-3-large', input='Adventure Works catalog')`. is the officially required syntax for `generating embeddings for a single text string`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2156,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Woodgrove Bank Virtual Assistant` implementing `Prompt Template Engine (`prompts/trail_guide.jinja2`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `generating embeddings for a single text string` (Implementation Task #56).",
    "question": "[EASY Coding Task #56] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Prompt Template Engine (`prompts/trail_guide.jinja2`)` for `generating embeddings for a single text string`? (Select three)",
    "options": [
      "A) Writing `vectors = embed_client.embeddings.create(model='text-embedding-3-large', input='Adventure Works catalog')`.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Prompt Template Engine (`prompts/trail_guide.jinja2`)` for `generating embeddings for a single text string`, enterprise coding standards mandate: (1) Writing `vectors = embed_client.embeddings.create(model='text-embedding-3-large', input='Adventure Works catalog')`., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2157,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Litware Legal Evaluator` implementing `HTTP Rate Limit Handling (`@retry`, `HttpResponseError`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `generating embeddings for a single text string` (Implementation Task #57).",
    "question": "[EASY Coding Task #57] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `HTTP Rate Limit Handling (`@retry`, `HttpResponseError`)` when implementing `generating embeddings for a single text string`?",
    "options": [
      "A) Writing `vectors = embed_client.embeddings.create(model='text-embedding-3-large', input='Adventure Works catalog')`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `vectors = embed_client.embeddings.create(model='text-embedding-3-large', input='Adventure Works catalog')`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `HTTP Rate Limit Handling (`@retry`, `HttpResponseError`)`, Writing `vectors = embed_client.embeddings.create(model='text-embedding-3-large', input='Adventure Works catalog')`. is the officially required syntax for `generating embeddings for a single text string`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2158,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `A.Datum Retail Copilot` implementing `OpenTelemetry Tracing Integration (`configure_azure_monitor`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `generating embeddings for a single text string` (Implementation Task #58).",
    "question": "[EASY Coding Task #58] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `OpenTelemetry Tracing Integration (`configure_azure_monitor`)` when implementing `generating embeddings for a single text string`?",
    "options": [
      "A) Writing `vectors = embed_client.embeddings.create(model='text-embedding-3-large', input='Adventure Works catalog')`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `vectors = embed_client.embeddings.create(model='text-embedding-3-large', input='Adventure Works catalog')`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `OpenTelemetry Tracing Integration (`configure_azure_monitor`)`, Writing `vectors = embed_client.embeddings.create(model='text-embedding-3-large', input='Adventure Works catalog')`. is the officially required syntax for `generating embeddings for a single text string`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2159,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Alpine Ski Field Technician` implementing `Streaming Response Handling (`stream=True`, `SSE`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `generating embeddings for a single text string` (Implementation Task #59).",
    "question": "[EASY Coding Task #59] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Streaming Response Handling (`stream=True`, `SSE`)` when implementing `generating embeddings for a single text string`?",
    "options": [
      "A) Writing `vectors = embed_client.embeddings.create(model='text-embedding-3-large', input='Adventure Works catalog')`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `vectors = embed_client.embeddings.create(model='text-embedding-3-large', input='Adventure Works catalog')`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Streaming Response Handling (`stream=True`, `SSE`)`, Writing `vectors = embed_client.embeddings.create(model='text-embedding-3-large', input='Adventure Works catalog')`. is the officially required syntax for `generating embeddings for a single text string`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2160,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Tailwind Traders Multi-Agent` implementing `Model Deployment Discovery (`list_models`, `get_deployment`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `generating embeddings for a single text string` (Implementation Task #60).",
    "question": "[EASY Coding Task #60] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Model Deployment Discovery (`list_models`, `get_deployment`)` for `generating embeddings for a single text string`? (Select three)",
    "options": [
      "A) Writing `vectors = embed_client.embeddings.create(model='text-embedding-3-large', input='Adventure Works catalog')`.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Model Deployment Discovery (`list_models`, `get_deployment`)` for `generating embeddings for a single text string`, enterprise coding standards mandate: (1) Writing `vectors = embed_client.embeddings.create(model='text-embedding-3-large', input='Adventure Works catalog')`., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2161,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Adventure Works Core Hub` implementing ``azure.ai.projects.AIProjectClient` Initialization`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `reading the embedding float array from response` (Implementation Task #61).",
    "question": "[EASY Coding Task #61] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for ``azure.ai.projects.AIProjectClient` Initialization` when implementing `reading the embedding float array from response`?",
    "options": [
      "A) Extracting `float_vector = vectors.data[0].embedding` from the returned `CreateEmbeddingResponse` object.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Extracting `float_vector = vectors.data[0].embedding` from the returned `CreateEmbeddingResponse` object.. Explanation: In Microsoft AI-300 enterprise hands-on coding for ``azure.ai.projects.AIProjectClient` Initialization`, Extracting `float_vector = vectors.data[0].embedding` from the returned `CreateEmbeddingResponse` object. is the officially required syntax for `reading the embedding float array from response`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2162,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Contoso Health AI` implementing `OpenAI Chat Completions Client (`get_chat_completions_client`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `reading the embedding float array from response` (Implementation Task #62).",
    "question": "[EASY Coding Task #62] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `OpenAI Chat Completions Client (`get_chat_completions_client`)` when implementing `reading the embedding float array from response`?",
    "options": [
      "A) Extracting `float_vector = vectors.data[0].embedding` from the returned `CreateEmbeddingResponse` object.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Extracting `float_vector = vectors.data[0].embedding` from the returned `CreateEmbeddingResponse` object.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `OpenAI Chat Completions Client (`get_chat_completions_client`)`, Extracting `float_vector = vectors.data[0].embedding` from the returned `CreateEmbeddingResponse` object. is the officially required syntax for `reading the embedding float array from response`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2163,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Fabrikam Logistics Agent` implementing `OpenAI Embeddings Client (`get_embeddings_client`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `reading the embedding float array from response` (Implementation Task #63).",
    "question": "[EASY Coding Task #63] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `OpenAI Embeddings Client (`get_embeddings_client`)` when implementing `reading the embedding float array from response`?",
    "options": [
      "A) Extracting `float_vector = vectors.data[0].embedding` from the returned `CreateEmbeddingResponse` object.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Extracting `float_vector = vectors.data[0].embedding` from the returned `CreateEmbeddingResponse` object.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `OpenAI Embeddings Client (`get_embeddings_client`)`, Extracting `float_vector = vectors.data[0].embedding` from the returned `CreateEmbeddingResponse` object. is the officially required syntax for `reading the embedding float array from response`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2164,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Trey Research Lab` implementing `Agent Tool Calling Payload (`tools=[{'type': 'function'...}]`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `reading the embedding float array from response` (Implementation Task #64).",
    "question": "[EASY Coding Task #64] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Agent Tool Calling Payload (`tools=[{'type': 'function'...}]`)` for `reading the embedding float array from response`? (Select three)",
    "options": [
      "A) Extracting `float_vector = vectors.data[0].embedding` from the returned `CreateEmbeddingResponse` object.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Agent Tool Calling Payload (`tools=[{'type': 'function'...}]`)` for `reading the embedding float array from response`, enterprise coding standards mandate: (1) Extracting `float_vector = vectors.data[0].embedding` from the returned `CreateEmbeddingResponse` object., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2165,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Northwind Traders Bot` implementing `File Upload & Agent Vector Store (`project_client.agents`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `reading the embedding float array from response` (Implementation Task #65).",
    "question": "[EASY Coding Task #65] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `File Upload & Agent Vector Store (`project_client.agents`)` when implementing `reading the embedding float array from response`?",
    "options": [
      "A) Extracting `float_vector = vectors.data[0].embedding` from the returned `CreateEmbeddingResponse` object.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Extracting `float_vector = vectors.data[0].embedding` from the returned `CreateEmbeddingResponse` object.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `File Upload & Agent Vector Store (`project_client.agents`)`, Extracting `float_vector = vectors.data[0].embedding` from the returned `CreateEmbeddingResponse` object. is the officially required syntax for `reading the embedding float array from response`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2166,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Woodgrove Bank Virtual Assistant` implementing `Prompt Template Engine (`prompts/trail_guide.jinja2`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `reading the embedding float array from response` (Implementation Task #66).",
    "question": "[EASY Coding Task #66] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Prompt Template Engine (`prompts/trail_guide.jinja2`)` when implementing `reading the embedding float array from response`?",
    "options": [
      "A) Extracting `float_vector = vectors.data[0].embedding` from the returned `CreateEmbeddingResponse` object.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Extracting `float_vector = vectors.data[0].embedding` from the returned `CreateEmbeddingResponse` object.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Prompt Template Engine (`prompts/trail_guide.jinja2`)`, Extracting `float_vector = vectors.data[0].embedding` from the returned `CreateEmbeddingResponse` object. is the officially required syntax for `reading the embedding float array from response`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2167,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Litware Legal Evaluator` implementing `HTTP Rate Limit Handling (`@retry`, `HttpResponseError`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `reading the embedding float array from response` (Implementation Task #67).",
    "question": "[EASY Coding Task #67] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `HTTP Rate Limit Handling (`@retry`, `HttpResponseError`)` when implementing `reading the embedding float array from response`?",
    "options": [
      "A) Extracting `float_vector = vectors.data[0].embedding` from the returned `CreateEmbeddingResponse` object.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Extracting `float_vector = vectors.data[0].embedding` from the returned `CreateEmbeddingResponse` object.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `HTTP Rate Limit Handling (`@retry`, `HttpResponseError`)`, Extracting `float_vector = vectors.data[0].embedding` from the returned `CreateEmbeddingResponse` object. is the officially required syntax for `reading the embedding float array from response`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2168,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `A.Datum Retail Copilot` implementing `OpenTelemetry Tracing Integration (`configure_azure_monitor`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `reading the embedding float array from response` (Implementation Task #68).",
    "question": "[EASY Coding Task #68] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `OpenTelemetry Tracing Integration (`configure_azure_monitor`)` for `reading the embedding float array from response`? (Select three)",
    "options": [
      "A) Extracting `float_vector = vectors.data[0].embedding` from the returned `CreateEmbeddingResponse` object.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `OpenTelemetry Tracing Integration (`configure_azure_monitor`)` for `reading the embedding float array from response`, enterprise coding standards mandate: (1) Extracting `float_vector = vectors.data[0].embedding` from the returned `CreateEmbeddingResponse` object., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2169,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Alpine Ski Field Technician` implementing `Streaming Response Handling (`stream=True`, `SSE`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `reading the embedding float array from response` (Implementation Task #69).",
    "question": "[EASY Coding Task #69] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Streaming Response Handling (`stream=True`, `SSE`)` when implementing `reading the embedding float array from response`?",
    "options": [
      "A) Extracting `float_vector = vectors.data[0].embedding` from the returned `CreateEmbeddingResponse` object.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Extracting `float_vector = vectors.data[0].embedding` from the returned `CreateEmbeddingResponse` object.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Streaming Response Handling (`stream=True`, `SSE`)`, Extracting `float_vector = vectors.data[0].embedding` from the returned `CreateEmbeddingResponse` object. is the officially required syntax for `reading the embedding float array from response`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2170,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Tailwind Traders Multi-Agent` implementing `Model Deployment Discovery (`list_models`, `get_deployment`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `reading the embedding float array from response` (Implementation Task #70).",
    "question": "[EASY Coding Task #70] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Model Deployment Discovery (`list_models`, `get_deployment`)` when implementing `reading the embedding float array from response`?",
    "options": [
      "A) Extracting `float_vector = vectors.data[0].embedding` from the returned `CreateEmbeddingResponse` object.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Extracting `float_vector = vectors.data[0].embedding` from the returned `CreateEmbeddingResponse` object.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Model Deployment Discovery (`list_models`, `get_deployment`)`, Extracting `float_vector = vectors.data[0].embedding` from the returned `CreateEmbeddingResponse` object. is the officially required syntax for `reading the embedding float array from response`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2171,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Adventure Works Core Hub` implementing ``azure.ai.projects.AIProjectClient` Initialization`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `formatting a basic function calling tool definition` (Implementation Task #71).",
    "question": "[EASY Coding Task #71] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for ``azure.ai.projects.AIProjectClient` Initialization` when implementing `formatting a basic function calling tool definition`?",
    "options": [
      "A) Writing `tools = [{'type': 'function', 'function': {'name': 'lookup_inventory', 'description': '...', 'parameters': {...}}}]`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `tools = [{'type': 'function', 'function': {'name': 'lookup_inventory', 'description': '...', 'parameters': {...}}}]`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for ``azure.ai.projects.AIProjectClient` Initialization`, Writing `tools = [{'type': 'function', 'function': {'name': 'lookup_inventory', 'description': '...', 'parameters': {...}}}]`. is the officially required syntax for `formatting a basic function calling tool definition`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2172,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Contoso Health AI` implementing `OpenAI Chat Completions Client (`get_chat_completions_client`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `formatting a basic function calling tool definition` (Implementation Task #72).",
    "question": "[EASY Coding Task #72] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `OpenAI Chat Completions Client (`get_chat_completions_client`)` for `formatting a basic function calling tool definition`? (Select three)",
    "options": [
      "A) Writing `tools = [{'type': 'function', 'function': {'name': 'lookup_inventory', 'description': '...', 'parameters': {...}}}]`.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `OpenAI Chat Completions Client (`get_chat_completions_client`)` for `formatting a basic function calling tool definition`, enterprise coding standards mandate: (1) Writing `tools = [{'type': 'function', 'function': {'name': 'lookup_inventory', 'description': '...', 'parameters': {...}}}]`., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2173,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Fabrikam Logistics Agent` implementing `OpenAI Embeddings Client (`get_embeddings_client`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `formatting a basic function calling tool definition` (Implementation Task #73).",
    "question": "[EASY Coding Task #73] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `OpenAI Embeddings Client (`get_embeddings_client`)` when implementing `formatting a basic function calling tool definition`?",
    "options": [
      "A) Writing `tools = [{'type': 'function', 'function': {'name': 'lookup_inventory', 'description': '...', 'parameters': {...}}}]`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `tools = [{'type': 'function', 'function': {'name': 'lookup_inventory', 'description': '...', 'parameters': {...}}}]`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `OpenAI Embeddings Client (`get_embeddings_client`)`, Writing `tools = [{'type': 'function', 'function': {'name': 'lookup_inventory', 'description': '...', 'parameters': {...}}}]`. is the officially required syntax for `formatting a basic function calling tool definition`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2174,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Trey Research Lab` implementing `Agent Tool Calling Payload (`tools=[{'type': 'function'...}]`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `formatting a basic function calling tool definition` (Implementation Task #74).",
    "question": "[EASY Coding Task #74] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Agent Tool Calling Payload (`tools=[{'type': 'function'...}]`)` when implementing `formatting a basic function calling tool definition`?",
    "options": [
      "A) Writing `tools = [{'type': 'function', 'function': {'name': 'lookup_inventory', 'description': '...', 'parameters': {...}}}]`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `tools = [{'type': 'function', 'function': {'name': 'lookup_inventory', 'description': '...', 'parameters': {...}}}]`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Agent Tool Calling Payload (`tools=[{'type': 'function'...}]`)`, Writing `tools = [{'type': 'function', 'function': {'name': 'lookup_inventory', 'description': '...', 'parameters': {...}}}]`. is the officially required syntax for `formatting a basic function calling tool definition`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2175,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Northwind Traders Bot` implementing `File Upload & Agent Vector Store (`project_client.agents`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `formatting a basic function calling tool definition` (Implementation Task #75).",
    "question": "[EASY Coding Task #75] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `File Upload & Agent Vector Store (`project_client.agents`)` when implementing `formatting a basic function calling tool definition`?",
    "options": [
      "A) Writing `tools = [{'type': 'function', 'function': {'name': 'lookup_inventory', 'description': '...', 'parameters': {...}}}]`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `tools = [{'type': 'function', 'function': {'name': 'lookup_inventory', 'description': '...', 'parameters': {...}}}]`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `File Upload & Agent Vector Store (`project_client.agents`)`, Writing `tools = [{'type': 'function', 'function': {'name': 'lookup_inventory', 'description': '...', 'parameters': {...}}}]`. is the officially required syntax for `formatting a basic function calling tool definition`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2176,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Woodgrove Bank Virtual Assistant` implementing `Prompt Template Engine (`prompts/trail_guide.jinja2`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `formatting a basic function calling tool definition` (Implementation Task #76).",
    "question": "[EASY Coding Task #76] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Prompt Template Engine (`prompts/trail_guide.jinja2`)` for `formatting a basic function calling tool definition`? (Select three)",
    "options": [
      "A) Writing `tools = [{'type': 'function', 'function': {'name': 'lookup_inventory', 'description': '...', 'parameters': {...}}}]`.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Prompt Template Engine (`prompts/trail_guide.jinja2`)` for `formatting a basic function calling tool definition`, enterprise coding standards mandate: (1) Writing `tools = [{'type': 'function', 'function': {'name': 'lookup_inventory', 'description': '...', 'parameters': {...}}}]`., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2177,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Litware Legal Evaluator` implementing `HTTP Rate Limit Handling (`@retry`, `HttpResponseError`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `formatting a basic function calling tool definition` (Implementation Task #77).",
    "question": "[EASY Coding Task #77] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `HTTP Rate Limit Handling (`@retry`, `HttpResponseError`)` when implementing `formatting a basic function calling tool definition`?",
    "options": [
      "A) Writing `tools = [{'type': 'function', 'function': {'name': 'lookup_inventory', 'description': '...', 'parameters': {...}}}]`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `tools = [{'type': 'function', 'function': {'name': 'lookup_inventory', 'description': '...', 'parameters': {...}}}]`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `HTTP Rate Limit Handling (`@retry`, `HttpResponseError`)`, Writing `tools = [{'type': 'function', 'function': {'name': 'lookup_inventory', 'description': '...', 'parameters': {...}}}]`. is the officially required syntax for `formatting a basic function calling tool definition`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2178,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `A.Datum Retail Copilot` implementing `OpenTelemetry Tracing Integration (`configure_azure_monitor`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `formatting a basic function calling tool definition` (Implementation Task #78).",
    "question": "[EASY Coding Task #78] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `OpenTelemetry Tracing Integration (`configure_azure_monitor`)` when implementing `formatting a basic function calling tool definition`?",
    "options": [
      "A) Writing `tools = [{'type': 'function', 'function': {'name': 'lookup_inventory', 'description': '...', 'parameters': {...}}}]`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `tools = [{'type': 'function', 'function': {'name': 'lookup_inventory', 'description': '...', 'parameters': {...}}}]`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `OpenTelemetry Tracing Integration (`configure_azure_monitor`)`, Writing `tools = [{'type': 'function', 'function': {'name': 'lookup_inventory', 'description': '...', 'parameters': {...}}}]`. is the officially required syntax for `formatting a basic function calling tool definition`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2179,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Alpine Ski Field Technician` implementing `Streaming Response Handling (`stream=True`, `SSE`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `formatting a basic function calling tool definition` (Implementation Task #79).",
    "question": "[EASY Coding Task #79] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Streaming Response Handling (`stream=True`, `SSE`)` when implementing `formatting a basic function calling tool definition`?",
    "options": [
      "A) Writing `tools = [{'type': 'function', 'function': {'name': 'lookup_inventory', 'description': '...', 'parameters': {...}}}]`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `tools = [{'type': 'function', 'function': {'name': 'lookup_inventory', 'description': '...', 'parameters': {...}}}]`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Streaming Response Handling (`stream=True`, `SSE`)`, Writing `tools = [{'type': 'function', 'function': {'name': 'lookup_inventory', 'description': '...', 'parameters': {...}}}]`. is the officially required syntax for `formatting a basic function calling tool definition`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2180,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Tailwind Traders Multi-Agent` implementing `Model Deployment Discovery (`list_models`, `get_deployment`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `formatting a basic function calling tool definition` (Implementation Task #80).",
    "question": "[EASY Coding Task #80] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Model Deployment Discovery (`list_models`, `get_deployment`)` for `formatting a basic function calling tool definition`? (Select three)",
    "options": [
      "A) Writing `tools = [{'type': 'function', 'function': {'name': 'lookup_inventory', 'description': '...', 'parameters': {...}}}]`.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Model Deployment Discovery (`list_models`, `get_deployment`)` for `formatting a basic function calling tool definition`, enterprise coding standards mandate: (1) Writing `tools = [{'type': 'function', 'function': {'name': 'lookup_inventory', 'description': '...', 'parameters': {...}}}]`., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2181,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Adventure Works Core Hub` implementing ``azure.ai.projects.AIProjectClient` Initialization`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `uploading a file to the project storage via SDK` (Implementation Task #81).",
    "question": "[EASY Coding Task #81] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for ``azure.ai.projects.AIProjectClient` Initialization` when implementing `uploading a file to the project storage via SDK`?",
    "options": [
      "A) Executing `file_info = project_client.agents.upload_file_and_poll(file_path='data.pdf', purpose='assistants')`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Executing `file_info = project_client.agents.upload_file_and_poll(file_path='data.pdf', purpose='assistants')`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for ``azure.ai.projects.AIProjectClient` Initialization`, Executing `file_info = project_client.agents.upload_file_and_poll(file_path='data.pdf', purpose='assistants')`. is the officially required syntax for `uploading a file to the project storage via SDK`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2182,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Contoso Health AI` implementing `OpenAI Chat Completions Client (`get_chat_completions_client`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `uploading a file to the project storage via SDK` (Implementation Task #82).",
    "question": "[EASY Coding Task #82] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `OpenAI Chat Completions Client (`get_chat_completions_client`)` when implementing `uploading a file to the project storage via SDK`?",
    "options": [
      "A) Executing `file_info = project_client.agents.upload_file_and_poll(file_path='data.pdf', purpose='assistants')`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Executing `file_info = project_client.agents.upload_file_and_poll(file_path='data.pdf', purpose='assistants')`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `OpenAI Chat Completions Client (`get_chat_completions_client`)`, Executing `file_info = project_client.agents.upload_file_and_poll(file_path='data.pdf', purpose='assistants')`. is the officially required syntax for `uploading a file to the project storage via SDK`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2183,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Fabrikam Logistics Agent` implementing `OpenAI Embeddings Client (`get_embeddings_client`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `uploading a file to the project storage via SDK` (Implementation Task #83).",
    "question": "[EASY Coding Task #83] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `OpenAI Embeddings Client (`get_embeddings_client`)` when implementing `uploading a file to the project storage via SDK`?",
    "options": [
      "A) Executing `file_info = project_client.agents.upload_file_and_poll(file_path='data.pdf', purpose='assistants')`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Executing `file_info = project_client.agents.upload_file_and_poll(file_path='data.pdf', purpose='assistants')`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `OpenAI Embeddings Client (`get_embeddings_client`)`, Executing `file_info = project_client.agents.upload_file_and_poll(file_path='data.pdf', purpose='assistants')`. is the officially required syntax for `uploading a file to the project storage via SDK`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2184,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Trey Research Lab` implementing `Agent Tool Calling Payload (`tools=[{'type': 'function'...}]`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `uploading a file to the project storage via SDK` (Implementation Task #84).",
    "question": "[EASY Coding Task #84] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Agent Tool Calling Payload (`tools=[{'type': 'function'...}]`)` for `uploading a file to the project storage via SDK`? (Select three)",
    "options": [
      "A) Executing `file_info = project_client.agents.upload_file_and_poll(file_path='data.pdf', purpose='assistants')`.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Agent Tool Calling Payload (`tools=[{'type': 'function'...}]`)` for `uploading a file to the project storage via SDK`, enterprise coding standards mandate: (1) Executing `file_info = project_client.agents.upload_file_and_poll(file_path='data.pdf', purpose='assistants')`., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2185,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Northwind Traders Bot` implementing `File Upload & Agent Vector Store (`project_client.agents`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `uploading a file to the project storage via SDK` (Implementation Task #85).",
    "question": "[EASY Coding Task #85] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `File Upload & Agent Vector Store (`project_client.agents`)` when implementing `uploading a file to the project storage via SDK`?",
    "options": [
      "A) Executing `file_info = project_client.agents.upload_file_and_poll(file_path='data.pdf', purpose='assistants')`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Executing `file_info = project_client.agents.upload_file_and_poll(file_path='data.pdf', purpose='assistants')`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `File Upload & Agent Vector Store (`project_client.agents`)`, Executing `file_info = project_client.agents.upload_file_and_poll(file_path='data.pdf', purpose='assistants')`. is the officially required syntax for `uploading a file to the project storage via SDK`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2186,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Woodgrove Bank Virtual Assistant` implementing `Prompt Template Engine (`prompts/trail_guide.jinja2`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `uploading a file to the project storage via SDK` (Implementation Task #86).",
    "question": "[EASY Coding Task #86] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Prompt Template Engine (`prompts/trail_guide.jinja2`)` when implementing `uploading a file to the project storage via SDK`?",
    "options": [
      "A) Executing `file_info = project_client.agents.upload_file_and_poll(file_path='data.pdf', purpose='assistants')`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Executing `file_info = project_client.agents.upload_file_and_poll(file_path='data.pdf', purpose='assistants')`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Prompt Template Engine (`prompts/trail_guide.jinja2`)`, Executing `file_info = project_client.agents.upload_file_and_poll(file_path='data.pdf', purpose='assistants')`. is the officially required syntax for `uploading a file to the project storage via SDK`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2187,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Litware Legal Evaluator` implementing `HTTP Rate Limit Handling (`@retry`, `HttpResponseError`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `uploading a file to the project storage via SDK` (Implementation Task #87).",
    "question": "[EASY Coding Task #87] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `HTTP Rate Limit Handling (`@retry`, `HttpResponseError`)` when implementing `uploading a file to the project storage via SDK`?",
    "options": [
      "A) Executing `file_info = project_client.agents.upload_file_and_poll(file_path='data.pdf', purpose='assistants')`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Executing `file_info = project_client.agents.upload_file_and_poll(file_path='data.pdf', purpose='assistants')`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `HTTP Rate Limit Handling (`@retry`, `HttpResponseError`)`, Executing `file_info = project_client.agents.upload_file_and_poll(file_path='data.pdf', purpose='assistants')`. is the officially required syntax for `uploading a file to the project storage via SDK`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2188,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `A.Datum Retail Copilot` implementing `OpenTelemetry Tracing Integration (`configure_azure_monitor`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `uploading a file to the project storage via SDK` (Implementation Task #88).",
    "question": "[EASY Coding Task #88] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `OpenTelemetry Tracing Integration (`configure_azure_monitor`)` for `uploading a file to the project storage via SDK`? (Select three)",
    "options": [
      "A) Executing `file_info = project_client.agents.upload_file_and_poll(file_path='data.pdf', purpose='assistants')`.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `OpenTelemetry Tracing Integration (`configure_azure_monitor`)` for `uploading a file to the project storage via SDK`, enterprise coding standards mandate: (1) Executing `file_info = project_client.agents.upload_file_and_poll(file_path='data.pdf', purpose='assistants')`., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2189,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Alpine Ski Field Technician` implementing `Streaming Response Handling (`stream=True`, `SSE`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `uploading a file to the project storage via SDK` (Implementation Task #89).",
    "question": "[EASY Coding Task #89] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Streaming Response Handling (`stream=True`, `SSE`)` when implementing `uploading a file to the project storage via SDK`?",
    "options": [
      "A) Executing `file_info = project_client.agents.upload_file_and_poll(file_path='data.pdf', purpose='assistants')`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Executing `file_info = project_client.agents.upload_file_and_poll(file_path='data.pdf', purpose='assistants')`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Streaming Response Handling (`stream=True`, `SSE`)`, Executing `file_info = project_client.agents.upload_file_and_poll(file_path='data.pdf', purpose='assistants')`. is the officially required syntax for `uploading a file to the project storage via SDK`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2190,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Tailwind Traders Multi-Agent` implementing `Model Deployment Discovery (`list_models`, `get_deployment`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `uploading a file to the project storage via SDK` (Implementation Task #90).",
    "question": "[EASY Coding Task #90] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Model Deployment Discovery (`list_models`, `get_deployment`)` when implementing `uploading a file to the project storage via SDK`?",
    "options": [
      "A) Executing `file_info = project_client.agents.upload_file_and_poll(file_path='data.pdf', purpose='assistants')`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Executing `file_info = project_client.agents.upload_file_and_poll(file_path='data.pdf', purpose='assistants')`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Model Deployment Discovery (`list_models`, `get_deployment`)`, Executing `file_info = project_client.agents.upload_file_and_poll(file_path='data.pdf', purpose='assistants')`. is the officially required syntax for `uploading a file to the project storage via SDK`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2191,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Adventure Works Core Hub` implementing ``azure.ai.projects.AIProjectClient` Initialization`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `enabling `DefaultAzureCredential` in Python SDK` (Implementation Task #91).",
    "question": "[EASY Coding Task #91] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for ``azure.ai.projects.AIProjectClient` Initialization` when implementing `enabling `DefaultAzureCredential` in Python SDK`?",
    "options": [
      "A) Writing `from azure.identity import DefaultAzureCredential; cred = DefaultAzureCredential()` before client initialization.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `from azure.identity import DefaultAzureCredential; cred = DefaultAzureCredential()` before client initialization.. Explanation: In Microsoft AI-300 enterprise hands-on coding for ``azure.ai.projects.AIProjectClient` Initialization`, Writing `from azure.identity import DefaultAzureCredential; cred = DefaultAzureCredential()` before client initialization. is the officially required syntax for `enabling `DefaultAzureCredential` in Python SDK`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2192,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Contoso Health AI` implementing `OpenAI Chat Completions Client (`get_chat_completions_client`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `enabling `DefaultAzureCredential` in Python SDK` (Implementation Task #92).",
    "question": "[EASY Coding Task #92] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `OpenAI Chat Completions Client (`get_chat_completions_client`)` for `enabling `DefaultAzureCredential` in Python SDK`? (Select three)",
    "options": [
      "A) Writing `from azure.identity import DefaultAzureCredential; cred = DefaultAzureCredential()` before client initialization.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `OpenAI Chat Completions Client (`get_chat_completions_client`)` for `enabling `DefaultAzureCredential` in Python SDK`, enterprise coding standards mandate: (1) Writing `from azure.identity import DefaultAzureCredential; cred = DefaultAzureCredential()` before client initialization., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2193,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Fabrikam Logistics Agent` implementing `OpenAI Embeddings Client (`get_embeddings_client`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `enabling `DefaultAzureCredential` in Python SDK` (Implementation Task #93).",
    "question": "[EASY Coding Task #93] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `OpenAI Embeddings Client (`get_embeddings_client`)` when implementing `enabling `DefaultAzureCredential` in Python SDK`?",
    "options": [
      "A) Writing `from azure.identity import DefaultAzureCredential; cred = DefaultAzureCredential()` before client initialization.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `from azure.identity import DefaultAzureCredential; cred = DefaultAzureCredential()` before client initialization.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `OpenAI Embeddings Client (`get_embeddings_client`)`, Writing `from azure.identity import DefaultAzureCredential; cred = DefaultAzureCredential()` before client initialization. is the officially required syntax for `enabling `DefaultAzureCredential` in Python SDK`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2194,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Trey Research Lab` implementing `Agent Tool Calling Payload (`tools=[{'type': 'function'...}]`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `enabling `DefaultAzureCredential` in Python SDK` (Implementation Task #94).",
    "question": "[EASY Coding Task #94] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Agent Tool Calling Payload (`tools=[{'type': 'function'...}]`)` when implementing `enabling `DefaultAzureCredential` in Python SDK`?",
    "options": [
      "A) Writing `from azure.identity import DefaultAzureCredential; cred = DefaultAzureCredential()` before client initialization.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `from azure.identity import DefaultAzureCredential; cred = DefaultAzureCredential()` before client initialization.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Agent Tool Calling Payload (`tools=[{'type': 'function'...}]`)`, Writing `from azure.identity import DefaultAzureCredential; cred = DefaultAzureCredential()` before client initialization. is the officially required syntax for `enabling `DefaultAzureCredential` in Python SDK`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2195,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Northwind Traders Bot` implementing `File Upload & Agent Vector Store (`project_client.agents`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `enabling `DefaultAzureCredential` in Python SDK` (Implementation Task #95).",
    "question": "[EASY Coding Task #95] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `File Upload & Agent Vector Store (`project_client.agents`)` when implementing `enabling `DefaultAzureCredential` in Python SDK`?",
    "options": [
      "A) Writing `from azure.identity import DefaultAzureCredential; cred = DefaultAzureCredential()` before client initialization.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `from azure.identity import DefaultAzureCredential; cred = DefaultAzureCredential()` before client initialization.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `File Upload & Agent Vector Store (`project_client.agents`)`, Writing `from azure.identity import DefaultAzureCredential; cred = DefaultAzureCredential()` before client initialization. is the officially required syntax for `enabling `DefaultAzureCredential` in Python SDK`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2196,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Woodgrove Bank Virtual Assistant` implementing `Prompt Template Engine (`prompts/trail_guide.jinja2`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `enabling `DefaultAzureCredential` in Python SDK` (Implementation Task #96).",
    "question": "[EASY Coding Task #96] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Prompt Template Engine (`prompts/trail_guide.jinja2`)` for `enabling `DefaultAzureCredential` in Python SDK`? (Select three)",
    "options": [
      "A) Writing `from azure.identity import DefaultAzureCredential; cred = DefaultAzureCredential()` before client initialization.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Prompt Template Engine (`prompts/trail_guide.jinja2`)` for `enabling `DefaultAzureCredential` in Python SDK`, enterprise coding standards mandate: (1) Writing `from azure.identity import DefaultAzureCredential; cred = DefaultAzureCredential()` before client initialization., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2197,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Litware Legal Evaluator` implementing `HTTP Rate Limit Handling (`@retry`, `HttpResponseError`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `enabling `DefaultAzureCredential` in Python SDK` (Implementation Task #97).",
    "question": "[EASY Coding Task #97] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `HTTP Rate Limit Handling (`@retry`, `HttpResponseError`)` when implementing `enabling `DefaultAzureCredential` in Python SDK`?",
    "options": [
      "A) Writing `from azure.identity import DefaultAzureCredential; cred = DefaultAzureCredential()` before client initialization.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `from azure.identity import DefaultAzureCredential; cred = DefaultAzureCredential()` before client initialization.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `HTTP Rate Limit Handling (`@retry`, `HttpResponseError`)`, Writing `from azure.identity import DefaultAzureCredential; cred = DefaultAzureCredential()` before client initialization. is the officially required syntax for `enabling `DefaultAzureCredential` in Python SDK`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2198,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `A.Datum Retail Copilot` implementing `OpenTelemetry Tracing Integration (`configure_azure_monitor`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `enabling `DefaultAzureCredential` in Python SDK` (Implementation Task #98).",
    "question": "[EASY Coding Task #98] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `OpenTelemetry Tracing Integration (`configure_azure_monitor`)` when implementing `enabling `DefaultAzureCredential` in Python SDK`?",
    "options": [
      "A) Writing `from azure.identity import DefaultAzureCredential; cred = DefaultAzureCredential()` before client initialization.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `from azure.identity import DefaultAzureCredential; cred = DefaultAzureCredential()` before client initialization.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `OpenTelemetry Tracing Integration (`configure_azure_monitor`)`, Writing `from azure.identity import DefaultAzureCredential; cred = DefaultAzureCredential()` before client initialization. is the officially required syntax for `enabling `DefaultAzureCredential` in Python SDK`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2199,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Alpine Ski Field Technician` implementing `Streaming Response Handling (`stream=True`, `SSE`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `enabling `DefaultAzureCredential` in Python SDK` (Implementation Task #99).",
    "question": "[EASY Coding Task #99] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Streaming Response Handling (`stream=True`, `SSE`)` when implementing `enabling `DefaultAzureCredential` in Python SDK`?",
    "options": [
      "A) Writing `from azure.identity import DefaultAzureCredential; cred = DefaultAzureCredential()` before client initialization.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `from azure.identity import DefaultAzureCredential; cred = DefaultAzureCredential()` before client initialization.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Streaming Response Handling (`stream=True`, `SSE`)`, Writing `from azure.identity import DefaultAzureCredential; cred = DefaultAzureCredential()` before client initialization. is the officially required syntax for `enabling `DefaultAzureCredential` in Python SDK`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2200,
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Tailwind Traders Multi-Agent` implementing `Model Deployment Discovery (`list_models`, `get_deployment`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `enabling `DefaultAzureCredential` in Python SDK` (Implementation Task #100).",
    "question": "[EASY Coding Task #100] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Model Deployment Discovery (`list_models`, `get_deployment`)` for `enabling `DefaultAzureCredential` in Python SDK`? (Select three)",
    "options": [
      "A) Writing `from azure.identity import DefaultAzureCredential; cred = DefaultAzureCredential()` before client initialization.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Model Deployment Discovery (`list_models`, `get_deployment`)` for `enabling `DefaultAzureCredential` in Python SDK`, enterprise coding standards mandate: (1) Writing `from azure.identity import DefaultAzureCredential; cred = DefaultAzureCredential()` before client initialization., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  }
];
