import { motion } from 'motion/react';
import { Gem, Cloud, TrendingUp, BadgeCheck } from 'lucide-react';
import './HeroVisual.css';

const lines = [['Gold chain 22K · 18.4g', '₹1,04,200'], ['Diamond studs', '₹48,500'], ['Making charges', '₹6,300']];
const float = (d) => ({ y: [0, -12, 0], transition: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: d } });

/** Animated product mock-up shown in the home hero: a bill card with floating status chips. */
export default function HeroVisual() {
  return (
    <div className="hv">
      <div className="hv__panel">
        <div className="hv__ring hv__ring--1" /><div className="hv__ring hv__ring--2" />
        <motion.div className="hv__bill" animate={float(0)} initial={{ opacity: 0, y: 40, rotate: 4 }} whileInView={{ opacity: 1, rotate: -2 }} transition={{ duration: 0.9 }}>
          <div className="hv__bill-head"><b>TIMESERA ERP</b><span><BadgeCheck size={14} /> Paid</span></div>
          <small>Bill #2048</small>
          {lines.map(([a, b], i) => (
            <motion.div className="hv__line" key={a} initial={{ opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 + i * 0.18 }}>
              <span>{a}</span><span>{b}</span>
            </motion.div>
          ))}
          <div className="hv__total"><span>Total</span><b>₹1,59,000</b></div>
          <div className="hv__barcode" />
        </motion.div>
      </div>
      <motion.div className="hv__chip hv__chip--a" animate={float(1)}><span className="hv__chip-icon"><Gem size={18} /></span>Tag-wise stock</motion.div>
      <motion.div className="hv__chip hv__chip--b" animate={float(2.2)}><span className="hv__chip-icon"><Cloud size={18} /></span>Synced · 12 branches</motion.div>
      <motion.div className="hv__chip hv__chip--c" animate={float(3.4)}><span className="hv__chip-icon"><TrendingUp size={18} /></span>Sales +24%</motion.div>
    </div>
  );
}
