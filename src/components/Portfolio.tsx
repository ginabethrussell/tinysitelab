import React from 'react';
import Image from 'next/image';

const Portfolio = React.forwardRef<HTMLElement, React.HTMLProps<HTMLElement>>((_props, ref) => (
  <section id="portfolio" ref={ref} className="scroll-mt-20 py-16 px-4 bg-white text-center">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-[#0C2D48] mb-10">
        Sample Projects <span role="img" aria-label="folder">📁</span>
      </h2>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-left">
        {/* Minister Connect */}
        <div className="border border-orange-100 rounded-xl p-6 shadow-sm hover:shadow-md transition bg-[#EAF8FB]">
          <h3 className="font-semibold text-lg mb-2 text-[#0C2D48] flex items-center gap-2">
            <span className="text-orange-500">🧑‍💼</span> Minister Connect
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            A private platform connecting pastors and churches for new ministry calls.
          </p>
          <div className="w-full h-48 overflow-hidden rounded-md">
            <Image
              src="/ministerconnect.png"
              alt="Minister Connect thumbnail"
              width={600}
              height={400}
              className="w-full h-full object-cover object-top transform transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
        {/* WanderSync */}
        <div className="border border-orange-100 rounded-xl p-6 shadow-sm hover:shadow-md transition bg-[#EAF8FB]">
          <h3 className="font-semibold text-lg mb-2 text-[#0C2D48] flex items-center gap-2">
            <span className="text-orange-500">🗺️</span> WanderSync
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            A playful itinerary-sharing tool that unlocks trip ideas when you share your own.
          </p>
          <div className="w-full h-48 overflow-hidden rounded-md shadow-md">
            <Image
              src="/wandersync.png"
              alt="WanderSync thumbnail"
              width={600}
              height={400}
              className="w-full h-full object-cover object-top transform transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
        {/* Moments Captured */}
        <div className="border border-orange-100 rounded-xl p-6 shadow-sm hover:shadow-md transition bg-[#EAF8FB]">
          <h3 className="font-semibold text-lg mb-2 text-[#0C2D48] flex items-center gap-2">
            <span className="text-orange-500">📸</span> Photography Template
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            A one-page marketing site designed to showcase a photographer&apos;s work with speed, elegance, and mobile-friendliness.
          </p>
          <div className="w-full h-48 overflow-hidden rounded-md shadow-md">
            <Image
              src="/photographer_template.png"
              alt="Moments Captured thumbnail"
              width={600}
              height={400}
              className="w-full h-full object-cover object-top transform transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
      <p className="text-center text-gray-500 mt-8 text-sm">More coming soon…</p>
    </div>
  </section>
));

Portfolio.displayName = 'Portfolio';
export default Portfolio;