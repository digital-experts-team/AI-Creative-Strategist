import { Target, Clapperboard, Repeat2, TrendingUp } from "lucide-react";

const playbooks = [
  {
    title: "Buyer Psychology Mapping",
    description: "I map what makes someone consider a product, what makes them hesitate, and what proof would help them decide. That gives me distinct buying reasons to turn into ads.",
    detail: "The map shapes the brief. A shopper who doubts the price needs different proof from someone who doubts the product will work for them.",
    icon: Target,
    accent: "bg-blue-50 text-blue-700",
  },
  {
    title: "My Meta Creative Tests",
    description: "I turn those buying reasons into AI and UGC concepts and give each ad a question to answer on Meta.",
    detail: "I look at where interest turns into purchase intent. That tells me whether to develop the angle further or change how the ad delivers it.",
    icon: Clapperboard,
    accent: "bg-emerald-50 text-emerald-700",
  },
  {
    title: "My Three-Phase Retargeting",
    description: "I use a three-phase sequence that changes the message as shoppers get closer to buying.",
    detail: "What they’ve seen and where they stopped shape the next ad. That could mean a product demonstration, proof that answers a specific doubt, or a clearer path to checkout.",
    icon: Repeat2,
    accent: "bg-rose-50 text-rose-700",
  },
  {
    title: "Ad Signals & Budget Pacing",
    description: "I use automated reporting across Meta and Shopify to flag ads that may need a refresh, purchase drops after the click, and campaigns that are spending ahead of plan.",
    detail: "The workflow sends the evidence to whoever can act on it. If it spots room to shift budget, it queues a recommendation for the media buyer to review.",
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
            My Ad Strategies
          </h2>
          <p className="mt-5 max-w-sm text-lg leading-relaxed text-zinc-600">
            How I use buyer psychology to brief ads, sequence the follow-up, and spot when creative or spend needs attention.
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
