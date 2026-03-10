import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { LeadCaptureModal } from "./components/lead-capture-modal";
import { WhatsAppButton } from "./components/whatsapp-button";
import { buildMetadata } from "./components/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = buildMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex min-h-screen flex-col bg-slate-50 text-slate-900`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <LeadCaptureModal />
        <WhatsAppButton />
      </body>
    </html>
  );
}
