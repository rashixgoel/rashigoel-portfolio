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

export const metadata: Metadata = {
  title: "Rashi Goel | Health Informatics, Interoperability & Data",
  description:
    "Portfolio of Rashi Goel, a Health Information Management student in Greater Vancouver working across clinical systems, interoperability, health data, workflow improvement, and responsible automation.",
  metadataBase: new URL("https://rashigoel.io"),
  openGraph: {
    title: "Rashi Goel | Health Informatics, Interoperability & Data",
    description:
      "Portfolio of Rashi Goel, a Health Information Management student in Greater Vancouver working across clinical systems, interoperability, health data, workflow improvement, and responsible automation.",
    url: "https://rashigoel.io",
    siteName: "Rashi Goel",
    locale: "en_CA",
    type: "website",
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
