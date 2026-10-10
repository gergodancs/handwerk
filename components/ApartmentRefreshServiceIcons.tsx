type IconProps = {
  className?: string;
};

function IconPaintRoller({ className = "h-8 w-8" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="3" width="16" height="6" rx="2" />
      <path d="M18 6h2a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-8v3" />
      <path d="M10 16v5" />
    </svg>
  );
}

function IconLightSwitch({ className = "h-8 w-8" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <line x1="12" y1="7" x2="12" y2="17" />
    </svg>
  );
}

function IconDoorHandle({ className = "h-8 w-8" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 5v14" />
      <circle cx="10.5" cy="12" r="5.25" />
      <circle cx="10.5" cy="12" r="3.25" />
      <circle
        cx="10.5"
        cy="12"
        r="1.1"
        fill="currentColor"
        stroke="none"
      />
      <path d="M10.5 12h7.75" />
      <path d="M18.25 12v3.75" />
      <path d="M16.25 15.75h4" />
    </svg>
  );
}

function IconCeilingLamp({ className = "h-8 w-8" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M6 3h12" />
      <path d="M12 3v3" />
      <path d="M8 6h8l2 5H6l2-5z" />
      <path d="M9 11v1a3 3 0 0 0 6 0v-1" />
      <line x1="8" y1="16" x2="6" y2="18" />
      <line x1="12" y1="16" x2="12" y2="19" />
      <line x1="16" y1="16" x2="18" y2="18" />
    </svg>
  );
}

function IconBlinds({ className = "h-8 w-8" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="3" rx="1" />
      <line x1="4" y1="9" x2="20" y2="9" />
      <line x1="4" y1="13" x2="20" y2="13" />
      <line x1="4" y1="17" x2="20" y2="17" />
      <line x1="6" y1="6" x2="6" y2="20" strokeDasharray="1 1" />
      <line x1="18" y1="6" x2="18" y2="20" strokeDasharray="1 1" />
      <rect x="3" y="20" width="18" height="1.5" rx="0.5" />
    </svg>
  );
}

const REFRESH_SERVICE_ICONS = [
  IconPaintRoller,
  IconLightSwitch,
  IconDoorHandle,
  IconCeilingLamp,
  IconBlinds,
] as const;

export function ApartmentRefreshServiceIcon({ index }: { index: number }) {
  const Icon = REFRESH_SERVICE_ICONS[index % REFRESH_SERVICE_ICONS.length];
  return <Icon />;
}
