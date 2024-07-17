import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "A New Way of Raising Awareness for Social Initiatives",
  description: "Discover how raising awareness on critical issues like climate change, education, and job opportunities can make a difference. Join our efforts to create a better world.",
  keywords: "awareness ideas, awareness campaigns, social awareness, climate change awareness, job opportunities awareness, education awareness, governance awareness"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
