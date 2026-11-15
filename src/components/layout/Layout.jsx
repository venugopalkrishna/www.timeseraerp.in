import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'motion/react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import './Layout.css';

export default function Layout() {
  const { pathname } = useLocation();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30 });

  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);

  return (
    <>
      <motion.div className="progress" style={{ scaleX }} />
      <Navbar />
      <motion.main key={pathname} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}>
        <Outlet />
      </motion.main>
      <Footer />
    </>
  );
}
