// Single source of truth for site content.
// Grounded in Paba_Karunarathne_CV.pdf, but written in portfolio voice rather
// than CV bullet-speak. Update here when the CV changes.

export const profile = {
  name: "Paba Karunarathne",
  role: "Business Analyst & Project Coordinator",
  availability: "Open to Business Analyst / Project Coordinator roles",
  location: "Kandy, Sri Lanka",
  email: "pwkarunarathne28@gmail.com",

  // Hero headline, split so one phrase can carry the accent gradient.
  headline: { lead: "I turn fuzzy business needs into", accent: "requirements a team can build." },

  summary:
    "Then I keep delivery honest from backlog to verified release. I came up through engineering, so I can read the payload, question the design, and still explain it to the business.",

  about: [
    "I started on the build side - writing Flask and Express APIs, wiring up React front-ends, testing them in Postman. That is where I learned how often a defect is not really a defect. It is a requirement nobody pinned down.",
    "So I moved to the side of the work that prevents it. Today I run boards, refine backlogs, write user stories and acceptance criteria, surface risks while they are still cheap, and verify that what ships is what was actually asked for.",
    "The engineering background is the part I lean on most. It means I can sit in a technical design discussion and hold my own, then turn around and explain the trade-off to someone who does not care what a webhook is.",
  ],

  links: {
    linkedin: "https://www.linkedin.com/in/paba-karunarathne-3aaa402a4/",
    github: "https://github.com/PabaWaruni",
  },
  cv: `${process.env.PUBLIC_URL}/Paba_Karunarathne_CV.pdf`,
};

// Qualitative by design - no invented figures.
export const stats = [
  { value: "3", label: "Professional roles" },
  { value: "2024", label: "In delivery teams since" },
  { value: "Agile", label: "Scrum & Kanban" },
  { value: "BSE", label: "Software Engineering (Hons), reading" },
];

export const processSteps = [
  {
    step: "Discover",
    body: "Sit with the people who have the problem. Keep asking until the actual need surfaces, not just the solution they arrived with.",
  },
  {
    step: "Define",
    body: "Write it so it cannot be misread. Story, acceptance criteria, edge cases, and a clear line around what is out of scope.",
  },
  {
    step: "Deliver",
    body: "Break it onto a board. Prioritise, track, unblock, and keep everyone pointed at the same date.",
  },
  {
    step: "Verify",
    body: "Test against the criteria we agreed. Document what fails, confirm the fix holds, then call it done.",
  },
];

// A worked example of how I write a requirement, using Leaf Sense as the subject.
export const workedExample = {
  label: "Worked example",
  context: "How I write a requirement - using Leaf Sense as the subject",
  story: {
    role: "a tea collection officer",
    want: "an objective quality grade for each batch at intake",
    soThat: "payment reflects measured quality rather than a subjective visual call",
  },
  criteria: [
    { k: "Given", v: "a leaf sample is presented at the collection point" },
    { k: "When", v: "the officer captures it through the evaluation unit" },
    { k: "Then", v: "a quality grade is returned and shown to the officer" },
    { k: "And", v: "the reading is stored against the supplier and batch record" },
    { k: "And", v: "any manual override is captured with a recorded reason" },
  ],
  outOfScope: "Supplier payment calculation - handled downstream by procurement.",
};

export const skillGroups = [
  {
    title: "Business Analysis",
    blurb: "Ambiguity in. Requirements a team can build against, out.",
    items: [
      "Requirements Analysis",
      "Requirement Validation",
      "User Stories",
      "Acceptance Criteria",
      "Process Analysis",
      "Stakeholder Communication",
    ],
  },
  {
    title: "Project Coordination",
    blurb: "Nothing stalls quietly. Scope, tasks and people pointed at the date.",
    items: [
      "Sprint Planning",
      "Backlog Refinement",
      "Task & Progress Tracking",
      "Risk & Issue Tracking",
      "Team Coordination",
      "Task Handover",
    ],
  },
  {
    title: "Agile Delivery",
    blurb: "The rituals I run delivery in, and the boards I run it on.",
    items: ["Agile", "Scrum", "Kanban", "SDLC", "STLC", "Backlog Ownership"],
  },
  {
    title: "Technical Fluency",
    blurb: "Enough depth to read the payload, review the design and scope the work honestly.",
    items: ["REST APIs", "Python & Flask", "Node.js & Express", "React", "MySQL", "AWS & Firebase"],
  },
  {
    title: "Quality & Testing",
    blurb: "Proof that what was specified is what actually shipped.",
    items: [
      "Test Case Design",
      "Test Plans",
      "API Testing",
      "E2E Automation",
      "Defect Documentation",
      "Fix Verification",
    ],
  },
];

// Breadth of tooling, shown as a moving strip instead of another wall of chips.
export const tools = [
  "Jira",
  "Trello",
  "Planka",
  "ClickUp",
  "Slack",
  "Microsoft Teams",
  "Postman",
  "Playwright",
  "Selenium",
  "Appium",
  "Git",
  "GitHub",
  "GitLab",
  "Docker",
  "MySQL",
  "Figma",
  "AWS",
  "Firebase",
];

export const experience = [
  {
    role: "Project Coordinator & QA Engineer",
    company: "US-Based Technology Company",
    period: "Jan 2026 - Present",
    type: "Part time",
    current: true,
    impact: "Owns the path from ticket to verified release on a live ticket-selling platform.",
    points: [
      "Coordinate planning, prioritisation and progress tracking across the development workflow, and chase the clarifications that keep tickets moving.",
      "Automate end-to-end tests in Playwright for the ticket-selling journeys the business cannot afford to have break.",
      "Raise, document and verify defects, then confirm the fix holds before release.",
    ],
    tags: ["Project Coordination", "Playwright", "E2E Testing", "Agile"],
  },
  {
    role: "Project Management & Collaboration",
    company: "The Usual Next S.R.L",
    period: "Oct 2025 - Apr 2026",
    type: "Contract",
    impact: "Ran the board that kept a distributed team aligned for six months.",
    points: [
      "Ran Kanban boards end to end - sprint planning, backlog refinement and progress tracking against project goals.",
      "Validated requirements with developers so what shipped matched what the business actually asked for.",
      "Kept risks visible and handovers clean across a cross-functional team, using Git for tracking and peer review.",
    ],
    tags: ["Kanban", "Backlog Refinement", "Requirement Validation", "Git"],
  },
  {
    role: "Software Engineer Intern",
    company: "RootLogitech Pvt Ltd",
    period: "Nov 2024 - Oct 2025",
    type: "Internship",
    impact: "Built the APIs first - then learned to test and question them.",
    points: [
      "Built and supported backend APIs in Flask, Express and MySQL, with React and Material UI work on the front end.",
      "Tested those APIs in Postman and validated behaviour before it reached QA.",
      "Documented and verified defects, bridging development and QA activities.",
    ],
    tags: ["Flask", "Express", "MySQL", "React", "Postman", "Docker"],
  },
];

export const featuredProject = {
  title: "Leaf Sense",
  subtitle: "Smart Procurement System for Fresh Tea Leaf Evaluation",
  problem:
    "Fresh tea leaf was graded by eye at the collection point, so two officers could look at the same batch and price it differently. Suppliers had no way to challenge a grade, and procurement had no record to audit.",
  role: "Software and requirements contributor across the full system",
  contributions: [
    "Worked the whole path - image capture, environmental sensors, cloud services, backend APIs and the reporting dashboard.",
    "Drove requirements thinking through the workflow: what gets captured, how it is evaluated, and what procurement actually needs in order to decide.",
    "Sat across an architecture spanning Raspberry Pi, Python, FastAPI, AWS, machine learning components and a Next.js dashboard.",
  ],
  flow: [
    { step: "Capture", body: "Leaf imaged at intake, with environmental sensor readings recorded alongside it." },
    { step: "Evaluate", body: "Image processing and ML components grade the batch against consistent criteria." },
    { step: "Report", body: "Grades and readings surface in a dashboard, stored against supplier and batch." },
    { step: "Decide", body: "Procurement prices on measured quality, with an auditable record behind it." },
  ],
  stack: ["Raspberry Pi", "Python", "FastAPI", "AWS", "Machine Learning", "Next.js"],
};

export const education = [
  {
    qualification: "Bachelor of Software Engineering Honours (BSE)",
    institution: "The Open University of Sri Lanka",
    period: "2021 - Present",
    note: "Undergraduate",
  },
  {
    qualification: "G.C.E. Advanced Level - Physical Science with ICT",
    institution: "St. Anthony's Girls' College, Kandy",
    period: "2017 - 2020",
    note: "Passed | Z-score 0.3014",
  },
];

export const highlights = [
  {
    title: "Selected for the Winners Cycle",
    event: "NBQSA 2026",
    org: "Leaf Sense advanced from the second round",
  },
  {
    title: "2nd Place - Autonomous Robot Game",
    event: "Robotics Challenge, Impacto 2024",
    org: "The Open University of Sri Lanka (University Category)",
  },
  {
    title: "Selected Top 10",
    event: "Early Warning Innovation Challenge, FLASH 2025",
    org: "Disaster Management Center, WFP Sri Lanka & Ceylon Chamber of Commerce",
  },
  {
    title: "Senior Prefect & Society Leadership",
    event: "School leadership and extracurricular involvement",
    org: "Science Club, IT Society, Western Band and Drama Club",
  },
];

export const languages = ["Sinhala", "English"];

export const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "approach", label: "Approach" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
];
