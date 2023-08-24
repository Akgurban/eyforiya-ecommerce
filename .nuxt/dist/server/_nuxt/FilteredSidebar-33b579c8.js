import { _ as _sfc_main$1 } from "./base-input-997484dd.js";
import { _ as __nuxt_component_1 } from "./chevron-left-454043cf.js";
import { useSSRContext, ref, watch, mergeProps, unref } from "vue";
import "hookable";
import { b as useRoute } from "../server.mjs";
import "destr";
import "devalue";
import "klona";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseContain } from "vue/server-renderer";
const _sfc_main = {
  __name: "FilteredSidebar",
  __ssrInlineRender: true,
  props: {
    brands: {
      type: Array,
      default: []
    },
    show_filter: {
      type: Boolean,
      default: false
    },
    show_cat: {
      type: Boolean,
      default: true
    },
    sub_categories: {
      type: Array,
      default: []
    }
  },
  emits: ["someChange"],
  setup(__props, { emit }) {
    var _a, _b, _c;
    const props = __props;
    const route = useRoute();
    const order = ref("");
    if ((_a = route.query) == null ? void 0 : _a.order) {
      order.value = route.query.order;
    }
    const orderList = ref([
      { code: "", name: "none" },
      { code: "asc", name: "min_to" },
      { code: "desc", name: "max_to" }
    ]);
    const selectedBrands = ref([]);
    const selectedSub = ref("");
    if ((_b = route.query) == null ? void 0 : _b.filter) {
      (_c = props.brands) == null ? void 0 : _c.forEach((e) => {
        var _a2, _b2;
        (_b2 = JSON.parse((_a2 = route.query) == null ? void 0 : _a2.filter)) == null ? void 0 : _b2.forEach((item) => {
          if (item == e.uuid) {
            e.selected = true;
            selectedBrands.value.push(e.uuid);
          }
        });
      });
    }
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
      const _component_BaseInput = _sfc_main$1;
      const _component_IconChevronLeft = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}>`);
      if (!props.show_filter) {
        _push(`<div class="lg:relative lg:top-0 md:pt-10 pt-20 overflow-auto fixed shadow-2xl top-0 z-40 h-screen px-3 py-3 pb-10 bg-slate-100 rounded-md p-4"><div><div class="md:text-2xl text-base uppercase font-bold text-[#44A4DB] font-alatsi mb-2">${ssrInterpolate(_ctx.$t("order"))}</div><div><!--[-->`);
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
          _push(`<div class="font-alatsi text-base font-semibold">${ssrInterpolate(_ctx.$t(item.name))}</div></div>`);
        });
        _push(`<!--]--></div></div>`);
        if (__props.show_cat) {
          _push(`<div class="mt-5"><div class="md:text-2xl text-base uppercase font-bold text-[#44A4DB] font-alatsi mb-2">${ssrInterpolate(_ctx.$t("in_category"))}</div>`);
          if (!unref(route).query.catId) {
            _push(`<div class="ml-5"><!--[-->`);
            ssrRenderList(__props.sub_categories, (item) => {
              _push(`<p class="font-alatsi font-semibold hover:text-[#44A4DB] cursor-auto md:cursor-pointer">${ssrInterpolate(item == null ? void 0 : item.name)}</p>`);
            });
            _push(`<!--]--></div>`);
          } else {
            _push(`<div class="text-[#44A4DB] md:cursor-pointer cursor-auto font-bold font-alatsi ml-5">`);
            _push(ssrRenderComponent(_component_IconChevronLeft, { class: "inline text-[#44A4DB]" }, null, _parent));
            _push(` = yza Cyk </div>`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="relative mt-5"><div class="md:text-2xl text-base uppercase font-bold text-[#44A4DB] font-alatsi mb-2">${ssrInterpolate(_ctx.$t("brands"))}</div><div><div class="right-0 border-t-2 h-auto duration-250 ease-in-out z-10 w-full"><!--[-->`);
        ssrRenderList(__props.brands, (option, index) => {
          _push(`<ul><li class="py-2 px-5 hover:bg-gray-100 cursor-pointer"><div class="flex items-center justify-start gap-2"><div class="h-4 w-4"><input${ssrIncludeBooleanAttr(Array.isArray(option.selected) ? ssrLooseContain(option.selected, null) : option.selected) ? " checked" : ""} type="checkbox"></div><div class="font-alatsi text-base font-semibold hover:text-[#44A4DB] cursor-auto md:cursor-pointer">${ssrInterpolate(option.brand_name)}</div></div></li></ul>`);
        });
        _push(`<!--]--></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FilteredSidebar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=FilteredSidebar-33b579c8.js.map
