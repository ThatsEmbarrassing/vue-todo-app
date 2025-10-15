<script lang="ts" setup>
import { computed, useId } from "vue";

import type { TodoItem as Props } from "@/stores";

const props = defineProps<Props>();

const emit = defineEmits<{
  change: [previous: Props, current: Omit<Props, "id">];
  delete: [todoId: string];
}>();

/**
 * ! NOTE FOR MYSELF:
 *
 * Before, the `isChecked` was written like:
 *
 * ```ts
 * const isChecked = ref(props.completed);
 * watch(isChecked, (value) => onChangeTodo({ ...props, completed: value }));
 * ```
 *
 * But this made the component lose its reactivity behaviour. Why?
 * ref takes a value from `props.completed` at the current moment
 * and does NOT follow up with its changes.
 *
 * Its main function is making other things react to its changes, NOT follow up with others itself.
 * In short, if the `props.completed` changes, the `isChecked` will not!
 *
 * Use writable `computed` if you need to watch for source value and do something when it's updated.
 * This makes objects truly reactive. Therefore, it just looks better :)
 */
const isChecked = computed({
  get: () => props.completed,
  set: (value) => {
    onChangeTodo({ ...props, completed: value });
  },
});

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
