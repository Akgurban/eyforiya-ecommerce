import { _ as _sfc_main$1 } from "./base-input-997484dd.js";
import { _ as _sfc_main$2 } from "./base-img-upload-a92bf46a.js";
import { _ as _sfc_main$3 } from "./base-button-598d851d.js";
import { ref, watch, unref, isRef, withCtx, createVNode, useSSRContext } from "vue";
import "hookable";
import { a as useRouter } from "../server.mjs";
import "destr";
import "devalue";
import "klona";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { u as useUserStore } from "./user-f924bdcb.js";
import "uuid";
import "./plus-92a16e2a.js";
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
import "axios";
import "vue-awesome-paginate";
import "defu";
import "./useAdminFetch-44f703d5.js";
import "./fetch-ba2ed0c4.js";
import "./adminStore-92ba1257.js";
const _sfc_main = {
  __name: "add",
  __ssrInlineRender: true,
  setup(__props) {
    const userStore = useUserStore();
    useRouter();
    const image = ref(null);
    const category_tm = ref(null);
    const category_ru = ref(null);
    const category_en = ref(null);
    const category_img = ref(null);
    ref(null);
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
    const addCategory = async () => {
      try {
        if (!category_tm.value || !category_en.value || !category_ru.value || !category_img.value) {
          val_tm(category_tm.value);
          val_en(category_en.value);
          val_ru(category_ru.value);
          alert("Maglumatlary doly giriziň!");
          throw "Maglumatlary doly giriziň!";
        }
        const form = new FormData();
        form.append("name_tm", category_tm.value);
        form.append("name_ru", category_ru.value);
        form.append("name_en", category_en.value);
        form.append("img", category_img.value);
        const { data } = await userStore.addSpecialCategories(form);
        if (data.status) {
          alert("Categoriya Gosuldy");
        }
        useRouter().push("/admin/special-categories");
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
      _push(ssrRenderComponent(_component_BaseInput, {
        validate: val_ru,
        name: "Categoriya Rus",
        label: "Categoriya Rus",
        placeholder: "Categoriya Rus",
        modelValue: unref(category_ru),
        "onUpdate:modelValue": ($event) => isRef(category_ru) ? category_ru.value = $event : null
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseInput, {
        validate: val_en,
        name: "Categoriya English",
        label: "Categoriya English",
        placeholder: "Categoriya English",
        modelValue: unref(category_en),
        "onUpdate:modelValue": ($event) => isRef(category_en) ? category_en.value = $event : null
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/special-categories/add.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=add-53079b61.js.map
