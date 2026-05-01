import "../global.css";
import { Inter, Sora } from "next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "russ",
    template: "%s | russ",
  },
  description: "FullStack Developer",
  openGraph: {
    title: "russ",
    description:
      "FullStack Developer",
    url: "https://russ",
    siteName: "russ",
    images: [
      {
        url: "https://russ/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Chronark",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/r.jpg",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const interDisplay = Inter({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, interDisplay.variable, sora.variable, calSans.variable].join(" ")}>
      <head>
      </head>
      <body className={`${process.env.NODE_ENV === "development" ? "debug-screens" : undefined}`}>
        {children}
      </body>
    </html>
  );
}
