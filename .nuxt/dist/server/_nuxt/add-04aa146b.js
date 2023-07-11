import { _ as _sfc_main$1 } from "./base-input-0e0e777f.js";
import { _ as _sfc_main$2 } from "./base-img-upload-aee85a01.js";
import { _ as _sfc_main$3 } from "./base-button-598d851d.js";
import { ref, watch, unref, isRef, withCtx, createVNode, useSSRContext } from "vue";
import "hookable";
import { b as useRouter } from "../server.mjs";
import "destr";
import "devalue";
import "klona";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import "axios";
import { u as useUserStore } from "./user-d05e8fdd.js";
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
import "defu";
const _sfc_main = {
  __name: "add",
  __ssrInlineRender: true,
  setup(__props) {
    const userStore = useUserStore();
    useRouter();
    const image = ref(null);
    const category_tm = ref(null);
    const category_img = ref(null);
    useRouter();
    watch(image, () => {
      console.log(image);
    });
    const val_tm = (e) => {
      if (e === "") {
        return "dogry dolduryn";
      }
    };
    const addCategory = async () => {
      try {
        console.log(!category_tm.value);
        if (!category_tm.value || !category_img.value) {
          val_tm(category_tm.value);
          alert("Maglumatlary doly giriziň!");
          throw "Maglumatlary doly giriziň!";
        }
        const form = new FormData();
        form.append("name", category_tm.value);
        form.append("img", category_img.value);
        const { data } = await userStore.addBanner(form);
        if (data.status) {
          alert("Banner Gosuldy");
        }
        useRouter().push("/admin/banners");
      } catch (error) {
        console.log(error);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseInput = _sfc_main$1;
      const _component_BaseImgUpload = _sfc_main$2;
      const _component_BaseButton = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="my-4 font-bold bg-slate-300 p-2">Banner gosun</div><div class="flex gap-4 justify-between w-full"><div class="flex flex-col justify-between">`);
      _push(ssrRenderComponent(_component_BaseInput, {
        validate: val_tm,
        name: "Categoriya Turkmen",
        label: "Categoriya Turkmen",
        placeholder: "Categoriya Turkmen",
        modelValue: unref(category_tm),
        "onUpdate:modelValue": ($event) => isRef(category_tm) ? category_tm.value = $event : null
      }, null, _parent));
      _push(`</div></div><div class="flex justify-between mt-3"><div class="w-[400px]">`);
      _push(ssrRenderComponent(_component_BaseImgUpload, {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/banners/add.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=add-04aa146b.js.map
