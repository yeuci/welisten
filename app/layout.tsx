import { Inter as FontSans } from "next/font/google";
import localFont from "next/font/local";
import Provider from "@/components/provider";
import { Toaster } from "@/components/ui/toaster";

import "../styles/globals.css";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontHeading = localFont({
  src: "../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: "WeListen",
  description: "WeListen - Homepage",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <Provider>{children}</Provider>
        <Toaster />
      </body>
    </html>
  );
}
