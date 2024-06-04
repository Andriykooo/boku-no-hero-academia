import type { Metadata } from "next";
import "./globals.css";
import { Bungee } from "next/font/google";
import classNames from "classnames";

const bungee = Bungee({ weight: ["400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Hero Academia",
  description:
    "Boku no Hero Academia is a manga written and illustrated by Kohei Horikoshi and published in Weekly Shonen Jump. The first chapter of the manga was published on July 7, 2014 in the 32nd issue of the magazine.",
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
