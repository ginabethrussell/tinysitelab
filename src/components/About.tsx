import React from 'react';
import Image from 'next/image';

const About = React.forwardRef<HTMLElement>((props, ref) => (
  <section id="about" ref={ref} className="scroll-mt-20 py-16 px-4 bg-white text-center">
    <div className="max-w-3xl mx-auto">
      <div className="flex justify-center mb-6">
        <Image
          src="/avatar.png" // Replace with your actual path
          alt="Gina Beth avatar"
          width={100}
          height={100}
          className="rounded-full mb4 animate-float"
        />
      </div>
      <h2 className="text-3xl font-bold mb-4 text-[#0C2D48]">About Me</h2>

      <p className="text-[#334E68] mb-4">
        Hi, I`&apos;m <span className="font-bold text-[#0C2D48]">Gina Beth</span> — software engineer turned founder of <span className="font-bold text-[#0C2D48]">Tiny Site Lab</span>.
      </p>

      <p className="text-[#334E68] mb-4">
        I specialize in lightweight, <span className="font-semibold text-[#0C2D48]">purpose-built websites and digital tools</span> that help small businesses, teams, creatives, and community groups connect, organize, and take action.
        With a background in both <span className="font-semibold text-[#0C2D48]">software engineering and education</span>, I bring a unique blend of technical skill and thoughtful communication to every project.
      </p>

      <p className="text-[#334E68] mb-4">
        I started Tiny Site Lab because I believe <span className="font-semibold text-[#0C2D48]">good ideas shouldn&apos;t get stuck waiting on big budgets or bloated tech</span>.
        Whether you&apos;re launching a photography business, running a one-time event, or solving a niche problem for your community,
        I help you <span className="font-semibold text-[#0C2D48]">get online fast</span> — with sites that are <span className="font-semibold text-[#0C2D48]">beautiful, fast, and easy to manage</span>.
      </p>

      <p className="text-[#334E68]">
        I&apos;m based in Kentucky and love collaborating with people who are doing meaningful work.
        Let&apos;s build something that works — simply and beautifully.
      </p>

      <p className="mt-6 text-[#FF5722] font-semibold text-lg hover:underline">
        <a href="#contact" className="hover:underline">
          Let&apos;s build something together →
        </a>
      </p>
    </div>
  </section>
));

About.displayName = 'About';
export default About;