import { motion } from "motion/react";
import { Play, Check } from "lucide-react";

const services = [
  {
    headline: "Ecommerce Ad Strategy",
    items: ["Customer & Product Research", "Hooks & Offer Angles", "Ad Concepts & Scripts"],
    image: "/images/strategy.jpg",
    color: "#6366f1", // Indigo
  },
  {
    headline: "UGC & AI Ad Production",
    items: ["UGC Video Editing", "AI Visuals & Motion", "Static & Video Ads", "Product Demonstrations"],
    image: "/images/production.jpg",
    color: "#10b981", // Emerald
  },
  {
    headline: "Creative Testing",
    items: ["Paid Social Formats", "Hook Variations", "Offer & CTA Variations", "New Angles to Test"],
    image: "/images/testing.jpg",
    color: "#f43f5e", // Rose
  },
  {
    headline: "Performance Iteration",
    items: ["Campaign Creative Reviews", "Iterations from Ad Results", "Media Buyer Collaboration", "Fresh Creative Batches"],
    image: "/images/iteration.jpg",
    color: "#f59e0b", // Amber
  },
];

export default function Services() {
  return (
    <section className="py-32 bg-[#f8f9fa] relative border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-[15px] font-black tracking-[0.2em] uppercase text-zinc-400 mb-3">WHAT WE DO</h2>
          <h3 className="text-4xl sm:text-5xl font-bold text-zinc-900 tracking-tight mb-4">
            Creative for Ecommerce Growth.
          </h3>
          <p className="text-xl text-zinc-500">
            UGC, AI ads, and creative testing for ecommerce brands and their performance marketing teams.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ margin: "-100px", amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col items-stretch rounded-[32px] overflow-hidden bg-white border border-zinc-100 shadow-[0_8px_32px_rgba(0,0,0,0.03)] hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-zinc-100">
                <img 
                  src={service.image} 
                  alt={service.headline}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-60" />
              </div>
              
              <div className="relative pt-10 pb-8 px-6 bg-white flex-grow flex flex-col justify-start">
                <div className="absolute -top-7 left-6 w-14 h-14 bg-white rounded-full p-1.5 shadow-xl shadow-black/5 z-20">
                  <div 
                    style={{ backgroundColor: service.color }}
                    className="w-full h-full rounded-full flex items-center justify-center text-white shadow-lg transition-transform duration-300 group-hover:scale-110"
                  >
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  </div>
                </div>

                <h4 
                  style={{ color: service.color }}
                  className="text-[22px] leading-tight min-h-[2.5em] font-bold tracking-tight mb-4"
                >
                  {service.headline}
                </h4>

                <ul className="space-y-3">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-base text-zinc-600 leading-relaxed">
                      <Check className="w-4 h-4 mr-2 mt-0.5 shrink-0" style={{ color: service.color }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
