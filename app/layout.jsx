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
  title: "Fluorokraft",
  description: "Fluorokraft",
  icons: {
    icon: "/fluorokraft-min-logo.svg",
  },
  alternates: {
    canonical: `https://fluorokraft.vercel.app/`,
  },
  metadataBase: new URL("https://fluorokraft.vercel.app/"),
  openGraph: {
    title: "Fluorokraft",
    description: "Fluorokraft",
    url: "https://fluorokraft.vercel.app/",
    // images: [
    //   {
    //     url: "https://ik.imagekit.io/webibee/aspiire%20logo.png?updatedAt=1744800414967",
    //     width: 1200,
    //     height: 630,
    //     alt: "Aspire Tech Academy logo",
    //   },
    // ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const GOOGLE_SITE_VERIFICATION =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "";
const GOOGLE_ANALYTICS_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || "";
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID || "";
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content={GOOGLE_SITE_VERIFICATION}
        />
        {/* Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GOOGLE_ANALYTICS_ID}');
            `,
          }}
        />

        {/* Microsoft Clarity */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", '${CLARITY_ID}');
            `,
          }}
        />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `,
          }}
        />
      </head>
      <body
        className={` ${roboto.variable} ${formularMono.variable} ${formular.className} antialiased selection:bg-success selection:text-white`}
      >
        {/* GTM noscript */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
