import { getPage } from '@/app/api/page';
import styles from "./page.module.css";
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: "Страница",
};


export default async function PageProducts({ params }: { params: {alias: string } } ): JSX.Element {
  const page = await getPage(params.alias);
  if (!page){
    notFound();
  }
  return (
    <div>
      {page.title}
    </div>
  );
}
