import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tiny Site Lab",
  description: "Lightweight websites and digital tools for people on a mission.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Tiny Site Lab",
    description: "Lightweight websites and digital tools for people on a mission.",
    url: "https://www.tinysitelab.com",
    siteName: "Tiny Site Lab",
    images: [
      {
        url: "https://www.tinysitelab.com/og-image.png", // make sure this image exists and is public
        width: 1200,
        height: 630,
        alt: "Tiny Site Lab preview image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tiny Site Lab",
    description: "Lightweight websites and digital tools for people on a mission.",
    images: ["https://www.tinysitelab.com/og-image.png"],
    site: "", // optional
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
