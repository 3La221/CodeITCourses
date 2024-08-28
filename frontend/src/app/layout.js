import {  Cairo } from "next/font/google";
import "./globals.css";
import Head from 'next/head';
//components
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
//theme provider
import ThemeProvider from "@/components/ThemeProvider";

const cairo = Cairo({ 
  subsets: ["arabic"] ,
  variable: "--font-cairo"});


export const metadata = {
  title: "Code It - Learn to code",
  description: "Get your education online",
};




export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>

      </Head>
      <body className={cairo.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header/>
          <main  >{children}</main>
          {/* <Footer/> */}
        </ThemeProvider>

      </body>
    </html>
  );
}
