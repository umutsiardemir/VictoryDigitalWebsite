import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Victory Digital | Yerel İşletmeler İçin Pazarlama",
  description:
    "Local SEO, Google/Meta Ads, AI otomasyon ve sosyal medya yönetimiyle daha çok müşteri.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="bg-vd-background" suppressHydrationWarning>
      <body className={`${inter.variable} bg-vd-background`} suppressHydrationWarning>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
