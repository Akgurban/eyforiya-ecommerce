import { _ as __nuxt_component_0 } from "./plus-92a16e2a.js";
import { useSSRContext, ref, watch, unref, mergeProps, isRef, withCtx, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./base-button-598d851d.js";
import "hookable";
import { d as useToast, a as useRouter } from "../server.mjs";
import "destr";
import "devalue";
import "klona";
import "axios";
import { u as useUserStore } from "./user-f924bdcb.js";
import { u as useLoaderStore } from "./loader-95eafdf5.js";
import "./_plugin-vue_export-helper-cc2b3d55.js";
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
import "vue-awesome-paginate";
import "defu";
import "./useAdminFetch-44f703d5.js";
import "./fetch-ba2ed0c4.js";
import "./adminStore-92ba1257.js";
const _sfc_main$1 = {
  __name: "base-video-upload",
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
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(fileChoosen)) {
        _push(`<video class="w-full aspect-video object-cover z-[1]" controls autoplay loop muted><source alt=""></video>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["group cursor-pointer border-dashed border-2 flex justify-center items-center bg-white hover:bg-white/50 text-[#ddd] w-full relative", __props.banner ? "h-[25rem]" : "pt-[56.25%]"]
      }, _ctx.$attrs))}><span class="w-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">`);
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
      _push(`<input accept="video/*" type="file" class="hidden"></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/base-video-upload.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "add",
  __ssrInlineRender: true,
  setup(__props) {
    const loaderStore = useLoaderStore();
    const userStore = useUserStore();
    const image = ref(null);
    ref(null);
    ref(null);
    ref(null);
    const category_img = ref(null);
    const $toast = useToast();
    ref(null);
    useRouter();
    watch(image, () => {
    });
    const addCategory = async () => {
      try {
        if (!category_img.value) {
          $toast.error("Maglumatlary doly giriziň!");
          throw "Maglumatlary doly giriziň!";
        }
        const form = new FormData();
        form.append("video", category_img.value);
        loaderStore.startLoading();
        const { data, pending } = await userStore.addVideos(form);
        if (!pending.value) {
          loaderStore.endLoading();
        }
        useRouter().push("/admin/videos");
      } catch (error) {
        console.log(error);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseVideoUpload = _sfc_main$1;
      const _component_BaseButton = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="my-4 font-bold bg-slate-300 p-2">Banner gosun</div><div class="flex justify-between mt-3 items-end"><div class="w-[400px]">`);
      _push(ssrRenderComponent(_component_BaseVideoUpload, {
        modelValue: unref(category_img),
        "onUpdate:modelValue": ($event) => isRef(category_img) ? category_img.value = $event : null
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_BaseButton, {
        onClick: addCategory,
        class: "",
        type: "secondary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button${_scopeId}>Add Category</button>`);
          } else {
            return [
              createVNode("button", null, "Add Category")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/videos/add.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=add-aea542fe.js.map
