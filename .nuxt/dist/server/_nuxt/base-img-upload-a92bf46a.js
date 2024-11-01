import { _ as __nuxt_component_0 } from "./plus-92a16e2a.js";
import { useSSRContext, ref, watch, mergeProps, unref } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
const _sfc_main = {
  __name: "base-img-upload",
  __ssrInlineRender: true,
  props: {
    banner: {
      type: Boolean,
      default: false
    },
    currentImg: {
      type: String,
      default: ""
    },
    isChangable: {
      type: Boolean,
      default: true
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const props = __props;
    ref(null);
    const img = ref(null);
    const fileChoosen = ref(false);
    watch(
      () => props.currentImg,
      (val) => {
        if (!val) {
          img.value.src = "";
        }
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconPlus = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["group cursor-pointer border-dashed border-2 flex justify-center items-center bg-white hover:bg-white/50 text-[#ddd] w-full relative", __props.banner ? "h-[25rem]" : "pt-[56.25%]"]
      }, _ctx.$attrs, _attrs))}><span class="w-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">`);
      _push(ssrRenderComponent(_component_IconPlus, null, null, _parent));
      _push(`</span>`);
      if (unref(fileChoosen)) {
        _push(`<div class="group-hover:block hidden overlay absolute top-0 left-0 bg-black/30 w-full h-full z-[2]"><span class="w-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">`);
        _push(ssrRenderComponent(_component_IconPlus, null, null, _parent));
        _push(`</span>`);
        if (__props.banner) {
          _push(`<p class="absolute top-[70%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-white text-lg"> Täze surat goýmak üçin basyň </p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<img class="absolute top-0 left-0 w-full h-full object-cover z-[1]" alt=""><input accept="image/gif, image/jpeg, image/jpg, image/png" type="file" class="hidden"></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/base-img-upload.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=base-img-upload-a92bf46a.js.map
