import { useAuthStore } from "@/stores/authStore";
export const useMyFetch = (request, opts) => {
  const config = useRuntimeConfig();
  const authStore = useAuthStore();
  return useFetch(request, {
    baseURL: config.public.baseURL,
    ...opts,
    onRequest({ request, options }) {
      options.headers = options.headers || {};
      options.headers.authorization = authStore;
    },
  });
};
