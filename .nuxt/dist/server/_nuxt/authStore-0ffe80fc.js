import { ref } from "vue";
import { f as defineStore } from "../server.mjs";
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
//# sourceMappingURL=authStore-0ffe80fc.js.map
