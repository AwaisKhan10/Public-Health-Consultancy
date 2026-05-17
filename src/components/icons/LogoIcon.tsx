export function LogoIcon({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle cx="24" cy="24" r="22" className="fill-phc-teal" />
      <path
        d="M24 14c-2 0-3.5 1.5-3.5 3.5 0 2.5 3.5 6 3.5 10s-1.5 7.5-3.5 10"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M14 26h4l2-4 3 8 2-6 2 2h6"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
