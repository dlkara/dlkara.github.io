import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import HomeView from "./views/HomeView.vue";
import DreamLensView from "./views/DreamLensView.vue";
import "./style.css";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomeView,
      meta: {
        title: "이현정 — Build · Verify · Secure",
        description:
          "이현정의 개발·AI·보안 포트폴리오. 서비스를 만들고, 작동을 확인하고, 구조의 위험을 살펴봅니다.",
      },
    },
    {
      path: "/work/dreamlens",
      component: DreamLensView,
      meta: {
        title: "DreamLens 사례 연구 — 이현정",
        description:
          "AI 기반 한국어 꿈 해몽·일기·월별 리포트 팀 프로젝트에서 이현정이 맡은 구현, AI 연동, 배포 검증 범위를 정리한 사례 연구입니다.",
      },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    if (to.hash) return { el: to.hash, top: 88 };
    if (to.path !== from.path) return { top: 0 };
    return undefined;
  },
});

router.afterEach((to) => {
  const title = String(to.meta.title);
  const description = String(to.meta.description);

  document.title = title;
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute("content", description);
  document
    .querySelector('meta[property="og:title"]')
    ?.setAttribute("content", title);
  document
    .querySelector('meta[property="og:description"]')
    ?.setAttribute("content", description);
  document
    .querySelector('meta[name="twitter:title"]')
    ?.setAttribute("content", title);
  document
    .querySelector('meta[name="twitter:description"]')
    ?.setAttribute("content", description);
});

createApp(App).use(router).mount("#app");
