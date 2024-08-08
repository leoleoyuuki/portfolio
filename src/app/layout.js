"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import { ThemeProvider } from "../utils/Theme";
import Head from 'next/head'; // Importe o componente Head

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Head>
          <title>Meu Portfólio - Leoyuuki</title>
          <meta name="description" content="Leo Yuuki, desenvolvedor fullstack com foco em desenvolvimento web." />
          <meta name="keywords" content="Next.js, Portfólio, Desenvolvedor Web, React, Dev, Fullstack" />
          <meta name="author" content="leoleoyuuki" />
          <link rel="canonical" href="https://leoyuuki.vercel.app/" />
          <meta property="og:title" content="Meu Portfólio - Leoyuuki" />
          <meta property="og:description" content="Leo Yuuki, desenvolvedor fullstack com foco em desenvolvimento web." />
          <meta property="og:url" content="https://leoyuuki.vercel.app/" />
          <meta property="og:type" content="website" />
          <meta name="google-site-verification" content="guDvDUgUW4XwvKk0FKbUfVxNhsGZw7sEw82b3URb-hw" />
        </Head>
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
