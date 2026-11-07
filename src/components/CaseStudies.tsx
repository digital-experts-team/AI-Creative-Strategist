import * as React from "react";

export const caseStudies = [
  {
    slug: "cloth-and-co",
    brand: "Cloth & Co.",
    market: "Australian womenswear",
    engagement: "Through Mavlers",
    title: "Scaling paid media while keeping the brand’s premium feel",
    summary: "A Meta and Google engagement that paired inventory fixes with creative that fit the brand.",
    challenge: "Cloth & Co. wanted $5,000 in weekly online sales at 3× ROAS. Meta performance was inconsistent, the product feed included unavailable items, and some ads felt out of step with the brand’s premium positioning.",
    contribution: "I worked directly with the brand team on D2C ad creative and Meta campaign execution. I also worked on automated budget pacing and reporting so the team could compare actual spend with the plan during campaign reviews.",
    approach: "Mavlers rebuilt the product feed and excluded unavailable items. The team reorganized Meta around static, video, and dynamic catalog ads. On Google, it rebuilt Performance Max around what shoppers were looking for.",
    metrics: [
      { value: "+140%", label: "Reported revenue growth" },
      { value: "3.93×", label: "June ROAS" },
    ],
    result: "Monthly revenue grew from $9,727.28 in April to $23,379.76 in June 2025. June consistently cleared the $5,000 weekly sales target. The published table shows $14,694.78 in total campaign spend across the three months.",
    scope: "Mavlers published these campaign totals for its Meta and Google engagement, April–June 2025.",
    monthly: [
      ["April 2025", "$4,251.64", "$9,727.28", "2.29×"],
      ["May 2025", "$4,491.58", "$12,199.59", "2.72×"],
      ["June 2025", "$5,951.56", "$23,379.76", "3.93×"],
    ],
    sources: [{ title: "Mavlers · Cloth & Co. case study", url: "https://www.mavlers.com/case-studies/cloth-and-company/" }],
  },
  {
    slug: "zoe-kratzmann",
    brand: "Zoe Kratzmann",
    market: "Australian fashion and footwear",
    engagement: "Through Mavlers",
    title: "Giving new shoppers a reason to join before they buy",
    summary: "A first-order offer, creative tests, and early access gave new shoppers a path into the Zoe Club.",
    challenge: "Zoe Kratzmann had a loyal audience and reported ROAS of around 4.5×. The brand wanted to grow online purchases and give new shoppers a reason to engage before they were ready to order.",
    contribution: "I worked directly with the brand team on D2C creative and Meta media buying. I brought budget pacing and campaign performance into the same review so the team could discuss creative and spend decisions together.",
    approach: "Mavlers offered new Zoe Club members 10% off their first order. The team tested lifestyle video, product imagery, and collection carousels, then used 24-hour early access to give members a reason to return for launches and sales.",
    metrics: [
      { value: "4.5× → 6.9×", label: "Reported ROAS" },
      { value: "+115.43%", label: "Website purchases over six months, per the PPC guide" },
    ],
    result: "Mavlers reported the ROAS change in its case study. Its PPC guide reports the six-month increase in website purchases.",
    scope: "The purchase figure comes from the PPC guide. It agrees with the rounded headline in the case study, whose body gives a conflicting figure. The public sources do not establish whether the six-month window coincided with my work.",
    sources: [
      { title: "Mavlers · Zoe Kratzmann case study", url: "https://www.mavlers.agency/case-studies/zoe-kratzmann-purchase-growth" },
      { title: "Mavlers · PPC capability guide (PDF)", url: "https://www.mavlers.com/wp-content/uploads/PPC-service-capability-guide.pdf" },
    ],
  },
  {
    slug: "edica-naturals",
    brand: "Edica Naturals",
    market: "Canadian women’s wellness supplements",
    engagement: "Paid social contribution",
    title: "Building trust from the supplement ad to checkout",
    summary: "Paid social work in the context of a wider ecommerce engagement spanning product photography, the store, and search.",
    challenge: "Edica Naturals needed to build trust with online shoppers and turn that interest into sales. The ad, product photography, and product page each had to help customers understand what they were buying.",
    contribution: "I worked directly with the team on D2C creative and Meta media buying. My scope included budget pacing and reporting so the team could review what was running, how spend tracked against plan, and where to focus the next round of paid social work.",
    approach: "SocialSquared’s published engagement covered product photography, a redesigned online store, Meta and Google Ads, product page and checkout improvements, and SEO.",
    metrics: [
      { value: "3.8×", label: "Average paid ROAS across Meta and Google" },
      { value: "+210%", label: "Reported revenue growth" },
    ],
    result: "SocialSquared reported these figures across its broader 2021–2024 engagement.",
    scope: "The figures reflect multiple workstreams. SocialSquared did not publish a Meta-only ROAS, individual budget ownership, or dates for my contribution.",
    sources: [{ title: "SocialSquared · Edica Naturals case study", url: "https://www.socialsquared.ca/case-studies/edica-naturals" }],
  },
  {
    "slug": "organika-health",
    "brand": "Organika Health",
    "market": "Canadian DTC supplements",
    "engagement": "Independent portfolio project",
    "title": "A three-phase Meta creative and retargeting strategy",
    "summary": "A review of 12 active ads, three featured creatives, and a 30-day plan for testing which messages move shoppers toward purchase.",
    "challenge": "I reviewed a sample of 12 active Organika Health ads and organized the strategy around three buying questions: Does it fit my routine? Why this formula? Why buy now?",
    "contribution": "I audited the creative and landing pages, mapped the ads to buying decisions, and designed audience rules, creative tests, and a spend plan. One listing described Magnesium Bisglycinate but pointed to the Mind Calm product page. I flagged that mismatch for verification before sending more traffic.",
    "approach": "I designed a Sales campaign optimized for website purchases. Broad Canadian prospecting introduced the routine. A 14-day consideration audience received formula-specific proof, and a seven-day cart and checkout audience received the final follow-up. I specified exclusions for recent purchasers.",
    "ads": [
      {
        "phase": "01 · Discovery",
        "title": "Mind Calm routine video",
        "date": "Sep 25, 2026",
        "url": "https://www.facebook.com/ads/library/?id=1428872732503275",
        "copy": "I paired the routine-led video with a product-first concept to test which opening brought in shoppers who went on to buy."
      },
      {
        "phase": "02 · Consideration",
        "title": "Magnesium formula ad",
        "date": "Oct 16, 2026",
        "url": "https://www.facebook.com/ads/library/?id=1354837306596262",
        "copy": "I designed a comparison between product proof on its own and the same message with a discount. Both proposed variants pointed to the product they described."
      },
      {
        "phase": "03 · Conversion",
        "title": "Seasonal magnesium offer",
        "date": "Oct 16, 2026",
        "url": "https://www.facebook.com/ads/library/?id=2288664261979793",
        "copy": "I designed a cart and checkout follow-up comparing a 20% offer with a full-price reminder. Both versions sent shoppers back to the product they considered."
      }
    ],
    "metrics": [
      {
        "value": "CA$15,000",
        "label": "Planned media budget over 30 days"
      },
      {
        "value": "12",
        "label": "Active ads in the review sample"
      }
    ],
    "result": "I allocated CA$9,000 to prospecting, CA$3,500 to consideration, and CA$2,500 to cart and checkout follow-up. I set purchase CPA and margin after discounts as the criteria for moving budget, with outbound CTR as a diagnostic for the hook. I also designed a holdout to measure whether the offer added orders.",
    "scope": "This is the media plan I designed for the independent project.",
    "reporting": "I designed a Meta and Shopify reporting workflow that flags affected ads and the reporting window when spend runs ahead of plan and CPA rises. When clicks hold but store orders fall, it routes the issue to the person who owns the product page or checkout. Proposed budget shifts go to the media buyer for review.",
    "sources": [
      {
        "title": "Mind Calm routine video",
        "url": "https://www.facebook.com/ads/library/?id=1428872732503275"
      },
      {
        "title": "Magnesium formula ad",
        "url": "https://www.facebook.com/ads/library/?id=1354837306596262"
      },
      {
        "title": "Seasonal magnesium offer",
        "url": "https://www.facebook.com/ads/library/?id=2288664261979793"
      }
    ]
  },
];

const intro = "I worked directly with brand teams on D2C ad creative, Meta media buying, budget pacing, and reporting. These pages cover my contributions to brand accounts and independent work on creative strategy and media buying.";
export const caseStudyPages = [
  { route: "/case-studies", title: "D2C Case Studies", description: intro },
  ...caseStudies.map(study => ({
    route: "/case-studies/" + study.slug,
    title: study.brand + " Case Study",
    description: study.summary,
  })),
];

const link = "font-semibold text-blue-700 underline underline-offset-4";

export function CaseStudyPage({ pathname }: { pathname: string }) {
  const study = caseStudies.find(item => pathname === "/case-studies/" + item.slug);
  return (
    <section className="mx-auto min-h-[70vh] max-w-6xl px-6 pb-20 pt-32 sm:pt-40">
      {study ? (
        <article className="mx-auto max-w-3xl">
          <a className={link} href="/case-studies/">Back to Case Studies</a>
          <p className="mt-8 text-sm font-semibold text-blue-700">{study.market} · {study.engagement}</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">{study.brand}</h1>
          <p className="mt-3 text-xl text-zinc-700 sm:text-2xl">{study.title}</p>
          <nav aria-label="On this page" className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {[["challenge", "Challenge"], ["contribution", "My contribution"], ["approach", study.ads ? "Campaign setup" : "Team approach"], ...(study.ads ? [["creatives", "Featured ads"]] : []), ["results", study.ads ? "Media plan" : "Published results"], ...(study.reporting ? [["reporting", "Reporting"]] : []), ["sources", "Sources"]].map(([id, label]) =>
              <a key={id} className={link} href={"#" + id}>{label}</a>
            )}
          </nav>
          {[
            ["challenge", "The challenge", study.challenge],
            ["contribution", "My contribution", study.contribution],
            ["approach", study.ads ? "How I structured the campaign" : "What the team changed", study.approach],
          ].map(([id, heading, copy]) => (
            <section key={id} id={id} className="mt-9 scroll-mt-28 border-t border-zinc-200 pt-6">
              <h2 className="text-2xl font-bold">{heading}</h2>
              <p className="mt-3 text-lg leading-relaxed text-zinc-700">{copy}</p>
            </section>
          ))}
          {study.ads && (
            <section id="creatives" className="mt-9 scroll-mt-28 border-t border-zinc-200 pt-6">
              <h2 className="text-2xl font-bold">Three ads from the review</h2>
              <ol className="mt-4 space-y-4">
                {study.ads.map(ad => (
                  <li key={ad.url} className="rounded-xl border border-zinc-200 p-5">
                    <p className="text-sm font-semibold text-blue-700">{ad.phase} · {ad.date}</p>
                    <h3 className="mt-2 text-lg font-bold"><a className={link} href={ad.url}>{ad.title}</a></h3>
                    <p className="mt-2 leading-relaxed text-zinc-700">{ad.copy}</p>
                  </li>
                ))}
              </ol>
            </section>
          )}
          <section id="results" className="mt-9 scroll-mt-28 rounded-2xl bg-blue-50 p-5 sm:p-8">
            <h2 className="text-2xl font-bold">{study.ads ? "Media buying and budget pacing" : "Published team results"}</h2>
            <p className="mt-3 text-zinc-700">{study.scope}</p>
            <dl className="my-5 grid gap-4 sm:grid-cols-2">
              {study.metrics.map(metric => (
                <div key={metric.label} className="flex flex-col-reverse rounded-xl bg-white p-4">
                  <dt className="text-sm text-zinc-600">{metric.label}</dt>
                  <dd className="text-3xl font-bold text-blue-700">{metric.value}</dd>
                </div>
              ))}
            </dl>
            <p className="leading-relaxed text-zinc-700">{study.result}</p>
            {study.monthly && (
              <div className="mt-5 overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <caption className="pb-2 text-left font-semibold">Published monthly campaign figures</caption>
                  <thead><tr>{["Month", "Spend", "Revenue", "ROAS"].map(label => <th key={label} scope="col" className="whitespace-nowrap px-2 py-2">{label}</th>)}</tr></thead>
                  <tbody>{study.monthly.map(([month, ...values]) => (
                    <tr key={month} className="border-t border-blue-100">
                      <th scope="row" className="whitespace-nowrap px-2 py-2 font-medium">{month}</th>
                      {values.map(value => <td key={value} className="whitespace-nowrap px-2 py-2">{value}</td>)}
                    </tr>
                  ))}</tbody>
                </table>
              </div>
            )}
          </section>
          {study.reporting && (
            <section id="reporting" className="mt-9 scroll-mt-28 border-t border-zinc-200 pt-6">
              <h2 className="text-2xl font-bold">Reporting and automation</h2>
              <p className="mt-3 text-lg leading-relaxed text-zinc-700">{study.reporting}</p>
            </section>
          )}
          <section id="sources" className="mt-9 scroll-mt-28">
            <h2 className="text-2xl font-bold">Sources</h2>
            <ul className="mt-3 space-y-2">{study.sources.map(source => <li key={source.url}><a className={link} href={source.url}>{source.title}</a></li>)}</ul>
          </section>
        </article>
      ) : (
        <>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">D2C Case Studies</h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-700">{intro}</p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {caseStudies.map(item => (
              <article key={item.slug} className="flex flex-col rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
                <p className="text-sm text-zinc-600">{item.market}</p>
                <h2 className="mt-2 text-2xl font-bold">{item.brand}</h2>
                <p className="mt-3 text-zinc-700">{item.summary}</p>
                <p className="mt-5 text-sm font-semibold text-zinc-600">{item.ads ? "Independent strategy project" : "Published team result"}</p>
                <p className="mt-1 font-bold text-blue-700">{item.metrics[0].value} · {item.metrics[0].label}</p>
                <div className="mt-auto pt-5"><a className={link} href={"/case-studies/" + item.slug + "/"} aria-label={"Read the " + item.brand + " case study"}>Read case study</a></div>
              </article>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
