const reasons = [
  {
    icon: "🤝",
    title: "Guests Remember How You Made Them Feel",
    desc: "A warm greeting, a free tee, a genuine conversation — those aren't extras. They're the job. And they're what separates a $5 tip from a $20 tip.",
  },
  {
    icon: "💡",
    title: "Most Cart Boys Are Never Trained",
    desc: "Nobody sits you down and explains how to read a guest, handle the turn, or what to say when someone comes off the 18th. We fix that.",
  },
  {
    icon: "🔁",
    title: "Consistency Builds a Reputation",
    desc: "Regulars come back for the course — and for the people. When you're known as the guy who hustles, your tips become reliable income.",
  },
  {
    icon: "📈",
    title: "Small Habits = Big Results",
    desc: "Tucking in your shirt, knowing your course directions, having a bag on the car before they ask — these tiny things stack up over every single shift.",
  },
];

export default function WhyItWorks() {
  return (
    <section id="why-it-works" className="py-28 px-6 relative overflow-hidden">
      {/* Subtle BG glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-green-500 text-sm font-semibold uppercase tracking-widest mb-3">Why It Works</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            The method is simple.{" "}
            <span className="text-green-400">The results aren't.</span>
          </h2>
          <p className="mt-4 text-green-200/50 max-w-xl mx-auto text-lg">
            CBC isn't about tricks. It's about showing up with the right mindset and knowing exactly what to do in every moment of your shift.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="flex gap-5 bg-green-950/20 border border-green-900/30 rounded-2xl p-7 hover:border-green-700/50 transition-all"
            >
              <div className="text-3xl shrink-0 mt-1"><span className={r.anim}>{r.icon}</span></div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">{r.title}</h3>
                <p className="text-green-200/55 text-sm leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
