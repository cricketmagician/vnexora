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
  Download
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
    <div className="p-8 lg:p-12 max-w-[1600px] mx-auto space-y-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/5 pb-12">
        <div className="space-y-4">
          <span className="text-[#E3B448] text-xs font-black uppercase tracking-[0.4em] block">Executive Portal</span>
          <h1 className="text-4xl md:text-5xl font-serif text-white tracking-tight">Lead Intelligence <span className="italic text-[#E3B448]">Dashboard</span></h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-white/5 hover:bg-white/10 text-white/60 px-6 py-3 text-[10px] font-black uppercase tracking-widest border border-white/10 transition-all flex items-center gap-3">
            <Download size={14} />
            Export CSV
          </button>
          <div className="bg-[#E3B448] text-black px-6 py-3 text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-3">
            <Users size={14} />
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
          trend="+12% from last month"
        />
        <StatCard 
          label="Recent (7 Days)" 
          value={recentSubmissions.toString()} 
          icon={<Calendar size={20} />} 
          trend="High Velocity"
        />
        <StatCard 
          label="Active Sources" 
          value={sources.length.toString()} 
          icon={<BarChart3 size={20} />} 
          trend="Optimized Channels"
        />
        <StatCard 
          label="Avg. Response" 
          value="< 24h" 
          icon={<Mail size={20} />} 
          trend="Elite Standards"
        />
      </div>

      {/* Main Table Section */}
      <div className="bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden backdrop-blur-md">
        <div className="p-8 border-b border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="relative group flex-grow max-w-md">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-[#E3B448] transition-colors" />
            <input 
              type="text" 
              placeholder="SEARCH LEADS, EMAILS OR SOURCES..." 
              className="w-full bg-white/5 border border-white/10 py-3 pl-12 pr-4 text-[10px] font-bold tracking-widest uppercase outline-none focus:border-[#E3B448]/50 transition-all placeholder:text-white/10"
            />
          </div>
          <div className="flex items-center gap-4">
            <button className="text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-white flex items-center gap-2 transition-colors">
              <Filter size={14} />
              Filter By Source
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/[0.03]">
                <th className="p-6 text-[10px] font-black uppercase tracking-[0.2em] text-white/40 border-b border-white/5">Date</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-[0.2em] text-white/40 border-b border-white/5">Contact</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-[0.2em] text-white/40 border-b border-white/5">Subject</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-[0.2em] text-white/40 border-b border-white/5">Source</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-[0.2em] text-white/40 border-b border-white/5">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {submissions.length > 0 ? submissions.map((sub: any) => (
                <tr key={sub.id} className="group hover:bg-white/[0.02] transition-colors">
                  <td className="p-6 border-b border-white/5 whitespace-nowrap">
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-white/80">{format(new Date(sub.createdAt), "dd MMM, yyyy")}</span>
                      <span className="text-[10px] text-white/20 uppercase tracking-tighter">{format(new Date(sub.createdAt), "HH:mm")}</span>
                    </div>
                  </td>
                  <td className="p-6 border-b border-white/5 max-w-[200px]">
                    <div className="flex flex-col gap-1">
                      <span className="text-xs font-bold text-white truncate">{sub.fullName}</span>
                      <span className="text-[10px] text-[#E3B448]/60 truncate tracking-widest uppercase">{sub.email || sub.phone}</span>
                    </div>
                  </td>
                  <td className="p-6 border-b border-white/5 max-w-[300px]">
                    <div className="flex flex-col gap-1">
                      <span className="text-xs font-medium text-white/60 truncate italic">"{sub.subject || 'No Subject'}"</span>
                      <span className="text-[9px] text-white/20 uppercase tracking-[0.1em] truncate">Message Preview: {sub.message.substring(0, 50)}...</span>
                    </div>
                  </td>
                  <td className="p-6 border-b border-white/5">
                    <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] font-black uppercase tracking-widest text-white/40">
                      {sub.source?.replace(/_/g, ' ') || 'Unknown'}
                    </span>
                  </td>
                  <td className="p-6 border-b border-white/5">
                    <div className="flex items-center gap-3">
                       <button className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/20 hover:text-[#E3B448] hover:border-[#E3B448]/40 transition-all">
                         <ArrowUpRight size={14} />
                       </button>
                       <button className="w-8 h-8 rounded-full flex items-center justify-center text-white/20 hover:text-white transition-colors">
                         <MoreVertical size={14} />
                       </button>
                    </div>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan={5} className="p-20 text-center">
                    <div className="flex flex-col items-center gap-4 opacity-20">
                      <BarChart3 size={48} />
                      <p className="text-[10px] font-black uppercase tracking-[0.4em]">No Submissions Logged Yet</p>
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

function StatCard({ label, value, icon, trend }: { label: string; value: string; icon: React.ReactNode; trend: string }) {
  return (
    <div className="bg-white/[0.03] border border-white/5 p-8 rounded-2xl space-y-6 hover:border-[#E3B448]/20 transition-all group">
      <div className="flex items-center justify-between">
        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#E3B448] group-hover:bg-[#E3B448] group-hover:text-black transition-all">
          {icon}
        </div>
        <span className="text-[9px] font-black uppercase tracking-widest text-[#E3B448]/40">{trend}</span>
      </div>
      <div className="space-y-1">
        <h3 className="text-3xl font-serif text-white">{value}</h3>
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">{label}</p>
      </div>
    </div>
  );
}
