import { useAdminStore } from "@/stores/adminStore";

export default defineNuxtRouteMiddleware((to, from) => {
  // If the user is not authenticated
  const authStore = useAdminStore();
  if (!authStore.adminToken) {
    return navigateTo("/admin/login");
  }
});
