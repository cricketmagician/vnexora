import { ReactNode } from "react";
import DashboardLoginGate from "@/components/DashboardLoginGate";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pt-28">
      <DashboardLoginGate>
        <main>{children}</main>
      </DashboardLoginGate>
    </div>
  );
}
