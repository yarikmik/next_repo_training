import Image from "next/image";
import styles from "./page.module.css";
import { Button, Htag } from '@/components';
import Logo from '../public/vercel.svg';

export default function Home(): JSX.Element {
  return (
    <main className={styles.main}>
      {/* Главная страница */}
      <Logo/>
      <Htag tag='h1'>Текст</Htag> 
      <Button appearance='primary' arrow='right'>primary</Button>
      <Button appearance='ghost' arrow='right'>ghost</Button>
    </main>
  );
}
