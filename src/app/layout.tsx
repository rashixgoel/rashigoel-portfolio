import type { Metadata } from "next";
import { Manrope, IBM_Plex_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-ibm-mono",
});

const TITLE = "Rashi Goel — Health Information Management, Systems & Automation";
const DESCRIPTION =
  "Health Information Management student with hands-on clinical operations experience. I look for where time and information get lost in healthcare workflows, then build systems, data and automation around them.";

export const metadata: Metadata = {
  title: {
    default: TITLE,
    template: "%s",
  },
  description: DESCRIPTION,
  metadataBase: new URL("https://rashigoel.io"),
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://rashigoel.io",
    siteName: "Rashi Goel",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${ibmPlexMono.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
