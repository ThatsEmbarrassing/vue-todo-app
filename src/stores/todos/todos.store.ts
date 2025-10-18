import { defineStore } from "pinia";

import { v4 as uuidv4 } from "uuid";

import state from "./todos.state";

import type { TodoItem } from "./todos.model";

const createTodo = (title: string): TodoItem => ({
  id: uuidv4(),
  title,
  completed: false,
});

export const useTodosStore = defineStore("todos", {
  state,
  actions: {
    addTodo(title: string) {
      this.todos = [...this.todos, createTodo(title)];
    },
    changeTodo(previous: TodoItem, { title, completed }: Omit<TodoItem, "id">) {
      this.todos = this.todos.map((item) => {
        if (item.id === previous.id) {
          return { ...item, title, completed };
        }

        return item;
      });
    },
    deleteTodo(todoId: string) {
      this.todos = this.todos.filter((item) => item.id !== todoId);
    },
  },
});
