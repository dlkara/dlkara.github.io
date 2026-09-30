---
name: portfolio-design
description: Design, implement, or refine this developer/AI/security portfolio and its project case studies using an editorial, evidence-led visual system while preserving factual accuracy and validating the rendered result.
---

# Portfolio Design Skill

Use this skill when working on:

- portfolio home
- project case studies
- project cards
- About page
- developer portfolio copy
- portfolio responsive layout
- portfolio visual design
- motion and interaction
- portfolio QA

Before implementation, read:

1. `references/content-facts.md`
2. `references/portfolio-brief.md`
3. `references/design-system.md`
4. `references/qa-checklist.md`

Do not infer missing facts.

---

## 1. Core design concept

The portfolio is an:

**Evidence-led Editorial Technical Portfolio**

It should feel:

- editorial
- technical
- restrained
- credible
- carefully art-directed
- modern without looking trendy for its own sake

It should not feel like:

- a generic AI SaaS landing page
- a template portfolio
- a cyberpunk security website
- a Dribbble concept with poor information density
- an animation demo
- a collection of identical cards

The primary message is:

> 서비스를 만들고, 작동하는지 확인하고, 그 구조의 위험까지 봅니다.

The portfolio connects three ways of working:

1. Build
2. Verify
3. Secure

Do not artificially divide the candidate into “50% developer / 50% security”.

Present development, QA, AI, and security as connected perspectives on how services operate.

---

## 2. Inspect before changing

Before coding:

- identify framework
- routing
- styling approach
- reusable components
- typography setup
- current design tokens
- responsive breakpoints
- available project screenshots/assets

Do not inspect unrelated files unnecessarily.

If this is an empty repository:

Prefer:

- Vue 3
- TypeScript
- Vite

Use modern CSS and CSS variables first.

Do not install a large UI framework unless necessary.

Use motion libraries only where motion provides meaningful interaction feedback.

---

## 3. Information architecture

Primary navigation:

- Work
- Lab
- About
- Resume

Main page sequence:

1. Hero
2. Build / Verify / Secure
3. Selected Work
4. Security Thinking
5. How I Work
6. Lab
7. Working With
8. About / Contact

Selected Work:

1. DreamLens — primary featured project
2. WEARUP — backend, access-control, and deployment contribution
3. ISMS-P Mock Consulting — security case study

Lab:

1. 먹어도 돼?
2. Proofolio

Do not add ActorLab as a primary project.

---

## 4. Hero

The hero should prioritize typography and one meaningful project visual.

Primary headline:

서비스를 만들고,
작동하는지 확인하고,
그 구조의 위험까지 봅니다.

Supporting copy:

개발과 보안을 따로 보기보다,
실제 서비스가 어떤 구조로 동작하고
어디에서 문제가 생길 수 있는지 함께 살펴봅니다.

Optional metadata:

Software · AI · Security

Do not use:

- gradient headline
- animated typing effect
- particles
- floating glass cards
- decorative dashboard metrics
- large generic profile portrait

Prefer a cropped real DreamLens product image as the visual anchor.

---

## 5. Build / Verify / Secure

Use a restrained editorial row, not three floating cards.

Example:

01 BUILD
서비스를 직접 구현하고 동작 흐름을 확인합니다.

02 VERIFY
결과가 의도대로 나오는지 테스트하고 수정합니다.

03 SECURE
권한·데이터·운영 과정에서 생길 수 있는 위험을 봅니다.

The layout should rely on:
- typography
- rules/dividers
- spacing
- grid alignment

not card decoration.

---

## 6. Selected Work

Do not create three equal project cards.

### DreamLens

Give DreamLens significantly more visual space.

Show:

- project title
- concise description
- real screenshot
- role
- focus
- compact stack
- link to case study

Suggested copy:

AI 꿈 해석과 기록을 하나의 서비스 흐름으로 연결한 웹서비스.

Supporting team-service summary:

사용자 입력 → 유사 사례 검색 → AI 해석 → 일기 저장 → 월간 리포트가 하나의 서비스 흐름에 포함됩니다. 개인 구현 범위는 별도로 표시합니다.

Avoid invented impact metrics.

### WEARUP

Position as:

**BACKEND · ACCESS CONTROL · DEPLOYMENT**

Focus on:
- feed and administrator features
- role-based page access
- AWS EC2/RDS deployment
- relevant signup/redirect QA when supported

Do not imply full ownership of the entire application.

### ISMS-P Mock Consulting

Always label:

**ISMS-P Mock Consulting**

Never imply interviews with real corporate practitioners.

Clearly state that the professor played the role of a virtual company representative.

---

## 7. Case-study structure

Every substantial case study should follow approximately:

01 Context  
02 My Role  
03 System  
04 Key Decisions  
05 Problem → Fix  
06 Validation  
07 Reflection  
08 Evidence

For AI/RAG projects, an additional:

AI / Retrieval

section may be included.

---

## 8. Contribution boundary

Contribution boundaries are an important design element.

Near the top of each case study, include a section such as:

MY CONTRIBUTION

and, when useful:

OUT OF SCOPE / NOT MY WORK

Example:

MY CONTRIBUTION

- 스토리보드와 서비스 흐름 정리
- 꿈 조합기 LLM 로직과 페이지 구현
- 월별 분석 리포트와 공통 헤더 구현
- 배포·일정·프로젝트 문서 관리

NOT MY WORK

- training a foundation model
- developing a proprietary embedding model

Only include statements supported by `content-facts.md`.

---

## 9. Problem-solving presentation

Prefer:

ISSUE  
OBSERVATION  
CHANGE  
RESULT

or:

PROBLEM  
CAUSE  
DECISION  
VALIDATION

Do not transform qualitative outcomes into invented numerical outcomes.

If no measured metric exists, report the result qualitatively.

---

## 10. Architecture

Architecture diagrams should be simplified for portfolio readability.

Prefer:

User
↓
Application
├── Feature
├── Feature
└── AI flow
    ↓
Embedding
    ↓
Vector search
    ↓
Retrieved context
    ↓
LLM

Do not paste highly complex autogenerated diagrams without editorial simplification.

---

## 11. Security section

Use a dedicated editorial section.

Suggested title:

I don't treat security
as a final checklist.

Supporting copy:

기능을 만든 뒤 보안을 덧붙이기보다,
권한·데이터·사용 흐름 안에서
문제가 생길 지점을 함께 확인하려고 합니다.

Structure:

ACCESS  
누가 무엇에 접근할 수 있는가

DATA  
어떤 정보가 저장되고 노출되는가

FAILURE  
예상과 다르게 동작하면 무엇이 문제가 되는가

Do not style these as three generic cards.

---

## 12. How I Work

Use four compact editorial steps:

01 Define  
해야 하는 것과 하지 않는 것을 먼저 구분합니다.

02 Build  
작은 단위로 구현하면서 동작을 확인합니다.

03 Verify  
예상한 흐름과 실제 결과가 같은지 직접 확인합니다.

04 Document  
결정과 문제 해결 과정을 다시 볼 수 있도록 남깁니다.

---

## 13. Lab

Lab should visually distinguish:

- direct implementation projects
- prototype/design projects
- AI-assisted projects

### 먹어도 돼?

Label appropriately as:

SERVICE DESIGN · PROTOTYPE

Focus on:
- requirements
- user flow
- screen design
- ERD
- API specification
- Swagger artifacts

Do not exaggerate production readiness.

### Proofolio

Clearly label:

PERSONAL · AI-ASSISTED

Explain that AI/Codex assisted implementation.

Emphasize:
- requirements
- product structure
- QA
- security boundaries
- evidence-oriented portfolio concept

Do not present it as proof that every implementation detail was manually coded by the candidate.

---

## 14. Skills presentation

Never use percentage proficiency bars.

Avoid:

Java 90%
Python 80%

Prefer:

WORKING WITH

Backend
Java · Spring Boot · Python · Django

Frontend
Vue · TypeScript · HTML / CSS

AI
OpenAI API · RAG · LangChain / LangGraph

Data
PostgreSQL · MySQL

Security
ISMS-P · Linux · Access Control

Only include technologies supported by the content reference.

---

## 15. Visual behavior

Use motion sparingly.

Good:
- opacity + 8px entrance
- subtle image scale on hover
- underline transition
- small section reveal
- navigation active state

Typical duration:
180–350ms

Avoid:
- mouse-following blobs
- particle backgrounds
- text scramble
- infinite floating animation
- excessive parallax
- magnetic cursor
- 3D tilt everywhere
- stagger animation on every element

Respect `prefers-reduced-motion`.

---

## 16. Responsive behavior

Desktop and mobile are different compositions.

Do not merely shrink desktop.

Default validation:

- Desktop: 1440px
- Mobile: 390px

Check an intermediate width if layout meaningfully changes.

Mobile:
- stack project visual and content
- preserve hierarchy
- avoid excessive padding
- maintain comfortable touch targets
- ensure long Korean text wraps naturally

---

## 17. Completion

Before finishing:

- confirm all content is factual
- confirm no project role was exaggerated
- verify desktop
- verify mobile
- verify navigation
- verify project links
- check overflow
- check heading hierarchy
- check keyboard focus
- check motion reduction
- check basic contrast
- confirm no unnecessary dependency was introduced
