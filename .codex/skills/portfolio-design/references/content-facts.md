# Portfolio Content Facts

Use only facts listed here or facts explicitly present in the repository/assets.

If a claim cannot be supported, do not write it.

---

# Candidate

Name:
이현정

Academic background:
융합보안공학과

The user-provided experience DB v9.0 identifies the school as 성신여자대학교. It describes the candidate's path from studying security controls to learning development in order to understand how controls apply in working services.

The portrait photograph was provided by the user for this portfolio update.

Strengths that may be communicated through project presentation:
- documentation
- organization
- QA / validation
- service-flow thinking
- interest in development and security

Do not use unsupported personality claims such as:
- exceptional leadership
- outstanding engineering expertise
- security expert
- full-stack expert

---

# DreamLens

## Status

Primary direct-development project.

## What it is

AI-based Korean dream interpretation and diary web application.

Main service areas include:

- dream interpretation
- diary
- monthly report
- dream dictionary
- keyword combination

## Technology used

- Python
- Django
- MySQL
- Chart.js
- OpenAI API
- embeddings
- FAISS
- WhiteNoise

## AI / retrieval

The project used:
- embeddings
- FAISS similarity retrieval
- retrieved context for interpretation
- Top-k retrieval

Do not say:
- trained an LLM
- developed a proprietary embedding model
- fine-tuned GPT
unless new evidence explicitly supports it.

## Valid contribution themes

- web application development
- AI API integration
- retrieval flow
- prompt/output structure
- diary/report service flow
- QA and service behavior validation

## Public README attribution

Source: https://github.com/dlkara/DreamLens

The README lists the candidate's main contribution as:

- storyboard and service-flow organization
- dream combiner LLM logic and page implementation
- monthly analysis report implementation
- shared header implementation
- deployment, schedule, Git, Notion, and project-document management

Dream interpretation, similar-case retrieval, dream diary, login, and access control are team service features. Do not attribute all of them to the candidate without more specific evidence.

## User-provided experience DB v9.0

- Team project and team-lead role; project period: 2025-07-27 to 2025-08-07.
- The initial direct LLM interpretation produced generic responses. The candidate identified missing reference context as a likely cause. Fine-tuning was considered but not performed.
- The project used similar dream data via embeddings and FAISS, refined prompts, and few-shot examples. Older overseas dream data was tried and removed because responses followed it too closely. Do not claim sole implementation of the team's retrieval feature.
- No quantitative AI quality evaluation is documented. The reported outcome is that interpretation direction and output format became more stable.
- The candidate reports fixing missing CSS/JavaScript in a `DEBUG=False` deployment by checking static-file settings, running `collectstatic`, and applying WhiteNoise. The DB says the repository contains related configuration changes.
- Reflection: inspect what information is supplied to the model before changing settings; local success does not guarantee correct behavior in the deployment environment.

## Portfolio priority

Highest.

Use as the primary featured project.

---

# WEARUP

## User-provided experience DB v9.0

Team project, 2025-05-15 to 2025-06-05. The service is a clothing subscription/rental platform.

The candidate's recorded work includes:

- feed post, attachment, and comment CRUD
- administrator sales and member management
- role-based page access control
- Daum address-search API integration
- AWS EC2/RDS deployment and deployment automation script
- GitHub and project-document management

The earlier QA/user-flow notes cover signup and redirect issues. They may be included as an additional theme, but must not replace the more specific backend, access-control, and deployment contribution recorded in the newer user-provided DB.

Do not imply:
- sole development of the entire service
- ownership of the complete architecture

Position primarily as:
BACKEND / ACCESS CONTROL / DEPLOYMENT

Do not imply that the candidate implemented the entire rental/inventory domain or all OAuth2 work.

---

# ISMS-P Mock Consulting

## Mandatory wording constraint

This was a mock consulting experience.

The interview was not performed with actual corporate practitioners.

The professor played the role of a virtual company representative.

Never write:
- interviewed six actual company practitioners
- conducted interviews with real employees
- performed consulting for a real company

## Valid focus

- temporary access privileges
- access-control risk
- security-process analysis
- mock interview
- report/presentation

Suggested label:

ISMS-P Mock Consulting

---

# 먹어도 돼?

## Context

SKALA AI web-service mini project.

B2C allergy-food recommendation concept/prototype.

## Valid project artifacts

- service overview
- requirements
- actor/use case
- UI flow
- screen design
- ERD
- DB specification
- API/Swagger documentation
- presentation

## Main product concepts

- login/signup
- multiple allergy selection
- recommendation
- food search
- product detail
- allergy information
- mobile-first UI

## Important positioning

Present mainly as:

SERVICE DESIGN · PROTOTYPE

The user-provided experience DB v9.0 distinguishes the implemented HTML/CSS/JavaScript and `localStorage` prototype from API, PostgreSQL/DBML, and authentication designs for a possible operating service. Its seven demonstration products lacked verified source/date evidence and were excluded from personalized recommendations. The prototype did not perform a medical safety assessment or connect a live LLM search.

Do not imply:
- production-scale launch
- validated commercial performance
- mature medical recommendation system

---

# Proofolio

## Project

Portfolio evidence web application.

## Stack

- Vue 3
- TypeScript
- Vite
- Spring Boot
- Java
- JPA
- PostgreSQL
- GitHub OAuth

## Product concept

Repository analysis and:

Claim → Evidence

mapping for portfolio evidence.

Includes work around:
- GitHub repository analysis
- portfolio claims
- evidence
- drafts/revisions
- public snapshot/share concepts

## Critical attribution requirement

This was heavily AI-assisted / vibe-coded.

The candidate's contribution should emphasize:

- planning
- requirements
- QA
- feature definition
- validation
- product structure

Do not use this project as proof of extensive manual coding ability.

Always allow an AI-assisted label to remain visible.

Suggested:

PERSONAL · AI-ASSISTED

---

# ActorLab

Do not include as a main portfolio project.

The project was stopped and implementation scope was limited.

If ever included:
- requirements
- PoC
- prompt design
only.

Do not present as a completed production service.

---

# Skills

Technologies that may appear when relevant:

Backend:
- Java
- Spring Boot
- Python
- Django

Frontend:
- Vue
- TypeScript
- HTML
- CSS

Data:
- PostgreSQL
- MySQL

AI:
- OpenAI API
- RAG
- embeddings
- FAISS
- LangChain
- LangGraph

Security / systems:
- ISMS-P concepts
- Linux
- access control

Never attach percentage proficiency scores.

---

# Writing rules

Prefer:

"구현했습니다"
only when implementation is directly supported.

Use:

"설계했습니다"
"정리했습니다"
"검증했습니다"
"개선했습니다"
"AI의 도움을 받아 구현했습니다"

when those are more accurate.

Do not convert activities into inflated outcomes.

Never invent:
- users
- revenue
- latency gains
- conversion
- accuracy
- traffic
- business adoption
- production scale
