import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do you work with ecommerce brands and agencies?",
    answer:
      "Yes. I work directly with ecommerce founders and growth teams, and support performance agencies as a white-label creative partner.",
  },
  {
    question: "What is your typical turnaround time for ad creatives?",
    answer:
      "I deliver initial concepts and hooks within 3–5 business days. Once approved, production and variation testing assets are delivered in 5–7 business days.",
  },
  {
    question: "How do UGC and AI fit into your ad production?",
    answer:
      "UGC edits bring product demonstrations and creator footage into your ads. AI supports visual concepts, product scenes, and variations. The approach depends on your product, brand, and available assets.",
  },
  {
    question: "How do you support performance marketing?",
    answer:
      "I collaborate with your media buyer on hooks, angles, and creative variations. When campaign data is available, we use it to guide the next batch of ads. The focus is creative strategy and production; your team manages media buying.",
  },
  {
    question: "Can we start with one project?",
    answer:
      "Yes. I offer individual projects and monthly creative retainers. We agree on the formats, number of variations, and production scope before work begins.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white border-t border-zinc-200">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-zinc-900 mb-12 text-center">
          FAQs
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ amount: 0.1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="border border-zinc-200 rounded-2xl overflow-hidden bg-zinc-50"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="text-lg font-medium text-zinc-800">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-zinc-500 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-indigo-600" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-zinc-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
