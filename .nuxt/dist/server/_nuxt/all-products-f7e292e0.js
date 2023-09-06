import { _ as _sfc_main$1 } from "./base-button-598d851d.js";
import { _ as _sfc_main$2 } from "./base-product-4249ccf3.js";
import { _ as __nuxt_component_3 } from "./base-paginate-5caaa8e9.js";
import "./index-e12b288f.js";
import { u as useHead, h as useI18n } from "../server.mjs";
import { ref, withAsyncContext, watch, mergeProps, withCtx, unref, createVNode, toDisplayString, isRef, useSSRContext } from "vue";
import { u as useMyFetch } from "./useMyFetch-4be3eef7.js";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
import { _ as _imports_0 } from "./filter-1c1b16da.js";
import { u as useFavStore } from "./favourite-d4e45d0f.js";
import "./nuxt-link-744fccd2.js";
import "ufo";
import "hookable";
import "./like-a54ff78c.js";
import "./TrashButtonAndCounter-e878a627.js";
import "./trash-68d2590c.js";
import "./_plugin-vue_export-helper-cc2b3d55.js";
import "destr";
import "devalue";
import "klona";
import "./authStore-4fa9ef0d.js";
import "./trash-fea4ab70.js";
import "./chevron-left-454043cf.js";
import "./chevron-right-0f6a5ea3.js";
import "unhead";
import "ofetch";
import "#internal/nitro";
import "unctx";
/* empty css                     */import "vue-router";
import "h3";
import "@vue/devtools-api";
import "@unhead/ssr";
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
  __name: "all-products",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a;
    let __temp, __restore;
    useHead({
      title: `All products-Ähli harytlar-Все Товары`,
      meta: [
        { name: "description", content: "All products-Ähli harytlar-Все Товары" }
      ]
    });
    const { locale } = useI18n();
    const count = ref(1);
    const showFilter = ref(false);
    const all_products = ref(null);
    const refetch = async () => {
      const { data: all } = await useMyFetch(
        `/api/v1/client/products/all-products?limit=15&offset=${count.value}&lang=${locale.value}`
      );
      console.log(all);
      all_products.value = all.value.data;
    };
    [__temp, __restore] = withAsyncContext(() => refetch()), await __temp, __restore();
    const toggleFilter = () => {
      showFilter.value = !showFilter.value;
    };
    const fav = useFavStore();
    (_a = fav.wish_items) == null ? void 0 : _a.map((e) => e.isLiked = true);
    const { data: categories } = ([__temp, __restore] = withAsyncContext(() => useMyFetch(
      `/api/v1/client/products/categories?lang=${locale.value}`
    )), __temp = await __temp, __restore(), __temp);
    watch(count, async () => {
      await refetch();
      window.scrollTo(0, 0);
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      const _component_BaseButton = _sfc_main$1;
      const _component_BaseProduct = _sfc_main$2;
      const _component_BasePaginate = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "2xl:w-[1440px] xl:screen mx-auto" }, _attrs))}><div class="flex justify-between"><div></div>`);
      _push(ssrRenderComponent(_component_BaseButton, {
        onClick: toggleFilter,
        class: "self-end w-32 lg:hidden flex justify-between",
        type: "secondary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}>${ssrInterpolate(unref(showFilter) ? _ctx.$t("close_filter") : _ctx.$t("show_filter"))}</p><img${ssrRenderAttr("src", _imports_0)} class="inline w-5" alt=""${_scopeId}>`);
          } else {
            return [
              createVNode("p", null, toDisplayString(unref(showFilter) ? _ctx.$t("close_filter") : _ctx.$t("show_filter")), 1),
              createVNode("img", {
                src: _imports_0,
                class: "inline w-5",
                alt: ""
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="lead flex gap-5"><div class="md:relative absolute w-[50%] 2xl:w-[25%] lg:w-[28%]"><div class="md:block hidden shadow-2xl top-0 z-30 h-screen px-2 py-2 pb-10 bg-slate-100 rounded-md p-4"><div class="mt-5"><div class="md:text-xl text-lg font-semibold uppercase text-[#44A4DB] font-alatsi mb-2">${ssrInterpolate(_ctx.$t("category_select"))}</div><div class="ml-5"><!--[-->`);
      ssrRenderList(unref(categories).data, (item) => {
        _push(`<p class="font-alatsi font-semibold hover:text-[#44A4DB] cursor-auto md:cursor-pointer">${ssrInterpolate(item == null ? void 0 : item.name)}</p>`);
      });
      _push(`<!--]--></div></div></div>`);
      if (unref(showFilter)) {
        _push(`<div class="md:hidden block fixed w-[50%] 2xl:w-[25%] lg:w-[28%] shadow-2xl top-0 z-40 h-screen px-2 py-2 pb-10 bg-slate-100 rounded-md p-4"><div class="mt-5"><div class="md:text-xl text-base font-bold w-min uppercase whitespace-nowrap text-[#44A4DB] font-alatsi mb-2">${ssrInterpolate(_ctx.$t("category_select"))}</div><div class="ml-5"><!--[-->`);
        ssrRenderList(unref(categories).data, (item) => {
          _push(`<p class="font-alatsi font-semibold hover:text-[#44A4DB] cursor-auto md:cursor-pointer">${ssrInterpolate(item == null ? void 0 : item.name)}</p>`);
        });
        _push(`<!--]--></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="w-full"><div style="${ssrRenderStyle({ "padding-bottom": "20px !important" })}" class="flex w-full flex-wrap gap-3 px-3 justify-start mt-5"><!--[-->`);
      ssrRenderList((_a2 = unref(all_products)) == null ? void 0 : _a2.products, (item, index) => {
        _push(`<div draggable="true" class="group relative md:w-[266px] w-[176px] product_item mb-3 hover:shadow-none md:hover:shadow-hero hover:bg-[#D9D9D940] transition-all ease-in-out duration-200 rounded-xl flex flex-col justify-start gap-y-4 items-center">`);
        _push(ssrRenderComponent(_component_BaseProduct, { item }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]-->`);
      if (!unref(all_products)) {
        _push(`<div class="mt-20 text-center w-full text-6xl text-gray-500 font-alatsi font-bold">${ssrInterpolate(_ctx.$t("no_product"))}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_BasePaginate, {
        modelValue: unref(count),
        "onUpdate:modelValue": ($event) => isRef(count) ? count.value = $event : null,
        "total-items": unref(all_products).count
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/all-products.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=all-products-f7e292e0.js.map
