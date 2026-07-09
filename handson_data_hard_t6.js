window.HANDSON_DATA_HARD_T6 = [
  {
    "id": 3701,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Adventure Works Core Hub` implementing `Azure AI Content Safety Prompt Shields (`JailbreakDetected == true`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `architecting high-speed synchronous APIM safety gateway with early 400 abort` (Implementation Task #1).",
    "question": "[HARD Coding Task #1] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Azure AI Content Safety Prompt Shields (`JailbreakDetected == true`)` when implementing `architecting high-speed synchronous APIM safety gateway with early 400 abort`?",
    "options": [
      "A) Writing an APIM `<inbound>` XML block that executes a synchronous `<send-request mode=\"new\" response-variable-name=\"safetyRes\" timeout=\"2\" ignore-error=\"false\"><set-url>https://ai-safety.cognitiveservices.azure.com/text:analyze</set-url>...</send-request>`, checks `@(((IResponse)context.Variables[\"safetyRes\"]).Body.As<JObject>()[\"jailbreakDetected\"].Value<bool>() == true)`, and immediately returns `<return-response><set-status code=\"400\" reason=\"Jailbreak Detected\" /></return-response>`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing an APIM `<inbound>` XML block that executes a synchronous `<send-request mode=\"new\" response-variable-name=\"safetyRes\" timeout=\"2\" ignore-error=\"false\"><set-url>https://ai-safety.cognitiveservices.azure.com/text:analyze</set-url>...</send-request>`, checks `@(((IResponse)context.Variables[\"safetyRes\"]).Body.As<JObject>()[\"jailbreakDetected\"].Value<bool>() == true)`, and immediately returns `<return-response><set-status code=\"400\" reason=\"Jailbreak Detected\" /></return-response>`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Azure AI Content Safety Prompt Shields (`JailbreakDetected == true`)`, Writing an APIM `<inbound>` XML block that executes a synchronous `<send-request mode=\"new\" response-variable-name=\"safetyRes\" timeout=\"2\" ignore-error=\"false\"><set-url>https://ai-safety.cognitiveservices.azure.com/text:analyze</set-url>...</send-request>`, checks `@(((IResponse)context.Variables[\"safetyRes\"]).Body.As<JObject>()[\"jailbreakDetected\"].Value<bool>() == true)`, and immediately returns `<return-response><set-status code=\"400\" reason=\"Jailbreak Detected\" /></return-response>`. is the officially required syntax for `architecting high-speed synchronous APIM safety gateway with early 400 abort`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3702,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Contoso Health AI` implementing `Automated Red-Teaming Engine (`azure.ai.evaluation.simulator`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `architecting high-speed synchronous APIM safety gateway with early 400 abort` (Implementation Task #2).",
    "question": "[HARD Coding Task #2] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Automated Red-Teaming Engine (`azure.ai.evaluation.simulator`)` when implementing `architecting high-speed synchronous APIM safety gateway with early 400 abort`?",
    "options": [
      "A) Writing an APIM `<inbound>` XML block that executes a synchronous `<send-request mode=\"new\" response-variable-name=\"safetyRes\" timeout=\"2\" ignore-error=\"false\"><set-url>https://ai-safety.cognitiveservices.azure.com/text:analyze</set-url>...</send-request>`, checks `@(((IResponse)context.Variables[\"safetyRes\"]).Body.As<JObject>()[\"jailbreakDetected\"].Value<bool>() == true)`, and immediately returns `<return-response><set-status code=\"400\" reason=\"Jailbreak Detected\" /></return-response>`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing an APIM `<inbound>` XML block that executes a synchronous `<send-request mode=\"new\" response-variable-name=\"safetyRes\" timeout=\"2\" ignore-error=\"false\"><set-url>https://ai-safety.cognitiveservices.azure.com/text:analyze</set-url>...</send-request>`, checks `@(((IResponse)context.Variables[\"safetyRes\"]).Body.As<JObject>()[\"jailbreakDetected\"].Value<bool>() == true)`, and immediately returns `<return-response><set-status code=\"400\" reason=\"Jailbreak Detected\" /></return-response>`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Automated Red-Teaming Engine (`azure.ai.evaluation.simulator`)`, Writing an APIM `<inbound>` XML block that executes a synchronous `<send-request mode=\"new\" response-variable-name=\"safetyRes\" timeout=\"2\" ignore-error=\"false\"><set-url>https://ai-safety.cognitiveservices.azure.com/text:analyze</set-url>...</send-request>`, checks `@(((IResponse)context.Variables[\"safetyRes\"]).Body.As<JObject>()[\"jailbreakDetected\"].Value<bool>() == true)`, and immediately returns `<return-response><set-status code=\"400\" reason=\"Jailbreak Detected\" /></return-response>`. is the officially required syntax for `architecting high-speed synchronous APIM safety gateway with early 400 abort`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3703,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Fabrikam Logistics Agent` implementing `Indirect Prompt Injection Defense in RAG (`IndirectAttackEvaluator`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `architecting high-speed synchronous APIM safety gateway with early 400 abort` (Implementation Task #3).",
    "question": "[HARD Coding Task #3] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Indirect Prompt Injection Defense in RAG (`IndirectAttackEvaluator`)` when implementing `architecting high-speed synchronous APIM safety gateway with early 400 abort`?",
    "options": [
      "A) Writing an APIM `<inbound>` XML block that executes a synchronous `<send-request mode=\"new\" response-variable-name=\"safetyRes\" timeout=\"2\" ignore-error=\"false\"><set-url>https://ai-safety.cognitiveservices.azure.com/text:analyze</set-url>...</send-request>`, checks `@(((IResponse)context.Variables[\"safetyRes\"]).Body.As<JObject>()[\"jailbreakDetected\"].Value<bool>() == true)`, and immediately returns `<return-response><set-status code=\"400\" reason=\"Jailbreak Detected\" /></return-response>`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing an APIM `<inbound>` XML block that executes a synchronous `<send-request mode=\"new\" response-variable-name=\"safetyRes\" timeout=\"2\" ignore-error=\"false\"><set-url>https://ai-safety.cognitiveservices.azure.com/text:analyze</set-url>...</send-request>`, checks `@(((IResponse)context.Variables[\"safetyRes\"]).Body.As<JObject>()[\"jailbreakDetected\"].Value<bool>() == true)`, and immediately returns `<return-response><set-status code=\"400\" reason=\"Jailbreak Detected\" /></return-response>`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Indirect Prompt Injection Defense in RAG (`IndirectAttackEvaluator`)`, Writing an APIM `<inbound>` XML block that executes a synchronous `<send-request mode=\"new\" response-variable-name=\"safetyRes\" timeout=\"2\" ignore-error=\"false\"><set-url>https://ai-safety.cognitiveservices.azure.com/text:analyze</set-url>...</send-request>`, checks `@(((IResponse)context.Variables[\"safetyRes\"]).Body.As<JObject>()[\"jailbreakDetected\"].Value<bool>() == true)`, and immediately returns `<return-response><set-status code=\"400\" reason=\"Jailbreak Detected\" /></return-response>`. is the officially required syntax for `architecting high-speed synchronous APIM safety gateway with early 400 abort`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3704,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Trey Research Lab` implementing `PTU vs Standard Load Balancing in APIM (`<choose>`, `<circuit-breaker>`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `architecting high-speed synchronous APIM safety gateway with early 400 abort` (Implementation Task #4).",
    "question": "[HARD Coding Task #4] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `PTU vs Standard Load Balancing in APIM (`<choose>`, `<circuit-breaker>`)` for `architecting high-speed synchronous APIM safety gateway with early 400 abort`? (Select three)",
    "options": [
      "A) Writing an APIM `<inbound>` XML block that executes a synchronous `<send-request mode=\"new\" response-variable-name=\"safetyRes\" timeout=\"2\" ignore-error=\"false\"><set-url>https://ai-safety.cognitiveservices.azure.com/text:analyze</set-url>...</send-request>`, checks `@(((IResponse)context.Variables[\"safetyRes\"]).Body.As<JObject>()[\"jailbreakDetected\"].Value<bool>() == true)`, and immediately returns `<return-response><set-status code=\"400\" reason=\"Jailbreak Detected\" /></return-response>`.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `PTU vs Standard Load Balancing in APIM (`<choose>`, `<circuit-breaker>`)` for `architecting high-speed synchronous APIM safety gateway with early 400 abort`, enterprise coding standards mandate: (1) Writing an APIM `<inbound>` XML block that executes a synchronous `<send-request mode=\"new\" response-variable-name=\"safetyRes\" timeout=\"2\" ignore-error=\"false\"><set-url>https://ai-safety.cognitiveservices.azure.com/text:analyze</set-url>...</send-request>`, checks `@(((IResponse)context.Variables[\"safetyRes\"]).Body.As<JObject>()[\"jailbreakDetected\"].Value<bool>() == true)`, and immediately returns `<return-response><set-status code=\"400\" reason=\"Jailbreak Detected\" /></return-response>`., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 3705,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Northwind Traders Bot` implementing `Zero-Trust Private Link & VNet Isolation (`publicNetworkAccess: 'Disabled'`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `architecting high-speed synchronous APIM safety gateway with early 400 abort` (Implementation Task #5).",
    "question": "[HARD Coding Task #5] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Zero-Trust Private Link & VNet Isolation (`publicNetworkAccess: 'Disabled'`)` when implementing `architecting high-speed synchronous APIM safety gateway with early 400 abort`?",
    "options": [
      "A) Writing an APIM `<inbound>` XML block that executes a synchronous `<send-request mode=\"new\" response-variable-name=\"safetyRes\" timeout=\"2\" ignore-error=\"false\"><set-url>https://ai-safety.cognitiveservices.azure.com/text:analyze</set-url>...</send-request>`, checks `@(((IResponse)context.Variables[\"safetyRes\"]).Body.As<JObject>()[\"jailbreakDetected\"].Value<bool>() == true)`, and immediately returns `<return-response><set-status code=\"400\" reason=\"Jailbreak Detected\" /></return-response>`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing an APIM `<inbound>` XML block that executes a synchronous `<send-request mode=\"new\" response-variable-name=\"safetyRes\" timeout=\"2\" ignore-error=\"false\"><set-url>https://ai-safety.cognitiveservices.azure.com/text:analyze</set-url>...</send-request>`, checks `@(((IResponse)context.Variables[\"safetyRes\"]).Body.As<JObject>()[\"jailbreakDetected\"].Value<bool>() == true)`, and immediately returns `<return-response><set-status code=\"400\" reason=\"Jailbreak Detected\" /></return-response>`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Zero-Trust Private Link & VNet Isolation (`publicNetworkAccess: 'Disabled'`)`, Writing an APIM `<inbound>` XML block that executes a synchronous `<send-request mode=\"new\" response-variable-name=\"safetyRes\" timeout=\"2\" ignore-error=\"false\"><set-url>https://ai-safety.cognitiveservices.azure.com/text:analyze</set-url>...</send-request>`, checks `@(((IResponse)context.Variables[\"safetyRes\"]).Body.As<JObject>()[\"jailbreakDetected\"].Value<bool>() == true)`, and immediately returns `<return-response><set-status code=\"400\" reason=\"Jailbreak Detected\" /></return-response>`. is the officially required syntax for `architecting high-speed synchronous APIM safety gateway with early 400 abort`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3706,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Woodgrove Bank Virtual Assistant` implementing `Token Inflation & Context Window Truncation (`SlidingTokenWindow`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `architecting high-speed synchronous APIM safety gateway with early 400 abort` (Implementation Task #6).",
    "question": "[HARD Coding Task #6] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Token Inflation & Context Window Truncation (`SlidingTokenWindow`)` when implementing `architecting high-speed synchronous APIM safety gateway with early 400 abort`?",
    "options": [
      "A) Writing an APIM `<inbound>` XML block that executes a synchronous `<send-request mode=\"new\" response-variable-name=\"safetyRes\" timeout=\"2\" ignore-error=\"false\"><set-url>https://ai-safety.cognitiveservices.azure.com/text:analyze</set-url>...</send-request>`, checks `@(((IResponse)context.Variables[\"safetyRes\"]).Body.As<JObject>()[\"jailbreakDetected\"].Value<bool>() == true)`, and immediately returns `<return-response><set-status code=\"400\" reason=\"Jailbreak Detected\" /></return-response>`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing an APIM `<inbound>` XML block that executes a synchronous `<send-request mode=\"new\" response-variable-name=\"safetyRes\" timeout=\"2\" ignore-error=\"false\"><set-url>https://ai-safety.cognitiveservices.azure.com/text:analyze</set-url>...</send-request>`, checks `@(((IResponse)context.Variables[\"safetyRes\"]).Body.As<JObject>()[\"jailbreakDetected\"].Value<bool>() == true)`, and immediately returns `<return-response><set-status code=\"400\" reason=\"Jailbreak Detected\" /></return-response>`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Token Inflation & Context Window Truncation (`SlidingTokenWindow`)`, Writing an APIM `<inbound>` XML block that executes a synchronous `<send-request mode=\"new\" response-variable-name=\"safetyRes\" timeout=\"2\" ignore-error=\"false\"><set-url>https://ai-safety.cognitiveservices.azure.com/text:analyze</set-url>...</send-request>`, checks `@(((IResponse)context.Variables[\"safetyRes\"]).Body.As<JObject>()[\"jailbreakDetected\"].Value<bool>() == true)`, and immediately returns `<return-response><set-status code=\"400\" reason=\"Jailbreak Detected\" /></return-response>`. is the officially required syntax for `architecting high-speed synchronous APIM safety gateway with early 400 abort`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3707,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Litware Legal Evaluator` implementing `Custom PII & Sensitive Data Redaction (`Presidio` / `TextAnonymizer`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `architecting high-speed synchronous APIM safety gateway with early 400 abort` (Implementation Task #7).",
    "question": "[HARD Coding Task #7] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Custom PII & Sensitive Data Redaction (`Presidio` / `TextAnonymizer`)` when implementing `architecting high-speed synchronous APIM safety gateway with early 400 abort`?",
    "options": [
      "A) Writing an APIM `<inbound>` XML block that executes a synchronous `<send-request mode=\"new\" response-variable-name=\"safetyRes\" timeout=\"2\" ignore-error=\"false\"><set-url>https://ai-safety.cognitiveservices.azure.com/text:analyze</set-url>...</send-request>`, checks `@(((IResponse)context.Variables[\"safetyRes\"]).Body.As<JObject>()[\"jailbreakDetected\"].Value<bool>() == true)`, and immediately returns `<return-response><set-status code=\"400\" reason=\"Jailbreak Detected\" /></return-response>`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing an APIM `<inbound>` XML block that executes a synchronous `<send-request mode=\"new\" response-variable-name=\"safetyRes\" timeout=\"2\" ignore-error=\"false\"><set-url>https://ai-safety.cognitiveservices.azure.com/text:analyze</set-url>...</send-request>`, checks `@(((IResponse)context.Variables[\"safetyRes\"]).Body.As<JObject>()[\"jailbreakDetected\"].Value<bool>() == true)`, and immediately returns `<return-response><set-status code=\"400\" reason=\"Jailbreak Detected\" /></return-response>`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Custom PII & Sensitive Data Redaction (`Presidio` / `TextAnonymizer`)`, Writing an APIM `<inbound>` XML block that executes a synchronous `<send-request mode=\"new\" response-variable-name=\"safetyRes\" timeout=\"2\" ignore-error=\"false\"><set-url>https://ai-safety.cognitiveservices.azure.com/text:analyze</set-url>...</send-request>`, checks `@(((IResponse)context.Variables[\"safetyRes\"]).Body.As<JObject>()[\"jailbreakDetected\"].Value<bool>() == true)`, and immediately returns `<return-response><set-status code=\"400\" reason=\"Jailbreak Detected\" /></return-response>`. is the officially required syntax for `architecting high-speed synchronous APIM safety gateway with early 400 abort`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3708,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `A.Datum Retail Copilot` implementing `Multi-Agent Deadlock & Cyclic Loop Prevention (`max_turns=10`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `architecting high-speed synchronous APIM safety gateway with early 400 abort` (Implementation Task #8).",
    "question": "[HARD Coding Task #8] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Multi-Agent Deadlock & Cyclic Loop Prevention (`max_turns=10`)` for `architecting high-speed synchronous APIM safety gateway with early 400 abort`? (Select three)",
    "options": [
      "A) Writing an APIM `<inbound>` XML block that executes a synchronous `<send-request mode=\"new\" response-variable-name=\"safetyRes\" timeout=\"2\" ignore-error=\"false\"><set-url>https://ai-safety.cognitiveservices.azure.com/text:analyze</set-url>...</send-request>`, checks `@(((IResponse)context.Variables[\"safetyRes\"]).Body.As<JObject>()[\"jailbreakDetected\"].Value<bool>() == true)`, and immediately returns `<return-response><set-status code=\"400\" reason=\"Jailbreak Detected\" /></return-response>`.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Multi-Agent Deadlock & Cyclic Loop Prevention (`max_turns=10`)` for `architecting high-speed synchronous APIM safety gateway with early 400 abort`, enterprise coding standards mandate: (1) Writing an APIM `<inbound>` XML block that executes a synchronous `<send-request mode=\"new\" response-variable-name=\"safetyRes\" timeout=\"2\" ignore-error=\"false\"><set-url>https://ai-safety.cognitiveservices.azure.com/text:analyze</set-url>...</send-request>`, checks `@(((IResponse)context.Variables[\"safetyRes\"]).Body.As<JObject>()[\"jailbreakDetected\"].Value<bool>() == true)`, and immediately returns `<return-response><set-status code=\"400\" reason=\"Jailbreak Detected\" /></return-response>`., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 3709,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Alpine Ski Field Technician` implementing `WORM Audit Logging & Legal Hold (`RetentionInDays=2555`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `architecting high-speed synchronous APIM safety gateway with early 400 abort` (Implementation Task #9).",
    "question": "[HARD Coding Task #9] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `WORM Audit Logging & Legal Hold (`RetentionInDays=2555`)` when implementing `architecting high-speed synchronous APIM safety gateway with early 400 abort`?",
    "options": [
      "A) Writing an APIM `<inbound>` XML block that executes a synchronous `<send-request mode=\"new\" response-variable-name=\"safetyRes\" timeout=\"2\" ignore-error=\"false\"><set-url>https://ai-safety.cognitiveservices.azure.com/text:analyze</set-url>...</send-request>`, checks `@(((IResponse)context.Variables[\"safetyRes\"]).Body.As<JObject>()[\"jailbreakDetected\"].Value<bool>() == true)`, and immediately returns `<return-response><set-status code=\"400\" reason=\"Jailbreak Detected\" /></return-response>`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing an APIM `<inbound>` XML block that executes a synchronous `<send-request mode=\"new\" response-variable-name=\"safetyRes\" timeout=\"2\" ignore-error=\"false\"><set-url>https://ai-safety.cognitiveservices.azure.com/text:analyze</set-url>...</send-request>`, checks `@(((IResponse)context.Variables[\"safetyRes\"]).Body.As<JObject>()[\"jailbreakDetected\"].Value<bool>() == true)`, and immediately returns `<return-response><set-status code=\"400\" reason=\"Jailbreak Detected\" /></return-response>`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `WORM Audit Logging & Legal Hold (`RetentionInDays=2555`)`, Writing an APIM `<inbound>` XML block that executes a synchronous `<send-request mode=\"new\" response-variable-name=\"safetyRes\" timeout=\"2\" ignore-error=\"false\"><set-url>https://ai-safety.cognitiveservices.azure.com/text:analyze</set-url>...</send-request>`, checks `@(((IResponse)context.Variables[\"safetyRes\"]).Body.As<JObject>()[\"jailbreakDetected\"].Value<bool>() == true)`, and immediately returns `<return-response><set-status code=\"400\" reason=\"Jailbreak Detected\" /></return-response>`. is the officially required syntax for `architecting high-speed synchronous APIM safety gateway with early 400 abort`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3710,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Tailwind Traders Multi-Agent` implementing `Customer-Managed Keys (CMK) Secret Rotation (`userAssignedIdentity`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `architecting high-speed synchronous APIM safety gateway with early 400 abort` (Implementation Task #10).",
    "question": "[HARD Coding Task #10] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Customer-Managed Keys (CMK) Secret Rotation (`userAssignedIdentity`)` when implementing `architecting high-speed synchronous APIM safety gateway with early 400 abort`?",
    "options": [
      "A) Writing an APIM `<inbound>` XML block that executes a synchronous `<send-request mode=\"new\" response-variable-name=\"safetyRes\" timeout=\"2\" ignore-error=\"false\"><set-url>https://ai-safety.cognitiveservices.azure.com/text:analyze</set-url>...</send-request>`, checks `@(((IResponse)context.Variables[\"safetyRes\"]).Body.As<JObject>()[\"jailbreakDetected\"].Value<bool>() == true)`, and immediately returns `<return-response><set-status code=\"400\" reason=\"Jailbreak Detected\" /></return-response>`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing an APIM `<inbound>` XML block that executes a synchronous `<send-request mode=\"new\" response-variable-name=\"safetyRes\" timeout=\"2\" ignore-error=\"false\"><set-url>https://ai-safety.cognitiveservices.azure.com/text:analyze</set-url>...</send-request>`, checks `@(((IResponse)context.Variables[\"safetyRes\"]).Body.As<JObject>()[\"jailbreakDetected\"].Value<bool>() == true)`, and immediately returns `<return-response><set-status code=\"400\" reason=\"Jailbreak Detected\" /></return-response>`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Customer-Managed Keys (CMK) Secret Rotation (`userAssignedIdentity`)`, Writing an APIM `<inbound>` XML block that executes a synchronous `<send-request mode=\"new\" response-variable-name=\"safetyRes\" timeout=\"2\" ignore-error=\"false\"><set-url>https://ai-safety.cognitiveservices.azure.com/text:analyze</set-url>...</send-request>`, checks `@(((IResponse)context.Variables[\"safetyRes\"]).Body.As<JObject>()[\"jailbreakDetected\"].Value<bool>() == true)`, and immediately returns `<return-response><set-status code=\"400\" reason=\"Jailbreak Detected\" /></return-response>`. is the officially required syntax for `architecting high-speed synchronous APIM safety gateway with early 400 abort`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3711,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Adventure Works Core Hub` implementing `Azure AI Content Safety Prompt Shields (`JailbreakDetected == true`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `zero-trust air-gapped RAG indexing over Private Endpoints with CMK and OIDC` (Implementation Task #11).",
    "question": "[HARD Coding Task #11] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Azure AI Content Safety Prompt Shields (`JailbreakDetected == true`)` when implementing `zero-trust air-gapped RAG indexing over Private Endpoints with CMK and OIDC`?",
    "options": [
      "A) Writing an end-to-end Python indexing job (`src/jobs/index_documents.py`) running inside an air-gapped VNet runner over `privatelink.search.windows.net`, authenticating via `DefaultAzureCredential()` (`User-Assigned Managed Identity`), reading encrypted blobs (`CMK Key Vault RSA-HSM`), and vectorizing via `text-embedding-3-large` without exposing any data to public internet routes.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing an end-to-end Python indexing job (`src/jobs/index_documents.py`) running inside an air-gapped VNet runner over `privatelink.search.windows.net`, authenticating via `DefaultAzureCredential()` (`User-Assigned Managed Identity`), reading encrypted blobs (`CMK Key Vault RSA-HSM`), and vectorizing via `text-embedding-3-large` without exposing any data to public internet routes.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Azure AI Content Safety Prompt Shields (`JailbreakDetected == true`)`, Writing an end-to-end Python indexing job (`src/jobs/index_documents.py`) running inside an air-gapped VNet runner over `privatelink.search.windows.net`, authenticating via `DefaultAzureCredential()` (`User-Assigned Managed Identity`), reading encrypted blobs (`CMK Key Vault RSA-HSM`), and vectorizing via `text-embedding-3-large` without exposing any data to public internet routes. is the officially required syntax for `zero-trust air-gapped RAG indexing over Private Endpoints with CMK and OIDC`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3712,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Contoso Health AI` implementing `Automated Red-Teaming Engine (`azure.ai.evaluation.simulator`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `zero-trust air-gapped RAG indexing over Private Endpoints with CMK and OIDC` (Implementation Task #12).",
    "question": "[HARD Coding Task #12] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Automated Red-Teaming Engine (`azure.ai.evaluation.simulator`)` for `zero-trust air-gapped RAG indexing over Private Endpoints with CMK and OIDC`? (Select three)",
    "options": [
      "A) Writing an end-to-end Python indexing job (`src/jobs/index_documents.py`) running inside an air-gapped VNet runner over `privatelink.search.windows.net`, authenticating via `DefaultAzureCredential()` (`User-Assigned Managed Identity`), reading encrypted blobs (`CMK Key Vault RSA-HSM`), and vectorizing via `text-embedding-3-large` without exposing any data to public internet routes.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Automated Red-Teaming Engine (`azure.ai.evaluation.simulator`)` for `zero-trust air-gapped RAG indexing over Private Endpoints with CMK and OIDC`, enterprise coding standards mandate: (1) Writing an end-to-end Python indexing job (`src/jobs/index_documents.py`) running inside an air-gapped VNet runner over `privatelink.search.windows.net`, authenticating via `DefaultAzureCredential()` (`User-Assigned Managed Identity`), reading encrypted blobs (`CMK Key Vault RSA-HSM`), and vectorizing via `text-embedding-3-large` without exposing any data to public internet routes., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 3713,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Fabrikam Logistics Agent` implementing `Indirect Prompt Injection Defense in RAG (`IndirectAttackEvaluator`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `zero-trust air-gapped RAG indexing over Private Endpoints with CMK and OIDC` (Implementation Task #13).",
    "question": "[HARD Coding Task #13] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Indirect Prompt Injection Defense in RAG (`IndirectAttackEvaluator`)` when implementing `zero-trust air-gapped RAG indexing over Private Endpoints with CMK and OIDC`?",
    "options": [
      "A) Writing an end-to-end Python indexing job (`src/jobs/index_documents.py`) running inside an air-gapped VNet runner over `privatelink.search.windows.net`, authenticating via `DefaultAzureCredential()` (`User-Assigned Managed Identity`), reading encrypted blobs (`CMK Key Vault RSA-HSM`), and vectorizing via `text-embedding-3-large` without exposing any data to public internet routes.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing an end-to-end Python indexing job (`src/jobs/index_documents.py`) running inside an air-gapped VNet runner over `privatelink.search.windows.net`, authenticating via `DefaultAzureCredential()` (`User-Assigned Managed Identity`), reading encrypted blobs (`CMK Key Vault RSA-HSM`), and vectorizing via `text-embedding-3-large` without exposing any data to public internet routes.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Indirect Prompt Injection Defense in RAG (`IndirectAttackEvaluator`)`, Writing an end-to-end Python indexing job (`src/jobs/index_documents.py`) running inside an air-gapped VNet runner over `privatelink.search.windows.net`, authenticating via `DefaultAzureCredential()` (`User-Assigned Managed Identity`), reading encrypted blobs (`CMK Key Vault RSA-HSM`), and vectorizing via `text-embedding-3-large` without exposing any data to public internet routes. is the officially required syntax for `zero-trust air-gapped RAG indexing over Private Endpoints with CMK and OIDC`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3714,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Trey Research Lab` implementing `PTU vs Standard Load Balancing in APIM (`<choose>`, `<circuit-breaker>`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `zero-trust air-gapped RAG indexing over Private Endpoints with CMK and OIDC` (Implementation Task #14).",
    "question": "[HARD Coding Task #14] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `PTU vs Standard Load Balancing in APIM (`<choose>`, `<circuit-breaker>`)` when implementing `zero-trust air-gapped RAG indexing over Private Endpoints with CMK and OIDC`?",
    "options": [
      "A) Writing an end-to-end Python indexing job (`src/jobs/index_documents.py`) running inside an air-gapped VNet runner over `privatelink.search.windows.net`, authenticating via `DefaultAzureCredential()` (`User-Assigned Managed Identity`), reading encrypted blobs (`CMK Key Vault RSA-HSM`), and vectorizing via `text-embedding-3-large` without exposing any data to public internet routes.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing an end-to-end Python indexing job (`src/jobs/index_documents.py`) running inside an air-gapped VNet runner over `privatelink.search.windows.net`, authenticating via `DefaultAzureCredential()` (`User-Assigned Managed Identity`), reading encrypted blobs (`CMK Key Vault RSA-HSM`), and vectorizing via `text-embedding-3-large` without exposing any data to public internet routes.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `PTU vs Standard Load Balancing in APIM (`<choose>`, `<circuit-breaker>`)`, Writing an end-to-end Python indexing job (`src/jobs/index_documents.py`) running inside an air-gapped VNet runner over `privatelink.search.windows.net`, authenticating via `DefaultAzureCredential()` (`User-Assigned Managed Identity`), reading encrypted blobs (`CMK Key Vault RSA-HSM`), and vectorizing via `text-embedding-3-large` without exposing any data to public internet routes. is the officially required syntax for `zero-trust air-gapped RAG indexing over Private Endpoints with CMK and OIDC`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3715,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Northwind Traders Bot` implementing `Zero-Trust Private Link & VNet Isolation (`publicNetworkAccess: 'Disabled'`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `zero-trust air-gapped RAG indexing over Private Endpoints with CMK and OIDC` (Implementation Task #15).",
    "question": "[HARD Coding Task #15] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Zero-Trust Private Link & VNet Isolation (`publicNetworkAccess: 'Disabled'`)` when implementing `zero-trust air-gapped RAG indexing over Private Endpoints with CMK and OIDC`?",
    "options": [
      "A) Writing an end-to-end Python indexing job (`src/jobs/index_documents.py`) running inside an air-gapped VNet runner over `privatelink.search.windows.net`, authenticating via `DefaultAzureCredential()` (`User-Assigned Managed Identity`), reading encrypted blobs (`CMK Key Vault RSA-HSM`), and vectorizing via `text-embedding-3-large` without exposing any data to public internet routes.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing an end-to-end Python indexing job (`src/jobs/index_documents.py`) running inside an air-gapped VNet runner over `privatelink.search.windows.net`, authenticating via `DefaultAzureCredential()` (`User-Assigned Managed Identity`), reading encrypted blobs (`CMK Key Vault RSA-HSM`), and vectorizing via `text-embedding-3-large` without exposing any data to public internet routes.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Zero-Trust Private Link & VNet Isolation (`publicNetworkAccess: 'Disabled'`)`, Writing an end-to-end Python indexing job (`src/jobs/index_documents.py`) running inside an air-gapped VNet runner over `privatelink.search.windows.net`, authenticating via `DefaultAzureCredential()` (`User-Assigned Managed Identity`), reading encrypted blobs (`CMK Key Vault RSA-HSM`), and vectorizing via `text-embedding-3-large` without exposing any data to public internet routes. is the officially required syntax for `zero-trust air-gapped RAG indexing over Private Endpoints with CMK and OIDC`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3716,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Woodgrove Bank Virtual Assistant` implementing `Token Inflation & Context Window Truncation (`SlidingTokenWindow`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `zero-trust air-gapped RAG indexing over Private Endpoints with CMK and OIDC` (Implementation Task #16).",
    "question": "[HARD Coding Task #16] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Token Inflation & Context Window Truncation (`SlidingTokenWindow`)` for `zero-trust air-gapped RAG indexing over Private Endpoints with CMK and OIDC`? (Select three)",
    "options": [
      "A) Writing an end-to-end Python indexing job (`src/jobs/index_documents.py`) running inside an air-gapped VNet runner over `privatelink.search.windows.net`, authenticating via `DefaultAzureCredential()` (`User-Assigned Managed Identity`), reading encrypted blobs (`CMK Key Vault RSA-HSM`), and vectorizing via `text-embedding-3-large` without exposing any data to public internet routes.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Token Inflation & Context Window Truncation (`SlidingTokenWindow`)` for `zero-trust air-gapped RAG indexing over Private Endpoints with CMK and OIDC`, enterprise coding standards mandate: (1) Writing an end-to-end Python indexing job (`src/jobs/index_documents.py`) running inside an air-gapped VNet runner over `privatelink.search.windows.net`, authenticating via `DefaultAzureCredential()` (`User-Assigned Managed Identity`), reading encrypted blobs (`CMK Key Vault RSA-HSM`), and vectorizing via `text-embedding-3-large` without exposing any data to public internet routes., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 3717,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Litware Legal Evaluator` implementing `Custom PII & Sensitive Data Redaction (`Presidio` / `TextAnonymizer`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `zero-trust air-gapped RAG indexing over Private Endpoints with CMK and OIDC` (Implementation Task #17).",
    "question": "[HARD Coding Task #17] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Custom PII & Sensitive Data Redaction (`Presidio` / `TextAnonymizer`)` when implementing `zero-trust air-gapped RAG indexing over Private Endpoints with CMK and OIDC`?",
    "options": [
      "A) Writing an end-to-end Python indexing job (`src/jobs/index_documents.py`) running inside an air-gapped VNet runner over `privatelink.search.windows.net`, authenticating via `DefaultAzureCredential()` (`User-Assigned Managed Identity`), reading encrypted blobs (`CMK Key Vault RSA-HSM`), and vectorizing via `text-embedding-3-large` without exposing any data to public internet routes.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing an end-to-end Python indexing job (`src/jobs/index_documents.py`) running inside an air-gapped VNet runner over `privatelink.search.windows.net`, authenticating via `DefaultAzureCredential()` (`User-Assigned Managed Identity`), reading encrypted blobs (`CMK Key Vault RSA-HSM`), and vectorizing via `text-embedding-3-large` without exposing any data to public internet routes.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Custom PII & Sensitive Data Redaction (`Presidio` / `TextAnonymizer`)`, Writing an end-to-end Python indexing job (`src/jobs/index_documents.py`) running inside an air-gapped VNet runner over `privatelink.search.windows.net`, authenticating via `DefaultAzureCredential()` (`User-Assigned Managed Identity`), reading encrypted blobs (`CMK Key Vault RSA-HSM`), and vectorizing via `text-embedding-3-large` without exposing any data to public internet routes. is the officially required syntax for `zero-trust air-gapped RAG indexing over Private Endpoints with CMK and OIDC`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3718,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `A.Datum Retail Copilot` implementing `Multi-Agent Deadlock & Cyclic Loop Prevention (`max_turns=10`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `zero-trust air-gapped RAG indexing over Private Endpoints with CMK and OIDC` (Implementation Task #18).",
    "question": "[HARD Coding Task #18] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Multi-Agent Deadlock & Cyclic Loop Prevention (`max_turns=10`)` when implementing `zero-trust air-gapped RAG indexing over Private Endpoints with CMK and OIDC`?",
    "options": [
      "A) Writing an end-to-end Python indexing job (`src/jobs/index_documents.py`) running inside an air-gapped VNet runner over `privatelink.search.windows.net`, authenticating via `DefaultAzureCredential()` (`User-Assigned Managed Identity`), reading encrypted blobs (`CMK Key Vault RSA-HSM`), and vectorizing via `text-embedding-3-large` without exposing any data to public internet routes.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing an end-to-end Python indexing job (`src/jobs/index_documents.py`) running inside an air-gapped VNet runner over `privatelink.search.windows.net`, authenticating via `DefaultAzureCredential()` (`User-Assigned Managed Identity`), reading encrypted blobs (`CMK Key Vault RSA-HSM`), and vectorizing via `text-embedding-3-large` without exposing any data to public internet routes.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Multi-Agent Deadlock & Cyclic Loop Prevention (`max_turns=10`)`, Writing an end-to-end Python indexing job (`src/jobs/index_documents.py`) running inside an air-gapped VNet runner over `privatelink.search.windows.net`, authenticating via `DefaultAzureCredential()` (`User-Assigned Managed Identity`), reading encrypted blobs (`CMK Key Vault RSA-HSM`), and vectorizing via `text-embedding-3-large` without exposing any data to public internet routes. is the officially required syntax for `zero-trust air-gapped RAG indexing over Private Endpoints with CMK and OIDC`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3719,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Alpine Ski Field Technician` implementing `WORM Audit Logging & Legal Hold (`RetentionInDays=2555`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `zero-trust air-gapped RAG indexing over Private Endpoints with CMK and OIDC` (Implementation Task #19).",
    "question": "[HARD Coding Task #19] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `WORM Audit Logging & Legal Hold (`RetentionInDays=2555`)` when implementing `zero-trust air-gapped RAG indexing over Private Endpoints with CMK and OIDC`?",
    "options": [
      "A) Writing an end-to-end Python indexing job (`src/jobs/index_documents.py`) running inside an air-gapped VNet runner over `privatelink.search.windows.net`, authenticating via `DefaultAzureCredential()` (`User-Assigned Managed Identity`), reading encrypted blobs (`CMK Key Vault RSA-HSM`), and vectorizing via `text-embedding-3-large` without exposing any data to public internet routes.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing an end-to-end Python indexing job (`src/jobs/index_documents.py`) running inside an air-gapped VNet runner over `privatelink.search.windows.net`, authenticating via `DefaultAzureCredential()` (`User-Assigned Managed Identity`), reading encrypted blobs (`CMK Key Vault RSA-HSM`), and vectorizing via `text-embedding-3-large` without exposing any data to public internet routes.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `WORM Audit Logging & Legal Hold (`RetentionInDays=2555`)`, Writing an end-to-end Python indexing job (`src/jobs/index_documents.py`) running inside an air-gapped VNet runner over `privatelink.search.windows.net`, authenticating via `DefaultAzureCredential()` (`User-Assigned Managed Identity`), reading encrypted blobs (`CMK Key Vault RSA-HSM`), and vectorizing via `text-embedding-3-large` without exposing any data to public internet routes. is the officially required syntax for `zero-trust air-gapped RAG indexing over Private Endpoints with CMK and OIDC`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3720,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Tailwind Traders Multi-Agent` implementing `Customer-Managed Keys (CMK) Secret Rotation (`userAssignedIdentity`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `zero-trust air-gapped RAG indexing over Private Endpoints with CMK and OIDC` (Implementation Task #20).",
    "question": "[HARD Coding Task #20] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Customer-Managed Keys (CMK) Secret Rotation (`userAssignedIdentity`)` for `zero-trust air-gapped RAG indexing over Private Endpoints with CMK and OIDC`? (Select three)",
    "options": [
      "A) Writing an end-to-end Python indexing job (`src/jobs/index_documents.py`) running inside an air-gapped VNet runner over `privatelink.search.windows.net`, authenticating via `DefaultAzureCredential()` (`User-Assigned Managed Identity`), reading encrypted blobs (`CMK Key Vault RSA-HSM`), and vectorizing via `text-embedding-3-large` without exposing any data to public internet routes.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Customer-Managed Keys (CMK) Secret Rotation (`userAssignedIdentity`)` for `zero-trust air-gapped RAG indexing over Private Endpoints with CMK and OIDC`, enterprise coding standards mandate: (1) Writing an end-to-end Python indexing job (`src/jobs/index_documents.py`) running inside an air-gapped VNet runner over `privatelink.search.windows.net`, authenticating via `DefaultAzureCredential()` (`User-Assigned Managed Identity`), reading encrypted blobs (`CMK Key Vault RSA-HSM`), and vectorizing via `text-embedding-3-large` without exposing any data to public internet routes., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 3721,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Adventure Works Core Hub` implementing `Azure AI Content Safety Prompt Shields (`JailbreakDetected == true`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `automated continuous red-teaming CI/CD pipeline creating high-priority GitHub Security Advisories` (Implementation Task #21).",
    "question": "[HARD Coding Task #21] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Azure AI Content Safety Prompt Shields (`JailbreakDetected == true`)` when implementing `automated continuous red-teaming CI/CD pipeline creating high-priority GitHub Security Advisories`?",
    "options": [
      "A) Writing a complete security automation pipeline (`scripts/run_redteam_security_gate.py`) that executes 1,000 synthetic red-teaming adversarial turns, calculates exact `JailbreakSuccessRate = violations / total_turns`, and if `JailbreakSuccessRate > 0.000`, automatically invokes `github.rest.securityAdvisories.createPrivateAdvisory({ summary: 'Jailbreak vulnerability in Trail Guide v2', severity: 'critical', ... })` and aborts CI/CD.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing a complete security automation pipeline (`scripts/run_redteam_security_gate.py`) that executes 1,000 synthetic red-teaming adversarial turns, calculates exact `JailbreakSuccessRate = violations / total_turns`, and if `JailbreakSuccessRate > 0.000`, automatically invokes `github.rest.securityAdvisories.createPrivateAdvisory({ summary: 'Jailbreak vulnerability in Trail Guide v2', severity: 'critical', ... })` and aborts CI/CD.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Azure AI Content Safety Prompt Shields (`JailbreakDetected == true`)`, Writing a complete security automation pipeline (`scripts/run_redteam_security_gate.py`) that executes 1,000 synthetic red-teaming adversarial turns, calculates exact `JailbreakSuccessRate = violations / total_turns`, and if `JailbreakSuccessRate > 0.000`, automatically invokes `github.rest.securityAdvisories.createPrivateAdvisory({ summary: 'Jailbreak vulnerability in Trail Guide v2', severity: 'critical', ... })` and aborts CI/CD. is the officially required syntax for `automated continuous red-teaming CI/CD pipeline creating high-priority GitHub Security Advisories`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3722,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Contoso Health AI` implementing `Automated Red-Teaming Engine (`azure.ai.evaluation.simulator`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `automated continuous red-teaming CI/CD pipeline creating high-priority GitHub Security Advisories` (Implementation Task #22).",
    "question": "[HARD Coding Task #22] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Automated Red-Teaming Engine (`azure.ai.evaluation.simulator`)` when implementing `automated continuous red-teaming CI/CD pipeline creating high-priority GitHub Security Advisories`?",
    "options": [
      "A) Writing a complete security automation pipeline (`scripts/run_redteam_security_gate.py`) that executes 1,000 synthetic red-teaming adversarial turns, calculates exact `JailbreakSuccessRate = violations / total_turns`, and if `JailbreakSuccessRate > 0.000`, automatically invokes `github.rest.securityAdvisories.createPrivateAdvisory({ summary: 'Jailbreak vulnerability in Trail Guide v2', severity: 'critical', ... })` and aborts CI/CD.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing a complete security automation pipeline (`scripts/run_redteam_security_gate.py`) that executes 1,000 synthetic red-teaming adversarial turns, calculates exact `JailbreakSuccessRate = violations / total_turns`, and if `JailbreakSuccessRate > 0.000`, automatically invokes `github.rest.securityAdvisories.createPrivateAdvisory({ summary: 'Jailbreak vulnerability in Trail Guide v2', severity: 'critical', ... })` and aborts CI/CD.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Automated Red-Teaming Engine (`azure.ai.evaluation.simulator`)`, Writing a complete security automation pipeline (`scripts/run_redteam_security_gate.py`) that executes 1,000 synthetic red-teaming adversarial turns, calculates exact `JailbreakSuccessRate = violations / total_turns`, and if `JailbreakSuccessRate > 0.000`, automatically invokes `github.rest.securityAdvisories.createPrivateAdvisory({ summary: 'Jailbreak vulnerability in Trail Guide v2', severity: 'critical', ... })` and aborts CI/CD. is the officially required syntax for `automated continuous red-teaming CI/CD pipeline creating high-priority GitHub Security Advisories`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3723,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Fabrikam Logistics Agent` implementing `Indirect Prompt Injection Defense in RAG (`IndirectAttackEvaluator`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `automated continuous red-teaming CI/CD pipeline creating high-priority GitHub Security Advisories` (Implementation Task #23).",
    "question": "[HARD Coding Task #23] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Indirect Prompt Injection Defense in RAG (`IndirectAttackEvaluator`)` when implementing `automated continuous red-teaming CI/CD pipeline creating high-priority GitHub Security Advisories`?",
    "options": [
      "A) Writing a complete security automation pipeline (`scripts/run_redteam_security_gate.py`) that executes 1,000 synthetic red-teaming adversarial turns, calculates exact `JailbreakSuccessRate = violations / total_turns`, and if `JailbreakSuccessRate > 0.000`, automatically invokes `github.rest.securityAdvisories.createPrivateAdvisory({ summary: 'Jailbreak vulnerability in Trail Guide v2', severity: 'critical', ... })` and aborts CI/CD.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing a complete security automation pipeline (`scripts/run_redteam_security_gate.py`) that executes 1,000 synthetic red-teaming adversarial turns, calculates exact `JailbreakSuccessRate = violations / total_turns`, and if `JailbreakSuccessRate > 0.000`, automatically invokes `github.rest.securityAdvisories.createPrivateAdvisory({ summary: 'Jailbreak vulnerability in Trail Guide v2', severity: 'critical', ... })` and aborts CI/CD.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Indirect Prompt Injection Defense in RAG (`IndirectAttackEvaluator`)`, Writing a complete security automation pipeline (`scripts/run_redteam_security_gate.py`) that executes 1,000 synthetic red-teaming adversarial turns, calculates exact `JailbreakSuccessRate = violations / total_turns`, and if `JailbreakSuccessRate > 0.000`, automatically invokes `github.rest.securityAdvisories.createPrivateAdvisory({ summary: 'Jailbreak vulnerability in Trail Guide v2', severity: 'critical', ... })` and aborts CI/CD. is the officially required syntax for `automated continuous red-teaming CI/CD pipeline creating high-priority GitHub Security Advisories`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3724,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Trey Research Lab` implementing `PTU vs Standard Load Balancing in APIM (`<choose>`, `<circuit-breaker>`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `automated continuous red-teaming CI/CD pipeline creating high-priority GitHub Security Advisories` (Implementation Task #24).",
    "question": "[HARD Coding Task #24] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `PTU vs Standard Load Balancing in APIM (`<choose>`, `<circuit-breaker>`)` for `automated continuous red-teaming CI/CD pipeline creating high-priority GitHub Security Advisories`? (Select three)",
    "options": [
      "A) Writing a complete security automation pipeline (`scripts/run_redteam_security_gate.py`) that executes 1,000 synthetic red-teaming adversarial turns, calculates exact `JailbreakSuccessRate = violations / total_turns`, and if `JailbreakSuccessRate > 0.000`, automatically invokes `github.rest.securityAdvisories.createPrivateAdvisory({ summary: 'Jailbreak vulnerability in Trail Guide v2', severity: 'critical', ... })` and aborts CI/CD.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `PTU vs Standard Load Balancing in APIM (`<choose>`, `<circuit-breaker>`)` for `automated continuous red-teaming CI/CD pipeline creating high-priority GitHub Security Advisories`, enterprise coding standards mandate: (1) Writing a complete security automation pipeline (`scripts/run_redteam_security_gate.py`) that executes 1,000 synthetic red-teaming adversarial turns, calculates exact `JailbreakSuccessRate = violations / total_turns`, and if `JailbreakSuccessRate > 0.000`, automatically invokes `github.rest.securityAdvisories.createPrivateAdvisory({ summary: 'Jailbreak vulnerability in Trail Guide v2', severity: 'critical', ... })` and aborts CI/CD., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 3725,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Northwind Traders Bot` implementing `Zero-Trust Private Link & VNet Isolation (`publicNetworkAccess: 'Disabled'`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `automated continuous red-teaming CI/CD pipeline creating high-priority GitHub Security Advisories` (Implementation Task #25).",
    "question": "[HARD Coding Task #25] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Zero-Trust Private Link & VNet Isolation (`publicNetworkAccess: 'Disabled'`)` when implementing `automated continuous red-teaming CI/CD pipeline creating high-priority GitHub Security Advisories`?",
    "options": [
      "A) Writing a complete security automation pipeline (`scripts/run_redteam_security_gate.py`) that executes 1,000 synthetic red-teaming adversarial turns, calculates exact `JailbreakSuccessRate = violations / total_turns`, and if `JailbreakSuccessRate > 0.000`, automatically invokes `github.rest.securityAdvisories.createPrivateAdvisory({ summary: 'Jailbreak vulnerability in Trail Guide v2', severity: 'critical', ... })` and aborts CI/CD.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing a complete security automation pipeline (`scripts/run_redteam_security_gate.py`) that executes 1,000 synthetic red-teaming adversarial turns, calculates exact `JailbreakSuccessRate = violations / total_turns`, and if `JailbreakSuccessRate > 0.000`, automatically invokes `github.rest.securityAdvisories.createPrivateAdvisory({ summary: 'Jailbreak vulnerability in Trail Guide v2', severity: 'critical', ... })` and aborts CI/CD.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Zero-Trust Private Link & VNet Isolation (`publicNetworkAccess: 'Disabled'`)`, Writing a complete security automation pipeline (`scripts/run_redteam_security_gate.py`) that executes 1,000 synthetic red-teaming adversarial turns, calculates exact `JailbreakSuccessRate = violations / total_turns`, and if `JailbreakSuccessRate > 0.000`, automatically invokes `github.rest.securityAdvisories.createPrivateAdvisory({ summary: 'Jailbreak vulnerability in Trail Guide v2', severity: 'critical', ... })` and aborts CI/CD. is the officially required syntax for `automated continuous red-teaming CI/CD pipeline creating high-priority GitHub Security Advisories`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3726,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Woodgrove Bank Virtual Assistant` implementing `Token Inflation & Context Window Truncation (`SlidingTokenWindow`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `automated continuous red-teaming CI/CD pipeline creating high-priority GitHub Security Advisories` (Implementation Task #26).",
    "question": "[HARD Coding Task #26] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Token Inflation & Context Window Truncation (`SlidingTokenWindow`)` when implementing `automated continuous red-teaming CI/CD pipeline creating high-priority GitHub Security Advisories`?",
    "options": [
      "A) Writing a complete security automation pipeline (`scripts/run_redteam_security_gate.py`) that executes 1,000 synthetic red-teaming adversarial turns, calculates exact `JailbreakSuccessRate = violations / total_turns`, and if `JailbreakSuccessRate > 0.000`, automatically invokes `github.rest.securityAdvisories.createPrivateAdvisory({ summary: 'Jailbreak vulnerability in Trail Guide v2', severity: 'critical', ... })` and aborts CI/CD.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing a complete security automation pipeline (`scripts/run_redteam_security_gate.py`) that executes 1,000 synthetic red-teaming adversarial turns, calculates exact `JailbreakSuccessRate = violations / total_turns`, and if `JailbreakSuccessRate > 0.000`, automatically invokes `github.rest.securityAdvisories.createPrivateAdvisory({ summary: 'Jailbreak vulnerability in Trail Guide v2', severity: 'critical', ... })` and aborts CI/CD.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Token Inflation & Context Window Truncation (`SlidingTokenWindow`)`, Writing a complete security automation pipeline (`scripts/run_redteam_security_gate.py`) that executes 1,000 synthetic red-teaming adversarial turns, calculates exact `JailbreakSuccessRate = violations / total_turns`, and if `JailbreakSuccessRate > 0.000`, automatically invokes `github.rest.securityAdvisories.createPrivateAdvisory({ summary: 'Jailbreak vulnerability in Trail Guide v2', severity: 'critical', ... })` and aborts CI/CD. is the officially required syntax for `automated continuous red-teaming CI/CD pipeline creating high-priority GitHub Security Advisories`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3727,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Litware Legal Evaluator` implementing `Custom PII & Sensitive Data Redaction (`Presidio` / `TextAnonymizer`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `automated continuous red-teaming CI/CD pipeline creating high-priority GitHub Security Advisories` (Implementation Task #27).",
    "question": "[HARD Coding Task #27] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Custom PII & Sensitive Data Redaction (`Presidio` / `TextAnonymizer`)` when implementing `automated continuous red-teaming CI/CD pipeline creating high-priority GitHub Security Advisories`?",
    "options": [
      "A) Writing a complete security automation pipeline (`scripts/run_redteam_security_gate.py`) that executes 1,000 synthetic red-teaming adversarial turns, calculates exact `JailbreakSuccessRate = violations / total_turns`, and if `JailbreakSuccessRate > 0.000`, automatically invokes `github.rest.securityAdvisories.createPrivateAdvisory({ summary: 'Jailbreak vulnerability in Trail Guide v2', severity: 'critical', ... })` and aborts CI/CD.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing a complete security automation pipeline (`scripts/run_redteam_security_gate.py`) that executes 1,000 synthetic red-teaming adversarial turns, calculates exact `JailbreakSuccessRate = violations / total_turns`, and if `JailbreakSuccessRate > 0.000`, automatically invokes `github.rest.securityAdvisories.createPrivateAdvisory({ summary: 'Jailbreak vulnerability in Trail Guide v2', severity: 'critical', ... })` and aborts CI/CD.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Custom PII & Sensitive Data Redaction (`Presidio` / `TextAnonymizer`)`, Writing a complete security automation pipeline (`scripts/run_redteam_security_gate.py`) that executes 1,000 synthetic red-teaming adversarial turns, calculates exact `JailbreakSuccessRate = violations / total_turns`, and if `JailbreakSuccessRate > 0.000`, automatically invokes `github.rest.securityAdvisories.createPrivateAdvisory({ summary: 'Jailbreak vulnerability in Trail Guide v2', severity: 'critical', ... })` and aborts CI/CD. is the officially required syntax for `automated continuous red-teaming CI/CD pipeline creating high-priority GitHub Security Advisories`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3728,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `A.Datum Retail Copilot` implementing `Multi-Agent Deadlock & Cyclic Loop Prevention (`max_turns=10`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `automated continuous red-teaming CI/CD pipeline creating high-priority GitHub Security Advisories` (Implementation Task #28).",
    "question": "[HARD Coding Task #28] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Multi-Agent Deadlock & Cyclic Loop Prevention (`max_turns=10`)` for `automated continuous red-teaming CI/CD pipeline creating high-priority GitHub Security Advisories`? (Select three)",
    "options": [
      "A) Writing a complete security automation pipeline (`scripts/run_redteam_security_gate.py`) that executes 1,000 synthetic red-teaming adversarial turns, calculates exact `JailbreakSuccessRate = violations / total_turns`, and if `JailbreakSuccessRate > 0.000`, automatically invokes `github.rest.securityAdvisories.createPrivateAdvisory({ summary: 'Jailbreak vulnerability in Trail Guide v2', severity: 'critical', ... })` and aborts CI/CD.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Multi-Agent Deadlock & Cyclic Loop Prevention (`max_turns=10`)` for `automated continuous red-teaming CI/CD pipeline creating high-priority GitHub Security Advisories`, enterprise coding standards mandate: (1) Writing a complete security automation pipeline (`scripts/run_redteam_security_gate.py`) that executes 1,000 synthetic red-teaming adversarial turns, calculates exact `JailbreakSuccessRate = violations / total_turns`, and if `JailbreakSuccessRate > 0.000`, automatically invokes `github.rest.securityAdvisories.createPrivateAdvisory({ summary: 'Jailbreak vulnerability in Trail Guide v2', severity: 'critical', ... })` and aborts CI/CD., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 3729,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Alpine Ski Field Technician` implementing `WORM Audit Logging & Legal Hold (`RetentionInDays=2555`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `automated continuous red-teaming CI/CD pipeline creating high-priority GitHub Security Advisories` (Implementation Task #29).",
    "question": "[HARD Coding Task #29] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `WORM Audit Logging & Legal Hold (`RetentionInDays=2555`)` when implementing `automated continuous red-teaming CI/CD pipeline creating high-priority GitHub Security Advisories`?",
    "options": [
      "A) Writing a complete security automation pipeline (`scripts/run_redteam_security_gate.py`) that executes 1,000 synthetic red-teaming adversarial turns, calculates exact `JailbreakSuccessRate = violations / total_turns`, and if `JailbreakSuccessRate > 0.000`, automatically invokes `github.rest.securityAdvisories.createPrivateAdvisory({ summary: 'Jailbreak vulnerability in Trail Guide v2', severity: 'critical', ... })` and aborts CI/CD.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing a complete security automation pipeline (`scripts/run_redteam_security_gate.py`) that executes 1,000 synthetic red-teaming adversarial turns, calculates exact `JailbreakSuccessRate = violations / total_turns`, and if `JailbreakSuccessRate > 0.000`, automatically invokes `github.rest.securityAdvisories.createPrivateAdvisory({ summary: 'Jailbreak vulnerability in Trail Guide v2', severity: 'critical', ... })` and aborts CI/CD.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `WORM Audit Logging & Legal Hold (`RetentionInDays=2555`)`, Writing a complete security automation pipeline (`scripts/run_redteam_security_gate.py`) that executes 1,000 synthetic red-teaming adversarial turns, calculates exact `JailbreakSuccessRate = violations / total_turns`, and if `JailbreakSuccessRate > 0.000`, automatically invokes `github.rest.securityAdvisories.createPrivateAdvisory({ summary: 'Jailbreak vulnerability in Trail Guide v2', severity: 'critical', ... })` and aborts CI/CD. is the officially required syntax for `automated continuous red-teaming CI/CD pipeline creating high-priority GitHub Security Advisories`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3730,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Tailwind Traders Multi-Agent` implementing `Customer-Managed Keys (CMK) Secret Rotation (`userAssignedIdentity`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `automated continuous red-teaming CI/CD pipeline creating high-priority GitHub Security Advisories` (Implementation Task #30).",
    "question": "[HARD Coding Task #30] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Customer-Managed Keys (CMK) Secret Rotation (`userAssignedIdentity`)` when implementing `automated continuous red-teaming CI/CD pipeline creating high-priority GitHub Security Advisories`?",
    "options": [
      "A) Writing a complete security automation pipeline (`scripts/run_redteam_security_gate.py`) that executes 1,000 synthetic red-teaming adversarial turns, calculates exact `JailbreakSuccessRate = violations / total_turns`, and if `JailbreakSuccessRate > 0.000`, automatically invokes `github.rest.securityAdvisories.createPrivateAdvisory({ summary: 'Jailbreak vulnerability in Trail Guide v2', severity: 'critical', ... })` and aborts CI/CD.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing a complete security automation pipeline (`scripts/run_redteam_security_gate.py`) that executes 1,000 synthetic red-teaming adversarial turns, calculates exact `JailbreakSuccessRate = violations / total_turns`, and if `JailbreakSuccessRate > 0.000`, automatically invokes `github.rest.securityAdvisories.createPrivateAdvisory({ summary: 'Jailbreak vulnerability in Trail Guide v2', severity: 'critical', ... })` and aborts CI/CD.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Customer-Managed Keys (CMK) Secret Rotation (`userAssignedIdentity`)`, Writing a complete security automation pipeline (`scripts/run_redteam_security_gate.py`) that executes 1,000 synthetic red-teaming adversarial turns, calculates exact `JailbreakSuccessRate = violations / total_turns`, and if `JailbreakSuccessRate > 0.000`, automatically invokes `github.rest.securityAdvisories.createPrivateAdvisory({ summary: 'Jailbreak vulnerability in Trail Guide v2', severity: 'critical', ... })` and aborts CI/CD. is the officially required syntax for `automated continuous red-teaming CI/CD pipeline creating high-priority GitHub Security Advisories`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3731,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Adventure Works Core Hub` implementing `Azure AI Content Safety Prompt Shields (`JailbreakDetected == true`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `multi-agent consensus verification with adversarial factuality judge` (Implementation Task #31).",
    "question": "[HARD Coding Task #31] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Azure AI Content Safety Prompt Shields (`JailbreakDetected == true`)` when implementing `multi-agent consensus verification with adversarial factuality judge`?",
    "options": [
      "A) Architecting an `AutoGen` multi-agent verification harness (`src/agents/consensus_harness.py`) where `GeneratorAgent` drafts a technical response, `RedTeamJudgeAgent` actively attempts to find logical fallacies or hallucinated citations (`MRR@10`), and `SynthesizerAgent` only approves the response (`status: 'VERIFIED'`) after `RedTeamJudgeAgent` assigns `GroundednessScore >= 4.8` across 3 independent evaluation passes.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Architecting an `AutoGen` multi-agent verification harness (`src/agents/consensus_harness.py`) where `GeneratorAgent` drafts a technical response, `RedTeamJudgeAgent` actively attempts to find logical fallacies or hallucinated citations (`MRR@10`), and `SynthesizerAgent` only approves the response (`status: 'VERIFIED'`) after `RedTeamJudgeAgent` assigns `GroundednessScore >= 4.8` across 3 independent evaluation passes.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Azure AI Content Safety Prompt Shields (`JailbreakDetected == true`)`, Architecting an `AutoGen` multi-agent verification harness (`src/agents/consensus_harness.py`) where `GeneratorAgent` drafts a technical response, `RedTeamJudgeAgent` actively attempts to find logical fallacies or hallucinated citations (`MRR@10`), and `SynthesizerAgent` only approves the response (`status: 'VERIFIED'`) after `RedTeamJudgeAgent` assigns `GroundednessScore >= 4.8` across 3 independent evaluation passes. is the officially required syntax for `multi-agent consensus verification with adversarial factuality judge`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3732,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Contoso Health AI` implementing `Automated Red-Teaming Engine (`azure.ai.evaluation.simulator`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `multi-agent consensus verification with adversarial factuality judge` (Implementation Task #32).",
    "question": "[HARD Coding Task #32] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Automated Red-Teaming Engine (`azure.ai.evaluation.simulator`)` for `multi-agent consensus verification with adversarial factuality judge`? (Select three)",
    "options": [
      "A) Architecting an `AutoGen` multi-agent verification harness (`src/agents/consensus_harness.py`) where `GeneratorAgent` drafts a technical response, `RedTeamJudgeAgent` actively attempts to find logical fallacies or hallucinated citations (`MRR@10`), and `SynthesizerAgent` only approves the response (`status: 'VERIFIED'`) after `RedTeamJudgeAgent` assigns `GroundednessScore >= 4.8` across 3 independent evaluation passes.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Automated Red-Teaming Engine (`azure.ai.evaluation.simulator`)` for `multi-agent consensus verification with adversarial factuality judge`, enterprise coding standards mandate: (1) Architecting an `AutoGen` multi-agent verification harness (`src/agents/consensus_harness.py`) where `GeneratorAgent` drafts a technical response, `RedTeamJudgeAgent` actively attempts to find logical fallacies or hallucinated citations (`MRR@10`), and `SynthesizerAgent` only approves the response (`status: 'VERIFIED'`) after `RedTeamJudgeAgent` assigns `GroundednessScore >= 4.8` across 3 independent evaluation passes., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 3733,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Fabrikam Logistics Agent` implementing `Indirect Prompt Injection Defense in RAG (`IndirectAttackEvaluator`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `multi-agent consensus verification with adversarial factuality judge` (Implementation Task #33).",
    "question": "[HARD Coding Task #33] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Indirect Prompt Injection Defense in RAG (`IndirectAttackEvaluator`)` when implementing `multi-agent consensus verification with adversarial factuality judge`?",
    "options": [
      "A) Architecting an `AutoGen` multi-agent verification harness (`src/agents/consensus_harness.py`) where `GeneratorAgent` drafts a technical response, `RedTeamJudgeAgent` actively attempts to find logical fallacies or hallucinated citations (`MRR@10`), and `SynthesizerAgent` only approves the response (`status: 'VERIFIED'`) after `RedTeamJudgeAgent` assigns `GroundednessScore >= 4.8` across 3 independent evaluation passes.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Architecting an `AutoGen` multi-agent verification harness (`src/agents/consensus_harness.py`) where `GeneratorAgent` drafts a technical response, `RedTeamJudgeAgent` actively attempts to find logical fallacies or hallucinated citations (`MRR@10`), and `SynthesizerAgent` only approves the response (`status: 'VERIFIED'`) after `RedTeamJudgeAgent` assigns `GroundednessScore >= 4.8` across 3 independent evaluation passes.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Indirect Prompt Injection Defense in RAG (`IndirectAttackEvaluator`)`, Architecting an `AutoGen` multi-agent verification harness (`src/agents/consensus_harness.py`) where `GeneratorAgent` drafts a technical response, `RedTeamJudgeAgent` actively attempts to find logical fallacies or hallucinated citations (`MRR@10`), and `SynthesizerAgent` only approves the response (`status: 'VERIFIED'`) after `RedTeamJudgeAgent` assigns `GroundednessScore >= 4.8` across 3 independent evaluation passes. is the officially required syntax for `multi-agent consensus verification with adversarial factuality judge`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3734,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Trey Research Lab` implementing `PTU vs Standard Load Balancing in APIM (`<choose>`, `<circuit-breaker>`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `multi-agent consensus verification with adversarial factuality judge` (Implementation Task #34).",
    "question": "[HARD Coding Task #34] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `PTU vs Standard Load Balancing in APIM (`<choose>`, `<circuit-breaker>`)` when implementing `multi-agent consensus verification with adversarial factuality judge`?",
    "options": [
      "A) Architecting an `AutoGen` multi-agent verification harness (`src/agents/consensus_harness.py`) where `GeneratorAgent` drafts a technical response, `RedTeamJudgeAgent` actively attempts to find logical fallacies or hallucinated citations (`MRR@10`), and `SynthesizerAgent` only approves the response (`status: 'VERIFIED'`) after `RedTeamJudgeAgent` assigns `GroundednessScore >= 4.8` across 3 independent evaluation passes.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Architecting an `AutoGen` multi-agent verification harness (`src/agents/consensus_harness.py`) where `GeneratorAgent` drafts a technical response, `RedTeamJudgeAgent` actively attempts to find logical fallacies or hallucinated citations (`MRR@10`), and `SynthesizerAgent` only approves the response (`status: 'VERIFIED'`) after `RedTeamJudgeAgent` assigns `GroundednessScore >= 4.8` across 3 independent evaluation passes.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `PTU vs Standard Load Balancing in APIM (`<choose>`, `<circuit-breaker>`)`, Architecting an `AutoGen` multi-agent verification harness (`src/agents/consensus_harness.py`) where `GeneratorAgent` drafts a technical response, `RedTeamJudgeAgent` actively attempts to find logical fallacies or hallucinated citations (`MRR@10`), and `SynthesizerAgent` only approves the response (`status: 'VERIFIED'`) after `RedTeamJudgeAgent` assigns `GroundednessScore >= 4.8` across 3 independent evaluation passes. is the officially required syntax for `multi-agent consensus verification with adversarial factuality judge`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3735,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Northwind Traders Bot` implementing `Zero-Trust Private Link & VNet Isolation (`publicNetworkAccess: 'Disabled'`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `multi-agent consensus verification with adversarial factuality judge` (Implementation Task #35).",
    "question": "[HARD Coding Task #35] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Zero-Trust Private Link & VNet Isolation (`publicNetworkAccess: 'Disabled'`)` when implementing `multi-agent consensus verification with adversarial factuality judge`?",
    "options": [
      "A) Architecting an `AutoGen` multi-agent verification harness (`src/agents/consensus_harness.py`) where `GeneratorAgent` drafts a technical response, `RedTeamJudgeAgent` actively attempts to find logical fallacies or hallucinated citations (`MRR@10`), and `SynthesizerAgent` only approves the response (`status: 'VERIFIED'`) after `RedTeamJudgeAgent` assigns `GroundednessScore >= 4.8` across 3 independent evaluation passes.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Architecting an `AutoGen` multi-agent verification harness (`src/agents/consensus_harness.py`) where `GeneratorAgent` drafts a technical response, `RedTeamJudgeAgent` actively attempts to find logical fallacies or hallucinated citations (`MRR@10`), and `SynthesizerAgent` only approves the response (`status: 'VERIFIED'`) after `RedTeamJudgeAgent` assigns `GroundednessScore >= 4.8` across 3 independent evaluation passes.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Zero-Trust Private Link & VNet Isolation (`publicNetworkAccess: 'Disabled'`)`, Architecting an `AutoGen` multi-agent verification harness (`src/agents/consensus_harness.py`) where `GeneratorAgent` drafts a technical response, `RedTeamJudgeAgent` actively attempts to find logical fallacies or hallucinated citations (`MRR@10`), and `SynthesizerAgent` only approves the response (`status: 'VERIFIED'`) after `RedTeamJudgeAgent` assigns `GroundednessScore >= 4.8` across 3 independent evaluation passes. is the officially required syntax for `multi-agent consensus verification with adversarial factuality judge`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3736,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Woodgrove Bank Virtual Assistant` implementing `Token Inflation & Context Window Truncation (`SlidingTokenWindow`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `multi-agent consensus verification with adversarial factuality judge` (Implementation Task #36).",
    "question": "[HARD Coding Task #36] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Token Inflation & Context Window Truncation (`SlidingTokenWindow`)` for `multi-agent consensus verification with adversarial factuality judge`? (Select three)",
    "options": [
      "A) Architecting an `AutoGen` multi-agent verification harness (`src/agents/consensus_harness.py`) where `GeneratorAgent` drafts a technical response, `RedTeamJudgeAgent` actively attempts to find logical fallacies or hallucinated citations (`MRR@10`), and `SynthesizerAgent` only approves the response (`status: 'VERIFIED'`) after `RedTeamJudgeAgent` assigns `GroundednessScore >= 4.8` across 3 independent evaluation passes.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Token Inflation & Context Window Truncation (`SlidingTokenWindow`)` for `multi-agent consensus verification with adversarial factuality judge`, enterprise coding standards mandate: (1) Architecting an `AutoGen` multi-agent verification harness (`src/agents/consensus_harness.py`) where `GeneratorAgent` drafts a technical response, `RedTeamJudgeAgent` actively attempts to find logical fallacies or hallucinated citations (`MRR@10`), and `SynthesizerAgent` only approves the response (`status: 'VERIFIED'`) after `RedTeamJudgeAgent` assigns `GroundednessScore >= 4.8` across 3 independent evaluation passes., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 3737,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Litware Legal Evaluator` implementing `Custom PII & Sensitive Data Redaction (`Presidio` / `TextAnonymizer`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `multi-agent consensus verification with adversarial factuality judge` (Implementation Task #37).",
    "question": "[HARD Coding Task #37] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Custom PII & Sensitive Data Redaction (`Presidio` / `TextAnonymizer`)` when implementing `multi-agent consensus verification with adversarial factuality judge`?",
    "options": [
      "A) Architecting an `AutoGen` multi-agent verification harness (`src/agents/consensus_harness.py`) where `GeneratorAgent` drafts a technical response, `RedTeamJudgeAgent` actively attempts to find logical fallacies or hallucinated citations (`MRR@10`), and `SynthesizerAgent` only approves the response (`status: 'VERIFIED'`) after `RedTeamJudgeAgent` assigns `GroundednessScore >= 4.8` across 3 independent evaluation passes.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Architecting an `AutoGen` multi-agent verification harness (`src/agents/consensus_harness.py`) where `GeneratorAgent` drafts a technical response, `RedTeamJudgeAgent` actively attempts to find logical fallacies or hallucinated citations (`MRR@10`), and `SynthesizerAgent` only approves the response (`status: 'VERIFIED'`) after `RedTeamJudgeAgent` assigns `GroundednessScore >= 4.8` across 3 independent evaluation passes.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Custom PII & Sensitive Data Redaction (`Presidio` / `TextAnonymizer`)`, Architecting an `AutoGen` multi-agent verification harness (`src/agents/consensus_harness.py`) where `GeneratorAgent` drafts a technical response, `RedTeamJudgeAgent` actively attempts to find logical fallacies or hallucinated citations (`MRR@10`), and `SynthesizerAgent` only approves the response (`status: 'VERIFIED'`) after `RedTeamJudgeAgent` assigns `GroundednessScore >= 4.8` across 3 independent evaluation passes. is the officially required syntax for `multi-agent consensus verification with adversarial factuality judge`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3738,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `A.Datum Retail Copilot` implementing `Multi-Agent Deadlock & Cyclic Loop Prevention (`max_turns=10`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `multi-agent consensus verification with adversarial factuality judge` (Implementation Task #38).",
    "question": "[HARD Coding Task #38] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Multi-Agent Deadlock & Cyclic Loop Prevention (`max_turns=10`)` when implementing `multi-agent consensus verification with adversarial factuality judge`?",
    "options": [
      "A) Architecting an `AutoGen` multi-agent verification harness (`src/agents/consensus_harness.py`) where `GeneratorAgent` drafts a technical response, `RedTeamJudgeAgent` actively attempts to find logical fallacies or hallucinated citations (`MRR@10`), and `SynthesizerAgent` only approves the response (`status: 'VERIFIED'`) after `RedTeamJudgeAgent` assigns `GroundednessScore >= 4.8` across 3 independent evaluation passes.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Architecting an `AutoGen` multi-agent verification harness (`src/agents/consensus_harness.py`) where `GeneratorAgent` drafts a technical response, `RedTeamJudgeAgent` actively attempts to find logical fallacies or hallucinated citations (`MRR@10`), and `SynthesizerAgent` only approves the response (`status: 'VERIFIED'`) after `RedTeamJudgeAgent` assigns `GroundednessScore >= 4.8` across 3 independent evaluation passes.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Multi-Agent Deadlock & Cyclic Loop Prevention (`max_turns=10`)`, Architecting an `AutoGen` multi-agent verification harness (`src/agents/consensus_harness.py`) where `GeneratorAgent` drafts a technical response, `RedTeamJudgeAgent` actively attempts to find logical fallacies or hallucinated citations (`MRR@10`), and `SynthesizerAgent` only approves the response (`status: 'VERIFIED'`) after `RedTeamJudgeAgent` assigns `GroundednessScore >= 4.8` across 3 independent evaluation passes. is the officially required syntax for `multi-agent consensus verification with adversarial factuality judge`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3739,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Alpine Ski Field Technician` implementing `WORM Audit Logging & Legal Hold (`RetentionInDays=2555`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `multi-agent consensus verification with adversarial factuality judge` (Implementation Task #39).",
    "question": "[HARD Coding Task #39] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `WORM Audit Logging & Legal Hold (`RetentionInDays=2555`)` when implementing `multi-agent consensus verification with adversarial factuality judge`?",
    "options": [
      "A) Architecting an `AutoGen` multi-agent verification harness (`src/agents/consensus_harness.py`) where `GeneratorAgent` drafts a technical response, `RedTeamJudgeAgent` actively attempts to find logical fallacies or hallucinated citations (`MRR@10`), and `SynthesizerAgent` only approves the response (`status: 'VERIFIED'`) after `RedTeamJudgeAgent` assigns `GroundednessScore >= 4.8` across 3 independent evaluation passes.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Architecting an `AutoGen` multi-agent verification harness (`src/agents/consensus_harness.py`) where `GeneratorAgent` drafts a technical response, `RedTeamJudgeAgent` actively attempts to find logical fallacies or hallucinated citations (`MRR@10`), and `SynthesizerAgent` only approves the response (`status: 'VERIFIED'`) after `RedTeamJudgeAgent` assigns `GroundednessScore >= 4.8` across 3 independent evaluation passes.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `WORM Audit Logging & Legal Hold (`RetentionInDays=2555`)`, Architecting an `AutoGen` multi-agent verification harness (`src/agents/consensus_harness.py`) where `GeneratorAgent` drafts a technical response, `RedTeamJudgeAgent` actively attempts to find logical fallacies or hallucinated citations (`MRR@10`), and `SynthesizerAgent` only approves the response (`status: 'VERIFIED'`) after `RedTeamJudgeAgent` assigns `GroundednessScore >= 4.8` across 3 independent evaluation passes. is the officially required syntax for `multi-agent consensus verification with adversarial factuality judge`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3740,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Tailwind Traders Multi-Agent` implementing `Customer-Managed Keys (CMK) Secret Rotation (`userAssignedIdentity`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `multi-agent consensus verification with adversarial factuality judge` (Implementation Task #40).",
    "question": "[HARD Coding Task #40] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Customer-Managed Keys (CMK) Secret Rotation (`userAssignedIdentity`)` for `multi-agent consensus verification with adversarial factuality judge`? (Select three)",
    "options": [
      "A) Architecting an `AutoGen` multi-agent verification harness (`src/agents/consensus_harness.py`) where `GeneratorAgent` drafts a technical response, `RedTeamJudgeAgent` actively attempts to find logical fallacies or hallucinated citations (`MRR@10`), and `SynthesizerAgent` only approves the response (`status: 'VERIFIED'`) after `RedTeamJudgeAgent` assigns `GroundednessScore >= 4.8` across 3 independent evaluation passes.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Customer-Managed Keys (CMK) Secret Rotation (`userAssignedIdentity`)` for `multi-agent consensus verification with adversarial factuality judge`, enterprise coding standards mandate: (1) Architecting an `AutoGen` multi-agent verification harness (`src/agents/consensus_harness.py`) where `GeneratorAgent` drafts a technical response, `RedTeamJudgeAgent` actively attempts to find logical fallacies or hallucinated citations (`MRR@10`), and `SynthesizerAgent` only approves the response (`status: 'VERIFIED'`) after `RedTeamJudgeAgent` assigns `GroundednessScore >= 4.8` across 3 independent evaluation passes., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 3741,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Adventure Works Core Hub` implementing `Azure AI Content Safety Prompt Shields (`JailbreakDetected == true`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `active-active multi-region PTU failover with sub-second circuit breaking and token budgeting` (Implementation Task #41).",
    "question": "[HARD Coding Task #41] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Azure AI Content Safety Prompt Shields (`JailbreakDetected == true`)` when implementing `active-active multi-region PTU failover with sub-second circuit breaking and token budgeting`?",
    "options": [
      "A) Writing dual APIM configuration XML (`scripts/apim_failover_policy.xml`) deploying active-active across `East US 2` (`Provisioned PTU`) and `Sweden Central` (`Global Standard`), tracking `X-RateLimit-Remaining-Tokens` headers in Redis (`<cache-store-value key=\"@(\"tokens_\" + context.Request.Headers.GetValueOrDefault(\"x-user-id\"))\" />`), and short-circuiting burst traffic within `15ms` when token budgets deplete.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing dual APIM configuration XML (`scripts/apim_failover_policy.xml`) deploying active-active across `East US 2` (`Provisioned PTU`) and `Sweden Central` (`Global Standard`), tracking `X-RateLimit-Remaining-Tokens` headers in Redis (`<cache-store-value key=\"@(\"tokens_\" + context.Request.Headers.GetValueOrDefault(\"x-user-id\"))\" />`), and short-circuiting burst traffic within `15ms` when token budgets deplete.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Azure AI Content Safety Prompt Shields (`JailbreakDetected == true`)`, Writing dual APIM configuration XML (`scripts/apim_failover_policy.xml`) deploying active-active across `East US 2` (`Provisioned PTU`) and `Sweden Central` (`Global Standard`), tracking `X-RateLimit-Remaining-Tokens` headers in Redis (`<cache-store-value key=\"@(\"tokens_\" + context.Request.Headers.GetValueOrDefault(\"x-user-id\"))\" />`), and short-circuiting burst traffic within `15ms` when token budgets deplete. is the officially required syntax for `active-active multi-region PTU failover with sub-second circuit breaking and token budgeting`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3742,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Contoso Health AI` implementing `Automated Red-Teaming Engine (`azure.ai.evaluation.simulator`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `active-active multi-region PTU failover with sub-second circuit breaking and token budgeting` (Implementation Task #42).",
    "question": "[HARD Coding Task #42] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Automated Red-Teaming Engine (`azure.ai.evaluation.simulator`)` when implementing `active-active multi-region PTU failover with sub-second circuit breaking and token budgeting`?",
    "options": [
      "A) Writing dual APIM configuration XML (`scripts/apim_failover_policy.xml`) deploying active-active across `East US 2` (`Provisioned PTU`) and `Sweden Central` (`Global Standard`), tracking `X-RateLimit-Remaining-Tokens` headers in Redis (`<cache-store-value key=\"@(\"tokens_\" + context.Request.Headers.GetValueOrDefault(\"x-user-id\"))\" />`), and short-circuiting burst traffic within `15ms` when token budgets deplete.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing dual APIM configuration XML (`scripts/apim_failover_policy.xml`) deploying active-active across `East US 2` (`Provisioned PTU`) and `Sweden Central` (`Global Standard`), tracking `X-RateLimit-Remaining-Tokens` headers in Redis (`<cache-store-value key=\"@(\"tokens_\" + context.Request.Headers.GetValueOrDefault(\"x-user-id\"))\" />`), and short-circuiting burst traffic within `15ms` when token budgets deplete.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Automated Red-Teaming Engine (`azure.ai.evaluation.simulator`)`, Writing dual APIM configuration XML (`scripts/apim_failover_policy.xml`) deploying active-active across `East US 2` (`Provisioned PTU`) and `Sweden Central` (`Global Standard`), tracking `X-RateLimit-Remaining-Tokens` headers in Redis (`<cache-store-value key=\"@(\"tokens_\" + context.Request.Headers.GetValueOrDefault(\"x-user-id\"))\" />`), and short-circuiting burst traffic within `15ms` when token budgets deplete. is the officially required syntax for `active-active multi-region PTU failover with sub-second circuit breaking and token budgeting`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3743,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Fabrikam Logistics Agent` implementing `Indirect Prompt Injection Defense in RAG (`IndirectAttackEvaluator`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `active-active multi-region PTU failover with sub-second circuit breaking and token budgeting` (Implementation Task #43).",
    "question": "[HARD Coding Task #43] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Indirect Prompt Injection Defense in RAG (`IndirectAttackEvaluator`)` when implementing `active-active multi-region PTU failover with sub-second circuit breaking and token budgeting`?",
    "options": [
      "A) Writing dual APIM configuration XML (`scripts/apim_failover_policy.xml`) deploying active-active across `East US 2` (`Provisioned PTU`) and `Sweden Central` (`Global Standard`), tracking `X-RateLimit-Remaining-Tokens` headers in Redis (`<cache-store-value key=\"@(\"tokens_\" + context.Request.Headers.GetValueOrDefault(\"x-user-id\"))\" />`), and short-circuiting burst traffic within `15ms` when token budgets deplete.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing dual APIM configuration XML (`scripts/apim_failover_policy.xml`) deploying active-active across `East US 2` (`Provisioned PTU`) and `Sweden Central` (`Global Standard`), tracking `X-RateLimit-Remaining-Tokens` headers in Redis (`<cache-store-value key=\"@(\"tokens_\" + context.Request.Headers.GetValueOrDefault(\"x-user-id\"))\" />`), and short-circuiting burst traffic within `15ms` when token budgets deplete.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Indirect Prompt Injection Defense in RAG (`IndirectAttackEvaluator`)`, Writing dual APIM configuration XML (`scripts/apim_failover_policy.xml`) deploying active-active across `East US 2` (`Provisioned PTU`) and `Sweden Central` (`Global Standard`), tracking `X-RateLimit-Remaining-Tokens` headers in Redis (`<cache-store-value key=\"@(\"tokens_\" + context.Request.Headers.GetValueOrDefault(\"x-user-id\"))\" />`), and short-circuiting burst traffic within `15ms` when token budgets deplete. is the officially required syntax for `active-active multi-region PTU failover with sub-second circuit breaking and token budgeting`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3744,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Trey Research Lab` implementing `PTU vs Standard Load Balancing in APIM (`<choose>`, `<circuit-breaker>`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `active-active multi-region PTU failover with sub-second circuit breaking and token budgeting` (Implementation Task #44).",
    "question": "[HARD Coding Task #44] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `PTU vs Standard Load Balancing in APIM (`<choose>`, `<circuit-breaker>`)` for `active-active multi-region PTU failover with sub-second circuit breaking and token budgeting`? (Select three)",
    "options": [
      "A) Writing dual APIM configuration XML (`scripts/apim_failover_policy.xml`) deploying active-active across `East US 2` (`Provisioned PTU`) and `Sweden Central` (`Global Standard`), tracking `X-RateLimit-Remaining-Tokens` headers in Redis (`<cache-store-value key=\"@(\"tokens_\" + context.Request.Headers.GetValueOrDefault(\"x-user-id\"))\" />`), and short-circuiting burst traffic within `15ms` when token budgets deplete.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `PTU vs Standard Load Balancing in APIM (`<choose>`, `<circuit-breaker>`)` for `active-active multi-region PTU failover with sub-second circuit breaking and token budgeting`, enterprise coding standards mandate: (1) Writing dual APIM configuration XML (`scripts/apim_failover_policy.xml`) deploying active-active across `East US 2` (`Provisioned PTU`) and `Sweden Central` (`Global Standard`), tracking `X-RateLimit-Remaining-Tokens` headers in Redis (`<cache-store-value key=\"@(\"tokens_\" + context.Request.Headers.GetValueOrDefault(\"x-user-id\"))\" />`), and short-circuiting burst traffic within `15ms` when token budgets deplete., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 3745,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Northwind Traders Bot` implementing `Zero-Trust Private Link & VNet Isolation (`publicNetworkAccess: 'Disabled'`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `active-active multi-region PTU failover with sub-second circuit breaking and token budgeting` (Implementation Task #45).",
    "question": "[HARD Coding Task #45] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Zero-Trust Private Link & VNet Isolation (`publicNetworkAccess: 'Disabled'`)` when implementing `active-active multi-region PTU failover with sub-second circuit breaking and token budgeting`?",
    "options": [
      "A) Writing dual APIM configuration XML (`scripts/apim_failover_policy.xml`) deploying active-active across `East US 2` (`Provisioned PTU`) and `Sweden Central` (`Global Standard`), tracking `X-RateLimit-Remaining-Tokens` headers in Redis (`<cache-store-value key=\"@(\"tokens_\" + context.Request.Headers.GetValueOrDefault(\"x-user-id\"))\" />`), and short-circuiting burst traffic within `15ms` when token budgets deplete.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing dual APIM configuration XML (`scripts/apim_failover_policy.xml`) deploying active-active across `East US 2` (`Provisioned PTU`) and `Sweden Central` (`Global Standard`), tracking `X-RateLimit-Remaining-Tokens` headers in Redis (`<cache-store-value key=\"@(\"tokens_\" + context.Request.Headers.GetValueOrDefault(\"x-user-id\"))\" />`), and short-circuiting burst traffic within `15ms` when token budgets deplete.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Zero-Trust Private Link & VNet Isolation (`publicNetworkAccess: 'Disabled'`)`, Writing dual APIM configuration XML (`scripts/apim_failover_policy.xml`) deploying active-active across `East US 2` (`Provisioned PTU`) and `Sweden Central` (`Global Standard`), tracking `X-RateLimit-Remaining-Tokens` headers in Redis (`<cache-store-value key=\"@(\"tokens_\" + context.Request.Headers.GetValueOrDefault(\"x-user-id\"))\" />`), and short-circuiting burst traffic within `15ms` when token budgets deplete. is the officially required syntax for `active-active multi-region PTU failover with sub-second circuit breaking and token budgeting`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3746,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Woodgrove Bank Virtual Assistant` implementing `Token Inflation & Context Window Truncation (`SlidingTokenWindow`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `active-active multi-region PTU failover with sub-second circuit breaking and token budgeting` (Implementation Task #46).",
    "question": "[HARD Coding Task #46] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Token Inflation & Context Window Truncation (`SlidingTokenWindow`)` when implementing `active-active multi-region PTU failover with sub-second circuit breaking and token budgeting`?",
    "options": [
      "A) Writing dual APIM configuration XML (`scripts/apim_failover_policy.xml`) deploying active-active across `East US 2` (`Provisioned PTU`) and `Sweden Central` (`Global Standard`), tracking `X-RateLimit-Remaining-Tokens` headers in Redis (`<cache-store-value key=\"@(\"tokens_\" + context.Request.Headers.GetValueOrDefault(\"x-user-id\"))\" />`), and short-circuiting burst traffic within `15ms` when token budgets deplete.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing dual APIM configuration XML (`scripts/apim_failover_policy.xml`) deploying active-active across `East US 2` (`Provisioned PTU`) and `Sweden Central` (`Global Standard`), tracking `X-RateLimit-Remaining-Tokens` headers in Redis (`<cache-store-value key=\"@(\"tokens_\" + context.Request.Headers.GetValueOrDefault(\"x-user-id\"))\" />`), and short-circuiting burst traffic within `15ms` when token budgets deplete.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Token Inflation & Context Window Truncation (`SlidingTokenWindow`)`, Writing dual APIM configuration XML (`scripts/apim_failover_policy.xml`) deploying active-active across `East US 2` (`Provisioned PTU`) and `Sweden Central` (`Global Standard`), tracking `X-RateLimit-Remaining-Tokens` headers in Redis (`<cache-store-value key=\"@(\"tokens_\" + context.Request.Headers.GetValueOrDefault(\"x-user-id\"))\" />`), and short-circuiting burst traffic within `15ms` when token budgets deplete. is the officially required syntax for `active-active multi-region PTU failover with sub-second circuit breaking and token budgeting`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3747,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Litware Legal Evaluator` implementing `Custom PII & Sensitive Data Redaction (`Presidio` / `TextAnonymizer`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `active-active multi-region PTU failover with sub-second circuit breaking and token budgeting` (Implementation Task #47).",
    "question": "[HARD Coding Task #47] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Custom PII & Sensitive Data Redaction (`Presidio` / `TextAnonymizer`)` when implementing `active-active multi-region PTU failover with sub-second circuit breaking and token budgeting`?",
    "options": [
      "A) Writing dual APIM configuration XML (`scripts/apim_failover_policy.xml`) deploying active-active across `East US 2` (`Provisioned PTU`) and `Sweden Central` (`Global Standard`), tracking `X-RateLimit-Remaining-Tokens` headers in Redis (`<cache-store-value key=\"@(\"tokens_\" + context.Request.Headers.GetValueOrDefault(\"x-user-id\"))\" />`), and short-circuiting burst traffic within `15ms` when token budgets deplete.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing dual APIM configuration XML (`scripts/apim_failover_policy.xml`) deploying active-active across `East US 2` (`Provisioned PTU`) and `Sweden Central` (`Global Standard`), tracking `X-RateLimit-Remaining-Tokens` headers in Redis (`<cache-store-value key=\"@(\"tokens_\" + context.Request.Headers.GetValueOrDefault(\"x-user-id\"))\" />`), and short-circuiting burst traffic within `15ms` when token budgets deplete.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Custom PII & Sensitive Data Redaction (`Presidio` / `TextAnonymizer`)`, Writing dual APIM configuration XML (`scripts/apim_failover_policy.xml`) deploying active-active across `East US 2` (`Provisioned PTU`) and `Sweden Central` (`Global Standard`), tracking `X-RateLimit-Remaining-Tokens` headers in Redis (`<cache-store-value key=\"@(\"tokens_\" + context.Request.Headers.GetValueOrDefault(\"x-user-id\"))\" />`), and short-circuiting burst traffic within `15ms` when token budgets deplete. is the officially required syntax for `active-active multi-region PTU failover with sub-second circuit breaking and token budgeting`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3748,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `A.Datum Retail Copilot` implementing `Multi-Agent Deadlock & Cyclic Loop Prevention (`max_turns=10`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `active-active multi-region PTU failover with sub-second circuit breaking and token budgeting` (Implementation Task #48).",
    "question": "[HARD Coding Task #48] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Multi-Agent Deadlock & Cyclic Loop Prevention (`max_turns=10`)` for `active-active multi-region PTU failover with sub-second circuit breaking and token budgeting`? (Select three)",
    "options": [
      "A) Writing dual APIM configuration XML (`scripts/apim_failover_policy.xml`) deploying active-active across `East US 2` (`Provisioned PTU`) and `Sweden Central` (`Global Standard`), tracking `X-RateLimit-Remaining-Tokens` headers in Redis (`<cache-store-value key=\"@(\"tokens_\" + context.Request.Headers.GetValueOrDefault(\"x-user-id\"))\" />`), and short-circuiting burst traffic within `15ms` when token budgets deplete.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Multi-Agent Deadlock & Cyclic Loop Prevention (`max_turns=10`)` for `active-active multi-region PTU failover with sub-second circuit breaking and token budgeting`, enterprise coding standards mandate: (1) Writing dual APIM configuration XML (`scripts/apim_failover_policy.xml`) deploying active-active across `East US 2` (`Provisioned PTU`) and `Sweden Central` (`Global Standard`), tracking `X-RateLimit-Remaining-Tokens` headers in Redis (`<cache-store-value key=\"@(\"tokens_\" + context.Request.Headers.GetValueOrDefault(\"x-user-id\"))\" />`), and short-circuiting burst traffic within `15ms` when token budgets deplete., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 3749,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Alpine Ski Field Technician` implementing `WORM Audit Logging & Legal Hold (`RetentionInDays=2555`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `active-active multi-region PTU failover with sub-second circuit breaking and token budgeting` (Implementation Task #49).",
    "question": "[HARD Coding Task #49] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `WORM Audit Logging & Legal Hold (`RetentionInDays=2555`)` when implementing `active-active multi-region PTU failover with sub-second circuit breaking and token budgeting`?",
    "options": [
      "A) Writing dual APIM configuration XML (`scripts/apim_failover_policy.xml`) deploying active-active across `East US 2` (`Provisioned PTU`) and `Sweden Central` (`Global Standard`), tracking `X-RateLimit-Remaining-Tokens` headers in Redis (`<cache-store-value key=\"@(\"tokens_\" + context.Request.Headers.GetValueOrDefault(\"x-user-id\"))\" />`), and short-circuiting burst traffic within `15ms` when token budgets deplete.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing dual APIM configuration XML (`scripts/apim_failover_policy.xml`) deploying active-active across `East US 2` (`Provisioned PTU`) and `Sweden Central` (`Global Standard`), tracking `X-RateLimit-Remaining-Tokens` headers in Redis (`<cache-store-value key=\"@(\"tokens_\" + context.Request.Headers.GetValueOrDefault(\"x-user-id\"))\" />`), and short-circuiting burst traffic within `15ms` when token budgets deplete.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `WORM Audit Logging & Legal Hold (`RetentionInDays=2555`)`, Writing dual APIM configuration XML (`scripts/apim_failover_policy.xml`) deploying active-active across `East US 2` (`Provisioned PTU`) and `Sweden Central` (`Global Standard`), tracking `X-RateLimit-Remaining-Tokens` headers in Redis (`<cache-store-value key=\"@(\"tokens_\" + context.Request.Headers.GetValueOrDefault(\"x-user-id\"))\" />`), and short-circuiting burst traffic within `15ms` when token budgets deplete. is the officially required syntax for `active-active multi-region PTU failover with sub-second circuit breaking and token budgeting`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3750,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Tailwind Traders Multi-Agent` implementing `Customer-Managed Keys (CMK) Secret Rotation (`userAssignedIdentity`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `active-active multi-region PTU failover with sub-second circuit breaking and token budgeting` (Implementation Task #50).",
    "question": "[HARD Coding Task #50] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Customer-Managed Keys (CMK) Secret Rotation (`userAssignedIdentity`)` when implementing `active-active multi-region PTU failover with sub-second circuit breaking and token budgeting`?",
    "options": [
      "A) Writing dual APIM configuration XML (`scripts/apim_failover_policy.xml`) deploying active-active across `East US 2` (`Provisioned PTU`) and `Sweden Central` (`Global Standard`), tracking `X-RateLimit-Remaining-Tokens` headers in Redis (`<cache-store-value key=\"@(\"tokens_\" + context.Request.Headers.GetValueOrDefault(\"x-user-id\"))\" />`), and short-circuiting burst traffic within `15ms` when token budgets deplete.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing dual APIM configuration XML (`scripts/apim_failover_policy.xml`) deploying active-active across `East US 2` (`Provisioned PTU`) and `Sweden Central` (`Global Standard`), tracking `X-RateLimit-Remaining-Tokens` headers in Redis (`<cache-store-value key=\"@(\"tokens_\" + context.Request.Headers.GetValueOrDefault(\"x-user-id\"))\" />`), and short-circuiting burst traffic within `15ms` when token budgets deplete.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Customer-Managed Keys (CMK) Secret Rotation (`userAssignedIdentity`)`, Writing dual APIM configuration XML (`scripts/apim_failover_policy.xml`) deploying active-active across `East US 2` (`Provisioned PTU`) and `Sweden Central` (`Global Standard`), tracking `X-RateLimit-Remaining-Tokens` headers in Redis (`<cache-store-value key=\"@(\"tokens_\" + context.Request.Headers.GetValueOrDefault(\"x-user-id\"))\" />`), and short-circuiting burst traffic within `15ms` when token budgets deplete. is the officially required syntax for `active-active multi-region PTU failover with sub-second circuit breaking and token budgeting`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3751,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Adventure Works Core Hub` implementing `Azure AI Content Safety Prompt Shields (`JailbreakDetected == true`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `hardware-accelerated ONNX PII and PQR redaction edge gateway before cloud transmission` (Implementation Task #51).",
    "question": "[HARD Coding Task #51] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Azure AI Content Safety Prompt Shields (`JailbreakDetected == true`)` when implementing `hardware-accelerated ONNX PII and PQR redaction edge gateway before cloud transmission`?",
    "options": [
      "A) Writing a local edge inference server script (`src/gateway/edge_pii_filter.py`) utilizing `onnxruntime.InferenceSession('llama-guard-3-8b-int4.onnx')` and `Presidio/ONNX` on local developer edge machines (`Standard_NC6s_v3`), stripping all SSNs, medical record numbers (MRNs), and credit card numbers within `12ms` prior to forwarding sanitized payloads over TLS 1.3 to Azure AI Foundry.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing a local edge inference server script (`src/gateway/edge_pii_filter.py`) utilizing `onnxruntime.InferenceSession('llama-guard-3-8b-int4.onnx')` and `Presidio/ONNX` on local developer edge machines (`Standard_NC6s_v3`), stripping all SSNs, medical record numbers (MRNs), and credit card numbers within `12ms` prior to forwarding sanitized payloads over TLS 1.3 to Azure AI Foundry.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Azure AI Content Safety Prompt Shields (`JailbreakDetected == true`)`, Writing a local edge inference server script (`src/gateway/edge_pii_filter.py`) utilizing `onnxruntime.InferenceSession('llama-guard-3-8b-int4.onnx')` and `Presidio/ONNX` on local developer edge machines (`Standard_NC6s_v3`), stripping all SSNs, medical record numbers (MRNs), and credit card numbers within `12ms` prior to forwarding sanitized payloads over TLS 1.3 to Azure AI Foundry. is the officially required syntax for `hardware-accelerated ONNX PII and PQR redaction edge gateway before cloud transmission`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3752,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Contoso Health AI` implementing `Automated Red-Teaming Engine (`azure.ai.evaluation.simulator`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `hardware-accelerated ONNX PII and PQR redaction edge gateway before cloud transmission` (Implementation Task #52).",
    "question": "[HARD Coding Task #52] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Automated Red-Teaming Engine (`azure.ai.evaluation.simulator`)` for `hardware-accelerated ONNX PII and PQR redaction edge gateway before cloud transmission`? (Select three)",
    "options": [
      "A) Writing a local edge inference server script (`src/gateway/edge_pii_filter.py`) utilizing `onnxruntime.InferenceSession('llama-guard-3-8b-int4.onnx')` and `Presidio/ONNX` on local developer edge machines (`Standard_NC6s_v3`), stripping all SSNs, medical record numbers (MRNs), and credit card numbers within `12ms` prior to forwarding sanitized payloads over TLS 1.3 to Azure AI Foundry.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Automated Red-Teaming Engine (`azure.ai.evaluation.simulator`)` for `hardware-accelerated ONNX PII and PQR redaction edge gateway before cloud transmission`, enterprise coding standards mandate: (1) Writing a local edge inference server script (`src/gateway/edge_pii_filter.py`) utilizing `onnxruntime.InferenceSession('llama-guard-3-8b-int4.onnx')` and `Presidio/ONNX` on local developer edge machines (`Standard_NC6s_v3`), stripping all SSNs, medical record numbers (MRNs), and credit card numbers within `12ms` prior to forwarding sanitized payloads over TLS 1.3 to Azure AI Foundry., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 3753,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Fabrikam Logistics Agent` implementing `Indirect Prompt Injection Defense in RAG (`IndirectAttackEvaluator`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `hardware-accelerated ONNX PII and PQR redaction edge gateway before cloud transmission` (Implementation Task #53).",
    "question": "[HARD Coding Task #53] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Indirect Prompt Injection Defense in RAG (`IndirectAttackEvaluator`)` when implementing `hardware-accelerated ONNX PII and PQR redaction edge gateway before cloud transmission`?",
    "options": [
      "A) Writing a local edge inference server script (`src/gateway/edge_pii_filter.py`) utilizing `onnxruntime.InferenceSession('llama-guard-3-8b-int4.onnx')` and `Presidio/ONNX` on local developer edge machines (`Standard_NC6s_v3`), stripping all SSNs, medical record numbers (MRNs), and credit card numbers within `12ms` prior to forwarding sanitized payloads over TLS 1.3 to Azure AI Foundry.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing a local edge inference server script (`src/gateway/edge_pii_filter.py`) utilizing `onnxruntime.InferenceSession('llama-guard-3-8b-int4.onnx')` and `Presidio/ONNX` on local developer edge machines (`Standard_NC6s_v3`), stripping all SSNs, medical record numbers (MRNs), and credit card numbers within `12ms` prior to forwarding sanitized payloads over TLS 1.3 to Azure AI Foundry.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Indirect Prompt Injection Defense in RAG (`IndirectAttackEvaluator`)`, Writing a local edge inference server script (`src/gateway/edge_pii_filter.py`) utilizing `onnxruntime.InferenceSession('llama-guard-3-8b-int4.onnx')` and `Presidio/ONNX` on local developer edge machines (`Standard_NC6s_v3`), stripping all SSNs, medical record numbers (MRNs), and credit card numbers within `12ms` prior to forwarding sanitized payloads over TLS 1.3 to Azure AI Foundry. is the officially required syntax for `hardware-accelerated ONNX PII and PQR redaction edge gateway before cloud transmission`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3754,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Trey Research Lab` implementing `PTU vs Standard Load Balancing in APIM (`<choose>`, `<circuit-breaker>`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `hardware-accelerated ONNX PII and PQR redaction edge gateway before cloud transmission` (Implementation Task #54).",
    "question": "[HARD Coding Task #54] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `PTU vs Standard Load Balancing in APIM (`<choose>`, `<circuit-breaker>`)` when implementing `hardware-accelerated ONNX PII and PQR redaction edge gateway before cloud transmission`?",
    "options": [
      "A) Writing a local edge inference server script (`src/gateway/edge_pii_filter.py`) utilizing `onnxruntime.InferenceSession('llama-guard-3-8b-int4.onnx')` and `Presidio/ONNX` on local developer edge machines (`Standard_NC6s_v3`), stripping all SSNs, medical record numbers (MRNs), and credit card numbers within `12ms` prior to forwarding sanitized payloads over TLS 1.3 to Azure AI Foundry.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing a local edge inference server script (`src/gateway/edge_pii_filter.py`) utilizing `onnxruntime.InferenceSession('llama-guard-3-8b-int4.onnx')` and `Presidio/ONNX` on local developer edge machines (`Standard_NC6s_v3`), stripping all SSNs, medical record numbers (MRNs), and credit card numbers within `12ms` prior to forwarding sanitized payloads over TLS 1.3 to Azure AI Foundry.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `PTU vs Standard Load Balancing in APIM (`<choose>`, `<circuit-breaker>`)`, Writing a local edge inference server script (`src/gateway/edge_pii_filter.py`) utilizing `onnxruntime.InferenceSession('llama-guard-3-8b-int4.onnx')` and `Presidio/ONNX` on local developer edge machines (`Standard_NC6s_v3`), stripping all SSNs, medical record numbers (MRNs), and credit card numbers within `12ms` prior to forwarding sanitized payloads over TLS 1.3 to Azure AI Foundry. is the officially required syntax for `hardware-accelerated ONNX PII and PQR redaction edge gateway before cloud transmission`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3755,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Northwind Traders Bot` implementing `Zero-Trust Private Link & VNet Isolation (`publicNetworkAccess: 'Disabled'`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `hardware-accelerated ONNX PII and PQR redaction edge gateway before cloud transmission` (Implementation Task #55).",
    "question": "[HARD Coding Task #55] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Zero-Trust Private Link & VNet Isolation (`publicNetworkAccess: 'Disabled'`)` when implementing `hardware-accelerated ONNX PII and PQR redaction edge gateway before cloud transmission`?",
    "options": [
      "A) Writing a local edge inference server script (`src/gateway/edge_pii_filter.py`) utilizing `onnxruntime.InferenceSession('llama-guard-3-8b-int4.onnx')` and `Presidio/ONNX` on local developer edge machines (`Standard_NC6s_v3`), stripping all SSNs, medical record numbers (MRNs), and credit card numbers within `12ms` prior to forwarding sanitized payloads over TLS 1.3 to Azure AI Foundry.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing a local edge inference server script (`src/gateway/edge_pii_filter.py`) utilizing `onnxruntime.InferenceSession('llama-guard-3-8b-int4.onnx')` and `Presidio/ONNX` on local developer edge machines (`Standard_NC6s_v3`), stripping all SSNs, medical record numbers (MRNs), and credit card numbers within `12ms` prior to forwarding sanitized payloads over TLS 1.3 to Azure AI Foundry.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Zero-Trust Private Link & VNet Isolation (`publicNetworkAccess: 'Disabled'`)`, Writing a local edge inference server script (`src/gateway/edge_pii_filter.py`) utilizing `onnxruntime.InferenceSession('llama-guard-3-8b-int4.onnx')` and `Presidio/ONNX` on local developer edge machines (`Standard_NC6s_v3`), stripping all SSNs, medical record numbers (MRNs), and credit card numbers within `12ms` prior to forwarding sanitized payloads over TLS 1.3 to Azure AI Foundry. is the officially required syntax for `hardware-accelerated ONNX PII and PQR redaction edge gateway before cloud transmission`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3756,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Woodgrove Bank Virtual Assistant` implementing `Token Inflation & Context Window Truncation (`SlidingTokenWindow`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `hardware-accelerated ONNX PII and PQR redaction edge gateway before cloud transmission` (Implementation Task #56).",
    "question": "[HARD Coding Task #56] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Token Inflation & Context Window Truncation (`SlidingTokenWindow`)` for `hardware-accelerated ONNX PII and PQR redaction edge gateway before cloud transmission`? (Select three)",
    "options": [
      "A) Writing a local edge inference server script (`src/gateway/edge_pii_filter.py`) utilizing `onnxruntime.InferenceSession('llama-guard-3-8b-int4.onnx')` and `Presidio/ONNX` on local developer edge machines (`Standard_NC6s_v3`), stripping all SSNs, medical record numbers (MRNs), and credit card numbers within `12ms` prior to forwarding sanitized payloads over TLS 1.3 to Azure AI Foundry.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Token Inflation & Context Window Truncation (`SlidingTokenWindow`)` for `hardware-accelerated ONNX PII and PQR redaction edge gateway before cloud transmission`, enterprise coding standards mandate: (1) Writing a local edge inference server script (`src/gateway/edge_pii_filter.py`) utilizing `onnxruntime.InferenceSession('llama-guard-3-8b-int4.onnx')` and `Presidio/ONNX` on local developer edge machines (`Standard_NC6s_v3`), stripping all SSNs, medical record numbers (MRNs), and credit card numbers within `12ms` prior to forwarding sanitized payloads over TLS 1.3 to Azure AI Foundry., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 3757,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Litware Legal Evaluator` implementing `Custom PII & Sensitive Data Redaction (`Presidio` / `TextAnonymizer`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `hardware-accelerated ONNX PII and PQR redaction edge gateway before cloud transmission` (Implementation Task #57).",
    "question": "[HARD Coding Task #57] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Custom PII & Sensitive Data Redaction (`Presidio` / `TextAnonymizer`)` when implementing `hardware-accelerated ONNX PII and PQR redaction edge gateway before cloud transmission`?",
    "options": [
      "A) Writing a local edge inference server script (`src/gateway/edge_pii_filter.py`) utilizing `onnxruntime.InferenceSession('llama-guard-3-8b-int4.onnx')` and `Presidio/ONNX` on local developer edge machines (`Standard_NC6s_v3`), stripping all SSNs, medical record numbers (MRNs), and credit card numbers within `12ms` prior to forwarding sanitized payloads over TLS 1.3 to Azure AI Foundry.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing a local edge inference server script (`src/gateway/edge_pii_filter.py`) utilizing `onnxruntime.InferenceSession('llama-guard-3-8b-int4.onnx')` and `Presidio/ONNX` on local developer edge machines (`Standard_NC6s_v3`), stripping all SSNs, medical record numbers (MRNs), and credit card numbers within `12ms` prior to forwarding sanitized payloads over TLS 1.3 to Azure AI Foundry.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Custom PII & Sensitive Data Redaction (`Presidio` / `TextAnonymizer`)`, Writing a local edge inference server script (`src/gateway/edge_pii_filter.py`) utilizing `onnxruntime.InferenceSession('llama-guard-3-8b-int4.onnx')` and `Presidio/ONNX` on local developer edge machines (`Standard_NC6s_v3`), stripping all SSNs, medical record numbers (MRNs), and credit card numbers within `12ms` prior to forwarding sanitized payloads over TLS 1.3 to Azure AI Foundry. is the officially required syntax for `hardware-accelerated ONNX PII and PQR redaction edge gateway before cloud transmission`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3758,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `A.Datum Retail Copilot` implementing `Multi-Agent Deadlock & Cyclic Loop Prevention (`max_turns=10`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `hardware-accelerated ONNX PII and PQR redaction edge gateway before cloud transmission` (Implementation Task #58).",
    "question": "[HARD Coding Task #58] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Multi-Agent Deadlock & Cyclic Loop Prevention (`max_turns=10`)` when implementing `hardware-accelerated ONNX PII and PQR redaction edge gateway before cloud transmission`?",
    "options": [
      "A) Writing a local edge inference server script (`src/gateway/edge_pii_filter.py`) utilizing `onnxruntime.InferenceSession('llama-guard-3-8b-int4.onnx')` and `Presidio/ONNX` on local developer edge machines (`Standard_NC6s_v3`), stripping all SSNs, medical record numbers (MRNs), and credit card numbers within `12ms` prior to forwarding sanitized payloads over TLS 1.3 to Azure AI Foundry.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing a local edge inference server script (`src/gateway/edge_pii_filter.py`) utilizing `onnxruntime.InferenceSession('llama-guard-3-8b-int4.onnx')` and `Presidio/ONNX` on local developer edge machines (`Standard_NC6s_v3`), stripping all SSNs, medical record numbers (MRNs), and credit card numbers within `12ms` prior to forwarding sanitized payloads over TLS 1.3 to Azure AI Foundry.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Multi-Agent Deadlock & Cyclic Loop Prevention (`max_turns=10`)`, Writing a local edge inference server script (`src/gateway/edge_pii_filter.py`) utilizing `onnxruntime.InferenceSession('llama-guard-3-8b-int4.onnx')` and `Presidio/ONNX` on local developer edge machines (`Standard_NC6s_v3`), stripping all SSNs, medical record numbers (MRNs), and credit card numbers within `12ms` prior to forwarding sanitized payloads over TLS 1.3 to Azure AI Foundry. is the officially required syntax for `hardware-accelerated ONNX PII and PQR redaction edge gateway before cloud transmission`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3759,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Alpine Ski Field Technician` implementing `WORM Audit Logging & Legal Hold (`RetentionInDays=2555`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `hardware-accelerated ONNX PII and PQR redaction edge gateway before cloud transmission` (Implementation Task #59).",
    "question": "[HARD Coding Task #59] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `WORM Audit Logging & Legal Hold (`RetentionInDays=2555`)` when implementing `hardware-accelerated ONNX PII and PQR redaction edge gateway before cloud transmission`?",
    "options": [
      "A) Writing a local edge inference server script (`src/gateway/edge_pii_filter.py`) utilizing `onnxruntime.InferenceSession('llama-guard-3-8b-int4.onnx')` and `Presidio/ONNX` on local developer edge machines (`Standard_NC6s_v3`), stripping all SSNs, medical record numbers (MRNs), and credit card numbers within `12ms` prior to forwarding sanitized payloads over TLS 1.3 to Azure AI Foundry.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing a local edge inference server script (`src/gateway/edge_pii_filter.py`) utilizing `onnxruntime.InferenceSession('llama-guard-3-8b-int4.onnx')` and `Presidio/ONNX` on local developer edge machines (`Standard_NC6s_v3`), stripping all SSNs, medical record numbers (MRNs), and credit card numbers within `12ms` prior to forwarding sanitized payloads over TLS 1.3 to Azure AI Foundry.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `WORM Audit Logging & Legal Hold (`RetentionInDays=2555`)`, Writing a local edge inference server script (`src/gateway/edge_pii_filter.py`) utilizing `onnxruntime.InferenceSession('llama-guard-3-8b-int4.onnx')` and `Presidio/ONNX` on local developer edge machines (`Standard_NC6s_v3`), stripping all SSNs, medical record numbers (MRNs), and credit card numbers within `12ms` prior to forwarding sanitized payloads over TLS 1.3 to Azure AI Foundry. is the officially required syntax for `hardware-accelerated ONNX PII and PQR redaction edge gateway before cloud transmission`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3760,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Tailwind Traders Multi-Agent` implementing `Customer-Managed Keys (CMK) Secret Rotation (`userAssignedIdentity`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `hardware-accelerated ONNX PII and PQR redaction edge gateway before cloud transmission` (Implementation Task #60).",
    "question": "[HARD Coding Task #60] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Customer-Managed Keys (CMK) Secret Rotation (`userAssignedIdentity`)` for `hardware-accelerated ONNX PII and PQR redaction edge gateway before cloud transmission`? (Select three)",
    "options": [
      "A) Writing a local edge inference server script (`src/gateway/edge_pii_filter.py`) utilizing `onnxruntime.InferenceSession('llama-guard-3-8b-int4.onnx')` and `Presidio/ONNX` on local developer edge machines (`Standard_NC6s_v3`), stripping all SSNs, medical record numbers (MRNs), and credit card numbers within `12ms` prior to forwarding sanitized payloads over TLS 1.3 to Azure AI Foundry.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Customer-Managed Keys (CMK) Secret Rotation (`userAssignedIdentity`)` for `hardware-accelerated ONNX PII and PQR redaction edge gateway before cloud transmission`, enterprise coding standards mandate: (1) Writing a local edge inference server script (`src/gateway/edge_pii_filter.py`) utilizing `onnxruntime.InferenceSession('llama-guard-3-8b-int4.onnx')` and `Presidio/ONNX` on local developer edge machines (`Standard_NC6s_v3`), stripping all SSNs, medical record numbers (MRNs), and credit card numbers within `12ms` prior to forwarding sanitized payloads over TLS 1.3 to Azure AI Foundry., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 3761,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Adventure Works Core Hub` implementing `Azure AI Content Safety Prompt Shields (`JailbreakDetected == true`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `formal cryptographic proof of prompt template integrity via Key Vault HMAC-SHA256 signing` (Implementation Task #61).",
    "question": "[HARD Coding Task #61] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Azure AI Content Safety Prompt Shields (`JailbreakDetected == true`)` when implementing `formal cryptographic proof of prompt template integrity via Key Vault HMAC-SHA256 signing`?",
    "options": [
      "A) Writing a runtime startup guard inside `src/app/main.py` that reads all production prompt templates (`prompts/*.jinja2`), calculates exact `hmac.new(key_vault_secret.encode(), prompt_content.encode(), hashlib.sha256).hexdigest()`, and compares against the canonical signature stored in `Key Vault` (`kv_client.get_secret('prompt-trail-guide-sig').value`); if signatures mismatch (`assert sig == expected_sig`), the server refuses to bind port 8000.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing a runtime startup guard inside `src/app/main.py` that reads all production prompt templates (`prompts/*.jinja2`), calculates exact `hmac.new(key_vault_secret.encode(), prompt_content.encode(), hashlib.sha256).hexdigest()`, and compares against the canonical signature stored in `Key Vault` (`kv_client.get_secret('prompt-trail-guide-sig').value`); if signatures mismatch (`assert sig == expected_sig`), the server refuses to bind port 8000.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Azure AI Content Safety Prompt Shields (`JailbreakDetected == true`)`, Writing a runtime startup guard inside `src/app/main.py` that reads all production prompt templates (`prompts/*.jinja2`), calculates exact `hmac.new(key_vault_secret.encode(), prompt_content.encode(), hashlib.sha256).hexdigest()`, and compares against the canonical signature stored in `Key Vault` (`kv_client.get_secret('prompt-trail-guide-sig').value`); if signatures mismatch (`assert sig == expected_sig`), the server refuses to bind port 8000. is the officially required syntax for `formal cryptographic proof of prompt template integrity via Key Vault HMAC-SHA256 signing`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3762,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Contoso Health AI` implementing `Automated Red-Teaming Engine (`azure.ai.evaluation.simulator`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `formal cryptographic proof of prompt template integrity via Key Vault HMAC-SHA256 signing` (Implementation Task #62).",
    "question": "[HARD Coding Task #62] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Automated Red-Teaming Engine (`azure.ai.evaluation.simulator`)` when implementing `formal cryptographic proof of prompt template integrity via Key Vault HMAC-SHA256 signing`?",
    "options": [
      "A) Writing a runtime startup guard inside `src/app/main.py` that reads all production prompt templates (`prompts/*.jinja2`), calculates exact `hmac.new(key_vault_secret.encode(), prompt_content.encode(), hashlib.sha256).hexdigest()`, and compares against the canonical signature stored in `Key Vault` (`kv_client.get_secret('prompt-trail-guide-sig').value`); if signatures mismatch (`assert sig == expected_sig`), the server refuses to bind port 8000.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing a runtime startup guard inside `src/app/main.py` that reads all production prompt templates (`prompts/*.jinja2`), calculates exact `hmac.new(key_vault_secret.encode(), prompt_content.encode(), hashlib.sha256).hexdigest()`, and compares against the canonical signature stored in `Key Vault` (`kv_client.get_secret('prompt-trail-guide-sig').value`); if signatures mismatch (`assert sig == expected_sig`), the server refuses to bind port 8000.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Automated Red-Teaming Engine (`azure.ai.evaluation.simulator`)`, Writing a runtime startup guard inside `src/app/main.py` that reads all production prompt templates (`prompts/*.jinja2`), calculates exact `hmac.new(key_vault_secret.encode(), prompt_content.encode(), hashlib.sha256).hexdigest()`, and compares against the canonical signature stored in `Key Vault` (`kv_client.get_secret('prompt-trail-guide-sig').value`); if signatures mismatch (`assert sig == expected_sig`), the server refuses to bind port 8000. is the officially required syntax for `formal cryptographic proof of prompt template integrity via Key Vault HMAC-SHA256 signing`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3763,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Fabrikam Logistics Agent` implementing `Indirect Prompt Injection Defense in RAG (`IndirectAttackEvaluator`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `formal cryptographic proof of prompt template integrity via Key Vault HMAC-SHA256 signing` (Implementation Task #63).",
    "question": "[HARD Coding Task #63] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Indirect Prompt Injection Defense in RAG (`IndirectAttackEvaluator`)` when implementing `formal cryptographic proof of prompt template integrity via Key Vault HMAC-SHA256 signing`?",
    "options": [
      "A) Writing a runtime startup guard inside `src/app/main.py` that reads all production prompt templates (`prompts/*.jinja2`), calculates exact `hmac.new(key_vault_secret.encode(), prompt_content.encode(), hashlib.sha256).hexdigest()`, and compares against the canonical signature stored in `Key Vault` (`kv_client.get_secret('prompt-trail-guide-sig').value`); if signatures mismatch (`assert sig == expected_sig`), the server refuses to bind port 8000.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing a runtime startup guard inside `src/app/main.py` that reads all production prompt templates (`prompts/*.jinja2`), calculates exact `hmac.new(key_vault_secret.encode(), prompt_content.encode(), hashlib.sha256).hexdigest()`, and compares against the canonical signature stored in `Key Vault` (`kv_client.get_secret('prompt-trail-guide-sig').value`); if signatures mismatch (`assert sig == expected_sig`), the server refuses to bind port 8000.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Indirect Prompt Injection Defense in RAG (`IndirectAttackEvaluator`)`, Writing a runtime startup guard inside `src/app/main.py` that reads all production prompt templates (`prompts/*.jinja2`), calculates exact `hmac.new(key_vault_secret.encode(), prompt_content.encode(), hashlib.sha256).hexdigest()`, and compares against the canonical signature stored in `Key Vault` (`kv_client.get_secret('prompt-trail-guide-sig').value`); if signatures mismatch (`assert sig == expected_sig`), the server refuses to bind port 8000. is the officially required syntax for `formal cryptographic proof of prompt template integrity via Key Vault HMAC-SHA256 signing`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3764,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Trey Research Lab` implementing `PTU vs Standard Load Balancing in APIM (`<choose>`, `<circuit-breaker>`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `formal cryptographic proof of prompt template integrity via Key Vault HMAC-SHA256 signing` (Implementation Task #64).",
    "question": "[HARD Coding Task #64] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `PTU vs Standard Load Balancing in APIM (`<choose>`, `<circuit-breaker>`)` for `formal cryptographic proof of prompt template integrity via Key Vault HMAC-SHA256 signing`? (Select three)",
    "options": [
      "A) Writing a runtime startup guard inside `src/app/main.py` that reads all production prompt templates (`prompts/*.jinja2`), calculates exact `hmac.new(key_vault_secret.encode(), prompt_content.encode(), hashlib.sha256).hexdigest()`, and compares against the canonical signature stored in `Key Vault` (`kv_client.get_secret('prompt-trail-guide-sig').value`); if signatures mismatch (`assert sig == expected_sig`), the server refuses to bind port 8000.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `PTU vs Standard Load Balancing in APIM (`<choose>`, `<circuit-breaker>`)` for `formal cryptographic proof of prompt template integrity via Key Vault HMAC-SHA256 signing`, enterprise coding standards mandate: (1) Writing a runtime startup guard inside `src/app/main.py` that reads all production prompt templates (`prompts/*.jinja2`), calculates exact `hmac.new(key_vault_secret.encode(), prompt_content.encode(), hashlib.sha256).hexdigest()`, and compares against the canonical signature stored in `Key Vault` (`kv_client.get_secret('prompt-trail-guide-sig').value`); if signatures mismatch (`assert sig == expected_sig`), the server refuses to bind port 8000., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 3765,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Northwind Traders Bot` implementing `Zero-Trust Private Link & VNet Isolation (`publicNetworkAccess: 'Disabled'`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `formal cryptographic proof of prompt template integrity via Key Vault HMAC-SHA256 signing` (Implementation Task #65).",
    "question": "[HARD Coding Task #65] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Zero-Trust Private Link & VNet Isolation (`publicNetworkAccess: 'Disabled'`)` when implementing `formal cryptographic proof of prompt template integrity via Key Vault HMAC-SHA256 signing`?",
    "options": [
      "A) Writing a runtime startup guard inside `src/app/main.py` that reads all production prompt templates (`prompts/*.jinja2`), calculates exact `hmac.new(key_vault_secret.encode(), prompt_content.encode(), hashlib.sha256).hexdigest()`, and compares against the canonical signature stored in `Key Vault` (`kv_client.get_secret('prompt-trail-guide-sig').value`); if signatures mismatch (`assert sig == expected_sig`), the server refuses to bind port 8000.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing a runtime startup guard inside `src/app/main.py` that reads all production prompt templates (`prompts/*.jinja2`), calculates exact `hmac.new(key_vault_secret.encode(), prompt_content.encode(), hashlib.sha256).hexdigest()`, and compares against the canonical signature stored in `Key Vault` (`kv_client.get_secret('prompt-trail-guide-sig').value`); if signatures mismatch (`assert sig == expected_sig`), the server refuses to bind port 8000.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Zero-Trust Private Link & VNet Isolation (`publicNetworkAccess: 'Disabled'`)`, Writing a runtime startup guard inside `src/app/main.py` that reads all production prompt templates (`prompts/*.jinja2`), calculates exact `hmac.new(key_vault_secret.encode(), prompt_content.encode(), hashlib.sha256).hexdigest()`, and compares against the canonical signature stored in `Key Vault` (`kv_client.get_secret('prompt-trail-guide-sig').value`); if signatures mismatch (`assert sig == expected_sig`), the server refuses to bind port 8000. is the officially required syntax for `formal cryptographic proof of prompt template integrity via Key Vault HMAC-SHA256 signing`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3766,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Woodgrove Bank Virtual Assistant` implementing `Token Inflation & Context Window Truncation (`SlidingTokenWindow`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `formal cryptographic proof of prompt template integrity via Key Vault HMAC-SHA256 signing` (Implementation Task #66).",
    "question": "[HARD Coding Task #66] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Token Inflation & Context Window Truncation (`SlidingTokenWindow`)` when implementing `formal cryptographic proof of prompt template integrity via Key Vault HMAC-SHA256 signing`?",
    "options": [
      "A) Writing a runtime startup guard inside `src/app/main.py` that reads all production prompt templates (`prompts/*.jinja2`), calculates exact `hmac.new(key_vault_secret.encode(), prompt_content.encode(), hashlib.sha256).hexdigest()`, and compares against the canonical signature stored in `Key Vault` (`kv_client.get_secret('prompt-trail-guide-sig').value`); if signatures mismatch (`assert sig == expected_sig`), the server refuses to bind port 8000.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing a runtime startup guard inside `src/app/main.py` that reads all production prompt templates (`prompts/*.jinja2`), calculates exact `hmac.new(key_vault_secret.encode(), prompt_content.encode(), hashlib.sha256).hexdigest()`, and compares against the canonical signature stored in `Key Vault` (`kv_client.get_secret('prompt-trail-guide-sig').value`); if signatures mismatch (`assert sig == expected_sig`), the server refuses to bind port 8000.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Token Inflation & Context Window Truncation (`SlidingTokenWindow`)`, Writing a runtime startup guard inside `src/app/main.py` that reads all production prompt templates (`prompts/*.jinja2`), calculates exact `hmac.new(key_vault_secret.encode(), prompt_content.encode(), hashlib.sha256).hexdigest()`, and compares against the canonical signature stored in `Key Vault` (`kv_client.get_secret('prompt-trail-guide-sig').value`); if signatures mismatch (`assert sig == expected_sig`), the server refuses to bind port 8000. is the officially required syntax for `formal cryptographic proof of prompt template integrity via Key Vault HMAC-SHA256 signing`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3767,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Litware Legal Evaluator` implementing `Custom PII & Sensitive Data Redaction (`Presidio` / `TextAnonymizer`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `formal cryptographic proof of prompt template integrity via Key Vault HMAC-SHA256 signing` (Implementation Task #67).",
    "question": "[HARD Coding Task #67] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Custom PII & Sensitive Data Redaction (`Presidio` / `TextAnonymizer`)` when implementing `formal cryptographic proof of prompt template integrity via Key Vault HMAC-SHA256 signing`?",
    "options": [
      "A) Writing a runtime startup guard inside `src/app/main.py` that reads all production prompt templates (`prompts/*.jinja2`), calculates exact `hmac.new(key_vault_secret.encode(), prompt_content.encode(), hashlib.sha256).hexdigest()`, and compares against the canonical signature stored in `Key Vault` (`kv_client.get_secret('prompt-trail-guide-sig').value`); if signatures mismatch (`assert sig == expected_sig`), the server refuses to bind port 8000.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing a runtime startup guard inside `src/app/main.py` that reads all production prompt templates (`prompts/*.jinja2`), calculates exact `hmac.new(key_vault_secret.encode(), prompt_content.encode(), hashlib.sha256).hexdigest()`, and compares against the canonical signature stored in `Key Vault` (`kv_client.get_secret('prompt-trail-guide-sig').value`); if signatures mismatch (`assert sig == expected_sig`), the server refuses to bind port 8000.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Custom PII & Sensitive Data Redaction (`Presidio` / `TextAnonymizer`)`, Writing a runtime startup guard inside `src/app/main.py` that reads all production prompt templates (`prompts/*.jinja2`), calculates exact `hmac.new(key_vault_secret.encode(), prompt_content.encode(), hashlib.sha256).hexdigest()`, and compares against the canonical signature stored in `Key Vault` (`kv_client.get_secret('prompt-trail-guide-sig').value`); if signatures mismatch (`assert sig == expected_sig`), the server refuses to bind port 8000. is the officially required syntax for `formal cryptographic proof of prompt template integrity via Key Vault HMAC-SHA256 signing`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3768,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `A.Datum Retail Copilot` implementing `Multi-Agent Deadlock & Cyclic Loop Prevention (`max_turns=10`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `formal cryptographic proof of prompt template integrity via Key Vault HMAC-SHA256 signing` (Implementation Task #68).",
    "question": "[HARD Coding Task #68] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Multi-Agent Deadlock & Cyclic Loop Prevention (`max_turns=10`)` for `formal cryptographic proof of prompt template integrity via Key Vault HMAC-SHA256 signing`? (Select three)",
    "options": [
      "A) Writing a runtime startup guard inside `src/app/main.py` that reads all production prompt templates (`prompts/*.jinja2`), calculates exact `hmac.new(key_vault_secret.encode(), prompt_content.encode(), hashlib.sha256).hexdigest()`, and compares against the canonical signature stored in `Key Vault` (`kv_client.get_secret('prompt-trail-guide-sig').value`); if signatures mismatch (`assert sig == expected_sig`), the server refuses to bind port 8000.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Multi-Agent Deadlock & Cyclic Loop Prevention (`max_turns=10`)` for `formal cryptographic proof of prompt template integrity via Key Vault HMAC-SHA256 signing`, enterprise coding standards mandate: (1) Writing a runtime startup guard inside `src/app/main.py` that reads all production prompt templates (`prompts/*.jinja2`), calculates exact `hmac.new(key_vault_secret.encode(), prompt_content.encode(), hashlib.sha256).hexdigest()`, and compares against the canonical signature stored in `Key Vault` (`kv_client.get_secret('prompt-trail-guide-sig').value`); if signatures mismatch (`assert sig == expected_sig`), the server refuses to bind port 8000., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 3769,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Alpine Ski Field Technician` implementing `WORM Audit Logging & Legal Hold (`RetentionInDays=2555`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `formal cryptographic proof of prompt template integrity via Key Vault HMAC-SHA256 signing` (Implementation Task #69).",
    "question": "[HARD Coding Task #69] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `WORM Audit Logging & Legal Hold (`RetentionInDays=2555`)` when implementing `formal cryptographic proof of prompt template integrity via Key Vault HMAC-SHA256 signing`?",
    "options": [
      "A) Writing a runtime startup guard inside `src/app/main.py` that reads all production prompt templates (`prompts/*.jinja2`), calculates exact `hmac.new(key_vault_secret.encode(), prompt_content.encode(), hashlib.sha256).hexdigest()`, and compares against the canonical signature stored in `Key Vault` (`kv_client.get_secret('prompt-trail-guide-sig').value`); if signatures mismatch (`assert sig == expected_sig`), the server refuses to bind port 8000.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing a runtime startup guard inside `src/app/main.py` that reads all production prompt templates (`prompts/*.jinja2`), calculates exact `hmac.new(key_vault_secret.encode(), prompt_content.encode(), hashlib.sha256).hexdigest()`, and compares against the canonical signature stored in `Key Vault` (`kv_client.get_secret('prompt-trail-guide-sig').value`); if signatures mismatch (`assert sig == expected_sig`), the server refuses to bind port 8000.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `WORM Audit Logging & Legal Hold (`RetentionInDays=2555`)`, Writing a runtime startup guard inside `src/app/main.py` that reads all production prompt templates (`prompts/*.jinja2`), calculates exact `hmac.new(key_vault_secret.encode(), prompt_content.encode(), hashlib.sha256).hexdigest()`, and compares against the canonical signature stored in `Key Vault` (`kv_client.get_secret('prompt-trail-guide-sig').value`); if signatures mismatch (`assert sig == expected_sig`), the server refuses to bind port 8000. is the officially required syntax for `formal cryptographic proof of prompt template integrity via Key Vault HMAC-SHA256 signing`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3770,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Tailwind Traders Multi-Agent` implementing `Customer-Managed Keys (CMK) Secret Rotation (`userAssignedIdentity`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `formal cryptographic proof of prompt template integrity via Key Vault HMAC-SHA256 signing` (Implementation Task #70).",
    "question": "[HARD Coding Task #70] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Customer-Managed Keys (CMK) Secret Rotation (`userAssignedIdentity`)` when implementing `formal cryptographic proof of prompt template integrity via Key Vault HMAC-SHA256 signing`?",
    "options": [
      "A) Writing a runtime startup guard inside `src/app/main.py` that reads all production prompt templates (`prompts/*.jinja2`), calculates exact `hmac.new(key_vault_secret.encode(), prompt_content.encode(), hashlib.sha256).hexdigest()`, and compares against the canonical signature stored in `Key Vault` (`kv_client.get_secret('prompt-trail-guide-sig').value`); if signatures mismatch (`assert sig == expected_sig`), the server refuses to bind port 8000.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing a runtime startup guard inside `src/app/main.py` that reads all production prompt templates (`prompts/*.jinja2`), calculates exact `hmac.new(key_vault_secret.encode(), prompt_content.encode(), hashlib.sha256).hexdigest()`, and compares against the canonical signature stored in `Key Vault` (`kv_client.get_secret('prompt-trail-guide-sig').value`); if signatures mismatch (`assert sig == expected_sig`), the server refuses to bind port 8000.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Customer-Managed Keys (CMK) Secret Rotation (`userAssignedIdentity`)`, Writing a runtime startup guard inside `src/app/main.py` that reads all production prompt templates (`prompts/*.jinja2`), calculates exact `hmac.new(key_vault_secret.encode(), prompt_content.encode(), hashlib.sha256).hexdigest()`, and compares against the canonical signature stored in `Key Vault` (`kv_client.get_secret('prompt-trail-guide-sig').value`); if signatures mismatch (`assert sig == expected_sig`), the server refuses to bind port 8000. is the officially required syntax for `formal cryptographic proof of prompt template integrity via Key Vault HMAC-SHA256 signing`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3771,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Adventure Works Core Hub` implementing `Azure AI Content Safety Prompt Shields (`JailbreakDetected == true`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `self-healing code generation loop with sandboxed AST execution and stacktrace feedback` (Implementation Task #71).",
    "question": "[HARD Coding Task #71] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Azure AI Content Safety Prompt Shields (`JailbreakDetected == true`)` when implementing `self-healing code generation loop with sandboxed AST execution and stacktrace feedback`?",
    "options": [
      "A) Writing an autonomous code evaluation agent (`src/agents/code_eval_agent.py`) that generates Python/KQL scripts, executes them inside a read-only Docker container (`docker.from_env().containers.run('python:3.11-slim', command='python -c \"...\"', network_mode='none', mem_limit='256m')`), captures stdout/stderr stacktraces (`e.stderr.decode()`), and passes errors back into `gpt-4o` for up to 3 self-healing retry turns before failing over gracefully.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing an autonomous code evaluation agent (`src/agents/code_eval_agent.py`) that generates Python/KQL scripts, executes them inside a read-only Docker container (`docker.from_env().containers.run('python:3.11-slim', command='python -c \"...\"', network_mode='none', mem_limit='256m')`), captures stdout/stderr stacktraces (`e.stderr.decode()`), and passes errors back into `gpt-4o` for up to 3 self-healing retry turns before failing over gracefully.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Azure AI Content Safety Prompt Shields (`JailbreakDetected == true`)`, Writing an autonomous code evaluation agent (`src/agents/code_eval_agent.py`) that generates Python/KQL scripts, executes them inside a read-only Docker container (`docker.from_env().containers.run('python:3.11-slim', command='python -c \"...\"', network_mode='none', mem_limit='256m')`), captures stdout/stderr stacktraces (`e.stderr.decode()`), and passes errors back into `gpt-4o` for up to 3 self-healing retry turns before failing over gracefully. is the officially required syntax for `self-healing code generation loop with sandboxed AST execution and stacktrace feedback`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3772,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Contoso Health AI` implementing `Automated Red-Teaming Engine (`azure.ai.evaluation.simulator`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `self-healing code generation loop with sandboxed AST execution and stacktrace feedback` (Implementation Task #72).",
    "question": "[HARD Coding Task #72] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Automated Red-Teaming Engine (`azure.ai.evaluation.simulator`)` for `self-healing code generation loop with sandboxed AST execution and stacktrace feedback`? (Select three)",
    "options": [
      "A) Writing an autonomous code evaluation agent (`src/agents/code_eval_agent.py`) that generates Python/KQL scripts, executes them inside a read-only Docker container (`docker.from_env().containers.run('python:3.11-slim', command='python -c \"...\"', network_mode='none', mem_limit='256m')`), captures stdout/stderr stacktraces (`e.stderr.decode()`), and passes errors back into `gpt-4o` for up to 3 self-healing retry turns before failing over gracefully.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Automated Red-Teaming Engine (`azure.ai.evaluation.simulator`)` for `self-healing code generation loop with sandboxed AST execution and stacktrace feedback`, enterprise coding standards mandate: (1) Writing an autonomous code evaluation agent (`src/agents/code_eval_agent.py`) that generates Python/KQL scripts, executes them inside a read-only Docker container (`docker.from_env().containers.run('python:3.11-slim', command='python -c \"...\"', network_mode='none', mem_limit='256m')`), captures stdout/stderr stacktraces (`e.stderr.decode()`), and passes errors back into `gpt-4o` for up to 3 self-healing retry turns before failing over gracefully., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 3773,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Fabrikam Logistics Agent` implementing `Indirect Prompt Injection Defense in RAG (`IndirectAttackEvaluator`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `self-healing code generation loop with sandboxed AST execution and stacktrace feedback` (Implementation Task #73).",
    "question": "[HARD Coding Task #73] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Indirect Prompt Injection Defense in RAG (`IndirectAttackEvaluator`)` when implementing `self-healing code generation loop with sandboxed AST execution and stacktrace feedback`?",
    "options": [
      "A) Writing an autonomous code evaluation agent (`src/agents/code_eval_agent.py`) that generates Python/KQL scripts, executes them inside a read-only Docker container (`docker.from_env().containers.run('python:3.11-slim', command='python -c \"...\"', network_mode='none', mem_limit='256m')`), captures stdout/stderr stacktraces (`e.stderr.decode()`), and passes errors back into `gpt-4o` for up to 3 self-healing retry turns before failing over gracefully.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing an autonomous code evaluation agent (`src/agents/code_eval_agent.py`) that generates Python/KQL scripts, executes them inside a read-only Docker container (`docker.from_env().containers.run('python:3.11-slim', command='python -c \"...\"', network_mode='none', mem_limit='256m')`), captures stdout/stderr stacktraces (`e.stderr.decode()`), and passes errors back into `gpt-4o` for up to 3 self-healing retry turns before failing over gracefully.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Indirect Prompt Injection Defense in RAG (`IndirectAttackEvaluator`)`, Writing an autonomous code evaluation agent (`src/agents/code_eval_agent.py`) that generates Python/KQL scripts, executes them inside a read-only Docker container (`docker.from_env().containers.run('python:3.11-slim', command='python -c \"...\"', network_mode='none', mem_limit='256m')`), captures stdout/stderr stacktraces (`e.stderr.decode()`), and passes errors back into `gpt-4o` for up to 3 self-healing retry turns before failing over gracefully. is the officially required syntax for `self-healing code generation loop with sandboxed AST execution and stacktrace feedback`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3774,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Trey Research Lab` implementing `PTU vs Standard Load Balancing in APIM (`<choose>`, `<circuit-breaker>`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `self-healing code generation loop with sandboxed AST execution and stacktrace feedback` (Implementation Task #74).",
    "question": "[HARD Coding Task #74] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `PTU vs Standard Load Balancing in APIM (`<choose>`, `<circuit-breaker>`)` when implementing `self-healing code generation loop with sandboxed AST execution and stacktrace feedback`?",
    "options": [
      "A) Writing an autonomous code evaluation agent (`src/agents/code_eval_agent.py`) that generates Python/KQL scripts, executes them inside a read-only Docker container (`docker.from_env().containers.run('python:3.11-slim', command='python -c \"...\"', network_mode='none', mem_limit='256m')`), captures stdout/stderr stacktraces (`e.stderr.decode()`), and passes errors back into `gpt-4o` for up to 3 self-healing retry turns before failing over gracefully.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing an autonomous code evaluation agent (`src/agents/code_eval_agent.py`) that generates Python/KQL scripts, executes them inside a read-only Docker container (`docker.from_env().containers.run('python:3.11-slim', command='python -c \"...\"', network_mode='none', mem_limit='256m')`), captures stdout/stderr stacktraces (`e.stderr.decode()`), and passes errors back into `gpt-4o` for up to 3 self-healing retry turns before failing over gracefully.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `PTU vs Standard Load Balancing in APIM (`<choose>`, `<circuit-breaker>`)`, Writing an autonomous code evaluation agent (`src/agents/code_eval_agent.py`) that generates Python/KQL scripts, executes them inside a read-only Docker container (`docker.from_env().containers.run('python:3.11-slim', command='python -c \"...\"', network_mode='none', mem_limit='256m')`), captures stdout/stderr stacktraces (`e.stderr.decode()`), and passes errors back into `gpt-4o` for up to 3 self-healing retry turns before failing over gracefully. is the officially required syntax for `self-healing code generation loop with sandboxed AST execution and stacktrace feedback`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3775,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Northwind Traders Bot` implementing `Zero-Trust Private Link & VNet Isolation (`publicNetworkAccess: 'Disabled'`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `self-healing code generation loop with sandboxed AST execution and stacktrace feedback` (Implementation Task #75).",
    "question": "[HARD Coding Task #75] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Zero-Trust Private Link & VNet Isolation (`publicNetworkAccess: 'Disabled'`)` when implementing `self-healing code generation loop with sandboxed AST execution and stacktrace feedback`?",
    "options": [
      "A) Writing an autonomous code evaluation agent (`src/agents/code_eval_agent.py`) that generates Python/KQL scripts, executes them inside a read-only Docker container (`docker.from_env().containers.run('python:3.11-slim', command='python -c \"...\"', network_mode='none', mem_limit='256m')`), captures stdout/stderr stacktraces (`e.stderr.decode()`), and passes errors back into `gpt-4o` for up to 3 self-healing retry turns before failing over gracefully.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing an autonomous code evaluation agent (`src/agents/code_eval_agent.py`) that generates Python/KQL scripts, executes them inside a read-only Docker container (`docker.from_env().containers.run('python:3.11-slim', command='python -c \"...\"', network_mode='none', mem_limit='256m')`), captures stdout/stderr stacktraces (`e.stderr.decode()`), and passes errors back into `gpt-4o` for up to 3 self-healing retry turns before failing over gracefully.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Zero-Trust Private Link & VNet Isolation (`publicNetworkAccess: 'Disabled'`)`, Writing an autonomous code evaluation agent (`src/agents/code_eval_agent.py`) that generates Python/KQL scripts, executes them inside a read-only Docker container (`docker.from_env().containers.run('python:3.11-slim', command='python -c \"...\"', network_mode='none', mem_limit='256m')`), captures stdout/stderr stacktraces (`e.stderr.decode()`), and passes errors back into `gpt-4o` for up to 3 self-healing retry turns before failing over gracefully. is the officially required syntax for `self-healing code generation loop with sandboxed AST execution and stacktrace feedback`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3776,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Woodgrove Bank Virtual Assistant` implementing `Token Inflation & Context Window Truncation (`SlidingTokenWindow`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `self-healing code generation loop with sandboxed AST execution and stacktrace feedback` (Implementation Task #76).",
    "question": "[HARD Coding Task #76] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Token Inflation & Context Window Truncation (`SlidingTokenWindow`)` for `self-healing code generation loop with sandboxed AST execution and stacktrace feedback`? (Select three)",
    "options": [
      "A) Writing an autonomous code evaluation agent (`src/agents/code_eval_agent.py`) that generates Python/KQL scripts, executes them inside a read-only Docker container (`docker.from_env().containers.run('python:3.11-slim', command='python -c \"...\"', network_mode='none', mem_limit='256m')`), captures stdout/stderr stacktraces (`e.stderr.decode()`), and passes errors back into `gpt-4o` for up to 3 self-healing retry turns before failing over gracefully.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Token Inflation & Context Window Truncation (`SlidingTokenWindow`)` for `self-healing code generation loop with sandboxed AST execution and stacktrace feedback`, enterprise coding standards mandate: (1) Writing an autonomous code evaluation agent (`src/agents/code_eval_agent.py`) that generates Python/KQL scripts, executes them inside a read-only Docker container (`docker.from_env().containers.run('python:3.11-slim', command='python -c \"...\"', network_mode='none', mem_limit='256m')`), captures stdout/stderr stacktraces (`e.stderr.decode()`), and passes errors back into `gpt-4o` for up to 3 self-healing retry turns before failing over gracefully., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 3777,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Litware Legal Evaluator` implementing `Custom PII & Sensitive Data Redaction (`Presidio` / `TextAnonymizer`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `self-healing code generation loop with sandboxed AST execution and stacktrace feedback` (Implementation Task #77).",
    "question": "[HARD Coding Task #77] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Custom PII & Sensitive Data Redaction (`Presidio` / `TextAnonymizer`)` when implementing `self-healing code generation loop with sandboxed AST execution and stacktrace feedback`?",
    "options": [
      "A) Writing an autonomous code evaluation agent (`src/agents/code_eval_agent.py`) that generates Python/KQL scripts, executes them inside a read-only Docker container (`docker.from_env().containers.run('python:3.11-slim', command='python -c \"...\"', network_mode='none', mem_limit='256m')`), captures stdout/stderr stacktraces (`e.stderr.decode()`), and passes errors back into `gpt-4o` for up to 3 self-healing retry turns before failing over gracefully.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing an autonomous code evaluation agent (`src/agents/code_eval_agent.py`) that generates Python/KQL scripts, executes them inside a read-only Docker container (`docker.from_env().containers.run('python:3.11-slim', command='python -c \"...\"', network_mode='none', mem_limit='256m')`), captures stdout/stderr stacktraces (`e.stderr.decode()`), and passes errors back into `gpt-4o` for up to 3 self-healing retry turns before failing over gracefully.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Custom PII & Sensitive Data Redaction (`Presidio` / `TextAnonymizer`)`, Writing an autonomous code evaluation agent (`src/agents/code_eval_agent.py`) that generates Python/KQL scripts, executes them inside a read-only Docker container (`docker.from_env().containers.run('python:3.11-slim', command='python -c \"...\"', network_mode='none', mem_limit='256m')`), captures stdout/stderr stacktraces (`e.stderr.decode()`), and passes errors back into `gpt-4o` for up to 3 self-healing retry turns before failing over gracefully. is the officially required syntax for `self-healing code generation loop with sandboxed AST execution and stacktrace feedback`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3778,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `A.Datum Retail Copilot` implementing `Multi-Agent Deadlock & Cyclic Loop Prevention (`max_turns=10`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `self-healing code generation loop with sandboxed AST execution and stacktrace feedback` (Implementation Task #78).",
    "question": "[HARD Coding Task #78] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Multi-Agent Deadlock & Cyclic Loop Prevention (`max_turns=10`)` when implementing `self-healing code generation loop with sandboxed AST execution and stacktrace feedback`?",
    "options": [
      "A) Writing an autonomous code evaluation agent (`src/agents/code_eval_agent.py`) that generates Python/KQL scripts, executes them inside a read-only Docker container (`docker.from_env().containers.run('python:3.11-slim', command='python -c \"...\"', network_mode='none', mem_limit='256m')`), captures stdout/stderr stacktraces (`e.stderr.decode()`), and passes errors back into `gpt-4o` for up to 3 self-healing retry turns before failing over gracefully.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing an autonomous code evaluation agent (`src/agents/code_eval_agent.py`) that generates Python/KQL scripts, executes them inside a read-only Docker container (`docker.from_env().containers.run('python:3.11-slim', command='python -c \"...\"', network_mode='none', mem_limit='256m')`), captures stdout/stderr stacktraces (`e.stderr.decode()`), and passes errors back into `gpt-4o` for up to 3 self-healing retry turns before failing over gracefully.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Multi-Agent Deadlock & Cyclic Loop Prevention (`max_turns=10`)`, Writing an autonomous code evaluation agent (`src/agents/code_eval_agent.py`) that generates Python/KQL scripts, executes them inside a read-only Docker container (`docker.from_env().containers.run('python:3.11-slim', command='python -c \"...\"', network_mode='none', mem_limit='256m')`), captures stdout/stderr stacktraces (`e.stderr.decode()`), and passes errors back into `gpt-4o` for up to 3 self-healing retry turns before failing over gracefully. is the officially required syntax for `self-healing code generation loop with sandboxed AST execution and stacktrace feedback`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3779,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Alpine Ski Field Technician` implementing `WORM Audit Logging & Legal Hold (`RetentionInDays=2555`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `self-healing code generation loop with sandboxed AST execution and stacktrace feedback` (Implementation Task #79).",
    "question": "[HARD Coding Task #79] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `WORM Audit Logging & Legal Hold (`RetentionInDays=2555`)` when implementing `self-healing code generation loop with sandboxed AST execution and stacktrace feedback`?",
    "options": [
      "A) Writing an autonomous code evaluation agent (`src/agents/code_eval_agent.py`) that generates Python/KQL scripts, executes them inside a read-only Docker container (`docker.from_env().containers.run('python:3.11-slim', command='python -c \"...\"', network_mode='none', mem_limit='256m')`), captures stdout/stderr stacktraces (`e.stderr.decode()`), and passes errors back into `gpt-4o` for up to 3 self-healing retry turns before failing over gracefully.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing an autonomous code evaluation agent (`src/agents/code_eval_agent.py`) that generates Python/KQL scripts, executes them inside a read-only Docker container (`docker.from_env().containers.run('python:3.11-slim', command='python -c \"...\"', network_mode='none', mem_limit='256m')`), captures stdout/stderr stacktraces (`e.stderr.decode()`), and passes errors back into `gpt-4o` for up to 3 self-healing retry turns before failing over gracefully.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `WORM Audit Logging & Legal Hold (`RetentionInDays=2555`)`, Writing an autonomous code evaluation agent (`src/agents/code_eval_agent.py`) that generates Python/KQL scripts, executes them inside a read-only Docker container (`docker.from_env().containers.run('python:3.11-slim', command='python -c \"...\"', network_mode='none', mem_limit='256m')`), captures stdout/stderr stacktraces (`e.stderr.decode()`), and passes errors back into `gpt-4o` for up to 3 self-healing retry turns before failing over gracefully. is the officially required syntax for `self-healing code generation loop with sandboxed AST execution and stacktrace feedback`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3780,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Tailwind Traders Multi-Agent` implementing `Customer-Managed Keys (CMK) Secret Rotation (`userAssignedIdentity`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `self-healing code generation loop with sandboxed AST execution and stacktrace feedback` (Implementation Task #80).",
    "question": "[HARD Coding Task #80] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Customer-Managed Keys (CMK) Secret Rotation (`userAssignedIdentity`)` for `self-healing code generation loop with sandboxed AST execution and stacktrace feedback`? (Select three)",
    "options": [
      "A) Writing an autonomous code evaluation agent (`src/agents/code_eval_agent.py`) that generates Python/KQL scripts, executes them inside a read-only Docker container (`docker.from_env().containers.run('python:3.11-slim', command='python -c \"...\"', network_mode='none', mem_limit='256m')`), captures stdout/stderr stacktraces (`e.stderr.decode()`), and passes errors back into `gpt-4o` for up to 3 self-healing retry turns before failing over gracefully.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Customer-Managed Keys (CMK) Secret Rotation (`userAssignedIdentity`)` for `self-healing code generation loop with sandboxed AST execution and stacktrace feedback`, enterprise coding standards mandate: (1) Writing an autonomous code evaluation agent (`src/agents/code_eval_agent.py`) that generates Python/KQL scripts, executes them inside a read-only Docker container (`docker.from_env().containers.run('python:3.11-slim', command='python -c \"...\"', network_mode='none', mem_limit='256m')`), captures stdout/stderr stacktraces (`e.stderr.decode()`), and passes errors back into `gpt-4o` for up to 3 self-healing retry turns before failing over gracefully., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 3781,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Adventure Works Core Hub` implementing `Azure AI Content Safety Prompt Shields (`JailbreakDetected == true`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `enterprise WORM audit compliance logging to immutable blob container with 7-year retention` (Implementation Task #81).",
    "question": "[HARD Coding Task #81] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Azure AI Content Safety Prompt Shields (`JailbreakDetected == true`)` when implementing `enterprise WORM audit compliance logging to immutable blob container with 7-year retention`?",
    "options": [
      "A) Writing an immutable audit logger (`src/utils/worm_audit_logger.py`) that structures every user interaction `(UUID, Timestamp, Prompt, Response, GroundednessScore, TokenUsage)` into a signed JSON block, compresses to `.json.gz`, and writes directly to an Azure Blob Storage container (`/sec-audit-logs/`) protected by an active legal hold immutability policy (`immutabilityPeriodSinceCreationInDays: 2555`) to satisfy SOC2, HIPAA, and ISO/IEC 42001 regulatory audits.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing an immutable audit logger (`src/utils/worm_audit_logger.py`) that structures every user interaction `(UUID, Timestamp, Prompt, Response, GroundednessScore, TokenUsage)` into a signed JSON block, compresses to `.json.gz`, and writes directly to an Azure Blob Storage container (`/sec-audit-logs/`) protected by an active legal hold immutability policy (`immutabilityPeriodSinceCreationInDays: 2555`) to satisfy SOC2, HIPAA, and ISO/IEC 42001 regulatory audits.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Azure AI Content Safety Prompt Shields (`JailbreakDetected == true`)`, Writing an immutable audit logger (`src/utils/worm_audit_logger.py`) that structures every user interaction `(UUID, Timestamp, Prompt, Response, GroundednessScore, TokenUsage)` into a signed JSON block, compresses to `.json.gz`, and writes directly to an Azure Blob Storage container (`/sec-audit-logs/`) protected by an active legal hold immutability policy (`immutabilityPeriodSinceCreationInDays: 2555`) to satisfy SOC2, HIPAA, and ISO/IEC 42001 regulatory audits. is the officially required syntax for `enterprise WORM audit compliance logging to immutable blob container with 7-year retention`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3782,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Contoso Health AI` implementing `Automated Red-Teaming Engine (`azure.ai.evaluation.simulator`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `enterprise WORM audit compliance logging to immutable blob container with 7-year retention` (Implementation Task #82).",
    "question": "[HARD Coding Task #82] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Automated Red-Teaming Engine (`azure.ai.evaluation.simulator`)` when implementing `enterprise WORM audit compliance logging to immutable blob container with 7-year retention`?",
    "options": [
      "A) Writing an immutable audit logger (`src/utils/worm_audit_logger.py`) that structures every user interaction `(UUID, Timestamp, Prompt, Response, GroundednessScore, TokenUsage)` into a signed JSON block, compresses to `.json.gz`, and writes directly to an Azure Blob Storage container (`/sec-audit-logs/`) protected by an active legal hold immutability policy (`immutabilityPeriodSinceCreationInDays: 2555`) to satisfy SOC2, HIPAA, and ISO/IEC 42001 regulatory audits.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing an immutable audit logger (`src/utils/worm_audit_logger.py`) that structures every user interaction `(UUID, Timestamp, Prompt, Response, GroundednessScore, TokenUsage)` into a signed JSON block, compresses to `.json.gz`, and writes directly to an Azure Blob Storage container (`/sec-audit-logs/`) protected by an active legal hold immutability policy (`immutabilityPeriodSinceCreationInDays: 2555`) to satisfy SOC2, HIPAA, and ISO/IEC 42001 regulatory audits.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Automated Red-Teaming Engine (`azure.ai.evaluation.simulator`)`, Writing an immutable audit logger (`src/utils/worm_audit_logger.py`) that structures every user interaction `(UUID, Timestamp, Prompt, Response, GroundednessScore, TokenUsage)` into a signed JSON block, compresses to `.json.gz`, and writes directly to an Azure Blob Storage container (`/sec-audit-logs/`) protected by an active legal hold immutability policy (`immutabilityPeriodSinceCreationInDays: 2555`) to satisfy SOC2, HIPAA, and ISO/IEC 42001 regulatory audits. is the officially required syntax for `enterprise WORM audit compliance logging to immutable blob container with 7-year retention`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3783,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Fabrikam Logistics Agent` implementing `Indirect Prompt Injection Defense in RAG (`IndirectAttackEvaluator`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `enterprise WORM audit compliance logging to immutable blob container with 7-year retention` (Implementation Task #83).",
    "question": "[HARD Coding Task #83] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Indirect Prompt Injection Defense in RAG (`IndirectAttackEvaluator`)` when implementing `enterprise WORM audit compliance logging to immutable blob container with 7-year retention`?",
    "options": [
      "A) Writing an immutable audit logger (`src/utils/worm_audit_logger.py`) that structures every user interaction `(UUID, Timestamp, Prompt, Response, GroundednessScore, TokenUsage)` into a signed JSON block, compresses to `.json.gz`, and writes directly to an Azure Blob Storage container (`/sec-audit-logs/`) protected by an active legal hold immutability policy (`immutabilityPeriodSinceCreationInDays: 2555`) to satisfy SOC2, HIPAA, and ISO/IEC 42001 regulatory audits.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing an immutable audit logger (`src/utils/worm_audit_logger.py`) that structures every user interaction `(UUID, Timestamp, Prompt, Response, GroundednessScore, TokenUsage)` into a signed JSON block, compresses to `.json.gz`, and writes directly to an Azure Blob Storage container (`/sec-audit-logs/`) protected by an active legal hold immutability policy (`immutabilityPeriodSinceCreationInDays: 2555`) to satisfy SOC2, HIPAA, and ISO/IEC 42001 regulatory audits.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Indirect Prompt Injection Defense in RAG (`IndirectAttackEvaluator`)`, Writing an immutable audit logger (`src/utils/worm_audit_logger.py`) that structures every user interaction `(UUID, Timestamp, Prompt, Response, GroundednessScore, TokenUsage)` into a signed JSON block, compresses to `.json.gz`, and writes directly to an Azure Blob Storage container (`/sec-audit-logs/`) protected by an active legal hold immutability policy (`immutabilityPeriodSinceCreationInDays: 2555`) to satisfy SOC2, HIPAA, and ISO/IEC 42001 regulatory audits. is the officially required syntax for `enterprise WORM audit compliance logging to immutable blob container with 7-year retention`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3784,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Trey Research Lab` implementing `PTU vs Standard Load Balancing in APIM (`<choose>`, `<circuit-breaker>`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `enterprise WORM audit compliance logging to immutable blob container with 7-year retention` (Implementation Task #84).",
    "question": "[HARD Coding Task #84] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `PTU vs Standard Load Balancing in APIM (`<choose>`, `<circuit-breaker>`)` for `enterprise WORM audit compliance logging to immutable blob container with 7-year retention`? (Select three)",
    "options": [
      "A) Writing an immutable audit logger (`src/utils/worm_audit_logger.py`) that structures every user interaction `(UUID, Timestamp, Prompt, Response, GroundednessScore, TokenUsage)` into a signed JSON block, compresses to `.json.gz`, and writes directly to an Azure Blob Storage container (`/sec-audit-logs/`) protected by an active legal hold immutability policy (`immutabilityPeriodSinceCreationInDays: 2555`) to satisfy SOC2, HIPAA, and ISO/IEC 42001 regulatory audits.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `PTU vs Standard Load Balancing in APIM (`<choose>`, `<circuit-breaker>`)` for `enterprise WORM audit compliance logging to immutable blob container with 7-year retention`, enterprise coding standards mandate: (1) Writing an immutable audit logger (`src/utils/worm_audit_logger.py`) that structures every user interaction `(UUID, Timestamp, Prompt, Response, GroundednessScore, TokenUsage)` into a signed JSON block, compresses to `.json.gz`, and writes directly to an Azure Blob Storage container (`/sec-audit-logs/`) protected by an active legal hold immutability policy (`immutabilityPeriodSinceCreationInDays: 2555`) to satisfy SOC2, HIPAA, and ISO/IEC 42001 regulatory audits., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 3785,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Northwind Traders Bot` implementing `Zero-Trust Private Link & VNet Isolation (`publicNetworkAccess: 'Disabled'`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `enterprise WORM audit compliance logging to immutable blob container with 7-year retention` (Implementation Task #85).",
    "question": "[HARD Coding Task #85] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Zero-Trust Private Link & VNet Isolation (`publicNetworkAccess: 'Disabled'`)` when implementing `enterprise WORM audit compliance logging to immutable blob container with 7-year retention`?",
    "options": [
      "A) Writing an immutable audit logger (`src/utils/worm_audit_logger.py`) that structures every user interaction `(UUID, Timestamp, Prompt, Response, GroundednessScore, TokenUsage)` into a signed JSON block, compresses to `.json.gz`, and writes directly to an Azure Blob Storage container (`/sec-audit-logs/`) protected by an active legal hold immutability policy (`immutabilityPeriodSinceCreationInDays: 2555`) to satisfy SOC2, HIPAA, and ISO/IEC 42001 regulatory audits.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing an immutable audit logger (`src/utils/worm_audit_logger.py`) that structures every user interaction `(UUID, Timestamp, Prompt, Response, GroundednessScore, TokenUsage)` into a signed JSON block, compresses to `.json.gz`, and writes directly to an Azure Blob Storage container (`/sec-audit-logs/`) protected by an active legal hold immutability policy (`immutabilityPeriodSinceCreationInDays: 2555`) to satisfy SOC2, HIPAA, and ISO/IEC 42001 regulatory audits.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Zero-Trust Private Link & VNet Isolation (`publicNetworkAccess: 'Disabled'`)`, Writing an immutable audit logger (`src/utils/worm_audit_logger.py`) that structures every user interaction `(UUID, Timestamp, Prompt, Response, GroundednessScore, TokenUsage)` into a signed JSON block, compresses to `.json.gz`, and writes directly to an Azure Blob Storage container (`/sec-audit-logs/`) protected by an active legal hold immutability policy (`immutabilityPeriodSinceCreationInDays: 2555`) to satisfy SOC2, HIPAA, and ISO/IEC 42001 regulatory audits. is the officially required syntax for `enterprise WORM audit compliance logging to immutable blob container with 7-year retention`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3786,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Woodgrove Bank Virtual Assistant` implementing `Token Inflation & Context Window Truncation (`SlidingTokenWindow`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `enterprise WORM audit compliance logging to immutable blob container with 7-year retention` (Implementation Task #86).",
    "question": "[HARD Coding Task #86] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Token Inflation & Context Window Truncation (`SlidingTokenWindow`)` when implementing `enterprise WORM audit compliance logging to immutable blob container with 7-year retention`?",
    "options": [
      "A) Writing an immutable audit logger (`src/utils/worm_audit_logger.py`) that structures every user interaction `(UUID, Timestamp, Prompt, Response, GroundednessScore, TokenUsage)` into a signed JSON block, compresses to `.json.gz`, and writes directly to an Azure Blob Storage container (`/sec-audit-logs/`) protected by an active legal hold immutability policy (`immutabilityPeriodSinceCreationInDays: 2555`) to satisfy SOC2, HIPAA, and ISO/IEC 42001 regulatory audits.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing an immutable audit logger (`src/utils/worm_audit_logger.py`) that structures every user interaction `(UUID, Timestamp, Prompt, Response, GroundednessScore, TokenUsage)` into a signed JSON block, compresses to `.json.gz`, and writes directly to an Azure Blob Storage container (`/sec-audit-logs/`) protected by an active legal hold immutability policy (`immutabilityPeriodSinceCreationInDays: 2555`) to satisfy SOC2, HIPAA, and ISO/IEC 42001 regulatory audits.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Token Inflation & Context Window Truncation (`SlidingTokenWindow`)`, Writing an immutable audit logger (`src/utils/worm_audit_logger.py`) that structures every user interaction `(UUID, Timestamp, Prompt, Response, GroundednessScore, TokenUsage)` into a signed JSON block, compresses to `.json.gz`, and writes directly to an Azure Blob Storage container (`/sec-audit-logs/`) protected by an active legal hold immutability policy (`immutabilityPeriodSinceCreationInDays: 2555`) to satisfy SOC2, HIPAA, and ISO/IEC 42001 regulatory audits. is the officially required syntax for `enterprise WORM audit compliance logging to immutable blob container with 7-year retention`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3787,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Litware Legal Evaluator` implementing `Custom PII & Sensitive Data Redaction (`Presidio` / `TextAnonymizer`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `enterprise WORM audit compliance logging to immutable blob container with 7-year retention` (Implementation Task #87).",
    "question": "[HARD Coding Task #87] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Custom PII & Sensitive Data Redaction (`Presidio` / `TextAnonymizer`)` when implementing `enterprise WORM audit compliance logging to immutable blob container with 7-year retention`?",
    "options": [
      "A) Writing an immutable audit logger (`src/utils/worm_audit_logger.py`) that structures every user interaction `(UUID, Timestamp, Prompt, Response, GroundednessScore, TokenUsage)` into a signed JSON block, compresses to `.json.gz`, and writes directly to an Azure Blob Storage container (`/sec-audit-logs/`) protected by an active legal hold immutability policy (`immutabilityPeriodSinceCreationInDays: 2555`) to satisfy SOC2, HIPAA, and ISO/IEC 42001 regulatory audits.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing an immutable audit logger (`src/utils/worm_audit_logger.py`) that structures every user interaction `(UUID, Timestamp, Prompt, Response, GroundednessScore, TokenUsage)` into a signed JSON block, compresses to `.json.gz`, and writes directly to an Azure Blob Storage container (`/sec-audit-logs/`) protected by an active legal hold immutability policy (`immutabilityPeriodSinceCreationInDays: 2555`) to satisfy SOC2, HIPAA, and ISO/IEC 42001 regulatory audits.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Custom PII & Sensitive Data Redaction (`Presidio` / `TextAnonymizer`)`, Writing an immutable audit logger (`src/utils/worm_audit_logger.py`) that structures every user interaction `(UUID, Timestamp, Prompt, Response, GroundednessScore, TokenUsage)` into a signed JSON block, compresses to `.json.gz`, and writes directly to an Azure Blob Storage container (`/sec-audit-logs/`) protected by an active legal hold immutability policy (`immutabilityPeriodSinceCreationInDays: 2555`) to satisfy SOC2, HIPAA, and ISO/IEC 42001 regulatory audits. is the officially required syntax for `enterprise WORM audit compliance logging to immutable blob container with 7-year retention`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3788,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `A.Datum Retail Copilot` implementing `Multi-Agent Deadlock & Cyclic Loop Prevention (`max_turns=10`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `enterprise WORM audit compliance logging to immutable blob container with 7-year retention` (Implementation Task #88).",
    "question": "[HARD Coding Task #88] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Multi-Agent Deadlock & Cyclic Loop Prevention (`max_turns=10`)` for `enterprise WORM audit compliance logging to immutable blob container with 7-year retention`? (Select three)",
    "options": [
      "A) Writing an immutable audit logger (`src/utils/worm_audit_logger.py`) that structures every user interaction `(UUID, Timestamp, Prompt, Response, GroundednessScore, TokenUsage)` into a signed JSON block, compresses to `.json.gz`, and writes directly to an Azure Blob Storage container (`/sec-audit-logs/`) protected by an active legal hold immutability policy (`immutabilityPeriodSinceCreationInDays: 2555`) to satisfy SOC2, HIPAA, and ISO/IEC 42001 regulatory audits.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Multi-Agent Deadlock & Cyclic Loop Prevention (`max_turns=10`)` for `enterprise WORM audit compliance logging to immutable blob container with 7-year retention`, enterprise coding standards mandate: (1) Writing an immutable audit logger (`src/utils/worm_audit_logger.py`) that structures every user interaction `(UUID, Timestamp, Prompt, Response, GroundednessScore, TokenUsage)` into a signed JSON block, compresses to `.json.gz`, and writes directly to an Azure Blob Storage container (`/sec-audit-logs/`) protected by an active legal hold immutability policy (`immutabilityPeriodSinceCreationInDays: 2555`) to satisfy SOC2, HIPAA, and ISO/IEC 42001 regulatory audits., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 3789,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Alpine Ski Field Technician` implementing `WORM Audit Logging & Legal Hold (`RetentionInDays=2555`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `enterprise WORM audit compliance logging to immutable blob container with 7-year retention` (Implementation Task #89).",
    "question": "[HARD Coding Task #89] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `WORM Audit Logging & Legal Hold (`RetentionInDays=2555`)` when implementing `enterprise WORM audit compliance logging to immutable blob container with 7-year retention`?",
    "options": [
      "A) Writing an immutable audit logger (`src/utils/worm_audit_logger.py`) that structures every user interaction `(UUID, Timestamp, Prompt, Response, GroundednessScore, TokenUsage)` into a signed JSON block, compresses to `.json.gz`, and writes directly to an Azure Blob Storage container (`/sec-audit-logs/`) protected by an active legal hold immutability policy (`immutabilityPeriodSinceCreationInDays: 2555`) to satisfy SOC2, HIPAA, and ISO/IEC 42001 regulatory audits.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing an immutable audit logger (`src/utils/worm_audit_logger.py`) that structures every user interaction `(UUID, Timestamp, Prompt, Response, GroundednessScore, TokenUsage)` into a signed JSON block, compresses to `.json.gz`, and writes directly to an Azure Blob Storage container (`/sec-audit-logs/`) protected by an active legal hold immutability policy (`immutabilityPeriodSinceCreationInDays: 2555`) to satisfy SOC2, HIPAA, and ISO/IEC 42001 regulatory audits.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `WORM Audit Logging & Legal Hold (`RetentionInDays=2555`)`, Writing an immutable audit logger (`src/utils/worm_audit_logger.py`) that structures every user interaction `(UUID, Timestamp, Prompt, Response, GroundednessScore, TokenUsage)` into a signed JSON block, compresses to `.json.gz`, and writes directly to an Azure Blob Storage container (`/sec-audit-logs/`) protected by an active legal hold immutability policy (`immutabilityPeriodSinceCreationInDays: 2555`) to satisfy SOC2, HIPAA, and ISO/IEC 42001 regulatory audits. is the officially required syntax for `enterprise WORM audit compliance logging to immutable blob container with 7-year retention`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3790,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Tailwind Traders Multi-Agent` implementing `Customer-Managed Keys (CMK) Secret Rotation (`userAssignedIdentity`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `enterprise WORM audit compliance logging to immutable blob container with 7-year retention` (Implementation Task #90).",
    "question": "[HARD Coding Task #90] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Customer-Managed Keys (CMK) Secret Rotation (`userAssignedIdentity`)` when implementing `enterprise WORM audit compliance logging to immutable blob container with 7-year retention`?",
    "options": [
      "A) Writing an immutable audit logger (`src/utils/worm_audit_logger.py`) that structures every user interaction `(UUID, Timestamp, Prompt, Response, GroundednessScore, TokenUsage)` into a signed JSON block, compresses to `.json.gz`, and writes directly to an Azure Blob Storage container (`/sec-audit-logs/`) protected by an active legal hold immutability policy (`immutabilityPeriodSinceCreationInDays: 2555`) to satisfy SOC2, HIPAA, and ISO/IEC 42001 regulatory audits.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing an immutable audit logger (`src/utils/worm_audit_logger.py`) that structures every user interaction `(UUID, Timestamp, Prompt, Response, GroundednessScore, TokenUsage)` into a signed JSON block, compresses to `.json.gz`, and writes directly to an Azure Blob Storage container (`/sec-audit-logs/`) protected by an active legal hold immutability policy (`immutabilityPeriodSinceCreationInDays: 2555`) to satisfy SOC2, HIPAA, and ISO/IEC 42001 regulatory audits.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Customer-Managed Keys (CMK) Secret Rotation (`userAssignedIdentity`)`, Writing an immutable audit logger (`src/utils/worm_audit_logger.py`) that structures every user interaction `(UUID, Timestamp, Prompt, Response, GroundednessScore, TokenUsage)` into a signed JSON block, compresses to `.json.gz`, and writes directly to an Azure Blob Storage container (`/sec-audit-logs/`) protected by an active legal hold immutability policy (`immutabilityPeriodSinceCreationInDays: 2555`) to satisfy SOC2, HIPAA, and ISO/IEC 42001 regulatory audits. is the officially required syntax for `enterprise WORM audit compliance logging to immutable blob container with 7-year retention`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3791,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Adventure Works Core Hub` implementing `Azure AI Content Safety Prompt Shields (`JailbreakDetected == true`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `deterministic output enforcing via Pydantic model validation and JSON Schema strict mode` (Implementation Task #91).",
    "question": "[HARD Coding Task #91] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Azure AI Content Safety Prompt Shields (`JailbreakDetected == true`)` when implementing `deterministic output enforcing via Pydantic model validation and JSON Schema strict mode`?",
    "options": [
      "A) Writing `from pydantic import BaseModel, Field; class MedicalTriageDecision(BaseModel): urgency: int = Field(..., ge=1, le=5); diagnosis_summary: str; recommended_action: str; response = chat_client.chat.completions.create(model='gpt-4o', messages=..., response_format={'type': 'json_schema', 'json_schema': {'name': 'MedicalTriageDecision', 'strict': True, 'schema': MedicalTriageDecision.model_json_schema()}})` inside `src/services/triage_service.py` to eliminate 100% of JSON parsing failures.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `from pydantic import BaseModel, Field; class MedicalTriageDecision(BaseModel): urgency: int = Field(..., ge=1, le=5); diagnosis_summary: str; recommended_action: str; response = chat_client.chat.completions.create(model='gpt-4o', messages=..., response_format={'type': 'json_schema', 'json_schema': {'name': 'MedicalTriageDecision', 'strict': True, 'schema': MedicalTriageDecision.model_json_schema()}})` inside `src/services/triage_service.py` to eliminate 100% of JSON parsing failures.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Azure AI Content Safety Prompt Shields (`JailbreakDetected == true`)`, Writing `from pydantic import BaseModel, Field; class MedicalTriageDecision(BaseModel): urgency: int = Field(..., ge=1, le=5); diagnosis_summary: str; recommended_action: str; response = chat_client.chat.completions.create(model='gpt-4o', messages=..., response_format={'type': 'json_schema', 'json_schema': {'name': 'MedicalTriageDecision', 'strict': True, 'schema': MedicalTriageDecision.model_json_schema()}})` inside `src/services/triage_service.py` to eliminate 100% of JSON parsing failures. is the officially required syntax for `deterministic output enforcing via Pydantic model validation and JSON Schema strict mode`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3792,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Contoso Health AI` implementing `Automated Red-Teaming Engine (`azure.ai.evaluation.simulator`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `deterministic output enforcing via Pydantic model validation and JSON Schema strict mode` (Implementation Task #92).",
    "question": "[HARD Coding Task #92] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Automated Red-Teaming Engine (`azure.ai.evaluation.simulator`)` for `deterministic output enforcing via Pydantic model validation and JSON Schema strict mode`? (Select three)",
    "options": [
      "A) Writing `from pydantic import BaseModel, Field; class MedicalTriageDecision(BaseModel): urgency: int = Field(..., ge=1, le=5); diagnosis_summary: str; recommended_action: str; response = chat_client.chat.completions.create(model='gpt-4o', messages=..., response_format={'type': 'json_schema', 'json_schema': {'name': 'MedicalTriageDecision', 'strict': True, 'schema': MedicalTriageDecision.model_json_schema()}})` inside `src/services/triage_service.py` to eliminate 100% of JSON parsing failures.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Automated Red-Teaming Engine (`azure.ai.evaluation.simulator`)` for `deterministic output enforcing via Pydantic model validation and JSON Schema strict mode`, enterprise coding standards mandate: (1) Writing `from pydantic import BaseModel, Field; class MedicalTriageDecision(BaseModel): urgency: int = Field(..., ge=1, le=5); diagnosis_summary: str; recommended_action: str; response = chat_client.chat.completions.create(model='gpt-4o', messages=..., response_format={'type': 'json_schema', 'json_schema': {'name': 'MedicalTriageDecision', 'strict': True, 'schema': MedicalTriageDecision.model_json_schema()}})` inside `src/services/triage_service.py` to eliminate 100% of JSON parsing failures., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 3793,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Fabrikam Logistics Agent` implementing `Indirect Prompt Injection Defense in RAG (`IndirectAttackEvaluator`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `deterministic output enforcing via Pydantic model validation and JSON Schema strict mode` (Implementation Task #93).",
    "question": "[HARD Coding Task #93] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Indirect Prompt Injection Defense in RAG (`IndirectAttackEvaluator`)` when implementing `deterministic output enforcing via Pydantic model validation and JSON Schema strict mode`?",
    "options": [
      "A) Writing `from pydantic import BaseModel, Field; class MedicalTriageDecision(BaseModel): urgency: int = Field(..., ge=1, le=5); diagnosis_summary: str; recommended_action: str; response = chat_client.chat.completions.create(model='gpt-4o', messages=..., response_format={'type': 'json_schema', 'json_schema': {'name': 'MedicalTriageDecision', 'strict': True, 'schema': MedicalTriageDecision.model_json_schema()}})` inside `src/services/triage_service.py` to eliminate 100% of JSON parsing failures.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `from pydantic import BaseModel, Field; class MedicalTriageDecision(BaseModel): urgency: int = Field(..., ge=1, le=5); diagnosis_summary: str; recommended_action: str; response = chat_client.chat.completions.create(model='gpt-4o', messages=..., response_format={'type': 'json_schema', 'json_schema': {'name': 'MedicalTriageDecision', 'strict': True, 'schema': MedicalTriageDecision.model_json_schema()}})` inside `src/services/triage_service.py` to eliminate 100% of JSON parsing failures.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Indirect Prompt Injection Defense in RAG (`IndirectAttackEvaluator`)`, Writing `from pydantic import BaseModel, Field; class MedicalTriageDecision(BaseModel): urgency: int = Field(..., ge=1, le=5); diagnosis_summary: str; recommended_action: str; response = chat_client.chat.completions.create(model='gpt-4o', messages=..., response_format={'type': 'json_schema', 'json_schema': {'name': 'MedicalTriageDecision', 'strict': True, 'schema': MedicalTriageDecision.model_json_schema()}})` inside `src/services/triage_service.py` to eliminate 100% of JSON parsing failures. is the officially required syntax for `deterministic output enforcing via Pydantic model validation and JSON Schema strict mode`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3794,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Trey Research Lab` implementing `PTU vs Standard Load Balancing in APIM (`<choose>`, `<circuit-breaker>`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `deterministic output enforcing via Pydantic model validation and JSON Schema strict mode` (Implementation Task #94).",
    "question": "[HARD Coding Task #94] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `PTU vs Standard Load Balancing in APIM (`<choose>`, `<circuit-breaker>`)` when implementing `deterministic output enforcing via Pydantic model validation and JSON Schema strict mode`?",
    "options": [
      "A) Writing `from pydantic import BaseModel, Field; class MedicalTriageDecision(BaseModel): urgency: int = Field(..., ge=1, le=5); diagnosis_summary: str; recommended_action: str; response = chat_client.chat.completions.create(model='gpt-4o', messages=..., response_format={'type': 'json_schema', 'json_schema': {'name': 'MedicalTriageDecision', 'strict': True, 'schema': MedicalTriageDecision.model_json_schema()}})` inside `src/services/triage_service.py` to eliminate 100% of JSON parsing failures.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `from pydantic import BaseModel, Field; class MedicalTriageDecision(BaseModel): urgency: int = Field(..., ge=1, le=5); diagnosis_summary: str; recommended_action: str; response = chat_client.chat.completions.create(model='gpt-4o', messages=..., response_format={'type': 'json_schema', 'json_schema': {'name': 'MedicalTriageDecision', 'strict': True, 'schema': MedicalTriageDecision.model_json_schema()}})` inside `src/services/triage_service.py` to eliminate 100% of JSON parsing failures.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `PTU vs Standard Load Balancing in APIM (`<choose>`, `<circuit-breaker>`)`, Writing `from pydantic import BaseModel, Field; class MedicalTriageDecision(BaseModel): urgency: int = Field(..., ge=1, le=5); diagnosis_summary: str; recommended_action: str; response = chat_client.chat.completions.create(model='gpt-4o', messages=..., response_format={'type': 'json_schema', 'json_schema': {'name': 'MedicalTriageDecision', 'strict': True, 'schema': MedicalTriageDecision.model_json_schema()}})` inside `src/services/triage_service.py` to eliminate 100% of JSON parsing failures. is the officially required syntax for `deterministic output enforcing via Pydantic model validation and JSON Schema strict mode`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3795,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Northwind Traders Bot` implementing `Zero-Trust Private Link & VNet Isolation (`publicNetworkAccess: 'Disabled'`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `deterministic output enforcing via Pydantic model validation and JSON Schema strict mode` (Implementation Task #95).",
    "question": "[HARD Coding Task #95] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Zero-Trust Private Link & VNet Isolation (`publicNetworkAccess: 'Disabled'`)` when implementing `deterministic output enforcing via Pydantic model validation and JSON Schema strict mode`?",
    "options": [
      "A) Writing `from pydantic import BaseModel, Field; class MedicalTriageDecision(BaseModel): urgency: int = Field(..., ge=1, le=5); diagnosis_summary: str; recommended_action: str; response = chat_client.chat.completions.create(model='gpt-4o', messages=..., response_format={'type': 'json_schema', 'json_schema': {'name': 'MedicalTriageDecision', 'strict': True, 'schema': MedicalTriageDecision.model_json_schema()}})` inside `src/services/triage_service.py` to eliminate 100% of JSON parsing failures.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `from pydantic import BaseModel, Field; class MedicalTriageDecision(BaseModel): urgency: int = Field(..., ge=1, le=5); diagnosis_summary: str; recommended_action: str; response = chat_client.chat.completions.create(model='gpt-4o', messages=..., response_format={'type': 'json_schema', 'json_schema': {'name': 'MedicalTriageDecision', 'strict': True, 'schema': MedicalTriageDecision.model_json_schema()}})` inside `src/services/triage_service.py` to eliminate 100% of JSON parsing failures.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Zero-Trust Private Link & VNet Isolation (`publicNetworkAccess: 'Disabled'`)`, Writing `from pydantic import BaseModel, Field; class MedicalTriageDecision(BaseModel): urgency: int = Field(..., ge=1, le=5); diagnosis_summary: str; recommended_action: str; response = chat_client.chat.completions.create(model='gpt-4o', messages=..., response_format={'type': 'json_schema', 'json_schema': {'name': 'MedicalTriageDecision', 'strict': True, 'schema': MedicalTriageDecision.model_json_schema()}})` inside `src/services/triage_service.py` to eliminate 100% of JSON parsing failures. is the officially required syntax for `deterministic output enforcing via Pydantic model validation and JSON Schema strict mode`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3796,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Woodgrove Bank Virtual Assistant` implementing `Token Inflation & Context Window Truncation (`SlidingTokenWindow`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `deterministic output enforcing via Pydantic model validation and JSON Schema strict mode` (Implementation Task #96).",
    "question": "[HARD Coding Task #96] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Token Inflation & Context Window Truncation (`SlidingTokenWindow`)` for `deterministic output enforcing via Pydantic model validation and JSON Schema strict mode`? (Select three)",
    "options": [
      "A) Writing `from pydantic import BaseModel, Field; class MedicalTriageDecision(BaseModel): urgency: int = Field(..., ge=1, le=5); diagnosis_summary: str; recommended_action: str; response = chat_client.chat.completions.create(model='gpt-4o', messages=..., response_format={'type': 'json_schema', 'json_schema': {'name': 'MedicalTriageDecision', 'strict': True, 'schema': MedicalTriageDecision.model_json_schema()}})` inside `src/services/triage_service.py` to eliminate 100% of JSON parsing failures.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Token Inflation & Context Window Truncation (`SlidingTokenWindow`)` for `deterministic output enforcing via Pydantic model validation and JSON Schema strict mode`, enterprise coding standards mandate: (1) Writing `from pydantic import BaseModel, Field; class MedicalTriageDecision(BaseModel): urgency: int = Field(..., ge=1, le=5); diagnosis_summary: str; recommended_action: str; response = chat_client.chat.completions.create(model='gpt-4o', messages=..., response_format={'type': 'json_schema', 'json_schema': {'name': 'MedicalTriageDecision', 'strict': True, 'schema': MedicalTriageDecision.model_json_schema()}})` inside `src/services/triage_service.py` to eliminate 100% of JSON parsing failures., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 3797,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Litware Legal Evaluator` implementing `Custom PII & Sensitive Data Redaction (`Presidio` / `TextAnonymizer`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `deterministic output enforcing via Pydantic model validation and JSON Schema strict mode` (Implementation Task #97).",
    "question": "[HARD Coding Task #97] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Custom PII & Sensitive Data Redaction (`Presidio` / `TextAnonymizer`)` when implementing `deterministic output enforcing via Pydantic model validation and JSON Schema strict mode`?",
    "options": [
      "A) Writing `from pydantic import BaseModel, Field; class MedicalTriageDecision(BaseModel): urgency: int = Field(..., ge=1, le=5); diagnosis_summary: str; recommended_action: str; response = chat_client.chat.completions.create(model='gpt-4o', messages=..., response_format={'type': 'json_schema', 'json_schema': {'name': 'MedicalTriageDecision', 'strict': True, 'schema': MedicalTriageDecision.model_json_schema()}})` inside `src/services/triage_service.py` to eliminate 100% of JSON parsing failures.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `from pydantic import BaseModel, Field; class MedicalTriageDecision(BaseModel): urgency: int = Field(..., ge=1, le=5); diagnosis_summary: str; recommended_action: str; response = chat_client.chat.completions.create(model='gpt-4o', messages=..., response_format={'type': 'json_schema', 'json_schema': {'name': 'MedicalTriageDecision', 'strict': True, 'schema': MedicalTriageDecision.model_json_schema()}})` inside `src/services/triage_service.py` to eliminate 100% of JSON parsing failures.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Custom PII & Sensitive Data Redaction (`Presidio` / `TextAnonymizer`)`, Writing `from pydantic import BaseModel, Field; class MedicalTriageDecision(BaseModel): urgency: int = Field(..., ge=1, le=5); diagnosis_summary: str; recommended_action: str; response = chat_client.chat.completions.create(model='gpt-4o', messages=..., response_format={'type': 'json_schema', 'json_schema': {'name': 'MedicalTriageDecision', 'strict': True, 'schema': MedicalTriageDecision.model_json_schema()}})` inside `src/services/triage_service.py` to eliminate 100% of JSON parsing failures. is the officially required syntax for `deterministic output enforcing via Pydantic model validation and JSON Schema strict mode`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3798,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `A.Datum Retail Copilot` implementing `Multi-Agent Deadlock & Cyclic Loop Prevention (`max_turns=10`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `deterministic output enforcing via Pydantic model validation and JSON Schema strict mode` (Implementation Task #98).",
    "question": "[HARD Coding Task #98] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Multi-Agent Deadlock & Cyclic Loop Prevention (`max_turns=10`)` when implementing `deterministic output enforcing via Pydantic model validation and JSON Schema strict mode`?",
    "options": [
      "A) Writing `from pydantic import BaseModel, Field; class MedicalTriageDecision(BaseModel): urgency: int = Field(..., ge=1, le=5); diagnosis_summary: str; recommended_action: str; response = chat_client.chat.completions.create(model='gpt-4o', messages=..., response_format={'type': 'json_schema', 'json_schema': {'name': 'MedicalTriageDecision', 'strict': True, 'schema': MedicalTriageDecision.model_json_schema()}})` inside `src/services/triage_service.py` to eliminate 100% of JSON parsing failures.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `from pydantic import BaseModel, Field; class MedicalTriageDecision(BaseModel): urgency: int = Field(..., ge=1, le=5); diagnosis_summary: str; recommended_action: str; response = chat_client.chat.completions.create(model='gpt-4o', messages=..., response_format={'type': 'json_schema', 'json_schema': {'name': 'MedicalTriageDecision', 'strict': True, 'schema': MedicalTriageDecision.model_json_schema()}})` inside `src/services/triage_service.py` to eliminate 100% of JSON parsing failures.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Multi-Agent Deadlock & Cyclic Loop Prevention (`max_turns=10`)`, Writing `from pydantic import BaseModel, Field; class MedicalTriageDecision(BaseModel): urgency: int = Field(..., ge=1, le=5); diagnosis_summary: str; recommended_action: str; response = chat_client.chat.completions.create(model='gpt-4o', messages=..., response_format={'type': 'json_schema', 'json_schema': {'name': 'MedicalTriageDecision', 'strict': True, 'schema': MedicalTriageDecision.model_json_schema()}})` inside `src/services/triage_service.py` to eliminate 100% of JSON parsing failures. is the officially required syntax for `deterministic output enforcing via Pydantic model validation and JSON Schema strict mode`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3799,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Alpine Ski Field Technician` implementing `WORM Audit Logging & Legal Hold (`RetentionInDays=2555`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `deterministic output enforcing via Pydantic model validation and JSON Schema strict mode` (Implementation Task #99).",
    "question": "[HARD Coding Task #99] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `WORM Audit Logging & Legal Hold (`RetentionInDays=2555`)` when implementing `deterministic output enforcing via Pydantic model validation and JSON Schema strict mode`?",
    "options": [
      "A) Writing `from pydantic import BaseModel, Field; class MedicalTriageDecision(BaseModel): urgency: int = Field(..., ge=1, le=5); diagnosis_summary: str; recommended_action: str; response = chat_client.chat.completions.create(model='gpt-4o', messages=..., response_format={'type': 'json_schema', 'json_schema': {'name': 'MedicalTriageDecision', 'strict': True, 'schema': MedicalTriageDecision.model_json_schema()}})` inside `src/services/triage_service.py` to eliminate 100% of JSON parsing failures.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `from pydantic import BaseModel, Field; class MedicalTriageDecision(BaseModel): urgency: int = Field(..., ge=1, le=5); diagnosis_summary: str; recommended_action: str; response = chat_client.chat.completions.create(model='gpt-4o', messages=..., response_format={'type': 'json_schema', 'json_schema': {'name': 'MedicalTriageDecision', 'strict': True, 'schema': MedicalTriageDecision.model_json_schema()}})` inside `src/services/triage_service.py` to eliminate 100% of JSON parsing failures.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `WORM Audit Logging & Legal Hold (`RetentionInDays=2555`)`, Writing `from pydantic import BaseModel, Field; class MedicalTriageDecision(BaseModel): urgency: int = Field(..., ge=1, le=5); diagnosis_summary: str; recommended_action: str; response = chat_client.chat.completions.create(model='gpt-4o', messages=..., response_format={'type': 'json_schema', 'json_schema': {'name': 'MedicalTriageDecision', 'strict': True, 'schema': MedicalTriageDecision.model_json_schema()}})` inside `src/services/triage_service.py` to eliminate 100% of JSON parsing failures. is the officially required syntax for `deterministic output enforcing via Pydantic model validation and JSON Schema strict mode`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3800,
    "domain": "Track 6: Enterprise Edge Cases, Red-Teaming & Security",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Tailwind Traders Multi-Agent` implementing `Customer-Managed Keys (CMK) Secret Rotation (`userAssignedIdentity`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `deterministic output enforcing via Pydantic model validation and JSON Schema strict mode` (Implementation Task #100).",
    "question": "[HARD Coding Task #100] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Customer-Managed Keys (CMK) Secret Rotation (`userAssignedIdentity`)` for `deterministic output enforcing via Pydantic model validation and JSON Schema strict mode`? (Select three)",
    "options": [
      "A) Writing `from pydantic import BaseModel, Field; class MedicalTriageDecision(BaseModel): urgency: int = Field(..., ge=1, le=5); diagnosis_summary: str; recommended_action: str; response = chat_client.chat.completions.create(model='gpt-4o', messages=..., response_format={'type': 'json_schema', 'json_schema': {'name': 'MedicalTriageDecision', 'strict': True, 'schema': MedicalTriageDecision.model_json_schema()}})` inside `src/services/triage_service.py` to eliminate 100% of JSON parsing failures.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Customer-Managed Keys (CMK) Secret Rotation (`userAssignedIdentity`)` for `deterministic output enforcing via Pydantic model validation and JSON Schema strict mode`, enterprise coding standards mandate: (1) Writing `from pydantic import BaseModel, Field; class MedicalTriageDecision(BaseModel): urgency: int = Field(..., ge=1, le=5); diagnosis_summary: str; recommended_action: str; response = chat_client.chat.completions.create(model='gpt-4o', messages=..., response_format={'type': 'json_schema', 'json_schema': {'name': 'MedicalTriageDecision', 'strict': True, 'schema': MedicalTriageDecision.model_json_schema()}})` inside `src/services/triage_service.py` to eliminate 100% of JSON parsing failures., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  }
];
