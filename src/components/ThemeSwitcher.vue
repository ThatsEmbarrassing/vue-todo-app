<script setup lang="ts">
import { useId } from "vue";

import { useThemeStore } from "@/stores";

const id = useId();

const themeStore = useThemeStore();
</script>

<style module>
.themeSwitcher {
  position: relative;
  display: inline-block;
  width: 3.5em;
  height: 2em;
}

.themeSwitcher input {
  display: none;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(182, 182, 182);
  transition: 0.4s;
  border-radius: 10px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 1.4em;
  width: 1.4em;
  border-radius: 8px;
  left: 0.3em;
  bottom: 0.3em;
  transform: rotate(270deg);
  background-color: rgb(255, 255, 255);
  transition: 0.4s;
}

.themeSwitcher input:checked + .slider {
  background-color: #21cc4c;
}

.themeSwitcher input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

.themeSwitcher input:checked + .slider:before {
  transform: translateX(1.5em);
}
</style>

<template>
  <div role="switch" :class="$style.themeSwitcher">
    <input
      type="checkbox"
      :checked="themeStore.theme === 'dark'"
      :id
      @click="() => themeStore.toggle()"
    />
    <label :for="id" :class="$style.slider"></label>
  </div>
</template>
