import { motion, AnimatePresence } from "motion/react";
import { Play } from "lucide-react";
import { phrases } from "../constants";

export default function Hero({ index, activeTheme }: { index: number, activeTheme: any }) {
  return (
    <section className="hero-section relative flex items-center justify-center pt-36 pb-20 overflow-hidden bg-zinc-950">
      <img
        src="/images/hero-original-frame.jpg"
        alt="Flower-covered dream landscape reflected in water, captured from the original hero video"
        fetchPriority="high"
        className="absolute inset-0 w-full h-full object-cover object-left sm:object-center z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/15 via-white/10 to-transparent" />

      <div className="max-w-5xl mx-auto px-6 w-full flex flex-col items-center text-center relative z-10">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-slate-950 sm:text-sm">Tibin Jacob</p>
        <motion.h1 
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-semibold tracking-[-0.04em] text-slate-950 mb-5 w-full"
        >
          <span className="block text-[clamp(1.5rem,4.5vw,4rem)] leading-tight">D2C Growth Expert</span>
          <span className={`mt-2 grid font-display font-bold text-[clamp(2.1rem,6vw,5.25rem)] leading-tight tracking-tight ${activeTheme.color}`}>
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
        <motion.div 
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 sm:gap-5 w-full sm:w-auto"
        >
          <a 
            href="/case-studies/" 
            className={`inline-flex items-center justify-center px-7 py-4 text-base font-semibold text-white ${activeTheme.bg} hover:scale-105 rounded-full transition-all duration-300 shadow-xl ${activeTheme.shadow} group w-full sm:w-auto`}
          >
            <Play className="mr-2 w-4 h-4 fill-current transition-transform group-hover:scale-110" />
            View Case Studies
          </a>

        </motion.div>
      </div>
    </section>
  );
}
