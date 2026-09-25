import type { Metadata } from "next";
import localFont from "next/font/local";
import { profileImage } from "@/utils/links";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const title = "Kelvin Akaba | Software Engineer & Technical Founder";
const description =
  "I build and validate software products from idea to MVP—solving real-world problems in markets others overlook.";
const siteUrl = "https://kelvinakaba.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Kelvin Akaba",
  },
  description,
  alternates: {
    canonical: siteUrl,
  },
  keywords: [
    "Kelvin Akaba",
    "Software Engineer",
    "Technical Founder",
    "AI software products",
    "MVP",
    "Next.js",
    "Full-stack developer",
  ],
  authors: [{ name: "Kelvin Akaba", url: "https://github.com/eakelvin" }],
  creator: "Kelvin Akaba",
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Kelvin Akaba",
    locale: "en-US",
    type: "website",
    images: [
      {
        url: profileImage.src,
        width: profileImage.width,
        height: profileImage.height,
        alt: "KelvinAkaba-TechnicalFounder",
      },
    ],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: [profileImage.src],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-black ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
