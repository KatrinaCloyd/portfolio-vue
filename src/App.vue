<script setup lang="ts">
import { computed } from "vue";
import HomePage from "./components/HomePage.vue";
import AboutPage from "./components/AboutPage.vue";
import DevWorkPage from "./components/DevWorkPage.vue";
import PlayVue from "./components/PlayVue.vue";
import Navigation from "./components/Navigation.vue";
import ContactPage from "./components/ContactPage.vue";
import DetailPage from "./components/DetailPage.vue";

const currentView = computed(() => {
  if (window.location.search) {
    return DetailPage;
  }
  switch (window.location.pathname) {
    case "/About": {
      return AboutPage;
    }
    case "/DevWork": {
      return DevWorkPage;
    }
    case "/PlayVue": {
      return PlayVue;
    }
    case "/Contact": {
      return ContactPage;
    }
    default: {
      return HomePage;
    }
  }
});
</script>

<template>
  <header>
    <a href="/">
      <img
        alt="Katrina Cloyd Logo"
        class="logo"
        src="./assets/name.png"
        width="400"
        height="43.5"
      />
    </a>
  </header>
  <section className="page">
    <Navigation />
    <main className="main">
      <component :is="currentView" />
    </main>
  </section>
</template>

<style scoped>
header {
  width: 100%;
  max-width: 80rem;
  padding: 1.5rem 5rem;
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  border-bottom: 9px double var(--maroon);
  align-items: flex-start;
  position: relative;
}

.logo {
  max-width: 25rem;
  cursor: pointer;
}

@media (max-width: 600px) {
  header {
    align-content: center;
    padding: 1rem;
    justify-content: center;
  }

  .logo {
    width: 100%;
    max-width: 25rem;
  }
}
</style>
