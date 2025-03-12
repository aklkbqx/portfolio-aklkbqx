import type { Metadata } from "next";
import { Kanit } from "next/font/google";

import "@/assets/style/globals.css";

import { Providers } from "./providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const kanitFont = Kanit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  title: "Portfolio aklkbqx",
  description: "Portfolio aklkbqx",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${kanitFont.className}`}>
        <Providers>
          {children}
          <Navbar />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}