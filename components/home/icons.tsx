import type { IconName } from "@/data/home";
import type { ReactElement, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
};

const baseProps = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  strokeWidth: 1.7,
  viewBox: "0 0 24 24",
};

const icons: Record<IconName, (props: SVGProps<SVGSVGElement>) => ReactElement> = {
  layers: (props) => (
    <svg {...baseProps} {...props}>
      <path d="M12 4 4 8l8 4 8-4-8-4Z" />
      <path d="m4 12 8 4 8-4" />
      <path d="m4 16 8 4 8-4" />
    </svg>
  ),
  spark: (props) => (
    <svg {...baseProps} {...props}>
      <path d="m12 3 1.8 4.6L18 9.4l-4.2 1.6L12 16l-1.8-5-4.2-1.6 4.2-1.8L12 3Z" />
      <path d="M5 4v3" />
      <path d="M19 17v3" />
      <path d="M3 10h3" />
      <path d="M18 10h3" />
    </svg>
  ),
  nodes: (props) => (
    <svg {...baseProps} {...props}>
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <circle cx="12" cy="18" r="2.5" />
      <path d="M8.3 7.5 10.7 15" />
      <path d="M15.7 7.5 13.3 15" />
      <path d="M8.5 6h7" />
    </svg>
  ),
  cloud: (props) => (
    <svg {...baseProps} {...props}>
      <path d="M8 18h8a4 4 0 0 0 .3-8 5.5 5.5 0 0 0-10.7 1.7A3.5 3.5 0 0 0 8 18Z" />
    </svg>
  ),
  code: (props) => (
    <svg {...baseProps} {...props}>
      <path d="m9 8-4 4 4 4" />
      <path d="m15 8 4 4-4 4" />
      <path d="m13 5-2 14" />
    </svg>
  ),
  monitor: (props) => (
    <svg {...baseProps} {...props}>
      <rect x="3" y="5" width="18" height="12" rx="2" />
      <path d="M8 21h8" />
      <path d="M12 17v4" />
    </svg>
  ),
  phone: (props) => (
    <svg {...baseProps} {...props}>
      <rect x="7" y="3" width="10" height="18" rx="2.5" />
      <path d="M11 6h2" />
      <path d="M11 17h2" />
    </svg>
  ),
  bot: (props) => (
    <svg {...baseProps} {...props}>
      <rect x="5" y="8" width="14" height="10" rx="3" />
      <path d="M12 4v4" />
      <circle cx="9" cy="13" r="1" />
      <circle cx="15" cy="13" r="1" />
      <path d="M9 17h6" />
    </svg>
  ),
  pen: (props) => (
    <svg {...baseProps} {...props}>
      <path d="m4 20 4.5-1 9-9a2.1 2.1 0 0 0-3-3l-9 9L4 20Z" />
      <path d="m13.5 7.5 3 3" />
    </svg>
  ),
  compass: (props) => (
    <svg {...baseProps} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m14.8 9.2-2 5.6-5.6 2 2-5.6 5.6-2Z" />
    </svg>
  ),
  heart: (props) => (
    <svg {...baseProps} {...props}>
      <path d="M12 20s-6.5-4.3-6.5-9a3.8 3.8 0 0 1 6.5-2.5A3.8 3.8 0 0 1 18.5 11c0 4.7-6.5 9-6.5 9Z" />
      <path d="M9.5 12h5" />
      <path d="M12 9.5v5" />
    </svg>
  ),
  bank: (props) => (
    <svg {...baseProps} {...props}>
      <path d="M3 9 12 4l9 5" />
      <path d="M5 10v8" />
      <path d="M10 10v8" />
      <path d="M14 10v8" />
      <path d="M19 10v8" />
      <path d="M3 20h18" />
    </svg>
  ),
  factory: (props) => (
    <svg {...baseProps} {...props}>
      <path d="M4 20V9l6 3V9l6 3V6h4v14H4Z" />
      <path d="M8 20v-4" />
    </svg>
  ),
  bag: (props) => (
    <svg {...baseProps} {...props}>
      <path d="M6 8h12l-1 11H7L6 8Z" />
      <path d="M9 8a3 3 0 0 1 6 0" />
    </svg>
  ),
  truck: (props) => (
    <svg {...baseProps} {...props}>
      <path d="M3 7h11v8H3Z" />
      <path d="M14 10h3l3 3v2h-6" />
      <circle cx="8" cy="18" r="2" />
      <circle cx="18" cy="18" r="2" />
    </svg>
  ),
  cap: (props) => (
    <svg {...baseProps} {...props}>
      <path d="m3 10 9-4 9 4-9 4-9-4Z" />
      <path d="M7 12.5V16c0 1.6 2.2 3 5 3s5-1.4 5-3v-3.5" />
    </svg>
  ),
  building: (props) => (
    <svg {...baseProps} {...props}>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M9 7h1" />
      <path d="M14 7h1" />
      <path d="M9 11h1" />
      <path d="M14 11h1" />
      <path d="M11 21v-4h2v4" />
    </svg>
  ),
  shield: (props) => (
    <svg {...baseProps} {...props}>
      <path d="M12 3 5 6v5c0 4.5 2.8 7.3 7 10 4.2-2.7 7-5.5 7-10V6l-7-3Z" />
      <path d="m9.5 12 1.6 1.6 3.4-3.6" />
    </svg>
  ),
  chip: (props) => (
    <svg {...baseProps} {...props}>
      <rect x="7" y="7" width="10" height="10" rx="2" />
      <path d="M9 1v4" />
      <path d="M15 1v4" />
      <path d="M9 19v4" />
      <path d="M15 19v4" />
      <path d="M1 9h4" />
      <path d="M1 15h4" />
      <path d="M19 9h4" />
      <path d="M19 15h4" />
    </svg>
  ),
  database: (props) => (
    <svg {...baseProps} {...props}>
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
      <path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
    </svg>
  ),
};

export function Icon({ name, ...props }: IconProps) {
  const Component = icons[name];
  return <Component aria-hidden="true" {...props} />;
}
