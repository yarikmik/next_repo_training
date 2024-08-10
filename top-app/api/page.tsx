import { API } from '../app/api';
import { TopPageModel } from '../app/interfaces/page.interface';

export async function getPage(alias: string): Promise<TopPageModel | null> {
  const res = await fetch(API.topPage.byAlias + alias, {
    next: { revalidate: 10 } // ревалидация странички через 10 секунд
  });
  // console.log('revalidating getPage');

  if (!res.ok) {
	return null;
  }
  return res.json();
}
