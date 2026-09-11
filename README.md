# Mudassir Shah — Academic Portfolio

Static, GitHub Pages-ready portfolio inspired by the editorial layout of
Chiara Gallese, PhD's AI & Law website.

## Files

```text
index.html          Main page and content
css/style.css       Typography, layout, responsive styling
js/main.js          Navigation and publication rendering
assets/             Local photography and favicon
.github/workflows/  GitHub Pages deployment workflow
```

## Run locally

No build step or package installation is required:

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000`.

## Content included

- Research profile and academic biography
- Eight publications with six DOI links
- Google Scholar and ResearchGate profile links
- Downloadable CV linked from the hero section
- Education
- An intentionally empty Collaboration section for future additions
- A screenshot-inspired contact form with a light portfolio treatment

The phone number, Skills & Expertise, Languages, Achievements & Honours,
PhD Research block, four separate research-focus cards, quick-links cards,
and Experience section were removed as requested.

## Publish with GitHub Pages

Push the folder to a GitHub repository and enable GitHub Actions under
Settings → Pages. The included workflow deploys the static site automatically.