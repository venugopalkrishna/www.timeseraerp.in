import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Check, Users } from 'lucide-react';
import PageHero from '../components/ui/PageHero.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import Card from '../components/ui/Card.jsx';
import Icon from '../components/ui/Icon.jsx';
import Button from '../components/ui/Button.jsx';
import CTA from '../components/sections/CTA.jsx';
import { SOFTWARES, SOFTWARE_FILTERS, PRICING } from '../data/softwares.js';
import { formatINR } from '../utils/format.js';
import './Softwares.css';

function Filters({ items, value, onChange, id }) {
  return (
    <div className="filters" role="tablist">
      {items.map((f) => (
        <button key={f} role="tab" aria-selected={value === f} className={value === f ? 'is-active' : ''} onClick={() => onChange(f)}>
          {value === f && <motion.i className="pill" layoutId={`pill-${id}`} transition={{ type: 'spring', stiffness: 400, damping: 32 }} />}
          <span>{f}</span>
        </button>
      ))}
    </div>
  );
}

export default function Softwares() {
  const [filter, setFilter] = useState('All');
  const [tab, setTab] = useState(Object.keys(PRICING)[0]);
  const shown = SOFTWARES.filter((s) => filter === 'All' || s.group === filter);

  return (
    <>
      <PageHero eyebrow="Softwares" title={<>Built for how you <em>actually sell.</em></>} text="Jewellery solutions and ready-made software for other industries." />

      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">
          <div className="center"><Filters items={SOFTWARE_FILTERS} value={filter} onChange={setFilter} id="soft" /></div>
          <motion.div layout className="grid grid--2 soft-grid">
            <AnimatePresence mode="popLayout">
              {shown.map((s) => (
                <motion.div layout key={s.id} initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.94 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}>
                  <Card className="sw">
                    <span className="icon-tile"><Icon name={s.icon} /></span>
                    <div>
                      <h3>{s.title}</h3>
                      <p>{s.text}</p>
                      <Link to="/contact" className="sw__link">Request demo →</Link>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <SectionHeading eyebrow="Pricing" title={<>Pick your industry, <em>pick your tier</em></>} text="One-time pricing plus applicable tax." />
          <div className="center"><Filters items={Object.keys(PRICING)} value={tab} onChange={setTab} id="price" /></div>
          <AnimatePresence mode="wait">
            <motion.div key={tab} className="grid grid--3 plans" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4 }}>
              {PRICING[tab].map((p) => (
                <Card key={p.name} className={`plan ${p.popular ? 'plan--pop' : ''}`}>
                  {p.popular && <span className="plan__badge">Most popular</span>}
                  <h3>{p.name}</h3>
                  <div className="plan__price"><strong>{formatINR(p.price)}</strong><small>+ tax</small></div>
                  <ul>{p.features.map((f) => <li key={f}><Check size={16} />{f}</li>)}</ul>
                  <Button to="/contact" variant={p.popular ? 'accent' : 'primary'} className="plan__btn">Choose {p.name}</Button>
                </Card>
              ))}
            </motion.div>
          </AnimatePresence>
          <Reveal className="plans__note"><Users size={16} /> 300+ happy clients on this plan. Perks listed are indicative.</Reveal>
        </div>
      </section>
      <CTA />
    </>
  );
}
