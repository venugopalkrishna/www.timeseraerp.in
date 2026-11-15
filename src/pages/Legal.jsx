import { Link, useParams } from 'react-router-dom';
import PageHero from '../components/ui/PageHero.jsx';
import Button from '../components/ui/Button.jsx';
import { LEGAL } from '../data/content.js';

/** Terms / Privacy / Refund placeholder pages (also acts as a 404 for unknown paths). */
export default function Legal() {
  const { legalSlug } = useParams();
  const page = LEGAL[legalSlug];
  if (!page) {
    return (
      <>
        <PageHero eyebrow="404" title={<>Page not <em>found.</em></>} text="The page you are looking for doesn’t exist." />
        <div className="container" style={{ textAlign: 'center', paddingBottom: 100 }}><Button to="/">Back to home</Button></div>
      </>
    );
  }
  return (
    <>
      <PageHero eyebrow="Legal" title={page.title} />
      <div className="container container--narrow" style={{ paddingBottom: 100 }}><p>{page.text}</p><p style={{ marginTop: 20 }}><Link to="/">← Back to home</Link></p></div>
    </>
  );
}
