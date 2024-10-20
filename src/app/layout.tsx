import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import WalletContextProvider from "./components/WalletContextProvider";

export const metadata: Metadata = {
  title: "The Grid",
  description: "A digital frontier",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <WalletContextProvider>
          {children}
        </WalletContextProvider>
      </body>
    </html>
  );
}
