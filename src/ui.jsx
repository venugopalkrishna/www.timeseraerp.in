import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, animate, motion, useInView, useMotionValue, useScroll, useSpring, useTransform, useVelocity } from "motion/react";
import { ArrowLeft, ArrowRight, Check, Send } from "lucide-react";
import { PRODUCTS } from "./data";

export const COL = ["var(--yel)", "var(--mint)", "var(--sky)", "var(--pink)", "var(--lil)", "var(--red)"];

export function Cursor() {
  const x = useMotionValue(-100), y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40 }), sy = useSpring(y, { stiffness: 500, damping: 40 });
  const [big, setBig] = useState(false);
  useEffect(() => {
    const m = (e) => { x.set(e.clientX); y.set(e.clientY); setBig(!!e.target.closest?.("a,button,[data-hover]")); };
    addEventListener("mousemove", m);
    return () => removeEventListener("mousemove", m);
  }, []);
  return <motion.div className="cursor" style={{ x: sx, y: sy }} animate={{ scale: big ? 2.8 : 1 }} />;
}
export function Magnetic({ children }) {
  const ref = useRef(null);
  const x = useMotionValue(0), y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 14 }), sy = useSpring(y, { stiffness: 220, damping: 14 });
  return (
    <motion.span ref={ref} style={{ x: sx, y: sy, display: "inline-block" }}
      onMouseMove={(e) => { const r = ref.current.getBoundingClientRect(); x.set((e.clientX - r.left - r.width / 2) * 0.35); y.set((e.clientY - r.top - r.height / 2) * 0.35); }}
      onMouseLeave={() => { x.set(0); y.set(0); }}>{children}</motion.span>
  );
}
export const Btn = ({ to, children, variant = "ink" }) => (
  <Magnetic><Link to={to} className={`btn ${variant}`} data-hover>{children}</Link></Magnetic>
);
export const Split = ({ text, delay = 0 }) => (
  <span aria-label={text}>{text.split(" ").map((w, i) => (
    <span className="w" key={i} aria-hidden>
      <motion.span style={{ display: "inline-block" }} initial={{ y: "115%", rotate: 8 }} whileInView={{ y: 0, rotate: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.75, delay: delay + i * 0.07, ease: [0.2, 0.8, 0.2, 1] }}>{w}&nbsp;</motion.span>
    </span>))}</span>
);
export const Fade = ({ children, delay = 0, className = "", y = 40 }) => (
  <motion.div className={className} initial={{ opacity: 0, y }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, delay }}>{children}</motion.div>
);
export const Head = ({ eyebrow, title, sub }) => (
  <div className="head"><span className="eyebrow">{eyebrow}</span><h2><Split text={title} /></h2>{sub && <Fade y={20}><p>{sub}</p></Fade>}</div>
);
export const PageTitle = ({ eyebrow, title, sub }) => (
  <header className="wrap ptitle"><motion.span className="eyebrow" initial={{ scale: 0, rotate: -12 }} animate={{ scale: 1, rotate: -3 }} transition={{ type: "spring", delay: 0.9 }}>{eyebrow}</motion.span>
    <h1><Split text={title} delay={0.9} /></h1><Fade y={20}><p>{sub}</p></Fade></header>
);
export function Count({ to, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [v, setV] = useState(0);
  useEffect(() => { if (!inView) return; const c = animate(0, to, { duration: 1.6, ease: "easeOut", onUpdate: (x) => setV(Math.round(x)) }); return () => c.stop(); }, [inView, to]);
  return <span ref={ref}>{v.toLocaleString("en-IN")}{suffix}</span>;
}
export function Tilt({ children, className = "" }) {
  const rx = useMotionValue(0), ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 200, damping: 20 }), sry = useSpring(ry, { stiffness: 200, damping: 20 });
  return (
    <motion.div className={className} style={{ rotateX: srx, rotateY: sry, transformPerspective: 900 }}
      onMouseMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); ry.set(((e.clientX - r.left) / r.width - 0.5) * 14); rx.set(-((e.clientY - r.top) / r.height - 0.5) * 14); }}
      onMouseLeave={() => { rx.set(0); ry.set(0); }}>{children}</motion.div>
  );
}
export function Marquee({ items, rev, className = "" }) {
  const { scrollY } = useScroll();
  const sv = useSpring(useVelocity(scrollY), { stiffness: 100, damping: 30 });
  const skew = useTransform(sv, [-2000, 2000], [-9, 9]);
  return (
    <motion.div className={`marquee ${className}`} style={{ skewX: skew }}>
      <div className={`track ${rev ? "rev" : ""}`}>{[...items, ...items, ...items, ...items].map((t, i) => <span key={i}>{t}<i>✺</i></span>)}</div>
    </motion.div>
  );
}
export const Sticker = ({ children, className = "", rotate = 0 }) => (
  <motion.div className={`sticker ${className}`} drag dragMomentum whileHover={{ scale: 1.12, rotate: rotate + 8 }} whileDrag={{ scale: 1.2, cursor: "grabbing" }}
    initial={{ scale: 0, rotate: rotate - 40 }} animate={{ scale: 1, rotate }} transition={{ type: "spring", stiffness: 160, damping: 10, delay: 1.2 }} data-hover>{children}</motion.div>
);
export function Tabs({ items, value, onChange, id }) {
  return (
    <div className="tabs">{items.map((t) => (
      <button key={t} onClick={() => onChange(t)} className={value === t ? "on" : ""} data-hover>
        {value === t && <motion.i layoutId={id} className="pillbg" transition={{ type: "spring", stiffness: 400, damping: 30 }} />}<span>{t}</span></button>))}</div>
  );
}
const variants = { in: (d) => ({ x: d * 140, opacity: 0, rotate: d * 4 }), mid: { x: 0, opacity: 1, rotate: 0 }, out: (d) => ({ x: -d * 140, opacity: 0, rotate: -d * 4 }) };
export function Slider({ items }) {
  const [[i, d], set] = useState([0, 1]);
  const n = items.length;
  const go = (k) => set([(i + k + n) % n, k]);
  useEffect(() => { const t = setInterval(() => set(([v]) => [(v + 1) % n, 1]), 6500); return () => clearInterval(t); }, [n]);
  const t = items[i];
  return (
    <div className="slider">
      <AnimatePresence mode="wait" custom={d}>
        <motion.article key={i} className="slide card" custom={d} variants={variants} initial="in" animate="mid" exit="out" transition={{ duration: 0.4 }}
          drag="x" dragConstraints={{ left: 0, right: 0 }} dragElastic={0.5} onDragEnd={(_, info) => Math.abs(info.offset.x) > 80 && go(info.offset.x < 0 ? 1 : -1)}>
          <span className="qm">“</span><p>{t.text}</p>
          <div className="who"><span className="avatar" style={{ background: COL[i % 6] }}>{t.name[0]}</span><div><b>{t.name}</b><small>{t.role}</small></div><span className="stars">★★★★★</span></div>
        </motion.article>
      </AnimatePresence>
      <div className="ctrl"><button onClick={() => go(-1)} aria-label="Previous" data-hover><ArrowLeft /></button>
        <b>0{i + 1} / 0{n}</b><button onClick={() => go(1)} aria-label="Next" data-hover><ArrowRight /></button></div>
    </div>
  );
}
export function ContactForm() {
  const [f, setF] = useState({ name: "", phone: "", email: "", interest: PRODUCTS[0].name, message: "" });
  const [sent, setSent] = useState(false);
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const submit = (e) => { e.preventDefault(); /* TODO: connect to your API (keep data logic out of the UI) */ setSent(true); };
  return (
    <form className="card form" onSubmit={submit}>
      {sent ? (
        <div className="ok"><motion.svg width="90" height="90" viewBox="0 0 90 90"><motion.circle cx="45" cy="45" r="40" fill="none" stroke="#12110f" strokeWidth="5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} />
          <motion.path d="M26 47l14 14 26-30" fill="none" stroke="#12110f" strokeWidth="6" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.5 }} /></motion.svg>
          <h3>Thank you!</h3><p>Our team will reach out shortly.</p></div>
      ) : <>
        <div className="row"><label>Name<input required value={f.name} onChange={set("name")} placeholder="Your name" /></label>
          <label>Phone<input required value={f.phone} onChange={set("phone")} placeholder="+91" /></label></div>
        <label>Email<input type="email" value={f.email} onChange={set("email")} placeholder="you@company.com" /></label>
        <label>Interested in<select value={f.interest} onChange={set("interest")}>{PRODUCTS.map((p) => <option key={p.name}>{p.name}</option>)}</select></label>
        <label>Message<textarea rows={4} value={f.message} onChange={set("message")} placeholder="Tell us about your business" /></label>
        <button className="btn ink" type="submit" data-hover>Send Message <Send size={16} /></button></>}
    </form>
  );
}
