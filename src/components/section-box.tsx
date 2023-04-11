import type { ReactNode } from 'react';
import clsx from 'clsx';

interface Props {
  pcMode?: 'full' | 'half';
  title: string;
  children: ReactNode;
}

export default function SectionBox({
  pcMode = 'full',
  title,
  children,
}: Props) {
  return (
    <section
      className={clsx('w-full px-8 mb-4', pcMode === 'half' && 'md:w-1/2')}
    >
      <div className="text-[22px] font-[500] py-2">{title}</div>
      <div className="mt-2">{children}</div>
    </section>
  );
}
