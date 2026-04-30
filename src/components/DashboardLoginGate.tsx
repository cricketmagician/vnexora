"use client";

import { useState } from "react";
import { ShieldCheck, Lock, ArrowRight, Eye, EyeOff } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function DashboardLoginGate({ children }: { children: React.ReactNode }) {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-[70vh] flex items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md"
      >
        {/* Lock Icon */}
        <div className="flex justify-center mb-10">
          <div className="w-20 h-20 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center">
            <ShieldCheck size={32} className="text-[#E3B448]" />
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-12 space-y-3">
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#E3B448]/60 block">
            Restricted Access
          </span>
          <h1 className="text-3xl font-serif text-white">
            Executive <span className="italic text-[#E3B448]">Portal</span>
          </h1>
          <p className="text-xs text-white/20 font-light tracking-widest uppercase">
            Authorized personnel only
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-8">
          <div className="relative group">
            <label className="text-[10px] font-black tracking-[0.3em] uppercase text-white/30 mb-3 block ml-1">
              <Lock size={10} className="inline mr-2" />
              Access Key
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(""); }}
                placeholder="ENTER PASSPHRASE"
                className="w-full bg-white/[0.03] border border-white/10 py-4 px-4 pr-12 outline-none focus:border-[#E3B448]/50 transition-all text-sm font-bold tracking-widest uppercase placeholder:text-white/10 text-white"
                autoFocus
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20 hover:text-white/60 transition-colors"
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
                className="text-red-400/80 text-[10px] font-bold uppercase tracking-widest text-center"
              >
                {error}
              </motion.p>
            )}
          </AnimatePresence>

          <button
            type="submit"
            disabled={isLoading || !password}
            className="w-full flex items-center justify-center gap-4 bg-[#E3B448] text-black py-4 font-black text-[10px] tracking-[0.4em] uppercase hover:bg-[#E3B448]/90 disabled:opacity-30 disabled:cursor-not-allowed transition-all group"
          >
            {isLoading ? "Verifying..." : "Authenticate"}
            {!isLoading && <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />}
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-[9px] text-white/10 mt-12 tracking-widest uppercase">
          Vnexora Private Intelligence System
        </p>
      </motion.div>
    </div>
  );
}
