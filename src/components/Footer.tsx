export default function Footer() {
  return (
    <footer className="border-t border-green-900/30 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-green-400 font-black text-xl">CBC</span>
          <span className="text-green-700 text-sm">Cart Boy Consulting</span>
        </div>
        <p className="text-green-800 text-sm">© {new Date().getFullYear()} Cart Boy Consulting. All rights reserved.</p>
        <div className="flex gap-6 text-sm text-green-700">
          <a href="#about" className="hover:text-green-400 transition-colors">About</a>
          <a href="#modules" className="hover:text-green-400 transition-colors">Course</a>
          <a href="#why-it-works" className="hover:text-green-400 transition-colors">Why It Works</a>
        </div>
      </div>
    </footer>
  );
}
