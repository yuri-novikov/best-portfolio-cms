import type { Metadata } from "next";
import { Providers } from "./providers";
import { Open_Sans } from "next/font/google";

export const metadata: Metadata = {
  title: "Best Portfolio CMS",
  description: "Portfolio CMS built with Next.js",
};

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={openSans.className}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
