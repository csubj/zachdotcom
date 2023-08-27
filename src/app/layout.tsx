import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import Link from "next/link";

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
      <body className={inter.className}>
        <div className="container">
          <h1 className="text-4xl md:text-2xl font-bold">
            <Link href="/" className="hover:underline p-2">
              Zach Barner
            </Link>
          </h1>
          <nav className="text-left">
            <Link href="/" className="hover:underline p-2">
              Home
            </Link>
            <Link href="/bio" className="hover:underline p-2">
              Bio
            </Link>
            <Link href="/films" className="hover:underline p-2">
              Film
            </Link>
          </nav>
        </div>
        <main>{children}</main>
      </body>
    </html>
  );
}
