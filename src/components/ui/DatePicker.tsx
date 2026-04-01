"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";

const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const MONTHS = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}
function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}
function toDateStr(y: number, m: number, d: number) {
  return `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
}
function parseDate(str: string): { y: number; m: number; d: number } | null {
  if (!str) return null;
  const [y, m, d] = str.split("-").map(Number);
  return { y, m: m - 1, d };
}

interface Props {
  label: string;
  value: string;
  onChange: (val: string) => void;
  minDate?: string;
  placeholder?: string;
}

export function DatePicker({ label, value, onChange, minDate, placeholder = "Select date" }: Props) {
  const today = new Date();
  const parsed = parseDate(value);
  const [isOpen, setIsOpen] = useState(false);
  const [viewYear, setViewYear] = useState(parsed?.y ?? today.getFullYear());
  const [viewMonth, setViewMonth] = useState(parsed?.m ?? today.getMonth());
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const daysInMonth = getDaysInMonth(viewYear, viewMonth);
  const firstDay = getFirstDayOfMonth(viewYear, viewMonth);
  const minParsed = parseDate(minDate ?? "");

  const isDisabled = (y: number, m: number, d: number) => {
    const ts = new Date(y, m, d).getTime();
    if (minParsed) {
      const minTs = new Date(minParsed.y, minParsed.m, minParsed.d).getTime();
      if (ts < minTs) return true;
    }
    const todayTs = new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime();
    return ts < todayTs;
  };

  const isSelected = (y: number, m: number, d: number) =>
    parsed && parsed.y === y && parsed.m === m && parsed.d === d;

  const isToday = (y: number, m: number, d: number) =>
    y === today.getFullYear() && m === today.getMonth() && d === today.getDate();

  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(v => v - 1); }
    else setViewMonth(v => v - 1);
  };
  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(v => v + 1); }
    else setViewMonth(v => v + 1);
  };

  const select = (d: number) => {
    const str = toDateStr(viewYear, viewMonth, d);
    onChange(str);
    setIsOpen(false);
  };

  const displayValue = parsed
    ? `${String(parsed.d).padStart(2, "0")} ${MONTHS[parsed.m].slice(0, 3)} ${parsed.y}`
    : "";

  return (
    <div ref={ref} className="relative w-full">
      {/* Trigger */}
      <div>
        <p className="text-[9px] font-bold tracking-[0.3em] uppercase text-[#A67C52] mb-1.5">{label}</p>
        <button
          type="button"
          onClick={() => setIsOpen(v => !v)}
          className="flex items-center gap-2 w-full text-left"
        >
          <Calendar className="w-3.5 h-3.5 text-white/30 flex-shrink-0" />
          <span className={`text-sm ${displayValue ? "text-white" : "text-white/40"}`}>
            {displayValue || placeholder}
          </span>
        </button>
      </div>

      {/* Calendar Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.97 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full left-0 mt-3 z-50 w-[300px] bg-[#0A0A0A] border border-[#A67C52]/20 rounded-2xl shadow-[0_24px_60px_rgba(0,0,0,0.7)] overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/5">
              <button
                onClick={prevMonth}
                className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-white/5 transition-colors"
              >
                <ChevronLeft className="w-4 h-4 text-white/60" />
              </button>
              <span className="text-sm font-serif text-white tracking-wide">
                {MONTHS[viewMonth]} {viewYear}
              </span>
              <button
                onClick={nextMonth}
                className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-white/5 transition-colors"
              >
                <ChevronRight className="w-4 h-4 text-white/60" />
              </button>
            </div>

            {/* Day headers */}
            <div className="grid grid-cols-7 px-3 pt-3 pb-1">
              {DAYS.map(d => (
                <div key={d} className="text-center text-[9px] font-bold tracking-widest text-[#A67C52]/60 uppercase py-1">
                  {d}
                </div>
              ))}
            </div>

            {/* Days grid */}
            <div className="grid grid-cols-7 px-3 pb-4 gap-y-1">
              {/* Empty cells for offset */}
              {Array.from({ length: firstDay }).map((_, i) => (
                <div key={`empty-${i}`} />
              ))}

              {Array.from({ length: daysInMonth }).map((_, i) => {
                const day = i + 1;
                const disabled = isDisabled(viewYear, viewMonth, day);
                const selected = isSelected(viewYear, viewMonth, day);
                const todayMark = isToday(viewYear, viewMonth, day);

                return (
                  <button
                    key={day}
                    onClick={() => !disabled && select(day)}
                    disabled={disabled}
                    className={[
                      "w-9 h-9 mx-auto flex items-center justify-center text-sm rounded-full transition-all duration-200 font-light",
                      disabled ? "text-white/15 cursor-not-allowed" : "hover:bg-[#A67C52]/15 hover:text-[#A67C52] cursor-pointer",
                      selected ? "bg-[#A67C52] !text-black font-bold hover:bg-[#8B6440]" : "",
                      todayMark && !selected ? "text-[#A67C52] border border-[#A67C52]/40" : "",
                      !selected && !disabled ? "text-white/75" : "",
                    ].join(" ")}
                  >
                    {day}
                  </button>
                );
              })}
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center px-5 py-3 border-t border-white/5">
              <button
                onClick={() => { onChange(""); setIsOpen(false); }}
                className="text-[10px] uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors font-bold"
              >
                Clear
              </button>
              <button
                onClick={() => {
                  const t = today;
                  select(t.getDate());
                  setViewYear(t.getFullYear());
                  setViewMonth(t.getMonth());
                }}
                className="text-[10px] uppercase tracking-[0.2em] text-[#A67C52] hover:text-[#8B6440] transition-colors font-bold"
              >
                Today
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
