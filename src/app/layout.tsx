import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cime Rentals — Premium Car Hire",
  description:
    "Book a car with a professional driver in just a few taps. Reliable, comfortable car hire across Nigeria's top cities.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
