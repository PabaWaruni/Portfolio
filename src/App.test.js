import { render, screen } from "@testing-library/react";
import App from "./App";
import {
  processSteps,
  workedExample,
  experience,
  skillGroups,
  featuredProject,
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

test("renders the approach section with a worked requirement", () => {
  const { container } = render(<App />);
  expect(container.querySelectorAll(".process__step")).toHaveLength(
    processSteps.length
  );
  expect(container.querySelector(".artifact__story").textContent).toMatch(
    new RegExp(workedExample.story.want, "i")
  );
  expect(container.querySelectorAll(".artifact__criteria li")).toHaveLength(
    workedExample.criteria.length
  );
});

test("renders every main section", () => {
  const { container } = render(<App />);
  ["about", "experience", "approach", "skills", "work", "contact"].forEach((id) => {
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

test("renders the case study with its system flow", () => {
  const { container } = render(<App />);
  expect(screen.getByText(featuredProject.title)).toBeInTheDocument();
  expect(screen.getByText(featuredProject.problem)).toBeInTheDocument();
  expect(container.querySelectorAll(".feature__step")).toHaveLength(
    featuredProject.flow.length
  );
  // the university coursework grid should be gone
  expect(container.querySelector(".projCard")).toBeNull();
  expect(container.querySelector(".tabs")).toBeNull();
});

test("exposes the CV download and contact email", () => {
  const { container } = render(<App />);
  expect(container.querySelector(`a[href$="Paba_Karunarathne_CV.pdf"]`)).toBeTruthy();
  expect(
    container.querySelector(`a[href="mailto:${profile.email}"]`)
  ).toBeTruthy();
});
