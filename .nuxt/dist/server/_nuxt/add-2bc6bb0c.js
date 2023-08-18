import { _ as _sfc_main$1 } from "./base-input-997484dd.js";
import { _ as _sfc_main$2 } from "./base-select-520e7f36.js";
import { _ as _sfc_main$3 } from "./base-textarea-abb10925.js";
import { _ as _sfc_main$4 } from "./base-img-upload-a92bf46a.js";
import { _ as _sfc_main$5 } from "./base-button-598d851d.js";
import { ref, withAsyncContext, unref, isRef, withCtx, createVNode, useSSRContext } from "vue";
import "hookable";
import { d as useToast, a as useRouter } from "../server.mjs";
import "destr";
import "devalue";
import "klona";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { u as useUserStore } from "./user-2db9475d.js";
import { u as useLoaderStore } from "./loader-4a144fcb.js";
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
import "./fetch-ba2ed0c4.js";
import "./adminStore-ee8c4b80.js";
const _sfc_main = {
  __name: "add",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const $toast = useToast();
    const userStore = useUserStore();
    useLoaderStore();
    const image = ref([]);
    const description_tm = ref(null);
    const description_en = ref(null);
    const description_ru = ref(null);
    const router = useRouter();
    const name_tm = ref(null);
    const name_en = ref(null);
    const name_ru = ref(null);
    const sub_categories = ref(null);
    const spec_categories = ref(null);
    const brands = ref(null);
    const price = ref(null);
    const selectedSpec = ref(null);
    const selectedSub = ref(null);
    const selectedBrand = ref(null);
    try {
      const { data: sub } = ([__temp, __restore] = withAsyncContext(() => userStore.getSubCategories()), __temp = await __temp, __restore(), __temp);
      const { data: spec } = ([__temp, __restore] = withAsyncContext(() => userStore.getSpecialCategories()), __temp = await __temp, __restore(), __temp);
      const { data: brand } = ([__temp, __restore] = withAsyncContext(() => userStore.getBrand()), __temp = await __temp, __restore(), __temp);
      sub_categories.value = sub.value.data;
      spec_categories.value = spec.value.data;
      brands.value = brand.value.data;
    } catch (error) {
      console.log(error);
    }
    const addPosts = async () => {
      var _a, _b, _c, _d, _e;
      try {
        if (!((_a = selectedSub.value) == null ? void 0 : _a.uuid)) {
          $toast.error("sub kategoriya saylan");
        } else {
          const { data: onlyProduct } = await userStore.addProduct({
            sub_category_id: (_b = selectedSub.value) == null ? void 0 : _b.uuid,
            name_tm: name_tm.value,
            name_ru: name_ru.value,
            name_en: name_en.value,
            description_tm: description_tm.value,
            description_en: description_en.value,
            description_ru: description_ru.value,
            price: +price.value,
            brand_id: ((_c = selectedBrand.value) == null ? void 0 : _c.uuid) || null,
            special_category_id: ((_d = selectedSpec.value) == null ? void 0 : _d.uuid) || null
          });
          if (onlyProduct.value.status) {
            (_e = image.value) == null ? void 0 : _e.forEach(async (e, index) => {
              const form = new FormData();
              form.append("product_id", onlyProduct.value.data);
              form.append("img", image.value[index]);
              const { data, status } = await userStore.addProductImage(form);
              if (status) {
              }
            });
            router.push("/admin/products");
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseInput = _sfc_main$1;
      const _component_BaseSelect = _sfc_main$2;
      const _component_BaseTextarea = _sfc_main$3;
      const _component_BaseImgUpload = _sfc_main$4;
      const _component_BaseButton = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(_attrs)}><div><div class="my-4 font-bold bg-slate-300 p-2">Habar gosun</div><div class="flex gap-4 justify-between w-full"><div class="w-[400px] flex flex-col gap-3">`);
      _push(ssrRenderComponent(_component_BaseInput, {
        name: "Turkmenca ady",
        label: "Turkmenca ady",
        placeholder: "Turkmenca ady",
        modelValue: unref(name_tm),
        "onUpdate:modelValue": ($event) => isRef(name_tm) ? name_tm.value = $event : null
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseInput, {
        name: "Rusca ady",
        label: "Rusca ady",
        placeholder: "Rusca ady",
        modelValue: unref(name_ru),
        "onUpdate:modelValue": ($event) => isRef(name_ru) ? name_ru.value = $event : null
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseInput, {
        name: "inlisce ady",
        label: "inlisce ady",
        placeholder: "inlisce ady",
        modelValue: unref(name_en),
        "onUpdate:modelValue": ($event) => isRef(name_en) ? name_en.value = $event : null
      }, null, _parent));
      _push(`</div><div class="flex flex-col justify-between gap-3 w-[400px]">`);
      _push(ssrRenderComponent(_component_BaseSelect, {
        modelValue: unref(selectedSpec),
        "onUpdate:modelValue": ($event) => isRef(selectedSpec) ? selectedSpec.value = $event : null,
        label: "Yorite categoriya saylan",
        options: unref(spec_categories)
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseSelect, {
        modelValue: unref(selectedSub),
        "onUpdate:modelValue": ($event) => isRef(selectedSub) ? selectedSub.value = $event : null,
        label: "Kici kategoriya saylan",
        options: unref(sub_categories)
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseSelect, {
        modelValue: unref(selectedBrand),
        "onUpdate:modelValue": ($event) => isRef(selectedBrand) ? selectedBrand.value = $event : null,
        label: "Brand Saylan",
        options: unref(brands)
      }, null, _parent));
      _push(`</div></div><div class="flex gap-3">`);
      _push(ssrRenderComponent(_component_BaseTextarea, {
        name: "Turkmence Dusundiris",
        label: "Turkmence Dusundiris",
        placeholder: "Turkmence Dusundiris ",
        modelValue: unref(description_tm),
        "onUpdate:modelValue": ($event) => isRef(description_tm) ? description_tm.value = $event : null,
        class: "mt-4"
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseTextarea, {
        name: "Rusca Dusundiris",
        label: "Rusca Dusundiris",
        placeholder: "Rusca Dusundiris ",
        modelValue: unref(description_ru),
        "onUpdate:modelValue": ($event) => isRef(description_ru) ? description_ru.value = $event : null,
        class: "mt-4"
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseTextarea, {
        name: "English Dusundiris",
        label: "English Dusundiris",
        placeholder: "English Dusundiris ",
        modelValue: unref(description_en),
        "onUpdate:modelValue": ($event) => isRef(description_en) ? description_en.value = $event : null,
        class: "mt-4"
      }, null, _parent));
      _push(`</div><div class="flex gap-3 my-5"><!--[-->`);
      ssrRenderList(5, (item, index) => {
        _push(`<div class="flex flex-col w-[200px] gap-2">`);
        if (unref(image).length >= index) {
          _push(ssrRenderComponent(_component_BaseImgUpload, {
            class: "w-[200px]",
            modelValue: unref(image)[index],
            "onUpdate:modelValue": ($event) => unref(image)[index] = $event
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div><div class="flex justify-between mb-30">`);
      _push(ssrRenderComponent(_component_BaseInput, {
        name: "baha",
        type: "number",
        placeholder: "Harydyn bahasy Manatda",
        modelValue: unref(price),
        "onUpdate:modelValue": ($event) => isRef(price) ? price.value = $event : null
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseButton, {
        onClick: addPosts,
        class: "",
        type: "secondary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button${_scopeId}>Harydy Gosh</button>`);
          } else {
            return [
              createVNode("button", null, "Harydy Gosh")
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
//# sourceMappingURL=add-2bc6bb0c.js.map
