import { getPage } from '@/api/page';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getMenu } from '@/api/menu';
import { TopLevelCategory } from '@/app/interfaces/page.interface';
import { firstLevelMenu } from '@/helpers/helpers';
import { TopPageComponent } from '@/app/(site)/components';
import { getProducts } from '@/api/products';

export const metadata: Metadata = {
  title: "Страница",
};

export async function generateStaticParams() {
  const menu = await getMenu(TopLevelCategory.Courses);
  return menu.flatMap(item => item.pages.flatMap(page=>(firstLevelMenu.map(tp=>({type: tp.route, alias: page.alias })))));
}

export default async function PageCourses({ params }: { params: {type: string, alias: string } }): Promise<JSX.Element> {
  const page = await getPage(params.alias);
  if (!page){
    notFound();
  }

  const products = await getProducts(page.category);

  if (!products){
    notFound();
  }

  return (
    <TopPageComponent
      page={page}
      products={products}
      firstCategory={page.firstCategory}
    />
  );
}
