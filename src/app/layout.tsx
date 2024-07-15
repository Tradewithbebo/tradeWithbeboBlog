// app/layout.tsx
import { Providers } from "./Provider";
import Head from 'next/head';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang='en'>
     
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
