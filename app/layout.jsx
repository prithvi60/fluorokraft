import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import localFont from "next/font/local";
import { Roboto } from "next/font/google";

const formular = localFont({
  src: [
    {
      path: "../app/formular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-formular",
});

const formularMono = localFont({
  src: [
    {
      path: "../app/formular-mono.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-formularMono",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Flourokraft",
  description: "Flourokraft",
  icons: {
    icon: "/fluorokraft-min-logo.svg"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${roboto.variable} ${formularMono.variable} ${formular.className} antialiased selection:bg-success selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
