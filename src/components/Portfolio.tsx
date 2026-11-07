import { motion } from "motion/react";

const shortFormGifs = [
  { id: 1, url: "https://res.cloudinary.com/drzbibtmm/raw/upload/v1794075366/portfolio/clideo-crop-original.gif", alt: "Performance Ad" },
  { id: 2, url: "https://i.ibb.co/xKBF7nq4/Generative-AI.gif", alt: "Generative AI" },
  { id: 3, url: "https://res.cloudinary.com/drzbibtmm/raw/upload/v1794075366/portfolio/ugc-serum-original.gif", alt: "UGC Serum Ad" },
  { id: 4, url: "https://i.ibb.co/BH8kBTs4/Ecommerce-Brand.gif", alt: "Ecommerce Brand" },
];

const cases = [
  {
    slug: "one-product-two-reasons",
    preview: "https://media.giphy.com/media/QrcOP9u0fSZLaPGnqb/giphy.gif",
    highlights: ["Two ad angles", "Three-phase retargeting"],
    label: "Sample walkthrough",
    title: "One Product, Two Reasons to Buy",
    intro: "Two ads for the same premium carry-on. Which reason to buy deserves the next round of spend?",
    sections: [
      ["The decision", "I’d test whether shoppers respond more to confidence that everything fits or confidence that the bag is worth keeping for years. I’d keep the product, price, and destination consistent."],
      ["My role", "In this sample I’d write both briefs, produce the variants, launch the Meta test, and read ad performance alongside Shopify orders."],
      ["Two creative briefs", "The weekend packing ad shows a real packing list fitting in the bag. The durability ad shows the parts that wear out first and what makes this bag worth its price. Each asset is built around a different buying reason."],
      ["Three-phase retargeting", "Reconnect with the use case, answer a likely doubt with a relevant comparison, then clarify delivery or returns. I’d adapt the sequence to what shoppers saw and the volume available."],
      ["The next move", "If clicks hold but orders fall, I’d check the product page, offer, and tracking. I’d fund the stronger angle once purchase volume and acquisition cost support the decision."],
    ],
  },
  {
    slug: "when-clicks-hold",
    preview: "https://media.giphy.com/media/j6Yt6eR3LcxWl7p0tb/giphy.gif",
    highlights: ["Meta + Shopify signals", "n8n alert routing"],
    label: "Workflow demo",
    title: "When Clicks Hold but Orders Fall",
    intro: "A Meta and Shopify workflow that helps the team decide where to investigate before it moves budget.",
    sections: [
      ["The decision", "Steady clicks alongside fewer purchases tells me to look beyond the ad. I’d check whether the offer, product page, checkout, or tracking changed in the same window."],
      ["My role", "I built an n8n demo that reads campaign and store signals, attaches the evidence, and assigns the follow-up. This walkthrough uses sample data."],
      ["Example alert", "Clicks are steady and Shopify purchases have fallen. Send the affected ads, landing page, and comparison window to the offer or product page owner. Ask them to check for recent changes and report what they find."],
      ["The next move", "If Meta and Shopify purchases also diverge beyond their usual gap, route a tracking check and hold the budget recommendation. The media buyer reviews any proposed change before it is applied."],
    ],
  },
];

export default function Portfolio() {
  return (
    <section className="py-24 bg-white relative border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-zinc-900 mb-4">Selected D2C Ad Work</h2>
          <p className="text-xl text-zinc-600">
            See the ad formats I can produce from a brief, including performance ads, AI visuals, and UGC edits.
          </p>
        </div>

        {/* Short Form GIFs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {shortFormGifs.map((gif, index) => (
            <motion.div
              key={gif.id}
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ margin: "-100px", amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-[12px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_0_40px_rgba(99,102,241,0.25)] transition-shadow duration-500 bg-zinc-100"
            >
              <img
                src={gif.url}
                alt={gif.alt}
                loading="lazy"
                width={540}
                height={960}
                className="block w-full aspect-[9/16] object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <p className="px-4 py-3 text-sm font-semibold text-zinc-800">{gif.alt}</p>
            </motion.div>
          ))}
        </div>

        <div id="case-studies" aria-label="Case studies" className="mb-10 flex items-start scroll-mt-40 flex-col gap-5 md:flex-row">
          {cases.map(({ slug, label, title, intro, sections, preview, highlights }) => (
            <article key={slug} id={slug} className="w-full min-w-0 flex-1 scroll-mt-40 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50">
              <div className="aspect-video overflow-hidden bg-zinc-100">
                <img src={preview} alt="" loading="lazy" referrerPolicy="no-referrer" className="h-full w-full object-cover object-center" />
              </div>
              <div className="p-6 sm:p-8">
              <p className="text-sm font-semibold text-blue-700">{label}</p>
              <h3 className="mt-2 text-2xl font-bold text-zinc-900">{title}</h3>
              <p className="mt-3 text-zinc-600">{intro}</p>
              <ul aria-label="Case highlights" className="mt-4 flex flex-wrap gap-2">
                {highlights.map(highlight => <li key={highlight} className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-800">{highlight}</li>)}
              </ul>
              <details className="mt-5">
                <summary className="inline-flex cursor-pointer list-none rounded-full bg-zinc-900 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-700 [&::-webkit-details-marker]:hidden">Read Case Study</summary>
                <dl className="mt-4 space-y-4 text-sm leading-relaxed text-zinc-600">
                  {sections.map(([heading, copy]) => (
                    <div key={heading}>
                      <dt className="font-semibold text-zinc-900">{heading}</dt>
                      <dd>{copy}</dd>
                    </div>
                  ))}
                </dl>
              </details>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <a href="https://drive.google.com/drive/folders/1Y_uzf708nWsXduL-aokTh7dhmBSHvQSq?usp=drive_link" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-zinc-700 bg-white hover:bg-zinc-50 border border-zinc-200 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md">
            Explore Ad Creative
          </a>
        </div>
      </div>
    </section>
  );
}
