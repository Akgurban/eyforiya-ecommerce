import { _ as __nuxt_component_0 } from "./nuxt-link-744fccd2.js";
import { m as useSwitchLocalePath$1, b as useRoute, a as useRouter, o as getComposer, j as useNuxtApp, h as useI18n } from "../server.mjs";
import { useSSRContext, mergeProps, unref, withCtx, createVNode, toDisplayString, nextTick, ref, watch, withAsyncContext, openBlock, createBlock, createCommentVNode, isRef, createTextVNode } from "vue";
import "destr";
import "devalue";
import "klona";
import "js-cookie";
import "hookable";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderStyle, ssrRenderSlot } from "vue/server-renderer";
import { v4 } from "uuid";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import { _ as _sfc_main$7 } from "./like-a54ff78c.js";
import { _ as __nuxt_component_3 } from "./trash-68d2590c.js";
import { u as useMyFetch } from "./useMyFetch-4be3eef7.js";
import { u as useFavStore } from "./favourite-d4e45d0f.js";
import { a as useTrashStore } from "./trash-fea4ab70.js";
import { u as useAuthStore } from "./authStore-4fa9ef0d.js";
import { _ as _imports_0$2 } from "./logo-83323d70.js";
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
import "is-https";
import "ohash";
import "pinia-plugin-persistedstate";
import "axios";
import "vue-awesome-paginate";
import "defu";
import "./fetch-ba2ed0c4.js";
function useSwitchLocalePath(options) {
  const { route, router, i18n } = options || {};
  return useSwitchLocalePath$1({
    route: route || useRoute(),
    router: router || useRouter(),
    i18n: i18n || getComposer(useNuxtApp().$i18n)
  });
}
const _sfc_main$6 = {
  __name: "header-langs",
  __ssrInlineRender: true,
  props: {
    text: { type: String, default: "text" }
  },
  setup(__props) {
    const { locale: activeLocale, locales } = useI18n();
    useSwitchLocalePath();
    const route = useRoute();
    const router = useRouter();
    const changeLang = async (e) => {
      await nextTick();
      if (e.code == "tm") {
        if (route.fullPath.includes("/ru")) {
          if (route.fullPath == "/ru") {
            router.push(route.fullPath.replace("/ru", "/"));
          } else {
            router.push(route.fullPath.replace("/ru", "/").substring(1));
          }
        } else if (route.fullPath.includes("/en")) {
          if (route.fullPath == "/en") {
            router.push(route.fullPath.replace("/en", "/"));
          } else {
            router.push(route.fullPath.replace("/en", "/").substring(1));
          }
        }
      }
      if (e.code == "en") {
        if (route.fullPath.includes("/ru")) {
          router.push(route.fullPath.replace("/ru", "/en"));
        } else if (route.fullPath.includes("/en")) {
          router.push(route.fullPath.replace("/en", "/en"));
        } else {
          router.push("/en" + route.fullPath);
        }
      }
      if (e.code == "ru") {
        if (route.fullPath.includes("/ru")) {
          router.push(route.fullPath.replace("/ru", "/ru"));
        } else if (route.fullPath.includes("/en")) {
          router.push(route.fullPath.replace("/en", "/ru"));
        } else {
          router.push("/ru" + route.fullPath);
        }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex gap-3" }, _attrs))}><!--[-->`);
      ssrRenderList(unref(locales), (locale) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          onClick: ($event) => changeLang(locale),
          class: [
            "group flex flex-col justify-between hover:text-white items-center cursor-pointer hover:bg-[#44A4DB] md:p-3 p-1 rounded-lg",
            locale.code === unref(activeLocale) ? "bg-[#44A4DB] text-white" : "bg-[#fff] text-[#807D7E]"
          ]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img class="md:w-10 w-7"${ssrRenderAttr("src", `/${locale.code}.png`)} alt=""${_scopeId}><p class="mt-[6px] md:block hidden"${_scopeId}>${ssrInterpolate(locale.code == "tm" ? "Turkmen" : locale.code == "en" ? "English" : "Русский")}</p>`);
            } else {
              return [
                createVNode("img", {
                  class: "md:w-10 w-7",
                  src: `/${locale.code}.png`,
                  alt: ""
                }, null, 8, ["src"]),
                createVNode("p", { class: "mt-[6px] md:block hidden" }, toDisplayString(locale.code == "tm" ? "Turkmen" : locale.code == "en" ? "English" : "Русский"), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/header-langs.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _imports_0$1 = "" + __buildAssetsURL("search.283651ab.svg");
const baseSearch_vue_vue_type_style_index_0_lang = "";
const _sfc_main$5 = {
  __name: "base-search",
  __ssrInlineRender: true,
  props: {
    name: { type: String, required: false },
    type: { type: String, default: "text" },
    modelValue: { type: [String, Number], default: "" },
    placeholder: { type: String, default: "" },
    validate: { type: Function }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const error = ref("");
    const id = v4();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-5 py-[10px] w-full rounded-lg bg-[#f6f6f6] flex border hover:border-black" }, _attrs))}><img width="20" height="20" class="mr-3"${ssrRenderAttr("src", _imports_0$1)} alt=""><input${ssrRenderAttr("id", unref(id))}${ssrRenderAttr("name", __props.name)}${ssrRenderAttr("type", __props.type)}${ssrRenderAttr("placeholder", __props.placeholder)}${ssrRenderAttr("value", __props.modelValue)} class="bg-[#f6f6f6] text-base text-black font-alatsi w-full focus:outline-none placeholder:text-[#807D7E]">`);
      if (unref(error)) {
        _push(`<div class="error">${ssrInterpolate(unref(error))}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/base-search.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none"
  }, _attrs))}><path d="M9.99992 11.6667C12.3011 11.6667 14.1666 9.8012 14.1666 7.50001C14.1666 5.19882 12.3011 3.33334 9.99992 3.33334C7.69873 3.33334 5.83325 5.19882 5.83325 7.50001C5.83325 9.8012 7.69873 11.6667 9.99992 11.6667ZM9.99992 11.6667C6.31802 11.6667 3.33325 13.9053 3.33325 16.6667M9.99992 11.6667C13.6818 11.6667 16.6666 13.9053 16.6666 16.6667" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icon/user.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$3 = {
  __name: "header-icons",
  __ssrInlineRender: true,
  props: {
    image: { type: String, required: false },
    text: { type: String, default: "text" }
  },
  async setup(__props) {
    var _a, _b, _c, _d;
    let __temp, __restore;
    useI18n();
    const favStore = useFavStore();
    const user = useAuthStore();
    const authStore = useAuthStore();
    const trash = useTrashStore();
    useI18n();
    useSwitchLocalePath();
    const route = useRoute();
    useRouter();
    const trash_count = ref(0);
    (_a = trash.trash_items.products) == null ? void 0 : _a.filter((e) => {
      trash_count.value += e.count;
    });
    watch(trash.trash_items, () => {
      var _a2;
      trash_count.value = 0;
      (_a2 = trash.trash_items.products) == null ? void 0 : _a2.filter((e) => {
        trash_count.value += e.count;
      });
    });
    watch(favStore.wish_items, () => {
      trash_count.value = favStore.wish_items.length;
    });
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
    route.path;
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b2, _c2;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_IconUser = __nuxt_component_1;
      const _component_IconLike = _sfc_main$7;
      const _component_IconTrash = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex gap-3" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: !((_a2 = unref(user).userToken) == null ? void 0 : _a2.uuid) ? _ctx.localePath(`/user/login`) : _ctx.localePath(`/profil/order`),
        class: [
          unref(route).path == "/login" || unref(route).path == "/en/login" || unref(route).path == "/ru/login" || unref(authStore).userToken ? "bg-[#44A4DB] text-white" : " text-[#807D7E] bg-[#F6F6F6]",
          "group relative cursor-pointer hover:bg-[#44A4DB] p-3 w-fit rounded-lg"
        ]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!unref(authStore).userToken) {
              _push2(ssrRenderComponent(_component_IconUser, { class: "group-hover:text-white" }, null, _parent2, _scopeId));
            } else {
              _push2(`<div class="group-hover:text-white font-bold font-inter w-5 text-center"${_scopeId}>${ssrInterpolate(unref(authStore).userToken.username.slice(0, 1).toUpperCase())}</div>`);
            }
          } else {
            return [
              !unref(authStore).userToken ? (openBlock(), createBlock(_component_IconUser, {
                key: 0,
                class: "group-hover:text-white"
              })) : (openBlock(), createBlock("div", {
                key: 1,
                class: "group-hover:text-white font-bold font-inter w-5 text-center"
              }, toDisplayString(unref(authStore).userToken.username.slice(0, 1).toUpperCase()), 1))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: _ctx.localePath("/favourite"),
        class: [
          unref(route).path == "/favourite" || unref(route).path == "/en/favourite" || unref(route).path == "/ru/favourite" || ((_b2 = unref(favStore).wish_items) == null ? void 0 : _b2.length) > 0 ? "bg-[#44A4DB] text-white " : "bg-[#F6F6F6] text-[#807D7E]",
          "group relative cursor-pointer hover:bg-[#44A4DB] p-3 w-fit rounded-lg"
        ]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a3, _b3, _c3, _d2;
          if (_push2) {
            if ((_a3 = unref(favStore).wish_items) == null ? void 0 : _a3.length) {
              _push2(`<div class="absolute -top-4 left-0 rounded-full bg-[#F35528] text-white w-7 h-7 flex justify-center items-center"${_scopeId}>${ssrInterpolate((_b3 = unref(favStore).wish_items) == null ? void 0 : _b3.length)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_IconLike, { class: "group-hover:text-white w-5" }, null, _parent2, _scopeId));
          } else {
            return [
              ((_c3 = unref(favStore).wish_items) == null ? void 0 : _c3.length) ? (openBlock(), createBlock("div", {
                key: 0,
                class: "absolute -top-4 left-0 rounded-full bg-[#F35528] text-white w-7 h-7 flex justify-center items-center"
              }, toDisplayString((_d2 = unref(favStore).wish_items) == null ? void 0 : _d2.length), 1)) : createCommentVNode("", true),
              createVNode(_component_IconLike, { class: "group-hover:text-white w-5" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: _ctx.localePath("/trash"),
        class: [
          unref(route).path == "/trash" || unref(route).path == "/en/trash" || unref(route).path == "/ru/trash" || ((_c2 = unref(trash).trash_items.products) == null ? void 0 : _c2.length) !== 0 ? "bg-[#44A4DB] text-white " : "bg-[#F6F6F6] text-[#807D7E]",
          "group relative cursor-pointer hover:bg-[#44A4DB] p-3 w-fit rounded-lg"
        ]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a3, _b3, _c3, _d2;
          if (_push2) {
            _push2(ssrRenderComponent(_component_IconTrash, { class: "group-hover:text-white w-5" }, null, _parent2, _scopeId));
            if (((_a3 = unref(trash).trash_items.products) == null ? void 0 : _a3.length) !== 0) {
              _push2(`<div class="absolute -top-4 left-0 rounded-full bg-[#F35528] text-white w-7 h-7 flex justify-center items-center"${_scopeId}>${ssrInterpolate((_b3 = unref(trash).trash_items.products) == null ? void 0 : _b3.length)}</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(_component_IconTrash, { class: "group-hover:text-white w-5" }),
              ((_c3 = unref(trash).trash_items.products) == null ? void 0 : _c3.length) !== 0 ? (openBlock(), createBlock("div", {
                key: 0,
                class: "absolute -top-4 left-0 rounded-full bg-[#F35528] text-white w-7 h-7 flex justify-center items-center"
              }, toDisplayString((_d2 = unref(trash).trash_items.products) == null ? void 0 : _d2.length), 1)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/header-icons.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "MainHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const search = ref("");
    if (useRoute().path.includes("/search")) {
      search.value = useRoute().params.id;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeaderLangs = _sfc_main$6;
      const _component_BaseSearch = _sfc_main$5;
      const _component_HeaderIcons = _sfc_main$3;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "lg:mt-0 mt-2 flex lg:flex-row flex-col items-center w-full pb-2 border-b-2 border-[#f6f6f6] justify-between" }, _attrs))}><div class="flex justify-between items-center w-full lg:mt-3 mt-0"><img${ssrRenderAttr("src", _imports_0$2)} alt="" draggable="false" style="${ssrRenderStyle({})}" class="cursor-pointer select-none md:w-70 w-40"><div class="lg:hidden block">`);
      _push(ssrRenderComponent(_component_HeaderLangs, null, null, _parent));
      _push(`</div></div><div class="flex items-center justify-between w-full lg:my-0 lg:mt-3 mt-3 gap-4"><form class="h-fit lg:w-[200px] xl:w-[386px] w-full lg:mr-[14px] mr-auto">`);
      _push(ssrRenderComponent(_component_BaseSearch, {
        modelValue: unref(search),
        "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
        placeholder: _ctx.$t("search")
      }, null, _parent));
      _push(`</form><div class="flex items-center gap-[44px]">`);
      _push(ssrRenderComponent(_component_HeaderIcons, { class: "h-fit" }, null, _parent));
      _push(`<div class="lg:block hidden">`);
      _push(ssrRenderComponent(_component_HeaderLangs, null, null, _parent));
      _push(`</div></div></div></header>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MainHeader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAkCAYAAADo6zjiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPGSURBVHgBrVhbiI1RFF7HJZeEyS2EM3JJcn8g9+RSkiThiZFbIUQUHoxLkSg1JZHkZcjDTPOgpMxMNIYG0zygUZqZXBsz5sIgYyzfstff2fb8Z87+z8xXX/v8e61v7du/917/iVEEMPNAFDvA+eAUcBDYHXwP1oA3wcJYLFZNXQk0nAGeA1s5NX6D18HR1BVAoBlgldVAEbgfXAjGlQvAA2CZ5SeaedQZaCMNGrASXOyhWW11uA1cRelAR1angW7p+vtqZckKVCsDGEdRYY3iHqUB6HqCpRqjJKo4S4XVMhMh9v7gdjAHPK/+vUP8RlpLuIt8oest2B1im2MFZeelWxPin632Up+2RTBRBbKdxji2SWCL2mvBS+Bla7m+yovraAaCzWof79OBrepcFGIrV5u8YP2t+gHgHbUVh+hK1LbDtXUL6cNYLV87QeTkm66P+3DaNQc2/G5CsVncwEWy9k7Ml1rGyaMDQ7Ssd+oHaVkddtSiro7McSxwp7pWy8Hk0YHvWrr7vjGoxwh7uCLUxVBk6OMfxxwsVxN5dKBay6FO/RvthHTsSIjuMDiAzAw9cGzBjNRRKmAki/WFqQf7Orb91ra7Bs4FZ4EXrPpDITE/qW2+Twdi1j5fFmI/w8lxMsR/vdo+ki84cXg807V17RvAu+AXNveFbMEVSWJVaawc8gWbyySYhVOUJqA9qjFqOGp+AMFOFcvpNpYigs1t2qYx9lA6YJN8CB5SRHDi9CukdKGjCM5x79uME8f5Tw65TaN2Ith68k6M8PC3E5mj1Fmw2ZavNGCBh/8N9a2irgKCbeQElnTgl2X5Lad0AfEYNlnufW6ffHzmkPwQdcP4/+yZ9f2RM2IvmOnT8ArrzXchy/BWf18M0V6x3pXnSWI8ATeFNRx3Gm7hRP4/lfVO4MQ9IVhk6Wda9Su1rhc4m815UuR0RJLVeCAexYmpa2RzDGd0MEu56vsC7KN1gf5qBzoZ5Fnwl/qKZoQ9dVKRMn9nk+MF2+w4eMLSxz30cavDp6WiQh/Wkifgu00139gkr4KsCPp1qqmUh3x9yKUIYLNDAuRH0HUDb6suL/j+C/AUnOwZSKayQRn31EhbRVZ70wLDFk7k+4JiNodKZoqA8g0xMYXPcDa7yW5YOv1vO8bsEaHIJpNe25A/H8rACvAdmcxXyh+OnySqE8jkkpnKpeBwxy8PPJj0Twyd2mPgI+46yIzKbmm3vWPU8fTJt4Cs01RwDjiMzHdDPzLfCXIOyMdIC9gAtoJyCX0Ay8l83DzGaBuTtfEXHSfmupl+JaIAAAAASUVORK5CYII=";
const _imports_1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAnCAYAAACIVoEIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOqSURBVHgB1Zh7aE5hHMefdwot7N2wKWUjlnJbTWxz2fzhUoqs/eEPzaZYjLEp/iDmtlAiK9k/iD/UxPwjI3mnXIq0ueQ/XuVSbm2GGPHzfTrP6f2dZ895zznvXtO+9cnr+V2e33nOczsTYiCJiEKgDkRApfjfQhFjwV1yqsFH3AzQCLaBZSBTJENIlA4esWI62e+5HrEl1FtPwSaQLRIRAgeDhyzhMTCOFfYChOPE54FPZJbMUQ+GiSBSQ2/rMGsvY+37fOaSBVaBW1pxUTDZTw6ZZBcLbDLYrzF7nggg+OeCFhb/HVR4BY0Hv1TAM5Bq8MkBn5VPRCQgxFWzHFKr4jlHldNr2XkcvwMs4WJhLnwrWA5Gu+SYBl6qHF+Mo47GDayjKhH/SdPAR+XbZrDrq+8imGLwk/Oti2JzbIjuEFHGK8KHyFpBtvI9irJVb8hT42pHw3llaBc+BL+FLFmli08RWSv5HfNtBima3w1lk9tFmBu2sMCwR0HrwW/l20Nx5p/yl3OsleVv0OwFxtHCf+Yxw8o4Hexmft2gWPgQWWfoAxY7X7NHVPsdPdDesa+6JF7KksoVmisCiKyz1O7jumbbzHKP5IYG1ShfzShD0mIWWCYSEMUWyDeQztonsdwreMBEMr3bmD3F7UkDFFVk6hy/B7H2Wj3opjJ0uYzWHhY8XQSUejBbNZrtvXFA0FDIgo4YkmaAH30crRJFtkt7jimoSXUql3uhwX6QFV4u+kPoKIvNnccgTbOnUuyc7CSPfSqZhW1ko3HUYJ8Ffip7tD8Li7DCSg12fojLwiZ45MsEFWC26ENRY8Bb1ekHMtwUyXkpfAPWuuRaQs57/n3i+1HAwgq015Rt8NlBTl3gr5Osy2MnmdVKibx6ch7WHWT4ZCLr0hbVOjwLVrP2r2ARWEexC56t/SAkgoicB/ETkGXwGQ72knWEmLSG+YZVTj6CUTBHBJHq0NZzt2En66pygpwjtzOO7xmt+HoRsLBD2pPlePjLObnAR95y8IrlrhZBRM6rsPzoTMqurkbNvvsHP8IQVAv+sOJ8fZx65ORfSdtFIkJgPjnnjfwd6OLHch1nee6JvkgNeTM5dZp87j3wGwHOsVi5gDJEMkTWX1S6WXK51Bsp/ketfKAOFtNOHh8tiRRmWt5Sl0EpOa+/leTco06BoeJfCcmngktkVhu4rbXVif6SGrmT1Pv4sSX/kOZ6pQ525iRW4Ez8IzfRIiDnTQtoCoVCPWIg6S+7YXU74baSvAAAAABJRU5ErkJggg==";
const _imports_2 = "data:image/jpeg;base64,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";
const _imports_3 = "data:image/jpeg;base64,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";
const _imports_4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAdCAYAAAAgqdWEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAH/SURBVHgB7ZfNTsJAEMeXhMR4k4MQvtQXMOFDFEHAKL6AT6DxwXwGNXjlqic5GRWMPoAJfpz8YpxJp2VcW7pKqRcm+WfZdjr7Y7u7M1Vqau4WsX8AwCE2Syp860cikV0bIsptDtWHcI3GyzlY2GmhFvj3OoQH5IDQ+Ki24hu3Aohm6BUmawRS5fGyPP5ACQe6kGWHPExuhnSQnn1DaY49AbSBeoDgQZY5fgYEiBuMDZThB2qoRwjGKE6B48ZQXd1BeTzYEUBFGB/oCVUXM9J1c1IjAnQFUGMMoE9UkeOkwQPED8YGSnGgTbD+4W+M/EsC5GaUsx8McAAbqATmQM8CJIW69nvABAY4UJIDr6IG4A+yzf5J1BUYmCkM2bE4tdd4QC+QpvA9AkP7y8zMcNuEn0DUr8gsCNbM+L4iUxh9zZyjEtyvoF7Yj1r7ZE2gzlBbQa4Z2k1pDrgCw8V7gYrz9TLqBLXD/Tjqkv3kbkrBGLtJP/g+tPs04Jz2SuYZVBoBNUy2txeMTAl18D7w7lB7YC3oA7CSrZvJVEAncMcUhkBi/GABgsveBFTzSpJuMDJrUxnxDsEaAeVFsvTM2rKeqcJk65m8Vlg5MAP4XumFUXq+wbDkdICo00YtipIzzBq4ImrgltyWZfjHrwNso/K76RSbWRW+3eN3076a2gj7AliUQxCD9uMVAAAAAElFTkSuQmCC";
const _imports_5 = "" + __buildAssetsURL("start.26eb02c3.webp");
const _imports_6 = "" + __buildAssetsURL("link.6e897909.webp");
const _imports_7 = "data:image/png;base64,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";
const _imports_8 = "" + __buildAssetsURL("play.49dfd8d7.png");
const _imports_9 = "" + __buildAssetsURL("app.d5667842.png");
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "md:px-[100px] px-3 md:pt-10 pt-7 text-white" }, _attrs))}><div><p class="md:text-4xl text-2xl font-semibold">${ssrInterpolate(_ctx.$t("contactUs"))}</p></div><div class="flex md:gap-25 gap-4"><div class="md:text-lg text-sm"><div class="flex items-start gap-2 mt-4"><img${ssrRenderAttr("src", _imports_0)} alt=""><p> Aşgabat ş. <br> Altyn Asyr Gündogar bazary,<br> Dükan № A3-333 </p></div><a href="tel:+99365138000" class="flex items-start gap-2 mt-4"><img${ssrRenderAttr("src", _imports_1)} alt=""><p class="select-none">Phone: +99365138000</p></a><a href="tel:+99364992871" class="flex items-start gap-2 mt-4"><img${ssrRenderAttr("src", _imports_2)} alt=""><p class="select-none">+99364992871</p></a><a href="https://vm.tiktok.com/ZSLs3h1ap/" class="flex items-start gap-2 mt-4"><img${ssrRenderAttr("src", _imports_3)} alt=""><p class="select-none">@dunyatekdurdyyeva</p></a><div class="flex items-start gap-2 mt-4"><img${ssrRenderAttr("src", _imports_4)} alt=""><p class=""><a href="mailto:info@duypbaha.com.tm" class="select-none cursor-default">info@duypbaha.com.tm</a></p></div></div><div class="md:text-lg text-sm"><a href="tel:+99361876094" class="flex items-start gap-2 mt-4"><img${ssrRenderAttr("src", _imports_1)} alt=""><p class="select-none">Phone: +99361876094</p></a><a href="tel:+99364992471" class="flex items-start gap-2 mt-4"><img${ssrRenderAttr("src", _imports_5)} class="w-10 h-10" alt=""><p class="select-none">+99364992471</p></a><a href="tel:+99364992471" class="flex items-start gap-2 mt-4 w-10 h-10"><img${ssrRenderAttr("src", _imports_6)} alt=""><p class="select-none">+99364992471</p></a><a href="https://instagram.com/zemin_lux?igshid=MzRlODBiNWFlZA==" class="flex items-start gap-2 mt-4"><img${ssrRenderAttr("src", _imports_7)} alt=""><p class="select-none">@zemin_lux</p></a></div><div class="self-end mt-6 md:block hidden"><p class="md:text-2xl text-xs md:m-4 m-0">Download The App</p><div class="flex mt-4 gap-4"><img class="h-10 rounded-xl w-40"${ssrRenderAttr("src", _imports_8)} alt=""><img class="h-10 rounded-xl w-40"${ssrRenderAttr("src", _imports_9)} alt=""></div></div></div><div class="self-end mt-6 md:hidden block"><p class="md:text-2xl text-xs md:m-4 m-0">Download The App</p><div class="flex mt-4 gap-4"><img class="h-10 rounded-xl w-40"${ssrRenderAttr("src", _imports_8)} alt=""><img class="h-10 rounded-xl w-40"${ssrRenderAttr("src", _imports_9)} alt=""></div></div><div class="border-t border-white p-3 mt-10 text-center"> Copyright © 2023 Duypbaha. All rights reserved. </div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MainFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const links = ref([
      { name: "main", path: "/" },
      { name: "brands", path: "/brands" },
      { name: "products", path: "/all-products" },
      { name: "about_us", path: "/about-us" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MainHeader = _sfc_main$2;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_MainFooter = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class=""><div class="sticky shadow-md top-0 left-0 z-40 bg-white w-screen mx-auto md:px-8 px-4"><div class="sticky top-0 left-0 z-40 bg-white 2xl:w-[1428px] w-full mx-auto md:px-8 px-4">`);
      _push(ssrRenderComponent(_component_MainHeader, { class: "" }, null, _parent));
      _push(`</div></div><div><ul class="justify-center font-semibold font-inter my-2 flex text-[#474747] md:text-[20px] text-base md:gap-[23px] gap-3"><!--[-->`);
      ssrRenderList(unref(links), (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: item.name,
          to: _ctx.localePath(item == null ? void 0 : item.path),
          class: [
            "hover:text-lg md:hover:text-2xl select-none whitespace-nowrap md:px-2 flex items-center transition-all duration-75 h-10 cursor-pointer md:mx-2 hover:underline hover:text-[#44A4DB]",
            unref(route).path.includes(item.path) && item.path !== "/" ? "text-[#44A4DB]" : "text-[#474747]"
          ]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t(item.name))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t(item.name)), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></ul></div>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div><div class="w-screen bg-[#44A4DB]"><div class="mx-auto 2xl:w-[1440px] w-full mt-10">`);
      _push(ssrRenderComponent(_component_MainFooter, null, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=default-7e81703f.js.map
