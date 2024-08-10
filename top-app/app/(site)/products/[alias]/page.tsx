import { getPage } from '@/app/api/get-page';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getMenu } from '@/app/api/menu';

export const metadata: Metadata = {
  title: "Страница",
};

export async function generateStaticParams() {
  const menu = await getMenu(0);
  return menu.flatMap(item => item.pages.map(page=>({ alias: page.alias })));
}

export default async function PageProducts({ params }: { params: {alias: string } } ): Promise<JSX.Element> {
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
