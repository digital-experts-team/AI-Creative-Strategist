/// <reference types="vite/client" />

import { motion, AnimatePresence } from "motion/react";
import { CalendarDays } from "lucide-react";
import { phrases } from "../constants";

const bookingUrl = import.meta.env.VITE_BOOKING_URL?.trim();

export default function Hero({ index, activeTheme }: { index: number, activeTheme: any }) {
  return (
    <section className="hero-section relative flex items-stretch justify-center pt-28 pb-12 sm:items-center sm:pt-36 sm:pb-20 overflow-hidden bg-zinc-950">
      <img
        src="/images/hero-original-frame.jpg"
        alt="Flower-covered dream landscape reflected in water, captured from the original hero video"
        fetchPriority="high"
        className="absolute inset-0 w-full h-full object-cover object-left sm:object-center z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/15 via-white/10 to-transparent" />

      <div className="max-w-5xl mx-auto px-6 w-full flex flex-col items-center justify-between gap-16 text-center sm:justify-center sm:gap-10 relative z-10">
        <div className="w-full translate-y-[44px] lg:translate-y-[-52px]">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-slate-950 sm:text-sm">Tibin Jacob</p>
        <motion.h1 
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-semibold tracking-[-0.04em] text-slate-950 w-full"
        >
          <span className="block text-[clamp(2.25rem,9vw,3.25rem)] leading-tight sm:text-[clamp(1.5rem,4.5vw,4rem)]">D2C Ad Expert</span>
          <span className={`mt-2 grid font-hero font-black text-[clamp(1.9rem,8vw,2.85rem)] sm:text-[clamp(1.65rem,4vw,3.5rem)] leading-tight tracking-[-0.055em] ${activeTheme.color}`}>
            {phrases.map(({ text }) => (
              <span key={text} aria-hidden="true" className="invisible col-start-1 row-start-1">{text}</span>
            ))}
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                transition={{ duration: 0.3 }}
                className="col-start-1 row-start-1"
              >
                {phrases[index].text}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.h1>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 sm:gap-5 w-full sm:w-auto"
        >
          <a 
            href={bookingUrl || "https://wa.me/918129917227?text=Hi%20Tibin%2C%20I%27d%20like%20to%20schedule%20a%20call."}
            target="_blank"
            rel="noopener noreferrer" 
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-base font-semibold text-slate-950 shadow-lg transition-colors hover:bg-slate-100 sm:w-auto"
          >
            <CalendarDays aria-hidden="true" className="h-4 w-4" />
            {bookingUrl ? "Book a Call" : "Request a Call"}
          </a>

        </motion.div>
      </div>
    </section>
  );
}
