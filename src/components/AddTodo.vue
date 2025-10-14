<script lang="ts" setup>
import { ref } from "vue";

import { useTodosStore } from "@/stores";

const title = ref<string>();

const todosStore = useTodosStore();

function addTodo() {
  if (!title.value) return;

  todosStore.addTodo(title.value);
}
</script>

<template>
  <form @submit.prevent="addTodo">
    <input type="text" v-model="title" name="title" placeholder="Insert task's name" />
    <button type="submit">Add</button>
  </form>
</template>
