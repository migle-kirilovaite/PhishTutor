import ShieldMark from './ShieldMark.jsx';

export default function BrandWordmark({ className = '', textClassName = '', iconClassName = 'h-[1em] w-[1em]' }) {
  return (
    <span className={`inline-flex items-center leading-none ${className}`} aria-label="PhishTutor">
      <span className={textClassName}>Phish</span>
      <ShieldMark className={iconClassName} />
      <span className={textClassName}>Tutor</span>
    </span>
  );
}

