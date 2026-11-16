import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './Button.css';

/** variant: primary (navy) | accent (mint) | ghost | light. Pass `to` for a route, `href` for an external link. */
export default function Button({ children, variant = 'primary', to, href, arrow = true, className = '', ...rest }) {
  const cls = `btn btn--${variant} ${className}`;
  const inner = (
    <>
      <span>{children}</span>
      {arrow && <ArrowRight size={18} className="btn__arrow" />}
    </>
  );
  if (to) return <Link to={to} className={cls} {...rest}>{inner}</Link>;
  if (href) return <a href={href} className={cls} {...rest}>{inner}</a>;
  return <button className={cls} {...rest}>{inner}</button>;
}
