# Portfolio Project Instructions

## General

- Preserve the existing framework, architecture, routing, and component conventions unless there is a clear technical reason to change them.
- Make the smallest complete change needed for the task.
- Do not rewrite unrelated code.
- Do not add dependencies when the existing stack or browser APIs can solve the problem adequately.
- Do not invent project achievements, metrics, roles, technologies, dates, or user experience.
- If information is not present in the repository or in the portfolio content reference, mark it as missing rather than guessing.

## Portfolio content

The most important requirement is factual accuracy.

Before writing portfolio copy:

1. Read `.codex/skills/portfolio-design/references/content-facts.md`.
2. Distinguish clearly between:
   - direct implementation
   - planning/design
   - QA/validation
   - AI-assisted implementation
   - mock/simulation work
3. Never upgrade a planning or AI-assisted experience into direct implementation experience.
4. Do not invent numeric performance improvements or business outcomes.

## Web design

For portfolio UI, visual redesign, responsive layout, case-study pages, and visual refinement:

- Use the `portfolio-design` skill.
- Treat the skill references as the design source of truth for this project.
- Inspect the existing UI before making changes.
- Reuse existing components when they fit the design direction.
- Prioritize hierarchy, readability, credibility, and project evidence over decorative effects.
- Avoid generic AI-generated SaaS landing-page patterns.
- Use real project screenshots and diagrams whenever available instead of decorative stock visuals.

## Validation

When visible UI is changed and Playwright MCP is available:

- Open the actual rendered application.
- Validate the relevant flow.
- Check at least 1440px desktop and 390px mobile widths.
- Fix issues caused by the implementation before finishing.
- Never state that visual QA was completed unless the page was actually opened and inspected.

## Safety

Do not:
- push to remote repositories
- deploy
- create releases or tags
- expose secrets
- rewrite Git history

unless explicitly requested.