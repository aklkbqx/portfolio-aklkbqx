import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "@/assets/style/globals.css";
import Navbar from "@/components/Navbar";

const kanitFont = Kanit({
  subsets: ["latin"],
  weight: ["200", "400", "600", "800"]
});

export const metadata: Metadata = {
  title: "Portfolio aklkbqx",
  description: "Portfolio aklkbqx",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${kanitFont.className}`}>
        {children}
      </body>
    </html>
  );
}