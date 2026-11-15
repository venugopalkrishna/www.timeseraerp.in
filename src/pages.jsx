import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AnimatePresence, motion, useScroll, useSpring, useTransform } from "motion/react";
import { ArrowUpRight, Check, Cloud, Gem, IndianRupee, Mail, MapPin, Phone, ScanBarcode, Users } from "lucide-react";
import { CASES, CLIENTS, CONTACT, FEATURES, LEGAL, MILESTONES, PERKS, PRICING, PRODUCTS, SERVICES, STEPS, TEAM, TESTIMONIALS, VALUES } from "./data";
import { Btn, COL, ContactForm, Count, Fade, Head, Marquee, PageTitle, Slider, Split, Sticker, Tabs, Tilt } from "./ui";

const CTA = () => (
  <section className="wrap sec"><Fade><div className="cta card"><motion.div className="blobby" animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />
    <h2>Ready to make your business sparkle?</h2><p>Book a free demo and see Timesera on your own workflow.</p><Btn to="/contact" variant="light">Book a Free Demo →</Btn></div></Fade></section>
);
const ContactBlock = () => (
  <section className="wrap sec split">
    <Fade><span className="eyebrow">Say hello</span><h2>Let’s talk about your business</h2><p className="muted">Tell us what you sell and how you bill — we’ll recommend the right software and tier.</p>
      <ul className="info"><li><Phone /><div><b>Sales</b><a href={`tel:${CONTACT.sales}`}>{CONTACT.sales}</a></div></li>
        <li><Phone /><div><b>Support</b><a href={`tel:${CONTACT.support}`}>{CONTACT.support}</a></div></li>
        <li><Mail /><div><b>Email</b><a href={`mailto:${CONTACT.emails[1]}`}>{CONTACT.emails[1]}</a></div></li></ul></Fade>
    <Fade delay={0.15}><ContactForm /></Fade>
  </section>
);

/* ---------- HOME ---------- */
function Layer({ mx, my, d, className, children }) {
  const x = useTransform(mx, [-0.5, 0.5], [-d, d]);
  const y = useTransform(my, [-0.5, 0.5], [-d, d]);
  return <motion.div className={className} style={{ x, y }}>{children}</motion.div>;
}
function Hero() {
  const mx = useSpring(0, { stiffness: 60, damping: 20 }), my = useSpring(0, { stiffness: 60, damping: 20 });
  useEffect(() => { const f = (e) => { mx.set(e.clientX / innerWidth - 0.5); my.set(e.clientY / innerHeight - 0.5); }; addEventListener("mousemove", f); return () => removeEventListener("mousemove", f); }, []);
  return (
    <section className="wrap hero">
      <div className="hero-copy">
        <motion.span className="eyebrow" initial={{ scale: 0, rotate: -12 }} animate={{ scale: 1, rotate: -3 }} transition={{ type: "spring", delay: 0.9 }}>ERP for jewellery &amp; retail</motion.span>
        <h1><Split text="Software that makes your business" delay={0.9} /><span className="mark"><Split text="sparkle." delay={1.4} /><motion.i initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1.9, duration: 0.6 }} /></span></h1>
        <Fade y={20}><p className="lead">Cloud billing, inventory and scheme management — installed quickly, loved by your team, trusted by 1000+ owners.</p></Fade>
        <div className="actions"><Btn to="/contact">Get a free demo →</Btn><Btn to="/products" variant="light">Explore softwares</Btn></div>
      </div>
      <div className="hero-art">
        <Layer mx={mx} my={my} d={14} className="blobL"><div className="blob" /></Layer>
        <Layer mx={mx} my={my} d={30} className="recL">
          <motion.div className="receipt card" initial={{ y: 80, opacity: 0, rotate: 8 }} animate={{ y: 0, opacity: 1, rotate: -4 }} transition={{ type: "spring", delay: 1, stiffness: 70 }}>
            <b>TIMESERA ERP</b><small>Bill #2048 · Paid ✓</small>
            <div className="ln"><span>Gold chain 22K · 18.4g</span><span>₹1,04,200</span></div><div className="ln"><span>Diamond studs</span><span>₹48,500</span></div><div className="ln"><span>Making charges</span><span>₹6,300</span></div>
            <div className="ln tot"><span>Total</span><span>₹1,59,000</span></div><div className="bar" />
          </motion.div>
        </Layer>
        <Layer mx={mx} my={my} d={55} className="stk s1"><Sticker rotate={-10}><Gem size={30} /></Sticker></Layer>
        <Layer mx={mx} my={my} d={45} className="stk s2"><Sticker rotate={8} className="mint"><IndianRupee size={30} /></Sticker></Layer>
        <Layer mx={mx} my={my} d={65} className="stk s3"><Sticker rotate={-6} className="sky"><Cloud size={30} /></Sticker></Layer>
        <Layer mx={mx} my={my} d={40} className="stk s4"><Sticker rotate={12} className="pink"><ScanBarcode size={30} /></Sticker></Layer>
        <svg className="badge" viewBox="0 0 120 120"><defs><path id="c" d="M60 60m-46 0a46 46 0 1 1 92 0a46 46 0 1 1-92 0" /></defs>
          <text><textPath href="#c">1000+ happy owners • easy install • </textPath></text><circle cx="60" cy="60" r="20" fill="#12110f" /><text x="60" y="66" textAnchor="middle" className="bt">✺</text></svg>
      </div>
    </section>
  );
}
function HScroll() {
  const sec = useRef(null), track = useRef(null);
  const [end, setEnd] = useState(-1500);
  useEffect(() => { const m = () => setEnd(-(track.current.scrollWidth - innerWidth + 60)); m(); addEventListener("resize", m); return () => removeEventListener("resize", m); }, []);
  const { scrollYProgress } = useScroll({ target: sec, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, end]);
  const bar = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return (
    <section className="hs" ref={sec}><div className="hs-in">
      <motion.div className="hs-track" ref={track} style={{ x }}>
        <div className="hs-intro"><span className="eyebrow">Softwares</span><h2>Eight industries.<br />One platform.</h2><p>Keep scrolling →</p></div>
        {PRODUCTS.map((p, i) => (
          <Link to="/products" key={p.name} className="hcard card" style={{ background: COL[i % 5] }} data-hover>
            <span className="num">0{i + 1}</span><motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.8 }}><p.icon size={48} /></motion.div><h3>{p.name}</h3><p>{p.line}</p><ArrowUpRight className="go" /></Link>))}
      </motion.div>
      <div className="hs-bar"><motion.i style={{ scaleX: bar }} /></div>
    </div></section>
  );
}
function Process() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] });
  const sy = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return (
    <div className="proc" ref={ref}><div className="rail"><motion.i style={{ scaleY: sy }} /></div>
      {STEPS.map(([I, t, d], i) => (
        <motion.div key={t} className={`step ${i % 2 ? "r" : ""}`} initial={{ opacity: 0, x: i % 2 ? 90 : -90, rotate: i % 2 ? 5 : -5 }} whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true, margin: "-80px" }} transition={{ type: "spring", stiffness: 90, damping: 14 }}>
          <div className="card" style={{ background: COL[i] }}><span className="sn">0{i + 1}</span><I size={34} /><h3>{t}</h3><p>{d}</p></div></motion.div>))}
    </div>
  );
}
export function Home() {
  return <>
    <Hero />
    <div className="bands"><Marquee items={PRODUCTS.map((p) => p.name)} className="m-ink" /><Marquee items={["Billing", "Inventory", "Schemes", "Barcode", "RFID", "WhatsApp", "Tally", "E-Invoice"]} rev className="m-yel" /></div>
    <HScroll />
    <section className="wrap sec stats">{[[1000, "+", "Happy owners"], [8, "", "Industries"], [18, "", "Features"], [24, "/7", "Support mindset"]].map(([n, s, l], i) => (
      <motion.div key={l} className="stat card" style={{ background: COL[i] }} initial={{ scale: 0.6, rotate: -10, opacity: 0 }} whileInView={{ scale: 1, rotate: i % 2 ? 2 : -2, opacity: 1 }} viewport={{ once: true }}
        whileHover={{ rotate: 0, scale: 1.06 }} transition={{ type: "spring", stiffness: 140, damping: 12, delay: i * 0.08 }}><b><Count to={n} suffix={s} /></b><span>{l}</span></motion.div>))}</section>
    <section className="wrap sec"><Head eyebrow="Our process" title="From box to business growth" /><Process /></section>
    <section className="wrap sec"><Head eyebrow="Loved by owners" title="Don’t take our word for it" /><Slider items={TESTIMONIALS} /></section>
    <ContactBlock />
  </>;
}

/* ---------- ABOUT ---------- */
function Word({ w, p, s, e }) { const o = useTransform(p, [s, e], [0.15, 1]); return <motion.span style={{ opacity: o }}>{w} </motion.span>; }
function Highlight({ text }) {
  const ref = useRef(null);
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start 85%", "end 45%"] });
  const ws = text.split(" ");
  return <p ref={ref} className="hl-text">{ws.map((w, i) => <Word key={i} w={w} p={p} s={i / ws.length} e={(i + 1) / ws.length} />)}</p>;
}
export function About() {
  return <>
    <PageTitle eyebrow="About us" title="We make every owner’s business better." sub="Quality, reliability and integrity — the three values we preach and practise." />
    <section className="wrap sec"><Highlight text="At Timesera we know setting up inventory is only the start. It is about improving how businesses run and the world they operate in. We have made more than a thousand individual and multi-store owners happy by focusing on their next hurdle — and by being available almost every hour. Thank you for choosing Timesera as your trusted partner." /></section>
    <section className="wrap sec"><Head eyebrow="Our values" title="What we stand on" />
      <div className="grid g3">{VALUES.map(([I, t, d], i) => <Fade key={t} delay={i * 0.1}><Tilt className="card vcard"><span className="sn">0{i + 1}</span><motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 3, delay: i * 0.4 }}><I size={40} /></motion.div><h3>{t}</h3><p>{d}</p></Tilt></Fade>)}</div></section>
    <section className="sec"><div className="wrap"><Head eyebrow="Our journey" title="Drag through our story" sub="Sample milestones — edit with your real story." /></div>
      <motion.div className="drag-row" drag="x" dragConstraints={{ left: -420, right: 0 }} data-hover>{MILESTONES.map(([t, d], i) => (
        <div className="mile card" key={t} style={{ background: COL[i] }}><span className="sn">0{i + 1}</span><b>{t}</b><p>{d}</p></div>))}</motion.div></section>
    <section className="wrap sec"><Head eyebrow="The team" title="People behind the product" sub="Placeholders — add real names and photos." />
      <div className="grid g4">{TEAM.map((r, i) => <Fade key={r} delay={i * 0.08}><motion.div className="member card" whileHover={{ rotate: i % 2 ? 3 : -3, y: -8 }}><motion.div className="ph" style={{ background: COL[i] }} whileHover={{ scale: 1.15, rotate: 360 }} transition={{ duration: 0.7 }}>{r[0]}</motion.div><b>Team member</b><small>{r}</small></motion.div></Fade>)}</div></section>
    <CTA />
  </>;
}

/* ---------- PRODUCTS ---------- */
function Pricing() {
  const [g, setG] = useState(PRICING[0].name);
  const grp = PRICING.find((p) => p.name === g);
  return (
    <section className="wrap sec"><Head eyebrow="Pricing" title="Pick your industry, pick your tier" sub="One-time pricing plus applicable tax." />
      <Tabs items={PRICING.map((p) => p.name)} value={g} onChange={setG} id="price-tab" />
      <div className="tiers"><AnimatePresence mode="popLayout">{grp.tiers.map(([n, price], i) => (
        <motion.div key={g + n} layout initial={{ opacity: 0, y: 60, rotate: -4 }} animate={{ opacity: 1, y: 0, rotate: 0 }} exit={{ opacity: 0, scale: 0.8 }} transition={{ type: "spring", stiffness: 160, damping: 16, delay: i * 0.07 }}>
          <Tilt className={`card tier ${n === "Pro" ? "hot" : ""}`}>{n === "Pro" && <motion.em className="badge2" animate={{ rotate: [-6, 6, -6] }} transition={{ repeat: Infinity, duration: 2 }}>Most popular</motion.em>}
            <h3>{n}</h3><div className="amt">₹{price}<small> + tax</small></div>
            <ul>{PERKS[n].map((x) => <li key={x}><Check size={16} />{x}</li>)}</ul><Link to="/contact" className="btn ink" data-hover>Choose {n}</Link></Tilt>
        </motion.div>))}</AnimatePresence></div>
      <p className="note"><Users size={16} /> {grp.clients} happy clients on this plan. Perks listed are indicative.</p></section>
  );
}
export function Products() {
  const [tab, setTab] = useState("All");
  const list = PRODUCTS.filter((p) => tab === "All" || p.tag === tab);
  return <>
    <PageTitle eyebrow="Softwares" title="Built for how you actually sell." sub="Jewellery solutions and ready-made software for other industries." />
    <section className="wrap"><Tabs items={["All", "Jewellery", "Other"]} value={tab} onChange={setTab} id="prod-tab" />
      <motion.div layout className="pgrid"><AnimatePresence mode="popLayout">{list.map((p) => (
        <motion.div layout key={p.name} initial={{ opacity: 0, scale: 0.7, rotate: -6 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} exit={{ opacity: 0, scale: 0.7 }} transition={{ type: "spring", stiffness: 260, damping: 22 }}>
          <Tilt className="card pcard" ><span className="sn">0{PRODUCTS.indexOf(p) + 1}</span><div className="pic" style={{ background: COL[PRODUCTS.indexOf(p) % 5] }}><p.icon size={34} /></div><h3>{p.name}</h3><p>{p.line}</p>
            <Link to="/contact" className="more" data-hover>Request demo →</Link></Tilt></motion.div>))}</AnimatePresence></motion.div></section>
    <Pricing /><CTA />
  </>;
}

/* ---------- SERVICES (unique: sticky stacking cards + flip grid) ---------- */
export function Services() {
  return <>
    <PageTitle eyebrow="Services" title="Stack up your growth, one layer at a time." sub="Scroll to stack our services — then flip the cards to meet every feature." />
    <section className="wrap stack">{SERVICES.map((s, i) => (
      <motion.div key={s.title} className="scard card" style={{ top: `${100 + i * 28}px`, background: COL[i] }} initial={{ rotate: i % 2 ? 3 : -3 }} whileInView={{ rotate: 0 }} viewport={{ margin: "-30%" }} transition={{ type: "spring", stiffness: 80 }}>
        <div><span className="sn">0{i + 1}</span><h2>{s.title}</h2><p>{s.text}</p><ul>{s.pts.map((x) => <li key={x}><Check size={16} />{x}</li>)}</ul><Btn to="/contact" variant="light">Talk to us →</Btn></div>
        <div className="art"><motion.div className="ringo" animate={{ rotate: 360 }} transition={{ duration: 16, repeat: Infinity, ease: "linear" }}><i /><i /><i /></motion.div>
          <motion.div animate={{ scale: [1, 1.12, 1] }} transition={{ duration: 3, repeat: Infinity }}><s.icon size={76} /></motion.div></div>
      </motion.div>))}</section>
    <section className="wrap sec"><Head eyebrow="Features" title="18 capabilities. Flip to explore." />
      <div className="flipgrid">{FEATURES.map(([I, t, d], i) => (
        <Fade key={t} delay={(i % 6) * 0.05} y={30}><div className="flip" tabIndex={0} data-hover><div className="fin"><div className="ff" style={{ background: COL[i % 5] }}><I size={34} /><b>{t}</b></div><div className="fb"><b>{t}</b><small>{d}</small></div></div></div></Fade>))}</div></section>
    <CTA />
  </>;
}

/* ---------- PORTFOLIO / REVIEWS / CONTACT / LEGAL ---------- */
export function Portfolio() {
  const types = ["All", ...new Set(CASES.map((c) => c.type))];
  const [f, setF] = useState("All");
  return <>
    <PageTitle eyebrow="Portfolio" title="Businesses growing on Timesera." sub="Sample case studies — swap in your real clients and numbers." />
    <section className="wrap"><Tabs items={types} value={f} onChange={setF} id="port-tab" />
      <motion.div layout className="grid g3"><AnimatePresence mode="popLayout">{CASES.filter((c) => f === "All" || c.type === f).map((c, i) => (
        <motion.div layout key={c.name} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} transition={{ type: "spring", stiffness: 300, damping: 25 }}>
          <Tilt className="card case"><div className="thumb" style={{ background: COL[(i + 1) % 6] }}><motion.div whileHover={{ scale: 1.3, rotate: -10 }}><c.icon size={56} /></motion.div></div>
            <small className="tagline">{c.type}</small><h3>{c.name}</h3><p className="statline">{c.stat}</p></Tilt></motion.div>))}</AnimatePresence></motion.div></section>
    <section className="sec"><div className="wrap"><Head eyebrow="Our clients" title="Brands that trust us" /></div><Marquee items={CLIENTS} className="m-ink big" /></section>
    <CTA />
  </>;
}
export function Reviews() {
  return <>
    <PageTitle eyebrow="Testimonials" title="Kind words from real counters." sub="Sample reviews — replace with your customers’ own words." />
    <section className="wrap"><Slider items={TESTIMONIALS} /></section>
    <section className="wrap sec"><div className="masonry">{[...TESTIMONIALS, ...TESTIMONIALS.slice(0, 3)].map((t, i) => (
      <Fade key={i} delay={(i % 3) * 0.08}><motion.div className="mcard card" style={{ background: COL[i % 5] }} initial={{ rotate: i % 2 ? 2 : -2 }} whileHover={{ rotate: 0, scale: 1.04 }} drag dragSnapToOrigin data-hover>
        <p>“{t.text}”</p><b>{t.name}</b><small>{t.role}</small></motion.div></Fade>))}</div></section>
    <CTA />
  </>;
}
export function Contact() {
  const cards = [[MapPin, "Our Office", [CONTACT.address]], [Mail, "Email Us", CONTACT.emails.map((e) => `mailto:${e}|${e}`)], [Phone, "Call Us", [`tel:${CONTACT.support}|Support: ${CONTACT.support}`, `tel:${CONTACT.sales}|Sales: ${CONTACT.sales}`]]];
  return <>
    <PageTitle eyebrow="Contact" title="We’d love to hear from you." sub="Visit, email or call — whichever suits you." />
    <section className="wrap grid g3">{cards.map(([I, t, lines], i) => (
      <Fade key={t} delay={i * 0.1}><Tilt className="card icard" ><div className="pic" style={{ background: COL[i] }}><I size={30} /></div><h3>{t}</h3>
        {lines.map((l) => l.includes("|") ? <a key={l} href={l.split("|")[0]}>{l.split("|")[1]}</a> : <p key={l}>{l}</p>)}</Tilt></Fade>))}</section>
    <section className="wrap sec split"><Fade><ContactForm /></Fade>
      <Fade delay={0.15}><iframe className="map card" title="Timesera office" loading="lazy" src="https://www.google.com/maps?q=Simhapuri+Cloth+Market+Stonehousepet&output=embed" /></Fade></section>
  </>;
}
export function Legal() {
  const { slug } = useParams();
  const d = LEGAL[slug] || LEGAL.terms;
  return <><PageTitle eyebrow="Legal" title={d.title} sub="Template text — have your legal advisor review before publishing." />
    <section className="wrap legal">{d.s.map(([h, t], i) => <Fade key={h} delay={i * 0.06}><div className="card lcard"><h3>{h}</h3><p>{t}</p></div></Fade>)}</section></>;
}
