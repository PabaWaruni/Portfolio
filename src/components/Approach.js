import { processSteps, workedExample } from "../data/content";
import { useReveal } from "../hooks/useReveal";

export const Approach = () => {
  const [ref, visible] = useReveal();
  const { story, criteria } = workedExample;

  return (
    <section className="section" id="approach" ref={ref}>
      <div className={`container reveal ${visible ? "is-in" : ""}`}>
        <h2 className="section__title">
          Most defects are just a requirement
          <span className="grad"> nobody pinned down.</span>
        </h2>
        <p className="section__lead">
          So I spend the effort up front. This is the loop I run, whatever the
          project is called.
        </p>

        <ol className="process">
          {processSteps.map((p, i) => (
            <li className="process__step" key={p.step}>
              <span className="process__no">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="process__title">{p.step}</h3>
              <p className="process__body">{p.body}</p>
            </li>
          ))}
        </ol>

        {/* The artifact: what a requirement actually looks like when I write it. */}
        <div className="artifact">
          <div className="artifact__head">
            <span className="artifact__tag">{workedExample.label}</span>
            <span className="artifact__context">{workedExample.context}</span>
          </div>

          <div className="artifact__body">
            <div className="artifact__block">
              <p className="artifact__blockLabel">User story</p>
              <p className="artifact__story">
                <span className="artifact__key">As a</span> {story.role}
                <br />
                <span className="artifact__key">I want</span> {story.want}
                <br />
                <span className="artifact__key">So that</span> {story.soThat}
              </p>
            </div>

            <div className="artifact__block">
              <p className="artifact__blockLabel">Acceptance criteria</p>
              <ul className="artifact__criteria">
                {criteria.map((c, i) => (
                  <li key={i}>
                    <span className={`artifact__gwt artifact__gwt--${c.k.toLowerCase()}`}>
                      {c.k}
                    </span>
                    <span>{c.v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="artifact__scope">
            <strong>Out of scope:</strong> {workedExample.outOfScope}
          </p>
        </div>
      </div>
    </section>
  );
};
