import db from "@/lib/db";
import { 
  BarChart3, 
  Users, 
  Mail, 
  Calendar, 
} from "lucide-react";
import { LeadTable } from "@/components/dashboard/LeadTable";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  // Fetch all submissions from DB
  let submissions: any[] = [];
  let dbError = null;
  
  try {
    submissions = await db.submission.findMany({
      orderBy: { createdAt: "desc" }
    });
  } catch (error: any) {
    console.error("Dashboard Fetch Error:", error);
    dbError = error.message || "Database connection failed.";
  }

  // Statistics
  const totalSubmissions = submissions.length;
  const recentSubmissions = submissions.filter((s: any) => {
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    return new Date(s.createdAt) > weekAgo;
  }).length;

  const sources = [...new Set(submissions.map((s: any) => s.source))];

  return (
    <div className="p-6 lg:p-10 max-w-[1600px] mx-auto space-y-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white p-8 rounded-3xl border border-slate-200/60 shadow-sm shadow-slate-200/50">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
             <span className="w-2 h-2 rounded-full bg-[#CFA052] animate-pulse"></span>
             <span className="text-[#CFA052] text-[10px] font-bold uppercase tracking-[0.2em]">Live Intelligence Portal</span>
          </div>
          <h1 className="text-3xl font-serif text-slate-900 tracking-tight">Lead Intelligence <span className="italic text-[#CFA052]">System</span></h1>
          <p className="text-xs text-slate-400 font-medium">Real-time performance metrics and lead management for Vnexora.</p>
          {dbError && (
            <p className="text-[10px] text-red-500 font-bold uppercase tracking-wider mt-2">
              ⚠️ {dbError}
            </p>
          )}
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-slate-900 text-white px-5 py-2.5 rounded-xl text-[11px] font-bold uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg shadow-slate-900/10">
            <Users size={14} className="text-[#CFA052]" />
            {totalSubmissions} Total Leads
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          label="Total Leads" 
          value={totalSubmissions.toString()} 
          icon={<Users size={20} />} 
          trend="+12% this month"
          color="bg-blue-50 text-blue-600"
        />
        <StatCard 
          label="Recent (7 Days)" 
          value={recentSubmissions.toString()} 
          icon={<Calendar size={20} />} 
          trend="High Velocity"
          color="bg-amber-50 text-[#CFA052]"
        />
        <StatCard 
          label="Active Sources" 
          value={sources.length.toString()} 
          icon={<BarChart3 size={20} />} 
          trend="Optimized Channels"
          color="bg-emerald-50 text-emerald-600"
        />
        <StatCard 
          label="Avg. Response" 
          value="< 24h" 
          icon={<Mail size={20} />} 
          trend="Elite Standards"
          color="bg-purple-50 text-purple-600"
        />
      </div>

      {/* Main Table Section */}
      <LeadTable submissions={submissions} />
    </div>
  );
}

function StatCard({ label, value, icon, trend, color }: { label: string; value: string; icon: React.ReactNode; trend: string; color: string }) {
  return (
    <div className="bg-white border border-slate-200/60 p-8 rounded-3xl space-y-6 hover:shadow-lg hover:shadow-slate-200/30 transition-all group relative overflow-hidden">
      <div className="flex items-center justify-between">
        <div className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center transition-all duration-500 group-hover:scale-110`}>
          {icon}
        </div>
        <div className="flex flex-col items-end">
          <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400 mb-1">Growth</span>
          <span className={`text-[10px] font-bold uppercase tracking-wider ${color.split(' ')[1]}`}>{trend}</span>
        </div>
      </div>
      <div className="space-y-1">
        <h3 className="text-4xl font-serif text-slate-900 tracking-tight">{value}</h3>
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">{label}</p>
      </div>
      {/* Subtle background decoration */}
      <div className={`absolute -right-4 -bottom-4 w-24 h-24 rounded-full ${color.split(' ')[0]} opacity-[0.03] pointer-events-none`}></div>
    </div>
  );
}
