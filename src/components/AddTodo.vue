<script lang="ts" setup>
import { ref } from "vue";

import { useTodosStore } from "@/stores";
import VButton from "./VButton.vue";

const title = ref<string>();

const todosStore = useTodosStore();

function addTodo() {
  if (!title.value) return;

  todosStore.addTodo(title.value);
}
</script>

<style module>
.addTodo {
  position: relative;
}

.addTodo input {
  border: none;
  outline: 2px solid var(--secondary-color);
  padding: 12px 20px;
  width: 100%;
  background: none;
  border-radius: 15px;
  color: var(--text-color);
  caret-color: var(--accent-color);
  transition: 0.2s ease;
}

.addTodo:has(.button:hover) input,
.addTodo input:is(:hover, :focus) {
  outline: 2px solid var(--accent-color);
}

.addTodo button {
  position: absolute;
  top: 0;
  right: 0;
}
</style>

<template>
  <form @submit.prevent="addTodo" :class="$style.addTodo">
    <input type="text" v-model="title" name="title" placeholder="Insert task's name" />
    <VButton type="submit" :class="$style.button">Add</VButton>
  </form>
</template>
