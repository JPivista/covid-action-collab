// import { Inter } from 'next/font/google'
import './globals.css'

// const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

import Script from 'next/script'
import '/components/StyleComponents'
import Head from 'next/head'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="google-site-verification" content="R23Ey1YcgVLq43ENjiGfVOrj2kWAltzGzqy9TEolc7M" />
      </Head>
      <body>
        {children}

        {/* Start Google Analytics Manager */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-49LC5YEDFC`} />

        <Script strategy="afterInteractive" id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag('js', new Date());
          gtag('config', 'G-49LC5YEDFC');
        `}
        </Script>
        {/* End Google Analytics Manager */}


        {/* Google Tag Manager (noscript) */}
        <Script id="google-tag-manager-start">
          {`
          (function(w,d,s,l,i){
            w[l]=w[l]||[];
            w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WXFJ6ZV');
        `}
        </Script>

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WXFJ6ZV"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

      </body>
    </html>
  )
}
