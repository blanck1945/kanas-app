import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import KanasLogo from "@/components/atoms/Icons/KanasLogo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Learn Japanese Kanas",
  description: "The best and easiest way to learn Japanese Kanas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-100">
        <nav className="flex items-center justify-between border-b px-5 py-2">
          <KanasLogo />
          <div className="flex items-center">
            <p className="cursor-pointer font-semibold transition-all hover:bg-slate-600 hover:text-white px-4">
              Metodologia
            </p>
            <div className="border h-6 border-slate-500"></div>
            <p className="cursor-pointer font-semibold transition-all hover:bg-slate-600 hover:text-white px-4">
              Registro de cambios
            </p>
          </div>
        </nav>
        <main className="flex min-h-screen flex-col items-center  justify-between py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
