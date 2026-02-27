const modules = [
  {
    number: "01",
    title: "Arriving to Work",
    desc: "Look the part every single day. You're a direct reflection of your golf course. Shirt tucked, presentable, professional — before you even say a word.",
    tag: "First Impressions",
  },
  {
    number: "02",
    title: "Clocking In & Getting on the Same Page",
    desc: "Check in with your co-workers and managers. Know the day's flow before it starts — special events, course conditions, expected volume. Be informed.",
    tag: "Team Communication",
  },
  {
    number: "03",
    title: "Reading the Floor",
    desc: "Who needs help? What needs to get done? Great outside ops staff don't wait to be told — they see the gap and fill it before anyone asks.",
    tag: "Awareness & Hustle",
  },
  {
    number: "04",
    title: "Greeting Golfers",
    desc: "Don't be standoffish. This might be someone's first round ever. Be there to help, not judge. Hand out something free before they even tee off — that's how tips start.",
    tag: "Guest Experience",
  },
  {
    number: "05",
    title: "Giving Directions",
    desc: "Know your course inside and out. Practice a clear, confident set of directions. Guests who feel taken care of from the start tip at the end.",
    tag: "Course Knowledge",
  },
  {
    number: "06",
    title: "Getting Them to Their Tee Time",
    desc: "Be friendly, be timely. Ask if they need anything. This small interaction sets the tone for the entire round — and for what happens when they come back in.",
    tag: "Flow & Hospitality",
  },
  {
    number: "07",
    title: "The Turn — Where Tips Are Made",
    desc: "This is the most important part of your shift. Greet them with a smile and a wet towel. Offer to clean clubs, blow off shoes. Hustle visibly. Ask great questions — 'Any birdies out there?' 'You guys need dinner recs?' Connect with them. That's the money.",
    tag: "⭐ The Money Moment",
    highlight: true,
  },
];

export default function Modules() {
  return (
    <section id="modules" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-green-500 text-sm font-semibold uppercase tracking-widest mb-3">The Course</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            7 modules.{" "}
            <span className="text-green-400">One elite shift.</span>
          </h2>
          <p className="mt-4 text-green-200/50 max-w-xl mx-auto text-lg">
            From the moment you clock in to the moment you're folding that last cart towel — we cover every part of your day.
          </p>
        </div>

        {/* Module list */}
        <div className="flex flex-col gap-4">
          {modules.map((mod) => (
            <div
              key={mod.number}
              className={`flex flex-col sm:flex-row gap-5 rounded-2xl p-7 border transition-all ${
                mod.highlight
                  ? "bg-green-500/10 border-green-500/50 shadow-lg shadow-green-500/10"
                  : "bg-green-950/20 border-green-900/30 hover:border-green-700/40"
              }`}
            >
              {/* Number */}
              <div
                className={`text-4xl font-black shrink-0 w-14 ${
                  mod.highlight ? "text-green-400" : "text-green-800"
                }`}
              >
                {mod.number}
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-white">{mod.title}</h3>
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      mod.highlight
                        ? "bg-green-500/20 text-green-300 border border-green-500/40"
                        : "bg-green-950 text-green-600 border border-green-800/40"
                    }`}
                  >
                    {mod.tag}
                  </span>
                </div>
                <p className="text-green-200/60 text-sm leading-relaxed">{mod.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
