import { ref } from "vue";
import { g as defineStore } from "../server.mjs";
const useAuthStore = defineStore(
  "authStore",
  () => {
    const userToken = ref();
    return { userToken };
  },
  {
    persist: true
  }
);
export {
  useAuthStore as u
};
//# sourceMappingURL=authStore-4fa9ef0d.js.map
