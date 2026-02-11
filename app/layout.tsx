import type { Metadata } from "next";
import { Mitr, Playpen_Sans_Thai, Sacramento } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import Navbar from "@/components/Navbar";
import FooterMe from "@/components/FooterMe";

const mitrSans = Mitr({
  variable: "--font-mitr-sans",
  subsets: ["thai", "latin"],
  weight: "200",
});

const playPenSans = Playpen_Sans_Thai({
  variable: "--font-play-sans",
  subsets: ["thai", "latin"],
  weight: "200",
});

const SacramentoSans = Sacramento({
  variable: "--font-sacramento-sans",
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "การ์ดแต่งงานออนไลน์",
  description: "การ์ดแต่งงานออนไลน์",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body
          className={`${mitrSans.variable} ${playPenSans.variable}
          ${SacramentoSans.variable} antialiased text-gray-600`}
        >
          <div className="mx-auto max-w-screen min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-grow">{children}</div>
            <FooterMe />
          </div>
        </body>
      </html>
    </SessionProvider>
  );
}
