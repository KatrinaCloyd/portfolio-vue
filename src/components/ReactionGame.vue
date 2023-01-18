<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
import { ref, computed } from "vue";
import type { Ref } from "vue";
import GameBlock from "./GameBlock.vue";

const isPlaying = ref(false);
const delay: Ref<null | number> = ref(null);
const score: Ref<null | number> = ref(null);
const rank = ref(0);
const ranks = ["Lightening fingers!", "Prettttty good...", "...sssnail pace"];

const findRank = (speed: number) => {
  if (speed < 300) {
    rank.value = 0;
  } else if (speed < 400) {
    rank.value = 1;
  } else {
    rank.value = 2;
  }
};
const start = () => {
  score.value = null;
  delay.value = 2000 + Math.random() * 5000;
  isPlaying.value = true;
};
const end = (reactionTime: number) => {
  score.value = reactionTime / 1000;
  findRank(reactionTime);
  isPlaying.value = false;
};
</script>
<template>
  <section class="game">
    <h2>Reaction Timer Game</h2>
    <p>
      Click the play button below to start the game. A new button will appear
      below... sometime. Once it appears, click that button as quickly as you
      can!
    </p>
    <button @click="start" :disabled="isPlaying">Play!</button>
    <div v-if="score" class="results">
      <p>Your Reaction Time: {{ score }} seconds</p>
      <p :class="{ fast: rank === 0, med: rank === 1, slow: rank === 2 }">
        {{ ranks[rank] }}
      </p>
    </div>
    <GameBlock v-if="isPlaying && delay" :delay="delay" @endGame="end" />
  </section>
</template>

<style scoped>
h2 {
  margin-block: 1rem;
  text-decoration: underline;
  text-underline-offset: 5px;
}
p {
  margin-bottom: 0px;
}
.game {
  margin-bottom: 150px;
}
.fast {
  color: var(--maroon);
}
.slow {
  color: var(--dkmaroon);
  letter-spacing: 1ch;
}
</style>
