window.HANDSON_DATA_MOD_T4 = [
  {
    "id": 2901,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Adventure Works Core Hub` implementing `Log Analytics Table `AppDependencies` (`Target`, `DurationMs`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `calculating p95 and p99 latency percentiles across model endpoints` (Implementation Task #1).",
    "question": "[MOD Coding Task #1] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Log Analytics Table `AppDependencies` (`Target`, `DurationMs`)` when implementing `calculating p95 and p99 latency percentiles across model endpoints`?",
    "options": [
      "A) Writing `AppDependencies | where Target contains 'openai' | summarize p95=percentile(DurationMs, 95), p99=percentile(DurationMs, 99) by Target`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `AppDependencies | where Target contains 'openai' | summarize p95=percentile(DurationMs, 95), p99=percentile(DurationMs, 99) by Target`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Log Analytics Table `AppDependencies` (`Target`, `DurationMs`)`, Writing `AppDependencies | where Target contains 'openai' | summarize p95=percentile(DurationMs, 95), p99=percentile(DurationMs, 99) by Target`. is the officially required syntax for `calculating p95 and p99 latency percentiles across model endpoints`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2902,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Contoso Health AI` implementing `Log Analytics Table `AppTraces` (`Message`, `SeverityLevel`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `calculating p95 and p99 latency percentiles across model endpoints` (Implementation Task #2).",
    "question": "[MOD Coding Task #2] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Log Analytics Table `AppTraces` (`Message`, `SeverityLevel`)` when implementing `calculating p95 and p99 latency percentiles across model endpoints`?",
    "options": [
      "A) Writing `AppDependencies | where Target contains 'openai' | summarize p95=percentile(DurationMs, 95), p99=percentile(DurationMs, 99) by Target`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `AppDependencies | where Target contains 'openai' | summarize p95=percentile(DurationMs, 95), p99=percentile(DurationMs, 99) by Target`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Log Analytics Table `AppTraces` (`Message`, `SeverityLevel`)`, Writing `AppDependencies | where Target contains 'openai' | summarize p95=percentile(DurationMs, 95), p99=percentile(DurationMs, 99) by Target`. is the officially required syntax for `calculating p95 and p99 latency percentiles across model endpoints`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2903,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Fabrikam Logistics Agent` implementing `KQL `summarize p95=percentile(DurationMs, 95) by bin(TimeGenerated, 1h)``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `calculating p95 and p99 latency percentiles across model endpoints` (Implementation Task #3).",
    "question": "[MOD Coding Task #3] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `KQL `summarize p95=percentile(DurationMs, 95) by bin(TimeGenerated, 1h)`` when implementing `calculating p95 and p99 latency percentiles across model endpoints`?",
    "options": [
      "A) Writing `AppDependencies | where Target contains 'openai' | summarize p95=percentile(DurationMs, 95), p99=percentile(DurationMs, 99) by Target`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `AppDependencies | where Target contains 'openai' | summarize p95=percentile(DurationMs, 95), p99=percentile(DurationMs, 99) by Target`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `KQL `summarize p95=percentile(DurationMs, 95) by bin(TimeGenerated, 1h)``, Writing `AppDependencies | where Target contains 'openai' | summarize p95=percentile(DurationMs, 95), p99=percentile(DurationMs, 99) by Target`. is the officially required syntax for `calculating p95 and p99 latency percentiles across model endpoints`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2904,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Trey Research Lab` implementing `KQL `parse Message with * 'Tokens:' Tokens:int *` String Extraction`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `calculating p95 and p99 latency percentiles across model endpoints` (Implementation Task #4).",
    "question": "[MOD Coding Task #4] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `KQL `parse Message with * 'Tokens:' Tokens:int *` String Extraction` for `calculating p95 and p99 latency percentiles across model endpoints`? (Select three)",
    "options": [
      "A) Writing `AppDependencies | where Target contains 'openai' | summarize p95=percentile(DurationMs, 95), p99=percentile(DurationMs, 99) by Target`.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `KQL `parse Message with * 'Tokens:' Tokens:int *` String Extraction` for `calculating p95 and p99 latency percentiles across model endpoints`, enterprise coding standards mandate: (1) Writing `AppDependencies | where Target contains 'openai' | summarize p95=percentile(DurationMs, 95), p99=percentile(DurationMs, 99) by Target`., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2905,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Northwind Traders Bot` implementing `KQL `join kind=inner (AppDependencies) on OperationId` Correlation`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `calculating p95 and p99 latency percentiles across model endpoints` (Implementation Task #5).",
    "question": "[MOD Coding Task #5] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `KQL `join kind=inner (AppDependencies) on OperationId` Correlation` when implementing `calculating p95 and p99 latency percentiles across model endpoints`?",
    "options": [
      "A) Writing `AppDependencies | where Target contains 'openai' | summarize p95=percentile(DurationMs, 95), p99=percentile(DurationMs, 99) by Target`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `AppDependencies | where Target contains 'openai' | summarize p95=percentile(DurationMs, 95), p99=percentile(DurationMs, 99) by Target`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `KQL `join kind=inner (AppDependencies) on OperationId` Correlation`, Writing `AppDependencies | where Target contains 'openai' | summarize p95=percentile(DurationMs, 95), p99=percentile(DurationMs, 99) by Target`. is the officially required syntax for `calculating p95 and p99 latency percentiles across model endpoints`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2906,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Woodgrove Bank Virtual Assistant` implementing `OpenTelemetry `@tracer.start_as_current_span('InferenceTurn')``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `calculating p95 and p99 latency percentiles across model endpoints` (Implementation Task #6).",
    "question": "[MOD Coding Task #6] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `OpenTelemetry `@tracer.start_as_current_span('InferenceTurn')`` when implementing `calculating p95 and p99 latency percentiles across model endpoints`?",
    "options": [
      "A) Writing `AppDependencies | where Target contains 'openai' | summarize p95=percentile(DurationMs, 95), p99=percentile(DurationMs, 99) by Target`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `AppDependencies | where Target contains 'openai' | summarize p95=percentile(DurationMs, 95), p99=percentile(DurationMs, 99) by Target`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `OpenTelemetry `@tracer.start_as_current_span('InferenceTurn')``, Writing `AppDependencies | where Target contains 'openai' | summarize p95=percentile(DurationMs, 95), p99=percentile(DurationMs, 99) by Target`. is the officially required syntax for `calculating p95 and p99 latency percentiles across model endpoints`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2907,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Litware Legal Evaluator` implementing `OpenTelemetry Span Attributes (`span.set_attribute('ai.model', 'gpt-4o')`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `calculating p95 and p99 latency percentiles across model endpoints` (Implementation Task #7).",
    "question": "[MOD Coding Task #7] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `OpenTelemetry Span Attributes (`span.set_attribute('ai.model', 'gpt-4o')`)` when implementing `calculating p95 and p99 latency percentiles across model endpoints`?",
    "options": [
      "A) Writing `AppDependencies | where Target contains 'openai' | summarize p95=percentile(DurationMs, 95), p99=percentile(DurationMs, 99) by Target`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `AppDependencies | where Target contains 'openai' | summarize p95=percentile(DurationMs, 95), p99=percentile(DurationMs, 99) by Target`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `OpenTelemetry Span Attributes (`span.set_attribute('ai.model', 'gpt-4o')`)`, Writing `AppDependencies | where Target contains 'openai' | summarize p95=percentile(DurationMs, 95), p99=percentile(DurationMs, 99) by Target`. is the officially required syntax for `calculating p95 and p99 latency percentiles across model endpoints`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2908,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `A.Datum Retail Copilot` implementing `Azure Monitor Application Insights Connection String Configuration`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `calculating p95 and p99 latency percentiles across model endpoints` (Implementation Task #8).",
    "question": "[MOD Coding Task #8] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Azure Monitor Application Insights Connection String Configuration` for `calculating p95 and p99 latency percentiles across model endpoints`? (Select three)",
    "options": [
      "A) Writing `AppDependencies | where Target contains 'openai' | summarize p95=percentile(DurationMs, 95), p99=percentile(DurationMs, 99) by Target`.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Azure Monitor Application Insights Connection String Configuration` for `calculating p95 and p99 latency percentiles across model endpoints`, enterprise coding standards mandate: (1) Writing `AppDependencies | where Target contains 'openai' | summarize p95=percentile(DurationMs, 95), p99=percentile(DurationMs, 99) by Target`., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2909,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Alpine Ski Field Technician` implementing `Azure Portal Log Analytics Indexing Lag & `ingestion_time()``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `calculating p95 and p99 latency percentiles across model endpoints` (Implementation Task #9).",
    "question": "[MOD Coding Task #9] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Azure Portal Log Analytics Indexing Lag & `ingestion_time()`` when implementing `calculating p95 and p99 latency percentiles across model endpoints`?",
    "options": [
      "A) Writing `AppDependencies | where Target contains 'openai' | summarize p95=percentile(DurationMs, 95), p99=percentile(DurationMs, 99) by Target`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `AppDependencies | where Target contains 'openai' | summarize p95=percentile(DurationMs, 95), p99=percentile(DurationMs, 99) by Target`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Azure Portal Log Analytics Indexing Lag & `ingestion_time()``, Writing `AppDependencies | where Target contains 'openai' | summarize p95=percentile(DurationMs, 95), p99=percentile(DurationMs, 99) by Target`. is the officially required syntax for `calculating p95 and p99 latency percentiles across model endpoints`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2910,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Tailwind Traders Multi-Agent` implementing `Continuous Observability CI/CD Export Script (`export_monitoring_traces.py`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `calculating p95 and p99 latency percentiles across model endpoints` (Implementation Task #10).",
    "question": "[MOD Coding Task #10] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Continuous Observability CI/CD Export Script (`export_monitoring_traces.py`)` when implementing `calculating p95 and p99 latency percentiles across model endpoints`?",
    "options": [
      "A) Writing `AppDependencies | where Target contains 'openai' | summarize p95=percentile(DurationMs, 95), p99=percentile(DurationMs, 99) by Target`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `AppDependencies | where Target contains 'openai' | summarize p95=percentile(DurationMs, 95), p99=percentile(DurationMs, 99) by Target`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Continuous Observability CI/CD Export Script (`export_monitoring_traces.py`)`, Writing `AppDependencies | where Target contains 'openai' | summarize p95=percentile(DurationMs, 95), p99=percentile(DurationMs, 99) by Target`. is the officially required syntax for `calculating p95 and p99 latency percentiles across model endpoints`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2911,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Adventure Works Core Hub` implementing `Log Analytics Table `AppDependencies` (`Target`, `DurationMs`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `parsing token usage from unstructured `AppTraces` message text` (Implementation Task #11).",
    "question": "[MOD Coding Task #11] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Log Analytics Table `AppDependencies` (`Target`, `DurationMs`)` when implementing `parsing token usage from unstructured `AppTraces` message text`?",
    "options": [
      "A) Writing `AppTraces | where Message contains 'TokenUsage' | parse Message with * 'PromptTokens: ' PromptTokens:long ', CompletionTokens: ' CompletionTokens:long * | summarize sum(PromptTokens)`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `AppTraces | where Message contains 'TokenUsage' | parse Message with * 'PromptTokens: ' PromptTokens:long ', CompletionTokens: ' CompletionTokens:long * | summarize sum(PromptTokens)`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Log Analytics Table `AppDependencies` (`Target`, `DurationMs`)`, Writing `AppTraces | where Message contains 'TokenUsage' | parse Message with * 'PromptTokens: ' PromptTokens:long ', CompletionTokens: ' CompletionTokens:long * | summarize sum(PromptTokens)`. is the officially required syntax for `parsing token usage from unstructured `AppTraces` message text`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2912,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Contoso Health AI` implementing `Log Analytics Table `AppTraces` (`Message`, `SeverityLevel`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `parsing token usage from unstructured `AppTraces` message text` (Implementation Task #12).",
    "question": "[MOD Coding Task #12] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Log Analytics Table `AppTraces` (`Message`, `SeverityLevel`)` for `parsing token usage from unstructured `AppTraces` message text`? (Select three)",
    "options": [
      "A) Writing `AppTraces | where Message contains 'TokenUsage' | parse Message with * 'PromptTokens: ' PromptTokens:long ', CompletionTokens: ' CompletionTokens:long * | summarize sum(PromptTokens)`.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Log Analytics Table `AppTraces` (`Message`, `SeverityLevel`)` for `parsing token usage from unstructured `AppTraces` message text`, enterprise coding standards mandate: (1) Writing `AppTraces | where Message contains 'TokenUsage' | parse Message with * 'PromptTokens: ' PromptTokens:long ', CompletionTokens: ' CompletionTokens:long * | summarize sum(PromptTokens)`., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2913,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Fabrikam Logistics Agent` implementing `KQL `summarize p95=percentile(DurationMs, 95) by bin(TimeGenerated, 1h)``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `parsing token usage from unstructured `AppTraces` message text` (Implementation Task #13).",
    "question": "[MOD Coding Task #13] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `KQL `summarize p95=percentile(DurationMs, 95) by bin(TimeGenerated, 1h)`` when implementing `parsing token usage from unstructured `AppTraces` message text`?",
    "options": [
      "A) Writing `AppTraces | where Message contains 'TokenUsage' | parse Message with * 'PromptTokens: ' PromptTokens:long ', CompletionTokens: ' CompletionTokens:long * | summarize sum(PromptTokens)`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `AppTraces | where Message contains 'TokenUsage' | parse Message with * 'PromptTokens: ' PromptTokens:long ', CompletionTokens: ' CompletionTokens:long * | summarize sum(PromptTokens)`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `KQL `summarize p95=percentile(DurationMs, 95) by bin(TimeGenerated, 1h)``, Writing `AppTraces | where Message contains 'TokenUsage' | parse Message with * 'PromptTokens: ' PromptTokens:long ', CompletionTokens: ' CompletionTokens:long * | summarize sum(PromptTokens)`. is the officially required syntax for `parsing token usage from unstructured `AppTraces` message text`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2914,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Trey Research Lab` implementing `KQL `parse Message with * 'Tokens:' Tokens:int *` String Extraction`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `parsing token usage from unstructured `AppTraces` message text` (Implementation Task #14).",
    "question": "[MOD Coding Task #14] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `KQL `parse Message with * 'Tokens:' Tokens:int *` String Extraction` when implementing `parsing token usage from unstructured `AppTraces` message text`?",
    "options": [
      "A) Writing `AppTraces | where Message contains 'TokenUsage' | parse Message with * 'PromptTokens: ' PromptTokens:long ', CompletionTokens: ' CompletionTokens:long * | summarize sum(PromptTokens)`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `AppTraces | where Message contains 'TokenUsage' | parse Message with * 'PromptTokens: ' PromptTokens:long ', CompletionTokens: ' CompletionTokens:long * | summarize sum(PromptTokens)`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `KQL `parse Message with * 'Tokens:' Tokens:int *` String Extraction`, Writing `AppTraces | where Message contains 'TokenUsage' | parse Message with * 'PromptTokens: ' PromptTokens:long ', CompletionTokens: ' CompletionTokens:long * | summarize sum(PromptTokens)`. is the officially required syntax for `parsing token usage from unstructured `AppTraces` message text`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2915,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Northwind Traders Bot` implementing `KQL `join kind=inner (AppDependencies) on OperationId` Correlation`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `parsing token usage from unstructured `AppTraces` message text` (Implementation Task #15).",
    "question": "[MOD Coding Task #15] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `KQL `join kind=inner (AppDependencies) on OperationId` Correlation` when implementing `parsing token usage from unstructured `AppTraces` message text`?",
    "options": [
      "A) Writing `AppTraces | where Message contains 'TokenUsage' | parse Message with * 'PromptTokens: ' PromptTokens:long ', CompletionTokens: ' CompletionTokens:long * | summarize sum(PromptTokens)`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `AppTraces | where Message contains 'TokenUsage' | parse Message with * 'PromptTokens: ' PromptTokens:long ', CompletionTokens: ' CompletionTokens:long * | summarize sum(PromptTokens)`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `KQL `join kind=inner (AppDependencies) on OperationId` Correlation`, Writing `AppTraces | where Message contains 'TokenUsage' | parse Message with * 'PromptTokens: ' PromptTokens:long ', CompletionTokens: ' CompletionTokens:long * | summarize sum(PromptTokens)`. is the officially required syntax for `parsing token usage from unstructured `AppTraces` message text`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2916,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Woodgrove Bank Virtual Assistant` implementing `OpenTelemetry `@tracer.start_as_current_span('InferenceTurn')``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `parsing token usage from unstructured `AppTraces` message text` (Implementation Task #16).",
    "question": "[MOD Coding Task #16] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `OpenTelemetry `@tracer.start_as_current_span('InferenceTurn')`` for `parsing token usage from unstructured `AppTraces` message text`? (Select three)",
    "options": [
      "A) Writing `AppTraces | where Message contains 'TokenUsage' | parse Message with * 'PromptTokens: ' PromptTokens:long ', CompletionTokens: ' CompletionTokens:long * | summarize sum(PromptTokens)`.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `OpenTelemetry `@tracer.start_as_current_span('InferenceTurn')`` for `parsing token usage from unstructured `AppTraces` message text`, enterprise coding standards mandate: (1) Writing `AppTraces | where Message contains 'TokenUsage' | parse Message with * 'PromptTokens: ' PromptTokens:long ', CompletionTokens: ' CompletionTokens:long * | summarize sum(PromptTokens)`., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2917,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Litware Legal Evaluator` implementing `OpenTelemetry Span Attributes (`span.set_attribute('ai.model', 'gpt-4o')`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `parsing token usage from unstructured `AppTraces` message text` (Implementation Task #17).",
    "question": "[MOD Coding Task #17] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `OpenTelemetry Span Attributes (`span.set_attribute('ai.model', 'gpt-4o')`)` when implementing `parsing token usage from unstructured `AppTraces` message text`?",
    "options": [
      "A) Writing `AppTraces | where Message contains 'TokenUsage' | parse Message with * 'PromptTokens: ' PromptTokens:long ', CompletionTokens: ' CompletionTokens:long * | summarize sum(PromptTokens)`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `AppTraces | where Message contains 'TokenUsage' | parse Message with * 'PromptTokens: ' PromptTokens:long ', CompletionTokens: ' CompletionTokens:long * | summarize sum(PromptTokens)`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `OpenTelemetry Span Attributes (`span.set_attribute('ai.model', 'gpt-4o')`)`, Writing `AppTraces | where Message contains 'TokenUsage' | parse Message with * 'PromptTokens: ' PromptTokens:long ', CompletionTokens: ' CompletionTokens:long * | summarize sum(PromptTokens)`. is the officially required syntax for `parsing token usage from unstructured `AppTraces` message text`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2918,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `A.Datum Retail Copilot` implementing `Azure Monitor Application Insights Connection String Configuration`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `parsing token usage from unstructured `AppTraces` message text` (Implementation Task #18).",
    "question": "[MOD Coding Task #18] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Azure Monitor Application Insights Connection String Configuration` when implementing `parsing token usage from unstructured `AppTraces` message text`?",
    "options": [
      "A) Writing `AppTraces | where Message contains 'TokenUsage' | parse Message with * 'PromptTokens: ' PromptTokens:long ', CompletionTokens: ' CompletionTokens:long * | summarize sum(PromptTokens)`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `AppTraces | where Message contains 'TokenUsage' | parse Message with * 'PromptTokens: ' PromptTokens:long ', CompletionTokens: ' CompletionTokens:long * | summarize sum(PromptTokens)`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Azure Monitor Application Insights Connection String Configuration`, Writing `AppTraces | where Message contains 'TokenUsage' | parse Message with * 'PromptTokens: ' PromptTokens:long ', CompletionTokens: ' CompletionTokens:long * | summarize sum(PromptTokens)`. is the officially required syntax for `parsing token usage from unstructured `AppTraces` message text`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2919,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Alpine Ski Field Technician` implementing `Azure Portal Log Analytics Indexing Lag & `ingestion_time()``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `parsing token usage from unstructured `AppTraces` message text` (Implementation Task #19).",
    "question": "[MOD Coding Task #19] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Azure Portal Log Analytics Indexing Lag & `ingestion_time()`` when implementing `parsing token usage from unstructured `AppTraces` message text`?",
    "options": [
      "A) Writing `AppTraces | where Message contains 'TokenUsage' | parse Message with * 'PromptTokens: ' PromptTokens:long ', CompletionTokens: ' CompletionTokens:long * | summarize sum(PromptTokens)`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `AppTraces | where Message contains 'TokenUsage' | parse Message with * 'PromptTokens: ' PromptTokens:long ', CompletionTokens: ' CompletionTokens:long * | summarize sum(PromptTokens)`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Azure Portal Log Analytics Indexing Lag & `ingestion_time()``, Writing `AppTraces | where Message contains 'TokenUsage' | parse Message with * 'PromptTokens: ' PromptTokens:long ', CompletionTokens: ' CompletionTokens:long * | summarize sum(PromptTokens)`. is the officially required syntax for `parsing token usage from unstructured `AppTraces` message text`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2920,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Tailwind Traders Multi-Agent` implementing `Continuous Observability CI/CD Export Script (`export_monitoring_traces.py`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `parsing token usage from unstructured `AppTraces` message text` (Implementation Task #20).",
    "question": "[MOD Coding Task #20] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Continuous Observability CI/CD Export Script (`export_monitoring_traces.py`)` for `parsing token usage from unstructured `AppTraces` message text`? (Select three)",
    "options": [
      "A) Writing `AppTraces | where Message contains 'TokenUsage' | parse Message with * 'PromptTokens: ' PromptTokens:long ', CompletionTokens: ' CompletionTokens:long * | summarize sum(PromptTokens)`.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Continuous Observability CI/CD Export Script (`export_monitoring_traces.py`)` for `parsing token usage from unstructured `AppTraces` message text`, enterprise coding standards mandate: (1) Writing `AppTraces | where Message contains 'TokenUsage' | parse Message with * 'PromptTokens: ' PromptTokens:long ', CompletionTokens: ' CompletionTokens:long * | summarize sum(PromptTokens)`., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2921,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Adventure Works Core Hub` implementing `Log Analytics Table `AppDependencies` (`Target`, `DurationMs`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `joining `AppDependencies` with `AppTraces` on `OperationId`` (Implementation Task #21).",
    "question": "[MOD Coding Task #21] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Log Analytics Table `AppDependencies` (`Target`, `DurationMs`)` when implementing `joining `AppDependencies` with `AppTraces` on `OperationId``?",
    "options": [
      "A) Writing `AppDependencies | where Target contains 'openai' | join kind=inner (AppTraces | project OperationId, TraceMsg=Message) on OperationId`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `AppDependencies | where Target contains 'openai' | join kind=inner (AppTraces | project OperationId, TraceMsg=Message) on OperationId`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Log Analytics Table `AppDependencies` (`Target`, `DurationMs`)`, Writing `AppDependencies | where Target contains 'openai' | join kind=inner (AppTraces | project OperationId, TraceMsg=Message) on OperationId`. is the officially required syntax for `joining `AppDependencies` with `AppTraces` on `OperationId``. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2922,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Contoso Health AI` implementing `Log Analytics Table `AppTraces` (`Message`, `SeverityLevel`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `joining `AppDependencies` with `AppTraces` on `OperationId`` (Implementation Task #22).",
    "question": "[MOD Coding Task #22] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Log Analytics Table `AppTraces` (`Message`, `SeverityLevel`)` when implementing `joining `AppDependencies` with `AppTraces` on `OperationId``?",
    "options": [
      "A) Writing `AppDependencies | where Target contains 'openai' | join kind=inner (AppTraces | project OperationId, TraceMsg=Message) on OperationId`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `AppDependencies | where Target contains 'openai' | join kind=inner (AppTraces | project OperationId, TraceMsg=Message) on OperationId`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Log Analytics Table `AppTraces` (`Message`, `SeverityLevel`)`, Writing `AppDependencies | where Target contains 'openai' | join kind=inner (AppTraces | project OperationId, TraceMsg=Message) on OperationId`. is the officially required syntax for `joining `AppDependencies` with `AppTraces` on `OperationId``. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2923,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Fabrikam Logistics Agent` implementing `KQL `summarize p95=percentile(DurationMs, 95) by bin(TimeGenerated, 1h)``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `joining `AppDependencies` with `AppTraces` on `OperationId`` (Implementation Task #23).",
    "question": "[MOD Coding Task #23] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `KQL `summarize p95=percentile(DurationMs, 95) by bin(TimeGenerated, 1h)`` when implementing `joining `AppDependencies` with `AppTraces` on `OperationId``?",
    "options": [
      "A) Writing `AppDependencies | where Target contains 'openai' | join kind=inner (AppTraces | project OperationId, TraceMsg=Message) on OperationId`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `AppDependencies | where Target contains 'openai' | join kind=inner (AppTraces | project OperationId, TraceMsg=Message) on OperationId`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `KQL `summarize p95=percentile(DurationMs, 95) by bin(TimeGenerated, 1h)``, Writing `AppDependencies | where Target contains 'openai' | join kind=inner (AppTraces | project OperationId, TraceMsg=Message) on OperationId`. is the officially required syntax for `joining `AppDependencies` with `AppTraces` on `OperationId``. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2924,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Trey Research Lab` implementing `KQL `parse Message with * 'Tokens:' Tokens:int *` String Extraction`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `joining `AppDependencies` with `AppTraces` on `OperationId`` (Implementation Task #24).",
    "question": "[MOD Coding Task #24] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `KQL `parse Message with * 'Tokens:' Tokens:int *` String Extraction` for `joining `AppDependencies` with `AppTraces` on `OperationId``? (Select three)",
    "options": [
      "A) Writing `AppDependencies | where Target contains 'openai' | join kind=inner (AppTraces | project OperationId, TraceMsg=Message) on OperationId`.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `KQL `parse Message with * 'Tokens:' Tokens:int *` String Extraction` for `joining `AppDependencies` with `AppTraces` on `OperationId``, enterprise coding standards mandate: (1) Writing `AppDependencies | where Target contains 'openai' | join kind=inner (AppTraces | project OperationId, TraceMsg=Message) on OperationId`., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2925,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Northwind Traders Bot` implementing `KQL `join kind=inner (AppDependencies) on OperationId` Correlation`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `joining `AppDependencies` with `AppTraces` on `OperationId`` (Implementation Task #25).",
    "question": "[MOD Coding Task #25] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `KQL `join kind=inner (AppDependencies) on OperationId` Correlation` when implementing `joining `AppDependencies` with `AppTraces` on `OperationId``?",
    "options": [
      "A) Writing `AppDependencies | where Target contains 'openai' | join kind=inner (AppTraces | project OperationId, TraceMsg=Message) on OperationId`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `AppDependencies | where Target contains 'openai' | join kind=inner (AppTraces | project OperationId, TraceMsg=Message) on OperationId`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `KQL `join kind=inner (AppDependencies) on OperationId` Correlation`, Writing `AppDependencies | where Target contains 'openai' | join kind=inner (AppTraces | project OperationId, TraceMsg=Message) on OperationId`. is the officially required syntax for `joining `AppDependencies` with `AppTraces` on `OperationId``. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2926,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Woodgrove Bank Virtual Assistant` implementing `OpenTelemetry `@tracer.start_as_current_span('InferenceTurn')``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `joining `AppDependencies` with `AppTraces` on `OperationId`` (Implementation Task #26).",
    "question": "[MOD Coding Task #26] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `OpenTelemetry `@tracer.start_as_current_span('InferenceTurn')`` when implementing `joining `AppDependencies` with `AppTraces` on `OperationId``?",
    "options": [
      "A) Writing `AppDependencies | where Target contains 'openai' | join kind=inner (AppTraces | project OperationId, TraceMsg=Message) on OperationId`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `AppDependencies | where Target contains 'openai' | join kind=inner (AppTraces | project OperationId, TraceMsg=Message) on OperationId`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `OpenTelemetry `@tracer.start_as_current_span('InferenceTurn')``, Writing `AppDependencies | where Target contains 'openai' | join kind=inner (AppTraces | project OperationId, TraceMsg=Message) on OperationId`. is the officially required syntax for `joining `AppDependencies` with `AppTraces` on `OperationId``. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2927,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Litware Legal Evaluator` implementing `OpenTelemetry Span Attributes (`span.set_attribute('ai.model', 'gpt-4o')`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `joining `AppDependencies` with `AppTraces` on `OperationId`` (Implementation Task #27).",
    "question": "[MOD Coding Task #27] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `OpenTelemetry Span Attributes (`span.set_attribute('ai.model', 'gpt-4o')`)` when implementing `joining `AppDependencies` with `AppTraces` on `OperationId``?",
    "options": [
      "A) Writing `AppDependencies | where Target contains 'openai' | join kind=inner (AppTraces | project OperationId, TraceMsg=Message) on OperationId`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `AppDependencies | where Target contains 'openai' | join kind=inner (AppTraces | project OperationId, TraceMsg=Message) on OperationId`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `OpenTelemetry Span Attributes (`span.set_attribute('ai.model', 'gpt-4o')`)`, Writing `AppDependencies | where Target contains 'openai' | join kind=inner (AppTraces | project OperationId, TraceMsg=Message) on OperationId`. is the officially required syntax for `joining `AppDependencies` with `AppTraces` on `OperationId``. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2928,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `A.Datum Retail Copilot` implementing `Azure Monitor Application Insights Connection String Configuration`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `joining `AppDependencies` with `AppTraces` on `OperationId`` (Implementation Task #28).",
    "question": "[MOD Coding Task #28] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Azure Monitor Application Insights Connection String Configuration` for `joining `AppDependencies` with `AppTraces` on `OperationId``? (Select three)",
    "options": [
      "A) Writing `AppDependencies | where Target contains 'openai' | join kind=inner (AppTraces | project OperationId, TraceMsg=Message) on OperationId`.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Azure Monitor Application Insights Connection String Configuration` for `joining `AppDependencies` with `AppTraces` on `OperationId``, enterprise coding standards mandate: (1) Writing `AppDependencies | where Target contains 'openai' | join kind=inner (AppTraces | project OperationId, TraceMsg=Message) on OperationId`., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2929,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Alpine Ski Field Technician` implementing `Azure Portal Log Analytics Indexing Lag & `ingestion_time()``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `joining `AppDependencies` with `AppTraces` on `OperationId`` (Implementation Task #29).",
    "question": "[MOD Coding Task #29] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Azure Portal Log Analytics Indexing Lag & `ingestion_time()`` when implementing `joining `AppDependencies` with `AppTraces` on `OperationId``?",
    "options": [
      "A) Writing `AppDependencies | where Target contains 'openai' | join kind=inner (AppTraces | project OperationId, TraceMsg=Message) on OperationId`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `AppDependencies | where Target contains 'openai' | join kind=inner (AppTraces | project OperationId, TraceMsg=Message) on OperationId`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Azure Portal Log Analytics Indexing Lag & `ingestion_time()``, Writing `AppDependencies | where Target contains 'openai' | join kind=inner (AppTraces | project OperationId, TraceMsg=Message) on OperationId`. is the officially required syntax for `joining `AppDependencies` with `AppTraces` on `OperationId``. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2930,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Tailwind Traders Multi-Agent` implementing `Continuous Observability CI/CD Export Script (`export_monitoring_traces.py`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `joining `AppDependencies` with `AppTraces` on `OperationId`` (Implementation Task #30).",
    "question": "[MOD Coding Task #30] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Continuous Observability CI/CD Export Script (`export_monitoring_traces.py`)` when implementing `joining `AppDependencies` with `AppTraces` on `OperationId``?",
    "options": [
      "A) Writing `AppDependencies | where Target contains 'openai' | join kind=inner (AppTraces | project OperationId, TraceMsg=Message) on OperationId`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `AppDependencies | where Target contains 'openai' | join kind=inner (AppTraces | project OperationId, TraceMsg=Message) on OperationId`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Continuous Observability CI/CD Export Script (`export_monitoring_traces.py`)`, Writing `AppDependencies | where Target contains 'openai' | join kind=inner (AppTraces | project OperationId, TraceMsg=Message) on OperationId`. is the officially required syntax for `joining `AppDependencies` with `AppTraces` on `OperationId``. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2931,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Adventure Works Core Hub` implementing `Log Analytics Table `AppDependencies` (`Target`, `DurationMs`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `tracing multi-agent handoff spans with custom OpenTelemetry context` (Implementation Task #31).",
    "question": "[MOD Coding Task #31] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Log Analytics Table `AppDependencies` (`Target`, `DurationMs`)` when implementing `tracing multi-agent handoff spans with custom OpenTelemetry context`?",
    "options": [
      "A) Writing `with tracer.start_as_current_span('AgentHandoff') as span: span.set_attribute('agent.source', 'Router'); span.set_attribute('agent.target', 'TrailGuide')`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `with tracer.start_as_current_span('AgentHandoff') as span: span.set_attribute('agent.source', 'Router'); span.set_attribute('agent.target', 'TrailGuide')`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Log Analytics Table `AppDependencies` (`Target`, `DurationMs`)`, Writing `with tracer.start_as_current_span('AgentHandoff') as span: span.set_attribute('agent.source', 'Router'); span.set_attribute('agent.target', 'TrailGuide')`. is the officially required syntax for `tracing multi-agent handoff spans with custom OpenTelemetry context`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2932,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Contoso Health AI` implementing `Log Analytics Table `AppTraces` (`Message`, `SeverityLevel`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `tracing multi-agent handoff spans with custom OpenTelemetry context` (Implementation Task #32).",
    "question": "[MOD Coding Task #32] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Log Analytics Table `AppTraces` (`Message`, `SeverityLevel`)` for `tracing multi-agent handoff spans with custom OpenTelemetry context`? (Select three)",
    "options": [
      "A) Writing `with tracer.start_as_current_span('AgentHandoff') as span: span.set_attribute('agent.source', 'Router'); span.set_attribute('agent.target', 'TrailGuide')`.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Log Analytics Table `AppTraces` (`Message`, `SeverityLevel`)` for `tracing multi-agent handoff spans with custom OpenTelemetry context`, enterprise coding standards mandate: (1) Writing `with tracer.start_as_current_span('AgentHandoff') as span: span.set_attribute('agent.source', 'Router'); span.set_attribute('agent.target', 'TrailGuide')`., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2933,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Fabrikam Logistics Agent` implementing `KQL `summarize p95=percentile(DurationMs, 95) by bin(TimeGenerated, 1h)``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `tracing multi-agent handoff spans with custom OpenTelemetry context` (Implementation Task #33).",
    "question": "[MOD Coding Task #33] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `KQL `summarize p95=percentile(DurationMs, 95) by bin(TimeGenerated, 1h)`` when implementing `tracing multi-agent handoff spans with custom OpenTelemetry context`?",
    "options": [
      "A) Writing `with tracer.start_as_current_span('AgentHandoff') as span: span.set_attribute('agent.source', 'Router'); span.set_attribute('agent.target', 'TrailGuide')`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `with tracer.start_as_current_span('AgentHandoff') as span: span.set_attribute('agent.source', 'Router'); span.set_attribute('agent.target', 'TrailGuide')`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `KQL `summarize p95=percentile(DurationMs, 95) by bin(TimeGenerated, 1h)``, Writing `with tracer.start_as_current_span('AgentHandoff') as span: span.set_attribute('agent.source', 'Router'); span.set_attribute('agent.target', 'TrailGuide')`. is the officially required syntax for `tracing multi-agent handoff spans with custom OpenTelemetry context`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2934,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Trey Research Lab` implementing `KQL `parse Message with * 'Tokens:' Tokens:int *` String Extraction`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `tracing multi-agent handoff spans with custom OpenTelemetry context` (Implementation Task #34).",
    "question": "[MOD Coding Task #34] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `KQL `parse Message with * 'Tokens:' Tokens:int *` String Extraction` when implementing `tracing multi-agent handoff spans with custom OpenTelemetry context`?",
    "options": [
      "A) Writing `with tracer.start_as_current_span('AgentHandoff') as span: span.set_attribute('agent.source', 'Router'); span.set_attribute('agent.target', 'TrailGuide')`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `with tracer.start_as_current_span('AgentHandoff') as span: span.set_attribute('agent.source', 'Router'); span.set_attribute('agent.target', 'TrailGuide')`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `KQL `parse Message with * 'Tokens:' Tokens:int *` String Extraction`, Writing `with tracer.start_as_current_span('AgentHandoff') as span: span.set_attribute('agent.source', 'Router'); span.set_attribute('agent.target', 'TrailGuide')`. is the officially required syntax for `tracing multi-agent handoff spans with custom OpenTelemetry context`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2935,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Northwind Traders Bot` implementing `KQL `join kind=inner (AppDependencies) on OperationId` Correlation`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `tracing multi-agent handoff spans with custom OpenTelemetry context` (Implementation Task #35).",
    "question": "[MOD Coding Task #35] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `KQL `join kind=inner (AppDependencies) on OperationId` Correlation` when implementing `tracing multi-agent handoff spans with custom OpenTelemetry context`?",
    "options": [
      "A) Writing `with tracer.start_as_current_span('AgentHandoff') as span: span.set_attribute('agent.source', 'Router'); span.set_attribute('agent.target', 'TrailGuide')`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `with tracer.start_as_current_span('AgentHandoff') as span: span.set_attribute('agent.source', 'Router'); span.set_attribute('agent.target', 'TrailGuide')`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `KQL `join kind=inner (AppDependencies) on OperationId` Correlation`, Writing `with tracer.start_as_current_span('AgentHandoff') as span: span.set_attribute('agent.source', 'Router'); span.set_attribute('agent.target', 'TrailGuide')`. is the officially required syntax for `tracing multi-agent handoff spans with custom OpenTelemetry context`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2936,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Woodgrove Bank Virtual Assistant` implementing `OpenTelemetry `@tracer.start_as_current_span('InferenceTurn')``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `tracing multi-agent handoff spans with custom OpenTelemetry context` (Implementation Task #36).",
    "question": "[MOD Coding Task #36] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `OpenTelemetry `@tracer.start_as_current_span('InferenceTurn')`` for `tracing multi-agent handoff spans with custom OpenTelemetry context`? (Select three)",
    "options": [
      "A) Writing `with tracer.start_as_current_span('AgentHandoff') as span: span.set_attribute('agent.source', 'Router'); span.set_attribute('agent.target', 'TrailGuide')`.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `OpenTelemetry `@tracer.start_as_current_span('InferenceTurn')`` for `tracing multi-agent handoff spans with custom OpenTelemetry context`, enterprise coding standards mandate: (1) Writing `with tracer.start_as_current_span('AgentHandoff') as span: span.set_attribute('agent.source', 'Router'); span.set_attribute('agent.target', 'TrailGuide')`., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2937,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Litware Legal Evaluator` implementing `OpenTelemetry Span Attributes (`span.set_attribute('ai.model', 'gpt-4o')`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `tracing multi-agent handoff spans with custom OpenTelemetry context` (Implementation Task #37).",
    "question": "[MOD Coding Task #37] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `OpenTelemetry Span Attributes (`span.set_attribute('ai.model', 'gpt-4o')`)` when implementing `tracing multi-agent handoff spans with custom OpenTelemetry context`?",
    "options": [
      "A) Writing `with tracer.start_as_current_span('AgentHandoff') as span: span.set_attribute('agent.source', 'Router'); span.set_attribute('agent.target', 'TrailGuide')`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `with tracer.start_as_current_span('AgentHandoff') as span: span.set_attribute('agent.source', 'Router'); span.set_attribute('agent.target', 'TrailGuide')`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `OpenTelemetry Span Attributes (`span.set_attribute('ai.model', 'gpt-4o')`)`, Writing `with tracer.start_as_current_span('AgentHandoff') as span: span.set_attribute('agent.source', 'Router'); span.set_attribute('agent.target', 'TrailGuide')`. is the officially required syntax for `tracing multi-agent handoff spans with custom OpenTelemetry context`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2938,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `A.Datum Retail Copilot` implementing `Azure Monitor Application Insights Connection String Configuration`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `tracing multi-agent handoff spans with custom OpenTelemetry context` (Implementation Task #38).",
    "question": "[MOD Coding Task #38] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Azure Monitor Application Insights Connection String Configuration` when implementing `tracing multi-agent handoff spans with custom OpenTelemetry context`?",
    "options": [
      "A) Writing `with tracer.start_as_current_span('AgentHandoff') as span: span.set_attribute('agent.source', 'Router'); span.set_attribute('agent.target', 'TrailGuide')`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `with tracer.start_as_current_span('AgentHandoff') as span: span.set_attribute('agent.source', 'Router'); span.set_attribute('agent.target', 'TrailGuide')`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Azure Monitor Application Insights Connection String Configuration`, Writing `with tracer.start_as_current_span('AgentHandoff') as span: span.set_attribute('agent.source', 'Router'); span.set_attribute('agent.target', 'TrailGuide')`. is the officially required syntax for `tracing multi-agent handoff spans with custom OpenTelemetry context`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2939,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Alpine Ski Field Technician` implementing `Azure Portal Log Analytics Indexing Lag & `ingestion_time()``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `tracing multi-agent handoff spans with custom OpenTelemetry context` (Implementation Task #39).",
    "question": "[MOD Coding Task #39] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Azure Portal Log Analytics Indexing Lag & `ingestion_time()`` when implementing `tracing multi-agent handoff spans with custom OpenTelemetry context`?",
    "options": [
      "A) Writing `with tracer.start_as_current_span('AgentHandoff') as span: span.set_attribute('agent.source', 'Router'); span.set_attribute('agent.target', 'TrailGuide')`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `with tracer.start_as_current_span('AgentHandoff') as span: span.set_attribute('agent.source', 'Router'); span.set_attribute('agent.target', 'TrailGuide')`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Azure Portal Log Analytics Indexing Lag & `ingestion_time()``, Writing `with tracer.start_as_current_span('AgentHandoff') as span: span.set_attribute('agent.source', 'Router'); span.set_attribute('agent.target', 'TrailGuide')`. is the officially required syntax for `tracing multi-agent handoff spans with custom OpenTelemetry context`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2940,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Tailwind Traders Multi-Agent` implementing `Continuous Observability CI/CD Export Script (`export_monitoring_traces.py`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `tracing multi-agent handoff spans with custom OpenTelemetry context` (Implementation Task #40).",
    "question": "[MOD Coding Task #40] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Continuous Observability CI/CD Export Script (`export_monitoring_traces.py`)` for `tracing multi-agent handoff spans with custom OpenTelemetry context`? (Select three)",
    "options": [
      "A) Writing `with tracer.start_as_current_span('AgentHandoff') as span: span.set_attribute('agent.source', 'Router'); span.set_attribute('agent.target', 'TrailGuide')`.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Continuous Observability CI/CD Export Script (`export_monitoring_traces.py`)` for `tracing multi-agent handoff spans with custom OpenTelemetry context`, enterprise coding standards mandate: (1) Writing `with tracer.start_as_current_span('AgentHandoff') as span: span.set_attribute('agent.source', 'Router'); span.set_attribute('agent.target', 'TrailGuide')`., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2941,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Adventure Works Core Hub` implementing `Log Analytics Table `AppDependencies` (`Target`, `DurationMs`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `setting up KQL alert rule when p95 latency exceeds 2,000ms` (Implementation Task #41).",
    "question": "[MOD Coding Task #41] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Log Analytics Table `AppDependencies` (`Target`, `DurationMs`)` when implementing `setting up KQL alert rule when p95 latency exceeds 2,000ms`?",
    "options": [
      "A) Writing `AppDependencies | where Target contains 'openai' | summarize p95=percentile(DurationMs, 95) by bin(TimeGenerated, 5m) | where p95 > 2000` and saving as Azure Monitor Alert.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `AppDependencies | where Target contains 'openai' | summarize p95=percentile(DurationMs, 95) by bin(TimeGenerated, 5m) | where p95 > 2000` and saving as Azure Monitor Alert.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Log Analytics Table `AppDependencies` (`Target`, `DurationMs`)`, Writing `AppDependencies | where Target contains 'openai' | summarize p95=percentile(DurationMs, 95) by bin(TimeGenerated, 5m) | where p95 > 2000` and saving as Azure Monitor Alert. is the officially required syntax for `setting up KQL alert rule when p95 latency exceeds 2,000ms`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2942,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Contoso Health AI` implementing `Log Analytics Table `AppTraces` (`Message`, `SeverityLevel`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `setting up KQL alert rule when p95 latency exceeds 2,000ms` (Implementation Task #42).",
    "question": "[MOD Coding Task #42] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Log Analytics Table `AppTraces` (`Message`, `SeverityLevel`)` when implementing `setting up KQL alert rule when p95 latency exceeds 2,000ms`?",
    "options": [
      "A) Writing `AppDependencies | where Target contains 'openai' | summarize p95=percentile(DurationMs, 95) by bin(TimeGenerated, 5m) | where p95 > 2000` and saving as Azure Monitor Alert.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `AppDependencies | where Target contains 'openai' | summarize p95=percentile(DurationMs, 95) by bin(TimeGenerated, 5m) | where p95 > 2000` and saving as Azure Monitor Alert.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Log Analytics Table `AppTraces` (`Message`, `SeverityLevel`)`, Writing `AppDependencies | where Target contains 'openai' | summarize p95=percentile(DurationMs, 95) by bin(TimeGenerated, 5m) | where p95 > 2000` and saving as Azure Monitor Alert. is the officially required syntax for `setting up KQL alert rule when p95 latency exceeds 2,000ms`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2943,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Fabrikam Logistics Agent` implementing `KQL `summarize p95=percentile(DurationMs, 95) by bin(TimeGenerated, 1h)``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `setting up KQL alert rule when p95 latency exceeds 2,000ms` (Implementation Task #43).",
    "question": "[MOD Coding Task #43] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `KQL `summarize p95=percentile(DurationMs, 95) by bin(TimeGenerated, 1h)`` when implementing `setting up KQL alert rule when p95 latency exceeds 2,000ms`?",
    "options": [
      "A) Writing `AppDependencies | where Target contains 'openai' | summarize p95=percentile(DurationMs, 95) by bin(TimeGenerated, 5m) | where p95 > 2000` and saving as Azure Monitor Alert.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `AppDependencies | where Target contains 'openai' | summarize p95=percentile(DurationMs, 95) by bin(TimeGenerated, 5m) | where p95 > 2000` and saving as Azure Monitor Alert.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `KQL `summarize p95=percentile(DurationMs, 95) by bin(TimeGenerated, 1h)``, Writing `AppDependencies | where Target contains 'openai' | summarize p95=percentile(DurationMs, 95) by bin(TimeGenerated, 5m) | where p95 > 2000` and saving as Azure Monitor Alert. is the officially required syntax for `setting up KQL alert rule when p95 latency exceeds 2,000ms`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2944,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Trey Research Lab` implementing `KQL `parse Message with * 'Tokens:' Tokens:int *` String Extraction`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `setting up KQL alert rule when p95 latency exceeds 2,000ms` (Implementation Task #44).",
    "question": "[MOD Coding Task #44] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `KQL `parse Message with * 'Tokens:' Tokens:int *` String Extraction` for `setting up KQL alert rule when p95 latency exceeds 2,000ms`? (Select three)",
    "options": [
      "A) Writing `AppDependencies | where Target contains 'openai' | summarize p95=percentile(DurationMs, 95) by bin(TimeGenerated, 5m) | where p95 > 2000` and saving as Azure Monitor Alert.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `KQL `parse Message with * 'Tokens:' Tokens:int *` String Extraction` for `setting up KQL alert rule when p95 latency exceeds 2,000ms`, enterprise coding standards mandate: (1) Writing `AppDependencies | where Target contains 'openai' | summarize p95=percentile(DurationMs, 95) by bin(TimeGenerated, 5m) | where p95 > 2000` and saving as Azure Monitor Alert., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2945,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Northwind Traders Bot` implementing `KQL `join kind=inner (AppDependencies) on OperationId` Correlation`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `setting up KQL alert rule when p95 latency exceeds 2,000ms` (Implementation Task #45).",
    "question": "[MOD Coding Task #45] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `KQL `join kind=inner (AppDependencies) on OperationId` Correlation` when implementing `setting up KQL alert rule when p95 latency exceeds 2,000ms`?",
    "options": [
      "A) Writing `AppDependencies | where Target contains 'openai' | summarize p95=percentile(DurationMs, 95) by bin(TimeGenerated, 5m) | where p95 > 2000` and saving as Azure Monitor Alert.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `AppDependencies | where Target contains 'openai' | summarize p95=percentile(DurationMs, 95) by bin(TimeGenerated, 5m) | where p95 > 2000` and saving as Azure Monitor Alert.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `KQL `join kind=inner (AppDependencies) on OperationId` Correlation`, Writing `AppDependencies | where Target contains 'openai' | summarize p95=percentile(DurationMs, 95) by bin(TimeGenerated, 5m) | where p95 > 2000` and saving as Azure Monitor Alert. is the officially required syntax for `setting up KQL alert rule when p95 latency exceeds 2,000ms`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2946,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Woodgrove Bank Virtual Assistant` implementing `OpenTelemetry `@tracer.start_as_current_span('InferenceTurn')``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `setting up KQL alert rule when p95 latency exceeds 2,000ms` (Implementation Task #46).",
    "question": "[MOD Coding Task #46] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `OpenTelemetry `@tracer.start_as_current_span('InferenceTurn')`` when implementing `setting up KQL alert rule when p95 latency exceeds 2,000ms`?",
    "options": [
      "A) Writing `AppDependencies | where Target contains 'openai' | summarize p95=percentile(DurationMs, 95) by bin(TimeGenerated, 5m) | where p95 > 2000` and saving as Azure Monitor Alert.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `AppDependencies | where Target contains 'openai' | summarize p95=percentile(DurationMs, 95) by bin(TimeGenerated, 5m) | where p95 > 2000` and saving as Azure Monitor Alert.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `OpenTelemetry `@tracer.start_as_current_span('InferenceTurn')``, Writing `AppDependencies | where Target contains 'openai' | summarize p95=percentile(DurationMs, 95) by bin(TimeGenerated, 5m) | where p95 > 2000` and saving as Azure Monitor Alert. is the officially required syntax for `setting up KQL alert rule when p95 latency exceeds 2,000ms`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2947,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Litware Legal Evaluator` implementing `OpenTelemetry Span Attributes (`span.set_attribute('ai.model', 'gpt-4o')`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `setting up KQL alert rule when p95 latency exceeds 2,000ms` (Implementation Task #47).",
    "question": "[MOD Coding Task #47] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `OpenTelemetry Span Attributes (`span.set_attribute('ai.model', 'gpt-4o')`)` when implementing `setting up KQL alert rule when p95 latency exceeds 2,000ms`?",
    "options": [
      "A) Writing `AppDependencies | where Target contains 'openai' | summarize p95=percentile(DurationMs, 95) by bin(TimeGenerated, 5m) | where p95 > 2000` and saving as Azure Monitor Alert.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `AppDependencies | where Target contains 'openai' | summarize p95=percentile(DurationMs, 95) by bin(TimeGenerated, 5m) | where p95 > 2000` and saving as Azure Monitor Alert.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `OpenTelemetry Span Attributes (`span.set_attribute('ai.model', 'gpt-4o')`)`, Writing `AppDependencies | where Target contains 'openai' | summarize p95=percentile(DurationMs, 95) by bin(TimeGenerated, 5m) | where p95 > 2000` and saving as Azure Monitor Alert. is the officially required syntax for `setting up KQL alert rule when p95 latency exceeds 2,000ms`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2948,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `A.Datum Retail Copilot` implementing `Azure Monitor Application Insights Connection String Configuration`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `setting up KQL alert rule when p95 latency exceeds 2,000ms` (Implementation Task #48).",
    "question": "[MOD Coding Task #48] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Azure Monitor Application Insights Connection String Configuration` for `setting up KQL alert rule when p95 latency exceeds 2,000ms`? (Select three)",
    "options": [
      "A) Writing `AppDependencies | where Target contains 'openai' | summarize p95=percentile(DurationMs, 95) by bin(TimeGenerated, 5m) | where p95 > 2000` and saving as Azure Monitor Alert.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Azure Monitor Application Insights Connection String Configuration` for `setting up KQL alert rule when p95 latency exceeds 2,000ms`, enterprise coding standards mandate: (1) Writing `AppDependencies | where Target contains 'openai' | summarize p95=percentile(DurationMs, 95) by bin(TimeGenerated, 5m) | where p95 > 2000` and saving as Azure Monitor Alert., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2949,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Alpine Ski Field Technician` implementing `Azure Portal Log Analytics Indexing Lag & `ingestion_time()``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `setting up KQL alert rule when p95 latency exceeds 2,000ms` (Implementation Task #49).",
    "question": "[MOD Coding Task #49] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Azure Portal Log Analytics Indexing Lag & `ingestion_time()`` when implementing `setting up KQL alert rule when p95 latency exceeds 2,000ms`?",
    "options": [
      "A) Writing `AppDependencies | where Target contains 'openai' | summarize p95=percentile(DurationMs, 95) by bin(TimeGenerated, 5m) | where p95 > 2000` and saving as Azure Monitor Alert.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `AppDependencies | where Target contains 'openai' | summarize p95=percentile(DurationMs, 95) by bin(TimeGenerated, 5m) | where p95 > 2000` and saving as Azure Monitor Alert.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Azure Portal Log Analytics Indexing Lag & `ingestion_time()``, Writing `AppDependencies | where Target contains 'openai' | summarize p95=percentile(DurationMs, 95) by bin(TimeGenerated, 5m) | where p95 > 2000` and saving as Azure Monitor Alert. is the officially required syntax for `setting up KQL alert rule when p95 latency exceeds 2,000ms`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2950,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Tailwind Traders Multi-Agent` implementing `Continuous Observability CI/CD Export Script (`export_monitoring_traces.py`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `setting up KQL alert rule when p95 latency exceeds 2,000ms` (Implementation Task #50).",
    "question": "[MOD Coding Task #50] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Continuous Observability CI/CD Export Script (`export_monitoring_traces.py`)` when implementing `setting up KQL alert rule when p95 latency exceeds 2,000ms`?",
    "options": [
      "A) Writing `AppDependencies | where Target contains 'openai' | summarize p95=percentile(DurationMs, 95) by bin(TimeGenerated, 5m) | where p95 > 2000` and saving as Azure Monitor Alert.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `AppDependencies | where Target contains 'openai' | summarize p95=percentile(DurationMs, 95) by bin(TimeGenerated, 5m) | where p95 > 2000` and saving as Azure Monitor Alert.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Continuous Observability CI/CD Export Script (`export_monitoring_traces.py`)`, Writing `AppDependencies | where Target contains 'openai' | summarize p95=percentile(DurationMs, 95) by bin(TimeGenerated, 5m) | where p95 > 2000` and saving as Azure Monitor Alert. is the officially required syntax for `setting up KQL alert rule when p95 latency exceeds 2,000ms`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2951,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Adventure Works Core Hub` implementing `Log Analytics Table `AppDependencies` (`Target`, `DurationMs`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `handling rate limit (`429`) exception recording inside spans` (Implementation Task #51).",
    "question": "[MOD Coding Task #51] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Log Analytics Table `AppDependencies` (`Target`, `DurationMs`)` when implementing `handling rate limit (`429`) exception recording inside spans`?",
    "options": [
      "A) Writing `try: response = chat_client... except HttpResponseError as e: span.record_exception(e); span.set_status(Status(StatusCode.ERROR, str(e)))`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `try: response = chat_client... except HttpResponseError as e: span.record_exception(e); span.set_status(Status(StatusCode.ERROR, str(e)))`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Log Analytics Table `AppDependencies` (`Target`, `DurationMs`)`, Writing `try: response = chat_client... except HttpResponseError as e: span.record_exception(e); span.set_status(Status(StatusCode.ERROR, str(e)))`. is the officially required syntax for `handling rate limit (`429`) exception recording inside spans`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2952,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Contoso Health AI` implementing `Log Analytics Table `AppTraces` (`Message`, `SeverityLevel`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `handling rate limit (`429`) exception recording inside spans` (Implementation Task #52).",
    "question": "[MOD Coding Task #52] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Log Analytics Table `AppTraces` (`Message`, `SeverityLevel`)` for `handling rate limit (`429`) exception recording inside spans`? (Select three)",
    "options": [
      "A) Writing `try: response = chat_client... except HttpResponseError as e: span.record_exception(e); span.set_status(Status(StatusCode.ERROR, str(e)))`.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Log Analytics Table `AppTraces` (`Message`, `SeverityLevel`)` for `handling rate limit (`429`) exception recording inside spans`, enterprise coding standards mandate: (1) Writing `try: response = chat_client... except HttpResponseError as e: span.record_exception(e); span.set_status(Status(StatusCode.ERROR, str(e)))`., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2953,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Fabrikam Logistics Agent` implementing `KQL `summarize p95=percentile(DurationMs, 95) by bin(TimeGenerated, 1h)``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `handling rate limit (`429`) exception recording inside spans` (Implementation Task #53).",
    "question": "[MOD Coding Task #53] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `KQL `summarize p95=percentile(DurationMs, 95) by bin(TimeGenerated, 1h)`` when implementing `handling rate limit (`429`) exception recording inside spans`?",
    "options": [
      "A) Writing `try: response = chat_client... except HttpResponseError as e: span.record_exception(e); span.set_status(Status(StatusCode.ERROR, str(e)))`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `try: response = chat_client... except HttpResponseError as e: span.record_exception(e); span.set_status(Status(StatusCode.ERROR, str(e)))`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `KQL `summarize p95=percentile(DurationMs, 95) by bin(TimeGenerated, 1h)``, Writing `try: response = chat_client... except HttpResponseError as e: span.record_exception(e); span.set_status(Status(StatusCode.ERROR, str(e)))`. is the officially required syntax for `handling rate limit (`429`) exception recording inside spans`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2954,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Trey Research Lab` implementing `KQL `parse Message with * 'Tokens:' Tokens:int *` String Extraction`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `handling rate limit (`429`) exception recording inside spans` (Implementation Task #54).",
    "question": "[MOD Coding Task #54] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `KQL `parse Message with * 'Tokens:' Tokens:int *` String Extraction` when implementing `handling rate limit (`429`) exception recording inside spans`?",
    "options": [
      "A) Writing `try: response = chat_client... except HttpResponseError as e: span.record_exception(e); span.set_status(Status(StatusCode.ERROR, str(e)))`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `try: response = chat_client... except HttpResponseError as e: span.record_exception(e); span.set_status(Status(StatusCode.ERROR, str(e)))`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `KQL `parse Message with * 'Tokens:' Tokens:int *` String Extraction`, Writing `try: response = chat_client... except HttpResponseError as e: span.record_exception(e); span.set_status(Status(StatusCode.ERROR, str(e)))`. is the officially required syntax for `handling rate limit (`429`) exception recording inside spans`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2955,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Northwind Traders Bot` implementing `KQL `join kind=inner (AppDependencies) on OperationId` Correlation`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `handling rate limit (`429`) exception recording inside spans` (Implementation Task #55).",
    "question": "[MOD Coding Task #55] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `KQL `join kind=inner (AppDependencies) on OperationId` Correlation` when implementing `handling rate limit (`429`) exception recording inside spans`?",
    "options": [
      "A) Writing `try: response = chat_client... except HttpResponseError as e: span.record_exception(e); span.set_status(Status(StatusCode.ERROR, str(e)))`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `try: response = chat_client... except HttpResponseError as e: span.record_exception(e); span.set_status(Status(StatusCode.ERROR, str(e)))`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `KQL `join kind=inner (AppDependencies) on OperationId` Correlation`, Writing `try: response = chat_client... except HttpResponseError as e: span.record_exception(e); span.set_status(Status(StatusCode.ERROR, str(e)))`. is the officially required syntax for `handling rate limit (`429`) exception recording inside spans`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2956,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Woodgrove Bank Virtual Assistant` implementing `OpenTelemetry `@tracer.start_as_current_span('InferenceTurn')``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `handling rate limit (`429`) exception recording inside spans` (Implementation Task #56).",
    "question": "[MOD Coding Task #56] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `OpenTelemetry `@tracer.start_as_current_span('InferenceTurn')`` for `handling rate limit (`429`) exception recording inside spans`? (Select three)",
    "options": [
      "A) Writing `try: response = chat_client... except HttpResponseError as e: span.record_exception(e); span.set_status(Status(StatusCode.ERROR, str(e)))`.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `OpenTelemetry `@tracer.start_as_current_span('InferenceTurn')`` for `handling rate limit (`429`) exception recording inside spans`, enterprise coding standards mandate: (1) Writing `try: response = chat_client... except HttpResponseError as e: span.record_exception(e); span.set_status(Status(StatusCode.ERROR, str(e)))`., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2957,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Litware Legal Evaluator` implementing `OpenTelemetry Span Attributes (`span.set_attribute('ai.model', 'gpt-4o')`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `handling rate limit (`429`) exception recording inside spans` (Implementation Task #57).",
    "question": "[MOD Coding Task #57] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `OpenTelemetry Span Attributes (`span.set_attribute('ai.model', 'gpt-4o')`)` when implementing `handling rate limit (`429`) exception recording inside spans`?",
    "options": [
      "A) Writing `try: response = chat_client... except HttpResponseError as e: span.record_exception(e); span.set_status(Status(StatusCode.ERROR, str(e)))`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `try: response = chat_client... except HttpResponseError as e: span.record_exception(e); span.set_status(Status(StatusCode.ERROR, str(e)))`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `OpenTelemetry Span Attributes (`span.set_attribute('ai.model', 'gpt-4o')`)`, Writing `try: response = chat_client... except HttpResponseError as e: span.record_exception(e); span.set_status(Status(StatusCode.ERROR, str(e)))`. is the officially required syntax for `handling rate limit (`429`) exception recording inside spans`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2958,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `A.Datum Retail Copilot` implementing `Azure Monitor Application Insights Connection String Configuration`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `handling rate limit (`429`) exception recording inside spans` (Implementation Task #58).",
    "question": "[MOD Coding Task #58] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Azure Monitor Application Insights Connection String Configuration` when implementing `handling rate limit (`429`) exception recording inside spans`?",
    "options": [
      "A) Writing `try: response = chat_client... except HttpResponseError as e: span.record_exception(e); span.set_status(Status(StatusCode.ERROR, str(e)))`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `try: response = chat_client... except HttpResponseError as e: span.record_exception(e); span.set_status(Status(StatusCode.ERROR, str(e)))`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Azure Monitor Application Insights Connection String Configuration`, Writing `try: response = chat_client... except HttpResponseError as e: span.record_exception(e); span.set_status(Status(StatusCode.ERROR, str(e)))`. is the officially required syntax for `handling rate limit (`429`) exception recording inside spans`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2959,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Alpine Ski Field Technician` implementing `Azure Portal Log Analytics Indexing Lag & `ingestion_time()``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `handling rate limit (`429`) exception recording inside spans` (Implementation Task #59).",
    "question": "[MOD Coding Task #59] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Azure Portal Log Analytics Indexing Lag & `ingestion_time()`` when implementing `handling rate limit (`429`) exception recording inside spans`?",
    "options": [
      "A) Writing `try: response = chat_client... except HttpResponseError as e: span.record_exception(e); span.set_status(Status(StatusCode.ERROR, str(e)))`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `try: response = chat_client... except HttpResponseError as e: span.record_exception(e); span.set_status(Status(StatusCode.ERROR, str(e)))`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Azure Portal Log Analytics Indexing Lag & `ingestion_time()``, Writing `try: response = chat_client... except HttpResponseError as e: span.record_exception(e); span.set_status(Status(StatusCode.ERROR, str(e)))`. is the officially required syntax for `handling rate limit (`429`) exception recording inside spans`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2960,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Tailwind Traders Multi-Agent` implementing `Continuous Observability CI/CD Export Script (`export_monitoring_traces.py`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `handling rate limit (`429`) exception recording inside spans` (Implementation Task #60).",
    "question": "[MOD Coding Task #60] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Continuous Observability CI/CD Export Script (`export_monitoring_traces.py`)` for `handling rate limit (`429`) exception recording inside spans`? (Select three)",
    "options": [
      "A) Writing `try: response = chat_client... except HttpResponseError as e: span.record_exception(e); span.set_status(Status(StatusCode.ERROR, str(e)))`.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Continuous Observability CI/CD Export Script (`export_monitoring_traces.py`)` for `handling rate limit (`429`) exception recording inside spans`, enterprise coding standards mandate: (1) Writing `try: response = chat_client... except HttpResponseError as e: span.record_exception(e); span.set_status(Status(StatusCode.ERROR, str(e)))`., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2961,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Adventure Works Core Hub` implementing `Log Analytics Table `AppDependencies` (`Target`, `DurationMs`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `monitoring AI Search vector retrieval latency vs LLM generation latency` (Implementation Task #61).",
    "question": "[MOD Coding Task #61] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Log Analytics Table `AppDependencies` (`Target`, `DurationMs`)` when implementing `monitoring AI Search vector retrieval latency vs LLM generation latency`?",
    "options": [
      "A) Writing `AppDependencies | where Target in ('search.windows.net', 'openai.azure.com') | summarize AvgDuration = avg(DurationMs) by Target, bin(TimeGenerated, 15m)`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `AppDependencies | where Target in ('search.windows.net', 'openai.azure.com') | summarize AvgDuration = avg(DurationMs) by Target, bin(TimeGenerated, 15m)`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Log Analytics Table `AppDependencies` (`Target`, `DurationMs`)`, Writing `AppDependencies | where Target in ('search.windows.net', 'openai.azure.com') | summarize AvgDuration = avg(DurationMs) by Target, bin(TimeGenerated, 15m)`. is the officially required syntax for `monitoring AI Search vector retrieval latency vs LLM generation latency`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2962,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Contoso Health AI` implementing `Log Analytics Table `AppTraces` (`Message`, `SeverityLevel`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `monitoring AI Search vector retrieval latency vs LLM generation latency` (Implementation Task #62).",
    "question": "[MOD Coding Task #62] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Log Analytics Table `AppTraces` (`Message`, `SeverityLevel`)` when implementing `monitoring AI Search vector retrieval latency vs LLM generation latency`?",
    "options": [
      "A) Writing `AppDependencies | where Target in ('search.windows.net', 'openai.azure.com') | summarize AvgDuration = avg(DurationMs) by Target, bin(TimeGenerated, 15m)`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `AppDependencies | where Target in ('search.windows.net', 'openai.azure.com') | summarize AvgDuration = avg(DurationMs) by Target, bin(TimeGenerated, 15m)`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Log Analytics Table `AppTraces` (`Message`, `SeverityLevel`)`, Writing `AppDependencies | where Target in ('search.windows.net', 'openai.azure.com') | summarize AvgDuration = avg(DurationMs) by Target, bin(TimeGenerated, 15m)`. is the officially required syntax for `monitoring AI Search vector retrieval latency vs LLM generation latency`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2963,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Fabrikam Logistics Agent` implementing `KQL `summarize p95=percentile(DurationMs, 95) by bin(TimeGenerated, 1h)``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `monitoring AI Search vector retrieval latency vs LLM generation latency` (Implementation Task #63).",
    "question": "[MOD Coding Task #63] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `KQL `summarize p95=percentile(DurationMs, 95) by bin(TimeGenerated, 1h)`` when implementing `monitoring AI Search vector retrieval latency vs LLM generation latency`?",
    "options": [
      "A) Writing `AppDependencies | where Target in ('search.windows.net', 'openai.azure.com') | summarize AvgDuration = avg(DurationMs) by Target, bin(TimeGenerated, 15m)`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `AppDependencies | where Target in ('search.windows.net', 'openai.azure.com') | summarize AvgDuration = avg(DurationMs) by Target, bin(TimeGenerated, 15m)`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `KQL `summarize p95=percentile(DurationMs, 95) by bin(TimeGenerated, 1h)``, Writing `AppDependencies | where Target in ('search.windows.net', 'openai.azure.com') | summarize AvgDuration = avg(DurationMs) by Target, bin(TimeGenerated, 15m)`. is the officially required syntax for `monitoring AI Search vector retrieval latency vs LLM generation latency`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2964,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Trey Research Lab` implementing `KQL `parse Message with * 'Tokens:' Tokens:int *` String Extraction`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `monitoring AI Search vector retrieval latency vs LLM generation latency` (Implementation Task #64).",
    "question": "[MOD Coding Task #64] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `KQL `parse Message with * 'Tokens:' Tokens:int *` String Extraction` for `monitoring AI Search vector retrieval latency vs LLM generation latency`? (Select three)",
    "options": [
      "A) Writing `AppDependencies | where Target in ('search.windows.net', 'openai.azure.com') | summarize AvgDuration = avg(DurationMs) by Target, bin(TimeGenerated, 15m)`.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `KQL `parse Message with * 'Tokens:' Tokens:int *` String Extraction` for `monitoring AI Search vector retrieval latency vs LLM generation latency`, enterprise coding standards mandate: (1) Writing `AppDependencies | where Target in ('search.windows.net', 'openai.azure.com') | summarize AvgDuration = avg(DurationMs) by Target, bin(TimeGenerated, 15m)`., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2965,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Northwind Traders Bot` implementing `KQL `join kind=inner (AppDependencies) on OperationId` Correlation`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `monitoring AI Search vector retrieval latency vs LLM generation latency` (Implementation Task #65).",
    "question": "[MOD Coding Task #65] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `KQL `join kind=inner (AppDependencies) on OperationId` Correlation` when implementing `monitoring AI Search vector retrieval latency vs LLM generation latency`?",
    "options": [
      "A) Writing `AppDependencies | where Target in ('search.windows.net', 'openai.azure.com') | summarize AvgDuration = avg(DurationMs) by Target, bin(TimeGenerated, 15m)`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `AppDependencies | where Target in ('search.windows.net', 'openai.azure.com') | summarize AvgDuration = avg(DurationMs) by Target, bin(TimeGenerated, 15m)`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `KQL `join kind=inner (AppDependencies) on OperationId` Correlation`, Writing `AppDependencies | where Target in ('search.windows.net', 'openai.azure.com') | summarize AvgDuration = avg(DurationMs) by Target, bin(TimeGenerated, 15m)`. is the officially required syntax for `monitoring AI Search vector retrieval latency vs LLM generation latency`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2966,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Woodgrove Bank Virtual Assistant` implementing `OpenTelemetry `@tracer.start_as_current_span('InferenceTurn')``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `monitoring AI Search vector retrieval latency vs LLM generation latency` (Implementation Task #66).",
    "question": "[MOD Coding Task #66] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `OpenTelemetry `@tracer.start_as_current_span('InferenceTurn')`` when implementing `monitoring AI Search vector retrieval latency vs LLM generation latency`?",
    "options": [
      "A) Writing `AppDependencies | where Target in ('search.windows.net', 'openai.azure.com') | summarize AvgDuration = avg(DurationMs) by Target, bin(TimeGenerated, 15m)`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `AppDependencies | where Target in ('search.windows.net', 'openai.azure.com') | summarize AvgDuration = avg(DurationMs) by Target, bin(TimeGenerated, 15m)`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `OpenTelemetry `@tracer.start_as_current_span('InferenceTurn')``, Writing `AppDependencies | where Target in ('search.windows.net', 'openai.azure.com') | summarize AvgDuration = avg(DurationMs) by Target, bin(TimeGenerated, 15m)`. is the officially required syntax for `monitoring AI Search vector retrieval latency vs LLM generation latency`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2967,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Litware Legal Evaluator` implementing `OpenTelemetry Span Attributes (`span.set_attribute('ai.model', 'gpt-4o')`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `monitoring AI Search vector retrieval latency vs LLM generation latency` (Implementation Task #67).",
    "question": "[MOD Coding Task #67] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `OpenTelemetry Span Attributes (`span.set_attribute('ai.model', 'gpt-4o')`)` when implementing `monitoring AI Search vector retrieval latency vs LLM generation latency`?",
    "options": [
      "A) Writing `AppDependencies | where Target in ('search.windows.net', 'openai.azure.com') | summarize AvgDuration = avg(DurationMs) by Target, bin(TimeGenerated, 15m)`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `AppDependencies | where Target in ('search.windows.net', 'openai.azure.com') | summarize AvgDuration = avg(DurationMs) by Target, bin(TimeGenerated, 15m)`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `OpenTelemetry Span Attributes (`span.set_attribute('ai.model', 'gpt-4o')`)`, Writing `AppDependencies | where Target in ('search.windows.net', 'openai.azure.com') | summarize AvgDuration = avg(DurationMs) by Target, bin(TimeGenerated, 15m)`. is the officially required syntax for `monitoring AI Search vector retrieval latency vs LLM generation latency`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2968,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `A.Datum Retail Copilot` implementing `Azure Monitor Application Insights Connection String Configuration`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `monitoring AI Search vector retrieval latency vs LLM generation latency` (Implementation Task #68).",
    "question": "[MOD Coding Task #68] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Azure Monitor Application Insights Connection String Configuration` for `monitoring AI Search vector retrieval latency vs LLM generation latency`? (Select three)",
    "options": [
      "A) Writing `AppDependencies | where Target in ('search.windows.net', 'openai.azure.com') | summarize AvgDuration = avg(DurationMs) by Target, bin(TimeGenerated, 15m)`.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Azure Monitor Application Insights Connection String Configuration` for `monitoring AI Search vector retrieval latency vs LLM generation latency`, enterprise coding standards mandate: (1) Writing `AppDependencies | where Target in ('search.windows.net', 'openai.azure.com') | summarize AvgDuration = avg(DurationMs) by Target, bin(TimeGenerated, 15m)`., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2969,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Alpine Ski Field Technician` implementing `Azure Portal Log Analytics Indexing Lag & `ingestion_time()``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `monitoring AI Search vector retrieval latency vs LLM generation latency` (Implementation Task #69).",
    "question": "[MOD Coding Task #69] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Azure Portal Log Analytics Indexing Lag & `ingestion_time()`` when implementing `monitoring AI Search vector retrieval latency vs LLM generation latency`?",
    "options": [
      "A) Writing `AppDependencies | where Target in ('search.windows.net', 'openai.azure.com') | summarize AvgDuration = avg(DurationMs) by Target, bin(TimeGenerated, 15m)`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `AppDependencies | where Target in ('search.windows.net', 'openai.azure.com') | summarize AvgDuration = avg(DurationMs) by Target, bin(TimeGenerated, 15m)`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Azure Portal Log Analytics Indexing Lag & `ingestion_time()``, Writing `AppDependencies | where Target in ('search.windows.net', 'openai.azure.com') | summarize AvgDuration = avg(DurationMs) by Target, bin(TimeGenerated, 15m)`. is the officially required syntax for `monitoring AI Search vector retrieval latency vs LLM generation latency`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2970,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Tailwind Traders Multi-Agent` implementing `Continuous Observability CI/CD Export Script (`export_monitoring_traces.py`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `monitoring AI Search vector retrieval latency vs LLM generation latency` (Implementation Task #70).",
    "question": "[MOD Coding Task #70] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Continuous Observability CI/CD Export Script (`export_monitoring_traces.py`)` when implementing `monitoring AI Search vector retrieval latency vs LLM generation latency`?",
    "options": [
      "A) Writing `AppDependencies | where Target in ('search.windows.net', 'openai.azure.com') | summarize AvgDuration = avg(DurationMs) by Target, bin(TimeGenerated, 15m)`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `AppDependencies | where Target in ('search.windows.net', 'openai.azure.com') | summarize AvgDuration = avg(DurationMs) by Target, bin(TimeGenerated, 15m)`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Continuous Observability CI/CD Export Script (`export_monitoring_traces.py`)`, Writing `AppDependencies | where Target in ('search.windows.net', 'openai.azure.com') | summarize AvgDuration = avg(DurationMs) by Target, bin(TimeGenerated, 15m)`. is the officially required syntax for `monitoring AI Search vector retrieval latency vs LLM generation latency`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2971,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Adventure Works Core Hub` implementing `Log Analytics Table `AppDependencies` (`Target`, `DurationMs`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `configuring diagnostic log settings via Azure CLI for AI Project` (Implementation Task #71).",
    "question": "[MOD Coding Task #71] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Log Analytics Table `AppDependencies` (`Target`, `DurationMs`)` when implementing `configuring diagnostic log settings via Azure CLI for AI Project`?",
    "options": [
      "A) Executing `az monitor diagnostic-settings create --name 'ai-project-diags' --resource aiProject.id --workspace logAnalytics.id --logs '[{\"category\": \"AgentTelemetry\", \"enabled\": true}]'`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Executing `az monitor diagnostic-settings create --name 'ai-project-diags' --resource aiProject.id --workspace logAnalytics.id --logs '[{\"category\": \"AgentTelemetry\", \"enabled\": true}]'`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Log Analytics Table `AppDependencies` (`Target`, `DurationMs`)`, Executing `az monitor diagnostic-settings create --name 'ai-project-diags' --resource aiProject.id --workspace logAnalytics.id --logs '[{\"category\": \"AgentTelemetry\", \"enabled\": true}]'`. is the officially required syntax for `configuring diagnostic log settings via Azure CLI for AI Project`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2972,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Contoso Health AI` implementing `Log Analytics Table `AppTraces` (`Message`, `SeverityLevel`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `configuring diagnostic log settings via Azure CLI for AI Project` (Implementation Task #72).",
    "question": "[MOD Coding Task #72] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Log Analytics Table `AppTraces` (`Message`, `SeverityLevel`)` for `configuring diagnostic log settings via Azure CLI for AI Project`? (Select three)",
    "options": [
      "A) Executing `az monitor diagnostic-settings create --name 'ai-project-diags' --resource aiProject.id --workspace logAnalytics.id --logs '[{\"category\": \"AgentTelemetry\", \"enabled\": true}]'`.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Log Analytics Table `AppTraces` (`Message`, `SeverityLevel`)` for `configuring diagnostic log settings via Azure CLI for AI Project`, enterprise coding standards mandate: (1) Executing `az monitor diagnostic-settings create --name 'ai-project-diags' --resource aiProject.id --workspace logAnalytics.id --logs '[{\"category\": \"AgentTelemetry\", \"enabled\": true}]'`., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2973,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Fabrikam Logistics Agent` implementing `KQL `summarize p95=percentile(DurationMs, 95) by bin(TimeGenerated, 1h)``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `configuring diagnostic log settings via Azure CLI for AI Project` (Implementation Task #73).",
    "question": "[MOD Coding Task #73] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `KQL `summarize p95=percentile(DurationMs, 95) by bin(TimeGenerated, 1h)`` when implementing `configuring diagnostic log settings via Azure CLI for AI Project`?",
    "options": [
      "A) Executing `az monitor diagnostic-settings create --name 'ai-project-diags' --resource aiProject.id --workspace logAnalytics.id --logs '[{\"category\": \"AgentTelemetry\", \"enabled\": true}]'`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Executing `az monitor diagnostic-settings create --name 'ai-project-diags' --resource aiProject.id --workspace logAnalytics.id --logs '[{\"category\": \"AgentTelemetry\", \"enabled\": true}]'`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `KQL `summarize p95=percentile(DurationMs, 95) by bin(TimeGenerated, 1h)``, Executing `az monitor diagnostic-settings create --name 'ai-project-diags' --resource aiProject.id --workspace logAnalytics.id --logs '[{\"category\": \"AgentTelemetry\", \"enabled\": true}]'`. is the officially required syntax for `configuring diagnostic log settings via Azure CLI for AI Project`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2974,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Trey Research Lab` implementing `KQL `parse Message with * 'Tokens:' Tokens:int *` String Extraction`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `configuring diagnostic log settings via Azure CLI for AI Project` (Implementation Task #74).",
    "question": "[MOD Coding Task #74] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `KQL `parse Message with * 'Tokens:' Tokens:int *` String Extraction` when implementing `configuring diagnostic log settings via Azure CLI for AI Project`?",
    "options": [
      "A) Executing `az monitor diagnostic-settings create --name 'ai-project-diags' --resource aiProject.id --workspace logAnalytics.id --logs '[{\"category\": \"AgentTelemetry\", \"enabled\": true}]'`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Executing `az monitor diagnostic-settings create --name 'ai-project-diags' --resource aiProject.id --workspace logAnalytics.id --logs '[{\"category\": \"AgentTelemetry\", \"enabled\": true}]'`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `KQL `parse Message with * 'Tokens:' Tokens:int *` String Extraction`, Executing `az monitor diagnostic-settings create --name 'ai-project-diags' --resource aiProject.id --workspace logAnalytics.id --logs '[{\"category\": \"AgentTelemetry\", \"enabled\": true}]'`. is the officially required syntax for `configuring diagnostic log settings via Azure CLI for AI Project`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2975,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Northwind Traders Bot` implementing `KQL `join kind=inner (AppDependencies) on OperationId` Correlation`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `configuring diagnostic log settings via Azure CLI for AI Project` (Implementation Task #75).",
    "question": "[MOD Coding Task #75] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `KQL `join kind=inner (AppDependencies) on OperationId` Correlation` when implementing `configuring diagnostic log settings via Azure CLI for AI Project`?",
    "options": [
      "A) Executing `az monitor diagnostic-settings create --name 'ai-project-diags' --resource aiProject.id --workspace logAnalytics.id --logs '[{\"category\": \"AgentTelemetry\", \"enabled\": true}]'`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Executing `az monitor diagnostic-settings create --name 'ai-project-diags' --resource aiProject.id --workspace logAnalytics.id --logs '[{\"category\": \"AgentTelemetry\", \"enabled\": true}]'`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `KQL `join kind=inner (AppDependencies) on OperationId` Correlation`, Executing `az monitor diagnostic-settings create --name 'ai-project-diags' --resource aiProject.id --workspace logAnalytics.id --logs '[{\"category\": \"AgentTelemetry\", \"enabled\": true}]'`. is the officially required syntax for `configuring diagnostic log settings via Azure CLI for AI Project`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2976,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Woodgrove Bank Virtual Assistant` implementing `OpenTelemetry `@tracer.start_as_current_span('InferenceTurn')``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `configuring diagnostic log settings via Azure CLI for AI Project` (Implementation Task #76).",
    "question": "[MOD Coding Task #76] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `OpenTelemetry `@tracer.start_as_current_span('InferenceTurn')`` for `configuring diagnostic log settings via Azure CLI for AI Project`? (Select three)",
    "options": [
      "A) Executing `az monitor diagnostic-settings create --name 'ai-project-diags' --resource aiProject.id --workspace logAnalytics.id --logs '[{\"category\": \"AgentTelemetry\", \"enabled\": true}]'`.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `OpenTelemetry `@tracer.start_as_current_span('InferenceTurn')`` for `configuring diagnostic log settings via Azure CLI for AI Project`, enterprise coding standards mandate: (1) Executing `az monitor diagnostic-settings create --name 'ai-project-diags' --resource aiProject.id --workspace logAnalytics.id --logs '[{\"category\": \"AgentTelemetry\", \"enabled\": true}]'`., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2977,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Litware Legal Evaluator` implementing `OpenTelemetry Span Attributes (`span.set_attribute('ai.model', 'gpt-4o')`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `configuring diagnostic log settings via Azure CLI for AI Project` (Implementation Task #77).",
    "question": "[MOD Coding Task #77] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `OpenTelemetry Span Attributes (`span.set_attribute('ai.model', 'gpt-4o')`)` when implementing `configuring diagnostic log settings via Azure CLI for AI Project`?",
    "options": [
      "A) Executing `az monitor diagnostic-settings create --name 'ai-project-diags' --resource aiProject.id --workspace logAnalytics.id --logs '[{\"category\": \"AgentTelemetry\", \"enabled\": true}]'`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Executing `az monitor diagnostic-settings create --name 'ai-project-diags' --resource aiProject.id --workspace logAnalytics.id --logs '[{\"category\": \"AgentTelemetry\", \"enabled\": true}]'`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `OpenTelemetry Span Attributes (`span.set_attribute('ai.model', 'gpt-4o')`)`, Executing `az monitor diagnostic-settings create --name 'ai-project-diags' --resource aiProject.id --workspace logAnalytics.id --logs '[{\"category\": \"AgentTelemetry\", \"enabled\": true}]'`. is the officially required syntax for `configuring diagnostic log settings via Azure CLI for AI Project`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2978,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `A.Datum Retail Copilot` implementing `Azure Monitor Application Insights Connection String Configuration`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `configuring diagnostic log settings via Azure CLI for AI Project` (Implementation Task #78).",
    "question": "[MOD Coding Task #78] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Azure Monitor Application Insights Connection String Configuration` when implementing `configuring diagnostic log settings via Azure CLI for AI Project`?",
    "options": [
      "A) Executing `az monitor diagnostic-settings create --name 'ai-project-diags' --resource aiProject.id --workspace logAnalytics.id --logs '[{\"category\": \"AgentTelemetry\", \"enabled\": true}]'`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Executing `az monitor diagnostic-settings create --name 'ai-project-diags' --resource aiProject.id --workspace logAnalytics.id --logs '[{\"category\": \"AgentTelemetry\", \"enabled\": true}]'`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Azure Monitor Application Insights Connection String Configuration`, Executing `az monitor diagnostic-settings create --name 'ai-project-diags' --resource aiProject.id --workspace logAnalytics.id --logs '[{\"category\": \"AgentTelemetry\", \"enabled\": true}]'`. is the officially required syntax for `configuring diagnostic log settings via Azure CLI for AI Project`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2979,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Alpine Ski Field Technician` implementing `Azure Portal Log Analytics Indexing Lag & `ingestion_time()``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `configuring diagnostic log settings via Azure CLI for AI Project` (Implementation Task #79).",
    "question": "[MOD Coding Task #79] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Azure Portal Log Analytics Indexing Lag & `ingestion_time()`` when implementing `configuring diagnostic log settings via Azure CLI for AI Project`?",
    "options": [
      "A) Executing `az monitor diagnostic-settings create --name 'ai-project-diags' --resource aiProject.id --workspace logAnalytics.id --logs '[{\"category\": \"AgentTelemetry\", \"enabled\": true}]'`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Executing `az monitor diagnostic-settings create --name 'ai-project-diags' --resource aiProject.id --workspace logAnalytics.id --logs '[{\"category\": \"AgentTelemetry\", \"enabled\": true}]'`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Azure Portal Log Analytics Indexing Lag & `ingestion_time()``, Executing `az monitor diagnostic-settings create --name 'ai-project-diags' --resource aiProject.id --workspace logAnalytics.id --logs '[{\"category\": \"AgentTelemetry\", \"enabled\": true}]'`. is the officially required syntax for `configuring diagnostic log settings via Azure CLI for AI Project`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2980,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Tailwind Traders Multi-Agent` implementing `Continuous Observability CI/CD Export Script (`export_monitoring_traces.py`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `configuring diagnostic log settings via Azure CLI for AI Project` (Implementation Task #80).",
    "question": "[MOD Coding Task #80] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Continuous Observability CI/CD Export Script (`export_monitoring_traces.py`)` for `configuring diagnostic log settings via Azure CLI for AI Project`? (Select three)",
    "options": [
      "A) Executing `az monitor diagnostic-settings create --name 'ai-project-diags' --resource aiProject.id --workspace logAnalytics.id --logs '[{\"category\": \"AgentTelemetry\", \"enabled\": true}]'`.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Continuous Observability CI/CD Export Script (`export_monitoring_traces.py`)` for `configuring diagnostic log settings via Azure CLI for AI Project`, enterprise coding standards mandate: (1) Executing `az monitor diagnostic-settings create --name 'ai-project-diags' --resource aiProject.id --workspace logAnalytics.id --logs '[{\"category\": \"AgentTelemetry\", \"enabled\": true}]'`., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2981,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Adventure Works Core Hub` implementing `Log Analytics Table `AppDependencies` (`Target`, `DurationMs`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `building an automated KQL report generator (`run_monitoring.py`)` (Implementation Task #81).",
    "question": "[MOD Coding Task #81] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Log Analytics Table `AppDependencies` (`Target`, `DurationMs`)` when implementing `building an automated KQL report generator (`run_monitoring.py`)`?",
    "options": [
      "A) Writing a Python script `run_monitoring.py` that executes 5 KQL queries via `LogsQueryClient`, formats results into `LAB_04_MONITORING_AND_TRACING_REPORT.md`, and commits to git.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing a Python script `run_monitoring.py` that executes 5 KQL queries via `LogsQueryClient`, formats results into `LAB_04_MONITORING_AND_TRACING_REPORT.md`, and commits to git.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Log Analytics Table `AppDependencies` (`Target`, `DurationMs`)`, Writing a Python script `run_monitoring.py` that executes 5 KQL queries via `LogsQueryClient`, formats results into `LAB_04_MONITORING_AND_TRACING_REPORT.md`, and commits to git. is the officially required syntax for `building an automated KQL report generator (`run_monitoring.py`)`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2982,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Contoso Health AI` implementing `Log Analytics Table `AppTraces` (`Message`, `SeverityLevel`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `building an automated KQL report generator (`run_monitoring.py`)` (Implementation Task #82).",
    "question": "[MOD Coding Task #82] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Log Analytics Table `AppTraces` (`Message`, `SeverityLevel`)` when implementing `building an automated KQL report generator (`run_monitoring.py`)`?",
    "options": [
      "A) Writing a Python script `run_monitoring.py` that executes 5 KQL queries via `LogsQueryClient`, formats results into `LAB_04_MONITORING_AND_TRACING_REPORT.md`, and commits to git.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing a Python script `run_monitoring.py` that executes 5 KQL queries via `LogsQueryClient`, formats results into `LAB_04_MONITORING_AND_TRACING_REPORT.md`, and commits to git.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Log Analytics Table `AppTraces` (`Message`, `SeverityLevel`)`, Writing a Python script `run_monitoring.py` that executes 5 KQL queries via `LogsQueryClient`, formats results into `LAB_04_MONITORING_AND_TRACING_REPORT.md`, and commits to git. is the officially required syntax for `building an automated KQL report generator (`run_monitoring.py`)`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2983,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Fabrikam Logistics Agent` implementing `KQL `summarize p95=percentile(DurationMs, 95) by bin(TimeGenerated, 1h)``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `building an automated KQL report generator (`run_monitoring.py`)` (Implementation Task #83).",
    "question": "[MOD Coding Task #83] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `KQL `summarize p95=percentile(DurationMs, 95) by bin(TimeGenerated, 1h)`` when implementing `building an automated KQL report generator (`run_monitoring.py`)`?",
    "options": [
      "A) Writing a Python script `run_monitoring.py` that executes 5 KQL queries via `LogsQueryClient`, formats results into `LAB_04_MONITORING_AND_TRACING_REPORT.md`, and commits to git.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing a Python script `run_monitoring.py` that executes 5 KQL queries via `LogsQueryClient`, formats results into `LAB_04_MONITORING_AND_TRACING_REPORT.md`, and commits to git.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `KQL `summarize p95=percentile(DurationMs, 95) by bin(TimeGenerated, 1h)``, Writing a Python script `run_monitoring.py` that executes 5 KQL queries via `LogsQueryClient`, formats results into `LAB_04_MONITORING_AND_TRACING_REPORT.md`, and commits to git. is the officially required syntax for `building an automated KQL report generator (`run_monitoring.py`)`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2984,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Trey Research Lab` implementing `KQL `parse Message with * 'Tokens:' Tokens:int *` String Extraction`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `building an automated KQL report generator (`run_monitoring.py`)` (Implementation Task #84).",
    "question": "[MOD Coding Task #84] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `KQL `parse Message with * 'Tokens:' Tokens:int *` String Extraction` for `building an automated KQL report generator (`run_monitoring.py`)`? (Select three)",
    "options": [
      "A) Writing a Python script `run_monitoring.py` that executes 5 KQL queries via `LogsQueryClient`, formats results into `LAB_04_MONITORING_AND_TRACING_REPORT.md`, and commits to git.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `KQL `parse Message with * 'Tokens:' Tokens:int *` String Extraction` for `building an automated KQL report generator (`run_monitoring.py`)`, enterprise coding standards mandate: (1) Writing a Python script `run_monitoring.py` that executes 5 KQL queries via `LogsQueryClient`, formats results into `LAB_04_MONITORING_AND_TRACING_REPORT.md`, and commits to git., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2985,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Northwind Traders Bot` implementing `KQL `join kind=inner (AppDependencies) on OperationId` Correlation`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `building an automated KQL report generator (`run_monitoring.py`)` (Implementation Task #85).",
    "question": "[MOD Coding Task #85] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `KQL `join kind=inner (AppDependencies) on OperationId` Correlation` when implementing `building an automated KQL report generator (`run_monitoring.py`)`?",
    "options": [
      "A) Writing a Python script `run_monitoring.py` that executes 5 KQL queries via `LogsQueryClient`, formats results into `LAB_04_MONITORING_AND_TRACING_REPORT.md`, and commits to git.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing a Python script `run_monitoring.py` that executes 5 KQL queries via `LogsQueryClient`, formats results into `LAB_04_MONITORING_AND_TRACING_REPORT.md`, and commits to git.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `KQL `join kind=inner (AppDependencies) on OperationId` Correlation`, Writing a Python script `run_monitoring.py` that executes 5 KQL queries via `LogsQueryClient`, formats results into `LAB_04_MONITORING_AND_TRACING_REPORT.md`, and commits to git. is the officially required syntax for `building an automated KQL report generator (`run_monitoring.py`)`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2986,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Woodgrove Bank Virtual Assistant` implementing `OpenTelemetry `@tracer.start_as_current_span('InferenceTurn')``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `building an automated KQL report generator (`run_monitoring.py`)` (Implementation Task #86).",
    "question": "[MOD Coding Task #86] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `OpenTelemetry `@tracer.start_as_current_span('InferenceTurn')`` when implementing `building an automated KQL report generator (`run_monitoring.py`)`?",
    "options": [
      "A) Writing a Python script `run_monitoring.py` that executes 5 KQL queries via `LogsQueryClient`, formats results into `LAB_04_MONITORING_AND_TRACING_REPORT.md`, and commits to git.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing a Python script `run_monitoring.py` that executes 5 KQL queries via `LogsQueryClient`, formats results into `LAB_04_MONITORING_AND_TRACING_REPORT.md`, and commits to git.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `OpenTelemetry `@tracer.start_as_current_span('InferenceTurn')``, Writing a Python script `run_monitoring.py` that executes 5 KQL queries via `LogsQueryClient`, formats results into `LAB_04_MONITORING_AND_TRACING_REPORT.md`, and commits to git. is the officially required syntax for `building an automated KQL report generator (`run_monitoring.py`)`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2987,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Litware Legal Evaluator` implementing `OpenTelemetry Span Attributes (`span.set_attribute('ai.model', 'gpt-4o')`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `building an automated KQL report generator (`run_monitoring.py`)` (Implementation Task #87).",
    "question": "[MOD Coding Task #87] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `OpenTelemetry Span Attributes (`span.set_attribute('ai.model', 'gpt-4o')`)` when implementing `building an automated KQL report generator (`run_monitoring.py`)`?",
    "options": [
      "A) Writing a Python script `run_monitoring.py` that executes 5 KQL queries via `LogsQueryClient`, formats results into `LAB_04_MONITORING_AND_TRACING_REPORT.md`, and commits to git.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing a Python script `run_monitoring.py` that executes 5 KQL queries via `LogsQueryClient`, formats results into `LAB_04_MONITORING_AND_TRACING_REPORT.md`, and commits to git.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `OpenTelemetry Span Attributes (`span.set_attribute('ai.model', 'gpt-4o')`)`, Writing a Python script `run_monitoring.py` that executes 5 KQL queries via `LogsQueryClient`, formats results into `LAB_04_MONITORING_AND_TRACING_REPORT.md`, and commits to git. is the officially required syntax for `building an automated KQL report generator (`run_monitoring.py`)`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2988,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `A.Datum Retail Copilot` implementing `Azure Monitor Application Insights Connection String Configuration`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `building an automated KQL report generator (`run_monitoring.py`)` (Implementation Task #88).",
    "question": "[MOD Coding Task #88] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Azure Monitor Application Insights Connection String Configuration` for `building an automated KQL report generator (`run_monitoring.py`)`? (Select three)",
    "options": [
      "A) Writing a Python script `run_monitoring.py` that executes 5 KQL queries via `LogsQueryClient`, formats results into `LAB_04_MONITORING_AND_TRACING_REPORT.md`, and commits to git.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Azure Monitor Application Insights Connection String Configuration` for `building an automated KQL report generator (`run_monitoring.py`)`, enterprise coding standards mandate: (1) Writing a Python script `run_monitoring.py` that executes 5 KQL queries via `LogsQueryClient`, formats results into `LAB_04_MONITORING_AND_TRACING_REPORT.md`, and commits to git., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2989,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Alpine Ski Field Technician` implementing `Azure Portal Log Analytics Indexing Lag & `ingestion_time()``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `building an automated KQL report generator (`run_monitoring.py`)` (Implementation Task #89).",
    "question": "[MOD Coding Task #89] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Azure Portal Log Analytics Indexing Lag & `ingestion_time()`` when implementing `building an automated KQL report generator (`run_monitoring.py`)`?",
    "options": [
      "A) Writing a Python script `run_monitoring.py` that executes 5 KQL queries via `LogsQueryClient`, formats results into `LAB_04_MONITORING_AND_TRACING_REPORT.md`, and commits to git.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing a Python script `run_monitoring.py` that executes 5 KQL queries via `LogsQueryClient`, formats results into `LAB_04_MONITORING_AND_TRACING_REPORT.md`, and commits to git.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Azure Portal Log Analytics Indexing Lag & `ingestion_time()``, Writing a Python script `run_monitoring.py` that executes 5 KQL queries via `LogsQueryClient`, formats results into `LAB_04_MONITORING_AND_TRACING_REPORT.md`, and commits to git. is the officially required syntax for `building an automated KQL report generator (`run_monitoring.py`)`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2990,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Tailwind Traders Multi-Agent` implementing `Continuous Observability CI/CD Export Script (`export_monitoring_traces.py`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `building an automated KQL report generator (`run_monitoring.py`)` (Implementation Task #90).",
    "question": "[MOD Coding Task #90] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Continuous Observability CI/CD Export Script (`export_monitoring_traces.py`)` when implementing `building an automated KQL report generator (`run_monitoring.py`)`?",
    "options": [
      "A) Writing a Python script `run_monitoring.py` that executes 5 KQL queries via `LogsQueryClient`, formats results into `LAB_04_MONITORING_AND_TRACING_REPORT.md`, and commits to git.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing a Python script `run_monitoring.py` that executes 5 KQL queries via `LogsQueryClient`, formats results into `LAB_04_MONITORING_AND_TRACING_REPORT.md`, and commits to git.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Continuous Observability CI/CD Export Script (`export_monitoring_traces.py`)`, Writing a Python script `run_monitoring.py` that executes 5 KQL queries via `LogsQueryClient`, formats results into `LAB_04_MONITORING_AND_TRACING_REPORT.md`, and commits to git. is the officially required syntax for `building an automated KQL report generator (`run_monitoring.py`)`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2991,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Adventure Works Core Hub` implementing `Log Analytics Table `AppDependencies` (`Target`, `DurationMs`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `debugging missing trace propagation across asynchronous tasks` (Implementation Task #91).",
    "question": "[MOD Coding Task #91] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Log Analytics Table `AppDependencies` (`Target`, `DurationMs`)` when implementing `debugging missing trace propagation across asynchronous tasks`?",
    "options": [
      "A) Writing `ctx = trace.get_current_span().get_span_context()` and passing `context.attach(ctx)` when launching background `asyncio.create_task(background_rag_indexing())`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `ctx = trace.get_current_span().get_span_context()` and passing `context.attach(ctx)` when launching background `asyncio.create_task(background_rag_indexing())`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Log Analytics Table `AppDependencies` (`Target`, `DurationMs`)`, Writing `ctx = trace.get_current_span().get_span_context()` and passing `context.attach(ctx)` when launching background `asyncio.create_task(background_rag_indexing())`. is the officially required syntax for `debugging missing trace propagation across asynchronous tasks`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2992,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Contoso Health AI` implementing `Log Analytics Table `AppTraces` (`Message`, `SeverityLevel`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `debugging missing trace propagation across asynchronous tasks` (Implementation Task #92).",
    "question": "[MOD Coding Task #92] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Log Analytics Table `AppTraces` (`Message`, `SeverityLevel`)` for `debugging missing trace propagation across asynchronous tasks`? (Select three)",
    "options": [
      "A) Writing `ctx = trace.get_current_span().get_span_context()` and passing `context.attach(ctx)` when launching background `asyncio.create_task(background_rag_indexing())`.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Log Analytics Table `AppTraces` (`Message`, `SeverityLevel`)` for `debugging missing trace propagation across asynchronous tasks`, enterprise coding standards mandate: (1) Writing `ctx = trace.get_current_span().get_span_context()` and passing `context.attach(ctx)` when launching background `asyncio.create_task(background_rag_indexing())`., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2993,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Fabrikam Logistics Agent` implementing `KQL `summarize p95=percentile(DurationMs, 95) by bin(TimeGenerated, 1h)``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `debugging missing trace propagation across asynchronous tasks` (Implementation Task #93).",
    "question": "[MOD Coding Task #93] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `KQL `summarize p95=percentile(DurationMs, 95) by bin(TimeGenerated, 1h)`` when implementing `debugging missing trace propagation across asynchronous tasks`?",
    "options": [
      "A) Writing `ctx = trace.get_current_span().get_span_context()` and passing `context.attach(ctx)` when launching background `asyncio.create_task(background_rag_indexing())`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `ctx = trace.get_current_span().get_span_context()` and passing `context.attach(ctx)` when launching background `asyncio.create_task(background_rag_indexing())`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `KQL `summarize p95=percentile(DurationMs, 95) by bin(TimeGenerated, 1h)``, Writing `ctx = trace.get_current_span().get_span_context()` and passing `context.attach(ctx)` when launching background `asyncio.create_task(background_rag_indexing())`. is the officially required syntax for `debugging missing trace propagation across asynchronous tasks`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2994,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Trey Research Lab` implementing `KQL `parse Message with * 'Tokens:' Tokens:int *` String Extraction`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `debugging missing trace propagation across asynchronous tasks` (Implementation Task #94).",
    "question": "[MOD Coding Task #94] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `KQL `parse Message with * 'Tokens:' Tokens:int *` String Extraction` when implementing `debugging missing trace propagation across asynchronous tasks`?",
    "options": [
      "A) Writing `ctx = trace.get_current_span().get_span_context()` and passing `context.attach(ctx)` when launching background `asyncio.create_task(background_rag_indexing())`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `ctx = trace.get_current_span().get_span_context()` and passing `context.attach(ctx)` when launching background `asyncio.create_task(background_rag_indexing())`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `KQL `parse Message with * 'Tokens:' Tokens:int *` String Extraction`, Writing `ctx = trace.get_current_span().get_span_context()` and passing `context.attach(ctx)` when launching background `asyncio.create_task(background_rag_indexing())`. is the officially required syntax for `debugging missing trace propagation across asynchronous tasks`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2995,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Northwind Traders Bot` implementing `KQL `join kind=inner (AppDependencies) on OperationId` Correlation`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `debugging missing trace propagation across asynchronous tasks` (Implementation Task #95).",
    "question": "[MOD Coding Task #95] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `KQL `join kind=inner (AppDependencies) on OperationId` Correlation` when implementing `debugging missing trace propagation across asynchronous tasks`?",
    "options": [
      "A) Writing `ctx = trace.get_current_span().get_span_context()` and passing `context.attach(ctx)` when launching background `asyncio.create_task(background_rag_indexing())`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `ctx = trace.get_current_span().get_span_context()` and passing `context.attach(ctx)` when launching background `asyncio.create_task(background_rag_indexing())`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `KQL `join kind=inner (AppDependencies) on OperationId` Correlation`, Writing `ctx = trace.get_current_span().get_span_context()` and passing `context.attach(ctx)` when launching background `asyncio.create_task(background_rag_indexing())`. is the officially required syntax for `debugging missing trace propagation across asynchronous tasks`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2996,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Woodgrove Bank Virtual Assistant` implementing `OpenTelemetry `@tracer.start_as_current_span('InferenceTurn')``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `debugging missing trace propagation across asynchronous tasks` (Implementation Task #96).",
    "question": "[MOD Coding Task #96] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `OpenTelemetry `@tracer.start_as_current_span('InferenceTurn')`` for `debugging missing trace propagation across asynchronous tasks`? (Select three)",
    "options": [
      "A) Writing `ctx = trace.get_current_span().get_span_context()` and passing `context.attach(ctx)` when launching background `asyncio.create_task(background_rag_indexing())`.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `OpenTelemetry `@tracer.start_as_current_span('InferenceTurn')`` for `debugging missing trace propagation across asynchronous tasks`, enterprise coding standards mandate: (1) Writing `ctx = trace.get_current_span().get_span_context()` and passing `context.attach(ctx)` when launching background `asyncio.create_task(background_rag_indexing())`., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  },
  {
    "id": 2997,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Litware Legal Evaluator` implementing `OpenTelemetry Span Attributes (`span.set_attribute('ai.model', 'gpt-4o')`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `debugging missing trace propagation across asynchronous tasks` (Implementation Task #97).",
    "question": "[MOD Coding Task #97] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `OpenTelemetry Span Attributes (`span.set_attribute('ai.model', 'gpt-4o')`)` when implementing `debugging missing trace propagation across asynchronous tasks`?",
    "options": [
      "A) Writing `ctx = trace.get_current_span().get_span_context()` and passing `context.attach(ctx)` when launching background `asyncio.create_task(background_rag_indexing())`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `ctx = trace.get_current_span().get_span_context()` and passing `context.attach(ctx)` when launching background `asyncio.create_task(background_rag_indexing())`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `OpenTelemetry Span Attributes (`span.set_attribute('ai.model', 'gpt-4o')`)`, Writing `ctx = trace.get_current_span().get_span_context()` and passing `context.attach(ctx)` when launching background `asyncio.create_task(background_rag_indexing())`. is the officially required syntax for `debugging missing trace propagation across asynchronous tasks`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2998,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `A.Datum Retail Copilot` implementing `Azure Monitor Application Insights Connection String Configuration`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `debugging missing trace propagation across asynchronous tasks` (Implementation Task #98).",
    "question": "[MOD Coding Task #98] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Azure Monitor Application Insights Connection String Configuration` when implementing `debugging missing trace propagation across asynchronous tasks`?",
    "options": [
      "A) Writing `ctx = trace.get_current_span().get_span_context()` and passing `context.attach(ctx)` when launching background `asyncio.create_task(background_rag_indexing())`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `ctx = trace.get_current_span().get_span_context()` and passing `context.attach(ctx)` when launching background `asyncio.create_task(background_rag_indexing())`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Azure Monitor Application Insights Connection String Configuration`, Writing `ctx = trace.get_current_span().get_span_context()` and passing `context.attach(ctx)` when launching background `asyncio.create_task(background_rag_indexing())`. is the officially required syntax for `debugging missing trace propagation across asynchronous tasks`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 2999,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "single",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Alpine Ski Field Technician` implementing `Azure Portal Log Analytics Indexing Lag & `ingestion_time()``. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `debugging missing trace propagation across asynchronous tasks` (Implementation Task #99).",
    "question": "[MOD Coding Task #99] Which of the following represents the exact, correct Python SDK v2, Bicep IaC, KQL, or GitHub Actions YAML syntax for `Azure Portal Log Analytics Indexing Lag & `ingestion_time()`` when implementing `debugging missing trace propagation across asynchronous tasks`?",
    "options": [
      "A) Writing `ctx = trace.get_current_span().get_span_context()` and passing `context.attach(ctx)` when launching background `asyncio.create_task(background_rag_indexing())`.",
      "B) Using deprecated Python SDK v1 (`azureml-sdk`) workspace syntax (`Workspace.from_config()`) or unencrypted public endpoints without enabling `DefaultAzureCredential()`.",
      "C) Hardcoding plaintext connection strings and API keys directly inside inline HTML or local `.env` files without Key Vault RBAC integration.",
      "D) Disabling diagnostic log forwarding (`retentionsInDays: 0`) and setting `publicNetworkAccess: 'Enabled'` across all AI Foundry data stores."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Writing `ctx = trace.get_current_span().get_span_context()` and passing `context.attach(ctx)` when launching background `asyncio.create_task(background_rag_indexing())`.. Explanation: In Microsoft AI-300 enterprise hands-on coding for `Azure Portal Log Analytics Indexing Lag & `ingestion_time()``, Writing `ctx = trace.get_current_span().get_span_context()` and passing `context.attach(ctx)` when launching background `asyncio.create_task(background_rag_indexing())`. is the officially required syntax for `debugging missing trace propagation across asynchronous tasks`. Why others are incorrect: Options B, C, and D reference deprecated SDK v1 methods, insecure plaintext credential exposure, or non-compliant public network exposure."
  },
  {
    "id": 3000,
    "domain": "Track 4: Continuous Observability & KQL Tracing",
    "type": "multiple",
    "scenario": "You are a Senior MLOps & GenAI coding engineer at `Tailwind Traders Multi-Agent` implementing `Continuous Observability CI/CD Export Script (`export_monitoring_traces.py`)`. Your team needs to verify the exact code syntax, CLI flag, or configuration block required for `debugging missing trace propagation across asynchronous tasks` (Implementation Task #100).",
    "question": "[MOD Coding Task #100] Which THREE of the following represent mandatory code blocks, exact SDK parameters, or architectural requirements when configuring `Continuous Observability CI/CD Export Script (`export_monitoring_traces.py`)` for `debugging missing trace propagation across asynchronous tasks`? (Select three)",
    "options": [
      "A) Writing `ctx = trace.get_current_span().get_span_context()` and passing `context.attach(ctx)` when launching background `asyncio.create_task(background_rag_indexing())`.",
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
    "explanation": "Correct Answers: A, B, and C. Explanation: When implementing `Continuous Observability CI/CD Export Script (`export_monitoring_traces.py`)` for `debugging missing trace propagation across asynchronous tasks`, enterprise coding standards mandate: (1) Writing `ctx = trace.get_current_span().get_span_context()` and passing `context.attach(ctx)` when launching background `asyncio.create_task(background_rag_indexing())`., (2) zero-trust authentication (`DefaultAzureCredential` / `OIDC`), and (3) continuous diagnostic telemetry forwarding to Log Analytics. Why others are incorrect: Options D and E introduce critical zero-day security vulnerabilities (`public exposure`, `hardcoded secrets`)."
  }
];
