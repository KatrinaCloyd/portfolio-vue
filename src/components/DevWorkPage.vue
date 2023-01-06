<script setup lang="ts">
import work from ".././assets/data.js";

const getImgPath = (path: string) => {
  return "src/assets" + path;
};
const redirect = (id: any) => {
  window.location.href = `/DevDetail?id=${id}`;
};
</script>
<template>
  <section class="list">
    <div v-for="item in work" :key="item.id" class="container">
      <h1 class="projectTitle">{{ item.title }}</h1>
      <figure class="projectImage">
        <img
          :src="getImgPath(item.image1)"
          alt="screenshot of app"
          width="300"
        />
      </figure>
      <div class="projectInfo">
        <p>
          {{ item.oneLiner }}
          <em>{{ item.note }}</em>
        </p>
        <p>{{ item.tech }}</p>
        <div class=".icons">
          <a v-if="item.github" :href="item.github" target="_blank">
            <img class="icon" src=".././assets/git.svg" alt="github" />
          </a>
          <a v-if="item.liveSite" :href="item.liveSite" target="_blank">
            <img class="icon" src=".././assets/site.svg" alt="live site" />
          </a>
          <a v-if="item.npmLink" :href="item.npmLink" target="_blank">
            <img class="icon" src=".././assets/npm.svg" alt="npm" />
          </a>
        </div>
        <button @click="redirect(item.id)">MORE INFO</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.container {
  width: 20rem;
  position: relative;
  border: 2px solid var(--grey);
  transition: transform 0.25s ease;
  font-size: 0.9rem;
  transition: box-shadow 0.5s ease;
  margin: 0 0.8rem 0.8rem 0;
}

.projectImage {
  width: 100%;
  margin: 0.4rem 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.projectTitle {
  background-color: var(--grey);
  color: white;
  padding: 0.1rem 0.5rem;
  margin: 0;
  font-size: 1.2rem;
  font-weight: lighter;
}

.projectInfo {
  background-color: white;
  padding: 1rem;
  text-align: center;
  position: absolute;
  overflow: hidden;
  height: 87%;
  top: 2rem;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.container:hover .projectInfo {
  opacity: 100%;
}

.container:hover {
  box-shadow: 2px 2px 2px var(--ltgrey);
}

.icons {
  justify-content: center;
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

@media (max-width: 650px) {
  .projectImage img {
    width: 95%;
  }
  .projectInfo {
    overflow: scroll;
  }
  .container {
    max-width: 20rem;
    width: 90%;
    height: min-content;
  }
}

@media (max-width: 600px) {
  .list {
    justify-content: center;
  }
  .icon {
    max-width: 2rem;
  }
  .container {
    width: 80%;
    font-size: 0.8rem;
  }
}

@media (max-width: 365px) {
  .projectInfo {
    padding: 0.5rem;
  }
}
</style>
