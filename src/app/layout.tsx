import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans"; // import font
import "./globals.css";

export const metadata: Metadata = {
  title: "Water Department Dashboard",
  description: "Mazandaran",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // add font to className, also add antialiased and dark mode
    <html
      lang="en"
      className={`${GeistSans.className} antialiased dark:bg-gray-950`}
    >
      <body className="grid grid-cols-5 grid-rows-1 gap-2">
        {/* Side Menu */}
        <div className="row-span-1 col-span-1"></div>
        {/* Main content */}
        <main className="row-span-1 col-span-4">{children}</main>
      </body>
    </html>
  );
}
