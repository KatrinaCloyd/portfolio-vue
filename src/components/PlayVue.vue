<script setup lang="ts">
import { ref, computed } from "vue";
import ModalWindow from "./ModalWindow.vue";
import FormModal from "./FormModal.vue";
import ReactionGame from "./ReactionGame.vue";

const books = ref([
  {
    title: "The Starless Sea",
    author: "Erin Morgenstern",
    img: ".././assets/tss.png",
    isFav: true,
  },
  {
    title: "The Night Circus",
    author: "Erin Morgenstern",
    img: ".././assets/tnc.png",
    isFav: true,
  },
  {
    title: "A Discovery of Witches",
    author: "Deborah Harkness",
    img: ".././assets/adw.png",
    isFav: false,
  },
]);

const buttonLabel = ref("Up Da Count");
const count = ref(0);
const changeFav = (updatedBook: { isFav: boolean }) => {
  updatedBook.isFav = !updatedBook.isFav;
};
const filteredBooks = computed(() => {
  return books.value.filter((e) => e.isFav);
});

let modalOpen = ref(false);
let formModalOpen = ref(false);
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
const openFormModal = () => {
  formModalOpen.value = true;
};
const closeForm = () => {
  formModalOpen.value = false;
};
</script>
<template>
  <section>
    <h2 class="hiddenX">Playing around with Vue State!</h2>
    <button @click="count++">{{ buttonLabel }}</button>
    <button @click="openModalOne">Modal One</button>
    <button @click="openModalTwo">Modal Two</button>
    <button @click="openFormModal">Form Modal</button>
    <p>Count: {{ count }}</p>

    <h2>Book list</h2>
    <p>Favs in maroon, change fav status by clicking.</p>
    <ul>
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
    <h2>Computed Properties</h2>
    <p>List of only favorite books:</p>
    <p v-if="filteredBooks.length < 1">No fav books... 😢</p>
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
</style>
