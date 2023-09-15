import { ref } from "vue";
import { f as defineStore } from "../server.mjs";
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
//# sourceMappingURL=adminStore-92ba1257.js.map
