import db from "@/lib/db";
import { 
  BarChart3, 
  Users, 
  Mail, 
  Calendar, 
  ArrowUpRight, 
  Search,
  Filter,
  MoreVertical,
  Download,
  ExternalLink
} from "lucide-react";
import { format } from "date-fns";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  // Fetch all submissions from DB
  let submissions: any[] = [];
  try {
    submissions = await db.submission.findMany({
      orderBy: { createdAt: "desc" }
    });
  } catch (error) {
    console.error("Dashboard Fetch Error:", error);
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
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-white hover:bg-slate-50 text-slate-600 px-5 py-2.5 rounded-xl text-[11px] font-bold uppercase tracking-wider border border-slate-200 transition-all flex items-center gap-2 shadow-sm">
            <Download size={14} />
            Export Data
          </button>
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
      <div className="bg-white border border-slate-200/60 rounded-3xl overflow-hidden shadow-sm shadow-slate-200/50">
        <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="relative group flex-grow max-w-md">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#CFA052] transition-colors" />
            <input 
              type="text" 
              placeholder="Search leads, emails or sources..." 
              className="w-full bg-slate-50 border border-slate-200 py-3 pl-12 pr-4 rounded-xl text-[11px] font-medium tracking-wide outline-none focus:border-[#CFA052] focus:ring-1 focus:ring-[#CFA052]/10 transition-all placeholder:text-slate-300 text-slate-900"
            />
          </div>
          <div className="flex items-center gap-4">
            <button className="text-[11px] font-bold uppercase tracking-wider text-slate-400 hover:text-slate-900 flex items-center gap-2 transition-colors">
              <Filter size={14} />
              Filter By Source
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100">Date & Time</th>
                <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100">Contact Information</th>
                <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100">Subject / Inquiry</th>
                <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100">Inquiry Source</th>
                <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {submissions.length > 0 ? submissions.map((sub: any) => (
                <tr key={sub.id} className="group hover:bg-slate-50/50 transition-colors">
                  <td className="p-6 whitespace-nowrap">
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-slate-900">{format(new Date(sub.createdAt), "dd MMM, yyyy")}</span>
                      <span className="text-[10px] text-slate-400 font-medium uppercase tracking-tight">{format(new Date(sub.createdAt), "HH:mm")}</span>
                    </div>
                  </td>
                  <td className="p-6 max-w-[200px]">
                    <div className="flex flex-col gap-1">
                      <span className="text-xs font-bold text-slate-900 truncate">{sub.fullName}</span>
                      <span className="text-[10px] text-[#CFA052] font-semibold truncate tracking-wider uppercase">{sub.email || sub.phone}</span>
                    </div>
                  </td>
                  <td className="p-6 max-w-[300px]">
                    <div className="flex flex-col gap-1">
                      <span className="text-xs font-medium text-slate-600 truncate italic">"{sub.subject || 'No Subject Specified'}"</span>
                      <span className="text-[10px] text-slate-400 font-medium truncate">Preview: {sub.message.substring(0, 50)}...</span>
                    </div>
                  </td>
                  <td className="p-6">
                    <span className="inline-block px-3 py-1 bg-slate-100 border border-slate-200 rounded-lg text-[9px] font-bold uppercase tracking-widest text-slate-500">
                      {sub.source?.replace(/_/g, ' ') || 'Unknown'}
                    </span>
                  </td>
                  <td className="p-6 text-right">
                    <div className="flex items-center justify-end gap-2">
                       <button className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#CFA052] hover:border-[#CFA052] hover:bg-[#CFA052]/5 transition-all shadow-sm">
                         <ExternalLink size={14} />
                       </button>
                       <button className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-300 hover:text-slate-900 transition-colors">
                         <MoreVertical size={16} />
                       </button>
                    </div>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan={5} className="p-24 text-center">
                    <div className="flex flex-col items-center gap-4 opacity-30">
                      <div className="w-20 h-20 rounded-3xl bg-slate-100 flex items-center justify-center">
                        <BarChart3 size={32} className="text-slate-400" />
                      </div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-slate-500">No Lead Submissions Found</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
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
