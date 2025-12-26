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
          className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all hover:scale-105 group"
        >
          Start Cloud Audit
          <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-slate-900 border-slate-800">
        <DialogHeader>
          <DialogTitle className="text-white">
            Book Your Cloud Audit
          </DialogTitle>
          <DialogDescription className="text-slate-400">
            Our architects will review your current AWS setup or legacy stack
            and provide a modernization roadmap.
          </DialogDescription>
        </DialogHeader>
        <LeadForm />
      </DialogContent>
    </Dialog>
  );
};

export default CloudAuditModal;
