"use client";

import Link from 'next/link';
import { FirstLevelMenuItem, PageItem } from '@/app/interfaces/menu.interface';
import { TopLevelCategory } from '@/app/interfaces/page.interface';
import styles from "./Menu.module.css";
import cn from 'classnames';
import { usePathname } from 'next/navigation';
import { MenuLevelsProps } from './Menu-Levels.props';
import { useState } from 'react';
import { firstLevelMenu } from '@/helpers/helpers';


export function MenuLevels({menuItems}: MenuLevelsProps): JSX.Element {
  const pathname = usePathname();
  const [menu, setMenu] = useState(menuItems);

  // console.log('pathname-', pathname.split('/')[2]);

  const openSecondLevel = (secondCategory: string) => {
    const new_menu = menu.map(m => {
      if (m._id.secondCategory == secondCategory) {
        m.isOpen = !m.isOpen;
      }
      return m;
    });
      setMenu(new_menu);
  };

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map(m => (
          <div key={m.route}>
            <Link href={`/${m.route}`}>
                  <div className={cn(styles.firstLevel, {
                  // [styles.firstLevelActive]: menu.isActive
                  [styles.firstLevelActive]: m.id == TopLevelCategory.Books
                })}>
                  {m.icon}
                  <span>{m.name}</span>
                </div>
            </Link>

            {m.id == TopLevelCategory.Books && buildSecondLevel(m)}
          </div>
        ))}
      </>
    );
  };

  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <div className={styles.secondBlock}>
        {menu.map(m => {
          
          if(m.pages.map(p=>p.alias).includes(pathname.split('/')[2])){
            m.isOpen = true;
          }
          return(
            <div key={m._id.secondCategory}>
              <div className={styles.secondLevel} onClick={() => openSecondLevel(m._id.secondCategory)}>
                {m._id.secondCategory}
              </div>
              <div className={cn(styles.secondLevelBlock, {
                [styles.secondLevelBlockOpened]: m.isOpen
                // [styles.secondLevelBlockOpened]: true
              })}>{buildThirdLevel(m.pages, menuItem.route)}</div>
            </div>
          );
        }
      )}
      </div>
    );
  };

    const buildThirdLevel = (pages: PageItem[], route: string) => {
    return (
      pages.map(p => (
        <Link key={p._id} href={`/${route}/${p.alias}`}
            className={cn(styles.thirdLevel, {
              [styles.thirdLevelActive]: `/${route}/${p.alias}` == pathname
            })}>
              {p.category}
        </Link>


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