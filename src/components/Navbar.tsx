import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Play, ArrowUpRight } from "lucide-react";

export default function Navbar({ activeTheme }: { activeTheme: any }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 sm:top-6 left-0 right-0 z-50 px-4 sm:px-6 flex justify-center"
    >
      <div 
        className={`flex items-center justify-between gap-3 sm:gap-8 bg-white/95 backdrop-blur-md rounded-[16px] px-4 sm:px-8 py-3.5 w-full max-w-6xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-zinc-100 transition-all duration-300 ${
          scrolled ? "py-2.5 scale-[0.98] bg-white" : ""
        }`}
      >
        <a href="#" className="flex items-center space-x-2 group">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-zinc-900 transition-colors">
            <Play className="w-5 h-5 ml-0.5 animate-pulse" fill="currentColor" />
          </div>
          <span className="font-display font-semibold text-xl tracking-tight text-zinc-900">
            Tibin Jacob
          </span>
        </a>

        <nav className="hidden lg:flex items-center space-x-8">
          <a
            href="#about"
            className="text-[14px] font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
          >
            About
          </a>
          <a
            href="#portfolio"
            className="text-[14px] font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
          >
            Works
          </a>
          <a
            href="#services"
            className="text-[14px] font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
          >
            Services
          </a>
          <a
            href="#faq"
            className="text-[14px] font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
          >
            FAQs
          </a>
        </nav>

        <div className="flex items-center">
          <a href="https://wa.me/918129917227" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-3 px-3 sm:px-6 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#111] hover:bg-zinc-800 rounded-full transition-all duration-300 shadow-md`}>
            Let’s Talk
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.header>
  );
}
