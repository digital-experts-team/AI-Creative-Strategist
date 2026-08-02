import { motion } from "motion/react";

const logos = [
  "https://picsum.photos/seed/logo1/200/80?grayscale",
  "https://picsum.photos/seed/logo2/200/80?grayscale",
  "https://picsum.photos/seed/logo3/200/80?grayscale",
  "https://picsum.photos/seed/logo4/200/80?grayscale",
  "https://picsum.photos/seed/logo5/200/80?grayscale",
];

export default function Clients() {
  return (
    <section className="py-24 bg-zinc-50 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-zinc-900 mb-6">Client Base</h2>
        <p className="text-lg text-zinc-600 max-w-2xl mx-auto mb-16 leading-relaxed">
          Clients consistently share 5-star feedback about clarity,
          collaboration, and impact on their launches and campaigns. I'd love
          your project to be the next success story.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
          {logos.map((logo, index) => (
            <motion.img
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              src={logo}
              alt={`Client Logo ${index + 1}`}
              className="h-8 md:h-12 object-contain filter grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              referrerPolicy="no-referrer"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
