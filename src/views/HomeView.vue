<script setup lang="ts">
import { RouterLink } from "vue-router";

const methods = [
  {
    number: "01",
    title: "Define",
    description: "요구사항과 서비스 구조를 정리했습니다.",
  },
  {
    number: "02",
    title: "Build",
    description: "담당 기능을 구현하고 동작을 확인했습니다.",
  },
  {
    number: "03",
    title: "Verify",
    description: "예상한 흐름과 실제 결과가 같은지 확인합니다.",
  },
  {
    number: "04",
    title: "Document",
    description: "일정·Git·프로젝트 문서를 관리했습니다.",
  },
];
</script>

<template>
  <main id="main">
    <section id="top" class="hero container" aria-labelledby="hero-title">
      <div class="hero-copy">
        <p class="eyebrow">
          <span class="eyebrow-mark"></span> SOFTWARE · AI · SECURITY
        </p>
        <h1 id="hero-title">
          서비스를 만들고,<br />작동하는지 확인하고,<br /><em
            >그 구조의 위험까지</em
          >
          봅니다.
        </h1>
        <p class="hero-description">
          융합보안공학을 전공하며 보안 기준을 공부했고,<br
            class="desktop-break"
          />
          실제 서비스에 어떻게 적용되는지 이해하기 위해<br
            class="desktop-break"
          />
          개발을 함께 공부했습니다.
        </p>
        <nav class="hero-actions" aria-label="주요 링크">
          <RouterLink class="text-link" to="/work/dreamlens"
            >View case study <span aria-hidden="true">↗</span></RouterLink
          >
          <div class="hero-utility-links">
            <a href="#resume">Resume</a>
            <a
              href="https://github.com/dlkara"
              target="_blank"
              rel="noopener noreferrer"
              >GitHub</a
            >
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </div>
      <aside class="hero-feature" aria-label="대표 프로젝트 DreamLens">
        <div class="hero-feature-topline">
          <span>01 / FEATURED WORK</span><span>DIRECT DEVELOPMENT</span>
        </div>
        <strong>DreamLens<span class="period">.</span></strong>
        <p class="hero-feature-summary">
          AI 꿈 해석과 기록을 하나의 서비스 흐름으로 연결한 Django 웹
          애플리케이션입니다.
        </p>
        <dl class="hero-feature-facts">
          <div>
            <dt>MY WORK</dt>
            <dd>꿈 조합기 LLM 로직·페이지 · 월별 분석 리포트 · 공통 헤더</dd>
          </div>
          <div>
            <dt>TEAM FLOW</dt>
            <dd>입력 → 유사 사례 검색 → AI 해석 → 기록 → 월별 리포트</dd>
          </div>
        </dl>
      </aside>
      <div class="hero-bottom-line">
        <span>01 / INTRODUCTION</span><span>SCROLL TO EXPLORE ↓</span>
      </div>
    </section>

    <section
      class="approach-section section-block"
      aria-labelledby="approach-title"
    >
      <div class="container">
        <div class="section-heading split-heading">
          <p class="section-kicker">02 / PERSPECTIVE</p>
          <h2 id="approach-title">
            Build <span>/</span> Verify <span>/</span> Secure
          </h2>
        </div>
        <div class="approach-grid">
          <article>
            <span class="row-number">01</span>
            <h3>BUILD</h3>
            <p>꿈 조합기 LLM 로직·페이지와 월별 분석 리포트를 구현했습니다.</p>
            <span class="approach-source">DreamLens / DIRECT DEVELOPMENT</span>
          </article>
          <article>
            <span class="row-number">02</span>
            <h3>VERIFY</h3>
            <p>배포 환경의 정적 파일 문제를 확인하고 설정을 수정했습니다.</p>
            <span class="approach-source">DreamLens / DEPLOYMENT QA</span>
          </article>
          <article>
            <span class="row-number">03</span>
            <h3>SECURE</h3>
            <p>역할별 접근을 구현하고 임시 권한의 업무 흐름을 분석했습니다.</p>
            <span class="approach-source">WEARUP + ISMS-P MOCK</span>
          </article>
        </div>
      </div>
    </section>

    <section
      id="work"
      class="work-section section-block"
      aria-labelledby="work-title"
    >
      <div class="container">
        <div class="section-heading work-heading">
          <p class="section-kicker">03 / SELECTED WORK</p>
          <h2 id="work-title">
            프로젝트에서<br /><em>맡은 일과 확인한 것</em>
          </h2>
          <p>
            프로젝트 전체 기능과 제가 직접 담당한 범위를 구분해 기록했습니다.
          </p>
        </div>

        <article class="featured-work">
          <div class="featured-intro">
            <div class="project-heading-line">
              <span>01 / FEATURED WORK</span><span>DIRECT DEVELOPMENT</span>
            </div>
            <h3>DreamLens<span class="period">.</span></h3>
            <p class="featured-summary">
              AI 꿈 해석과 기록을<br />하나의 서비스 흐름으로 연결한<br />Django
              웹 애플리케이션.
            </p>
            <RouterLink class="text-link feature-link" to="/work/dreamlens"
              >Case study 보기 <span aria-hidden="true">↗</span></RouterLink
            >
          </div>
          <div class="featured-evidence">
            <span class="meta-label">MY CONTRIBUTION / 직접 맡은 일</span>
            <ol>
              <li><span>01</span>스토리보드와 서비스 흐름 정리</li>
              <li><span>02</span>꿈 조합기 LLM 로직 및 페이지 구현</li>
              <li><span>03</span>월별 분석 리포트와 공통 헤더 구현</li>
              <li><span>04</span>배포·일정·Git·Notion 문서 관리</li>
            </ol>
            <div class="featured-proof">
              <RouterLink to="/work/dreamlens#retrieval">
                <span>01 / RETRIEVAL FLOW</span>
                <code>index.search(query_vector, top_k)</code>
                <p>
                  FAISS Top-k 결과를 해몽 prompt context로 연결한 팀 검색
                  흐름입니다.
                </p>
              </RouterLink>
              <RouterLink to="/work/dreamlens#problems">
                <span>02 / DEPLOYMENT FIX</span>
                <code>WhiteNoiseMiddleware</code>
                <p>
                  DEBUG=False 배포에서 정적 파일이 제공되도록 설정을
                  수정했습니다.
                </p>
              </RouterLink>
            </div>
            <div class="featured-evidence-footer">
              <span>TEAM STACK · Django / MySQL / OpenAI API / FAISS</span>
              <a
                href="https://github.com/dlkara/DreamLens"
                target="_blank"
                rel="noopener noreferrer"
                >GitHub source ↗</a
              >
            </div>
          </div>
        </article>

        <div class="secondary-work">
          <article class="secondary-project">
            <div class="secondary-top">
              <span>02 / BACKEND · ACCESS</span><span>TEAM PROJECT</span>
            </div>
            <h3>WEARUP</h3>
            <p>
              의류 구독·렌탈 팀 서비스에서 피드·관리자 기능을 구현하고,
              역할별 페이지 접근과 AWS 배포를 담당했습니다.
            </p>
            <div class="secondary-contribution">
              <span class="meta-label">MY CONTRIBUTION</span
              ><span
                >게시글·첨부·댓글 CRUD · 관리자 기능 · 접근 제어 · EC2/RDS
                배포</span
              >
            </div>
            <div class="secondary-code-evidence">
              <span>01 / ACCESS CONTROL</span>
              <code
                >requestMatchers(&quot;/admin/**&quot;).hasAuthority(&quot;ADMIN&quot;)</code
              >
              <p>관리자 경로를 ADMIN 권한으로 제한한 실제 설정입니다.</p>
              <a
                href="https://github.com/dlkara/WEARUP/blob/main/src/main/java/com/lec/spring/config/SecurityConfig.java"
                target="_blank"
                rel="noopener noreferrer"
                >SecurityConfig.java ↗</a
              >
            </div>
            <p class="scope-note">
              OUT OF SCOPE · 대여·재고 전체 도메인과 OAuth2 전체 구현
            </p>
          </article>
          <article class="secondary-project">
            <div class="secondary-top">
              <span>03 / SECURITY</span><span>MOCK CONSULTING</span>
            </div>
            <h3>ISMS-P <i>Mock</i> Consulting</h3>
            <p>
              임시 접근 권한의 업무 흐름을 모의 인터뷰로 확인하고, 접근 통제의
              위험을 분석한 수업 프로젝트입니다.
            </p>
            <div class="secondary-contribution">
              <span class="meta-label">MY CONTRIBUTION</span
              ><span>모의 인터뷰 · 접근 통제 분석 · 보고서·발표</span>
            </div>
            <p class="evidence-todo">
              EVIDENCE TODO · 모의 인터뷰 기록 또는 접근 통제 분석 보고서 일부
              필요
            </p>
            <p class="scope-note">
              교수님이 가상 회사 담당자 역할을 맡은 모의 인터뷰입니다.
            </p>
          </article>
        </div>
      </div>
    </section>

    <section
      class="security-section section-block"
      aria-labelledby="security-title"
    >
      <div class="container security-layout">
        <div class="security-intro">
          <p class="section-kicker">04 / SECURITY THINKING</p>
          <h2 id="security-title">
            구현한 기능이<br />어떤 접근 위험으로<br /><em
              >이어지는지 살펴봅니다.</em
            >
          </h2>
          <p>
            WEARUP에서는 역할별 페이지 접근을 구현했고, ISMS-P 모의
            컨설팅에서는 임시 권한이 남는 업무 흐름의 위험을 분석했습니다.
          </p>
        </div>
        <div class="security-rows">
          <div>
            <span>01 / ACCESS</span>
            <p>누가 무엇에 접근할 수 있는가</p>
          </div>
          <div>
            <span>02 / DATA</span>
            <p>어떤 정보가 저장되고 노출되는가</p>
          </div>
          <div>
            <span>03 / FAILURE</span>
            <p>예상과 다르게 동작하면 무엇이 문제가 되는가</p>
          </div>
        </div>
      </div>
    </section>

    <section
      class="method-section section-block"
      aria-labelledby="method-title"
    >
      <div class="container">
        <div class="section-heading split-heading">
          <p class="section-kicker">05 / HOW I WORK</p>
          <h2 id="method-title">프로젝트에서 한 일</h2>
        </div>
        <div class="method-list">
          <div v-for="step in methods" :key="step.number">
            <span>{{ step.number }}</span>
            <h3>{{ step.title }}</h3>
            <p>{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section
      id="lab"
      class="lab-section section-block"
      aria-labelledby="lab-title"
    >
      <div class="container">
        <div class="section-heading lab-heading">
          <p class="section-kicker">06 / LAB</p>
          <h2 id="lab-title">
            다른 방식으로<br /><em>서비스를 다뤄본 기록</em>
          </h2>
        </div>
        <div class="lab-list">
          <article>
            <div class="lab-index">
              <span>01</span><span>SERVICE DESIGN · PROTOTYPE</span>
            </div>
            <div>
              <h3>먹어도 돼?</h3>
              <p>
                HTML/CSS/JavaScript와 localStorage로 구현한 식품 알레르기 추천
                웹 프로토타입입니다. 출처와 확인일이 검증되지 않은 시연 제품은
                개인화 추천에서 제외했습니다.
              </p>
            </div>
            <span class="lab-aside">로컬 프로토타입 · API/DB 설계</span>
            <div class="lab-evidence">
              <figure>
                <a
                  class="evidence-image-frame"
                  href="/images/evidence/eat/search-results.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="먹어도 돼 검색 결과 프로토타입 원본 보기"
                >
                  <img
                    src="/images/evidence/eat/search-results.png"
                    alt="먹어도 돼 검색 결과 프로토타입 화면"
                    width="300"
                    height="510"
                    loading="lazy"
                    decoding="async"
                  />
                </a>
                <figcaption>
                  <span>01 / SEARCH FLOW · ACTUAL UI</span>
                  <p>
                    사용자 조건을 해석한 문장과 제품별 확인 상태를 함께 표시한
                    실제 프로토타입 화면입니다.
                  </p>
                </figcaption>
              </figure>
              <figure>
                <a
                  class="evidence-image-frame"
                  href="/images/evidence/eat/erd.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="먹어도 돼 ERD 원본 보기"
                >
                  <img
                    src="/images/evidence/eat/erd.png"
                    alt="먹어도 돼 사용자 알레르기 제품 출처 관계 ERD"
                    width="1800"
                    height="948"
                    loading="lazy"
                    decoding="async"
                  />
                </a>
                <figcaption>
                  <span>02 / DATA MODEL · DESIGN DOCUMENT</span>
                  <p>
                    사용자·알레르기·제품·출처의 관계를 정리한 설계 산출물이며,
                    운영 DB 구현 근거로 제시하지 않습니다.
                  </p>
                </figcaption>
              </figure>
            </div>
          </article>
          <article>
            <div class="lab-index">
              <span>02</span><span>PERSONAL · AI-ASSISTED</span>
            </div>
            <div>
              <h3>Proofolio</h3>
              <p>
                포트폴리오의 주장과 저장소 근거를 연결하는 서비스입니다. AI의
                도움을 받은 구현 과정에서 기획, 요구사항, 기능 정의, QA와 검증을
                중심으로 참여했습니다.
              </p>
            </div>
            <span class="lab-aside">기획 · QA · AI 협업</span>
            <p class="lab-evidence-todo">
              EVIDENCE TODO · 실제 화면 또는 저장소 근거 캡처 필요
            </p>
          </article>
        </div>
      </div>
    </section>

    <section
      class="skills-section section-block"
      aria-labelledby="skills-title"
    >
      <div class="container skills-layout">
        <div>
          <p class="section-kicker">07 / WORKING WITH</p>
          <h2 id="skills-title">사용해 본<br /><em>기술과 개념</em></h2>
          <p class="skills-note">
            숙련도 수치 대신 프로젝트에서 다룬 기술을 기록합니다.
          </p>
        </div>
        <dl class="skills-list">
          <div>
            <dt>BACKEND</dt>
            <dd>Java · Spring Boot · Python · Django</dd>
          </div>
          <div>
            <dt>FRONTEND</dt>
            <dd>Vue · TypeScript · HTML · CSS</dd>
          </div>
          <div>
            <dt>DATA</dt>
            <dd>PostgreSQL · MySQL</dd>
          </div>
          <div>
            <dt>AI</dt>
            <dd>OpenAI API · RAG · Embeddings · FAISS</dd>
          </div>
          <div>
            <dt>SECURITY</dt>
            <dd>ISMS-P 개념 · Linux · 접근 통제</dd>
          </div>
        </dl>
      </div>
    </section>

    <section
      id="about"
      class="about-section section-block"
      aria-labelledby="about-title"
    >
      <div class="container about-layout">
        <div class="about-side">
          <p class="section-kicker">08 / ABOUT</p>
          <figure class="about-portrait">
            <img
              src="/images/hjlee-portrait.jpg"
              alt="이현정 증명사진"
              width="425"
              height="567"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
        <div>
          <h2 id="about-title">이현정<span class="period">.</span></h2>
          <p class="about-education">성신여자대학교 융합보안공학과</p>
          <p class="about-lead">
            보안 기준이 실제 서비스에서 어떻게 적용되는지 궁금해 개발을
            공부했습니다.
          </p>
          <p class="about-body">
            DreamLens의 정적 파일 문제를 해결하며 로컬에서 작동한 기능도 배포
            환경에서 다시 확인해야 한다는 점을 배웠습니다. AI 응답을 개선할
            때는 모델에 제공하는 정보부터 살펴보게 됐습니다.
          </p>
          <div class="contact-grid">
            <div id="resume">
              <span class="meta-label">RESUME</span>
              <p>이력서 파일 확인 필요</p>
            </div>
            <div id="contact">
              <span class="meta-label">CONTACT</span>
              <p>이메일 주소 확인 필요</p>
            </div>
            <div>
              <span class="meta-label">PROJECT SOURCE</span
              ><a
                href="https://github.com/dlkara/DreamLens"
                target="_blank"
                rel="noopener noreferrer"
                >DreamLens GitHub ↗</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
