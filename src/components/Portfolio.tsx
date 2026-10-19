import { motion } from "motion/react";

const shortFormGifs = [
  { id: 1, url: "https://i.ibb.co/wNbcF4FY/Performance-Ad.gif", alt: "Performance Ad" },
  { id: 2, url: "https://i.ibb.co/xKBF7nq4/Generative-AI.gif", alt: "Generative AI" },
  { id: 3, url: "https://i.ibb.co/bjnzs0cN/UGC-Ad.gif", alt: "UGC Ad" },
  { id: 4, url: "https://i.ibb.co/BH8kBTs4/Ecommerce-Brand.gif", alt: "Ecommerce Brand" },
];

const portfolioItems = [
  {
    id: 1,
    title: "Simple EV Energy",
    caption: "B2B SaaS – Onboarding explainer increasing activation",
    videoId: "iYjcZE58vB4",
  },
  {
    id: 2,
    title: "Shanoor Builders ",
    caption: "Generative AI – High-energy social media ad",
    videoId: "-Do9T90oC1Y",
  },
  {
    id: 3,
    title: "ClickUp Saas",
    caption: "Fintech – 3-minute comprehensive workflow demo",
    videoId: "2bdNqg04mnI",
  },
  {
    id: 4,
    title: "Kia Motors",
    caption: "E-commerce SaaS – Paid social acquisition campaign",
    videoId: "mxF4Xe1nUEw",
  },
];

export default function Portfolio() {
  return (
    <section className="py-24 bg-white relative border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-zinc-900 mb-4">Portfolio</h2>
          <p className="text-xl text-zinc-600">
            UGC, AI Ad Creative & Ecommerce Product Videos
          </p>
        </div>

        {/* Short Form GIFs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {shortFormGifs.map((gif, index) => (
            <motion.div
              key={gif.id}
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ margin: "-100px", amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-[12px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_0_40px_rgba(99,102,241,0.25)] transition-shadow duration-500 bg-zinc-100"
            >
              <img
                src={gif.url}
                alt={gif.alt}
                className="w-full h-auto aspect-[9/16] object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a href="https://drive.google.com/drive/folders/1Y_uzf708nWsXduL-aokTh7dhmBSHvQSq?usp=drive_link" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-zinc-700 bg-white hover:bg-zinc-50 border border-zinc-200 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md">
            Explore Ad Creative
          </a>
        </div>
      </div>
    </section>
  );
}
