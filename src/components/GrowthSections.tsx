const decisions = [
  {
    title: "Find two reasons to buy",
    copy: "For a premium carry-on, one ad shows what fits on a weekend trip. A second shows what makes the bag worth keeping for years. Each concept tests a different reason to buy at the same price.",
  },
  {
    title: "Plan the three follow-ups",
    copy: "Reconnect with the packing demo, resolve a likely doubt with a size or durability comparison, then make delivery and returns clear. I’d adapt the sequence to what shoppers saw and the audience volume.",
  },
  {
    title: "Decide where spend goes",
    copy: "I’d read acquisition cost against the margin target, then check Shopify orders before raising spend. If clicks hold while orders fall, I’d inspect the offer, product page, and tracking before funding another batch.",
  },
];

export function AccountWalkthrough() {
  return (
    <section id="walkthrough" className="scroll-mt-28 border-t border-zinc-200 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-blue-700">Sample Account Walkthrough</p>
        <h2 className="max-w-3xl text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
          One Product. Two Angles. One Budget Decision.
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {decisions.map(({ title, copy }, index) => (
            <article key={title} className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
              <p className="mb-4 text-sm font-bold text-blue-700">0{index + 1}</p>
              <h3 className="mb-2 text-xl font-bold text-zinc-900">{title}</h3>
              <p className="leading-relaxed text-zinc-600">{copy}</p>
            </article>
          ))}
        </div>
        <p className="mt-6 text-sm leading-relaxed text-zinc-600">
          <strong className="text-zinc-900">Sample readout.</strong> Hold spend while we check the drop after the click. Give the stronger angle more budget once orders and acquisition cost support it.
        </p>
      </div>
    </section>
  );
}

export function Engagements() {
  return (
    <section className="border-t border-zinc-200 bg-zinc-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-8 text-4xl font-bold tracking-tight text-zinc-900">How to Work With Me</h2>
        <div className="grid gap-5 md:grid-cols-2">
          <article className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8">
            <h3 className="mb-2 text-2xl font-bold text-zinc-900">For Agencies</h3>
            <p className="leading-relaxed text-zinc-600">Start with one client account. I can own the brief, production, and Meta test, then give your team a readout with the next move and its rationale.</p>
          </article>
          <article className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8">
            <h3 className="mb-2 text-2xl font-bold text-zinc-900">For DTC Brands</h3>
            <p className="leading-relaxed text-zinc-600">Start with a Meta and Shopify diagnostic. We’ll identify where the sale is breaking down and agree on the first test and what would justify more spend.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
