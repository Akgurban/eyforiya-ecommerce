import { defineStore } from "pinia";
import axios from "~~/plugins/axios";

const $axios = axios().provide.axios;

export const useLoaderStore = defineStore("loader", {
  state: () => ({
    loading: false,
  }),
  actions: {
    startLoading() {
      this.loading = true;
    },
    endLoading() {
      this.loading = false;
    },

    async OneSubCategory(uuid) {
      return await $axios.get(
        `http://duypbaha.com.tm/api/v1/client/products/get-sub-categories/tm?uuid=${uuid}`
      );
    },
  },
  getters: {
    getLoading: (state) => state.loading,
    doubleCounterPlusOne() {
      return this.doubleCounter + 1;
    },
  },

  persist: true,
});
