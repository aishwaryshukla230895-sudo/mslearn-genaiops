window.QUIZ_DATA_P1 = [
  // ==========================================
  // DOMAIN 1: Azure AI Foundry & Cloud Infrastructure (Questions 1-15)
  // ==========================================
  {
    id: 1,
    domain: "Domain 1: Azure AI Foundry & Cloud Infrastructure",
    type: "single",
    scenario: "You are setting up the automated infrastructure for the Adventure Works Trail Guide Agent using the Azure Developer CLI (azd). When you run 'azd up', the CLI reads configuration files to determine which cloud resources to provision.",
    question: "Which file acts as the root infrastructure orchestration template responsible for provisioning the Azure Resource Group, Microsoft Foundry Hub, Project, Log Analytics, and Application Insights?",
    options: [
      "A) azure.yaml",
      "B) infra/main.bicep",
      "C) infra/main.parameters.json",
      "D) requirements.txt"
    ],
    correctAnswer: [1],
    explanation: "Correct Answer: B) infra/main.bicep. Explanation: In the GenAIOps architecture, 'infra/main.bicep' is the root Bicep template that orchestrates the creation of all foundational Azure resources including the Foundry Hub, Project, and observability workspace. Why others are incorrect: azure.yaml defines AZD project metadata; main.parameters.json supplies Bicep parameters; requirements.txt lists Python dependencies."
  },
  {
    id: 2,
    domain: "Domain 1: Azure AI Foundry & Cloud Infrastructure",
    type: "single",
    scenario: "An enterprise engineering team is deploying multiple Generative AI solutions across dev, staging, and production environments using Microsoft Foundry. They need to ensure that all Azure AI Services accounts, Foundry Projects, and storage buckets follow a standardized naming convention without hardcoding prefixes in every template.",
    question: "Which file in the repository architecture is specifically designed to standardize resource naming prefixes across deployed cloud components?",
    options: [
      "A) infra/abbreviations.json",
      "B) infra/core/ai/account.bicep",
      "C) .env",
      "D) agent.yaml"
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) infra/abbreviations.json. Explanation: 'abbreviations.json' standardizes Azure resource naming prefixes across deployed cloud components (e.g., 'ai-' for AI accounts, 'proj-' for Foundry projects), ensuring consistent naming across environments. Why others are incorrect: account.bicep defines the AI account module; .env stores runtime environment endpoints; agent.yaml configures agent runtime metadata."
  },
  {
    id: 3,
    domain: "Domain 1: Azure AI Foundry & Cloud Infrastructure",
    type: "single",
    scenario: "You have completed testing the Adventure Works Trail Guide Agent proof-of-concept in Azure AI Foundry. To prevent ongoing cloud costs, you want to delete the resource group 'rg-trailguide-poc'. However, you know that standard deletion places Cognitive Services and Azure Key Vaults into a 90-day soft-delete recovery state.",
    question: "Which exact Azure Developer CLI (azd) command must you execute to bypass the 90-day soft-delete retention period and immediately release locked DNS names?",
    options: [
      "A) azd down --force",
      "B) azd down --purge",
      "C) azd down --force --purge",
      "D) az group delete --name rg-trailguide-poc --yes"
    ],
    correctAnswer: [2],
    explanation: "Correct Answer: C) azd down --force --purge. Explanation: The '--force --purge' flags instruct azd to forcefully tear down the deployment AND permanently purge soft-deleted Cognitive Services and Key Vaults immediately, releasing DNS names and preventing quota/billing locks. Why others are incorrect: '--force' alone does not purge soft-delete; '--purge' alone without force may fail on active resources; 'az group delete' leaves resources in soft-delete for up to 90 days."
  },
  {
    id: 4,
    domain: "Domain 1: Azure AI Foundry & Cloud Infrastructure",
    type: "single",
    scenario: "During the cloud setup phase of the GenAIOps lifecycle, 'azd up' successfully deploys the Azure OpenAI model deployment ('gpt-5.1'), Foundry Hub, and Foundry Project. The local Python scripts need to securely connect to these resources without storing hardcoded API keys or passwords in the source repository.",
    question: "How do the Python SDK scripts authenticate against Microsoft Foundry and where are the runtime endpoints stored locally?",
    options: [
      "A) They read API keys from agent.yaml and authenticate via APIKeyCredential.",
      "B) They read secret-free endpoints (AZURE_AI_PROJECT_ENDPOINT) from .env and authenticate using DefaultAzureCredential().",
      "C) They fetch OAuth tokens from azure.yaml and authenticate via ClientSecretCredential.",
      "D) They use hardcoded SAS tokens stored in requirements.txt."
    ],
    correctAnswer: [1],
    explanation: "Correct Answer: B) They read secret-free endpoints (AZURE_AI_PROJECT_ENDPOINT) from .env and authenticate using DefaultAzureCredential(). Explanation: Best practice in GenAIOps uses secret-free authentication via Microsoft Entra ID. 'azd up' outputs endpoints to '.env', and Python scripts use 'DefaultAzureCredential()', which leverages developer login sessions ('az login' or 'azd auth login') without API keys. Why others are incorrect: Storing API keys or tokens in YAML, TXT, or code is a major security violation."
  },
  {
    id: 5,
    domain: "Domain 1: Azure AI Foundry & Cloud Infrastructure",
    type: "multiple",
    scenario: "In Microsoft Foundry architecture, resources are organized into hierarchically connected components. You are designing an enterprise deployment supporting multiple AI agent projects across different departments.",
    question: "Which of the following statements accurately describe the relationship and roles of an Azure AI Foundry Hub and an Azure AI Foundry Project? (Select two)",
    options: [
      "A) A Foundry Hub acts as the central administrative resource that manages shared security, networking, storage, and AI service connections.",
      "B) A Foundry Project is an isolated developer workspace created under a Hub where teams build, evaluate, and deploy specific AI applications.",
      "C) You can only create one Foundry Project per Azure subscription.",
      "D) Application Insights and Log Analytics must be provisioned separately inside each Foundry Project rather than shared at the Hub level."
    ],
    correctAnswer: [0, 1],
    explanation: "Correct Answer: A and B. Explanation: In Microsoft Foundry, the Hub is the parent resource managing shared infrastructure (networking, storage, AI connections, security), while Projects are child workspaces where developer teams build, evaluate, and trace specific agents. Why others are incorrect: You can create multiple Projects under a Hub/subscription; observability resources (App Insights/Log Analytics) are typically connected at the Hub level and inherited by Projects."
  },
  {
    id: 6,
    domain: "Domain 1: Azure AI Foundry & Cloud Infrastructure",
    type: "single",
    scenario: "You are reviewing the modular Bicep templates located in 'infra/core/' within the mslearn-genaiops repository. You need to verify which specific module is responsible for deploying the Azure OpenAI model deployment ('gpt-5.1') and setting its quota.",
    question: "Which subdirectory under 'infra/core/' contains the granular Bicep modules defining the AI Services Accounts and model deployments?",
    options: [
      "A) infra/core/monitor/",
      "B) infra/core/ai/",
      "C) infra/core/host/",
      "D) infra/core/storage/"
    ],
    correctAnswer: [1],
    explanation: "Correct Answer: B) infra/core/ai/. Explanation: In the modular repository architecture, 'infra/core/ai/' contains the Bicep templates defining Azure AI Services accounts, Foundry workspaces, and model deployments (like gpt-5.1). Why others are incorrect: monitor/ manages App Insights and Log Analytics; host/ manages container/compute hosting; storage/ manages blob/file storage."
  },
  {
    id: 7,
    domain: "Domain 1: Azure AI Foundry & Cloud Infrastructure",
    type: "single",
    scenario: "A developer attempts to run 'trail_guide_agent.py' locally after cloning the repository. The script crashes with an authentication error stating 'DefaultAzureCredential failed to retrieve a token from the running environment'.",
    question: "What is the most likely root cause and immediate remediation step for this authentication failure?",
    options: [
      "A) The developer forgot to add an OpenAI API key to requirements.txt.",
      "B) The developer has not authenticated locally with Entra ID; they must run 'az login' or 'azd auth login' in their terminal.",
      "C) The Bicep template in 'infra/main.bicep' has a syntax error.",
      "D) The developer must edit '.gitignore' to unblock local credentials."
    ],
    correctAnswer: [1],
    explanation: "Correct Answer: B) The developer has not authenticated locally with Entra ID; they must run 'az login' or 'azd auth login' in their terminal. Explanation: DefaultAzureCredential checks multiple local authentication providers in sequence (Azure CLI, AZD, PowerShell, VS Code). If none are logged in, token retrieval fails. Why others are incorrect: We do not use API keys in requirements.txt; Bicep syntax errors happen during 'azd up'; .gitignore does not affect runtime credentials."
  },
  {
    id: 8,
    domain: "Domain 1: Azure AI Foundry & Cloud Infrastructure",
    type: "single",
    scenario: "Why is it critical that the '.env' and '.venv/' directories are explicitly listed in the repository's '.gitignore' file in a production GenAIOps workflow?",
    options: [
      "A) To ensure that GitHub Actions can compile Bicep templates faster without scanning virtual environments.",
      "B) To prevent committing local environment variables (which may contain endpoints or local configuration) and bulky platform-dependent Python binaries to source control.",
      "C) Because Microsoft Foundry rejects repositories that contain more than 100 files.",
      "D) To allow Azure AI Search indexers to crawl the repository without getting stuck in dependency folders."
    ],
    correctAnswer: [1],
    explanation: "Correct Answer: B) To prevent committing local environment variables and bulky platform-dependent Python binaries to source control. Explanation: '.env' stores local endpoints and environment settings, while '.venv/' contains gigabytes of local OS-specific Python binaries. Committing them violates Git best practices and security governance. Why others are incorrect: GitHub Actions Bicep compilation is unrelated; file count limits are irrelevant; AI Search does not crawl Git repos directly like this."
  },
  {
    id: 9,
    domain: "Domain 1: Azure AI Foundry & Cloud Infrastructure",
    type: "single",
    scenario: "When deploying Bicep templates via Azure Developer CLI, what is the role of 'infra/main.parameters.json'?",
    options: [
      "A) It defines the Python package versions installed during CI/CD build steps.",
      "B) It supplies default parameter values (such as environment name, Azure region location, and resource prefixes) to 'main.bicep'.",
      "C) It stores the evaluation ground-truth answers for LLM-as-a-Judge scoring.",
      "D) It configures the system prompt instructions for the OpenAI chat client."
    ],
    correctAnswer: [1],
    explanation: "Correct Answer: B) It supplies default parameter values (such as environment name, Azure region location, and resource prefixes) to 'main.bicep'. Explanation: In Bicep deployments, parameter files JSON decouple configuration values from the template logic, allowing consistent deployments across environments. Why others are incorrect: Python packages are in requirements.txt; ground-truth is in data/trail_guide_evaluation_dataset.jsonl; system prompts are in prompts/."
  },
  {
    id: 10,
    domain: "Domain 1: Azure AI Foundry & Cloud Infrastructure",
    type: "single",
    scenario: "You are designing an automated CI/CD pipeline using GitHub Actions that provisions ephemeral test environments in Azure AI Foundry, runs validation tests, and then tears down the infrastructure.",
    question: "Why must the CI/CD teardown workflow include the '--purge' flag when deleting the resource group?",
    options: [
      "A) Because ephemeral CI/CD environments will exhaust the subscription's quota and lock DNS names for up to 90 days if soft-deleted resources are not purged.",
      "B) Because GitHub Actions cannot delete resource groups without administrative purge privileges.",
      "C) To erase GitHub workflow logs from the repository history.",
      "D) To prevent Azure Monitor from sending alert emails to the repository owner."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Because ephemeral CI/CD environments will exhaust the subscription's quota and lock DNS names for up to 90 days if soft-deleted resources are not purged. Explanation: Ephemeral CI/CD runs create AI accounts frequently. In soft-delete, those accounts continue to consume subscription model quota and hold unique DNS names, causing subsequent CI/CD runs to fail with naming conflicts or out-of-quota errors unless explicitly purged."
  },
  {
    id: 11,
    domain: "Domain 1: Azure AI Foundry & Cloud Infrastructure",
    type: "single",
    scenario: "Which file in the root directory of the GenAIOps repository defines the project metadata and instructs the Azure Developer CLI ('azd') on which Bicep templates and directories to package and deploy?",
    options: [
      "A) index.md",
      "B) azure.yaml",
      "C) agent.yaml",
      "D) _config.yml"
    ],
    correctAnswer: [1],
    explanation: "Correct Answer: B) azure.yaml. Explanation: 'azure.yaml' is the core schema file for the Azure Developer CLI (azd). It defines the project name, services, language, and maps deployment workflows to 'infra/main.bicep'. Why others are incorrect: index.md is Jekyll docs; agent.yaml is AI agent configuration; _config.yml configures GitHub Pages Jekyll builds."
  },
  {
    id: 12,
    domain: "Domain 1: Azure AI Foundry & Cloud Infrastructure",
    type: "single",
    scenario: "An engineer wants to check the exact model deployment name configured for the Trail Guide Agent without opening the Azure portal. Where in the local repository workspace is this runtime configuration value injected after running 'azd up'?",
    options: [
      "A) In the .env file under the variable MODEL_NAME or AZURE_AI_MODEL_DEPLOYMENT_NAME",
      "B) Inside the .git/config file",
      "C) In data/trail_guide_evaluation_dataset.jsonl",
      "D) In LICENSE"
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) In the .env file under the variable MODEL_NAME or AZURE_AI_MODEL_DEPLOYMENT_NAME. Explanation: 'azd up' maps outputs from 'main.bicep' directly into local environment variables in '.env', allowing local scripts to dynamically bind to the deployed cloud model name (e.g., gpt-5.1)."
  },
  {
    id: 13,
    domain: "Domain 1: Azure AI Foundry & Cloud Infrastructure",
    type: "multiple",
    scenario: "When provisioning an Azure AI Foundry environment using Bicep, which two observability resources are deployed and integrated with the Foundry workspace to enable distributed tracing and log querying? (Select two)",
    options: [
      "A) Azure Log Analytics Workspace",
      "B) Azure Application Insights",
      "C) Azure Event Grid",
      "D) Azure Relay Service"
    ],
    correctAnswer: [0, 1],
    explanation: "Correct Answer: A and B. Explanation: Azure AI Foundry relies natively on Application Insights (for real-time OpenTelemetry span ingestion and metrics) and an underlying Log Analytics workspace (for KQL log indexing across tables like AppDependencies and AppRequests)."
  },
  {
    id: 14,
    domain: "Domain 1: Azure AI Foundry & Cloud Infrastructure",
    type: "single",
    scenario: "A customer asks: What is the primary benefit of deploying Azure OpenAI models inside an Azure AI Foundry Project compared to managing standalone Azure OpenAI Cognitive Services accounts without Foundry?",
    options: [
      "A) Standalone Azure OpenAI accounts do not support GPT models.",
      "B) Azure AI Foundry provides a unified control plane integrating model deployments with automated LLM-as-a-Judge evaluations, OpenTelemetry observability, prompt flow versioning, and dataset management in a single project workspace.",
      "C) Models deployed in Foundry are 100% free of charge.",
      "D) Foundry eliminates the need for Azure Active Directory / Entra ID authentication."
    ],
    correctAnswer: [1],
    explanation: "Correct Answer: B) Azure AI Foundry provides a unified control plane integrating model deployments with automated LLM-as-a-Judge evaluations, OpenTelemetry observability, prompt flow versioning, and dataset management in a single project workspace. Explanation: Foundry is the enterprise GenAIOps hub that unifies models, data, evaluators, tracing, and governance."
  },
  {
    id: 15,
    domain: "Domain 1: Azure AI Foundry & Cloud Infrastructure",
    type: "single",
    scenario: "During an audit of your cloud infrastructure, the security team notes that your Bicep templates provision an Azure AI Services account with public network access disabled. How do developer workstations and CI/CD agents securely communicate with the Foundry endpoint in this hardened architecture?",
    options: [
      "A) By disabling SSL/TLS verification in Python scripts.",
      "B) Via Azure Private Endpoints / Private Link or authorized Virtual Network gateways with Entra ID token authentication.",
      "C) By embedding root SSH keys into requirements.txt.",
      "D) Public network access cannot be disabled for Azure AI Foundry."
    ],
    correctAnswer: [1],
    explanation: "Correct Answer: B) Via Azure Private Endpoints / Private Link or authorized Virtual Network gateways with Entra ID token authentication. Explanation: In hardened enterprise environments, Azure Private Endpoints project private IP addresses into your VNet, allowing secure Entra ID authenticated traffic without traversing the public internet."
  },

  // ==========================================
  // DOMAIN 2: GenAI Agent Architecture & SDK Implementation (Questions 16-30)
  // ==========================================
  {
    id: 16,
    domain: "Domain 2: GenAI Agent Architecture & SDK Implementation",
    type: "single",
    scenario: "You are reviewing the core implementation of the Trail Guide Agent in 'src/agents/trail_guide_agent/trail_guide_agent.py'. The script initializes a connection to Microsoft Foundry and prepares an OpenAI-compatible chat client.",
    question: "Which primary SDK class from 'azure.ai.projects' is instantiated to connect to the Foundry project workspace using the endpoint loaded from '.env'?",
    options: [
      "A) AIProjectClient",
      "B) OpenAIWorkspaceClient",
      "C) FoundryHubController",
      "D) CognitiveServicesAgent"
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) AIProjectClient. Explanation: In the Azure AI Projects SDK ('azure-ai-projects'), 'AIProjectClient.from_connection_string()' or 'AIProjectClient(endpoint, credential)' is the central entry point class used to interact with Foundry models, evaluators, datasets, and telemetry."
  },
  {
    id: 17,
    domain: "Domain 2: GenAI Agent Architecture & SDK Implementation",
    type: "single",
    scenario: "The file 'src/agents/trail_guide_agent/agent.yaml' serves as the configuration manifest for the Trail Guide Agent.",
    question: "What core operational parameters are defined within this manifest file?",
    options: [
      "A) The SQL database connection strings and user passwords.",
      "B) Agent metadata, target model deployment parameters (e.g., model name, temperature, max tokens), and default prompt file mappings.",
      "C) The GitHub Actions CI/CD cron schedules and pull request review rules.",
      "D) The Bicep infrastructure resource naming prefixes."
    ],
    correctAnswer: [1],
    explanation: "Correct Answer: B) Agent metadata, target model deployment parameters, and default prompt file mappings. Explanation: 'agent.yaml' declarative defines how the agent runtime should configure inference behavior, model selection, temperature settings, and which prompt version file to load."
  },
  {
    id: 18,
    domain: "Domain 2: GenAI Agent Architecture & SDK Implementation",
    type: "single",
    scenario: "In the mslearn-genaiops repository, system instructions are stored in 'src/agents/trail_guide_agent/prompts/' across multiple files: 'v1_instructions.txt', 'v2_structured.txt', 'v3_verbose.txt', and 'v4_optimized_concise.txt'.",
    question: "Why does the GenAIOps workflow store historical prompt iterations as individual plaintext files rather than overwriting a single prompt string in code?",
    options: [
      "A) Because Azure OpenAI models require a new file format for every 1,000 requests processed.",
      "B) To enable prompt version control, quality benchmarking, regression testing across evaluation datasets, and rollback capabilities in source control.",
      "C) Because text files execute faster than Python string variables in memory.",
      "D) To satisfy Bicep compiler requirements during cloud deployment."
    ],
    correctAnswer: [1],
    explanation: "Correct Answer: B) To enable prompt version control, quality benchmarking, regression testing across evaluation datasets, and rollback capabilities in source control. Explanation: Treating prompts as versioned code artifacts allows teams to quantitatively compare quality scores and token costs between v1, v2, v3, and v4 using automated CI/CD evaluators."
  },
  {
    id: 19,
    domain: "Domain 2: GenAI Agent Architecture & SDK Implementation",
    type: "single",
    scenario: "A developer wants to conduct real-time, multi-turn conversational testing with the Trail Guide Agent directly from their terminal without running batch scripts or uploading datasets.",
    question: "Which script in the repository architecture provides an interactive CLI loop routed through 'AIProjectClient' to the live Foundry model?",
    options: [
      "A) src/evaluators/evaluate_agent.py",
      "B) src/tests/interact_with_agent.py",
      "C) src/tests/run_monitoring.py",
      "D) src/tests/check_traces.py"
    ],
    correctAnswer: [1],
    explanation: "Correct Answer: B) src/tests/interact_with_agent.py. Explanation: 'interact_with_agent.py' opens an interactive terminal chat loop allowing developers to type prompts and instantly verify persona tone and hiking domain knowledge against the Foundry backend."
  },
  {
    id: 20,
    domain: "Domain 2: GenAI Agent Architecture & SDK Implementation",
    type: "single",
    scenario: "During automated smoke-testing, the engineering team uses 'src/tests/run_batch_tests.py' to rapidly validate agent responses across a suite of predefined hiking scenarios without manual typing.",
    question: "Where are the specialized test case scenario files (such as 'winter-hiking.txt' and 'overnight-camping.txt') stored in the repository?",
    options: [
      "A) In the root .github/ directory.",
      "B) In src/tests/test-prompts/",
      "C) In infra/core/ai/",
      "D) In data/trail_guide_evaluation_dataset.jsonl"
    ],
    correctAnswer: [1],
    explanation: "Correct Answer: B) In src/tests/test-prompts/. Explanation: 'src/tests/test-prompts/' houses specialized domain test case files that 'run_batch_tests.py' iterates through sequentially to log response times and verify basic agent functionality."
  },
  {
    id: 21,
    domain: "Domain 2: GenAI Agent Architecture & SDK Implementation",
    type: "multiple",
    scenario: "When implementing an AI agent using the Azure AI Projects Python SDK, how does 'trail_guide_agent.py' format and inject the system prompt and user query when communicating with the chat inference client? (Select two)",
    options: [
      "A) It constructs a list of message dictionaries with role assignments such as {'role': 'system', 'content': system_prompt} and {'role': 'user', 'content': user_query}.",
      "B) It passes the messages array to the chat completions API via client.chat.completions.create(model=model_name, messages=messages).",
      "C) It concatenates system instructions and user queries into a single unformatted URL parameter.",
      "D) It requires storing the system prompt in an external SQL database table before inference."
    ],
    correctAnswer: [0, 1],
    explanation: "Correct Answer: A and B. Explanation: In OpenAI-compatible chat completion workflows within Foundry, conversations are structured as lists of role-based message dictionaries ('system', 'user', 'assistant') and passed to 'client.chat.completions.create()'."
  },
  {
    id: 22,
    domain: "Domain 2: GenAI Agent Architecture & SDK Implementation",
    type: "single",
    scenario: "An engineer is modifying 'trail_guide_agent.py' to support streaming responses so that long trail recommendations appear word-by-word in the terminal rather than waiting 10 seconds for the entire completion.",
    question: "Which parameter must be added to 'client.chat.completions.create()' to enable streaming, and what type of object does the method return when enabled?",
    options: [
      "A) stream=True, returning an iterator/generator of chunk objects.",
      "B) async_mode=1, returning a static string.",
      "C) buffer_output=False, returning a raw bytes array.",
      "D) stream_tokens='all', returning a JSON file."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) stream=True, returning an iterator/generator of chunk objects. Explanation: Setting 'stream=True' causes the SDK to yield Server-Sent Events (SSE) stream chunks as soon as tokens are generated by the model, drastically improving perceived Time-to-First-Byte (TTFB)."
  },
  {
    id: 23,
    domain: "Domain 2: GenAI Agent Architecture & SDK Implementation",
    type: "single",
    scenario: "In 'requirements.txt', which two essential Python packages provide the foundational capabilities for connecting to Microsoft Foundry projects and authenticating via Azure Entra ID?",
    options: [
      "A) django and flask",
      "B) azure-ai-projects and azure-identity",
      "C) numpy and pandas",
      "D) matplotlib and seaborn"
    ],
    correctAnswer: [1],
    explanation: "Correct Answer: B) azure-ai-projects and azure-identity. Explanation: 'azure-ai-projects' provides the AIProjectClient and Foundry orchestration SDK, while 'azure-identity' provides DefaultAzureCredential and token authentication classes."
  },
  {
    id: 24,
    domain: "Domain 2: GenAI Agent Architecture & SDK Implementation",
    type: "single",
    scenario: "You want to dynamically switch the active prompt instruction file used by 'trail_guide_agent.py' from 'v3_verbose.txt' to 'v4_optimized_concise.txt' without altering python code logic.",
    question: "What is the cleanest architectural approach according to repository workflow?",
    options: [
      "A) Delete all other prompt files from the filesystem.",
      "B) Update the prompt file reference path in 'agent.yaml' or set an environment variable override in '.env'.",
      "C) Recompile the Bicep infrastructure.",
      "D) Hardcode the string directly into the Python interpreter."
    ],
    correctAnswer: [1],
    explanation: "Correct Answer: B) Update the prompt file reference path in 'agent.yaml' or set an environment variable override in '.env'. Explanation: Externalizing configuration in 'agent.yaml' or environment variables adheres to 12-factor app design, allowing seamless configuration changes across environments without code modifications."
  },
  {
    id: 25,
    domain: "Domain 2: GenAI Agent Architecture & SDK Implementation",
    type: "single",
    scenario: "When initializing 'AIProjectClient' in a script, why is it recommended to use a context manager ('with AIProjectClient.from_connection_string(...) as project_client:')?",
    options: [
      "A) To automatically delete the Azure AI Foundry project when the script exits.",
      "B) To ensure network HTTP sessions and telemetry exporters are cleanly closed and flushed upon script completion or exception.",
      "C) Because Python syntax forbids calling SDK methods outside of 'with' blocks.",
      "D) To bypass Entra ID token expiration rules."
    ],
    correctAnswer: [1],
    explanation: "Correct Answer: B) To ensure network HTTP sessions and telemetry exporters are cleanly closed and flushed upon script completion or exception. Explanation: Context managers ensure proper resource cleanup, closing underlying HTTP connection pools and forcing OpenTelemetry span buffers to flush before termination."
  },
  {
    id: 26,
    domain: "Domain 2: GenAI Agent Architecture & SDK Implementation",
    type: "single",
    scenario: "You notice that when 'interact_with_agent.py' executes, it prints a message indicating that it has connected to an Azure OpenAI model named 'gpt-5.1'. Where did the script discover that 'gpt-5.1' was the target deployment?",
    options: [
      "A) From the Azure AI Search index.",
      "B) From the MODEL_NAME or AZURE_AI_MODEL_DEPLOYMENT_NAME variable loaded from the local '.env' file.",
      "C) From a hardcoded string inside the Windows system registry.",
      "D) From the GitHub README file."
    ],
    correctAnswer: [1],
    explanation: "Correct Answer: B) From the MODEL_NAME or AZURE_AI_MODEL_DEPLOYMENT_NAME variable loaded from the local '.env' file. Explanation: The script reads runtime environment variables populated by 'azd up' during cloud setup."
  },
  {
    id: 27,
    domain: "Domain 2: GenAI Agent Architecture & SDK Implementation",
    type: "single",
    scenario: "If an agent needs to maintain multi-turn conversational context during an interactive terminal session in 'interact_with_agent.py', how must the message history be handled?",
    options: [
      "A) The Azure AI Foundry Hub automatically memorizes all past terminal queries without sending history in the payload.",
      "B) The local script must append each user query and assistant response to the in-memory 'messages' list and send the entire conversation history with each subsequent API call.",
      "C) The script must create a new Azure Resource Group for each turn.",
      "D) The user must re-type all previous questions manually."
    ],
    correctAnswer: [1],
    explanation: "Correct Answer: B) The local script must append each user query and assistant response to the in-memory 'messages' list and send the entire conversation history with each subsequent API call. Explanation: Standard chat completion models are stateless; multi-turn context requires sending the accumulated message history array with each inference request."
  },
  {
    id: 28,
    domain: "Domain 2: GenAI Agent Architecture & SDK Implementation",
    type: "single",
    scenario: "What happens if the system prompt file specified in 'agent.yaml' is missing or corrupted when 'trail_guide_agent.py' attempts to start?",
    options: [
      "A) The model automatically generates its own system instructions using Wikipedia.",
      "B) The script raises a FileNotFoundError or configuration exception during initialization before sending any network requests to Foundry.",
      "C) The agent permanently locks the Azure AI account.",
      "D) The script silently ignores the error and formats disk drives."
    ],
    correctAnswer: [1],
    explanation: "Correct Answer: B) The script raises a FileNotFoundError or configuration exception during initialization before sending any network requests to Foundry. Explanation: Robust error handling catches missing configuration artifacts at startup before invoking cloud APIs."
  },
  {
    id: 29,
    domain: "Domain 2: GenAI Agent Architecture & SDK Implementation",
    type: "single",
    scenario: "How does the Trail Guide Agent distinguish between general conversation and domain-specific hiking inquiries?",
    options: [
      "A) Through domain guardrails and persona constraints explicitly defined within the system instruction prompt file (e.g., 'You are an expert hiking guide... refuse non-hiking queries').",
      "B) By installing a hardware firewall on the developer laptop.",
      "C) By checking the user's IP address against a database of national parks.",
      "D) By using BLEU score evaluators during runtime inference."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Through domain guardrails and persona constraints explicitly defined within the system instruction prompt file. Explanation: System prompts define the agent's persona, operational boundaries, and instructions on how to handle out-of-domain requests."
  },
  {
    id: 30,
    domain: "Domain 2: GenAI Agent Architecture & SDK Implementation",
    type: "single",
    scenario: "Why is 'trail_guide_agent.py' structured as a modular importable class/module rather than just a procedural script?",
    options: [
      "A) To satisfy Python PEP-8 indentation rules.",
      "B) So that the exact same agent logic can be imported and executed seamlessly by interactive CLI testers, batch test runners, and cloud evaluation scripts without code duplication.",
      "C) Because Microsoft Foundry rejects procedural code.",
      "D) To prevent OpenTelemetry from tracing function names."
    ],
    correctAnswer: [1],
    explanation: "Correct Answer: B) So that the exact same agent logic can be imported and executed seamlessly by interactive CLI testers, batch test runners, and cloud evaluation scripts without code duplication. Explanation: Modular design ensures single-source-of-truth across testing, monitoring, and evaluation workflows."
  },

  // ==========================================
  // DOMAIN 3: Prompt Engineering & Token Economics (Questions 31-45)
  // ==========================================
  {
    id: 31,
    domain: "Domain 3: Prompt Engineering & Token Economics",
    type: "single",
    scenario: "You are analyzing the token consumption and financial billing reports for your GenAI application across a 30-day production period in Azure AI Foundry. You observe that input prompt tokens account for over 85% of your total token consumption.",
    question: "Why do input prompt tokens typically represent such a large majority of total token volume in enterprise RAG and agentic workflows?",
    options: [
      "A) Because Azure OpenAI doubles the token count of input strings for billing purposes.",
      "B) Because every inference request must re-send the full system instructions, few-shot examples, conversation history, and retrieved vector search context documents, whereas assistant output completions are relatively brief answers.",
      "C) Because completion tokens are free of charge.",
      "D) Because users typically type 5,000-word questions."
    ],
    correctAnswer: [1],
    explanation: "Correct Answer: B) Because every inference request must re-send the full system instructions, few-shot examples, conversation history, and retrieved vector search context documents, whereas assistant output completions are relatively brief answers. Explanation: In RAG/agent workflows, the input prompt carries heavy system instructions and retrieved context docs on every turn, dwarfing output completion length."
  },
  {
    id: 32,
    domain: "Domain 3: Prompt Engineering & Token Economics",
    type: "single",
    scenario: "Your team compares two prompt iterations for the Trail Guide Agent:\n- 'v3_verbose': 1,650 prompt tokens, 1,400 completion tokens, 11,200 ms average latency.\n- 'v4_optimized_concise': 880 prompt tokens, 1,350 completion tokens, 8,900 ms average latency.\nBy migrating from v3 to v4, what is the approximate percentage reduction in input prompt token consumption?",
    options: [
      "A) ~15.5%",
      "B) ~46.7%",
      "C) ~85.0%",
      "D) ~3.5%"
    ],
    correctAnswer: [1],
    explanation: "Correct Answer: B) ~46.7%. Explanation: Calculation: (1650 - 880) / 1650 = 770 / 1650 = 0.4666... or approximately 46.7% reduction in input prompt tokens, leading to massive financial savings."
  },
  {
    id: 33,
    domain: "Domain 3: Prompt Engineering & Token Economics",
    type: "single",
    scenario: "In addition to reducing input token billing, what major performance benefit was achieved by migrating from 'v3_verbose' to 'v4_optimized_concise' in the Trail Guide Agent telemetry?",
    options: [
      "A) Execution latency (duration) dropped by approximately 2,300 ms per request due to streamlined prompt processing and faster completion generation.",
      "B) The model stopped requiring internet connectivity.",
      "C) The agent gained the ability to predict weather forecasts without APIs.",
      "D) OpenTelemetry trace file sizes increased by 10x."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Execution latency (duration) dropped by approximately 2,300 ms per request due to streamlined prompt processing and faster completion generation. Explanation: Telemetry shows latency decreased from 11,200 ms down to 8,900 ms (~2.3 seconds faster), improving user experience."
  },
  {
    id: 34,
    domain: "Domain 3: Prompt Engineering & Token Economics",
    type: "multiple",
    scenario: "When designing system prompt instructions for production GenAI agents ('v4_optimized_concise.txt'), which two best practices reduce token inflation while preserving response quality and groundedness? (Select two)",
    options: [
      "A) Eliminate conversational filler, polite fluff, and redundant formatting rules.",
      "B) Use clear, imperative instructions and structured markdown delimiters to define domain boundaries and constraints.",
      "C) Repeat every instruction three times in capital letters to ensure the model pays attention.",
      "D) Include entire Wikipedia articles about general hiking in the system message just in case."
    ],
    correctAnswer: [0, 1],
    explanation: "Correct Answer: A and B. Explanation: Concise prompts remove semantic fluff while utilizing precise, imperative instructions and clean formatting delimiters, achieving high groundedness with 47% fewer tokens. Why others are incorrect: Repetition and injecting unnecessary encyclopedic text inflates token costs and latency without improving accuracy."
  },
  {
    id: 35,
    domain: "Domain 3: Prompt Engineering & Token Economics",
    type: "single",
    scenario: "How are token consumption metrics captured and indexed during runtime inference in Azure AI Foundry?",
    options: [
      "A) The developer must manually count characters using len(prompt) / 4 and save to a CSV.",
      "B) OpenTelemetry automatically intercepts OpenAI SDK responses and records 'response.prompt_tokens' and 'response.completion_tokens' as span attributes in Application Insights.",
      "C) Token counts are only estimated by Azure Billing once per month.",
      "D) Tokens cannot be measured when using GPT-5.1."
    ],
    correctAnswer: [1],
    explanation: "Correct Answer: B) OpenTelemetry automatically intercepts OpenAI SDK responses and records 'response.prompt_tokens' and 'response.completion_tokens' as span attributes in Application Insights. Explanation: Auto-instrumentation extracts token usage usage metrics directly from API response headers and logs them to telemetry tables."
  },
  {
    id: 36,
    domain: "Domain 3: Prompt Engineering & Token Economics",
    type: "single",
    scenario: "In GenAI operations, what is the definition of Time-to-First-Byte (TTFB) and why is it a critical latency metric for streaming chat interfaces?",
    options: [
      "A) TTFB measures the total time required to download the Bicep templates during setup.",
      "B) TTFB measures the elapsed time from when the user sends the query until the first streaming text chunk is received by the client, directly impacting perceived responsiveness.",
      "C) TTFB is the time taken to delete a resource group.",
      "D) TTFB measures how fast the database backups occur."
    ],
    correctAnswer: [1],
    explanation: "Correct Answer: B) TTFB measures the elapsed time from when the user sends the query until the first streaming text chunk is received by the client, directly impacting perceived responsiveness. Explanation: Even if a full response takes 8 seconds, a TTFB of 800ms makes the application feel instant and responsive to users."
  },
  {
    id: 37,
    domain: "Domain 3: Prompt Engineering & Token Economics",
    type: "single",
    scenario: "When comparing Azure OpenAI pricing tiers, why might an enterprise with steady, high-volume traffic choose a Provisioned Throughput Unit (PTU) deployment over Pay-As-You-Go (Standard/PTM)?",
    options: [
      "A) PTU deployments do not require prompt instructions.",
      "B) PTU provides dedicated, predictable compute capacity and hourly billing regardless of token volume, shielding high-volume workloads from per-token cost spikes and noisy-neighbor latency.",
      "C) PTU models are 10 times smarter than Pay-As-You-Go models.",
      "D) PTU is required for local evaluation scripts."
    ],
    correctAnswer: [1],
    explanation: "Correct Answer: B) PTU provides dedicated, predictable compute capacity and hourly billing regardless of token volume, shielding high-volume workloads from per-token cost spikes and noisy-neighbor latency. Explanation: PTU reserves throughput capacity for predictable enterprise workloads."
  },
  {
    id: 38,
    domain: "Domain 3: Prompt Engineering & Token Economics",
    type: "single",
    scenario: "A junior prompt engineer suggests adding 20 detailed few-shot conversation examples into the system instruction file to improve formatting consistency. What is the primary trade-off of this architectural decision?",
    options: [
      "A) It will cause the Bicep deployment to fail.",
      "B) It will significantly increase per-request input prompt token costs and increase inference latency (TTFB) across every single customer interaction.",
      "C) It will disable OpenTelemetry tracing.",
      "D) It will cause the model to output binary code."
    ],
    correctAnswer: [1],
    explanation: "Correct Answer: B) It will significantly increase per-request input prompt token costs and increase inference latency (TTFB) across every single customer interaction. Explanation: Every few-shot example in the system prompt is transmitted and processed on every turn, inflating token volume and latency."
  },
  {
    id: 39,
    domain: "Domain 3: Prompt Engineering & Token Economics",
    type: "single",
    scenario: "In the context of LLM tokenization, approximately how many English words correspond to 1,000 tokens on average?",
    options: [
      "A) ~100 words",
      "B) ~750 words",
      "C) ~5,000 words",
      "D) ~10,000 words"
    ],
    correctAnswer: [1],
    explanation: "Correct Answer: B) ~750 words. Explanation: A standard rule of thumb in English LLM tokenization (such as OpenAI's cl100k_base or o200k_base) is that 1 token equals approximately 0.75 words, or 1,000 tokens equals roughly 750 words."
  },
  {
    id: 40,
    domain: "Domain 3: Prompt Engineering & Token Economics",
    type: "single",
    scenario: "You want to evaluate whether shrinking a prompt from 1,500 tokens down to 700 tokens caused any degradation in factual accuracy or completeness.",
    question: "Which GenAIOps methodology in this repository verifies that the concise prompt is safe for production?",
    options: [
      "A) Guessing based on reading two terminal outputs.",
      "B) Running 'evaluate_agent.py' against the 89-item dataset ('trail_guide_evaluation_dataset.jsonl') and verifying that Groundedness and Intent Resolution scores remain >= 3.0.",
      "C) Checking the file size of '.gitignore'.",
      "D) Restarting the developer laptop."
    ],
    correctAnswer: [1],
    explanation: "Correct Answer: B) Running 'evaluate_agent.py' against the 89-item dataset and verifying that Groundedness and Intent Resolution scores remain >= 3.0. Explanation: Rigorous GenAIOps requires quantitative regression testing across standardized evaluation datasets before approving prompt optimizations."
  },
  {
    id: 41,
    domain: "Domain 3: Prompt Engineering & Token Economics",
    type: "single",
    scenario: "Why is 'max_tokens' (or 'max_completion_tokens') configured in 'agent.yaml' or SDK completion calls?",
    options: [
      "A) To set the maximum hard drive storage size for the project.",
      "B) To place an upper bound on the number of output completion tokens the model can generate, preventing runaway responses, excessive latency, and unexpected token billing spikes.",
      "C) To restrict the number of users who can log into Azure AI Foundry.",
      "D) To define the number of lines in Bicep templates."
    ],
    correctAnswer: [1],
    explanation: "Correct Answer: B) To place an upper bound on the number of output completion tokens the model can generate, preventing runaway responses, excessive latency, and unexpected token billing spikes. Explanation: max_tokens is a critical cost and latency guardrail preventing infinite loops or excessively verbose generations."
  },
  {
    id: 42,
    domain: "Domain 3: Prompt Engineering & Token Economics",
    type: "single",
    scenario: "What occurs if an interactive conversation history grows so large that the accumulated prompt tokens exceed the model's maximum context window limit (e.g., 128,000 tokens)?",
    options: [
      "A) The Azure AI Foundry portal automatically upgrades your subscription to a quantum computer.",
      "B) The API call fails with an HTTP 400 Bad Request / Context Length Exceeded error unless the application implements windowing, truncation, or summarization strategies.",
      "C) The model silently deletes the Azure Resource Group.",
      "D) The script automatically switches to offline mode."
    ],
    correctAnswer: [1],
    explanation: "Correct Answer: B) The API call fails with an HTTP 400 Bad Request / Context Length Exceeded error unless the application implements windowing, truncation, or summarization strategies. Explanation: Context windows have strict physical limits; production agents must implement sliding windows or summarization when conversations grow long."
  },
  {
    id: 43,
    domain: "Domain 3: Prompt Engineering & Token Economics",
    type: "single",
    scenario: "When analyzing prompt performance in Azure AI Foundry under 'Operate -> Monitoring -> Resource usage', which visual charts are provided to track economic efficiency over time?",
    options: [
      "A) Token Usage (Prompt vs. Completion), Request Volume, and Latency histograms.",
      "B) Employee salary charts and hardware cooling fan speeds.",
      "C) Bicep compilation error rate charts.",
      "D) Git branch merge visualization graphs."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Token Usage (Prompt vs. Completion), Request Volume, and Latency histograms. Explanation: The Resource Usage monitoring dashboard in Foundry visualizes token trends, request rates, and latency distributions over custom time ranges."
  },
  {
    id: 44,
    domain: "Domain 3: Prompt Engineering & Token Economics",
    type: "single",
    scenario: "Which prompt engineering technique involves instructing the model to output structured JSON or Markdown formatting with specific keys, and how does it affect evaluation automation?",
    options: [
      "A) Structured Output / JSON Mode; it simplifies automated parsing and downstream programmatic evaluation without regex guessing.",
      "B) Chaos Engineering; it randomizes token generation.",
      "C) Semantic Obfuscation; it hides data from Application Insights.",
      "D) Soft-Delete Purging; it deletes tokens from memory."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Structured Output / JSON Mode; it simplifies automated parsing and downstream programmatic evaluation without regex guessing. Explanation: Enforcing JSON schema output ensures deterministic structure that CI/CD evaluation pipelines can parse reliably."
  },
  {
    id: 45,
    domain: "Domain 3: Prompt Engineering & Token Economics",
    type: "single",
    scenario: "What is the primary operational risk of utilizing highly complex, deeply nested prompt frameworks with thousands of tokens of meta-instructions for simple customer service tasks?",
    options: [
      "A) Zero risk; more tokens always produce better AI answers.",
      "B) High token costs, sluggish TTFB latency, and increased probability of 'lost-in-the-middle' attention degradation where the model ignores instructions buried in lengthy prompts.",
      "C) It causes the Python virtual environment to run out of memory.",
      "D) It prevents GitHub Actions from running tests."
    ],
    correctAnswer: [1],
    explanation: "Correct Answer: B) High token costs, sluggish TTFB latency, and increased probability of 'lost-in-the-middle' attention degradation where the model ignores instructions buried in lengthy prompts. Explanation: Research proves LLMs suffer attention degradation on overly long prompts; concise, modular instructions perform better and cost less."
  },

  // ==========================================
  // DOMAIN 4: Automated Evaluation & Quality Evaluators (Questions 46-63)
  // ==========================================
  {
    id: 46,
    domain: "Domain 4: Automated Evaluation & Quality Evaluators",
    type: "single",
    scenario: "In production GenAIOps, relying on manual human evaluation across hundreds of test queries is unscalable and subjective. Azure AI Foundry provides an automated evaluation framework in the 'azure.ai.evaluation' SDK.",
    question: "What technology powers built-in Quality Evaluators such as Groundedness, Relevance, and Intent Resolution?",
    options: [
      "A) Simple regular expression keyword matching scripts.",
      "B) AI-assisted evaluators (LLM-as-a-Judge) utilizing powerful models like GPT-4o or GPT-5.1 to grade responses on a 1 to 5 numerical scale based on explicit grading criteria.",
      "C) Manual crowdsourcing via Amazon Mechanical Turk.",
      "D) SHA-256 cryptographic hash comparisons."
    ],
    correctAnswer: [1],
    explanation: "Correct Answer: B) AI-assisted evaluators (LLM-as-a-Judge) utilizing powerful models like GPT-4o or GPT-5.1 to grade responses on a 1 to 5 numerical scale based on explicit grading criteria. Explanation: LLM-as-a-Judge utilizes state-of-the-art models guided by strict rubrics to quantitatively score agent responses across quality dimensions."
  },
  {
    id: 47,
    domain: "Domain 4: Automated Evaluation & Quality Evaluators",
    type: "single",
    scenario: "You are designing an evaluation suite for a customer support bot that retrieves internal refund policies from an Azure AI Search index. Recently, customers complained that the bot invented a '100-day no-questions-asked refund policy' that does not exist in any company document.",
    question: "Which built-in AI-assisted quality evaluator should you monitor to specifically detect and eliminate this hallucination issue?",
    options: [
      "A) IntentResolutionEvaluator",
      "B) GroundednessEvaluator",
      "C) RelevanceEvaluator",
      "D) BleuScoreEvaluator"
    ],
    correctAnswer: [1],
    explanation: "Correct Answer: B) GroundednessEvaluator. Explanation: GroundednessEvaluator specifically measures whether the claims made in the model's response are strictly supported by the provided source context documents. Inventing facts not present in source docs is an ungrounded claim/hallucination."
  },
  {
    id: 48,
    domain: "Domain 4: Automated Evaluation & Quality Evaluators",
    type: "single",
    scenario: "An AI agent correctly recognizes that a user is asking for a gear list for a multi-day winter hike in New Hampshire. However, the agent's response rambles for four paragraphs about summer beach camping in Florida before finally listing winter boots.",
    question: "Which built-in quality evaluator is specifically designed to penalize this off-topic, redundant rambling and reward concise pertinence?",
    options: [
      "A) RelevanceEvaluator",
      "B) GroundednessEvaluator",
      "C) ViolenceEvaluator",
      "D) F1ScoreEvaluator"
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) RelevanceEvaluator. Explanation: RelevanceEvaluator measures how pertinent and focused the response is to the specific user query, penalizing conversational fluff, off-topic tangents, and redundant rambling."
  },
  {
    id: 49,
    domain: "Domain 4: Automated Evaluation & Quality Evaluators",
    type: "single",
    scenario: "What specific dimension of AI agent performance does the 'IntentResolutionEvaluator' measure in Azure AI Foundry?",
    options: [
      "A) Whether the model's response executes in under 500 milliseconds.",
      "B) Whether the agent correctly recognized, understood, and fulfilled the user's underlying intent or request.",
      "C) Whether the response matches the exact character string of the reference answer.",
      "D) Whether the prompt contains SQL injection attacks."
    ],
    correctAnswer: [1],
    explanation: "Correct Answer: B) Whether the agent correctly recognized, understood, and fulfilled the user's underlying intent or request. Explanation: IntentResolutionEvaluator evaluates if the AI successfully solved the core task or answered the specific question posed by the user."
  },
  {
    id: 50,
    domain: "Domain 4: Automated Evaluation & Quality Evaluators",
    type: "multiple",
    scenario: "In addition to AI-assisted LLM Judge evaluators, the 'azure.ai.evaluation' SDK provides traditional NLP metrics.",
    question: "Which of the following evaluators measure lexical n-gram overlap and string similarity against static ground-truth reference strings? (Select two)",
    options: [
      "A) BleuScoreEvaluator",
      "B) RougeScoreEvaluator",
      "C) SelfHarmEvaluator",
      "D) GroundednessEvaluator"
    ],
    correctAnswer: [0, 1],
    explanation: "Correct Answer: A and B. Explanation: BLEU, ROUGE, GLEU, and F1 Score are traditional NLP lexical metrics that calculate precision, recall, and n-gram word overlap between the generated text and static reference strings."
  },
  {
    id: 51,
    domain: "Domain 4: Automated Evaluation & Quality Evaluators",
    type: "single",
    scenario: "You run a cloud evaluation job in Azure AI Foundry across a validation dataset of 250 customer queries using Groundedness, Relevance, and Intent Resolution with a passing threshold of >= 3.0 on a 1-5 scale.\nWhen the job completes, you open the Cluster Analysis tab in the Foundry portal. The dashboard displays:\n'Total Samples: 4 | Passed: 0 | Failed: 4 | Clusters: 2'\nA junior developer warns that the pipeline failed to process 246 out of 250 queries. What is the actual technical explanation?",
    options: [
      "A) The evaluation job timed out after 4 samples due to rate limits.",
      "B) Cluster Analysis intentionally filters out all passing evaluations (>= 3.0) and only groups failed tests (< 3.0) by root cause using AI embeddings; exactly 246 queries passed!",
      "C) Cluster Analysis only displays samples where evaluators tied in score.",
      "D) You must switch project filters to see the remaining 246 passing samples."
    ],
    correctAnswer: [1],
    explanation: "Correct Answer: B) Cluster Analysis intentionally filters out all passing evaluations (>= 3.0) and only groups failed tests (< 3.0) by root cause using AI embeddings; exactly 246 queries passed! Explanation: Cluster Analysis is an error-discovery tool designed to help engineers focus 100% of their debugging time on failing edge cases by clustering them into taxonomies like 'hallucinate -> unsupported'."
  },
  {
    id: 52,
    domain: "Domain 4: Automated Evaluation & Quality Evaluators",
    type: "single",
    scenario: "In the Azure AI Foundry SDK, what is the primary operational distinction between running evaluations locally via the standalone 'evaluate()' function versus submitting them via 'AIProjectClient.evals.runs.create()'?",
    options: [
      "A) Local evaluate() cannot run LLM-as-a-Judge metrics.",
      "B) Local evaluate() executes in your local environment and outputs results to memory/disk, whereas AIProjectClient.evals.runs.create() executes in Azure cloud workers and permanently indexes Run IDs, scores, and Cluster Analysis in the Foundry web portal.",
      "C) Cloud evaluation via AIProjectClient is free of token charges.",
      "D) Local evaluate() requires an Application Insights connection string."
    ],
    correctAnswer: [1],
    explanation: "Correct Answer: B) Local evaluate() executes in your local environment and outputs results to memory/disk, whereas AIProjectClient.evals.runs.create() executes in Azure cloud workers and permanently indexes Run IDs, scores, and Cluster Analysis in the Foundry web portal. Explanation: Cloud evaluation registers official persistent audit trails and enables UI dashboards in Foundry."
  },
  {
    id: 53,
    domain: "Domain 4: Automated Evaluation & Quality Evaluators",
    type: "single",
    scenario: "In 'src/evaluators/evaluate_agent.py', what is the first architectural step required before triggering a cloud evaluation job across the 89-item hiking dataset?",
    options: [
      "A) Uploading the dataset file ('trail_guide_evaluation_dataset.jsonl') to Microsoft Foundry via 'project_client.datasets.upload_file()'.",
      "B) Deleting the Application Insights workspace.",
      "C) Formatting the hard drive of the cloud worker.",
      "D) Converting the JSONL file into a Bicep template."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Uploading the dataset file ('trail_guide_evaluation_dataset.jsonl') to Microsoft Foundry via 'project_client.datasets.upload_file()'. Explanation: Cloud workers require access to the evaluation dataset; uploading it registers a dataset ID in Foundry that the cloud eval job references."
  },
  {
    id: 54,
    domain: "Domain 4: Automated Evaluation & Quality Evaluators",
    type: "single",
    scenario: "What specific file format is mandated and utilized by 'data/trail_guide_evaluation_dataset.jsonl' in this repository for evaluation datasets?",
    options: [
      "A) Microsoft Excel (.xlsx)",
      "B) JSON Lines (.jsonl), where each line is a valid self-contained JSON object containing query, response, and ground_truth fields.",
      "C) Comma-Separated Values (.csv) with semicolon delimiters.",
      "D) XML SOAP payloads (.xml)"
    ],
    correctAnswer: [1],
    explanation: "Correct Answer: B) JSON Lines (.jsonl), where each line is a valid self-contained JSON object containing query, response, and ground_truth fields. Explanation: JSONL is the standard high-throughput dataset format in GenAIOps, allowing line-by-line streaming without loading massive arrays into memory simultaneously."
  },
  {
    id: 55,
    domain: "Domain 4: Automated Evaluation & Quality Evaluators",
    type: "single",
    scenario: "When 'evaluate_agent.py' triggers an asynchronous cloud evaluation job via 'client.evals.runs.create()', how does the script monitor execution until completion?",
    options: [
      "A) It sleeps statically for exactly 24 hours.",
      "B) It implements a resilient polling loop calling 'client.evals.runs.retrieve(run_id)' every 10 seconds until the status reaches 'completed' or 'failed'.",
      "C) It waits for an SMS text message from Azure.",
      "D) It terminates immediately and requires the user to check the portal manually."
    ],
    correctAnswer: [1],
    explanation: "Correct Answer: B) It implements a resilient polling loop calling 'client.evals.runs.retrieve(run_id)' every 10 seconds until the status reaches 'completed' or 'failed'. Explanation: Asynchronous cloud jobs require polling the evaluation run status endpoint until terminal state is achieved."
  },
  {
    id: 56,
    domain: "Domain 4: Automated Evaluation & Quality Evaluators",
    type: "single",
    scenario: "In the summary report 'evaluation_results.txt' generated by 'evaluate_agent.py', what is the standard numerical pass/fail quality threshold enforced across Quality Evaluators (on a 1 to 5 scale)?",
    options: [
      "A) Average score >= 1.0",
      "B) Average score >= 3.0",
      "C) Average score == 5.0 only",
      "D) Average score >= 100.0"
    ],
    correctAnswer: [1],
    explanation: "Correct Answer: B) Average score >= 3.0. Explanation: In standard Azure AI Foundry quality grading rubrics, a score of 3.0 represents acceptable operational quality/pass, while scores of 1 or 2 indicate severe relevance, intent, or groundedness failures."
  },
  {
    id: 57,
    domain: "Domain 4: Automated Evaluation & Quality Evaluators",
    type: "single",
    scenario: "Why is an LLM-as-a-Judge evaluator (like GPT-5.1) considered superior to traditional BLEU or ROUGE scores when evaluating Generative AI chat agents?",
    options: [
      "A) BLEU and ROUGE require quantum computers.",
      "B) BLEU and ROUGE only check exact n-gram word overlap against static strings, failing to recognize semantically accurate paraphrases, whereas LLM Judges understand semantic meaning, reasoning, and context.",
      "C) LLM Judges do not consume any tokens.",
      "D) BLEU and ROUGE cannot read English."
    ],
    correctAnswer: [1],
    explanation: "Correct Answer: B) BLEU and ROUGE only check exact n-gram word overlap against static strings, failing to recognize semantically accurate paraphrases, whereas LLM Judges understand semantic meaning, reasoning, and context. Explanation: A chat agent can give a brilliant, 100% correct answer using different words than the ground truth string, which BLEU would score as 0, but an LLM Judge correctly scores as 5/5."
  },
  {
    id: 58,
    domain: "Domain 4: Automated Evaluation & Quality Evaluators",
    type: "single",
    scenario: "When defining an evaluation run in Microsoft Foundry via code, how do you map dataset columns (such as 'query', 'response', and 'context') to the inputs expected by the evaluator classes?",
    options: [
      "A) By renaming files on the operating system desktop.",
      "B) Through column mapping dictionaries or parameters specified in the evaluator definition (e.g., mapping dataset column 'user_query' to evaluator input 'query').",
      "C) By editing the Linux kernel.",
      "D) Column names must always be hardcoded to 'X', 'Y', and 'Z'."
    ],
    correctAnswer: [1],
    explanation: "Correct Answer: B) Through column mapping dictionaries or parameters specified in the evaluator definition. Explanation: Evaluation APIs provide flexible column mapping so your dataset headers do not need to strictly match internal evaluator argument names."
  },
  {
    id: 59,
    domain: "Domain 4: Automated Evaluation & Quality Evaluators",
    type: "single",
    scenario: "Where in the Azure AI Foundry web portal can engineering teams graphically visualize historical evaluation score trends, compare run IDs, and inspect Cluster Analysis error taxonomies?",
    options: [
      "A) Under Home -> Billing -> Invoices",
      "B) Under Build -> Evaluations (or Operate -> Evaluations in New UI)",
      "C) Under Discover -> Model Catalog",
      "D) Under Azure Active Directory -> Users"
    ],
    correctAnswer: [1],
    explanation: "Correct Answer: B) Under Build -> Evaluations (or Operate -> Evaluations in New UI). Explanation: The Evaluations dashboard in Foundry provides rich visual charts, sample-by-sample score breakdowns, and AI-powered cluster analysis."
  },
  {
    id: 60,
    domain: "Domain 4: Automated Evaluation & Quality Evaluators",
    type: "single",
    scenario: "If an evaluation run scores 4.8 on Relevance, 4.9 on Intent Resolution, but only 2.1 on Groundedness, what specific diagnosis should the engineering team make regarding the agent's behavior?",
    options: [
      "A) The agent is answering queries quickly and politely, but it is inventing facts and making claims that are unsupported by the provided retrieved context.",
      "B) The agent is refusing to answer any questions.",
      "C) The agent is speaking in Latin.",
      "D) The agent is suffering from slow network latency."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) The agent is answering queries quickly and politely, but it is inventing facts and making claims that are unsupported by the provided retrieved context. Explanation: High relevance/intent with low groundedness is the classic signature of an eloquent hallucinator—it sounds helpful and on-topic, but the facts are fabricated!"
  },
  {
    id: 61,
    domain: "Domain 4: Automated Evaluation & Quality Evaluators",
    type: "single",
    scenario: "In 'evaluate_agent.py', after the evaluation run status reaches 'completed', which SDK method is invoked to download and list the individual item scores across all 89 evaluated triples?",
    options: [
      "A) client.evals.runs.output_items.list(run_id)",
      "B) client.storage.blobs.download_all()",
      "C) os.remove('evaluation_results.txt')",
      "D) project_client.telemetry.get_traces()"
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) client.evals.runs.output_items.list(run_id). Explanation: The 'output_items.list()' method retrieves the granular item-by-item scoring results and explanations generated by the cloud LLM Judge."
  },
  {
    id: 62,
    domain: "Domain 4: Automated Evaluation & Quality Evaluators",
    type: "single",
    scenario: "Why is 'evaluation_results.txt' committed or saved as a plaintext summary report in the repository during CI/CD workflows?",
    options: [
      "A) To allow GitHub Actions pipelines and pull request reviewers to easily parse average quality scores and block pull requests if quality drops below threshold.",
      "B) Because Bicep requires a text file to deploy virtual machines.",
      "C) To store encrypted Entra ID passwords.",
      "D) Because HTML files are illegal in Git."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) To allow GitHub Actions pipelines and pull request reviewers to easily parse average quality scores and block pull requests if quality drops below threshold. Explanation: Plaintext summary reports provide lightweight, diffable quality artifacts for automated PR quality gates."
  },
  {
    id: 63,
    domain: "Domain 4: Automated Evaluation & Quality Evaluators",
    type: "single",
    scenario: "When configuring an LLM-as-a-Judge evaluator (such as GroundednessEvaluator), why must you supply an Azure OpenAI model configuration (e.g., model_config pointing to gpt-5.1)?",
    options: [
      "A) Because the evaluator class itself does not contain neural weights; it must send grading prompts and rubrics to an underlying LLM inference endpoint to perform the semantic evaluation.",
      "B) To pay for Microsoft Windows licenses.",
      "C) Because evaluators only work when connected to a printer.",
      "D) To prevent the developer from using local CPU memory."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Because the evaluator class itself does not contain neural weights; it must send grading prompts and rubrics to an underlying LLM inference endpoint to perform the semantic evaluation. Explanation: LLM-as-a-Judge is an SDK orchestration framework that prompts an advanced LLM (like GPT-5.1 or GPT-4o) to act as the impartial grader."
  }
];
