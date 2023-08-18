import { _ as _sfc_main$1 } from "./base-input-997484dd.js";
import { _ as _sfc_main$2 } from "./base-select-520e7f36.js";
import { _ as _sfc_main$3 } from "./base-button-598d851d.js";
import { ref, watch, withAsyncContext, unref, isRef, withCtx, createVNode, useSSRContext } from "vue";
import "hookable";
import { a as useRouter } from "../server.mjs";
import "destr";
import "devalue";
import "klona";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import "axios";
import { u as useUserStore } from "./user-2db9475d.js";
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
import "vue-awesome-paginate";
import "defu";
import "./fetch-ba2ed0c4.js";
import "./adminStore-ee8c4b80.js";
const _sfc_main = {
  __name: "add",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const userStore = useUserStore();
    useRouter();
    const image = ref(null);
    const category_tm = ref(null);
    const category_ru = ref(null);
    const category_en = ref(null);
    const categories = ref(null);
    const selectedCategory = ref(null);
    useRouter();
    watch(image, () => {
    });
    const val_tm = (e) => {
      if (e === "") {
        return "dogry dolduryn";
      }
    };
    const val_ru = (e) => {
      if (e === "") {
        return "dogry dolduryn";
      }
    };
    const val_en = (e) => {
      if (e === "") {
        return "dogry dolduryn";
      }
    };
    const getCategoriesr = async () => {
      try {
        const { data } = await userStore.getCategories();
        categories.value = data.value.data;
      } catch (error) {
        console.log(error);
      }
    };
    [__temp, __restore] = withAsyncContext(() => getCategoriesr()), await __temp, __restore();
    const addSubCategory = async () => {
      try {
        if (!category_tm.value || !category_en.value || !category_ru.value) {
          alert("Maglumatlary doly giriziň!");
          throw "Maglumatlary doly giriziň!";
        }
        const { data } = await userStore.addSubCategories({
          name_tm: category_tm.value,
          name_en: category_en.value,
          name_ru: category_ru.value,
          category_id: selectedCategory.value.uuid
        });
        if (data.status) {
          alert("Sub Categoriya Gosuldy");
        }
        useRouter().push("/admin/sub-categories");
      } catch (error) {
        console.log(error);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseInput = _sfc_main$1;
      const _component_BaseSelect = _sfc_main$2;
      const _component_BaseButton = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="my-4 font-bold bg-slate-300 p-2">Banner gosun</div><div class="flex gap-4 justify-between w-full"><div class="flex flex-col justify-between">`);
      _push(ssrRenderComponent(_component_BaseInput, {
        validate: val_tm,
        name: "Sub Categoriya Turkmen",
        label: "Sub Categoriya Turkmen",
        placeholder: "Sub Categoriya Turkmen",
        modelValue: unref(category_tm),
        "onUpdate:modelValue": ($event) => isRef(category_tm) ? category_tm.value = $event : null
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseInput, {
        validate: val_ru,
        name: "Sub Categoriya Rus",
        label: "Sub Categoriya Rus",
        placeholder: "Sub Categoriya Rus",
        modelValue: unref(category_ru),
        "onUpdate:modelValue": ($event) => isRef(category_ru) ? category_ru.value = $event : null
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseInput, {
        validate: val_en,
        name: "Sub Categoriya English",
        label: "Sub Categoriya English",
        placeholder: "Sub Categoriya English",
        modelValue: unref(category_en),
        "onUpdate:modelValue": ($event) => isRef(category_en) ? category_en.value = $event : null
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_BaseSelect, {
        modelValue: unref(selectedCategory),
        "onUpdate:modelValue": ($event) => isRef(selectedCategory) ? selectedCategory.value = $event : null,
        label: "Select Category",
        options: unref(categories),
        class: "w-100"
      }, null, _parent));
      _push(`</div><div class="flex justify-between mt-3">`);
      _push(ssrRenderComponent(_component_BaseButton, {
        onClick: addSubCategory,
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/sub-categories/add.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=add-0822b5d7.js.map
