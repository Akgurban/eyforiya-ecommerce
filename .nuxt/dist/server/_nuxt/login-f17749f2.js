import { _ as _sfc_main$1 } from "./base-input-997484dd.js";
import { ref, mergeProps, unref, isRef, useSSRContext } from "vue";
import "hookable";
import { d as useToast, a as useRouter } from "../server.mjs";
import "destr";
import "devalue";
import "klona";
import { u as useAuthStore } from "./authStore-0ffe80fc.js";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _imports_0 } from "./logo-83323d70.js";
import { _ as _imports_0$1 } from "./loader-dc53e791.js";
import { u as useLoaderStore } from "./loader-95eafdf5.js";
import { u as useFavStore } from "./favourite-8f2b0c65.js";
import { a as useTrashStore } from "./trash-594b124b.js";
import "uuid";
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
import "defu";
const _sfc_main = {
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    useToast();
    useFavStore();
    useTrashStore();
    useLoaderStore();
    const user = ref("");
    const password = ref("");
    const err_valid = ref("user_exist");
    const pendings = ref(false);
    const isValid = ref(true);
    useAuthStore();
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseInput = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-center pt-34 md:pt-40 h-[110vh] absolute top-0 bg-slate-300 z-40 w-full" }, _attrs))}><div class="w-full max-w-md"><div class="text-3xl font-bold text-center mb-6 flex w-full justify-between"></div><form class="bg-c-gray shadow-lg rounded px-8 pt-6 pb-8 mb-4"><img class="mx-auto md:cursor-pointer cursor-auto"${ssrRenderAttr("src", _imports_0)} alt=""><div class="mb-4">`);
      _push(ssrRenderComponent(_component_BaseInput, {
        label: _ctx.$t("username"),
        id: "username",
        name: "username",
        type: "text",
        placeholder: "aman@example.com",
        modelValue: unref(user),
        "onUpdate:modelValue": ($event) => isRef(user) ? user.value = $event : null
      }, null, _parent));
      _push(`</div><div class="mb-6">`);
      _push(ssrRenderComponent(_component_BaseInput, {
        label: _ctx.$t("password"),
        id: "password",
        name: "password",
        type: "password",
        placeholder: "···········",
        modelValue: unref(password),
        "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null
      }, null, _parent));
      _push(`</div><p class="text-xs text-gray-400 mb-3">${ssrInterpolate(_ctx.$t("alert_login"))}</p>`);
      if (!unref(isValid)) {
        _push(`<p class="text-red-500 text-sm inter font-bold mb-4">${ssrInterpolate(_ctx.$t(unref(err_valid)))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex w-full gap-5 items-center justify-between"><button class="bg-blue-700 rounded-2xl w-1/2 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline" type="button">${ssrInterpolate(_ctx.$t("signin"))}</button>`);
      if (unref(pendings)) {
        _push(`<p class="p-2 rounded-md text-white font-bold"><img${ssrRenderAttr("src", _imports_0$1)} alt=""></p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button class="text-blue-700 border-blue-700 border-2 rounded-2xl w-1/2 font-bold py-2 px-4 focus:outline-none focus:shadow-outline" type="button">${ssrInterpolate(_ctx.$t("signup"))}</button></div></form></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=login-f17749f2.js.map
