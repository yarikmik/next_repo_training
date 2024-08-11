import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import styles from "./layout.module.css";
import { Footer, Header, Sidebar } from './components';
import { AppContextProvider, IAppContext } from '@/context/app.context';
import { FunctionComponent } from 'react';

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
            <div className={styles.wrapper}>
              <Header className={styles.header}/>
              <Sidebar className={styles.sidebar}/>
              <div className={styles.body}>
                {children}
              </div>
              <Footer className={styles.footer}/>
            </div>
          </body>
      </html>
  );
}