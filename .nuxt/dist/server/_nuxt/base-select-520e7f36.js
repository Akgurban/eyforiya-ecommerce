import { useSSRContext, ref, mergeProps, unref } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderClass, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
const _imports_0 = "" + __buildAssetsURL("chevron.db363097.svg");
const _sfc_main = {
  __name: "base-select",
  __ssrInlineRender: true,
  props: {
    options: {
      type: Array,
      required: true
    },
    label: {
      type: String,
      default: ""
    },
    modelValue: {
      type: Object,
      required: true
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const showDropdown = ref(false);
    ref();
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><div class="text-black">${ssrInterpolate(__props.label)}</div><div class="bg-white border border-black w-full h-[50px] flex items-center justify-between sm:px-6 px-4 mt-1 text-sm shadow-sm cursor-pointer"><p class="font-bold">${ssrInterpolate((_a = __props.modelValue) == null ? void 0 : _a.name)}</p><span class="${ssrRenderClass([unref(showDropdown) ? "rotate-90" : "-rotate-90", "transition-all duration-150 -rotate-90"])}"><img${ssrRenderAttr("src", _imports_0)} alt=""></span></div><div>`);
      if (unref(showDropdown)) {
        _push(`<div class="absolute right-0 bg-white border-t-2 h-auto duration-250 ease-in-out z-10 shadow-lg w-full"><!--[-->`);
        ssrRenderList(__props.options, (option, index) => {
          _push(`<ul><li class="py-2 px-7 hover:bg-gray-100 cursor-pointer">${ssrInterpolate(option.name)}</li></ul>`);
        });
        _push(`<!--]--></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/base-select.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=base-select-520e7f36.js.map
