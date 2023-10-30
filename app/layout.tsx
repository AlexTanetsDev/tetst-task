import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Test task",
  description: "Test task fo nice clothes site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=" h-screen  ">{children}</body>
    </html>
  );
}
