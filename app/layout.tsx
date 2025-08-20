import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";

const prompt = Prompt({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Money Share Calculator",
  description: "เว็บคำนวณเงินที่จะหารกัน",
  keywords: ["เงิน", "แบ่ง", "หารกัน"],
  icons: {
    icon: "/next.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${prompt.className} antialiased`}>{children}</body>
    </html>
  );
}
