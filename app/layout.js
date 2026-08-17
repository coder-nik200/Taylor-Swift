import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Taylor Swift — Eras After Midnight",
  description: "A midnight broadcast for Swifties.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XJ0T09SPJ9"
        />

        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XJ0T09SPJ9');
          `}
        </Script>
      </head>

      <body>{children}</body>
    </html>
  );
}
