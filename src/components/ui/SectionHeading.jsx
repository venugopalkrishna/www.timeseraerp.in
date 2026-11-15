import Reveal from './Reveal.jsx';
import './SectionHeading.css';

/** `title` may contain JSX, e.g. <>Built for <em>how you sell</em></> */
export default function SectionHeading({ eyebrow, title, text, align = 'center' }) {
  return (
    <Reveal className={`sh sh--${align}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </Reveal>
  );
}
