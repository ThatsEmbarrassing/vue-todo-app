<script lang="ts" setup>
import { ref, useId, watch } from "vue";

import type { TodoItem as Props } from "../data";

const props = defineProps<Props>();

const emit = defineEmits<{
  changeCompleted: [value: boolean];
  delete: [todoId: string];
}>();

const isChecked = ref(props.completed);

/**
 * * Unique id for input and its label
 */
const id = useId();

function onChangeCompleted() {
  emit("changeCompleted", isChecked.value);
}

function onDeleteTodo() {
  emit("delete", props.id);
}

watch(isChecked, onChangeCompleted);
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
