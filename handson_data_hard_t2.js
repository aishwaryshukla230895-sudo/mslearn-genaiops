// AI-300 Hands-On Enterprise Implementation Simulator (HARD Tier - Track 2: Python SDK v2 & Azure AI Foundry Client)
window.HANDSON_DATA_HARD_T2 = [
  {
    "id": 3301,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3302,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3303,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3304,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3305,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3306,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3307,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3308,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3309,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3310,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3311,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3312,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3313,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3314,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3315,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3316,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3317,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3318,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3319,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3320,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3321,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3322,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3323,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3324,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3325,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3326,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3327,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3328,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3329,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3330,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3331,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3332,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3333,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3334,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3335,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3336,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3337,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3338,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3339,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3340,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3341,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3342,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3343,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3344,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3345,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3346,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3347,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3348,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3349,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3350,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3351,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3352,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3353,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3354,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3355,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3356,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3357,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3358,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3359,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3360,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3361,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3362,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3363,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3364,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3365,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3366,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3367,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3368,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3369,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3370,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3371,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3372,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3373,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3374,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3375,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3376,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3377,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3378,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3379,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3380,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3381,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3382,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3383,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3384,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3385,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3386,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3387,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3388,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3389,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3390,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3391,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3392,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3393,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3394,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3395,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3396,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3397,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3398,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3399,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
    "id": 3400,
    "track": "T2",
    "domain": "Track 2: Python SDK v2 & Azure AI Foundry Client",
    "difficulty": "Hard",
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
