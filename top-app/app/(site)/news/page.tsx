import styles from "./page.module.css";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Новости",
};


export default function About(): JSX.Element {
  return (
    <div>
      Новости
    </div>
  );
}
