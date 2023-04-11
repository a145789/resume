import { IconProps } from '@/interface';

export default function EducationalIcon({
  size = '24',
  fill = '#333',
  className,
  onClick,
}: IconProps) {
  return (
    <svg
      onClick={onClick}
      className={className}
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 17.4L23.0222 9L44.0444 17.4L23.0222 25.8L2 17.4Z"
        fill="none"
        stroke={fill}
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M44.0444 17.51V26.7332"
        stroke={fill}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.5557 21.8252V34.2666C11.5557 34.2666 16.3658 38.9999 23.0224 38.9999C29.679 38.9999 34.4891 34.2666 34.4891 34.2666V21.8252"
        stroke={fill}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
