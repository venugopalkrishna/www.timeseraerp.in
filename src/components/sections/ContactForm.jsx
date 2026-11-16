import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';
import { SOFTWARES } from '../../data/softwares.js';
import { submitInquiry } from '../../services/inquiry.js';
import './ContactForm.css';

const EMPTY = { name: '', phone: '', email: '', interest: SOFTWARES[0].title, message: '' };

function validate(v) {
  const e = {};
  if (v.name.trim().length < 2) e.name = 'Please enter your name';
  if (!/^[+\d\s-]{10,15}$/.test(v.phone.trim())) e.phone = 'Enter a valid phone number';
  if (!/^\S+@\S+\.\S+$/.test(v.email.trim())) e.email = 'Enter a valid email';
  return e;
}

export default function ContactForm() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent

  const set = (k) => (e) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    if (errors[k]) setErrors((x) => ({ ...x, [k]: undefined }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) return;
    setStatus('sending');
    await submitInquiry(values);
    setStatus('sent');
    setValues(EMPTY);
  };

  const field = (k, label, props = {}) => (
    <label className={`field ${errors[k] ? 'field--error' : ''}`}>
      <span>{label}</span>
      <input value={values[k]} onChange={set(k)} {...props} />
      <AnimatePresence>{errors[k] && <motion.em initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>{errors[k]}</motion.em>}</AnimatePresence>
    </label>
  );

  return (
    <div className="form-card">
      <AnimatePresence mode="wait">
        {status === 'sent' ? (
          <motion.div key="ok" className="form-done" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}>
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', delay: 0.15 }}><CheckCircle2 size={56} /></motion.div>
            <h3>Thank you — we’ve got your message</h3>
            <p>Our team will call you shortly to plan your demo.</p>
            <button className="form-done__again" onClick={() => setStatus('idle')}>Send another message</button>
          </motion.div>
        ) : (
          <motion.form key="form" onSubmit={onSubmit} noValidate initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="form-row">
              {field('name', 'Name', { placeholder: 'Your name', autoComplete: 'name' })}
              {field('phone', 'Phone', { placeholder: '+91', type: 'tel', autoComplete: 'tel' })}
            </div>
            {field('email', 'Email', { placeholder: 'you@company.com', type: 'email', autoComplete: 'email' })}
            <label className="field">
              <span>Interested in</span>
              <select value={values.interest} onChange={set('interest')}>
                {SOFTWARES.map((s) => <option key={s.id}>{s.title}</option>)}
              </select>
            </label>
            <label className="field">
              <span>Message</span>
              <textarea rows="4" value={values.message} onChange={set('message')} placeholder="Tell us about your business" />
            </label>
            <button className="form-submit" disabled={status === 'sending'}>
              {status === 'sending' ? <><Loader2 size={18} className="spin" /> Sending…</> : <>Send message <Send size={17} /></>}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
