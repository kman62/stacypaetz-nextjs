import type { Metadata } from "next";
import { Inter, Dancing_Script } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-script",
});

export const metadata: Metadata = {
  title: "Stacy Paetz - Television Host, Reporter & Content Creator",
  description: "Official website of Stacy Paetz - Emmy-nominated television host, sports reporter, and content creator with proven credibility throughout the sports and entertainment industries.",
  keywords: ["Stacy Paetz", "sports reporter", "television host", "broadcaster", "NBA", "ESPN", "Fox Sports"],
  openGraph: {
    title: "Stacy Paetz - Television Host & Reporter",
    description: "Emmy-nominated television host and sports reporter",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${dancingScript.variable} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
