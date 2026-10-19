import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function Statement() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "center center"]
  });

  const blur = useTransform(scrollYProgress, [0, 1], ["blur(20px)", "blur(0px)"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <section id="about" ref={ref} className="py-32 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          style={{ filter: blur, opacity, y }}
          className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-zinc-900 leading-[1.2] text-center tracking-tight max-w-4xl mx-auto"
        >
          I create UGC and AI ad creative for ecommerce brands,{" "}
          <span className="text-zinc-400">
            with product stories, fresh hooks, and variations your performance marketing team can test.
          </span>
        </motion.h2>
      </div>
    </section>
  );
}
