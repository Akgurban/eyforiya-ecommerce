import { _ as _sfc_main$1 } from "./base-button-598d851d.js";
import { _ as _sfc_main$2 } from "./FilteredSidebar-b294f3b7.js";
import { _ as _sfc_main$3 } from "./base-product-b39da0b5.js";
import { ref, withAsyncContext, watch, mergeProps, withCtx, unref, createVNode, toDisplayString, useSSRContext } from "vue";
import "hookable";
import { h as useI18n, a as useRouter, b as useRoute, i as useState } from "../server.mjs";
import "destr";
import "devalue";
import "klona";
import { u as useMyFetch } from "./useMyFetch-4be3eef7.js";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderStyle, ssrRenderList } from "vue/server-renderer";
import { _ as _imports_0 } from "./filter-1c1b16da.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "./base-input-997484dd.js";
import "uuid";
import "./chevron-left-454043cf.js";
import "./nuxt-link-744fccd2.js";
import "ufo";
import "./like-a54ff78c.js";
import "./TrashButtonAndCounter-f0e42777.js";
import "./trash-68d2590c.js";
import "./authStore-4fa9ef0d.js";
import "./trash-fea4ab70.js";
import "./favourite-d4e45d0f.js";
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
const _id__vue_vue_type_style_index_0_scoped_e578307f_lang = "";
const _id__vue_vue_type_style_index_1_lang = "";
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a, _b, _c;
    let __temp, __restore;
    const { locale, locales } = useI18n();
    const router = useRouter();
    const route = useRoute();
    const incomedDatas = ref("");
    const showFilter = ref(true);
    ref("");
    ref([
      { code: "", name: "none" },
      { code: "asc", name: "min_to" },
      { code: "desc", name: "max_to" }
    ]);
    useState("$qnUG0TNUvZ");
    async function emittedFromSidebar(e) {
      var _a2;
      console.log(e);
      if ((_a2 = e.brnd) == null ? void 0 : _a2.length) {
        locales.value.forEach((a) => {
          if (a.code == locale.value) {
            router.push({
              path: `${a.code2}/brand_id/${e.brnd[e.brnd.length - 1]}`,
              query: {
                filter: JSON.stringify([`${e.brnd[e.brnd.length - 1]}`]),
                order: e.ord
              }
            });
          }
        });
      }
    }
    const toggleFilter = () => {
      showFilter.value = !showFilter.value;
    };
    const refetch = async () => {
      var _a2, _b2, _c2, _d, _e;
      ({
        lang: "tm",
        //  / "brand_id":["73fbbb62-c863-47e5-a80b-a7cbd67589f4"	,"031a90c5-a29c-4d38-9f49-10f52c37eb76"],
        order: route.query.order,
        limit: 20,
        offset: 0,
        criteria: route.params.id
      });
      if (((_a2 = route.query) == null ? void 0 : _a2.filter) && ((_c2 = JSON.parse((_b2 = route.query) == null ? void 0 : _b2.filter)) == null ? void 0 : _c2.length)) {
        JSON.parse((_d = route.query) == null ? void 0 : _d.filter);
      }
      if (route.params.id)
        ;
      if (route.query.catId) {
        route.query.catId;
      }
      const { data, status } = await useMyFetch(
        () => `/api/v1/client/products/brand-products`,
        {
          query: {
            brand_id: route.params.id,
            limit: 10,
            offset: 0,
            lang: "tm",
            order: route.query.order
          }
          // ?brand_id=${route.params.id}&limit=10&offset=0&lang=tm&order=${route.query.order}
        }
      );
      if (status) {
        console.log(data.value, "poo");
        incomedDatas.value = (_e = data.value) == null ? void 0 : _e.data;
      }
      await useMyFetch(
        `/api/v1/client/products/brands?lang=${locale.value}`
      );
    };
    [__temp, __restore] = withAsyncContext(() => refetch()), await __temp, __restore();
    if (((_a = route.query) == null ? void 0 : _a.filter) && incomedDatas.value) {
      (_c = (_b = incomedDatas.value) == null ? void 0 : _b.brands) == null ? void 0 : _c.forEach((e) => {
        var _a2, _b2;
        (_b2 = JSON.parse((_a2 = route.query) == null ? void 0 : _a2.filter)) == null ? void 0 : _b2.forEach((item) => {
          if (item == e.uuid) {
            e.selected = true;
          }
        });
      });
    }
    watch(
      () => route.query,
      async () => {
        var _a2;
        await refetch();
        (_a2 = brands.value.data) == null ? void 0 : _a2.forEach((e) => {
          var _a3, _b2;
          (_b2 = JSON.parse((_a3 = route.query) == null ? void 0 : _a3.filter)) == null ? void 0 : _b2.forEach((item) => {
            if (item == e.uuid) {
              e.selected = true;
            }
          });
        });
      }
    );
    const { data: brands } = ([__temp, __restore] = withAsyncContext(() => useMyFetch(
      `/api/v1/client/products/brands?lang=${locale.value}`
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b2, _c2, _d;
      const _component_BaseButton = _sfc_main$1;
      const _component_filtered_sidebar = _sfc_main$2;
      const _component_BaseProduct = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "2xl:w-[1440px] xl:screen mx-auto" }, _attrs))} data-v-e578307f><div class="flex justify-between px-3" data-v-e578307f><div data-v-e578307f></div>`);
      _push(ssrRenderComponent(_component_BaseButton, {
        onClick: toggleFilter,
        class: "self-end w-32 lg:hidden flex justify-between",
        type: "secondary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p data-v-e578307f${_scopeId}>${ssrInterpolate(!unref(showFilter) ? _ctx.$t("close_filter") : _ctx.$t("show_filter"))}</p><img${ssrRenderAttr("src", _imports_0)} class="inline w-5" alt="" data-v-e578307f${_scopeId}>`);
          } else {
            return [
              createVNode("p", null, toDisplayString(!unref(showFilter) ? _ctx.$t("close_filter") : _ctx.$t("show_filter")), 1),
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
      _push(`</div><div class="lead flex gap-5" data-v-e578307f><div class="md:block hidden w-full 2xl:w-[25%] lg:w-[28%] z-20" data-v-e578307f>`);
      _push(ssrRenderComponent(_component_filtered_sidebar, {
        show_filter: !unref(showFilter),
        brands: unref(brands).data,
        show_cat: false,
        sub_categories: (_a2 = unref(incomedDatas)) == null ? void 0 : _a2.sub_categories,
        onSomeChange: (e) => emittedFromSidebar(e)
      }, null, _parent));
      _push(`</div><div class="block md:hidden absolute w-full 2xl:w-[25%] lg:w-[28%]" data-v-e578307f>`);
      _push(ssrRenderComponent(_component_filtered_sidebar, {
        show_filter: unref(showFilter),
        show_cat: false,
        brands: unref(brands).data,
        sub_categories: (_b2 = unref(incomedDatas)) == null ? void 0 : _b2.sub_categories,
        onSomeChange: (e) => emittedFromSidebar(e)
      }, null, _parent));
      _push(`</div><div style="${ssrRenderStyle({ "width": "96% !important", "height": "auto !important", "user-select": "none !important", "padding-bottom": "20px !important" })}" class="flex flex-wrap gap-3 justify-start mx-auto mt-5" data-v-e578307f><!--[-->`);
      ssrRenderList((_c2 = unref(incomedDatas)) == null ? void 0 : _c2.products, (item, index) => {
        _push(`<div draggable="true" class="group relative md:w-[266px] w-[176px] product_item mb-3 hover:shadow-none md:hover:shadow-hero hover:bg-[#D9D9D940] transition-all ease-in-out duration-200 rounded-xl flex flex-col justify-between items-center" data-v-e578307f>`);
        _push(ssrRenderComponent(_component_BaseProduct, { item }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]-->`);
      if (!((_d = unref(incomedDatas)) == null ? void 0 : _d.products)) {
        _push(`<div class="mt-20 text-center w-full text-6xl text-gray-500 font-alatsi font-bold" data-v-e578307f>${ssrInterpolate(_ctx.$t("no_product"))}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/brand_id/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e578307f"]]);
export {
  _id_ as default
};
//# sourceMappingURL=_id_-19d541b6.js.map