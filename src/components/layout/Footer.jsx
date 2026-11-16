import { Link } from 'react-router-dom';
import { Phone, Mail, ArrowUp } from 'lucide-react';
import Logo from '../ui/Logo.jsx';
import Icon from '../ui/Icon.jsx';
import Marquee from '../ui/Marquee.jsx';
import { NAV_LINKS, SITE, SOCIALS, LEGAL_LINKS } from '../../data/site.js';
import { SOFTWARES } from '../../data/softwares.js';
import { telHref } from '../../utils/format.js';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__ticker">
        <Marquee className="marquee--light" speed={50} items={['Billing', 'Inventory', 'Schemes', 'Barcode', 'RFID', 'WhatsApp', 'Tally', 'E-Invoice']} />
      </div>
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo light />
          <p>Robust solutions for billing and inventory stock management — streamlined operations, unparalleled control.</p>
          <div className="footer__socials">
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label}><Icon name={s.icon} size={18} /></a>
            ))}
          </div>
        </div>
        <div>
          <h4>Explore</h4>
          <ul>{NAV_LINKS.map((l) => <li key={l.to}><Link to={l.to}>{l.label}</Link></li>)}<li><Link to="/contact">Contact</Link></li></ul>
        </div>
        <div>
          <h4>Softwares</h4>
          <ul>{SOFTWARES.slice(0, 6).map((s) => <li key={s.id}><Link to="/softwares">{s.title}</Link></li>)}</ul>
        </div>
        <div>
          <h4>Get in touch</h4>
          <ul className="footer__contact">
            <li><a href={telHref(SITE.phones.support)}><Phone size={15} />Support {SITE.phones.support}</a></li>
            <li><a href={telHref(SITE.phones.sales)}><Phone size={15} />Sales {SITE.phones.sales}</a></li>
            <li><a href={`mailto:${SITE.emails.support}`}><Mail size={15} />{SITE.emails.support}</a></li>
            <li><a href={`mailto:${SITE.emails.sales}`}><Mail size={15} />{SITE.emails.sales}</a></li>
          </ul>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} {SITE.company}. All rights reserved.</span>
        <div className="footer__legal">{LEGAL_LINKS.map((l) => <Link key={l.to} to={l.to}>{l.label}</Link>)}</div>
        <button className="footer__top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Top <ArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
}
