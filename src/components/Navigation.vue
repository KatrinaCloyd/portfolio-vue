<script setup lang="ts">
const currentPage = (page: string) => {
  if (page === window.location.pathname) {
    return true;
  }
  return false;
};
</script>

<template>
  <nav>
    <ul class="navList">
      <li>
        <a class="navItem" href="/" :class="{ selected: currentPage('/') }"
          >HOME</a
        >
      </li>
      <li>
        <a
          class="navItem"
          :class="{ selected: currentPage('/About') }"
          href="/About"
          >ABOUT</a
        >
      </li>
      <li>
        <a
          class="navItem"
          :class="{ selected: currentPage('/DevWork') }"
          href="/DevWork"
          >DEV WORK</a
        >
      </li>
      <li>
        <a
          class="navItem"
          :class="{ selected: currentPage('/Contact') }"
          href="/Contact"
          >CONTACT</a
        >
      </li>
      <li>
        <a
          class="navItem"
          :class="{ selected: currentPage('/PlayVue') }"
          href="/PlayVue"
          >VUE FUN</a
        >
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.navList {
  min-width: 150px;
  max-width: 180px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-family: var(--headerfont);
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.navItem {
  color: var(--grey);
  border-bottom: 3px solid white;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.navItem:hover {
  color: var(--dkmaroon);
}

.selected {
  color: var(--maroon);
  border-bottom: 3px solid var(--dkmaroon);
}

@media (max-width: 600px) {
  .navList {
    width: 100%;
    max-width: 100%;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
    font-size: 1rem;
  }
}
</style>
