import { Target, Clapperboard, Repeat2, TrendingUp } from "lucide-react";

const playbooks = [
  {
    title: "The Reason-to-Buy Map",
    description: "I start with reviews, customer questions, and competing offers to find what makes the product worth buying and what might stop the sale.",
    detail: "For the same carry-on, a packing demo tests whether everything fits. A durability comparison tests whether the bag is worth the price. Each gives the customer a different reason to buy.",
    icon: Target,
    accent: "bg-blue-50 text-blue-700",
  },
  {
    title: "The First-Batch Test",
    description: "I turn the strongest angles into AI and UGC ads, with a clear question for each concept before it goes into production.",
    detail: "On Meta, I keep the offer and destination consistent when comparing angles. I look at how each ad earns attention and whether that attention turns into purchases.",
    icon: Clapperboard,
    accent: "bg-emerald-50 text-emerald-700",
  },
  {
    title: "Three-Phase Retargeting",
    description: "I plan three follow-ups: remind shoppers why they cared, answer a likely objection, and make the purchase easier.",
    detail: "A video viewer might need a product demo. A returning visitor might need a comparison or review. Someone who reached checkout might need a clear answer on delivery or returns.",
    icon: Repeat2,
    accent: "bg-rose-50 text-rose-700",
  },
  {
    title: "The Spend Decision",
    description: "I read Meta and Shopify together to decide whether to refresh the creative, hold the budget, or increase spend.",
    detail: "If clicks hold while purchases fall, my n8n demo routes the affected ads and date range to the person who owns the offer or product page. Proposed budget changes go to the media buyer for review.",
    icon: TrendingUp,
    accent: "bg-purple-50 text-purple-700",
  },
];

export default function Services() {
  return (
    <section aria-labelledby="playbooks-title" className="border-t border-zinc-200 bg-white py-16 sm:py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-start gap-10 px-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-20">
        <header className="lg:sticky lg:top-36">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-zinc-500">How I Work</p>
          <h2 id="playbooks-title" className="max-w-md text-4xl font-bold leading-[1.05] tracking-tight text-zinc-950 sm:text-5xl xl:text-6xl">
            My D2C Growth Playbooks
          </h2>
          <p className="mt-5 max-w-sm text-lg leading-relaxed text-zinc-600">
            Four methods I use to find the angle, test it on Meta, plan the follow-up, and decide what deserves more budget.
          </p>
        </header>

        <ol className="divide-y divide-zinc-200 border-y border-zinc-200">
          {playbooks.map(({ title, description, detail, icon: Icon, accent }, index) => (
            <li key={title} className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-4 py-8 sm:gap-6 sm:py-10">
              <div aria-hidden="true" className={`grid h-11 w-11 place-items-center rounded-xl ${accent}`}>
                <Icon size={22} strokeWidth={1.75} />
              </div>
              <div>
                <p aria-hidden="true" className="mb-1 text-xs font-bold tracking-widest text-zinc-500">0{index + 1}</p>
                <h3 className="text-2xl font-bold leading-tight tracking-tight text-zinc-950 sm:text-[1.75rem]">{title}</h3>
                <p className="mt-3 text-base leading-relaxed text-zinc-700">{description}</p>
                <p className="mt-3 text-base leading-relaxed text-zinc-600">{detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
