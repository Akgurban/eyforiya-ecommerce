import { _ as _sfc_main$1 } from "./base-button-598d851d.js";
import { ref, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { u as useAdminFetch } from "./useAdminFetch-44f703d5.js";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { u as useAuthStore } from "./authStore-0ffe80fc.js";
import { d as useToast } from "../server.mjs";
import "./fetch-ba2ed0c4.js";
import "ohash";
import "destr";
import "devalue";
import "klona";
import "./adminStore-92ba1257.js";
import "ofetch";
import "#internal/nitro";
import "hookable";
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
import "pinia-plugin-persistedstate";
import "axios";
import "vue-awesome-paginate";
import "defu";
const _sfc_main = {
  __name: "reset-password",
  __ssrInlineRender: true,
  setup(__props) {
    const $toast = useToast();
    useAuthStore();
    ref([]);
    const pending1 = ref(false);
    const password = ref("");
    const password2 = ref("");
    const submit = async () => {
      const {
        data: history,
        status,
        pending
      } = await useAdminFetch(`/api/v1/admin/update/password`, {
        body: {
          user: password.value,
          password: password2.value
        },
        method: "POST"
      });
      if (status) {
        password.value = "";
        password2.value = "";
        $toast.success("password changed");
      }
      pending1.value = false;
      console.log();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseButton = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-screen px-3 md:w-full mx-auto z-20" }, _attrs))}><div class="flex md:flex-row flex-col gap-4 mt-3"><div class=""></div><div class="md:w-[900px] w-full"><div class="h-[96vh] overflow-auto"><div class="text-2xl md:text-4xl font-bold mt-6 text-blue-900">${ssrInterpolate(_ctx.$t("pass_rec"))}</div><form class="md:mt-20 mt-10"><div class="pl-2 md:pl-10 w-[70%]"><p class="text-blue-800 font-bold">Admin Ady Tazele</p><input${ssrRenderAttr("value", unref(password))} type="text" class="border-2 border-blue-800 rounded-full p-2">`);
      if (unref(pending1)) {
        _push(ssrRenderComponent(_component_BaseButton, {
          type: "danger",
          class: "m-6 inline rounded-full"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Pending...`);
            } else {
              return [
                createTextVNode("Pending...")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="pl-2 md:pl-10 w-[70%] mt-8"><p class="text-blue-800 font-bold">Admin Parol Tazele</p><input${ssrRenderAttr("value", unref(password2))} type="text" label="passwordy tazele" class="border-2 border-gray-700 rounded-xl p-2">`);
      if (unref(pending1)) {
        _push(ssrRenderComponent(_component_BaseButton, {
          type: "danger",
          class: "m-6 inline rounded-full"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Pending...`);
            } else {
              return [
                createTextVNode("Pending...")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mt-5 ml-12 text-xs text-red-300"> Gizlin kodunyzy yatdan chykarman!!! </div><div class="mt-5 w-fit">`);
      _push(ssrRenderComponent(_component_BaseButton, {
        onClick: submit,
        type: "danger",
        class: "m-6 inline rounded-full ml-12"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Dowam et`);
          } else {
            return [
              createTextVNode("Dowam et")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/reset-password.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=reset-password-7000ed17.js.map
