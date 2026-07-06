// Central content store for portfolio + project detail pages

export const profile = {
  name: "Pradeep Awasthi",
  titles: [
    "Senior Engineering Manager",
    "DevSecOps & Cloud Architect",
    "AI Agents Builder",
  ],
  tagline:
    "14+ years turning enterprise engineering into secure, AI-driven, cost-optimized delivery machines.",
  location: "India",
  email: "awasthipradeepawasthi@gmail.com",
  phone: "+91 9205340375",
  linkedin: "https://www.linkedin.com/in/pradeep-awasthi",
  github: "https://github.com/pradeepawasthi",
  stats: [
    { label: "Years of Experience", value: "14+" },
    { label: "Team Size Led", value: "40+" },
    { label: "Budget Owned", value: "$15M" },
    { label: "Cloud Cost Reduced", value: "25%" },
  ],
};

export const about = {
  summary: `Strategic Engineering Leader driving enterprise DevSecOps transformation, cloud modernization, and AI-driven automation. Proven track record managing cross-functional engineering teams of 40+ and owning $15M budgets to deliver secure, scalable cloud-native platforms across AWS, Azure and GCP.`,
  paragraphs: [
    `I specialize in Shift-Left Security, Continuous Testing pipelines, and Lift-and-Shift cloud migration strategies to accelerate secure digital delivery, improve engineering efficiency, and strengthen the security posture across the SDLC.`,
    `Over the last two years I've been deeply invested in AI-driven engineering — building agentic solutions (PRD Reviewers, Test Case Generators, Cloud Cost Optimizers, Kubernetes Doctors) that turn manual toil into autonomous workflows.`,
    `PMP certified, Six Sigma Black Belt, and passionate about aligning technology initiatives with business objectives — optimizing cloud spend and delivering measurable improvements in quality, speed, reliability and cost.`,
  ],
};

export const skills = [
  {
    category: "AI & Agentic Engineering",
    icon: "Sparkles",
    items: [
      "LLM Application Design",
      "Agentic Workflows",
      "PRD Reviewers",
      "Test Case Generators",
      "AI Code Review",
      "RAG Pipelines",
      "Prompt Engineering",
    ],
  },
  {
    category: "DevSecOps",
    icon: "ShieldCheck",
    items: [
      "Shift-Left Security",
      "SAST / DAST",
      "CI/CD Pipelines",
      "Quality Gates",
      "Docker",
      "Kubernetes",
      "Infrastructure as Code",
    ],
  },
  {
    category: "Cloud & Platform",
    icon: "Cloud",
    items: [
      "AWS",
      "Azure",
      "GCP",
      "Cloud Cost Optimization",
      "Lift-and-Shift Migrations",
      "Legacy Modernization",
      "Observability",
    ],
  },
  {
    category: "Test Automation",
    icon: "TestTube",
    items: [
      "Playwright",
      "Selenium (Java/Python)",
      "Appium",
      "REST Assured",
      "JMeter",
      "TestNG",
      "API Automation at Scale",
    ],
  },
  {
    category: "Engineering Leadership",
    icon: "Users",
    items: [
      "40+ Engineer Teams",
      "$15M Budget Ownership",
      "PMP",
      "Six Sigma Black Belt",
      "KPI Dashboards",
      "Presales & Solutioning",
      "Governance & RCA",
    ],
  },
];

export const experience = [
  {
    company: "SLK Software",
    role: "Senior Engineering Manager",
    period: "2023 – Present",
    highlights: [
      "Delivered 25% reduction in cloud & operational spend via automation, right-sizing and tooling rationalization.",
      "Led a 40+ member engineering team with KPI dashboards for senior leadership.",
      "Reduced production defects from 10% to 2% via Shift-Left Security & Continuous Testing.",
      "Automated 10,000+ test cases, cutting manual effort by 40%.",
      "Spearheaded AI-driven engineering: PRD Reviewers, Test Case Generators, and agentic solutions.",
    ],
  },
  {
    company: "KPMG (Bengaluru)",
    role: "Manager",
    period: "2020 – 2023",
    highlights: [
      "Established a Test Centre of Excellence (TCOE) for Goldman Sachs — reduced manual testing effort ~60%.",
      "Automated 5,000+ backend APIs for Apple Card, cutting API regression time by 50%+.",
      "Integrated security gates into CI/CD pipelines, strengthening DevSecOps compliance.",
      "Led presales for strategic clients, designing scalable testing solutions.",
    ],
  },
  {
    company: "IBM (Bengaluru)",
    role: "Test Lead",
    period: "2017 – 2020",
    highlights: [
      "Oversaw 10,000+ test cases across manual & automated initiatives for IBM Watson.",
      "Increased automation coverage to 75%+ using Python, JavaScript and Bash.",
      "Improved AI model validation accuracy; reduced production defects by 30%.",
      "Achieved 95%+ on-time release rate via dashboards & risk-based planning.",
    ],
  },
  {
    company: "Times Internet (Noida)",
    role: "Quality Engineer",
    period: "2016 – 2017",
    highlights: [
      "Scaled UI + API automation frameworks using Selenium WebDriver & Appium to 80%+ coverage.",
      "Integrated automation with Jenkins CI/CD — reduced regression cycle time by 45%.",
    ],
  },
  {
    company: "OSSCube Solutions (Noida)",
    role: "Senior SQA Engineer",
    period: "2011 – 2016",
    highlights: [
      "Built hybrid Selenium (Java) + Appium frameworks for web & mobile.",
      "Implemented REST Assured + JMeter for backend reliability — cut production incidents 25%.",
    ],
  },
];

export const certifications = [
  "PMP Trained",
  "Six Sigma Black Belt",
  "ADM – Agile & DevOps Management (MFCPE)",
  "ADM – Quality & Test Management (MFCPE)",
];

// AI Agents / Projects — each has a dedicated sub-page
export const projects = [
  {
    slug: "regression-test-optimizer",
    category: "Test Automation & Quality",
    name: "Regression Test Optimizer",
    tagline:
      "Ships the smallest effective regression suite for every commit — cuts CI time 50-80%.",
    icon: "GitBranch",
    accent: "from-cyan-400 to-blue-500",
    problem:
      "Full regression suites are executed for every build, even when only a small portion of the application changes — wasting compute and slowing releases.",
    solution:
      "An agent that correlates commits, impacted components, historical failures and test-to-feature mappings to recommend the minimum effective regression suite for each build.",
    impact: [
      "50–80% faster CI pipelines",
      "Lower cloud infrastructure spend",
      "Higher developer confidence per merge",
    ],
    features: [
      "Git diff + code-graph analysis",
      "Historical failure correlation model",
      "Risk-scored test ranking",
      "CI/CD plugin (GitHub Actions, Jenkins, GitLab)",
      "Coverage-vs-risk trade-off dashboard",
    ],
    stack: ["Python", "FastAPI", "LangChain", "Postgres", "GitHub API", "scikit-learn"],
  },
  {
    slug: "flaky-test-predictor",
    category: "Test Automation & Quality",
    name: "Flaky Test Predictor & RCA Agent",
    tagline:
      "Predicts flaky tests and auto-diagnoses root cause from logs, screenshots and traces.",
    icon: "Bug",
    accent: "from-fuchsia-400 to-pink-500",
    problem:
      "Flaky tests consume huge debugging effort and erode trust in automation, causing teams to disable coverage rather than fix it.",
    solution:
      "Agent analyzes execution logs, screenshots, stack traces, retries and environment data to identify flaky tests, classify likely causes and suggest fixes.",
    impact: [
      "30–60% reduction in debugging effort",
      "Fewer unnecessary reruns",
      "Higher trust in the automation suite",
    ],
    features: [
      "Multi-modal log + screenshot analysis (Vision LLM)",
      "Flakiness probability score per test",
      "Auto-tagged root cause: timing / selector / data / env",
      "Suggested code fixes with PR generation",
      "Trend & hotspot dashboards",
    ],
    stack: ["Python", "OpenAI GPT-4o", "Playwright", "Elasticsearch", "Next.js"],
  },
  {
    slug: "automation-maintenance-forecaster",
    category: "Test Automation & Quality",
    name: "Automation Maintenance Forecaster",
    tagline:
      "Predicts test-automation maintenance effort before a release lands.",
    icon: "LineChart",
    accent: "from-emerald-400 to-teal-500",
    problem:
      "Teams underestimate the effort required to update automation after application changes — leading to last-minute scramble and release delays.",
    solution:
      "Agent analyzes upcoming feature changes, impacted pages/APIs, historical maintenance patterns and framework dependencies to estimate maintenance effort and surface high-risk areas early.",
    impact: [
      "Better sprint planning",
      "Reduced last-minute automation work",
      "Predictable release calendars",
    ],
    features: [
      "Jira/Confluence + Git integration",
      "Impact heat-map of test assets",
      "Story-point forecast per epic",
      "Sprint capacity recommendations",
    ],
    stack: ["Python", "LLM", "Jira API", "Neo4j", "React"],
  },
  {
    slug: "test-infra-optimizer",
    category: "Test Automation & Quality",
    name: "Test Infrastructure Optimizer",
    tagline:
      "Right-sizes parallel test execution — 20-40% infra savings, shorter runs.",
    icon: "ServerCog",
    accent: "from-amber-400 to-orange-500",
    problem:
      "Parallel execution resources are chronically underutilized or over-provisioned, inflating cloud costs while queue times still hurt developer velocity.",
    solution:
      "Agent analyzes execution durations, resource utilization, queue times and historical demand to optimize parallelism, schedule jobs efficiently and recommend infrastructure scaling.",
    impact: [
      "20–40% reduction in cloud infra cost",
      "Shorter end-to-end execution times",
      "Better developer feedback loops",
    ],
    features: [
      "Live utilization heat-map",
      "Adaptive shard/parallelism recommender",
      "Spot/on-demand strategy planner",
      "Autoscaling policy generator",
    ],
    stack: ["Python", "AWS / GCP APIs", "Prometheus", "Kubernetes"],
  },
  {
    slug: "ai-cloud-cost-optimiser",
    category: "DevSecOps",
    name: "AI Cloud Cost Optimiser (Azure)",
    tagline:
      "Auto-audits Azure Resource Groups and suggests actionable fixes with one-click apply.",
    icon: "Wallet",
    accent: "from-violet-400 to-indigo-500",
    problem:
      "Azure cloud spend spirals due to over-provisioning, orphaned resources, wrong SKUs and misconfigurations — and manual FinOps audits don't scale.",
    solution:
      "An AI-powered agent that scans an Azure Resource Group, detects cost issues (over-provisioning, misconfigurations, idle assets, wrong tiering) and provides actionable suggestions with ready-to-apply fixes.",
    impact: [
      "Continuous FinOps without a FinOps team",
      "Faster mean-time-to-savings",
      "Auditable, explainable recommendations",
    ],
    features: [
      "Azure ARM + Cost Management API scan",
      "LLM-powered explanation of every finding",
      "Terraform/Bicep fix snippets",
      "Slack/Teams digests",
      "Savings projection dashboard",
    ],
    stack: ["Python", "Azure SDK", "OpenAI GPT-4o", "Next.js", "MongoDB"],
  },
  {
    slug: "ai-kubernetes-doctor",
    category: "DevSecOps",
    name: "AI Kubernetes Doctor",
    tagline:
      "Investigates Kubernetes failures, finds root cause, and suggests fixes — like an SRE on call, 24×7.",
    icon: "Stethoscope",
    accent: "from-rose-400 to-red-500",
    problem:
      "Kubernetes failures require deep expertise — engineers dig through logs, events and manifests to piece together what went wrong, often at 2am.",
    solution:
      "An agent that investigates Kubernetes failures by analyzing logs, events and cluster state to identify root causes, suggest fixes and preserve an investigation history for the team.",
    impact: [
      "Faster MTTR for K8s incidents",
      "Institutionalized SRE knowledge",
      "Publicly deployable as a real application",
    ],
    features: [
      "kubectl + Events + Metrics collector",
      "LLM reasoning over cluster state",
      "Fix suggestions with kubectl / YAML patches",
      "Investigation history & post-mortem drafts",
      "Multi-cluster support",
    ],
    stack: ["Python", "FastAPI", "Kubernetes API", "LangGraph", "OpenAI", "Next.js"],
  },
];

export const getProjectBySlug = (slug) =>
  projects.find((p) => p.slug === slug) || null;
