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
    title: "Greeting Golfers to the Course",
    desc: "Don't be standoffish — this could be someone's first time ever on a course. Be there to help, not to judge. Hand out a free tee, a yardage guide, anything you can offer before their round even starts. That generosity is how tips begin.",
    tag: "Guest Experience",
  },
  {
    number: "05",
    title: "Giving Directions",
    desc: "Have a clear, practiced plan for how you explain the course layout. Know every hole, every cart path, every shortcut. Guests who feel informed and taken care of from the start are the ones who tip when they come back in.",
    tag: "Course Knowledge",
  },
  {
    number: "06",
    title: "Getting Them to Their Tee Time",
    desc: "Be friendly, be timely, and ask if they need anything before they head out. This small interaction sets the tone for their entire round — and directly affects what happens when they come back off 18.",
    tag: "Flow & Hospitality",
  },
  {
    number: "07",
    title: "Guests Coming Off the Course",
    desc: "This is the most important part of your shift. Greet every group with a smile and a wet towel ready to go. Offer to clean their clubs and blow off or wipe down their shoes — show visible effort and hustle. Have a game plan: take their bag to the car or let them know you can drop it at bag drop. Then connect with them — 'Any birdies out there today?' 'Need any dinner or food recommendations?' 'Are you from around the area?' That connection is what earns the tip.",
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
            From the moment you walk in the door to the moment that last bag hits the car — we cover every part of your day.
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
