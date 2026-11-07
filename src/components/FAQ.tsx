import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Can you own growth for a brand or an agency client?",
    answer:
      "Yes. I can own the work from product research and creative production through Meta campaign management, retargeting, and spend decisions. I can do that directly for a brand or within an agency’s paid social team.",
  },
  {
    question: "What would you do first on our account?",
    answer:
      "I’d take one product, look at the ads already getting spend, and check what happens on the store after the click. From there, I’d show you the first batch I’d make and the decision each ad would help me make.",
  },
  {
    question: "What makes your three-phase retargeting different?",
    answer:
      "I decide what each follow-up ad needs to accomplish based on where the shopper showed interest. In a walkthrough, I can show how I’d sequence the ads for your product and what would make me change the order.",
  },
  {
    question: "Do you work beyond Meta?",
    answer:
      "I also scope ChatGPT Ads pilots for D2C products, with a clear test objective and a plan for deciding whether the channel deserves more spend.",
  },
  {
    question: "What can we cover in a first conversation?",
    answer:
      "Bring a product link, an active ad, or a client brief. I’ll show you what I’d test first, what I’d run next, and what I’d need to see before putting more budget behind it.",
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
