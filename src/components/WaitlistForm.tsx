"use client";
import { useState } from "react";

// Paste your Google Apps Script web app URL here after setup
const APPS_SCRIPT_URL = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL ?? "";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      // Google Apps Script requires no-cors mode — success is assumed on fetch completion
      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, timestamp: new Date().toISOString() }),
      });
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="mt-8 inline-flex flex-col items-center gap-2 bg-green-500/10 border border-green-500/40 rounded-2xl px-8 py-6">
        <span className="text-2xl">⛳</span>
        <p className="text-green-400 font-bold text-lg">You&apos;re on the list!</p>
        <p className="text-green-200/60 text-sm">We&apos;ll hit you when CBC goes live.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row items-center gap-3 justify-center w-full max-w-md mx-auto">
      <input
        type="email"
        required
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full sm:flex-1 bg-green-950/40 border border-green-800/50 focus:border-green-500 outline-none text-white placeholder-green-700 rounded-full px-6 py-3.5 text-sm transition-all"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="shrink-0 bg-green-500 hover:bg-green-400 disabled:opacity-60 text-black font-black px-6 py-3.5 rounded-full text-sm transition-all shadow-lg shadow-green-500/20 whitespace-nowrap"
      >
        {status === "loading" ? "Sending..." : "Join the Waitlist →"}
      </button>
      {status === "error" && (
        <p className="text-red-400 text-xs mt-1 w-full text-center">Something went wrong. Try again.</p>
      )}
    </form>
  );
}
