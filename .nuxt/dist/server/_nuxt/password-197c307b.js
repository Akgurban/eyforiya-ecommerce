import { _ as __nuxt_component_0 } from "./nuxt-link-744fccd2.js";
import { _ as __nuxt_component_1 } from "./chevron-right-0f6a5ea3.js";
import { _ as __nuxt_component_2 } from "./profil-sidebar-631bed53.js";
import { _ as _sfc_main$1 } from "./base-button-598d851d.js";
import { ref, mergeProps, withCtx, createTextVNode, toDisplayString, unref, useSSRContext } from "vue";
import { u as useMyFetch } from "./useMyFetch-4be3eef7.js";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { u as useAuthStore } from "./authStore-4fa9ef0d.js";
import { d as useToast } from "../server.mjs";
import "ufo";
import "hookable";
import "./_plugin-vue_export-helper-cc2b3d55.js";
import "destr";
import "devalue";
import "klona";
import "./fetch-ba2ed0c4.js";
import "ohash";
import "ofetch";
import "#internal/nitro";
import "unctx";
/* empty css                     */import "vue-router";
import "h3";
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
  __name: "password",
  __ssrInlineRender: true,
  setup(__props) {
    const $toast = useToast();
    const authStore = useAuthStore();
    ref([]);
    const pending1 = ref(false);
    const password = ref("");
    const password2 = ref("");
    const submit = async () => {
      var _a, _b;
      if ((_a = authStore.userToken) == null ? void 0 : _a.uuid) {
        if (password.value !== password2.value) {
          $toast.error("tazeden girizyan password yalnysh");
        } else {
          pending1.value = true;
          const {
            data: history,
            status,
            pending
          } = await useMyFetch(`/api/v1/client/user/update`, {
            body: {
              password: password.value,
              uuid: (_b = authStore.userToken) == null ? void 0 : _b.uuid
            },
            method: "POST"
          });
          if (status) {
            password.value = "";
            password2.value = "";
            $toast.success("password changed");
            authStore.userToken.uuid;
          }
          pending1.value = false;
          console.log();
          console.log(history.value, "history");
        }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_IconChevronRight = __nuxt_component_1;
      const _component_profil_sidebar = __nuxt_component_2;
      const _component_BaseButton = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-screen px-3 md:w-[1200px] mx-auto z-20" }, _attrs))}><div class="2xl:w-[1424px] xl:w-[1230px] w-full flex gap-3 items-center pl-0 md:pl-10">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "cursor-pointer hover:font-bold"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("home"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("home")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_IconChevronRight, { class: "h-3" }, null, _parent));
      _push(`<p class="cursor-pointer">${ssrInterpolate(_ctx.$t("profile"))}</p>`);
      _push(ssrRenderComponent(_component_IconChevronRight, { class: "h-3" }, null, _parent));
      _push(`<p class="cursor-pointer">${ssrInterpolate(_ctx.$t("password"))}</p></div><div class="flex md:flex-row flex-col gap-4 mt-3"><div class="">`);
      _push(ssrRenderComponent(_component_profil_sidebar, null, null, _parent));
      _push(`</div><div class="md:w-[900px] w-full"><div class="h-[96vh] overflow-auto"><div class="text-2xl md:text-4xl font-bold mt-6 text-blue-900"> Password recover </div><form class="md:mt-20 mt-10"><div class="pl-2 md:pl-10 w-[70%]"><p class="text-blue-800 font-bold">passwordy tazele</p><input${ssrRenderAttr("value", unref(password))} type="password" class="border-2 border-blue-800 rounded-full p-2">`);
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
      _push(`</div><div class="pl-2 md:pl-10 w-[70%] mt-8"><p class="text-blue-800 font-bold">passwordy tazeden girizin</p><input${ssrRenderAttr("value", unref(password2))} type="password" label="passwordy tazele" class="border-2 border-blue-800 rounded-full p-2">`);
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
      _push(`</div><div class="mt-5 ml-auto w-fit">`);
      _push(ssrRenderComponent(_component_BaseButton, {
        onClick: submit,
        type: "secondary"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profil/password.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=password-197c307b.js.map
