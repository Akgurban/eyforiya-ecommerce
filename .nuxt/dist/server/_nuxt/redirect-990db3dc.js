import "vue";
import "hookable";
import { l as defineNuxtRouteMiddleware, n as navigateTo } from "../server.mjs";
import "destr";
import "devalue";
import "klona";
import { u as useAuthStore } from "./authStore-4fa9ef0d.js";
import "ofetch";
import "#internal/nitro";
import "unctx";
/* empty css                     */import "vue-router";
import "h3";
import "ufo";
import "@vue/devtools-api";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "@intlify/core-base";
import "@intlify/vue-devtools";
import "cookie-es";
import "js-cookie";
import "is-https";
import "ohash";
import "pinia-plugin-persistedstate";
import "axios";
import "vue-awesome-paginate";
import "vue/server-renderer";
import "defu";
const redirect = /* @__PURE__ */ defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore();
  if (authStore.userToken) {
    return navigateTo("/");
  }
});
export {
  redirect as default
};
//# sourceMappingURL=redirect-990db3dc.js.map
