<script lang="ts" setup>
import { ref, useId, watch } from "vue";

import type { TodoItem as Props } from "@/stores";

const props = defineProps<Props>();

const emit = defineEmits<{
  change: [previous: Props, current: Omit<Props, "id">];
  delete: [todoId: string];
}>();

const isChecked = ref(props.completed);

/**
 * * Unique id for input and its label
 */
const id = useId();

function onChangeTodo(update: Omit<Props, "id">) {
  emit("change", props, update);
}

function onDeleteTodo() {
  emit("delete", props.id);
}

watch(isChecked, (value) => onChangeTodo({ ...props, completed: value }));
</script>

<style module>
.todoItem {
}

.checked {
  text-decoration: line-through;
}
</style>

<template>
  <li>
    <article :class="[$style.todoItem, { [$style.checked]: isChecked }]">
      <input type="checkbox" :id v-model="isChecked" />
      <label :for="id">{{ props.title }}</label>
      <button type="button" @click="onDeleteTodo">Delete</button>
    </article>
  </li>
</template>
