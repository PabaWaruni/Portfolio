# Paba Karunarathne - Portfolio

Personal portfolio for **Paba Karunarathne** - Junior Business Analyst, Project
Coordinator, with a software engineering background.

Built with React (Create React App) and hand-written CSS. No UI framework.

## Getting started

```bash
npm install
npm start        # http://localhost:3000
npm run build    # production bundle in ./build
```

## Editing the content

Almost everything on the page is driven by a single file:

```
src/data/content.js
```

It is grounded in `Paba_Karunarathne_CV.pdf` but written in portfolio voice, not
CV bullets. When the CV changes, update that file and the site follows.

| Export | What it drives |
| --- | --- |
| `profile` | Name, role, hero headline, summary, about copy, links, CV path |
| `stats` | The four-up strip under the hero (qualitative - no invented figures) |
| `processSteps` | Discover / Define / Deliver / Verify in **Approach** |
| `workedExample` | The user story + acceptance criteria artifact card |
| `skillGroups` | The five capability cards |
| `tools` | The scrolling tool marquee |
| `experience` | Timeline roles, each with an `impact` headline and 3 points |
| `featuredProject` | The Leaf Sense case study: problem, contributions and system flow |
| `education`, `highlights`, `languages` | About sidebar |
| `navLinks` | Navbar, drawer, footer and scroll-spy |

Keep role `points` to about three each - the section is a pitch, not a CV dump.

## Structure

```
public/
  Paba_Karunarathne_CV.pdf   downloadable CV (served from the site)
src/
  App.css                    design tokens + all component styles
  data/content.js            all site content
  hooks/useReveal.js         scroll reveal + active-section tracking
  components/
    NavBar.js  Hero.js   About.js    Experience.js
    Approach.js  Skills.js  Work.js  Contact.js
    Footer.js  Icons.js
```

## Contact form

Submissions go to [Web3Forms](https://web3forms.com). The access key is a public
client-side key. To use a different one without editing the source, add:

```
REACT_APP_WEB3FORMS_KEY=your-key-here
```

to a `.env.local` file.

## Hero portrait

`src/assets/img/portrait.jpg` is the source photo cropped 3:4 (headroom down to
mid-thigh, centred on the subject) and downscaled to 1000x1333 at quality 86
(~141 KB). It keeps its background and sits in a framed card.

Regenerate from a new photo with `ImageOps.exif_transpose`, the same crop ratios,
then `resize((1000, 1333), LANCZOS)`.

## Design

White ground (`#ffffff`) with a single violet accent (`#7c3aed`). Neutrals carry a
faint violet tint (`--surface`, `--line`) so the palette reads as one family
rather than a hue dropped onto grey. All colours, radii and easing live as CSS
custom properties in the `:root` block at the top of `src/App.css` - swapping that
one block flips the whole site's theme.

Every text/background pair clears WCAG AA; the weakest is muted text on the alt
band at 5.12:1. Note that on white `--accent-bright` is the *darker*, stronger
emphasis colour rather than a lighter one - keep that inverted relationship if you
retheme. Violet-500 (`#8b5cf6`) is deliberately avoided: at 4.23:1 it fails AA for
text on white.

The `.grad` class applies the accent gradient to a phrase inside a heading - used
sparingly, once per section at most.

The hero portrait sits in a rounded card with a hairline border, soft shadow and
a bottom gradient (`.portrait::after`) that fades it into the page.

Respects `prefers-reduced-motion`: reveals resolve immediately and the tool
marquee stops animating and becomes scrollable instead.

### Sections

`Hero` -> `About` (01) -> `Experience` (02) -> `Approach` (03) -> `Skills` (04)
-> `Work` (05) -> `Contact` (06)

**Approach** is the differentiator: it shows a worked requirement - a real user
story with Given/When/Then acceptance criteria and an explicit out-of-scope line -
rather than just listing "User Stories" as a skill. Swap `workedExample` for a
genuine artifact from a project whenever you have one to share.

**Work** is deliberately a single case study. The earlier university coursework
(Android, PHP, React practice builds and Figma UI files) was removed - basic
first-year work dilutes a BA/PM pitch - and is now a one-line pointer to GitHub.
To feature another project, add a second entry alongside `featuredProject` rather
than reinstating a thumbnail grid.
