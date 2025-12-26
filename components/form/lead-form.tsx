"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle, Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.email(),
  companyName: z.string().optional(),
  message: z.string().min(10),
});

export function LeadForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      companyName: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);

    const result = { success: true };
    if (result.success) {
      setIsSubmitted(true);
    }
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center space-y-4">
        <CheckCircle className="w-16 h-16 text-brand-cyan animate-bounce" />
        <h3 className="text-2xl font-bold">Request Received!</h3>
        <p className="text-slate-400">
          An AWS Architect from Morpheex will reach out within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 text-left"
      >
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="John"
                    {...field}
                    className="bg-slate-900 border-slate-700"
                  />
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
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Doe"
                    {...field}
                    className="bg-slate-900 border-slate-700"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Business Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="john@company.com"
                  {...field}
                  className="bg-slate-900 border-slate-700"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="companyName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company</FormLabel>
              <FormControl>
                <Input
                  placeholder="Acme Corp"
                  {...field}
                  className="bg-slate-900 border-slate-700"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>How can we help?</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about your current infrastructure..."
                  {...field}
                  className="bg-slate-900 border-slate-700 h-24"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full bg-brand-sapphire hover:bg-brand-cyan hover:text-slate-900 transition-all font-bold"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
            </>
          ) : (
            "Book My Audit"
          )}
        </Button>
      </form>
    </Form>
  );
}
