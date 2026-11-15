import { motion } from 'motion/react';
import Button from '../ui/Button.jsx';
import Reveal from '../ui/Reveal.jsx';
import './CTA.css';

export default function CTA({ title = <>Ready to make your business <em>sparkle?</em></>, text = 'Book a free demo and see Timesera on your own workflow.' }) {
  return (
    <section className="section cta-wrap">
      <div className="container">
        <Reveal>
          <div className="cta">
            <motion.div className="cta__orb cta__orb--1" animate={{ x: [0, 40, 0], y: [0, 24, 0] }} transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }} />
            <motion.div className="cta__orb cta__orb--2" animate={{ x: [0, -30, 0], y: [0, -30, 0] }} transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }} />
            <h2>{title}</h2>
            <p>{text}</p>
            <div className="cta__buttons">
              <Button to="/contact" variant="accent">Book a free demo</Button>
              <Button to="/softwares" variant="light" arrow={false}>View softwares</Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
