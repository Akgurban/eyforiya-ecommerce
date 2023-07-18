import { d as axios, e as defineStore } from "../server.mjs";
const $axios = axios().provide.axios;
const useLoaderStore = defineStore("loader", {
  state: () => ({
    loading: false
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
    }
  },
  getters: {
    getLoading: (state) => state.loading,
    doubleCounterPlusOne() {
      return this.doubleCounter + 1;
    }
  },
  persist: true
});
export {
  useLoaderStore as u
};
//# sourceMappingURL=loader-7453264c.js.map
