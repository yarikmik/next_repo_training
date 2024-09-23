import { ProductModel } from '@/app/interfaces/product.interface';
import { API } from '../app/api';

export async function getProducts(pageCategory: string): Promise<ProductModel[] | null> {
  const res = await fetch(API.product.find, {
    method: 'POST',
    body: JSON.stringify({'category':pageCategory, 'limit': 10}),
    headers: new Headers({'content-type': 'application/json'}),
    next: { revalidate: 10 } // ревалидация странички через 10 секунд
  });

  if (!res.ok) {
	return null;
  }
  return res.json();
}
