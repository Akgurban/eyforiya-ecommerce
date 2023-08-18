import { useSSRContext, ref, unref } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { v4 } from "uuid";
const baseTextarea_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __name: "base-textarea",
  __ssrInlineRender: true,
  props: {
    name: { type: String, required: false },
    type: { type: String, default: "text" },
    label: { type: String, required: true },
    value: { type: [String, Number], default: "" },
    modelValue: { type: [String, Number], default: "" },
    placeholder: { type: String, default: "" },
    validate: { type: Function }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const error = ref("");
    const id = v4();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><label${ssrRenderAttr("for", unref(id))}>${ssrInterpolate(__props.label)}</label><textarea${ssrRenderAttr("id", unref(id))}${ssrRenderAttr("name", __props.name)}${ssrRenderAttr("placeholder", __props.placeholder)} class="bg-white w-full sm:px-6 border border-black px-4 py-4 h-50 focus:outline-none mt-1 placeholder:text-[#B7B7B7]">${ssrInterpolate(__props.modelValue)}</textarea>`);
      if (error.value) {
        _push(`<div class="error">${ssrInterpolate(error.value)}</div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/base-textarea.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=base-textarea-abb10925.js.map
