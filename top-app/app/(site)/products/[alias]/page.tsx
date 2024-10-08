import { getPage } from '@/api/page';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getMenu } from '@/api/menu';
import { TopLevelCategory } from '@/app/interfaces/page.interface';

export const metadata: Metadata = {
  title: "Страница",
};

export async function generateStaticParams() {
  const menu = await getMenu(TopLevelCategory.Products);
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
