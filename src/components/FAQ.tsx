import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How does the 'Invisible Creative Department' model work?",
    answer:
      "I function as your white-label creative partner. You manage the client relationship, and I deliver all strategy, production, and testing assets under your agency's brand name.",
  },
  {
    question: "What is your typical turnaround time for ad creatives?",
    answer:
      "I deliver initial concepts and hooks within 3–5 business days. Once approved, production and variation testing assets are delivered in 5–7 business days.",
  },
  {
    question: "Do you collaborate directly with our media buyers?",
    answer:
      "Yes, I can communicate directly with your media buyers (or through you on Slack/email) to align creative direction with live performance data and CTR metrics.",
  },
  {
    question: "What assets do you deliver for creative testing?",
    answer:
      "I deliver distinct hooks, body angle variations, call-to-actions (CTAs), and static/motion options so you can systematically test and isolate winning performance variables.",
  },
  {
    question: "Is there a contract or commitment?",
    answer:
      "I offer flexible monthly creative retainers and pay-per-project models to scale up or down as your agency's client load fluctuates.",
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
