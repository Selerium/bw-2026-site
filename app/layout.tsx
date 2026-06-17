import type { Metadata } from "next";
import "@/app/globals.css"

export const metadata: Metadata = {
  title: "Big Weekend '26",
  description: "ROOTED | live your lives in Him, rooted and built up in Him",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
