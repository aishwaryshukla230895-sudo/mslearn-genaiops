// ==========================================
// Track 2: Azure ML Core - EASY DIFFICULTY (Questions 706-805)
// ==========================================

window.QUIZ_DATA_EASY_AZML = [
  {
    "id": 706,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Workspace core resources. During an entry-level operational deployment (Scenario #1), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for identifying default dependent storage and key management services in Azure AI?",
    "options": [
      "A) Azure Storage Account and Azure Key Vault",
      "B) Azure SQL Database and Cosmos DB",
      "C) Azure Virtual Desktop and Bastion",
      "D) Azure Service Bus and Event Grid"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Azure Storage Account and Azure Key Vault. Explanation: In Microsoft AI-300 foundational operations, Azure Storage Account and Azure Key Vault is the standard specification for identifying default dependent storage and key management services. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 707,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Compute Clusters. During an entry-level operational deployment (Scenario #1), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for configuring auto-scaling for batch training jobs in Azure AI?",
    "options": [
      "A) Setting min_instances=0 and max_instances=4",
      "B) Setting min_instances=10 with no auto-scale",
      "C) Disabling cluster scaling",
      "D) Using a single-node Compute Instance"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Setting min_instances=0 and max_instances=4. Explanation: In Microsoft AI-300 foundational operations, Setting min_instances=0 and max_instances=4 is the standard specification for configuring auto-scaling for batch training jobs. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 708,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Python SDK v2 Job Submit. During an entry-level operational deployment (Scenario #1), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for submitting a command job using command() in Azure AI?",
    "options": [
      "A) command(code='./src', command='python train.py', environment='AzureML-sklearn-1.0-ubuntu20.04-py38-cpu@latest', compute='cpu-cluster')",
      "B) job.run(script='train.py')",
      "C) mlflow.start_run()",
      "D) az ml workspace create"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) command(code='./src', command='python train.py', environment='AzureML-sklearn-1.0-ubuntu20.04-py38-cpu@latest', compute='cpu-cluster'). Explanation: In Microsoft AI-300 foundational operations, command(code='./src', command='python train.py', environment='AzureML-sklearn-1.0-ubuntu20.04-py38-cpu@latest', compute='cpu-cluster') is the standard specification for submitting a command job using command(). Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 709,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Managed Online Endpoints. During an entry-level operational deployment (Scenario #1), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for deploying a real-time scoring model in Azure AI?",
    "options": [
      "A) ManagedOnlineEndpoint and ManagedOnlineDeployment",
      "B) BatchEndpoint and BatchDeployment",
      "C) VirtualMachineEndpoint",
      "D) AppServiceDeployment"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) ManagedOnlineEndpoint and ManagedOnlineDeployment. Explanation: In Microsoft AI-300 foundational operations, ManagedOnlineEndpoint and ManagedOnlineDeployment is the standard specification for deploying a real-time scoring model. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 710,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "multiple",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Batch Endpoints. During an entry-level operational deployment (Scenario #1), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which THREE of the following are valid foundational components or configurations required for processing asynchronous inferences over large datasets? (Select three)",
    "options": [
      "A) Batch endpoint definition",
      "B) Batch deployment with compute cluster",
      "C) Output datastore path for predictions",
      "D) Real-time synchronous HTTP requests",
      "E) WebSocket streaming connections"
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answer: A, B, and C. Explanation: For processing asynchronous inferences over large datasets, Azure AI requires Batch endpoint definition, Batch deployment with compute cluster, and Output datastore path for predictions. Options D and E are invalid configurations for this operational step."
  },
  {
    "id": 711,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Data ingestion. During an entry-level operational deployment (Scenario #1), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for connecting to external cloud storage via identity pass-through in Azure AI?",
    "options": [
      "A) Credential-less datastore using User Identity or Managed Identity",
      "B) Hardcoding SAS tokens in plaintext scripts",
      "C) Public anonymous blob access",
      "D) FTP file transfer over HTTP"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Credential-less datastore using User Identity or Managed Identity. Explanation: In Microsoft AI-300 foundational operations, Credential-less datastore using User Identity or Managed Identity is the standard specification for connecting to external cloud storage via identity pass-through. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 712,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Model Artifacts. During an entry-level operational deployment (Scenario #1), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for structuring model outputs in MLflow format in Azure AI?",
    "options": [
      "A) MLmodel file accompanying model weights and conda.yaml",
      "B) A single unversioned .exe file",
      "C) A raw text log file without weights",
      "D) An SQL database backup dump"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) MLmodel file accompanying model weights and conda.yaml. Explanation: In Microsoft AI-300 foundational operations, MLmodel file accompanying model weights and conda.yaml is the standard specification for structuring model outputs in MLflow format. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 713,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Container Registries. During an entry-level operational deployment (Scenario #1), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for storing custom Docker images for Azure ML environments in Azure AI?",
    "options": [
      "A) Azure Container Registry (ACR)",
      "B) Azure Container Apps",
      "C) Azure Kubernetes Service",
      "D) Azure Blob Storage Table"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Azure Container Registry (ACR). Explanation: In Microsoft AI-300 foundational operations, Azure Container Registry (ACR) is the standard specification for storing custom Docker images for Azure ML environments. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 714,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Studio UI Navigation. During an entry-level operational deployment (Scenario #1), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for exploring automated training runs and metrics visualizers in Azure AI?",
    "options": [
      "A) Azure Machine Learning Studio Web Portal",
      "B) Azure DevOps Board",
      "C) Power BI Desktop",
      "D) SQL Server Management Studio"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Azure Machine Learning Studio Web Portal. Explanation: In Microsoft AI-300 foundational operations, Azure Machine Learning Studio Web Portal is the standard specification for exploring automated training runs and metrics visualizers. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 715,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "multiple",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on SDK v2 Installation. During an entry-level operational deployment (Scenario #1), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which THREE of the following are valid foundational components or configurations required for installing the latest Azure AI ML Python package? (Select three)",
    "options": [
      "A) azure-ai-ml package",
      "B) azure-identity for authentication",
      "C) mlflow and azureml-mlflow plugins",
      "D) pip install azureml-sdk (SDK v1 legacy)",
      "E) pip install mslearn-azure"
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answer: A, B, and C. Explanation: For installing the latest Azure AI ML Python package, Azure AI requires azure-ai-ml package, azure-identity for authentication, and mlflow and azureml-mlflow plugins. Options D and E are invalid configurations for this operational step."
  },
  {
    "id": 716,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Workspace core resources. During an entry-level operational deployment (Scenario #2), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for identifying default dependent storage and key management services in Azure AI?",
    "options": [
      "A) Azure Storage Account and Azure Key Vault",
      "B) Azure SQL Database and Cosmos DB",
      "C) Azure Virtual Desktop and Bastion",
      "D) Azure Service Bus and Event Grid"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Azure Storage Account and Azure Key Vault. Explanation: In Microsoft AI-300 foundational operations, Azure Storage Account and Azure Key Vault is the standard specification for identifying default dependent storage and key management services. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 717,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Compute Clusters. During an entry-level operational deployment (Scenario #2), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for configuring auto-scaling for batch training jobs in Azure AI?",
    "options": [
      "A) Setting min_instances=0 and max_instances=4",
      "B) Setting min_instances=10 with no auto-scale",
      "C) Disabling cluster scaling",
      "D) Using a single-node Compute Instance"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Setting min_instances=0 and max_instances=4. Explanation: In Microsoft AI-300 foundational operations, Setting min_instances=0 and max_instances=4 is the standard specification for configuring auto-scaling for batch training jobs. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 718,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Python SDK v2 Job Submit. During an entry-level operational deployment (Scenario #2), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for submitting a command job using command() in Azure AI?",
    "options": [
      "A) command(code='./src', command='python train.py', environment='AzureML-sklearn-1.0-ubuntu20.04-py38-cpu@latest', compute='cpu-cluster')",
      "B) job.run(script='train.py')",
      "C) mlflow.start_run()",
      "D) az ml workspace create"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) command(code='./src', command='python train.py', environment='AzureML-sklearn-1.0-ubuntu20.04-py38-cpu@latest', compute='cpu-cluster'). Explanation: In Microsoft AI-300 foundational operations, command(code='./src', command='python train.py', environment='AzureML-sklearn-1.0-ubuntu20.04-py38-cpu@latest', compute='cpu-cluster') is the standard specification for submitting a command job using command(). Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 719,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Managed Online Endpoints. During an entry-level operational deployment (Scenario #2), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for deploying a real-time scoring model in Azure AI?",
    "options": [
      "A) ManagedOnlineEndpoint and ManagedOnlineDeployment",
      "B) BatchEndpoint and BatchDeployment",
      "C) VirtualMachineEndpoint",
      "D) AppServiceDeployment"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) ManagedOnlineEndpoint and ManagedOnlineDeployment. Explanation: In Microsoft AI-300 foundational operations, ManagedOnlineEndpoint and ManagedOnlineDeployment is the standard specification for deploying a real-time scoring model. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 720,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "multiple",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Batch Endpoints. During an entry-level operational deployment (Scenario #2), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which THREE of the following are valid foundational components or configurations required for processing asynchronous inferences over large datasets? (Select three)",
    "options": [
      "A) Batch endpoint definition",
      "B) Batch deployment with compute cluster",
      "C) Output datastore path for predictions",
      "D) Real-time synchronous HTTP requests",
      "E) WebSocket streaming connections"
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answer: A, B, and C. Explanation: For processing asynchronous inferences over large datasets, Azure AI requires Batch endpoint definition, Batch deployment with compute cluster, and Output datastore path for predictions. Options D and E are invalid configurations for this operational step."
  },
  {
    "id": 721,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Data ingestion. During an entry-level operational deployment (Scenario #2), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for connecting to external cloud storage via identity pass-through in Azure AI?",
    "options": [
      "A) Credential-less datastore using User Identity or Managed Identity",
      "B) Hardcoding SAS tokens in plaintext scripts",
      "C) Public anonymous blob access",
      "D) FTP file transfer over HTTP"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Credential-less datastore using User Identity or Managed Identity. Explanation: In Microsoft AI-300 foundational operations, Credential-less datastore using User Identity or Managed Identity is the standard specification for connecting to external cloud storage via identity pass-through. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 722,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Model Artifacts. During an entry-level operational deployment (Scenario #2), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for structuring model outputs in MLflow format in Azure AI?",
    "options": [
      "A) MLmodel file accompanying model weights and conda.yaml",
      "B) A single unversioned .exe file",
      "C) A raw text log file without weights",
      "D) An SQL database backup dump"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) MLmodel file accompanying model weights and conda.yaml. Explanation: In Microsoft AI-300 foundational operations, MLmodel file accompanying model weights and conda.yaml is the standard specification for structuring model outputs in MLflow format. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 723,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Container Registries. During an entry-level operational deployment (Scenario #2), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for storing custom Docker images for Azure ML environments in Azure AI?",
    "options": [
      "A) Azure Container Registry (ACR)",
      "B) Azure Container Apps",
      "C) Azure Kubernetes Service",
      "D) Azure Blob Storage Table"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Azure Container Registry (ACR). Explanation: In Microsoft AI-300 foundational operations, Azure Container Registry (ACR) is the standard specification for storing custom Docker images for Azure ML environments. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 724,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Studio UI Navigation. During an entry-level operational deployment (Scenario #2), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for exploring automated training runs and metrics visualizers in Azure AI?",
    "options": [
      "A) Azure Machine Learning Studio Web Portal",
      "B) Azure DevOps Board",
      "C) Power BI Desktop",
      "D) SQL Server Management Studio"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Azure Machine Learning Studio Web Portal. Explanation: In Microsoft AI-300 foundational operations, Azure Machine Learning Studio Web Portal is the standard specification for exploring automated training runs and metrics visualizers. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 725,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "multiple",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on SDK v2 Installation. During an entry-level operational deployment (Scenario #2), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which THREE of the following are valid foundational components or configurations required for installing the latest Azure AI ML Python package? (Select three)",
    "options": [
      "A) azure-ai-ml package",
      "B) azure-identity for authentication",
      "C) mlflow and azureml-mlflow plugins",
      "D) pip install azureml-sdk (SDK v1 legacy)",
      "E) pip install mslearn-azure"
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answer: A, B, and C. Explanation: For installing the latest Azure AI ML Python package, Azure AI requires azure-ai-ml package, azure-identity for authentication, and mlflow and azureml-mlflow plugins. Options D and E are invalid configurations for this operational step."
  },
  {
    "id": 726,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Workspace core resources. During an entry-level operational deployment (Scenario #3), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for identifying default dependent storage and key management services in Azure AI?",
    "options": [
      "A) Azure Storage Account and Azure Key Vault",
      "B) Azure SQL Database and Cosmos DB",
      "C) Azure Virtual Desktop and Bastion",
      "D) Azure Service Bus and Event Grid"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Azure Storage Account and Azure Key Vault. Explanation: In Microsoft AI-300 foundational operations, Azure Storage Account and Azure Key Vault is the standard specification for identifying default dependent storage and key management services. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 727,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Compute Clusters. During an entry-level operational deployment (Scenario #3), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for configuring auto-scaling for batch training jobs in Azure AI?",
    "options": [
      "A) Setting min_instances=0 and max_instances=4",
      "B) Setting min_instances=10 with no auto-scale",
      "C) Disabling cluster scaling",
      "D) Using a single-node Compute Instance"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Setting min_instances=0 and max_instances=4. Explanation: In Microsoft AI-300 foundational operations, Setting min_instances=0 and max_instances=4 is the standard specification for configuring auto-scaling for batch training jobs. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 728,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Python SDK v2 Job Submit. During an entry-level operational deployment (Scenario #3), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for submitting a command job using command() in Azure AI?",
    "options": [
      "A) command(code='./src', command='python train.py', environment='AzureML-sklearn-1.0-ubuntu20.04-py38-cpu@latest', compute='cpu-cluster')",
      "B) job.run(script='train.py')",
      "C) mlflow.start_run()",
      "D) az ml workspace create"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) command(code='./src', command='python train.py', environment='AzureML-sklearn-1.0-ubuntu20.04-py38-cpu@latest', compute='cpu-cluster'). Explanation: In Microsoft AI-300 foundational operations, command(code='./src', command='python train.py', environment='AzureML-sklearn-1.0-ubuntu20.04-py38-cpu@latest', compute='cpu-cluster') is the standard specification for submitting a command job using command(). Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 729,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Managed Online Endpoints. During an entry-level operational deployment (Scenario #3), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for deploying a real-time scoring model in Azure AI?",
    "options": [
      "A) ManagedOnlineEndpoint and ManagedOnlineDeployment",
      "B) BatchEndpoint and BatchDeployment",
      "C) VirtualMachineEndpoint",
      "D) AppServiceDeployment"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) ManagedOnlineEndpoint and ManagedOnlineDeployment. Explanation: In Microsoft AI-300 foundational operations, ManagedOnlineEndpoint and ManagedOnlineDeployment is the standard specification for deploying a real-time scoring model. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 730,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "multiple",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Batch Endpoints. During an entry-level operational deployment (Scenario #3), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which THREE of the following are valid foundational components or configurations required for processing asynchronous inferences over large datasets? (Select three)",
    "options": [
      "A) Batch endpoint definition",
      "B) Batch deployment with compute cluster",
      "C) Output datastore path for predictions",
      "D) Real-time synchronous HTTP requests",
      "E) WebSocket streaming connections"
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answer: A, B, and C. Explanation: For processing asynchronous inferences over large datasets, Azure AI requires Batch endpoint definition, Batch deployment with compute cluster, and Output datastore path for predictions. Options D and E are invalid configurations for this operational step."
  },
  {
    "id": 731,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Data ingestion. During an entry-level operational deployment (Scenario #3), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for connecting to external cloud storage via identity pass-through in Azure AI?",
    "options": [
      "A) Credential-less datastore using User Identity or Managed Identity",
      "B) Hardcoding SAS tokens in plaintext scripts",
      "C) Public anonymous blob access",
      "D) FTP file transfer over HTTP"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Credential-less datastore using User Identity or Managed Identity. Explanation: In Microsoft AI-300 foundational operations, Credential-less datastore using User Identity or Managed Identity is the standard specification for connecting to external cloud storage via identity pass-through. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 732,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Model Artifacts. During an entry-level operational deployment (Scenario #3), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for structuring model outputs in MLflow format in Azure AI?",
    "options": [
      "A) MLmodel file accompanying model weights and conda.yaml",
      "B) A single unversioned .exe file",
      "C) A raw text log file without weights",
      "D) An SQL database backup dump"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) MLmodel file accompanying model weights and conda.yaml. Explanation: In Microsoft AI-300 foundational operations, MLmodel file accompanying model weights and conda.yaml is the standard specification for structuring model outputs in MLflow format. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 733,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Container Registries. During an entry-level operational deployment (Scenario #3), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for storing custom Docker images for Azure ML environments in Azure AI?",
    "options": [
      "A) Azure Container Registry (ACR)",
      "B) Azure Container Apps",
      "C) Azure Kubernetes Service",
      "D) Azure Blob Storage Table"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Azure Container Registry (ACR). Explanation: In Microsoft AI-300 foundational operations, Azure Container Registry (ACR) is the standard specification for storing custom Docker images for Azure ML environments. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 734,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Studio UI Navigation. During an entry-level operational deployment (Scenario #3), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for exploring automated training runs and metrics visualizers in Azure AI?",
    "options": [
      "A) Azure Machine Learning Studio Web Portal",
      "B) Azure DevOps Board",
      "C) Power BI Desktop",
      "D) SQL Server Management Studio"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Azure Machine Learning Studio Web Portal. Explanation: In Microsoft AI-300 foundational operations, Azure Machine Learning Studio Web Portal is the standard specification for exploring automated training runs and metrics visualizers. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 735,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "multiple",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on SDK v2 Installation. During an entry-level operational deployment (Scenario #3), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which THREE of the following are valid foundational components or configurations required for installing the latest Azure AI ML Python package? (Select three)",
    "options": [
      "A) azure-ai-ml package",
      "B) azure-identity for authentication",
      "C) mlflow and azureml-mlflow plugins",
      "D) pip install azureml-sdk (SDK v1 legacy)",
      "E) pip install mslearn-azure"
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answer: A, B, and C. Explanation: For installing the latest Azure AI ML Python package, Azure AI requires azure-ai-ml package, azure-identity for authentication, and mlflow and azureml-mlflow plugins. Options D and E are invalid configurations for this operational step."
  },
  {
    "id": 736,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Workspace core resources. During an entry-level operational deployment (Scenario #4), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for identifying default dependent storage and key management services in Azure AI?",
    "options": [
      "A) Azure Storage Account and Azure Key Vault",
      "B) Azure SQL Database and Cosmos DB",
      "C) Azure Virtual Desktop and Bastion",
      "D) Azure Service Bus and Event Grid"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Azure Storage Account and Azure Key Vault. Explanation: In Microsoft AI-300 foundational operations, Azure Storage Account and Azure Key Vault is the standard specification for identifying default dependent storage and key management services. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 737,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Compute Clusters. During an entry-level operational deployment (Scenario #4), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for configuring auto-scaling for batch training jobs in Azure AI?",
    "options": [
      "A) Setting min_instances=0 and max_instances=4",
      "B) Setting min_instances=10 with no auto-scale",
      "C) Disabling cluster scaling",
      "D) Using a single-node Compute Instance"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Setting min_instances=0 and max_instances=4. Explanation: In Microsoft AI-300 foundational operations, Setting min_instances=0 and max_instances=4 is the standard specification for configuring auto-scaling for batch training jobs. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 738,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Python SDK v2 Job Submit. During an entry-level operational deployment (Scenario #4), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for submitting a command job using command() in Azure AI?",
    "options": [
      "A) command(code='./src', command='python train.py', environment='AzureML-sklearn-1.0-ubuntu20.04-py38-cpu@latest', compute='cpu-cluster')",
      "B) job.run(script='train.py')",
      "C) mlflow.start_run()",
      "D) az ml workspace create"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) command(code='./src', command='python train.py', environment='AzureML-sklearn-1.0-ubuntu20.04-py38-cpu@latest', compute='cpu-cluster'). Explanation: In Microsoft AI-300 foundational operations, command(code='./src', command='python train.py', environment='AzureML-sklearn-1.0-ubuntu20.04-py38-cpu@latest', compute='cpu-cluster') is the standard specification for submitting a command job using command(). Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 739,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Managed Online Endpoints. During an entry-level operational deployment (Scenario #4), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for deploying a real-time scoring model in Azure AI?",
    "options": [
      "A) ManagedOnlineEndpoint and ManagedOnlineDeployment",
      "B) BatchEndpoint and BatchDeployment",
      "C) VirtualMachineEndpoint",
      "D) AppServiceDeployment"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) ManagedOnlineEndpoint and ManagedOnlineDeployment. Explanation: In Microsoft AI-300 foundational operations, ManagedOnlineEndpoint and ManagedOnlineDeployment is the standard specification for deploying a real-time scoring model. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 740,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "multiple",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Batch Endpoints. During an entry-level operational deployment (Scenario #4), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which THREE of the following are valid foundational components or configurations required for processing asynchronous inferences over large datasets? (Select three)",
    "options": [
      "A) Batch endpoint definition",
      "B) Batch deployment with compute cluster",
      "C) Output datastore path for predictions",
      "D) Real-time synchronous HTTP requests",
      "E) WebSocket streaming connections"
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answer: A, B, and C. Explanation: For processing asynchronous inferences over large datasets, Azure AI requires Batch endpoint definition, Batch deployment with compute cluster, and Output datastore path for predictions. Options D and E are invalid configurations for this operational step."
  },
  {
    "id": 741,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Data ingestion. During an entry-level operational deployment (Scenario #4), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for connecting to external cloud storage via identity pass-through in Azure AI?",
    "options": [
      "A) Credential-less datastore using User Identity or Managed Identity",
      "B) Hardcoding SAS tokens in plaintext scripts",
      "C) Public anonymous blob access",
      "D) FTP file transfer over HTTP"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Credential-less datastore using User Identity or Managed Identity. Explanation: In Microsoft AI-300 foundational operations, Credential-less datastore using User Identity or Managed Identity is the standard specification for connecting to external cloud storage via identity pass-through. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 742,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Model Artifacts. During an entry-level operational deployment (Scenario #4), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for structuring model outputs in MLflow format in Azure AI?",
    "options": [
      "A) MLmodel file accompanying model weights and conda.yaml",
      "B) A single unversioned .exe file",
      "C) A raw text log file without weights",
      "D) An SQL database backup dump"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) MLmodel file accompanying model weights and conda.yaml. Explanation: In Microsoft AI-300 foundational operations, MLmodel file accompanying model weights and conda.yaml is the standard specification for structuring model outputs in MLflow format. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 743,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Container Registries. During an entry-level operational deployment (Scenario #4), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for storing custom Docker images for Azure ML environments in Azure AI?",
    "options": [
      "A) Azure Container Registry (ACR)",
      "B) Azure Container Apps",
      "C) Azure Kubernetes Service",
      "D) Azure Blob Storage Table"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Azure Container Registry (ACR). Explanation: In Microsoft AI-300 foundational operations, Azure Container Registry (ACR) is the standard specification for storing custom Docker images for Azure ML environments. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 744,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Studio UI Navigation. During an entry-level operational deployment (Scenario #4), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for exploring automated training runs and metrics visualizers in Azure AI?",
    "options": [
      "A) Azure Machine Learning Studio Web Portal",
      "B) Azure DevOps Board",
      "C) Power BI Desktop",
      "D) SQL Server Management Studio"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Azure Machine Learning Studio Web Portal. Explanation: In Microsoft AI-300 foundational operations, Azure Machine Learning Studio Web Portal is the standard specification for exploring automated training runs and metrics visualizers. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 745,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "multiple",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on SDK v2 Installation. During an entry-level operational deployment (Scenario #4), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which THREE of the following are valid foundational components or configurations required for installing the latest Azure AI ML Python package? (Select three)",
    "options": [
      "A) azure-ai-ml package",
      "B) azure-identity for authentication",
      "C) mlflow and azureml-mlflow plugins",
      "D) pip install azureml-sdk (SDK v1 legacy)",
      "E) pip install mslearn-azure"
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answer: A, B, and C. Explanation: For installing the latest Azure AI ML Python package, Azure AI requires azure-ai-ml package, azure-identity for authentication, and mlflow and azureml-mlflow plugins. Options D and E are invalid configurations for this operational step."
  },
  {
    "id": 746,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Workspace core resources. During an entry-level operational deployment (Scenario #5), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for identifying default dependent storage and key management services in Azure AI?",
    "options": [
      "A) Azure Storage Account and Azure Key Vault",
      "B) Azure SQL Database and Cosmos DB",
      "C) Azure Virtual Desktop and Bastion",
      "D) Azure Service Bus and Event Grid"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Azure Storage Account and Azure Key Vault. Explanation: In Microsoft AI-300 foundational operations, Azure Storage Account and Azure Key Vault is the standard specification for identifying default dependent storage and key management services. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 747,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Compute Clusters. During an entry-level operational deployment (Scenario #5), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for configuring auto-scaling for batch training jobs in Azure AI?",
    "options": [
      "A) Setting min_instances=0 and max_instances=4",
      "B) Setting min_instances=10 with no auto-scale",
      "C) Disabling cluster scaling",
      "D) Using a single-node Compute Instance"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Setting min_instances=0 and max_instances=4. Explanation: In Microsoft AI-300 foundational operations, Setting min_instances=0 and max_instances=4 is the standard specification for configuring auto-scaling for batch training jobs. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 748,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Python SDK v2 Job Submit. During an entry-level operational deployment (Scenario #5), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for submitting a command job using command() in Azure AI?",
    "options": [
      "A) command(code='./src', command='python train.py', environment='AzureML-sklearn-1.0-ubuntu20.04-py38-cpu@latest', compute='cpu-cluster')",
      "B) job.run(script='train.py')",
      "C) mlflow.start_run()",
      "D) az ml workspace create"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) command(code='./src', command='python train.py', environment='AzureML-sklearn-1.0-ubuntu20.04-py38-cpu@latest', compute='cpu-cluster'). Explanation: In Microsoft AI-300 foundational operations, command(code='./src', command='python train.py', environment='AzureML-sklearn-1.0-ubuntu20.04-py38-cpu@latest', compute='cpu-cluster') is the standard specification for submitting a command job using command(). Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 749,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Managed Online Endpoints. During an entry-level operational deployment (Scenario #5), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for deploying a real-time scoring model in Azure AI?",
    "options": [
      "A) ManagedOnlineEndpoint and ManagedOnlineDeployment",
      "B) BatchEndpoint and BatchDeployment",
      "C) VirtualMachineEndpoint",
      "D) AppServiceDeployment"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) ManagedOnlineEndpoint and ManagedOnlineDeployment. Explanation: In Microsoft AI-300 foundational operations, ManagedOnlineEndpoint and ManagedOnlineDeployment is the standard specification for deploying a real-time scoring model. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 750,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "multiple",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Batch Endpoints. During an entry-level operational deployment (Scenario #5), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which THREE of the following are valid foundational components or configurations required for processing asynchronous inferences over large datasets? (Select three)",
    "options": [
      "A) Batch endpoint definition",
      "B) Batch deployment with compute cluster",
      "C) Output datastore path for predictions",
      "D) Real-time synchronous HTTP requests",
      "E) WebSocket streaming connections"
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answer: A, B, and C. Explanation: For processing asynchronous inferences over large datasets, Azure AI requires Batch endpoint definition, Batch deployment with compute cluster, and Output datastore path for predictions. Options D and E are invalid configurations for this operational step."
  },
  {
    "id": 751,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Data ingestion. During an entry-level operational deployment (Scenario #5), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for connecting to external cloud storage via identity pass-through in Azure AI?",
    "options": [
      "A) Credential-less datastore using User Identity or Managed Identity",
      "B) Hardcoding SAS tokens in plaintext scripts",
      "C) Public anonymous blob access",
      "D) FTP file transfer over HTTP"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Credential-less datastore using User Identity or Managed Identity. Explanation: In Microsoft AI-300 foundational operations, Credential-less datastore using User Identity or Managed Identity is the standard specification for connecting to external cloud storage via identity pass-through. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 752,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Model Artifacts. During an entry-level operational deployment (Scenario #5), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for structuring model outputs in MLflow format in Azure AI?",
    "options": [
      "A) MLmodel file accompanying model weights and conda.yaml",
      "B) A single unversioned .exe file",
      "C) A raw text log file without weights",
      "D) An SQL database backup dump"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) MLmodel file accompanying model weights and conda.yaml. Explanation: In Microsoft AI-300 foundational operations, MLmodel file accompanying model weights and conda.yaml is the standard specification for structuring model outputs in MLflow format. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 753,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Container Registries. During an entry-level operational deployment (Scenario #5), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for storing custom Docker images for Azure ML environments in Azure AI?",
    "options": [
      "A) Azure Container Registry (ACR)",
      "B) Azure Container Apps",
      "C) Azure Kubernetes Service",
      "D) Azure Blob Storage Table"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Azure Container Registry (ACR). Explanation: In Microsoft AI-300 foundational operations, Azure Container Registry (ACR) is the standard specification for storing custom Docker images for Azure ML environments. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 754,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Studio UI Navigation. During an entry-level operational deployment (Scenario #5), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for exploring automated training runs and metrics visualizers in Azure AI?",
    "options": [
      "A) Azure Machine Learning Studio Web Portal",
      "B) Azure DevOps Board",
      "C) Power BI Desktop",
      "D) SQL Server Management Studio"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Azure Machine Learning Studio Web Portal. Explanation: In Microsoft AI-300 foundational operations, Azure Machine Learning Studio Web Portal is the standard specification for exploring automated training runs and metrics visualizers. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 755,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "multiple",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on SDK v2 Installation. During an entry-level operational deployment (Scenario #5), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which THREE of the following are valid foundational components or configurations required for installing the latest Azure AI ML Python package? (Select three)",
    "options": [
      "A) azure-ai-ml package",
      "B) azure-identity for authentication",
      "C) mlflow and azureml-mlflow plugins",
      "D) pip install azureml-sdk (SDK v1 legacy)",
      "E) pip install mslearn-azure"
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answer: A, B, and C. Explanation: For installing the latest Azure AI ML Python package, Azure AI requires azure-ai-ml package, azure-identity for authentication, and mlflow and azureml-mlflow plugins. Options D and E are invalid configurations for this operational step."
  },
  {
    "id": 756,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Workspace core resources. During an entry-level operational deployment (Scenario #6), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for identifying default dependent storage and key management services in Azure AI?",
    "options": [
      "A) Azure Storage Account and Azure Key Vault",
      "B) Azure SQL Database and Cosmos DB",
      "C) Azure Virtual Desktop and Bastion",
      "D) Azure Service Bus and Event Grid"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Azure Storage Account and Azure Key Vault. Explanation: In Microsoft AI-300 foundational operations, Azure Storage Account and Azure Key Vault is the standard specification for identifying default dependent storage and key management services. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 757,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Compute Clusters. During an entry-level operational deployment (Scenario #6), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for configuring auto-scaling for batch training jobs in Azure AI?",
    "options": [
      "A) Setting min_instances=0 and max_instances=4",
      "B) Setting min_instances=10 with no auto-scale",
      "C) Disabling cluster scaling",
      "D) Using a single-node Compute Instance"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Setting min_instances=0 and max_instances=4. Explanation: In Microsoft AI-300 foundational operations, Setting min_instances=0 and max_instances=4 is the standard specification for configuring auto-scaling for batch training jobs. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 758,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Python SDK v2 Job Submit. During an entry-level operational deployment (Scenario #6), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for submitting a command job using command() in Azure AI?",
    "options": [
      "A) command(code='./src', command='python train.py', environment='AzureML-sklearn-1.0-ubuntu20.04-py38-cpu@latest', compute='cpu-cluster')",
      "B) job.run(script='train.py')",
      "C) mlflow.start_run()",
      "D) az ml workspace create"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) command(code='./src', command='python train.py', environment='AzureML-sklearn-1.0-ubuntu20.04-py38-cpu@latest', compute='cpu-cluster'). Explanation: In Microsoft AI-300 foundational operations, command(code='./src', command='python train.py', environment='AzureML-sklearn-1.0-ubuntu20.04-py38-cpu@latest', compute='cpu-cluster') is the standard specification for submitting a command job using command(). Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 759,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Managed Online Endpoints. During an entry-level operational deployment (Scenario #6), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for deploying a real-time scoring model in Azure AI?",
    "options": [
      "A) ManagedOnlineEndpoint and ManagedOnlineDeployment",
      "B) BatchEndpoint and BatchDeployment",
      "C) VirtualMachineEndpoint",
      "D) AppServiceDeployment"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) ManagedOnlineEndpoint and ManagedOnlineDeployment. Explanation: In Microsoft AI-300 foundational operations, ManagedOnlineEndpoint and ManagedOnlineDeployment is the standard specification for deploying a real-time scoring model. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 760,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "multiple",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Batch Endpoints. During an entry-level operational deployment (Scenario #6), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which THREE of the following are valid foundational components or configurations required for processing asynchronous inferences over large datasets? (Select three)",
    "options": [
      "A) Batch endpoint definition",
      "B) Batch deployment with compute cluster",
      "C) Output datastore path for predictions",
      "D) Real-time synchronous HTTP requests",
      "E) WebSocket streaming connections"
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answer: A, B, and C. Explanation: For processing asynchronous inferences over large datasets, Azure AI requires Batch endpoint definition, Batch deployment with compute cluster, and Output datastore path for predictions. Options D and E are invalid configurations for this operational step."
  },
  {
    "id": 761,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Data ingestion. During an entry-level operational deployment (Scenario #6), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for connecting to external cloud storage via identity pass-through in Azure AI?",
    "options": [
      "A) Credential-less datastore using User Identity or Managed Identity",
      "B) Hardcoding SAS tokens in plaintext scripts",
      "C) Public anonymous blob access",
      "D) FTP file transfer over HTTP"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Credential-less datastore using User Identity or Managed Identity. Explanation: In Microsoft AI-300 foundational operations, Credential-less datastore using User Identity or Managed Identity is the standard specification for connecting to external cloud storage via identity pass-through. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 762,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Model Artifacts. During an entry-level operational deployment (Scenario #6), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for structuring model outputs in MLflow format in Azure AI?",
    "options": [
      "A) MLmodel file accompanying model weights and conda.yaml",
      "B) A single unversioned .exe file",
      "C) A raw text log file without weights",
      "D) An SQL database backup dump"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) MLmodel file accompanying model weights and conda.yaml. Explanation: In Microsoft AI-300 foundational operations, MLmodel file accompanying model weights and conda.yaml is the standard specification for structuring model outputs in MLflow format. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 763,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Container Registries. During an entry-level operational deployment (Scenario #6), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for storing custom Docker images for Azure ML environments in Azure AI?",
    "options": [
      "A) Azure Container Registry (ACR)",
      "B) Azure Container Apps",
      "C) Azure Kubernetes Service",
      "D) Azure Blob Storage Table"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Azure Container Registry (ACR). Explanation: In Microsoft AI-300 foundational operations, Azure Container Registry (ACR) is the standard specification for storing custom Docker images for Azure ML environments. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 764,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Studio UI Navigation. During an entry-level operational deployment (Scenario #6), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for exploring automated training runs and metrics visualizers in Azure AI?",
    "options": [
      "A) Azure Machine Learning Studio Web Portal",
      "B) Azure DevOps Board",
      "C) Power BI Desktop",
      "D) SQL Server Management Studio"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Azure Machine Learning Studio Web Portal. Explanation: In Microsoft AI-300 foundational operations, Azure Machine Learning Studio Web Portal is the standard specification for exploring automated training runs and metrics visualizers. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 765,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "multiple",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on SDK v2 Installation. During an entry-level operational deployment (Scenario #6), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which THREE of the following are valid foundational components or configurations required for installing the latest Azure AI ML Python package? (Select three)",
    "options": [
      "A) azure-ai-ml package",
      "B) azure-identity for authentication",
      "C) mlflow and azureml-mlflow plugins",
      "D) pip install azureml-sdk (SDK v1 legacy)",
      "E) pip install mslearn-azure"
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answer: A, B, and C. Explanation: For installing the latest Azure AI ML Python package, Azure AI requires azure-ai-ml package, azure-identity for authentication, and mlflow and azureml-mlflow plugins. Options D and E are invalid configurations for this operational step."
  },
  {
    "id": 766,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Workspace core resources. During an entry-level operational deployment (Scenario #7), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for identifying default dependent storage and key management services in Azure AI?",
    "options": [
      "A) Azure Storage Account and Azure Key Vault",
      "B) Azure SQL Database and Cosmos DB",
      "C) Azure Virtual Desktop and Bastion",
      "D) Azure Service Bus and Event Grid"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Azure Storage Account and Azure Key Vault. Explanation: In Microsoft AI-300 foundational operations, Azure Storage Account and Azure Key Vault is the standard specification for identifying default dependent storage and key management services. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 767,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Compute Clusters. During an entry-level operational deployment (Scenario #7), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for configuring auto-scaling for batch training jobs in Azure AI?",
    "options": [
      "A) Setting min_instances=0 and max_instances=4",
      "B) Setting min_instances=10 with no auto-scale",
      "C) Disabling cluster scaling",
      "D) Using a single-node Compute Instance"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Setting min_instances=0 and max_instances=4. Explanation: In Microsoft AI-300 foundational operations, Setting min_instances=0 and max_instances=4 is the standard specification for configuring auto-scaling for batch training jobs. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 768,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Python SDK v2 Job Submit. During an entry-level operational deployment (Scenario #7), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for submitting a command job using command() in Azure AI?",
    "options": [
      "A) command(code='./src', command='python train.py', environment='AzureML-sklearn-1.0-ubuntu20.04-py38-cpu@latest', compute='cpu-cluster')",
      "B) job.run(script='train.py')",
      "C) mlflow.start_run()",
      "D) az ml workspace create"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) command(code='./src', command='python train.py', environment='AzureML-sklearn-1.0-ubuntu20.04-py38-cpu@latest', compute='cpu-cluster'). Explanation: In Microsoft AI-300 foundational operations, command(code='./src', command='python train.py', environment='AzureML-sklearn-1.0-ubuntu20.04-py38-cpu@latest', compute='cpu-cluster') is the standard specification for submitting a command job using command(). Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 769,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Managed Online Endpoints. During an entry-level operational deployment (Scenario #7), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for deploying a real-time scoring model in Azure AI?",
    "options": [
      "A) ManagedOnlineEndpoint and ManagedOnlineDeployment",
      "B) BatchEndpoint and BatchDeployment",
      "C) VirtualMachineEndpoint",
      "D) AppServiceDeployment"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) ManagedOnlineEndpoint and ManagedOnlineDeployment. Explanation: In Microsoft AI-300 foundational operations, ManagedOnlineEndpoint and ManagedOnlineDeployment is the standard specification for deploying a real-time scoring model. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 770,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "multiple",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Batch Endpoints. During an entry-level operational deployment (Scenario #7), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which THREE of the following are valid foundational components or configurations required for processing asynchronous inferences over large datasets? (Select three)",
    "options": [
      "A) Batch endpoint definition",
      "B) Batch deployment with compute cluster",
      "C) Output datastore path for predictions",
      "D) Real-time synchronous HTTP requests",
      "E) WebSocket streaming connections"
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answer: A, B, and C. Explanation: For processing asynchronous inferences over large datasets, Azure AI requires Batch endpoint definition, Batch deployment with compute cluster, and Output datastore path for predictions. Options D and E are invalid configurations for this operational step."
  },
  {
    "id": 771,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Data ingestion. During an entry-level operational deployment (Scenario #7), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for connecting to external cloud storage via identity pass-through in Azure AI?",
    "options": [
      "A) Credential-less datastore using User Identity or Managed Identity",
      "B) Hardcoding SAS tokens in plaintext scripts",
      "C) Public anonymous blob access",
      "D) FTP file transfer over HTTP"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Credential-less datastore using User Identity or Managed Identity. Explanation: In Microsoft AI-300 foundational operations, Credential-less datastore using User Identity or Managed Identity is the standard specification for connecting to external cloud storage via identity pass-through. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 772,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Model Artifacts. During an entry-level operational deployment (Scenario #7), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for structuring model outputs in MLflow format in Azure AI?",
    "options": [
      "A) MLmodel file accompanying model weights and conda.yaml",
      "B) A single unversioned .exe file",
      "C) A raw text log file without weights",
      "D) An SQL database backup dump"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) MLmodel file accompanying model weights and conda.yaml. Explanation: In Microsoft AI-300 foundational operations, MLmodel file accompanying model weights and conda.yaml is the standard specification for structuring model outputs in MLflow format. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 773,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Container Registries. During an entry-level operational deployment (Scenario #7), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for storing custom Docker images for Azure ML environments in Azure AI?",
    "options": [
      "A) Azure Container Registry (ACR)",
      "B) Azure Container Apps",
      "C) Azure Kubernetes Service",
      "D) Azure Blob Storage Table"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Azure Container Registry (ACR). Explanation: In Microsoft AI-300 foundational operations, Azure Container Registry (ACR) is the standard specification for storing custom Docker images for Azure ML environments. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 774,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Studio UI Navigation. During an entry-level operational deployment (Scenario #7), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for exploring automated training runs and metrics visualizers in Azure AI?",
    "options": [
      "A) Azure Machine Learning Studio Web Portal",
      "B) Azure DevOps Board",
      "C) Power BI Desktop",
      "D) SQL Server Management Studio"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Azure Machine Learning Studio Web Portal. Explanation: In Microsoft AI-300 foundational operations, Azure Machine Learning Studio Web Portal is the standard specification for exploring automated training runs and metrics visualizers. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 775,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "multiple",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on SDK v2 Installation. During an entry-level operational deployment (Scenario #7), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which THREE of the following are valid foundational components or configurations required for installing the latest Azure AI ML Python package? (Select three)",
    "options": [
      "A) azure-ai-ml package",
      "B) azure-identity for authentication",
      "C) mlflow and azureml-mlflow plugins",
      "D) pip install azureml-sdk (SDK v1 legacy)",
      "E) pip install mslearn-azure"
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answer: A, B, and C. Explanation: For installing the latest Azure AI ML Python package, Azure AI requires azure-ai-ml package, azure-identity for authentication, and mlflow and azureml-mlflow plugins. Options D and E are invalid configurations for this operational step."
  },
  {
    "id": 776,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Workspace core resources. During an entry-level operational deployment (Scenario #8), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for identifying default dependent storage and key management services in Azure AI?",
    "options": [
      "A) Azure Storage Account and Azure Key Vault",
      "B) Azure SQL Database and Cosmos DB",
      "C) Azure Virtual Desktop and Bastion",
      "D) Azure Service Bus and Event Grid"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Azure Storage Account and Azure Key Vault. Explanation: In Microsoft AI-300 foundational operations, Azure Storage Account and Azure Key Vault is the standard specification for identifying default dependent storage and key management services. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 777,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Compute Clusters. During an entry-level operational deployment (Scenario #8), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for configuring auto-scaling for batch training jobs in Azure AI?",
    "options": [
      "A) Setting min_instances=0 and max_instances=4",
      "B) Setting min_instances=10 with no auto-scale",
      "C) Disabling cluster scaling",
      "D) Using a single-node Compute Instance"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Setting min_instances=0 and max_instances=4. Explanation: In Microsoft AI-300 foundational operations, Setting min_instances=0 and max_instances=4 is the standard specification for configuring auto-scaling for batch training jobs. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 778,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Python SDK v2 Job Submit. During an entry-level operational deployment (Scenario #8), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for submitting a command job using command() in Azure AI?",
    "options": [
      "A) command(code='./src', command='python train.py', environment='AzureML-sklearn-1.0-ubuntu20.04-py38-cpu@latest', compute='cpu-cluster')",
      "B) job.run(script='train.py')",
      "C) mlflow.start_run()",
      "D) az ml workspace create"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) command(code='./src', command='python train.py', environment='AzureML-sklearn-1.0-ubuntu20.04-py38-cpu@latest', compute='cpu-cluster'). Explanation: In Microsoft AI-300 foundational operations, command(code='./src', command='python train.py', environment='AzureML-sklearn-1.0-ubuntu20.04-py38-cpu@latest', compute='cpu-cluster') is the standard specification for submitting a command job using command(). Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 779,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Managed Online Endpoints. During an entry-level operational deployment (Scenario #8), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for deploying a real-time scoring model in Azure AI?",
    "options": [
      "A) ManagedOnlineEndpoint and ManagedOnlineDeployment",
      "B) BatchEndpoint and BatchDeployment",
      "C) VirtualMachineEndpoint",
      "D) AppServiceDeployment"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) ManagedOnlineEndpoint and ManagedOnlineDeployment. Explanation: In Microsoft AI-300 foundational operations, ManagedOnlineEndpoint and ManagedOnlineDeployment is the standard specification for deploying a real-time scoring model. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 780,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "multiple",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Batch Endpoints. During an entry-level operational deployment (Scenario #8), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which THREE of the following are valid foundational components or configurations required for processing asynchronous inferences over large datasets? (Select three)",
    "options": [
      "A) Batch endpoint definition",
      "B) Batch deployment with compute cluster",
      "C) Output datastore path for predictions",
      "D) Real-time synchronous HTTP requests",
      "E) WebSocket streaming connections"
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answer: A, B, and C. Explanation: For processing asynchronous inferences over large datasets, Azure AI requires Batch endpoint definition, Batch deployment with compute cluster, and Output datastore path for predictions. Options D and E are invalid configurations for this operational step."
  },
  {
    "id": 781,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Data ingestion. During an entry-level operational deployment (Scenario #8), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for connecting to external cloud storage via identity pass-through in Azure AI?",
    "options": [
      "A) Credential-less datastore using User Identity or Managed Identity",
      "B) Hardcoding SAS tokens in plaintext scripts",
      "C) Public anonymous blob access",
      "D) FTP file transfer over HTTP"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Credential-less datastore using User Identity or Managed Identity. Explanation: In Microsoft AI-300 foundational operations, Credential-less datastore using User Identity or Managed Identity is the standard specification for connecting to external cloud storage via identity pass-through. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 782,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Model Artifacts. During an entry-level operational deployment (Scenario #8), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for structuring model outputs in MLflow format in Azure AI?",
    "options": [
      "A) MLmodel file accompanying model weights and conda.yaml",
      "B) A single unversioned .exe file",
      "C) A raw text log file without weights",
      "D) An SQL database backup dump"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) MLmodel file accompanying model weights and conda.yaml. Explanation: In Microsoft AI-300 foundational operations, MLmodel file accompanying model weights and conda.yaml is the standard specification for structuring model outputs in MLflow format. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 783,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Container Registries. During an entry-level operational deployment (Scenario #8), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for storing custom Docker images for Azure ML environments in Azure AI?",
    "options": [
      "A) Azure Container Registry (ACR)",
      "B) Azure Container Apps",
      "C) Azure Kubernetes Service",
      "D) Azure Blob Storage Table"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Azure Container Registry (ACR). Explanation: In Microsoft AI-300 foundational operations, Azure Container Registry (ACR) is the standard specification for storing custom Docker images for Azure ML environments. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 784,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Studio UI Navigation. During an entry-level operational deployment (Scenario #8), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for exploring automated training runs and metrics visualizers in Azure AI?",
    "options": [
      "A) Azure Machine Learning Studio Web Portal",
      "B) Azure DevOps Board",
      "C) Power BI Desktop",
      "D) SQL Server Management Studio"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Azure Machine Learning Studio Web Portal. Explanation: In Microsoft AI-300 foundational operations, Azure Machine Learning Studio Web Portal is the standard specification for exploring automated training runs and metrics visualizers. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 785,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "multiple",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on SDK v2 Installation. During an entry-level operational deployment (Scenario #8), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which THREE of the following are valid foundational components or configurations required for installing the latest Azure AI ML Python package? (Select three)",
    "options": [
      "A) azure-ai-ml package",
      "B) azure-identity for authentication",
      "C) mlflow and azureml-mlflow plugins",
      "D) pip install azureml-sdk (SDK v1 legacy)",
      "E) pip install mslearn-azure"
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answer: A, B, and C. Explanation: For installing the latest Azure AI ML Python package, Azure AI requires azure-ai-ml package, azure-identity for authentication, and mlflow and azureml-mlflow plugins. Options D and E are invalid configurations for this operational step."
  },
  {
    "id": 786,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Workspace core resources. During an entry-level operational deployment (Scenario #9), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for identifying default dependent storage and key management services in Azure AI?",
    "options": [
      "A) Azure Storage Account and Azure Key Vault",
      "B) Azure SQL Database and Cosmos DB",
      "C) Azure Virtual Desktop and Bastion",
      "D) Azure Service Bus and Event Grid"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Azure Storage Account and Azure Key Vault. Explanation: In Microsoft AI-300 foundational operations, Azure Storage Account and Azure Key Vault is the standard specification for identifying default dependent storage and key management services. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 787,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Compute Clusters. During an entry-level operational deployment (Scenario #9), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for configuring auto-scaling for batch training jobs in Azure AI?",
    "options": [
      "A) Setting min_instances=0 and max_instances=4",
      "B) Setting min_instances=10 with no auto-scale",
      "C) Disabling cluster scaling",
      "D) Using a single-node Compute Instance"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Setting min_instances=0 and max_instances=4. Explanation: In Microsoft AI-300 foundational operations, Setting min_instances=0 and max_instances=4 is the standard specification for configuring auto-scaling for batch training jobs. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 788,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Python SDK v2 Job Submit. During an entry-level operational deployment (Scenario #9), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for submitting a command job using command() in Azure AI?",
    "options": [
      "A) command(code='./src', command='python train.py', environment='AzureML-sklearn-1.0-ubuntu20.04-py38-cpu@latest', compute='cpu-cluster')",
      "B) job.run(script='train.py')",
      "C) mlflow.start_run()",
      "D) az ml workspace create"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) command(code='./src', command='python train.py', environment='AzureML-sklearn-1.0-ubuntu20.04-py38-cpu@latest', compute='cpu-cluster'). Explanation: In Microsoft AI-300 foundational operations, command(code='./src', command='python train.py', environment='AzureML-sklearn-1.0-ubuntu20.04-py38-cpu@latest', compute='cpu-cluster') is the standard specification for submitting a command job using command(). Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 789,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Managed Online Endpoints. During an entry-level operational deployment (Scenario #9), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for deploying a real-time scoring model in Azure AI?",
    "options": [
      "A) ManagedOnlineEndpoint and ManagedOnlineDeployment",
      "B) BatchEndpoint and BatchDeployment",
      "C) VirtualMachineEndpoint",
      "D) AppServiceDeployment"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) ManagedOnlineEndpoint and ManagedOnlineDeployment. Explanation: In Microsoft AI-300 foundational operations, ManagedOnlineEndpoint and ManagedOnlineDeployment is the standard specification for deploying a real-time scoring model. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 790,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "multiple",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Batch Endpoints. During an entry-level operational deployment (Scenario #9), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which THREE of the following are valid foundational components or configurations required for processing asynchronous inferences over large datasets? (Select three)",
    "options": [
      "A) Batch endpoint definition",
      "B) Batch deployment with compute cluster",
      "C) Output datastore path for predictions",
      "D) Real-time synchronous HTTP requests",
      "E) WebSocket streaming connections"
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answer: A, B, and C. Explanation: For processing asynchronous inferences over large datasets, Azure AI requires Batch endpoint definition, Batch deployment with compute cluster, and Output datastore path for predictions. Options D and E are invalid configurations for this operational step."
  },
  {
    "id": 791,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Data ingestion. During an entry-level operational deployment (Scenario #9), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for connecting to external cloud storage via identity pass-through in Azure AI?",
    "options": [
      "A) Credential-less datastore using User Identity or Managed Identity",
      "B) Hardcoding SAS tokens in plaintext scripts",
      "C) Public anonymous blob access",
      "D) FTP file transfer over HTTP"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Credential-less datastore using User Identity or Managed Identity. Explanation: In Microsoft AI-300 foundational operations, Credential-less datastore using User Identity or Managed Identity is the standard specification for connecting to external cloud storage via identity pass-through. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 792,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Model Artifacts. During an entry-level operational deployment (Scenario #9), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for structuring model outputs in MLflow format in Azure AI?",
    "options": [
      "A) MLmodel file accompanying model weights and conda.yaml",
      "B) A single unversioned .exe file",
      "C) A raw text log file without weights",
      "D) An SQL database backup dump"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) MLmodel file accompanying model weights and conda.yaml. Explanation: In Microsoft AI-300 foundational operations, MLmodel file accompanying model weights and conda.yaml is the standard specification for structuring model outputs in MLflow format. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 793,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Container Registries. During an entry-level operational deployment (Scenario #9), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for storing custom Docker images for Azure ML environments in Azure AI?",
    "options": [
      "A) Azure Container Registry (ACR)",
      "B) Azure Container Apps",
      "C) Azure Kubernetes Service",
      "D) Azure Blob Storage Table"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Azure Container Registry (ACR). Explanation: In Microsoft AI-300 foundational operations, Azure Container Registry (ACR) is the standard specification for storing custom Docker images for Azure ML environments. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 794,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Studio UI Navigation. During an entry-level operational deployment (Scenario #9), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for exploring automated training runs and metrics visualizers in Azure AI?",
    "options": [
      "A) Azure Machine Learning Studio Web Portal",
      "B) Azure DevOps Board",
      "C) Power BI Desktop",
      "D) SQL Server Management Studio"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Azure Machine Learning Studio Web Portal. Explanation: In Microsoft AI-300 foundational operations, Azure Machine Learning Studio Web Portal is the standard specification for exploring automated training runs and metrics visualizers. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 795,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "multiple",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on SDK v2 Installation. During an entry-level operational deployment (Scenario #9), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which THREE of the following are valid foundational components or configurations required for installing the latest Azure AI ML Python package? (Select three)",
    "options": [
      "A) azure-ai-ml package",
      "B) azure-identity for authentication",
      "C) mlflow and azureml-mlflow plugins",
      "D) pip install azureml-sdk (SDK v1 legacy)",
      "E) pip install mslearn-azure"
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answer: A, B, and C. Explanation: For installing the latest Azure AI ML Python package, Azure AI requires azure-ai-ml package, azure-identity for authentication, and mlflow and azureml-mlflow plugins. Options D and E are invalid configurations for this operational step."
  },
  {
    "id": 796,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Workspace core resources. During an entry-level operational deployment (Scenario #10), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for identifying default dependent storage and key management services in Azure AI?",
    "options": [
      "A) Azure Storage Account and Azure Key Vault",
      "B) Azure SQL Database and Cosmos DB",
      "C) Azure Virtual Desktop and Bastion",
      "D) Azure Service Bus and Event Grid"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Azure Storage Account and Azure Key Vault. Explanation: In Microsoft AI-300 foundational operations, Azure Storage Account and Azure Key Vault is the standard specification for identifying default dependent storage and key management services. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 797,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Compute Clusters. During an entry-level operational deployment (Scenario #10), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for configuring auto-scaling for batch training jobs in Azure AI?",
    "options": [
      "A) Setting min_instances=0 and max_instances=4",
      "B) Setting min_instances=10 with no auto-scale",
      "C) Disabling cluster scaling",
      "D) Using a single-node Compute Instance"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Setting min_instances=0 and max_instances=4. Explanation: In Microsoft AI-300 foundational operations, Setting min_instances=0 and max_instances=4 is the standard specification for configuring auto-scaling for batch training jobs. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 798,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Python SDK v2 Job Submit. During an entry-level operational deployment (Scenario #10), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for submitting a command job using command() in Azure AI?",
    "options": [
      "A) command(code='./src', command='python train.py', environment='AzureML-sklearn-1.0-ubuntu20.04-py38-cpu@latest', compute='cpu-cluster')",
      "B) job.run(script='train.py')",
      "C) mlflow.start_run()",
      "D) az ml workspace create"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) command(code='./src', command='python train.py', environment='AzureML-sklearn-1.0-ubuntu20.04-py38-cpu@latest', compute='cpu-cluster'). Explanation: In Microsoft AI-300 foundational operations, command(code='./src', command='python train.py', environment='AzureML-sklearn-1.0-ubuntu20.04-py38-cpu@latest', compute='cpu-cluster') is the standard specification for submitting a command job using command(). Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 799,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Managed Online Endpoints. During an entry-level operational deployment (Scenario #10), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for deploying a real-time scoring model in Azure AI?",
    "options": [
      "A) ManagedOnlineEndpoint and ManagedOnlineDeployment",
      "B) BatchEndpoint and BatchDeployment",
      "C) VirtualMachineEndpoint",
      "D) AppServiceDeployment"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) ManagedOnlineEndpoint and ManagedOnlineDeployment. Explanation: In Microsoft AI-300 foundational operations, ManagedOnlineEndpoint and ManagedOnlineDeployment is the standard specification for deploying a real-time scoring model. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 800,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "multiple",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Batch Endpoints. During an entry-level operational deployment (Scenario #10), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which THREE of the following are valid foundational components or configurations required for processing asynchronous inferences over large datasets? (Select three)",
    "options": [
      "A) Batch endpoint definition",
      "B) Batch deployment with compute cluster",
      "C) Output datastore path for predictions",
      "D) Real-time synchronous HTTP requests",
      "E) WebSocket streaming connections"
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answer: A, B, and C. Explanation: For processing asynchronous inferences over large datasets, Azure AI requires Batch endpoint definition, Batch deployment with compute cluster, and Output datastore path for predictions. Options D and E are invalid configurations for this operational step."
  },
  {
    "id": 801,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Data ingestion. During an entry-level operational deployment (Scenario #10), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for connecting to external cloud storage via identity pass-through in Azure AI?",
    "options": [
      "A) Credential-less datastore using User Identity or Managed Identity",
      "B) Hardcoding SAS tokens in plaintext scripts",
      "C) Public anonymous blob access",
      "D) FTP file transfer over HTTP"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Credential-less datastore using User Identity or Managed Identity. Explanation: In Microsoft AI-300 foundational operations, Credential-less datastore using User Identity or Managed Identity is the standard specification for connecting to external cloud storage via identity pass-through. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 802,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Model Artifacts. During an entry-level operational deployment (Scenario #10), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for structuring model outputs in MLflow format in Azure AI?",
    "options": [
      "A) MLmodel file accompanying model weights and conda.yaml",
      "B) A single unversioned .exe file",
      "C) A raw text log file without weights",
      "D) An SQL database backup dump"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) MLmodel file accompanying model weights and conda.yaml. Explanation: In Microsoft AI-300 foundational operations, MLmodel file accompanying model weights and conda.yaml is the standard specification for structuring model outputs in MLflow format. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 803,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Container Registries. During an entry-level operational deployment (Scenario #10), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for storing custom Docker images for Azure ML environments in Azure AI?",
    "options": [
      "A) Azure Container Registry (ACR)",
      "B) Azure Container Apps",
      "C) Azure Kubernetes Service",
      "D) Azure Blob Storage Table"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Azure Container Registry (ACR). Explanation: In Microsoft AI-300 foundational operations, Azure Container Registry (ACR) is the standard specification for storing custom Docker images for Azure ML environments. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 804,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Studio UI Navigation. During an entry-level operational deployment (Scenario #10), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for exploring automated training runs and metrics visualizers in Azure AI?",
    "options": [
      "A) Azure Machine Learning Studio Web Portal",
      "B) Azure DevOps Board",
      "C) Power BI Desktop",
      "D) SQL Server Management Studio"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Azure Machine Learning Studio Web Portal. Explanation: In Microsoft AI-300 foundational operations, Azure Machine Learning Studio Web Portal is the standard specification for exploring automated training runs and metrics visualizers. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 805,
    "domain": "Track 2: Azure ML Core - Workspace & Compute",
    "difficulty": "Easy",
    "type": "multiple",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on SDK v2 Installation. During an entry-level operational deployment (Scenario #10), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which THREE of the following are valid foundational components or configurations required for installing the latest Azure AI ML Python package? (Select three)",
    "options": [
      "A) azure-ai-ml package",
      "B) azure-identity for authentication",
      "C) mlflow and azureml-mlflow plugins",
      "D) pip install azureml-sdk (SDK v1 legacy)",
      "E) pip install mslearn-azure"
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answer: A, B, and C. Explanation: For installing the latest Azure AI ML Python package, Azure AI requires azure-ai-ml package, azure-identity for authentication, and mlflow and azureml-mlflow plugins. Options D and E are invalid configurations for this operational step."
  }
];
