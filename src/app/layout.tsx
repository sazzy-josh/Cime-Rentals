import type { Metadata } from "next";
import { Inter, Great_Vibes } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-logo",
});

export const metadata: Metadata = {
  title: "Cime Rentals — Premium Car Hire",
  description:
    "Book a car with a professional driver in just a few taps. Reliable, comfortable car hire across Nigeria's top cities.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${greatVibes.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
