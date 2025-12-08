import React from "react";
import Image from "next/image";

const Portfolio = React.forwardRef<HTMLElement, React.HTMLProps<HTMLElement>>(
  (_props, ref) => (
    <section
      id="portfolio"
      ref={ref}
      className="scroll-mt-20 py-16 px-4 bg-white text-center"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#0C2D48] mb-10">
          Selected Client Work{" "}
          <span role="img" aria-label="folder">
            📁
          </span>
        </h2>
        <p className="text-lg text-[#4A5568] mb-12 text-center">
          A few recent projects that reflect the type of simple, purposeful web
          tools I love creating.
        </p>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-left">
          <div className="h-full">
            <div className="border border-orange-100 rounded-xl p-6 shadow-sm hover:shadow-md transition bg-[#EAF8FB]">
              {/* Title */}
              <h3 className="font-semibold text-lg mb-2 text-[#0C2D48] flex items-center gap-2">
                <span className="text-orange-500">✨</span>
                Coach Stephanie
              </h3>

              {/* Mini Case Study */}
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Stephanie needed an upgraded, more polished online presence that
                matched the look and feel of the FASTer Way corporate brand.
              </p>

              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                I created a seamless, shareable landing page that explains her
                coaching program, organizes her favorite resources, and
                highlights her recommended shopping links — all in a clean,
                mobile-friendly design.
              </p>

              {/* Thumbnail */}
              <div className="w-full overflow-hidden rounded-md shadow-md mb-4">
                <Image
                  src="https://www.coachstephaniebuchanan.com/og-image.jpg"
                  alt="Coach Stephanie website preview"
                  width={1200}
                  height={630}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Link row – pushed to bottom, aligned right */}
              <div className="mt-auto flex justify-end">
                <a
                  href="https://coachstephaniebuchanan.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-orange-600 hover:text-orange-700 transition"
                >
                  View Live Site →
                </a>
              </div>
            </div>
          </div>

          {/* Moments Captured */}
          <div className="h-full">
            <div className="border border-orange-100 rounded-xl p-6 shadow-sm hover:shadow-md transition bg-[#EAF8FB]">
              {/* Title */}
              <h3 className="font-semibold text-lg mb-2 text-[#0C2D48] flex items-center gap-2">
                <span className="text-orange-500">📸</span>
                Moments Captured by Hannah
              </h3>

              {/* Mini Case Study */}
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Hannah needed a clean, modern site to showcase her photography
                style and make it easy for clients to get in touch.{" "}
              </p>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                I built a fast, mobile-responsive one-page site with a featured
                hero image, simple portfolio sections, and a clear contact flow.
                The site gives her a beautiful, easy-to-share link that
                highlights her work and simplifies booking requests.
              </p>

              {/* Thumbnail */}
              <div className="w-full overflow-hidden rounded-md shadow-md mb-4">
                <Image
                  src="https://www.momentscapturedbyhannah.com/og-image.png"
                  alt="Moments Captured by Hannah website preview"
                  width={1200}
                  height={630}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Link row – pushed to bottom, aligned right */}
              <div className="mt-auto flex justify-end">
                <a
                  href="https:/momentscapturedbyhannah.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-orange-600 hover:text-orange-700 transition"
                >
                  View Live Site →
                </a>
              </div>
            </div>
          </div>
          {/* Minister Connect */}
          <div className="h-full">
            <div className="border border-orange-100 rounded-xl p-6 shadow-sm hover:shadow-md transition bg-[#EAF8FB]">
              {/* Title */}
              <h3 className="font-semibold text-lg mb-2 text-[#0C2D48] flex items-center gap-2">
                <span className="text-orange-500">⛪</span>
                Minister Connect
              </h3>
              {/* Mini Case Study */}
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Minister Connect needed a private, streamlined way for ministry
                candidates and churches to discover strong matches.
              </p>{" "}
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                I built a secure platform where both sides can express interest
                — creating “mutual matches” that save significant time and help
                churches focus on candidates who are truly aligned with their
                needs.
              </p>
              {/* Thumbnail */}
              <div className="w-full overflow-hidden rounded-md shadow-md mb-2.5">
                <Image
                  src="/ministerconnect4.png"
                  alt="Minister Connect website preview"
                  width={1200}
                  height={630}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
);

Portfolio.displayName = "Portfolio";
export default Portfolio;
