import { motion } from "motion/react";
import { Target, Clapperboard, FlaskConical, TrendingUp } from "lucide-react";
import type { CSSProperties } from "react";

const services = [
  {
    headline: "Ecommerce Ad Strategy",
    impact: "Give your product a clear angle, with customer research, hooks, and scripts built around why people buy.",
    icon: Target,
    color: "#2563eb",
    tint: "#eff6ff",
  },
  {
    headline: "UGC & AI Ad Production",
    impact: "Turn product benefits into UGC edits, AI visuals, and ads that bring your offer to life.",
    icon: Clapperboard,
    color: "#059669",
    tint: "#ecfdf5",
  },
  {
    headline: "Creative Testing",
    impact: "Find which hooks and offers connect with your audience through focused creative variations.",
    icon: FlaskConical,
    color: "#e11d48",
    tint: "#fff1f2",
  },
  {
    headline: "Performance Iteration",
    impact: "Use campaign learnings to refresh tired ads and shape your next batch of creative.",
    icon: TrendingUp,
    color: "#9333ea",
    tint: "#faf5ff",
  },
];

export default function Services() {
  return (
    <section className="py-32 bg-[#f8f9fa] relative border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <h2 className="text-[15px] font-bold tracking-[0.2em] uppercase text-zinc-500 mb-3">WHAT I DO</h2>
          <h3 className="text-4xl sm:text-5xl font-bold text-zinc-900 tracking-tight mb-4">
            Creative for Ecommerce Growth.
          </h3>
          <p className="text-xl text-zinc-500">
            UGC, AI ads, and creative testing for ecommerce brands and their performance marketing teams.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-x-10 gap-y-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.headline}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                style={{ "--service-color": service.color, "--service-tint": service.tint } as CSSProperties}
                className="service-item group"
              >
                <div className="flex items-center gap-5 mb-4">
                  <div className="service-icon" aria-hidden="true">
                    <div className="service-cube">
                      <div className="service-cube-face service-cube-front"><Icon size={23} strokeWidth={1.75} /></div>
                      <div className="service-cube-face service-cube-top" />
                      <div className="service-cube-face service-cube-right" />
                    </div>
                  </div>
                  <h4 className="service-title text-[23px] leading-tight font-bold tracking-tight">
                    {service.headline}
                  </h4>
                </div>
                <p className="text-base text-zinc-600 leading-relaxed">{service.impact}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
