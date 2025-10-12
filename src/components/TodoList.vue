<script lang="ts" setup>
import TodoItem from "./TodoItem.vue";

import type { TodoItem as TodoItemProps } from "../data";

interface Props {
  todos: TodoItemProps[];
}

defineProps<Props>();

const emit = defineEmits<{
  changeCompleted: [value: boolean, item: TodoItemProps];
  deleteTodo: [todoId: string];
}>();

function onChangeCompleted(value: boolean, item: TodoItemProps) {
  emit("changeCompleted", value, item);
}

function onDeleteTodo(todoId: string) {
  emit("deleteTodo", todoId);
}
</script>

<style module>
.todoList {
}
</style>

<template>
  <ul :class="$style.todoList">
    <todo-item
      v-for="item in todos"
      :="item"
      :key="item.id"
      @change-completed="(value) => onChangeCompleted(value, item)"
      @delete="onDeleteTodo"
    />
  </ul>
</template>
