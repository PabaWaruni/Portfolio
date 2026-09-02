import { skillGroups, tools } from "../data/content";
import { useReveal } from "../hooks/useReveal";

export const Skills = () => {
  const [ref, visible] = useReveal();

  return (
    <section className="section" id="skills" ref={ref}>
      <div className={`container reveal ${visible ? "is-in" : ""}`}>
        <h2 className="section__title">
          Analysis and coordination first,{" "}
          <span className="grad">engineering fluency underneath.</span>
        </h2>
        <p className="section__lead">
          The second half is what stops a requirement being handed over as a wish.
        </p>

        <div className="skills">
          {skillGroups.map((group, i) => (
            <article className="skillCard" key={group.title}>
              <span className="skillCard__index">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="skillCard__title">{group.title}</h3>
              <p className="skillCard__blurb">{group.blurb}</p>
              <ul className="chips">
                {group.items.map((item) => (
                  <li className="chip" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="marquee" aria-label="Tools I work with">
          <div className="marquee__track">
            {[0, 1].map((copy) => (
              <ul className="marquee__row" key={copy} aria-hidden={copy === 1}>
                {tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
