import PageHero from '../components/ui/PageHero.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import Card from '../components/ui/Card.jsx';
import { Star } from 'lucide-react';
import TestimonialSlider from '../components/sections/TestimonialSlider.jsx';
import CTA from '../components/sections/CTA.jsx';
import { TESTIMONIALS } from '../data/content.js';
import './Testimonials.css';

export default function Testimonials() {
  return (
    <>
      <PageHero eyebrow="Testimonials" title={<>Kind words from <em>real counters.</em></>} text="Sample reviews — replace with your customers’ own words." />
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container"><TestimonialSlider /></div>
      </section>
      <section className="section section--tint">
        <div className="container reviews">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 0.08} className="reviews__item">
              <Card className="review">
                <div className="review__stars">{Array.from({ length: 5 }).map((_, k) => <Star key={k} size={14} fill="currentColor" />)}</div>
                <p>“{t.quote}”</p>
                <div className="review__who"><span>{t.name[0]}</span><div><strong>{t.name}</strong><small>{t.role}</small></div></div>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
