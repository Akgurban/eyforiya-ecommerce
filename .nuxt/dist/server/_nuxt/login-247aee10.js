import { _ as _sfc_main$1 } from "./base-input-972c895c.js";
import { ref, mergeProps, unref, isRef, useSSRContext } from "vue";
import "hookable";
import { b as useRouter } from "../server.mjs";
import "destr";
import "devalue";
import "klona";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { u as useAuthStore } from "./authStore-a41c077e.js";
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
import "defu";
const _sfc_main = {
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const user = ref("");
    const password = ref("");
    const isValid = ref(true);
    useAuthStore();
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseInput = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-center items-center h-screen" }, _attrs))}><div class="w-full max-w-md"><h1 class="text-3xl font-bold text-center mb-6">Login</h1><form class="bg-c-gray shadow-lg rounded px-8 pt-6 pb-8 mb-4"><div class="mb-4">`);
      _push(ssrRenderComponent(_component_BaseInput, {
        label: "Username",
        id: "username",
        name: "username",
        type: "text",
        placeholder: "Username",
        modelValue: unref(user),
        "onUpdate:modelValue": ($event) => isRef(user) ? user.value = $event : null
      }, null, _parent));
      _push(`</div><div class="mb-6">`);
      _push(ssrRenderComponent(_component_BaseInput, {
        label: "Password",
        id: "password",
        name: "password",
        type: "password",
        placeholder: "Password",
        modelValue: unref(password),
        "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null
      }, null, _parent));
      _push(`</div>`);
      if (!unref(isValid)) {
        _push(`<p class="text-red-500 text-sm inter font-bold mb-4"> Please fill all the forms </p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex items-center justify-between"><button class="bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"> Sign In </button></div></form></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=login-247aee10.js.map
