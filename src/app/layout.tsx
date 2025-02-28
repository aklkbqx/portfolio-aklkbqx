import type { Metadata } from "next";
import { Kanit } from "next/font/google";

import "@/assets/style/globals.css";

import { Providers } from "./providers";

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
        </Providers>
      </body>
    </html>
  );
}