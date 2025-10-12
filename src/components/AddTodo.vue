<script lang="ts" setup>
import { ref } from "vue";

import { v4 as uuidv4 } from "uuid";

import type { TodoItem } from "../data";

const emit = defineEmits<{
  addTodo: [todo: TodoItem];
}>();

const title = ref<string>();

function addTodo() {
  if (!title.value) return;

  const newTodo: TodoItem = {
    id: uuidv4(),
    title: title.value,
    completed: false,
  };

  emit("addTodo", newTodo);

  title.value = "";
}
</script>

<template>
  <form @submit.prevent="addTodo">
    <input type="text" v-model="title" name="title" placeholder="Введите название таски" />
    <button type="submit">Add</button>
  </form>
</template>
