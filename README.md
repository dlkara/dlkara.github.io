# 이현정 포트폴리오

개발 · AI · 보안 포트폴리오의 로컬 구현입니다. Vue 3, TypeScript, Vite로 구성했습니다.

## 다른 노트북에서 시작하기

Git, Node.js, npm이 필요합니다. 현재 로컬 빌드를 확인한 버전은 Node.js `26.7.0`, npm `11.19.0`입니다. Vite와 Vue 플러그인의 Node.js 요구 사항은 `^20.19.0 || >=22.12.0`이며, 정확한 의존성 버전은 `package-lock.json`에 저장되어 있습니다.

저장소: [dlkara/dlkara.github.io](https://github.com/dlkara/dlkara.github.io). 작업 브랜치는 `main`입니다.

```bash
git clone https://github.com/dlkara/dlkara.github.io.git portfolio-hjlee
cd portfolio-hjlee
npm ci
npm run dev
```

브라우저에서 터미널에 출력된 `Local` 주소를 엽니다. `npm ci`는 저장된 잠금 파일을 기준으로 의존성을 설치하므로, 노트북을 바꿀 때도 같은 패키지 버전을 사용할 수 있습니다.

이미 저장소를 복제했다면 작업 파일을 먼저 저장·커밋한 뒤 동기화합니다.

```bash
git status
git pull --ff-only
npm ci
npm run dev
```

`git pull --ff-only`가 실패하면 다른 노트북의 커밋과 현재 로컬 커밋의 관계를 확인한 뒤 해결합니다. 작업 내용을 잃을 수 있는 강제 초기화는 사용하지 않습니다.

## 작업을 마칠 때

```bash
npm run build
git status
git diff
git add <변경한 파일 경로>
git commit -m "변경한 내용을 설명하는 메시지"
git push
```

이 흐름은 원격 저장소와 추적 브랜치 설정을 마친 후 사용할 수 있습니다. 집에서 최신 내용을 받으려면 이전 노트북에서 푸시가 완료되어야 합니다.

빌드는 TypeScript 검사 후 `dist/`에 배포용 파일을 생성합니다. 빌드 결과를 로컬에서 보려면 `npm run preview`를 실행하고 터미널의 주소를 엽니다.

## 페이지

- `/`: 홈, 프로젝트, Lab, 기술, 소개
- `/work/dreamlens`: DreamLens 상세 사례

현재 저장소는 포트폴리오 프런트엔드입니다. 소개된 DreamLens의 Django·MySQL·OpenAI 서버 실행 환경은 해당 프로젝트 저장소에서 별도로 관리합니다.

## 파일별 역할

| 파일·폴더 | 역할 |
| --- | --- |
| `src/views/HomeView.vue` | 홈·프로젝트·Lab·기술·소개 |
| `src/views/DreamLensView.vue` | DreamLens 상세 사례 |
| `src/App.vue` | 공통 헤더·메뉴·푸터 |
| `src/main.ts` | 앱 시작, 라우팅, 페이지별 메타 정보 |
| `src/style.css` | 공통 스타일과 반응형 레이아웃 |
| `index.html` | 초기 HTML과 메타 정보 |
| `public/images/` | 포트폴리오 사진과 프로젝트 증거 이미지 |
| `artifacts/`, `art-direction-before-desktop.png` | 기존 화면 캡처·비교 자료 |
| `AGENTS.md` | 코딩 에이전트가 따라야 할 작업 규칙 |
| `.codex/skills/portfolio-design/` | 디자인 스킬과 콘텐츠·디자인·검증 기준 |

`AGENTS.md`와 `.codex/skills/portfolio-design/`은 Git에 포함되어 함께 복제됩니다. 다른 노트북의 코딩 에이전트도 작업 전에 이 파일들을 읽어야 합니다.

## 작업 전 확인할 지침

1. `AGENTS.md`를 읽습니다.
2. UI·콘텐츠 수정 시 [portfolio-design 스킬](.codex/skills/portfolio-design/SKILL.md)을 읽습니다.
3. 스킬의 [콘텐츠 근거](.codex/skills/portfolio-design/references/content-facts.md), [포트폴리오 방향](.codex/skills/portfolio-design/references/portfolio-brief.md), [디자인 기준](.codex/skills/portfolio-design/references/design-system.md), [QA 체크리스트](.codex/skills/portfolio-design/references/qa-checklist.md)를 확인합니다.
4. 화면을 수정하면 실제 페이지를 열고 1440px 데스크톱·390px 모바일에서 해당 흐름을 확인합니다. 기존 캡처만으로 변경 후 검증 완료를 판단하지 않습니다.

역할·기술·성과는 근거가 있는 범위에서만 작성하며, 직접 구현·기획·검증·AI 보조·모의 실습을 구분합니다. 미확인 내용은 추측하지 않고 확인 필요 상태로 남깁니다.

## 콘텐츠 근거와 미완성 자료

프로젝트 역할과 기술 표기는 [content-facts.md](.codex/skills/portfolio-design/references/content-facts.md), 사용자가 제공한 `이현정 마스터 경험 DB · 상세 v9.0.docx`, [DreamLens 공개 README](https://github.com/dlkara/DreamLens)를 기준으로 작성했습니다. About의 사진은 사용자가 제공한 파일입니다. DreamLens 실제 제품 화면 이미지, 이력서 파일, 이메일 주소, 상세 테스트 기록은 확인 전까지 자리표시자로 표시합니다.

경험 DB 원본 `.docx`는 이 저장소에 포함되어 있지 않습니다. 다른 노트북에서 원문을 확인해야 한다면 별도로 전달해야 합니다. 저장소에 정리된 콘텐츠 근거를 넘어 내용을 추가할 때는 원본 또는 새로운 신뢰할 수 있는 근거가 필요합니다.

홈에 표시된 ISMS-P·Proofolio 증거 자료도 추가 확인이 필요합니다. 기존 캡처는 당시 화면 기록이며, 이후 코드 변경의 검증 결과는 별도로 확인합니다.

## Git에 포함되는 자료

소스 코드, `package-lock.json`, 작업 지침, 콘텐츠 근거, 이미지와 기존 화면 캡처를 포함합니다. `node_modules/`, `dist/`, `.playwright-mcp/`, `.DS_Store`, `*.local`, `.env*`는 제외하며 `.env.example`만 허용합니다. 새 노트북에서는 의존성 설치와 빌드를 다시 실행합니다.
