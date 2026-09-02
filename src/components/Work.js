import { featuredProject, profile } from "../data/content";
import { useReveal } from "../hooks/useReveal";
import { CheckIcon, ArrowIcon } from "./Icons";

export const Work = () => {
  const [ref, visible] = useReveal();

  return (
    <section className="section section--alt" id="work" ref={ref}>
      <div className={`container reveal ${visible ? "is-in" : ""}`}>
        <h2 className="section__title">
          The project where the analysis
          <span className="grad"> actually mattered.</span>
        </h2>
        <p className="section__lead">
          One system, worth more than a gallery of screenshots: a real procurement
          problem, a measurable definition of done, and a decision at the end of it.
        </p>

        <article className="feature">
          <div className="feature__body">
            <p className="feature__kicker">{featuredProject.subtitle}</p>
            <h3 className="feature__title">{featuredProject.title}</h3>

            <div className="feature__problem">
              <p className="feature__problemLabel">The problem</p>
              <p>{featuredProject.problem}</p>
            </div>

            <p className="feature__roleLine">{featuredProject.role}</p>

            <ul className="feature__points">
              {featuredProject.contributions.map((c, i) => (
                <li key={i}>
                  <CheckIcon width={18} height={18} />
                  <span>{c}</span>
                </li>
              ))}
            </ul>

            <ul className="chips">
              {featuredProject.stack.map((s) => (
                <li className="chip" key={s}>
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="feature__aside">
            <p className="feature__flowLabel">How the system runs</p>
            <ol className="feature__flow">
              {featuredProject.flow.map((f, i) => (
                <li className="feature__step" key={f.step}>
                  <span className="feature__stepNo">{i + 1}</span>
                  <div>
                    <p className="feature__stepLabel">{f.step}</p>
                    <p className="feature__stepBody">{f.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </article>

        <p className="work__more">
          Earlier university coursework - Android, PHP and React practice builds,
          plus Figma UI work - lives on{" "}
          <a href={profile.links.github} target="_blank" rel="noreferrer">
            GitHub
            <ArrowIcon width={15} height={15} />
          </a>
        </p>
      </div>
    </section>
  );
};
