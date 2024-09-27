// 'use client';

import { Input, Textarea } from '@/components';
import styles from "./page.module.css";

export default async function Home(): Promise<JSX.Element> {
  // const [rating, setRating] = useState<number>(4);
  return (
    <main className={styles.main}>
      Главная страница
      {/* <Logo/> */}
      {/* <Htag tag='h1'>Текст</Htag> 
      <Button appearance='primary' arrow='right'>primary</Button>
      <Button appearance='ghost' arrow='down'>ghost</Button>
      <P>Какой то параграф</P>
      <P size='s'>Какой то параграф</P>
      <P size='l'>Какой то параграф</P>
      <Tag size='s'>Ghost</Tag>
      <Tag size='m' color='red'>Red</Tag>
      <Tag size='m' color='green'>Green</Tag>
      <Tag size='s' color='grey' href='google.com'>Grey</Tag>
      <Rating rating={rating} isEditable setRating={setRating}/> */}
      <Input placeholder='test' />
      <Textarea placeholder='тест area' />
    </main>
  );
}
