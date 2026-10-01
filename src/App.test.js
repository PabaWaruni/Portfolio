import { render, screen } from "@testing-library/react";
import App from "./App";
import {
  processSteps,
  experience,
  skillGroups,
  gallery,
  profile,
} from "./data/content";

test("renders the name and the pitch headline in the hero", () => {
  render(<App />);
  // The h1 carries the pitch; the name sits above it and in the footer.
  expect(
    screen.getByRole("heading", { level: 1, name: /requirements a team can build/i })
  ).toBeInTheDocument();
  expect(screen.getAllByText(/paba karunarathne/i).length).toBeGreaterThan(0);
});

test("renders the approach section with every process step", () => {
  const { container } = render(<App />);
  expect(container.querySelectorAll(".process__step")).toHaveLength(
    processSteps.length
  );
});

test("renders every main section", () => {
  const { container } = render(<App />);
  ["about", "experience", "approach", "skills", "gallery", "contact"].forEach((id) => {
    expect(container.querySelector(`#${id}`)).toBeTruthy();
  });
});

test("renders every role from the CV data", () => {
  const { container } = render(<App />);
  expect(container.querySelectorAll(".timeline__item")).toHaveLength(
    experience.length
  );
  experience.forEach((job) => {
    expect(screen.getByText(job.role)).toBeInTheDocument();
    expect(screen.getByText(job.company)).toBeInTheDocument();
  });
});

test("renders every capability group", () => {
  const { container } = render(<App />);
  expect(container.querySelectorAll(".skillCard")).toHaveLength(
    skillGroups.length
  );
});

test("renders every gallery photo with its caption", () => {
  const { container } = render(<App />);
  expect(container.querySelectorAll(".gallery__item")).toHaveLength(
    gallery.length
  );
  gallery.forEach((g) => {
    expect(screen.getByText(g.caption)).toBeInTheDocument();
  });
});

test("exposes the CV download and contact email", () => {
  const { container } = render(<App />);
  expect(container.querySelector(`a[href$="Paba_Karunarathne_CV.pdf"]`)).toBeTruthy();
  expect(
    container.querySelector(`a[href="mailto:${profile.email}"]`)
  ).toBeTruthy();
});
