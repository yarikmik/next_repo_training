import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { MenuItem } from '@/app/interfaces/menu.interface';

export interface MenuLevelsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  menuItems: MenuItem[];
 }