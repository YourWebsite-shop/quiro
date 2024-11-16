import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({ subsets: ["latin"],  weight: ["200","300", "400", "500", "600","700", "800", "900"] });

const billyOhio = localFont({
  src: "./fonts/BillyOhio.ttf",
  variable: "--billy-ohio",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Quiro",
  description:
    "Discover Quiro: the all-in-one platform transforming your stay and dining experience. Designed by the HoReCa community, for the community, Quiro empowers your team to effortlessly manage every aspect of hospitality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${billyOhio.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
