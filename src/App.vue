<script setup lang="ts">
import { ref, watch } from "vue";
import { RouterLink, RouterView, useRoute } from "vue-router";

const route = useRoute();
const menuOpen = ref(false);

watch(
  () => route.fullPath,
  () => {
    menuOpen.value = false;
  },
);
</script>

<template>
  <a class="skip-link" href="#main">본문으로 바로가기</a>
  <div class="site-shell">
    <header class="site-header">
      <div class="container header-inner">
        <RouterLink class="brand" to="/" aria-label="이현정 포트폴리오 홈"
          >HJ<span class="brand-period">.</span></RouterLink
        >
        <button
          class="menu-toggle"
          type="button"
          :aria-expanded="menuOpen"
          aria-controls="primary-nav"
          :aria-label="menuOpen ? '메뉴 닫기' : '메뉴 열기'"
          @click="menuOpen = !menuOpen"
        >
          <span></span><span></span>
        </button>
        <nav
          id="primary-nav"
          class="primary-nav"
          :class="{ 'is-open': menuOpen }"
          aria-label="주 메뉴"
        >
          <RouterLink v-slot="{ href, navigate }" to="/#work" custom>
            <a
              :href="href"
              :aria-current="route.hash === '#work' ? 'location' : undefined"
              @click="navigate"
              >Work</a
            >
          </RouterLink>
          <RouterLink v-slot="{ href, navigate }" to="/#about" custom>
            <a
              :href="href"
              :aria-current="route.hash === '#about' ? 'location' : undefined"
              @click="navigate"
              >About</a
            >
          </RouterLink>
          <RouterLink v-slot="{ href, navigate }" to="/#resume" custom>
            <a
              class="nav-resume"
              :href="href"
              :aria-current="route.hash === '#resume' ? 'location' : undefined"
              @click="navigate"
              >Resume <span aria-hidden="true">↗</span></a
            >
          </RouterLink>
          <a
            href="https://github.com/dlkara"
            target="_blank"
            rel="noopener noreferrer"
            >GitHub <span aria-hidden="true">↗</span></a
          >
          <RouterLink v-slot="{ href, navigate }" to="/#contact" custom>
            <a
              :href="href"
              :aria-current="route.hash === '#contact' ? 'location' : undefined"
              @click="navigate"
              >Contact</a
            >
          </RouterLink>
        </nav>
      </div>
    </header>

    <RouterView />

    <footer class="site-footer">
      <div class="container footer-inner">
        <span>HJ. / 이현정</span>
        <span>Build · Verify · Secure</span>
        <RouterLink to="/#top">Back to top ↑</RouterLink>
      </div>
    </footer>
  </div>
</template>
