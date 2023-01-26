<script setup lang="ts">
import { ref, computed, watch, watchEffect } from "vue";
import ModalWindow from "./ModalWindow.vue";
import FormModal from "./FormModal.vue";
import ReactionGame from "./ReactionGame.vue";
import getBooks from "./composables/getBooks";

// count button
const buttonLabel = ref("Up Da Count");
const count = ref(0);
const colors = ref(["red", "orange", "yellow", "green", "blue", "purple"]);
const countColor = ref("white");

// WATCH does NOT runs on initial load
// only when named value is updated
// like useEffect with values in array
watch(count, () => {
  console.log("watch func fired", count.value);
  countColor.value = colors.value[count.value - 1];
});

// WATCHEFFECT runs on initial load
// && any time any dependencies used in the call are updated
// like useEffect with empty array
watchEffect(() => {
  console.log("watch Effect func fired", count.value);
});

// modal buttons
const modalOpen = ref(false);
const modalText = ref("Default Modal Text");
const modalStyle = ref("");
const openModalOne = () => {
  modalText.value = "Clicked Modal Button One";
  modalOpen.value = true;
  modalStyle.value = "";
};
const openModalTwo = () => {
  modalText.value = "Clicked Modal Button Two";
  modalOpen.value = true;
  modalStyle.value = "red";
};
const closeModal = () => {
  modalOpen.value = false;
};

// form modal
const formModalOpen = ref(false);
const openFormModal = () => {
  formModalOpen.value = true;
};
const closeForm = () => {
  formModalOpen.value = false;
};

// books
// using composables for data fetch = like using custom hooks
const { books, error } = getBooks();

const changeFav = (updatedBook: { isFav: boolean }) => {
  updatedBook.isFav = !updatedBook.isFav;
};
const filteredBooks = computed(() => {
  if (books.value.length) {
    return books.value.filter((e) => e.isFav);
  }
  return null;
});
</script>
<template>
  <section>
    <h2 class="hiddenX">Playing around with Vue State!</h2>
    <button @click="count++">{{ buttonLabel }}</button>
    <button @click="openModalOne">Modal One</button>
    <button @click="openModalTwo">Modal Two</button>
    <button @click="openFormModal">Form Modal</button>
    <p :class="countColor">Count: {{ count }}</p>

    <h2>Book list</h2>
    <p>Favs in maroon, change fav status by clicking.</p>
    <ul v-if="books.length">
      <li
        v-for="book in books"
        @click="changeFav(book)"
        :key="book.title"
        class="book bookbtn"
        :class="{ fav: book.isFav }"
      >
        <span>{{ book.title }}</span>
        <span>{{ book.author }}</span>
      </li>
    </ul>
    <p v-if="error">{{ error }}</p>
    <h2>Computed Properties</h2>
    <p>List of only favorite books:</p>
    <p v-if="!filteredBooks">No fav books... 😢</p>
    <ul v-else>
      <li v-for="book in filteredBooks" :key="book.title" class="book">
        <span>{{ book.title }}</span>
        <span>{{ book.author }}</span>
      </li>
    </ul>
  </section>
  <ReactionGame />
  <ModalWindow
    v-if="modalOpen"
    :text="modalText"
    :style="modalStyle"
    @closeModal="closeModal"
  />
  <FormModal v-if="formModalOpen" @closeForm="closeForm" />
</template>

<style scoped>
h2 {
  font-weight: 900;
}
button {
  margin-inline-end: 20px;
  padding-block: 10px;
}
.book {
  border: solid 2px var(--grey);
  padding: 5px;
  border-radius: 3px;
  display: flex;
  justify-content: space-between;
}
.bookbtn {
  cursor: pointer;
}
.fav {
  background-color: var(--maroon);
  color: white;
}
.red {
  color: palevioletred;
}
.orange {
  color: orange;
}
.yellow {
  color: gold;
}
.green {
  color: palegreen;
}
.blue {
  color: aqua;
}
.purple {
  color: plum;
}
</style>
