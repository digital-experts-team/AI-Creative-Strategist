import { motion } from "motion/react";

const shortFormGifs = [
  { id: 3, url: "https://i.ibb.co/1Gj0VRNM/UGC-Serum-ezgif-com-video-to-gif-converter.gif", alt: "UGC Serum Ad" },
  { id: 2, url: "https://i.ibb.co/xKBF7nq4/Generative-AI.gif", alt: "Generative AI" },
  { id: 1, url: "https://i.ibb.co/PvsvnHVx/clideo-editor-a489ac75a9ce461c883403c5a755104e-ezgif-com-crop.gif", alt: "Performance Ad" },
  { id: 4, url: "https://i.ibb.co/BH8kBTs4/Ecommerce-Brand.gif", alt: "Ecommerce Brand" },
];

export default function Portfolio() {
  return (
    <section className="py-24 bg-white relative border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-zinc-900 mb-4">Selected D2C Ad Work</h2>
          <p className="text-xl text-zinc-600">
            See the ad formats I can produce from a brief, including performance ads, AI visuals, and UGC edits.
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
                loading="lazy"
                width={540}
                height={960}
                className="block w-full aspect-[9/16] object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <p className="px-4 py-3 text-sm font-semibold text-zinc-800">{gif.alt}</p>
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
