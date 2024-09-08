import { getMenu } from '@/api/menu';
import { TopLevelCategory } from '@/app/interfaces/page.interface';
import { MenuLevels } from './Menu-Levels';

export async function Menu(): Promise<JSX.Element> {
  const menu = await getMenu(TopLevelCategory.Courses);
 
  return (
      <MenuLevels menuItems={menu}/>
  );
}