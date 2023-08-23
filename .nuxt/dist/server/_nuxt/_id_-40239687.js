import { _ as _sfc_main$1 } from "./base-button-598d851d.js";
import { _ as _sfc_main$2 } from "./FilteredSidebar-8271cea8.js";
import { _ as _sfc_main$3 } from "./base-product-09b837b4.js";
import { _ as __nuxt_component_3 } from "./base-paginate-5caaa8e9.js";
import { h as useI18n, a as useRouter, b as useRoute, i as useState } from "../server.mjs";
import { ref, withAsyncContext, watch, mergeProps, withCtx, unref, createVNode, toDisplayString, isRef, useSSRContext } from "vue";
import "hookable";
import "destr";
import "devalue";
import "klona";
import { u as useMyFetch } from "./useMyFetch-4be3eef7.js";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import { _ as _imports_0 } from "./filter-1c1b16da.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "./base-input-997484dd.js";
import "uuid";
import "./chevron-left-454043cf.js";
import "./nuxt-link-744fccd2.js";
import "ufo";
import "./like-a54ff78c.js";
import "./TrashButtonAndCounter-939e9973.js";
import "./trash-68d2590c.js";
import "./authStore-4fa9ef0d.js";
import "./trash-4c7dc6a3.js";
import "./favourite-ff026b63.js";
import "./chevron-right-0f6a5ea3.js";
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
const _id__vue_vue_type_style_index_0_scoped_4b87c27e_lang = "";
const _id__vue_vue_type_style_index_1_lang = "";
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a, _b;
    let __temp, __restore;
    const { locale, locales } = useI18n();
    const router = useRouter();
    const route = useRoute();
    const incomedDatas = ref("");
    const count = ref(1);
    const totalItems = ref(15);
    const showFilter = ref(true);
    const toggleFilter = () => {
      showFilter.value = !showFilter.value;
    };
    useState("$5CUfd3qgOX");
    async function emittedFromSidebar(e) {
      console.log(locale, locales);
      locales.value.forEach((a) => {
        if (a.code == locale.value) {
          console.log(a.code, locale.value);
          router.push({
            path: `${a.code2}/filtered-product/${route.params.id}`,
            query: { filter: JSON.stringify(e.brnd), order: e.ord, catId: e.sub }
          });
        }
      });
    }
    const refetch = async () => {
      var _a2, _b2, _c, _d, _e, _f, _g;
      let dataForm = {
        category_id: route.params.id,
        lang: locale.value,
        limit: 15,
        offset: count.value - 1
      };
      if (((_a2 = route.query) == null ? void 0 : _a2.filter) && ((_c = JSON.parse((_b2 = route.query) == null ? void 0 : _b2.filter)) == null ? void 0 : _c.length)) {
        dataForm.brand_id = JSON.parse((_d = route.query) == null ? void 0 : _d.filter);
      }
      if (route.query.order) {
        dataForm.order = route.query.order;
      }
      if (route.query.catId) {
        dataForm.sub_category_id = route.query.catId;
      }
      const { data, status } = await useMyFetch(
        () => `/api/v1/client/products/product`,
        {
          method: "POST",
          body: dataForm
        }
      );
      if (status) {
        incomedDatas.value = (_e = data.value) == null ? void 0 : _e.data;
        console.log(data.value, "[]");
        totalItems.value = (_g = (_f = data.value) == null ? void 0 : _f.data) == null ? void 0 : _g.product_count;
      }
    };
    [__temp, __restore] = withAsyncContext(() => refetch()), await __temp, __restore();
    if (incomedDatas.value) {
      (_b = (_a = incomedDatas.value) == null ? void 0 : _a.brands) == null ? void 0 : _b.forEach((e) => {
        var _a2;
        (_a2 = JSON.parse(route.query.filter)) == null ? void 0 : _a2.forEach((item) => {
          if (item == e.uuid) {
            e.selected = true;
          }
        });
      });
    }
    watch(
      () => route.query,
      async () => {
        var _a2, _b2;
        await refetch();
        (_b2 = (_a2 = incomedDatas.value) == null ? void 0 : _a2.brands) == null ? void 0 : _b2.forEach((e) => {
          var _a3, _b3;
          (_b3 = JSON.parse((_a3 = route.query) == null ? void 0 : _a3.filter)) == null ? void 0 : _b3.forEach((item) => {
            if (item == e.uuid) {
              e.selected = true;
            }
          });
        });
      }
    );
    watch(count, async () => {
      await refetch();
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b2, _c, _d, _e, _f;
      const _component_BaseButton = _sfc_main$1;
      const _component_filtered_sidebar = _sfc_main$2;
      const _component_BaseProduct = _sfc_main$3;
      const _component_BasePaginate = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "2xl:w-[1440px] xl:screen mx-auto" }, _attrs))} data-v-4b87c27e><div class="flex justify-between" data-v-4b87c27e><div data-v-4b87c27e></div>`);
      _push(ssrRenderComponent(_component_BaseButton, {
        onClick: toggleFilter,
        class: "self-end w-32 lg:hidden flex justify-between",
        type: "secondary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p data-v-4b87c27e${_scopeId}>${ssrInterpolate(!unref(showFilter) ? _ctx.$t("close_filter") : _ctx.$t("show_filter"))}</p><img${ssrRenderAttr("src", _imports_0)} class="inline w-5" alt="" data-v-4b87c27e${_scopeId}>`);
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
      _push(`</div><div class="flex justify-between gap-5" data-v-4b87c27e><div class="md:block hidden w-full 2xl:w-[25%] lg:w-[28%] z-20 sticky top-60" data-v-4b87c27e>`);
      _push(ssrRenderComponent(_component_filtered_sidebar, {
        show_filter: !unref(showFilter),
        brands: (_a2 = unref(incomedDatas)) == null ? void 0 : _a2.brands,
        sub_categories: (_b2 = unref(incomedDatas)) == null ? void 0 : _b2.sub_categories,
        onSomeChange: (e) => emittedFromSidebar(e)
      }, null, _parent));
      _push(`</div><div class="block md:hidden absolute w-full 2xl:w-[25%] lg:w-[28%]" data-v-4b87c27e>`);
      _push(ssrRenderComponent(_component_filtered_sidebar, {
        show_filter: unref(showFilter),
        brands: (_c = unref(incomedDatas)) == null ? void 0 : _c.brands,
        sub_categories: (_d = unref(incomedDatas)) == null ? void 0 : _d.sub_categories,
        onSomeChange: (e) => emittedFromSidebar(e)
      }, null, _parent));
      _push(`</div><div class="w-full" data-v-4b87c27e><div class="flex flex-wrap gap-3 w-full justify-start mx-auto mt-5 px-2" data-v-4b87c27e><!--[-->`);
      ssrRenderList((_e = unref(incomedDatas)) == null ? void 0 : _e.products, (item, index) => {
        _push(`<div draggable="true" class="group relative md:w-[266px] w-[176px] product_item mb-3 hover:shadow-none md:hover:shadow-hero hover:bg-[#D9D9D940] transition-all ease-in-out duration-200 rounded-xl flex flex-col justify-start items-center" data-v-4b87c27e>`);
        _push(ssrRenderComponent(_component_BaseProduct, { item }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]-->`);
      if (!((_f = unref(incomedDatas)) == null ? void 0 : _f.products)) {
        _push(`<div class="mt-20 text-center w-full text-6xl text-gray-500 font-alatsi font-bold" data-v-4b87c27e>${ssrInterpolate(_ctx.$t("no_product"))}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (!(unref(count) == 1)) {
        _push(`<div class="" data-v-4b87c27e>`);
        _push(ssrRenderComponent(_component_BasePaginate, {
          "total-items": unref(totalItems),
          modelValue: unref(count),
          "onUpdate:modelValue": ($event) => isRef(count) ? count.value = $event : null
        }, null, _parent));
        _push(`</div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/filtered-product/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4b87c27e"]]);
export {
  _id_ as default
};
//# sourceMappingURL=_id_-40239687.js.map
