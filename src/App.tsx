import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Statement from "./components/Statement";
import Portfolio from "./components/Portfolio";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import { phrases } from "./constants";

export default function App() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const activeTheme = phrases[index];

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-zinc-200 selection:text-zinc-900">
      <Navbar activeTheme={activeTheme} />
      <main>
        <Hero index={index} activeTheme={activeTheme} />
        <Statement />
        <div id="services">
          <Services />
        </div>
        <div id="portfolio">
          <Portfolio />
        </div>
        <div id="faq">
          <FAQ />
        </div>
        <CTA activeTheme={activeTheme} />
      </main>
      <Footer />
    </div>
  );
}
