import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Fontes self-hosted via @fontsource — sem dependência de fetch externo no build,
// o que torna o site mais portável (funciona igual em qualquer host estático).
import "@fontsource/fraunces/300.css";
import "@fontsource/fraunces/400.css";
import "@fontsource/fraunces/500.css";
import "@fontsource/fraunces/600.css";
import "@fontsource/fraunces/700.css";
import "@fontsource/fraunces/400-italic.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "@fontsource/sora/800.css";

import "./globals.css";

export const metadata: Metadata = {
  title: "Zé Pierno",
  description:
    "Operating where data, ads, and product meet. Career and articles by Zé Pierno.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-graphite text-bone">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
