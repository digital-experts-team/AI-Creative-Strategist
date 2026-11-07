import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function Statement() {
  return <StatementSection
    id="about"
    label="What I Own"
    lead="I own Meta growth for DTC brands and agency clients,"
    detail="from AI and UGC ad production to creative testing, retargeting, and spend decisions."
  />;
}

export function RecentWorkStatement() {
  return <StatementSection
    id="recent-work"
    label="From Brief to Budget"
    lead="I take one product from its first creative brief to its next budget decision."
    detail="Explore my recent work on ad production, campaign setup, and retargeting, and see how I turn the readout into the next move."
    caseStudies
  />;
}

function StatementSection({ id, label, lead, detail, caseStudies = false }: {
  id: string;
  label: string;
  lead: string;
  detail: string;
  caseStudies?: boolean;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "center center"]
  });

  const blur = useTransform(scrollYProgress, [0, 1], ["blur(20px)", "blur(0px)"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <section id={id} ref={ref} className={`py-16 sm:py-20 overflow-hidden ${caseStudies ? "border-t border-zinc-200 bg-zinc-50" : "bg-white"}`}>
      <div className="max-w-5xl mx-auto px-6">
        <p className="mb-4 text-center text-sm font-bold uppercase tracking-[0.2em] text-zinc-500">{label}</p>
        <motion.h2
          style={{ filter: blur, opacity, y }}
          className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-zinc-900 leading-[1.2] text-center tracking-tight max-w-4xl mx-auto"
        >
          {lead}{" "}
          <span className="text-zinc-500">{detail}</span>
        </motion.h2>
        {caseStudies && (
          <div className="mt-7 text-center">
            <a className="font-semibold text-blue-700 underline underline-offset-4" href="/case-studies/">
              Explore Case Studies
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
