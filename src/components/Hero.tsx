export default function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-20 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-green-600/10 rounded-full blur-[120px]" />
      </div>

      {/* Eyebrow */}
      <div className="inline-flex items-center gap-2 bg-green-950/60 border border-green-700/40 text-green-400 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        The Blueprint for Golf Course Outside Ops
      </div>

      {/* Headline */}
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-tight max-w-4xl">
        Hustle. Effort.{" "}
        <span className="text-green-400">Good Attitude.</span>
      </h1>

      {/* Subheadline */}
      <p className="mt-6 text-lg sm:text-xl text-green-200/60 max-w-2xl leading-relaxed">
        Cart Boy Consulting teaches you how to show up, stand out, and stack tips.
        This is the course nobody gives you — but every cart boy needs.
      </p>

      {/* CTAs */}
      <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
        <a
          href="#modules"
          className="bg-green-500 hover:bg-green-400 text-black font-bold px-8 py-4 rounded-full text-base transition-all shadow-lg shadow-green-500/20"
        >
          Start the Course →
        </a>
        <a
          href="#who-we-are"
          className="text-green-300 border border-green-700/50 hover:border-green-400 px-8 py-4 rounded-full text-base transition-all"
        >
          Who We Are
        </a>
      </div>

      {/* Stats row */}
      <div className="mt-20 grid grid-cols-3 gap-8 sm:gap-16 text-center">
        {[
          { value: "7", label: "Core Modules" },
          { value: "100%", label: "Tip-Focused" },
          { value: "Real", label: "Experience Behind It" },
        ].map((stat) => (
          <div key={stat.label}>
            <div className="text-3xl sm:text-4xl font-black text-green-400">{stat.value}</div>
            <div className="text-sm text-green-200/50 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
