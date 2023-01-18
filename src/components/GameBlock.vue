<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
import { ref, computed, onMounted, onUpdated, toRefs } from "vue";
import type { Ref } from "vue";
const props = defineProps<{
  delay: number;
}>();
const { delay } = toRefs(props);
const emit = defineEmits(["endGame"]);

const showBlock = ref(false);
const timer: Ref<undefined | number> = ref(undefined);
const reactionTime = ref(0);

const startTimer = () => {
  timer.value = setInterval(() => {
    reactionTime.value = reactionTime.value + 10;
  }, 10);
};
const stopTimer = () => {
  clearInterval(timer.value);
  emit("endGame", reactionTime.value);
};

onMounted(() => {
  setTimeout(() => {
    showBlock.value = true;
    startTimer();
  }, delay.value);
});
</script>
<template>
  <div class="block" v-if="showBlock" @click="stopTimer">
    <h2>click me... QUICK</h2>
  </div>
</template>

<style scoped>
.block {
  background-color: var(--maroon);
  color: white;
  margin: auto;
  max-width: 50%;
  padding: 2rem;
  border-radius: 4px;
  text-align: center;
  box-shadow: 3px 3px var(--ltgrey);
  cursor: pointer;
}
</style>
