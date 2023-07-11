import { defineStore } from "pinia";
export const useAuthStore = defineStore(
  "authStore",
  () => {
    const userToken = ref("");
    return { userToken };
  },
  {
    persist: true,
  }
);
