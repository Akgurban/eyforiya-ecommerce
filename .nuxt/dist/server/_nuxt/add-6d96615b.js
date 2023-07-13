import { _ as _sfc_main$1 } from "./base-input-972c895c.js";
import { _ as _sfc_main$2 } from "./base-select-520e7f36.js";
import { _ as _sfc_main$3 } from "./base-textarea-3c2d0902.js";
import { _ as _sfc_main$4 } from "./base-img-upload-e6ae3dd4.js";
import { u as useUserStore, _ as _sfc_main$5 } from "./user-aa827d4b.js";
import { ref, withAsyncContext, watch, unref, isRef, withCtx, createVNode, useSSRContext } from "vue";
import "hookable";
import { b as useRouter } from "../server.mjs";
import "destr";
import "devalue";
import "klona";
import { ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { u as useLoaderStore } from "./loader-afdfbba2.js";
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
import "axios";
import "defu";
const _sfc_main = {
  __name: "add",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const userStore = useUserStore();
    const loaderStore = useLoaderStore();
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
      console.log(sub, spec, "sub Categories");
      sub_categories.value = sub.data;
      spec_categories.value = spec.data;
      brands.value = brand.data;
    } catch (error) {
      console.log(error);
    }
    console.log(loaderStore, "loaderStore");
    const addPosts = async () => {
      var _a, _b, _c;
      try {
        loaderStore.startLoading();
        const { data: onlyProduct } = await userStore.addProduct({
          sub_category_id: ((_a = selectedSub.value) == null ? void 0 : _a.uuid) || null,
          name_tm: name_tm.value,
          name_ru: name_ru.value,
          name_en: name_en.value,
          description_tm: description_tm.value,
          description_en: description_en.value,
          description_ru: description_ru.value,
          price: +price.value,
          brand_id: ((_b = selectedBrand.value) == null ? void 0 : _b.uuid) || null,
          special_category_id: ((_c = selectedSpec.value) == null ? void 0 : _c.uuid) || null
        });
        if (onlyProduct.status) {
          const form = new FormData();
          form.append("product_id", onlyProduct.data);
          image.value.forEach(async (e, index) => {
            form.append("img", image.value[index]);
            const { data } = await userStore.addProductImage(form);
            console.log(data, "image");
            if (data.status) {
              console.log(data);
            }
          });
          loaderStore.endLoading();
          router.push("/admin/products");
        }
      } catch (error) {
        console.log(error);
      }
    };
    watch(image.value, () => {
      console.log(image.value, image.value.length, "images wath");
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseInput = _sfc_main$1;
      const _component_BaseSelect = _sfc_main$2;
      const _component_BaseTextarea = _sfc_main$3;
      const _component_BaseImgUpload = _sfc_main$4;
      const _component_BaseButton = _sfc_main$5;
      _push(`<!--[--><div><div class="my-4 font-bold bg-slate-300 p-2">Habar gosun</div><div class="flex gap-4 justify-between w-full"><div class="w-[400px] flex flex-col gap-3">`);
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
        label: "Select Special category",
        options: unref(spec_categories)
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseSelect, {
        modelValue: unref(selectedSub),
        "onUpdate:modelValue": ($event) => isRef(selectedSub) ? selectedSub.value = $event : null,
        label: "Select Sub Category",
        options: unref(sub_categories)
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseSelect, {
        modelValue: unref(selectedBrand),
        "onUpdate:modelValue": ($event) => isRef(selectedBrand) ? selectedBrand.value = $event : null,
        label: "Select Brand",
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
      _push(`</div><!--]-->`);
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
//# sourceMappingURL=add-6d96615b.js.map
