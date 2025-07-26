import React from "react";

const Pricing = React.forwardRef<HTMLElement, React.HTMLProps<HTMLElement>>(
  (_props, ref) => (
    <>
      <div className="h-2 w-full bg-white" />
      <section
        id="pricing"
        ref={ref}
        className="scroll-mt-20 py-16 px-4 bg-[#F6F9FA] text-center"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-[#0C2D48]">
            Plans & Pricing
          </h2>
          <p className="text-[#334E68] max-w-2xl mx-auto mb-12">
            I offer three flexible service tiers. Whether you&apos;re just
            starting out or ready to launch something custom, there&apos;s a
            Tiny option for you.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {/* Option 1 */}
            <div className="p-6 bg-[#EAF8FB] rounded shadow-md h-full flex flex-col justify-between">
              <h3 className="text-xl font-semibold mb-2 text-[#0C2D48]">
                🌟 One-Page Starter Site
              </h3>
              <p className="mb-2 text-[#334E68] italic">
                Estimated cost: $600–$900
              </p>
              <ul className="list-disc pl-5 text-[#334E68] space-y-2 mb-4">
                <li>Clean, single-page layout</li>
                <li>Mobile-responsive design</li>
                <li>Contact form (Formspree or similar)</li>
                <li>Social/email links</li>
                <li>Domain & hosting setup</li>
              </ul>
              <p className="text-sm text-[#334E68]">
                💡 Great for small businesses, nonprofits, or solo founders who
                want a beautiful web presence with minimal maintenance.
              </p>
              <p className="mt-4 text-sm text-[#0C2D48] font-medium">
                Hosting & Maintenance: Starting at $10/month, billed annually.
              </p>
              <div className="mt-6 flex justify-center">
                <a
                  href="#contact"
                  className="inline-block mt-4 text-white bg-[#0C2D48] hover:bg-[#1B4E72] font-medium py-2 px-4 rounded transition"
                >
                  Start a Project
                </a>
              </div>
            </div>

            {/* Option 2 */}
            <div className="p-6 bg-[#EAF8FB] rounded shadow-md h-full flex flex-col justify-between">
              <h3 className="text-xl font-semibold mb-2 text-[#0C2D48]">
                ✨ Multi-Page Site with Light Backend
              </h3>
              <p className="mb-2 text-[#334E68] italic">
                Estimated cost: $1,200–$1,800
              </p>
              <ul className="list-disc pl-5 text-[#334E68] space-y-2 mb-4">
                <li>All Option 1 features</li>
                <li>Additional pages (About, Blog, etc.)</li>
                <li>Basic backend (Django/Node.js)</li>
                <li>Optional CMS</li>
                <li>SEO & analytics setup</li>
              </ul>
              <p className="text-sm text-[#334E68]">
                💡 Best for teams or projects that want more flexibility and
                control over content.
              </p>
              <p className="mt-4 text-sm text-[#0C2D48] font-medium">
                Hosting & Maintenance: $20–$25/month depending on complexity.
              </p>
              <div className="mt-6 flex justify-center">
                <a
                  href="#contact"
                  className="inline-block mt-4 text-white bg-[#0C2D48] hover:bg-[#1B4E72] font-medium py-2 px-4 rounded transition"
                >
                  Request a Quote
                </a>
              </div>
            </div>

            {/* Option 3 */}
            <div className="p-6 bg-[#EAF8FB] rounded shadow-md h-full flex flex-col justify-between">
              <h3 className="text-xl font-semibold mb-2 text-[#0C2D48]">
                🚀 Custom Web Tool or App
              </h3>
              <p className="mb-2 text-[#334E68] italic">
                Estimated cost: $2,500–$4,900
              </p>
              <ul className="list-disc pl-5 text-[#334E68] space-y-2 mb-4">
                <li>All Option 2 features</li>
                <li>Custom backend & APIs</li>
                <li>User accounts & authentication</li>
                <li>Interactive tools/forms</li>
                <li>Dashboards or reporting views</li>
              </ul>
              <p className="text-sm text-[#334E68]">
                💡 Ideal for founders or orgs ready to digitize or automate a
                specific workflow.
              </p>
              <p className="mt-4 text-sm text-[#0C2D48] font-medium">
                Hosting & Maintenance: $25–$40/month based on features.
              </p>
              <div className="mt-6 flex justify-center">
                <a
                  href="#contact"
                  className="inline-block mt-4 text-white bg-[#0C2D48] hover:bg-[#1B4E72] font-medium py-2 px-4 rounded transition"
                >
                  Schedule a Call
                </a>
              </div>
            </div>
          </div>
          <div>
            <p className="text-sm text-[#334E68] my-8">
              💵 <strong>Per Kentucky law</strong>, a 6% sales tax will be added
              to all web development and hosting services.
            </p>
          </div>
          <div className="mt-12 text-center">
            <p className="text-[#334E68] text-lg mb-4">
              Need something a little different? I&apos;m happy to build a
              custom plan around your project.
            </p>
            <a
              href="#contact"
              className="inline-block bg-[#FF5722] text-white rounded hover:bg-[#e64a19] font-semibold py-2 px-6 transition"
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
