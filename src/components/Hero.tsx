import { motion, AnimatePresence } from "motion/react";
import { Play, ArrowRight, Video, Film, MonitorPlay, Clapperboard, HardDrive, MessageCircle } from "lucide-react";
import { phrases } from "../constants";

export default function Hero({ index, activeTheme }: { index: number, activeTheme: any }) {
  return (
    <section className="hero-section relative flex items-center justify-center pt-36 pb-20 overflow-hidden bg-zinc-950">
      <img
        src="/images/hero-products.jpg"
        alt="Skincare products arranged for an ecommerce campaign"
        fetchPriority="high"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/75 via-zinc-950/65 to-zinc-950/85" />

      <div className="max-w-5xl mx-auto px-6 w-full flex flex-col items-center text-center relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hero-title font-semibold tracking-[-0.04em] text-white mb-10 sm:mb-14 w-full"
        >
          <span className="block">AI Creative Strategist</span>
          <span className={`hero-rotating block font-display font-bold text-[0.95em] tracking-tight ${activeTheme.light}`}>
            for{" "}
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                transition={{ duration: 0.3 }}
                className="inline-block"
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
            href="https://drive.google.com/drive/folders/1Y_uzf708nWsXduL-aokTh7dhmBSHvQSq?usp=drive_link" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`inline-flex items-center justify-center px-7 py-4 text-base font-semibold text-white ${activeTheme.bg} hover:scale-105 rounded-full transition-all duration-300 shadow-xl ${activeTheme.shadow} group w-full sm:w-auto`}
          >
            <Play className="mr-2 w-4 h-4 fill-current transition-transform group-hover:scale-110" />
            See Ad Creative
          </a>
          <a 
            href="https://wa.me/918129917227" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center justify-center px-7 py-4 text-base font-semibold text-zinc-900 bg-white border-2 border-white hover:bg-zinc-100 rounded-full transition-all duration-300 group shadow-sm w-full sm:w-auto"
          >
            <Play className="mr-2 w-4 h-4 fill-current transition-transform group-hover:scale-110" />
            Discuss Your Brand
          </a>
        </motion.div>
      </div>
    </section>
  );
}
