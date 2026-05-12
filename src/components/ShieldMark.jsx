export default function ShieldMark({ className = 'h-5 w-5' }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M12 2.25 4.75 5.1v5.35c0 5.08 3.22 9.71 7.25 11.55 4.03-1.84 7.25-6.47 7.25-11.55V5.1L12 2.25Z"
        fill="currentColor"
      />
      <path
        d="M12 5.6 8.95 6.8v3.12c0 2.61 1.54 4.98 3.05 6.06 1.51-1.08 3.05-3.45 3.05-6.06V6.8L12 5.6Z"
        fill="#fff"
        fillOpacity="0.88"
      />
    </svg>
  );
}

