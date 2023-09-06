import { _ as __nuxt_component_0 } from "./nuxt-link-744fccd2.js";
import { _ as __nuxt_component_1 } from "./chevron-right-0f6a5ea3.js";
import { _ as __nuxt_component_2 } from "./TrashButtonAndCounter-e878a627.js";
import { _ as _sfc_main$1 } from "./base-button-598d851d.js";
import { ref, watch, withAsyncContext, mergeProps, withCtx, createTextVNode, toDisplayString, unref, useSSRContext } from "vue";
import { h as useI18n, d as useToast, a as useRouter } from "../server.mjs";
import { u as useMyFetch } from "./useMyFetch-4be3eef7.js";
import "hookable";
import "destr";
import "devalue";
import "klona";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { a as useTrashStore } from "./trash-fea4ab70.js";
import { u as useAuthStore } from "./authStore-4fa9ef0d.js";
import "ufo";
import "./_plugin-vue_export-helper-cc2b3d55.js";
import "./trash-68d2590c.js";
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
import "ohash";
import "pinia-plugin-persistedstate";
import "axios";
import "vue-awesome-paginate";
import "defu";
import "./fetch-ba2ed0c4.js";
const _imports_0 = "" + __buildAssetsURL("deletecon.8c55a18e.svg");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a, _b, _c, _d, _e, _f;
    let __temp, __restore;
    ref(0);
    const { locale } = useI18n();
    const $toast = useToast();
    const trash = useTrashStore();
    const user = useAuthStore();
    const totalPrice = ref(0);
    const phone = ref(null);
    const calcTotal = () => {
      var _a2;
      totalPrice.value = 0;
      (_a2 = trash.trash_items.products) == null ? void 0 : _a2.filter((e) => {
        totalPrice.value += e.price * e.count;
      });
    };
    calcTotal();
    watch(trash.trash_items, calcTotal);
    if ((_a = user.userToken) == null ? void 0 : _a.uuid) {
      const { data: user_trash } = ([__temp, __restore] = withAsyncContext(() => useMyFetch(
        `/api/v1/client/trash?user_id=${user.userToken.uuid}&lang=${locale.value}`
      )), __temp = await __temp, __restore(), __temp);
      if (user_trash.value.status && ((_c = (_b = user_trash.value) == null ? void 0 : _b.data) == null ? void 0 : _c.length)) {
        trash.trash_items.products = [];
        (_e = (_d = user_trash.value) == null ? void 0 : _d.data) == null ? void 0 : _e.filter((e) => {
          e.images = e.img_path;
        });
        trash.trash_items.products = (_f = user_trash.value) == null ? void 0 : _f.data;
      }
    }
    const makeOrder = async () => {
      var _a2, _b2, _c2, _d2;
      const making_products = [];
      (_a2 = trash.trash_items.products) == null ? void 0 : _a2.filter((e) => {
        making_products.push({
          product_id: e.uuid,
          count: `${e.count}`
        });
      });
      if (((_b2 = phone.value) == null ? void 0 : _b2.length) == 8) {
        const { data: make_order } = await useMyFetch(
          `/api/v1/client/products/order/create`,
          {
            method: "POST",
            body: {
              user_id: ((_c2 = user.userToken) == null ? void 0 : _c2.uuid) || null,
              phone: `${phone.value}`,
              products: making_products
            }
          }
        );
        if ((_d2 = make_order.value) == null ? void 0 : _d2.status) {
          trash.trash_items.products = [];
          $toast.success("Habarynyz ustunlikli kabul edildi");
          phone.value = "";
          useRouter().push("/");
        }
      } else {
        $toast.error("Telefonynyzy dogry dolduryn");
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_IconChevronRight = __nuxt_component_1;
      const _component_TrashButtonAndCounter = __nuxt_component_2;
      const _component_BaseButton = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "2xl:w-[1424px] xl:w-[900px] w-screen mx-auto" }, _attrs))}><div class="2xl:w-[1424px] xl:w-[900px] w-screen flex gap-3 items-center pl-10">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "cursor-pointer hover:font-bold"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("main"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("main")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_IconChevronRight, { class: "h-3" }, null, _parent));
      _push(`<p class="cursor-pointer font-bold">${ssrInterpolate(_ctx.$t("add_to"))}</p></div><div class="w-full"><div class="w-full"><div class="bg-[#3C4242] text-white p-2 md:p-[26px] flex justify-between mt-10 px-3 md:px-10 w-full"><div></div><div class="flex justify-between w-full md:text-xl text-[10px]"><p class="uppercase">${ssrInterpolate(_ctx.$t("info_product"))}</p><p class="uppercase">${ssrInterpolate(_ctx.$t("quantity"))}</p><p class="uppercase">${ssrInterpolate(_ctx.$t("price"))}</p><p class="uppercase">${ssrInterpolate(_ctx.$t("delete"))}</p></div></div>`);
      if (!((_a2 = unref(trash).trash_items.products) == null ? void 0 : _a2.length)) {
        _push(`<div class="mt-20 text-center w-full text-6xl text-gray-500 font-alatsi font-bold">${ssrInterpolate(_ctx.$t("trash_empty"))}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(unref(trash).trash_items.products, (item) => {
        _push(`<div class="py-12 p-[26px] flex items-center justify-between px-10"><div><div class="flex md:flex-row flex-col items-center md:gap-10 gap-5"><img${ssrRenderAttr("src", `http://duypbaha.com.tm/api/v1/uploads/images/${item.images}`)} alt="" class="w-35 rounded-md aspect-square object-cover"><p class="font-alatsi md:text-2xl text-lg w-[100px]">${ssrInterpolate(item.name)}</p></div></div><div class="flex items-start w-full justify-end gap-1 md:gap-10 md:flex-row flex-row"><div class="w-[150px] md:w-[400px] flex md:flex-row flex-col items-center justify-start ml-0"><p class="uppercase md:w-[200px] w-[150px]">`);
        _push(ssrRenderComponent(_component_TrashButtonAndCounter, {
          count: item.count,
          item
        }, null, _parent));
        _push(`</p><p class="uppercase font-bold text-lg md:w-[150px] flex flex-nowrap w-[150px]">${ssrInterpolate((item == null ? void 0 : item.count) * (item == null ? void 0 : item.price))} TMT </p></div><div class="block cursor-pointer"><img class="m-1 w-4"${ssrRenderAttr("src", _imports_0)} alt=""></div></div></div>`);
      });
      _push(`<!--]-->`);
      if (unref(trash).trash_items.products.length) {
        _push(`<div class="bg-[#3C4242] text-white py-3 flex md:flex-row flex-col gap-y-4 justify-between w-full md:text-xl px-5 text-[10px]"><div class=""><p class="uppercase font-bold font-alatsi">${ssrInterpolate(_ctx.$t("totalprice"))}: </p><p class="uppercase font-bold font-inter text-lg">${ssrInterpolate(unref(totalPrice))} TMT </p></div><div><p class="uppercase font-bold font-alatsi">${ssrInterpolate(_ctx.$t("phone"))}:</p><div class="flex h-12 items-center justify-center text-black relative bg-white rounded-lg"><div class="h-full flex text-lg items-center mx-2">+993</div><input class="text-black text-lg bg-white outline-0 border-white" type="text"${ssrRenderAttr("value", unref(phone))} placeholder="6522222"></div></div>`);
        _push(ssrRenderComponent(_component_BaseButton, {
          onClick: makeOrder,
          class: "rounded-lg text-lg",
          type: "secondary"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("prepare"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("prepare")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
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
//# sourceMappingURL=index-4e0ce506.js.map
