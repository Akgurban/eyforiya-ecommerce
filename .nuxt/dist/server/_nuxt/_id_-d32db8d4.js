import { _ as __nuxt_component_0 } from "./nuxt-link-744fccd2.js";
import { _ as __nuxt_component_1 } from "./chevron-right-0f6a5ea3.js";
import { _ as _sfc_main$1 } from "./base-product-4249ccf3.js";
import { _ as __nuxt_component_3 } from "./base-paginate-5caaa8e9.js";
import { ref, withAsyncContext, mergeProps, withCtx, createTextVNode, unref, isRef, useSSRContext } from "vue";
import "hookable";
import { b as useRoute } from "../server.mjs";
import "destr";
import "devalue";
import "klona";
import { u as useMyFetch } from "./useMyFetch-4be3eef7.js";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { u as useFavStore } from "./favourite-d4e45d0f.js";
import "ufo";
import "./_plugin-vue_export-helper-cc2b3d55.js";
import "./like-a54ff78c.js";
import "./TrashButtonAndCounter-e878a627.js";
import "./trash-68d2590c.js";
import "./authStore-4fa9ef0d.js";
import "./trash-fea4ab70.js";
import "./chevron-left-454043cf.js";
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
import "ohash";
import "pinia-plugin-persistedstate";
import "axios";
import "vue-awesome-paginate";
import "defu";
import "./fetch-ba2ed0c4.js";
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const count = ref(1);
    const route = useRoute();
    const { data: all_products } = ([__temp, __restore] = withAsyncContext(() => useMyFetch(
      `/api/v1/client/products/special-categories/${route.params.id}?lang=tm&limit=10&offset=0`
    )), __temp = await __temp, __restore(), __temp);
    const fav = useFavStore();
    fav.wish_items.map((e) => e.isLiked = true);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_IconChevronRight = __nuxt_component_1;
      const _component_BaseProduct = _sfc_main$1;
      const _component_BasePaginate = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "2xl:w-[1424px] xl:w-[1230px] w-screen mx-auto" }, _attrs))}><div class="2xl:w-[1424px] xl:w-[1230px] w-screen flex gap-3 items-center pl-10">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "cursor-pointer hover:font-bold"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Home`);
          } else {
            return [
              createTextVNode("Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_IconChevronRight, { class: "h-3" }, null, _parent));
      _push(`<p class="cursor-pointer font-bold">special products</p></div><div class="w-full flex gap-2 flex-wrap mt-4 mx-3">`);
      if (!((_a = unref(all_products).data.products) == null ? void 0 : _a.length)) {
        _push(`<div class="mt-20 text-center w-full text-6xl text-gray-500 font-alatsi font-bold">${ssrInterpolate(_ctx.$t("no_product"))}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(unref(all_products).data.products, (item) => {
        _push(`<div class="group relative md:w-[276px] w-[176px] product_item mb-3 hover:shadow-none md:hover:shadow-hero bg-[#D9D9D940] hover:bg-[#D9D9D940] transition-all ease-in-out duration-200 rounded-xl flex flex-col justify-between items-center">`);
        _push(ssrRenderComponent(_component_BaseProduct, { item }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_BasePaginate, {
        modelValue: unref(count),
        "onUpdate:modelValue": ($event) => isRef(count) ? count.value = $event : null,
        "total-items": unref(all_products).data.count
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/special-products/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_id_-d32db8d4.js.map
