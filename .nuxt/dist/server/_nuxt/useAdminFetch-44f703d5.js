import { g as useRuntimeConfig } from "../server.mjs";
import "vue";
import { u as useFetch } from "./fetch-ba2ed0c4.js";
import "destr";
import "devalue";
import "klona";
import { u as useAdminStore } from "./adminStore-92ba1257.js";
const useAdminFetch = (request, opts) => {
  const config = /* @__PURE__ */ useRuntimeConfig();
  const authStore = useAdminStore();
  return useFetch(request, {
    baseURL: config.public.baseURL,
    ...opts,
    onRequest({ request: request2, options }) {
      options.headers = options.headers || {};
      options.headers.authorization = authStore.adminToken;
    }
  }, "$fjRCjZbP4m");
};
export {
  useAdminFetch as u
};
//# sourceMappingURL=useAdminFetch-44f703d5.js.map
