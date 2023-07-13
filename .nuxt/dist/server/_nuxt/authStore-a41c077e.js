import { ref } from "vue";
import { e as defineStore } from "../server.mjs";
const useAuthStore = defineStore(
  "authStore",
  () => {
    const userToken = ref("");
    return { userToken };
  },
  {
    persist: true
  }
);
export {
  useAuthStore as u
};
//# sourceMappingURL=authStore-a41c077e.js.map
