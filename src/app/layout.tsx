import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stayful — Know what your property will earn on Airbnb before you buy",
  description:
    "Stayful uses real Airbnb comparable data and a property-specific algorithm to estimate your monthly short-term rental income in seconds.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
