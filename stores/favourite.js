import { defineStore } from "pinia";
// import axios from "~~/plugins/axios";
// import { useAuthStore } from "@/stores/authStore";
// const authStore = useAuthStore();
// const $axios = axios().provide.axios;

export const useFavStore = defineStore("favourite", {
  state: () => ({
    wish_items: useLocalStorage("wish_items", []),
  }),
  actions: {
    async setLocalStorage(propItem) {
      propItem.isLiked = true;
      this.wish_items.push(propItem);
    },
    async removeLocalStorage(propItem) {
      propItem.isLiked = false;
      this.wish_items?.filter((item, index) => {
        if (propItem?.uuid == item?.uuid) {
          this.wish_items?.splice(index, 1);
        }
      });
    },
  },
  persist: true,
});
