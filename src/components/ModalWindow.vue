<script setup lang="ts">
defineProps<{
  text: string;
  style: string;
}>();

const emit = defineEmits(["closeModal"]);

function closeModal() {
  emit("closeModal");
}
</script>
<template>
  <div class="backdrop">
    <div class="modal" :class="{ red: style === 'red' }">
      <h2>You Opened the Modal!</h2>
      <p>{{ text }}</p>
      <button @click="closeModal">Close Modal</button>
    </div>
  </div>
</template>

<style scoped>
.modal {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background: white;
  border-radius: 10px;
  text-align: center;
}
.backdrop {
  top: 0;
  left: 0;
  position: fixed;
  background: rgba(54, 50, 46, 0.5);
  width: 100vw;
  height: 100vh;
}
.red {
  outline: solid 5px var(--maroon);
  outline-offset: -10px;
}
</style>
