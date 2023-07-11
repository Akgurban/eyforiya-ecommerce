import { useSSRContext, mergeProps } from "vue";
import { ssrRenderAttrs, ssrRenderSlot } from "vue/server-renderer";
const baseButton_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __name: "base-button",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      default: "primary"
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        class: ["sm:px-6 px-4 sm:py-2 py-1 transition-all duration-150", {
          "bg-secondary rounded-[0.1857rem] hover:bg-[#f5db17]": props.type === "secondary",
          "bg-primary text-white": props.type === "primary",
          "bg-danger text-white": props.type === "danger",
          "bg-[#f4f4f4] text-c-black hover:bg-[#c0bebe] hover:text-white": props.type === "gray"
        }]
      }, _ctx.$attrs, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</button>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/base-button.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=base-button-598d851d.js.map
