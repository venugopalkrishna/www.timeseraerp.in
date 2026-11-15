import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowUpRight, Phone, Mail, PlayCircle } from 'lucide-react';
import Button from '../components/ui/Button.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import Card from '../components/ui/Card.jsx';
import Icon from '../components/ui/Icon.jsx';
import Counter from '../components/ui/Counter.jsx';
import Marquee from '../components/ui/Marquee.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import HeroVisual from '../components/sections/HeroVisual.jsx';
import TestimonialSlider from '../components/sections/TestimonialSlider.jsx';
import ContactForm from '../components/sections/ContactForm.jsx';
import { SOFTWARES } from '../data/softwares.js';
import { STATS, PROCESS, HOME_FEATURES } from '../data/content.js';
import { CLIENT_BRANDS, SITE } from '../data/site.js';
import { telHref } from '../utils/format.js';
import './Home.css';

const heroItem = (i) => ({ initial: { opacity: 0, y: 28 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] } });

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="glow glow--mint hero__glow1" />
        <div className="glow glow--navy hero__glow2" />
        <div className="container hero__grid">
          <div className="hero__copy">
            <motion.span className="hero__badge" {...heroItem(0)}><i /> ERP for jewellery & retail</motion.span>
            <motion.h1 {...heroItem(1)}>Software that makes your business <em>sparkle.</em></motion.h1>
            <motion.p {...heroItem(2)}>Cloud billing, inventory and scheme management — installed quickly, loved by your team and trusted by 1000+ owners.</motion.p>
            <motion.div className="hero__buttons" {...heroItem(3)}>
              <Button to="/contact">Get a free demo</Button>
              <Button to="/softwares" variant="ghost" arrow={false}><PlayCircle size={18} /> Explore softwares</Button>
            </motion.div>
            <motion.div className="hero__proof" {...heroItem(4)}>
              <div className="hero__avatars">{['R', 'P', 'A', 'S'].map((c) => <span key={c}>{c}</span>)}</div>
              <span><b>1000+ owners</b> run their daily billing on Timesera</span>
            </motion.div>
          </div>
          <HeroVisual />
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="trusted">
        <p>Trusted by growing brands</p>
        <Marquee items={CLIENT_BRANDS} speed={40} />
      </section>

      {/* SOFTWARES */}
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Softwares" title={<>Eight industries. <em>One platform.</em></>} text="Pick the software built around how you actually sell — from showroom billing to wholesale orders and gold schemes." />
          <div className="grid grid--4">
            {SOFTWARES.map((s, i) => (
              <Reveal key={s.id} delay={(i % 4) * 0.08}>
                <Link to="/softwares" className="soft-link">
                  <Card className="soft-card">
                    <div className="soft-card__top">
                      <span className="icon-tile"><Icon name={s.icon} /></span>
                      <ArrowUpRight className="soft-card__arrow" size={20} />
                    </div>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </Card>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section section--dark stats">
        <div className="glow glow--mint stats__glow" />
        <div className="container grid grid--4 stats__grid">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1} className="stat">
              <strong><Counter value={s.value} suffix={s.suffix} /></strong>
              <span>{s.label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Features" title={<>Everything a counter <em>needs</em></>} text="Powerful tools that stay out of your way." />
          <div className="grid grid--3">
            {HOME_FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 0.08}>
                <Card className="feat">
                  <span className="icon-tile"><Icon name={f.icon} /></span>
                  <div><h3>{f.title}</h3><p>{f.text}</p></div>
                </Card>
              </Reveal>
            ))}
          </div>
          <Reveal className="center-btn"><Button to="/services" variant="ghost">See all 18 capabilities</Button></Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section section--tint">
        <div className="container">
          <SectionHeading eyebrow="Our process" title={<>From box to <em>business growth</em></>} />
          <div className="process">
            <motion.div className="process__line" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }} />
            {PROCESS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.15} className="process__step">
                <span className="process__num">{String(i + 1).padStart(2, '0')}</span>
                <span className="process__dot"><Icon name={p.icon} size={22} /></span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Loved by owners" title={<>Don’t take our <em>word</em> for it</>} />
          <TestimonialSlider />
        </div>
      </section>

      {/* CONTACT */}
      <section className="section home-contact">
        <div className="glow glow--mint home-contact__glow" />
        <div className="container home-contact__grid">
          <Reveal className="home-contact__copy">
            <span className="eyebrow">Contact</span>
            <h2>Let’s talk about your <em>business</em></h2>
            <p>Tell us what you sell and how you bill — we’ll recommend the right software and walk you through a free demo.</p>
            <ul>
              <li><a href={telHref(SITE.phones.sales)}><span className="icon-tile"><Phone size={20} /></span><div><small>Sales</small>{SITE.phones.sales}</div></a></li>
              <li><a href={telHref(SITE.phones.support)}><span className="icon-tile"><Phone size={20} /></span><div><small>Support</small>{SITE.phones.support}</div></a></li>
              <li><a href={`mailto:${SITE.emails.sales}`}><span className="icon-tile"><Mail size={20} /></span><div><small>Email</small>{SITE.emails.sales}</div></a></li>
            </ul>
          </Reveal>
          <Reveal delay={0.12}><ContactForm /></Reveal>
        </div>
      </section>
    </>
  );
}
