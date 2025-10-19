<script lang="ts" setup>
import { computed, useId } from "vue";

import { VTrash } from "@/icons";

import VCheckbox from "./VCheckbox.vue";

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
  margin-bottom: 10px;
  padding: 0 16px;
  background-color: var(--primary-color);
  border-radius: 15px;
  display: flex;
  align-items: center;
  color: var(--text-color);
  transition: 0.2s ease;
}

.label {
  padding: 15px;
  padding-right: 0;
  flex-grow: 1;
  user-select: none;
  color: var(--text-color);
  text-decoration: line-through;
  text-decoration-color: transparent;
  transition:
    color 0.2s ease,
    text-decoration 0.2s ease;
}

.label.disabled {
  color: var(--secondary-color);
  text-decoration: line-through;
  text-decoration-color: var(--secondary-color);
  transition: 0.2s ease;
}

.delete {
  padding: 3px;
  background: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.delete svg {
  --icon-color: var(--secondary-color);
  transition: 0.2s ease;
}

.delete:hover svg {
  --icon-color: #ff0033;
}
</style>

<template>
  <li>
    <article :class="$style.todoItem">
      <VCheckbox v-model="isChecked" :id />
      <label :for="id" :class="[$style.label, { [$style.disabled]: isChecked }]">{{ title }}</label>
      <button type="button" :class="$style.delete" @click="onDeleteTodo">
        <VTrash />
      </button>
    </article>
  </li>
</template>
