// app/layout.tsx
import { Providers } from "./Provider";
import Head from 'next/head';
import Script from 'next/script';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="google-site-verification" content="T8Co76v3XWFDCVzAR0x6lWNzYrtIx_ZerdNX-2emX9U" />
      </Head>
      <body>
        <Providers>{children}</Providers>

        {/* Microsoft Clarity Script */}
        <Script
          id="clarity-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){ 
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)}; 
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i; 
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y); 
            })(window, document, "clarity", "script", "o0enwfipb4");`,
          }}
        />
      </body>
    </html>
  );
}
