import { _ as __nuxt_component_3 } from "./trash-68d2590c.js";
import { useSSRContext, ref, mergeProps, unref } from "vue";
import "hookable";
import "destr";
import "devalue";
import "klona";
import { u as useAuthStore } from "./authStore-4fa9ef0d.js";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { a as useTrashStore } from "./trash-fea4ab70.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _imports_0 = "" + __buildAssetsURL("add_cart.803e3000.svg");
const TrashButtonAndCounter_vue_vue_type_style_index_0_scoped_7f4158eb_lang = "";
const _sfc_main = {
  __name: "TrashButtonAndCounter",
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      required: true
    },
    count: {
      type: Number,
      default: 0
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    var _a;
    const props = __props;
    useAuthStore();
    const trash = useTrashStore();
    const count = ref(0);
    if (props.count > 0) {
      count.value = props.count;
    }
    (_a = trash.trash_items.products) == null ? void 0 : _a.forEach((item, index) => {
      var _a2;
      if ((item == null ? void 0 : item.uuid) == ((_a2 = props.item) == null ? void 0 : _a2.uuid)) {
        count.value = item.count;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconTrash = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative w-full md:h-17.5 h-13 mt-6 flex items-center justify-center" }, _attrs))} data-v-7f4158eb>`);
      if (unref(count) <= 0) {
        _push(`<div class="relative select-none mb-[20px] hover:scale-95 transition-transform duration-150" data-v-7f4158eb><img class="mx-auto h-9 md:h-10"${ssrRenderAttr("src", _imports_0)} alt="" data-v-7f4158eb><div class="absolute top-0 right-1/2 translate-x-1/2 flex items-center gap-3 text-white h-fit" data-v-7f4158eb><div class="md:text-xl text-lg font-alatsi font-semibold uppercase whitespace-nowrap mt-1 md:mt-0" data-v-7f4158eb>${ssrInterpolate(_ctx.$t("add_to"))}</div>`);
        _push(ssrRenderComponent(_component_IconTrash, {
          draggable: "false",
          class: "inline pointer-events-none md:w-9 w-6 md:h-9 h-6"
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(count) > 0) {
        _push(`<div class="w-[105%] mx-auto text-center z-20 md:h-17.5 h-13" data-v-7f4158eb><div class="w-full font-bold border border-gray-600 justify-evenly flex gap-2 px-6 py-[1px] md:py-[2px] rounded-xl bg-[#F6F6F6]" data-v-7f4158eb><div${ssrRenderAttr("disable", unref(count) <= 0)} class="cursor-auto md:cursor-pointer text-2xl md:text-3xl font-bold text-[#3C4242] px-2 select-none" data-v-7f4158eb> - </div><div class="cursor-auto md:cursor-pointer text-2xl md:text-2xl font-bold w-7 text-center" data-v-7f4158eb>${ssrInterpolate(unref(count))}</div><div class="cursor-auto md:cursor-pointer text-2xl md:text-3xl font-bold text-[#3C4242] px-2 select-none" data-v-7f4158eb> + </div></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TrashButtonAndCounter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7f4158eb"]]);
export {
  __nuxt_component_2 as _
};
//# sourceMappingURL=TrashButtonAndCounter-f0e42777.js.map
