'use client';

import styles from "./page.module.css";
import { Button, Htag, P, Tag } from '@/components';
import Logo from '../public/vercel.svg';
import { useEffect, useState } from 'react';

export default function Home(): JSX.Element {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    console.log('counter ' + counter);
    return function cleanup () {
      console.log('Unmount');
    };
  }, []);

  return (
    <main className={styles.main}>
      {counter}
      <Logo/>
      <Htag tag='h1'>Текст</Htag> 
      <Button appearance='primary' arrow='right' onClick={() => setCounter(x=>x+1)}>primary</Button>
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
