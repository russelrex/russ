import "../global.css";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { Metadata } from "next";
import ScrollProgress from "./components/ScrollProgress";
import RevealInit from "./components/RevealInit";

const inter = Inter({
  subsets: ["latin"],
  variable: "--nf-sans",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--nf-serif",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--nf-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Russel Rex • Full-stack Developer",
    template: "%s | Russel Rex",
  },
  description: "Full-stack developer specializing in React, Next.js, Node.js, and React Native.",
  openGraph: {
    title: "Russel Rex • Full-stack Developer",
    description: "Full-stack developer specializing in React, Next.js, Node.js, and React Native.",
    url: "https://russelrex.dev",
    siteName: "Russel Rex",
    images: [{ url: "/og.png", width: 1920, height: 1080 }],
    locale: "en-US",
    type: "website",
  },
  robots: { index: true, follow: true },
  icons: { shortcut: "/r.jpg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const fontVars = [inter.variable, instrumentSerif.variable, jetbrainsMono.variable].join(" ");
  return (
    <html lang="en" className={fontVars}>
      <head />
      <body style={{ fontFamily: "var(--nf-sans), ui-sans-serif, system-ui, sans-serif" }}>
        <ScrollProgress />
        <div className="bg-fx" aria-hidden="true">
          <div className="bg-orb a" />
          <div className="bg-orb b" />
          <div className="bg-grid" />
          <div className="bg-noise" />
        </div>
        <RevealInit />
        {children}
      </body>
    </html>
  );
}
