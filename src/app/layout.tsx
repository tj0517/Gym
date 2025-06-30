import "./globals.css";
import { Anton } from "next/font/google";

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
