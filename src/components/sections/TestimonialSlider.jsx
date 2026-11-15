import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '../../data/content.js';
import './TestimonialSlider.css';

export default function TestimonialSlider() {
  const [[index, dir], setState] = useState([0, 1]);
  const [paused, setPaused] = useState(false);
  const go = (d) => setState(([i]) => [(i + d + TESTIMONIALS.length) % TESTIMONIALS.length, d]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => go(1), 6500);
    return () => clearInterval(t);
  }, [paused]);

  const t = TESTIMONIALS[index];
  return (
    <div className="slider" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="slider__card">
        <Quote className="slider__quote" size={54} />
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={index} custom={dir}
            variants={{ enter: (d) => ({ opacity: 0, x: 40 * d }), center: { opacity: 1, x: 0 }, exit: (d) => ({ opacity: 0, x: -40 * d }) }}
            initial="enter" animate="center" exit="exit" transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="slider__text">{t.quote}</p>
            <div className="slider__who">
              <span className="slider__avatar">{t.name[0]}</span>
              <div><strong>{t.name}</strong><small>{t.role}</small></div>
              <div className="slider__stars">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={16} fill="currentColor" />)}</div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="slider__nav">
        <button onClick={() => go(-1)} aria-label="Previous review"><ChevronLeft size={20} /></button>
        <div className="slider__dots">
          {TESTIMONIALS.map((_, i) => (
            <button key={i} className={i === index ? 'is-active' : ''} onClick={() => setState([i, i > index ? 1 : -1])} aria-label={`Review ${i + 1}`} />
          ))}
        </div>
        <button onClick={() => go(1)} aria-label="Next review"><ChevronRight size={20} /></button>
      </div>
    </div>
  );
}
