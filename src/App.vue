<script setup lang="ts">
import { reactive } from "vue";

import { AddTodo, TodoList } from "./components";

import data from "./data";

import type { TodoItem } from "./data";

const state: { todos: TodoItem[] } = reactive({
  todos: data,
});

function onAddTodo(item: TodoItem) {
  console.log(item);
  state.todos = [...state.todos, item];
}

function onChangeCompletedTodo(value: boolean, item: TodoItem) {
  item.completed = value;
}

function onDeleteTodo(todoId: string) {
  state.todos = state.todos.filter(({ id }) => id !== todoId);
}
</script>

<style scoped></style>

<template>
  <AddTodo @add-todo="onAddTodo" />
  <TodoList
    :todos="state.todos"
    @change-completed="onChangeCompletedTodo"
    @delete-todo="onDeleteTodo"
  />
</template>
