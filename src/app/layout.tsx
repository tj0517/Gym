import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Anton } from "next/font/google";
import { Inter } from "next/font/google";

const inter = Inter({ weight: ["400", "700"], subsets: ["latin"] });

const anton = Anton({ weight: "400", subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={anton.className}>
        {children}
      </body>
    </html>
  );
}
