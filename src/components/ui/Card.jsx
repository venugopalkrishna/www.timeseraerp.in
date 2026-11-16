import './Card.css';

/** Card with a soft mint spotlight that follows the cursor. */
export default function Card({ children, className = '', as: Tag = 'div', dark = false, ...rest }) {
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
  };
  return (
    <Tag className={`card ${dark ? 'card--dark' : ''} ${className}`} onMouseMove={onMove} {...rest}>
      {children}
    </Tag>
  );
}
