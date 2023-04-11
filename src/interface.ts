import type { MouseEventHandler } from 'react';

export interface IconProps {
  size?: string | number;
  fill?: string;
  className?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
}
