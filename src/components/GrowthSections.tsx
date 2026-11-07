import { useEffect } from "react";
import type { ReactNode } from "react";
import { CaseStudyPage, caseStudyPages } from "./CaseStudies";

const linkedIn = "https://www.linkedin.com/in/tibinjacob/";
const briefs = [
  {
    category: "Paid Social · July 2025",
    title: "Meta brings WhatsApp marketing into Ads Manager",
    change: "Meta announced centralized setup for WhatsApp marketing alongside Facebook and Instagram.",
    audience: "Brands with an opted-in WhatsApp subscriber list and a team that can respond to conversations.",
    action: "Define a qualified conversation and track the purchase path before comparing its cost with store acquisition.",
    source: "https://about.fb.com/news/2025/07/centralized-campaigns-ai-support-businesses-whatsapp/",
  },
  {
    category: "Meta Ads · August 2022",
    title: "What the Advantage+ launch changed about testing",
    change: "Meta introduced Advantage+ shopping campaigns with more automation in campaign setup and delivery.",
    audience: "Ecommerce teams using automated campaign delivery while comparing creative concepts.",
    action: "Give each ad a distinct buying reason and decide how you’ll judge it using purchases and acquisition cost before launch.",
    source: "https://about.fb.com/news/2022/08/introducing-new-automation-tools-to-increase-sales-and-drive-growth/",
  },
];

const linkStyle = "inline-block font-semibold text-blue-700 underline underline-offset-4";
const cardStyle = "rounded-2xl border border-zinc-200 bg-zinc-50 p-6 sm:p-8";

function Page({ label, title, intro, children }: { label: string; title: string; intro: string; children: ReactNode }) {
  return (
    <section className="mx-auto min-h-[70vh] max-w-6xl px-6 pb-20 pt-40 sm:pt-44">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-blue-700">{label}</p>
      <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">{title}</h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-600">{intro}</p>
      <div className="mt-10">{children}</div>
    </section>
  );
}

export function InnerPage({ pathname }: { pathname: string }) {
  const legacyCasePage = pathname === "/case-studies/one-product-two-reasons" || pathname === "/case-studies/when-clicks-hold";
  useEffect(() => {
    if (legacyCasePage) window.location.replace("/case-studies/");
  }, [legacyCasePage]);

  if (legacyCasePage) return null;
  if (caseStudyPages.some(page => page.route === pathname)) return <CaseStudyPage pathname={pathname} />;

  if (pathname === "/news") {
    return <Page label="News" title="D2C Growth Briefs" intro="Platform changes that matter to ecommerce teams and what I’d check in the account.">
      <div className="grid gap-5 md:grid-cols-2">
        {briefs.map(brief => <article key={brief.source} className={cardStyle}>
          <p className="text-sm font-semibold text-blue-700">{brief.category}</p>
          <h2 className="my-3 text-2xl font-bold">{brief.title}</h2>
          <dl className="mb-4 space-y-2 text-zinc-600">
            {[["What changed", brief.change], ["Who it affects", brief.audience], ["What I’d check", brief.action]].map(([label, copy]) =>
              <div key={label}><dt className="font-semibold text-zinc-900">{label}</dt><dd>{copy}</dd></div>
            )}
          </dl>
          <a className={linkStyle} href={brief.source}>Read Meta’s announcement</a>
        </article>)}
      </div>
    </Page>;
  }

  if (pathname === "/feed") {
    return <Page label="LinkedIn" title="My Feed" intro="Short posts on ad angles, three-phase retargeting, and the decisions I make after a campaign goes live.">
      <div className={cardStyle}>
        <p className="mb-4 text-zinc-600">Read my latest posts on LinkedIn. Selected posts will appear here as they’re added.</p>
        <div className="flex flex-wrap gap-5">
          <a className={linkStyle} href={`${linkedIn}recent-activity/all/`}>View my LinkedIn posts</a>
          <a className={linkStyle} href="/feed.xml">Subscribe via RSS</a>
        </div>
      </div>
    </Page>;
  }

  return <Page label="404" title="Page not found" intro="Return to the portfolio to find my case studies, briefs, and contact details.">
    <a className={linkStyle} href="/">Back to Home</a>
  </Page>;
}
