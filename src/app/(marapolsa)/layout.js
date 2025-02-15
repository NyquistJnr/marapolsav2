import Script from "next/script";

import { Plus_Jakarta_Sans } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { CProviders } from "../CProvider";
import Header from "@/components/basic-ui/Header";
import Footer from "@/components/basic-ui/Footer";
import AuthContextProvider from "@/context/AuthContext";
import "react-toastify/dist/ReactToastify.css";

const plus_jakarta_sans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Marapolsa Movies",
  description:
    "Marapolsa is a movie review brand that's passionate about sharing our love for movies with the world. Founded in July 2023, we're a team of movie enthusiasts who believe that movies have the power to inspire, entertain, and bring people together.",
  openGraph: {
    url: "https://www.marapolsamovies.com/",
    siteName: "Marapolsa Movies",
    images: [
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9SZ68W-qodSx64EpOOfxnVt7U928xdkMiyw&s",
        width: 1200,
        height: 630,
        alt: "Marapolsa Movies Logo",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-BZSC0W482M`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-BZSC0W482M');
          `}
        </Script>

        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5932063699531838"
          crossOrigin="anonymous"
          strategy="afterInteractive" // Ensures the script loads after the page is interactive
        />
        {/* You can also define ad slots here */}
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-5932063699531838"
          data-ad-slot="2647294381" // Replace with your ad slot ID
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
        <Script>
          {`
          (adsbygoogle = window.adsbygoogle || []).push({});
        `}
        </Script>
      </head>
      <body className={plus_jakarta_sans.className}>
        <CProviders>
          <AuthContextProvider>
            <Header />
            {children}
            <Footer />
          </AuthContextProvider>
        </CProviders>
      </body>
    </html>
  );
}
