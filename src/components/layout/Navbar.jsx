import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import Logo from '../ui/Logo.jsx';
import Button from '../ui/Button.jsx';
import { NAV_LINKS } from '../../data/site.js';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; }, [open]);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__bar">
        <Logo />
        <nav className="nav__links" aria-label="Main">
          {NAV_LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} className="nav__link">
              {({ isActive }) => (
                <>
                  <span>{l.label}</span>
                  {isActive && <motion.i layoutId="nav-underline" className="nav__underline" transition={{ type: 'spring', stiffness: 380, damping: 30 }} />}
                </>
              )}
            </NavLink>
          ))}
        </nav>
        <div className="nav__cta"><Button to="/contact" variant="primary">Let’s talk</Button></div>
        <button className="nav__toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div className="nav__drawer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="nav__drawer-list" initial="hide" animate="show" variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } } }}>
              {[...NAV_LINKS, { label: 'Contact', to: '/contact' }].map((l) => (
                <motion.div key={l.to} variants={{ hide: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0 } }}>
                  <NavLink to={l.to} end={l.to === '/'} className={({ isActive }) => `nav__drawer-link ${isActive ? 'is-active' : ''}`}>{l.label}</NavLink>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
