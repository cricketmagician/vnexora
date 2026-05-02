"use client";

import React, { useState, useMemo } from "react";
import { 
  Search, 
  Filter, 
  MoreVertical, 
  Download, 
  ExternalLink,
  BarChart3
} from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface LeadTableProps {
  submissions: any[];
}

export function LeadTable({ submissions }: LeadTableProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSource, setSelectedSource] = useState<string | null>(null);

  const sources = useMemo(() => 
    [...new Set(submissions.map((s) => s.source))].filter(Boolean),
    [submissions]
  );

  const filteredSubmissions = useMemo(() => {
    return submissions.filter((s) => {
      const matchesSearch = 
        s.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.phone?.includes(searchTerm) ||
        s.subject?.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesSource = !selectedSource || s.source === selectedSource;
      
      return matchesSearch && matchesSource;
    });
  }, [submissions, searchTerm, selectedSource]);

  const handleExport = () => {
    if (filteredSubmissions.length === 0) return;

    const headers = ["Date", "Full Name", "Email", "Phone", "Subject", "Source", "Message"];
    const csvRows = [
      headers.join(","),
      ...filteredSubmissions.map((s) => [
        format(new Date(s.createdAt), "yyyy-MM-dd HH:mm"),
        `"${s.fullName?.replace(/"/g, '""')}"`,
        s.email,
        s.phone,
        `"${s.subject?.replace(/"/g, '""')}"`,
        s.source,
        `"${s.message?.replace(/"/g, '""').substring(0, 100)}..."`
      ].join(","))
    ];

    const csvContent = "data:text/csv;charset=utf-8," + csvRows.join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `vnexora_leads_${format(new Date(), "yyyy_MM_dd")}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-white border border-slate-200/60 rounded-3xl overflow-hidden shadow-sm shadow-slate-200/50">
      <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="relative group flex-grow max-w-md">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#CFA052] transition-colors" />
          <input 
            type="text" 
            placeholder="Search leads, emails or subjects..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 py-3 pl-12 pr-4 rounded-xl text-[11px] font-medium tracking-wide outline-none focus:border-[#CFA052] focus:ring-1 focus:ring-[#CFA052]/10 transition-all placeholder:text-slate-300 text-slate-900"
          />
        </div>
        <div className="flex items-center gap-4">
          <div className="relative flex items-center">
            <Filter size={14} className="absolute left-3 text-slate-400 pointer-events-none" />
            <select 
              value={selectedSource || ""}
              onChange={(e) => setSelectedSource(e.target.value || null)}
              className="appearance-none bg-white border border-slate-200 py-2.5 pl-9 pr-8 rounded-xl text-[10px] font-bold uppercase tracking-wider text-slate-600 outline-none focus:border-[#CFA052] transition-all cursor-pointer"
            >
              <option value="">All Sources</option>
              {sources.map(source => (
                <option key={source} value={source}>{source?.replace(/_/g, ' ')}</option>
              ))}
            </select>
          </div>
          <button 
            onClick={handleExport}
            className="bg-white hover:bg-slate-50 text-slate-600 px-5 py-2.5 rounded-xl text-[11px] font-bold uppercase tracking-wider border border-slate-200 transition-all flex items-center gap-2 shadow-sm"
          >
            <Download size={14} />
            Export CSV
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
            {filteredSubmissions.length > 0 ? filteredSubmissions.map((sub: any) => (
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
                    <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-slate-500">
                      {searchTerm ? "No Matching Results Found" : "No Lead Submissions Found"}
                    </p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
