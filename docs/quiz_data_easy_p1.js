// ==========================================
// Track 1 & 2: MLOps Infrastructure & Lifecycle - EASY DIFFICULTY (Questions 606-705)
// ==========================================

window.QUIZ_DATA_EASY_P1 = [
  {
    "id": 606,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Azure ML Workspace setup. During an entry-level operational deployment (Scenario #1), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for creating a workspace via Bicep in Azure AI?",
    "options": [
      "A) Microsoft.MachineLearningServices/workspaces",
      "B) Microsoft.AI/workspaces",
      "C) Microsoft.CognitiveServices/accounts",
      "D) Microsoft.Compute/virtualMachines"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Microsoft.MachineLearningServices/workspaces. Explanation: In Microsoft AI-300 foundational operations, Microsoft.MachineLearningServices/workspaces is the standard specification for creating a workspace via Bicep. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 607,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Compute Target selection. During an entry-level operational deployment (Scenario #1), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for interactive Jupyter notebook development in Azure AI?",
    "options": [
      "A) Azure ML Compute Instance",
      "B) Azure ML Compute Cluster",
      "C) Azure Kubernetes Service",
      "D) Azure Container Instances"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Azure ML Compute Instance. Explanation: In Microsoft AI-300 foundational operations, Azure ML Compute Instance is the standard specification for interactive Jupyter notebook development. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 608,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Datastore management. During an entry-level operational deployment (Scenario #1), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for connecting an Azure Blob container as a datastore in Azure AI?",
    "options": [
      "A) az ml datastore create --type azure_blob",
      "B) az ml dataset register",
      "C) az storage account create",
      "D) az ml compute create"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) az ml datastore create --type azure_blob. Explanation: In Microsoft AI-300 foundational operations, az ml datastore create --type azure_blob is the standard specification for connecting an Azure Blob container as a datastore. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 609,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on MLflow tracking. During an entry-level operational deployment (Scenario #1), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for logging training parameters and metrics in Azure AI?",
    "options": [
      "A) mlflow.log_param() and mlflow.log_metric()",
      "B) mlflow.save_model()",
      "C) mlflow.register_model()",
      "D) mlflow.create_experiment()"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) mlflow.log_param() and mlflow.log_metric(). Explanation: In Microsoft AI-300 foundational operations, mlflow.log_param() and mlflow.log_metric() is the standard specification for logging training parameters and metrics. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 610,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "multiple",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Model registration. During an entry-level operational deployment (Scenario #1), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which THREE of the following are valid foundational components or configurations required for registering an MLflow model in the workspace registry? (Select three)",
    "options": [
      "A) Run ID or artifact path",
      "B) Model name",
      "C) Model version tags",
      "D) mlflow.log_param('model', 'ModelName')",
      "E) az ml environment create"
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answer: A, B, and C. Explanation: For registering an MLflow model in the workspace registry, Azure AI requires Run ID or artifact path, Model name, and Model version tags. Options D and E are invalid configurations for this operational step."
  },
  {
    "id": 611,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Automated ML (AutoML). During an entry-level operational deployment (Scenario #1), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for setting up a classification AutoML task in Azure AI?",
    "options": [
      "A) automl.classification(training_data=data, target_column_name='label')",
      "B) automl.regression(target='none')",
      "C) automl.forecasting(time_column='none')",
      "D) automl.nlp()"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) automl.classification(training_data=data, target_column_name='label'). Explanation: In Microsoft AI-300 foundational operations, automl.classification(training_data=data, target_column_name='label') is the standard specification for setting up a classification AutoML task. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 612,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Environment management. During an entry-level operational deployment (Scenario #1), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for specifying conda dependencies for an ML job in Azure AI?",
    "options": [
      "A) Environment(image='mcr.microsoft.com/azureml/openmpi4.1.0-ubuntu20.04', conda_file='conda.yaml')",
      "B) Environment(image='none', conda_file='none')",
      "C) Compute(vm_size='Standard_D2_v2')",
      "D) Datastore(type='blob')"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Environment(image='mcr.microsoft.com/azureml/openmpi4.1.0-ubuntu20.04', conda_file='conda.yaml'). Explanation: In Microsoft AI-300 foundational operations, Environment(image='mcr.microsoft.com/azureml/openmpi4.1.0-ubuntu20.04', conda_file='conda.yaml') is the standard specification for specifying conda dependencies for an ML job. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 613,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Azure CLI azd tool. During an entry-level operational deployment (Scenario #1), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for provisioning infrastructure from Bicep templates in Azure AI?",
    "options": [
      "A) azd up",
      "B) azd down",
      "C) az ml job create",
      "D) git push origin main"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) azd up. Explanation: In Microsoft AI-300 foundational operations, azd up is the standard specification for provisioning infrastructure from Bicep templates. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 614,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Role-Based Access Control. During an entry-level operational deployment (Scenario #1), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for granting read-only workspace access to a data scientist in Azure AI?",
    "options": [
      "A) Azure ML Data Scientist or Reader built-in role",
      "B) Owner role on the subscription",
      "C) User Access Administrator role",
      "D) Virtual Machine Contributor role"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Azure ML Data Scientist or Reader built-in role. Explanation: In Microsoft AI-300 foundational operations, Azure ML Data Scientist or Reader built-in role is the standard specification for granting read-only workspace access to a data scientist. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 615,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "multiple",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Data Asset creation. During an entry-level operational deployment (Scenario #1), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which THREE of the following are valid foundational components or configurations required for registering a tabular dataset in ML Studio? (Select three)",
    "options": [
      "A) URI folder or file path",
      "B) MLTable schema definition",
      "C) Data asset name and version",
      "D) SQL stored procedure trigger",
      "E) VM hard drive image"
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answer: A, B, and C. Explanation: For registering a tabular dataset in ML Studio, Azure AI requires URI folder or file path, MLTable schema definition, and Data asset name and version. Options D and E are invalid configurations for this operational step."
  },
  {
    "id": 616,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Azure ML Workspace setup. During an entry-level operational deployment (Scenario #2), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for creating a workspace via Bicep in Azure AI?",
    "options": [
      "A) Microsoft.MachineLearningServices/workspaces",
      "B) Microsoft.AI/workspaces",
      "C) Microsoft.CognitiveServices/accounts",
      "D) Microsoft.Compute/virtualMachines"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Microsoft.MachineLearningServices/workspaces. Explanation: In Microsoft AI-300 foundational operations, Microsoft.MachineLearningServices/workspaces is the standard specification for creating a workspace via Bicep. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 617,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Compute Target selection. During an entry-level operational deployment (Scenario #2), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for interactive Jupyter notebook development in Azure AI?",
    "options": [
      "A) Azure ML Compute Instance",
      "B) Azure ML Compute Cluster",
      "C) Azure Kubernetes Service",
      "D) Azure Container Instances"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Azure ML Compute Instance. Explanation: In Microsoft AI-300 foundational operations, Azure ML Compute Instance is the standard specification for interactive Jupyter notebook development. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 618,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Datastore management. During an entry-level operational deployment (Scenario #2), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for connecting an Azure Blob container as a datastore in Azure AI?",
    "options": [
      "A) az ml datastore create --type azure_blob",
      "B) az ml dataset register",
      "C) az storage account create",
      "D) az ml compute create"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) az ml datastore create --type azure_blob. Explanation: In Microsoft AI-300 foundational operations, az ml datastore create --type azure_blob is the standard specification for connecting an Azure Blob container as a datastore. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 619,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on MLflow tracking. During an entry-level operational deployment (Scenario #2), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for logging training parameters and metrics in Azure AI?",
    "options": [
      "A) mlflow.log_param() and mlflow.log_metric()",
      "B) mlflow.save_model()",
      "C) mlflow.register_model()",
      "D) mlflow.create_experiment()"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) mlflow.log_param() and mlflow.log_metric(). Explanation: In Microsoft AI-300 foundational operations, mlflow.log_param() and mlflow.log_metric() is the standard specification for logging training parameters and metrics. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 620,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "multiple",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Model registration. During an entry-level operational deployment (Scenario #2), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which THREE of the following are valid foundational components or configurations required for registering an MLflow model in the workspace registry? (Select three)",
    "options": [
      "A) Run ID or artifact path",
      "B) Model name",
      "C) Model version tags",
      "D) mlflow.log_param('model', 'ModelName')",
      "E) az ml environment create"
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answer: A, B, and C. Explanation: For registering an MLflow model in the workspace registry, Azure AI requires Run ID or artifact path, Model name, and Model version tags. Options D and E are invalid configurations for this operational step."
  },
  {
    "id": 621,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Automated ML (AutoML). During an entry-level operational deployment (Scenario #2), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for setting up a classification AutoML task in Azure AI?",
    "options": [
      "A) automl.classification(training_data=data, target_column_name='label')",
      "B) automl.regression(target='none')",
      "C) automl.forecasting(time_column='none')",
      "D) automl.nlp()"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) automl.classification(training_data=data, target_column_name='label'). Explanation: In Microsoft AI-300 foundational operations, automl.classification(training_data=data, target_column_name='label') is the standard specification for setting up a classification AutoML task. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 622,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Environment management. During an entry-level operational deployment (Scenario #2), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for specifying conda dependencies for an ML job in Azure AI?",
    "options": [
      "A) Environment(image='mcr.microsoft.com/azureml/openmpi4.1.0-ubuntu20.04', conda_file='conda.yaml')",
      "B) Environment(image='none', conda_file='none')",
      "C) Compute(vm_size='Standard_D2_v2')",
      "D) Datastore(type='blob')"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Environment(image='mcr.microsoft.com/azureml/openmpi4.1.0-ubuntu20.04', conda_file='conda.yaml'). Explanation: In Microsoft AI-300 foundational operations, Environment(image='mcr.microsoft.com/azureml/openmpi4.1.0-ubuntu20.04', conda_file='conda.yaml') is the standard specification for specifying conda dependencies for an ML job. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 623,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Azure CLI azd tool. During an entry-level operational deployment (Scenario #2), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for provisioning infrastructure from Bicep templates in Azure AI?",
    "options": [
      "A) azd up",
      "B) azd down",
      "C) az ml job create",
      "D) git push origin main"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) azd up. Explanation: In Microsoft AI-300 foundational operations, azd up is the standard specification for provisioning infrastructure from Bicep templates. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 624,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Role-Based Access Control. During an entry-level operational deployment (Scenario #2), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for granting read-only workspace access to a data scientist in Azure AI?",
    "options": [
      "A) Azure ML Data Scientist or Reader built-in role",
      "B) Owner role on the subscription",
      "C) User Access Administrator role",
      "D) Virtual Machine Contributor role"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Azure ML Data Scientist or Reader built-in role. Explanation: In Microsoft AI-300 foundational operations, Azure ML Data Scientist or Reader built-in role is the standard specification for granting read-only workspace access to a data scientist. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 625,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "multiple",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Data Asset creation. During an entry-level operational deployment (Scenario #2), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which THREE of the following are valid foundational components or configurations required for registering a tabular dataset in ML Studio? (Select three)",
    "options": [
      "A) URI folder or file path",
      "B) MLTable schema definition",
      "C) Data asset name and version",
      "D) SQL stored procedure trigger",
      "E) VM hard drive image"
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answer: A, B, and C. Explanation: For registering a tabular dataset in ML Studio, Azure AI requires URI folder or file path, MLTable schema definition, and Data asset name and version. Options D and E are invalid configurations for this operational step."
  },
  {
    "id": 626,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Azure ML Workspace setup. During an entry-level operational deployment (Scenario #3), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for creating a workspace via Bicep in Azure AI?",
    "options": [
      "A) Microsoft.MachineLearningServices/workspaces",
      "B) Microsoft.AI/workspaces",
      "C) Microsoft.CognitiveServices/accounts",
      "D) Microsoft.Compute/virtualMachines"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Microsoft.MachineLearningServices/workspaces. Explanation: In Microsoft AI-300 foundational operations, Microsoft.MachineLearningServices/workspaces is the standard specification for creating a workspace via Bicep. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 627,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Compute Target selection. During an entry-level operational deployment (Scenario #3), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for interactive Jupyter notebook development in Azure AI?",
    "options": [
      "A) Azure ML Compute Instance",
      "B) Azure ML Compute Cluster",
      "C) Azure Kubernetes Service",
      "D) Azure Container Instances"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Azure ML Compute Instance. Explanation: In Microsoft AI-300 foundational operations, Azure ML Compute Instance is the standard specification for interactive Jupyter notebook development. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 628,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Datastore management. During an entry-level operational deployment (Scenario #3), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for connecting an Azure Blob container as a datastore in Azure AI?",
    "options": [
      "A) az ml datastore create --type azure_blob",
      "B) az ml dataset register",
      "C) az storage account create",
      "D) az ml compute create"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) az ml datastore create --type azure_blob. Explanation: In Microsoft AI-300 foundational operations, az ml datastore create --type azure_blob is the standard specification for connecting an Azure Blob container as a datastore. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 629,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on MLflow tracking. During an entry-level operational deployment (Scenario #3), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for logging training parameters and metrics in Azure AI?",
    "options": [
      "A) mlflow.log_param() and mlflow.log_metric()",
      "B) mlflow.save_model()",
      "C) mlflow.register_model()",
      "D) mlflow.create_experiment()"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) mlflow.log_param() and mlflow.log_metric(). Explanation: In Microsoft AI-300 foundational operations, mlflow.log_param() and mlflow.log_metric() is the standard specification for logging training parameters and metrics. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 630,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "multiple",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Model registration. During an entry-level operational deployment (Scenario #3), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which THREE of the following are valid foundational components or configurations required for registering an MLflow model in the workspace registry? (Select three)",
    "options": [
      "A) Run ID or artifact path",
      "B) Model name",
      "C) Model version tags",
      "D) mlflow.log_param('model', 'ModelName')",
      "E) az ml environment create"
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answer: A, B, and C. Explanation: For registering an MLflow model in the workspace registry, Azure AI requires Run ID or artifact path, Model name, and Model version tags. Options D and E are invalid configurations for this operational step."
  },
  {
    "id": 631,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Automated ML (AutoML). During an entry-level operational deployment (Scenario #3), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for setting up a classification AutoML task in Azure AI?",
    "options": [
      "A) automl.classification(training_data=data, target_column_name='label')",
      "B) automl.regression(target='none')",
      "C) automl.forecasting(time_column='none')",
      "D) automl.nlp()"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) automl.classification(training_data=data, target_column_name='label'). Explanation: In Microsoft AI-300 foundational operations, automl.classification(training_data=data, target_column_name='label') is the standard specification for setting up a classification AutoML task. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 632,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Environment management. During an entry-level operational deployment (Scenario #3), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for specifying conda dependencies for an ML job in Azure AI?",
    "options": [
      "A) Environment(image='mcr.microsoft.com/azureml/openmpi4.1.0-ubuntu20.04', conda_file='conda.yaml')",
      "B) Environment(image='none', conda_file='none')",
      "C) Compute(vm_size='Standard_D2_v2')",
      "D) Datastore(type='blob')"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Environment(image='mcr.microsoft.com/azureml/openmpi4.1.0-ubuntu20.04', conda_file='conda.yaml'). Explanation: In Microsoft AI-300 foundational operations, Environment(image='mcr.microsoft.com/azureml/openmpi4.1.0-ubuntu20.04', conda_file='conda.yaml') is the standard specification for specifying conda dependencies for an ML job. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 633,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Azure CLI azd tool. During an entry-level operational deployment (Scenario #3), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for provisioning infrastructure from Bicep templates in Azure AI?",
    "options": [
      "A) azd up",
      "B) azd down",
      "C) az ml job create",
      "D) git push origin main"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) azd up. Explanation: In Microsoft AI-300 foundational operations, azd up is the standard specification for provisioning infrastructure from Bicep templates. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 634,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Role-Based Access Control. During an entry-level operational deployment (Scenario #3), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for granting read-only workspace access to a data scientist in Azure AI?",
    "options": [
      "A) Azure ML Data Scientist or Reader built-in role",
      "B) Owner role on the subscription",
      "C) User Access Administrator role",
      "D) Virtual Machine Contributor role"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Azure ML Data Scientist or Reader built-in role. Explanation: In Microsoft AI-300 foundational operations, Azure ML Data Scientist or Reader built-in role is the standard specification for granting read-only workspace access to a data scientist. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 635,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "multiple",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Data Asset creation. During an entry-level operational deployment (Scenario #3), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which THREE of the following are valid foundational components or configurations required for registering a tabular dataset in ML Studio? (Select three)",
    "options": [
      "A) URI folder or file path",
      "B) MLTable schema definition",
      "C) Data asset name and version",
      "D) SQL stored procedure trigger",
      "E) VM hard drive image"
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answer: A, B, and C. Explanation: For registering a tabular dataset in ML Studio, Azure AI requires URI folder or file path, MLTable schema definition, and Data asset name and version. Options D and E are invalid configurations for this operational step."
  },
  {
    "id": 636,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Azure ML Workspace setup. During an entry-level operational deployment (Scenario #4), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for creating a workspace via Bicep in Azure AI?",
    "options": [
      "A) Microsoft.MachineLearningServices/workspaces",
      "B) Microsoft.AI/workspaces",
      "C) Microsoft.CognitiveServices/accounts",
      "D) Microsoft.Compute/virtualMachines"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Microsoft.MachineLearningServices/workspaces. Explanation: In Microsoft AI-300 foundational operations, Microsoft.MachineLearningServices/workspaces is the standard specification for creating a workspace via Bicep. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 637,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Compute Target selection. During an entry-level operational deployment (Scenario #4), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for interactive Jupyter notebook development in Azure AI?",
    "options": [
      "A) Azure ML Compute Instance",
      "B) Azure ML Compute Cluster",
      "C) Azure Kubernetes Service",
      "D) Azure Container Instances"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Azure ML Compute Instance. Explanation: In Microsoft AI-300 foundational operations, Azure ML Compute Instance is the standard specification for interactive Jupyter notebook development. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 638,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Datastore management. During an entry-level operational deployment (Scenario #4), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for connecting an Azure Blob container as a datastore in Azure AI?",
    "options": [
      "A) az ml datastore create --type azure_blob",
      "B) az ml dataset register",
      "C) az storage account create",
      "D) az ml compute create"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) az ml datastore create --type azure_blob. Explanation: In Microsoft AI-300 foundational operations, az ml datastore create --type azure_blob is the standard specification for connecting an Azure Blob container as a datastore. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 639,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on MLflow tracking. During an entry-level operational deployment (Scenario #4), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for logging training parameters and metrics in Azure AI?",
    "options": [
      "A) mlflow.log_param() and mlflow.log_metric()",
      "B) mlflow.save_model()",
      "C) mlflow.register_model()",
      "D) mlflow.create_experiment()"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) mlflow.log_param() and mlflow.log_metric(). Explanation: In Microsoft AI-300 foundational operations, mlflow.log_param() and mlflow.log_metric() is the standard specification for logging training parameters and metrics. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 640,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "multiple",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Model registration. During an entry-level operational deployment (Scenario #4), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which THREE of the following are valid foundational components or configurations required for registering an MLflow model in the workspace registry? (Select three)",
    "options": [
      "A) Run ID or artifact path",
      "B) Model name",
      "C) Model version tags",
      "D) mlflow.log_param('model', 'ModelName')",
      "E) az ml environment create"
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answer: A, B, and C. Explanation: For registering an MLflow model in the workspace registry, Azure AI requires Run ID or artifact path, Model name, and Model version tags. Options D and E are invalid configurations for this operational step."
  },
  {
    "id": 641,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Automated ML (AutoML). During an entry-level operational deployment (Scenario #4), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for setting up a classification AutoML task in Azure AI?",
    "options": [
      "A) automl.classification(training_data=data, target_column_name='label')",
      "B) automl.regression(target='none')",
      "C) automl.forecasting(time_column='none')",
      "D) automl.nlp()"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) automl.classification(training_data=data, target_column_name='label'). Explanation: In Microsoft AI-300 foundational operations, automl.classification(training_data=data, target_column_name='label') is the standard specification for setting up a classification AutoML task. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 642,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Environment management. During an entry-level operational deployment (Scenario #4), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for specifying conda dependencies for an ML job in Azure AI?",
    "options": [
      "A) Environment(image='mcr.microsoft.com/azureml/openmpi4.1.0-ubuntu20.04', conda_file='conda.yaml')",
      "B) Environment(image='none', conda_file='none')",
      "C) Compute(vm_size='Standard_D2_v2')",
      "D) Datastore(type='blob')"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Environment(image='mcr.microsoft.com/azureml/openmpi4.1.0-ubuntu20.04', conda_file='conda.yaml'). Explanation: In Microsoft AI-300 foundational operations, Environment(image='mcr.microsoft.com/azureml/openmpi4.1.0-ubuntu20.04', conda_file='conda.yaml') is the standard specification for specifying conda dependencies for an ML job. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 643,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Azure CLI azd tool. During an entry-level operational deployment (Scenario #4), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for provisioning infrastructure from Bicep templates in Azure AI?",
    "options": [
      "A) azd up",
      "B) azd down",
      "C) az ml job create",
      "D) git push origin main"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) azd up. Explanation: In Microsoft AI-300 foundational operations, azd up is the standard specification for provisioning infrastructure from Bicep templates. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 644,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Role-Based Access Control. During an entry-level operational deployment (Scenario #4), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for granting read-only workspace access to a data scientist in Azure AI?",
    "options": [
      "A) Azure ML Data Scientist or Reader built-in role",
      "B) Owner role on the subscription",
      "C) User Access Administrator role",
      "D) Virtual Machine Contributor role"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Azure ML Data Scientist or Reader built-in role. Explanation: In Microsoft AI-300 foundational operations, Azure ML Data Scientist or Reader built-in role is the standard specification for granting read-only workspace access to a data scientist. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 645,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "multiple",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Data Asset creation. During an entry-level operational deployment (Scenario #4), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which THREE of the following are valid foundational components or configurations required for registering a tabular dataset in ML Studio? (Select three)",
    "options": [
      "A) URI folder or file path",
      "B) MLTable schema definition",
      "C) Data asset name and version",
      "D) SQL stored procedure trigger",
      "E) VM hard drive image"
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answer: A, B, and C. Explanation: For registering a tabular dataset in ML Studio, Azure AI requires URI folder or file path, MLTable schema definition, and Data asset name and version. Options D and E are invalid configurations for this operational step."
  },
  {
    "id": 646,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Azure ML Workspace setup. During an entry-level operational deployment (Scenario #5), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for creating a workspace via Bicep in Azure AI?",
    "options": [
      "A) Microsoft.MachineLearningServices/workspaces",
      "B) Microsoft.AI/workspaces",
      "C) Microsoft.CognitiveServices/accounts",
      "D) Microsoft.Compute/virtualMachines"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Microsoft.MachineLearningServices/workspaces. Explanation: In Microsoft AI-300 foundational operations, Microsoft.MachineLearningServices/workspaces is the standard specification for creating a workspace via Bicep. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 647,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Compute Target selection. During an entry-level operational deployment (Scenario #5), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for interactive Jupyter notebook development in Azure AI?",
    "options": [
      "A) Azure ML Compute Instance",
      "B) Azure ML Compute Cluster",
      "C) Azure Kubernetes Service",
      "D) Azure Container Instances"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Azure ML Compute Instance. Explanation: In Microsoft AI-300 foundational operations, Azure ML Compute Instance is the standard specification for interactive Jupyter notebook development. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 648,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Datastore management. During an entry-level operational deployment (Scenario #5), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for connecting an Azure Blob container as a datastore in Azure AI?",
    "options": [
      "A) az ml datastore create --type azure_blob",
      "B) az ml dataset register",
      "C) az storage account create",
      "D) az ml compute create"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) az ml datastore create --type azure_blob. Explanation: In Microsoft AI-300 foundational operations, az ml datastore create --type azure_blob is the standard specification for connecting an Azure Blob container as a datastore. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 649,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on MLflow tracking. During an entry-level operational deployment (Scenario #5), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for logging training parameters and metrics in Azure AI?",
    "options": [
      "A) mlflow.log_param() and mlflow.log_metric()",
      "B) mlflow.save_model()",
      "C) mlflow.register_model()",
      "D) mlflow.create_experiment()"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) mlflow.log_param() and mlflow.log_metric(). Explanation: In Microsoft AI-300 foundational operations, mlflow.log_param() and mlflow.log_metric() is the standard specification for logging training parameters and metrics. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 650,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "multiple",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Model registration. During an entry-level operational deployment (Scenario #5), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which THREE of the following are valid foundational components or configurations required for registering an MLflow model in the workspace registry? (Select three)",
    "options": [
      "A) Run ID or artifact path",
      "B) Model name",
      "C) Model version tags",
      "D) mlflow.log_param('model', 'ModelName')",
      "E) az ml environment create"
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answer: A, B, and C. Explanation: For registering an MLflow model in the workspace registry, Azure AI requires Run ID or artifact path, Model name, and Model version tags. Options D and E are invalid configurations for this operational step."
  },
  {
    "id": 651,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Automated ML (AutoML). During an entry-level operational deployment (Scenario #5), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for setting up a classification AutoML task in Azure AI?",
    "options": [
      "A) automl.classification(training_data=data, target_column_name='label')",
      "B) automl.regression(target='none')",
      "C) automl.forecasting(time_column='none')",
      "D) automl.nlp()"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) automl.classification(training_data=data, target_column_name='label'). Explanation: In Microsoft AI-300 foundational operations, automl.classification(training_data=data, target_column_name='label') is the standard specification for setting up a classification AutoML task. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 652,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Environment management. During an entry-level operational deployment (Scenario #5), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for specifying conda dependencies for an ML job in Azure AI?",
    "options": [
      "A) Environment(image='mcr.microsoft.com/azureml/openmpi4.1.0-ubuntu20.04', conda_file='conda.yaml')",
      "B) Environment(image='none', conda_file='none')",
      "C) Compute(vm_size='Standard_D2_v2')",
      "D) Datastore(type='blob')"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Environment(image='mcr.microsoft.com/azureml/openmpi4.1.0-ubuntu20.04', conda_file='conda.yaml'). Explanation: In Microsoft AI-300 foundational operations, Environment(image='mcr.microsoft.com/azureml/openmpi4.1.0-ubuntu20.04', conda_file='conda.yaml') is the standard specification for specifying conda dependencies for an ML job. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 653,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Azure CLI azd tool. During an entry-level operational deployment (Scenario #5), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for provisioning infrastructure from Bicep templates in Azure AI?",
    "options": [
      "A) azd up",
      "B) azd down",
      "C) az ml job create",
      "D) git push origin main"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) azd up. Explanation: In Microsoft AI-300 foundational operations, azd up is the standard specification for provisioning infrastructure from Bicep templates. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 654,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Role-Based Access Control. During an entry-level operational deployment (Scenario #5), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for granting read-only workspace access to a data scientist in Azure AI?",
    "options": [
      "A) Azure ML Data Scientist or Reader built-in role",
      "B) Owner role on the subscription",
      "C) User Access Administrator role",
      "D) Virtual Machine Contributor role"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Azure ML Data Scientist or Reader built-in role. Explanation: In Microsoft AI-300 foundational operations, Azure ML Data Scientist or Reader built-in role is the standard specification for granting read-only workspace access to a data scientist. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 655,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "multiple",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Data Asset creation. During an entry-level operational deployment (Scenario #5), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which THREE of the following are valid foundational components or configurations required for registering a tabular dataset in ML Studio? (Select three)",
    "options": [
      "A) URI folder or file path",
      "B) MLTable schema definition",
      "C) Data asset name and version",
      "D) SQL stored procedure trigger",
      "E) VM hard drive image"
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answer: A, B, and C. Explanation: For registering a tabular dataset in ML Studio, Azure AI requires URI folder or file path, MLTable schema definition, and Data asset name and version. Options D and E are invalid configurations for this operational step."
  },
  {
    "id": 656,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Azure ML Workspace setup. During an entry-level operational deployment (Scenario #6), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for creating a workspace via Bicep in Azure AI?",
    "options": [
      "A) Microsoft.MachineLearningServices/workspaces",
      "B) Microsoft.AI/workspaces",
      "C) Microsoft.CognitiveServices/accounts",
      "D) Microsoft.Compute/virtualMachines"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Microsoft.MachineLearningServices/workspaces. Explanation: In Microsoft AI-300 foundational operations, Microsoft.MachineLearningServices/workspaces is the standard specification for creating a workspace via Bicep. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 657,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Compute Target selection. During an entry-level operational deployment (Scenario #6), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for interactive Jupyter notebook development in Azure AI?",
    "options": [
      "A) Azure ML Compute Instance",
      "B) Azure ML Compute Cluster",
      "C) Azure Kubernetes Service",
      "D) Azure Container Instances"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Azure ML Compute Instance. Explanation: In Microsoft AI-300 foundational operations, Azure ML Compute Instance is the standard specification for interactive Jupyter notebook development. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 658,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Datastore management. During an entry-level operational deployment (Scenario #6), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for connecting an Azure Blob container as a datastore in Azure AI?",
    "options": [
      "A) az ml datastore create --type azure_blob",
      "B) az ml dataset register",
      "C) az storage account create",
      "D) az ml compute create"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) az ml datastore create --type azure_blob. Explanation: In Microsoft AI-300 foundational operations, az ml datastore create --type azure_blob is the standard specification for connecting an Azure Blob container as a datastore. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 659,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on MLflow tracking. During an entry-level operational deployment (Scenario #6), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for logging training parameters and metrics in Azure AI?",
    "options": [
      "A) mlflow.log_param() and mlflow.log_metric()",
      "B) mlflow.save_model()",
      "C) mlflow.register_model()",
      "D) mlflow.create_experiment()"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) mlflow.log_param() and mlflow.log_metric(). Explanation: In Microsoft AI-300 foundational operations, mlflow.log_param() and mlflow.log_metric() is the standard specification for logging training parameters and metrics. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 660,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "multiple",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Model registration. During an entry-level operational deployment (Scenario #6), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which THREE of the following are valid foundational components or configurations required for registering an MLflow model in the workspace registry? (Select three)",
    "options": [
      "A) Run ID or artifact path",
      "B) Model name",
      "C) Model version tags",
      "D) mlflow.log_param('model', 'ModelName')",
      "E) az ml environment create"
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answer: A, B, and C. Explanation: For registering an MLflow model in the workspace registry, Azure AI requires Run ID or artifact path, Model name, and Model version tags. Options D and E are invalid configurations for this operational step."
  },
  {
    "id": 661,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Automated ML (AutoML). During an entry-level operational deployment (Scenario #6), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for setting up a classification AutoML task in Azure AI?",
    "options": [
      "A) automl.classification(training_data=data, target_column_name='label')",
      "B) automl.regression(target='none')",
      "C) automl.forecasting(time_column='none')",
      "D) automl.nlp()"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) automl.classification(training_data=data, target_column_name='label'). Explanation: In Microsoft AI-300 foundational operations, automl.classification(training_data=data, target_column_name='label') is the standard specification for setting up a classification AutoML task. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 662,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Environment management. During an entry-level operational deployment (Scenario #6), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for specifying conda dependencies for an ML job in Azure AI?",
    "options": [
      "A) Environment(image='mcr.microsoft.com/azureml/openmpi4.1.0-ubuntu20.04', conda_file='conda.yaml')",
      "B) Environment(image='none', conda_file='none')",
      "C) Compute(vm_size='Standard_D2_v2')",
      "D) Datastore(type='blob')"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Environment(image='mcr.microsoft.com/azureml/openmpi4.1.0-ubuntu20.04', conda_file='conda.yaml'). Explanation: In Microsoft AI-300 foundational operations, Environment(image='mcr.microsoft.com/azureml/openmpi4.1.0-ubuntu20.04', conda_file='conda.yaml') is the standard specification for specifying conda dependencies for an ML job. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 663,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Azure CLI azd tool. During an entry-level operational deployment (Scenario #6), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for provisioning infrastructure from Bicep templates in Azure AI?",
    "options": [
      "A) azd up",
      "B) azd down",
      "C) az ml job create",
      "D) git push origin main"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) azd up. Explanation: In Microsoft AI-300 foundational operations, azd up is the standard specification for provisioning infrastructure from Bicep templates. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 664,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Role-Based Access Control. During an entry-level operational deployment (Scenario #6), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for granting read-only workspace access to a data scientist in Azure AI?",
    "options": [
      "A) Azure ML Data Scientist or Reader built-in role",
      "B) Owner role on the subscription",
      "C) User Access Administrator role",
      "D) Virtual Machine Contributor role"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Azure ML Data Scientist or Reader built-in role. Explanation: In Microsoft AI-300 foundational operations, Azure ML Data Scientist or Reader built-in role is the standard specification for granting read-only workspace access to a data scientist. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 665,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "multiple",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Data Asset creation. During an entry-level operational deployment (Scenario #6), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which THREE of the following are valid foundational components or configurations required for registering a tabular dataset in ML Studio? (Select three)",
    "options": [
      "A) URI folder or file path",
      "B) MLTable schema definition",
      "C) Data asset name and version",
      "D) SQL stored procedure trigger",
      "E) VM hard drive image"
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answer: A, B, and C. Explanation: For registering a tabular dataset in ML Studio, Azure AI requires URI folder or file path, MLTable schema definition, and Data asset name and version. Options D and E are invalid configurations for this operational step."
  },
  {
    "id": 666,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Azure ML Workspace setup. During an entry-level operational deployment (Scenario #7), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for creating a workspace via Bicep in Azure AI?",
    "options": [
      "A) Microsoft.MachineLearningServices/workspaces",
      "B) Microsoft.AI/workspaces",
      "C) Microsoft.CognitiveServices/accounts",
      "D) Microsoft.Compute/virtualMachines"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Microsoft.MachineLearningServices/workspaces. Explanation: In Microsoft AI-300 foundational operations, Microsoft.MachineLearningServices/workspaces is the standard specification for creating a workspace via Bicep. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 667,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Compute Target selection. During an entry-level operational deployment (Scenario #7), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for interactive Jupyter notebook development in Azure AI?",
    "options": [
      "A) Azure ML Compute Instance",
      "B) Azure ML Compute Cluster",
      "C) Azure Kubernetes Service",
      "D) Azure Container Instances"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Azure ML Compute Instance. Explanation: In Microsoft AI-300 foundational operations, Azure ML Compute Instance is the standard specification for interactive Jupyter notebook development. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 668,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Datastore management. During an entry-level operational deployment (Scenario #7), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for connecting an Azure Blob container as a datastore in Azure AI?",
    "options": [
      "A) az ml datastore create --type azure_blob",
      "B) az ml dataset register",
      "C) az storage account create",
      "D) az ml compute create"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) az ml datastore create --type azure_blob. Explanation: In Microsoft AI-300 foundational operations, az ml datastore create --type azure_blob is the standard specification for connecting an Azure Blob container as a datastore. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 669,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on MLflow tracking. During an entry-level operational deployment (Scenario #7), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for logging training parameters and metrics in Azure AI?",
    "options": [
      "A) mlflow.log_param() and mlflow.log_metric()",
      "B) mlflow.save_model()",
      "C) mlflow.register_model()",
      "D) mlflow.create_experiment()"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) mlflow.log_param() and mlflow.log_metric(). Explanation: In Microsoft AI-300 foundational operations, mlflow.log_param() and mlflow.log_metric() is the standard specification for logging training parameters and metrics. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 670,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "multiple",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Model registration. During an entry-level operational deployment (Scenario #7), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which THREE of the following are valid foundational components or configurations required for registering an MLflow model in the workspace registry? (Select three)",
    "options": [
      "A) Run ID or artifact path",
      "B) Model name",
      "C) Model version tags",
      "D) mlflow.log_param('model', 'ModelName')",
      "E) az ml environment create"
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answer: A, B, and C. Explanation: For registering an MLflow model in the workspace registry, Azure AI requires Run ID or artifact path, Model name, and Model version tags. Options D and E are invalid configurations for this operational step."
  },
  {
    "id": 671,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Automated ML (AutoML). During an entry-level operational deployment (Scenario #7), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for setting up a classification AutoML task in Azure AI?",
    "options": [
      "A) automl.classification(training_data=data, target_column_name='label')",
      "B) automl.regression(target='none')",
      "C) automl.forecasting(time_column='none')",
      "D) automl.nlp()"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) automl.classification(training_data=data, target_column_name='label'). Explanation: In Microsoft AI-300 foundational operations, automl.classification(training_data=data, target_column_name='label') is the standard specification for setting up a classification AutoML task. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 672,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Environment management. During an entry-level operational deployment (Scenario #7), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for specifying conda dependencies for an ML job in Azure AI?",
    "options": [
      "A) Environment(image='mcr.microsoft.com/azureml/openmpi4.1.0-ubuntu20.04', conda_file='conda.yaml')",
      "B) Environment(image='none', conda_file='none')",
      "C) Compute(vm_size='Standard_D2_v2')",
      "D) Datastore(type='blob')"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Environment(image='mcr.microsoft.com/azureml/openmpi4.1.0-ubuntu20.04', conda_file='conda.yaml'). Explanation: In Microsoft AI-300 foundational operations, Environment(image='mcr.microsoft.com/azureml/openmpi4.1.0-ubuntu20.04', conda_file='conda.yaml') is the standard specification for specifying conda dependencies for an ML job. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 673,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Azure CLI azd tool. During an entry-level operational deployment (Scenario #7), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for provisioning infrastructure from Bicep templates in Azure AI?",
    "options": [
      "A) azd up",
      "B) azd down",
      "C) az ml job create",
      "D) git push origin main"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) azd up. Explanation: In Microsoft AI-300 foundational operations, azd up is the standard specification for provisioning infrastructure from Bicep templates. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 674,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Role-Based Access Control. During an entry-level operational deployment (Scenario #7), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for granting read-only workspace access to a data scientist in Azure AI?",
    "options": [
      "A) Azure ML Data Scientist or Reader built-in role",
      "B) Owner role on the subscription",
      "C) User Access Administrator role",
      "D) Virtual Machine Contributor role"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Azure ML Data Scientist or Reader built-in role. Explanation: In Microsoft AI-300 foundational operations, Azure ML Data Scientist or Reader built-in role is the standard specification for granting read-only workspace access to a data scientist. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 675,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "multiple",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Data Asset creation. During an entry-level operational deployment (Scenario #7), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which THREE of the following are valid foundational components or configurations required for registering a tabular dataset in ML Studio? (Select three)",
    "options": [
      "A) URI folder or file path",
      "B) MLTable schema definition",
      "C) Data asset name and version",
      "D) SQL stored procedure trigger",
      "E) VM hard drive image"
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answer: A, B, and C. Explanation: For registering a tabular dataset in ML Studio, Azure AI requires URI folder or file path, MLTable schema definition, and Data asset name and version. Options D and E are invalid configurations for this operational step."
  },
  {
    "id": 676,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Azure ML Workspace setup. During an entry-level operational deployment (Scenario #8), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for creating a workspace via Bicep in Azure AI?",
    "options": [
      "A) Microsoft.MachineLearningServices/workspaces",
      "B) Microsoft.AI/workspaces",
      "C) Microsoft.CognitiveServices/accounts",
      "D) Microsoft.Compute/virtualMachines"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Microsoft.MachineLearningServices/workspaces. Explanation: In Microsoft AI-300 foundational operations, Microsoft.MachineLearningServices/workspaces is the standard specification for creating a workspace via Bicep. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 677,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Compute Target selection. During an entry-level operational deployment (Scenario #8), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for interactive Jupyter notebook development in Azure AI?",
    "options": [
      "A) Azure ML Compute Instance",
      "B) Azure ML Compute Cluster",
      "C) Azure Kubernetes Service",
      "D) Azure Container Instances"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Azure ML Compute Instance. Explanation: In Microsoft AI-300 foundational operations, Azure ML Compute Instance is the standard specification for interactive Jupyter notebook development. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 678,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Datastore management. During an entry-level operational deployment (Scenario #8), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for connecting an Azure Blob container as a datastore in Azure AI?",
    "options": [
      "A) az ml datastore create --type azure_blob",
      "B) az ml dataset register",
      "C) az storage account create",
      "D) az ml compute create"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) az ml datastore create --type azure_blob. Explanation: In Microsoft AI-300 foundational operations, az ml datastore create --type azure_blob is the standard specification for connecting an Azure Blob container as a datastore. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 679,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on MLflow tracking. During an entry-level operational deployment (Scenario #8), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for logging training parameters and metrics in Azure AI?",
    "options": [
      "A) mlflow.log_param() and mlflow.log_metric()",
      "B) mlflow.save_model()",
      "C) mlflow.register_model()",
      "D) mlflow.create_experiment()"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) mlflow.log_param() and mlflow.log_metric(). Explanation: In Microsoft AI-300 foundational operations, mlflow.log_param() and mlflow.log_metric() is the standard specification for logging training parameters and metrics. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 680,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "multiple",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Model registration. During an entry-level operational deployment (Scenario #8), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which THREE of the following are valid foundational components or configurations required for registering an MLflow model in the workspace registry? (Select three)",
    "options": [
      "A) Run ID or artifact path",
      "B) Model name",
      "C) Model version tags",
      "D) mlflow.log_param('model', 'ModelName')",
      "E) az ml environment create"
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answer: A, B, and C. Explanation: For registering an MLflow model in the workspace registry, Azure AI requires Run ID or artifact path, Model name, and Model version tags. Options D and E are invalid configurations for this operational step."
  },
  {
    "id": 681,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Automated ML (AutoML). During an entry-level operational deployment (Scenario #8), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for setting up a classification AutoML task in Azure AI?",
    "options": [
      "A) automl.classification(training_data=data, target_column_name='label')",
      "B) automl.regression(target='none')",
      "C) automl.forecasting(time_column='none')",
      "D) automl.nlp()"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) automl.classification(training_data=data, target_column_name='label'). Explanation: In Microsoft AI-300 foundational operations, automl.classification(training_data=data, target_column_name='label') is the standard specification for setting up a classification AutoML task. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 682,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Environment management. During an entry-level operational deployment (Scenario #8), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for specifying conda dependencies for an ML job in Azure AI?",
    "options": [
      "A) Environment(image='mcr.microsoft.com/azureml/openmpi4.1.0-ubuntu20.04', conda_file='conda.yaml')",
      "B) Environment(image='none', conda_file='none')",
      "C) Compute(vm_size='Standard_D2_v2')",
      "D) Datastore(type='blob')"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Environment(image='mcr.microsoft.com/azureml/openmpi4.1.0-ubuntu20.04', conda_file='conda.yaml'). Explanation: In Microsoft AI-300 foundational operations, Environment(image='mcr.microsoft.com/azureml/openmpi4.1.0-ubuntu20.04', conda_file='conda.yaml') is the standard specification for specifying conda dependencies for an ML job. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 683,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Azure CLI azd tool. During an entry-level operational deployment (Scenario #8), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for provisioning infrastructure from Bicep templates in Azure AI?",
    "options": [
      "A) azd up",
      "B) azd down",
      "C) az ml job create",
      "D) git push origin main"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) azd up. Explanation: In Microsoft AI-300 foundational operations, azd up is the standard specification for provisioning infrastructure from Bicep templates. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 684,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Role-Based Access Control. During an entry-level operational deployment (Scenario #8), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for granting read-only workspace access to a data scientist in Azure AI?",
    "options": [
      "A) Azure ML Data Scientist or Reader built-in role",
      "B) Owner role on the subscription",
      "C) User Access Administrator role",
      "D) Virtual Machine Contributor role"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Azure ML Data Scientist or Reader built-in role. Explanation: In Microsoft AI-300 foundational operations, Azure ML Data Scientist or Reader built-in role is the standard specification for granting read-only workspace access to a data scientist. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 685,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "multiple",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Data Asset creation. During an entry-level operational deployment (Scenario #8), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which THREE of the following are valid foundational components or configurations required for registering a tabular dataset in ML Studio? (Select three)",
    "options": [
      "A) URI folder or file path",
      "B) MLTable schema definition",
      "C) Data asset name and version",
      "D) SQL stored procedure trigger",
      "E) VM hard drive image"
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answer: A, B, and C. Explanation: For registering a tabular dataset in ML Studio, Azure AI requires URI folder or file path, MLTable schema definition, and Data asset name and version. Options D and E are invalid configurations for this operational step."
  },
  {
    "id": 686,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Azure ML Workspace setup. During an entry-level operational deployment (Scenario #9), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for creating a workspace via Bicep in Azure AI?",
    "options": [
      "A) Microsoft.MachineLearningServices/workspaces",
      "B) Microsoft.AI/workspaces",
      "C) Microsoft.CognitiveServices/accounts",
      "D) Microsoft.Compute/virtualMachines"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Microsoft.MachineLearningServices/workspaces. Explanation: In Microsoft AI-300 foundational operations, Microsoft.MachineLearningServices/workspaces is the standard specification for creating a workspace via Bicep. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 687,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Compute Target selection. During an entry-level operational deployment (Scenario #9), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for interactive Jupyter notebook development in Azure AI?",
    "options": [
      "A) Azure ML Compute Instance",
      "B) Azure ML Compute Cluster",
      "C) Azure Kubernetes Service",
      "D) Azure Container Instances"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Azure ML Compute Instance. Explanation: In Microsoft AI-300 foundational operations, Azure ML Compute Instance is the standard specification for interactive Jupyter notebook development. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 688,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Datastore management. During an entry-level operational deployment (Scenario #9), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for connecting an Azure Blob container as a datastore in Azure AI?",
    "options": [
      "A) az ml datastore create --type azure_blob",
      "B) az ml dataset register",
      "C) az storage account create",
      "D) az ml compute create"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) az ml datastore create --type azure_blob. Explanation: In Microsoft AI-300 foundational operations, az ml datastore create --type azure_blob is the standard specification for connecting an Azure Blob container as a datastore. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 689,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on MLflow tracking. During an entry-level operational deployment (Scenario #9), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for logging training parameters and metrics in Azure AI?",
    "options": [
      "A) mlflow.log_param() and mlflow.log_metric()",
      "B) mlflow.save_model()",
      "C) mlflow.register_model()",
      "D) mlflow.create_experiment()"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) mlflow.log_param() and mlflow.log_metric(). Explanation: In Microsoft AI-300 foundational operations, mlflow.log_param() and mlflow.log_metric() is the standard specification for logging training parameters and metrics. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 690,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "multiple",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Model registration. During an entry-level operational deployment (Scenario #9), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which THREE of the following are valid foundational components or configurations required for registering an MLflow model in the workspace registry? (Select three)",
    "options": [
      "A) Run ID or artifact path",
      "B) Model name",
      "C) Model version tags",
      "D) mlflow.log_param('model', 'ModelName')",
      "E) az ml environment create"
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answer: A, B, and C. Explanation: For registering an MLflow model in the workspace registry, Azure AI requires Run ID or artifact path, Model name, and Model version tags. Options D and E are invalid configurations for this operational step."
  },
  {
    "id": 691,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Automated ML (AutoML). During an entry-level operational deployment (Scenario #9), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for setting up a classification AutoML task in Azure AI?",
    "options": [
      "A) automl.classification(training_data=data, target_column_name='label')",
      "B) automl.regression(target='none')",
      "C) automl.forecasting(time_column='none')",
      "D) automl.nlp()"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) automl.classification(training_data=data, target_column_name='label'). Explanation: In Microsoft AI-300 foundational operations, automl.classification(training_data=data, target_column_name='label') is the standard specification for setting up a classification AutoML task. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 692,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Environment management. During an entry-level operational deployment (Scenario #9), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for specifying conda dependencies for an ML job in Azure AI?",
    "options": [
      "A) Environment(image='mcr.microsoft.com/azureml/openmpi4.1.0-ubuntu20.04', conda_file='conda.yaml')",
      "B) Environment(image='none', conda_file='none')",
      "C) Compute(vm_size='Standard_D2_v2')",
      "D) Datastore(type='blob')"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Environment(image='mcr.microsoft.com/azureml/openmpi4.1.0-ubuntu20.04', conda_file='conda.yaml'). Explanation: In Microsoft AI-300 foundational operations, Environment(image='mcr.microsoft.com/azureml/openmpi4.1.0-ubuntu20.04', conda_file='conda.yaml') is the standard specification for specifying conda dependencies for an ML job. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 693,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Azure CLI azd tool. During an entry-level operational deployment (Scenario #9), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for provisioning infrastructure from Bicep templates in Azure AI?",
    "options": [
      "A) azd up",
      "B) azd down",
      "C) az ml job create",
      "D) git push origin main"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) azd up. Explanation: In Microsoft AI-300 foundational operations, azd up is the standard specification for provisioning infrastructure from Bicep templates. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 694,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Role-Based Access Control. During an entry-level operational deployment (Scenario #9), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for granting read-only workspace access to a data scientist in Azure AI?",
    "options": [
      "A) Azure ML Data Scientist or Reader built-in role",
      "B) Owner role on the subscription",
      "C) User Access Administrator role",
      "D) Virtual Machine Contributor role"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Azure ML Data Scientist or Reader built-in role. Explanation: In Microsoft AI-300 foundational operations, Azure ML Data Scientist or Reader built-in role is the standard specification for granting read-only workspace access to a data scientist. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 695,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "multiple",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Data Asset creation. During an entry-level operational deployment (Scenario #9), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which THREE of the following are valid foundational components or configurations required for registering a tabular dataset in ML Studio? (Select three)",
    "options": [
      "A) URI folder or file path",
      "B) MLTable schema definition",
      "C) Data asset name and version",
      "D) SQL stored procedure trigger",
      "E) VM hard drive image"
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answer: A, B, and C. Explanation: For registering a tabular dataset in ML Studio, Azure AI requires URI folder or file path, MLTable schema definition, and Data asset name and version. Options D and E are invalid configurations for this operational step."
  },
  {
    "id": 696,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Azure ML Workspace setup. During an entry-level operational deployment (Scenario #10), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for creating a workspace via Bicep in Azure AI?",
    "options": [
      "A) Microsoft.MachineLearningServices/workspaces",
      "B) Microsoft.AI/workspaces",
      "C) Microsoft.CognitiveServices/accounts",
      "D) Microsoft.Compute/virtualMachines"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Microsoft.MachineLearningServices/workspaces. Explanation: In Microsoft AI-300 foundational operations, Microsoft.MachineLearningServices/workspaces is the standard specification for creating a workspace via Bicep. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 697,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Compute Target selection. During an entry-level operational deployment (Scenario #10), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for interactive Jupyter notebook development in Azure AI?",
    "options": [
      "A) Azure ML Compute Instance",
      "B) Azure ML Compute Cluster",
      "C) Azure Kubernetes Service",
      "D) Azure Container Instances"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Azure ML Compute Instance. Explanation: In Microsoft AI-300 foundational operations, Azure ML Compute Instance is the standard specification for interactive Jupyter notebook development. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 698,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Datastore management. During an entry-level operational deployment (Scenario #10), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for connecting an Azure Blob container as a datastore in Azure AI?",
    "options": [
      "A) az ml datastore create --type azure_blob",
      "B) az ml dataset register",
      "C) az storage account create",
      "D) az ml compute create"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) az ml datastore create --type azure_blob. Explanation: In Microsoft AI-300 foundational operations, az ml datastore create --type azure_blob is the standard specification for connecting an Azure Blob container as a datastore. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 699,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on MLflow tracking. During an entry-level operational deployment (Scenario #10), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for logging training parameters and metrics in Azure AI?",
    "options": [
      "A) mlflow.log_param() and mlflow.log_metric()",
      "B) mlflow.save_model()",
      "C) mlflow.register_model()",
      "D) mlflow.create_experiment()"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) mlflow.log_param() and mlflow.log_metric(). Explanation: In Microsoft AI-300 foundational operations, mlflow.log_param() and mlflow.log_metric() is the standard specification for logging training parameters and metrics. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 700,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "multiple",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Model registration. During an entry-level operational deployment (Scenario #10), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which THREE of the following are valid foundational components or configurations required for registering an MLflow model in the workspace registry? (Select three)",
    "options": [
      "A) Run ID or artifact path",
      "B) Model name",
      "C) Model version tags",
      "D) mlflow.log_param('model', 'ModelName')",
      "E) az ml environment create"
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answer: A, B, and C. Explanation: For registering an MLflow model in the workspace registry, Azure AI requires Run ID or artifact path, Model name, and Model version tags. Options D and E are invalid configurations for this operational step."
  },
  {
    "id": 701,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Automated ML (AutoML). During an entry-level operational deployment (Scenario #10), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for setting up a classification AutoML task in Azure AI?",
    "options": [
      "A) automl.classification(training_data=data, target_column_name='label')",
      "B) automl.regression(target='none')",
      "C) automl.forecasting(time_column='none')",
      "D) automl.nlp()"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) automl.classification(training_data=data, target_column_name='label'). Explanation: In Microsoft AI-300 foundational operations, automl.classification(training_data=data, target_column_name='label') is the standard specification for setting up a classification AutoML task. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 702,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Environment management. During an entry-level operational deployment (Scenario #10), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for specifying conda dependencies for an ML job in Azure AI?",
    "options": [
      "A) Environment(image='mcr.microsoft.com/azureml/openmpi4.1.0-ubuntu20.04', conda_file='conda.yaml')",
      "B) Environment(image='none', conda_file='none')",
      "C) Compute(vm_size='Standard_D2_v2')",
      "D) Datastore(type='blob')"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Environment(image='mcr.microsoft.com/azureml/openmpi4.1.0-ubuntu20.04', conda_file='conda.yaml'). Explanation: In Microsoft AI-300 foundational operations, Environment(image='mcr.microsoft.com/azureml/openmpi4.1.0-ubuntu20.04', conda_file='conda.yaml') is the standard specification for specifying conda dependencies for an ML job. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 703,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Azure CLI azd tool. During an entry-level operational deployment (Scenario #10), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for provisioning infrastructure from Bicep templates in Azure AI?",
    "options": [
      "A) azd up",
      "B) azd down",
      "C) az ml job create",
      "D) git push origin main"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) azd up. Explanation: In Microsoft AI-300 foundational operations, azd up is the standard specification for provisioning infrastructure from Bicep templates. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 704,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Role-Based Access Control. During an entry-level operational deployment (Scenario #10), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for granting read-only workspace access to a data scientist in Azure AI?",
    "options": [
      "A) Azure ML Data Scientist or Reader built-in role",
      "B) Owner role on the subscription",
      "C) User Access Administrator role",
      "D) Virtual Machine Contributor role"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Azure ML Data Scientist or Reader built-in role. Explanation: In Microsoft AI-300 foundational operations, Azure ML Data Scientist or Reader built-in role is the standard specification for granting read-only workspace access to a data scientist. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 705,
    "domain": "Domain 1: MLOps Infrastructure",
    "difficulty": "Easy",
    "type": "multiple",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Data Asset creation. During an entry-level operational deployment (Scenario #10), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which THREE of the following are valid foundational components or configurations required for registering a tabular dataset in ML Studio? (Select three)",
    "options": [
      "A) URI folder or file path",
      "B) MLTable schema definition",
      "C) Data asset name and version",
      "D) SQL stored procedure trigger",
      "E) VM hard drive image"
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answer: A, B, and C. Explanation: For registering a tabular dataset in ML Studio, Azure AI requires URI folder or file path, MLTable schema definition, and Data asset name and version. Options D and E are invalid configurations for this operational step."
  }
];
