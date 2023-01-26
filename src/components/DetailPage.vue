<script setup lang="ts">
import { ref } from "vue";
import work from ".././assets/data";

const id = window.location.search.split("=")[1];
const currentProj = ref(work.find((e: { id: string }) => e.id === id));
const getImgPath = (path: string) => {
  return "src/assets" + path;
};
const getAltText = (number: any, name: any) => {
  return `screenshot ${number} of ${name}`;
};
const backToDevPg = () => {
  window.location.href = "/DevWork";
};
</script>
<template>
  <section v-if="currentProj">
    <h2 class="title">{{ currentProj.title }}</h2>
    <p class="tech">{{ currentProj.tech }}</p>
    <div class="icons">
      <a
        v-if="currentProj.github"
        class="tool"
        :href="currentProj.github"
        target="_blank"
      >
        <img class="icon" src=".././assets/git.svg" alt="github" />
      </a>
      <a
        v-if="currentProj.liveSite"
        class="tool"
        :href="currentProj.liveSite"
        target="_blank"
      >
        <img class="icon" src=".././assets/site.svg" alt="live site" />
      </a>
      <a
        v-if="currentProj.npmLink"
        class="tool"
        :href="currentProj.npmLink"
        target="_blank"
      >
        <img class="icon" src=".././assets/npm.svg" alt="npm" />
      </a>
    </div>
    <video v-if="currentProj.video" class="demo" controls autoPlay muted>
      <source :src="getImgPath(currentProj.video)" type="video/mp4" />
    </video>
    <p v-if="currentProj.blurb1">{{ currentProj.blurb1 }}</p>
    <div class="detailImgContainer">
      <img
        v-if="currentProj.image1"
        :src="getImgPath(currentProj.image1)"
        :alt="getAltText(1, currentProj.title)"
      />
      <img
        v-if="currentProj.image2"
        :src="getImgPath(currentProj.image2)"
        :alt="getAltText(2, currentProj.title)"
      />
    </div>
    <p v-if="currentProj.blurb2">{{ currentProj.blurb2 }}</p>
    <div class="detailImgContainer">
      <img
        v-if="currentProj.image3"
        :src="getImgPath(currentProj.image3)"
        :alt="getAltText(3, currentProj.title)"
      />
      <img
        v-if="currentProj.image4"
        :src="getImgPath(currentProj.image4)"
        :alt="getAltText(4, currentProj.title)"
      />
    </div>
    <p v-if="currentProj.blurb3">{{ currentProj.blurb3 }}</p>
    <button class="backBtn" @click="backToDevPg">BACK TO DEV WORK</button>
  </section>
</template>

<style scoped>
.title {
  font-family: var(--headerfont);
  font-size: 1.5rem;
  margin: 0;
}

.tech {
  margin: 0.5rem 0;
}

.demo {
  display: block;
  width: 70%;
  max-width: 30rem;
  margin: 1rem auto;
}

.icons {
  margin-bottom: 1.5rem;
}

.icon {
  height: 2.5rem;
  margin: 0 0.3rem;
  padding: 0.2rem;
  border-bottom: 3px solid white;
  transition: border 0.2s ease-in-out;
}

.icon:hover {
  border-bottom: 3px solid var(--dkmaroon);
}

.detailImgContainer {
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 1rem;
  align-items: center;
}

.detailImgContainer img {
  width: 45%;
}

.backBtn {
  display: block;
  margin: 0 auto;
}

@media (max-width: 800px) {
  .detailImgContainer {
    flex-direction: column;
    padding-bottom: 1rem;
  }
  .detailImgContainer img,
  .demo {
    width: 90%;
    margin: 1rem auto;
  }
}
</style>
