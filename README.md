# CMLT Semester 1 Study Site

A personal study site for CTEVT CMLT (Certificate in Medical Laboratory Technology) First Year students — exam strategy, a 20-day schedule, and real study notes for all 9 shared Health Science First Year subjects (Anatomy & Physiology, Chemistry, Physics, Botany, Zoology, Mathematics & Statistics, English, Nepali, Social Studies).

Plain static HTML/CSS/JS. No build step, no dependencies, no framework.

## Structure

```
.
├── index.html              # Homepage — strategy, schedule, subject grid, resource links
├── assets/
│   ├── style.css            # Shared design system
│   └── app.js                # Shared nav + localStorage-backed progress tracker
└── subjects/
    ├── anatomy.html
    ├── chemistry.html
    ├── physics.html
    ├── botany.html
    ├── zoology.html
    ├── math.html
    ├── english.html
    ├── nepali.html
    └── social.html
```

## Run locally

No build step needed — any static file server works:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

Opening `index.html` directly via `file://` also works, except the progress-tracker (localStorage) may be blocked by some browsers under `file://` — serving it locally avoids that.

## Deploy

Push this repo to GitHub, then import it in Vercel — no configuration needed, it's detected as a static site automatically. See deployment steps in the accompanying chat conversation.

## Notes

- Google Drive resource links (Syllabus/Notes) could not be independently verified due to auth-walling — worth a personal click-check.
- Content covers high-yield core topics per subject, not an exhaustive syllabus replacement.
