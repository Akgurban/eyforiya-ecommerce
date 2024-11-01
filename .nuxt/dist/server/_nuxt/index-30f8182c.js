import { _ as __nuxt_component_0 } from "./nuxt-link-744fccd2.js";
import { h as useI18n, u as useHead, a as useRouter } from "../server.mjs";
import { u as useMyFetch } from "./useMyFetch-a8a165b0.js";
import "./index-e12b288f.js";
import { withAsyncContext, mergeProps, unref, withCtx, createVNode, useSSRContext } from "vue";
import "hookable";
import "destr";
import "devalue";
import "klona";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import "ufo";
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
import "./authStore-0ffe80fc.js";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { locale } = useI18n();
    const { data: brands } = ([__temp, __restore] = withAsyncContext(() => useMyFetch(
      `/api/v1/client/products/brands?lang=${locale.value}`
    )), __temp = await __temp, __restore(), __temp);
    useHead({
      title: "Brendlar - Brands - Бренды",
      meta: [
        { name: "description", content: "All products-Ähli harytlar-Все Товары" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "2xl:w-[1440px] xl:screen w-[90%] mx-auto" }, _attrs))}><div style="${ssrRenderStyle({ "padding-bottom": "20px !important" })}" class="flex flex-wrap gap-6 justify-center"><!--[-->`);
      ssrRenderList((_a = unref(brands)) == null ? void 0 : _a.data, (item, index) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: item.uuid,
          draggable: "true",
          onClick: ($event) => ("useRouter" in _ctx ? _ctx.useRouter : unref(useRouter))().push(
            _ctx.localePath({
              path: `/brand_id/${item == null ? void 0 : item.uuid}`,
              query: { p: "1", filter: JSON.stringify([`${item == null ? void 0 : item.uuid}`]) }
            })
          ),
          class: "group md:w-[146px] gap-3 md:gap-6 w-[96px] product_item mb-3 hover:shadow-none md:hover:shadow-hero hover:bg-[#D9D9D940] transition-all ease-in-out duration-200 rounded-xl flex flex-col justify-between items-center"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img class="text-black w-full aspect-square object-contain mx-5 hover:grayscale-0 transition-all duration-75 cursor-pointer"${ssrRenderAttr("src", `http://duypbaha.com.tm/api/v1/uploads/brands/${item == null ? void 0 : item.img_path}`)} alt=""${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  class: "text-black w-full aspect-square object-contain mx-5 hover:grayscale-0 transition-all duration-75 cursor-pointer",
                  src: `http://duypbaha.com.tm/api/v1/uploads/brands/${item == null ? void 0 : item.img_path}`,
                  alt: ""
                }, null, 8, ["src"])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]-->`);
      if (!unref(brands).data) {
        _push(`<div class="mt-20 text-center w-full text-6xl text-gray-500 font-alatsi font-bold">${ssrInterpolate(_ctx.$t("no_product"))}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/brands/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-30f8182c.js.map
