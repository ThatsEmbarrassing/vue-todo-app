import { useLocalStorage } from "@vueuse/core";

import type { Theme } from "./theme.model";

const THEME_LOCAL_STORAGE_KEY = "__THEME_LOCAL_STORAGE_KEY__";

const state = () => ({
  theme: useLocalStorage<Theme>(THEME_LOCAL_STORAGE_KEY, "light"),
});

export default state;
