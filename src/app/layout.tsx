import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav/Nav";

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
        {/* <Nav /> */}
        <div>{children}</div>
      </body>
    </html>
  );
}
