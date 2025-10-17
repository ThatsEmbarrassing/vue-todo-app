<script setup lang="ts">
import { useId } from "vue";

import { VSuccess } from "@/icons";

import type { CheckboxProps } from "./VCheckbox.model";

const { id = useId() } = defineProps<CheckboxProps>();

const model = defineModel<boolean>();

function toggle() {
  model.value = !model.value;
}
</script>

<style module>
.checkbox {
  border: 2px solid var(--accent-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s ease;

  --icon-color: var(--primary-color);
}

.checkbox input {
  display: none;
}

.checkbox label {
  cursor: pointer;
}

.checkbox:has(input:checked) {
  background-color: var(--accent-color);
}

.checkbox svg {
  display: flex;
}
</style>

<template>
  <div :class="$style.checkbox" @click="toggle">
    <input type="checkbox" :id v-model="model" @change="model = !model" />
    <label :for="id">
      <VSuccess />
    </label>
  </div>
</template>
