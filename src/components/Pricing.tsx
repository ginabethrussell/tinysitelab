import React from "react";

const Pricing = React.forwardRef<HTMLElement, React.HTMLProps<HTMLElement>>(
  (_props, ref) => (
    <>
      <div className="h-2 w-full bg-white" />
      <section
        id="pricing"
        ref={ref}
        className="scroll-mt-20 bg-[#F6F9FA] px-4 py-16 text-center"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-3xl font-bold text-[#0C2D48]">
            Plans &amp; Pricing
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-[#334E68]">
            I offer four flexible tiers, from streamlined starter pages to fully
            custom web tools. Most clients choose a premium single-page or
            multi-page professional site that&apos;s tailored to their business.
          </p>

          {/* Pricing grid */}
          <div className="grid gap-8 text-left md:grid-cols-2 justify-items-center">
            {/* Tier 1 – Budget Starter Page */}
            <div className="flex h-full flex-col justify-between rounded bg-[#EAF8FB] p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg max-w-[28rem]">
              <div>
                <h3 className="mb-2 text-xl font-semibold text-[#0C2D48]">
                  💡 Budget Starter Page
                </h3>
                <p className="mb-2 italic text-[#334E68]">
                  Estimated cost: $600–$900
                </p>
                <ul className="mb-4 list-disc space-y-2 pl-5 text-[#334E68]">
                  <li>Simple single-page layout</li>
                  <li>Mobile-responsive design</li>
                  <li>Email &amp; call links (no form)</li>
                  <li>Social or external links</li>
                  <li>Domain &amp; hosting setup</li>
                </ul>
                <p className="text-sm text-[#334E68]">
                  A simple, clean single-page presence for businesses or
                  nonprofits that need an online home without extra features.
                </p>
              </div>

              <div className="mt-6">
                <p className="text-sm font-medium text-[#0C2D48]">
                  Hosting &amp; Maintenance: Starting at $10/month (billed
                  annually).
                </p>

                <div className="mt-4 flex justify-center">
                  <a
                    href="#contact"
                    className="inline-flex justify-center min-w-[11rem] rounded bg-[#0C2D48] px-4 py-2 font-medium text-white transition hover:bg-[#1B4E72]"
                  >
                    Start a Project
                  </a>
                </div>
              </div>
            </div>

            {/* Tier 2 – Single-Page Premium (Most popular) */}
            <div className="relative flex h-full flex-col max-w-[28rem] justify-between rounded bg-[#EAF8FB] p-6 shadow-md ring-2 ring-[#0C2D48]/25 transition hover:-translate-y-1 hover:shadow-xl hover:ring-[#0C2D48]/40">
              <div>
                <div className="mb-2 inline-flex items-center rounded-full bg-[#0C2D48] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                  Most popular
                </div>

                <h3 className="mb-1 text-xl font-semibold text-[#0C2D48]">
                  🌟 Single-Page Premium Site
                </h3>

                <p className="mb-2 italic text-[#334E68]">
                  Estimated cost: $1,200–$1,800
                </p>

                <ul className="mb-4 list-disc space-y-2 pl-5 text-[#334E68]">
                  <li>
                    Custom, conversion-focused long-form page (your primary
                    homepage)
                  </li>
                  <li>Hero, services, about, reviews &amp; contact sections</li>
                  <li>Optimized images &amp; performance</li>
                  <li>SEO setup &amp; metadata for your main page</li>
                  <li>Google Maps/location + clear CTAs</li>
                  <li>Embedded contact form or scheduling link</li>
                  <li className="text-xs">
                    Optional: 1–2 simple extra pages (About/FAQ/etc.) priced
                    separately if needed.
                  </li>
                </ul>

                <p className="text-sm text-[#334E68]">
                  Ideal when you want a polished, conversion-focused homepage
                  that highlights your services, builds trust, and guides
                  visitors to take action.
                </p>
              </div>

              <div className="mt-6">
                <p className="text-sm font-medium text-[#0C2D48]">
                  Hosting &amp; Maintenance: $15–$25/month (billed annually).
                </p>

                <div className="mt-4 flex justify-center">
                  <a
                    href="#contact"
                    className="inline-flex justify-center min-w-[11rem] rounded bg-[#0C2D48] px-4 py-2 font-medium text-white transition hover:bg-[#1B4E72]"
                  >
                    Create a Plan
                  </a>
                </div>
              </div>
            </div>

            {/* Tier 3 – Multi-Page Professional */}
            <div className="flex h-full flex-col max-w-[28rem] justify-between rounded bg-[#EAF8FB] p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg">
              <div>
                <h3 className="mb-2 text-xl font-semibold text-[#0C2D48]">
                  ✨ Multi-Page Professional Site
                </h3>

                <p className="mb-2 italic text-[#334E68]">
                  Estimated cost: $2,000–$3,500+
                </p>

                <ul className="mb-4 list-disc space-y-2 pl-5 text-[#334E68]">
                  <li>Includes everything in the Premium tier</li>
                  <li>
                    Designed for sites with multiple core pages (typically 3–7)
                  </li>
                  <li>
                    Additional pages such as detailed Services, individual
                    service pages, FAQ, Reviews, New Patients, etc.
                  </li>
                  <li>
                    Structured navigation, clean URL architecture &amp;
                    cross-linking
                  </li>
                  <li>Expanded on-page SEO across multiple URLs</li>
                  <li>Optional basic CMS for simple content edits</li>
                </ul>

                <p className="text-sm text-[#334E68]">
                  A great fit for organizations that need multiple pages,
                  structured navigation, and deeper content to support search
                  visibility and user exploration.
                </p>
              </div>

              <div className="mt-6">
                <p className="text-sm font-medium text-[#0C2D48]">
                  Hosting &amp; Maintenance: $25–$35/month (billed quarterly).
                </p>

                <div className="mt-4 flex justify-center">
                  <a
                    href="#contact"
                    className="inline-flex justify-center min-w-[11rem] rounded bg-[#0C2D48] px-4 py-2 font-medium text-white transition hover:bg-[#1B4E72]"
                  >
                    Request a Quote
                  </a>
                </div>
              </div>
            </div>

            {/* Tier 4 – Custom Web App */}
            <div className="flex h-full flex-col max-w-[28rem] justify-between rounded bg-[#EAF8FB] p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg">
              <div>
                <h3 className="mb-2 text-xl font-semibold text-[#0C2D48]">
                  🚀 Custom Web Tool or App
                </h3>

                <p className="mb-2 italic text-[#334E68]">
                  Estimated cost: $4,500–$10,000+
                </p>

                <ul className="mb-4 list-disc space-y-2 pl-5 text-[#334E68]">
                  <li>Everything in Professional tier</li>
                  <li>Custom backend &amp; APIs</li>
                  <li>User accounts &amp; authentication</li>
                  <li>Interactive tools or dashboards</li>
                  <li>Workflow automation & integrations</li>
                </ul>

                <p className="text-sm text-[#334E68]">
                  Built for teams who need custom functionality—such as user
                  accounts, dashboards, or workflow automation—beyond a standard
                  marketing site.
                </p>
              </div>

              <div className="mt-6">
                <p className="text-sm font-medium text-[#0C2D48]">
                  Hosting &amp; Maintenance: $35–$50/month (billed quarterly).
                </p>

                <div className="mt-4 flex justify-center">
                  <a
                    href="#contact"
                    className="inline-flex justify-center min-w-[11rem] rounded bg-[#0C2D48] px-4 py-2 font-medium text-white transition hover:bg-[#1B4E72]"
                  >
                    Schedule a Call
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Hosting and maintenance adjustments note */}
          <p className="mt-8 mb-4 text-sm text-[#334E68]">
            🛠️ Hosting &amp; maintenance fees may adjust annually if third-party
            costs change. You&apos;ll always be notified before any updates.
          </p>
          {/* Tax note */}
          <p className="mb-8 text-sm text-[#334E68]">
            💵 <strong>Per Kentucky law</strong>, a 6% sales tax will be added
            to all web development and hosting services.
          </p>

          {/* Comparison table */}
          <div className="mt-6 overflow-x-auto hidden md:block">
            <div className="inline-block min-w-full rounded-lg bg-white p-4 shadow-sm">
              <h3 className="mb-3 text-center text-lg font-semibold text-[#0C2D48]">
                Tier Comparison
              </h3>
              <table className="min-w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="py-2 pr-4 font-semibold text-[#0C2D48]">
                      Feature
                    </th>
                    <th className="py-2 px-4 font-semibold text-[#0C2D48]">
                      Budget Starter
                    </th>
                    <th className="py-2 px-4 font-semibold text-[#0C2D48]">
                      Single-Page Premium
                    </th>
                    <th className="py-2 px-4 font-semibold text-[#0C2D48]">
                      Multi-Page Professional
                    </th>
                    <th className="py-2 px-4 font-semibold text-[#0C2D48]">
                      Custom App
                    </th>
                  </tr>
                </thead>
                <tbody className="align-top">
                  <tr className="border-b border-slate-100">
                    <td className="py-2 pr-4 text-[#334E68]">Typical budget</td>
                    <td className="py-2 px-4 text-[#334E68]">$600–$900</td>
                    <td className="py-2 px-4 text-[#334E68]">$1,200–$1,800</td>
                    <td className="py-2 px-4 text-[#334E68]">$2,000–$3,500+</td>
                    <td className="py-2 px-4 text-[#334E68]">
                      $4,500–$10,000+
                    </td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-2 pr-4 text-[#334E68]">Pages</td>
                    <td className="py-2 px-4 text-[#334E68]">Single-page</td>
                    <td className="py-2 px-4 text-[#334E68]">
                      1 long-form page (optional 1–2 simple extras)
                    </td>
                    <td className="py-2 px-4 text-[#334E68]">
                      Multi-page site (typically 3–7 pages)
                    </td>
                    <td className="py-2 px-4 text-[#334E68]">
                      Multi-page + app flows
                    </td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-2 pr-4 text-[#334E68]">
                      Custom design &amp; layout
                    </td>
                    <td className="py-2 px-4 text-[#334E68]">Limited</td>
                    <td className="py-2 px-4 text-[#334E68]">✓</td>
                    <td className="py-2 px-4 text-[#334E68]">✓</td>
                    <td className="py-2 px-4 text-[#334E68]">✓</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-2 pr-4 text-[#334E68]">
                      Embedded contact form
                    </td>
                    <td className="py-2 px-4 text-[#334E68]">
                      Email / call links
                    </td>
                    <td className="py-2 px-4 text-[#334E68]">✓</td>
                    <td className="py-2 px-4 text-[#334E68]">✓</td>
                    <td className="py-2 px-4 text-[#334E68]">✓</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-2 pr-4 text-[#334E68]">
                      On-page SEO setup
                    </td>
                    <td className="py-2 px-4 text-[#334E68]">Basic</td>
                    <td className="py-2 px-4 text-[#334E68]">Enhanced</td>
                    <td className="py-2 px-4 text-[#334E68]">
                      Expanded (multiple pages)
                    </td>
                    <td className="py-2 px-4 text-[#334E68]">
                      Expanded + app structure
                    </td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-2 pr-4 text-[#334E68]">
                      CMS / content editing
                    </td>
                    <td className="py-2 px-4 text-[#334E68]">—</td>
                    <td className="py-2 px-4 text-[#334E68]">
                      Optional add-on
                    </td>
                    <td className="py-2 px-4 text-[#334E68]">
                      Optional add-on
                    </td>
                    <td className="py-2 px-4 text-[#334E68]">
                      Optional / custom
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 text-[#334E68]">
                      Custom backend / app logic
                    </td>
                    <td className="py-2 px-4 text-[#334E68]">—</td>
                    <td className="py-2 px-4 text-[#334E68]">—</td>
                    <td className="py-2 px-4 text-[#334E68]">
                      Limited (if needed)
                    </td>
                    <td className="py-2 px-4 text-[#334E68]">✓</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="mb-4 text-lg text-[#334E68]">
              Not sure which tier fits your project? I&apos;m happy to talk
              through options and recommend a path that matches your goals and
              budget.
            </p>
            <a
              href="#contact"
              className="inline-block rounded bg-[#FF5722] px-6 py-2 font-semibold text-white transition hover:bg-[#e64a19]"
            >
              Get a Custom Quote →
            </a>
          </div>
        </div>
      </section>
    </>
  )
);

Pricing.displayName = "Pricing";
export default Pricing;
