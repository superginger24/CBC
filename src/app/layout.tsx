import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cart Boy Consulting | CBC",
  description: "Hustle. Effort. Good Attitude. The blueprint for elite golf course outside ops.",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
