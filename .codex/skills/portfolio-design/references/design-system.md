# Portfolio Design System

## Direction

Editorial × Technical × Quiet

The interface should feel intentionally designed without appearing decorative.

---

# Color

Base:

--bg: #F5F4EF;
--surface: #FFFFFF;

--text: #171717;
--text-secondary: #686868;
--line: #D8D7D1;

Accent:

--accent: #315B61;
--accent-soft: #DCE8E6;

Error/status colors may be introduced only where semantically necessary.

Do not use:
- purple-blue AI gradient
- neon cyan
- glowing borders
- multi-color mesh gradient

---

# Typography

Primary:
Pretendard Variable, with sensible Korean system fallbacks.

Technical metadata:
Geist Mono or IBM Plex Mono if already available or inexpensive to add.

Suggested desktop scale:

Hero:
56–68px

H1:
48–56px

H2:
36–44px

H3:
22–26px

Body large:
18px

Body:
16px

Meta:
13–14px

Do not introduce many intermediate sizes.

Use fluid sizing where appropriate with clamp().

---

# Line length

Body prose:

approximately 55–70 characters / reasonable Korean equivalent.

Do not allow long desktop paragraphs to span the full container.

---

# Grid

Desktop:

max-width:
1240px

page horizontal padding:
32px

Use a 12-column conceptual grid.

Common compositions:

Hero:
7 / 5

Featured project:
4 / 8

About:
3 / 7

Do not force every section into the same alignment.

---

# Mobile

Primary target:
390px

Typical page padding:
20px

Recompose layouts instead of shrinking desktop columns.

---

# Spacing

Prefer a restrained spacing scale.

Suggested:

4
8
12
16
24
32
48
64
96
128

Use larger spacing between editorial sections.

Avoid putting every section inside a bordered container.

---

# Radius

Use radius selectively.

Suggested:
4–12px

Large pill-like 24–40px radii should not become the default.

Images/screenshots may use slightly larger radius if it improves presentation.

---

# Borders

Use:
1px subtle rules

for:
- section division
- metadata
- selected interactions

Prefer rules/dividers to card outlines.

---

# Shadows

Very subtle only.

Avoid floating elevation on every element.

---

# Buttons

Primary CTA should be visually clear but quiet.

Examples:

View case study →
Resume ↗
GitHub ↗

Do not create many oversized pill buttons.

---

# Images

Prefer:
- real project UI
- diagrams
- project documents
- architecture visuals

Avoid:
- generic stock illustration
- AI-generated abstract 3D objects
- fake dashboards

Screenshots should be editorially cropped.

Do not automatically place everything in a laptop/phone mockup.

---

# Motion

Default:

duration:
180–350ms

easing:
smooth and restrained

Recommended:
- opacity transition
- y: 6–10px
- image hover scale: about 1.01–1.02
- underline movement
- subtle nav transition

No continuous decorative motion.

Respect:
prefers-reduced-motion

---

# AI slop patterns to avoid

Do not default to:

- huge gradient heading
- purple gradient
- three-card feature section
- rounded cards nested inside rounded cards
- glass navbar
- random glow
- “Trusted by” logo strip without real companies
- fake dashboard metrics
- badges with meaningless labels
- artificial testimonials
- decorative graph
- excessive pills
- huge empty hero + one CTA
- 3D floating object
- background particle animation
- generic "innovating the future" copy

---

# Reference usage

References may be taken conceptually from:

- World-Class Web Design OS
- Anti-Slop Design
- Superdesign Prompts
- Awesome Claude Design
- MotionSites
- OriginKit
- Mobbin
- Page Flows

Do not copy an existing site's distinctive composition verbatim.

Extract:
- hierarchy
- rhythm
- interaction patterns
- typography discipline
- layout ideas

and adapt them to this portfolio.