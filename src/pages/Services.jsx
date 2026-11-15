import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Check } from 'lucide-react';
import PageHero from '../components/ui/PageHero.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import Card from '../components/ui/Card.jsx';
import Icon from '../components/ui/Icon.jsx';
import Button from '../components/ui/Button.jsx';
import CTA from '../components/sections/CTA.jsx';
import { SERVICES, CAPABILITIES } from '../data/services.js';
import './Services.css';

export default function Services() {
  const [active, setActive] = useState(SERVICES[0].id);
  const current = SERVICES.find((s) => s.id === active);

  return (
    <>
      <PageHero eyebrow="Services" title={<>Stack up your growth, <em>one layer at a time.</em></>} text="Everything from software to training — pick a service to see what’s included." />

      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container svc">
          <Reveal className="svc__tabs" role="tablist">
            {SERVICES.map((s, i) => (
              <button key={s.id} role="tab" aria-selected={active === s.id} className={`svc__tab ${active === s.id ? 'is-active' : ''}`} onClick={() => setActive(s.id)}>
                {active === s.id && <motion.i layoutId="svc-bg" className="svc__tab-bg" transition={{ type: 'spring', stiffness: 380, damping: 34 }} />}
                <span className="svc__tab-num">0{i + 1}</span>
                <span className="icon-tile"><Icon name={s.icon} size={20} /></span>
                <span className="svc__tab-title">{s.title}</span>
              </button>
            ))}
          </Reveal>

          <div className="svc__panel">
            <AnimatePresence mode="wait">
              <motion.div key={current.id} className="svc__content" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}>
                <div className="svc__bigicon"><Icon name={current.icon} size={44} /></div>
                <h2>{current.title}</h2>
                <p>{current.text}</p>
                <ul>
                  {current.points.map((p, i) => (
                    <motion.li key={p} initial={{ opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 + i * 0.1 }}>
                      <span><Check size={14} /></span>{p}
                    </motion.li>
                  ))}
                </ul>
                <Button to="/contact">Talk to us</Button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <SectionHeading eyebrow="Features" title={<>18 capabilities, <em>one platform</em></>} text="Everything your counters, back-office and customers need." />
          <div className="caps">
            {CAPABILITIES.map((c, i) => (
              <Reveal key={c.title} delay={(i % 6) * 0.05}>
                <Card className="cap"><span className="icon-tile"><Icon name={c.icon} size={20} /></span><h3>{c.title}</h3></Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
