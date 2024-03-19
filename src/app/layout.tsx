import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import Header from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { AOSInit } from "@/components/aos";
import { ScrollToTop } from "@/components/scroll-to-top";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hailey Wollf",
  description: "Modelo fotográfica",
  keywords:
    "modelo, fotografia, hailey, wollf, rio de janeiro, brasil, ensaio, fotográfico, book, fotográfico, modelo, fotográfica",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AOSInit />
          <Header />
          {children}
          <ScrollToTop/>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
