import { processSteps } from "../data/content";
import { useReveal } from "../hooks/useReveal";

export const Approach = () => {
  const [ref, visible] = useReveal();

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
      </div>
    </section>
  );
};
