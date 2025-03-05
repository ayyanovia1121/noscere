import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import AppContextProvider from "@/context/AppContex";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  
})


export const metadata: Metadata = {
  title: "Noscere",
  description: "AI Powered ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <AppContextProvider>
        <body className={`${poppins.className} antialiased`}>{children}</body>
      </AppContextProvider>
    </html>
  );
}
