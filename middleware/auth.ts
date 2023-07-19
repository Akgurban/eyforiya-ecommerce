import { useAuthStore } from "@/stores/authStore";

export default defineNuxtRouteMiddleware((to, from) => {
  // If the user is not authenticated
  const authStore = useAuthStore();
  if (!authStore.userToken) {
    return navigateTo("/user/login");
  }
});
