// app/layout.tsx
import { Providers } from "./Provider";
import Head from 'next/head';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <meta
        name="google-site-verification"
        content="T8Co76v3XWFDCVzAR0x6lWNzYrtIx_ZerdNX-2emX9U"
      />

      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
