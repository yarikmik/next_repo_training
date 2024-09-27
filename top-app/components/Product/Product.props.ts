import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ProductModel } from '@/app/interfaces/product.interface';

export interface ProductProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	product: ProductModel;
}