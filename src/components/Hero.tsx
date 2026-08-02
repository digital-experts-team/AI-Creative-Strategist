import { motion, AnimatePresence } from "motion/react";
import { Play, ArrowRight, Video, Film, MonitorPlay, Clapperboard, HardDrive, MessageCircle } from "lucide-react";
import { phrases } from "../constants";

export default function Hero({ index, activeTheme }: { index: number, activeTheme: any }) {
  return (
    <section className="relative min-h-[110vh] flex items-center justify-center pt-32 pb-16 overflow-hidden">
      {/* Full-screen Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260228_065522_522e2295-ba22-457e-8fdb-fbcd68109c73.mp4"
          type="video/mp4"
        />
      </video>

      <div className="max-w-5xl mx-auto px-6 w-full flex flex-col items-center text-center relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-6xl lg:text-[105px] font-medium leading-[1.1] tracking-[-0.04em] text-white mb-20 w-full"
        >
          <span className="block whitespace-nowrap">AI Creative Strategist</span>
          <span className={`block font-display font-extrabold text-[0.95em] tracking-tight whitespace-nowrap ${activeTheme.color}`}>
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
          className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-6 w-full sm:w-auto"
        >
          <a 
            href="https://drive.google.com/drive/folders/1Y_uzf708nWsXduL-aokTh7dhmBSHvQSq?usp=drive_link" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`inline-flex items-center justify-center px-10 py-5 text-base font-semibold text-white ${activeTheme.bg} hover:scale-105 rounded-full transition-all duration-300 shadow-xl ${activeTheme.shadow} group w-full sm:w-auto`}
          >
            <Play className="mr-2 w-4 h-4 fill-current transition-transform group-hover:scale-110" />
            Watch Videos
          </a>
          <a 
            href="https://wa.me/918129917227" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center justify-center px-10 py-5 text-base font-semibold text-zinc-900 bg-white border-2 border-white hover:bg-zinc-100 rounded-full transition-all duration-300 group shadow-sm w-full sm:w-auto"
          >
            <Play className="mr-2 w-4 h-4 fill-current transition-transform group-hover:scale-110" />
            Contact Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
