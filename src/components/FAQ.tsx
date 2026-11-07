import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What can I hand you on a DTC account?",
    answer: "I can own the Meta work from ad angles and creative briefs through AI and UGC production, campaign launch, retargeting, and budget decisions. If you already have a buyer or creative team, we’ll agree on what I own and where we work together.",
  },
  {
    question: "Can you take on a client account inside our agency?",
    answer: "Yes. I can slot into your existing process and own an agreed part of the account or the full Meta scope. I’ll brief the team, run the tests, and give you a client-ready readout that explains what changed, why it matters, and what I’d do next.",
  },
  {
    question: "Our ads get clicks, but sales aren’t following. Where would you start?",
    answer: "I’d follow the path from the ad to the product page and checkout, then compare Meta with what’s actually happening in Shopify. If the ad promises something the page doesn’t make clear, I’d test that gap before spending on another batch of ads.",
  },
  {
    question: "How do you decide which ads are worth testing?",
    answer: "I start with why someone would buy and what might make them hesitate. For the same product, one ad might show how it fits into their routine, while another answers whether it’s worth the price. I brief each ad around a different buying reason so the test can tell us what to make next.",
  },
  {
    question: "When would you scale spend, and when would you hold it?",
    answer: "I’d look at purchase volume, acquisition cost, and the margin you need to protect. If the results support more spend, I’ll explain where I’d put it. If the numbers are too thin or tracking is unclear, I’ll tell you what I’d check before making the move.",
  },
  {
    question: "Do you work beyond Meta?",
    answer: "I can scope a ChatGPT Ads pilot around a specific product, with a measurement plan and criteria for deciding whether to continue.",
  },
  {
    question: "Can we start with one product or one client account?",
    answer: "Yes. Bring one product, an active ad, or a client brief. We can agree on a focused first engagement with one clear question to answer. You’ll see how I brief the work, run the test, and explain the next decision before expanding the scope.",
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
