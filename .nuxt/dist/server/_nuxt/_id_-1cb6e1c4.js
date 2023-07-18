import { u as useMyFetch, _ as _sfc_main$1 } from "./useMyFetch-b388ac84.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-563b35af.js";
import { _ as _export_sfc, f as useI18n, b as useRouter, a as useRoute } from "../server.mjs";
import { ref, withAsyncContext, unref, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import "hookable";
import "destr";
import "devalue";
import "klona";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import "./trash-d8d1b74e.js";
import "ohash";
import "./authStore-a41c077e.js";
import "ufo";
import "ofetch";
import "#internal/nitro";
import "unctx";
/* empty css                     */import "vue-router";
import "h3";
import "@vue/devtools-api";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "@intlify/core-base";
import "@intlify/vue-devtools";
import "cookie-es";
import "js-cookie";
import "is-https";
import "pinia-plugin-persistedstate";
import "axios";
import "defu";
const _id__vue_vue_type_style_index_0_scoped_242442c4_lang = "";
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { locale } = useI18n();
    const oneProduct = ref(null);
    const similarProducts = ref(null);
    useRouter();
    const route = useRoute();
    const { data, status } = ([__temp, __restore] = withAsyncContext(() => useMyFetch(
      `/api/v1/client/products/product/${route.params.id}?lang=${locale.value}`
    )), __temp = await __temp, __restore(), __temp);
    if (status) {
      console.log(data.value.data, "ssd");
      oneProduct.value = data.value.data.one_products;
      similarProducts.value = data.value.data.products;
    }
    console.log(route.query.s);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TrashButtonAndCounter = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-242442c4><div class="aspect-[video] w-screen 2xl:w-[1428px] mx-auto flex justify-between items-start px-4 sm:flex-row flex-col" data-v-242442c4><div class="sm:w-[35%] w-full" data-v-242442c4><img${ssrRenderAttr("src", `http://duypbaha.com.tm/api/v1/uploads/images/${unref(oneProduct).images[0].img_path}`)} class="w-full rounded-md aspect-square" alt="" data-v-242442c4><div class="w-full mt-5 flex justify-between" data-v-242442c4><!--[-->`);
      ssrRenderList(unref(oneProduct).images, (item) => {
        _push(`<img${ssrRenderAttr("src", `http://duypbaha.com.tm/api/v1/uploads/images/${item.img_path}`)} class="w-[19%] rounded-md aspect-square" alt="" data-v-242442c4>`);
      });
      _push(`<!--]--></div></div><div class="w-[60%] sm:ml-6 ml-0 mt-6" data-v-242442c4><div data-v-242442c4><div class="one_prod w-fit cursor-pointer transition-all duration-100 hover:text-[#44A4DB] md:text-5xl text-2xl mb-1 font-semibold font-inter" data-v-242442c4>${ssrInterpolate(unref(oneProduct).name)}</div><div class="sm:pt-1.5 pt-0 pb-1.5 md:text-xl text-lg sm:font-normal font-medium" data-v-242442c4> Çaga egin-eşikleri üçin ýumşadyjy konsentrat Bingo &quot;Oğluşum&quot; 1440 ml </div><div class="flex items-center flex-wrap sm:px-4 px-1 py-2 border-t border-b border-gray-200" data-v-242442c4><div class="text-white cursor-pointer rounded-md text-2xl px-4 py-3 bg-[#44A4DB]" data-v-242442c4>${ssrInterpolate(unref(oneProduct).price)} TMT </div></div><div class="w-fit ml-5" data-v-242442c4>`);
      _push(ssrRenderComponent(_component_TrashButtonAndCounter, {
        modelValue: _ctx.count_product,
        "onUpdate:modelValue": ($event) => _ctx.count_product = $event
      }, null, _parent));
      _push(`</div></div></div></div><div class="mt-8 px-10 cursor-pointer transition-all duration-100 md:text-4xl text-2xl mb-1 font-semibold font-inter" data-v-242442c4> Similar Products </div><div style="${ssrRenderStyle({ "width": "97% !important", "height": "auto !important", "user-select": "none !important", "padding-bottom": "20px !important" })}" class="flex flex-wrap gap-3 px-10" data-v-242442c4><!--[-->`);
      ssrRenderList(unref(similarProducts), (item, index) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: item,
          to: _ctx.localePath(`/product/${item.uuid}`),
          draggable: "true",
          class: "group md:w-auto w-[176px] product_item mb-3 hover:shadow-none md:hover:shadow-hero bg-[#D9D9D940] hover:bg-[#D9D9D940] transition-all ease-in-out duration-200 rounded-xl flex flex-col justify-between items-center"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="rounded-xl text-center mt-6" data-v-242442c4${_scopeId}><img class="border select-none border-[#e6e6e6] w-[90%] md:w-[245px] mx-3 aspect-square"${ssrRenderAttr("src", `http://duypbaha.com.tm/api/v1/uploads/images/${item.images}`)} alt="" loading="lazy" data-v-242442c4${_scopeId}><div class="w-fit mx-auto md:text-3xl text-base font-alatsi text-[#3C4242] mt-3 mb-1" data-v-242442c4${_scopeId}>${ssrInterpolate(item.name)}</div><div class="mx-auto text-[#48BC4E] text-3xl font-alatsi w-fit pb-1 border-b border-[#44A4DB]" data-v-242442c4${_scopeId}>${ssrInterpolate(item.price)} TMT </div></div>`);
              _push2(ssrRenderComponent(_component_TrashButtonAndCounter, null, null, _parent2, _scopeId));
            } else {
              return [
                createVNode("div", { class: "rounded-xl text-center mt-6" }, [
                  createVNode("img", {
                    class: "border select-none border-[#e6e6e6] w-[90%] md:w-[245px] mx-3 aspect-square",
                    src: `http://duypbaha.com.tm/api/v1/uploads/images/${item.images}`,
                    alt: "",
                    loading: "lazy"
                  }, null, 8, ["src"]),
                  createVNode("div", { class: "w-fit mx-auto md:text-3xl text-base font-alatsi text-[#3C4242] mt-3 mb-1" }, toDisplayString(item.name), 1),
                  createVNode("div", { class: "mx-auto text-[#48BC4E] text-3xl font-alatsi w-fit pb-1 border-b border-[#44A4DB]" }, toDisplayString(item.price) + " TMT ", 1)
                ]),
                createVNode(_component_TrashButtonAndCounter)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/product/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-242442c4"]]);
export {
  _id_ as default
};
//# sourceMappingURL=_id_-1cb6e1c4.js.map
