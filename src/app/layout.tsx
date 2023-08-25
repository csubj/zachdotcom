import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "@/components/nav";
import Intro from "@/components/intro";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zach Barner | Film, Photography",
  description: "Professional Site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Intro />
      <Nav />
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
