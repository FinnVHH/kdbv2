// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/ui/footer";
import MainNav from "@/components/ui/main-nav"; // Corrected path if necessary

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KDB Pitch Care",
  description: "Precisie pitch onderhoud voor ongeëvenaarde prestaties.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className + " min-h-screen bg-background text-foreground antialiased flex flex-col"}>
        {/* The issue might stem from how MainNav is wrapped or what it returns */}
        <MainNav />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}