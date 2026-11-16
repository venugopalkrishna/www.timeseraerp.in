import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import PageHero from '../components/ui/PageHero.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import Card from '../components/ui/Card.jsx';
import Icon from '../components/ui/Icon.jsx';
import CTA from '../components/sections/CTA.jsx';
import { ABOUT_STORY, VALUES, MILESTONES, TEAM } from '../data/content.js';
import './About.css';

/** One word that brightens as the paragraph scrolls through the viewport. */
function Word({ word, range, progress }) {
  const opacity = useTransform(progress, range, [0.18, 1]);
  return <motion.span style={{ opacity }}>{word} </motion.span>;
}

function StoryText() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.55'] });
  const words = ABOUT_STORY.split(' ');
  return (
    <p className="story" ref={ref}>
      {words.map((w, i) => <Word key={i} word={w} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]} />)}
    </p>
  );
}

export default function About() {
  return (
    <>
      <PageHero eyebrow="About us" title={<>We make every owner’s <em>business better.</em></>} text="Quality, reliability and integrity — the three values we preach and practise." />

      <section className="section"><div className="container container--narrow"><StoryText /></div></section>

      <section className="section section--tint">
        <div className="container">
          <SectionHeading eyebrow="Our values" title={<>What we <em>stand on</em></>} />
          <div className="grid grid--3">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1}>
                <Card className="value">
                  <span className="value__num">0{i + 1}</span>
                  <span className="icon-tile"><Icon name={v.icon} /></span>
                  <h3>{v.title}</h3><p>{v.text}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Our journey" title={<>How we <em>got here</em></>} text="Sample milestones — edit with your real story." />
          <div className="timeline">
            <motion.span className="timeline__line" initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ duration: 1.4, ease: 'easeOut' }} />
            {MILESTONES.map((m, i) => (
              <Reveal key={m.title} delay={0.05} className={`timeline__item ${i % 2 ? 'is-right' : ''}`}>
                <span className="timeline__dot" />
                <Card className="timeline__card"><small>0{i + 1}</small><h3>{m.title}</h3><p>{m.text}</p></Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <SectionHeading eyebrow="The team" title={<>People behind <em>the product</em></>} text="Placeholders — add real names and photos." />
          <div className="grid grid--4">
            {TEAM.map((t, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <Card className="member">
                  <span className="member__avatar">{t.role[0]}</span>
                  <h3>{t.name}</h3><p>{t.role}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
