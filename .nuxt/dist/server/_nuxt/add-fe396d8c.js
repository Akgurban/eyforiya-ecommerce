import { _ as _sfc_main$2 } from "./base-img-upload-aee85a01.js";
import { _ as _sfc_main$3 } from "./base-input-0e0e777f.js";
import { _ as _sfc_main$4 } from "./base-select-520e7f36.js";
import { useSSRContext, ref, unref, withAsyncContext, watch, isRef, withCtx, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { v4 } from "uuid";
import { _ as _sfc_main$5 } from "./base-button-598d851d.js";
import "hookable";
import { b as useRouter } from "../server.mjs";
import "destr";
import "devalue";
import "klona";
import { u as useUserStore } from "./user-d05e8fdd.js";
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
import "axios";
import "defu";
const baseTextarea_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = {
  __name: "base-textarea",
  __ssrInlineRender: true,
  props: {
    name: { type: String, required: true },
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/base-textarea.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "add",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const image = ref(null);
    const selectedCategory = ref(null);
    const selectedPost = ref("");
    const description = ref(null);
    useRouter();
    const userStore = useUserStore();
    const title = ref(null);
    const categories = ref(null);
    try {
      const { data } = ([__temp, __restore] = withAsyncContext(() => userStore.getCategories()), __temp = await __temp, __restore(), __temp);
      console.log(data, "data");
      categories.value = data.data;
    } catch (error) {
      console.log(error);
    }
    const addPosts = async () => {
      try {
        const form = new FormData();
        form.append("file", image.value);
        form.append("description", description.value);
        form.append("title", title.value);
        form.append("uuid", selectedPost.value);
        form.append("category_id", selectedCategory.value.uuid);
        const { data } = await userStore.addPosts(form);
        console.log(data, "data");
        categories.value = data.data;
        if (data.status) {
          alert("habar Ustunlikli goshuldy");
          useRouter().push("/admin/posts");
        }
      } catch (error) {
        console.log(error);
      }
    };
    watch(image, () => {
      console.log(image);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseImgUpload = _sfc_main$2;
      const _component_BaseInput = _sfc_main$3;
      const _component_BaseSelect = _sfc_main$4;
      const _component_BaseTextarea = _sfc_main$1;
      const _component_BaseButton = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="my-4 font-bold bg-slate-300 p-2">Habar gosun</div><div class="flex gap-4 justify-between w-full"><div class="w-[400px]">`);
      _push(ssrRenderComponent(_component_BaseImgUpload, {
        modelValue: unref(image),
        "onUpdate:modelValue": ($event) => isRef(image) ? image.value = $event : null
      }, null, _parent));
      _push(`</div><div class="flex flex-col justify-between">`);
      _push(ssrRenderComponent(_component_BaseInput, {
        name: "Title Link",
        label: "title ady",
        placeholder: "titte gosh",
        modelValue: unref(title),
        "onUpdate:modelValue": ($event) => isRef(title) ? title.value = $event : null
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseSelect, {
        modelValue: unref(selectedCategory),
        "onUpdate:modelValue": ($event) => isRef(selectedCategory) ? selectedCategory.value = $event : null,
        label: "Select Category",
        options: unref(categories)
      }, null, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_BaseTextarea, {
        name: "description",
        label: "Habaryn mazmuny",
        placeholder: "Habaryn mazmuny ýazyň ",
        modelValue: unref(description),
        "onUpdate:modelValue": ($event) => isRef(description) ? description.value = $event : null,
        class: "mt-4"
      }, null, _parent));
      _push(`<div class="flex justify-end">`);
      _push(ssrRenderComponent(_component_BaseButton, {
        onClick: addPosts,
        class: "",
        type: "secondary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button${_scopeId}>Habar gosh</button>`);
          } else {
            return [
              createVNode("button", null, "Habar gosh")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/products/add.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=add-fe396d8c.js.map
