import { _ as __nuxt_component_0 } from "./nuxt-link-744fccd2.js";
import { _ as __nuxt_component_1 } from "./chevron-right-0f6a5ea3.js";
import { _ as __nuxt_component_2 } from "./profil-sidebar-204585ef.js";
import { ref, withAsyncContext, mergeProps, withCtx, createTextVNode, toDisplayString, unref, useSSRContext } from "vue";
import { u as useMyFetch } from "./useMyFetch-4be3eef7.js";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { u as useAuthStore } from "./authStore-4fa9ef0d.js";
import "ufo";
import "hookable";
import "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "unctx";
/* empty css                     */import "vue-router";
import "h3";
import "@vue/devtools-api";
import "destr";
import "devalue";
import "klona";
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
import "./_plugin-vue_export-helper-cc2b3d55.js";
import "./base-button-598d851d.js";
import "./fetch-ba2ed0c4.js";
const _sfc_main = {
  __name: "order",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a;
    let __temp, __restore;
    const authStore = useAuthStore();
    const orders = ref([]);
    if ((_a = authStore.userToken) == null ? void 0 : _a.uuid) {
      const { data: history } = ([__temp, __restore] = withAsyncContext(() => {
        var _a2;
        return useMyFetch(
          `/api/v1/client/orders?limit=100&offset=0&lang=tm&user_id=${(_a2 = authStore.userToken) == null ? void 0 : _a2.uuid}`
        );
      }), __temp = await __temp, __restore(), __temp);
      orders.value = history.value.data.orders;
      console.log(history.value.data.orders, "history");
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_IconChevronRight = __nuxt_component_1;
      const _component_profil_sidebar = __nuxt_component_2;
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
      _push(`<p class="cursor-pointer">${ssrInterpolate(_ctx.$t("history"))}</p></div><div class="flex md:flex-row flex-col gap-4 mt-3"><div class="">`);
      _push(ssrRenderComponent(_component_profil_sidebar, null, null, _parent));
      _push(`</div><div class="md:w-[900px] w-full">`);
      if (!unref(orders)) {
        _push(`<div class="w-full h-auto mt-30 flex font-bold items-center justify-center text-6xl font-alatsi">${ssrInterpolate(_ctx.$t("noorder"))}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="overflow-auto"><ul><!--[-->`);
      ssrRenderList(unref(orders), (item) => {
        _push(`<div class="bg-gray-200 cursor-pointer text-lg font-bold rounded-md p-2 m-1"><div class="bg-gray-200 cursor-pointer flex justify-between items-center text-lg font-bold rounded-md p-2 m-1"><p>${ssrInterpolate(item.username)}</p><p>+993 ${ssrInterpolate(item.string)}</p></div><ul class="pl-0 md:pl-10"><!--[-->`);
        ssrRenderList(item.products, (small) => {
          _push(`<li class="mt-2 odd:bg-gray-50 even:bg-gray-100 cursor-pointer flex justify-between items-center text-lg font-bold rounded-md p-2 m-1"><img${ssrRenderAttr("src", `http://duypbaha.com.tm/api/v1/uploads/images/${small == null ? void 0 : small.img_path}`)} alt="" class="h-10 w-15"><p>${ssrInterpolate(small.product_name)}</p><p>${ssrInterpolate(small.count)} x</p></li>`);
        });
        _push(`<!--]--></ul></div>`);
      });
      _push(`<!--]--></ul></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profil/order.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=order-68abafe7.js.map
