"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  ArrowRight,
  Calendar,
  CheckCircle,
  Clock,
  Cloud,
  CreditCard,
  Download,
  FileText,
  Lock,
  MessageSquare,
  Settings,
  TrendingUp,
  User,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// Mock data - In production, this would come from your backend
const mockProject = {
  name: "Cloud Modernization - TechFlow",
  status: "in_progress",
  progress: 65,
  startDate: "2026-01-06",
  estimatedEnd: "2026-02-28",
  currentPhase: "Migration Execution",
  nextMilestone: "Database migration complete",
  team: [
    { name: "David O.", role: "Lead Architect" },
    { name: "Sarah C.", role: "DevOps Engineer" },
  ],
};

const mockCredits = {
  approved: 25000,
  used: 8500,
  remaining: 16500,
  validUntil: "2028-01-15",
  status: "active",
};

const mockInvoices = [
  { id: "INV-001", date: "2026-01-01", amount: 15000, status: "paid" },
  { id: "INV-002", date: "2026-01-15", amount: 7500, status: "pending" },
];

const mockUpdates = [
  {
    date: "2026-01-18",
    title: "CI/CD Pipeline Complete",
    description: "GitHub Actions workflow deployed with staging and production environments.",
  },
  {
    date: "2026-01-15",
    title: "Infrastructure Provisioned",
    description: "EKS cluster, RDS instances, and VPC networking configured.",
  },
  {
    date: "2026-01-10",
    title: "Architecture Review Complete",
    description: "Final architecture approved. Beginning implementation phase.",
  },
];

export default function PortalPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return (
      <main className="min-h-screen pt-32 pb-20 px-4">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-brand/10 flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-brand" />
            </div>
            <h1 className="text-2xl font-bold mb-2">Client Portal</h1>
            <p className="text-muted-foreground">
              Sign in to access your project dashboard, AWS credits, and invoices.
            </p>
          </div>

          <div className="bg-card border rounded-2xl p-6">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-full h-10 px-4 rounded-lg border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-brand/50"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full h-10 px-4 rounded-lg border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-brand/50"
                />
              </div>
              <Button
                onClick={() => setIsLoggedIn(true)}
                className="w-full bg-gradient-to-r from-brand to-brand-accent hover:opacity-90"
              >
                Sign In
              </Button>
            </div>

            <div className="mt-6 pt-6 border-t text-center">
              <p className="text-sm text-muted-foreground">
                Don&apos;t have an account?{" "}
                <Link href="/contact" className="text-brand hover:underline">
                  Contact us
                </Link>
              </p>
            </div>
          </div>

          {/* Demo Note */}
          <p className="text-xs text-center text-muted-foreground mt-6">
            This is a demo portal. Click &quot;Sign In&quot; to view the dashboard.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold mb-1">Welcome back, John</h1>
            <p className="text-muted-foreground">
              Here&apos;s what&apos;s happening with your project.
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
            <Button
              size="sm"
              onClick={() => setIsLoggedIn(false)}
              variant="ghost"
            >
              Sign Out
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content - 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            {/* Project Status Card */}
            <div className="bg-card border rounded-2xl p-6">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="font-bold text-lg">{mockProject.name}</h2>
                  <p className="text-sm text-muted-foreground">
                    Current Phase: {mockProject.currentPhase}
                  </p>
                </div>
                <Badge className="bg-amber-500/10 text-amber-500 border-amber-500/20">
                  In Progress
                </Badge>
              </div>

              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Overall Progress</span>
                  <span className="font-medium">{mockProject.progress}%</span>
                </div>
                <Progress value={mockProject.progress} className="h-2" />
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                    <Calendar className="w-4 h-4" />
                    Start Date
                  </div>
                  <p className="font-medium">
                    {new Date(mockProject.startDate).toLocaleDateString()}
                  </p>
                </div>
                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                    <Clock className="w-4 h-4" />
                    Estimated Completion
                  </div>
                  <p className="font-medium">
                    {new Date(mockProject.estimatedEnd).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">
                    Next Milestone:
                  </span>
                  <span className="text-sm font-medium">
                    {mockProject.nextMilestone}
                  </span>
                </div>
                <Button variant="outline" size="sm">
                  View Details
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>

            {/* Recent Updates */}
            <div className="bg-card border rounded-2xl p-6">
              <h2 className="font-bold text-lg mb-4">Recent Updates</h2>
              <div className="space-y-4">
                {mockUpdates.map((update, index) => (
                  <div
                    key={index}
                    className={`flex gap-4 ${
                      index < mockUpdates.length - 1 ? "pb-4 border-b" : ""
                    }`}
                  >
                    <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-medium">{update.title}</h3>
                        <span className="text-xs text-muted-foreground">
                          {new Date(update.date).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {update.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Invoices */}
            <div className="bg-card border rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-bold text-lg">Invoices</h2>
                <Button variant="ghost" size="sm">
                  View All
                </Button>
              </div>
              <div className="space-y-3">
                {mockInvoices.map((invoice) => (
                  <div
                    key={invoice.id}
                    className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium text-sm">{invoice.id}</p>
                        <p className="text-xs text-muted-foreground">
                          {new Date(invoice.date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-medium">
                        ${invoice.amount.toLocaleString()}
                      </span>
                      <Badge
                        variant="outline"
                        className={
                          invoice.status === "paid"
                            ? "bg-green-500/10 text-green-500 border-green-500/20"
                            : "bg-amber-500/10 text-amber-500 border-amber-500/20"
                        }
                      >
                        {invoice.status}
                      </Badge>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - 1 column */}
          <div className="space-y-6">
            {/* AWS Credits Card */}
            <div className="bg-gradient-to-br from-brand/10 to-brand-accent/10 border border-brand/20 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center">
                  <Cloud className="w-5 h-5 text-brand" />
                </div>
                <div>
                  <h3 className="font-bold">AWS Credits</h3>
                  <Badge className="bg-green-500/10 text-green-500 border-green-500/20 text-xs">
                    Active
                  </Badge>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-3xl font-bold text-brand">
                  ${mockCredits.remaining.toLocaleString()}
                </p>
                <p className="text-sm text-muted-foreground">remaining</p>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Approved</span>
                  <span>${mockCredits.approved.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Used</span>
                  <span>${mockCredits.used.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Valid Until</span>
                  <span>{new Date(mockCredits.validUntil).toLocaleDateString()}</span>
                </div>
              </div>

              <Progress
                value={(mockCredits.used / mockCredits.approved) * 100}
                className="h-2"
              />
            </div>

            {/* Team Card */}
            <div className="bg-card border rounded-2xl p-6">
              <h3 className="font-bold mb-4">Your Team</h3>
              <div className="space-y-3">
                {mockProject.team.map((member, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center">
                      <User className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{member.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {member.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4" size="sm">
                <MessageSquare className="w-4 h-4 mr-2" />
                Message Team
              </Button>
            </div>

            {/* Quick Actions */}
            <div className="bg-card border rounded-2xl p-6">
              <h3 className="font-bold mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <FileText className="w-4 h-4 mr-2" />
                  View Documentation
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Cost Reports
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <CreditCard className="w-4 h-4 mr-2" />
                  Billing Settings
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
