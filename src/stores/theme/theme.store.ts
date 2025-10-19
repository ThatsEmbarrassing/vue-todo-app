import { defineStore } from "pinia";

import state from "./theme.state";

export const useThemeStore = defineStore("theme", {
  state,
  actions: {
    toggle() {
      this.theme = this.theme === "light" ? "dark" : "light";
    },
  },
});
