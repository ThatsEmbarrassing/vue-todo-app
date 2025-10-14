<script lang="ts" setup>
import { useTodosStore } from "@/stores";

import TodoItem from "./TodoItem.vue";

const store = useTodosStore();
</script>

<style module>
.todoList {
  list-style: none;
  padding: 0;
}
</style>

<template>
  <ul :class="$style.todoList">
    <todo-item
      v-for="item in store.todos"
      :="item"
      :key="item.id"
      @change="store.changeTodo"
      @delete="store.deleteTodo"
    />
  </ul>
</template>
