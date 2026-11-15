import { Sparkle } from 'lucide-react';
import './Marquee.css';

/** Infinite horizontal ticker. Pauses on hover. */
export default function Marquee({ items, speed = 38, className = '' }) {
  const row = [...items, ...items];
  return (
    <div className={`marquee ${className}`}>
      <div className="marquee__track" style={{ animationDuration: `${speed}s` }}>
        {[0, 1].map((k) => (
          <div className="marquee__row" key={k} aria-hidden={k === 1}>
            {row.map((item, i) => (
              <span className="marquee__item" key={i}>
                {item}
                <Sparkle size={14} />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
