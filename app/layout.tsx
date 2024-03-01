import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Analytics } from "@vercel/analytics/next";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["200", "400", "600"],
});

export const metadata: Metadata = {
  title: "Yamin Raad",
  description: "Software Engineer || Blockchain Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="black">
      <body className={robotoMono.className}>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
        <Analytics></Analytics>
      </body>
    </html>
  );
}
