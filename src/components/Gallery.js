import { gallery } from "../data/content";
import { useReveal } from "../hooks/useReveal";

export const Gallery = () => {
  const [ref, visible] = useReveal();

  return (
    <section className="section section--alt" id="gallery" ref={ref}>
      <div className={`container reveal ${visible ? "is-in" : ""}`}>
        <h2 className="section__title">
          Moments from
          <span className="grad"> along the way.</span>
        </h2>

        <ul className="gallery">
          {gallery.map((g) => (
            <li className="gallery__item" key={g.src}>
              <figure>
                <img src={g.src} alt={g.alt} loading="lazy" />
                <figcaption>{g.caption}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
