// AI-300 Hands-On Enterprise Implementation Simulator (MOD Tier - Track 2: Python SDK v2 & Azure AI Foundry Client)
window.HANDSON_DATA_MOD_T2 = [
  {
    "id": 2701,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/agents/trail_guide_agent/trail_guide_agent.py` (#1), you are initializing connection to Microsoft Foundry using `azure-ai-projects` SDK.",
    "question": "Which exact code snippet correctly initializes `AIProjectClient` using secret-free Entra ID authentication from `.env`?",
    "options": [
      "project_client = AIProjectClient.from_connection_string(credential=DefaultAzureCredential(), conn_str=os.environ['AZURE_AI_PROJECT_ENDPOINT'])",
      "project_client = AIProjectClient(endpoint=os.environ['AZURE_AI_PROJECT_ENDPOINT'], api_key=os.environ['OPENAI_API_KEY'])",
      "project_client = AIProjectClient.create(workspace_name='ai-hub', credential=InteractiveBrowserCredential())",
      "project_client = AzureOpenAI(azure_endpoint=os.environ['AZURE_AI_PROJECT_ENDPOINT'], api_version='2024-02-01')"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In the `azure-ai-projects` SDK, the client is initialized using `AIProjectClient.from_connection_string(credential=DefaultAzureCredential(), conn_str=os.environ['AZURE_AI_PROJECT_ENDPOINT'])`."
  },
  {
    "id": 2702,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are implementing streaming conversational chat in `trail_guide_agent.py` (#1) using the model deployment specified in `agent.yaml` (`gpt-5.1`).",
    "question": "Which SDK method retrieves the OpenAI-compatible chat client from `AIProjectClient`?",
    "options": [
      "chat_client = project_client.inference.get_chat_completions_client()",
      "chat_client = project_client.models.get_openai_client()",
      "chat_client = project_client.chat.create_session()",
      "chat_client = project_client.get_default_model_endpoint()"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: The `azure-ai-projects` SDK exposes an OpenAI-compatible inference interface via `project_client.inference.get_chat_completions_client()`."
  },
  {
    "id": 2703,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "The Trail Guide Agent (#1) must dynamically load system instructions from `src/agents/trail_guide_agent/prompts/v4_optimized_concise.txt` before sending inference requests.",
    "question": "How should the system prompt be formatted inside the `messages` payload passed to `chat_client.complete()`?",
    "options": [
      "messages = [ { 'role': 'system', 'content': system_instructions_text }, { 'role': 'user', 'content': user_query } ]",
      "messages = [ { 'role': 'developer', 'prompt': system_instructions_text }, { 'role': 'human', 'query': user_query } ]",
      "messages = { 'system_prompt': system_instructions_text, 'user_input': user_query }",
      "messages = [ { 'type': 'instruction', 'text': system_instructions_text } ]"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In OpenAI-compatible chat completion APIs in Azure AI Foundry, the message payload is an array of dictionaries with `'role'` (`'system'`, `'user'`, `'assistant'`) and `'content'` keys."
  },
  {
    "id": 2704,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/tests/interact_with_agent.py` (#1), you notice that authentication fails with `ClientAuthenticationError: ManagedIdentityCredential authentication unavailable` when running locally on your laptop.",
    "question": "Why does `DefaultAzureCredential()` fail locally, and how do you resolve it without altering code?",
    "options": [
      "Your developer machine is not logged into Azure CLI or AZD; execute `az login` or `azd auth login` in the terminal.",
      "You must replace `DefaultAzureCredential()` with hardcoded Client Secret credentials in `.env`.",
      "The Azure AI Foundry project endpoint is down; restart the cloud resource group.",
      "You need to run `pip install azure-identity-local-fallback`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: `DefaultAzureCredential()` attempts multiple authentication chains sequentially. On a local workstation without environment secrets or managed identity, it looks for active developer CLI sessions (`az login` or `azd auth login`)."
  },
  {
    "id": 2705,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are building a custom function calling tool in `trail_guide_agent.py` (#1) that queries live weather data for hiking trails.",
    "question": "Which parameter in `chat_client.complete()` registers the Python function definitions as tools for the model?",
    "options": [
      "tools=[ { 'type': 'function', 'function': { 'name': 'get_trail_weather', 'description': '...', 'parameters': { ... } } } ], tool_choice='auto'",
      "functions=[ get_trail_weather ], auto_invoke=True",
      "plugins=[ { 'name': 'weather_api', 'handler': get_trail_weather } ]",
      "extensions=[ { 'type': 'azure_function', 'endpoint': '...' } ]"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Tool calling in modern Azure AI inference requires passing a JSON schema list under `tools=[{'type': 'function', 'function': {...}}]` and setting `tool_choice='auto'`."
  },
  {
    "id": 2706,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/tests/run_batch_tests.py` (#1), you are executing 50 automated test prompts against the Foundry endpoint. You encounter occasional `RateLimitError: 429 Too Many Requests`.",
    "question": "Which SDK retry pattern or configuration should be implemented to handle 429 rate limits gracefully?",
    "options": [
      "Configure exponential backoff retries using `azure.core.pipeline.policies.RetryPolicy` or wrap completion calls in a `tenacity` retry decorator with random jitter.",
      "Set `max_tokens: 10` in the completion call to reduce token processing load.",
      "Insert `time.sleep(60)` before every single request regardless of status code.",
      "Disable rate limiting in `azure.yaml` by setting `tpm_quota: 'unlimited'`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: When handling 429 RateLimitErrors during batch inference, implementing exponential backoff with jitter using `tenacity` or Azure SDK `RetryPolicy` prevents server overwhelming while ensuring job completion."
  },
  {
    "id": 2707,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "An MLOps engineer wants to verify which model deployment name is being used in `trail_guide_agent.py` (#1) without hardcoding it in the script.",
    "question": "Which environment variable pattern used in `.env` and `agent.yaml` correctly dynamically injects the model name?",
    "options": [
      "MODEL_NAME=os.environ.get('MODEL_NAME', 'gpt-5.1')",
      "DEPLOYMENT_ID=sys.argv[1]",
      "AZURE_OPENAI_MODEL='default-model'",
      "FOUNDRY_LLM_SKU='standard-v1'"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Using `os.environ.get('MODEL_NAME', 'gpt-5.1')` allows clean separation of configuration from code, falling back to `'gpt-5.1'` if `.env` is omitted."
  },
  {
    "id": 2708,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are upgrading `trail_guide_agent.py` (#1) to use structured JSON output mode to return gear checklists as validated JSON objects.",
    "question": "Which parameter must be passed into `chat_client.complete()` to guarantee valid JSON formatting?",
    "options": [
      "response_format={ 'type': 'json_object' } (accompanied by an instruction to return JSON in the system prompt)",
      "output_schema='json'",
      "validate_json=True",
      "content_type='application/json'"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Setting `response_format={'type': 'json_object'}` forces the Azure OpenAI model to output syntactically valid JSON, provided the system prompt explicitly requests JSON output."
  },
  {
    "id": 2709,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/agents/trail_guide_agent/agent.yaml` (#1), you need to specify the default temperature and top_p sampling parameters for deterministic trail safety advice.",
    "question": "Which YAML configuration values ensure the lowest randomness and highest factual consistency?",
    "options": [
      "temperature: 0.0 and top_p: 1.0",
      "temperature: 1.5 and top_p: 0.1",
      "temperature: 0.8 and frequency_penalty: 2.0",
      "randomness: 'disabled' and sampling: 'greedy'"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Setting `temperature: 0.0` eliminates sampling randomness, producing greedy, deterministic, and highly reproducible responses required for factual safety advice."
  },
  {
    "id": 2710,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are testing multi-turn conversation memory in `interact_with_agent.py` (#1). After 10 turns, response latency degrades significantly.",
    "question": "What is the primary operational cause of this latency degradation in multi-turn chat loops without sliding window memory?",
    "options": [
      "Token inflation: Appending the entire conversation history to `messages` on every turn quadratically increases input token volume and attention compute time.",
      "Azure AI Foundry throttle timers automatically slow down long sessions.",
      "The Python virtual environment `.venv` runs out of local RAM buffer.",
      "OpenTelemetry trace spans create blocking synchronous I/O loops."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In stateless chat completion APIs, the entire chat history must be sent on every request. Without pruning or summarization (sliding window), token volume grows linearly, causing quadratic increases in latency and cost."
  },
  {
    "id": 2711,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/agents/trail_guide_agent/trail_guide_agent.py` (#2), you are initializing connection to Microsoft Foundry using `azure-ai-projects` SDK.",
    "question": "Which exact code snippet correctly initializes `AIProjectClient` using secret-free Entra ID authentication from `.env`?",
    "options": [
      "project_client = AIProjectClient.from_connection_string(credential=DefaultAzureCredential(), conn_str=os.environ['AZURE_AI_PROJECT_ENDPOINT'])",
      "project_client = AIProjectClient(endpoint=os.environ['AZURE_AI_PROJECT_ENDPOINT'], api_key=os.environ['OPENAI_API_KEY'])",
      "project_client = AIProjectClient.create(workspace_name='ai-hub', credential=InteractiveBrowserCredential())",
      "project_client = AzureOpenAI(azure_endpoint=os.environ['AZURE_AI_PROJECT_ENDPOINT'], api_version='2024-02-01')"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In the `azure-ai-projects` SDK, the client is initialized using `AIProjectClient.from_connection_string(credential=DefaultAzureCredential(), conn_str=os.environ['AZURE_AI_PROJECT_ENDPOINT'])`."
  },
  {
    "id": 2712,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are implementing streaming conversational chat in `trail_guide_agent.py` (#2) using the model deployment specified in `agent.yaml` (`gpt-5.1`).",
    "question": "Which SDK method retrieves the OpenAI-compatible chat client from `AIProjectClient`?",
    "options": [
      "chat_client = project_client.inference.get_chat_completions_client()",
      "chat_client = project_client.models.get_openai_client()",
      "chat_client = project_client.chat.create_session()",
      "chat_client = project_client.get_default_model_endpoint()"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: The `azure-ai-projects` SDK exposes an OpenAI-compatible inference interface via `project_client.inference.get_chat_completions_client()`."
  },
  {
    "id": 2713,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "The Trail Guide Agent (#2) must dynamically load system instructions from `src/agents/trail_guide_agent/prompts/v4_optimized_concise.txt` before sending inference requests.",
    "question": "How should the system prompt be formatted inside the `messages` payload passed to `chat_client.complete()`?",
    "options": [
      "messages = [ { 'role': 'system', 'content': system_instructions_text }, { 'role': 'user', 'content': user_query } ]",
      "messages = [ { 'role': 'developer', 'prompt': system_instructions_text }, { 'role': 'human', 'query': user_query } ]",
      "messages = { 'system_prompt': system_instructions_text, 'user_input': user_query }",
      "messages = [ { 'type': 'instruction', 'text': system_instructions_text } ]"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In OpenAI-compatible chat completion APIs in Azure AI Foundry, the message payload is an array of dictionaries with `'role'` (`'system'`, `'user'`, `'assistant'`) and `'content'` keys."
  },
  {
    "id": 2714,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/tests/interact_with_agent.py` (#2), you notice that authentication fails with `ClientAuthenticationError: ManagedIdentityCredential authentication unavailable` when running locally on your laptop.",
    "question": "Why does `DefaultAzureCredential()` fail locally, and how do you resolve it without altering code?",
    "options": [
      "Your developer machine is not logged into Azure CLI or AZD; execute `az login` or `azd auth login` in the terminal.",
      "You must replace `DefaultAzureCredential()` with hardcoded Client Secret credentials in `.env`.",
      "The Azure AI Foundry project endpoint is down; restart the cloud resource group.",
      "You need to run `pip install azure-identity-local-fallback`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: `DefaultAzureCredential()` attempts multiple authentication chains sequentially. On a local workstation without environment secrets or managed identity, it looks for active developer CLI sessions (`az login` or `azd auth login`)."
  },
  {
    "id": 2715,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are building a custom function calling tool in `trail_guide_agent.py` (#2) that queries live weather data for hiking trails.",
    "question": "Which parameter in `chat_client.complete()` registers the Python function definitions as tools for the model?",
    "options": [
      "tools=[ { 'type': 'function', 'function': { 'name': 'get_trail_weather', 'description': '...', 'parameters': { ... } } } ], tool_choice='auto'",
      "functions=[ get_trail_weather ], auto_invoke=True",
      "plugins=[ { 'name': 'weather_api', 'handler': get_trail_weather } ]",
      "extensions=[ { 'type': 'azure_function', 'endpoint': '...' } ]"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Tool calling in modern Azure AI inference requires passing a JSON schema list under `tools=[{'type': 'function', 'function': {...}}]` and setting `tool_choice='auto'`."
  },
  {
    "id": 2716,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/tests/run_batch_tests.py` (#2), you are executing 50 automated test prompts against the Foundry endpoint. You encounter occasional `RateLimitError: 429 Too Many Requests`.",
    "question": "Which SDK retry pattern or configuration should be implemented to handle 429 rate limits gracefully?",
    "options": [
      "Configure exponential backoff retries using `azure.core.pipeline.policies.RetryPolicy` or wrap completion calls in a `tenacity` retry decorator with random jitter.",
      "Set `max_tokens: 10` in the completion call to reduce token processing load.",
      "Insert `time.sleep(60)` before every single request regardless of status code.",
      "Disable rate limiting in `azure.yaml` by setting `tpm_quota: 'unlimited'`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: When handling 429 RateLimitErrors during batch inference, implementing exponential backoff with jitter using `tenacity` or Azure SDK `RetryPolicy` prevents server overwhelming while ensuring job completion."
  },
  {
    "id": 2717,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "An MLOps engineer wants to verify which model deployment name is being used in `trail_guide_agent.py` (#2) without hardcoding it in the script.",
    "question": "Which environment variable pattern used in `.env` and `agent.yaml` correctly dynamically injects the model name?",
    "options": [
      "MODEL_NAME=os.environ.get('MODEL_NAME', 'gpt-5.1')",
      "DEPLOYMENT_ID=sys.argv[1]",
      "AZURE_OPENAI_MODEL='default-model'",
      "FOUNDRY_LLM_SKU='standard-v1'"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Using `os.environ.get('MODEL_NAME', 'gpt-5.1')` allows clean separation of configuration from code, falling back to `'gpt-5.1'` if `.env` is omitted."
  },
  {
    "id": 2718,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are upgrading `trail_guide_agent.py` (#2) to use structured JSON output mode to return gear checklists as validated JSON objects.",
    "question": "Which parameter must be passed into `chat_client.complete()` to guarantee valid JSON formatting?",
    "options": [
      "response_format={ 'type': 'json_object' } (accompanied by an instruction to return JSON in the system prompt)",
      "output_schema='json'",
      "validate_json=True",
      "content_type='application/json'"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Setting `response_format={'type': 'json_object'}` forces the Azure OpenAI model to output syntactically valid JSON, provided the system prompt explicitly requests JSON output."
  },
  {
    "id": 2719,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/agents/trail_guide_agent/agent.yaml` (#2), you need to specify the default temperature and top_p sampling parameters for deterministic trail safety advice.",
    "question": "Which YAML configuration values ensure the lowest randomness and highest factual consistency?",
    "options": [
      "temperature: 0.0 and top_p: 1.0",
      "temperature: 1.5 and top_p: 0.1",
      "temperature: 0.8 and frequency_penalty: 2.0",
      "randomness: 'disabled' and sampling: 'greedy'"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Setting `temperature: 0.0` eliminates sampling randomness, producing greedy, deterministic, and highly reproducible responses required for factual safety advice."
  },
  {
    "id": 2720,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are testing multi-turn conversation memory in `interact_with_agent.py` (#2). After 10 turns, response latency degrades significantly.",
    "question": "What is the primary operational cause of this latency degradation in multi-turn chat loops without sliding window memory?",
    "options": [
      "Token inflation: Appending the entire conversation history to `messages` on every turn quadratically increases input token volume and attention compute time.",
      "Azure AI Foundry throttle timers automatically slow down long sessions.",
      "The Python virtual environment `.venv` runs out of local RAM buffer.",
      "OpenTelemetry trace spans create blocking synchronous I/O loops."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In stateless chat completion APIs, the entire chat history must be sent on every request. Without pruning or summarization (sliding window), token volume grows linearly, causing quadratic increases in latency and cost."
  },
  {
    "id": 2721,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/agents/trail_guide_agent/trail_guide_agent.py` (#3), you are initializing connection to Microsoft Foundry using `azure-ai-projects` SDK.",
    "question": "Which exact code snippet correctly initializes `AIProjectClient` using secret-free Entra ID authentication from `.env`?",
    "options": [
      "project_client = AIProjectClient.from_connection_string(credential=DefaultAzureCredential(), conn_str=os.environ['AZURE_AI_PROJECT_ENDPOINT'])",
      "project_client = AIProjectClient(endpoint=os.environ['AZURE_AI_PROJECT_ENDPOINT'], api_key=os.environ['OPENAI_API_KEY'])",
      "project_client = AIProjectClient.create(workspace_name='ai-hub', credential=InteractiveBrowserCredential())",
      "project_client = AzureOpenAI(azure_endpoint=os.environ['AZURE_AI_PROJECT_ENDPOINT'], api_version='2024-02-01')"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In the `azure-ai-projects` SDK, the client is initialized using `AIProjectClient.from_connection_string(credential=DefaultAzureCredential(), conn_str=os.environ['AZURE_AI_PROJECT_ENDPOINT'])`."
  },
  {
    "id": 2722,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are implementing streaming conversational chat in `trail_guide_agent.py` (#3) using the model deployment specified in `agent.yaml` (`gpt-5.1`).",
    "question": "Which SDK method retrieves the OpenAI-compatible chat client from `AIProjectClient`?",
    "options": [
      "chat_client = project_client.inference.get_chat_completions_client()",
      "chat_client = project_client.models.get_openai_client()",
      "chat_client = project_client.chat.create_session()",
      "chat_client = project_client.get_default_model_endpoint()"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: The `azure-ai-projects` SDK exposes an OpenAI-compatible inference interface via `project_client.inference.get_chat_completions_client()`."
  },
  {
    "id": 2723,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "The Trail Guide Agent (#3) must dynamically load system instructions from `src/agents/trail_guide_agent/prompts/v4_optimized_concise.txt` before sending inference requests.",
    "question": "How should the system prompt be formatted inside the `messages` payload passed to `chat_client.complete()`?",
    "options": [
      "messages = [ { 'role': 'system', 'content': system_instructions_text }, { 'role': 'user', 'content': user_query } ]",
      "messages = [ { 'role': 'developer', 'prompt': system_instructions_text }, { 'role': 'human', 'query': user_query } ]",
      "messages = { 'system_prompt': system_instructions_text, 'user_input': user_query }",
      "messages = [ { 'type': 'instruction', 'text': system_instructions_text } ]"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In OpenAI-compatible chat completion APIs in Azure AI Foundry, the message payload is an array of dictionaries with `'role'` (`'system'`, `'user'`, `'assistant'`) and `'content'` keys."
  },
  {
    "id": 2724,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/tests/interact_with_agent.py` (#3), you notice that authentication fails with `ClientAuthenticationError: ManagedIdentityCredential authentication unavailable` when running locally on your laptop.",
    "question": "Why does `DefaultAzureCredential()` fail locally, and how do you resolve it without altering code?",
    "options": [
      "Your developer machine is not logged into Azure CLI or AZD; execute `az login` or `azd auth login` in the terminal.",
      "You must replace `DefaultAzureCredential()` with hardcoded Client Secret credentials in `.env`.",
      "The Azure AI Foundry project endpoint is down; restart the cloud resource group.",
      "You need to run `pip install azure-identity-local-fallback`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: `DefaultAzureCredential()` attempts multiple authentication chains sequentially. On a local workstation without environment secrets or managed identity, it looks for active developer CLI sessions (`az login` or `azd auth login`)."
  },
  {
    "id": 2725,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are building a custom function calling tool in `trail_guide_agent.py` (#3) that queries live weather data for hiking trails.",
    "question": "Which parameter in `chat_client.complete()` registers the Python function definitions as tools for the model?",
    "options": [
      "tools=[ { 'type': 'function', 'function': { 'name': 'get_trail_weather', 'description': '...', 'parameters': { ... } } } ], tool_choice='auto'",
      "functions=[ get_trail_weather ], auto_invoke=True",
      "plugins=[ { 'name': 'weather_api', 'handler': get_trail_weather } ]",
      "extensions=[ { 'type': 'azure_function', 'endpoint': '...' } ]"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Tool calling in modern Azure AI inference requires passing a JSON schema list under `tools=[{'type': 'function', 'function': {...}}]` and setting `tool_choice='auto'`."
  },
  {
    "id": 2726,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/tests/run_batch_tests.py` (#3), you are executing 50 automated test prompts against the Foundry endpoint. You encounter occasional `RateLimitError: 429 Too Many Requests`.",
    "question": "Which SDK retry pattern or configuration should be implemented to handle 429 rate limits gracefully?",
    "options": [
      "Configure exponential backoff retries using `azure.core.pipeline.policies.RetryPolicy` or wrap completion calls in a `tenacity` retry decorator with random jitter.",
      "Set `max_tokens: 10` in the completion call to reduce token processing load.",
      "Insert `time.sleep(60)` before every single request regardless of status code.",
      "Disable rate limiting in `azure.yaml` by setting `tpm_quota: 'unlimited'`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: When handling 429 RateLimitErrors during batch inference, implementing exponential backoff with jitter using `tenacity` or Azure SDK `RetryPolicy` prevents server overwhelming while ensuring job completion."
  },
  {
    "id": 2727,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "An MLOps engineer wants to verify which model deployment name is being used in `trail_guide_agent.py` (#3) without hardcoding it in the script.",
    "question": "Which environment variable pattern used in `.env` and `agent.yaml` correctly dynamically injects the model name?",
    "options": [
      "MODEL_NAME=os.environ.get('MODEL_NAME', 'gpt-5.1')",
      "DEPLOYMENT_ID=sys.argv[1]",
      "AZURE_OPENAI_MODEL='default-model'",
      "FOUNDRY_LLM_SKU='standard-v1'"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Using `os.environ.get('MODEL_NAME', 'gpt-5.1')` allows clean separation of configuration from code, falling back to `'gpt-5.1'` if `.env` is omitted."
  },
  {
    "id": 2728,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are upgrading `trail_guide_agent.py` (#3) to use structured JSON output mode to return gear checklists as validated JSON objects.",
    "question": "Which parameter must be passed into `chat_client.complete()` to guarantee valid JSON formatting?",
    "options": [
      "response_format={ 'type': 'json_object' } (accompanied by an instruction to return JSON in the system prompt)",
      "output_schema='json'",
      "validate_json=True",
      "content_type='application/json'"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Setting `response_format={'type': 'json_object'}` forces the Azure OpenAI model to output syntactically valid JSON, provided the system prompt explicitly requests JSON output."
  },
  {
    "id": 2729,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/agents/trail_guide_agent/agent.yaml` (#3), you need to specify the default temperature and top_p sampling parameters for deterministic trail safety advice.",
    "question": "Which YAML configuration values ensure the lowest randomness and highest factual consistency?",
    "options": [
      "temperature: 0.0 and top_p: 1.0",
      "temperature: 1.5 and top_p: 0.1",
      "temperature: 0.8 and frequency_penalty: 2.0",
      "randomness: 'disabled' and sampling: 'greedy'"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Setting `temperature: 0.0` eliminates sampling randomness, producing greedy, deterministic, and highly reproducible responses required for factual safety advice."
  },
  {
    "id": 2730,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are testing multi-turn conversation memory in `interact_with_agent.py` (#3). After 10 turns, response latency degrades significantly.",
    "question": "What is the primary operational cause of this latency degradation in multi-turn chat loops without sliding window memory?",
    "options": [
      "Token inflation: Appending the entire conversation history to `messages` on every turn quadratically increases input token volume and attention compute time.",
      "Azure AI Foundry throttle timers automatically slow down long sessions.",
      "The Python virtual environment `.venv` runs out of local RAM buffer.",
      "OpenTelemetry trace spans create blocking synchronous I/O loops."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In stateless chat completion APIs, the entire chat history must be sent on every request. Without pruning or summarization (sliding window), token volume grows linearly, causing quadratic increases in latency and cost."
  },
  {
    "id": 2731,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/agents/trail_guide_agent/trail_guide_agent.py` (#4), you are initializing connection to Microsoft Foundry using `azure-ai-projects` SDK.",
    "question": "Which exact code snippet correctly initializes `AIProjectClient` using secret-free Entra ID authentication from `.env`?",
    "options": [
      "project_client = AIProjectClient.from_connection_string(credential=DefaultAzureCredential(), conn_str=os.environ['AZURE_AI_PROJECT_ENDPOINT'])",
      "project_client = AIProjectClient(endpoint=os.environ['AZURE_AI_PROJECT_ENDPOINT'], api_key=os.environ['OPENAI_API_KEY'])",
      "project_client = AIProjectClient.create(workspace_name='ai-hub', credential=InteractiveBrowserCredential())",
      "project_client = AzureOpenAI(azure_endpoint=os.environ['AZURE_AI_PROJECT_ENDPOINT'], api_version='2024-02-01')"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In the `azure-ai-projects` SDK, the client is initialized using `AIProjectClient.from_connection_string(credential=DefaultAzureCredential(), conn_str=os.environ['AZURE_AI_PROJECT_ENDPOINT'])`."
  },
  {
    "id": 2732,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are implementing streaming conversational chat in `trail_guide_agent.py` (#4) using the model deployment specified in `agent.yaml` (`gpt-5.1`).",
    "question": "Which SDK method retrieves the OpenAI-compatible chat client from `AIProjectClient`?",
    "options": [
      "chat_client = project_client.inference.get_chat_completions_client()",
      "chat_client = project_client.models.get_openai_client()",
      "chat_client = project_client.chat.create_session()",
      "chat_client = project_client.get_default_model_endpoint()"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: The `azure-ai-projects` SDK exposes an OpenAI-compatible inference interface via `project_client.inference.get_chat_completions_client()`."
  },
  {
    "id": 2733,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "The Trail Guide Agent (#4) must dynamically load system instructions from `src/agents/trail_guide_agent/prompts/v4_optimized_concise.txt` before sending inference requests.",
    "question": "How should the system prompt be formatted inside the `messages` payload passed to `chat_client.complete()`?",
    "options": [
      "messages = [ { 'role': 'system', 'content': system_instructions_text }, { 'role': 'user', 'content': user_query } ]",
      "messages = [ { 'role': 'developer', 'prompt': system_instructions_text }, { 'role': 'human', 'query': user_query } ]",
      "messages = { 'system_prompt': system_instructions_text, 'user_input': user_query }",
      "messages = [ { 'type': 'instruction', 'text': system_instructions_text } ]"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In OpenAI-compatible chat completion APIs in Azure AI Foundry, the message payload is an array of dictionaries with `'role'` (`'system'`, `'user'`, `'assistant'`) and `'content'` keys."
  },
  {
    "id": 2734,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/tests/interact_with_agent.py` (#4), you notice that authentication fails with `ClientAuthenticationError: ManagedIdentityCredential authentication unavailable` when running locally on your laptop.",
    "question": "Why does `DefaultAzureCredential()` fail locally, and how do you resolve it without altering code?",
    "options": [
      "Your developer machine is not logged into Azure CLI or AZD; execute `az login` or `azd auth login` in the terminal.",
      "You must replace `DefaultAzureCredential()` with hardcoded Client Secret credentials in `.env`.",
      "The Azure AI Foundry project endpoint is down; restart the cloud resource group.",
      "You need to run `pip install azure-identity-local-fallback`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: `DefaultAzureCredential()` attempts multiple authentication chains sequentially. On a local workstation without environment secrets or managed identity, it looks for active developer CLI sessions (`az login` or `azd auth login`)."
  },
  {
    "id": 2735,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are building a custom function calling tool in `trail_guide_agent.py` (#4) that queries live weather data for hiking trails.",
    "question": "Which parameter in `chat_client.complete()` registers the Python function definitions as tools for the model?",
    "options": [
      "tools=[ { 'type': 'function', 'function': { 'name': 'get_trail_weather', 'description': '...', 'parameters': { ... } } } ], tool_choice='auto'",
      "functions=[ get_trail_weather ], auto_invoke=True",
      "plugins=[ { 'name': 'weather_api', 'handler': get_trail_weather } ]",
      "extensions=[ { 'type': 'azure_function', 'endpoint': '...' } ]"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Tool calling in modern Azure AI inference requires passing a JSON schema list under `tools=[{'type': 'function', 'function': {...}}]` and setting `tool_choice='auto'`."
  },
  {
    "id": 2736,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/tests/run_batch_tests.py` (#4), you are executing 50 automated test prompts against the Foundry endpoint. You encounter occasional `RateLimitError: 429 Too Many Requests`.",
    "question": "Which SDK retry pattern or configuration should be implemented to handle 429 rate limits gracefully?",
    "options": [
      "Configure exponential backoff retries using `azure.core.pipeline.policies.RetryPolicy` or wrap completion calls in a `tenacity` retry decorator with random jitter.",
      "Set `max_tokens: 10` in the completion call to reduce token processing load.",
      "Insert `time.sleep(60)` before every single request regardless of status code.",
      "Disable rate limiting in `azure.yaml` by setting `tpm_quota: 'unlimited'`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: When handling 429 RateLimitErrors during batch inference, implementing exponential backoff with jitter using `tenacity` or Azure SDK `RetryPolicy` prevents server overwhelming while ensuring job completion."
  },
  {
    "id": 2737,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "An MLOps engineer wants to verify which model deployment name is being used in `trail_guide_agent.py` (#4) without hardcoding it in the script.",
    "question": "Which environment variable pattern used in `.env` and `agent.yaml` correctly dynamically injects the model name?",
    "options": [
      "MODEL_NAME=os.environ.get('MODEL_NAME', 'gpt-5.1')",
      "DEPLOYMENT_ID=sys.argv[1]",
      "AZURE_OPENAI_MODEL='default-model'",
      "FOUNDRY_LLM_SKU='standard-v1'"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Using `os.environ.get('MODEL_NAME', 'gpt-5.1')` allows clean separation of configuration from code, falling back to `'gpt-5.1'` if `.env` is omitted."
  },
  {
    "id": 2738,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are upgrading `trail_guide_agent.py` (#4) to use structured JSON output mode to return gear checklists as validated JSON objects.",
    "question": "Which parameter must be passed into `chat_client.complete()` to guarantee valid JSON formatting?",
    "options": [
      "response_format={ 'type': 'json_object' } (accompanied by an instruction to return JSON in the system prompt)",
      "output_schema='json'",
      "validate_json=True",
      "content_type='application/json'"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Setting `response_format={'type': 'json_object'}` forces the Azure OpenAI model to output syntactically valid JSON, provided the system prompt explicitly requests JSON output."
  },
  {
    "id": 2739,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/agents/trail_guide_agent/agent.yaml` (#4), you need to specify the default temperature and top_p sampling parameters for deterministic trail safety advice.",
    "question": "Which YAML configuration values ensure the lowest randomness and highest factual consistency?",
    "options": [
      "temperature: 0.0 and top_p: 1.0",
      "temperature: 1.5 and top_p: 0.1",
      "temperature: 0.8 and frequency_penalty: 2.0",
      "randomness: 'disabled' and sampling: 'greedy'"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Setting `temperature: 0.0` eliminates sampling randomness, producing greedy, deterministic, and highly reproducible responses required for factual safety advice."
  },
  {
    "id": 2740,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are testing multi-turn conversation memory in `interact_with_agent.py` (#4). After 10 turns, response latency degrades significantly.",
    "question": "What is the primary operational cause of this latency degradation in multi-turn chat loops without sliding window memory?",
    "options": [
      "Token inflation: Appending the entire conversation history to `messages` on every turn quadratically increases input token volume and attention compute time.",
      "Azure AI Foundry throttle timers automatically slow down long sessions.",
      "The Python virtual environment `.venv` runs out of local RAM buffer.",
      "OpenTelemetry trace spans create blocking synchronous I/O loops."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In stateless chat completion APIs, the entire chat history must be sent on every request. Without pruning or summarization (sliding window), token volume grows linearly, causing quadratic increases in latency and cost."
  },
  {
    "id": 2741,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/agents/trail_guide_agent/trail_guide_agent.py` (#5), you are initializing connection to Microsoft Foundry using `azure-ai-projects` SDK.",
    "question": "Which exact code snippet correctly initializes `AIProjectClient` using secret-free Entra ID authentication from `.env`?",
    "options": [
      "project_client = AIProjectClient.from_connection_string(credential=DefaultAzureCredential(), conn_str=os.environ['AZURE_AI_PROJECT_ENDPOINT'])",
      "project_client = AIProjectClient(endpoint=os.environ['AZURE_AI_PROJECT_ENDPOINT'], api_key=os.environ['OPENAI_API_KEY'])",
      "project_client = AIProjectClient.create(workspace_name='ai-hub', credential=InteractiveBrowserCredential())",
      "project_client = AzureOpenAI(azure_endpoint=os.environ['AZURE_AI_PROJECT_ENDPOINT'], api_version='2024-02-01')"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In the `azure-ai-projects` SDK, the client is initialized using `AIProjectClient.from_connection_string(credential=DefaultAzureCredential(), conn_str=os.environ['AZURE_AI_PROJECT_ENDPOINT'])`."
  },
  {
    "id": 2742,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are implementing streaming conversational chat in `trail_guide_agent.py` (#5) using the model deployment specified in `agent.yaml` (`gpt-5.1`).",
    "question": "Which SDK method retrieves the OpenAI-compatible chat client from `AIProjectClient`?",
    "options": [
      "chat_client = project_client.inference.get_chat_completions_client()",
      "chat_client = project_client.models.get_openai_client()",
      "chat_client = project_client.chat.create_session()",
      "chat_client = project_client.get_default_model_endpoint()"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: The `azure-ai-projects` SDK exposes an OpenAI-compatible inference interface via `project_client.inference.get_chat_completions_client()`."
  },
  {
    "id": 2743,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "The Trail Guide Agent (#5) must dynamically load system instructions from `src/agents/trail_guide_agent/prompts/v4_optimized_concise.txt` before sending inference requests.",
    "question": "How should the system prompt be formatted inside the `messages` payload passed to `chat_client.complete()`?",
    "options": [
      "messages = [ { 'role': 'system', 'content': system_instructions_text }, { 'role': 'user', 'content': user_query } ]",
      "messages = [ { 'role': 'developer', 'prompt': system_instructions_text }, { 'role': 'human', 'query': user_query } ]",
      "messages = { 'system_prompt': system_instructions_text, 'user_input': user_query }",
      "messages = [ { 'type': 'instruction', 'text': system_instructions_text } ]"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In OpenAI-compatible chat completion APIs in Azure AI Foundry, the message payload is an array of dictionaries with `'role'` (`'system'`, `'user'`, `'assistant'`) and `'content'` keys."
  },
  {
    "id": 2744,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/tests/interact_with_agent.py` (#5), you notice that authentication fails with `ClientAuthenticationError: ManagedIdentityCredential authentication unavailable` when running locally on your laptop.",
    "question": "Why does `DefaultAzureCredential()` fail locally, and how do you resolve it without altering code?",
    "options": [
      "Your developer machine is not logged into Azure CLI or AZD; execute `az login` or `azd auth login` in the terminal.",
      "You must replace `DefaultAzureCredential()` with hardcoded Client Secret credentials in `.env`.",
      "The Azure AI Foundry project endpoint is down; restart the cloud resource group.",
      "You need to run `pip install azure-identity-local-fallback`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: `DefaultAzureCredential()` attempts multiple authentication chains sequentially. On a local workstation without environment secrets or managed identity, it looks for active developer CLI sessions (`az login` or `azd auth login`)."
  },
  {
    "id": 2745,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are building a custom function calling tool in `trail_guide_agent.py` (#5) that queries live weather data for hiking trails.",
    "question": "Which parameter in `chat_client.complete()` registers the Python function definitions as tools for the model?",
    "options": [
      "tools=[ { 'type': 'function', 'function': { 'name': 'get_trail_weather', 'description': '...', 'parameters': { ... } } } ], tool_choice='auto'",
      "functions=[ get_trail_weather ], auto_invoke=True",
      "plugins=[ { 'name': 'weather_api', 'handler': get_trail_weather } ]",
      "extensions=[ { 'type': 'azure_function', 'endpoint': '...' } ]"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Tool calling in modern Azure AI inference requires passing a JSON schema list under `tools=[{'type': 'function', 'function': {...}}]` and setting `tool_choice='auto'`."
  },
  {
    "id": 2746,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/tests/run_batch_tests.py` (#5), you are executing 50 automated test prompts against the Foundry endpoint. You encounter occasional `RateLimitError: 429 Too Many Requests`.",
    "question": "Which SDK retry pattern or configuration should be implemented to handle 429 rate limits gracefully?",
    "options": [
      "Configure exponential backoff retries using `azure.core.pipeline.policies.RetryPolicy` or wrap completion calls in a `tenacity` retry decorator with random jitter.",
      "Set `max_tokens: 10` in the completion call to reduce token processing load.",
      "Insert `time.sleep(60)` before every single request regardless of status code.",
      "Disable rate limiting in `azure.yaml` by setting `tpm_quota: 'unlimited'`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: When handling 429 RateLimitErrors during batch inference, implementing exponential backoff with jitter using `tenacity` or Azure SDK `RetryPolicy` prevents server overwhelming while ensuring job completion."
  },
  {
    "id": 2747,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "An MLOps engineer wants to verify which model deployment name is being used in `trail_guide_agent.py` (#5) without hardcoding it in the script.",
    "question": "Which environment variable pattern used in `.env` and `agent.yaml` correctly dynamically injects the model name?",
    "options": [
      "MODEL_NAME=os.environ.get('MODEL_NAME', 'gpt-5.1')",
      "DEPLOYMENT_ID=sys.argv[1]",
      "AZURE_OPENAI_MODEL='default-model'",
      "FOUNDRY_LLM_SKU='standard-v1'"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Using `os.environ.get('MODEL_NAME', 'gpt-5.1')` allows clean separation of configuration from code, falling back to `'gpt-5.1'` if `.env` is omitted."
  },
  {
    "id": 2748,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are upgrading `trail_guide_agent.py` (#5) to use structured JSON output mode to return gear checklists as validated JSON objects.",
    "question": "Which parameter must be passed into `chat_client.complete()` to guarantee valid JSON formatting?",
    "options": [
      "response_format={ 'type': 'json_object' } (accompanied by an instruction to return JSON in the system prompt)",
      "output_schema='json'",
      "validate_json=True",
      "content_type='application/json'"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Setting `response_format={'type': 'json_object'}` forces the Azure OpenAI model to output syntactically valid JSON, provided the system prompt explicitly requests JSON output."
  },
  {
    "id": 2749,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/agents/trail_guide_agent/agent.yaml` (#5), you need to specify the default temperature and top_p sampling parameters for deterministic trail safety advice.",
    "question": "Which YAML configuration values ensure the lowest randomness and highest factual consistency?",
    "options": [
      "temperature: 0.0 and top_p: 1.0",
      "temperature: 1.5 and top_p: 0.1",
      "temperature: 0.8 and frequency_penalty: 2.0",
      "randomness: 'disabled' and sampling: 'greedy'"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Setting `temperature: 0.0` eliminates sampling randomness, producing greedy, deterministic, and highly reproducible responses required for factual safety advice."
  },
  {
    "id": 2750,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are testing multi-turn conversation memory in `interact_with_agent.py` (#5). After 10 turns, response latency degrades significantly.",
    "question": "What is the primary operational cause of this latency degradation in multi-turn chat loops without sliding window memory?",
    "options": [
      "Token inflation: Appending the entire conversation history to `messages` on every turn quadratically increases input token volume and attention compute time.",
      "Azure AI Foundry throttle timers automatically slow down long sessions.",
      "The Python virtual environment `.venv` runs out of local RAM buffer.",
      "OpenTelemetry trace spans create blocking synchronous I/O loops."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In stateless chat completion APIs, the entire chat history must be sent on every request. Without pruning or summarization (sliding window), token volume grows linearly, causing quadratic increases in latency and cost."
  },
  {
    "id": 2751,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/agents/trail_guide_agent/trail_guide_agent.py` (#6), you are initializing connection to Microsoft Foundry using `azure-ai-projects` SDK.",
    "question": "Which exact code snippet correctly initializes `AIProjectClient` using secret-free Entra ID authentication from `.env`?",
    "options": [
      "project_client = AIProjectClient.from_connection_string(credential=DefaultAzureCredential(), conn_str=os.environ['AZURE_AI_PROJECT_ENDPOINT'])",
      "project_client = AIProjectClient(endpoint=os.environ['AZURE_AI_PROJECT_ENDPOINT'], api_key=os.environ['OPENAI_API_KEY'])",
      "project_client = AIProjectClient.create(workspace_name='ai-hub', credential=InteractiveBrowserCredential())",
      "project_client = AzureOpenAI(azure_endpoint=os.environ['AZURE_AI_PROJECT_ENDPOINT'], api_version='2024-02-01')"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In the `azure-ai-projects` SDK, the client is initialized using `AIProjectClient.from_connection_string(credential=DefaultAzureCredential(), conn_str=os.environ['AZURE_AI_PROJECT_ENDPOINT'])`."
  },
  {
    "id": 2752,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are implementing streaming conversational chat in `trail_guide_agent.py` (#6) using the model deployment specified in `agent.yaml` (`gpt-5.1`).",
    "question": "Which SDK method retrieves the OpenAI-compatible chat client from `AIProjectClient`?",
    "options": [
      "chat_client = project_client.inference.get_chat_completions_client()",
      "chat_client = project_client.models.get_openai_client()",
      "chat_client = project_client.chat.create_session()",
      "chat_client = project_client.get_default_model_endpoint()"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: The `azure-ai-projects` SDK exposes an OpenAI-compatible inference interface via `project_client.inference.get_chat_completions_client()`."
  },
  {
    "id": 2753,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "The Trail Guide Agent (#6) must dynamically load system instructions from `src/agents/trail_guide_agent/prompts/v4_optimized_concise.txt` before sending inference requests.",
    "question": "How should the system prompt be formatted inside the `messages` payload passed to `chat_client.complete()`?",
    "options": [
      "messages = [ { 'role': 'system', 'content': system_instructions_text }, { 'role': 'user', 'content': user_query } ]",
      "messages = [ { 'role': 'developer', 'prompt': system_instructions_text }, { 'role': 'human', 'query': user_query } ]",
      "messages = { 'system_prompt': system_instructions_text, 'user_input': user_query }",
      "messages = [ { 'type': 'instruction', 'text': system_instructions_text } ]"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In OpenAI-compatible chat completion APIs in Azure AI Foundry, the message payload is an array of dictionaries with `'role'` (`'system'`, `'user'`, `'assistant'`) and `'content'` keys."
  },
  {
    "id": 2754,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/tests/interact_with_agent.py` (#6), you notice that authentication fails with `ClientAuthenticationError: ManagedIdentityCredential authentication unavailable` when running locally on your laptop.",
    "question": "Why does `DefaultAzureCredential()` fail locally, and how do you resolve it without altering code?",
    "options": [
      "Your developer machine is not logged into Azure CLI or AZD; execute `az login` or `azd auth login` in the terminal.",
      "You must replace `DefaultAzureCredential()` with hardcoded Client Secret credentials in `.env`.",
      "The Azure AI Foundry project endpoint is down; restart the cloud resource group.",
      "You need to run `pip install azure-identity-local-fallback`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: `DefaultAzureCredential()` attempts multiple authentication chains sequentially. On a local workstation without environment secrets or managed identity, it looks for active developer CLI sessions (`az login` or `azd auth login`)."
  },
  {
    "id": 2755,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are building a custom function calling tool in `trail_guide_agent.py` (#6) that queries live weather data for hiking trails.",
    "question": "Which parameter in `chat_client.complete()` registers the Python function definitions as tools for the model?",
    "options": [
      "tools=[ { 'type': 'function', 'function': { 'name': 'get_trail_weather', 'description': '...', 'parameters': { ... } } } ], tool_choice='auto'",
      "functions=[ get_trail_weather ], auto_invoke=True",
      "plugins=[ { 'name': 'weather_api', 'handler': get_trail_weather } ]",
      "extensions=[ { 'type': 'azure_function', 'endpoint': '...' } ]"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Tool calling in modern Azure AI inference requires passing a JSON schema list under `tools=[{'type': 'function', 'function': {...}}]` and setting `tool_choice='auto'`."
  },
  {
    "id": 2756,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/tests/run_batch_tests.py` (#6), you are executing 50 automated test prompts against the Foundry endpoint. You encounter occasional `RateLimitError: 429 Too Many Requests`.",
    "question": "Which SDK retry pattern or configuration should be implemented to handle 429 rate limits gracefully?",
    "options": [
      "Configure exponential backoff retries using `azure.core.pipeline.policies.RetryPolicy` or wrap completion calls in a `tenacity` retry decorator with random jitter.",
      "Set `max_tokens: 10` in the completion call to reduce token processing load.",
      "Insert `time.sleep(60)` before every single request regardless of status code.",
      "Disable rate limiting in `azure.yaml` by setting `tpm_quota: 'unlimited'`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: When handling 429 RateLimitErrors during batch inference, implementing exponential backoff with jitter using `tenacity` or Azure SDK `RetryPolicy` prevents server overwhelming while ensuring job completion."
  },
  {
    "id": 2757,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "An MLOps engineer wants to verify which model deployment name is being used in `trail_guide_agent.py` (#6) without hardcoding it in the script.",
    "question": "Which environment variable pattern used in `.env` and `agent.yaml` correctly dynamically injects the model name?",
    "options": [
      "MODEL_NAME=os.environ.get('MODEL_NAME', 'gpt-5.1')",
      "DEPLOYMENT_ID=sys.argv[1]",
      "AZURE_OPENAI_MODEL='default-model'",
      "FOUNDRY_LLM_SKU='standard-v1'"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Using `os.environ.get('MODEL_NAME', 'gpt-5.1')` allows clean separation of configuration from code, falling back to `'gpt-5.1'` if `.env` is omitted."
  },
  {
    "id": 2758,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are upgrading `trail_guide_agent.py` (#6) to use structured JSON output mode to return gear checklists as validated JSON objects.",
    "question": "Which parameter must be passed into `chat_client.complete()` to guarantee valid JSON formatting?",
    "options": [
      "response_format={ 'type': 'json_object' } (accompanied by an instruction to return JSON in the system prompt)",
      "output_schema='json'",
      "validate_json=True",
      "content_type='application/json'"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Setting `response_format={'type': 'json_object'}` forces the Azure OpenAI model to output syntactically valid JSON, provided the system prompt explicitly requests JSON output."
  },
  {
    "id": 2759,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/agents/trail_guide_agent/agent.yaml` (#6), you need to specify the default temperature and top_p sampling parameters for deterministic trail safety advice.",
    "question": "Which YAML configuration values ensure the lowest randomness and highest factual consistency?",
    "options": [
      "temperature: 0.0 and top_p: 1.0",
      "temperature: 1.5 and top_p: 0.1",
      "temperature: 0.8 and frequency_penalty: 2.0",
      "randomness: 'disabled' and sampling: 'greedy'"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Setting `temperature: 0.0` eliminates sampling randomness, producing greedy, deterministic, and highly reproducible responses required for factual safety advice."
  },
  {
    "id": 2760,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are testing multi-turn conversation memory in `interact_with_agent.py` (#6). After 10 turns, response latency degrades significantly.",
    "question": "What is the primary operational cause of this latency degradation in multi-turn chat loops without sliding window memory?",
    "options": [
      "Token inflation: Appending the entire conversation history to `messages` on every turn quadratically increases input token volume and attention compute time.",
      "Azure AI Foundry throttle timers automatically slow down long sessions.",
      "The Python virtual environment `.venv` runs out of local RAM buffer.",
      "OpenTelemetry trace spans create blocking synchronous I/O loops."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In stateless chat completion APIs, the entire chat history must be sent on every request. Without pruning or summarization (sliding window), token volume grows linearly, causing quadratic increases in latency and cost."
  },
  {
    "id": 2761,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/agents/trail_guide_agent/trail_guide_agent.py` (#7), you are initializing connection to Microsoft Foundry using `azure-ai-projects` SDK.",
    "question": "Which exact code snippet correctly initializes `AIProjectClient` using secret-free Entra ID authentication from `.env`?",
    "options": [
      "project_client = AIProjectClient.from_connection_string(credential=DefaultAzureCredential(), conn_str=os.environ['AZURE_AI_PROJECT_ENDPOINT'])",
      "project_client = AIProjectClient(endpoint=os.environ['AZURE_AI_PROJECT_ENDPOINT'], api_key=os.environ['OPENAI_API_KEY'])",
      "project_client = AIProjectClient.create(workspace_name='ai-hub', credential=InteractiveBrowserCredential())",
      "project_client = AzureOpenAI(azure_endpoint=os.environ['AZURE_AI_PROJECT_ENDPOINT'], api_version='2024-02-01')"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In the `azure-ai-projects` SDK, the client is initialized using `AIProjectClient.from_connection_string(credential=DefaultAzureCredential(), conn_str=os.environ['AZURE_AI_PROJECT_ENDPOINT'])`."
  },
  {
    "id": 2762,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are implementing streaming conversational chat in `trail_guide_agent.py` (#7) using the model deployment specified in `agent.yaml` (`gpt-5.1`).",
    "question": "Which SDK method retrieves the OpenAI-compatible chat client from `AIProjectClient`?",
    "options": [
      "chat_client = project_client.inference.get_chat_completions_client()",
      "chat_client = project_client.models.get_openai_client()",
      "chat_client = project_client.chat.create_session()",
      "chat_client = project_client.get_default_model_endpoint()"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: The `azure-ai-projects` SDK exposes an OpenAI-compatible inference interface via `project_client.inference.get_chat_completions_client()`."
  },
  {
    "id": 2763,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "The Trail Guide Agent (#7) must dynamically load system instructions from `src/agents/trail_guide_agent/prompts/v4_optimized_concise.txt` before sending inference requests.",
    "question": "How should the system prompt be formatted inside the `messages` payload passed to `chat_client.complete()`?",
    "options": [
      "messages = [ { 'role': 'system', 'content': system_instructions_text }, { 'role': 'user', 'content': user_query } ]",
      "messages = [ { 'role': 'developer', 'prompt': system_instructions_text }, { 'role': 'human', 'query': user_query } ]",
      "messages = { 'system_prompt': system_instructions_text, 'user_input': user_query }",
      "messages = [ { 'type': 'instruction', 'text': system_instructions_text } ]"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In OpenAI-compatible chat completion APIs in Azure AI Foundry, the message payload is an array of dictionaries with `'role'` (`'system'`, `'user'`, `'assistant'`) and `'content'` keys."
  },
  {
    "id": 2764,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/tests/interact_with_agent.py` (#7), you notice that authentication fails with `ClientAuthenticationError: ManagedIdentityCredential authentication unavailable` when running locally on your laptop.",
    "question": "Why does `DefaultAzureCredential()` fail locally, and how do you resolve it without altering code?",
    "options": [
      "Your developer machine is not logged into Azure CLI or AZD; execute `az login` or `azd auth login` in the terminal.",
      "You must replace `DefaultAzureCredential()` with hardcoded Client Secret credentials in `.env`.",
      "The Azure AI Foundry project endpoint is down; restart the cloud resource group.",
      "You need to run `pip install azure-identity-local-fallback`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: `DefaultAzureCredential()` attempts multiple authentication chains sequentially. On a local workstation without environment secrets or managed identity, it looks for active developer CLI sessions (`az login` or `azd auth login`)."
  },
  {
    "id": 2765,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are building a custom function calling tool in `trail_guide_agent.py` (#7) that queries live weather data for hiking trails.",
    "question": "Which parameter in `chat_client.complete()` registers the Python function definitions as tools for the model?",
    "options": [
      "tools=[ { 'type': 'function', 'function': { 'name': 'get_trail_weather', 'description': '...', 'parameters': { ... } } } ], tool_choice='auto'",
      "functions=[ get_trail_weather ], auto_invoke=True",
      "plugins=[ { 'name': 'weather_api', 'handler': get_trail_weather } ]",
      "extensions=[ { 'type': 'azure_function', 'endpoint': '...' } ]"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Tool calling in modern Azure AI inference requires passing a JSON schema list under `tools=[{'type': 'function', 'function': {...}}]` and setting `tool_choice='auto'`."
  },
  {
    "id": 2766,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/tests/run_batch_tests.py` (#7), you are executing 50 automated test prompts against the Foundry endpoint. You encounter occasional `RateLimitError: 429 Too Many Requests`.",
    "question": "Which SDK retry pattern or configuration should be implemented to handle 429 rate limits gracefully?",
    "options": [
      "Configure exponential backoff retries using `azure.core.pipeline.policies.RetryPolicy` or wrap completion calls in a `tenacity` retry decorator with random jitter.",
      "Set `max_tokens: 10` in the completion call to reduce token processing load.",
      "Insert `time.sleep(60)` before every single request regardless of status code.",
      "Disable rate limiting in `azure.yaml` by setting `tpm_quota: 'unlimited'`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: When handling 429 RateLimitErrors during batch inference, implementing exponential backoff with jitter using `tenacity` or Azure SDK `RetryPolicy` prevents server overwhelming while ensuring job completion."
  },
  {
    "id": 2767,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "An MLOps engineer wants to verify which model deployment name is being used in `trail_guide_agent.py` (#7) without hardcoding it in the script.",
    "question": "Which environment variable pattern used in `.env` and `agent.yaml` correctly dynamically injects the model name?",
    "options": [
      "MODEL_NAME=os.environ.get('MODEL_NAME', 'gpt-5.1')",
      "DEPLOYMENT_ID=sys.argv[1]",
      "AZURE_OPENAI_MODEL='default-model'",
      "FOUNDRY_LLM_SKU='standard-v1'"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Using `os.environ.get('MODEL_NAME', 'gpt-5.1')` allows clean separation of configuration from code, falling back to `'gpt-5.1'` if `.env` is omitted."
  },
  {
    "id": 2768,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are upgrading `trail_guide_agent.py` (#7) to use structured JSON output mode to return gear checklists as validated JSON objects.",
    "question": "Which parameter must be passed into `chat_client.complete()` to guarantee valid JSON formatting?",
    "options": [
      "response_format={ 'type': 'json_object' } (accompanied by an instruction to return JSON in the system prompt)",
      "output_schema='json'",
      "validate_json=True",
      "content_type='application/json'"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Setting `response_format={'type': 'json_object'}` forces the Azure OpenAI model to output syntactically valid JSON, provided the system prompt explicitly requests JSON output."
  },
  {
    "id": 2769,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/agents/trail_guide_agent/agent.yaml` (#7), you need to specify the default temperature and top_p sampling parameters for deterministic trail safety advice.",
    "question": "Which YAML configuration values ensure the lowest randomness and highest factual consistency?",
    "options": [
      "temperature: 0.0 and top_p: 1.0",
      "temperature: 1.5 and top_p: 0.1",
      "temperature: 0.8 and frequency_penalty: 2.0",
      "randomness: 'disabled' and sampling: 'greedy'"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Setting `temperature: 0.0` eliminates sampling randomness, producing greedy, deterministic, and highly reproducible responses required for factual safety advice."
  },
  {
    "id": 2770,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are testing multi-turn conversation memory in `interact_with_agent.py` (#7). After 10 turns, response latency degrades significantly.",
    "question": "What is the primary operational cause of this latency degradation in multi-turn chat loops without sliding window memory?",
    "options": [
      "Token inflation: Appending the entire conversation history to `messages` on every turn quadratically increases input token volume and attention compute time.",
      "Azure AI Foundry throttle timers automatically slow down long sessions.",
      "The Python virtual environment `.venv` runs out of local RAM buffer.",
      "OpenTelemetry trace spans create blocking synchronous I/O loops."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In stateless chat completion APIs, the entire chat history must be sent on every request. Without pruning or summarization (sliding window), token volume grows linearly, causing quadratic increases in latency and cost."
  },
  {
    "id": 2771,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/agents/trail_guide_agent/trail_guide_agent.py` (#8), you are initializing connection to Microsoft Foundry using `azure-ai-projects` SDK.",
    "question": "Which exact code snippet correctly initializes `AIProjectClient` using secret-free Entra ID authentication from `.env`?",
    "options": [
      "project_client = AIProjectClient.from_connection_string(credential=DefaultAzureCredential(), conn_str=os.environ['AZURE_AI_PROJECT_ENDPOINT'])",
      "project_client = AIProjectClient(endpoint=os.environ['AZURE_AI_PROJECT_ENDPOINT'], api_key=os.environ['OPENAI_API_KEY'])",
      "project_client = AIProjectClient.create(workspace_name='ai-hub', credential=InteractiveBrowserCredential())",
      "project_client = AzureOpenAI(azure_endpoint=os.environ['AZURE_AI_PROJECT_ENDPOINT'], api_version='2024-02-01')"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In the `azure-ai-projects` SDK, the client is initialized using `AIProjectClient.from_connection_string(credential=DefaultAzureCredential(), conn_str=os.environ['AZURE_AI_PROJECT_ENDPOINT'])`."
  },
  {
    "id": 2772,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are implementing streaming conversational chat in `trail_guide_agent.py` (#8) using the model deployment specified in `agent.yaml` (`gpt-5.1`).",
    "question": "Which SDK method retrieves the OpenAI-compatible chat client from `AIProjectClient`?",
    "options": [
      "chat_client = project_client.inference.get_chat_completions_client()",
      "chat_client = project_client.models.get_openai_client()",
      "chat_client = project_client.chat.create_session()",
      "chat_client = project_client.get_default_model_endpoint()"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: The `azure-ai-projects` SDK exposes an OpenAI-compatible inference interface via `project_client.inference.get_chat_completions_client()`."
  },
  {
    "id": 2773,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "The Trail Guide Agent (#8) must dynamically load system instructions from `src/agents/trail_guide_agent/prompts/v4_optimized_concise.txt` before sending inference requests.",
    "question": "How should the system prompt be formatted inside the `messages` payload passed to `chat_client.complete()`?",
    "options": [
      "messages = [ { 'role': 'system', 'content': system_instructions_text }, { 'role': 'user', 'content': user_query } ]",
      "messages = [ { 'role': 'developer', 'prompt': system_instructions_text }, { 'role': 'human', 'query': user_query } ]",
      "messages = { 'system_prompt': system_instructions_text, 'user_input': user_query }",
      "messages = [ { 'type': 'instruction', 'text': system_instructions_text } ]"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In OpenAI-compatible chat completion APIs in Azure AI Foundry, the message payload is an array of dictionaries with `'role'` (`'system'`, `'user'`, `'assistant'`) and `'content'` keys."
  },
  {
    "id": 2774,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/tests/interact_with_agent.py` (#8), you notice that authentication fails with `ClientAuthenticationError: ManagedIdentityCredential authentication unavailable` when running locally on your laptop.",
    "question": "Why does `DefaultAzureCredential()` fail locally, and how do you resolve it without altering code?",
    "options": [
      "Your developer machine is not logged into Azure CLI or AZD; execute `az login` or `azd auth login` in the terminal.",
      "You must replace `DefaultAzureCredential()` with hardcoded Client Secret credentials in `.env`.",
      "The Azure AI Foundry project endpoint is down; restart the cloud resource group.",
      "You need to run `pip install azure-identity-local-fallback`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: `DefaultAzureCredential()` attempts multiple authentication chains sequentially. On a local workstation without environment secrets or managed identity, it looks for active developer CLI sessions (`az login` or `azd auth login`)."
  },
  {
    "id": 2775,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are building a custom function calling tool in `trail_guide_agent.py` (#8) that queries live weather data for hiking trails.",
    "question": "Which parameter in `chat_client.complete()` registers the Python function definitions as tools for the model?",
    "options": [
      "tools=[ { 'type': 'function', 'function': { 'name': 'get_trail_weather', 'description': '...', 'parameters': { ... } } } ], tool_choice='auto'",
      "functions=[ get_trail_weather ], auto_invoke=True",
      "plugins=[ { 'name': 'weather_api', 'handler': get_trail_weather } ]",
      "extensions=[ { 'type': 'azure_function', 'endpoint': '...' } ]"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Tool calling in modern Azure AI inference requires passing a JSON schema list under `tools=[{'type': 'function', 'function': {...}}]` and setting `tool_choice='auto'`."
  },
  {
    "id": 2776,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/tests/run_batch_tests.py` (#8), you are executing 50 automated test prompts against the Foundry endpoint. You encounter occasional `RateLimitError: 429 Too Many Requests`.",
    "question": "Which SDK retry pattern or configuration should be implemented to handle 429 rate limits gracefully?",
    "options": [
      "Configure exponential backoff retries using `azure.core.pipeline.policies.RetryPolicy` or wrap completion calls in a `tenacity` retry decorator with random jitter.",
      "Set `max_tokens: 10` in the completion call to reduce token processing load.",
      "Insert `time.sleep(60)` before every single request regardless of status code.",
      "Disable rate limiting in `azure.yaml` by setting `tpm_quota: 'unlimited'`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: When handling 429 RateLimitErrors during batch inference, implementing exponential backoff with jitter using `tenacity` or Azure SDK `RetryPolicy` prevents server overwhelming while ensuring job completion."
  },
  {
    "id": 2777,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "An MLOps engineer wants to verify which model deployment name is being used in `trail_guide_agent.py` (#8) without hardcoding it in the script.",
    "question": "Which environment variable pattern used in `.env` and `agent.yaml` correctly dynamically injects the model name?",
    "options": [
      "MODEL_NAME=os.environ.get('MODEL_NAME', 'gpt-5.1')",
      "DEPLOYMENT_ID=sys.argv[1]",
      "AZURE_OPENAI_MODEL='default-model'",
      "FOUNDRY_LLM_SKU='standard-v1'"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Using `os.environ.get('MODEL_NAME', 'gpt-5.1')` allows clean separation of configuration from code, falling back to `'gpt-5.1'` if `.env` is omitted."
  },
  {
    "id": 2778,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are upgrading `trail_guide_agent.py` (#8) to use structured JSON output mode to return gear checklists as validated JSON objects.",
    "question": "Which parameter must be passed into `chat_client.complete()` to guarantee valid JSON formatting?",
    "options": [
      "response_format={ 'type': 'json_object' } (accompanied by an instruction to return JSON in the system prompt)",
      "output_schema='json'",
      "validate_json=True",
      "content_type='application/json'"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Setting `response_format={'type': 'json_object'}` forces the Azure OpenAI model to output syntactically valid JSON, provided the system prompt explicitly requests JSON output."
  },
  {
    "id": 2779,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/agents/trail_guide_agent/agent.yaml` (#8), you need to specify the default temperature and top_p sampling parameters for deterministic trail safety advice.",
    "question": "Which YAML configuration values ensure the lowest randomness and highest factual consistency?",
    "options": [
      "temperature: 0.0 and top_p: 1.0",
      "temperature: 1.5 and top_p: 0.1",
      "temperature: 0.8 and frequency_penalty: 2.0",
      "randomness: 'disabled' and sampling: 'greedy'"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Setting `temperature: 0.0` eliminates sampling randomness, producing greedy, deterministic, and highly reproducible responses required for factual safety advice."
  },
  {
    "id": 2780,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are testing multi-turn conversation memory in `interact_with_agent.py` (#8). After 10 turns, response latency degrades significantly.",
    "question": "What is the primary operational cause of this latency degradation in multi-turn chat loops without sliding window memory?",
    "options": [
      "Token inflation: Appending the entire conversation history to `messages` on every turn quadratically increases input token volume and attention compute time.",
      "Azure AI Foundry throttle timers automatically slow down long sessions.",
      "The Python virtual environment `.venv` runs out of local RAM buffer.",
      "OpenTelemetry trace spans create blocking synchronous I/O loops."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In stateless chat completion APIs, the entire chat history must be sent on every request. Without pruning or summarization (sliding window), token volume grows linearly, causing quadratic increases in latency and cost."
  },
  {
    "id": 2781,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/agents/trail_guide_agent/trail_guide_agent.py` (#9), you are initializing connection to Microsoft Foundry using `azure-ai-projects` SDK.",
    "question": "Which exact code snippet correctly initializes `AIProjectClient` using secret-free Entra ID authentication from `.env`?",
    "options": [
      "project_client = AIProjectClient.from_connection_string(credential=DefaultAzureCredential(), conn_str=os.environ['AZURE_AI_PROJECT_ENDPOINT'])",
      "project_client = AIProjectClient(endpoint=os.environ['AZURE_AI_PROJECT_ENDPOINT'], api_key=os.environ['OPENAI_API_KEY'])",
      "project_client = AIProjectClient.create(workspace_name='ai-hub', credential=InteractiveBrowserCredential())",
      "project_client = AzureOpenAI(azure_endpoint=os.environ['AZURE_AI_PROJECT_ENDPOINT'], api_version='2024-02-01')"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In the `azure-ai-projects` SDK, the client is initialized using `AIProjectClient.from_connection_string(credential=DefaultAzureCredential(), conn_str=os.environ['AZURE_AI_PROJECT_ENDPOINT'])`."
  },
  {
    "id": 2782,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are implementing streaming conversational chat in `trail_guide_agent.py` (#9) using the model deployment specified in `agent.yaml` (`gpt-5.1`).",
    "question": "Which SDK method retrieves the OpenAI-compatible chat client from `AIProjectClient`?",
    "options": [
      "chat_client = project_client.inference.get_chat_completions_client()",
      "chat_client = project_client.models.get_openai_client()",
      "chat_client = project_client.chat.create_session()",
      "chat_client = project_client.get_default_model_endpoint()"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: The `azure-ai-projects` SDK exposes an OpenAI-compatible inference interface via `project_client.inference.get_chat_completions_client()`."
  },
  {
    "id": 2783,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "The Trail Guide Agent (#9) must dynamically load system instructions from `src/agents/trail_guide_agent/prompts/v4_optimized_concise.txt` before sending inference requests.",
    "question": "How should the system prompt be formatted inside the `messages` payload passed to `chat_client.complete()`?",
    "options": [
      "messages = [ { 'role': 'system', 'content': system_instructions_text }, { 'role': 'user', 'content': user_query } ]",
      "messages = [ { 'role': 'developer', 'prompt': system_instructions_text }, { 'role': 'human', 'query': user_query } ]",
      "messages = { 'system_prompt': system_instructions_text, 'user_input': user_query }",
      "messages = [ { 'type': 'instruction', 'text': system_instructions_text } ]"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In OpenAI-compatible chat completion APIs in Azure AI Foundry, the message payload is an array of dictionaries with `'role'` (`'system'`, `'user'`, `'assistant'`) and `'content'` keys."
  },
  {
    "id": 2784,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/tests/interact_with_agent.py` (#9), you notice that authentication fails with `ClientAuthenticationError: ManagedIdentityCredential authentication unavailable` when running locally on your laptop.",
    "question": "Why does `DefaultAzureCredential()` fail locally, and how do you resolve it without altering code?",
    "options": [
      "Your developer machine is not logged into Azure CLI or AZD; execute `az login` or `azd auth login` in the terminal.",
      "You must replace `DefaultAzureCredential()` with hardcoded Client Secret credentials in `.env`.",
      "The Azure AI Foundry project endpoint is down; restart the cloud resource group.",
      "You need to run `pip install azure-identity-local-fallback`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: `DefaultAzureCredential()` attempts multiple authentication chains sequentially. On a local workstation without environment secrets or managed identity, it looks for active developer CLI sessions (`az login` or `azd auth login`)."
  },
  {
    "id": 2785,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are building a custom function calling tool in `trail_guide_agent.py` (#9) that queries live weather data for hiking trails.",
    "question": "Which parameter in `chat_client.complete()` registers the Python function definitions as tools for the model?",
    "options": [
      "tools=[ { 'type': 'function', 'function': { 'name': 'get_trail_weather', 'description': '...', 'parameters': { ... } } } ], tool_choice='auto'",
      "functions=[ get_trail_weather ], auto_invoke=True",
      "plugins=[ { 'name': 'weather_api', 'handler': get_trail_weather } ]",
      "extensions=[ { 'type': 'azure_function', 'endpoint': '...' } ]"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Tool calling in modern Azure AI inference requires passing a JSON schema list under `tools=[{'type': 'function', 'function': {...}}]` and setting `tool_choice='auto'`."
  },
  {
    "id": 2786,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/tests/run_batch_tests.py` (#9), you are executing 50 automated test prompts against the Foundry endpoint. You encounter occasional `RateLimitError: 429 Too Many Requests`.",
    "question": "Which SDK retry pattern or configuration should be implemented to handle 429 rate limits gracefully?",
    "options": [
      "Configure exponential backoff retries using `azure.core.pipeline.policies.RetryPolicy` or wrap completion calls in a `tenacity` retry decorator with random jitter.",
      "Set `max_tokens: 10` in the completion call to reduce token processing load.",
      "Insert `time.sleep(60)` before every single request regardless of status code.",
      "Disable rate limiting in `azure.yaml` by setting `tpm_quota: 'unlimited'`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: When handling 429 RateLimitErrors during batch inference, implementing exponential backoff with jitter using `tenacity` or Azure SDK `RetryPolicy` prevents server overwhelming while ensuring job completion."
  },
  {
    "id": 2787,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "An MLOps engineer wants to verify which model deployment name is being used in `trail_guide_agent.py` (#9) without hardcoding it in the script.",
    "question": "Which environment variable pattern used in `.env` and `agent.yaml` correctly dynamically injects the model name?",
    "options": [
      "MODEL_NAME=os.environ.get('MODEL_NAME', 'gpt-5.1')",
      "DEPLOYMENT_ID=sys.argv[1]",
      "AZURE_OPENAI_MODEL='default-model'",
      "FOUNDRY_LLM_SKU='standard-v1'"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Using `os.environ.get('MODEL_NAME', 'gpt-5.1')` allows clean separation of configuration from code, falling back to `'gpt-5.1'` if `.env` is omitted."
  },
  {
    "id": 2788,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are upgrading `trail_guide_agent.py` (#9) to use structured JSON output mode to return gear checklists as validated JSON objects.",
    "question": "Which parameter must be passed into `chat_client.complete()` to guarantee valid JSON formatting?",
    "options": [
      "response_format={ 'type': 'json_object' } (accompanied by an instruction to return JSON in the system prompt)",
      "output_schema='json'",
      "validate_json=True",
      "content_type='application/json'"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Setting `response_format={'type': 'json_object'}` forces the Azure OpenAI model to output syntactically valid JSON, provided the system prompt explicitly requests JSON output."
  },
  {
    "id": 2789,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/agents/trail_guide_agent/agent.yaml` (#9), you need to specify the default temperature and top_p sampling parameters for deterministic trail safety advice.",
    "question": "Which YAML configuration values ensure the lowest randomness and highest factual consistency?",
    "options": [
      "temperature: 0.0 and top_p: 1.0",
      "temperature: 1.5 and top_p: 0.1",
      "temperature: 0.8 and frequency_penalty: 2.0",
      "randomness: 'disabled' and sampling: 'greedy'"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Setting `temperature: 0.0` eliminates sampling randomness, producing greedy, deterministic, and highly reproducible responses required for factual safety advice."
  },
  {
    "id": 2790,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are testing multi-turn conversation memory in `interact_with_agent.py` (#9). After 10 turns, response latency degrades significantly.",
    "question": "What is the primary operational cause of this latency degradation in multi-turn chat loops without sliding window memory?",
    "options": [
      "Token inflation: Appending the entire conversation history to `messages` on every turn quadratically increases input token volume and attention compute time.",
      "Azure AI Foundry throttle timers automatically slow down long sessions.",
      "The Python virtual environment `.venv` runs out of local RAM buffer.",
      "OpenTelemetry trace spans create blocking synchronous I/O loops."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In stateless chat completion APIs, the entire chat history must be sent on every request. Without pruning or summarization (sliding window), token volume grows linearly, causing quadratic increases in latency and cost."
  },
  {
    "id": 2791,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/agents/trail_guide_agent/trail_guide_agent.py` (#10), you are initializing connection to Microsoft Foundry using `azure-ai-projects` SDK.",
    "question": "Which exact code snippet correctly initializes `AIProjectClient` using secret-free Entra ID authentication from `.env`?",
    "options": [
      "project_client = AIProjectClient.from_connection_string(credential=DefaultAzureCredential(), conn_str=os.environ['AZURE_AI_PROJECT_ENDPOINT'])",
      "project_client = AIProjectClient(endpoint=os.environ['AZURE_AI_PROJECT_ENDPOINT'], api_key=os.environ['OPENAI_API_KEY'])",
      "project_client = AIProjectClient.create(workspace_name='ai-hub', credential=InteractiveBrowserCredential())",
      "project_client = AzureOpenAI(azure_endpoint=os.environ['AZURE_AI_PROJECT_ENDPOINT'], api_version='2024-02-01')"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In the `azure-ai-projects` SDK, the client is initialized using `AIProjectClient.from_connection_string(credential=DefaultAzureCredential(), conn_str=os.environ['AZURE_AI_PROJECT_ENDPOINT'])`."
  },
  {
    "id": 2792,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are implementing streaming conversational chat in `trail_guide_agent.py` (#10) using the model deployment specified in `agent.yaml` (`gpt-5.1`).",
    "question": "Which SDK method retrieves the OpenAI-compatible chat client from `AIProjectClient`?",
    "options": [
      "chat_client = project_client.inference.get_chat_completions_client()",
      "chat_client = project_client.models.get_openai_client()",
      "chat_client = project_client.chat.create_session()",
      "chat_client = project_client.get_default_model_endpoint()"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: The `azure-ai-projects` SDK exposes an OpenAI-compatible inference interface via `project_client.inference.get_chat_completions_client()`."
  },
  {
    "id": 2793,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "The Trail Guide Agent (#10) must dynamically load system instructions from `src/agents/trail_guide_agent/prompts/v4_optimized_concise.txt` before sending inference requests.",
    "question": "How should the system prompt be formatted inside the `messages` payload passed to `chat_client.complete()`?",
    "options": [
      "messages = [ { 'role': 'system', 'content': system_instructions_text }, { 'role': 'user', 'content': user_query } ]",
      "messages = [ { 'role': 'developer', 'prompt': system_instructions_text }, { 'role': 'human', 'query': user_query } ]",
      "messages = { 'system_prompt': system_instructions_text, 'user_input': user_query }",
      "messages = [ { 'type': 'instruction', 'text': system_instructions_text } ]"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In OpenAI-compatible chat completion APIs in Azure AI Foundry, the message payload is an array of dictionaries with `'role'` (`'system'`, `'user'`, `'assistant'`) and `'content'` keys."
  },
  {
    "id": 2794,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/tests/interact_with_agent.py` (#10), you notice that authentication fails with `ClientAuthenticationError: ManagedIdentityCredential authentication unavailable` when running locally on your laptop.",
    "question": "Why does `DefaultAzureCredential()` fail locally, and how do you resolve it without altering code?",
    "options": [
      "Your developer machine is not logged into Azure CLI or AZD; execute `az login` or `azd auth login` in the terminal.",
      "You must replace `DefaultAzureCredential()` with hardcoded Client Secret credentials in `.env`.",
      "The Azure AI Foundry project endpoint is down; restart the cloud resource group.",
      "You need to run `pip install azure-identity-local-fallback`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: `DefaultAzureCredential()` attempts multiple authentication chains sequentially. On a local workstation without environment secrets or managed identity, it looks for active developer CLI sessions (`az login` or `azd auth login`)."
  },
  {
    "id": 2795,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are building a custom function calling tool in `trail_guide_agent.py` (#10) that queries live weather data for hiking trails.",
    "question": "Which parameter in `chat_client.complete()` registers the Python function definitions as tools for the model?",
    "options": [
      "tools=[ { 'type': 'function', 'function': { 'name': 'get_trail_weather', 'description': '...', 'parameters': { ... } } } ], tool_choice='auto'",
      "functions=[ get_trail_weather ], auto_invoke=True",
      "plugins=[ { 'name': 'weather_api', 'handler': get_trail_weather } ]",
      "extensions=[ { 'type': 'azure_function', 'endpoint': '...' } ]"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Tool calling in modern Azure AI inference requires passing a JSON schema list under `tools=[{'type': 'function', 'function': {...}}]` and setting `tool_choice='auto'`."
  },
  {
    "id": 2796,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/tests/run_batch_tests.py` (#10), you are executing 50 automated test prompts against the Foundry endpoint. You encounter occasional `RateLimitError: 429 Too Many Requests`.",
    "question": "Which SDK retry pattern or configuration should be implemented to handle 429 rate limits gracefully?",
    "options": [
      "Configure exponential backoff retries using `azure.core.pipeline.policies.RetryPolicy` or wrap completion calls in a `tenacity` retry decorator with random jitter.",
      "Set `max_tokens: 10` in the completion call to reduce token processing load.",
      "Insert `time.sleep(60)` before every single request regardless of status code.",
      "Disable rate limiting in `azure.yaml` by setting `tpm_quota: 'unlimited'`."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: When handling 429 RateLimitErrors during batch inference, implementing exponential backoff with jitter using `tenacity` or Azure SDK `RetryPolicy` prevents server overwhelming while ensuring job completion."
  },
  {
    "id": 2797,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "An MLOps engineer wants to verify which model deployment name is being used in `trail_guide_agent.py` (#10) without hardcoding it in the script.",
    "question": "Which environment variable pattern used in `.env` and `agent.yaml` correctly dynamically injects the model name?",
    "options": [
      "MODEL_NAME=os.environ.get('MODEL_NAME', 'gpt-5.1')",
      "DEPLOYMENT_ID=sys.argv[1]",
      "AZURE_OPENAI_MODEL='default-model'",
      "FOUNDRY_LLM_SKU='standard-v1'"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Using `os.environ.get('MODEL_NAME', 'gpt-5.1')` allows clean separation of configuration from code, falling back to `'gpt-5.1'` if `.env` is omitted."
  },
  {
    "id": 2798,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are upgrading `trail_guide_agent.py` (#10) to use structured JSON output mode to return gear checklists as validated JSON objects.",
    "question": "Which parameter must be passed into `chat_client.complete()` to guarantee valid JSON formatting?",
    "options": [
      "response_format={ 'type': 'json_object' } (accompanied by an instruction to return JSON in the system prompt)",
      "output_schema='json'",
      "validate_json=True",
      "content_type='application/json'"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Setting `response_format={'type': 'json_object'}` forces the Azure OpenAI model to output syntactically valid JSON, provided the system prompt explicitly requests JSON output."
  },
  {
    "id": 2799,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "In `src/agents/trail_guide_agent/agent.yaml` (#10), you need to specify the default temperature and top_p sampling parameters for deterministic trail safety advice.",
    "question": "Which YAML configuration values ensure the lowest randomness and highest factual consistency?",
    "options": [
      "temperature: 0.0 and top_p: 1.0",
      "temperature: 1.5 and top_p: 0.1",
      "temperature: 0.8 and frequency_penalty: 2.0",
      "randomness: 'disabled' and sampling: 'greedy'"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: Setting `temperature: 0.0` eliminates sampling randomness, producing greedy, deterministic, and highly reproducible responses required for factual safety advice."
  },
  {
    "id": 2800,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Moderate",
    "type": "single",
    "scenario": "You are testing multi-turn conversation memory in `interact_with_agent.py` (#10). After 10 turns, response latency degrades significantly.",
    "question": "What is the primary operational cause of this latency degradation in multi-turn chat loops without sliding window memory?",
    "options": [
      "Token inflation: Appending the entire conversation history to `messages` on every turn quadratically increases input token volume and attention compute time.",
      "Azure AI Foundry throttle timers automatically slow down long sessions.",
      "The Python virtual environment `.venv` runs out of local RAM buffer.",
      "OpenTelemetry trace spans create blocking synchronous I/O loops."
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Operational Correction: In stateless chat completion APIs, the entire chat history must be sent on every request. Without pruning or summarization (sliding window), token volume grows linearly, causing quadratic increases in latency and cost."
  }
];
