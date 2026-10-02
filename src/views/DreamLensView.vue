<script setup lang="ts">
import { RouterLink } from "vue-router";

const contents = [
  { number: "01", label: "Context", id: "context" },
  { number: "02", label: "My Role", id: "role" },
  { number: "03", label: "Service Flow", id: "flow" },
  { number: "04", label: "Architecture", id: "architecture" },
  { number: "05", label: "Key Decisions", id: "decisions" },
  { number: "06", label: "AI / Retrieval", id: "retrieval" },
  { number: "07", label: "Problem → Fix", id: "problems" },
  { number: "08", label: "Validation", id: "validation" },
  { number: "09", label: "Reflection", id: "reflection" },
  { number: "10", label: "Evidence", id: "evidence" },
];
</script>

<template>
  <main id="main" class="case-page">
    <div class="container case-back">
      <RouterLink class="text-link" to="/#work"
        ><span aria-hidden="true">←</span> Selected work</RouterLink
      >
    </div>
    <header class="case-hero container">
      <div class="case-topline">
        <span>CASE STUDY / 01</span
        ><span>DIRECT DEVELOPMENT · TEAM PROJECT</span>
      </div>
      <h1>DreamLens<span class="period">.</span></h1>
      <div class="case-lead-grid">
        <p>
          꿈 해석과 기록을<br />하나의 흐름으로 연결한<br /><em
            >Django 웹 서비스.</em
          >
        </p>
        <div>
          <span class="meta-label">PROJECT OVERVIEW</span>
          <p>
            AI 기반 한국어 꿈 해몽·일기·월별 리포트 웹 애플리케이션입니다. 이
            페이지는 공개 저장소와 제공된 경험 DB를 기준으로 팀 서비스 기능과
            개인 담당 범위를 구분합니다.
          </p>
        </div>
      </div>
      <div class="case-facts">
        <div>
          <span class="meta-label">DIRECT IMPLEMENTATION</span
          ><strong>꿈 조합기 LLM 로직·페이지 · 월별 리포트 · 공통 헤더</strong>
        </div>
        <div>
          <span class="meta-label">AI / RETRIEVAL</span
          ><span>OpenAI API 연동 · 프롬프트·검색 맥락 검토</span>
        </div>
        <div>
          <span class="meta-label">QA / VALIDATION</span
          ><span>배포 정적 파일 문제 확인·수정</span>
        </div>
        <div>
          <span class="meta-label">SOURCE</span
          ><a
            href="https://github.com/dlkara/DreamLens"
            target="_blank"
            rel="noopener noreferrer"
            >GitHub repository ↗</a
          >
        </div>
      </div>
    </header>

    <div class="container case-visual" role="note">
      <span>PRODUCT UI / 자료 확인 중</span>
      <p>실제 제품 화면 이미지가 확인되면 추가합니다.</p>
    </div>

    <div class="container case-body">
      <nav class="case-toc" aria-label="페이지 목차">
        <p>IN THIS CASE STUDY</p>
        <a v-for="item in contents" :key="item.id" :href="`#${item.id}`"
          ><span>{{ item.number }}</span
          >{{ item.label }}</a
        >
      </nav>
      <div class="case-content">
        <section id="context" class="case-section">
          <p class="section-kicker">01 / CONTEXT</p>
          <h2>어떤 서비스였나요?</h2>
          <p class="body-large">
            사용자가 입력한 꿈을 해석하고, 결과를 일기에 저장하며, 월별 리포트로
            다시 살펴볼 수 있는 서비스입니다.
          </p>
          <div class="fact-lines">
            <div>
              <span>INPUT</span>
              <p>꿈 텍스트 · 조합할 키워드</p>
            </div>
            <div>
              <span>SERVICE</span>
              <p>해몽 · 꿈 조합기 · 일기 · 꿈 사전</p>
            </div>
            <div>
              <span>OUTPUT</span>
              <p>해석 결과 · 월별 분석 리포트</p>
            </div>
          </div>
        </section>

        <section id="role" class="case-section">
          <p class="section-kicker">02 / MY ROLE</p>
          <h2>제가 맡은 범위</h2>
          <p>
            공개 저장소 README와 본인이 제공한 경험 DB에 기록된 팀장 역할과 담당
            업무를 기준으로 정리했습니다.
          </p>
          <div class="role-ledger">
            <article>
              <span class="meta-label">DIRECT IMPLEMENTATION</span>
              <h3>서비스 기능 구현</h3>
              <p>
                꿈 조합기 LLM 로직과 페이지, 월별 분석 리포트, 공통 헤더를
                구현했습니다.
              </p>
            </article>
            <article>
              <span class="meta-label">AI / RETRIEVAL</span>
              <h3>LLM 연동과 검색 흐름 검토</h3>
              <p>
                꿈 조합기에 OpenAI API를 연결했습니다. 일반적인 답변의 원인을
                참고 정보 부족으로 판단하고, 팀 서비스의 유사 사례 검색 흐름과
                프롬프트·출력 구조를 점검했습니다.
              </p>
            </article>
            <article>
              <span class="meta-label">QA / VALIDATION</span>
              <h3>배포 동작 확인</h3>
              <p>
                배포 환경의 정적 파일 문제를 확인하고 설정과 수집·제공 방식을
                수정했습니다.
              </p>
            </article>
          </div>
          <div class="scope-boundary">
            <span class="meta-label">OUT OF SCOPE / CONTRIBUTION BOUNDARY</span>
            <p>
              꿈 해몽·유사 꿈 검색·꿈 일기·로그인·접근 제어 전체와 독자적인
              임베딩 모델 개발, LLM 학습·fine-tuning은 개인 구현 범위가
              아닙니다.
            </p>
          </div>
        </section>

        <section id="flow" class="case-section flow-section">
          <p class="section-kicker">03 / SERVICE FLOW</p>
          <h2>사용자 경험의 다섯 단계</h2>
          <p>
            팀 서비스에서 사용자의 입력이 해석과 기록, 월별 확인으로 이어지는
            흐름입니다.
          </p>
          <ol class="service-journey" aria-label="DreamLens 팀 서비스 흐름">
            <li><span>01 / INPUT</span><strong>사용자 입력</strong></li>
            <li><span>02 / RETRIEVE</span><strong>유사 사례 검색</strong></li>
            <li><span>03 / INTERPRET</span><strong>AI 해석</strong></li>
            <li><span>04 / RECORD</span><strong>일기 저장</strong></li>
            <li><span>05 / REVIEW</span><strong>월간 리포트</strong></li>
          </ol>
        </section>

        <section id="architecture" class="case-section">
          <p class="section-kicker">04 / ARCHITECTURE</p>
          <h2>애플리케이션과 데이터의 연결</h2>
          <p>
            공개 저장소와 제공 자료에 기록된 기술만으로 팀 서비스 구조를
            정리했습니다.
          </p>
          <div
            class="system-flow"
            aria-label="사용자 입력에서 Django, AI 검색 및 기록, MySQL까지 이어지는 서비스 흐름"
          >
            <div><span>01 / USER</span><strong>꿈 입력</strong></div>
            <span class="flow-arrow" aria-hidden="true">↓</span>
            <div>
              <span>02 / APPLICATION</span
              ><strong>Django 웹 애플리케이션</strong
              ><small>해몽 · 꿈 조합기 · 일기 · 사전 · 리포트</small>
            </div>
            <span class="flow-arrow" aria-hidden="true">↓</span>
            <div class="flow-pair">
              <div>
                <span>03 / AI FLOW</span
                ><strong>OpenAI API + Embedding / FAISS</strong>
              </div>
              <div><span>04 / DATA</span><strong>MySQL</strong></div>
            </div>
          </div>
        </section>

        <section id="decisions" class="case-section">
          <p class="section-kicker">05 / KEY DECISIONS</p>
          <h2>답변의 근거를 다시 살펴보다</h2>
          <p>
            초기 해석이 일반적인 답변을 반복하자, 프롬프트 표현만이 아니라
            모델에 제공하는 정보가 충분한지 확인했습니다.
          </p>
          <div class="decision-list">
            <article>
              <span>01 / REFERENCE CONTEXT</span>
              <h3>참고 정보 추가</h3>
              <p>
                팀 서비스는 임베딩과 FAISS로 찾은 유사 꿈 데이터를 해석에
                참고하고, 프롬프트와 few-shot 예시를 활용했습니다.
              </p>
            </article>
            <article>
              <span>02 / SCOPE</span>
              <h3>Fine-tuning은 적용하지 않음</h3>
              <p>
                Fine-tuning을 검토했지만 실제로 수행하지는 않았습니다.
              </p>
            </article>
            <article>
              <span>03 / DATA QUALITY</span>
              <h3>맞지 않는 자료는 제외</h3>
              <p>
                팀 서비스에서는 오래된 해외 꿈 자료를 사용했을 때 답변이 이를
                지나치게 따르는 경향이 나타나 해당 자료를 제외했습니다.
              </p>
            </article>
          </div>
        </section>

        <section id="retrieval" class="case-section">
          <p class="section-kicker">06 / AI / RETRIEVAL</p>
          <h2>유사 사례를 해석에 활용</h2>
          <p>
            팀 서비스는 입력 꿈을 임베딩 벡터로 변환하고, FAISS로 유사한 사례를
            검색해 해몽 생성에 참고했습니다. 이 흐름은 팀 전체 시스템
            설명입니다. 개인이 모델을 학습하거나 독자적인 임베딩 모델을
            개발했다는 뜻이 아닙니다.
          </p>
          <ol class="retrieval-flow" aria-label="팀 서비스의 AI 검색 흐름">
            <li><span>01</span><strong>Input</strong></li>
            <li><span>02</span><strong>Embedding</strong></li>
            <li><span>03</span><strong>FAISS</strong></li>
            <li><span>04</span><strong>Top-k relevant cases</strong></li>
            <li><span>05</span><strong>Prompt context</strong></li>
            <li><span>06</span><strong>LLM response</strong></li>
          </ol>
          <div class="code-evidence-grid">
            <figure class="code-evidence">
              <figcaption>
                <span>01 / RETRIEVAL QUERY</span>
                <strong>Top-k 유사 사례 검색</strong>
              </figcaption>
              <pre><code v-pre>distances, indices = index.search(
  query_vector, top_k
)</code></pre>
              <p>팀 검색 흐름의 실제 저장소 코드 일부입니다.</p>
              <a
                href="https://github.com/dlkara/DreamLens/blob/main/utils/faiss_helper.py"
                target="_blank"
                rel="noopener noreferrer"
                >faiss_helper.py ↗</a
              >
            </figure>
            <figure class="code-evidence">
              <figcaption>
                <span>02 / PROMPT CONTEXT</span>
                <strong>검색 결과를 해석 맥락으로 구성</strong>
              </figcaption>
              <pre><code v-pre>context = "\n".join([
  f"유사 꿈: {r.get('꿈')}"
  for r in retrieved_items
])</code></pre>
              <p>검색된 사례가 모델 입력에 들어가는 지점을 보여줍니다.</p>
              <a
                href="https://github.com/dlkara/DreamLens/blob/main/utils/generator.py"
                target="_blank"
                rel="noopener noreferrer"
                >generator.py ↗</a
              >
            </figure>
          </div>
        </section>

        <section id="problems" class="case-section">
          <p class="section-kicker">07 / PROBLEM → FIX</p>
          <h2>배포 환경에서 깨진 화면</h2>
          <p class="evidence-caveat">
            본인 제공 경험 DB는 이 정적 파일 문제 해결을 담당 경험으로 기록하고
            있습니다.
          </p>
          <div class="problem-table">
            <div>
              <span>ISSUE</span><span>OBSERVATION</span><span>CHANGE</span
              ><span>VALIDATION</span>
            </div>
            <div>
              <div class="problem-cell">
                <span>ISSUE</span><strong>정적 파일 미반영</strong>
              </div>
              <div class="problem-cell">
                <span>OBSERVATION</span>
                <p>
                  로컬에서 보이던 CSS·JavaScript가 <code>DEBUG=False</code>
                  배포 환경에서는 제공되지 않았습니다.
                </p>
              </div>
              <div class="problem-cell">
                <span>CHANGE</span>
                <p>
                  정적 파일 설정과 <code>collectstatic</code>을 점검하고
                  WhiteNoise를 적용했습니다.
                </p>
              </div>
              <div class="problem-cell">
                <span>VALIDATION</span>
                <p>배포 환경에서 CSS·JavaScript가 다시 제공되는지 확인했습니다.</p>
              </div>
            </div>
          </div>
          <figure class="config-evidence">
            <figcaption>
              <span>REPOSITORY EVIDENCE / DEPLOYMENT CONFIG</span>
              <strong>정적 파일 수집·제공 설정</strong>
            </figcaption>
            <pre><code v-pre>'whitenoise.middleware.WhiteNoiseMiddleware'
STATIC_ROOT = BASE_DIR / 'staticfiles'
STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'</code></pre>
            <a
              href="https://github.com/dlkara/DreamLens/blob/main/dreamlens_project/settings.py"
              target="_blank"
              rel="noopener noreferrer"
              >settings.py에서 확인 ↗</a
            >
          </figure>
        </section>

        <section id="validation" class="case-section">
          <p class="section-kicker">08 / VALIDATION</p>
          <h2>확인한 결과와 검증 범위</h2>
          <p>
            경험 DB에는 배포 환경의 정적 파일 문제를 해결했다고 기록되어
            있습니다. AI 품질의 정량 평가 결과는 자료에 기록되어 있지 않으며,
            해석 방향과 출력 형식이 이전보다 안정됐다는 정성적 평가가 남아
            있습니다.
          </p>
          <div class="missing-evidence">
            <span>검증 범위</span>
            <p>
              제공된 자료에는 AI 품질의 정량 평가 수치가 없어, 정확도 향상이나
              오류율 감소를 성과로 제시하지 않습니다.
            </p>
          </div>
        </section>

        <section id="reflection" class="case-section">
          <p class="section-kicker">09 / REFLECTION</p>
          <h2>회고</h2>
          <p>
            AI 결과가 기대와 다르면 새로운 설정부터 더하기보다 모델에 어떤
            정보를 왜 제공하는지 먼저 확인하게 됐습니다. 배포 문제를 겪으며
            로컬에서 작동한 기능도 실제 실행 환경에서 다시 확인해야 한다는 점을
            배웠습니다.
          </p>
          <div class="future-improvements">
            <span class="meta-label">IF I DID IT AGAIN / 아직 적용하지 않음</span>
            <ul>
              <li>고정된 질의·기대 결과로 retrieval 품질을 비교하는 평가 기준</li>
              <li>주요 서비스 흐름과 배포 동작을 확인하는 테스트 자동화</li>
              <li>검색 결과와 응답 오류를 추적할 수 있는 observability</li>
              <li>프롬프트 변경 이력을 남기는 version management</li>
            </ul>
          </div>
        </section>

        <section id="evidence" class="case-section">
          <p class="section-kicker">10 / EVIDENCE</p>
          <h2>확인할 수 있는 근거</h2>
          <div class="evidence-list">
            <a
              href="https://github.com/dlkara/DreamLens"
              target="_blank"
              rel="noopener noreferrer"
              ><span>01 / REPOSITORY</span
              ><strong>DreamLens 공개 저장소와 README</strong
              ><span aria-hidden="true">↗</span></a
            >
            <a
              href="https://github.com/dlkara/DreamLens/blob/main/ERD/relation.erd"
              target="_blank"
              rel="noopener noreferrer"
              ><span>02 / DATA MODEL</span><strong>ERD 원본 파일</strong
              ><span aria-hidden="true">↗</span></a
            >
            <a
              href="https://github.com/dlkara/DreamLens/blob/main/DreamCombinerTest/CombineGPT.py"
              target="_blank"
              rel="noopener noreferrer"
              ><span>03 / DREAM COMBINER</span
              ><strong>LLM 로직 프로토타입 코드</strong
              ><span aria-hidden="true">↗</span></a
            >
            <a
              href="https://github.com/dlkara/DreamLens/blob/main/dreamlens_core/templates/report.html"
              target="_blank"
              rel="noopener noreferrer"
              ><span>04 / MONTHLY REPORT</span
              ><strong>월간 리포트 템플릿과 차트 구조</strong
              ><span aria-hidden="true">↗</span></a
            >
            <a
              href="https://github.com/dlkara/DreamLens/blob/main/utils/faiss_helper.py"
              target="_blank"
              rel="noopener noreferrer"
              ><span>05 / RETRIEVAL</span
              ><strong>FAISS Top-k 검색 구현</strong
              ><span aria-hidden="true">↗</span></a
            >
            <a
              href="https://github.com/dlkara/DreamLens/blob/main/dreamlens_project/settings.py"
              target="_blank"
              rel="noopener noreferrer"
              ><span>06 / DEPLOYMENT</span
              ><strong>WhiteNoise·정적 파일 설정</strong
              ><span aria-hidden="true">↗</span></a
            >
            <div>
              <span>07 / PRODUCT UI</span
              ><strong>dreamlens-combiner.png / monthly-report.png 필요</strong
              ><span>—</span>
            </div>
            <div>
              <span>08 / QA RECORD</span
              ><strong>dreamlens-deployment-qa.png 필요</strong><span>—</span>
            </div>
          </div>
          <RouterLink class="text-link case-end-link" to="/#work"
            ><span aria-hidden="true">←</span> Selected work로
            돌아가기</RouterLink
          >
        </section>
      </div>
    </div>
  </main>
</template>
