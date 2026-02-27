const team = [
  {
    name: "The Founder",
    role: "Former Cart Boy → Outside Ops Lead",
    bio: "Started at the bag drop just like you. Learned through years of shifts, hundreds of rounds, and more bag tags than you can count. Built a reputation on hustle and real connections with guests.",
    emoji: "⛳",
  },
  {
    name: "The Method",
    role: "Built From Real Reps",
    bio: "Everything in CBC comes from real experience on real courses — not theory. Every tip, every line, every move was tested on the floor and proven to work.",
    emoji: "🏌️",
  },
  {
    name: "The Mission",
    role: "Elevate the Outside Game",
    bio: "Outside ops is the most underrated role on a golf course. We're here to change that. If you show up with the right mindset and the right moves, you will get paid.",
    emoji: "💰",
  },
];

export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-green-500 text-sm font-semibold uppercase tracking-widest mb-3">Who We Are</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            Built by people who{" "}
            <span className="text-green-400">actually did it</span>
          </h2>
          <p className="mt-4 text-green-200/50 max-w-xl mx-auto text-lg">
            No suits. No theory. Just real knowledge from people who've been in your shoes, grinded through every shift, and figured out what actually works.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {team.map((item) => (
            <div
              key={item.name}
              className="bg-green-950/30 border border-green-800/30 rounded-2xl p-8 hover:border-green-600/50 transition-all group"
            >
              <div className="text-4xl mb-4">{item.emoji}</div>
              <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">
                {item.name}
              </h3>
              <p className="text-green-500 text-sm font-medium mt-1 mb-4">{item.role}</p>
              <p className="text-green-200/60 text-sm leading-relaxed">{item.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
