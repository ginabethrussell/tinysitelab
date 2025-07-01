import React from 'react';

const Services = React.forwardRef<HTMLElement>((props, ref) => (
  <>
    <section id="services" ref={ref} className="scroll-mt-20 py-16 px-4 bg-[#EAF8FB] text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-[#0C2D48]">Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded shadow transform transition duration-500 ease-in-out hover:-translate-y-2 hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-2 text-[#0C2D48]">Marketing Sites</h3>
            <p className="text-[#334E68]">Simple, fast-loading sites for photographers, artists, and small businesses.</p>
          </div>
          <div className="p-6 bg-white rounded shadow transform transition duration-500 ease-in-out hover:-translate-y-2 hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-2 text-[#0C2D48]">Event & Cause Pages</h3>
            <p className="text-[#334E68]">Custom pages for signups, fundraisers, retreats, or announcements.</p>
          </div>
          <div className="p-6 bg-white rounded shadow transform transition duration-500 ease-in-out hover:-translate-y-2 hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-2 text-[#0C2D48]">Mini Web Tools</h3>
            <p className="text-[#334E68]">Matching tools, directory systems, and idea-sharing platforms tailored to your needs.</p>
          </div>
        </div>
      </div>
    </section>
    <section id="approach" className="py-16 px-4 bg-[#EAF8FB]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* How I Work Card */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-[#0C2D48]">How I Work</h2>
          <div className="space-y-4 text-[#334E68]">
            <div>
              <h3 className="font-semibold">1. Start with You 🤝</h3>
              <p>We talk about your goals, your vibe, and what success looks like. You don&apos;t need a tech background — just a mission.</p>
            </div>
            <div>
              <h3 className="font-semibold">2. Build the Essentials 🔧</h3>
              <p>I design and develop a lightweight site or tool that does exactly what you need — no fluff, no bloat.</p>
            </div>
            <div>
              <h3 className="font-semibold">3. Launch & Learn 🚀</h3>
              <p>You get a fast, secure, and easy-to-manage product. And I make sure you&apos;re set up to grow with it.</p>
            </div>
          </div>
        </div>
        {/* Why Tiny Card */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-[#0C2D48]">Why Tiny? </h2>
          <p className="text-[#334E68] leading-relaxed">
            Tiny means focused. It means fast. It means built exactly for what you need — and nothing you don&apos;t. Whether you&apos;re just starting out or streamlining something old, Tiny Site Lab helps you skip the complexity and launch with confidence.
          </p>
        </div>
      </div>
    </section>
  </>
));

Services.displayName = 'Services';
export default Services;