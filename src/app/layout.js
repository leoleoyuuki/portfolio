"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import { ThemeProvider } from "@/utils/Theme";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
        <meta property="og:image" content="../public/img/next.svg"/>
      </Head>
      <ThemeProvider>
        <body className={inter.className}>
          <Header />
            {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
