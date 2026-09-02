import { experience } from "../data/content";
import { useReveal } from "../hooks/useReveal";

export const Experience = () => {
  const [ref, visible] = useReveal();

  return (
    <section className="section section--alt" id="experience" ref={ref}>
      <div className={`container reveal ${visible ? "is-in" : ""}`}>
        <h2 className="section__title">Where I have delivered.</h2>
        <p className="section__lead">
          Three roles across coordination, quality and engineering &mdash; each one
          closer to owning the requirement rather than just building it.
        </p>

        <ol className="timeline">
          {experience.map((job) => (
            <li className="timeline__item" key={`${job.company}-${job.role}`}>
              <span className={`timeline__dot ${job.current ? "is-current" : ""}`} aria-hidden="true" />

              <div className="timeline__head">
                <div>
                  <h3 className="timeline__role">{job.role}</h3>
                  <p className="timeline__company">{job.company}</p>
                </div>
                <div className="timeline__when">
                  <span className="timeline__period">{job.period}</span>
                  <span className="timeline__type">{job.type}</span>
                </div>
              </div>

              <p className="timeline__impact">{job.impact}</p>

              <ul className="timeline__points">
                {job.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>

              <ul className="chips" aria-label="Tools and focus">
                {job.tags.map((t) => (
                  <li className="chip" key={t}>
                    {t}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
