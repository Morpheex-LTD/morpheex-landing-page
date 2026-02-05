import { ArrowRightIcon } from "lucide-react";
import { LeadForm } from "../form/lead-form";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

const CloudAuditModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="lg"
          className="bg-brand hover:bg-brand-dark text-primary-foreground px-8 h-12 font-medium transition-colors"
        >
          Start Cloud Audit
          <ArrowRightIcon className="ml-2 w-4 h-4" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Book Your Cloud Audit</DialogTitle>
          <DialogDescription>
            Our architects will review your AWS setup and provide a
            modernization roadmap.
          </DialogDescription>
        </DialogHeader>
        <LeadForm />
      </DialogContent>
    </Dialog>
  );
};

export default CloudAuditModal;
