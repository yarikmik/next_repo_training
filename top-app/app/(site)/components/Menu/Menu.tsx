import { getMenu } from '@/api/menu';
import { FirstLevelMenuItem, PageItem } from '@/app/interfaces/menu.interface';
import CoursesIcon from './icons/courses.svg';
import ServicesIcon from './icons/services.svg';
import BooksIcon from './icons/books.svg';
import ProductsIcon from './icons/products.svg';
import { TopLevelCategory } from '@/app/interfaces/page.interface';
import styles from "./Menu.module.css";
import cn from 'classnames';

const firstLevelMenu: FirstLevelMenuItem[] = [
  { route: 'courses', name: 'Курсы', icon: <CoursesIcon/>, id: TopLevelCategory.Courses},
  { route: 'servics', name: 'Сервисы', icon: <ServicesIcon/>, id: TopLevelCategory.Services},
  { route: 'books', name: 'Книги', icon: <BooksIcon/>, id: TopLevelCategory.Books},
  { route: 'products', name: 'Продуткы', icon: <ProductsIcon/>, id: TopLevelCategory.Products}
];

export async function Menu(): Promise<JSX.Element> {
  const menu = await getMenu(0);

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map(m => (
          <div key={m.route}>
            <a href={`/${m.route}`}>
              <div className={cn(styles.firstLevel, {
                // [styles.firstLevelActive]: menu.isActive
                [styles.firstLevelActive]: m.id == TopLevelCategory.Courses
              })}>
                {m.icon}
                <span>{m.name}</span>
              </div>
            </a>
            {m.id == TopLevelCategory.Courses && buildSecondLevel(m)}
          </div>
        ))}
      </>
    );
  };

  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <div className={styles.secondBlock}>
        {menu.map(m => (
          <div key={m._id.secondCategory}>
            <div className={styles.secondLevel}>
              {m._id.secondCategory}
            </div>
            <div className={cn(styles.secondLevelBlock, {
              [styles.secondLevelBlockOpened]: m.isOpen
              // [styles.secondLevelBlockOpened]: true
            })}>{buildThirdLevel(m.pages, menuItem.route)}</div>
          </div>
        ))}
      </div>
    );
  };

    const buildThirdLevel = (pages: PageItem[], route: string) => {
    return (
      pages.map(p => (
        <a key={p._id} href={`/${route}/${p.alias}`}
          className={cn(styles.thirdLevel, {
            [styles.thirdLevelActive]: false
          })}>
            {p.category}
        </a>

      ))
    );
  };

  return (
    <div className={styles.menu}>
      {/* <div>{JSON.stringify(menu)}</div> */}
      {buildFirstLevel()}
    </div>

    // <main>
        // <div>{JSON.stringify(menu)}</div>
    //     <div>{menu.length}</div>
    // </main>
  );
}