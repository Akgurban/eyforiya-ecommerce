import { _ as _sfc_main$1 } from "./base-input-997484dd.js";
import { _ as _sfc_main$2 } from "./base-select-520e7f36.js";
import { _ as _sfc_main$3 } from "./base-textarea-abb10925.js";
import { _ as _sfc_main$4 } from "./base-img-upload-a92bf46a.js";
import { _ as _sfc_main$5 } from "./base-button-598d851d.js";
import { ref, withAsyncContext, unref, isRef, withCtx, createVNode, useSSRContext } from "vue";
import "hookable";
import { a as useRouter, b as useRoute } from "../server.mjs";
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
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const userStore = useUserStore();
    const loaderStore = useLoaderStore();
    const router = useRouter();
    const route = useRoute();
    const image = ref([]);
    const addedImages = ref([]);
    const description_tm = ref(null);
    const description_en = ref(null);
    const description_ru = ref(null);
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
    const getOneProductData = async () => {
      try {
        const { data: sub } = await userStore.getSubCategories();
        const { data: spec } = await userStore.getSpecialCategories();
        const { data: brand } = await userStore.getBrand();
        const { data: product_id } = await userStore.OneProduct(route.params.id);
        sub_categories.value = sub.value.data;
        spec_categories.value = spec.value.data;
        brands.value = brand.value.data;
        loaderStore.endLoading();
        addedImages.value = product_id.value.data.images, name_tm.value = product_id.value.data.name_tm, name_ru.value = product_id.value.data.name_ru, name_en.value = product_id.value.data.name_en, description_tm.value = product_id.value.data.description_tm, description_en.value = product_id.value.data.description_en, description_ru.value = product_id.value.data.description_ru, price.value = +product_id.value.data.price, selectedBrand.value = {
          name: product_id.value.data.brand_name,
          uuid: product_id.value.data.brand_id
        }, selectedSpec.value = {
          name: product_id.value.data.special_categ_name,
          uuid: product_id.value.data.special_categ_id
        };
        selectedSub.value = {
          name: product_id.value.data.sub_category_name,
          uuid: product_id.value.data.sub_category_id
        };
      } catch (error) {
        console.log(error);
      }
    };
    const addPosts = async () => {
      var _a, _b, _c, _d;
      try {
        const { data: onlyProduct, status } = await userStore.editProduct({
          sub_category_id: (_a = selectedSub.value) == null ? void 0 : _a.uuid,
          name_tm: name_tm.value,
          name_ru: name_ru.value,
          name_en: name_en.value,
          description_tm: description_tm.value,
          description_en: description_en.value,
          description_ru: description_ru.value,
          price: +price.value,
          brand_id: ((_b = selectedBrand.value) == null ? void 0 : _b.uuid) || null,
          special_category_id: ((_c = selectedSpec.value) == null ? void 0 : _c.uuid) || null,
          uuid: route.params.id
        });
        if (onlyProduct.value.status) {
          (_d = image.value) == null ? void 0 : _d.forEach(async (e, index) => {
            const form = new FormData();
            form.append("product_id", onlyProduct.value.data);
            form.append("img", image.value[index]);
            const { data, status: status2 } = await userStore.addProductImage(form);
            if (status2) {
            }
          });
          router.push("/admin/products");
        }
      } catch (error) {
        console.log(error);
      }
    };
    [__temp, __restore] = withAsyncContext(() => getOneProductData()), await __temp, __restore();
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
      _push(`</div><div class="flex flex-col justify-between gap-3 w-[400px]"><div class="flex w-full items-end justify-between"><button class="bg-red-600 rounded-md text-white h-13 w-13"> X </button>`);
      _push(ssrRenderComponent(_component_BaseSelect, {
        class: "w-[300px]",
        modelValue: unref(selectedSpec),
        "onUpdate:modelValue": ($event) => isRef(selectedSpec) ? selectedSpec.value = $event : null,
        label: "Yorite kategoriya saylan",
        options: unref(spec_categories)
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_BaseSelect, {
        modelValue: unref(selectedSub),
        "onUpdate:modelValue": ($event) => isRef(selectedSub) ? selectedSub.value = $event : null,
        label: "kici kategoriya saylan",
        options: unref(sub_categories)
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseSelect, {
        modelValue: unref(selectedBrand),
        "onUpdate:modelValue": ($event) => isRef(selectedBrand) ? selectedBrand.value = $event : null,
        label: "brend saylan",
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
        name: "Englishe Dusundiris",
        label: "Englishe Dusundiris",
        placeholder: "Englishe Dusundiris ",
        modelValue: unref(description_en),
        "onUpdate:modelValue": ($event) => isRef(description_en) ? description_en.value = $event : null,
        class: "mt-4"
      }, null, _parent));
      _push(`</div><div class="flex gap-3 my-5"><!--[-->`);
      ssrRenderList(5, (item, index) => {
        var _a, _b, _c;
        _push(`<div class="flex flex-col w-[200px] gap-2 relative">`);
        if (unref(image).length >= index || unref(addedImages).length >= index) {
          _push(ssrRenderComponent(_component_BaseImgUpload, {
            class: "w-[200px]",
            currentImg: ((_a = unref(addedImages)[index]) == null ? void 0 : _a.img_path) ? `http://duypbaha.com.tm/api/v1/uploads/images/${unref(addedImages)[index].img_path}` : null,
            isChangable: ((_b = unref(addedImages)[index]) == null ? void 0 : _b.img_path) ? false : true,
            modelValue: unref(image)[index],
            "onUpdate:modelValue": ($event) => unref(image)[index] = $event
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if ((_c = unref(addedImages)[index]) == null ? void 0 : _c.img_path) {
          _push(`<div class="text-white cursor-pointer hover:bg-red-500 px-2 w-full bg-red-600 mt-auto absolute -bottom-5"> Delete </div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/products/edit/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_id_-2d566bf3.js.map
