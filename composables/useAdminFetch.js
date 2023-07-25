import { useAdminStore } from "@/stores/adminStore";
export const useAdminFetch = (request, opts) => {
  const config = useRuntimeConfig();
  const authStore = useAdminStore();
  return useFetch(request, {
    baseURL: config.public.baseURL,
    ...opts,
    onRequest({ request, options }) {
      options.headers = options.headers || {};
      options.headers.authorization = authStore.adminToken;
    },
  });
};
