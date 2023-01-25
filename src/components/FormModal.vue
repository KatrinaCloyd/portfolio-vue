<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
import { ref, computed } from "vue";
const emit = defineEmits(["closeForm"]);

function closeForm() {
  emit("closeForm");
}
function handleSubmit() {
  // validate email
  emailValid.value = userEmail.value.includes("@");
  if (emailValid.value) {
    console.log(
      `form submitted!
        Name: ${userName.value}
        Email: ${userEmail.value}
        Job Title: ${userRole.value}
        Agreed to Terms: ${accept.value}
      `
    );
    closeForm();
  }
}
const userName = ref("");
const userEmail = ref("");
const userRole = ref("");
const accept = ref(false);
const emailValid = ref(true);
</script>
<template>
  <div class="backdrop">
    <div class="modal">
      <form @submit.prevent="handleSubmit">
        <h2>You opened the demo Form!</h2>
        <label for="name">Name</label>
        <input placeholder="Enter name" id="name" v-model="userName" />
        <label for="email">Email</label>
        <input
          type="email"
          placeholder="Enter email"
          id="email"
          v-model="userEmail"
        />
        <p v-if="!emailValid" class="error">
          Email should include an '@' symbol.
        </p>
        <label for="role">Role</label>
        <select v-model="userRole" :class="{ light: userRole === '' }">
          <option value="">Select one...</option>
          <option value="designer">Designer</option>
          <option value="developer">Web Developer</option>
          <option value="mystery">Something Else</option>
        </select>
        <label for="checkbox" class="checklabel"
          >Okey donkey?
          <input type="checkbox" id="checkbox" v-model="accept" />
          <span class="checkmark"></span>
        </label>
        <div v-if="userName || userEmail || userRole || accept" class="summary">
          <p v-if="accept">Coolio</p>
          <p v-if="userName">Hello {{ userName }}!</p>
          <p v-if="userEmail">Your email: {{ userEmail }}</p>
          <p v-if="userRole">And you call yourself a {{ userRole }}...</p>
        </div>
        <button>Submit</button>
      </form>
      <button @click="closeForm">Close Form</button>
    </div>
  </div>
</template>

<style scoped>
h2 {
  text-align: center;
  margin-bottom: 1rem;
}
.light {
  color: var(--grey);
}
.modal {
  width: 400px;
  padding: 20px;
  padding-inline: 50px;
  margin: 100px auto;
  background: white;
  border-radius: 10px;
  outline: solid 5px var(--maroon);
  outline-offset: -10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
form {
  align-items: center;
  flex-direction: column;
  display: flex;
}
.backdrop {
  top: 0;
  left: 0;
  position: fixed;
  background: rgba(54, 50, 46, 0.5);
  width: 100vw;
  height: 100vh;
}
input[type="checkbox"] {
  display: inline-block;
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
}
input:checked ~ .checkmark {
  background-color: var(--maroon);
  border-radius: 3px;
}
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 30px;
  background-color: var(--ltgrey);
  border: var(--grey) solid 1px;
  border-radius: 3px;
}

.error {
  color: var(--maroon);
  font-size: smaller;
  align-self: flex-start;
}
.label:hover input ~ .checkmark,
input:focus ~ .checkmark {
  background-color: var(--maroon);
}
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}
input:checked ~ .checkmark:after {
  display: block;
}
.checkmark:after {
  left: 12px;
  top: 2px;
  width: 5px;
  height: 12px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}
.checklabel {
  position: relative;
  display: inline-block;
  padding-inline-start: 40px;
  cursor: pointer;
  width: fit-content;
  align-self: flex-start;
  padding-top: 2px;
}
.summary {
  margin-top: 20px;
  width: 100%;
  word-wrap: break-word;
  text-align: center;
}
p:first-child {
  text-align: center;
}
</style>
