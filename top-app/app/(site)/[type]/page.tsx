import { firstLevelMenu } from '@/helpers/helpers';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Courses",
};

export async function generateStaticParams() {
  
  return firstLevelMenu.map(item =>({ type: item.route }));
}


export default function Page({ params }: { params: { type: string } }): JSX.Element {
  return (
    <div>
      {firstLevelMenu.find(item =>item.route == params.type)?.name}
    </div>
  );
}
