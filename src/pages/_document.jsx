import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ar">
      <Head >

        {/* Google Tag Manager */}
        {typeof window !== 'undefined' && (
          <script
            dangerouslySetInnerHTML={{
              __html:
                (function (w, d, s, l, i) {
                  w[l] = w[l] || [];
                  w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
                  var f = d.getElementsByTagName(s)[0], j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
                  j.async = true;
                  j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
                  f.parentNode.insertBefore(j, f);
                })(window, document, 'script', 'dataLayer', 'GTM-NMWSSTLR')
            }}
          />
        )}
        {/* End Google Tag Manager */}

        {/* zoho code */}
        <script src="https://cdn.pagesense.io/js/alusaifercomsa/c7257d394d2242daab61bb884e3aed8d.js" async></script>
        {/* End zoho code */}

      </Head>
      <body style={{ direction: "rtl" }}>

        {/* Google Tag Manager noscript code */}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NMWSSTLR" height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe>
        </noscript>
        {/* End Google Tag Manager noscript code */}

        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

