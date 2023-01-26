import { ref, onMounted } from "vue";

import type { Ref } from "vue";

type book = {
  title: string;
  author: string;
  img: string;
  id: number;
  isFav: boolean;
};

const getBooks = () => {
  const books: Ref<never[] | book[]> = ref([]);
  const error = ref("");

  onMounted(async () => {
    // fetch("http://localhost:3000/books")
    //   .then((res) => res.json())
    //   .then((data) => (books.value = data))
    //   .catch((err) => (error.value = err.message));
    try {
      const data = await fetch("http://localhost:3000/books");
      if (!data.ok) {
        throw Error("Something went wrong.... 🤷🏻‍♀️");
      }
      books.value = await data.json();
    } catch (err) {
      error.value = err as string;
    }
  });

  return { books, error };
};

export default getBooks;
