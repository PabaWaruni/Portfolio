import { profile, navLinks } from "../data/content";
import { LinkedInIcon, GitHubIcon, MailIcon } from "./Icons";

export const Footer = () => (
  <footer className="footer">
    <div className="container footer__inner">
      <div className="footer__brand">
        <p className="footer__name">{profile.name}</p>
        <p className="footer__role">{profile.role}</p>
      </div>

      <nav className="footer__links" aria-label="Footer">
        {navLinks.map((l) => (
          <a key={l.id} href={`#${l.id}`}>
            {l.label}
          </a>
        ))}
      </nav>

      <div className="footer__social">
        <a href={`mailto:${profile.email}`} aria-label="Email">
          <MailIcon width={18} height={18} />
        </a>
        <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <LinkedInIcon width={18} height={18} />
        </a>
        <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
          <GitHubIcon width={18} height={18} />
        </a>
      </div>
    </div>

    <div className="container footer__base">
      <p>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
      <a href="#top">Back to top</a>
    </div>
  </footer>
);
