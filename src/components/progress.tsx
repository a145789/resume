import type { ReactNode } from 'react';
import { Circle } from 'rc-progress';

interface Props {
  percent?: number;
  children: ReactNode;
}

export default function Progress({ percent = 0, children }: Props) {
  return (
    <div className="flex flex-col items-center p-6">
      <div className="relative w-20 h-20">
        <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-[18px]">
          {percent}
        </span>
        <Circle strokeWidth={6} percent={percent} />
      </div>
      <div className="mt-2">{children}</div>
    </div>
  );
}
