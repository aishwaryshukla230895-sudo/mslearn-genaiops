window.QUIZ_DATA_PIPELINE = [
  // ==========================================
  // TRACK 4: Azure ML Pipelines & Orchestration - pipeline-building (Questions 306-405)
  // Sub-topic 1: Pipeline & Component Architecture (Q306-Q325)
  // ==========================================
  {
    id: 306,
    domain: "Track 4: ML Pipelines - Architecture",
    type: "single",
    scenario: "An engineering team has been executing an end-to-end machine learning workflow (data extraction, cleaning, feature engineering, model training, evaluation, and registration) inside a single 3,000-line monolithic Python script running on a single compute instance.",
    question: "Why is refactoring this script into a modular Azure Machine Learning Pipeline architectural best practice?",
    options: [
      "A) Pipelines decompose monolithic workflows into independent, reusable, and containerized step components (Directed Acyclic Graph / DAG), enabling step-level caching, parallel execution, and independent compute target sizing across steps.",
      "B) Pipelines run 100 times faster on CPU.",
      "C) Monolithic scripts cannot be saved in Git.",
      "D) Pipelines do not require Python."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Pipelines decompose monolithic workflows into independent, reusable components (DAG), enabling step-level caching, parallel execution, and independent compute sizing. Explanation: Modular pipeline architectures improve maintainability, reduce compute costs via caching, and allow teams to collaborate on isolated components."
  },
  {
    id: 307,
    domain: "Track 4: ML Pipelines - Architecture",
    type: "single",
    scenario: "What is an Azure Machine Learning 'Component' in SDK v2?",
    options: [
      "A) A self-contained, reusable building block of an ML pipeline that encapsulates a specific script (e.g., data cleaning), its required Docker environment dependencies, and its input/output interface schema.",
      "B) A physical CPU chip.",
      "C) A Microsoft Excel add-in.",
      "D) A Windows desktop icon."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) A self-contained, reusable building block encapsulating a script, environment dependencies, and input/output schema. Explanation: Components act like functions in a programming language—they take defined inputs, execute logic inside isolated containers, and emit defined outputs."
  },
  {
    id: 308,
    domain: "Track 4: ML Pipelines - Architecture",
    type: "single",
    scenario: "When designing an Azure ML Pipeline, why might you assign a lightweight CPU cluster (e.g., Standard_D4_v3) to Step 1 (Data Preprocessing) and an expensive multi-GPU cluster (e.g., Standard_NC24s_v3) to Step 2 (Deep Learning Training)?",
    options: [
      "A) Because Azure ML Pipelines allow configuring independent compute targets and VM SKUs for each individual component step in the DAG, optimizing cloud FinOps spend by only using GPUs when computationally required.",
      "B) Because pipelines refuse to run on a single cluster.",
      "C) Because CPU clusters cannot communicate with GPU clusters.",
      "D) To make the pipeline diagram look colorful."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Because pipelines allow configuring independent compute targets for each component step, optimizing cloud FinOps spend. Explanation: Step-level compute granularity prevents paying for expensive GPU nodes during I/O-bound data cleaning phases."
  },
  {
    id: 309,
    domain: "Track 4: ML Pipelines - Architecture",
    type: "single",
    scenario: "What mathematical graph structure describes the execution flow of an Azure Machine Learning Pipeline?",
    options: [
      "A) Directed Acyclic Graph (DAG) - steps execute in a unidirectional dependency order without infinite circular loops.",
      "B) Undirected Cyclic Graph.",
      "C) Binary Search Tree.",
      "D) Fibonacci Spiral."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Directed Acyclic Graph (DAG). Explanation: DAG execution guarantees that downstream steps wait for upstream dependencies to complete without falling into circular deadlock loops."
  },
  {
    id: 310,
    domain: "Track 4: ML Pipelines - Architecture",
    type: "single",
    scenario: "How does Azure Machine Learning determine the execution order of steps in a pipeline DAG when you do not explicitly call 'step2.after(step1)'?",
    options: [
      "A) By analyzing data dependency binding: if Step 2's input parameter is assigned to Step 1's output artifact (e.g., step2(input_data=step1.outputs.cleaned_data)), Azure ML automatically infers that Step 1 must complete before Step 2 starts.",
      "B) By alphabetical order of step names.",
      "C) By random chance.",
      "D) All steps execute simultaneously."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) By analyzing data dependency binding between step outputs and inputs. Explanation: Implicit data dependency resolution simplifies pipeline authoring and eliminates manual orchestration wiring."
  },
  {
    id: 311,
    domain: "Track 4: ML Pipelines - Architecture",
    type: "single",
    scenario: "You have a pipeline with 4 independent preprocessing steps that do not share any data dependencies, followed by a final aggregation step that consumes the outputs of all 4 steps. How will Azure ML execute this pipeline on a compute cluster with sufficient nodes?",
    options: [
      "A) The 4 independent preprocessing steps will execute concurrently in parallel across multiple compute cluster nodes, and the final aggregation step will start only after all 4 parallel steps finish.",
      "B) All 5 steps execute sequentially one by one, taking 4 times longer.",
      "C) The aggregation step runs first before preprocessing.",
      "D) The pipeline crashes with a concurrency error."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) The 4 independent steps execute concurrently in parallel across nodes, followed by the aggregation step. Explanation: DAG orchestration maximizes cluster throughput by automatically parallelizing independent branches."
  },
  {
    id: 312,
    domain: "Track 4: ML Pipelines - Architecture",
    type: "single",
    scenario: "What is the primary operational difference between an Azure Machine Learning Pipeline and an Azure Data Factory (ADF) pipeline?",
    options: [
      "A) ADF is an enterprise ETL/ELT data integration service designed for orchestrating data movement across heterogeneous databases; Azure ML Pipelines are specialized for machine learning workflows, managing containerized Python training scripts, GPU compute, and model registries.",
      "B) ADF is for Linux; Azure ML is for Windows.",
      "C) ADF cannot move data.",
      "D) There is no difference."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) ADF is an ETL/ELT data integration service; Azure ML Pipelines specialize in containerized ML training, GPU compute, and model registries. Explanation: Enterprise architectures often use ADF to ingest data into ADLS Gen2, which then triggers Azure ML Pipelines for model training."
  },
  {
    id: 313,
    domain: "Track 4: ML Pipelines - Architecture",
    type: "single",
    scenario: "In the 'pipeline-building' repository architecture, why are pipeline components stored in a centralized component library or Azure ML Shared Registry?",
    options: [
      "A) To enable cross-team reusability; different data science teams across the organization can plug the same standardized 'data-anonymization' or 'model-evaluation' component into their custom pipelines without rewriting or maintaining duplicate code.",
      "B) Because components cannot be saved locally.",
      "C) To make the portal look cleaner.",
      "D) Because Azure charges less money for shared files."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) To enable cross-team reusability across standardized components without rewriting duplicate code. Explanation: Shared component libraries enforce organizational engineering standards and accelerate AI development velocity."
  },
  {
    id: 314,
    domain: "Track 4: ML Pipelines - Architecture",
    type: "multiple",
    scenario: "Which of the following are valid component types supported in Azure ML SDK v2? (Select three)",
    options: [
      "A) command component (executes a script/command inside a container)",
      "B) parallel component (executes batch scoring across distributed nodes)",
      "C) pipeline component (encapsulates a sub-pipeline DAG as a reusable building block)",
      "D) excel macro component",
      "E) windows powerpoint component"
    ],
    correctAnswer: [0, 1, 2],
    explanation: "Correct Answer: A, B, and C. Explanation: Azure ML SDK v2 supports command components, parallel components for batch processing, and hierarchical pipeline components."
  },
  {
    id: 315,
    domain: "Track 4: ML Pipelines - Architecture",
    type: "single",
    scenario: "What happens when an Azure ML Pipeline job is cancelled by an administrator while Step 3 of a 5-step DAG is currently running?",
    options: [
      "A) The running container for Step 3 is cleanly terminated, downstream Steps 4 and 5 are marked as 'Canceled' and never execute, but the completed artifacts and logs from Steps 1 and 2 remain intact in blob storage.",
      "B) All completed work from Steps 1 and 2 is permanently erased from hard drives.",
      "C) The entire Azure storage account is formatted.",
      "D) The compute cluster deletes itself."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Running step is terminated, downstream steps are cancelled, but completed artifacts from upstream steps remain intact. Explanation: Pipeline step atomicity ensures intermediate data assets are preserved for debugging and caching."
  },
  {
    id: 316,
    domain: "Track 4: ML Pipelines - Architecture",
    type: "single",
    scenario: "Why should you avoid writing temporary training data or intermediate feature files directly to the local root OS disk ('/root' or 'C:\') of a compute node during a pipeline step?",
    options: [
      "A) Because compute cluster nodes are ephemeral containers; when the step completes, the container is destroyed and any local OS disk data is lost forever, breaking downstream step dependencies.",
      "B) Because OS disks are too small.",
      "C) Because Linux forbids writing files.",
      "D) Because Python cannot read root disks."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Because compute nodes are ephemeral containers; local OS disk data is lost when the step finishes. Explanation: All intermediate data exchanged between pipeline steps must be routed through mounted cloud storage outputs."
  },
  {
    id: 317,
    domain: "Track 4: ML Pipelines - Architecture",
    type: "single",
    scenario: "In an enterprise MLOps architecture, how does an Azure ML Pipeline interact with MLflow experiment tracking?",
    options: [
      "A) The entire pipeline execution is tracked as a parent MLflow experiment run, and each individual component step in the DAG is automatically recorded as a child run with its own isolated logs, metrics, and parameters.",
      "B) Pipelines cannot use MLflow.",
      "C) MLflow deletes pipeline logs.",
      "D) Pipelines only log to Excel."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) The entire pipeline is tracked as a parent MLflow run, and each component step is recorded as a child run. Explanation: Parent-child run hierarchy provides granular step-level observability within unified pipeline dashboards."
  },
  {
    id: 318,
    domain: "Track 4: ML Pipelines - Architecture",
    type: "single",
    scenario: "What is a 'Dynamic Pipeline' (or control flow pipeline) in Azure ML?",
    options: [
      "A) A pipeline architecture where the execution graph can conditionally branch or loop based on runtime outputs (e.g., executing an 'Hyperparameter Sweep' component only if initial baseline accuracy is below 0.80).",
      "B) A pipeline that changes font colors dynamically.",
      "C) A pipeline that runs without electricity.",
      "D) A pipeline that prints Word documents."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) A pipeline architecture where the execution graph can conditionally branch or loop based on runtime outputs. Explanation: Control flow support enables intelligent, data-driven workflow routing."
  },
  {
    id: 319,
    domain: "Track 4: ML Pipelines - Architecture",
    type: "single",
    scenario: "Why is 'Component Versioning' critical when managing pipeline workflows across multiple development teams?",
    options: [
      "A) Immutably versioning components (e.g., 'data_cleaner:1.0.2') prevents an upstream team from introducing breaking changes into a shared component that would silently crash production pipelines owned by downstream teams.",
      "B) Because version numbers make files load faster.",
      "C) Because Azure requires integer names.",
      "D) To change the color of the portal."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Immutably versioning components prevents upstream teams from introducing breaking changes that crash downstream pipelines. Explanation: Component versioning enforces strict contract stability across enterprise dependencies."
  },
  {
    id: 320,
    domain: "Track 4: ML Pipelines - Architecture",
    type: "single",
    scenario: "How can you view the visual DAG graph representation of an executing or completed pipeline job in Azure ML Studio?",
    options: [
      "A) Navigate to the 'Jobs' tab, select the pipeline job name, and view the interactive graphical DAG designer on the 'Overview' or 'Graph' tab, which color-codes step statuses (Running, Completed, Failed, Cached).",
      "B) Open Microsoft Paint.",
      "C) Read a text file in Notepad.",
      "D) Check Windows Task Manager."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Navigate to 'Jobs', select the pipeline name, and view the interactive graphical DAG designer on the 'Overview' tab. Explanation: Studio's visual DAG interface simplifies monitoring complex multi-step execution dependencies."
  },
  {
    id: 321,
    domain: "Track 4: ML Pipelines - Architecture",
    type: "single",
    scenario: "When designing a secure Azure ML Pipeline, how should component steps authenticate against external Azure SQL databases or Key Vaults without hardcoding credentials in component YAML files?",
    options: [
      "A) Configure the pipeline job compute target with a User-Assigned or System-Assigned Managed Identity and use DefaultAzureCredential() inside the component Python script.",
      "B) Write passwords in plaintext inside the Dockerfile.",
      "C) Email passwords to the cluster.",
      "D) Disable authentication."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Configure the compute target with Managed Identity and use DefaultAzureCredential() inside component scripts. Explanation: Managed Identities extend keyless Zero Trust authentication to individual pipeline step containers."
  },
  {
    id: 322,
    domain: "Track 4: ML Pipelines - Architecture",
    type: "single",
    scenario: "What is the operational purpose of defining a 'pipeline component' (hierarchical pipeline)?",
    options: [
      "A) To encapsulate an entire multi-step sub-workflow (e.g., an end-to-end 'Data Ingestion & Quality Validation' DAG) into a single logical component that can be nested inside larger parent pipelines.",
      "B) To make computer screens smaller.",
      "C) To delete old files.",
      "D) To convert Python into SQL."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) To encapsulate an entire multi-step sub-workflow into a single logical component nested inside parent pipelines. Explanation: Hierarchical composition manages complexity in massive enterprise AI systems."
  },
  {
    id: 323,
    domain: "Track 4: ML Pipelines - Architecture",
    type: "single",
    scenario: "In an MLOps retraining pipeline, what is the best practice for handling model registration at the conclusion of the DAG?",
    options: [
      "A) Include a dedicated final component step ('register_model') that receives evaluation metrics and model artifacts from upstream steps, comparing candidate performance against production baselines before calling MLClient registration methods.",
      "B) Register models randomly at the beginning of the pipeline.",
      "C) Never register models.",
      "D) Register models on local laptops."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Include a dedicated final component step that receives evaluation metrics and compares candidate performance before registration. Explanation: Isolating registration into a dedicated gating step ensures clean governance and auditability."
  },
  {
    id: 324,
    domain: "Track 4: ML Pipelines - Architecture",
    type: "single",
    scenario: "Why is Azure ML Pipeline execution resilient against transient infrastructure node failures (such as spot VM evictions)?",
    options: [
      "A) If a compute node running a specific step is evicted or crashes, Azure ML automatically requeues and re-runs ONLY that specific failed step on a new node without re-running previously completed upstream steps.",
      "B) Because Azure VMs never fail.",
      "C) Because pipelines run offline.",
      "D) Because spot VMs cannot be evicted."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) If a node crashes, Azure ML automatically requeues and re-runs ONLY that specific failed step without re-running completed upstream steps. Explanation: Step-level fault tolerance makes pipelines ideal for running on low-cost spot VMs."
  },
  {
    id: 325,
    domain: "Track 4: ML Pipelines - Architecture",
    type: "single",
    scenario: "Which CLI v2 command validates the YAML syntax and resource references of an Azure ML pipeline job without actually submitting it for cloud execution?",
    options: [
      "A) az ml job validate -f pipeline_job.yml --resource-group my-rg --workspace-name my-ws",
      "B) az ml check-syntax pipeline_job.yml",
      "C) python validate.py",
      "D) ml-cli test pipeline"
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) az ml job validate -f pipeline_job.yml ... Explanation: The 'job validate' command checks YAML syntax, datastore resolution, and compute target availability pre-flight."
  },

  // ==========================================
  // Sub-topic 2: Python SDK v2 Decorators (@command, @pipeline) (Q326-Q345)
  // ==========================================
  {
    id: 326,
    domain: "Track 4: ML Pipelines - SDK v2 Decorators",
    type: "single",
    scenario: "You are authoring a modular pipeline using Azure ML SDK v2 in Python ('azure-ai-ml'). You want to convert a standard Python function that cleans raw data into an Azure ML component without writing raw YAML files.",
    question: "Which Python decorator should you place above your function definition?",
    options: [
      "A) @command(name='clean_data', environment='azureml:curated-sklearn:1', inputs={...}, outputs={...})",
      "B) @azureml_component",
      "C) @pipeline_step",
      "D) @docker_container"
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) @command(name='clean_data', environment='azureml:curated-sklearn:1', ...). Explanation: The @command decorator in SDK v2 transforms a Python function into a reusable containerized component specification."
  },
  {
    id: 327,
    domain: "Track 4: ML Pipelines - SDK v2 Decorators",
    type: "single",
    scenario: "When defining a pipeline function that connects multiple component steps together in SDK v2, which decorator is required above the orchestration function?",
    options: [
      "A) @pipeline(name='end_to_end_retraining_pipeline', description='Orchestrates cleaning, training, and evaluation')",
      "B) @orchestrator",
      "C) @dag_workflow",
      "D) @main_job"
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) @pipeline(name='end_to_end_retraining_pipeline', ...). Explanation: The @pipeline decorator constructs the Directed Acyclic Graph (DAG) by evaluating the data flow between internal component calls."
  },
  {
    id: 328,
    domain: "Track 4: ML Pipelines - SDK v2 Decorators",
    type: "single",
    scenario: "Inside an `@command` component function signature, how do you type-hint an input parameter that expects a directory of CSV files stored in cloud storage?",
    options: [
      "A) def clean_data(raw_data: Input(type='uri_folder'), threshold: float = 0.5):",
      "B) def clean_data(raw_data: str, threshold: int):",
      "C) def clean_data(raw_data: list, threshold: bool):",
      "D) def clean_data(raw_data: dict):"
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) def clean_data(raw_data: Input(type='uri_folder'), threshold: float = 0.5):. Explanation: SDK v2 uses Input(type='uri_folder') and Input(type='uri_file') type hints to bind cloud storage paths to container execution."
  },
  {
    id: 329,
    domain: "Track 4: ML Pipelines - SDK v2 Decorators",
    type: "single",
    scenario: "How do you specify where a component function should write its output artifacts (e.g., cleaned training parquet files) inside an `@command` signature?",
    options: [
      "A) By defining an output parameter with type hint: cleaned_data: Output(type='uri_folder') or Output(type='uri_file').",
      "B) By writing to 'C:/temp/output'.",
      "C) By printing to stdout.",
      "D) By sending an email attachment."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) By defining an output parameter with type hint: cleaned_data: Output(type='uri_folder'). Explanation: Output() type hints direct Azure ML to mount or upload the target directory into cloud blob storage automatically upon step completion."
  },
  {
    id: 330,
    domain: "Track 4: ML Pipelines - SDK v2 Decorators",
    type: "single",
    scenario: "You want to register a function decorated with `@command` into your workspace's Component Registry so that other data scientists can reuse it across different projects. Which SDK v2 method do you call?",
    options: [
      "A) ml_client.components.create_or_update(clean_data_component)",
      "B) clean_data.save_to_cloud()",
      "C) azureml.register_func(clean_data)",
      "D) git push component"
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) ml_client.components.create_or_update(clean_data_component). Explanation: Once decorated, the component object can be published directly to the cloud registry using MLClient."
  },
  {
    id: 331,
    domain: "Track 4: ML Pipelines - SDK v2 Decorators",
    type: "multiple",
    scenario: "Which three attributes are mandatory or commonly specified inside the `@command` decorator arguments? (Select three)",
    options: [
      "A) name (unique identifier of the component)",
      "B) environment (Docker image or registered environment URI)",
      "C) code (path to the local source code directory containing the script)",
      "D) developer_home_address",
      "E) favorite_pizza_topping"
    ],
    correctAnswer: [0, 1, 2],
    explanation: "Correct Answer: A, B, and C. Explanation: A command component requires a name, an execution environment, and a reference to the source code directory to package."
  },
  {
    id: 332,
    domain: "Track 4: ML Pipelines - SDK v2 Decorators",
    type: "single",
    scenario: "When calling a component function inside a `@pipeline` decorated function, what object type is returned representing the step instance?",
    options: [
      "A) A PipelineStep (or ComponentJob) object, which exposes `.outputs` attributes (e.g., step1.outputs.cleaned_data) that can be passed into subsequent step inputs.",
      "B) A string containing the word 'done'.",
      "C) An integer representing the time.",
      "D) A pandas DataFrame."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) A PipelineStep object exposing `.outputs` attributes. Explanation: Step objects act as symbolic nodes in the DAG; passing step1.outputs into step2 inputs builds the graph edges."
  },
  {
    id: 333,
    domain: "Track 4: ML Pipelines - SDK v2 Decorators",
    type: "single",
    scenario: "How do you configure a specific step in a pipeline to run on a GPU compute cluster ('gpu-cluster') while the rest of the pipeline runs on default CPU compute?",
    options: [
      "A) Set the `.compute` property on the step instance inside the pipeline function: train_step = train_model_func(...); train_step.compute = 'gpu-cluster'.",
      "B) Write 'GPU=true' in code comments.",
      "C) You must run the entire pipeline on GPU.",
      "D) Send an email to the server."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Set the `.compute` property on the step instance inside the pipeline function. Explanation: Step-level compute assignment overriding parent defaults is a core feature of SDK v2 orchestration."
  },
  {
    id: 334,
    domain: "Track 4: ML Pipelines - SDK v2 Decorators",
    type: "single",
    scenario: "What syntax do you use to submit a compiled pipeline job to Azure Machine Learning for execution using MLClient in SDK v2?",
    options: [
      "A) pipeline_job = my_pipeline_func(raw_data=input_dataset)\nsubmitted_job = ml_client.jobs.create_or_update(pipeline_job, experiment_name='pipeline_run')",
      "B) azureml.run_pipeline(my_pipeline_func)",
      "C) my_pipeline_func.execute()",
      "D) ml_client.submit(my_pipeline_func)"
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) pipeline_job = my_pipeline_func(...); submitted_job = ml_client.jobs.create_or_update(pipeline_job, ...). Explanation: In SDK v2, pipelines are submitted as Job entities via ml_client.jobs.create_or_update()."
  },
  {
    id: 335,
    domain: "Track 4: ML Pipelines - SDK v2 Decorators",
    type: "single",
    scenario: "Can you load and use a registered cloud component inside your `@pipeline` script without defining its `@command` function locally in Python?",
    options: [
      "A) Yes! You can load registered cloud components dynamically using: clean_func = ml_client.components.get(name='clean_data', version='1') and invoke clean_func(...) directly inside your pipeline DAG.",
      "B) No, all code must be written in one file.",
      "C) Yes, but only on weekends.",
      "D) No, cloud components cannot be called from Python."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Yes! You can load registered cloud components dynamically using ml_client.components.get(). Explanation: Dynamically fetching registered components promotes modular reuse across distributed enterprise teams."
  },
  {
    id: 336,
    domain: "Track 4: ML Pipelines - SDK v2 Decorators",
    type: "single",
    scenario: "In an `@command` script, how do you read the command-line arguments that Azure ML injects for an input folder parameter named '--raw_data'?",
    options: [
      "A) Use standard Python argument parsing (e.g., argparse.ArgumentParser() or click), where '--raw_data' receives the local mounted filesystem path string pointing to the cloud files.",
      "B) Read from Windows registry.",
      "C) Ask the user via input() prompt.",
      "D) Hardcode C:/data."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Use standard Python argument parsing (argparse/click), where '--raw_data' receives the local mounted filesystem path. Explanation: Azure ML runtime binds cloud storage URIs to container filesystem paths passed via command line arguments."
  },
  {
    id: 337,
    domain: "Track 4: ML Pipelines - SDK v2 Decorators",
    type: "single",
    scenario: "What happens when you pass an integer hyperparameter (e.g., epochs=50) into a `@command` component function call?",
    options: [
      "A) Azure ML converts the integer into a command-line string flag '--epochs 50' when executing the container script.",
      "B) It crashes because terminal commands only accept images.",
      "C) It converts the integer to Roman numerals.",
      "D) It deletes the parameter."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Azure ML converts the integer into a command-line string flag '--epochs 50'. Explanation: SDK v2 automatically serializes primitive Python types (int, float, str, bool) into command-line arguments."
  },
  {
    id: 338,
    domain: "Track 4: ML Pipelines - SDK v2 Decorators",
    type: "single",
    scenario: "How do you define a default compute cluster for an entire pipeline so you do not have to set `.compute` individually on every single step?",
    options: [
      "A) Set the `.compute` property on the top-level pipeline job object before submitting: pipeline_job.settings.default_compute = 'cpu-cluster'.",
      "B) Write 'cluster=cpu' on the screen.",
      "C) You must set every step manually.",
      "D) Delete all clusters."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Set the `.compute` property on the top-level pipeline job object: pipeline_job.settings.default_compute = 'cpu-cluster'. Explanation: Top-level default settings streamline pipeline authoring while preserving step-level override capabilities."
  },
  {
    id: 339,
    domain: "Track 4: ML Pipelines - SDK v2 Decorators",
    type: "single",
    scenario: "Why is the `azure-ai-ml` SDK v2 preferred over the legacy `azureml-sdk` (v1) for authoring modern Azure Machine Learning pipelines?",
    options: [
      "A) SDK v2 provides a declarative, Pythonic decorator architecture (@command, @pipeline) that aligns directly with open ARM/YAML standards, eliminating complex legacy classes like PipelineData and PythonScriptStep.",
      "B) SDK v1 does not work on computers.",
      "C) SDK v2 is 100 times cheaper.",
      "D) SDK v1 deleted files."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) SDK v2 provides a declarative, Pythonic decorator architecture aligning with open ARM/YAML standards. Explanation: SDK v2 modernizes MLOps engineering by unifying Python decorators with YAML GitOps specifications."
  },
  {
    id: 340,
    domain: "Track 4: ML Pipelines - SDK v2 Decorators",
    type: "single",
    scenario: "Can you mix and match different programming languages (e.g., executing a Python script in Step 1, an R script in Step 2, and a compiled C++ binary in Step 3) within the same `@pipeline` DAG?",
    options: [
      "A) Yes! Because each `@command` step runs inside its own isolated Docker container environment, each step can use completely different languages, OS libraries, or frameworks seamlessly.",
      "B) No, pipelines must be 100% Python only.",
      "C) Only if you translate them to SQL.",
      "D) No, R is banned in Azure."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Yes! Because each step runs inside its own isolated Docker container environment, steps can use completely different languages or frameworks. Explanation: Container isolation enables polyglot data science engineering across heterogeneous team workflows."
  },
  {
    id: 341,
    domain: "Track 4: ML Pipelines - SDK v2 Decorators",
    type: "single",
    scenario: "What is the function of the `dsl.pipeline` module imported from `azure.ai.ml`?",
    options: [
      "A) It provides the domain-specific language (DSL) decorators (@pipeline) and orchestration primitives used to construct graph dependencies in SDK v2.",
      "B) It connects to high-speed DSL internet modems.",
      "C) It formats text into bold font.",
      "D) It plays background music."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) It provides the domain-specific language (DSL) decorators (@pipeline) and orchestration primitives. Explanation: The 'azure.ai.ml.dsl' module is the core engine for declarative Python pipeline construction."
  },
  {
    id: 342,
    domain: "Track 4: ML Pipelines - SDK v2 Decorators",
    type: "single",
    scenario: "When defining an `@command` component, how can you specify that a specific input parameter is optional (not required for step execution)?",
    options: [
      "A) Set `optional=True` in the Input() type hint: def my_step(opt_param: Input(type='uri_file', optional=True) = None):.",
      "B) Write 'optional' in comments.",
      "C) All parameters are always mandatory.",
      "D) Delete the parameter name."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Set `optional=True` in the Input() type hint: def my_step(opt_param: Input(..., optional=True) = None):. Explanation: Optional input binding allows components to execute fallback or default logic when certain artifacts are omitted."
  },
  {
    id: 343,
    domain: "Track 4: ML Pipelines - SDK v2 Decorators",
    type: "single",
    scenario: "How do you override the default command execution string inside an `@command` decorator if your script is named `run_preprocess.py` instead of `main.py`?",
    options: [
      "A) Set the `command` argument: command='python run_preprocess.py --input_data ${{inputs.raw_data}} --output_data ${{outputs.cleaned_data}}'.",
      "B) Rename your file to main.py.",
      "C) You cannot change the command.",
      "D) Send an email to Azure."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Set the `command` argument: command='python run_preprocess.py ...'. Explanation: The command template string explicitly maps component input/output schemas to terminal execution flags."
  },
  {
    id: 344,
    domain: "Track 4: ML Pipelines - SDK v2 Decorators",
    type: "single",
    scenario: "In an SDK v2 pipeline script, what happens if you call `ml_client.jobs.stream(submitted_job.name)` immediately after submitting the pipeline?",
    options: [
      "A) The Python terminal attaches to the live cloud execution logs, printing real-time step status updates (Queued, Running, Completed) until the entire pipeline terminates.",
      "B) It downloads a video movie.",
      "C) It deletes the pipeline.",
      "D) It formats the hard drive."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) The Python terminal attaches to live cloud execution logs, printing real-time step status updates. Explanation: Streaming job logs provides immediate feedback during interactive experimentation loops."
  },
  {
    id: 345,
    domain: "Track 4: ML Pipelines - SDK v2 Decorators",
    type: "single",
    scenario: "Why is it recommended to keep the source code directory (`code='.'`) small when defining an `@command` component?",
    options: [
      "A) Because Azure ML uploads the entire contents of the specified code directory to cloud storage on every submission; including large multi-gigabyte data files or virtual environments in the code folder drastically slows down job startup.",
      "B) Because small folders look neater.",
      "C) Because Azure deletes folders over 5 MB.",
      "D) To make the font smaller."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Including large data files or virtual environments in the code folder drastically slows down job startup upload times. Explanation: Keep source code folders clean and lightweight; route all datasets through cloud Data Assets."
  },

  // ==========================================
  // Sub-topic 3: Data Passing & Intermediate Artifacts (Q346-Q365)
  // ==========================================
  {
    id: 346,
    domain: "Track 4: ML Pipelines - Data Passing",
    type: "single",
    scenario: "In an Azure ML Pipeline, Step 1 (Data Prep) outputs a directory of cleaned CSV files. Step 2 (Model Training) needs to read those cleaned files.",
    question: "How does Azure Machine Learning physically transfer data between Step 1 and Step 2 across different compute cluster nodes?",
    options: [
      "A) Step 1 writes the output files to a designated workspace blob storage container (Datastore); when Step 2 begins, Azure ML automatically mounts or downloads those files from blob storage to Step 2's compute node.",
      "B) Step 1 emails the files to Step 2.",
      "C) Step 1 copies files over a USB cable.",
      "D) Step 1 stores files in RAM forever."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Step 1 writes to blob storage; Step 2 automatically mounts or downloads those files from blob storage. Explanation: Cloud object storage acts as the persistent intermediate data bus connecting distributed pipeline nodes."
  },
  {
    id: 347,
    domain: "Track 4: ML Pipelines - Data Passing",
    type: "single",
    scenario: "When defining how an input data asset is delivered to a pipeline step container, what is the difference between `mode='ro_mount'` (Read-Only Mount) and `mode='download'`?",
    options: [
      "A) `ro_mount` creates a virtual filesystem streaming data on-demand from blob storage (zero initial download delay, ideal for massive multi-terabyte datasets); `download` physically copies every file to the node's local disk before the script starts (faster file I/O for small datasets that fit on disk).",
      "B) `ro_mount` is for Windows; `download` is for Linux.",
      "C) `ro_mount` is paid; `download` is free.",
      "D) There is no difference."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) `ro_mount` streams data on-demand (ideal for massive datasets); `download` physically copies files to local disk before execution. Explanation: Selecting the optimal data delivery mode prevents disk exhaustion and accelerates job startup."
  },
  {
    id: 348,
    domain: "Track 4: ML Pipelines - Data Passing",
    type: "single",
    scenario: "What happens to the intermediate output artifacts generated by Step 1 after the entire pipeline job finishes successfully?",
    options: [
      "A) They remain stored in the workspace datastore under the pipeline run's unique ID folder, allowing developers to download intermediate results, inspect data quality, or reuse them in cached pipeline runs.",
      "B) They are automatically deleted within 5 seconds.",
      "C) They are emailed to the CEO.",
      "D) They are converted into MP3 audio."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) They remain stored in the workspace datastore under the pipeline run ID folder for inspection and caching. Explanation: Preserving intermediate artifacts ensures end-to-end pipeline traceability and debuggability."
  },
  {
    id: 349,
    domain: "Track 4: ML Pipelines - Data Passing",
    type: "single",
    scenario: "You want to pass a small scalar value (e.g., a calculated learning rate `lr=0.001` or a string flag `status='passed'`) from Step 1 to Step 2 without creating a heavy folder artifact.",
    question: "How should you pass primitive parameter values between pipeline steps in SDK v2?",
    options: [
      "A) Write the scalar value or JSON string to a lightweight text file inside an `Output(type='uri_file')`, and have Step 2 read that file via `Input(type='uri_file')` or use SDK v2 primitive output binding.",
      "B) Print the number on the monitor screen.",
      "C) Write it on a sticky note.",
      "D) Send an SMS message."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Write the scalar value to a lightweight text file inside an Output(), and have Step 2 read that file. Explanation: File-based parameter binding provides clean, deterministic value passing across container boundaries."
  },
  {
    id: 350,
    domain: "Track 4: ML Pipelines - Data Passing",
    type: "single",
    scenario: "Why is `mode='rw_mount'` (Read-Write Mount) generally discouraged for intermediate pipeline data outputs compared to standard output folder writing?",
    options: [
      "A) Read-write mounts can introduce race conditions or file corruption if multiple parallel nodes attempt to write to the exact same cloud storage blob simultaneously without file locking.",
      "B) Because rw_mount makes files turn blue.",
      "C) Because Azure CLI forbids rw_mount.",
      "D) Because it slows down the internet."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Read-write mounts can introduce race conditions or file corruption if multiple nodes write simultaneously. Explanation: Standard output writing ensures clean, immutable artifact generation per step."
  },
  {
    id: 351,
    domain: "Track 4: ML Pipelines - Data Passing",
    type: "multiple",
    scenario: "Which three storage services can be registered as an Azure ML Datastore to host intermediate pipeline data artifacts? (Select three)",
    options: [
      "A) Azure Blob Storage",
      "B) Azure Data Lake Storage (ADLS) Gen2",
      "C) Azure File Share",
      "D) Nintendo GameCube Memory Card",
      "E) Floppy Disk 3.5 inch"
    ],
    correctAnswer: [0, 1, 2],
    explanation: "Correct Answer: A, B, and C. Explanation: Azure ML Datastores natively abstract Azure Blob, ADLS Gen2, and Azure File Shares for high-throughput cloud data exchange."
  },
  {
    id: 352,
    domain: "Track 4: ML Pipelines - Data Passing",
    type: "single",
    scenario: "When Step 2 receives an input directory from Step 1 via `Input(type='uri_folder')`, how does your Python script inside Step 2 access the files inside that folder?",
    options: [
      "A) The script receives the local folder path as a command-line string argument; you can use standard Python file operations like `os.listdir(args.input_dir)` or `pandas.read_parquet(os.path.join(args.input_dir, 'data.parquet'))`.",
      "B) You must make HTTP REST requests to download files manually.",
      "C) You must type passwords in console.",
      "D) Python cannot read folders."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) The script receives the local folder path; use standard Python file operations like os.listdir() or pandas.read_parquet(). Explanation: Azure ML abstracts cloud storage mounting so scripts interact with data using standard local filesystem APIs."
  },
  {
    id: 353,
    domain: "Track 4: ML Pipelines - Data Passing",
    type: "single",
    scenario: "What is an `mltable` artifact in Azure Machine Learning pipelines?",
    options: [
      "A) A folder containing data files (CSV, Parquet, Delta) along with an `MLTable` YAML metadata file defining schema types, column headers, and preprocessing transformations for tabular data.",
      "B) A wooden dining table.",
      "C) A Microsoft Excel workbook.",
      "D) A SQL database engine."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) A folder containing data files along with an `MLTable` YAML metadata file defining schema and transformations. Explanation: MLTable provides a standardized schema contract for tabular datasets across ML pipelines and AutoML."
  },
  {
    id: 354,
    domain: "Track 4: ML Pipelines - Data Passing",
    type: "single",
    scenario: "How can you ensure that intermediate data artifacts generated by sensitive healthcare pipelines are automatically deleted after 30 days to save storage costs and comply with data retention policies?",
    options: [
      "A) Configure Azure Blob Storage Lifecycle Management rules on the workspace datastore account to automatically transition or delete old blob directories in the `/azureml/` container after 30 days.",
      "B) Ask an intern to delete files manually every month.",
      "C) Format the storage account every Friday.",
      "D) You cannot delete cloud files."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Configure Azure Blob Storage Lifecycle Management rules on the workspace datastore account. Explanation: Cloud storage lifecycle rules automate FinOps and regulatory data governance effortlessly."
  },
  {
    id: 355,
    domain: "Track 4: ML Pipelines - Data Passing",
    type: "single",
    scenario: "If Step 1 outputs 50 GB of parquet files and Step 2 only needs to read 5 columns out of 100, why is combining Parquet format with `mode='ro_mount'` highly efficient?",
    options: [
      "A) Because Parquet is a columnar storage format; when mounted, Step 2 only streams the specific 5 column byte chunks over the network over demand without downloading the remaining 95 unused columns.",
      "B) Because Parquet files are purple.",
      "C) Because Parquet converts to Excel.",
      "D) Because mounting makes files weigh zero grams."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Because Parquet is columnar; when mounted, Step 2 only streams specific column byte chunks over the network. Explanation: Columnar projection pushdown over mounted storage minimizes network egress and memory consumption."
  },
  {
    id: 356,
    domain: "Track 4: ML Pipelines - Data Passing",
    type: "single",
    scenario: "When debugging a pipeline failure where Step 2 reports 'FileNotFoundError: input_data/train.csv', what should you check first in Azure ML Studio?",
    options: [
      "A) Check Step 1's job logs and 'Outputs + logs' tab to verify whether Step 1 actually generated and wrote `train.csv` into its output folder before terminating.",
      "B) Check the computer battery.",
      "C) Restart Windows.",
      "D) Buy a new keyboard."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Check Step 1's job logs and 'Outputs + logs' tab to verify whether Step 1 actually generated the file. Explanation: Verifying upstream artifact generation is step one in diagnosing downstream pipeline file not found errors."
  },
  {
    id: 357,
    domain: "Track 4: ML Pipelines - Data Passing",
    type: "single",
    scenario: "Can an Azure ML Pipeline step consume multiple different input datasets simultaneously (e.g., `input_users`, `input_transactions`, and `input_products`)?",
    options: [
      "A) Yes! A component signature can define as many distinct `Input()` parameters as needed, and Azure ML will mount/download all of them into separate local folder paths for the script to join.",
      "B) No, steps can only accept 1 file.",
      "C) Only if you merge them manually into one ZIP file first.",
      "D) No, multiple inputs crash Azure."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Yes! A component signature can define as many distinct `Input()` parameters as needed. Explanation: Multi-input binding enables complex data joins and feature engineering across disparate data sources."
  },
  {
    id: 358,
    domain: "Track 4: ML Pipelines - Data Passing",
    type: "single",
    scenario: "Why is it important to use consistent file naming conventions and directory structures when writing outputs from component steps?",
    options: [
      "A) Because downstream components expect predictable file schemas; standardized naming prevents contract mismatches when assembling complex multi-team pipelines.",
      "B) Because Azure deletes files with long names.",
      "C) Because lowercase letters cost less money.",
      "D) To make the folder icons yellow."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Because downstream components expect predictable file schemas; standardized naming prevents contract mismatches. Explanation: Clean interface contracts are essential for reliable modular engineering."
  },
  {
    id: 359,
    domain: "Track 4: ML Pipelines - Data Passing",
    type: "single",
    scenario: "What happens if you define an output parameter in `@command` but your Python script finishes without actually creating or writing any files into that output directory?",
    options: [
      "A) Azure ML creates an empty directory in blob storage; downstream steps that depend on that output will receive an empty folder without throwing a deployment error, but script logic expecting files will fail.",
      "B) The entire Azure data center crashes.",
      "C) The computer monitor turns black.",
      "D) The user account is suspended."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Azure ML creates an empty directory in blob storage; downstream steps receive an empty folder. Explanation: Scripts should implement defensive assertion checks to verify required output files were written before exiting cleanly."
  },
  {
    id: 360,
    domain: "Track 4: ML Pipelines - Data Passing",
    type: "single",
    scenario: "How does Azure ML secure data in transit when transferring intermediate pipeline artifacts between compute nodes and blob storage?",
    options: [
      "A) All data in transit across the Azure backbone is encrypted using industry-standard TLS 1.2 / TLS 1.3 encryption protocols.",
      "B) Data is sent unencrypted over public radio.",
      "C) Data is carried by courier pigeons.",
      "D) Data is printed and faxed."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) All data in transit is encrypted using industry-standard TLS 1.2 / TLS 1.3 encryption protocols. Explanation: Default transport layer security guarantees data privacy and compliance across distributed cloud nodes."
  },
  {
    id: 361,
    domain: "Track 4: ML Pipelines - Data Passing",
    type: "single",
    scenario: "Which SDK v2 object is used to pass an external registered cloud Data Asset into the first step of an executing pipeline?",
    options: [
      "A) Pass the asset URI string (e.g., `input_data = Input(type='uri_folder', path='azureml:my_training_data:1')`) directly into the pipeline function call.",
      "B) Write the file on a USB drive.",
      "C) Type the file contents in console.",
      "D) Send an email attachment."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Pass the asset URI string (`azureml:my_training_data:1`) directly into the pipeline function call. Explanation: Linking registered data assets to pipeline entry points initiates data-driven workflow orchestration."
  },
  {
    id: 362,
    domain: "Track 4: ML Pipelines - Data Passing",
    type: "single",
    scenario: "What is the operational benefit of using `mode='direct'` (or URI passing) in advanced pipeline components?",
    options: [
      "A) Instead of mounting or downloading, Azure ML passes the raw cloud storage URI string (e.g., `wasbs://...`) directly to the script, allowing distributed frameworks like PySpark or Ray to handle data partitioning and streaming natively.",
      "B) It turns off the internet.",
      "C) It makes the font bold.",
      "D) It deletes the storage account."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Azure ML passes the raw cloud URI directly to the script, allowing distributed frameworks like PySpark or Ray to handle data partitioning natively. Explanation: Direct URI passing bypasses single-node filesystem abstractions for massive distributed big data engines."
  },
  {
    id: 363,
    domain: "Track 4: ML Pipelines - Data Passing",
    type: "single",
    scenario: "When auditing pipeline execution costs, which datastore storage tier minimizes billing for intermediate artifacts that are rarely read after the pipeline completes?",
    options: [
      "A) Azure Blob Storage Cool or Archive tier (or configuring lifecycle rules to move intermediate run blobs to Cool/Archive after 7 days).",
      "B) Premium Ultra SSD tier forever.",
      "C) Printing on gold leaf paper.",
      "D) Buying physical hard drives."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Azure Blob Storage Cool or Archive tier (or lifecycle rules moving blobs after 7 days). Explanation: Aligning storage tiers with data access frequency is a fundamental cloud FinOps optimization."
  },
  {
    id: 364,
    domain: "Track 4: ML Pipelines - Data Passing",
    type: "single",
    scenario: "Why must output directory paths specified in pipeline step scripts be created dynamically if they do not already exist (e.g., using `os.makedirs(args.output_dir, exist_ok=True)`)?",
    options: [
      "A) Because while Azure ML mounts the target output location, the physical subdirectory structure might not exist on the container filesystem until your script explicitly creates it before writing files.",
      "B) Because Python deletes folders automatically.",
      "C) Because Windows requires 10 folders.",
      "D) To slow down the computer."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Because the physical subdirectory structure might not exist until your script explicitly creates it before writing. Explanation: Always ensure directory existence before executing file write streams in container environments."
  },
  {
    id: 365,
    domain: "Track 4: ML Pipelines - Data Passing",
    type: "single",
    scenario: "In a complex DAG, Step 4 consumes outputs from both Step 2 and Step 3. If Step 2 succeeds but Step 3 fails, what data is delivered to Step 4?",
    options: [
      "A) Nothing; Step 4 will never start executing because its dependency contract (Step 3 completion) was violated; Step 4 is marked as 'Canceled'.",
      "B) Step 4 runs with half the data.",
      "C) Step 4 makes up random numbers.",
      "D) Step 4 crashes the entire cluster."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Nothing; Step 4 will never start because its dependency contract was violated; Step 4 is marked as 'Canceled'. Explanation: DAG dependency enforcement ensures steps never execute with incomplete or missing upstream data inputs."
  },

  // ==========================================
  // Sub-topic 4: Parallel Run Step & Caching (Q366-Q385)
  // ==========================================
  {
    id: 366,
    domain: "Track 4: ML Pipelines - Parallel & Caching",
    type: "single",
    scenario: "You need to run batch inference across 500,000 images stored in Azure Blob storage. Running this sequentially on a single VM would take 3 weeks. You want to distribute the scoring jobs across 50 compute nodes automatically.",
    question: "Which Azure Machine Learning pipeline component type is specifically engineered for high-throughput distributed batch processing?",
    options: [
      "A) Parallel Run Step (or Parallel Component / ParallelJob)",
      "B) Standard Command Component on 1 CPU",
      "C) Windows Task Scheduler",
      "D) Excel Macro Loop"
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Parallel Run Step (or Parallel Component / ParallelJob). Explanation: Parallel Run Step automatically partitions large file datasets or tabular rows across multiple worker nodes and cores, executing scoring in parallel asynchronously."
  },
  {
    id: 367,
    domain: "Track 4: ML Pipelines - Parallel & Caching",
    type: "single",
    scenario: "How does the Parallel Run Step partition a large input folder of 10,000 CSV files across 10 compute cluster nodes?",
    options: [
      "A) By organizing files into 'mini-batches' (controlled by `mini_batch_size`, e.g., 5 files per batch) and dynamically distributing those mini-batches across available node worker processes.",
      "B) By emailing 1,000 files to each node.",
      "C) By copying all 10,000 files to every node simultaneously.",
      "D) By deleting half the files."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) By organizing files into 'mini-batches' and dynamically distributing them across available node worker processes. Explanation: Mini-batch partitioning ensures even load balancing and fault isolation across distributed workers."
  },
  {
    id: 368,
    domain: "Track 4: ML Pipelines - Parallel & Caching",
    type: "single",
    scenario: "In a Parallel Run Step scoring script, what is the required signature and behavior of the `run(mini_batch)` function?",
    options: [
      "A) It accepts a list of file paths or tabular rows (`mini_batch`), executes model inference on that batch, and returns a list or pandas DataFrame of prediction results that Azure ML automatically appends into the final output destination.",
      "B) It opens a GUI window.",
      "C) It formats the hard drive.",
      "D) It plays a sound alert."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) It accepts a list (`mini_batch`), executes inference, and returns prediction results that Azure ML appends. Explanation: The ParallelRunStep executor abstracts multi-node threading, calling run() repeatedly for each mini-batch."
  },
  {
    id: 369,
    domain: "Track 4: ML Pipelines - Parallel & Caching",
    type: "single",
    scenario: "What happens during a Parallel Run Step job if 3 corrupted CSV files out of 10,000 cause their specific mini-batch `run()` calls to throw unhandled exceptions?",
    options: [
      "A) By configuring `error_threshold` (e.g., `error_threshold=10` or `10%`), the job logs the specific failed files, ignores them, and continues processing the remaining 9,997 files successfully without failing the entire pipeline.",
      "B) The entire 100-node cluster crashes instantly and deletes all predictions.",
      "C) The computer catches fire.",
      "D) Azure locks the subscription."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) By configuring `error_threshold`, the job logs failed files, ignores them, and continues processing the remaining files. Explanation: Error threshold fault tolerance is critical for processing massive real-world datasets containing occasional corrupted records."
  },
  {
    id: 370,
    domain: "Track 4: ML Pipelines - Parallel & Caching",
    type: "single",
    scenario: "You submit a 5-step pipeline job. Step 1 (Data Prep) takes 2 hours to run. You discover a typo in the Python script for Step 4 (Model Evaluation). You fix the typo in Step 4's script and resubmit the exact same pipeline job.",
    question: "What built-in Azure ML Pipeline feature prevents Step 1, Step 2, and Step 3 from wasting 4 hours re-running?",
    options: [
      "A) Step-Level Caching (or Reuse / Idempotent Execution)",
      "B) Windows Recycle Bin",
      "C) Computer Sleep Mode",
      "D) Manual Fast-Forward button"
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Step-Level Caching (or Reuse / Idempotent Execution). Explanation: Azure ML calculates a cryptographic hash of each step's code, environment, and input data; if identical to a previous successful run, it reuses cached outputs instantly."
  },
  {
    id: 371,
    domain: "Track 4: ML Pipelines - Parallel & Caching",
    type: "single",
    scenario: "How does Azure Machine Learning determine whether a pipeline step can reuse cached results from a previous run?",
    options: [
      "A) It verifies that the step's source code files, environment container image hash, hyperparameter arguments, and upstream input data asset hashes are 100% bitwise identical to a previously completed successful run.",
      "B) It checks if the day of the week is Tuesday.",
      "C) It asks the developer via pop-up.",
      "D) It flips a coin."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) It verifies source code, environment hash, arguments, and input data hashes are identical. Explanation: Cache invalidation occurs automatically the moment any code, parameter, or data input changes."
  },
  {
    id: 372,
    domain: "Track 4: ML Pipelines - Parallel & Caching",
    type: "single",
    scenario: "You are testing a step that downloads live real-time stock market data from an external public REST API. Even though your script code hasn't changed, you need this step to execute freshly every single time the pipeline runs.",
    question: "How do you disable caching for this specific component step?",
    options: [
      "A) Set `is_deterministic=False` in the component definition (or `step.is_deterministic = False` in SDK v2).",
      "B) Delete the hard drive.",
      "C) Turn off the monitor.",
      "D) Write 'no_cache' on a sticky note."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Set `is_deterministic=False` in the component definition. Explanation: Marking a step as non-deterministic forces Azure ML to bypass cache lookup and execute container logic freshly on every run."
  },
  {
    id: 373,
    domain: "Track 4: ML Pipelines - Parallel & Caching",
    type: "multiple",
    scenario: "Which three factors will automatically INVALIDATE a step's cache and force Azure ML to re-run the container script? (Select three)",
    options: [
      "A) Modifying even a single character or comment inside the step's source code directory",
      "B) Changing a hyperparameter input value (e.g., changing `learning_rate` from 0.01 to 0.05)",
      "C) Pointing the step input to a new version of the training dataset asset (e.g., `data:2` instead of `data:1`)",
      "D) Changing the desktop wallpaper on your laptop",
      "E) Moving your mouse across the screen"
    ],
    correctAnswer: [0, 1, 2],
    explanation: "Correct Answer: A, B, and C. Explanation: Any modification to the step's code, runtime parameters, or input data lineage breaks the deterministic hash, triggering fresh execution."
  },
  {
    id: 374,
    domain: "Track 4: ML Pipelines - Parallel & Caching",
    type: "single",
    scenario: "What is the financial impact of enabling pipeline caching across a 20-person data science team running daily multi-step experimentation pipelines?",
    options: [
      "A) Massive cloud compute cost reduction (FinOps optimization) and dramatically faster experimental iteration velocity, since unchanged preprocessing and feature engineering steps complete in seconds instead of hours.",
      "B) Azure charges double for caching.",
      "C) It breaks all computers.",
      "D) There is no financial impact."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Massive cloud compute cost reduction and faster iteration velocity. Explanation: Caching prevents redundant computation across teams, saving thousands of cloud compute hours annually."
  },
  {
    id: 375,
    domain: "Track 4: ML Pipelines - Parallel & Caching",
    type: "single",
    scenario: "In a Parallel Run Step, what is the purpose of configuring `append_row` vs `summary_only` in the output action settings?",
    options: [
      "A) `append_row` aggregates all mini-batch prediction returns from all worker nodes into a single consolidated output file (e.g., `parallel_run_step.csv`); `summary_only` skips file concatenation and only outputs execution summary logs.",
      "B) `append_row` deletes rows; `summary_only` prints books.",
      "C) `append_row` is for Excel; `summary_only` is for Word.",
      "D) There is no difference."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) `append_row` aggregates all mini-batch prediction returns into a single consolidated output file; `summary_only` only outputs execution summary logs. Explanation: `append_row` is the standard setting for producing unified batch scoring result tables."
  },
  {
    id: 376,
    domain: "Track 4: ML Pipelines - Parallel & Caching",
    type: "single",
    scenario: "How can you monitor the real-time progress and worker node distribution of an executing Parallel Run Step in Azure ML Studio?",
    options: [
      "A) Open the step's Job Details page and inspect the 'Outputs + logs' tab, specifically viewing `sys/master_role.txt`, `sys/worker_role.txt`, and automated progress telemetry charts.",
      "B) Open Windows Paint.",
      "C) Listen to the server noise.",
      "D) Check the local printer."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Open the step's Job Details page and inspect `sys/master_role.txt` and `sys/worker_role.txt`. Explanation: Azure ML streams master node orchestration logs and worker node batch execution logs in real time."
  },
  {
    id: 377,
    domain: "Track 4: ML Pipelines - Parallel & Caching",
    type: "single",
    scenario: "When configuring `max_concurrency_per_instance` on a Parallel Run Step running on an 8-core CPU VM, what is the recommended setting to maximize throughput without crashing the node?",
    options: [
      "A) Set it equal to or slightly less than the number of available CPU cores on the VM instance (e.g., `max_concurrency_per_instance=8` or `6`) to ensure each worker worker process gets a dedicated CPU core.",
      "B) Set it to 100,000.",
      "C) Set it to 0.",
      "D) Set it to negative 5."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Set it equal to or slightly less than the number of available CPU cores on the VM instance. Explanation: Aligning worker concurrency with hardware CPU cores prevents OS context-switching thrashing and memory exhaustion."
  },
  {
    id: 378,
    domain: "Track 4: ML Pipelines - Parallel & Caching",
    type: "single",
    scenario: "Why would an engineering team choose to use a Parallel Run Step instead of deploying a Managed Online Endpoint when scoring 10 million customer records nightly?",
    options: [
      "A) Because nightly batch scoring does not require sub-second synchronous latency; Parallel Run Step processes millions of records asynchronously at a fraction of the cost by auto-scaling spot clusters that shut down immediately upon completion.",
      "B) Because Online Endpoints cannot score numbers.",
      "C) Because Parallel Run Step is for Windows only.",
      "D) Because Online Endpoints delete data."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Because nightly batch scoring does not require sub-second latency; Parallel Run Step processes massive batches asynchronously at a fraction of the cost. Explanation: Matching architectural patterns to business latency requirements is key to cloud cost optimization."
  },
  {
    id: 379,
    domain: "Track 4: ML Pipelines - Parallel & Caching",
    type: "single",
    scenario: "What happens if a developer adds a print statement `print('Hello world')` inside a component script whose previous run was cached?",
    options: [
      "A) The source code file hash changes! Azure ML invalidates the cache for that step and executes the container freshly on the compute cluster.",
      "B) Azure ML ignores the print statement and reuses the cache anyway.",
      "C) The computer crashes.",
      "D) The portal font turns green."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) The source code file hash changes! Azure ML invalidates the cache and executes freshly. Explanation: Cryptographic hashing checks the exact file contents; even cosmetic code changes break cache determinism."
  },
  {
    id: 380,
    domain: "Track 4: ML Pipelines - Parallel & Caching",
    type: "single",
    scenario: "Can you force an entire pipeline job to bypass caching and re-run all steps freshly from scratch when submitting via CLI v2?",
    options: [
      "A) Yes! Pass the `--force-rerun` (or setting `settings.force_rerun=True` in SDK v2) flag during job submission.",
      "B) No, caching can never be bypassed.",
      "C) Only by deleting the entire Azure workspace.",
      "D) Only by buying a new computer."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Yes! Pass `--force-rerun` during job submission. Explanation: The force rerun override is essential when validating benchmark timing or testing external database connectivity."
  },
  {
    id: 381,
    domain: "Track 4: ML Pipelines - Parallel & Caching",
    type: "single",
    scenario: "In a Parallel Run Step, what is the role of the `init()` function inside the scoring script?",
    options: [
      "A) It is executed exactly once per worker process when the node container initializes; use it to load heavy model weights or database connections into global memory so they are reused across thousands of subsequent `run(mini_batch)` calls.",
      "B) It deletes the hard drive.",
      "C) It opens a web browser.",
      "D) It sends an email."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Executed once per worker process during container startup; use it to load heavy model weights into global memory. Explanation: Caching models in memory during init() prevents disk I/O bottlenecks during high-speed batch scoring."
  },
  {
    id: 382,
    domain: "Track 4: ML Pipelines - Parallel & Caching",
    type: "single",
    scenario: "How does pipeline caching behave across different workspaces or different Azure tenants?",
    options: [
      "A) Pipeline caching is strictly scoped within a single Azure ML Workspace (or shared within a Hub/Registry ecosystem); running a job in a completely isolated workspace will not reuse cache from another workspace.",
      "B) Caching is shared globally across every company on Earth.",
      "C) Caching only works on Tuesdays.",
      "D) Caching deletes files across tenants."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Pipeline caching is strictly scoped within a single Azure ML Workspace (or shared within a Hub/Registry ecosystem). Explanation: Workspace isolation boundaries prevent data leakage and cross-tenant cache snooping."
  },
  {
    id: 383,
    domain: "Track 4: ML Pipelines - Parallel & Caching",
    type: "single",
    scenario: "When processing tabular data in a Parallel Run Step, what data structure is passed into `run(mini_batch)` when the input is an `mltable` or tabular dataset?",
    options: [
      "A) A pandas DataFrame (or list of DataFrames) representing the subset of rows assigned to that specific mini-batch worker.",
      "B) A JPEG image.",
      "C) An MP3 audio file.",
      "D) A Word document."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) A pandas DataFrame representing the subset of rows assigned to that specific mini-batch worker. Explanation: Tabular batch scoring delivers clean, pre-parsed pandas DataFrames directly into worker scoring logic."
  },
  {
    id: 384,
    domain: "Track 4: ML Pipelines - Parallel & Caching",
    type: "single",
    scenario: "Why should you monitor network egress and storage IOPs when running a 100-node Parallel Run Step against a single Azure Blob storage account?",
    options: [
      "A) 100 nodes reading and writing simultaneously can hit storage account IOPs/bandwidth throttling limits (HTTP 503 Server Busy); mitigating this requires partitioning data across multiple storage accounts or using Azure Data Lake Storage Gen2 high-throughput tiers.",
      "B) Because storage accounts melt.",
      "C) Because Azure CLI forbids 100 nodes.",
      "D) Because network cables snap."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) 100 nodes reading/writing simultaneously can hit storage IOPs throttling limits; use ADLS Gen2 high-throughput tiers. Explanation: Designing for storage IOPs scalability prevents cloud throttling bottlenecks during massive parallel jobs."
  },
  {
    id: 385,
    domain: "Track 4: ML Pipelines - Parallel & Caching",
    type: "single",
    scenario: "What visual indicator in Azure ML Studio DAG designer confirms that a specific pipeline step successfully reused cached results from a previous run?",
    options: [
      "A) The step node displays a green checkmark accompanied by a 'Cached' (or circular reuse arrow) badge, and its execution duration displays as ~0 seconds.",
      "B) The step turns neon pink and flashes.",
      "C) The computer plays a siren sound.",
      "D) The monitor turns off."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) The step node displays a green checkmark accompanied by a 'Cached' badge, with duration ~0 seconds. Explanation: Studio's visual feedback immediately verifies when compute savings occur via caching."
  },

  // ==========================================
  // Sub-topic 5: Scheduling, Publishing & CI/CD Integration (Q386-Q405)
  // ==========================================
  {
    id: 386,
    domain: "Track 4: ML Pipelines - Scheduling & CI/CD",
    type: "single",
    scenario: "You have designed and validated an end-to-end retraining pipeline. You want this pipeline to execute automatically every Sunday at 2:00 AM UTC without human intervention.",
    question: "Which Azure ML SDK v2 / CLI v2 entity should you create to automate this execution?",
    options: [
      "A) A Schedule entity (JobSchedule) configured with a Cron expression (`cron: '0 2 * * 0'`) or Recurrence trigger pointing to your pipeline job definition.",
      "B) An alarm clock next to your laptop.",
      "C) A sticky note on the monitor.",
      "D) An email sent to an intern."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) A Schedule entity configured with a Cron expression or Recurrence trigger pointing to your pipeline job definition. Explanation: Azure ML Schedules run autonomously on cloud control planes, executing recurring jobs reliably without local hardware."
  },
  {
    id: 387,
    domain: "Track 4: ML Pipelines - Scheduling & CI/CD",
    type: "single",
    scenario: "You want your automated retraining pipeline to trigger immediately whenever a new batch of training data files is uploaded into a specific ADLS Gen2 storage folder ('/incoming_data/').",
    question: "What type of schedule trigger should you configure in Azure Machine Learning?",
    options: [
      "A) A Data-driven schedule (or Event-based trigger using Azure Event Grid / Blob created events integrated with Azure ML Data Assets).",
      "B) A manual button click.",
      "C) A paper fax trigger.",
      "D) A floppy disk insertion trigger."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) A Data-driven schedule (Event-based trigger using Azure Event Grid / Blob created events). Explanation: Data-driven triggers initiate training pipelines the exact second fresh data arrives, enabling true continuous learning."
  },
  {
    id: 388,
    domain: "Track 4: ML Pipelines - Scheduling & CI/CD",
    type: "single",
    scenario: "In legacy Azure ML SDK v1, developers 'published' pipelines to create REST endpoints. In modern SDK v2 / CLI v2, how do external systems (like Azure Data Factory or GitHub Actions) trigger an Azure ML pipeline job?",
    options: [
      "A) By submitting a Pipeline Job directly via the Azure ML REST API (using ARM / jobs endpoint authenticated with Entra ID bearer tokens) or executing `az ml job create -f pipeline.yml` via CLI.",
      "B) By sending a postal letter.",
      "C) By calling a phone number.",
      "D) By typing on a typewriter."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) By submitting a Pipeline Job directly via the Azure ML REST API or executing `az ml job create -f pipeline.yml` via CLI. Explanation: SDK v2 unifies job execution under standard ARM REST APIs, simplifying cross-service orchestration."
  },
  {
    id: 389,
    domain: "Track 4: ML Pipelines - Scheduling & CI/CD",
    type: "single",
    scenario: "When integrating Azure ML Pipelines into an Azure Data Factory (ADF) ETL workflow, which built-in ADF activity is designed specifically to execute an Azure ML pipeline job?",
    options: [
      "A) The 'Machine Learning Execute Pipeline' (or Azure Machine Learning Studio / ML Execute Pipeline) activity.",
      "B) The 'Send Email' activity.",
      "C) The 'Delete Hard Drive' activity.",
      "D) The 'Play Music' activity."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) The 'Machine Learning Execute Pipeline' activity. Explanation: ADF provides first-class native connectors for triggering and monitoring Azure ML pipeline executions within enterprise data pipelines."
  },
  {
    id: 390,
    domain: "Track 4: ML Pipelines - Scheduling & CI/CD",
    type: "single",
    scenario: "You want to pass dynamic runtime parameters (such as today's date string `process_date='2026-07-05'` or a specific model version tag) from a GitHub Actions CI/CD workflow into an executing Azure ML pipeline job.",
    question: "How do you pass runtime parameter overrides using Azure CLI v2?",
    options: [
      "A) Append `--set inputs.process_date='2026-07-05' inputs.model_tag='v2'` to your `az ml job create -f pipeline.yml` command.",
      "B) Write the date on the computer monitor.",
      "C) Rename the YAML file to the date.",
      "D) You cannot pass parameters to pipelines."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Append `--set inputs.process_date='2026-07-05'` to your `az ml job create` command. Explanation: The `--set` syntax allows CI/CD orchestrators to inject dynamic runtime variables into pipeline DAGs effortlessly."
  },
  {
    id: 391,
    domain: "Track 4: ML Pipelines - Scheduling & CI/CD",
    type: "single",
    scenario: "What happens if a scheduled pipeline job triggers at 2:00 AM, but the target compute cluster is currently powered down (0 active nodes)?",
    options: [
      "A) Azure ML automatically wakes up the cluster, provisions the required VM nodes according to scale settings, executes the pipeline steps, and scales the cluster back down to zero when finished.",
      "B) The job fails instantly with a 'Server Offline' error.",
      "C) The computer catches fire.",
      "D) The schedule deletes itself."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Azure ML automatically wakes up the cluster, provisions VMs, executes steps, and scales back down to zero. Explanation: Auto-scaling compute clusters handle scheduled background jobs seamlessly without requiring 24/7 active servers."
  },
  {
    id: 392,
    domain: "Track 4: ML Pipelines - Scheduling & CI/CD",
    type: "single",
    scenario: "How can you disable or pause an active schedule in Azure ML without deleting the underlying pipeline definition?",
    options: [
      "A) Set `is_enabled: false` on the Schedule entity in SDK v2 / CLI v2 (`az ml schedule update --name my-sched --set is_enabled=false`) or toggle the status switch in Studio.",
      "B) Unplug the server power cord.",
      "C) Delete the entire Azure workspace.",
      "D) Call the police."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Set `is_enabled: false` on the Schedule entity or toggle the switch in Studio. Explanation: Pausing schedules provides immediate operational control during maintenance windows or data pipeline outages."
  },
  {
    id: 393,
    domain: "Track 4: ML Pipelines - Scheduling & CI/CD",
    type: "single",
    scenario: "Why is it best practice to authenticate Azure Data Factory or GitHub Actions against Azure ML using a Managed Identity or Service Principal assigned the 'AzureML Data Scientist' role?",
    options: [
      "A) It enforces principle of least privilege, ensuring the automation tool can submit pipeline jobs and read artifacts without having administrative rights to delete workspaces or alter networking.",
      "B) Because passwords make computers run faster.",
      "C) Because Azure requires root access for everything.",
      "D) To make the portal font blue."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) It enforces least privilege, ensuring automation can submit jobs without admin rights to alter infrastructure. Explanation: Strict RBAC scoping prevents automated pipelines from accidentally compromising cloud infrastructure security."
  },
  {
    id: 394,
    domain: "Track 4: ML Pipelines - Scheduling & CI/CD",
    type: "single",
    scenario: "When monitoring scheduled pipeline runs across a year, where can MLOps engineers set up automated email notifications or Slack alerts if a recurring nightly training pipeline fails?",
    options: [
      "A) Configure Azure Monitor / Azure Event Grid alert rules triggering on 'Azure Machine Learning Job Status Changed' events (filtering for `status == 'Failed'`) connected to an Action Group.",
      "B) Sit in front of the computer 24 hours a day watching the screen.",
      "C) Ask an intern to check every morning.",
      "D) Print logs every hour."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Configure Azure Monitor / Event Grid alert rules triggering on Job Status Changed events connected to an Action Group. Explanation: Automated alerting ensures engineering teams respond to pipeline failures immediately."
  },
  {
    id: 395,
    domain: "Track 4: ML Pipelines - Scheduling & CI/CD",
    type: "single",
    scenario: "In an enterprise MLOps CI/CD pipeline, what is the role of a 'Pipeline Regression Test' job executed during pull request validation?",
    options: [
      "A) It executes the pipeline on a lightweight synthetic or subset test dataset (`test_sample.parquet`) to verify that all component DAG connections, environment dependencies, and script logic run end-to-end without errors before merging code.",
      "B) It deletes all production models.",
      "C) It formats the hard drive.",
      "D) It orders pizza for the team."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) It executes the pipeline on a lightweight sample dataset to verify DAG connections and script logic end-to-end before merging. Explanation: Subset regression testing validates DAG integrity in minutes without incurring full-scale training costs."
  },
  {
    id: 396,
    domain: "Track 4: ML Pipelines - Scheduling & CI/CD",
    type: "single",
    scenario: "How can you view a historical audit log showing exactly which scheduled run or which CI/CD service principal triggered a specific pipeline job in Azure ML Studio?",
    options: [
      "A) Check the 'Created By' (or Triggered By / Identity) field on the Job Details overview page or query Azure Activity Logs.",
      "B) Read the developer's diary.",
      "C) Check Windows recycle bin.",
      "D) Ask on social media."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Check the 'Created By' field on the Job Details overview page or query Azure Activity Logs. Explanation: Full attribution logging ensures complete accountability across human and automated pipeline triggers."
  },
  {
    id: 397,
    domain: "Track 4: ML Pipelines - Scheduling & CI/CD",
    type: "single",
    scenario: "What syntax is used in an Azure ML Schedule YAML file to specify that a pipeline should run every day at midnight?",
    options: [
      "A) trigger:\n  type: cron\n  expression: '0 0 * * *'",
      "B) run_time: midnight",
      "C) schedule: every_night",
      "D) timer: 24_hours"
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) trigger: type: cron, expression: '0 0 * * *'. Explanation: Standard 5-field Cron syntax provides universal, precise scheduling control across cloud orchestration engines."
  },
  {
    id: 398,
    domain: "Track 4: ML Pipelines - Scheduling & CI/CD",
    type: "single",
    scenario: "Why is it important to assign a unique, descriptive experiment name (e.g., `experiment_name: 'weekly_churn_retraining'`) to scheduled pipeline jobs?",
    options: [
      "A) It groups all recurring weekly runs under a single clean dashboard hierarchy in Azure ML Studio, allowing easy longitudinal comparison of training metrics across weeks without cluttering the workspace.",
      "B) Because Azure deletes jobs without names.",
      "C) To make the font size bigger.",
      "D) Because Python requires string names."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) It groups recurring runs under a single clean dashboard hierarchy, allowing easy longitudinal comparison across weeks. Explanation: Clean experiment naming conventions prevent workspace clutter and streamline metric tracking over time."
  },
  {
    id: 399,
    domain: "Track 4: ML Pipelines - Scheduling & CI/CD",
    type: "single",
    scenario: "When an automated CI/CD pipeline triggers an Azure ML pipeline job, how can you ensure that intermediate build artifacts and cached container layers do not exceed Azure storage quota over time?",
    options: [
      "A) Implement automated data retention and workspace cleanup policies (e.g., deleting old experimental job outputs or purging unused ACR container images older than 90 days).",
      "B) Buy infinite hard drives.",
      "C) Never run pipelines.",
      "D) Format the entire cloud every day."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Implement automated data retention and workspace cleanup policies. Explanation: Proactive artifact lifecycle management prevents cloud billing surprises and storage quota exhaustion."
  },
  {
    id: 400,
    domain: "Track 4: ML Pipelines - Scheduling & CI/CD",
    type: "single",
    scenario: "What happens when an Azure Data Factory pipeline triggers an Azure ML pipeline job using the 'Machine Learning Execute Pipeline' activity configured with `Wait for completion = True`?",
    options: [
      "A) ADF pauses its workflow and polls Azure ML asynchronously; if the ML pipeline completes successfully, ADF proceeds to the next ETL step; if the ML pipeline fails, ADF marks the activity as failed and triggers error handling alerts.",
      "B) ADF crashes immediately.",
      "C) ADF deletes the Azure ML workspace.",
      "D) ADF sends a fax to the CEO."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) ADF pauses and polls Azure ML asynchronously, proceeding on success or triggering error alerts on failure. Explanation: Synchronous polling orchestration allows enterprise data factories to gate downstream data warehousing on ML model success."
  },
  {
    id: 401,
    domain: "Track 4: ML Pipelines - Scheduling & CI/CD",
    type: "single",
    scenario: "Can you pass environment variables (like `LOG_LEVEL='DEBUG'` or `API_TIMEOUT='30'`) into specific component steps of a scheduled pipeline job?",
    options: [
      "A) Yes! You can set the `.environment_variables` dictionary property on individual step objects inside your pipeline definition: `step1.environment_variables = {'LOG_LEVEL': 'DEBUG'}`.",
      "B) No, environment variables are banned in pipelines.",
      "C) Only by writing them on paper.",
      "D) No, Linux containers do not support variables."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Yes! Set the `.environment_variables` dictionary property on individual step objects. Explanation: Step-level environment variables enable runtime behavioral tuning without modifying container images or script code."
  },
  {
    id: 402,
    domain: "Track 4: ML Pipelines - Scheduling & CI/CD",
    type: "single",
    scenario: "Why is 'GitOps' considered the gold standard for managing Azure ML Pipeline schedules and definitions?",
    options: [
      "A) Because all YAML pipeline definitions, component schemas, and schedule triggers are stored in version-controlled Git repositories; any change to a schedule or pipeline must go through pull request review and automated CI/CD deployment.",
      "B) Because GitOps sounds modern.",
      "C) Because GitOps deletes passwords.",
      "D) Because Windows requires GitOps."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Because all YAML definitions and schedules are version-controlled in Git, requiring PR review and automated CI/CD deployment. Explanation: GitOps provides absolute auditability, rollback capability, and disaster recovery readiness."
  },
  {
    id: 403,
    domain: "Track 4: ML Pipelines - Scheduling & CI/CD",
    type: "single",
    scenario: "When troubleshooting a scheduled pipeline job that failed to trigger at its scheduled time, where should you check first?",
    options: [
      "A) Check the 'Schedules' tab in Azure ML Studio to verify that the schedule status is 'Active' (not Disabled/Expired) and inspect the schedule execution history / trigger logs for authentication or quota errors.",
      "B) Check the clock on your kitchen wall.",
      "C) Restart your laptop.",
      "D) Buy a new monitor."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Check the 'Schedules' tab in Azure ML Studio to verify schedule status is Active and inspect trigger logs. Explanation: Verifying schedule control-plane health is step one in diagnosing missed automated runs."
  },
  {
    id: 404,
    domain: "Track 4: ML Pipelines - Scheduling & CI/CD",
    type: "single",
    scenario: "How does Azure ML handle pipeline scheduling across daylight saving time (DST) changes?",
    options: [
      "A) Schedule triggers evaluate time based on the specified time zone (or UTC by default); best practice for global enterprise pipelines is to schedule all jobs in Coordinated Universal Time (UTC) to prevent DST shift anomalies.",
      "B) Azure ML clocks stop working during DST.",
      "C) You must manually reboot Azure twice a year.",
      "D) Schedules run 1 hour backwards."
    ],
    correctAnswer: [0],
    explanation: "Correct Answer: A) Best practice for global enterprise pipelines is to schedule all jobs in Coordinated Universal Time (UTC). Explanation: Standardizing on UTC eliminates daylight saving time shift bugs across global distributed systems."
  },
  {
    id: 405,
    domain: "Track 4: ML Pipelines - Scheduling & CI/CD",
    type: "single",
    scenario: "Congratulations! You have completed all 100 questions in Track 4 (Azure ML Pipelines & Component Orchestration - pipeline-building). What is the ultimate power of modular pipeline engineering?",
    options: [
      "A) That scripts should always be 10,000 lines long in a single file.",
      "B) That decomposing AI workflows into reusable, containerized DAG components enables step caching, parallel batch scaling, polyglot collaboration, and automated CI/CD/CT scheduling, turning brittle data scripts into resilient enterprise software.",
      "C) That pipelines are unnecessary.",
      "D) That computers run faster without YAML."
    ],
    correctAnswer: [1],
    explanation: "Correct Answer: B) That decomposing AI workflows into reusable DAG components enables caching, parallel batch scaling, polyglot collaboration, and automated scheduling. Explanation: You have mastered Azure Machine Learning Pipelines! Next, we explore AI Ethics and Responsible AI with the Responsible AI Dashboard!"
  }
];
