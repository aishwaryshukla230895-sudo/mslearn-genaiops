window.QUIZ_DATA_AZML = [
  // ==========================================
  // TRACK 2: Azure Machine Learning Core - azmlrepo (Questions 106-205)
  // Sub-topic 1: Workspace, Compute & Data Assets (Q106-Q125)
  // ==========================================
  {
    id: 106,
    domain: "Track 2: Azure ML Core - Workspace & Compute",
    type: "single",
    scenario: "You are setting up an Azure Machine Learning workspace for a new data science team using Bicep templates. The workspace must store training datasets and model artifacts securely.",
    question: "Which four default Azure resources are automatically provisioned or required when creating a new Azure Machine Learning workspace?",
    options: [
      "A) Azure Storage Account, Azure Key Vault, Azure Container Registry (optional/on-demand), and Azure Application Insights.",
      "B) Azure SQL Database, Azure Cosmos DB, Azure Redis Cache, and Azure Front Door.",
      "C) Azure Virtual Desktop, Azure Bastion, Azure VPN Gateway, and Azure DNS.",
      "D) Azure Kubernetes Service, Azure Event Hubs, Azure Service Bus, and Azure Functions."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Azure Storage Account, Azure Key Vault, Azure Container Registry (optional/on-demand), and Azure Application Insights. Explanation: An Azure ML workspace depends on an Azure Storage Account (for notebooks, datasets, and models), Key Vault (for secrets and credentials), Application Insights (for monitoring and metrics), and Azure Container Registry (for custom Docker environment images)."
  },
  {
    id: 107,
    domain: "Track 2: Azure ML Core - Workspace & Compute",
    type: "single",
    scenario: "A data scientist needs an interactive cloud workstation to write Python Jupyter notebooks, explore exploratory data analysis (EDA), and prototype ML models during working hours.",
    question: "Which Azure Machine Learning compute target is specifically designed for single-user interactive development and notebook execution?",
    options: [
      "A) Azure ML Compute Cluster",
      "B) Azure ML Compute Instance",
      "C) Azure ML Kubernetes Cluster",
      "D) Azure ML Serverless Endpoint"
    ],
    correctAnswer: [1],
    explanation: "Correct Answer: B) Azure ML Compute Instance. Explanation: A Compute Instance is a fully managed, single-user cloud workstation pre-installed with Jupyter, JupyterLab, and VS Code Server, ideal for interactive EDA and development."
  },
  {
    id: 108,
    domain: "Track 2: Azure ML Core - Workspace & Compute",
    type: "single",
    scenario: "Your team needs to run hyperparameter tuning across 50 deep learning trials using PyTorch. To minimize cloud spend, nodes should automatically scale up when jobs are submitted and scale down to zero when idle.",
    question: "Which compute target should you configure in your Azure Machine Learning job specification?",
    options: [
      "A) Compute Instance with auto-shutdown disabled",
      "B) Compute Cluster with min_instances=0 and max_instances=10",
      "C) Local laptop CPU",
      "D) Azure Bastion Host"
    ],
    correctAnswer: [1],
    explanation: "Correct Answer: B) Compute Cluster with min_instances=0 and max_instances=10. Explanation: Azure ML Compute Clusters support multi-node distributed training and automatic scaling. Setting min_instances=0 ensures zero cost when no jobs are running."
  },
  {
    id: 109,
    domain: "Track 2: Azure ML Core - Workspace & Compute",
    type: "single",
    scenario: "You are writing a Python training script using Azure ML SDK v2 ('azure-ai-ml'). You want to reference an existing Azure Blob storage container that contains raw CSV files without copying the files into the workspace.",
    question: "What abstraction in Azure Machine Learning represents a connection to an external storage service?",
    options: [
      "A) Data Asset",
      "B) Datastore",
      "C) Model Registry",
      "D) Feature Store"
    ],
    correctAnswer: [1],
    explanation: "Correct Answer: B) Datastore. Explanation: A Datastore acts as an abstraction over storage accounts (Blob, ADLS Gen2, SQL, etc.), storing connection strings and authentication credentials securely in Key Vault."
  },
  {
    id: 110,
    domain: "Track 2: Azure ML Core - Workspace & Compute",
    type: "single",
    scenario: "After registering a Datastore pointing to Azure Data Lake Storage Gen2, you want to version and track a specific folder of cleaned training parquet files so that reproducible training jobs can reference it by name and version ('cleaned_sales_data:2').",
    question: "What Azure ML entity should you create?",
    options: [
      "A) Datastore",
      "B) Data Asset (URI Folder / Table)",
      "C) Compute Target",
      "D) Environment Image"
    ],
    correctAnswer: [1],
    explanation: "Correct Answer: B) Data Asset (URI Folder / Table). Explanation: Data Assets represent specific files, folders (uri_folder), or tabular datasets (mltable) within a datastore, allowing strict semantic versioning and lineage tracking."
  },
  {
    id: 111,
    domain: "Track 2: Azure ML Core - Workspace & Compute",
    type: "single",
    scenario: "In an enterprise Azure Machine Learning environment, junior data scientists should be able to submit training jobs and read datasets, but must NOT be allowed to delete compute clusters or modify workspace networking settings.",
    question: "Which built-in Azure Role-Based Access Control (RBAC) role should you assign to the junior data scientists?",
    options: [
      "A) Owner",
      "B) Contributor",
      "C) AzureML Data Scientist",
      "D) Reader"
    ],
    correctAnswer: [2],
    explanation: "Correct Answer: C) AzureML Data Scientist. Explanation: The 'AzureML Data Scientist' role allows users to perform all standard ML operations (training jobs, registering models, managing data assets) without administrative rights to alter workspace infrastructure."
  },
  {
    id: 112,
    domain: "Track 2: Azure ML Core - Workspace & Compute",
    type: "multiple",
    scenario: "When defining data types in Azure ML SDK v2 job inputs, which of the following are valid Data Asset types? (Select three)",
    options: [
      "A) uri_file",
      "B) uri_folder",
      "C) mltable",
      "D) sql_database",
      "E) excel_spreadsheet"
    ],
    correctAnswer: [0, 1, 2],
    explanation: "Correct Answer: A, B, and C. Explanation: In Azure ML SDK v2, data assets are categorized into uri_file (single file), uri_folder (directory of files), and mltable (tabular schema definition)."
  },
  {
    id: 113,
    domain: "Track 2: Azure ML Core - Workspace & Compute",
    type: "single",
    scenario: "Why is it recommended to use Azure ML Serverless Compute for ad-hoc experimentation and training jobs instead of manually managing dedicated Compute Clusters?",
    options: [
      "A) Because Serverless Compute requires no upfront infrastructure creation, automatically provisions optimal VM quotas on-demand, and scales down immediately upon job completion.",
      "B) Because Serverless Compute runs entirely offline without internet.",
      "C) Because dedicated clusters cannot run Python.",
      "D) Because Serverless Compute is free forever."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Because Serverless Compute requires no upfront infrastructure creation, automatically provisions optimal VM quotas on-demand, and scales down immediately upon job completion. Explanation: Serverless compute simplifies ML infrastructure by removing cluster lifecycle management."
  },
  {
    id: 114,
    domain: "Track 2: Azure ML Core - Workspace & Compute",
    type: "single",
    scenario: "You are creating a custom environment in Azure ML SDK v2 for a computer vision job that requires CUDA 11.8, PyTorch 2.1, and OpenCV. How should you define this environment for maximum reproducibility?",
    options: [
      "A) By installing libraries manually on each node via SSH after the job starts.",
      "B) By specifying a Docker base image combined with a conda YAML specification file or a custom Dockerfile in an Environment asset.",
      "C) By writing library names on a whiteboard.",
      "D) By disabling virtual environments."
    ],
    correctAnswer: [1],
    explanation: "Correct Answer: B) By specifying a Docker base image combined with a conda YAML specification file or a custom Dockerfile in an Environment asset. Explanation: Azure ML Environments encapsulate Docker images and package dependencies, ensuring consistent runtime across training and inference."
  },
  {
    id: 115,
    domain: "Track 2: Azure ML Core - Workspace & Compute",
    type: "single",
    scenario: "What happens when an Azure ML Compute Instance is left running overnight without any active notebook execution or training jobs?",
    options: [
      "A) It automatically hibernates without billing.",
      "B) It continues to incur hourly Virtual Machine compute charges unless an auto-shutdown schedule or idle shutdown rule is configured.",
      "C) It deletes all user files stored on the OS disk.",
      "D) It converts into a Kubernetes cluster."
    ],
    correctAnswer: [1],
    explanation: "Correct Answer: B) It continues to incur hourly Virtual Machine compute charges unless an auto-shutdown schedule or idle shutdown rule is configured. Explanation: Compute instances are dedicated VMs; idle shutdown schedules are critical FinOps controls."
  },
  {
    id: 116,
    domain: "Track 2: Azure ML Core - Workspace & Compute",
    type: "single",
    scenario: "How does Azure Machine Learning secure authentication between the workspace and its associated default Azure Storage Account without hardcoding storage access keys?",
    options: [
      "A) By writing account keys into plaintext CSV files.",
      "B) Using Azure Managed Identities (System-Assigned or User-Assigned) and Entra ID Role-Based Access Control (e.g., Storage Blob Data Contributor).",
      "C) By disabling authentication entirely.",
      "D) By emailing OTP tokens to administrators."
    ],
    correctAnswer: [1],
    explanation: "Correct Answer: B) Using Azure Managed Identities and Entra ID Role-Based Access Control. Explanation: Managed Identities eliminate credential leakage by allowing Azure services to authenticate via Entra ID tokens securely."
  },
  {
    id: 117,
    domain: "Track 2: Azure ML Core - Workspace & Compute",
    type: "single",
    scenario: "When configuring a private, enterprise-secure Azure ML workspace, which networking feature prevents public internet access to notebooks and training clusters while allowing secure on-premises connectivity?",
    options: [
      "A) Azure Private Link / Private Endpoints with public network access disabled.",
      "B) Opening port 22 to 0.0.0.0/0.",
      "C) Turning off the Azure router.",
      "D) Using HTTP instead of HTTPS."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Azure Private Link / Private Endpoints with public network access disabled. Explanation: Private Endpoints assign private IP addresses from your VNet to Azure ML and its dependent storage/key vault resources, isolating traffic from the public internet."
  },
  {
    id: 118,
    domain: "Track 2: Azure ML Core - Workspace & Compute",
    type: "single",
    scenario: "You want to run a training job that processes 500 GB of images stored in an ADLS Gen2 datastore. To achieve maximum throughput without running out of local disk space on the training node, how should you configure the data delivery mode?",
    options: [
      "A) mode='download'",
      "B) mode='ro_mount' (Read-Only Mount) or mode='rw_mount' (Read-Write Mount)",
      "C) mode='email_attachment'",
      "D) mode='manual_copy'"
    ],
    correctAnswer: [1],
    explanation: "Correct Answer: B) mode='ro_mount' (Read-Only Mount) or mode='rw_mount' (Read-Write Mount). Explanation: Mounting streams data directly from remote storage to the compute node on demand via a virtual filesystem, avoiding slow initial downloads and disk exhaustion."
  },
  {
    id: 119,
    domain: "Track 2: Azure ML Core - Workspace & Compute",
    type: "single",
    scenario: "Which SDK v2 class is used to initialize the client connection to an Azure ML workspace using DefaultAzureCredential?",
    options: [
      "A) from azure.ai.ml import MLClient\nclient = MLClient(DefaultAzureCredential(), subscription_id, resource_group, workspace_name)",
      "B) from azureml.core import Workspace\nws = Workspace.from_config()",
      "C) import azure_studio\nws = azure_studio.connect()",
      "D) from azure.monitor import MLWorkspace"
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) from azure.ai.ml import MLClient; client = MLClient(DefaultAzureCredential(), ...). Explanation: MLClient is the unified entry point for Azure Machine Learning SDK v2 (Python package 'azure-ai-ml')."
  },
  {
    id: 120,
    domain: "Track 2: Azure ML Core - Workspace & Compute",
    type: "single",
    scenario: "What is the primary architectural difference between an Azure ML Hub Workspace and an Azure ML Project Workspace in Azure AI Foundry?",
    options: [
      "A) Hubs store images; Projects store audio.",
      "B) A Hub acts as a top-level security, networking, and governance container sharing datastores and compute across multiple child Project workspaces where daily team development occurs.",
      "C) Projects are only available in Windows.",
      "D) There is no difference; they are identical synonyms."
    ],
    correctAnswer: [1],
    explanation: "Correct Answer: B) A Hub acts as a top-level security, networking, and governance container sharing datastores and compute across multiple child Project workspaces. Explanation: This two-tier architecture separates enterprise IT infrastructure governance (Hub) from agile team experimentation (Project)."
  },
  {
    id: 121,
    domain: "Track 2: Azure ML Core - Workspace & Compute",
    type: "single",
    scenario: "You need to automate the creation of an Azure ML workspace and a compute cluster using Azure CLI. Which command extension is required?",
    options: [
      "A) az extension add --name ml",
      "B) az install azureml-v1",
      "C) pip install azure-cli-ml",
      "D) az ml-upgrade"
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) az extension add --name ml. Explanation: The 'ml' extension for Azure CLI (CLI v2) provides modern command-line management for Azure Machine Learning workspaces, jobs, and endpoints."
  },
  {
    id: 122,
    domain: "Track 2: Azure ML Core - Workspace & Compute",
    type: "single",
    scenario: "A data engineer wants to share a curated tabular dataset across 5 different Azure ML workspaces within the same tenant. What Azure ML feature enables cross-workspace asset sharing?",
    options: [
      "A) Azure ML Registries (Organization-wide shared registries)",
      "B) USB Flash Drive",
      "C) Public FTP Server",
      "D) Emailing CSV files"
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Azure ML Registries (Organization-wide shared registries). Explanation: Azure ML Registries allow organizations to share models, environments, and components across multiple workspaces and regions."
  },
  {
    id: 123,
    domain: "Track 2: Azure ML Core - Workspace & Compute",
    type: "single",
    scenario: "When troubleshooting a failed training job on a Compute Cluster, where can you view the raw stdout and stderr console logs generated by your Python script?",
    options: [
      "A) In the user's local Documents folder.",
      "B) In the Azure ML Studio Job Details page under the 'Outputs + logs' tab (specifically inside the 'user_logs/std_log.txt' file).",
      "C) In Azure Cost Management.",
      "D) By calling Microsoft customer support."
    ],
    correctAnswer: [1],
    explanation: "Correct Answer: B) In the Azure ML Studio Job Details page under the 'Outputs + logs' tab (specifically inside 'user_logs/std_log.txt'). Explanation: Azure ML automatically streams system logs (system_logs/) and script execution output (user_logs/) to blob storage for debugging."
  },
  {
    id: 124,
    domain: "Track 2: Azure ML Core - Workspace & Compute",
    type: "single",
    scenario: "What is the purpose of the 'azureml:' URI prefix when referencing data assets in training scripts or YAML job definitions?",
    options: [
      "A) It formats text in bold.",
      "B) It directs Azure ML to resolve the named data asset and version from the workspace datastore catalog (e.g., 'azureml:my_dataset:1').",
      "C) It encrypts the hard drive.",
      "D) It downloads files from Wikipedia."
    ],
    correctAnswer: [1],
    explanation: "Correct Answer: B) It directs Azure ML to resolve the named data asset and version from the workspace datastore catalog. Explanation: The 'azureml:<name>:<version>' URI schema provides a clean syntax for linking registered cloud data assets to execution jobs."
  },
  {
    id: 125,
    domain: "Track 2: Azure ML Core - Workspace & Compute",
    type: "single",
    scenario: "Which Azure storage redundancy option should be avoided for high-performance training datastores if low read latency is prioritized over multi-region geo-replication?",
    options: [
      "A) Locally Redundant Storage (LRS)",
      "B) Zone Redundant Storage (ZRS)",
      "C) Geo-Redundant Storage (GRS) with cross-region read failover delays",
      "D) Premium Block Blob Storage (LRS)"
    ],
    correctAnswer: [2],
    explanation: "Correct Answer: C) Geo-Redundant Storage (GRS) with cross-region read failover delays. Explanation: For high-throughput ML training, Premium LRS or ZRS in the same region as the compute cluster minimizes network latency and egress costs."
  },

  // ==========================================
  // Sub-topic 2: MLflow Tracking & Experimentation (Q126-Q145)
  // ==========================================
  {
    id: 126,
    domain: "Track 2: Azure ML Core - MLflow Tracking",
    type: "single",
    scenario: "You are developing a scikit-learn training script inside an Azure ML Compute Instance. You want to log training loss, hyperparameters, and model weights to Azure ML Studio without installing proprietary tracking SDKs.",
    question: "Which open-source tracking standard is natively integrated as the default tracking backend in Azure Machine Learning?",
    options: [
      "A) MLflow",
      "B) TensorBoard-only",
      "C) Prometheus",
      "D) Apache Kafka"
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) MLflow. Explanation: Azure Machine Learning is fully compatible with MLflow; setting the tracking URI to Azure ML allows standard mlflow.log_metric(), mlflow.log_param(), and mlflow.log_model() calls to populate Studio experiment dashboards."
  },
  {
    id: 127,
    domain: "Track 2: Azure ML Core - MLflow Tracking",
    type: "single",
    scenario: "When running a Python training script as an Azure ML command job, what code snippet correctly enables MLflow auto-logging for frameworks like XGBoost, PyTorch, or Scikit-Learn?",
    options: [
      "A) import mlflow\nmlflow.autolog()",
      "B) azureml.enable_auto_log()",
      "C) os.environ['LOG_ALL'] = 'true'",
      "D) print('log everything')"
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) import mlflow; mlflow.autolog(). Explanation: Calling mlflow.autolog() automatically captures parameters, performance metrics, model artifacts, and feature importance without requiring explicit log statements for every variable."
  },
  {
    id: 128,
    domain: "Track 2: Azure ML Core - MLflow Tracking",
    type: "single",
    scenario: "You want to execute an MLflow experiment from a local laptop while routing all telemetry and run metadata to your cloud Azure ML workspace. How do you configure the MLflow tracking URI?",
    options: [
      "A) mlflow.set_tracking_uri(ml_client.workspaces.get(workspace_name).mlflow_tracking_uri)",
      "B) mlflow.set_tracking_uri('http://localhost:5000')",
      "C) mlflow.set_tracking_uri('file:///C:/temp')",
      "D) mlflow.set_tracking_uri('ftp://azure.com')"
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) mlflow.set_tracking_uri(ml_client.workspaces.get(workspace_name).mlflow_tracking_uri). Explanation: Retrieving the workspace's unique MLflow tracking URI from MLClient routes all local MLflow logging directly to Azure ML Studio."
  },
  {
    id: 129,
    domain: "Track 2: Azure ML Core - MLflow Tracking",
    type: "single",
    scenario: "During a hyperparameter sweep, your script evaluates accuracy across 100 epochs. How should you log the epoch accuracy metric in MLflow so that Azure ML Studio renders a line chart showing convergence over time?",
    options: [
      "A) mlflow.log_param('accuracy', acc)",
      "B) mlflow.log_metric('accuracy', acc, step=epoch)",
      "C) mlflow.log_artifact('accuracy.txt')",
      "D) print(f'Epoch {epoch}: {acc}')"
    ],
    correctAnswer: [1],
    explanation: "Correct Answer: B) mlflow.log_metric('accuracy', acc, step=epoch). Explanation: Logging metrics with step (or timestamp) parameters creates time-series histories that Azure ML automatically renders as convergence curves."
  },
  {
    id: 130,
    domain: "Track 2: Azure ML Core - MLflow Tracking",
    type: "single",
    scenario: "What is the primary function of the 'MLmodel' file generated inside an MLflow model artifact directory?",
    options: [
      "A) It stores encrypted user passwords.",
      "B) It serves as the model descriptor defining flavors (e.g., python_function, sklearn), dependency environment requirements (conda.yaml), and input/output signature schemas.",
      "C) It deletes temporary training data.",
      "D) It contains the Windows OS bootloader."
    ],
    correctAnswer: [1],
    explanation: "Correct Answer: B) It serves as the model descriptor defining flavors, dependency environment requirements, and input/output signature schemas. Explanation: The MLmodel YAML file is the standardized contract enabling no-code/low-code model deployments across platforms."
  },
  {
    id: 131,
    domain: "Track 2: Azure ML Core - MLflow Tracking",
    type: "multiple",
    scenario: "Which of the following artifact types can be logged to an Azure ML experiment run using 'mlflow.log_artifact()'? (Select three)",
    options: [
      "A) Confusion matrix PNG images",
      "B) Pickled model files (.pkl) or ONNX files",
      "C) Feature importance CSV reports",
      "D) The entire Azure data center physical hardware",
      "E) A live Kubernetes cluster"
    ],
    correctAnswer: [0, 1, 2],
    explanation: "Correct Answer: A, B, and C. Explanation: mlflow.log_artifact() saves arbitrary files (images, plots, serialized models, text reports) directly into the run's cloud artifact storage."
  },
  {
    id: 132,
    domain: "Track 2: Azure ML Core - MLflow Tracking",
    type: "single",
    scenario: "In an Azure ML job YAML definition, how do you specify the command to execute a Python script while passing hyperparameter arguments?",
    options: [
      "A) command: python train.py --learning_rate ${{inputs.lr}} --epochs ${{inputs.epochs}}",
      "B) run_script: train.py",
      "C) execute: start train.exe",
      "D) cmd: ./train.sh"
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) command: python train.py --learning_rate ${{inputs.lr}} --epochs ${{inputs.epochs}}. Explanation: Azure ML YAML syntax uses '${{inputs.<name>}}' parameter binding to dynamically inject job inputs into command-line executions."
  },
  {
    id: 133,
    domain: "Track 2: Azure ML Core - MLflow Tracking",
    type: "single",
    scenario: "You want to compare the validation F1 scores across 20 different training runs within the same experiment. Where in Azure ML Studio can you view tabular comparisons and parallel coordinates charts?",
    options: [
      "A) Under the 'Jobs' (or Experiments) tab by selecting the experiment name and switching to the 'Table' or 'Chart' view.",
      "B) In Azure Key Vault.",
      "C) In the Windows Task Manager.",
      "D) Under the 'Datastores' tab."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Under the 'Jobs' tab by selecting the experiment name and switching to the 'Table' or 'Chart' view. Explanation: Azure ML Studio aggregates all child runs under their parent experiment name, providing rich comparative visualization tools."
  },
  {
    id: 134,
    domain: "Track 2: Azure ML Core - MLflow Tracking",
    type: "single",
    scenario: "Why is defining an MLflow Model Signature (input schema and output schema) critical when logging a model during training?",
    options: [
      "A) Because without a signature, Azure ML cannot perform automated schema validation and inference request parsing when the model is deployed to an online endpoint.",
      "B) Because signatures make the model file size 10 times smaller.",
      "C) Because Python refuses to import MLflow without a signature.",
      "D) Because signatures change font colors in VS Code."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Because without a signature, Azure ML cannot perform automated schema validation and inference request parsing when the model is deployed to an online endpoint. Explanation: Signatures guarantee that deployment endpoints reject malformed JSON requests before they crash model scoring scripts."
  },
  {
    id: 135,
    domain: "Track 2: Azure ML Core - MLflow Tracking",
    type: "single",
    scenario: "Which MLflow command registers a newly trained model directly into the Azure ML Model Registry from within a training script?",
    options: [
      "A) mlflow.register_model('runs:/<run_id>/model', 'fraud_detection_model')",
      "B) azureml.save_model('fraud_detection_model')",
      "C) git push model",
      "D) mlflow.upload_to_cloud('model')"
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) mlflow.register_model('runs:/<run_id>/model', 'fraud_detection_model'). Explanation: When connected to Azure ML tracking URI, mlflow.register_model() creates or versions a model directly in the cloud registry."
  },
  {
    id: 136,
    domain: "Track 2: Azure ML Core - MLflow Tracking",
    type: "single",
    scenario: "How does Azure Machine Learning handle experiment logging when multiple distributed nodes (e.g., PyTorch DDP across 4 GPUs) log metrics simultaneously?",
    options: [
      "A) It crashes with a file lock error.",
      "B) MLflow in Azure ML automatically coordinates multi-node logging; best practice is to log global metrics (like epoch loss) only from rank 0 (the master node) to avoid duplicate chart noise.",
      "C) It deletes all GPU drivers.",
      "D) It merges all numbers into a single random integer."
    ],
    correctAnswer: [1],
    explanation: "Correct Answer: B) Best practice is to log global metrics only from rank 0 (the master node) to avoid duplicate chart noise. Explanation: In distributed training, rank 0 orchestrates checkpointing and metric logging to maintain clean experiment logs."
  },
  {
    id: 137,
    domain: "Track 2: Azure ML Core - MLflow Tracking",
    type: "single",
    scenario: "What is the difference between 'mlflow.log_param()' and 'mlflow.log_metric()' in Azure ML experiment tracking?",
    options: [
      "A) log_param is for strings/hyperparameters that remain constant during a run (e.g., learning_rate=0.01); log_metric is for numeric values that change over time (e.g., loss, accuracy).",
      "B) log_param is only for audio files; log_metric is for video files.",
      "C) log_param is faster than log_metric.",
      "D) There is no difference; both do exactly the same thing."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) log_param is for strings/hyperparameters that remain constant during a run; log_metric is for numeric values that change over time. Explanation: Maintaining semantic distinction between static parameters and dynamic metrics ensures clean filtering and charting."
  },
  {
    id: 138,
    domain: "Track 2: Azure ML Core - MLflow Tracking",
    type: "single",
    scenario: "When reviewing a completed command job in Azure ML Studio, you notice the status is 'Canceled'. Who or what can trigger a job cancellation?",
    options: [
      "A) Only the Azure CEO.",
      "B) A user manually clicking Cancel, a timeout duration exceeding the job's max_run_duration_seconds, or an automated preemptive spot VM eviction on low-priority compute clusters.",
      "C) A syntax error in a comment.",
      "D) A full battery on the developer laptop."
    ],
    correctAnswer: [1],
    explanation: "Correct Answer: B) A user manually clicking Cancel, a timeout duration exceeding max_run_duration_seconds, or spot VM eviction. Explanation: Understanding job terminal states (Completed, Failed, Canceled) is essential for operational troubleshooting."
  },
  {
    id: 139,
    domain: "Track 2: Azure ML Core - MLflow Tracking",
    type: "single",
    scenario: "You want to run a script that clones a git repo and executes preprocessing before your main MLflow training job starts. What Azure ML feature allows defining multi-step sequential or parallel workflows?",
    options: [
      "A) Azure ML Pipelines",
      "B) Azure Word Processing",
      "C) Azure Paint",
      "D) Azure Calculator"
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Azure ML Pipelines. Explanation: Azure ML Pipelines orchestrate complex workflows linking preprocessing, training, evaluation, and registration into repeatable directed acyclic graphs (DAGs)."
  },
  {
    id: 140,
    domain: "Track 2: Azure ML Core - MLflow Tracking",
    type: "single",
    scenario: "Which environment variable does Azure ML automatically inject into command jobs to let your Python script know which run ID and workspace it is currently executing inside?",
    options: [
      "A) AZUREML_RUN_ID and AZUREML_WORKSPACE_NAME",
      "B) WINDOWS_VERSION",
      "C) USER_PASSWORD",
      "D) INTEL_CPU_TEMP"
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) AZUREML_RUN_ID and AZUREML_WORKSPACE_NAME. Explanation: Azure ML runtime populates standard AZUREML_* environment variables to enable context-aware script execution."
  },
  {
    id: 141,
    domain: "Track 2: Azure ML Core - MLflow Tracking",
    type: "single",
    scenario: "How can you tag an MLflow experiment run with metadata such as 'release_candidate=true' or 'team=nlp' for easy filtering in Studio?",
    options: [
      "A) mlflow.set_tag('release_candidate', 'true')",
      "B) mlflow.write_tag_to_disk('true')",
      "C) print('tag: true')",
      "D) os.rename('run', 'tag')"
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) mlflow.set_tag('release_candidate', 'true'). Explanation: Tags provide searchable key-value metadata dimensions across experiment runs."
  },
  {
    id: 142,
    domain: "Track 2: Azure ML Core - MLflow Tracking",
    type: "single",
    scenario: "What happens if your training script calls 'mlflow.start_run()' inside an Azure ML command job where Azure ML has already automatically initialized a tracking run context?",
    options: [
      "A) It crashes with a nested run error unless nested=True is specified, or you simply use the existing active run without calling start_run().",
      "B) It creates 100 duplicate jobs.",
      "C) It formats the hard drive.",
      "D) It logs out of Azure."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) It crashes with a nested run error unless nested=True is specified, or you simply use the existing active run without calling start_run(). Explanation: Azure ML command jobs auto-wrap execution in an MLflow run; scripts should check mlflow.active_run() before starting new runs."
  },
  {
    id: 143,
    domain: "Track 2: Azure ML Core - MLflow Tracking",
    type: "single",
    scenario: "Which MLflow flavor is best suited for logging a custom PyTorch neural network that requires custom pre-processing logic before running inference?",
    options: [
      "A) mlflow.pyfunc (Python Function custom model flavor)",
      "B) mlflow.excel",
      "C) mlflow.word",
      "D) mlflow.powerpoint"
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) mlflow.pyfunc (Python Function custom model flavor). Explanation: The pyfunc flavor provides a generic wrapper allowing any Python code, preprocessing pipelines, or custom model architectures to be deployed as standard inference endpoints."
  },
  {
    id: 144,
    domain: "Track 2: Azure ML Core - MLflow Tracking",
    type: "single",
    scenario: "When querying experiment history using the MLflow Fluent API in Python ('mlflow.search_runs()'), what data structure is returned containing metrics, params, and tags across all matched runs?",
    options: [
      "A) A pandas DataFrame",
      "B) An audio MP3 file",
      "C) A SQL database engine",
      "D) A JPEG image"
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) A pandas DataFrame. Explanation: mlflow.search_runs() returns a structured pandas DataFrame, enabling data scientists to perform statistical analysis and visualization on historical experiment results."
  },
  {
    id: 145,
    domain: "Track 2: Azure ML Core - MLflow Tracking",
    type: "single",
    scenario: "Why is it best practice to log the exact data asset URI version (e.g., 'azureml:training_data:3') as an MLflow param or input artifact during every training run?",
    options: [
      "A) To ensure strict data-to-model lineage, allowing auditors to trace exactly which historical training dataset produced a specific production model.",
      "B) Because Azure ML charges less money for longer URI names.",
      "C) To make the studio background blue.",
      "D) Because CSV files cannot be opened otherwise."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) To ensure strict data-to-model lineage, allowing auditors to trace exactly which historical training dataset produced a specific production model. Explanation: End-to-end lineage (Code + Data + Environment = Model) is the core compliance requirement of MLOps."
  },

  // ==========================================
  // Sub-topic 3: Model Registration & Versioning (Q146-Q165)
  // ==========================================
  {
    id: 146,
    domain: "Track 2: Azure ML Core - Model Registry",
    type: "single",
    scenario: "You have trained a customer churn prediction model and want to register it in the Azure Machine Learning Model Registry. You want to ensure that deploying this model in the future requires NO custom scoring script ('score.py') or manual environment Dockerfile.",
    question: "Which model registration format guarantees no-code deployment on Azure ML endpoints?",
    options: [
      "A) MLflow model format (with valid MLmodel file and signature)",
      "B) Custom raw .pkl file format",
      "C) Raw .exe Windows binary format",
      "D) ZIP archive containing CSV files"
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) MLflow model format (with valid MLmodel file and signature). Explanation: Azure Machine Learning provides built-in no-code deployment containers for MLflow models, automatically generating the scoring server and conda environment from the MLmodel specification."
  },
  {
    id: 147,
    domain: "Track 2: Azure ML Core - Model Registry",
    type: "single",
    scenario: "How does Azure Machine Learning handle model versioning when you register a new model artifact using an existing model name (e.g., 'churn_classifier') in the workspace?",
    options: [
      "A) It overwrites and deletes the previous model version permanently.",
      "B) It automatically increments the integer version number (e.g., from version 1 to version 2), preserving all historical model artifacts and lineage immutable.",
      "C) It throws a 'NameAlreadyExists' fatal error.",
      "D) It sends an email asking for permission."
    ],
    correctAnswer: [1],
    explanation: "Correct Answer: B) It automatically increments the integer version number, preserving all historical model artifacts and lineage immutable. Explanation: Model registries enforce immutability; re-registering under the same name creates a new sequential version."
  },
  {
    id: 148,
    domain: "Track 2: Azure ML Core - Model Registry",
    type: "single",
    scenario: "You want to programmatically register a model from a local directory using Azure ML SDK v2 ('azure-ai-ml'). Which class and method do you use?",
    options: [
      "A) from azure.ai.ml.entities import Model\nmodel = Model(path='local_model_dir/', name='my_model', type='mlflow_model')\nml_client.models.create_or_update(model)",
      "B) azureml.register('local_model_dir/')",
      "C) ml_client.upload_model('my_model')",
      "D) Model.save_to_cloud('my_model')"
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) from azure.ai.ml.entities import Model; model = Model(...); ml_client.models.create_or_update(model). Explanation: The SDK v2 entity pattern uses Model() to declare asset properties and ml_client.models.create_or_update() to push to the cloud registry."
  },
  {
    id: 149,
    domain: "Track 2: Azure ML Core - Model Registry",
    type: "single",
    scenario: "What is the operational purpose of adding lifecycle tags such as 'stage=staging' or 'stage=production' to registered models in Azure ML?",
    options: [
      "A) To allow automated CI/CD deployment pipelines and inference services to dynamically pull the currently approved model version by querying tag attributes instead of hardcoding static integer versions.",
      "B) To change the font size in the Azure portal.",
      "C) To increase the CPU clock speed of inference VMs.",
      "D) To encrypt the model weights."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) To allow automated CI/CD deployment pipelines to dynamically pull the currently approved model version by querying tag attributes. Explanation: Tag-based routing decouples deployment automation scripts from hardcoded version numbers."
  },
  {
    id: 150,
    domain: "Track 2: Azure ML Core - Model Registry",
    type: "single",
    scenario: "When viewing a registered model in Azure ML Studio, which tab allows you to trace exactly which training job, git commit hash, and input data asset produced this specific model version?",
    options: [
      "A) The 'Lineage' (or Artifacts / Job lineage) view.",
      "B) The 'Billing' view.",
      "C) The 'Virtual Machines' view.",
      "D) The 'DNS records' view."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) The 'Lineage' (or Artifacts / Job lineage) view. Explanation: Azure ML Studio visually renders the dependency graph connecting registered models back to their parent training jobs and datasets."
  },
  {
    id: 151,
    domain: "Track 2: Azure ML Core - Model Registry",
    type: "multiple",
    scenario: "Which of the following are valid model types ('type' parameter) when registering a model in Azure ML SDK v2? (Select three)",
    options: [
      "A) mlflow_model",
      "B) custom_model",
      "C) triton_model",
      "D) excel_model",
      "E) mp3_audio_model"
    ],
    correctAnswer: [0, 1, 2],
    explanation: "Correct Answer: A, B, and C. Explanation: Azure ML SDK v2 natively supports mlflow_model (MLflow format), custom_model (arbitrary files/folders requiring custom scoring scripts), and triton_model (NVIDIA Triton Inference Server format)."
  },
  {
    id: 152,
    domain: "Track 2: Azure ML Core - Model Registry",
    type: "single",
    scenario: "You want to download registered model artifacts from Azure ML to your local machine for offline inspection using MLClient. What syntax is correct?",
    options: [
      "A) ml_client.models.download(name='churn_classifier', version='2', download_path='./offline_model')",
      "B) ml_client.pull('churn_classifier')",
      "C) azureml.download_model('churn_classifier')",
      "D) git clone model://churn_classifier"
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) ml_client.models.download(name='churn_classifier', version='2', download_path='./offline_model'). Explanation: The models.download() method retrieves the exact cloud artifact package to local disk."
  },
  {
    id: 153,
    domain: "Track 2: Azure ML Core - Model Registry",
    type: "single",
    scenario: "Why is it important to include an 'input_example' when logging and registering an MLflow model?",
    options: [
      "A) Because Azure ML Studio uses the input example to automatically generate sample JSON test payloads on the endpoint 'Test' tab, allowing developers to test live scoring instantly with one click.",
      "B) Because models without input examples cannot be saved to blob storage.",
      "C) Because input examples make neural networks train 50% faster.",
      "D) Because it prevents users from downloading the model."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Because Azure ML Studio uses the input example to automatically generate sample JSON test payloads on the endpoint 'Test' tab. Explanation: Input examples streamline endpoint validation and self-document expected request schemas."
  },
  {
    id: 154,
    domain: "Track 2: Azure ML Core - Model Registry",
    type: "single",
    scenario: "Can you register a model in Azure Machine Learning that was trained entirely outside of Azure (e.g., on an on-premises GPU cluster or AWS EC2 instance)?",
    options: [
      "A) Yes! You can upload any locally or externally trained model directory (MLflow or custom format) directly into the Azure ML Model Registry via SDK v2, CLI v2, or the Studio web portal.",
      "B) No, Azure ML only accepts models trained on Azure VMs.",
      "C) Yes, but only if you pay a $10,000 external model import fee.",
      "D) No, external models are blocked by Windows Defender."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Yes! You can upload any locally or externally trained model directory directly into the Azure ML Model Registry. Explanation: Azure ML Model Registry is an open artifact store supporting hybrid and multi-cloud MLOps architectures."
  },
  {
    id: 155,
    domain: "Track 2: Azure ML Core - Model Registry",
    type: "single",
    scenario: "What happens when you delete a registered model version in Azure Machine Learning Studio?",
    options: [
      "A) The registry record is removed, but any active online or batch endpoints currently serving that model version continue to run uninterrupted because deployment endpoints copy model artifacts during provisioning.",
      "B) All active production endpoints crash instantly.",
      "C) The entire Azure storage account is formatted.",
      "D) The user account is locked."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) The registry record is removed, but any active online or batch endpoints currently serving that model version continue to run uninterrupted. Explanation: Deployments are decoupled snapshots; deleting a registry entry does not tear down running inference containers."
  },
  {
    id: 156,
    domain: "Track 2: Azure ML Core - Model Registry",
    type: "single",
    scenario: "In an enterprise model governance framework, who should have permissions to promote a model tag from 'stage=development' to 'stage=production' in the Model Registry?",
    options: [
      "A) Any anonymous internet user.",
      "B) Only authorized MLOps release managers or automated CI/CD service principals via strict RBAC separation of duties.",
      "C) Only summer interns.",
      "D) The storage account read-only key."
    ],
    correctAnswer: [1],
    explanation: "Correct Answer: B) Only authorized MLOps release managers or automated CI/CD service principals via strict RBAC separation of duties. Explanation: Production gating requires strict RBAC controls to prevent unauthorized or untested models from reaching live endpoints."
  },
  {
    id: 157,
    domain: "Track 2: Azure ML Core - Model Registry",
    type: "single",
    scenario: "What is an Azure ML 'Model Container' in the context of SDK v2 entity naming?",
    options: [
      "A) A physical metal shipping box.",
      "B) The logical parent grouping (model name, e.g., 'fraud_detector') under which individual sequential model versions (1, 2, 3...) are stored and managed.",
      "C) A Docker container running Linux.",
      "D) A Kubernetes pod."
    ],
    correctAnswer: [1],
    explanation: "Correct Answer: B) The logical parent grouping under which individual sequential model versions are stored and managed. Explanation: In REST APIs and SDK v2, the Model Container represents the model name, containing child Model Version entities."
  },
  {
    id: 158,
    domain: "Track 2: Azure ML Core - Model Registry",
    type: "single",
    scenario: "Why is it recommended to store evaluation metrics (like AUC-ROC, accuracy, and fairness scores) directly in the registered model's property bag or description?",
    options: [
      "A) To provide immediate transparency to model consumers, risk reviewers, and automated deployment scripts without requiring them to dig through thousands of historical training logs.",
      "B) Because Azure ML deletes models without descriptions after 24 hours.",
      "C) To make the model file run on Windows 95.",
      "D) To encrypt the model parameters."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) To provide immediate transparency to model consumers, risk reviewers, and automated deployment scripts. Explanation: Self-documenting model registries streamline audit compliance and automated model selection."
  },
  {
    id: 159,
    domain: "Track 2: Azure ML Core - Model Registry",
    type: "single",
    scenario: "Which Azure CLI v2 command lists all registered models inside an Azure ML workspace?",
    options: [
      "A) az ml model list --resource-group my-rg --workspace-name my-ws",
      "B) az ml list-all-models",
      "C) az storage blob list",
      "D) ml-cli get models"
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) az ml model list --resource-group my-rg --workspace-name my-ws. Explanation: The 'az ml model list' CLI command outputs JSON summaries of all registered model containers and versions."
  },
  {
    id: 160,
    domain: "Track 2: Azure ML Core - Model Registry",
    type: "single",
    scenario: "When registering a Hugging Face transformer model in Azure ML, which model type and format is typically recommended for seamless integration with Azure AI Foundation Model catalog endpoints?",
    options: [
      "A) mlflow_model with transformers flavor or custom_model with Hugging Face task pipeline definitions.",
      "B) excel_spreadsheet",
      "C) bitmap_image",
      "D) plain_text"
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) mlflow_model with transformers flavor or custom_model with Hugging Face task pipeline definitions. Explanation: MLflow's transformers flavor natively wraps Hugging Face pipelines for automated tokenization and inference."
  },
  {
    id: 161,
    domain: "Track 2: Azure ML Core - Model Registry",
    type: "single",
    scenario: "Can an Azure ML Model Registry store large foundation models (such as Llama-3-70B or Falcon-40B) exceeding 100 GB in size?",
    options: [
      "A) Yes! Azure ML Model Registry is backed by scalable Azure Blob/ADLS Gen2 storage and supports multi-gigabyte and terabyte-scale model weight distributions.",
      "B) No, the registry has a strict 10 MB file size limit.",
      "C) Only if you compress them into floppy disks.",
      "D) No, large models must be printed on paper."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Yes! Azure ML Model Registry is backed by scalable Azure Blob/ADLS Gen2 storage and supports multi-gigabyte and terabyte-scale model weight distributions. Explanation: Cloud object storage provides virtually unbounded capacity for large language model weights."
  },
  {
    id: 162,
    domain: "Track 2: Azure ML Core - Model Registry",
    type: "single",
    scenario: "What happens when you archive a model version in Azure ML Studio?",
    options: [
      "A) The model version is hidden from default Studio list views and selection dropdowns to keep the workspace clean, but remains intact in storage and accessible via explicit API/SDK version lookups for auditing.",
      "B) The model is permanently erased from hard drives.",
      "C) The model is sent to the recycle bin and deleted after 3 days.",
      "D) The model is converted into a PDF document."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) The model version is hidden from default Studio list views, but remains intact in storage and accessible via explicit API/SDK version lookups. Explanation: Archiving manages UI clutter while strictly preserving audit compliance and historical reproducibility."
  },
  {
    id: 163,
    domain: "Track 2: Azure ML Core - Model Registry",
    type: "single",
    scenario: "You want to automate model registration at the end of an Azure ML Pipeline job ONLY IF the newly trained model's accuracy exceeds the currently deployed model's accuracy by at least 2%. What MLOps design pattern does this implement?",
    options: [
      "A) Automated Champion-Challenger (or Candidate vs. Baseline) Model Evaluation and Conditional Registration.",
      "B) Manual Floppy Disk Backup.",
      "C) Random Model Selection.",
      "D) Unconditional Overwrite."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Automated Champion-Challenger Model Evaluation and Conditional Registration. Explanation: Implementing automated quality gates prevents model performance degradation (model regression) in production pipelines."
  },
  {
    id: 164,
    domain: "Track 2: Azure ML Core - Model Registry",
    type: "single",
    scenario: "How do Azure ML Shared Registries differ from standard Workspace-scoped Registries?",
    options: [
      "A) Shared Registries are tenant-level or multi-workspace catalogs allowing centralized curation and distribution of foundation models, custom environments, and reusable pipeline components across an entire global enterprise.",
      "B) Shared Registries are public websites open to anyone on the internet.",
      "C) Shared Registries do not require Azure passwords.",
      "D) Shared Registries can only store images of cats."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Shared Registries are tenant-level or multi-workspace catalogs allowing centralized curation and distribution across an entire global enterprise. Explanation: Shared registries enforce organizational standardization and eliminate duplicate asset creation across isolated team workspaces."
  },
  {
    id: 165,
    domain: "Track 2: Azure ML Core - Model Registry",
    type: "single",
    scenario: "Which SDK v2 property allows you to attach custom dictionary metadata (e.g., {'project': 'retail', 'author': 'team_alpha'}) when creating a Model entity?",
    options: [
      "A) properties={'project': 'retail', 'author': 'team_alpha'}",
      "B) dict_data='retail'",
      "C) config_file='meta.txt'",
      "D) notes='hello'"
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) properties={'project': 'retail', 'author': 'team_alpha'}. Explanation: The 'properties' dictionary on SDK v2 entities attaches arbitrary string key-value pairs stored in Azure ML metadata catalogs."
  },

  // ==========================================
  // Sub-topic 4: Managed Online & Batch Endpoints (Q166-Q185)
  // ==========================================
  {
    id: 166,
    domain: "Track 2: Azure ML Core - Endpoints",
    type: "single",
    scenario: "Your retail banking application requires real-time fraud detection scoring with sub-100 millisecond latency for synchronous credit card transaction processing.",
    question: "Which Azure Machine Learning endpoint type is engineered specifically for real-time, low-latency synchronous REST API inference?",
    options: [
      "A) Managed Online Endpoint",
      "B) Managed Batch Endpoint",
      "C) Azure ML Compute Cluster",
      "D) Azure Data Factory Pipeline"
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Managed Online Endpoint. Explanation: Managed Online Endpoints deploy ML models across scalable real-time serving clusters with built-in HTTPS REST endpoints, authentication, auto-scaling, and SLA guarantees."
  },
  {
    id: 167,
    domain: "Track 2: Azure ML Core - Endpoints",
    type: "single",
    scenario: "You need to score 10 million historical customer records stored in ADLS Gen2 every Sunday midnight to generate weekly product recommendations. Latency is not critical, but processing must be cost-effective and handle terabytes of data reliably.",
    question: "Which Azure Machine Learning endpoint type should you deploy?",
    options: [
      "A) Managed Batch Endpoint",
      "B) Managed Online Endpoint with 100 VMs",
      "C) Local laptop script",
      "D) Azure Bastion"
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Managed Batch Endpoint. Explanation: Managed Batch Endpoints asynchronously score large datasets over extended periods by distributing workloads across auto-scaling compute clusters, writing predictions directly back to cloud storage."
  },
  {
    id: 168,
    domain: "Track 2: Azure ML Core - Endpoints",
    type: "single",
    scenario: "In an Azure ML Managed Online Endpoint architecture, what is the operational distinction between an 'Endpoint' and a 'Deployment'?",
    options: [
      "A) An Endpoint represents the persistent HTTPS URI, SSL certificate, and authentication interface; a Deployment represents the physical compute resources, environment Docker image, model version, and scoring script executing behind that endpoint.",
      "B) An Endpoint is for Linux; a Deployment is for Windows.",
      "C) An Endpoint is free; a Deployment costs $1,000 per minute.",
      "D) There is no distinction; they are identical concepts."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) An Endpoint represents the persistent HTTPS URI; a Deployment represents the physical compute resources and model executing behind that endpoint. Explanation: This separation allows a single endpoint to host multiple deployments simultaneously for zero-downtime upgrades and A/B testing."
  },
  {
    id: 169,
    domain: "Track 2: Azure ML Core - Endpoints",
    type: "single",
    scenario: "You want to perform a zero-downtime 'Blue-Green' rollout of a new model version (v2, 'green deployment') alongside your currently running production model (v1, 'blue deployment') on a Managed Online Endpoint. You want to route exactly 10% of live user traffic to v2 to monitor error rates before full promotion.",
    question: "How do you configure this in Azure ML?",
    options: [
      "A) By setting the endpoint traffic allocation map: traffic: {'blue': 90, 'green': 10}",
      "B) By unplugging 90% of the network cables.",
      "C) By asking users to type '?version=2' in their browser.",
      "D) By deleting the blue deployment instantly."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) By setting the endpoint traffic allocation map: traffic: {'blue': 90, 'green': 10}. Explanation: Azure ML Managed Online Endpoints natively support percentage-based traffic splitting across multiple deployments under a single REST endpoint URI."
  },
  {
    id: 170,
    domain: "Track 2: Azure ML Core - Endpoints",
    type: "single",
    scenario: "When deploying a custom (non-MLflow) model to a Managed Online Endpoint, you must provide a Python scoring script ('score.py'). What two mandatory functions must be defined inside 'score.py'?",
    options: [
      "A) init() (called once when the container starts to load model weights into global memory) and run(raw_data) (called on every incoming HTTP request to execute scoring and return predictions).",
      "B) start() and stop()",
      "C) setup() and teardown()",
      "D) main() and exit()"
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) init() and run(raw_data). Explanation: Azure ML serving containers execute init() during worker warmup to cache model objects in memory, and invoke run() synchronously for each scoring request."
  },
  {
    id: 171,
    domain: "Track 2: Azure ML Core - Endpoints",
    type: "multiple",
    scenario: "Which of the following compute VM instance types can be selected when provisioning a Managed Online Endpoint deployment? (Select three)",
    options: [
      "A) Standard_DS3_v2 (General Purpose CPU)",
      "B) Standard_F4s_v2 (Compute Optimized CPU)",
      "C) Standard_NC6s_v3 (NVIDIA GPU for Deep Learning)",
      "D) Nintendo_Switch_CPU",
      "E) Apple_M3_Max_Laptop"
    ],
    correctAnswer: [0, 1, 2],
    explanation: "Correct Answer: A, B, and C. Explanation: Azure ML Managed Online Endpoints support standard Azure virtual machine SKUs across General Purpose, Compute Optimized, and GPU-accelerated tiers."
  },
  {
    id: 172,
    domain: "Track 2: Azure ML Core - Endpoints",
    type: "single",
    scenario: "How do Managed Online Endpoints differ from deploying models manually to Azure Kubernetes Service (AKS)?",
    options: [
      "A) Managed Online Endpoints are turnkey serverless deployments where Azure completely manages OS patching, Kubernetes cluster scaling, security hardening, and host maintenance; AKS requires you to provision and manage the underlying Kubernetes cluster infrastructure yourself.",
      "B) Managed Online Endpoints cannot run Python.",
      "C) AKS is only for Excel files.",
      "D) Managed Online Endpoints do not support SSL."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Managed Online Endpoints are turnkey serverless deployments where Azure completely manages cluster maintenance; AKS requires manual cluster infrastructure management. Explanation: Managed endpoints relieve data science teams from complex Kubernetes infrastructure operations."
  },
  {
    id: 173,
    domain: "Track 2: Azure ML Core - Endpoints",
    type: "single",
    scenario: "During load testing on a Managed Online Endpoint, you notice that when concurrent requests spike, request latency increases and some requests time out. What deployment configuration should you enable to handle variable traffic spikes automatically?",
    options: [
      "A) Auto-scaling rules based on CPU utilization or request concurrency metrics (e.g., scaling instance count between min_instances=2 and max_instances=10).",
      "B) Turning off the firewall.",
      "C) Decreasing the learning rate.",
      "D) Printing more log statements."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Auto-scaling rules based on CPU utilization or request concurrency metrics. Explanation: Auto-scaling dynamically adjusts VM instance counts to maintain latency SLAs during traffic peaks while saving costs during idle periods."
  },
  {
    id: 174,
    domain: "Track 2: Azure ML Core - Endpoints",
    type: "single",
    scenario: "Which authentication method is recommended for high-security server-to-server communication when calling a Managed Online Endpoint from an Azure web application without managing rotating secrets?",
    options: [
      "A) Entra ID Token-based authentication (auth_mode='aad') using Azure Managed Identities.",
      "B) Anonymous access with no keys.",
      "C) Writing API keys on public websites.",
      "D) Sending passwords via plain HTTP."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Entra ID Token-based authentication (auth_mode='aad') using Azure Managed Identities. Explanation: Entra ID token auth eliminates static API key management and enables granular RBAC access enforcement."
  },
  {
    id: 175,
    domain: "Track 2: Azure ML Core - Endpoints",
    type: "single",
    scenario: "You want to test a newly created Managed Online Endpoint using the Azure CLI v2 by passing a sample JSON file ('sample_request.json'). What command syntax is correct?",
    options: [
      "A) az ml online-endpoint invoke --name my-endpoint --request-file sample_request.json --resource-group my-rg --workspace-name my-ws",
      "B) az ml endpoint ping --file sample_request.json",
      "C) curl -X DELETE endpoint",
      "D) ml-test-endpoint sample_request.json"
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) az ml online-endpoint invoke --name my-endpoint --request-file sample_request.json ... Explanation: The 'az ml online-endpoint invoke' command sends test payloads directly to the scoring container and prints predictions to the terminal."
  },
  {
    id: 176,
    domain: "Track 2: Azure ML Core - Endpoints",
    type: "single",
    scenario: "What happens when you invoke a Managed Batch Endpoint with an input dataset containing 50,000 CSV files?",
    options: [
      "A) The endpoint synchronously blocks your HTTP connection for 10 hours until all 50,000 files are processed.",
      "B) The endpoint immediately returns an asynchronous job ID (HTTP 202 Accepted); the batch cluster dynamically spins up workers, partitions the data files across nodes, executes scoring in parallel, writes output predictions to blob storage, and terminates the cluster.",
      "C) The endpoint crashes with an HTTP 413 Payload Too Large error.",
      "D) It deletes the CSV files."
    ],
    correctAnswer: [1],
    explanation: "Correct Answer: B) The endpoint immediately returns an asynchronous job ID (HTTP 202 Accepted); the batch cluster partitions data across nodes and writes predictions to blob storage. Explanation: Batch endpoints are asynchronous batch processing engines designed for massive data parallelism."
  },
  {
    id: 177,
    domain: "Track 2: Azure ML Core - Endpoints",
    type: "single",
    scenario: "In a Managed Batch Endpoint scoring script, how should the 'run(mini_batch)' function be implemented to process data efficiently?",
    options: [
      "A) It receives a list of file paths (mini_batch), reads and scores the files in batches using pandas/numpy or PyTorch DataLoader, and returns a pandas DataFrame or list of prediction results that Azure ML concatenates into the final output file.",
      "B) It opens a GUI window.",
      "C) It formats the hard drive.",
      "D) It sends an email for every single row."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) It receives a list of file paths, reads and scores in batches, and returns prediction results that Azure ML concatenates. Explanation: Batch scoring scripts operate on mini-batches of file paths distributed by the underlying step executor."
  },
  {
    id: 178,
    domain: "Track 2: Azure ML Core - Endpoints",
    type: "single",
    scenario: "Why is it important to configure 'request_timeout_ms' and 'max_concurrent_requests_per_instance' appropriately when defining a Managed Online Endpoint deployment?",
    options: [
      "A) To prevent heavy inference requests (like large LLM or vision model scoring) from timing out prematurely or overloading worker memory, ensuring stable throughput and graceful error handling.",
      "B) To make the font bold.",
      "C) Because Azure requires all numbers to be 100.",
      "D) To change the Azure region."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) To prevent heavy inference requests from timing out prematurely or overloading worker memory. Explanation: Tuning concurrency and timeout parameters aligns serving container resources with model computational complexity."
  },
  {
    id: 179,
    domain: "Track 2: Azure ML Core - Endpoints",
    type: "single",
    scenario: "How can you view real-time HTTP request rates, latency histograms, CPU/GPU utilization, and HTTP 5xx error counts for a Managed Online Endpoint?",
    options: [
      "A) By opening the endpoint in Azure ML Studio and clicking the 'Monitoring' (or Metrics) tab, which natively embeds Azure Monitor and Application Insights telemetry charts.",
      "B) By opening Windows Paint.",
      "C) By reading a paper notebook.",
      "D) By calling a radio station."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) By opening the endpoint in Azure ML Studio and clicking the 'Monitoring' tab. Explanation: Azure ML endpoints automatically export rich operational metrics to Azure Monitor for full stack observability."
  },
  {
    id: 180,
    domain: "Track 2: Azure ML Core - Endpoints",
    type: "single",
    scenario: "You want to deploy an MLflow model to a Managed Online Endpoint using SDK v2. Do you need to specify an 'environment' parameter in your ManagedOnlineDeployment definition?",
    options: [
      "A) No! For MLflow models, Azure ML automatically builds a curated inference server environment using the dependencies listed in the model's MLmodel and conda.yaml files (no-code deployment).",
      "B) Yes, you must always manually compile a custom Linux kernel.",
      "C) Yes, you must upload a Windows ISO file.",
      "D) No, because MLflow models do not use Python."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) No! For MLflow models, Azure ML automatically builds a curated inference server environment (no-code deployment). Explanation: MLflow's self-describing artifact specification eliminates manual Docker environment creation during deployment."
  },
  {
    id: 181,
    domain: "Track 2: Azure ML Core - Endpoints",
    type: "single",
    scenario: "What is the operational benefit of using 'mirrored traffic' (or shadow deployments) when testing a new deployment on a Managed Online Endpoint?",
    options: [
      "A) It copies 100% of live production HTTP requests from the blue deployment and sends them asynchronously to the green (shadow) deployment for real-world stress and accuracy testing WITHOUT returning the green deployment's predictions to end users or impacting production latency.",
      "B) It reflects your face on the monitor screen.",
      "C) It doubles your Azure storage space for free.",
      "D) It turns off the server."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) It copies live production HTTP requests and sends them asynchronously to the shadow deployment for testing without impacting production latency or returning shadow results to users. Explanation: Shadow mirroring is the gold standard for zero-risk production model validation."
  },
  {
    id: 182,
    domain: "Track 2: Azure ML Core - Endpoints",
    type: "single",
    scenario: "If a Managed Online Endpoint deployment fails during provisioning with a 'CrashLoopBackOff' or 'ContainerStartFailed' error, what is the most common root cause?",
    options: [
      "A) A missing Python package dependency in conda.yaml, a syntax error or unhandled exception inside the score.py init() function, or insufficient memory/CPU allocated in the VM SKU.",
      "B) The weather is cloudy.",
      "C) The user forgot to log into Facebook.",
      "D) The monitor is turned off."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) A missing Python package dependency, a syntax error in score.py init(), or insufficient VM memory. Explanation: Container crash loops almost always stem from environment dependency conflicts or initialization script failures caught during container startup."
  },
  {
    id: 183,
    domain: "Track 2: Azure ML Core - Endpoints",
    type: "single",
    scenario: "How do you securely store and reference private database passwords or API keys needed by your 'score.py' script during inference on a Managed Online Endpoint?",
    options: [
      "A) Store them in the workspace Azure Key Vault and reference them via environment variables or use Azure ML SDK Key Vault secret retrieval methods authenticated via the deployment's Managed Identity.",
      "B) Hardcode passwords in plaintext inside score.py.",
      "C) Post passwords on GitHub.",
      "D) Write passwords on a sticky note attached to the server."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Store them in Key Vault and reference via environment variables or SDK secret retrieval authenticated via Managed Identity. Explanation: Never hardcode secrets; leverage Key Vault integration and Managed Identities for secure runtime secret injection."
  },
  {
    id: 184,
    domain: "Track 2: Azure ML Core - Endpoints",
    type: "single",
    scenario: "When defining a Managed Batch Endpoint job, how can you specify whether the output predictions should be appended into a single summary CSV file ('summary_only') or written as individual files corresponding to each input file ('append_row')?",
    options: [
      "A) By configuring the 'output_action' parameter in the batch deployment or job invocation configuration.",
      "B) By deleting the output folder.",
      "C) By pressing Ctrl+P.",
      "D) Batch endpoints cannot write output files."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) By configuring the 'output_action' parameter in the batch deployment or job invocation configuration. Explanation: The output_action setting dictates how the batch executor aggregates prediction results across parallel nodes."
  },
  {
    id: 185,
    domain: "Track 2: Azure ML Core - Endpoints",
    type: "single",
    scenario: "Which Azure ML CLI v2 command updates the traffic routing percentage on an existing online endpoint without redeploying the underlying model containers?",
    options: [
      "A) az ml online-endpoint update --name my-endpoint --traffic blue=80 green=20 --resource-group my-rg --workspace-name my-ws",
      "B) az ml traffic set 80 20",
      "C) az vm restart",
      "D) ml-update traffic"
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) az ml online-endpoint update --name my-endpoint --traffic blue=80 green=20 ... Explanation: Traffic routing updates are lightweight control-plane operations executed instantly via CLI without restarting data-plane containers."
  },

  // ==========================================
  // Sub-topic 5: Web App Integration & Security (Q186-Q205)
  // ==========================================
  {
    id: 186,
    domain: "Track 2: Azure ML Core - Web App Integration",
    type: "single",
    scenario: "You have deployed an Azure ML Managed Online Endpoint and want to integrate real-time scoring into an external Node.js or Python web application (like 'webapp' in azmlrepo). How do you retrieve the scoring REST endpoint URL and primary authentication key via Python SDK v2?",
    options: [
      "A) url = ml_client.online_endpoints.get('my-endpoint').scoring_uri\nkeys = ml_client.online_endpoints.get_keys('my-endpoint')\nprimary_key = keys.primary_key",
      "B) url = 'http://localhost'\nprimary_key = '12345'",
      "C) url = azureml.get_url()\nprimary_key = azureml.get_key()",
      "D) url = os.getenv('URL')\nprimary_key = 'admin'"
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) url = ml_client.online_endpoints.get('my-endpoint').scoring_uri; keys = ml_client.online_endpoints.get_keys('my-endpoint'). Explanation: MLClient provides direct accessor methods to retrieve the public HTTPS scoring URI and rotating authentication keys."
  },
  {
    id: 187,
    domain: "Track 2: Azure ML Core - Web App Integration",
    type: "single",
    scenario: "When sending an HTTP POST request from a web application to an Azure ML Managed Online Endpoint configured with key-based authentication (auth_mode='key'), which HTTP header must contain the secret key?",
    options: [
      "A) Authorization: Bearer <primary_key>",
      "B) X-API-KEY: <primary_key>",
      "C) Cookie: session=<primary_key>",
      "D) User-Agent: <primary_key>"
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Authorization: Bearer <primary_key>. Explanation: Azure ML REST endpoints adhere to OAuth 2.0 / Bearer token HTTP header standards for both key-based and Entra ID token authentication."
  },
  {
    id: 188,
    domain: "Track 2: Azure ML Core - Web App Integration",
    type: "single",
    scenario: "Your web application makes synchronous scoring calls to an Azure ML endpoint. During peak hours, the network occasionally drops packets or experiences transient latency spikes. How should your web app's HTTP client be configured to ensure resilience?",
    options: [
      "A) Implement exponential backoff retry logic (e.g., urllib3/requests Retry adapter or Polly in .NET) for HTTP 503 (Service Unavailable) and HTTP 429 (Too Many Requests) status codes, along with a sensible connection timeout (e.g., 5-10 seconds).",
      "B) Crash the entire web server immediately on the first error.",
      "C) Send 10,000 requests per second in an infinite loop without delay.",
      "D) Disable HTTPS and use unencrypted HTTP."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Implement exponential backoff retry logic for HTTP 503 and HTTP 429 status codes, along with a sensible connection timeout. Explanation: Robust cloud engineering requires defensive retry architectures to handle transient network blips gracefully."
  },
  {
    id: 189,
    domain: "Track 2: Azure ML Core - Web App Integration",
    type: "single",
    scenario: "Why should an enterprise web application avoid storing Azure ML endpoint primary keys directly inside client-side JavaScript or public HTML files?",
    options: [
      "A) Because anyone viewing the webpage source code could steal the API key, make unauthorized inference calls against your billing account, or exfiltrate proprietary model predictions.",
      "B) Because JavaScript cannot read strings.",
      "C) Because keys make HTML pages load slowly.",
      "D) Because HTML only supports numbers."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Because anyone viewing the webpage source code could steal the API key and make unauthorized inference calls against your billing account. Explanation: API keys must always be stored securely on backend application servers or in Key Vault, never exposed to client browsers."
  },
  {
    id: 190,
    domain: "Track 2: Azure ML Core - Web App Integration",
    type: "single",
    scenario: "You want to secure communication between an Azure App Service web application and an Azure ML Managed Online Endpoint so that inference traffic never traverses the public internet. What Azure networking architecture accomplishes this?",
    options: [
      "A) Enable VNet Integration on the Azure App Service and configure the Azure ML Managed Online Endpoint with a Private Endpoint inside the same virtual network or peered VNet.",
      "B) Print requests on paper and mail them.",
      "C) Use a public Wi-Fi hotspot.",
      "D) Disable all firewalls."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Enable VNet Integration on the Azure App Service and configure the Azure ML Managed Online Endpoint with a Private Endpoint. Explanation: VNet integration and Private Endpoints create an isolated, end-to-end private network tunnel within the Azure backbone."
  },
  {
    id: 191,
    domain: "Track 2: Azure ML Core - Web App Integration",
    type: "single",
    scenario: "When formatting a JSON request payload to send to an Azure ML online endpoint hosting a scikit-learn or tabular PyTorch model, what is the standard JSON root key expected by default MLflow serving containers?",
    options: [
      "A) {\"input_data\": {\"columns\": [...], \"index\": [...], \"data\": [...]}} or {\"dataframe_split\": ...} / {\"dataframe_records\": ...}",
      "B) {\"hello\": \"world\"}",
      "C) {\"sql_query\": \"SELECT *\"}",
      "D) {\"image_png\": \"binary\"}"
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) {\"input_data\": ...} or {\"dataframe_split\": ...} / {\"dataframe_records\": ...}. Explanation: MLflow serving containers standardize tabular JSON serialization using pandas dataframe_split or dataframe_records schemas under the 'input_data' root key."
  },
  {
    id: 192,
    domain: "Track 2: Azure ML Core - Web App Integration",
    type: "single",
    scenario: "What HTTP status code is returned by an Azure ML Managed Online Endpoint when the incoming JSON request payload fails signature validation or cannot be parsed by 'score.py'?",
    options: [
      "A) HTTP 400 Bad Request (or HTTP 422 Unprocessable Entity)",
      "B) HTTP 200 OK",
      "C) HTTP 301 Moved Permanently",
      "D) HTTP 502 Bad Gateway"
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) HTTP 400 Bad Request (or HTTP 422 Unprocessable Entity). Explanation: Client-side payload formatting errors or schema mismatches trigger 4xx client error status codes."
  },
  {
    id: 193,
    domain: "Track 2: Azure ML Core - Web App Integration",
    type: "single",
    scenario: "How can you monitor end-to-end distributed tracing from your web application frontend through to the Azure ML inference container using OpenTelemetry?",
    options: [
      "A) By propagating standard W3C Trace Context HTTP headers ('traceparent' and 'tracestate') from the web app into the Azure ML scoring request, allowing Application Insights to stitch the frontend and ML backend into a unified trace waterfall.",
      "B) By copying log files onto a USB drive.",
      "C) By calling customer support.",
      "D) Distributed tracing is impossible in cloud computing."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) By propagating standard W3C Trace Context HTTP headers ('traceparent' and 'tracestate'). Explanation: W3C Trace Context headers pass unique trace IDs across network boundaries, enabling full-stack waterfall visibility in Application Insights."
  },
  {
    id: 194,
    domain: "Track 2: Azure ML Core - Web App Integration",
    type: "single",
    scenario: "If your web application experiences HTTP 401 Unauthorized errors when invoking an Azure ML endpoint configured with Entra ID authentication (auth_mode='aad'), what should you verify?",
    options: [
      "A) Verify that the web application's Managed Identity or Service Principal has been granted the 'AzureML Data Scientist' or custom inference reader role on the Azure ML workspace/endpoint, and that the OAuth token scope is set correctly to 'https://ml.azure.com/.default'.",
      "B) Verify that the monitor is plugged in.",
      "C) Verify that the keyboard has batteries.",
      "D) Verify that the computer is running Windows."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Verify RBAC role assignment and OAuth token scope ('https://ml.azure.com/.default'). Explanation: HTTP 401/403 errors in Entra ID auth indicate missing RBAC permissions or incorrect audience scopes during token acquisition."
  },
  {
    id: 195,
    domain: "Track 2: Azure ML Core - Web App Integration",
    type: "single",
    scenario: "What is the primary architectural purpose of deploying an Azure API Management (APIM) gateway or Azure Front Door in front of your Azure ML Managed Online Endpoints?",
    options: [
      "A) To provide enterprise rate limiting (throttling), web application firewall (WAF) protection, SSL offloading, custom domain routing, and centralized API analytics across all client applications.",
      "B) To make the models run slower.",
      "C) To delete user accounts.",
      "D) To convert Python code into Java."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) To provide enterprise rate limiting, WAF protection, SSL offloading, custom domain routing, and centralized API analytics. Explanation: An API gateway layer insulates raw ML serving endpoints behind enterprise-grade security and governance controls."
  },
  {
    id: 196,
    domain: "Track 2: Azure ML Core - Web App Integration",
    type: "single",
    scenario: "How can you implement seamless key rotation for an Azure ML endpoint without causing downtime in your production web application?",
    options: [
      "A) Azure ML endpoints provide two keys (Primary and Secondary). Configure your web app to use the Primary key, regenerate the Secondary key, update the web app to use the new Secondary key, and finally regenerate the old Primary key.",
      "B) Shut down the web server for 6 hours every Monday.",
      "C) Delete the endpoint and recreate it from scratch.",
      "D) Never change passwords ever."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Azure ML endpoints provide two keys (Primary and Secondary); rotate by alternating between them. Explanation: Dual-key architecture is specifically designed to allow zero-downtime secret rotation across distributed systems."
  },
  {
    id: 197,
    domain: "Track 2: Azure ML Core - Web App Integration",
    type: "single",
    scenario: "Why would an engineering team choose to deploy an ML model behind an asynchronous Azure ML Batch Endpoint triggered by an Azure Logic App or Function, rather than an Online Endpoint?",
    options: [
      "A) When the business workflow involves bulk processing (e.g., nightly end-of-day financial risk reports or weekly inventory forecasts) where instant sub-second response is unnecessary and cluster auto-shutdown provides massive cost savings.",
      "B) Because Batch Endpoints are faster than Online Endpoints for single-row requests.",
      "C) Because Online Endpoints do not support Python.",
      "D) Because Logic Apps cannot call REST APIs."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) When the workflow involves bulk processing where instant response is unnecessary and cluster auto-shutdown provides massive cost savings. Explanation: Matching endpoint architecture (synchronous online vs asynchronous batch) to business SLAs optimizes cost and reliability."
  },
  {
    id: 198,
    domain: "Track 2: Azure ML Core - Web App Integration",
    type: "single",
    scenario: "When inspecting network traffic between your web application and an Azure ML endpoint, you see an HTTP response header: 'x-ms-run-function-failed: true'. What does this indicate?",
    options: [
      "A) The HTTP connection succeeded and reached the container, but an unhandled Python exception occurred inside your custom 'score.py' run() function during model inference.",
      "B) The Azure datacenter caught fire.",
      "C) The user typed an invalid web address.",
      "D) The DNS server is offline."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) The HTTP connection succeeded, but an unhandled Python exception occurred inside your custom 'score.py' run() function. Explanation: Azure ML injects specific diagnostic headers to distinguish infrastructure routing successes from application-level script exceptions."
  },
  {
    id: 199,
    domain: "Track 2: Azure ML Core - Web App Integration",
    type: "single",
    scenario: "You want to cache frequent model scoring results in your web application layer using Azure Cache for Redis. When is caching model predictions appropriate?",
    options: [
      "A) When identical input queries occur frequently (e.g., product recommendation scores for popular items or static user profile classifications) and model output is deterministic, reducing latency from ~100ms to ~2ms and saving inference compute costs.",
      "B) For real-time stock trading where prices change every millisecond.",
      "C) When storing multi-terabyte video files.",
      "D) Never; caching is illegal in ML."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) When identical input queries occur frequently and model output is deterministic. Explanation: Caching deterministic inference responses in Redis drastically cuts cloud compute spend and eliminates serving latency for hot queries."
  },
  {
    id: 200,
    domain: "Track 2: Azure ML Core - Web App Integration",
    type: "single",
    scenario: "In the 'azmlrepo' webapp architecture, how does the application ensure that high-concurrency user requests do not exhaust the connection pool when communicating with Azure ML endpoints?",
    options: [
      "A) By using asynchronous HTTP clients (like httpx in Python or async fetch in Node.js) with connection pooling and keep-alive headers enabled.",
      "B) By opening and closing a brand new physical network socket for every single token.",
      "C) By rebooting the computer after every request.",
      "D) By limiting the web app to 1 user per day."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) By using asynchronous HTTP clients with connection pooling and keep-alive headers enabled. Explanation: Connection pooling reuses established TCP/TLS connections, avoiding TCP handshake overhead and socket exhaustion under high load."
  },
  {
    id: 201,
    domain: "Track 2: Azure ML Core - Web App Integration",
    type: "single",
    scenario: "What is the recommended approach for handling CORS (Cross-Origin Resource Sharing) when a single-page web application (React/Angular) running in a user's browser needs to display predictions from an Azure ML endpoint?",
    options: [
      "A) Do not call the Azure ML endpoint directly from the browser! Route requests through your backend web application server or API Gateway, which securely stores API keys and invokes Azure ML server-side.",
      "B) Enable wildcard CORS ('*') on Azure ML and embed the primary secret key in React JavaScript.",
      "C) Ask users to disable CORS in their web browser settings.",
      "D) Email the JSON payload to the user."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Do not call the Azure ML endpoint directly from the browser! Route requests through your backend web application server or API Gateway. Explanation: Calling ML endpoints directly from browser SPAs exposes secret keys and violates web security best practices."
  },
  {
    id: 202,
    domain: "Track 2: Azure ML Core - Web App Integration",
    type: "single",
    scenario: "You want to deploy a web application and its corresponding Azure ML infrastructure using a unified Infrastructure-as-Code (IaC) pipeline. Which Microsoft declarative tool natively provisions both Azure App Service and Azure Machine Learning workspaces in a single script?",
    options: [
      "A) Bicep (or Azure Resource Manager ARM templates)",
      "B) Microsoft Word",
      "C) Excel Macro",
      "D) Windows Notepad"
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Bicep (or Azure Resource Manager ARM templates). Explanation: Bicep provides clean, modular syntax for provisioning full-stack Azure architectures across computing, networking, and AI services."
  },
  {
    id: 203,
    domain: "Track 2: Azure ML Core - Web App Integration",
    type: "single",
    scenario: "When deploying a web app that calls an Azure ML endpoint, how should you pass the endpoint URL and authentication key into the application environment in a cloud-native deployment (e.g., Azure App Service or Container Apps)?",
    options: [
      "A) Configure them as App Service Application Settings (Environment Variables) referenced dynamically at runtime, ideally pulling secret values directly from Key Vault via Key Vault References ('@Microsoft.KeyVault(...)').",
      "B) Hardcode them into index.html.",
      "C) Write them into a local text file on the C: drive.",
      "D) Print them on the server chassis."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Configure them as App Service Application Settings referenced dynamically at runtime, ideally pulling secrets from Key Vault. Explanation: App Service Key Vault references securely resolve secrets into environment variables without storing plaintext in code or configuration files."
  },
  {
    id: 204,
    domain: "Track 2: Azure ML Core - Web App Integration",
    type: "single",
    scenario: "During a disaster recovery drill, your primary Azure region (East US) goes offline. How should a mission-critical web application fail over its ML scoring workloads?",
    options: [
      "A) Deploy identical Azure ML Managed Online Endpoints in a secondary paired region (e.g., West US 2) and use Azure Traffic Manager or Azure Front Door with automated health probes to fail over traffic seamlessly.",
      "B) Wait 3 weeks for the datacenter to be rebuilt.",
      "C) Ask users to stop using the application.",
      "D) Turn off the internet."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Deploy identical endpoints in a secondary paired region and use Azure Front Door with automated health probes to fail over traffic. Explanation: Multi-region active-passive or active-active deployments behind global load balancers ensure high availability for mission-critical AI workloads."
  },
  {
    id: 205,
    domain: "Track 2: Azure ML Core - Web App Integration",
    type: "single",
    scenario: "Congratulations! You have completed all 100 questions in Track 2 (Azure Machine Learning Core - azmlrepo). What is the ultimate takeaway for operationalizing traditional machine learning models on Azure?",
    options: [
      "A) That ML engineering is only about training models on local laptops.",
      "B) That mastering MLflow tracking, declarative SDK v2/CLI v2 automation, immutable Model Registries, and scalable Managed Online/Batch Endpoints is essential for building robust, secure, and production-grade AI solutions.",
      "C) That cloud computing is unnecessary.",
      "D) That data scientists should never use version control."
    ],
    correctAnswer: [1],
    explanation: "Correct Answer: B) That mastering MLflow tracking, declarative SDK v2/CLI v2 automation, immutable Model Registries, and scalable Managed Online/Batch Endpoints is essential for building robust, secure, and production-grade AI solutions. Explanation: You have mastered Azure Machine Learning Core! You are now ready to tackle MLOps CI/CD governance and pipeline orchestration!"
  }
];
