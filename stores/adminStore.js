import { defineStore } from "pinia";
export const useAdminStore = defineStore(
  "adminStore",
  () => {
    const adminToken = ref("");
    return { adminToken };
  },
  {
    persist: true,
  }
);
