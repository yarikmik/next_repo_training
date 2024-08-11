import { getMenu } from '@/api/menu';

export async function Menu(): Promise<JSX.Element> {
  const menu = await getMenu(0);
  return (
    <div>
      <ul>
        {menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
      </ul>
    </div>

    // <main>
    //     <div>{JSON.stringify(menu)}</div>
    //     <div>{menu.length}</div>
    // </main>
  );
}