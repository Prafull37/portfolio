import Header from "@/app/ui/components/Header";
import Footer from "@/app/ui/components/Footer";
import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "@/app/ui/fonts";
import BaseWrapper from "@/app/ui/common/BaseWrapper";

export const metadata: Metadata = {
  title: "Prafull Singh",
  description: "Give me High Five...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{fontSize:"10px"}}>
      <body className={poppins.className}>
        <Header/>
        <BaseWrapper>
          {children}
        </BaseWrapper>
        <Footer/>
        </body>
    </html>
  );
}
