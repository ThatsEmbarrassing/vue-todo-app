import { useLocalStorage } from "@vueuse/core";

import type { TodoItem } from "./todos.model";

const TODOS_LOCAL_STORAGE_KEY = "__TODOS_LOCAL_STORAGE_KEY__";

const state = () => ({
  todos: useLocalStorage<TodoItem[]>(TODOS_LOCAL_STORAGE_KEY, []),
});

export default state;
