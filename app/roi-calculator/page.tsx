"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import {
  ArrowRight,
  Calculator,
  CheckCircle,
  Clock,
  DollarSign,
  Download,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface ROIInputs {
  currentMonthlySpend: number;
  engineerCount: number;
  engineerSalary: number;
  maintenancePercent: number;
  deploymentFrequency: string;
  deploymentTime: number;
  incidentFrequency: string;
  incidentMTTR: number;
  projectType: string;
}

interface ROIResults {
  // Cost Savings
  infrastructureSavings: number;
  engineerTimeSavings: number;
  incidentCostSavings: number;
  totalAnnualSavings: number;

  // Time Savings
  deploymentTimeReduction: number;
  maintenanceTimeReduction: number;
  incidentTimeReduction: number;

  // Productivity Gains
  additionalFeatureCapacity: number;
  velocityIncrease: number;

  // ROI Metrics
  estimatedInvestment: number;
  paybackMonths: number;
  threeYearROI: number;
}

export default function ROICalculatorPage() {
  const [inputs, setInputs] = useState<ROIInputs>({
    currentMonthlySpend: 50000,
    engineerCount: 10,
    engineerSalary: 150000,
    maintenancePercent: 40,
    deploymentFrequency: "weekly",
    deploymentTime: 4,
    incidentFrequency: "monthly",
    incidentMTTR: 4,
    projectType: "modernization",
  });

  const [showResults, setShowResults] = useState(false);

  const calculateROI = (): ROIResults => {
    const hourlyRate = inputs.engineerSalary / 2080; // Annual salary / work hours per year

    // Infrastructure cost savings (35-55% based on project type)
    const savingsMultiplier =
      inputs.projectType === "greenfield"
        ? 0.55
        : inputs.projectType === "modernization"
          ? 0.45
          : 0.35;
    const infrastructureSavings =
      inputs.currentMonthlySpend * savingsMultiplier * 12;

    // Engineer time savings from reduced maintenance
    const currentMaintenanceHours =
      (inputs.maintenancePercent / 100) *
      2080 *
      inputs.engineerCount;
    const newMaintenancePercent = Math.max(inputs.maintenancePercent - 25, 10);
    const newMaintenanceHours =
      (newMaintenancePercent / 100) * 2080 * inputs.engineerCount;
    const maintenanceHoursSaved = currentMaintenanceHours - newMaintenanceHours;
    const engineerTimeSavings = maintenanceHoursSaved * hourlyRate;

    // Deployment time savings
    const deploymentsPerYear =
      inputs.deploymentFrequency === "daily"
        ? 250
        : inputs.deploymentFrequency === "weekly"
          ? 52
          : inputs.deploymentFrequency === "biweekly"
            ? 26
            : 12;
    const currentDeploymentHours = deploymentsPerYear * inputs.deploymentTime;
    const newDeploymentTime = Math.max(inputs.deploymentTime * 0.1, 0.25); // 90% reduction, min 15 min
    const newDeploymentHours = deploymentsPerYear * newDeploymentTime;
    const deploymentTimeReduction = currentDeploymentHours - newDeploymentHours;

    // Incident cost savings
    const incidentsPerYear =
      inputs.incidentFrequency === "weekly"
        ? 52
        : inputs.incidentFrequency === "biweekly"
          ? 26
          : inputs.incidentFrequency === "monthly"
            ? 12
            : 4;
    const currentIncidentCost =
      incidentsPerYear * inputs.incidentMTTR * hourlyRate * 3; // 3 engineers per incident
    const newIncidentFrequency = Math.max(incidentsPerYear * 0.3, 2); // 70% reduction
    const newMTTR = Math.max(inputs.incidentMTTR * 0.25, 0.25); // 75% reduction
    const newIncidentCost = newIncidentFrequency * newMTTR * hourlyRate * 2;
    const incidentCostSavings = currentIncidentCost - newIncidentCost;
    const incidentTimeReduction =
      incidentsPerYear * inputs.incidentMTTR -
      newIncidentFrequency * newMTTR;

    // Total savings
    const totalAnnualSavings =
      infrastructureSavings + engineerTimeSavings + incidentCostSavings;

    // Productivity gains
    const maintenanceTimeReduction = maintenanceHoursSaved;
    const additionalFeatureCapacity = Math.round(
      (maintenanceHoursSaved + deploymentTimeReduction) / 160
    ); // Convert to person-months
    const velocityIncrease = Math.round(
      ((maintenanceHoursSaved + deploymentTimeReduction) /
        (inputs.engineerCount * 2080)) *
        100
    );

    // Investment estimate (based on project scope)
    const baseInvestment =
      inputs.projectType === "greenfield"
        ? 75000
        : inputs.projectType === "modernization"
          ? 150000
          : 100000;
    const scaleMultiplier =
      1 +
      (inputs.currentMonthlySpend / 100000) * 0.5 +
      (inputs.engineerCount / 20) * 0.3;
    const estimatedInvestment = Math.round(baseInvestment * scaleMultiplier);

    // ROI calculations
    const monthlySavings = totalAnnualSavings / 12;
    const paybackMonths = Math.ceil(estimatedInvestment / monthlySavings);
    const threeYearROI = Math.round(
      ((totalAnnualSavings * 3 - estimatedInvestment) / estimatedInvestment) *
        100
    );

    return {
      infrastructureSavings: Math.round(infrastructureSavings),
      engineerTimeSavings: Math.round(engineerTimeSavings),
      incidentCostSavings: Math.round(incidentCostSavings),
      totalAnnualSavings: Math.round(totalAnnualSavings),
      deploymentTimeReduction: Math.round(deploymentTimeReduction),
      maintenanceTimeReduction: Math.round(maintenanceTimeReduction),
      incidentTimeReduction: Math.round(incidentTimeReduction),
      additionalFeatureCapacity,
      velocityIncrease,
      estimatedInvestment,
      paybackMonths,
      threeYearROI,
    };
  };

  const results = calculateROI();

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <main className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            <Calculator className="w-3 h-3 mr-1" />
            Migration ROI Calculator
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Calculate Your{" "}
            <span className="bg-gradient-to-r from-brand to-brand-accent bg-clip-text text-transparent">
              Migration ROI
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See the full financial impact of modernizing your infrastructure—cost
            savings, productivity gains, and payback period.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            <div className="bg-card border rounded-2xl p-6">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-brand" />
                Current Infrastructure
              </h2>

              <div className="space-y-6">
                <div>
                  <Label className="mb-2 block">Monthly AWS/Cloud Spend</Label>
                  <div className="flex items-center gap-4">
                    <Slider
                      value={[inputs.currentMonthlySpend]}
                      onValueChange={(v) =>
                        setInputs({ ...inputs, currentMonthlySpend: v[0] })
                      }
                      min={5000}
                      max={500000}
                      step={5000}
                      className="flex-1"
                    />
                    <span className="w-28 text-right font-mono font-medium">
                      {formatCurrency(inputs.currentMonthlySpend)}
                    </span>
                  </div>
                </div>

                <div>
                  <Label className="mb-2 block">Project Type</Label>
                  <Select
                    value={inputs.projectType}
                    onValueChange={(v) =>
                      setInputs({ ...inputs, projectType: v })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="modernization">
                        Legacy Modernization
                      </SelectItem>
                      <SelectItem value="optimization">
                        Cost Optimization
                      </SelectItem>
                      <SelectItem value="greenfield">
                        Greenfield / New Build
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="bg-card border rounded-2xl p-6">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Users className="w-5 h-5 text-brand" />
                Engineering Team
              </h2>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="mb-2 block">Team Size</Label>
                    <Input
                      type="number"
                      value={inputs.engineerCount}
                      onChange={(e) =>
                        setInputs({
                          ...inputs,
                          engineerCount: parseInt(e.target.value) || 0,
                        })
                      }
                      min={1}
                      max={500}
                    />
                  </div>
                  <div>
                    <Label className="mb-2 block">Avg. Salary (Annual)</Label>
                    <Input
                      type="number"
                      value={inputs.engineerSalary}
                      onChange={(e) =>
                        setInputs({
                          ...inputs,
                          engineerSalary: parseInt(e.target.value) || 0,
                        })
                      }
                      min={50000}
                      max={500000}
                    />
                  </div>
                </div>

                <div>
                  <Label className="mb-2 block">
                    Time Spent on Maintenance: {inputs.maintenancePercent}%
                  </Label>
                  <Slider
                    value={[inputs.maintenancePercent]}
                    onValueChange={(v) =>
                      setInputs({ ...inputs, maintenancePercent: v[0] })
                    }
                    min={10}
                    max={80}
                    step={5}
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Industry average is 40-60% for legacy systems
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border rounded-2xl p-6">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Zap className="w-5 h-5 text-brand" />
                Deployment & Operations
              </h2>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="mb-2 block">Deploy Frequency</Label>
                    <Select
                      value={inputs.deploymentFrequency}
                      onValueChange={(v) =>
                        setInputs({ ...inputs, deploymentFrequency: v })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="biweekly">Bi-weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="mb-2 block">Deploy Time (hours)</Label>
                    <Input
                      type="number"
                      value={inputs.deploymentTime}
                      onChange={(e) =>
                        setInputs({
                          ...inputs,
                          deploymentTime: parseFloat(e.target.value) || 0,
                        })
                      }
                      min={0.25}
                      max={24}
                      step={0.25}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="mb-2 block">Incident Frequency</Label>
                    <Select
                      value={inputs.incidentFrequency}
                      onValueChange={(v) =>
                        setInputs({ ...inputs, incidentFrequency: v })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="biweekly">Bi-weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                        <SelectItem value="quarterly">Quarterly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="mb-2 block">Avg. MTTR (hours)</Label>
                    <Input
                      type="number"
                      value={inputs.incidentMTTR}
                      onChange={(e) =>
                        setInputs({
                          ...inputs,
                          incidentMTTR: parseFloat(e.target.value) || 0,
                        })
                      }
                      min={0.25}
                      max={48}
                      step={0.25}
                    />
                  </div>
                </div>
              </div>
            </div>

            <Button
              onClick={() => setShowResults(true)}
              className="w-full bg-gradient-to-r from-brand to-brand-accent hover:opacity-90 h-12 text-lg"
            >
              Calculate My ROI
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            {!showResults ? (
              <div className="bg-muted/50 border border-dashed rounded-2xl p-12 text-center h-full flex flex-col items-center justify-center">
                <Calculator className="w-16 h-16 text-muted-foreground/50 mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Enter Your Details
                </h3>
                <p className="text-muted-foreground">
                  Fill in your current infrastructure details to see your
                  projected ROI
                </p>
              </div>
            ) : (
              <>
                {/* Total Savings */}
                <div className="bg-gradient-to-br from-brand/10 to-brand-accent/10 border border-brand/20 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold mb-4">
                    Projected Annual Savings
                  </h3>
                  <p className="text-5xl font-bold bg-gradient-to-r from-brand to-brand-accent bg-clip-text text-transparent">
                    {formatCurrency(results.totalAnnualSavings)}
                  </p>
                  <p className="text-muted-foreground mt-2">per year</p>

                  <div className="grid grid-cols-3 gap-4 mt-6">
                    <div>
                      <p className="text-2xl font-bold text-brand">
                        {formatCurrency(results.infrastructureSavings)}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Infrastructure
                      </p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-brand">
                        {formatCurrency(results.engineerTimeSavings)}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Engineer Time
                      </p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-brand">
                        {formatCurrency(results.incidentCostSavings)}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Incident Costs
                      </p>
                    </div>
                  </div>
                </div>

                {/* ROI Metrics */}
                <div className="bg-card border rounded-2xl p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-brand" />
                    ROI Analysis
                  </h3>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">
                        Estimated Investment
                      </span>
                      <span className="font-semibold">
                        {formatCurrency(results.estimatedInvestment)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">
                        Payback Period
                      </span>
                      <span className="font-semibold text-brand">
                        {results.paybackMonths} months
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">3-Year ROI</span>
                      <span className="font-semibold text-green-500">
                        {results.threeYearROI}%
                      </span>
                    </div>

                    <div className="pt-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span>Payback Progress (12 months)</span>
                        <span>
                          {Math.min(
                            Math.round((12 / results.paybackMonths) * 100),
                            100
                          )}
                          %
                        </span>
                      </div>
                      <Progress
                        value={Math.min(
                          (12 / results.paybackMonths) * 100,
                          100
                        )}
                        className="h-2"
                      />
                    </div>
                  </div>
                </div>

                {/* Time Savings */}
                <div className="bg-card border rounded-2xl p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-brand" />
                    Time Savings (Annual)
                  </h3>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <p className="text-2xl font-bold">
                        {results.deploymentTimeReduction}h
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Deployment Time
                      </p>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <p className="text-2xl font-bold">
                        {Math.round(results.maintenanceTimeReduction)}h
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Maintenance
                      </p>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <p className="text-2xl font-bold">
                        {Math.round(results.incidentTimeReduction)}h
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Incident Response
                      </p>
                    </div>
                  </div>
                </div>

                {/* Productivity Impact */}
                <div className="bg-card border rounded-2xl p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-brand" />
                    Productivity Impact
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <div>
                        <p className="font-medium">Additional Feature Capacity</p>
                        <p className="text-sm text-muted-foreground">
                          Person-months freed up annually
                        </p>
                      </div>
                      <p className="text-3xl font-bold text-brand">
                        +{results.additionalFeatureCapacity}
                      </p>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <div>
                        <p className="font-medium">Velocity Increase</p>
                        <p className="text-sm text-muted-foreground">
                          More time for feature development
                        </p>
                      </div>
                      <p className="text-3xl font-bold text-brand">
                        +{results.velocityIncrease}%
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-card border rounded-2xl p-6 text-center">
                  <h3 className="font-semibold mb-2">
                    Ready to Realize These Savings?
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get a detailed assessment tailored to your infrastructure
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      asChild
                      className="flex-1 bg-gradient-to-r from-brand to-brand-accent hover:opacity-90"
                    >
                      <Link href="/contact">
                        Get Free Assessment
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Download className="w-4 h-4 mr-2" />
                      Download Report
                    </Button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Methodology Note */}
        <div className="mt-12 bg-muted/50 rounded-xl p-6">
          <h3 className="font-semibold mb-3">How We Calculate ROI</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            {[
              {
                title: "Infrastructure Savings",
                desc: "Based on 35-55% reduction through right-sizing, reserved instances, and architectural improvements",
              },
              {
                title: "Engineer Productivity",
                desc: "Calculated from maintenance time reduction (typically 25-40% improvement)",
              },
              {
                title: "Incident Costs",
                desc: "70% fewer incidents and 75% faster resolution based on our client data",
              },
              {
                title: "Investment Estimate",
                desc: "Based on project type and scale, calibrated from 50+ completed engagements",
              },
            ].map((item) => (
              <div key={item.title}>
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle className="w-4 h-4 text-brand" />
                  <span className="font-medium">{item.title}</span>
                </div>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
