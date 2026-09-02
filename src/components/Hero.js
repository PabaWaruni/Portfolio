import portrait from "../assets/img/portrait.jpg";
import { profile, stats } from "../data/content";
import { useReveal } from "../hooks/useReveal";
import {
  ArrowIcon,
  DownloadIcon,
  LinkedInIcon,
  GitHubIcon,
  MailIcon,
  PinIcon,
} from "./Icons";

export const Hero = () => {
  const [ref, visible] = useReveal();

  return (
    <section className="hero" id="top" ref={ref}>
      <div className="hero__glow" aria-hidden="true" />
      <div className={`container hero__inner ${visible ? "is-in" : ""}`}>
        <div className="hero__copy">
          <p className="pill">
            <span className="pill__dot" />
            {profile.availability}
          </p>

          <p className="hero__eyebrow">
            {profile.name} &mdash; {profile.role}
          </p>
          <h1 className="hero__headline">
            {profile.headline.lead}{" "}
            <span className="grad">{profile.headline.accent}</span>
          </h1>
          <p className="hero__summary">{profile.summary}</p>

          <div className="hero__meta">
            <span>
              <PinIcon width={16} height={16} />
              {profile.location}
            </span>
            <a href={`mailto:${profile.email}`}>
              <MailIcon width={16} height={16} />
              {profile.email}
            </a>
          </div>

          <div className="hero__cta">
            <a className="btn btn--primary" href="#work">
              <span>View my work</span>
              <ArrowIcon width={18} height={18} />
            </a>
            <a className="btn btn--ghost" href={profile.cv} download>
              <DownloadIcon width={18} height={18} />
              <span>Download CV</span>
            </a>
          </div>

          <div className="hero__social">
            <span className="hero__socialLabel">Connect</span>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedInIcon width={18} height={18} />
            </a>
            <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <GitHubIcon width={18} height={18} />
            </a>
          </div>
        </div>

        <div className="hero__portrait">
          <div className="portrait">
            <img
              src={portrait}
              alt={`${profile.name}, ${profile.role}`}
              width="1000"
              height="1333"
            />
          </div>
        </div>
      </div>

      <div className="container">
        <dl className={`stats ${visible ? "is-in" : ""}`}>
          {stats.map((s) => (
            <div className="stats__item" key={s.label}>
              <dt>{s.value}</dt>
              <dd>{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};
