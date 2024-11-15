import type { Metadata } from "next";
import "./globals.css";
import {Poppins} from "next/font/google"
import Header from "@/components/Header"
import Footer from '@/components/Footer'

const poppins = Poppins({subsets:['latin'], weight:'400'})


export const metadata: Metadata = {
  title: "Quiro",
  description: "Discover Quiro: the all-in-one platform transforming your stay and dining experience. Designed by the HoReCa community, for the community, Quiro empowers your team to effortlessly manage every aspect of hospitality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
