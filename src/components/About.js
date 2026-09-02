import { profile, education, languages, highlights } from "../data/content";
import { useReveal } from "../hooks/useReveal";
import { TrophyIcon } from "./Icons";

export const About = () => {
  const [ref, visible] = useReveal();

  return (
    <section className="section" id="about" ref={ref}>
      <div className={`container reveal ${visible ? "is-in" : ""}`}>
        <h2 className="section__title">
          A software engineer who moved to the business side of delivery.
        </h2>

        <div className="about">
          <div className="about__lead">
            {profile.about.map((para, i) => (
              <p key={i}>{para}</p>
            ))}

            <div className="about__facts">
              <div>
                <span className="about__factLabel">Based in</span>
                <span className="about__factValue">{profile.location}</span>
              </div>
              <div>
                <span className="about__factLabel">Languages</span>
                <span className="about__factValue">{languages.join(" · ")}</span>
              </div>
              <div>
                <span className="about__factLabel">Focus</span>
                <span className="about__factValue">Business Analysis · Project Coordination</span>
              </div>
            </div>
          </div>

          <aside className="about__side">
            <div className="card">
              <h3 className="card__title">Education</h3>
              <ul className="edu">
                {education.map((e) => (
                  <li key={e.qualification}>
                    <p className="edu__qual">{e.qualification}</p>
                    <p className="edu__inst">{e.institution}</p>
                    <p className="edu__meta">
                      {e.period}
                      {e.note ? ` · ${e.note}` : ""}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        {/* Recognition runs full width below the about detail, laid out horizontally. */}
        <div className="recognition">
          <h3 className="recognition__title">Recognition</h3>
          <ul className="recognition__grid">
            {highlights.map((h) => (
              <li className="recognition__item" key={h.title}>
                <TrophyIcon width={20} height={20} />
                <p className="recognition__label">{h.title}</p>
                <p className="recognition__event">{h.event}</p>
                <p className="recognition__org">{h.org}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
