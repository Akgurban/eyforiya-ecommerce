import { useSSRContext, ref, watch, mergeProps, unref } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderClass } from "vue/server-renderer";
import { v4 } from "uuid";
const baseInput_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __name: "base-input",
  __ssrInlineRender: true,
  props: {
    name: { type: String, required: true },
    checked: { type: Boolean, default: false },
    type: { type: String, default: "text" },
    label: { type: String, required: true },
    modelValue: { type: [String, Number], default: 0 },
    heightFull: { type: Boolean, default: false },
    placeholder: { type: String, default: "" },
    validate: { type: Function }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const props = __props;
    const error = ref("");
    const valueInput = ref(null);
    const id = v4();
    watch(valueInput, () => {
      emit("update:modelValue", valueInput.value);
      if (props.validate) {
        error.value = props.validate(valueInput.value);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full" }, _attrs))}><label${ssrRenderAttr("for", unref(id))}>${ssrInterpolate(__props.label)}</label><input${ssrRenderAttr("id", unref(id))}${ssrRenderAttr("name", __props.name)}${ssrRenderAttr("type", __props.type)}${ssrRenderAttr("placeholder", __props.placeholder)}${ssrRenderAttr("value", __props.modelValue)}${ssrIncludeBooleanAttr(__props.checked) ? " checked" : ""} class="${ssrRenderClass([__props.heightFull ? "h-full" : "h-[50px]", "bg-white w-full sm:px-6 px-4 border border-black focus:outline-none placeholder:text-[#7f7777]"])}">`);
      if (unref(error)) {
        _push(`<div class="error">${ssrInterpolate(unref(error))}</div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/base-input.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=base-input-9469f36f.js.map
