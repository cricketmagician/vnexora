import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* Basic Dashboard Sidebar/Nav could go here */}
      <main>{children}</main>
    </div>
  );
}
