import { _ as _sfc_main$1 } from "./base-input-9469f36f.js";
import { _ as _sfc_main$2 } from "./base-img-upload-e6ae3dd4.js";
import { u as useUserStore, _ as _sfc_main$3 } from "./user-aa827d4b.js";
import { ref, withAsyncContext, unref, isRef, withCtx, createVNode, useSSRContext } from "vue";
import "hookable";
import { b as useRouter, a as useRoute } from "../server.mjs";
import "destr";
import "devalue";
import "klona";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import "axios";
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
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a;
    let __temp, __restore;
    const userStore = useUserStore();
    useRouter();
    const route = useRoute();
    ref(null);
    const category_tm = ref(null);
    const category_ru = ref(null);
    const category_en = ref(null);
    const category_img = ref(null);
    const selectedImg = ref(null);
    try {
      console.log(route.params);
      const { data } = ([__temp, __restore] = withAsyncContext(() => userStore.getOneCategories(route.params.id)), __temp = await __temp, __restore(), __temp);
      console.log(data, "dai");
      category_tm.value = data.data.name_tm;
      category_en.value = data.data.name_en;
      category_ru.value = data.data.name_ru;
      selectedImg.value = (_a = data == null ? void 0 : data.data) == null ? void 0 : _a.image;
    } catch (error) {
      console.log(error);
    }
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
        console.log(!category_tm.value);
        if (!category_tm.value || !category_en.value || !category_ru.value) {
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
        form.append("uuid", route.params.id);
        if (category_img.value) {
          form.append("img", category_img.value);
        }
        const { data } = await userStore.editCategories(form);
        if (data.status) {
          alert("Categoriya Gosuldy");
        }
        useRouter().push("/admin/categories");
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
        currentImg: `http://duypbaha.com.tm/api/v1/uploads/categories/${unref(selectedImg)}`,
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/categories/edit/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_id_-eb3325d7.js.map
