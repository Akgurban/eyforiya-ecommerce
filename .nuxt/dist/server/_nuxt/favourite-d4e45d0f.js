import { u as useLocalStorage } from "./trash-fea4ab70.js";
import { g as defineStore } from "../server.mjs";
const useFavStore = defineStore("favourite", {
  state: () => ({
    wish_items: useLocalStorage("wish_items", [])
  }),
  actions: {
    async setLocalStorage(propItem) {
      var _a;
      console.log(propItem, this.wish_items);
      propItem.isLiked = true;
      if (this.wish_items == null) {
        this.wish_items = [];
      }
      (_a = this.wish_items) == null ? void 0 : _a.push(propItem);
    },
    async removeLocalStorage(propItem) {
      var _a;
      propItem.isLiked = false;
      (_a = this.wish_items) == null ? void 0 : _a.filter((item, index) => {
        var _a2;
        if ((propItem == null ? void 0 : propItem.uuid) == (item == null ? void 0 : item.uuid)) {
          (_a2 = this.wish_items) == null ? void 0 : _a2.splice(index, 1);
        }
      });
    }
  },
  persist: true
});
export {
  useFavStore as u
};
//# sourceMappingURL=favourite-d4e45d0f.js.map
