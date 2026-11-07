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
        <motion.h1 
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hero-title font-semibold tracking-[-0.04em] text-slate-950 mb-5 w-full"
        >
          <span className="block">D2C Growth Expert</span>
          <span className={`mt-2 grid font-display font-bold text-[clamp(1.4rem,5vw,3.5rem)] leading-tight tracking-tight ${activeTheme.color}`}>
            <span aria-hidden="true" className="invisible col-start-1 row-start-1">{phrases[2].text}</span>
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
        <p className="mb-7 max-w-xl rounded-xl bg-white/90 px-4 py-3 text-base font-medium leading-relaxed text-slate-900 sm:text-lg">
          I own Meta growth for DTC brands and agency clients, from AI and UGC ad production to creative testing, retargeting, and spend decisions.
        </p>

        <motion.div 
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 sm:gap-5 w-full sm:w-auto"
        >
          <a 
            href="#walkthrough" 
            className={`inline-flex items-center justify-center px-7 py-4 text-base font-semibold text-white ${activeTheme.bg} hover:scale-105 rounded-full transition-all duration-300 shadow-xl ${activeTheme.shadow} group w-full sm:w-auto`}
          >
            <Play className="mr-2 w-4 h-4 fill-current transition-transform group-hover:scale-110" />
            See an Account Walkthrough
          </a>

        </motion.div>
      </div>
    </section>
  );
}
