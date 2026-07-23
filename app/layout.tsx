import type { Metadata } from "next";
import { Racing_Sans_One, Sora, Doto } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./globals.css";

// 1. Configure the rugged headline font
const racingSans = Racing_Sans_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-racing",
});

// 2. Configure your highly readable body text font
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

// 3. Configure the technical/display font (Doto)
const doto = Doto({
  subsets: ["latin"],
  variable: "--font-doto",
});

export const metadata: Metadata = {
  title: "7th Gear Tire Works | Mobile Commercial Tire Service",
  description:
    "On-site commercial tire installation and fleet maintenance across Texas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Pass the font variables down to the HTML tag
    <html
      lang="en"
      className={`${racingSans.variable} ${sora.variable} ${doto.variable} bg-stone-950 text-stone-100`}
    >
      <body className="bg-stone-950 font-sans antialiased min-h-screen">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
