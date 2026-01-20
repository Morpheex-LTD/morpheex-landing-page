"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle,
  Cloud,
  Loader2,
  Lock,
  Mail,
  Shield,
  User,
} from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  // Step 1: Contact Details
  email: z.string().email("Please enter a valid email address"),
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  role: z.string().min(1, "Please select your role"),

  // Step 2: Company Details
  companyName: z.string().min(2, "Company name is required"),
  linkedinUrl: z
    .string()
    .url("Please enter a valid LinkedIn URL")
    .optional()
    .or(z.literal("")),
  companySize: z.string().min(1, "Please select company size"),
  monthlyAwsSpend: z.string().min(1, "Please select monthly AWS spend"),
  hasAppliedBefore: z.string().min(1, "Please answer this question"),

  // Step 3: Review & Confirm
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms to continue",
  }),

  // Step 4: AWS Connection
  awsAccountId: z
    .string()
    .regex(/^\d{12}$/, "AWS Account ID must be 12 digits"),
});

type FormData = z.infer<typeof formSchema>;

const STEPS = [
  { id: 1, title: "Contact Details", icon: User },
  { id: 2, title: "Company Details", icon: Building2 },
  { id: 3, title: "Review Credits", icon: Cloud },
  { id: 4, title: "Connect AWS", icon: Shield },
];

const ROLES = [
  "Engineering",
  "Product",
  "Operations",
  "Finance",
  "Executive",
  "Other",
];

const COMPANY_SIZES = [
  { value: "1-9", label: "1-9" },
  { value: "10-49", label: "10-49" },
  { value: "50-199", label: "50-199" },
  { value: "200-499", label: "200-499" },
  { value: "500-1999", label: "500-1999" },
  { value: "2000+", label: "2000+" },
];

const AWS_SPEND_RANGES = [
  { value: "0-1000", label: "$0 - $1,000" },
  { value: "1000-5000", label: "$1,000 - $5,000" },
  { value: "5000-10000", label: "$5,000 - $10,000" },
  { value: "10000-50000", label: "$10,000 - $50,000" },
  { value: "50000+", label: "$50,000+" },
];

function calculateEstimatedCredits(monthlySpend: string): number {
  const spendMap: Record<string, number> = {
    "0-1000": 5000,
    "1000-5000": 10000,
    "5000-10000": 15000,
    "10000-50000": 25000,
    "50000+": 50000,
  };
  return spendMap[monthlySpend] || 5000;
}

export function CreditApplicationForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      role: "",
      companyName: "",
      linkedinUrl: "",
      companySize: "",
      monthlyAwsSpend: "",
      hasAppliedBefore: "",
      acceptTerms: false,
      awsAccountId: "",
    },
    mode: "onChange",
  });

  const progress = (currentStep / STEPS.length) * 100;

  const validateStep = async (step: number): Promise<boolean> => {
    let fieldsToValidate: (keyof FormData)[] = [];

    switch (step) {
      case 1:
        fieldsToValidate = ["email", "firstName", "lastName", "role"];
        break;
      case 2:
        fieldsToValidate = [
          "companyName",
          "companySize",
          "monthlyAwsSpend",
          "hasAppliedBefore",
        ];
        break;
      case 3:
        fieldsToValidate = ["acceptTerms"];
        break;
      case 4:
        fieldsToValidate = ["awsAccountId"];
        break;
    }

    const result = await form.trigger(fieldsToValidate);
    return result;
  };

  const handleNext = async () => {
    const isValid = await validateStep(currentStep);
    if (isValid && currentStep < STEPS.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  async function onSubmit(values: FormData) {
    console.log("Credit Application Submitted:", values);
    // Here you would send the data to your backend
    setIsSubmitted(true);
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center space-y-6">
        <div className="w-20 h-20 rounded-full bg-linear-to-r from-brand to-brand-accent flex items-center justify-center">
          <CheckCircle className="w-10 h-10 text-white" />
        </div>
        <h2 className="text-3xl font-bold">Application Submitted!</h2>
        <p className="text-muted-foreground max-w-md">
          Your AWS credits application has been received. Our team will review
          your application and reach out within 24-48 hours with next steps.
        </p>
        <div className="bg-card border rounded-xl p-6 max-w-sm w-full">
          <p className="text-sm text-muted-foreground mb-2">
            Estimated Credits
          </p>
          <p className="text-4xl font-bold text-brand">
            $
            {calculateEstimatedCredits(
              form.getValues("monthlyAwsSpend"),
            ).toLocaleString()}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Progress Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            const isActive = currentStep === step.id;
            const isCompleted = currentStep > step.id;

            return (
              <div key={step.id} className="flex items-center flex-1">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                      isActive
                        ? "bg-gradient-to-r from-brand to-brand-accent text-white"
                        : isCompleted
                          ? "bg-brand/20 text-brand"
                          : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {isCompleted ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <Icon className="w-5 h-5" />
                    )}
                  </div>
                  <span
                    className={`text-xs mt-2 hidden sm:block ${
                      isActive
                        ? "text-foreground font-medium"
                        : "text-muted-foreground"
                    }`}
                  >
                    {step.title}
                  </span>
                </div>
                {index < STEPS.length - 1 && (
                  <div
                    className={`flex-1 h-0.5 mx-2 ${
                      currentStep > step.id ? "bg-brand" : "bg-muted"
                    }`}
                  />
                )}
              </div>
            );
          })}
        </div>
        <Progress value={progress} className="h-1" />
      </div>

      <div className="grid md:grid-cols-5 gap-8">
        {/* Form Section */}
        <div className="md:col-span-3">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Step 1: Contact Details */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">
                      Add your contact details
                    </h2>
                    <p className="text-muted-foreground">
                      Share the contact details of the best person to talk to
                      about your AWS credits request.
                    </p>
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Contact email *</FormLabel>
                        <FormControl>
                          <Input placeholder="you@company.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First name *</FormLabel>
                          <FormControl>
                            <Input placeholder="John" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="role"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your role *</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select your role" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {ROLES.map((role) => (
                              <SelectItem key={role} value={role}>
                                {role}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}

              {/* Step 2: Company Details */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">
                      Add your AWS details
                    </h2>
                    <p className="text-muted-foreground">
                      Provide basic AWS organization details to help estimate
                      your credits.
                    </p>
                  </div>

                  <FormField
                    control={form.control}
                    name="companyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Acme Inc." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="linkedinUrl"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company LinkedIn URL</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="https://linkedin.com/company/your-company"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="companySize"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company size *</FormLabel>
                        <div className="flex flex-wrap gap-2">
                          {COMPANY_SIZES.map((size) => (
                            <Button
                              key={size.value}
                              type="button"
                              variant={
                                field.value === size.value
                                  ? "default"
                                  : "outline"
                              }
                              className={
                                field.value === size.value
                                  ? "bg-brand hover:bg-brand/90"
                                  : ""
                              }
                              onClick={() => field.onChange(size.value)}
                            >
                              {size.label}
                            </Button>
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="monthlyAwsSpend"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Average monthly AWS spend *</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select spend range" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {AWS_SPEND_RANGES.map((range) => (
                              <SelectItem key={range.value} value={range.value}>
                                {range.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="hasAppliedBefore"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Have you applied for AWS credits before? *
                        </FormLabel>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex gap-4"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="yes" id="yes" />
                            <label htmlFor="yes" className="text-sm">
                              Yes
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="no" id="no" />
                            <label htmlFor="no" className="text-sm">
                              No
                            </label>
                          </div>
                        </RadioGroup>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}

              {/* Step 3: Review Credits */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">
                      Your potential AWS Credits
                    </h2>
                    <p className="text-muted-foreground">
                      This is the available AWS funding for your company. Review
                      and confirm the terms to start your application.
                    </p>
                  </div>

                  <div className="bg-linear-to-br from-card to-card/50 border rounded-xl p-6 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-xl bg-linear-to-r from-brand to-brand-accent flex items-center justify-center">
                        <Cloud className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Estimated Credits
                        </p>
                        <p className="text-4xl font-bold">
                          $
                          {calculateEstimatedCredits(
                            form.watch("monthlyAwsSpend"),
                          ).toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                      <div>
                        <p className="text-xs text-muted-foreground">
                          Commission on granted credits
                        </p>
                        <p className="font-medium">0%</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">
                          Credits valid for
                        </p>
                        <p className="font-medium">24 months</p>
                      </div>
                    </div>
                  </div>

                  <FormField
                    control={form.control}
                    name="acceptTerms"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm font-normal">
                            By clicking &quot;Accept&quot;, I confirm that I am
                            authorized to legally bind my company and, on its
                            behalf, I have read and agreed to the Morpheex AWS{" "}
                            <a href="/terms" className="text-brand underline">
                              Terms of Service
                            </a>{" "}
                            and{" "}
                            <a href="/privacy" className="text-brand underline">
                              Privacy Policy.
                            </a>
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
                </div>
              )}

              {/* Step 4: AWS Connection */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">
                      Join Morpheex AWS organization
                    </h2>
                    <p className="text-muted-foreground">
                      To unlock AWS credits, link your account with PartnerWay -
                      our verified AWS organization operated by Morpheex.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-brand/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-brand">1</span>
                      </div>
                      <div>
                        <p className="font-medium">
                          Provide your AWS Account ID
                        </p>
                        <p className="text-sm text-muted-foreground">
                          We&apos;ll send an invite to your AWS console.
                        </p>
                      </div>
                    </div>

                    <FormField
                      control={form.control}
                      name="awsAccountId"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="123456789012"
                              maxLength={12}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-muted-foreground">
                          2
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-muted-foreground">
                          Download the setup guide
                        </p>
                        <p className="text-sm text-muted-foreground">
                          We&apos;ll show you step-by-step how to join.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-muted-foreground">
                          3
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-muted-foreground">
                          Confirm the connection
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Once it&apos;s complete.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between pt-6 border-t">
                <Button
                  type="button"
                  variant="ghost"
                  onClick={handleBack}
                  disabled={currentStep === 1}
                  className="gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </Button>

                {currentStep < STEPS.length ? (
                  <Button
                    type="button"
                    onClick={handleNext}
                    className="bg-gradient-to-r from-brand to-brand-accent hover:opacity-90 gap-2"
                  >
                    Continue
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-brand to-brand-accent hover:opacity-90 gap-2"
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Apply for Credits
                        <CheckCircle className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                )}
              </div>
            </form>
          </Form>

          <p className="text-center text-sm text-muted-foreground mt-6">
            If you need assistance -{" "}
            <a href="/contact" className="text-brand underline">
              let&apos;s chat!
            </a>
          </p>
        </div>

        {/* Sidebar */}
        <div className="md:col-span-2 space-y-6">
          {/* Why we ask this */}
          <div className="bg-card border rounded-xl p-6">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Mail className="w-4 h-4 text-brand" />
              {currentStep === 1 && "Why we ask this?"}
              {currentStep === 2 && "Why we ask this?"}
              {currentStep === 3 && "Important to know"}
              {currentStep === 4 && "Important to know"}
            </h3>
            <div className="text-sm text-muted-foreground space-y-3">
              {currentStep === 1 && (
                <>
                  <p>
                    During the AWS credits review process, the AWS team may need
                    clarification on your application.
                  </p>
                  <p>
                    We use this contact to share progress updates and keep the
                    application moving forward without delays.
                  </p>
                </>
              )}
              {currentStep === 2 && (
                <>
                  <p>
                    AWS needs basic usage information to understand how credits
                    can be applied to your organization.
                  </p>
                  <p>
                    This helps us determine whether the program is fully free
                    for you or includes a service fee.
                  </p>
                </>
              )}
              {currentStep === 3 && (
                <>
                  <p>
                    AWS Credits are a type of balance that AWS provides to
                    companies to help them grow their infrastructure, build new
                    projects, or improve their existing architecture.
                  </p>
                  <p>
                    In essence, they&apos;re free funds added to your account
                    that you can use only to pay for AWS cloud services.
                  </p>
                </>
              )}
              {currentStep === 4 && (
                <>
                  <p>
                    AWS credits are issued only through verified partner
                    organizations. Joining our organization helps AWS verify
                    your eligibility and process your credits through an
                    official partner.
                  </p>
                </>
              )}
            </div>
          </div>

          {/* Data Safety */}
          <div className="bg-card border rounded-xl p-6">
            <h3 className="font-semibold mb-3">Your data is safe:</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li className="flex items-start gap-2">
                <Shield className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                We don&apos;t share your information with anyone.
              </li>
              <li className="flex items-start gap-2">
                <Lock className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                We never use it for marketing or advertising purposes.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                All your data is securely stored and protected.
              </li>
            </ul>
          </div>

          {/* AWS Partner Badges */}
          <div className="bg-card border rounded-xl p-6">
            <h3 className="font-semibold mb-3">
              Official AWS Advanced Partner
            </h3>
            <div className="flex flex-wrap gap-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-14 h-14 bg-muted rounded-lg flex items-center justify-center"
                >
                  <span className="text-[10px] text-muted-foreground text-center leading-tight">
                    AWS
                    <br />
                    Partner
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
