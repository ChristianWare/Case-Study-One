import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import { Globalprovider } from "../GlobalProvider";
import Header from "../components/Header";
import Script from "next/script";

const epilogue = Epilogue({
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--epilogue",
  adjustFontFallback: false,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${epilogue.variable} `}>
        <Globalprovider>
          <Nav />
          {children}
          <Footer />
        </Globalprovider>

        <Script src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js'></Script>
        <Script src='https://kit.fontawesome.com/b6b7b8a602.js'></Script>
      </body>
    </html>
  );
}
