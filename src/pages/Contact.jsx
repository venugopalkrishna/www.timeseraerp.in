import { MapPin, Mail, Phone } from 'lucide-react';
import PageHero from '../components/ui/PageHero.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import Card from '../components/ui/Card.jsx';
import ContactForm from '../components/sections/ContactForm.jsx';
import { SITE } from '../data/site.js';
import { telHref } from '../utils/format.js';
import './Contact.css';

export default function Contact() {
  const cards = [
    { icon: MapPin, title: 'Our office', lines: [<span key="a">{SITE.address}</span>] },
    { icon: Mail, title: 'Email us', lines: [<a key="s" href={`mailto:${SITE.emails.support}`}>{SITE.emails.support}</a>, <a key="b" href={`mailto:${SITE.emails.sales}`}>{SITE.emails.sales}</a>] },
    { icon: Phone, title: 'Call us', lines: [<a key="c" href={telHref(SITE.phones.support)}>Support: {SITE.phones.support}</a>, <a key="d" href={telHref(SITE.phones.sales)}>Sales: {SITE.phones.sales}</a>] },
  ];
  return (
    <>
      <PageHero eyebrow="Contact" title={<>We’d love to <em>hear from you.</em></>} text="Visit, email or call — whichever suits you." />
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">
          <div className="grid grid--3">
            {cards.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.1}>
                <Card className="info">
                  <span className="icon-tile"><c.icon size={22} strokeWidth={1.8} /></span>
                  <h3>{c.title}</h3>
                  <div className="info__lines">{c.lines}</div>
                </Card>
              </Reveal>
            ))}
          </div>
          <div className="contact-grid">
            <Reveal><ContactForm /></Reveal>
            <Reveal delay={0.12} className="map">
              <iframe title="Timesera office location" src={SITE.mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
