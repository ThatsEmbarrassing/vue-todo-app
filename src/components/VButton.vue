<style module>
.button {
  background-color: var(--secondary-color);
  height: 100%;
  padding: 0 30px;
  border: none;
  border-radius: 15px;
  font-weight: 600;
  color: var(--text-color);
  cursor: pointer;
  text-transform: uppercase;
  transition: 0.2s ease;
}

.button:hover {
  background-color: var(--accent-color);
}
</style>

<template>
  <button :class="$style.button">
    <slot />
  </button>
</template>
