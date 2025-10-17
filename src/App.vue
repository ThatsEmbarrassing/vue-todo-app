<script setup lang="ts">
import { AddTodo, TodoList } from "./components";
</script>

<style lang="css" src="./styles/index.css"></style>

<style module>
.h1 {
  margin: 100px 0 20px 0;
  font-size: 3rem;
  font-weight: 900;
  text-transform: uppercase;
  text-align: center;

  background: linear-gradient(
    to right,
    hsl(14, 82%, 63%) 20%,
    var(--accent-color) 30%,
    hsl(166, 72%, 49%) 70%
  );

  background-clip: text;
  background-size: 200% auto;
  -webkit-background-clip: text;
  color: transparent;

  animation: gradient 2s ease-in-out infinite alternate;
}

.wrapper {
  width: 700px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}
</style>

<template>
  <h1 :class="$style.h1">Todo App</h1>
  <div :class="$style.wrapper">
    <AddTodo />
    <TodoList />
  </div>
</template>
