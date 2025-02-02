import type { Metadata } from "next";
import { Raleway, Inter, Fraunces } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import { Globalprovider } from "../GlobalProvider";
import Script from "next/script";
import PlausibleProvider from "next-plausible";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  variable: "--raleway",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700"],
  style: ["normal"],
  variable: "--fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "500", "600", "700", "900"],
  style: ["normal"],
  variable: "--inter",
  display: "swap",
});

const helvetica = localFont({
  src: "../public/fonts/helvetica.ttf",
  variable: "--helvetica",
  display: "swap",
});

const helveticaBold = localFont({
  src: "../public/fonts/helveticaBold.ttf",
  variable: "--helveticaBold",
  display: "swap",
});

const tuskerGrotesk = localFont({
  src: "../public/fonts/tuskerGrotesk.ttf",
  variable: "--tuskerGrotesk",
  display: "swap",
});

const TeXGyreAdventor = localFont({
  src: "../public/fonts/TeXGyreAdventor.otf",
  variable: "--TeXGyreAdventor",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <PlausibleProvider domain='eliteretreatrentals.com' />
      </head>
      <body
        className={`${raleway.variable} ${helvetica.variable} ${helveticaBold.variable} ${tuskerGrotesk.variable} ${inter.variable} ${TeXGyreAdventor.variable} ${fraunces.variable}`}
      >
        <Globalprovider>
          <Nav />
          {children}
          <Footer />
        </Globalprovider>
        {/* <Script src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js'></Script>
        <Script src='https://kit.fontawesome.com/b6b7b8a602.js'></Script> */}
      </body>
    </html>
  );
}
