import { Button } from "@/components/ui/button";
import { Terminal } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#020617] text-center px-6">
      <div className="w-20 h-20 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-8 border border-purple-500/20">
        <Terminal className="w-10 h-10 text-purple-400" />
      </div>
      <h1 className="text-6xl font-black italic tracking-tighter mb-4 uppercase">
        Protocol <span className="text-purple-500">Error.</span>
      </h1>
      <p className="text-slate-400 max-w-md mb-8">
        The requested architecture path does not exist or has been refactored.
      </p>
      <Link href="/">
        <Button className="bg-purple-600 hover:bg-purple-500 rounded-full px-8">
          Return to Hub
        </Button>
      </Link>
      <div className="mt-12 text-[10px] font-mono text-slate-700 uppercase tracking-widest">
        Error Code: 404_NULL_REFERENCE
      </div>
    </div>
  );
}
