import { Cairo } from "next/font/google";
import "./globals.css";
import Head from 'next/head';
import { useEffect } from 'react';
//components
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
//theme provider
import ThemeProvider from "@/components/ThemeProvider";

const cairo = Cairo({ 
  subsets: ["arabic"],
  variable: "--font-cairo"
});

export const metadata = {
  title: "Code It - Learn to code",
  description: "Get your education online",
};

export default function RootLayout({ children }) {
  useEffect(() => {
    const fetchFbPixel = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}fb_pixel/`);
        const data = await response.json();
        if (data.facebook_pixel) {
          // Insert the Facebook Pixel script
          const script = document.createElement('script');
          script.innerHTML = `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/sdk.js');
            fbq('init', '${data.facebook_pixel}');
            fbq('track', 'PageView');
          `;
          document.head.appendChild(script);
        }
      } catch (error) {
        console.error("Error fetching Facebook Pixel:", error);
      }
    };

    fetchFbPixel();
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
      </Head>
      <body className={cairo.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          <main>{children}</main>
          {/* <Footer/> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
