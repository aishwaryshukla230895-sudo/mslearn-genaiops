// ==========================================
// Track 3: MLOps CI/CD - EASY DIFFICULTY (Questions 806-905)
// ==========================================

window.QUIZ_DATA_EASY_MLOPS = [
  {
    "id": 806,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on MLOps Maturity Level 0. During an entry-level operational deployment (Scenario #1), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for characterizing manual model building and deployment in Azure AI?",
    "options": [
      "A) Script-driven manual training and ad-hoc model handoffs without CI/CD",
      "B) Full automated retraining triggers on data drift",
      "C) Automated CI/CD pipeline gating across environments",
      "D) Zero-touch automated model serving and A/B testing"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Script-driven manual training and ad-hoc model handoffs without CI/CD. Explanation: In Microsoft AI-300 foundational operations, Script-driven manual training and ad-hoc model handoffs without CI/CD is the standard specification for characterizing manual model building and deployment. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 807,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on MLOps Maturity Level 1. During an entry-level operational deployment (Scenario #1), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for implementing DevOps automation for ML training pipelines in Azure AI?",
    "options": [
      "A) Automated ML pipeline execution triggered by code changes (CI for training)",
      "B) Manual execution of scripts on local laptops",
      "C) No version control for training code",
      "D) Absence of data storage integration"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Automated ML pipeline execution triggered by code changes (CI for training). Explanation: In Microsoft AI-300 foundational operations, Automated ML pipeline execution triggered by code changes (CI for training) is the standard specification for implementing DevOps automation for ML training pipelines. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 808,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on MLOps Maturity Level 2. During an entry-level operational deployment (Scenario #1), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for automating model deployment (CD for models) in Azure AI?",
    "options": [
      "A) Continuous Deployment pipeline triggered when a new model is registered in Model Registry",
      "B) Manual SSH transfer of model weights to VMs",
      "C) Disabling model versioning",
      "D) Removing automated tests before release"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Continuous Deployment pipeline triggered when a new model is registered in Model Registry. Explanation: In Microsoft AI-300 foundational operations, Continuous Deployment pipeline triggered when a new model is registered in Model Registry is the standard specification for automating model deployment (CD for models). Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 809,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on GitHub Actions CI/CD. During an entry-level operational deployment (Scenario #1), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for authenticating a GitHub Actions workflow to Azure ML in Azure AI?",
    "options": [
      "A) OpenID Connect (OIDC) federation or Azure Service Principal stored in GitHub Secrets",
      "B) Hardcoding user passwords in workflow YAML",
      "C) Anonymous unauthenticated access",
      "D) Using public SSH keys without RBAC"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) OpenID Connect (OIDC) federation or Azure Service Principal stored in GitHub Secrets. Explanation: In Microsoft AI-300 foundational operations, OpenID Connect (OIDC) federation or Azure Service Principal stored in GitHub Secrets is the standard specification for authenticating a GitHub Actions workflow to Azure ML. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 810,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "multiple",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Environment Promotion. During an entry-level operational deployment (Scenario #1), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which THREE of the following are valid foundational components or configurations required for moving models safely from Dev to Staging to Production? (Select three)",
    "options": [
      "A) Model evaluation accuracy validation",
      "B) Manual or automated approval gate in staging",
      "C) Model tagging (e.g., stage=production)",
      "D) Directly deploying untested code to production cluster",
      "E) Deleting development models daily"
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answer: A, B, and C. Explanation: For moving models safely from Dev to Staging to Production, Azure AI requires Model evaluation accuracy validation, Manual or automated approval gate in staging, and Model tagging (e.g., stage=production). Options D and E are invalid configurations for this operational step."
  },
  {
    "id": 811,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Data Drift Detection. During an entry-level operational deployment (Scenario #1), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for monitoring baseline vs target dataset distribution shifts in Azure AI?",
    "options": [
      "A) Azure ML Data Drift monitors comparing training baseline with live inference data",
      "B) Checking VM CPU utilization only",
      "C) Counting total lines of code in scripts",
      "D) Reviewing firewall firewall rules"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Azure ML Data Drift monitors comparing training baseline with live inference data. Explanation: In Microsoft AI-300 foundational operations, Azure ML Data Drift monitors comparing training baseline with live inference data is the standard specification for monitoring baseline vs target dataset distribution shifts. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 812,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Automated Retraining. During an entry-level operational deployment (Scenario #1), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for triggering a retraining pipeline when drift exceeds thresholds in Azure AI?",
    "options": [
      "A) Event Grid or Azure Monitor alert triggering an Azure ML Pipeline job",
      "B) Manually checking logs every Sunday morning",
      "C) Rebooting the scoring web server",
      "D) Deleting old model archives"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Event Grid or Azure Monitor alert triggering an Azure ML Pipeline job. Explanation: In Microsoft AI-300 foundational operations, Event Grid or Azure Monitor alert triggering an Azure ML Pipeline job is the standard specification for triggering a retraining pipeline when drift exceeds thresholds. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 813,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Model Versioning. During an entry-level operational deployment (Scenario #1), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for maintaining immutable model history in Azure AI?",
    "options": [
      "A) Automatic integer incrementing (v1, v2, v3) in Azure ML Model Registry",
      "B) Overwriting the same blob file repeatedly",
      "C) Renaming files locally on developer laptops",
      "D) Storing weights in volatile RAM only"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Automatic integer incrementing (v1, v2, v3) in Azure ML Model Registry. Explanation: In Microsoft AI-300 foundational operations, Automatic integer incrementing (v1, v2, v3) in Azure ML Model Registry is the standard specification for maintaining immutable model history. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 814,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Unit Testing ML Code. During an entry-level operational deployment (Scenario #1), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for validating data preprocessing functions in CI pipelines in Azure AI?",
    "options": [
      "A) Running pytest or unittest on data transformations before training",
      "B) Skipping tests to save compute time",
      "C) Testing only after production outage occurs",
      "D) Deploying code without linting"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Running pytest or unittest on data transformations before training. Explanation: In Microsoft AI-300 foundational operations, Running pytest or unittest on data transformations before training is the standard specification for validating data preprocessing functions in CI pipelines. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 815,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "multiple",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Infrastructure as Code. During an entry-level operational deployment (Scenario #1), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which THREE of the following are valid foundational components or configurations required for provisioning MLOps environments repeatably? (Select three)",
    "options": [
      "A) Bicep parameter files per environment",
      "B) Automated CLI deployment execution",
      "C) Version-controlled IaC definitions",
      "D) Manual click-ops in Azure Portal for every deployment",
      "E) Writing bash commands in Word documents"
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answer: A, B, and C. Explanation: For provisioning MLOps environments repeatably, Azure AI requires Bicep parameter files per environment, Automated CLI deployment execution, and Version-controlled IaC definitions. Options D and E are invalid configurations for this operational step."
  },
  {
    "id": 816,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on MLOps Maturity Level 0. During an entry-level operational deployment (Scenario #2), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for characterizing manual model building and deployment in Azure AI?",
    "options": [
      "A) Script-driven manual training and ad-hoc model handoffs without CI/CD",
      "B) Full automated retraining triggers on data drift",
      "C) Automated CI/CD pipeline gating across environments",
      "D) Zero-touch automated model serving and A/B testing"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Script-driven manual training and ad-hoc model handoffs without CI/CD. Explanation: In Microsoft AI-300 foundational operations, Script-driven manual training and ad-hoc model handoffs without CI/CD is the standard specification for characterizing manual model building and deployment. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 817,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on MLOps Maturity Level 1. During an entry-level operational deployment (Scenario #2), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for implementing DevOps automation for ML training pipelines in Azure AI?",
    "options": [
      "A) Automated ML pipeline execution triggered by code changes (CI for training)",
      "B) Manual execution of scripts on local laptops",
      "C) No version control for training code",
      "D) Absence of data storage integration"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Automated ML pipeline execution triggered by code changes (CI for training). Explanation: In Microsoft AI-300 foundational operations, Automated ML pipeline execution triggered by code changes (CI for training) is the standard specification for implementing DevOps automation for ML training pipelines. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 818,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on MLOps Maturity Level 2. During an entry-level operational deployment (Scenario #2), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for automating model deployment (CD for models) in Azure AI?",
    "options": [
      "A) Continuous Deployment pipeline triggered when a new model is registered in Model Registry",
      "B) Manual SSH transfer of model weights to VMs",
      "C) Disabling model versioning",
      "D) Removing automated tests before release"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Continuous Deployment pipeline triggered when a new model is registered in Model Registry. Explanation: In Microsoft AI-300 foundational operations, Continuous Deployment pipeline triggered when a new model is registered in Model Registry is the standard specification for automating model deployment (CD for models). Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 819,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on GitHub Actions CI/CD. During an entry-level operational deployment (Scenario #2), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for authenticating a GitHub Actions workflow to Azure ML in Azure AI?",
    "options": [
      "A) OpenID Connect (OIDC) federation or Azure Service Principal stored in GitHub Secrets",
      "B) Hardcoding user passwords in workflow YAML",
      "C) Anonymous unauthenticated access",
      "D) Using public SSH keys without RBAC"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) OpenID Connect (OIDC) federation or Azure Service Principal stored in GitHub Secrets. Explanation: In Microsoft AI-300 foundational operations, OpenID Connect (OIDC) federation or Azure Service Principal stored in GitHub Secrets is the standard specification for authenticating a GitHub Actions workflow to Azure ML. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 820,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "multiple",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Environment Promotion. During an entry-level operational deployment (Scenario #2), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which THREE of the following are valid foundational components or configurations required for moving models safely from Dev to Staging to Production? (Select three)",
    "options": [
      "A) Model evaluation accuracy validation",
      "B) Manual or automated approval gate in staging",
      "C) Model tagging (e.g., stage=production)",
      "D) Directly deploying untested code to production cluster",
      "E) Deleting development models daily"
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answer: A, B, and C. Explanation: For moving models safely from Dev to Staging to Production, Azure AI requires Model evaluation accuracy validation, Manual or automated approval gate in staging, and Model tagging (e.g., stage=production). Options D and E are invalid configurations for this operational step."
  },
  {
    "id": 821,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Data Drift Detection. During an entry-level operational deployment (Scenario #2), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for monitoring baseline vs target dataset distribution shifts in Azure AI?",
    "options": [
      "A) Azure ML Data Drift monitors comparing training baseline with live inference data",
      "B) Checking VM CPU utilization only",
      "C) Counting total lines of code in scripts",
      "D) Reviewing firewall firewall rules"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Azure ML Data Drift monitors comparing training baseline with live inference data. Explanation: In Microsoft AI-300 foundational operations, Azure ML Data Drift monitors comparing training baseline with live inference data is the standard specification for monitoring baseline vs target dataset distribution shifts. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 822,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Automated Retraining. During an entry-level operational deployment (Scenario #2), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for triggering a retraining pipeline when drift exceeds thresholds in Azure AI?",
    "options": [
      "A) Event Grid or Azure Monitor alert triggering an Azure ML Pipeline job",
      "B) Manually checking logs every Sunday morning",
      "C) Rebooting the scoring web server",
      "D) Deleting old model archives"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Event Grid or Azure Monitor alert triggering an Azure ML Pipeline job. Explanation: In Microsoft AI-300 foundational operations, Event Grid or Azure Monitor alert triggering an Azure ML Pipeline job is the standard specification for triggering a retraining pipeline when drift exceeds thresholds. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 823,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Model Versioning. During an entry-level operational deployment (Scenario #2), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for maintaining immutable model history in Azure AI?",
    "options": [
      "A) Automatic integer incrementing (v1, v2, v3) in Azure ML Model Registry",
      "B) Overwriting the same blob file repeatedly",
      "C) Renaming files locally on developer laptops",
      "D) Storing weights in volatile RAM only"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Automatic integer incrementing (v1, v2, v3) in Azure ML Model Registry. Explanation: In Microsoft AI-300 foundational operations, Automatic integer incrementing (v1, v2, v3) in Azure ML Model Registry is the standard specification for maintaining immutable model history. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 824,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Unit Testing ML Code. During an entry-level operational deployment (Scenario #2), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for validating data preprocessing functions in CI pipelines in Azure AI?",
    "options": [
      "A) Running pytest or unittest on data transformations before training",
      "B) Skipping tests to save compute time",
      "C) Testing only after production outage occurs",
      "D) Deploying code without linting"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Running pytest or unittest on data transformations before training. Explanation: In Microsoft AI-300 foundational operations, Running pytest or unittest on data transformations before training is the standard specification for validating data preprocessing functions in CI pipelines. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 825,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "multiple",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Infrastructure as Code. During an entry-level operational deployment (Scenario #2), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which THREE of the following are valid foundational components or configurations required for provisioning MLOps environments repeatably? (Select three)",
    "options": [
      "A) Bicep parameter files per environment",
      "B) Automated CLI deployment execution",
      "C) Version-controlled IaC definitions",
      "D) Manual click-ops in Azure Portal for every deployment",
      "E) Writing bash commands in Word documents"
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answer: A, B, and C. Explanation: For provisioning MLOps environments repeatably, Azure AI requires Bicep parameter files per environment, Automated CLI deployment execution, and Version-controlled IaC definitions. Options D and E are invalid configurations for this operational step."
  },
  {
    "id": 826,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on MLOps Maturity Level 0. During an entry-level operational deployment (Scenario #3), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for characterizing manual model building and deployment in Azure AI?",
    "options": [
      "A) Script-driven manual training and ad-hoc model handoffs without CI/CD",
      "B) Full automated retraining triggers on data drift",
      "C) Automated CI/CD pipeline gating across environments",
      "D) Zero-touch automated model serving and A/B testing"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Script-driven manual training and ad-hoc model handoffs without CI/CD. Explanation: In Microsoft AI-300 foundational operations, Script-driven manual training and ad-hoc model handoffs without CI/CD is the standard specification for characterizing manual model building and deployment. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 827,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on MLOps Maturity Level 1. During an entry-level operational deployment (Scenario #3), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for implementing DevOps automation for ML training pipelines in Azure AI?",
    "options": [
      "A) Automated ML pipeline execution triggered by code changes (CI for training)",
      "B) Manual execution of scripts on local laptops",
      "C) No version control for training code",
      "D) Absence of data storage integration"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Automated ML pipeline execution triggered by code changes (CI for training). Explanation: In Microsoft AI-300 foundational operations, Automated ML pipeline execution triggered by code changes (CI for training) is the standard specification for implementing DevOps automation for ML training pipelines. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 828,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on MLOps Maturity Level 2. During an entry-level operational deployment (Scenario #3), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for automating model deployment (CD for models) in Azure AI?",
    "options": [
      "A) Continuous Deployment pipeline triggered when a new model is registered in Model Registry",
      "B) Manual SSH transfer of model weights to VMs",
      "C) Disabling model versioning",
      "D) Removing automated tests before release"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Continuous Deployment pipeline triggered when a new model is registered in Model Registry. Explanation: In Microsoft AI-300 foundational operations, Continuous Deployment pipeline triggered when a new model is registered in Model Registry is the standard specification for automating model deployment (CD for models). Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 829,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on GitHub Actions CI/CD. During an entry-level operational deployment (Scenario #3), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for authenticating a GitHub Actions workflow to Azure ML in Azure AI?",
    "options": [
      "A) OpenID Connect (OIDC) federation or Azure Service Principal stored in GitHub Secrets",
      "B) Hardcoding user passwords in workflow YAML",
      "C) Anonymous unauthenticated access",
      "D) Using public SSH keys without RBAC"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) OpenID Connect (OIDC) federation or Azure Service Principal stored in GitHub Secrets. Explanation: In Microsoft AI-300 foundational operations, OpenID Connect (OIDC) federation or Azure Service Principal stored in GitHub Secrets is the standard specification for authenticating a GitHub Actions workflow to Azure ML. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 830,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "multiple",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Environment Promotion. During an entry-level operational deployment (Scenario #3), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which THREE of the following are valid foundational components or configurations required for moving models safely from Dev to Staging to Production? (Select three)",
    "options": [
      "A) Model evaluation accuracy validation",
      "B) Manual or automated approval gate in staging",
      "C) Model tagging (e.g., stage=production)",
      "D) Directly deploying untested code to production cluster",
      "E) Deleting development models daily"
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answer: A, B, and C. Explanation: For moving models safely from Dev to Staging to Production, Azure AI requires Model evaluation accuracy validation, Manual or automated approval gate in staging, and Model tagging (e.g., stage=production). Options D and E are invalid configurations for this operational step."
  },
  {
    "id": 831,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Data Drift Detection. During an entry-level operational deployment (Scenario #3), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for monitoring baseline vs target dataset distribution shifts in Azure AI?",
    "options": [
      "A) Azure ML Data Drift monitors comparing training baseline with live inference data",
      "B) Checking VM CPU utilization only",
      "C) Counting total lines of code in scripts",
      "D) Reviewing firewall firewall rules"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Azure ML Data Drift monitors comparing training baseline with live inference data. Explanation: In Microsoft AI-300 foundational operations, Azure ML Data Drift monitors comparing training baseline with live inference data is the standard specification for monitoring baseline vs target dataset distribution shifts. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 832,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Automated Retraining. During an entry-level operational deployment (Scenario #3), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for triggering a retraining pipeline when drift exceeds thresholds in Azure AI?",
    "options": [
      "A) Event Grid or Azure Monitor alert triggering an Azure ML Pipeline job",
      "B) Manually checking logs every Sunday morning",
      "C) Rebooting the scoring web server",
      "D) Deleting old model archives"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Event Grid or Azure Monitor alert triggering an Azure ML Pipeline job. Explanation: In Microsoft AI-300 foundational operations, Event Grid or Azure Monitor alert triggering an Azure ML Pipeline job is the standard specification for triggering a retraining pipeline when drift exceeds thresholds. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 833,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Model Versioning. During an entry-level operational deployment (Scenario #3), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for maintaining immutable model history in Azure AI?",
    "options": [
      "A) Automatic integer incrementing (v1, v2, v3) in Azure ML Model Registry",
      "B) Overwriting the same blob file repeatedly",
      "C) Renaming files locally on developer laptops",
      "D) Storing weights in volatile RAM only"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Automatic integer incrementing (v1, v2, v3) in Azure ML Model Registry. Explanation: In Microsoft AI-300 foundational operations, Automatic integer incrementing (v1, v2, v3) in Azure ML Model Registry is the standard specification for maintaining immutable model history. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 834,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Unit Testing ML Code. During an entry-level operational deployment (Scenario #3), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for validating data preprocessing functions in CI pipelines in Azure AI?",
    "options": [
      "A) Running pytest or unittest on data transformations before training",
      "B) Skipping tests to save compute time",
      "C) Testing only after production outage occurs",
      "D) Deploying code without linting"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Running pytest or unittest on data transformations before training. Explanation: In Microsoft AI-300 foundational operations, Running pytest or unittest on data transformations before training is the standard specification for validating data preprocessing functions in CI pipelines. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 835,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "multiple",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Infrastructure as Code. During an entry-level operational deployment (Scenario #3), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which THREE of the following are valid foundational components or configurations required for provisioning MLOps environments repeatably? (Select three)",
    "options": [
      "A) Bicep parameter files per environment",
      "B) Automated CLI deployment execution",
      "C) Version-controlled IaC definitions",
      "D) Manual click-ops in Azure Portal for every deployment",
      "E) Writing bash commands in Word documents"
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answer: A, B, and C. Explanation: For provisioning MLOps environments repeatably, Azure AI requires Bicep parameter files per environment, Automated CLI deployment execution, and Version-controlled IaC definitions. Options D and E are invalid configurations for this operational step."
  },
  {
    "id": 836,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on MLOps Maturity Level 0. During an entry-level operational deployment (Scenario #4), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for characterizing manual model building and deployment in Azure AI?",
    "options": [
      "A) Script-driven manual training and ad-hoc model handoffs without CI/CD",
      "B) Full automated retraining triggers on data drift",
      "C) Automated CI/CD pipeline gating across environments",
      "D) Zero-touch automated model serving and A/B testing"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Script-driven manual training and ad-hoc model handoffs without CI/CD. Explanation: In Microsoft AI-300 foundational operations, Script-driven manual training and ad-hoc model handoffs without CI/CD is the standard specification for characterizing manual model building and deployment. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 837,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on MLOps Maturity Level 1. During an entry-level operational deployment (Scenario #4), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for implementing DevOps automation for ML training pipelines in Azure AI?",
    "options": [
      "A) Automated ML pipeline execution triggered by code changes (CI for training)",
      "B) Manual execution of scripts on local laptops",
      "C) No version control for training code",
      "D) Absence of data storage integration"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Automated ML pipeline execution triggered by code changes (CI for training). Explanation: In Microsoft AI-300 foundational operations, Automated ML pipeline execution triggered by code changes (CI for training) is the standard specification for implementing DevOps automation for ML training pipelines. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 838,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on MLOps Maturity Level 2. During an entry-level operational deployment (Scenario #4), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for automating model deployment (CD for models) in Azure AI?",
    "options": [
      "A) Continuous Deployment pipeline triggered when a new model is registered in Model Registry",
      "B) Manual SSH transfer of model weights to VMs",
      "C) Disabling model versioning",
      "D) Removing automated tests before release"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Continuous Deployment pipeline triggered when a new model is registered in Model Registry. Explanation: In Microsoft AI-300 foundational operations, Continuous Deployment pipeline triggered when a new model is registered in Model Registry is the standard specification for automating model deployment (CD for models). Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 839,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on GitHub Actions CI/CD. During an entry-level operational deployment (Scenario #4), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for authenticating a GitHub Actions workflow to Azure ML in Azure AI?",
    "options": [
      "A) OpenID Connect (OIDC) federation or Azure Service Principal stored in GitHub Secrets",
      "B) Hardcoding user passwords in workflow YAML",
      "C) Anonymous unauthenticated access",
      "D) Using public SSH keys without RBAC"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) OpenID Connect (OIDC) federation or Azure Service Principal stored in GitHub Secrets. Explanation: In Microsoft AI-300 foundational operations, OpenID Connect (OIDC) federation or Azure Service Principal stored in GitHub Secrets is the standard specification for authenticating a GitHub Actions workflow to Azure ML. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 840,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "multiple",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Environment Promotion. During an entry-level operational deployment (Scenario #4), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which THREE of the following are valid foundational components or configurations required for moving models safely from Dev to Staging to Production? (Select three)",
    "options": [
      "A) Model evaluation accuracy validation",
      "B) Manual or automated approval gate in staging",
      "C) Model tagging (e.g., stage=production)",
      "D) Directly deploying untested code to production cluster",
      "E) Deleting development models daily"
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answer: A, B, and C. Explanation: For moving models safely from Dev to Staging to Production, Azure AI requires Model evaluation accuracy validation, Manual or automated approval gate in staging, and Model tagging (e.g., stage=production). Options D and E are invalid configurations for this operational step."
  },
  {
    "id": 841,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Data Drift Detection. During an entry-level operational deployment (Scenario #4), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for monitoring baseline vs target dataset distribution shifts in Azure AI?",
    "options": [
      "A) Azure ML Data Drift monitors comparing training baseline with live inference data",
      "B) Checking VM CPU utilization only",
      "C) Counting total lines of code in scripts",
      "D) Reviewing firewall firewall rules"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Azure ML Data Drift monitors comparing training baseline with live inference data. Explanation: In Microsoft AI-300 foundational operations, Azure ML Data Drift monitors comparing training baseline with live inference data is the standard specification for monitoring baseline vs target dataset distribution shifts. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 842,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Automated Retraining. During an entry-level operational deployment (Scenario #4), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for triggering a retraining pipeline when drift exceeds thresholds in Azure AI?",
    "options": [
      "A) Event Grid or Azure Monitor alert triggering an Azure ML Pipeline job",
      "B) Manually checking logs every Sunday morning",
      "C) Rebooting the scoring web server",
      "D) Deleting old model archives"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Event Grid or Azure Monitor alert triggering an Azure ML Pipeline job. Explanation: In Microsoft AI-300 foundational operations, Event Grid or Azure Monitor alert triggering an Azure ML Pipeline job is the standard specification for triggering a retraining pipeline when drift exceeds thresholds. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 843,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Model Versioning. During an entry-level operational deployment (Scenario #4), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for maintaining immutable model history in Azure AI?",
    "options": [
      "A) Automatic integer incrementing (v1, v2, v3) in Azure ML Model Registry",
      "B) Overwriting the same blob file repeatedly",
      "C) Renaming files locally on developer laptops",
      "D) Storing weights in volatile RAM only"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Automatic integer incrementing (v1, v2, v3) in Azure ML Model Registry. Explanation: In Microsoft AI-300 foundational operations, Automatic integer incrementing (v1, v2, v3) in Azure ML Model Registry is the standard specification for maintaining immutable model history. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 844,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Unit Testing ML Code. During an entry-level operational deployment (Scenario #4), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for validating data preprocessing functions in CI pipelines in Azure AI?",
    "options": [
      "A) Running pytest or unittest on data transformations before training",
      "B) Skipping tests to save compute time",
      "C) Testing only after production outage occurs",
      "D) Deploying code without linting"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Running pytest or unittest on data transformations before training. Explanation: In Microsoft AI-300 foundational operations, Running pytest or unittest on data transformations before training is the standard specification for validating data preprocessing functions in CI pipelines. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 845,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "multiple",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Infrastructure as Code. During an entry-level operational deployment (Scenario #4), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which THREE of the following are valid foundational components or configurations required for provisioning MLOps environments repeatably? (Select three)",
    "options": [
      "A) Bicep parameter files per environment",
      "B) Automated CLI deployment execution",
      "C) Version-controlled IaC definitions",
      "D) Manual click-ops in Azure Portal for every deployment",
      "E) Writing bash commands in Word documents"
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answer: A, B, and C. Explanation: For provisioning MLOps environments repeatably, Azure AI requires Bicep parameter files per environment, Automated CLI deployment execution, and Version-controlled IaC definitions. Options D and E are invalid configurations for this operational step."
  },
  {
    "id": 846,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on MLOps Maturity Level 0. During an entry-level operational deployment (Scenario #5), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for characterizing manual model building and deployment in Azure AI?",
    "options": [
      "A) Script-driven manual training and ad-hoc model handoffs without CI/CD",
      "B) Full automated retraining triggers on data drift",
      "C) Automated CI/CD pipeline gating across environments",
      "D) Zero-touch automated model serving and A/B testing"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Script-driven manual training and ad-hoc model handoffs without CI/CD. Explanation: In Microsoft AI-300 foundational operations, Script-driven manual training and ad-hoc model handoffs without CI/CD is the standard specification for characterizing manual model building and deployment. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 847,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on MLOps Maturity Level 1. During an entry-level operational deployment (Scenario #5), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for implementing DevOps automation for ML training pipelines in Azure AI?",
    "options": [
      "A) Automated ML pipeline execution triggered by code changes (CI for training)",
      "B) Manual execution of scripts on local laptops",
      "C) No version control for training code",
      "D) Absence of data storage integration"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Automated ML pipeline execution triggered by code changes (CI for training). Explanation: In Microsoft AI-300 foundational operations, Automated ML pipeline execution triggered by code changes (CI for training) is the standard specification for implementing DevOps automation for ML training pipelines. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 848,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on MLOps Maturity Level 2. During an entry-level operational deployment (Scenario #5), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for automating model deployment (CD for models) in Azure AI?",
    "options": [
      "A) Continuous Deployment pipeline triggered when a new model is registered in Model Registry",
      "B) Manual SSH transfer of model weights to VMs",
      "C) Disabling model versioning",
      "D) Removing automated tests before release"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Continuous Deployment pipeline triggered when a new model is registered in Model Registry. Explanation: In Microsoft AI-300 foundational operations, Continuous Deployment pipeline triggered when a new model is registered in Model Registry is the standard specification for automating model deployment (CD for models). Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 849,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on GitHub Actions CI/CD. During an entry-level operational deployment (Scenario #5), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for authenticating a GitHub Actions workflow to Azure ML in Azure AI?",
    "options": [
      "A) OpenID Connect (OIDC) federation or Azure Service Principal stored in GitHub Secrets",
      "B) Hardcoding user passwords in workflow YAML",
      "C) Anonymous unauthenticated access",
      "D) Using public SSH keys without RBAC"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) OpenID Connect (OIDC) federation or Azure Service Principal stored in GitHub Secrets. Explanation: In Microsoft AI-300 foundational operations, OpenID Connect (OIDC) federation or Azure Service Principal stored in GitHub Secrets is the standard specification for authenticating a GitHub Actions workflow to Azure ML. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 850,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "multiple",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Environment Promotion. During an entry-level operational deployment (Scenario #5), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which THREE of the following are valid foundational components or configurations required for moving models safely from Dev to Staging to Production? (Select three)",
    "options": [
      "A) Model evaluation accuracy validation",
      "B) Manual or automated approval gate in staging",
      "C) Model tagging (e.g., stage=production)",
      "D) Directly deploying untested code to production cluster",
      "E) Deleting development models daily"
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answer: A, B, and C. Explanation: For moving models safely from Dev to Staging to Production, Azure AI requires Model evaluation accuracy validation, Manual or automated approval gate in staging, and Model tagging (e.g., stage=production). Options D and E are invalid configurations for this operational step."
  },
  {
    "id": 851,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Data Drift Detection. During an entry-level operational deployment (Scenario #5), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for monitoring baseline vs target dataset distribution shifts in Azure AI?",
    "options": [
      "A) Azure ML Data Drift monitors comparing training baseline with live inference data",
      "B) Checking VM CPU utilization only",
      "C) Counting total lines of code in scripts",
      "D) Reviewing firewall firewall rules"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Azure ML Data Drift monitors comparing training baseline with live inference data. Explanation: In Microsoft AI-300 foundational operations, Azure ML Data Drift monitors comparing training baseline with live inference data is the standard specification for monitoring baseline vs target dataset distribution shifts. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 852,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Automated Retraining. During an entry-level operational deployment (Scenario #5), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for triggering a retraining pipeline when drift exceeds thresholds in Azure AI?",
    "options": [
      "A) Event Grid or Azure Monitor alert triggering an Azure ML Pipeline job",
      "B) Manually checking logs every Sunday morning",
      "C) Rebooting the scoring web server",
      "D) Deleting old model archives"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Event Grid or Azure Monitor alert triggering an Azure ML Pipeline job. Explanation: In Microsoft AI-300 foundational operations, Event Grid or Azure Monitor alert triggering an Azure ML Pipeline job is the standard specification for triggering a retraining pipeline when drift exceeds thresholds. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 853,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Model Versioning. During an entry-level operational deployment (Scenario #5), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for maintaining immutable model history in Azure AI?",
    "options": [
      "A) Automatic integer incrementing (v1, v2, v3) in Azure ML Model Registry",
      "B) Overwriting the same blob file repeatedly",
      "C) Renaming files locally on developer laptops",
      "D) Storing weights in volatile RAM only"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Automatic integer incrementing (v1, v2, v3) in Azure ML Model Registry. Explanation: In Microsoft AI-300 foundational operations, Automatic integer incrementing (v1, v2, v3) in Azure ML Model Registry is the standard specification for maintaining immutable model history. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 854,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Unit Testing ML Code. During an entry-level operational deployment (Scenario #5), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for validating data preprocessing functions in CI pipelines in Azure AI?",
    "options": [
      "A) Running pytest or unittest on data transformations before training",
      "B) Skipping tests to save compute time",
      "C) Testing only after production outage occurs",
      "D) Deploying code without linting"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Running pytest or unittest on data transformations before training. Explanation: In Microsoft AI-300 foundational operations, Running pytest or unittest on data transformations before training is the standard specification for validating data preprocessing functions in CI pipelines. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 855,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "multiple",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Infrastructure as Code. During an entry-level operational deployment (Scenario #5), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which THREE of the following are valid foundational components or configurations required for provisioning MLOps environments repeatably? (Select three)",
    "options": [
      "A) Bicep parameter files per environment",
      "B) Automated CLI deployment execution",
      "C) Version-controlled IaC definitions",
      "D) Manual click-ops in Azure Portal for every deployment",
      "E) Writing bash commands in Word documents"
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answer: A, B, and C. Explanation: For provisioning MLOps environments repeatably, Azure AI requires Bicep parameter files per environment, Automated CLI deployment execution, and Version-controlled IaC definitions. Options D and E are invalid configurations for this operational step."
  },
  {
    "id": 856,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on MLOps Maturity Level 0. During an entry-level operational deployment (Scenario #6), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for characterizing manual model building and deployment in Azure AI?",
    "options": [
      "A) Script-driven manual training and ad-hoc model handoffs without CI/CD",
      "B) Full automated retraining triggers on data drift",
      "C) Automated CI/CD pipeline gating across environments",
      "D) Zero-touch automated model serving and A/B testing"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Script-driven manual training and ad-hoc model handoffs without CI/CD. Explanation: In Microsoft AI-300 foundational operations, Script-driven manual training and ad-hoc model handoffs without CI/CD is the standard specification for characterizing manual model building and deployment. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 857,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on MLOps Maturity Level 1. During an entry-level operational deployment (Scenario #6), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for implementing DevOps automation for ML training pipelines in Azure AI?",
    "options": [
      "A) Automated ML pipeline execution triggered by code changes (CI for training)",
      "B) Manual execution of scripts on local laptops",
      "C) No version control for training code",
      "D) Absence of data storage integration"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Automated ML pipeline execution triggered by code changes (CI for training). Explanation: In Microsoft AI-300 foundational operations, Automated ML pipeline execution triggered by code changes (CI for training) is the standard specification for implementing DevOps automation for ML training pipelines. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 858,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on MLOps Maturity Level 2. During an entry-level operational deployment (Scenario #6), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for automating model deployment (CD for models) in Azure AI?",
    "options": [
      "A) Continuous Deployment pipeline triggered when a new model is registered in Model Registry",
      "B) Manual SSH transfer of model weights to VMs",
      "C) Disabling model versioning",
      "D) Removing automated tests before release"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Continuous Deployment pipeline triggered when a new model is registered in Model Registry. Explanation: In Microsoft AI-300 foundational operations, Continuous Deployment pipeline triggered when a new model is registered in Model Registry is the standard specification for automating model deployment (CD for models). Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 859,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on GitHub Actions CI/CD. During an entry-level operational deployment (Scenario #6), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for authenticating a GitHub Actions workflow to Azure ML in Azure AI?",
    "options": [
      "A) OpenID Connect (OIDC) federation or Azure Service Principal stored in GitHub Secrets",
      "B) Hardcoding user passwords in workflow YAML",
      "C) Anonymous unauthenticated access",
      "D) Using public SSH keys without RBAC"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) OpenID Connect (OIDC) federation or Azure Service Principal stored in GitHub Secrets. Explanation: In Microsoft AI-300 foundational operations, OpenID Connect (OIDC) federation or Azure Service Principal stored in GitHub Secrets is the standard specification for authenticating a GitHub Actions workflow to Azure ML. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 860,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "multiple",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Environment Promotion. During an entry-level operational deployment (Scenario #6), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which THREE of the following are valid foundational components or configurations required for moving models safely from Dev to Staging to Production? (Select three)",
    "options": [
      "A) Model evaluation accuracy validation",
      "B) Manual or automated approval gate in staging",
      "C) Model tagging (e.g., stage=production)",
      "D) Directly deploying untested code to production cluster",
      "E) Deleting development models daily"
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answer: A, B, and C. Explanation: For moving models safely from Dev to Staging to Production, Azure AI requires Model evaluation accuracy validation, Manual or automated approval gate in staging, and Model tagging (e.g., stage=production). Options D and E are invalid configurations for this operational step."
  },
  {
    "id": 861,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Data Drift Detection. During an entry-level operational deployment (Scenario #6), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for monitoring baseline vs target dataset distribution shifts in Azure AI?",
    "options": [
      "A) Azure ML Data Drift monitors comparing training baseline with live inference data",
      "B) Checking VM CPU utilization only",
      "C) Counting total lines of code in scripts",
      "D) Reviewing firewall firewall rules"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Azure ML Data Drift monitors comparing training baseline with live inference data. Explanation: In Microsoft AI-300 foundational operations, Azure ML Data Drift monitors comparing training baseline with live inference data is the standard specification for monitoring baseline vs target dataset distribution shifts. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 862,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Automated Retraining. During an entry-level operational deployment (Scenario #6), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for triggering a retraining pipeline when drift exceeds thresholds in Azure AI?",
    "options": [
      "A) Event Grid or Azure Monitor alert triggering an Azure ML Pipeline job",
      "B) Manually checking logs every Sunday morning",
      "C) Rebooting the scoring web server",
      "D) Deleting old model archives"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Event Grid or Azure Monitor alert triggering an Azure ML Pipeline job. Explanation: In Microsoft AI-300 foundational operations, Event Grid or Azure Monitor alert triggering an Azure ML Pipeline job is the standard specification for triggering a retraining pipeline when drift exceeds thresholds. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 863,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Model Versioning. During an entry-level operational deployment (Scenario #6), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for maintaining immutable model history in Azure AI?",
    "options": [
      "A) Automatic integer incrementing (v1, v2, v3) in Azure ML Model Registry",
      "B) Overwriting the same blob file repeatedly",
      "C) Renaming files locally on developer laptops",
      "D) Storing weights in volatile RAM only"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Automatic integer incrementing (v1, v2, v3) in Azure ML Model Registry. Explanation: In Microsoft AI-300 foundational operations, Automatic integer incrementing (v1, v2, v3) in Azure ML Model Registry is the standard specification for maintaining immutable model history. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 864,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Unit Testing ML Code. During an entry-level operational deployment (Scenario #6), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for validating data preprocessing functions in CI pipelines in Azure AI?",
    "options": [
      "A) Running pytest or unittest on data transformations before training",
      "B) Skipping tests to save compute time",
      "C) Testing only after production outage occurs",
      "D) Deploying code without linting"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Running pytest or unittest on data transformations before training. Explanation: In Microsoft AI-300 foundational operations, Running pytest or unittest on data transformations before training is the standard specification for validating data preprocessing functions in CI pipelines. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 865,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "multiple",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Infrastructure as Code. During an entry-level operational deployment (Scenario #6), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which THREE of the following are valid foundational components or configurations required for provisioning MLOps environments repeatably? (Select three)",
    "options": [
      "A) Bicep parameter files per environment",
      "B) Automated CLI deployment execution",
      "C) Version-controlled IaC definitions",
      "D) Manual click-ops in Azure Portal for every deployment",
      "E) Writing bash commands in Word documents"
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answer: A, B, and C. Explanation: For provisioning MLOps environments repeatably, Azure AI requires Bicep parameter files per environment, Automated CLI deployment execution, and Version-controlled IaC definitions. Options D and E are invalid configurations for this operational step."
  },
  {
    "id": 866,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on MLOps Maturity Level 0. During an entry-level operational deployment (Scenario #7), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for characterizing manual model building and deployment in Azure AI?",
    "options": [
      "A) Script-driven manual training and ad-hoc model handoffs without CI/CD",
      "B) Full automated retraining triggers on data drift",
      "C) Automated CI/CD pipeline gating across environments",
      "D) Zero-touch automated model serving and A/B testing"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Script-driven manual training and ad-hoc model handoffs without CI/CD. Explanation: In Microsoft AI-300 foundational operations, Script-driven manual training and ad-hoc model handoffs without CI/CD is the standard specification for characterizing manual model building and deployment. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 867,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on MLOps Maturity Level 1. During an entry-level operational deployment (Scenario #7), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for implementing DevOps automation for ML training pipelines in Azure AI?",
    "options": [
      "A) Automated ML pipeline execution triggered by code changes (CI for training)",
      "B) Manual execution of scripts on local laptops",
      "C) No version control for training code",
      "D) Absence of data storage integration"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Automated ML pipeline execution triggered by code changes (CI for training). Explanation: In Microsoft AI-300 foundational operations, Automated ML pipeline execution triggered by code changes (CI for training) is the standard specification for implementing DevOps automation for ML training pipelines. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 868,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on MLOps Maturity Level 2. During an entry-level operational deployment (Scenario #7), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for automating model deployment (CD for models) in Azure AI?",
    "options": [
      "A) Continuous Deployment pipeline triggered when a new model is registered in Model Registry",
      "B) Manual SSH transfer of model weights to VMs",
      "C) Disabling model versioning",
      "D) Removing automated tests before release"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Continuous Deployment pipeline triggered when a new model is registered in Model Registry. Explanation: In Microsoft AI-300 foundational operations, Continuous Deployment pipeline triggered when a new model is registered in Model Registry is the standard specification for automating model deployment (CD for models). Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 869,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on GitHub Actions CI/CD. During an entry-level operational deployment (Scenario #7), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for authenticating a GitHub Actions workflow to Azure ML in Azure AI?",
    "options": [
      "A) OpenID Connect (OIDC) federation or Azure Service Principal stored in GitHub Secrets",
      "B) Hardcoding user passwords in workflow YAML",
      "C) Anonymous unauthenticated access",
      "D) Using public SSH keys without RBAC"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) OpenID Connect (OIDC) federation or Azure Service Principal stored in GitHub Secrets. Explanation: In Microsoft AI-300 foundational operations, OpenID Connect (OIDC) federation or Azure Service Principal stored in GitHub Secrets is the standard specification for authenticating a GitHub Actions workflow to Azure ML. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 870,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "multiple",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Environment Promotion. During an entry-level operational deployment (Scenario #7), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which THREE of the following are valid foundational components or configurations required for moving models safely from Dev to Staging to Production? (Select three)",
    "options": [
      "A) Model evaluation accuracy validation",
      "B) Manual or automated approval gate in staging",
      "C) Model tagging (e.g., stage=production)",
      "D) Directly deploying untested code to production cluster",
      "E) Deleting development models daily"
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answer: A, B, and C. Explanation: For moving models safely from Dev to Staging to Production, Azure AI requires Model evaluation accuracy validation, Manual or automated approval gate in staging, and Model tagging (e.g., stage=production). Options D and E are invalid configurations for this operational step."
  },
  {
    "id": 871,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Data Drift Detection. During an entry-level operational deployment (Scenario #7), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for monitoring baseline vs target dataset distribution shifts in Azure AI?",
    "options": [
      "A) Azure ML Data Drift monitors comparing training baseline with live inference data",
      "B) Checking VM CPU utilization only",
      "C) Counting total lines of code in scripts",
      "D) Reviewing firewall firewall rules"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Azure ML Data Drift monitors comparing training baseline with live inference data. Explanation: In Microsoft AI-300 foundational operations, Azure ML Data Drift monitors comparing training baseline with live inference data is the standard specification for monitoring baseline vs target dataset distribution shifts. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 872,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Automated Retraining. During an entry-level operational deployment (Scenario #7), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for triggering a retraining pipeline when drift exceeds thresholds in Azure AI?",
    "options": [
      "A) Event Grid or Azure Monitor alert triggering an Azure ML Pipeline job",
      "B) Manually checking logs every Sunday morning",
      "C) Rebooting the scoring web server",
      "D) Deleting old model archives"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Event Grid or Azure Monitor alert triggering an Azure ML Pipeline job. Explanation: In Microsoft AI-300 foundational operations, Event Grid or Azure Monitor alert triggering an Azure ML Pipeline job is the standard specification for triggering a retraining pipeline when drift exceeds thresholds. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 873,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Model Versioning. During an entry-level operational deployment (Scenario #7), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for maintaining immutable model history in Azure AI?",
    "options": [
      "A) Automatic integer incrementing (v1, v2, v3) in Azure ML Model Registry",
      "B) Overwriting the same blob file repeatedly",
      "C) Renaming files locally on developer laptops",
      "D) Storing weights in volatile RAM only"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Automatic integer incrementing (v1, v2, v3) in Azure ML Model Registry. Explanation: In Microsoft AI-300 foundational operations, Automatic integer incrementing (v1, v2, v3) in Azure ML Model Registry is the standard specification for maintaining immutable model history. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 874,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Unit Testing ML Code. During an entry-level operational deployment (Scenario #7), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for validating data preprocessing functions in CI pipelines in Azure AI?",
    "options": [
      "A) Running pytest or unittest on data transformations before training",
      "B) Skipping tests to save compute time",
      "C) Testing only after production outage occurs",
      "D) Deploying code without linting"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Running pytest or unittest on data transformations before training. Explanation: In Microsoft AI-300 foundational operations, Running pytest or unittest on data transformations before training is the standard specification for validating data preprocessing functions in CI pipelines. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 875,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "multiple",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Infrastructure as Code. During an entry-level operational deployment (Scenario #7), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which THREE of the following are valid foundational components or configurations required for provisioning MLOps environments repeatably? (Select three)",
    "options": [
      "A) Bicep parameter files per environment",
      "B) Automated CLI deployment execution",
      "C) Version-controlled IaC definitions",
      "D) Manual click-ops in Azure Portal for every deployment",
      "E) Writing bash commands in Word documents"
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answer: A, B, and C. Explanation: For provisioning MLOps environments repeatably, Azure AI requires Bicep parameter files per environment, Automated CLI deployment execution, and Version-controlled IaC definitions. Options D and E are invalid configurations for this operational step."
  },
  {
    "id": 876,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on MLOps Maturity Level 0. During an entry-level operational deployment (Scenario #8), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for characterizing manual model building and deployment in Azure AI?",
    "options": [
      "A) Script-driven manual training and ad-hoc model handoffs without CI/CD",
      "B) Full automated retraining triggers on data drift",
      "C) Automated CI/CD pipeline gating across environments",
      "D) Zero-touch automated model serving and A/B testing"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Script-driven manual training and ad-hoc model handoffs without CI/CD. Explanation: In Microsoft AI-300 foundational operations, Script-driven manual training and ad-hoc model handoffs without CI/CD is the standard specification for characterizing manual model building and deployment. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 877,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on MLOps Maturity Level 1. During an entry-level operational deployment (Scenario #8), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for implementing DevOps automation for ML training pipelines in Azure AI?",
    "options": [
      "A) Automated ML pipeline execution triggered by code changes (CI for training)",
      "B) Manual execution of scripts on local laptops",
      "C) No version control for training code",
      "D) Absence of data storage integration"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Automated ML pipeline execution triggered by code changes (CI for training). Explanation: In Microsoft AI-300 foundational operations, Automated ML pipeline execution triggered by code changes (CI for training) is the standard specification for implementing DevOps automation for ML training pipelines. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 878,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on MLOps Maturity Level 2. During an entry-level operational deployment (Scenario #8), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for automating model deployment (CD for models) in Azure AI?",
    "options": [
      "A) Continuous Deployment pipeline triggered when a new model is registered in Model Registry",
      "B) Manual SSH transfer of model weights to VMs",
      "C) Disabling model versioning",
      "D) Removing automated tests before release"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Continuous Deployment pipeline triggered when a new model is registered in Model Registry. Explanation: In Microsoft AI-300 foundational operations, Continuous Deployment pipeline triggered when a new model is registered in Model Registry is the standard specification for automating model deployment (CD for models). Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 879,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on GitHub Actions CI/CD. During an entry-level operational deployment (Scenario #8), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for authenticating a GitHub Actions workflow to Azure ML in Azure AI?",
    "options": [
      "A) OpenID Connect (OIDC) federation or Azure Service Principal stored in GitHub Secrets",
      "B) Hardcoding user passwords in workflow YAML",
      "C) Anonymous unauthenticated access",
      "D) Using public SSH keys without RBAC"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) OpenID Connect (OIDC) federation or Azure Service Principal stored in GitHub Secrets. Explanation: In Microsoft AI-300 foundational operations, OpenID Connect (OIDC) federation or Azure Service Principal stored in GitHub Secrets is the standard specification for authenticating a GitHub Actions workflow to Azure ML. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 880,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "multiple",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Environment Promotion. During an entry-level operational deployment (Scenario #8), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which THREE of the following are valid foundational components or configurations required for moving models safely from Dev to Staging to Production? (Select three)",
    "options": [
      "A) Model evaluation accuracy validation",
      "B) Manual or automated approval gate in staging",
      "C) Model tagging (e.g., stage=production)",
      "D) Directly deploying untested code to production cluster",
      "E) Deleting development models daily"
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answer: A, B, and C. Explanation: For moving models safely from Dev to Staging to Production, Azure AI requires Model evaluation accuracy validation, Manual or automated approval gate in staging, and Model tagging (e.g., stage=production). Options D and E are invalid configurations for this operational step."
  },
  {
    "id": 881,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Data Drift Detection. During an entry-level operational deployment (Scenario #8), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for monitoring baseline vs target dataset distribution shifts in Azure AI?",
    "options": [
      "A) Azure ML Data Drift monitors comparing training baseline with live inference data",
      "B) Checking VM CPU utilization only",
      "C) Counting total lines of code in scripts",
      "D) Reviewing firewall firewall rules"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Azure ML Data Drift monitors comparing training baseline with live inference data. Explanation: In Microsoft AI-300 foundational operations, Azure ML Data Drift monitors comparing training baseline with live inference data is the standard specification for monitoring baseline vs target dataset distribution shifts. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 882,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Automated Retraining. During an entry-level operational deployment (Scenario #8), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for triggering a retraining pipeline when drift exceeds thresholds in Azure AI?",
    "options": [
      "A) Event Grid or Azure Monitor alert triggering an Azure ML Pipeline job",
      "B) Manually checking logs every Sunday morning",
      "C) Rebooting the scoring web server",
      "D) Deleting old model archives"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Event Grid or Azure Monitor alert triggering an Azure ML Pipeline job. Explanation: In Microsoft AI-300 foundational operations, Event Grid or Azure Monitor alert triggering an Azure ML Pipeline job is the standard specification for triggering a retraining pipeline when drift exceeds thresholds. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 883,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Model Versioning. During an entry-level operational deployment (Scenario #8), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for maintaining immutable model history in Azure AI?",
    "options": [
      "A) Automatic integer incrementing (v1, v2, v3) in Azure ML Model Registry",
      "B) Overwriting the same blob file repeatedly",
      "C) Renaming files locally on developer laptops",
      "D) Storing weights in volatile RAM only"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Automatic integer incrementing (v1, v2, v3) in Azure ML Model Registry. Explanation: In Microsoft AI-300 foundational operations, Automatic integer incrementing (v1, v2, v3) in Azure ML Model Registry is the standard specification for maintaining immutable model history. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 884,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Unit Testing ML Code. During an entry-level operational deployment (Scenario #8), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for validating data preprocessing functions in CI pipelines in Azure AI?",
    "options": [
      "A) Running pytest or unittest on data transformations before training",
      "B) Skipping tests to save compute time",
      "C) Testing only after production outage occurs",
      "D) Deploying code without linting"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Running pytest or unittest on data transformations before training. Explanation: In Microsoft AI-300 foundational operations, Running pytest or unittest on data transformations before training is the standard specification for validating data preprocessing functions in CI pipelines. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 885,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "multiple",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Infrastructure as Code. During an entry-level operational deployment (Scenario #8), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which THREE of the following are valid foundational components or configurations required for provisioning MLOps environments repeatably? (Select three)",
    "options": [
      "A) Bicep parameter files per environment",
      "B) Automated CLI deployment execution",
      "C) Version-controlled IaC definitions",
      "D) Manual click-ops in Azure Portal for every deployment",
      "E) Writing bash commands in Word documents"
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answer: A, B, and C. Explanation: For provisioning MLOps environments repeatably, Azure AI requires Bicep parameter files per environment, Automated CLI deployment execution, and Version-controlled IaC definitions. Options D and E are invalid configurations for this operational step."
  },
  {
    "id": 886,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on MLOps Maturity Level 0. During an entry-level operational deployment (Scenario #9), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for characterizing manual model building and deployment in Azure AI?",
    "options": [
      "A) Script-driven manual training and ad-hoc model handoffs without CI/CD",
      "B) Full automated retraining triggers on data drift",
      "C) Automated CI/CD pipeline gating across environments",
      "D) Zero-touch automated model serving and A/B testing"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Script-driven manual training and ad-hoc model handoffs without CI/CD. Explanation: In Microsoft AI-300 foundational operations, Script-driven manual training and ad-hoc model handoffs without CI/CD is the standard specification for characterizing manual model building and deployment. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 887,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on MLOps Maturity Level 1. During an entry-level operational deployment (Scenario #9), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for implementing DevOps automation for ML training pipelines in Azure AI?",
    "options": [
      "A) Automated ML pipeline execution triggered by code changes (CI for training)",
      "B) Manual execution of scripts on local laptops",
      "C) No version control for training code",
      "D) Absence of data storage integration"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Automated ML pipeline execution triggered by code changes (CI for training). Explanation: In Microsoft AI-300 foundational operations, Automated ML pipeline execution triggered by code changes (CI for training) is the standard specification for implementing DevOps automation for ML training pipelines. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 888,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on MLOps Maturity Level 2. During an entry-level operational deployment (Scenario #9), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for automating model deployment (CD for models) in Azure AI?",
    "options": [
      "A) Continuous Deployment pipeline triggered when a new model is registered in Model Registry",
      "B) Manual SSH transfer of model weights to VMs",
      "C) Disabling model versioning",
      "D) Removing automated tests before release"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Continuous Deployment pipeline triggered when a new model is registered in Model Registry. Explanation: In Microsoft AI-300 foundational operations, Continuous Deployment pipeline triggered when a new model is registered in Model Registry is the standard specification for automating model deployment (CD for models). Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 889,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on GitHub Actions CI/CD. During an entry-level operational deployment (Scenario #9), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for authenticating a GitHub Actions workflow to Azure ML in Azure AI?",
    "options": [
      "A) OpenID Connect (OIDC) federation or Azure Service Principal stored in GitHub Secrets",
      "B) Hardcoding user passwords in workflow YAML",
      "C) Anonymous unauthenticated access",
      "D) Using public SSH keys without RBAC"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) OpenID Connect (OIDC) federation or Azure Service Principal stored in GitHub Secrets. Explanation: In Microsoft AI-300 foundational operations, OpenID Connect (OIDC) federation or Azure Service Principal stored in GitHub Secrets is the standard specification for authenticating a GitHub Actions workflow to Azure ML. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 890,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "multiple",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Environment Promotion. During an entry-level operational deployment (Scenario #9), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which THREE of the following are valid foundational components or configurations required for moving models safely from Dev to Staging to Production? (Select three)",
    "options": [
      "A) Model evaluation accuracy validation",
      "B) Manual or automated approval gate in staging",
      "C) Model tagging (e.g., stage=production)",
      "D) Directly deploying untested code to production cluster",
      "E) Deleting development models daily"
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answer: A, B, and C. Explanation: For moving models safely from Dev to Staging to Production, Azure AI requires Model evaluation accuracy validation, Manual or automated approval gate in staging, and Model tagging (e.g., stage=production). Options D and E are invalid configurations for this operational step."
  },
  {
    "id": 891,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Data Drift Detection. During an entry-level operational deployment (Scenario #9), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for monitoring baseline vs target dataset distribution shifts in Azure AI?",
    "options": [
      "A) Azure ML Data Drift monitors comparing training baseline with live inference data",
      "B) Checking VM CPU utilization only",
      "C) Counting total lines of code in scripts",
      "D) Reviewing firewall firewall rules"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Azure ML Data Drift monitors comparing training baseline with live inference data. Explanation: In Microsoft AI-300 foundational operations, Azure ML Data Drift monitors comparing training baseline with live inference data is the standard specification for monitoring baseline vs target dataset distribution shifts. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 892,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Automated Retraining. During an entry-level operational deployment (Scenario #9), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for triggering a retraining pipeline when drift exceeds thresholds in Azure AI?",
    "options": [
      "A) Event Grid or Azure Monitor alert triggering an Azure ML Pipeline job",
      "B) Manually checking logs every Sunday morning",
      "C) Rebooting the scoring web server",
      "D) Deleting old model archives"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Event Grid or Azure Monitor alert triggering an Azure ML Pipeline job. Explanation: In Microsoft AI-300 foundational operations, Event Grid or Azure Monitor alert triggering an Azure ML Pipeline job is the standard specification for triggering a retraining pipeline when drift exceeds thresholds. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 893,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Model Versioning. During an entry-level operational deployment (Scenario #9), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for maintaining immutable model history in Azure AI?",
    "options": [
      "A) Automatic integer incrementing (v1, v2, v3) in Azure ML Model Registry",
      "B) Overwriting the same blob file repeatedly",
      "C) Renaming files locally on developer laptops",
      "D) Storing weights in volatile RAM only"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Automatic integer incrementing (v1, v2, v3) in Azure ML Model Registry. Explanation: In Microsoft AI-300 foundational operations, Automatic integer incrementing (v1, v2, v3) in Azure ML Model Registry is the standard specification for maintaining immutable model history. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 894,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Unit Testing ML Code. During an entry-level operational deployment (Scenario #9), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for validating data preprocessing functions in CI pipelines in Azure AI?",
    "options": [
      "A) Running pytest or unittest on data transformations before training",
      "B) Skipping tests to save compute time",
      "C) Testing only after production outage occurs",
      "D) Deploying code without linting"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Running pytest or unittest on data transformations before training. Explanation: In Microsoft AI-300 foundational operations, Running pytest or unittest on data transformations before training is the standard specification for validating data preprocessing functions in CI pipelines. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 895,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "multiple",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Infrastructure as Code. During an entry-level operational deployment (Scenario #9), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which THREE of the following are valid foundational components or configurations required for provisioning MLOps environments repeatably? (Select three)",
    "options": [
      "A) Bicep parameter files per environment",
      "B) Automated CLI deployment execution",
      "C) Version-controlled IaC definitions",
      "D) Manual click-ops in Azure Portal for every deployment",
      "E) Writing bash commands in Word documents"
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answer: A, B, and C. Explanation: For provisioning MLOps environments repeatably, Azure AI requires Bicep parameter files per environment, Automated CLI deployment execution, and Version-controlled IaC definitions. Options D and E are invalid configurations for this operational step."
  },
  {
    "id": 896,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on MLOps Maturity Level 0. During an entry-level operational deployment (Scenario #10), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for characterizing manual model building and deployment in Azure AI?",
    "options": [
      "A) Script-driven manual training and ad-hoc model handoffs without CI/CD",
      "B) Full automated retraining triggers on data drift",
      "C) Automated CI/CD pipeline gating across environments",
      "D) Zero-touch automated model serving and A/B testing"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Script-driven manual training and ad-hoc model handoffs without CI/CD. Explanation: In Microsoft AI-300 foundational operations, Script-driven manual training and ad-hoc model handoffs without CI/CD is the standard specification for characterizing manual model building and deployment. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 897,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on MLOps Maturity Level 1. During an entry-level operational deployment (Scenario #10), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for implementing DevOps automation for ML training pipelines in Azure AI?",
    "options": [
      "A) Automated ML pipeline execution triggered by code changes (CI for training)",
      "B) Manual execution of scripts on local laptops",
      "C) No version control for training code",
      "D) Absence of data storage integration"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Automated ML pipeline execution triggered by code changes (CI for training). Explanation: In Microsoft AI-300 foundational operations, Automated ML pipeline execution triggered by code changes (CI for training) is the standard specification for implementing DevOps automation for ML training pipelines. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 898,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on MLOps Maturity Level 2. During an entry-level operational deployment (Scenario #10), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for automating model deployment (CD for models) in Azure AI?",
    "options": [
      "A) Continuous Deployment pipeline triggered when a new model is registered in Model Registry",
      "B) Manual SSH transfer of model weights to VMs",
      "C) Disabling model versioning",
      "D) Removing automated tests before release"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Continuous Deployment pipeline triggered when a new model is registered in Model Registry. Explanation: In Microsoft AI-300 foundational operations, Continuous Deployment pipeline triggered when a new model is registered in Model Registry is the standard specification for automating model deployment (CD for models). Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 899,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on GitHub Actions CI/CD. During an entry-level operational deployment (Scenario #10), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for authenticating a GitHub Actions workflow to Azure ML in Azure AI?",
    "options": [
      "A) OpenID Connect (OIDC) federation or Azure Service Principal stored in GitHub Secrets",
      "B) Hardcoding user passwords in workflow YAML",
      "C) Anonymous unauthenticated access",
      "D) Using public SSH keys without RBAC"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) OpenID Connect (OIDC) federation or Azure Service Principal stored in GitHub Secrets. Explanation: In Microsoft AI-300 foundational operations, OpenID Connect (OIDC) federation or Azure Service Principal stored in GitHub Secrets is the standard specification for authenticating a GitHub Actions workflow to Azure ML. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 900,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "multiple",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Environment Promotion. During an entry-level operational deployment (Scenario #10), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which THREE of the following are valid foundational components or configurations required for moving models safely from Dev to Staging to Production? (Select three)",
    "options": [
      "A) Model evaluation accuracy validation",
      "B) Manual or automated approval gate in staging",
      "C) Model tagging (e.g., stage=production)",
      "D) Directly deploying untested code to production cluster",
      "E) Deleting development models daily"
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answer: A, B, and C. Explanation: For moving models safely from Dev to Staging to Production, Azure AI requires Model evaluation accuracy validation, Manual or automated approval gate in staging, and Model tagging (e.g., stage=production). Options D and E are invalid configurations for this operational step."
  },
  {
    "id": 901,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Data Drift Detection. During an entry-level operational deployment (Scenario #10), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for monitoring baseline vs target dataset distribution shifts in Azure AI?",
    "options": [
      "A) Azure ML Data Drift monitors comparing training baseline with live inference data",
      "B) Checking VM CPU utilization only",
      "C) Counting total lines of code in scripts",
      "D) Reviewing firewall firewall rules"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Azure ML Data Drift monitors comparing training baseline with live inference data. Explanation: In Microsoft AI-300 foundational operations, Azure ML Data Drift monitors comparing training baseline with live inference data is the standard specification for monitoring baseline vs target dataset distribution shifts. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 902,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Automated Retraining. During an entry-level operational deployment (Scenario #10), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for triggering a retraining pipeline when drift exceeds thresholds in Azure AI?",
    "options": [
      "A) Event Grid or Azure Monitor alert triggering an Azure ML Pipeline job",
      "B) Manually checking logs every Sunday morning",
      "C) Rebooting the scoring web server",
      "D) Deleting old model archives"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Event Grid or Azure Monitor alert triggering an Azure ML Pipeline job. Explanation: In Microsoft AI-300 foundational operations, Event Grid or Azure Monitor alert triggering an Azure ML Pipeline job is the standard specification for triggering a retraining pipeline when drift exceeds thresholds. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 903,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Model Versioning. During an entry-level operational deployment (Scenario #10), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for maintaining immutable model history in Azure AI?",
    "options": [
      "A) Automatic integer incrementing (v1, v2, v3) in Azure ML Model Registry",
      "B) Overwriting the same blob file repeatedly",
      "C) Renaming files locally on developer laptops",
      "D) Storing weights in volatile RAM only"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Automatic integer incrementing (v1, v2, v3) in Azure ML Model Registry. Explanation: In Microsoft AI-300 foundational operations, Automatic integer incrementing (v1, v2, v3) in Azure ML Model Registry is the standard specification for maintaining immutable model history. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 904,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "single",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Unit Testing ML Code. During an entry-level operational deployment (Scenario #10), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which of the following represents the foundational best practice or correct syntax for validating data preprocessing functions in CI pipelines in Azure AI?",
    "options": [
      "A) Running pytest or unittest on data transformations before training",
      "B) Skipping tests to save compute time",
      "C) Testing only after production outage occurs",
      "D) Deploying code without linting"
    ],
    "correctAnswer": [
      0
    ],
    "explanation": "Correct Answer: A) Running pytest or unittest on data transformations before training. Explanation: In Microsoft AI-300 foundational operations, Running pytest or unittest on data transformations before training is the standard specification for validating data preprocessing functions in CI pipelines. Why others are incorrect: Options B, C, and D reference unrelated services, deprecated syntax, or incorrect cloud configurations."
  },
  {
    "id": 905,
    "domain": "Track 3: MLOps - Maturity Models",
    "difficulty": "Easy",
    "type": "multiple",
    "scenario": "You are a junior MLOps and GenAI engineer at Adventure Works working on Infrastructure as Code. During an entry-level operational deployment (Scenario #10), your team needs to configure standard Azure resources and verify baseline settings.",
    "question": "Which THREE of the following are valid foundational components or configurations required for provisioning MLOps environments repeatably? (Select three)",
    "options": [
      "A) Bicep parameter files per environment",
      "B) Automated CLI deployment execution",
      "C) Version-controlled IaC definitions",
      "D) Manual click-ops in Azure Portal for every deployment",
      "E) Writing bash commands in Word documents"
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "Correct Answer: A, B, and C. Explanation: For provisioning MLOps environments repeatably, Azure AI requires Bicep parameter files per environment, Automated CLI deployment execution, and Version-controlled IaC definitions. Options D and E are invalid configurations for this operational step."
  }
];
