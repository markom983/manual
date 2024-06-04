import { ReactNode } from "react";
import type { Metadata } from "next";

// components
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";

import "./globals.css";

export const metadata: Metadata = {
  title: "Manual App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
