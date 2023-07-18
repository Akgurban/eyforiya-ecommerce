import { _ as __nuxt_component_0 } from "./nuxt-link-563b35af.js";
import { useSSRContext, mergeProps, ref, unref, withCtx, createTextVNode, isRef } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import { u as useTrashStore } from "./trash-78aab052.js";
import "ufo";
import "hookable";
import "ofetch";
import "#internal/nitro";
import "unctx";
/* empty css                     */import "vue-router";
import "h3";
import "@vue/devtools-api";
import "destr";
import "devalue";
import "klona";
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
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "12",
    height: "18",
    viewBox: "0 0 12 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M0.668945 16.07L7.74 8.99903L0.668945 1.92793L2.43672 0.160156L11.2756 8.99903L2.43671 17.8378L0.668945 16.07Z" fill="#9C9C9C"></path></svg>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icon/chevron-right.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "base-counter",
  __ssrInlineRender: true,
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const count = ref(1);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full font-bold justify-evenly flex gap-2 px-6 py-1 md:py-2 my-2 rounded-xl bg-[#F6F6F6]" }, _attrs))}><div class="cursor-pointer text-2xl text-[#3C4242] px-2 select-none"> - </div><div class="cursor-pointer text-2xl w-7 text-center">${ssrInterpolate(unref(count))}</div><div class="cursor-pointer text-2xl text-[#3C4242] px-2 select-none"> + </div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/base-counter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _imports_0 = "" + __publicAssetsURL("trash.png");
const _imports_1 = "" + __buildAssetsURL("deletecon.8c55a18e.svg");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const count = ref(0);
    const trash = useTrashStore();
    const setStore = () => {
      trash.setLocalStorage(count.value);
      console.log(trash.trash_items);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_IconChevronRight = __nuxt_component_1;
      const _component_BaseCounter = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "2xl:w-[1424px] xl:w-[900px] w-screen mx-auto" }, _attrs))}><div class="2xl:w-[1424px] xl:w-[900px] w-screen flex gap-3 items-center pl-10">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "cursor-pointer hover:font-bold"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Home`);
          } else {
            return [
              createTextVNode("Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_IconChevronRight, { class: "h-3" }, null, _parent));
      _push(`<p class="cursor-pointer hover:font-bold">Add to cart</p></div><div class="w-full"><div class="bg-[#3C4242] text-white p-[26px] flex justify-between mt-10 px-10 w-full"><div><p class="uppercase">Product Details</p></div><div class="flex justify-between w-full"><p class="uppercase">Price</p><p class="uppercase">Quantity</p><p class="uppercase">shipping</p><p class="uppercase">subtotal</p><p class="uppercase">action</p></div></div><!--[-->`);
      ssrRenderList(3, (item) => {
        _push(`<div class="py-12 p-[26px] flex items-center justify-between px-10"><div><div class="flex md:flex-row flex-col items-center gap-5"><img${ssrRenderAttr("src", _imports_0)} alt=""><div><p class="font-alatsi text-lg">Blue Flower Print Crop Top</p></div></div></div><div class="flex items-center w-full justify-around md:flex-row flex-col"><p class="uppercase">$29.00</p><p class="uppercase w-[100px] md:w-[200px]">`);
        _push(ssrRenderComponent(_component_BaseCounter, {
          onClick: setStore,
          modelValue: unref(count),
          "onUpdate:modelValue": ($event) => isRef(count) ? count.value = $event : null
        }, null, _parent));
        _push(`</p><p class="uppercase"></p><p class="uppercase"></p><p class="block cursor-pointer"><img class="m-1"${ssrRenderAttr("src", _imports_1)} alt=""></p></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/trash/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-cad17728.js.map
