import "./globals.css";
import type { Metadata } from "next";
import { M_PLUS_Code_Latin } from "next/font/google";

const mPlus = M_PLUS_Code_Latin({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Berat's Portfolio",
  description: "Generated by LOVE",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/berat.png" type="image/png" />
        <title>Berat Genç | Portfolio</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
