export default function Hero() {
  return (
    <section
      id="hero"
      className="scroll-mt-20 min-h-screen flex items-center justify-center bg-[#EAF8FB] pt-24 px-4 hero-bubbles"
    >
      <div className="max-w-3xl w-full mx-auto text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0C2D48] mb-4 leading-tight">
          Lightweight Web Tools for People on a Mission
        </h1>
        <p className="text-xl italic text-[#334E68] mb-4">
          Built with purpose. Small by design. Made to matter.
        </p>

        <p className="text-lg text-[#334E68] mb-6">
          I build fast, purpose-driven websites and tools for small businesses, teams, creatives, churches, and events.
        </p>
        <div className="flex justify-center md:justify-end">
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-[#FF5722] text-white rounded hover:bg-[#e64a19] transition"
          >
            Start a Project
          </a>
        </div>
      </div>
    </section>
  );
}
