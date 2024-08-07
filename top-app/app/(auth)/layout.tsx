import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { Noto_Sans_KR } from "next/font/google";
import "../(site)/globals.css";
import styles from "./page.module.css";

const noto = Noto_Sans_KR({ subsets: ["latin", 'cyrillic'] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={noto.className}>
        <div>Авторизация</div>
        {children}
        </body>
    </html>
  );
}