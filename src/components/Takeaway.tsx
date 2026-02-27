export default function Takeaway() {
  return (
    <section id="takeaway" className="py-28 px-6 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-green-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-3xl mx-auto text-center">
        <p className="text-green-500 text-sm font-semibold uppercase tracking-widest mb-4">What We Want to Leave You With</p>
        <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
          You already have everything it takes.
          <br />
          <span className="text-green-400">Now use it.</span>
        </h2>
        <p className="mt-6 text-green-200/60 text-lg leading-relaxed">
          The best cart boys aren't just fast or organized. They're <strong className="text-white">present</strong>. They make guests feel welcomed, seen, and taken care of. That energy is what turns a regular shift into a great one — and a great shift into serious money.
        </p>
        <p className="mt-4 text-green-200/60 text-lg leading-relaxed">
          Hustle is free. A good attitude costs nothing. And the effort you put into every single interaction will always come back to you.
        </p>

        {/* Divider */}
        <div className="my-10 border-t border-green-900/40" />

        {/* CTA */}
        <a
          href="#modules"
          className="inline-block bg-green-500 hover:bg-green-400 text-black font-black px-10 py-5 rounded-full text-lg transition-all shadow-xl shadow-green-500/20"
        >
          Start the Course — It's Free →
        </a>
        <p className="mt-4 text-green-700 text-sm">No fluff. Just the blueprint.</p>
      </div>
    </section>
  );
}
