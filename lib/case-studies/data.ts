export interface CaseStudy {
  id: string;
  slug: string;
  company: string;
  industry: string;
  logo?: string;
  title: string;
  subtitle: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    avatar?: string;
  };
  technologies: string[];
  services: string[];
  timeline: string;
  teamSize: string;
  featured?: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "1",
    slug: "techflow-cloud-migration",
    company: "TechFlow",
    industry: "SaaS / Technology",
    title: "From Monolith to Microservices: 70% Cost Reduction",
    subtitle:
      "How TechFlow modernized their legacy platform and scaled to 10M users",
    challenge:
      "TechFlow had a 12-year-old monolithic Java application that was becoming increasingly difficult to maintain. Deployments took 4+ hours, scaling was manual, and their AWS bill was growing 40% year-over-year despite flat user growth. Their engineering team spent 60% of their time on maintenance rather than new features.",
    solution:
      "We led a phased migration to a microservices architecture on EKS. Starting with the highest-impact services, we containerized workloads, implemented GitOps with ArgoCD, and set up auto-scaling policies. We also introduced CloudPulse for real-time cost monitoring and implemented Reserved Instance strategies.",
    results: [
      {
        metric: "Cost Reduction",
        value: "70%",
        description: "Monthly AWS spend dropped from $180K to $54K",
      },
      {
        metric: "Deployment Time",
        value: "15 min",
        description: "Down from 4+ hours with zero-downtime deployments",
      },
      {
        metric: "Engineering Velocity",
        value: "3x",
        description: "Feature delivery increased with less maintenance burden",
      },
      {
        metric: "Uptime",
        value: "99.99%",
        description: "Up from 99.5% with improved fault tolerance",
      },
    ],
    testimonial: {
      quote:
        "Morphlix didn't just migrate our infrastructure—they transformed how we think about cloud architecture. The cost savings alone paid for the entire engagement in 3 months.",
      author: "Sarah Chen",
      role: "CTO, TechFlow",
    },
    technologies: [
      "AWS EKS",
      "Kubernetes",
      "ArgoCD",
      "Terraform",
      "PostgreSQL",
      "Redis",
      "CloudPulse",
    ],
    services: [
      "Cloud Modernization",
      "Cost Optimization",
      "DevOps Implementation",
    ],
    timeline: "6 months",
    teamSize: "3 engineers",
    featured: true,
  },
  {
    id: "2",
    slug: "financeHub-security-compliance",
    company: "FinanceHub",
    industry: "Financial Services",
    title: "SOC 2 Compliance in 8 Weeks",
    subtitle:
      "Accelerating compliance while reducing infrastructure complexity",
    challenge:
      "FinanceHub needed SOC 2 Type II certification to close enterprise deals but their infrastructure was a patchwork of manually configured EC2 instances. Security controls were inconsistent, logging was incomplete, and they had no clear audit trail. Traditional consultants quoted 6+ months for compliance readiness.",
    solution:
      "We implemented infrastructure-as-code using Terraform, centralized logging with CloudWatch and a SIEM integration, and deployed AWS Config rules for continuous compliance monitoring. We also set up automated security scanning in their CI/CD pipeline and created comprehensive runbooks for incident response.",
    results: [
      {
        metric: "Time to Compliance",
        value: "8 weeks",
        description: "SOC 2 Type II audit-ready in under 2 months",
      },
      {
        metric: "Security Score",
        value: "94/100",
        description: "AWS Security Hub score improved from 45",
      },
      {
        metric: "Deal Velocity",
        value: "5 enterprise",
        description: "Closed 5 enterprise deals worth $2.4M within 90 days",
      },
      {
        metric: "Incident Response",
        value: "< 15 min",
        description: "MTTR reduced from 4+ hours",
      },
    ],
    testimonial: {
      quote:
        "We were told SOC 2 would take 6 months minimum. Morphlix got us audit-ready in 8 weeks. That speed directly translated to revenue—we closed our first enterprise client the month after certification.",
      author: "Michael Torres",
      role: "CEO, FinanceHub",
    },
    technologies: [
      "AWS Config",
      "CloudWatch",
      "Terraform",
      "GuardDuty",
      "Security Hub",
      "IAM",
    ],
    services: [
      "Security & Compliance",
      "Infrastructure as Code",
      "Cloud Audit",
    ],
    timeline: "8 weeks",
    teamSize: "2 engineers",
    featured: true,
  },
  {
    id: "3",
    slug: "healthsync-hipaa-migration",
    company: "HealthSync",
    industry: "Healthcare / HealthTech",
    title: "HIPAA-Compliant Cloud Migration",
    subtitle:
      "Moving sensitive health data to AWS while maintaining compliance",
    challenge:
      "HealthSync was running on-premise infrastructure that couldn't scale to meet growing demand. They needed to migrate to the cloud but were concerned about HIPAA compliance, data security, and maintaining uptime during the transition. Their previous cloud migration attempt with another vendor had failed.",
    solution:
      "We designed a HIPAA-compliant architecture on AWS using encrypted RDS, private subnets, and AWS PrivateLink. The migration used a blue-green deployment strategy with real-time data replication to ensure zero data loss. We implemented comprehensive audit logging and established BAA coverage across all services.",
    results: [
      {
        metric: "Data Migrated",
        value: "15TB",
        description: "Patient records migrated with zero data loss",
      },
      {
        metric: "Downtime",
        value: "0 min",
        description: "Zero-downtime migration using blue-green deployment",
      },
      {
        metric: "Compliance",
        value: "100%",
        description: "Full HIPAA compliance maintained throughout",
      },
      {
        metric: "Performance",
        value: "40%",
        description: "Query response times improved by 40%",
      },
    ],
    testimonial: {
      quote:
        "After a failed migration with another vendor, we were skeptical. Morphlix's methodical approach and deep AWS expertise made all the difference. Zero downtime, zero data loss, full compliance.",
      author: "Dr. Amara Okonkwo",
      role: "CTO, HealthSync",
    },
    technologies: [
      "AWS RDS",
      "PrivateLink",
      "KMS",
      "CloudTrail",
      "VPC",
      "Lambda",
    ],
    services: [
      "Cloud Migration",
      "Security & Compliance",
      "Database Migration",
    ],
    timeline: "4 months",
    teamSize: "2 engineers",
    featured: false,
  },
  {
    id: "4",
    slug: "dataprime-ml-infrastructure",
    company: "DataPrime",
    industry: "Data Analytics / AI",
    title: "ML Infrastructure That Scales",
    subtitle: "Building a cost-effective machine learning platform on AWS",
    challenge:
      "DataPrime's data science team was running ML workloads on expensive always-on GPU instances. Training jobs were queued for days, experiments couldn't run in parallel, and their monthly GPU bill exceeded $80K. They needed infrastructure that could scale with demand while controlling costs.",
    solution:
      "We implemented a serverless ML platform using SageMaker with spot instances for training workloads. We set up MLflow for experiment tracking, automated model versioning, and created a feature store for reusable ML features. Cost allocation tags enabled precise tracking of spend by project and team.",
    results: [
      {
        metric: "GPU Costs",
        value: "-65%",
        description: "Monthly spend reduced from $80K to $28K",
      },
      {
        metric: "Training Time",
        value: "4x faster",
        description: "Parallel experiments with auto-scaling infrastructure",
      },
      {
        metric: "Model Deployments",
        value: "10x",
        description: "Increased from 2 to 20+ model deployments per month",
      },
      {
        metric: "Data Scientists",
        value: "Self-serve",
        description: "Teams can provision resources without DevOps tickets",
      },
    ],
    testimonial: {
      quote:
        "Our data scientists were spending more time waiting for infrastructure than building models. Now they have self-service access to scalable compute, and we're actually spending less than before.",
      author: "James Park",
      role: "VP Engineering, DataPrime",
    },
    technologies: [
      "SageMaker",
      "EC2 Spot",
      "S3",
      "MLflow",
      "Step Functions",
      "Lambda",
    ],
    services: ["AI & Data Strategy", "Cloud Architecture", "Cost Optimization"],
    timeline: "3 months",
    teamSize: "2 engineers",
    featured: false,
  },
  {
    id: "5",
    slug: "scaleup-startup-infrastructure",
    company: "ScaleUp",
    industry: "E-commerce",
    title: "$50K AWS Credits + Production-Ready Infrastructure",
    subtitle: "From zero to scalable e-commerce platform in 6 weeks",
    challenge:
      "ScaleUp was a newly funded startup that needed to build their e-commerce platform fast. They had a tight runway, limited cloud experience, and needed infrastructure that could handle their projected growth. They also wanted to maximize their cloud credits to extend their runway.",
    solution:
      "We helped ScaleUp secure $50K in AWS Activate credits, then designed a serverless-first architecture using Lambda, DynamoDB, and CloudFront. The infrastructure was built with Terraform from day one, enabling reproducible environments and easy scaling. We also set up CI/CD pipelines and monitoring dashboards.",
    results: [
      {
        metric: "AWS Credits",
        value: "$50K",
        description: "Secured through AWS Activate program",
      },
      {
        metric: "Time to Launch",
        value: "6 weeks",
        description: "From zero infrastructure to production",
      },
      {
        metric: "Monthly Costs",
        value: "$800",
        description: "Serverless architecture keeps costs minimal",
      },
      {
        metric: "Scale Capacity",
        value: "100x",
        description: "Architecture handles 100x traffic spikes automatically",
      },
    ],
    testimonial: {
      quote:
        "As first-time founders, we didn't know where to start with cloud infrastructure. Morphlix not only got us $50K in credits but built us a platform that can scale to millions of users without re-architecting.",
      author: "Emily Zhang",
      role: "Co-founder, ScaleUp",
    },
    technologies: [
      "Lambda",
      "DynamoDB",
      "CloudFront",
      "API Gateway",
      "Cognito",
      "Terraform",
    ],
    services: ["Cloud Architecture", "AWS Credits", "Full-Stack Development"],
    timeline: "6 weeks",
    teamSize: "2 engineers",
    featured: false,
  },
  {
    id: "6",
    slug: "cloudnine-cost-optimization",
    company: "CloudNine",
    industry: "Media & Entertainment",
    title: "62% AWS Cost Reduction Without Performance Impact",
    subtitle: "Comprehensive cost optimization for a video streaming platform",
    challenge:
      "CloudNine's video streaming platform had grown organically, and so had their AWS bill—now at $320K/month. Previous cost-cutting attempts had caused performance issues. They needed systematic optimization that wouldn't impact user experience or their 99.9% uptime SLA.",
    solution:
      "We conducted a comprehensive cloud audit using CloudPulse and AWS Cost Explorer. We identified oversized instances, implemented intelligent tiering for S3, optimized their CDN configuration, and negotiated Savings Plans. We also set up automated rightsizing recommendations and cost anomaly alerts.",
    results: [
      {
        metric: "Monthly Savings",
        value: "$198K",
        description: "Bill reduced from $320K to $122K per month",
      },
      {
        metric: "Savings Rate",
        value: "62%",
        description: "Ongoing cost reduction with no performance impact",
      },
      {
        metric: "Uptime",
        value: "99.95%",
        description: "SLA maintained throughout optimization",
      },
      {
        metric: "Annual Impact",
        value: "$2.4M",
        description: "Projected annual savings",
      },
    ],
    testimonial: {
      quote:
        "We'd tried to cut costs before and always broke something. Morphlix found $2.4M in annual savings we didn't know existed, and our platform actually performs better now.",
      author: "David Liu",
      role: "Director of Infrastructure, CloudNine",
    },
    technologies: [
      "CloudPulse",
      "Cost Explorer",
      "Savings Plans",
      "S3 Intelligent Tiering",
      "CloudFront",
      "Compute Optimizer",
    ],
    services: ["Cost Optimization", "Cloud Audit", "Performance Tuning"],
    timeline: "8 weeks",
    teamSize: "2 engineers",
    featured: true,
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return caseStudies.filter((cs) => cs.featured);
}
