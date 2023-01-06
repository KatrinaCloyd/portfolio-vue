<script setup lang="ts">
import { ref } from "vue";

defineProps<{
  msg: string;
  copy: string;
}>();

const buttonLabel = ref("Up Da Count");
const count = ref(0);
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>{{ copy }}</h3>
    <button @click="count++">{{ buttonLabel }}</button>
    <p>Count: {{ count }}</p>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
