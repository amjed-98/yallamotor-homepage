import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Car News, Automotive Trends, and New Model Announcements - Yalla motor",
  description:
    "Car News, Automotive Trends, and New Model Announcements - Yalla motor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
