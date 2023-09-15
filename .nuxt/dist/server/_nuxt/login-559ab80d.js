import { _ as _sfc_main$1 } from "./base-button-598d851d.js";
import { _ as _sfc_main$2 } from "./base-input-997484dd.js";
import { ref, mergeProps, withCtx, createTextVNode, unref, isRef, useSSRContext } from "vue";
import "hookable";
import { d as useToast, a as useRouter } from "../server.mjs";
import "destr";
import "devalue";
import "klona";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0 } from "./logo-83323d70.js";
import { _ as _imports_0$1 } from "./loader-dc53e791.js";
import { u as useAdminStore } from "./adminStore-92ba1257.js";
import { u as useLoaderStore } from "./loader-95eafdf5.js";
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
    useLoaderStore();
    useToast();
    const user = ref("");
    const password = ref("");
    const pendings = ref(false);
    const isValid = ref(true);
    const admin_store = useAdminStore();
    const router = useRouter();
    const logout = () => {
      admin_store.adminToken = "";
      router.push("/");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseButton = _sfc_main$1;
      const _component_BaseInput = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-center pt-34 md:pt-40 h-[110vh] absolute top-0 bg-slate-300 z-40 w-full" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BaseButton, {
        onClick: logout,
        class: "absolute top-0 left-0",
        type: "danger"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Logout`);
          } else {
            return [
              createTextVNode("Logout")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="w-full max-w-md"><div class="text-3xl font-bold text-center mb-6 flex w-full justify-between"></div><form class="bg-c-gray shadow-lg rounded px-8 pt-6 pb-8 mb-4"><img class="mx-auto md:cursor-pointer cursor-auto"${ssrRenderAttr("src", _imports_0)} alt=""><div class="mb-4">`);
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
      _push(`<div class="flex w-full gap-5 items-center justify-between"><button class="bg-blue-700 w-auto text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"> Sign In </button>`);
      if (unref(pendings)) {
        _push(`<p class="p-2 rounded-md text-white font-bold"><img${ssrRenderAttr("src", _imports_0$1)} alt=""></p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></form></div></div>`);
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
//# sourceMappingURL=login-559ab80d.js.map
