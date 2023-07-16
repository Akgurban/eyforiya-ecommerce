import { defineStore } from "pinia";
import axios from "~~/plugins/axios";

const $axios = axios().provide.axios;

export const useLikedStore = defineStore("liked", {
  state: () => ({
    liked_items: useLocalStorage("liked_items", {
      totalCount: 0,
      totalPrice: 0,
      products: [],
    }),
  }),
  actions: {
    async setLocalStorage(e) {
      // this.trash_items.push(e);
      this.trash_items.totalCount += 1;
    },
  },
  persist: true,
});
