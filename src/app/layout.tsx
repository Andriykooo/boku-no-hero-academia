import type { Metadata } from "next";
import "./globals.css";
import { Bungee } from "next/font/google";
import classNames from "classnames";

const bungee = Bungee({ weight: ["400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Hero Academia",
  description: "My Hero Academia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={classNames(bungee.className, "bg-base h-screen")}>
        {children}
      </body>
    </html>
  );
}
