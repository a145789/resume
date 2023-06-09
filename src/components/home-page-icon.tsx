import { IconProps } from '@/interface';

export default function HomePageIcon({
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
        stroke={fill}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 23C26.7614 23 29 20.7614 29 18C29 15.2386 26.7614 13 24 13C21.2386 13 19 15.2386 19 18C19 20.7614 21.2386 23 24 23Z"
        fill="none"
        stroke={fill}
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M10.022 38.332C10.3657 33.1206 14.7016 29 20 29H28C33.2914 29 37.6229 33.1097 37.9767 38.3113"
        stroke={fill}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
