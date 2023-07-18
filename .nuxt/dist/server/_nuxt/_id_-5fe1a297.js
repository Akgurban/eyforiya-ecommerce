import { _ as _sfc_main$3 } from "./base-input-9469f36f.js";
import { useSSRContext, mergeProps, ref, watch, unref, withAsyncContext, withCtx, createVNode, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderStyle, ssrRenderAttr, ssrRenderClass } from "vue/server-renderer";
import { _ as _export_sfc, a as useRoute, f as useI18n, b as useRouter, g as useState } from "../server.mjs";
import "hookable";
import "destr";
import "devalue";
import "klona";
import { _ as __nuxt_component_0 } from "./nuxt-link-563b35af.js";
import { u as useMyFetch, _ as _sfc_main$4 } from "./useMyFetch-b388ac84.js";
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
import "./trash-d8d1b74e.js";
import "./authStore-a41c077e.js";
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "12",
    height: "18",
    viewBox: "0 0 12 18",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M11.342 1.92793L4.27089 8.99903L11.342 16.07L9.5742 17.8378L0.735352 8.99903L9.5742 0.160156L11.342 1.92793Z" fill="currentColor"></path></svg>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icon/chevron-left.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "FilteredSidebar",
  __ssrInlineRender: true,
  props: {
    brands: {
      type: Array,
      default: []
    },
    sub_categories: {
      type: Array,
      default: []
    }
  },
  emits: ["someChange"],
  setup(__props, { emit }) {
    var _a;
    const props = __props;
    const route = useRoute();
    const order = ref("desc");
    if (route.query.order) {
      order.value = route.query.order;
    }
    const orderList = ref([
      { code: "desc", name: "Hic hili" },
      { code: "asc", name: "Arzandan gymmada" },
      { code: "desc", name: "Gymmatdan arzana" }
    ]);
    const selectedBrands = ref([]);
    const selectedSub = ref("");
    (_a = props.brands) == null ? void 0 : _a.forEach((e) => {
      var _a2;
      (_a2 = JSON.parse(route.query.filter)) == null ? void 0 : _a2.forEach((item) => {
        if (item == e.uuid) {
          e.selected = true;
          selectedBrands.value.push(e.uuid);
        }
      });
    });
    function test(e) {
      order.value = e.code;
      emit("someChange", {
        sub: selectedSub.value,
        ord: order.value,
        brnd: selectedBrands.value
      });
    }
    watch(selectedSub, () => {
      emit("someChange", {
        sub: selectedSub.value,
        ord: order.value,
        brnd: selectedBrands.value
      });
    });
    watch(selectedBrands, () => {
      emit("someChange", {
        sub: selectedSub.value,
        ord: order.value,
        brnd: selectedBrands.value
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseInput = _sfc_main$3;
      const _component_IconChevronLeft = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative px-2 py-2 lg:block hidden 2xl:w-[25%] lg:w-[28%] pb-10 bg-slate-100 rounded-md p-4" }, _attrs))}><div><div class="text-2xl font-alatsi mb-2">Tertip</div><div><!--[-->`);
      ssrRenderList(unref(orderList), (item) => {
        _push(`<div class="flex items-center gap-2">`);
        _push(ssrRenderComponent(_component_BaseInput, {
          onChange: ($event) => test(item),
          heightFull: "",
          class: "w-5 h-5",
          type: "radio",
          name: "price-filter",
          checked: item.code == unref(order)
        }, null, _parent));
        _push(`<div class="font-alatsi text-base">${ssrInterpolate(item.name)}</div></div>`);
      });
      _push(`<!--]--></div></div><div class="mt-5"><div class="text-2xl font-alatsi mb-2">Icki kategoriya saylan</div>`);
      if (!unref(route).query.catId) {
        _push(`<div class="ml-5"><!--[-->`);
        ssrRenderList(__props.sub_categories, (item) => {
          _push(`<p class="font-alatsi hover:text-[#44A4DB] cursor-auto md:cursor-pointer">${ssrInterpolate(item.uuid)}</p>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="text-[#44A4DB] md:cursor-pointer cursor-auto font-alatsi ml-5">`);
        _push(ssrRenderComponent(_component_IconChevronLeft, { class: "inline text-[#44A4DB]" }, null, _parent));
        _push(` = yza Cyk </div>`);
      }
      _push(`</div><div class="relative mt-5"><div class="text-2xl font-alatsi mb-2">Brend</div><div><div class="right-0 border-t-2 h-auto duration-250 ease-in-out z-10 w-full"><!--[-->`);
      ssrRenderList(__props.brands, (option, index) => {
        _push(`<ul><li class="py-2 px-5 hover:bg-gray-100 cursor-pointer"><div class="flex items-center justify-start gap-2"><div class="h-4 w-4"><input${ssrIncludeBooleanAttr(Array.isArray(option.selected) ? ssrLooseContain(option.selected, null) : option.selected) ? " checked" : ""} type="checkbox"></div><div class="font-alatsi text-base hover:text-[#44A4DB] cursor-auto md:cursor-pointer">${ssrInterpolate(option.brand_name)}</div></div></li></ul>`);
      });
      _push(`<!--]--></div></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FilteredSidebar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _id__vue_vue_type_style_index_0_scoped_f1c1347f_lang = "";
const _id__vue_vue_type_style_index_1_lang = "";
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a;
    let __temp, __restore;
    useI18n();
    const router = useRouter();
    const route = useRoute();
    const incomedDatas = ref("");
    const active = useState("$5CUfd3qgOX");
    async function testFunc(e) {
      console.log("pp");
      router.push({
        path: `/filtered-product/${route.params.id}`,
        query: { filter: JSON.stringify(e.brnd), order: e.ord, catId: e.sub }
      });
    }
    const refetch = async () => {
      let dataForm = {
        category_id: route.params.id,
        lang: "tm",
        limit: 10,
        offset: 0
      };
      if (JSON.parse(route.query.filter).length) {
        dataForm.brand_id = JSON.parse(route.query.filter);
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
      incomedDatas.value = data.value.data;
      if (status) {
        console.log(data.value.data, "geldi========");
      }
    };
    [__temp, __restore] = withAsyncContext(() => refetch()), await __temp, __restore();
    (_a = incomedDatas.value.brands) == null ? void 0 : _a.forEach((e) => {
      if (route.query.filter)
        ;
      JSON.parse(route.query.filter).forEach((item) => {
        if (item == e.uuid) {
          e.selected = true;
        }
      });
    });
    watch(
      () => route.query,
      async () => {
        await refetch();
        console.log("refetch");
        incomedDatas.value.brands.forEach((e) => {
          JSON.parse(route.query.filter).forEach((item) => {
            if (item == e.uuid) {
              e.selected = true;
            }
          });
        });
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_filtered_sidebar = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_TrashButtonAndCounter = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "2xl:w-[1440px] xl:screen mx-auto" }, _attrs))} data-v-f1c1347f><div class="lead flex gap-5" data-v-f1c1347f>`);
      _push(ssrRenderComponent(_component_filtered_sidebar, {
        brands: unref(incomedDatas).brands,
        sub_categories: unref(incomedDatas).sub_categories,
        onSomeChange: (e) => testFunc(e)
      }, null, _parent));
      _push(`<div style="${ssrRenderStyle({ "width": "97% !important", "height": "auto !important", "user-select": "none !important", "padding-bottom": "20px !important" })}" class="flex flex-wrap gap-3" data-v-f1c1347f><!--[-->`);
      ssrRenderList(unref(incomedDatas).products, (item, index) => {
        _push(`<div draggable="true" class="group md:w-auto w-[176px] product_item mb-3 hover:shadow-none md:hover:shadow-hero hover:bg-[#D9D9D940] transition-all ease-in-out duration-200 rounded-xl flex flex-col justify-between items-center" data-v-f1c1347f>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          onClick: ($event) => active.value = item.uuid,
          to: _ctx.localePath(`/product/${item.uuid}`),
          class: "rounded-xl text-center mt-6"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img class="border pointer-events-none select-none border-[#e6e6e6] w-[90%] md:w-[245px] mx-3 aspect-square"${ssrRenderAttr("src", `http://duypbaha.com.tm/api/v1/uploads/images/${item.images}`)} alt="" loading="lazy" data-v-f1c1347f${_scopeId}><div class="${ssrRenderClass([{ active: unref(active) === item.uuid }, "prod_name w-fit mx-auto md:text-3xl text-base font-alatsi text-[#3C4242] mt-3 mb-1"])}" data-v-f1c1347f${_scopeId}>${ssrInterpolate(item.name)}</div><div class="mx-auto text-[#48BC4E] text-3xl font-alatsi w-fit pb-1 border-b border-[#44A4DB]" data-v-f1c1347f${_scopeId}>${ssrInterpolate(item.price)} TMT </div>`);
            } else {
              return [
                createVNode("img", {
                  class: "border pointer-events-none select-none border-[#e6e6e6] w-[90%] md:w-[245px] mx-3 aspect-square",
                  src: `http://duypbaha.com.tm/api/v1/uploads/images/${item.images}`,
                  alt: "",
                  loading: "lazy"
                }, null, 8, ["src"]),
                createVNode("div", {
                  class: ["prod_name w-fit mx-auto md:text-3xl text-base font-alatsi text-[#3C4242] mt-3 mb-1", { active: unref(active) === item.uuid }]
                }, toDisplayString(item.name), 3),
                createVNode("div", { class: "mx-auto text-[#48BC4E] text-3xl font-alatsi w-fit pb-1 border-b border-[#44A4DB]" }, toDisplayString(item.price) + " TMT ", 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(_component_TrashButtonAndCounter, null, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]-->`);
      if (!unref(incomedDatas).products) {
        _push(`<div class="mt-20 text-center w-full text-6xl text-gray-500 font-alatsi font-bold" data-v-f1c1347f> Hic hili Haryt tapylmady! </div>`);
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
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f1c1347f"]]);
export {
  _id_ as default
};
//# sourceMappingURL=_id_-5fe1a297.js.map
