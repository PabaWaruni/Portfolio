import { useState } from "react";
import { profile } from "../data/content";
import { useReveal } from "../hooks/useReveal";
import { MailIcon, PinIcon, LinkedInIcon, GitHubIcon, ArrowIcon } from "./Icons";

// Web3Forms access keys are designed to be public (client-side submission).
// Override per-environment with REACT_APP_WEB3FORMS_KEY if you rotate it.
const ACCESS_KEY =
  process.env.REACT_APP_WEB3FORMS_KEY || "6dd485f7-7178-44fa-9e68-a18098a8bcaf";

const EMPTY = { name: "", email: "", subject: "", message: "" };

export const Contact = () => {
  const [ref, visible] = useReveal();
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null);

  const update = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please add your name.";
    if (!form.email.trim()) next.email = "Please add an email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      next.email = "That email address does not look right.";
    if (!form.message.trim()) next.message = "Please add a short message.";
    return next;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length) return;

    setSending(true);
    setStatus(null);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name: form.name,
          email: form.email,
          subject: form.subject || `Portfolio enquiry from ${form.name}`,
          message: form.message,
          credits: false,
        }),
      });
      const data = await res.json();

      if (data.success) {
        setForm(EMPTY);
        setStatus({ ok: true, message: "Thank you - your message has been sent. I will reply soon." });
      } else {
        setStatus({ ok: false, message: data.message || "Something went wrong. Please try again." });
      }
    } catch (err) {
      setStatus({
        ok: false,
        message: "Could not reach the server. Please email me directly instead.",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="section" id="contact" ref={ref}>
      <div className={`container reveal ${visible ? "is-in" : ""}`}>
        <h2 className="section__title">Let&rsquo;s talk about your next project.</h2>

        <div className="contact">
          <div className="contact__info">
            <p className="contact__lead">
              I am open to Business Analyst and Project Coordinator roles, and happy to
              talk about requirements, delivery or QA work.
            </p>

            <ul className="contact__list">
              <li>
                <a href={`mailto:${profile.email}`}>
                  <MailIcon width={18} height={18} />
                  <span>{profile.email}</span>
                </a>
              </li>
              <li>
                <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
                  <LinkedInIcon width={18} height={18} />
                  <span>linkedin.com/in/paba-karunarathne</span>
                </a>
              </li>
              <li>
                <a href={profile.links.github} target="_blank" rel="noreferrer">
                  <GitHubIcon width={18} height={18} />
                  <span>github.com/PabaWaruni</span>
                </a>
              </li>
              <li>
                <span className="contact__static">
                  <PinIcon width={18} height={18} />
                  <span>{profile.location}</span>
                </span>
              </li>
            </ul>

            <p className="contact__note">Phone number available on request and in my CV.</p>
          </div>

          <form className="contact__form" onSubmit={onSubmit} noValidate>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={update("name")}
                aria-invalid={!!errors.name}
                autoComplete="name"
              />
              {errors.name && <p className="field__error">{errors.name}</p>}
            </div>

            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={update("email")}
                aria-invalid={!!errors.email}
                autoComplete="email"
              />
              {errors.email && <p className="field__error">{errors.email}</p>}
            </div>

            <div className="field field--full">
              <label htmlFor="subject">
                Subject <span className="field__opt">optional</span>
              </label>
              <input id="subject" type="text" value={form.subject} onChange={update("subject")} />
            </div>

            <div className="field field--full">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="6"
                value={form.message}
                onChange={update("message")}
                aria-invalid={!!errors.message}
              />
              {errors.message && <p className="field__error">{errors.message}</p>}
            </div>

            <div className="field field--full contact__submit">
              <button type="submit" className="btn btn--primary" disabled={sending}>
                <span>{sending ? "Sending..." : "Send message"}</span>
                {!sending && <ArrowIcon width={18} height={18} />}
              </button>

              {status && (
                <p
                  className={`formStatus ${status.ok ? "is-ok" : "is-error"}`}
                  role="status"
                  aria-live="polite"
                >
                  {status.message}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
