import { Link } from 'react-router-dom';
import './Logo.css';

export function LogoMark({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden="true">
      <rect width="40" height="40" rx="11" fill="#52bd91" />
      <path d="M26 0h3a11 11 0 0 1 11 11v3z" fill="#eafaf3" />
      <text x="20" y="29" textAnchor="middle" fontFamily="Georgia, serif" fontWeight="700" fontSize="25" fill="#0f0847">T</text>
    </svg>
  );
}

/** Logo lockup. `light` renders the wordmark in white for dark backgrounds. */
export default function Logo({ light = false }) {
  return (
    <Link to="/" className={`logo ${light ? 'logo--light' : ''}`} aria-label="Timesera ERP – home">
      <LogoMark />
      <span className="logo__word">
        <b>T</b>IMES<i>ERA</i>
        <small>ERP</small>
      </span>
    </Link>
  );
}
