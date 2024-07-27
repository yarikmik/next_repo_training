import Image from "next/image";
import styles from "./page.module.css";
import { Htag } from '@/components';

export default function Home(): JSX.Element {
  return (
    <main className={styles.main}>
      {/* Главная страница */}
      <Htag tag='h1'>Текст</Htag>
    </main>
  );
}
