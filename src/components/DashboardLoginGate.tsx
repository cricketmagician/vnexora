"use client";

import { useState, useEffect } from "react";
import { ShieldCheck, Lock, ArrowRight, Eye, EyeOff } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function DashboardLoginGate({ children }: { children: React.ReactNode }) {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Check if user was previously authenticated
    const storedAuth = localStorage.getItem("vnexora_dashboard_auth");
    if (storedAuth === "true") {
      setIsAuthenticated(true);
    }
    setIsCheckingAuth(false);
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const res = await fetch("/api/dashboard-auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (data.success) {
        setIsAuthenticated(true);
        localStorage.setItem("vnexora_dashboard_auth", "true");
      } else {
        setError("Access denied. Invalid credentials.");
        setPassword("");
      }
    } catch {
      setError("Connection error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Prevent flicker during initial auth check
  if (isCheckingAuth) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-[#CFA052]/20 border-t-[#CFA052] rounded-full animate-spin" />
      </div>
    );
  }

  if (isAuthenticated) {
    return (
      <div className="relative">
        {/* Logout Button */}
        <div className="absolute top-0 right-6 z-50">
          <button 
            onClick={() => {
              localStorage.removeItem("vnexora_dashboard_auth");
              setIsAuthenticated(false);
            }}
            className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-red-500 transition-colors"
          >
            Terminal Logout
          </button>
        </div>
        {children}
      </div>
    );
  }

  return (
    <div className="min-h-[70vh] flex items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md bg-white p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100"
      >
        {/* Lock Icon */}
        <div className="flex justify-center mb-10">
          <div className="w-20 h-20 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center">
            <ShieldCheck size={32} className="text-[#CFA052]" />
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-10 space-y-2">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#CFA052] block">
            Restricted Access
          </span>
          <h1 className="text-3xl font-serif text-slate-900">
            Executive <span className="italic text-[#CFA052]">Portal</span>
          </h1>
          <p className="text-xs text-slate-400 font-medium tracking-wide">
            Authorized personnel only
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="relative group">
            <label className="text-[10px] font-bold tracking-widest uppercase text-slate-500 mb-2 block ml-1">
              <Lock size={10} className="inline mr-2" />
              Access Key
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(""); }}
                placeholder="ENTER PASSPHRASE"
                className="w-full bg-slate-50 border border-slate-200 py-4 px-5 pr-12 rounded-xl outline-none focus:border-[#CFA052] focus:ring-1 focus:ring-[#CFA052]/20 transition-all text-sm font-bold tracking-widest uppercase placeholder:text-slate-300 text-slate-900"
                autoFocus
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 hover:text-slate-500 transition-colors"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-red-500 text-[10px] font-bold uppercase tracking-widest text-center"
              >
                {error}
              </motion.p>
            )}
          </AnimatePresence>

          <button
            type="submit"
            disabled={isLoading || !password}
            className="w-full flex items-center justify-center gap-3 bg-slate-900 text-white py-4 rounded-xl font-bold text-[10px] tracking-[0.3em] uppercase hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-lg shadow-slate-900/10 group"
          >
            {isLoading ? "Verifying..." : "Authenticate"}
            {!isLoading && <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />}
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-[9px] text-slate-300 mt-10 tracking-widest uppercase">
          Vnexora Private Intelligence System
        </p>
      </motion.div>
    </div>
  );
}
