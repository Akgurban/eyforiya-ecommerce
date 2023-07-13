import { _ as __nuxt_component_0$1 } from "./nuxt-link-563b35af.js";
import { g as useSwitchLocalePath$1, a as useRoute, b as useRouter, h as getComposer, i as useNuxtApp, j as useI18n, _ as _export_sfc } from "../server.mjs";
import { useSSRContext, mergeProps, unref, withCtx, createVNode, toDisplayString, ref, createTextVNode } from "vue";
import "destr";
import "devalue";
import "klona";
import "js-cookie";
import "hookable";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderStyle, ssrRenderSlot } from "vue/server-renderer";
import { v4 } from "uuid";
import { _ as __nuxt_component_3 } from "./trash-d8d1b74e.js";
import { _ as _imports_0$2 } from "./logo-199648a5.js";
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
import "defu";
function useSwitchLocalePath(options) {
  const { route, router, i18n } = options || {};
  return useSwitchLocalePath$1({
    route: route || useRoute(),
    router: router || useRouter(),
    i18n: i18n || getComposer(useNuxtApp().$i18n)
  });
}
const _sfc_main$7 = {
  __name: "header-langs",
  __ssrInlineRender: true,
  props: {
    text: { type: String, default: "text" }
  },
  setup(__props) {
    const { locale: activeLocale, locales } = useI18n();
    const switchLocalePath = useSwitchLocalePath();
    useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex gap-3" }, _attrs))}><!--[-->`);
      ssrRenderList(unref(locales), (locale) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(switchLocalePath)(locale.code),
          class: [
            "group flex flex-col justify-between hover:text-white items-center cursor-pointer hover:bg-[#44A4DB] md:p-3 p-1 rounded-lg",
            locale.code === unref(activeLocale) ? "bg-[#44A4DB] text-white" : "bg-[#fff] text-[#807D7E]"
          ]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img class="md:w-10 w-7"${ssrRenderAttr("src", `/${locale.code}.png`)} alt=""${_scopeId}><p class="mt-[6px] md:block hidden"${_scopeId}>${ssrInterpolate(locale.code == "tk" ? "Turkmen" : locale.code == "en" ? "English" : "Русский")}</p>`);
            } else {
              return [
                createVNode("img", {
                  class: "md:w-10 w-7",
                  src: `/${locale.code}.png`,
                  alt: ""
                }, null, 8, ["src"]),
                createVNode("p", { class: "mt-[6px] md:block hidden" }, toDisplayString(locale.code == "tk" ? "Turkmen" : locale.code == "en" ? "English" : "Русский"), 1)
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
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/header-langs.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _imports_0$1 = "" + __buildAssetsURL("search.c87d81da.svg");
const baseSearch_vue_vue_type_style_index_0_lang = "";
const _sfc_main$6 = {
  __name: "base-search",
  __ssrInlineRender: true,
  props: {
    name: { type: String, required: true },
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
      _push(`<!--[--><label${ssrRenderAttr("for", unref(id))}>${ssrInterpolate(_ctx.label)}</label><div class="px-5 py-[10px] w-full rounded-lg bg-[#f6f6f6] flex border hover:border-black"><img width="20" height="20" class="mr-3"${ssrRenderAttr("src", _imports_0$1)} alt=""><input${ssrRenderAttr("id", unref(id))}${ssrRenderAttr("name", __props.name)}${ssrRenderAttr("type", __props.type)}${ssrRenderAttr("placeholder", __props.placeholder)}${ssrRenderAttr("value", __props.modelValue)} class="bg-[#f6f6f6] text-base text-black font-alatsi w-full focus:outline-none placeholder:text-[#807D7E]">`);
      if (unref(error)) {
        _push(`<div class="error">${ssrInterpolate(unref(error))}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/base-search.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none"
  }, _attrs))}><path d="M9.99992 11.6667C12.3011 11.6667 14.1666 9.8012 14.1666 7.50001C14.1666 5.19882 12.3011 3.33334 9.99992 3.33334C7.69873 3.33334 5.83325 5.19882 5.83325 7.50001C5.83325 9.8012 7.69873 11.6667 9.99992 11.6667ZM9.99992 11.6667C6.31802 11.6667 3.33325 13.9053 3.33325 16.6667M9.99992 11.6667C13.6818 11.6667 16.6666 13.9053 16.6666 16.6667" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icon/user.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$4 = {
  __name: "like",
  __ssrInlineRender: true,
  props: {
    fill: { type: String, default: "white" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, _attrs))}><path fill-rule="evenodd" clip-rule="evenodd" d="M9.99486 4.93014C8.49535 3.18262 5.99481 2.71255 4.11602 4.31275C2.23723 5.91295 1.97273 8.5884 3.44815 10.481C4.67486 12.0545 8.38733 15.3732 9.60407 16.4474C9.7402 16.5675 9.80827 16.6276 9.88766 16.6512C9.95695 16.6718 10.0328 16.6718 10.1021 16.6512C10.1815 16.6276 10.2495 16.5675 10.3857 16.4474C11.6024 15.3732 15.3149 12.0545 16.5416 10.481C18.017 8.5884 17.7848 5.89611 15.8737 4.31275C13.9626 2.72938 11.4944 3.18262 9.99486 4.93014Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icon/like.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "header-icons",
  __ssrInlineRender: true,
  props: {
    image: { type: String, required: true },
    text: { type: String, default: "text" }
  },
  setup(__props) {
    useI18n();
    useSwitchLocalePath();
    const route = useRoute();
    console.log(route);
    route.path;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconUser = __nuxt_component_0;
      const _component_IconLike = _sfc_main$4;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_IconTrash = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex gap-3" }, _attrs))}><div class="group cursor-pointer hover:bg-[#44A4DB] bg-[#F6F6F6] p-3 w-fit rounded-lg">`);
      _push(ssrRenderComponent(_component_IconUser, { class: "group-hover:text-white text-[#807D7E]" }, null, _parent));
      _push(`</div><div class="group cursor-pointer hover:bg-[#44A4DB] bg-[#F6F6F6] p-3 w-fit rounded-lg">`);
      _push(ssrRenderComponent(_component_IconLike, { class: "group-hover:text-white text-[#807D7E] w-5" }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: _ctx.localePath("/trash"),
        class: [
          unref(route).path == "/trash" || unref(route).path == "/en/trash" || unref(route).path == "/ru/trash" ? "bg-[#44A4DB] text-white " : "bg-[#F6F6F6] text-[#807D7E]",
          "group cursor-pointer hover:bg-[#44A4DB] p-3 w-fit rounded-lg"
        ]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_IconTrash, { class: "group-hover:text-white w-5" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_IconTrash, { class: "group-hover:text-white w-5" })
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
    const links = ref([
      { name: "Main" },
      { name: "Brands" },
      { name: "Shops" },
      { name: "About us" },
      { name: "Contact" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeaderLangs = _sfc_main$7;
      const _component_BaseSearch = _sfc_main$6;
      const _component_HeaderIcons = _sfc_main$3;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="md:mt-5 mt-2 flex md:flex-row flex-col items-center w-full pb-2 border-b-2 border-[#f6f6f6] justify-between"><div class="flex justify-between items-center w-full"><img${ssrRenderAttr("src", _imports_0$2)} alt="" draggable="false" style="${ssrRenderStyle({})}" class="cursor-pointer select-none md:h-[64px] h-[42px]"><div class="md:hidden block">`);
      _push(ssrRenderComponent(_component_HeaderLangs, null, null, _parent));
      _push(`</div></div><div class="flex items-center justify-between w-full md:my-0 md:mt-5 mt-3 gap-4"><div class="h-fit md:w-[386px] w-full md:mr-[14px] mr-auto">`);
      _push(ssrRenderComponent(_component_BaseSearch, { placeholder: "Search" }, null, _parent));
      _push(`</div><div class="flex items-center gap-[44px]">`);
      _push(ssrRenderComponent(_component_HeaderIcons, { class: "h-fit" }, null, _parent));
      _push(`<div class="md:block hidden">`);
      _push(ssrRenderComponent(_component_HeaderLangs, null, null, _parent));
      _push(`</div></div></div></div><div><ul class="justify-center font-semibold font-inter my-2 flex text-[#474747] md:text-[20px] text-base md:gap-[23px] gap-3"><!--[-->`);
      ssrRenderList(unref(links), (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: item.name,
          class: "hover:text-2xl select-none whitespace-nowrap md:px-2 flex items-center transition-all duration-75 h-10 cursor-pointer md:mx-2 hover:underline hover:text-[#44A4DB]"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></ul></div></div>`);
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
const _imports_2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAdCAYAAAAgqdWEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAH/SURBVHgB7ZfNTsJAEMeXhMR4k4MQvtQXMOFDFEHAKL6AT6DxwXwGNXjlqic5GRWMPoAJfpz8YpxJp2VcW7pKqRcm+WfZdjr7Y7u7M1Vqau4WsX8AwCE2Syp860cikV0bIsptDtWHcI3GyzlY2GmhFvj3OoQH5IDQ+Ki24hu3Aohm6BUmawRS5fGyPP5ACQe6kGWHPExuhnSQnn1DaY49AbSBeoDgQZY5fgYEiBuMDZThB2qoRwjGKE6B48ZQXd1BeTzYEUBFGB/oCVUXM9J1c1IjAnQFUGMMoE9UkeOkwQPED8YGSnGgTbD+4W+M/EsC5GaUsx8McAAbqATmQM8CJIW69nvABAY4UJIDr6IG4A+yzf5J1BUYmCkM2bE4tdd4QC+QpvA9AkP7y8zMcNuEn0DUr8gsCNbM+L4iUxh9zZyjEtyvoF7Yj1r7ZE2gzlBbQa4Z2k1pDrgCw8V7gYrz9TLqBLXD/Tjqkv3kbkrBGLtJP/g+tPs04Jz2SuYZVBoBNUy2txeMTAl18D7w7lB7YC3oA7CSrZvJVEAncMcUhkBi/GABgsveBFTzSpJuMDJrUxnxDsEaAeVFsvTM2rKeqcJk65m8Vlg5MAP4XumFUXq+wbDkdICo00YtipIzzBq4ImrgltyWZfjHrwNso/K76RSbWRW+3eN3076a2gj7AliUQxCD9uMVAAAAAElFTkSuQmCC";
const _imports_3 = "" + __buildAssetsURL("play.61fd4ebb.png");
const _imports_4 = "" + __buildAssetsURL("app.d5667842.png");
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-[#44A4DB] md:px-[100px] px-3 md:pt-10 pt-7 text-white" }, _attrs))}><div class="flex md:gap-25 gap-4"><div class="md:text-lg text-sm"><div><p class="md:text-4xl text-2xl font-semibold">Contact Us</p></div><div class="flex items-start gap-2 mt-4"><img${ssrRenderAttr("src", _imports_0)} alt=""><p> Location: № A3-333, Altyn asyr Gundogar bazary, <br> Ashgabat city, Turkmenistan </p></div><div class="flex items-start gap-2 mt-4"><img${ssrRenderAttr("src", _imports_1)} alt=""><p>Phone: +99365656565</p></div><div class="flex items-start gap-2 mt-4"><img${ssrRenderAttr("src", _imports_2)} alt=""><p>Email: duypbaha@gmail.com</p></div></div><div class="md:mt-10 mt-0"><p class="md:mt-4 mt-2">Term and Conditions</p><p class="md:mt-4 mt-2">Privacy Policy</p><div class="md:hidden block"><p class="md:text-2xl text-base md:m-4 mt-4">Download The App</p><div class="flex md:flex-row flex-col gap-2"><img class="h-10 w-[110px]"${ssrRenderAttr("src", _imports_3)} alt=""><img class="h-10 w-[110px]"${ssrRenderAttr("src", _imports_4)} alt=""></div></div></div><div class="self-end md:block hidden"><p class="md:text-2xl text-xs md:m-4 m-0">Download The App</p><div class="flex md:flex-row flex-col gap-4"><img class="h-10"${ssrRenderAttr("src", _imports_3)} alt=""><img class="h-10"${ssrRenderAttr("src", _imports_4)} alt=""></div></div></div><div class="border-t border-white p-3 mt-10 text-center"> Copyright © 2023 Duypbaha. All rights reserved. </div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MainFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_MainHeader = _sfc_main$2;
  const _component_MainFooter = __nuxt_component_1;
  _push(`<!--[--><div class=""><div class="2xl:w-[1428px] w-full mx-auto md:px-8 px-4">`);
  _push(ssrRenderComponent(_component_MainHeader, null, null, _parent));
  _push(`</div>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div><div class="mx-auto 2xl:w-[1440px] w-full mt-10">`);
  _push(ssrRenderComponent(_component_MainFooter, null, null, _parent));
  _push(`</div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  _default as default
};
//# sourceMappingURL=default-31365a73.js.map
