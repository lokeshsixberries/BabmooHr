import Script from "next/script";

export default function index() {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-T46T3CF069"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-T46T3CF069');
        `}
      </Script>
    </>
  );
}
