export interface Guide {
  id: string;
  slug: string;
  title: string;
  description: string;
  product: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  readTime: string;
  lastUpdated: string;
  sections: {
    title: string;
    content: string;
    code?: {
      language: string;
      content: string;
    };
  }[];
  prerequisites?: string[];
  relatedGuides?: string[];
}

export const guides: Guide[] = [
  {
    id: "1",
    slug: "cloudpulse-getting-started",
    title: "Getting Started with CloudPulse",
    description:
      "Set up real-time AWS cost monitoring and alerts in under 10 minutes. Learn how to connect your AWS account, configure dashboards, and set up budget alerts.",
    product: "CloudPulse",
    difficulty: "beginner",
    readTime: "10 min",
    lastUpdated: "2026-01-15",
    prerequisites: [
      "An AWS account with billing access",
      "IAM permissions to create roles",
    ],
    sections: [
      {
        title: "Introduction",
        content: `CloudPulse provides real-time visibility into your AWS spending. Unlike AWS Cost Explorer which has a 24-48 hour delay, CloudPulse shows you costs as they happen, helping you catch runaway spending before it impacts your budget.

Key features:
- Real-time cost tracking (< 5 minute delay)
- Custom dashboards by team, project, or service
- Budget alerts via Slack, email, or PagerDuty
- Cost anomaly detection with ML-powered insights
- Savings recommendations based on usage patterns`,
      },
      {
        title: "Step 1: Create an IAM Role",
        content: `First, you'll need to create an IAM role that CloudPulse can assume to read your billing data. This role has read-only access to Cost Explorer and billing information.

Create a new IAM role with the following trust policy:`,
        code: {
          language: "json",
          content: `{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::123456789012:root"
      },
      "Action": "sts:AssumeRole",
      "Condition": {
        "StringEquals": {
          "sts:ExternalId": "YOUR_EXTERNAL_ID"
        }
      }
    }
  ]
}`,
        },
      },
      {
        title: "Step 2: Attach the Required Policy",
        content: `Attach the following policy to give CloudPulse read access to your cost data:`,
        code: {
          language: "json",
          content: `{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "CloudPulseReadAccess",
      "Effect": "Allow",
      "Action": [
        "ce:GetCostAndUsage",
        "ce:GetCostForecast",
        "ce:GetReservationUtilization",
        "ce:GetSavingsPlansUtilization",
        "ce:GetRightsizingRecommendation",
        "budgets:ViewBudget",
        "budgets:DescribeBudgets"
      ],
      "Resource": "*"
    }
  ]
}`,
        },
      },
      {
        title: "Step 3: Connect Your Account",
        content: `In CloudPulse, navigate to Settings > AWS Accounts and click "Add Account". Enter your AWS Account ID and the ARN of the role you created. CloudPulse will verify the connection and begin ingesting data.

Initial data sync takes approximately 5-10 minutes. After that, costs are updated in real-time.`,
      },
      {
        title: "Step 4: Configure Your Dashboard",
        content: `CloudPulse automatically creates a default dashboard showing:
- Total spend (MTD and projected)
- Top 10 services by cost
- Day-over-day cost trends
- Anomaly alerts

You can customize this by adding widgets for specific services, tags, or cost allocation categories. To track costs by team, ensure you have cost allocation tags enabled in AWS Billing.`,
      },
      {
        title: "Step 5: Set Up Alerts",
        content: `Budget alerts help you stay on top of spending. Configure alerts in Settings > Alerts:

1. **Budget Threshold Alerts**: Notify when spending reaches 50%, 80%, 100% of budget
2. **Anomaly Alerts**: ML-powered detection of unusual spending patterns
3. **Daily Digest**: Summary email with key metrics and changes

Alerts can be sent to Slack, email, PagerDuty, or webhooks.`,
        code: {
          language: "yaml",
          content: `# Example alert configuration
alerts:
  - name: "Production Budget Alert"
    type: budget_threshold
    threshold: 80
    budget: 50000
    channels:
      - slack:#cloud-costs
      - email:team@company.com

  - name: "Anomaly Detection"
    type: anomaly
    sensitivity: medium
    channels:
      - pagerduty:cloud-team`,
        },
      },
    ],
    relatedGuides: ["cloudpulse-cost-allocation", "cloudpulse-anomaly-detection"],
  },
  {
    id: "2",
    slug: "costguard-setup",
    title: "Setting Up CostGuard Automated Policies",
    description:
      "Configure automated cost governance policies to prevent budget overruns and enforce tagging standards across your AWS organization.",
    product: "CostGuard",
    difficulty: "intermediate",
    readTime: "15 min",
    lastUpdated: "2026-01-10",
    prerequisites: [
      "AWS Organization with multiple accounts",
      "IAM permissions for AWS Config and Lambda",
      "CostGuard account (free tier available)",
    ],
    sections: [
      {
        title: "Introduction",
        content: `CostGuard helps enforce cost governance policies across your AWS organization. It can automatically:

- Terminate or stop non-compliant resources
- Enforce tagging requirements before resource creation
- Right-size instances based on utilization
- Clean up unused resources (EBS volumes, snapshots, IPs)

This guide walks through setting up your first CostGuard policies.`,
      },
      {
        title: "Policy Types Overview",
        content: `CostGuard supports several policy types:

**Preventive Policies** - Block resource creation that doesn't meet criteria
- Required tags enforcement
- Instance type restrictions
- Region restrictions

**Detective Policies** - Find and alert on non-compliant resources
- Untagged resources
- Oversized instances
- Unused resources

**Remediation Policies** - Automatically fix issues
- Auto-stop idle development instances
- Delete unattached EBS volumes
- Release unused Elastic IPs`,
      },
      {
        title: "Step 1: Install the CostGuard Agent",
        content: `Deploy the CostGuard agent using CloudFormation or Terraform. The agent runs as a Lambda function that evaluates resources against your policies.`,
        code: {
          language: "bash",
          content: `# Using AWS CLI
aws cloudformation create-stack \\
  --stack-name costguard-agent \\
  --template-url https://costguard.morphlix.com/templates/agent.yaml \\
  --parameters ParameterKey=ApiKey,ParameterValue=YOUR_API_KEY \\
  --capabilities CAPABILITY_IAM

# Or using Terraform
module "costguard" {
  source  = "morphlix/costguard/aws"
  version = "1.2.0"

  api_key = var.costguard_api_key

  # Optional: restrict to specific regions
  regions = ["us-east-1", "us-west-2"]
}`,
        },
      },
      {
        title: "Step 2: Define a Tagging Policy",
        content: `Let's create a policy that requires all EC2 instances to have Environment and Owner tags:`,
        code: {
          language: "yaml",
          content: `# tagging-policy.yaml
name: required-tags-ec2
description: Require Environment and Owner tags on all EC2 instances
resource_types:
  - AWS::EC2::Instance

mode: preventive  # Block creation of non-compliant resources

rules:
  - name: environment-tag
    condition:
      tag_exists: Environment
    values:
      - production
      - staging
      - development

  - name: owner-tag
    condition:
      tag_exists: Owner
    pattern: "^[a-z]+\\.[a-z]+@company\\.com$"

actions:
  on_violation: deny
  notification:
    slack: "#cloud-governance"
    message: "EC2 instance creation blocked: missing required tags"`,
        },
      },
      {
        title: "Step 3: Create a Cleanup Policy",
        content: `This policy automatically cleans up unused resources to reduce waste:`,
        code: {
          language: "yaml",
          content: `# cleanup-policy.yaml
name: unused-resource-cleanup
description: Remove unused EBS volumes and Elastic IPs

schedules:
  - cron: "0 2 * * *"  # Run daily at 2 AM UTC

rules:
  - name: unattached-ebs-volumes
    resource_type: AWS::EC2::Volume
    condition:
      status: available
      age_days: "> 7"
    action: delete
    dry_run: false  # Set to true for testing

  - name: unused-elastic-ips
    resource_type: AWS::EC2::EIP
    condition:
      association_id: null
      age_days: "> 3"
    action: release

  - name: old-snapshots
    resource_type: AWS::EC2::Snapshot
    condition:
      age_days: "> 90"
      tag_not_exists: DoNotDelete
    action: delete

notifications:
  summary:
    slack: "#cloud-costs"
    email: cloud-team@company.com`,
        },
      },
      {
        title: "Step 4: Set Up Development Instance Scheduling",
        content: `Automatically stop development instances outside business hours to save costs:`,
        code: {
          language: "yaml",
          content: `# dev-scheduling-policy.yaml
name: dev-instance-scheduling
description: Stop dev instances outside business hours

resource_types:
  - AWS::EC2::Instance

filters:
  - tag:Environment: development

schedules:
  - name: stop-evenings
    action: stop
    cron: "0 19 * * MON-FRI"  # 7 PM weekdays
    timezone: America/New_York

  - name: start-mornings
    action: start
    cron: "0 7 * * MON-FRI"  # 7 AM weekdays
    timezone: America/New_York

  - name: stop-weekends
    action: stop
    cron: "0 19 * * FRI"  # Friday 7 PM

exclusions:
  - tag:AlwaysOn: "true"

estimated_savings: "$2,400/month"  # Based on current usage`,
        },
      },
      {
        title: "Monitoring and Reporting",
        content: `CostGuard provides a dashboard showing:
- Policy compliance rates
- Resources blocked/remediated
- Estimated savings from cleanup policies
- Trend of tagging compliance over time

You can export compliance reports for auditing and share them with stakeholders to demonstrate governance improvements.`,
      },
    ],
    relatedGuides: ["costguard-rightsizing", "costguard-custom-policies"],
  },
  {
    id: "3",
    slug: "deploykit-cicd-integration",
    title: "Integrating DeployKit with Your CI/CD Pipeline",
    description:
      "Add infrastructure cost estimation to your pull requests. See the cost impact of infrastructure changes before they're merged.",
    product: "DeployKit",
    difficulty: "intermediate",
    readTime: "12 min",
    lastUpdated: "2026-01-08",
    prerequisites: [
      "GitHub, GitLab, or Bitbucket repository",
      "Terraform or CloudFormation IaC",
      "CI/CD pipeline (GitHub Actions, GitLab CI, etc.)",
    ],
    sections: [
      {
        title: "Introduction",
        content: `DeployKit analyzes your infrastructure-as-code changes and estimates the cost impact before deployment. It posts a comment on your pull request showing:

- Monthly cost difference (before vs after)
- Breakdown by resource type
- Warnings for expensive changes
- Suggestions for cost optimization

This helps teams make informed decisions about infrastructure changes and prevents cost surprises.`,
      },
      {
        title: "Step 1: Generate API Token",
        content: `First, create a DeployKit API token:

1. Go to app.morphlix.com/deploykit
2. Navigate to Settings > API Tokens
3. Create a new token with "Cost Estimation" scope
4. Copy the token and save it securely

Add this token as a secret in your repository (e.g., \`DEPLOYKIT_API_TOKEN\`).`,
      },
      {
        title: "Step 2: GitHub Actions Integration",
        content: `Add the DeployKit action to your Terraform workflow:`,
        code: {
          language: "yaml",
          content: `# .github/workflows/terraform.yml
name: Terraform Plan with Cost Estimation

on:
  pull_request:
    paths:
      - 'terraform/**'
      - '.github/workflows/terraform.yml'

jobs:
  plan:
    runs-on: ubuntu-latest
    permissions:
      pull-requests: write
      contents: read

    steps:
      - uses: actions/checkout@v4

      - name: Setup Terraform
        uses: hashicorp/setup-terraform@v3
        with:
          terraform_version: 1.6.0

      - name: Terraform Init
        run: terraform init
        working-directory: terraform

      - name: Terraform Plan
        run: terraform plan -out=tfplan
        working-directory: terraform

      - name: Convert Plan to JSON
        run: terraform show -json tfplan > tfplan.json
        working-directory: terraform

      - name: DeployKit Cost Estimation
        uses: morphlix/deploykit-action@v2
        with:
          api_token: \${{ secrets.DEPLOYKIT_API_TOKEN }}
          plan_file: terraform/tfplan.json
          github_token: \${{ secrets.GITHUB_TOKEN }}

          # Optional: Set thresholds for warnings
          warn_threshold: 100   # Warn if monthly increase > $100
          fail_threshold: 1000  # Fail if monthly increase > $1000`,
        },
      },
      {
        title: "Step 3: GitLab CI Integration",
        content: `For GitLab CI, add a cost estimation job:`,
        code: {
          language: "yaml",
          content: `# .gitlab-ci.yml
stages:
  - validate
  - plan
  - cost
  - apply

terraform-plan:
  stage: plan
  image: hashicorp/terraform:1.6
  script:
    - terraform init
    - terraform plan -out=tfplan
    - terraform show -json tfplan > tfplan.json
  artifacts:
    paths:
      - tfplan.json
    expire_in: 1 day
  only:
    - merge_requests

cost-estimation:
  stage: cost
  image: morphlix/deploykit:latest
  script:
    - deploykit estimate \\
        --plan-file tfplan.json \\
        --format gitlab-mr \\
        --api-token $DEPLOYKIT_API_TOKEN
  dependencies:
    - terraform-plan
  only:
    - merge_requests`,
        },
      },
      {
        title: "Example PR Comment",
        content: `DeployKit posts a formatted comment on your PR showing the cost impact:

---

## 💰 Infrastructure Cost Estimate

| | Monthly Cost |
|---|---:|
| **Current** | $1,245.00 |
| **Proposed** | $1,892.00 |
| **Difference** | **+$647.00 (+52%)** |

### Changes by Resource

| Resource | Type | Change | Monthly Impact |
|---|---|---|---:|
| aws_instance.api | t3.medium → t3.xlarge | Resize | +$120.00 |
| aws_rds_instance.main | New | Create | +$450.00 |
| aws_elasticache_cluster.redis | New | Create | +$77.00 |

### ⚠️ Warnings

- RDS instance \`db.r5.large\` may be oversized for expected load. Consider \`db.t3.large\` for $320/mo savings.

---

This helps reviewers understand the cost implications before approving.`,
      },
      {
        title: "Customizing Thresholds and Rules",
        content: `Create a \`.deploykit.yml\` config file in your repo:`,
        code: {
          language: "yaml",
          content: `# .deploykit.yml
version: 1

# Cost thresholds
thresholds:
  warn: 100      # Comment warning if increase > $100/mo
  fail: 1000     # Block PR if increase > $1000/mo

# Approval requirements
approvals:
  high_cost_changes:
    threshold: 500
    required_reviewers:
      - cloud-team
      - finance

# Custom pricing (for resources not in public pricing)
custom_pricing:
  aws_instance:
    m5.metal: 4.608  # $/hour

# Excluded resources (don't count in estimates)
exclude:
  - aws_cloudwatch_log_group  # Costs vary too much
  - data.*                     # Data sources

# Notifications
notifications:
  slack:
    webhook: \${{ SLACK_WEBHOOK }}
    on: [high_cost_change, threshold_exceeded]`,
        },
      },
    ],
    relatedGuides: ["deploykit-cloudformation", "deploykit-pulumi"],
  },
  {
    id: "4",
    slug: "inframap-aws-setup",
    title: "Visualizing Your AWS Infrastructure with InfraMap",
    description:
      "Generate interactive architecture diagrams from your live AWS environment. Keep documentation automatically up-to-date.",
    product: "InfraMap",
    difficulty: "beginner",
    readTime: "8 min",
    lastUpdated: "2026-01-12",
    prerequisites: [
      "AWS account",
      "IAM permissions for resource discovery",
    ],
    sections: [
      {
        title: "Introduction",
        content: `InfraMap automatically generates architecture diagrams from your live AWS infrastructure. Instead of manually maintaining Visio or Draw.io diagrams that go stale, InfraMap keeps your documentation in sync with reality.

Features:
- Auto-discovery of AWS resources and relationships
- Interactive diagrams with resource details on hover
- Multiple views (network, security, cost)
- Export to PNG, SVG, or embed in Notion/Confluence
- Drift detection between diagram and IaC`,
      },
      {
        title: "Step 1: Connect Your AWS Account",
        content: `InfraMap needs read-only access to discover your resources. Create an IAM role with the AWS-managed \`ReadOnlyAccess\` policy, or use our more restrictive custom policy:`,
        code: {
          language: "json",
          content: `{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "InfraMapDiscovery",
      "Effect": "Allow",
      "Action": [
        "ec2:Describe*",
        "rds:Describe*",
        "elasticloadbalancing:Describe*",
        "lambda:List*",
        "lambda:GetFunction",
        "apigateway:GET",
        "s3:ListAllMyBuckets",
        "s3:GetBucketLocation",
        "dynamodb:ListTables",
        "dynamodb:DescribeTable",
        "ecs:List*",
        "ecs:Describe*",
        "eks:List*",
        "eks:Describe*",
        "cloudfront:List*",
        "route53:List*",
        "elasticache:Describe*",
        "sns:List*",
        "sqs:List*"
      ],
      "Resource": "*"
    }
  ]
}`,
        },
      },
      {
        title: "Step 2: Run Discovery",
        content: `Once connected, InfraMap scans your account and builds a graph of resources and their relationships. The initial scan takes 2-5 minutes depending on the size of your infrastructure.

InfraMap discovers:
- VPCs, subnets, and security groups
- EC2 instances and their network connections
- Load balancers and target groups
- RDS databases and read replicas
- Lambda functions and their triggers
- S3 buckets and access patterns
- ECS/EKS clusters and services
- And 50+ other AWS service types`,
      },
      {
        title: "Step 3: Explore Your Diagram",
        content: `The generated diagram is interactive:

- **Click** a resource to see its details (ID, tags, configuration)
- **Hover** over connections to see the relationship type
- **Filter** by VPC, tag, or resource type
- **Search** for specific resources by name or ID
- **Zoom** in/out and pan to navigate large infrastructures

Use the "Views" dropdown to switch between:
- **Network View**: VPCs, subnets, security groups, connections
- **Security View**: IAM roles, policies, encryption status
- **Cost View**: Resources sized by monthly cost`,
      },
      {
        title: "Step 4: Set Up Auto-Refresh",
        content: `Keep your diagrams up-to-date automatically by enabling scheduled scans:`,
        code: {
          language: "yaml",
          content: `# inframap.yml
accounts:
  - name: production
    account_id: "123456789012"
    role_arn: arn:aws:iam::123456789012:role/InfraMapRole
    regions:
      - us-east-1
      - us-west-2

  - name: staging
    account_id: "987654321098"
    role_arn: arn:aws:iam::987654321098:role/InfraMapRole
    regions:
      - us-east-1

schedule:
  frequency: daily
  time: "06:00"
  timezone: UTC

notifications:
  on_change:
    slack: "#infrastructure"
    message: "Infrastructure changes detected"`,
        },
      },
      {
        title: "Step 5: Export and Share",
        content: `Export your diagrams for documentation:

**Static Export**
- PNG/SVG for presentations and docs
- PDF for compliance documentation

**Embed**
- Notion embed block
- Confluence macro
- Custom iframe for internal wikis

**API Access**
Get diagram data programmatically for custom integrations:`,
        code: {
          language: "bash",
          content: `# Get diagram as JSON
curl -H "Authorization: Bearer $INFRAMAP_TOKEN" \\
  "https://api.morphlix.com/inframap/v1/diagrams/prod-main" \\
  -o diagram.json

# Get as SVG
curl -H "Authorization: Bearer $INFRAMAP_TOKEN" \\
  "https://api.morphlix.com/inframap/v1/diagrams/prod-main?format=svg" \\
  -o architecture.svg`,
        },
      },
    ],
    relatedGuides: ["inframap-multi-account", "inframap-terraform-overlay"],
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

export function getGuidesByProduct(product: string): Guide[] {
  return guides.filter((g) => g.product === product);
}
