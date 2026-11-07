import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Play, ArrowUpRight, Menu, X } from "lucide-react";

export default function Navbar({ activeTheme }: { activeTheme: any }) {
  const [menuOpen, setMenuOpen] = useState(false);
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
        className={`flex items-center justify-between gap-2 sm:gap-8 bg-white/95 backdrop-blur-md rounded-[16px] px-4 sm:px-8 py-2 w-full lg:py-3.5 max-w-6xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-zinc-100 transition-all duration-300 ${
          scrolled ? "py-2.5 scale-[0.98] bg-white" : ""
        }`}
      >
        <a href="/" className="flex items-center gap-1.5 whitespace-nowrap group">
          <div className="w-5 h-8 sm:w-8 rounded-lg flex items-center justify-center text-zinc-900 transition-colors">
            <Play className="w-5 h-5 ml-0.5 animate-pulse" fill="currentColor" />
          </div>
          <span className="font-display font-semibold text-base sm:text-xl tracking-tight text-zinc-900">
            Tibin Jacob
          </span>
        </a>

        <nav
          id="primary-navigation"
          aria-label="Main navigation"
          className={`${menuOpen ? "flex" : "hidden"} absolute inset-x-0 top-full mt-2 flex-col gap-1 rounded-2xl border border-zinc-100 bg-white p-2 shadow-lg lg:static lg:mt-0 lg:flex lg:flex-row lg:items-center lg:gap-5 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none`}
        >
          {[
            { href: "/#portfolio", label: "Selected Work" },
            { href: "/case-studies/", label: "Case Studies" },
            { href: "/news/", label: "News" },
            { href: "/feed/", label: "My Feed" },
            { href: "/", label: "Home" },
          ].map(({ href, label }) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 lg:p-0 lg:hover:bg-transparent">
              {label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <button
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen(open => !open)}
            onKeyDown={event => { if (event.key === "Escape") setMenuOpen(false); }}
            className="grid size-10 place-items-center rounded-full text-zinc-900 hover:bg-zinc-100 lg:hidden"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
          <a href="https://wa.me/918129917227" target="_blank" rel="noopener noreferrer" className={`flex items-center min-h-11 gap-2 whitespace-nowrap px-4 sm:gap-3 sm:px-6 py-2.5 text-sm font-semibold text-white bg-[#111] hover:bg-zinc-800 rounded-full transition-all duration-300 shadow-md`}>
            Connect
            <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0" />
          </a>
        </div>
      </div>
    </motion.header>
  );
}
