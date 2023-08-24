import { _ as __nuxt_component_0 } from "./nuxt-link-744fccd2.js";
import { _ as __nuxt_component_1 } from "./chevron-right-0f6a5ea3.js";
import { _ as _sfc_main$1 } from "./base-product-aed4d765.js";
import { ref, withAsyncContext, mergeProps, withCtx, createTextVNode, toDisplayString, unref, useSSRContext } from "vue";
import { u as useMyFetch } from "./useMyFetch-4be3eef7.js";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { u as useFavStore } from "./favourite-ff026b63.js";
import { u as useAuthStore } from "./authStore-4fa9ef0d.js";
import "ufo";
import "hookable";
import "../server.mjs";
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
import "vue-awesome-paginate";
import "defu";
import "./_plugin-vue_export-helper-cc2b3d55.js";
import "./like-a54ff78c.js";
import "./TrashButtonAndCounter-bd6226e8.js";
import "./trash-68d2590c.js";
import "./trash-4c7dc6a3.js";
import "./fetch-ba2ed0c4.js";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a, _b, _c, _d;
    let __temp, __restore;
    ref(0);
    const favStore = useFavStore();
    const user = useAuthStore();
    const fav = useFavStore();
    (_a = fav.wish_items) == null ? void 0 : _a.map((e) => e.isLiked = true);
    if ((_b = user.userToken) == null ? void 0 : _b.uuid) {
      const { data: wish_user } = ([__temp, __restore] = withAsyncContext(() => {
        var _a2;
        return useMyFetch(
          `/api/v1/client/wish-list?lang=tm&user_id=${(_a2 = user.userToken) == null ? void 0 : _a2.uuid}`
        );
      }), __temp = await __temp, __restore(), __temp);
      if ((_c = wish_user.value) == null ? void 0 : _c.status) {
        (_d = wish_user.value.data) == null ? void 0 : _d.filter((e) => {
          e.images = e.img_path;
        });
        favStore.wish_items = wish_user.value.data;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_IconChevronRight = __nuxt_component_1;
      const _component_BaseProduct = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "2xl:w-[1424px] xl:w-[1230px] w-screen mx-auto" }, _attrs))}><div class="2xl:w-[1424px] xl:w-[1230px] w-screen flex gap-3 items-center pl-10">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "cursor-pointer hover:font-bold"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("home"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("home")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_IconChevronRight, { class: "h-3" }, null, _parent));
      _push(`<p class="cursor-pointer font-bold">${ssrInterpolate(_ctx.$t("favourites"))}</p></div><div class="w-full flex gap-3 flex-wrap my-5 md:justify-start justify-center">`);
      if (!((_a2 = unref(fav).wish_items) == null ? void 0 : _a2.length)) {
        _push(`<div class="mt-20 text-center w-full text-6xl text-gray-500 font-alatsi font-bold">${ssrInterpolate(_ctx.$t("favourites_none"))}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(unref(fav).wish_items, (item) => {
        _push(`<div class="group relative md:w-[272px] w-[176px] product_item mb-3 hover:shadow-none md:hover:shadow-hero bg-[#D9D9D940] hover:bg-[#D9D9D940] transition-all ease-in-out duration-200 rounded-xl flex flex-col justify-between items-center">`);
        _push(ssrRenderComponent(_component_BaseProduct, { item }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/favourite/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-a1ea6e11.js.map
