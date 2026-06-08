import type { Metadata } from "next";
import { Playfair_Display, Inter, DM_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const dmMono = DM_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-dm-mono",
});

export const metadata: Metadata = {
  title: "Rashi Goel — Clinical Informatics & FHIR Interoperability",
  description:
    "HIM student building FHIR interoperability expertise at the intersection of clinical knowledge and health systems engineering.",
  metadataBase: new URL("https://rashigoel.io"),
  openGraph: {
    title: "Rashi Goel — Clinical Informatics & FHIR Interoperability",
    description:
      "HIM student building FHIR interoperability expertise at the intersection of clinical knowledge and health systems engineering.",
    url: "https://rashigoel.io",
    siteName: "Rashi Goel",
    locale: "en_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${dmMono.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
