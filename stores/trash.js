import { defineStore } from "pinia";
import axios from "~~/plugins/axios";

const $axios = axios().provide.axios;

export const useTrashStore = defineStore("trash", {
  state: () => ({
    trash_items: useLocalStorage("trash_items", {
      totalCount: 0,
      totalPrice: 0,
      products: [],
    }),
  }),
  actions: {
    async setLocalStorage(propItem, count) {
      if (count > 1) {
        this.trash_items.products.filter((item, index) => {
          if (propItem?.uuid == item?.uuid) {
            item.count = count;
          }
        });
      } else {
        const some = {
          uuid: propItem?.uuid,
          count: count,
          images: propItem?.images,
          price: propItem?.price,
          name: propItem?.name,
        };

        this.trash_items.products.push(some);
      }
      this.trash_items.totalCount += 1;
    },

    async removeLocalStorage(propItem, count) {
      if (count > 0) {
        this.trash_items.products?.filter((item, index) => {
          if (propItem?.uuid == item?.uuid) {
            item.count = count;
          }
        });
      } else {
        this.trash_items.products?.filter((item, index) => {
          if (propItem?.uuid == item?.uuid) {
            this.trash_items?.products?.splice(index, 1);
          }
        });
      }
      this.trash_items.totalCount -= 1;
    },
  },
  persist: true,
});
