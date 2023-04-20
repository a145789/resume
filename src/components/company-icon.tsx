import { IconProps } from '@/interface';

export default function CompanyIcon({
  size = '24',
  fill = '#333',
  className,
  onClick,
}: IconProps) {
  return (
    <svg
      className={className}
      onClick={onClick}
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 42H44"
        stroke={fill}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="8"
        y="26"
        width="8"
        height="16"
        rx="2"
        fill="none"
        stroke={fill}
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M12 34H13"
        stroke={fill}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="16"
        y="4"
        width="24"
        height="38"
        rx="2"
        fill="none"
        stroke={fill}
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <rect x="22" y="10" width="4" height="4" fill={fill} />
      <rect x="30" y="10" width="4" height="4" fill={fill} />
      <rect x="22" y="17" width="4" height="4" fill={fill} />
      <rect x="30" y="17" width="4" height="4" fill={fill} />
      <rect x="30" y="24" width="4" height="4" fill={fill} />
      <rect x="30" y="31" width="4" height="4" fill={fill} />
    </svg>
  );
}