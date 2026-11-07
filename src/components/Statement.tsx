import { Image as ImageIcon } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function Statement() {
  return <StatementSection
    id="about"
    label="What I Own"
    lead="I own D2C growth for brands and agencies,"
    detail="from ads grounded in buyer psychology to creative testing on Meta and deciding when to scale."
  />;
}

const recentWork = [
  { title: "Creative Brief", detail: "Find a reason to buy and turn it into an ad concept worth testing." },
  { title: "Ad Production & Launch", detail: "Produce AI and UGC variants and launch the test on Meta." },
  { title: "Retargeting", detail: "Plan the next ad around what shoppers have already seen or done." },
  { title: "Budget Decision", detail: "Read the results and decide what to refresh, hold, or scale." },
];

export function RecentWorkStatement() {
  return (
    <section id="recent-work" aria-labelledby="recent-work-title" className="border-t border-zinc-200 bg-zinc-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-zinc-500">Recent Work</p>
          <h2 id="recent-work-title" className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">From Brief to Budget</h2>
          <p className="mx-auto mt-3 max-w-2xl text-zinc-600">I take one product from its first creative brief to its next budget decision.</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {recentWork.map(({ title, detail }) => (
            <article key={title} className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
              <div aria-hidden="true" className="grid aspect-[16/10] place-items-center border-b border-zinc-200 bg-zinc-100 text-zinc-400">
                <ImageIcon className="h-8 w-8" strokeWidth={1.5} />
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold text-zinc-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">{detail}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a className="font-semibold text-blue-700 underline underline-offset-4" href="/#case-studies">
            Explore Case Studies
          </a>
        </div>
      </div>
    </section>
  );
}

function StatementSection({ id, label, lead, detail }: {
  id: string;
  label: string;
  lead: string;
  detail: string;
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
    <section id={id} ref={ref} className="py-16 sm:py-20 overflow-hidden bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <p className="mb-4 text-center text-sm font-bold uppercase tracking-[0.2em] text-zinc-500">{label}</p>
        <motion.h2
          style={{ filter: blur, opacity, y }}
          className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-zinc-900 leading-[1.2] text-center tracking-tight max-w-4xl mx-auto"
        >
          {lead}{" "}
          <span className="text-zinc-500">{detail}</span>
        </motion.h2>
      </div>
    </section>
  );
}
