const iconClass = "h-8 w-8";

export function PeopleIcon() {
  return (
    <svg className={iconClass} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="10" r="4" />
      <circle cx="22" cy="12" r="3.5" />
      <path d="M4 26c0-4 4-7 8-7s8 3 8 7M18 26c0-3 2.5-5.5 6-5.5" strokeLinecap="round" />
    </svg>
  );
}

export function HospitalIcon() {
  return (
    <svg className={iconClass} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="6" y="8" width="20" height="20" rx="2" />
      <path d="M16 12v8M12 16h8" strokeLinecap="round" />
      <path d="M6 14h4M22 14h4" />
    </svg>
  );
}

export function GraduationIcon() {
  return (
    <svg className={iconClass} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 14L16 8l12 6-12 6-12-6z" />
      <path d="M8 17v5c0 2 4 4 8 4s8-2 8-4v-5" />
      <path d="M26 14v8" strokeLinecap="round" />
    </svg>
  );
}

export function BriefcaseIcon() {
  return (
    <svg className={iconClass} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="4" y="12" width="24" height="14" rx="2" />
      <path d="M12 12V10a4 4 0 018 0v2" />
      <path d="M4 18h24" />
    </svg>
  );
}

export function PhoneIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

export function EmailIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 7l10 7 10-7" />
    </svg>
  );
}

export function LocationIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
