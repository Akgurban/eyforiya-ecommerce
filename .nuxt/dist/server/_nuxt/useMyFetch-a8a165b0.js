import { g as useRuntimeConfig } from "../server.mjs";
import "vue";
import { u as useFetch } from "./fetch-ba2ed0c4.js";
import "destr";
import "devalue";
import "klona";
import { u as useAuthStore } from "./authStore-0ffe80fc.js";
const useMyFetch = (request, opts) => {
  const config = /* @__PURE__ */ useRuntimeConfig();
  const authStore = useAuthStore();
  return useFetch(request, {
    baseURL: config.public.baseURL,
    ...opts,
    onRequest({ request: request2, options }) {
      options.headers = options.headers || {};
      options.headers.authorization = authStore;
    }
  }, "$pLJOpmWEpt");
};
export {
  useMyFetch as u
};
//# sourceMappingURL=useMyFetch-a8a165b0.js.map
