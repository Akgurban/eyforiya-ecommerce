import { defineStore } from "pinia";
import axios from "~~/plugins/axios";

const $axios = axios().provide.axios;

export const useUserStore = defineStore("user", {
  state: () => ({
    loading: false,
  }),
  actions: {
    startLoading() {},

    async OneSubCategory(uuid) {
      return await $axios.get(
        `/api/v1/client/products/get-sub-categories/tm?uuid=${uuid}`
      );
    },
  },

  persist: true,
});
