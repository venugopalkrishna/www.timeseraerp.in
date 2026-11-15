import { motion } from 'motion/react';
import './PageHero.css';

/** Shared hero for inner pages. */
export default function PageHero({ eyebrow, title, text }) {
  return (
    <section className="page-hero">
      <div className="glow glow--mint page-hero__glow1" />
      <div className="glow glow--navy page-hero__glow2" />
      <div className="container page-hero__inner">
        <motion.span className="eyebrow" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          {eyebrow}
        </motion.span>
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
          {title}
        </motion.h1>
        {text && (
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}>
            {text}
          </motion.p>
        )}
      </div>
    </section>
  );
}
