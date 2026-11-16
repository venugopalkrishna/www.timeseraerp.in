import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import PageHero from '../components/ui/PageHero.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import Card from '../components/ui/Card.jsx';
import Icon from '../components/ui/Icon.jsx';
import Marquee from '../components/ui/Marquee.jsx';
import CTA from '../components/sections/CTA.jsx';
import { PROJECTS, PORTFOLIO_FILTERS } from '../data/content.js';
import { CLIENT_BRANDS } from '../data/site.js';
import './Portfolio.css';

export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  const shown = PROJECTS.filter((p) => filter === 'All' || p.category === filter);

  return (
    <>
      <PageHero eyebrow="Portfolio" title={<>Businesses growing on <em>Timesera.</em></>} text="Sample case studies — swap in your real clients and numbers." />
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">
          <div className="center-row">
            <div className="filters">
              {PORTFOLIO_FILTERS.map((f) => (
                <button key={f} className={filter === f ? 'is-active' : ''} onClick={() => setFilter(f)}>
                  {filter === f && <motion.i className="pill" layoutId="pill-port" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />}
                  <span>{f}</span>
                </button>
              ))}
            </div>
          </div>
          <motion.div layout className="grid grid--3">
            <AnimatePresence mode="popLayout">
              {shown.map((p) => (
                <motion.div layout key={p.name} initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.92 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}>
                  <Card className="project">
                    <div className="project__cover">
                      <span className="project__ring" />
                      <Icon name={p.icon} size={44} />
                    </div>
                    <span className="project__cat">{p.category}</span>
                    <h3>{p.name}</h3>
                    <p>{p.result}</p>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <section className="section section--tint" style={{ paddingBottom: 70 }}>
        <div className="container"><SectionHeading eyebrow="Our clients" title={<>Brands that <em>trust us</em></>} /></div>
        <Marquee items={CLIENT_BRANDS} speed={36} />
      </section>
      <CTA />
    </>
  );
}
