import { motion } from "motion/react";
import { Target, Clapperboard, FlaskConical, TrendingUp } from "lucide-react";
import type { CSSProperties } from "react";

const services = [
  {
    headline: "The Reason-to-Buy Map",
    impact: "I look for the moment a product becomes worth buying and the doubt that can stop the sale. I turn those findings into separate ad angles for the same product.",
    icon: Target,
    color: "#2563eb",
    tint: "#eff6ff",
  },
  {
    headline: "The First-Batch Test",
    impact: "I build the first batch of AI and UGC ads around decisions I need to make on Meta. Each concept earns its place by answering a different question.",
    icon: Clapperboard,
    color: "#059669",
    tint: "#ecfdf5",
  },
  {
    headline: "Three-Phase Retargeting",
    impact: "I plan three phases of follow-up based on what shoppers have already seen and what they may still need to see before buying.",
    icon: FlaskConical,
    color: "#e11d48",
    tint: "#fff1f2",
  },
  {
    headline: "The Spend Decision",
    impact: "I read Meta and Shopify together to decide what to refresh, hold, or scale. My n8n workflows surface changes and route the evidence before a budget decision.",
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
          <h2 className="text-[15px] font-bold tracking-[0.2em] uppercase text-zinc-500 mb-3">HOW I WORK</h2>
          <h3 className="text-4xl sm:text-5xl font-bold text-zinc-900 tracking-tight mb-4">
            My D2C Growth Playbook
          </h3>
          <p className="text-xl text-zinc-500">
            Four methods I use to take a product from its first ad test to its next growth decision.
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
        <aside className="mt-12 rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8">
          <h4 className="mb-2 text-lg font-bold text-zinc-900">Meta + Shopify Workflow Demo</h4>
          <p className="max-w-3xl leading-relaxed text-zinc-600">
            When clicks hold but orders fall, my n8n demo sends the affected ads and date range to the person who owns the offer or product page. Budget recommendations go to the media buyer for approval.
          </p>
          <a className="mt-4 inline-block font-semibold text-blue-700 underline" href="/#when-clicks-hold">See the workflow in context</a>
        </aside>
      </div>
    </section>
  );
}
