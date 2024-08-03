import Image from "next/image";
import styles from "./page.module.css";
import { Button, Htag, P, Tag } from '@/components';
import Logo from '../public/vercel.svg';

export default function Home(): JSX.Element {
  return (
    <main className={styles.main}>
      {/* Главная страница */}
      <Logo/>
      <Htag tag='h1'>Текст</Htag> 
      <Button appearance='primary' arrow='right'>primary</Button>
      <Button appearance='ghost' arrow='right'>ghost</Button>
      <P>Какой то параграф</P>
      <P size='s'>Какой то параграф</P>
      <P size='l'>Какой то параграф</P>
      <Tag size='s'>Ghost</Tag>
      <Tag size='m' color='red'>Red</Tag>
      <Tag size='m' color='green'>Green</Tag>
      <Tag size='s' color='grey' href='google.com'>Grey</Tag>
    </main>
  );
}
