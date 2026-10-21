import { contact, site } from '../content';
import { Panel } from './Panel';

export function Contact() {
  return (
    <section id="contact" className="section section--contact" aria-labelledby="contact-title">
      <Panel shape="s3" innerClassName="contact speed">
        <span className="contact__bang display hide-sm" aria-hidden="true">
          BANG!
        </span>
        <span className="contact__kicker">05 — CONTACT</span>
        <h2 id="contact-title" className="contact__title display big">
          <span className="block">LET’S</span> <span className="block">TALK.</span>
        </h2>
        <a className="contact__email" href={`mailto:${site.email}`}>
          {site.email}
        </a>
        <ul className="contact__links">
          {contact.links.map((link) => (
            <li key={link.label}>
              <a className="btn" href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label.toUpperCase()}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      </Panel>
    </section>
  );
}
