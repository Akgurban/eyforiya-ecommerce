import { _ as __nuxt_component_3 } from "./trash-68d2590c.js";
import { useSSRContext, ref, unref } from "vue";
import "hookable";
import "destr";
import "devalue";
import "klona";
import { u as useAuthStore } from "./authStore-4fa9ef0d.js";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { a as useTrashStore } from "./trash-4c7dc6a3.js";
const _imports_0 = "" + __buildAssetsURL("add_cart.803e3000.svg");
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
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(count) == 0) {
        _push(`<div class="relative select-none mb-[20px] hover:scale-95 transition-transform duration-150"><img class="mx-auto h-9 md:h-10 md:mt-5 mt-1"${ssrRenderAttr("src", _imports_0)} alt=""><div class="absolute top-0 right-1/2 translate-x-1/2 flex items-center gap-3 text-white h-fit"><div class="md:text-2xl text-lg font-alatsi uppercase whitespace-nowrap">${ssrInterpolate(_ctx.$t("add_to"))}</div>`);
        _push(ssrRenderComponent(_component_IconTrash, {
          draggable: "false",
          class: "inline pointer-events-none mt-1 md:w-9 w-6 md:h-9 h-6"
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(count) != 0) {
        _push(`<div class="w-[80%] mx-auto text-center z-50 md:h-17.5 h-13"><div class="w-full font-bold justify-evenly flex gap-2 px-6 py-1 md:py-2 rounded-xl bg-[#F6F6F6]"><div class="cursor-pointer text-2xl text-[#3C4242] px-2 select-none"> - </div><div class="cursor-pointer text-2xl w-7 text-center">${ssrInterpolate(unref(count))}</div><div class="cursor-pointer text-2xl text-[#3C4242] px-2 select-none"> + </div></div></div>`);
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
export {
  _sfc_main as _
};
//# sourceMappingURL=TrashButtonAndCounter-939e9973.js.map
