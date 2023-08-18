import { ref } from "vue";
import { g as defineStore } from "../server.mjs";
const useAdminStore = defineStore(
  "adminStore",
  () => {
    const adminToken = ref("");
    return { adminToken };
  },
  {
    persist: true
  }
);
export {
  useAdminStore as u
};
//# sourceMappingURL=adminStore-ee8c4b80.js.map
