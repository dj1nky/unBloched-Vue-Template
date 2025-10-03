import { defineStore } from "pinia";

export const useHeaderStore = defineStore("pageDetails", {
  state: () => ({
    header: "Animated This is a pinia stored header",
    body: "This is a pinia stored body",
  }),
});
