import { getMenu } from '../../../api/menu';
// import { getMenu } from '../api/menu';

export async function Menu(): Promise<JSX.Element> {
  const menu = await getMenu(0);
  return (
    <main>
        {/* <div>{JSON.stringify(menu)}</div> */}
        <div>{menu.length}</div>
    </main>
  );
}