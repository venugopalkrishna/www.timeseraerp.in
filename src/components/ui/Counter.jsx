import { useEffect, useRef, useState } from 'react';
import { animate, useInView } from 'motion/react';

/** Counts up to `value` when scrolled into view. */
export default function Counter({ value, suffix = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, { duration: 1.8, ease: [0.22, 1, 0.36, 1], onUpdate: (v) => setN(Math.round(v)) });
    return () => controls.stop();
  }, [inView, value]);
  return <span ref={ref}>{n.toLocaleString('en-IN')}{suffix}</span>;
}
