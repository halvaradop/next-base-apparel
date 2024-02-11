import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import { Header } from "@/ui/header";
import "@/ui/globals.css";

const inter = Josefin_Sans({ 
  weight: ["300", "400", "600"],
  subsets: ["latin"],
  variable: "--font-josefin-sans"
});



export const metadata: Metadata = {
  title: "Base apparel",
  description: "Register to be updated with the latest things of the page",
  authors: {
    name: "halvaradop"
  },
  keywords: "website, apparel, platform, register form",
  classification: "website",
  category: "website",
  creator: "halvaradop",
  metadataBase: new URL("https://github.com/halvaradop/next-base-apparel"),
  robots: "index, follow",
  openGraph: {
    title: "Base apparel",
    description: "Register to be updated with the latest things of teh page",
    type: "website",
    url: "https://github.com/halvaradop/next-base-apparel",
    countryName: "Colombia",
    locale: "es_CO",
    siteName: "Base apparel",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
