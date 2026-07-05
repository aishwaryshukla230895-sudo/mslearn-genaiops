window.QUIZ_DATA_MLOPS = [
  // ==========================================
  // TRACK 3: MLOps & CI/CD Governance - mslearn-mlops (Questions 206-305)
  // Sub-topic 1: MLOps Maturity Models & Organization (Q206-Q225)
  // ==========================================
  {
    id: 206,
    domain: "Track 3: MLOps - Maturity Models",
    type: "single",
    scenario: "An enterprise data science team currently executes Jupyter notebooks manually on individual developer laptops. Model weights are emailed to software engineers for manual deployment into production servers without version control or automated testing.",
    question: "According to the Microsoft MLOps Maturity Model, what level of MLOps maturity does this organization exhibit?",
    options: [
      "A) Level 0: No MLOps (Manual process, script-driven, no automation or tracking)",
      "B) Level 1: DevOps without MLOps",
      "C) Level 2: Automated Training",
      "D) Level 4: Full MLOps Automation"
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Level 0: No MLOps (Manual process, script-driven, no automation or tracking). Explanation: Level 0 is characterized by manual, siloed workflows without centralized tracking, reproducible environments, or CI/CD pipelines."
  },
  {
    id: 207,
    domain: "Track 3: MLOps - Maturity Models",
    type: "single",
    scenario: "Your organization has implemented automated CI builds for unit testing Python code and building Docker container images whenever a pull request is merged into main. However, model training and deployment are still triggered manually by data scientists.",
    question: "What MLOps maturity level does this represent?",
    options: [
      "A) Level 1: DevOps without MLOps (Automated software build/test, but manual ML pipelines)",
      "B) Level 0: No MLOps",
      "C) Level 3: Automated Model Deployment",
      "D) Level 5: AGI"
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Level 1: DevOps without MLOps. Explanation: Level 1 applies traditional software DevOps practices (code linting, unit tests, image builds) but lacks automated ML model training pipelines and model registry integration."
  },
  {
    id: 208,
    domain: "Track 3: MLOps - Maturity Models",
    type: "single",
    scenario: "A data science team has automated their model training workflow using Azure ML Pipelines. Whenever new training data is uploaded to ADLS Gen2, an automated training pipeline runs, evaluates model accuracy, and logs the artifact to the Model Registry. However, promoting the model to production endpoints still requires manual intervention.",
    question: "What MLOps maturity level has this team achieved?",
    options: [
      "A) Level 2: Automated Training (Continuous Training / CT)",
      "B) Level 0: Manual",
      "C) Level 4: Full MLOps",
      "D) Level 1: DevOps only"
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Level 2: Automated Training (Continuous Training / CT). Explanation: Level 2 introduces automated model training and evaluation pipelines triggered by data or schedule events, ending with automated registration."
  },
  {
    id: 209,
    domain: "Track 3: MLOps - Maturity Models",
    type: "single",
    scenario: "What characteristic defines Level 3 (Automated Model Deployment / Continuous Deployment CD) in the MLOps maturity model?",
    options: [
      "A) When a new model is registered in the Model Registry, an automated CI/CD pipeline immediately deploys it to a staging endpoint, runs automated smoke/integration tests, and promotes it to production upon passing quality gates.",
      "B) When data scientists write code without bugs.",
      "C) When models train in under 5 seconds.",
      "D) When no humans work in the company."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) When a new model is registered, an automated CI/CD pipeline deploys it to staging, runs tests, and promotes it to production. Explanation: Level 3 extends automation from training into automated serving deployment (CD)."
  },
  {
    id: 210,
    domain: "Track 3: MLOps - Maturity Models",
    type: "single",
    scenario: "What distinguishes Level 4 (Full MLOps Operations / Automated Retraining Loop) as the highest level of MLOps maturity?",
    options: [
      "A) The system continuously monitors live production endpoints for statistical data drift and model accuracy degradation, automatically triggering retraining pipelines and promoting new challenger models without human intervention.",
      "B) The system prints daily paper reports.",
      "C) The system requires manual password entry every hour.",
      "D) The system deletes old models every midnight."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) The system continuously monitors live production endpoints for data drift, automatically triggering retraining pipelines and promoting challenger models. Explanation: Level 4 closes the loop between production observability and continuous retraining."
  },
  {
    id: 211,
    domain: "Track 3: MLOps - Maturity Models",
    type: "single",
    scenario: "Why is 'separation of concerns' between Data Scientists and MLOps Engineers critical when scaling from Level 0 to Level 3 MLOps maturity?",
    options: [
      "A) Data scientists focus on feature engineering, model architecture, and experimentation in development workspaces; MLOps engineers focus on CI/CD automation, infrastructure governance, security, and production SLAs.",
      "B) Data scientists should never talk to engineers.",
      "C) Because Azure charges double for shared roles.",
      "D) To make email threads shorter."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Data scientists focus on experimentation; MLOps engineers focus on CI/CD automation, governance, and production SLAs. Explanation: Clear operational boundaries allow agile data science experimentation while enforcing rigorous production stability."
  },
  {
    id: 212,
    domain: "Track 3: MLOps - Maturity Models",
    type: "multiple",
    scenario: "Which three core DevOps principles are directly adapted into MLOps? (Select three)",
    options: [
      "A) Continuous Integration (CI) - testing code, data schemas, and model configurations",
      "B) Continuous Delivery/Deployment (CD) - automating model serving rollouts",
      "C) Continuous Monitoring (CM) - tracking real-time inference latency, data drift, and accuracy",
      "D) Continuous Manual Copying - copying USB drives across offices",
      "E) Continuous Password Sharing - emailing root passwords to all staff"
    ],
    correctAnswer: [0, 1, 2],
    explanation: "Correct Answer: A, B, and C. Explanation: MLOps extends traditional CI/CD with Continuous Training (CT) and Continuous Monitoring (CM) tailored for data and machine learning assets."
  },
  {
    id: 213,
    domain: "Track 3: MLOps - Maturity Models",
    type: "single",
    scenario: "In an enterprise MLOps architecture, why should you maintain separate Azure ML workspaces for Development, Staging, and Production?",
    options: [
      "A) To isolate experimental code and ad-hoc compute costs in Dev, validate integration and load performance in Staging, and protect mission-critical customer-facing endpoints in Production with strict RBAC access controls.",
      "B) Because Azure ML workspaces can only hold 10 files each.",
      "C) To make the portal navigation more complicated.",
      "D) Because Python refuses to run in a single workspace."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) To isolate experimental code in Dev, validate in Staging, and protect mission-critical endpoints in Production with strict RBAC. Explanation: Environment isolation prevents experimental bugs from impacting live production traffic."
  },
  {
    id: 214,
    domain: "Track 3: MLOps - Maturity Models",
    type: "single",
    scenario: "What is the primary operational risk of remaining at MLOps Level 0 (Manual Process) when deploying AI models in healthcare or financial sectors?",
    options: [
      "A) Total lack of auditability and reproducibility; if a deployed model causes regulatory or clinical failure, it is impossible to trace which training script, dataset, or library version produced that model.",
      "B) The computer monitor might turn off.",
      "C) Data scientists will get bored.",
      "D) The keyboard will wear out faster."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Total lack of auditability and reproducibility; impossible to trace which dataset or code produced a failed model. Explanation: Regulatory compliance (e.g., EU AI Act, HIPAA) mandates strict end-to-end lineage and reproducible builds."
  },
  {
    id: 215,
    domain: "Track 3: MLOps - Maturity Models",
    type: "single",
    scenario: "How does the 'Inner Loop' differ from the 'Outer Loop' in MLOps workflows?",
    options: [
      "A) The Inner Loop is the iterative, interactive experimentation phase where data scientists write code and test hypotheses in notebooks/IDE; the Outer Loop is the automated CI/CD/CT production pipeline orchestrating training, evaluation, and deployment across environments.",
      "B) The Inner Loop runs on Linux; the Outer Loop runs on Windows.",
      "C) The Inner Loop is for morning work; the Outer Loop is for evening work.",
      "D) There is no difference."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Inner Loop is iterative experimentation in IDE; Outer Loop is automated CI/CD/CT production pipeline orchestration. Explanation: Bridging the inner loop to the outer loop via git version control is the fundamental mechanism of MLOps."
  },
  {
    id: 216,
    domain: "Track 3: MLOps - Maturity Models",
    type: "single",
    scenario: "Which KPI (Key Performance Indicator) is most effective for measuring the success of an organization's transition from MLOps Level 0 to Level 3?",
    options: [
      "A) Lead Time for ML Model Deployment (reducing time from model inception/experimentation to production release from months down to hours/days).",
      "B) Number of emails sent per day.",
      "C) Size of the computer monitor.",
      "D) Number of coffee cups consumed."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Lead Time for ML Model Deployment (reducing time from months down to hours/days). Explanation: DORA metrics (Lead Time, Deployment Frequency, Mean Time to Recovery, Change Failure Rate) apply directly to evaluating MLOps velocity."
  },
  {
    id: 217,
    domain: "Track 3: MLOps - Maturity Models",
    type: "single",
    scenario: "What role does 'Data Lineage' play in achieving MLOps Level 2 maturity?",
    options: [
      "A) It automatically binds the exact immutable data asset snapshot URI (e.g., 'azureml:raw_data:4') to the training run metadata, ensuring reproducibility and compliance.",
      "B) It deletes old data files.",
      "C) It formats the hard disk.",
      "D) It translates English to Spanish."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) It automatically binds the exact immutable data asset snapshot URI to the training run metadata. Explanation: Automated training requires strict data tracking to ensure models can be rebuilt reliably from historical snapshots."
  },
  {
    id: 218,
    domain: "Track 3: MLOps - Maturity Models",
    type: "single",
    scenario: "Why is 'Model Registry' considered the central organizational pivot point between ML development and software operations?",
    options: [
      "A) Because data scientists publish validated models into the registry (end of training loop), and CI/CD pipelines consume models from the registry to deploy to serving infrastructure (start of deployment loop).",
      "B) Because it is the only place where passwords can be saved.",
      "C) Because it makes the portal load faster.",
      "D) Because it is required by Windows."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Because data scientists publish validated models into the registry, and CI/CD pipelines consume models from the registry for deployment. Explanation: The Model Registry acts as the immutable contract and handoff point between Data Science and DevOps teams."
  },
  {
    id: 219,
    domain: "Track 3: MLOps - Maturity Models",
    type: "single",
    scenario: "In an MLOps Level 3 implementation, what should happen if an automated model evaluation job determines that a newly trained candidate model has lower F1 score than the currently deployed production baseline?",
    options: [
      "A) The CI/CD pipeline should fail or halt promotion, logging an evaluation failure report in Azure DevOps / GitHub Actions without registering or deploying the inferior candidate.",
      "B) The pipeline should deploy the worse model anyway.",
      "C) The pipeline should delete the entire Azure workspace.",
      "D) The pipeline should send a text message to the CEO."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) The CI/CD pipeline should fail or halt promotion without registering or deploying the inferior candidate. Explanation: Automated quality gating protects production endpoints from model regression."
  },
  {
    id: 220,
    domain: "Track 3: MLOps - Maturity Models",
    type: "single",
    scenario: "What is the primary purpose of an 'MLOps Architecture Reference Guide' (such as EXERCISE_MLOPS_PLANNING_GUIDE.md in mslearn-mlops)?",
    options: [
      "A) To establish standardized conventions for branching strategies, environment naming, infrastructure provisioning, and automated testing across all data science projects in an enterprise.",
      "B) To teach users how to type on a keyboard.",
      "C) To list phone numbers of local restaurants.",
      "D) To explain how to install Windows 98."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) To establish standardized conventions for branching strategies, environment naming, and automated testing across projects. Explanation: Standardization ensures repeatable, scalable AI engineering across distributed enterprise teams."
  },
  {
    id: 221,
    domain: "Track 3: MLOps - Maturity Models",
    type: "single",
    scenario: "When assessing an organization's MLOps readiness, what is the 'Feature Store' pattern used for in advanced MLOps maturity levels?",
    options: [
      "A) To provide a centralized repository of curated, pre-computed historical and real-time features, eliminating data preparation duplication and preventing training-serving skew.",
      "B) To sell software licenses.",
      "C) To store video games.",
      "D) To backup email archives."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) To provide a centralized repository of curated features, eliminating data duplication and preventing training-serving skew. Explanation: Feature stores guarantee that inference pipelines calculate input features using the exact same logic as training pipelines."
  },
  {
    id: 222,
    domain: "Track 3: MLOps - Maturity Models",
    type: "single",
    scenario: "Which organizational anti-pattern commonly impedes progression beyond MLOps Level 0?",
    options: [
      "A) Treating machine learning models as static software artifacts that never degrade or require retraining after initial deployment.",
      "B) Using Git for version control.",
      "C) Writing automated unit tests.",
      "D) Collaborating between teams."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Treating machine learning models as static software artifacts that never degrade or require retraining. Explanation: Unlike traditional code, ML models degrade over time due to changing real-world data distributions (concept/data drift)."
  },
  {
    id: 223,
    domain: "Track 3: MLOps - Maturity Models",
    type: "single",
    scenario: "In an MLOps Level 4 system, what is 'Continuous Training' (CT)?",
    options: [
      "A) The automated execution of data ingestion, preprocessing, model retraining, and evaluation workflows triggered by data drift alarms or scheduled timers without manual human intervention.",
      "B) Data scientists reading textbooks every weekend.",
      "C) Leaving the training loop running forever in an infinite while(True) loop.",
      "D) Typing code faster."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) The automated execution of retraining workflows triggered by data drift alarms or scheduled timers. Explanation: CT ensures AI systems adapt autonomously to evolving business environments."
  },
  {
    id: 224,
    domain: "Track 3: MLOps - Maturity Models",
    type: "single",
    scenario: "How does MLOps differ from traditional DataOps?",
    options: [
      "A) DataOps focuses on data ingestion, ETL pipelines, and data quality governance; MLOps focuses on model experimentation, training reproducibility, model registries, and inference serving SLAs.",
      "B) DataOps is for Python; MLOps is for SQL.",
      "C) DataOps is free; MLOps is paid.",
      "D) There is no difference."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) DataOps focuses on data ingestion and ETL; MLOps focuses on model experimentation, reproducibility, and serving SLAs. Explanation: While complementary, MLOps addresses the unique non-deterministic lifecycle of machine learning models."
  },
  {
    id: 225,
    domain: "Track 3: MLOps - Maturity Models",
    type: "single",
    scenario: "Why is automated testing of data schemas (Data Quality Tests) mandatory before executing an automated retraining pipeline?",
    options: [
      "A) To prevent 'garbage in, garbage out' failures where missing columns, null spikes, or type mismatches in incoming raw data silently corrupt newly trained model weights.",
      "B) To make the hard drive spin faster.",
      "C) Because Azure CLI requires it.",
      "D) To increase cloud billing."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) To prevent 'garbage in, garbage out' failures where data corruption silently degrades trained model weights. Explanation: Data validation gating is the first line of defense in automated MLOps pipelines."
  },

  // ==========================================
  // Sub-topic 2: CI/CD Pipelines & Automation (Q226-Q245)
  // ==========================================
  {
    id: 226,
    domain: "Track 3: MLOps - CI/CD Pipelines",
    type: "single",
    scenario: "You are setting up a GitHub Actions workflow to automate Azure Machine Learning job submissions. To authenticate securely without storing static client secrets or passwords in GitHub Secrets, what authentication mechanism should you use?",
    options: [
      "A) OpenID Connect (OIDC) Federated Identity Credentials with Azure Service Principals / User-Assigned Managed Identities.",
      "B) Hardcode a Client Secret in plaintext in the YAML file.",
      "C) Email the password to GitHub.",
      "D) Use anonymous public access."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) OpenID Connect (OIDC) Federated Identity Credentials with Azure Service Principals. Explanation: OIDC federation allows GitHub Actions to exchange short-lived tokens directly with Azure Entra ID, eliminating static credential leakage risks."
  },
  {
    id: 227,
    domain: "Track 3: MLOps - CI/CD Pipelines",
    type: "single",
    scenario: "In a GitHub Actions workflow YAML file for MLOps, which official GitHub Action is used to log into Azure before running Azure CLI ('az ml') commands?",
    options: [
      "A) azure/login@v2 (with client-id, tenant-id, and subscription-id for OIDC)",
      "B) actions/checkout@v3",
      "C) microsoft/windows-login@v1",
      "D) azure/logout@v1"
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) azure/login@v2. Explanation: The azure/login action authenticates the runner session against Azure Entra ID, enabling subsequent Azure CLI and SDK commands."
  },
  {
    id: 228,
    domain: "Track 3: MLOps - CI/CD Pipelines",
    type: "single",
    scenario: "You want to trigger an Azure DevOps YAML pipeline automatically whenever a data scientist pushes changes to the 'src/' folder or 'model/job.yml' file on the 'main' branch.",
    question: "How should you configure the trigger syntax in your 'azure-pipelines.yml'?",
    options: [
      "A) trigger:\n  branches:\n    include:\n      - main\n  paths:\n    include:\n      - src/*\n      - model/job.yml",
      "B) trigger: all_branches_always",
      "C) run_on: every_hour",
      "D) schedule: [main]"
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) trigger: branches: include: [main], paths: include: [src/*, model/job.yml]. Explanation: Path-based filtering ensures CI/CD pipelines only execute when relevant ML code or job definitions change, saving compute minutes."
  },
  {
    id: 229,
    domain: "Track 3: MLOps - CI/CD Pipelines",
    type: "single",
    scenario: "In an automated MLOps CI/CD pipeline, what is the purpose of running a 'Linting and Unit Test' job before submitting a training job to Azure ML?",
    options: [
      "A) To catch Python syntax errors, formatting violations (flake8/black), and unit test failures (pytest) in seconds on lightweight CI runners BEFORE spinning up expensive multi-GPU cloud compute clusters.",
      "B) To make the code look colorful.",
      "C) To delete old model files.",
      "D) To slow down developers."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) To catch syntax errors and unit test failures in seconds on CI runners BEFORE spinning up expensive cloud compute. Explanation: Fail-fast CI practices save cloud infrastructure spend and developer time."
  },
  {
    id: 230,
    domain: "Track 3: MLOps - CI/CD Pipelines",
    type: "single",
    scenario: "When submitting an Azure ML command job via GitHub Actions using 'az ml job create -f job.yml', how can the pipeline script wait for the cloud training job to finish and check its exit status before proceeding to model evaluation?",
    options: [
      "A) Include the '--stream' flag (e.g., 'az ml job create -f job.yml --stream'), which streams console logs to the GitHub Actions runner and returns a non-zero exit code if the cloud job fails.",
      "B) Use a 10-hour sleep statement.",
      "C) Ask the data scientist to email the pipeline when done.",
      "D) It is impossible; pipelines cannot wait."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Include the '--stream' flag. Explanation: The '--stream' flag attaches the terminal session to the cloud run, blocking pipeline execution until completion and propagating failure codes."
  },
  {
    id: 231,
    domain: "Track 3: MLOps - CI/CD Pipelines",
    type: "single",
    scenario: "You want to pass the git commit hash from a GitHub Actions workflow into an Azure ML training job so that the registered model tag contains the exact commit sha ('git_commit: 7e50392'). How do you achieve this?",
    options: [
      "A) Use parameter overriding in CLI v2: az ml job create -f job.yml --set tags.git_commit=${{ github.sha }}",
      "B) Write the sha on a whiteboard.",
      "C) Rename the workspace to the commit hash.",
      "D) Delete the git repository."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Use parameter overriding in CLI v2: az ml job create -f job.yml --set tags.git_commit=${{ github.sha }}. Explanation: The '--set' flag in Azure CLI v2 dynamically overrides YAML attributes at runtime."
  },
  {
    id: 232,
    domain: "Track 3: MLOps - CI/CD Pipelines",
    type: "multiple",
    scenario: "Which three stages represent the canonical sequence of an MLOps Continuous Delivery (CD) pipeline for model deployment? (Select three)",
    options: [
      "A) Deploy candidate model to Staging Online Endpoint (or shadow slot)",
      "B) Execute automated integration & smoke tests (scoring sample JSON payloads and checking latency/schema)",
      "C) Promote staging deployment to Production (100% traffic allocation) and decommission old deployment",
      "D) Format the developer's laptop hard drive",
      "E) Send spam emails to customers"
    ],
    correctAnswer: [0, 1, 2],
    explanation: "Correct Answer: A, B, and C. Explanation: A robust CD pipeline validates serving containers in staging before safely shifting production traffic via blue-green deployment patterns."
  },
  {
    id: 233,
    domain: "Track 3: MLOps - CI/CD Pipelines",
    type: "single",
    scenario: "In Azure DevOps, what feature allows you to enforce manual sign-off by a Lead Data Scientist or QA Manager before a pipeline deploys a model to the Production workspace?",
    options: [
      "A) Environment Approvals and Checks (Manual Validation / Pre-deployment approvals on an Environment resource).",
      "B) Deleting the pipeline YAML.",
      "C) Turning off the Wi-Fi router.",
      "D) Writing an angry comment in code."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Environment Approvals and Checks (Pre-deployment approvals). Explanation: Azure DevOps environments support human-in-the-loop gating to enforce governance compliance prior to production release."
  },
  {
    id: 234,
    domain: "Track 3: MLOps - CI/CD Pipelines",
    type: "single",
    scenario: "What is the primary advantage of using declarative Infrastructure as Code (IaC) with Bicep/ARM templates inside your CI/CD pipeline to provision Azure ML resources?",
    options: [
      "A) It ensures idempotent, reproducible environment provisioning across Dev, Staging, and Production without manual portal clicking or configuration drift.",
      "B) It makes the portal font green.",
      "C) It prevents data scientists from writing Python.",
      "D) It increases network latency."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) It ensures idempotent, reproducible environment provisioning across Dev, Staging, and Production. Explanation: IaC eliminates configuration drift and enables automated disaster recovery provisioning."
  },
  {
    id: 235,
    domain: "Track 3: MLOps - CI/CD Pipelines",
    type: "single",
    scenario: "When executing unit tests for custom ML scoring logic in a CI/CD pipeline, why should you use 'mocking' (e.g., unittest.mock) for Azure ML workspace connections and cloud datastores?",
    options: [
      "A) Because unit tests must execute rapidly and deterministically in isolated CI runner environments without requiring live cloud network access or incurring Azure API throttling.",
      "B) Because cloud connections are illegal in Python.",
      "C) Because mocking makes files bigger.",
      "D) To prevent the computer from overheating."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Because unit tests must execute rapidly and deterministically without requiring live cloud network access. Explanation: Mocking external dependencies decouples pure algorithmic logic testing from infrastructure connectivity."
  },
  {
    id: 236,
    domain: "Track 3: MLOps - CI/CD Pipelines",
    type: "single",
    scenario: "Which Azure CLI command can be executed in a CD pipeline to verify that a Managed Online Endpoint is healthy and serving predictions correctly?",
    options: [
      "A) az ml online-endpoint invoke --name my-endpoint --request-file test_payload.json",
      "B) az vm reboot",
      "C) az storage blob delete",
      "D) ml-test-ping"
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) az ml online-endpoint invoke --name my-endpoint --request-file test_payload.json. Explanation: Invoking the endpoint with a test payload during CD pipeline execution serves as an automated smoke test."
  },
  {
    id: 237,
    domain: "Track 3: MLOps - CI/CD Pipelines",
    type: "single",
    scenario: "You want to prevent incomplete or failing code changes from being merged into the 'main' branch of your MLOps repository. What repository governance feature should you enable?",
    options: [
      "A) Branch Protection Rules (or Build Validation Policies in Azure DevOps) requiring passing CI status checks and minimum pull request code reviews before merge.",
      "B) Deleting the git repository.",
      "C) Giving all interns admin rights.",
      "D) Disabling passwords."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Branch Protection Rules requiring passing CI status checks and code reviews. Explanation: Branch policies enforce code quality and test compliance at the pull request boundary."
  },
  {
    id: 238,
    domain: "Track 3: MLOps - CI/CD Pipelines",
    type: "single",
    scenario: "In an automated model retraining pipeline, how can the script automatically decide whether to register the new model without human intervention?",
    options: [
      "A) By querying the Model Registry for the current champion model's logged accuracy, comparing it against the new candidate run's accuracy, and executing 'mlflow.register_model()' only if candidate_metric > champion_metric + threshold.",
      "B) By flipping a coin.",
      "C) By registering every model regardless of accuracy.",
      "D) By deleting all previous models."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) By comparing candidate accuracy against current champion metric and registering only if candidate > champion + threshold. Explanation: Automated comparison logic creates an objective quality gate for Continuous Training."
  },
  {
    id: 239,
    domain: "Track 3: MLOps - CI/CD Pipelines",
    type: "single",
    scenario: "What happens if two data scientists trigger a CI/CD training pipeline simultaneously on the same Azure ML Compute Cluster that has 'max_instances=4' and each job requires 4 nodes?",
    options: [
      "A) Azure ML queues the second job automatically; it transitions from 'Queued' to 'Running' as soon as the first job completes and releases the compute nodes.",
      "B) Both jobs crash and burn the server.",
      "C) The cluster deletes itself.",
      "D) Azure charges 10 times more money."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Azure ML queues the second job automatically until compute nodes are released. Explanation: Azure ML compute clusters natively manage job queuing and resource scheduling."
  },
  {
    id: 240,
    domain: "Track 3: MLOps - CI/CD Pipelines",
    type: "single",
    scenario: "When managing environment dependencies across CI/CD pipelines, why is it recommended to reference a registered Azure ML Environment asset (e.g., 'azureml:curated-pytorch:2') rather than rebuilding Docker images from scratch on every run?",
    options: [
      "A) It eliminates 10-20 minutes of container build time per job and guarantees identical dependency versions across all pipeline runs.",
      "B) It makes the code look older.",
      "C) Because Docker is banned in Azure.",
      "D) Because YAML files cannot read Dockerfiles."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) It eliminates container build time and guarantees identical dependency versions across runs. Explanation: Reusing pre-built environment images accelerates pipeline velocity and eliminates transient dependency resolution failures."
  },
  {
    id: 241,
    domain: "Track 3: MLOps - CI/CD Pipelines",
    type: "single",
    scenario: "Which git branching strategy is most widely adopted in MLOps enterprise teams to balance rapid experimentation with stable production releases?",
    options: [
      "A) Trunk-Based Development or GitHub Flow (short-lived feature branches merged into a protected 'main' branch via PRs, where 'main' always represents deployable production state).",
      "B) Never committing code.",
      "C) Creating 10,000 permanent branches.",
      "D) Coding directly on the production server via FTP."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Trunk-Based Development or GitHub Flow. Explanation: Short-lived feature branches minimize merge conflicts and keep continuous integration pipelines running smoothly."
  },
  {
    id: 242,
    domain: "Track 3: MLOps - CI/CD Pipelines",
    type: "single",
    scenario: "How can you securely pass sensitive database connection strings into an Azure ML pipeline job executed via GitHub Actions?",
    options: [
      "A) Store the connection string as a secret in Azure Key Vault, link the Key Vault to the Azure ML workspace, and reference the secret in Python using 'from azureml.core import Run; run.get_secret('my_db_secret')' or SDK v2 Key Vault client methods.",
      "B) Write the secret in plaintext in GitHub README.md.",
      "C) Email the secret to all users.",
      "D) Print the secret on console logs."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Store secrets in Key Vault and reference in Python via workspace secret retrieval methods. Explanation: Key Vault integration ensures secrets are injected directly into runtime memory without touching disk or logs."
  },
  {
    id: 243,
    domain: "Track 3: MLOps - CI/CD Pipelines",
    type: "single",
    scenario: "What is a 'Canary Deployment' in the context of MLOps model serving?",
    options: [
      "A) Routing a small, controlled percentage of live user requests (e.g., 5%) to a newly deployed model version to monitor real-world error rates and latency before gradually ramping up traffic to 100%.",
      "B) Deploying models to bird cages.",
      "C) Deleting all production databases.",
      "D) Turning off monitors at 5 PM."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Routing a small percentage of live traffic to a new model version to monitor error rates before full promotion. Explanation: Canary rollouts limit blast radius if an undetected model defect reaches production."
  },
  {
    id: 244,
    domain: "Track 3: MLOps - CI/CD Pipelines",
    type: "single",
    scenario: "When debugging a failed GitHub Actions workflow that executes 'az ml job create', where can you find the exact YAML validation or Azure authentication error?",
    options: [
      "A) In the GitHub Actions run logs under the specific workflow step execution output.",
      "B) In Windows Notepad.",
      "C) In the local recycle bin.",
      "D) On the computer keyboard."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) In the GitHub Actions run logs under the specific workflow step execution output. Explanation: CI/CD runners capture stdout and stderr streams for immediate pipeline troubleshooting."
  },
  {
    id: 245,
    domain: "Track 3: MLOps - CI/CD Pipelines",
    type: "single",
    scenario: "Why is it essential to tag Docker images with immutable version identifiers (e.g., commit sha or semantic tags like 'v1.2.0') rather than always using the 'latest' tag in MLOps CI/CD pipelines?",
    options: [
      "A) Because 'latest' is mutable; if a base dependency updates silently, deploying 'latest' could cause production endpoints to fail unpredictably, destroying reproducibility.",
      "B) Because 'latest' makes images 100 GB larger.",
      "C) Because Azure CLI refuses the word 'latest'.",
      "D) Because tags change font styles."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Because 'latest' is mutable; deploying 'latest' can cause unpredictable production failures. Explanation: Immutable tagging guarantees that rolling back a deployment restores the exact bitwise container image previously verified."
  },

  // ==========================================
  // Sub-topic 3: Model Governance & Gating (Q246-Q265)
  // ==========================================
  {
    id: 246,
    domain: "Track 3: MLOps - Governance & Gating",
    type: "single",
    scenario: "An enterprise financial institution requires that every credit scoring model deployed to production must have an immutable audit trail documenting who trained it, what data was used, what fairness checks were conducted, and who approved the release.",
    question: "Which Azure Machine Learning capability serves as the central system of record for this governance requirement?",
    options: [
      "A) Azure ML Model Registry combined with MLflow experiment lineage and Model Card / metadata properties.",
      "B) A sticky note on the refrigerator.",
      "C) A public chat room.",
      "D) A temporary text file on a laptop."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Azure ML Model Registry combined with MLflow experiment lineage and Model Card metadata. Explanation: The Model Registry automatically binds training runs, data assets, and evaluation logs into an auditable system of record."
  },
  {
    id: 247,
    domain: "Track 3: MLOps - Governance & Gating",
    type: "single",
    scenario: "What is a 'Model Card' (or Model Sheet) in AI governance?",
    options: [
      "A) A standardized documentation artifact attached to a registered model detailing its intended use cases, limitations, training data demographics, performance metrics across demographic subgroups, and ethical considerations.",
      "B) A plastic credit card used to pay for Azure.",
      "C) A birthday card sent to data scientists.",
      "D) A business card with a phone number."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) A standardized documentation artifact detailing intended use cases, limitations, demographics, and ethical considerations. Explanation: Model cards provide essential transparency for risk officers, regulators, and downstream software consumers."
  },
  {
    id: 248,
    domain: "Track 3: MLOps - Governance & Gating",
    type: "single",
    scenario: "You want to enforce a policy across your Azure tenant that prevents developers from creating Azure Machine Learning workspaces with public internet access enabled.",
    question: "Which Azure governance service allows you to define and enforce this rule across all subscriptions?",
    options: [
      "A) Azure Policy (using built-in or custom policy definitions for Azure Machine Learning).",
      "B) Microsoft Paint.",
      "C) Windows Firewall on a laptop.",
      "D) Excel spreadsheets."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Azure Policy. Explanation: Azure Policy enforces organizational standards and compliance rules at the Azure Resource Manager (ARM) control plane level."
  },
  {
    id: 249,
    domain: "Track 3: MLOps - Governance & Gating",
    type: "single",
    scenario: "In an automated CI/CD pipeline, what is an 'Automated Quality Gate'?",
    options: [
      "A) A programmatic script or pipeline step that evaluates model metrics (e.g., checking if accuracy >= 0.85 and latency <= 50ms) and automatically aborts the deployment if thresholds are violated.",
      "B) A physical metal gate in front of the office.",
      "C) A password prompt requiring 50 digits.",
      "D) An email sent to spam."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) A programmatic script that evaluates model metrics and automatically aborts deployment if thresholds are violated. Explanation: Quality gates remove human subjectivity and prevent regression defects from reaching production."
  },
  {
    id: 250,
    domain: "Track 3: MLOps - Governance & Gating",
    type: "single",
    scenario: "Why is 'Role-Based Access Control' (RBAC) separation between Data Scientists and MLOps Release Managers essential for model governance?",
    options: [
      "A) To ensure separation of duties: Data Scientists can experiment and register candidate models, but only Release Managers (or automated CI/CD service principals) have permissions to promote models to production endpoints.",
      "B) Because Azure charges extra if everyone has the same role.",
      "C) To prevent data scientists from logging into Azure.",
      "D) To make the portal look different."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) To ensure separation of duties between experimentation and production release. Explanation: Separation of duties is a fundamental security control required by ISO 27001 and SOC 2 compliance frameworks."
  },
  {
    id: 251,
    domain: "Track 3: MLOps - Governance & Gating",
    type: "multiple",
    scenario: "Which three metadata properties should always be logged with a registered model to ensure regulatory compliance and reproducibility? (Select three)",
    options: [
      "A) The Git commit hash of the source code that trained the model",
      "B) The URI and version of the training dataset asset",
      "C) The name and version of the runtime Docker environment / conda dependencies",
      "D) The favorite movie of the developer",
      "E) The weather outside during training"
    ],
    correctAnswer: [0, 1, 2],
    explanation: "Correct Answer: A, B, and C. Explanation: Capturing Code + Data + Environment metadata guarantees that any historical model can be perfectly reconstructed and audited."
  },
  {
    id: 252,
    domain: "Track 3: MLOps - Governance & Gating",
    type: "single",
    scenario: "When auditing an Azure ML workspace, where can security administrators view a log of every control-plane operation (e.g., who deleted a compute cluster or who modified an endpoint)?",
    options: [
      "A) Azure Activity Log (routed to Log Analytics or Azure Monitor).",
      "B) The developer's browser history.",
      "C) Windows Recycle Bin.",
      "D) Microsoft Word documents."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Azure Activity Log. Explanation: Azure Activity Logs capture all ARM control-plane read/write/delete events with timestamps and Entra ID user identities."
  },
  {
    id: 253,
    domain: "Track 3: MLOps - Governance & Gating",
    type: "single",
    scenario: "What is 'Model Signing' or 'Artifact Integrity Verification' in high-security MLOps supply chains?",
    options: [
      "A) Generating cryptographic hashes (e.g., SHA-256) or digital signatures for model weight files to verify that they have not been tampered with or corrupted between training and inference serving.",
      "B) Signing a paper certificate with a pen.",
      "C) Writing your name in the code comments.",
      "D) Printing the model on letterhead."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Generating cryptographic hashes or digital signatures for model weight files to verify against tampering. Explanation: Cryptographic integrity verification prevents model poisoning and supply chain attacks."
  },
  {
    id: 254,
    domain: "Track 3: MLOps - Governance & Gating",
    type: "single",
    scenario: "How can you enforce that all data assets created in Azure Machine Learning are encrypted at rest using customer-managed keys (CMK) stored in Azure Key Vault instead of Microsoft-managed default keys?",
    options: [
      "A) Configure the Azure ML workspace and its underlying Storage Account / Cosmos DB with Customer-Managed Keys (CMK) during provisioning using Azure Policy or ARM/Bicep parameters.",
      "B) Put a padlock on the computer monitor.",
      "C) Type passwords in capital letters.",
      "D) Delete all data after training."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Configure the workspace and storage with Customer-Managed Keys (CMK) during provisioning. Explanation: CMK encryption gives organizations absolute control over data encryption keys, allowing immediate revocation of cloud data access."
  },
  {
    id: 255,
    domain: "Track 3: MLOps - Governance & Gating",
    type: "single",
    scenario: "What is the purpose of implementing a 'Model Registry Lock' or read-only permission on production model tags?",
    options: [
      "A) To prevent accidental deletion or unauthorized overwriting of validated production model versions currently serving live customer traffic.",
      "B) To make the mouse cursor freeze.",
      "C) To increase internet speed.",
      "D) To turn off the database."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) To prevent accidental deletion or unauthorized overwriting of validated production model versions. Explanation: Resource locking protects mission-critical production assets from human error."
  },
  {
    id: 256,
    domain: "Track 3: MLOps - Governance & Gating",
    type: "single",
    scenario: "Why do regulatory frameworks require 'Explainability Reports' (e.g., SHAP/LIME feature importance summaries) to be archived alongside registered credit or hiring models?",
    options: [
      "A) To prove that the model's predictions are driven by legitimate business features and not biased by prohibited demographic attributes (race, gender, age).",
      "B) To make the PDF files look longer.",
      "C) Because computer screens require charts.",
      "D) To slow down the training job."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) To prove predictions are driven by legitimate business features and not biased by prohibited attributes. Explanation: Explainability artifacts provide evidentiary proof against algorithmic discrimination."
  },
  {
    id: 257,
    domain: "Track 3: MLOps - Governance & Gating",
    type: "single",
    scenario: "What happens if a data scientist attempts to register a model in Azure ML without specifying a model signature or input schema in an organization where strict MLOps schema policies are enforced?",
    options: [
      "A) The automated CI/CD linting or registration validation gate rejects the submission and returns an error detailing the missing signature requirement.",
      "B) The computer formats itself.",
      "C) The model turns into an image.",
      "D) The portal font turns red."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) The automated CI/CD linting or validation gate rejects the submission. Explanation: Automated linting enforces organizational engineering standards before bad artifacts enter the registry."
  },
  {
    id: 258,
    domain: "Track 3: MLOps - Governance & Gating",
    type: "single",
    scenario: "In an MLOps governance framework, what is an 'Exception Workflow'?",
    options: [
      "A) A documented, auditable process allowing emergency hotfixes or manual model overrides during critical production outages, requiring post-incident review and retroactive CI/CD backfilling.",
      "B) Ignoring all rules forever.",
      "C) Deleting the security logs.",
      "D) Turning off the firewall permanently."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) A documented, auditable process allowing emergency hotfixes requiring post-incident review. Explanation: Enterprise governance must accommodate critical outage recovery while maintaining audit integrity."
  },
  {
    id: 259,
    domain: "Track 3: MLOps - Governance & Gating",
    type: "single",
    scenario: "Why should an organization implement centralized logging of all inference requests and responses (payload logging) on production online endpoints?",
    options: [
      "A) To enable asynchronous monitoring for data drift, prediction drift, adversarial attacks, and auditing customer dispute claims.",
      "B) To fill up hard drives as fast as possible.",
      "C) To slow down network traffic.",
      "D) To make web pages colorful."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) To enable asynchronous monitoring for data drift, adversarial attacks, and auditing. Explanation: Inference payload logging fuels downstream continuous observability and retraining pipelines."
  },
  {
    id: 260,
    domain: "Track 3: MLOps - Governance & Gating",
    type: "single",
    scenario: "Which Azure service integrates with Azure Machine Learning to provide data cataloging, data classification, and end-to-end data governance across the enterprise?",
    options: [
      "A) Microsoft Purview",
      "B) Microsoft Word",
      "C) Azure Paint",
      "D) Windows Media Player"
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Microsoft Purview. Explanation: Purview maps enterprise data estates, automating data discovery, classification, and lineage tracking across Azure ML and data analytics stores."
  },
  {
    id: 261,
    domain: "Track 3: MLOps - Governance & Gating",
    type: "single",
    scenario: "What is 'Model Regression' in the context of MLOps quality gating?",
    options: [
      "A) When a newly trained candidate model exhibits lower predictive accuracy, higher latency, or worse fairness metrics than the older model currently running in production.",
      "B) When linear regression is used.",
      "C) When models train backwards.",
      "D) When the computer restarts."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) When a newly trained candidate model exhibits lower accuracy or worse latency than the production baseline. Explanation: Quality gates exist specifically to detect and block model regression from reaching production."
  },
  {
    id: 262,
    domain: "Track 3: MLOps - Governance & Gating",
    type: "single",
    scenario: "How does Azure ML enforce network isolation for compute clusters running third-party open-source Python packages during training?",
    options: [
      "A) By deploying compute clusters inside an Azure Virtual Network (VNet) without public outbound internet access, forcing package installations to route through a secure internal Azure Artifacts or private PyPI mirror.",
      "B) By unplugging the Ethernet cable.",
      "C) By deleting Python.",
      "D) By using a dial-up modem."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) By deploying compute inside a VNet without public outbound internet, routing through private PyPI mirrors. Explanation: VNet outbound isolation prevents data exfiltration and blocks unverified public package downloads."
  },
  {
    id: 263,
    domain: "Track 3: MLOps - Governance & Gating",
    type: "single",
    scenario: "What is the purpose of conducting a 'Fairness and Bias Audit' as a mandatory CI/CD quality gate for AI models affecting credit, housing, or employment?",
    options: [
      "A) To verify that disparity metrics across demographic subgroups (e.g., disparate impact ratio) remain within legally compliant thresholds before deployment.",
      "B) To make the charts look colorful.",
      "C) To check if the computer is fast.",
      "D) To count lines of code."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) To verify disparity metrics across demographic subgroups remain within compliant thresholds before deployment. Explanation: Ethical AI governance requires programmatic bias testing before releasing models that impact human livelihoods."
  },
  {
    id: 264,
    domain: "Track 3: MLOps - Governance & Gating",
    type: "single",
    scenario: "When managing secrets in MLOps CI/CD pipelines, what is the 'Zero Trust' principle regarding API keys and credentials?",
    options: [
      "A) Never trust static credentials; eliminate hardcoded secrets entirely by using short-lived Entra ID federated tokens, Managed Identities, and role-based access controls.",
      "B) Trust everyone on the internet.",
      "C) Write passwords on a whiteboard in the lobby.",
      "D) Email passwords to all employees."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Never trust static credentials; eliminate hardcoded secrets by using short-lived Entra ID federated tokens and Managed Identities. Explanation: Zero Trust security assumes breach and minimizes credential attack surface."
  },
  {
    id: 265,
    domain: "Track 3: MLOps - Governance & Gating",
    type: "single",
    scenario: "Why is an 'Immutable Model Registry' a non-negotiable requirement for ISO 42001 and AI ethics compliance?",
    options: [
      "A) Because immutability guarantees that once a model version is registered and certified, its underlying weight files and metadata can never be silently modified or tampered with by any user.",
      "B) Because immutable words sound impressive.",
      "C) Because Windows requires it.",
      "D) Because it makes computers run faster."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Because immutability guarantees certified model weights and metadata can never be silently modified or tampered with. Explanation: Immutability provides cryptographic assurance of artifact integrity for legal and ethical auditing."
  },

  // ==========================================
  // Sub-topic 4: Infrastructure as Code & Environment Consistency (Q266-Q285)
  // ==========================================
  {
    id: 266,
    domain: "Track 3: MLOps - IaC & Environments",
    type: "single",
    scenario: "You want to provision a complete Azure Machine Learning environment (Workspace, Key Vault, Storage Account, Application Insights, and Container Registry) using code. Which file format does Azure Bicep compile into before submitting to Azure Resource Manager?",
    options: [
      "A) ARM JSON Template (.json)",
      "B) Python script (.py)",
      "C) Word document (.docx)",
      "D) Excel spreadsheet (.xlsx)"
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) ARM JSON Template (.json). Explanation: Bicep is a domain-specific language (DSL) that transpiles directly into standard Azure Resource Manager JSON templates for execution."
  },
  {
    id: 267,
    domain: "Track 3: MLOps - IaC & Environments",
    type: "single",
    scenario: "In an Azure ML environment definition YAML file, what is the purpose of specifying a 'conda_file' alongside a Docker 'image'?",
    options: [
      "A) The Docker image provides the base OS and system libraries (e.g., Ubuntu + CUDA + Python), while the conda YAML specifies the exact Python package dependencies (e.g., scikit-learn=1.3.0, pandas=2.0.0) installed on top of the image.",
      "B) It makes the image print colorful logs.",
      "C) It deletes Linux.",
      "D) It converts Python to C++."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Docker image provides base OS/system libraries; conda YAML specifies exact Python package dependencies. Explanation: Combining base images with declarative conda files provides reproducible, modular environment management."
  },
  {
    id: 268,
    domain: "Track 3: MLOps - IaC & Environments",
    type: "single",
    scenario: "Why is 'pinning' package versions (e.g., specifying 'numpy==1.24.3' instead of just 'numpy') critical in MLOps environment definitions?",
    options: [
      "A) Unpinned packages pull the latest version at build time; an unexpected breaking change or deprecated function in a new release will cause training jobs or inference endpoints to crash unpredictably.",
      "B) Pinning makes files smaller.",
      "C) Unpinned packages cost more money in Azure.",
      "D) Pinning changes font colors."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Unpinned packages pull latest versions; breaking changes in new releases cause unpredictable crashes. Explanation: Version pinning is essential for deterministic builds and long-term reproducibility."
  },
  {
    id: 269,
    domain: "Track 3: MLOps - IaC & Environments",
    type: "single",
    scenario: "When Azure ML builds a custom Environment container image for the first time, where is the compiled Docker image stored and cached for future runs?",
    options: [
      "A) In the Azure Container Registry (ACR) linked to the Azure ML workspace.",
      "B) On a USB flash drive.",
      "C) In Azure SQL Database.",
      "D) On the developer's laptop desktop."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) In the Azure Container Registry (ACR) linked to the workspace. Explanation: Azure ML caches built Docker images in ACR; subsequent jobs reusing the same environment name/version pull the cached image instantly."
  },
  {
    id: 270,
    domain: "Track 3: MLOps - IaC & Environments",
    type: "single",
    scenario: "How does Azure ML handle environment caching when you submit 5 consecutive training jobs using the exact same registered Environment asset?",
    options: [
      "A) It skips the Docker build phase completely and launches container instances directly from the cached image in ACR, reducing job startup latency from minutes down to seconds.",
      "B) It rebuilds the Docker image from scratch 5 times, wasting 50 minutes.",
      "C) It crashes with an error.",
      "D) It deletes the workspace."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) It skips Docker build and launches directly from cached ACR image, reducing startup latency. Explanation: Environment caching optimizes compute utilization and accelerates iteration loops."
  },
  {
    id: 271,
    domain: "Track 3: MLOps - IaC & Environments",
    type: "multiple",
    scenario: "Which three methods can be used to define an Environment in Azure ML SDK v2? (Select three)",
    options: [
      "A) Reference a curated environment provided by Microsoft (e.g., 'azureml://registries/azureml/environments/sklearn-1.5/versions/1')",
      "B) Specify a base Docker image plus a conda YAML specification file",
      "C) Specify a custom build context containing a Dockerfile",
      "D) Upload a Microsoft Word document (.docx)",
      "E) Take a screenshot of your terminal"
    ],
    correctAnswer: [0, 1, 2],
    explanation: "Correct Answer: A, B, and C. Explanation: Azure ML supports curated registries, base image + conda definitions, and raw Dockerfiles to accommodate all engineering workflows."
  },
  {
    id: 272,
    domain: "Track 3: MLOps - IaC & Environments",
    type: "single",
    scenario: "What is an Azure ML 'Curated Environment'?",
    options: [
      "A) A pre-built, pre-tested, and optimized container image provided and maintained by Microsoft covering popular ML frameworks (PyTorch, TensorFlow, Scikit-Learn, Hugging Face), ready for immediate training or inference.",
      "B) An environment for growing plants.",
      "C) A Windows 95 desktop.",
      "D) An empty folder."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) A pre-built, pre-tested, and optimized container image provided by Microsoft covering popular ML frameworks. Explanation: Curated environments eliminate custom Dockerfile maintenance for standard AI workloads."
  },
  {
    id: 273,
    domain: "Track 3: MLOps - IaC & Environments",
    type: "single",
    scenario: "In an Infrastructure as Code (Bicep) deployment, how do you ensure that your Azure ML workspace is provisioned with System-Assigned Managed Identity enabled?",
    options: [
      "A) Add 'identity: { type: 'SystemAssigned' }' inside the Microsoft.MachineLearningServices/workspaces resource definition in Bicep.",
      "B) Write 'identity=true' on a piece of paper.",
      "C) Send an email to Azure support.",
      "D) Type passwords in console."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Add 'identity: { type: 'SystemAssigned' }' inside the resource definition in Bicep. Explanation: Declarative identity configuration ensures secure, keyless authentication is baked into infrastructure at inception."
  },
  {
    id: 274,
    domain: "Track 3: MLOps - IaC & Environments",
    type: "single",
    scenario: "Why is 'Configuration Drift' a major hazard when provisioning staging and production ML serving environments manually?",
    options: [
      "A) Manual changes made in one environment (e.g., tweaking a timeout setting or installing a patch in Staging) are easily forgotten and omitted in Production, causing models that passed testing in Staging to fail mysteriously in Production.",
      "B) Because manual clicks cost $100 each.",
      "C) Because computers prefer Bicep.",
      "D) Because manual environments delete themselves after 1 hour."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Manual changes in one environment are forgotten in another, causing tested models to fail mysteriously in production. Explanation: Infrastructure as Code eliminates configuration drift by enforcing identical declarative schemas across environments."
  },
  {
    id: 275,
    domain: "Track 3: MLOps - IaC & Environments",
    type: "single",
    scenario: "When deploying custom C++ or GPU-compiled libraries (such as custom CUDA kernels) in an Azure ML training job, which environment definition method is mandatory?",
    options: [
      "A) Providing a custom Dockerfile with multi-stage build instructions to compile the C++/CUDA code against specific NVIDIA base images.",
      "B) Using a simple text file.",
      "C) Writing code in Word.",
      "D) Using an Excel spreadsheet."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Providing a custom Dockerfile with multi-stage build instructions to compile C++/CUDA code. Explanation: Complex system-level compilations require full Dockerfile control over the underlying Linux OS and toolchains."
  },
  {
    id: 276,
    domain: "Track 3: MLOps - IaC & Environments",
    type: "single",
    scenario: "What Bicep resource type represents an Azure Machine Learning Compute Cluster?",
    options: [
      "A) Microsoft.MachineLearningServices/workspaces/computes",
      "B) Microsoft.Compute/virtualMachines",
      "C) Microsoft.Storage/storageAccounts",
      "D) Microsoft.Sql/servers"
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Microsoft.MachineLearningServices/workspaces/computes. Explanation: In ARM/Bicep hierarchy, compute targets are child resources provisioned under parent Machine Learning workspace resources."
  },
  {
    id: 277,
    domain: "Track 3: MLOps - IaC & Environments",
    type: "single",
    scenario: "How can you test whether a custom Dockerfile builds successfully before submitting an expensive 10-node GPU training job on Azure ML?",
    options: [
      "A) Test the Docker build locally on your laptop using 'docker build -t test-env .' or run a quick 1-node CPU test job on Azure ML Serverless compute.",
      "B) You cannot test; just guess and hope.",
      "C) Email the Dockerfile to Microsoft.",
      "D) Print the Dockerfile on paper."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Test the Docker build locally using 'docker build' or run a quick 1-node CPU test job. Explanation: Validating container builds locally or on inexpensive CPU compute prevents wasting expensive GPU cluster minutes on syntax errors."
  },
  {
    id: 278,
    domain: "Track 3: MLOps - IaC & Environments",
    type: "single",
    scenario: "Why should you avoid using root user permissions inside custom Docker containers deployed to Azure ML production endpoints?",
    options: [
      "A) Running container processes as root violates principle of least privilege and increases security vulnerability risk if an attacker exploits a remote code execution bug in an ML dependency.",
      "B) Because root makes containers run slower.",
      "C) Because root makes font sizes smaller.",
      "D) Because Azure deletes root containers immediately."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Running as root violates least privilege and increases vulnerability risk during remote code execution exploits. Explanation: Production container hardening requires creating and switching to non-root user accounts."
  },
  {
    id: 279,
    domain: "Track 3: MLOps - IaC & Environments",
    type: "single",
    scenario: "In Azure ML SDK v2, what command creates or updates a reusable cloud Environment asset from a local YAML specification file ('env.yml')?",
    options: [
      "A) ml_client.environments.create_or_update(load_environment('env.yml')) or az ml environment create -f env.yml",
      "B) az vm create",
      "C) docker push azureml",
      "D) git commit env.yml"
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) ml_client.environments.create_or_update(...) or az ml environment create -f env.yml. Explanation: Both Python SDK v2 and CLI v2 provide unified create_or_update semantics for publishing environment assets."
  },
  {
    id: 280,
    domain: "Track 3: MLOps - IaC & Environments",
    type: "single",
    scenario: "What happens during an Azure ML deployment if the Azure Container Registry (ACR) containing your custom inference environment image is accidentally deleted or its network access is blocked?",
    options: [
      "A) The endpoint provisioning fails with an 'ImagePullBackOff' or 'ErrImagePull' Kubernetes/container startup error because the serving cluster cannot download the required Docker image.",
      "B) Azure ML magically creates a new image from memory.",
      "C) The server runs without an operating system.",
      "D) The portal turns purple."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) The endpoint provisioning fails with an 'ImagePullBackOff' or 'ErrImagePull' error. Explanation: Serving infrastructure depends entirely on continuous read access to container registries during scaling and deployment."
  },
  {
    id: 281,
    domain: "Track 3: MLOps - IaC & Environments",
    type: "single",
    scenario: "Why is it best practice to store Infrastructure as Code (Bicep/ARM) scripts in the same Git repository (or a submodule) alongside your MLOps training and deployment code?",
    options: [
      "A) To ensure tight version synchronization between application code and its required cloud infrastructure, allowing atomic pull requests that update both model logic and compute quotas simultaneously.",
      "B) Because git refuses to store folders separately.",
      "C) To make files load slower.",
      "D) Because Azure requires all files in one folder."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) To ensure tight version synchronization between application code and required cloud infrastructure. Explanation: Co-locating IaC with application workflows enables atomic, full-stack environment promotion."
  },
  {
    id: 282,
    domain: "Track 3: MLOps - IaC & Environments",
    type: "single",
    scenario: "When defining a conda YAML dependency file for Azure ML, why should you explicitly include 'azureml-defaults' or 'azure-ai-ml' / 'azureml-inference-server-http' in the pip packages list for serving environments?",
    options: [
      "A) Because these packages contain the mandatory web server, logging framework, and scoring routing logic required by Azure ML to host HTTP inference endpoints.",
      "B) To make the file size larger.",
      "C) Because Python refuses to run without the word azure.",
      "D) To change the background color."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Because these packages contain the mandatory web server and scoring routing logic required by Azure ML. Explanation: Serving containers require Azure ML runtime packages to bind HTTP ports and invoke custom score.py scripts."
  },
  {
    id: 283,
    domain: "Track 3: MLOps - IaC & Environments",
    type: "single",
    scenario: "In a multi-region disaster recovery IaC architecture, how can Bicep templates dynamically deploy resources to whatever region the user specifies at runtime?",
    options: [
      "A) By defining a parameter 'param location string = resourceGroup().location' and referencing '${location}' across all resource definitions.",
      "B) By hardcoding 'eastus' everywhere.",
      "C) By printing a map.",
      "D) By deleting all regions."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) By defining a parameter 'param location string = resourceGroup().location' and referencing '${location}'. Explanation: Parameterizing location attributes in IaC enables multi-region deployment flexibility without code modification."
  },
  {
    id: 284,
    domain: "Track 3: MLOps - IaC & Environments",
    type: "single",
    scenario: "What is an Azure ML 'Environment Version'?",
    options: [
      "A) An immutable sequential number assigned whenever an environment definition is updated; jobs referencing 'my-env:1' will always use the exact Docker snapshot from version 1 even if 'my-env:2' is created later.",
      "B) The age of the computer in years.",
      "C) The version of Windows.",
      "D) A random number."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) An immutable sequential number assigned whenever an environment definition is updated. Explanation: Immutable environment versioning guarantees historical training jobs can be re-run years later with identical software stacks."
  },
  {
    id: 285,
    domain: "Track 3: MLOps - IaC & Environments",
    type: "single",
    scenario: "Which Azure service allows you to scan container images stored in your Azure Container Registry (ACR) for known Common Vulnerabilities and Exposures (CVEs) before deploying them to ML endpoints?",
    options: [
      "A) Microsoft Defender for Cloud (formerly Azure Security Center / Defender for Containers).",
      "B) Microsoft Excel.",
      "C) Windows Paint.",
      "D) Notepad++."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Microsoft Defender for Cloud (Defender for Containers). Explanation: Automated CVE vulnerability scanning ensures container images are free of security flaws before reaching production serving clusters."
  },

  // ==========================================
  // Sub-topic 5: Data Drift & Continuous Monitoring (Q286-Q305)
  // ==========================================
  {
    id: 286,
    domain: "Track 3: MLOps - Data Drift & Monitoring",
    type: "single",
    scenario: "Your production loan approval model was trained on historical customer salary data from 2019. Due to economic inflation in 2024, average applicant salaries have risen by 35%, causing the model to miscalculate credit risk.",
    question: "What ML phenomenon describes this change in incoming statistical feature distribution over time without a change in the underlying target definitions?",
    options: [
      "A) Data Drift (or Covariate Shift)",
      "B) Concept Drift",
      "C) Hardware Failure",
      "D) SQL Injection"
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Data Drift (or Covariate Shift). Explanation: Data drift occurs when the statistical distribution of independent input features P(X) changes over time compared to the historical training baseline."
  },
  {
    id: 287,
    domain: "Track 3: MLOps - Data Drift & Monitoring",
    type: "single",
    scenario: "In a fraud detection model, new organized crime tactics emerge that alter the fundamental relationship between transaction variables and actual fraud occurrence (i.e., what used to look like a normal transaction is now fraudulent).",
    question: "What type of drift does this represent?",
    options: [
      "A) Concept Drift (change in conditional probability P(Y|X) - the relationship between features and target labels)",
      "B) Data Drift only",
      "C) Network Latency",
      "D) Memory Leak"
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Concept Drift (change in conditional probability P(Y|X)). Explanation: Concept drift occurs when the true underlying relationship between input features and target outcomes evolves, invalidating learned decision boundaries."
  },
  {
    id: 288,
    domain: "Track 3: MLOps - Data Drift & Monitoring",
    type: "single",
    scenario: "Which two statistical metrics are most commonly calculated by Azure ML Data Drift monitors to quantify the distance between historical baseline feature distributions and live inference data?",
    options: [
      "A) Population Stability Index (PSI) and Wasserstein Distance (Earth Mover's Distance), or Jensen-Shannon Divergence.",
      "B) Body Mass Index (BMI) and Speed of Light.",
      "C) Pythagorean Theorem and Fibonacci sequence.",
      "D) RGB Color Codes."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Population Stability Index (PSI) and Wasserstein Distance, or Jensen-Shannon Divergence. Explanation: PSI and Wasserstein distance provide robust quantitative scores indicating how severely a distribution has shifted."
  },
  {
    id: 289,
    domain: "Track 3: MLOps - Data Drift & Monitoring",
    type: "single",
    scenario: "To configure automated Data Drift monitoring in Azure Machine Learning Studio, what two data assets must you supply to the monitor?",
    options: [
      "A) A Baseline Dataset (typically the historical training data asset) and a Target Dataset (the live production inference payload log asset collected from online/batch endpoints).",
      "B) A Word document and an Excel file.",
      "C) Two blank text files.",
      "D) An MP3 audio file and an image."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) A Baseline Dataset (historical training data) and a Target Dataset (live production inference logs). Explanation: Drift detection mathematically compares the distribution of live inference payloads against the established training baseline."
  },
  {
    id: 290,
    domain: "Track 3: MLOps - Data Drift & Monitoring",
    type: "single",
    scenario: "When an Azure ML Data Drift monitor detects that the Population Stability Index (PSI) has exceeded the critical threshold of 0.25, what automated action should be triggered via Azure Event Grid or Azure Monitor Alert rules?",
    options: [
      "A) Trigger an Azure Logic App, Azure Function, or webhook that automatically initiates an MLOps Continuous Training (CT) pipeline in Azure DevOps / GitHub Actions to retrain the model on fresh data.",
      "B) Delete the production database.",
      "C) Turn off all servers.",
      "D) Print a warning on paper."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Trigger an automated workflow that initiates an MLOps Continuous Training (CT) pipeline to retrain the model. Explanation: Event-driven retraining closes the MLOps automation loop, resolving drift autonomously."
  },
  {
    id: 291,
    domain: "Track 3: MLOps - Data Drift & Monitoring",
    type: "single",
    scenario: "What is 'Model Performance Monitoring' (or Prediction Drift Monitoring) in Azure ML?",
    options: [
      "A) Tracking changes in the distribution of the model's output prediction values over time (e.g., noticing that a classifier that historically predicted 50% positive is suddenly predicting 95% positive), even before ground-truth labels arrive.",
      "B) Checking if the CPU fan is spinning.",
      "C) Counting how many letters are in the model name.",
      "D) Watching a video."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Tracking changes in the distribution of model output prediction values over time. Explanation: Prediction drift serves as an immediate early-warning indicator of model degradation when ground-truth labels are delayed."
  },
  {
    id: 292,
    domain: "Track 3: MLOps - Data Drift & Monitoring",
    type: "single",
    scenario: "Why is 'Ground Truth Label Delay' (or feedback loop lag) a major operational challenge when monitoring real-world AI model accuracy?",
    options: [
      "A) In many domains (like credit defaults or fraud adjudication), finding out whether a prediction was actually correct takes weeks or months; therefore, organizations must rely on unsupervised Data Drift and Prediction Drift as proxy metrics in the interim.",
      "B) Because labels cost $1,000 each.",
      "C) Because computers cannot read labels.",
      "D) Because labels make files heavy."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Ground truth verification often takes weeks/months; organizations must rely on unsupervised Data/Prediction drift as proxy metrics. Explanation: Understanding feedback loop latency is critical for designing effective production observability strategies."
  },
  {
    id: 293,
    domain: "Track 3: MLOps - Data Drift & Monitoring",
    type: "single",
    scenario: "How can you collect live input request payloads and output predictions from an Azure ML Managed Online Endpoint without adding performance overhead to your custom 'score.py' script?",
    options: [
      "A) Enable built-in 'Model Data Collector' (or Payload Logging / Inference Data Collection) in the endpoint deployment YAML, which automatically asynchronously logs request/response JSON payloads directly into Azure Blob storage.",
      "B) Write a print statement for every row.",
      "C) Email every request to yourself.",
      "D) Take a photo of the monitor."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Enable built-in 'Model Data Collector' in deployment YAML, which asynchronously logs payloads to Blob storage. Explanation: Asynchronous data collection captures production telemetry with zero impact on real-time serving latency."
  },
  {
    id: 294,
    domain: "Track 3: MLOps - Data Drift & Monitoring",
    type: "single",
    scenario: "When analyzing data drift in Azure ML Studio, what does a 'Feature Importance for Drift' chart reveal?",
    options: [
      "A) It identifies exactly WHICH specific features (e.g., 'interest_rate' or 'user_age') are responsible for driving the overall statistical shift between baseline and target datasets.",
      "B) It shows the favorite colors of data scientists.",
      "C) It displays computer battery life.",
      "D) It counts words in text."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) It identifies exactly WHICH specific features are responsible for driving the overall statistical shift. Explanation: Feature-level drift attribution allows data scientists to pinpoint root causes and fix specific data pipelines or feature engineering rules."
  },
  {
    id: 295,
    domain: "Track 3: MLOps - Data Drift & Monitoring",
    type: "single",
    scenario: "What is 'Data Quality Monitoring' in Azure Machine Learning?",
    options: [
      "A) Monitoring incoming live inference payloads for data integrity violations, such as spikes in missing/null values, out-of-bounds numerical outliers, or type mismatches compared to the training schema.",
      "B) Checking if the monitor screen is clean.",
      "C) Verifying that cables are plugged in.",
      "D) Checking if Windows is updated."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Monitoring live inference payloads for data integrity violations (null spikes, outliers, type mismatches). Explanation: Data quality monitors catch upstream data engineering failures before they cause silent model scoring errors."
  },
  {
    id: 296,
    domain: "Track 3: MLOps - Data Drift & Monitoring",
    type: "single",
    scenario: "If an automated retraining pipeline is triggered by a Data Drift alarm, why must the newly trained model pass automated evaluation gates before replacing the production model?",
    options: [
      "A) Because drift does not guarantee that retraining on fresh data will produce a better model; if the fresh data is noisy or corrupted, the retrained model might perform worse than the baseline.",
      "B) Because models love taking tests.",
      "C) Because Azure requires 10 tests per day.",
      "D) Because engineers need something to do."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Because drift does not guarantee fresh data produces a better model; automated evaluation prevents deploying degraded retrained models. Explanation: Automated retraining without strict quality gating is a dangerous anti-pattern."
  },
  {
    id: 297,
    domain: "Track 3: MLOps - Data Drift & Monitoring",
    type: "single",
    scenario: "Which KQL (Kusto Query Language) table in Azure Log Analytics stores the custom application logs and metric traces emitted by Azure Machine Learning endpoints?",
    options: [
      "A) AmlOnlineEndpointConsoleLog and AmlOnlineEndpointTrafficLog (or AppTraces / AppMetrics in Application Insights).",
      "B) WindowsEventLog",
      "C) SecurityAlert",
      "D) Heartbeat"
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) AmlOnlineEndpointConsoleLog and AmlOnlineEndpointTrafficLog. Explanation: Azure ML natively exports endpoint container console streams and traffic access logs into dedicated Log Analytics tables for KQL querying."
  },
  {
    id: 298,
    domain: "Track 3: MLOps - Data Drift & Monitoring",
    type: "single",
    scenario: "What is the recommended frequency for scheduling automated Data Drift evaluation jobs in production?",
    options: [
      "A) Daily or weekly, depending on the business velocity and traffic volume of the application (e.g., daily for high-frequency retail/finance, weekly/monthly for slow-moving demographic models).",
      "B) Every millisecond.",
      "C) Once every 50 years.",
      "D) Never."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Daily or weekly, depending on business velocity and traffic volume. Explanation: Matching monitoring schedule frequency to business domain dynamics balances cloud compute costs with timely drift detection."
  },
  {
    id: 299,
    domain: "Track 3: MLOps - Data Drift & Monitoring",
    type: "single",
    scenario: "When investigating an alert from Azure Monitor indicating a sudden spike in HTTP 500 errors on an ML endpoint, what step should an MLOps engineer take first?",
    options: [
      "A) Query the AmlOnlineEndpointConsoleLog table in Log Analytics or check Application Insights exception stack traces to isolate whether the failure is caused by malformed input JSON or a bug in 'score.py'.",
      "B) Delete the entire Azure subscription immediately.",
      "C) Unplug the server power cable.",
      "D) Go home for the weekend."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Query AmlOnlineEndpointConsoleLog or check Application Insights exception stack traces to isolate root cause. Explanation: Structured log querying via KQL is the primary diagnostic technique for rapid incident triage."
  },
  {
    id: 300,
    domain: "Track 3: MLOps - Data Drift & Monitoring",
    type: "single",
    scenario: "What is 'Feature Attribution Drift' (or SHAP value drift)?",
    options: [
      "A) Monitoring whether the relative importance of features driving model predictions changes over time (e.g., noticing that 'credit_score' historically drove 80% of loan decisions, but suddenly 'zip_code' is driving 90% of decisions).",
      "B) Checking if the computer screen is flickering.",
      "C) Counting letters in feature names.",
      "D) Measuring Wi-Fi speed."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Monitoring whether the relative importance of features driving model predictions changes over time. Explanation: Feature attribution drift detects subtle changes in model decision-making behavior even when overall data distributions appear stable."
  },
  {
    id: 301,
    domain: "Track 3: MLOps - Data Drift & Monitoring",
    type: "single",
    scenario: "How does Azure ML prevent Data Drift monitors from generating false-positive alarms caused by small sample sizes during low-traffic periods (e.g., weekends)?",
    options: [
      "A) By allowing administrators to configure a minimum sample size threshold (e.g., requiring at least 500 requests per day) before statistical drift calculations are executed.",
      "B) By turning off monitors on weekends.",
      "C) By deleting low-traffic data.",
      "D) By sending alarms every hour regardless."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) By allowing administrators to configure a minimum sample size threshold before statistical calculations execute. Explanation: Sample size gating prevents statistical noise in small cohorts from triggering unnecessary retraining alerts."
  },
  {
    id: 302,
    domain: "Track 3: MLOps - Data Drift & Monitoring",
    type: "single",
    scenario: "Why is an integrated 'Feedback Loop' essential for MLOps Level 4 maturity?",
    options: [
      "A) It systematically ingests downstream ground-truth outcomes (e.g., whether a borrower actually defaulted or whether a customer clicked a recommendation), joining them back to historical inference payloads to calculate true ongoing production accuracy.",
      "B) It makes a ringing sound on the computer.",
      "C) It sends emails to Microsoft.",
      "D) It deletes old data."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) It systematically ingests downstream ground-truth outcomes, joining them back to historical inference payloads to calculate true accuracy. Explanation: Closing the feedback loop converts unsupervised proxy monitoring into supervised empirical accuracy tracking."
  },
  {
    id: 303,
    domain: "Track 3: MLOps - Data Drift & Monitoring",
    type: "single",
    scenario: "In an enterprise MLOps dashboard, what is the difference between system-level metrics and model-level metrics?",
    options: [
      "A) System metrics track infrastructure health (CPU/GPU utilization, memory, HTTP latency, throughput, error rates); model metrics track statistical AI behavior (data drift, prediction distribution, accuracy, fairness, SHAP values).",
      "B) System metrics are for Windows; model metrics are for Linux.",
      "C) System metrics are paid; model metrics are free.",
      "D) There is no difference."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) System metrics track infrastructure health; model metrics track statistical AI behavior. Explanation: Full-stack MLOps observability requires correlating infrastructure performance with statistical AI health."
  },
  {
    id: 304,
    domain: "Track 3: MLOps - Data Drift & Monitoring",
    type: "single",
    scenario: "When setting up an alert rule in Azure Monitor for model drift, which action group type allows you to automatically open an incident ticket in ServiceNow or Jira?",
    options: [
      "A) Webhook / ITSM (IT Service Management) integration or Azure Logic App action.",
      "B) Printing a fax.",
      "C) Sending a postcard via postal mail.",
      "D) Shouting in the office."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Webhook / ITSM integration or Azure Logic App action. Explanation: Integrating cloud alerts into enterprise ITSM workflows ensures drift incidents are tracked and remediated systematically."
  },
  {
    id: 305,
    domain: "Track 3: MLOps - Data Drift & Monitoring",
    type: "single",
    scenario: "Congratulations! You have completed all 100 questions in Track 3 (MLOps & CI/CD Governance - mslearn-mlops). What is the golden rule of enterprise MLOps?",
    options: [
      "A) That machine learning is only about math formulas.",
      "B) That MLOps is an engineering discipline combining CI/CD automation, declarative Infrastructure as Code, rigorous quality gating, immutable registries, and continuous drift observability to ensure AI systems remain reliable, auditable, and compliant in production.",
      "C) That manual deployment is always better.",
      "D) That testing is unnecessary."
    ],
    correctAnswer: [1],
    explanation: "Correct Answer: B) That MLOps is an engineering discipline combining CI/CD automation, declarative IaC, quality gating, immutable registries, and continuous drift observability. Explanation: You have mastered MLOps CI/CD Governance! Next, we dive into Azure Machine Learning Pipelines and Component Orchestration!"
  }
];
