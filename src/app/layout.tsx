import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cart Boy Consulting | CBC",
  description: "Hustle. Effort. Good Attitude. The blueprint for elite golf course outside ops.",
  openGraph: {
    title: "Cart Boy Consulting | CBC",
    description: "The course nobody gives you — but every cart boy needs. Learn how to show up, stand out, and stack tips.",
    url: "https://cbc.purefectgolf.com",
    siteName: "Cart Boy Consulting",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cart Boy Consulting | CBC",
    description: "The course nobody gives you — but every cart boy needs.",
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
