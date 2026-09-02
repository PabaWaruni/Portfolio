import { useEffect, useMemo, useState } from "react";
import { navLinks, profile } from "../data/content";
import { useActiveSection } from "../hooks/useReveal";
import { DownloadIcon, MenuIcon, CloseIcon } from "./Icons";

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const ids = useMemo(() => navLinks.map((l) => l.id), []);
  const active = useActiveSection(ids);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile drawer is open, and close it on Escape.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="container nav__inner">
        <a href="#top" className="nav__brand" aria-label={`${profile.name} - home`}>
          <span className="nav__brandText">
            <strong>{profile.name}</strong>
            <span>{profile.role}</span>
          </span>
        </a>

        <nav className="nav__links" aria-label="Sections">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={active === link.id ? "is-active" : ""}
              aria-current={active === link.id ? "true" : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <a className="btn btn--ghost btn--sm" href={profile.cv} download>
            <DownloadIcon width={16} height={16} />
            <span>CV</span>
          </a>
          <button
            type="button"
            className="nav__toggle"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <MenuIcon />
          </button>
        </div>
      </div>

      <div
        className={`drawer ${menuOpen ? "drawer--open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        aria-hidden={!menuOpen}
      >
        <div className="drawer__scrim" onClick={() => setMenuOpen(false)} />
        <div className="drawer__panel">
          <button
            type="button"
            className="drawer__close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            tabIndex={menuOpen ? 0 : -1}
          >
            <CloseIcon />
          </button>
          <nav className="drawer__links">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMenuOpen(false)}
                className={active === link.id ? "is-active" : ""}
                tabIndex={menuOpen ? 0 : -1}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            className="btn btn--primary"
            href={profile.cv}
            download
            onClick={() => setMenuOpen(false)}
            tabIndex={menuOpen ? 0 : -1}
          >
            <DownloadIcon width={18} height={18} />
            <span>Download CV</span>
          </a>
        </div>
      </div>
    </header>
  );
};
