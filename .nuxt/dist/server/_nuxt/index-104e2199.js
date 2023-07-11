import { useSSRContext, unref, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, ref } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderAttrs } from "vue/server-renderer";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper";
/* empty css                     */import { _ as _export_sfc } from "../server.mjs";
import { u as useUserStore } from "./user-d05e8fdd.js";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "vue-router";
import "h3";
import "ufo";
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
const MainSwiper_vue_vue_type_style_index_0_lang = "";
const _sfc_main$6 = {
  __name: "MainSwiper",
  __ssrInlineRender: true,
  setup(__props) {
    const renderBullet = (index, className) => {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Swiper), mergeProps({
        spaceBetween: 29,
        slidesPerView: 1,
        centeredSlides: false,
        autoplay: {
          delay: 3500,
          disableOnInteraction: false
        },
        modules: [unref(Autoplay), unref(Pagination), unref(Navigation)],
        navigation: true,
        pagination: { clickable: true, renderBullet },
        mousewheel: true,
        keyboard: true,
        class: "mb-5"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(2, (item) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), {
                key: item,
                style: { "width": "100% !important", "margin-right": "0 !important" },
                class: "group cursor-pointer mt-6"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="rounded-xl"${_scopeId2}><img class="border border-[#e6e6e6] w-full transition-all ease-in-out duration-200"${ssrRenderAttr("src", `/banner/banner-${item}.png`)} alt="" loading="lazy"${_scopeId2}></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "rounded-xl" }, [
                        createVNode("img", {
                          class: "border border-[#e6e6e6] w-full transition-all ease-in-out duration-200",
                          src: `/banner/banner-${item}.png`,
                          alt: "",
                          loading: "lazy"
                        }, null, 8, ["src"])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(2, (item) => {
                return createVNode(unref(SwiperSlide), {
                  key: item,
                  style: { "width": "100% !important", "margin-right": "0 !important" },
                  class: "group cursor-pointer mt-6"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "rounded-xl" }, [
                      createVNode("img", {
                        class: "border border-[#e6e6e6] w-full transition-all ease-in-out duration-200",
                        src: `/banner/banner-${item}.png`,
                        alt: "",
                        loading: "lazy"
                      }, null, 8, ["src"])
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MainSwiper.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const HeroSwiper_vue_vue_type_style_index_0_lang = "";
const _sfc_main$5 = {
  __name: "HeroSwiper",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Swiper), mergeProps({
        spaceBetween: 5,
        slidesPerView: 4,
        centeredSlides: false,
        autoplay: {
          delay: 3500,
          disableOnInteraction: false
        },
        class: "pb-3",
        modules: [unref(Autoplay), unref(Pagination), unref(Navigation)],
        navigation: true,
        mousewheel: true,
        keyboard: true,
        style: { "width": "100% !important" }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(6, (item) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), {
                key: item,
                style: { "width": "24% !important", "height": "95% !important" },
                class: "group mx-2 mb-3 hover:shadow-hero hover:bg-[#D9D9D940] transition-all ease-in-out duration-200 rounded-xl flex flex-col justify-center items-center cursor-pointer"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="rounded-xl mb-3 text-center mt-6"${_scopeId2}><img class="border border-[#e6e6e6]"${ssrRenderAttr("src", `/categories/cat-${item}.png`)} alt="" height="262" loading="lazy"${_scopeId2}><div class="text-3xl font-alatsi text-[#3C4242] mt-3 mb-1"${_scopeId2}> Knitted Joggers </div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "rounded-xl mb-3 text-center mt-6" }, [
                        createVNode("img", {
                          class: "border border-[#e6e6e6]",
                          src: `/categories/cat-${item}.png`,
                          alt: "",
                          height: "262",
                          loading: "lazy"
                        }, null, 8, ["src"]),
                        createVNode("div", { class: "text-3xl font-alatsi text-[#3C4242] mt-3 mb-1" }, " Knitted Joggers ")
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(6, (item) => {
                return createVNode(unref(SwiperSlide), {
                  key: item,
                  style: { "width": "24% !important", "height": "95% !important" },
                  class: "group mx-2 mb-3 hover:shadow-hero hover:bg-[#D9D9D940] transition-all ease-in-out duration-200 rounded-xl flex flex-col justify-center items-center cursor-pointer"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "rounded-xl mb-3 text-center mt-6" }, [
                      createVNode("img", {
                        class: "border border-[#e6e6e6]",
                        src: `/categories/cat-${item}.png`,
                        alt: "",
                        height: "262",
                        loading: "lazy"
                      }, null, 8, ["src"]),
                      createVNode("div", { class: "text-3xl font-alatsi text-[#3C4242] mt-3 mb-1" }, " Knitted Joggers ")
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroSwiper.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _imports_0$2 = "data:image/png;base64,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";
const _imports_1$2 = "data:image/png;base64,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";
const _imports_2$1 = "data:image/png;base64,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";
const _imports_3$1 = "data:image/png;base64,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";
const _sfc_main$4 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex width-full justify-between border-y border-[#00000026] py-8" }, _attrs))}><div class="flex items-center gap-5"><img${ssrRenderAttr("src", _imports_0$2)} alt=""><div><p class="font-alatsi text-[45px] text-[#3C4242] leading-[33px]"> 2232 </p><p class="font-alatsi text-base text-[#000] mt-2"> products in the website </p></div></div><div class="flex items-center gap-5"><img${ssrRenderAttr("src", _imports_1$2)} alt=""><div><p class="font-alatsi text-[45px] text-[#3C4242] leading-[33px]">15</p><p class="font-alatsi text-base text-[#000] mt-2"> our global partners </p></div></div><div class="flex items-center gap-5"><img${ssrRenderAttr("src", _imports_2$1)} alt=""><div><p class="font-alatsi text-[45px] text-[#3C4242] leading-[33px]">986</p><p class="font-alatsi text-base text-[#000] mt-2">items sold so far</p></div></div><div class="flex items-center gap-5"><img${ssrRenderAttr("src", _imports_3$1)} alt=""><div><p class="font-alatsi text-[45px] text-[#3C4242] leading-[33px]"> 40358 </p><p class="font-alatsi text-base text-[#000] mt-2"> visits to our vebsite </p></div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MainInfo.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$3 = {
  __name: "like-red",
  __ssrInlineRender: true,
  props: {
    fill: { type: String, default: "white" }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        fill: props.fill,
        xmlns: "http://www.w3.org/2000/svg"
      }, _attrs))}><path fill-rule="evenodd" clip-rule="evenodd" d="M9.99486 4.93014C8.49535 3.18262 5.99481 2.71255 4.11602 4.31275C2.23723 5.91295 1.97273 8.5884 3.44815 10.481C4.67486 12.0545 8.38733 15.3732 9.60407 16.4474C9.7402 16.5675 9.80827 16.6276 9.88766 16.6512C9.95695 16.6718 10.0328 16.6718 10.1021 16.6512C10.1815 16.6276 10.2495 16.5675 10.3857 16.4474C11.6024 15.3732 15.3149 12.0545 16.5416 10.481C18.017 8.5884 17.7848 5.89611 15.8737 4.31275C13.9626 2.72938 11.4944 3.18262 9.99486 4.93014Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icon/like-red.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const HeroSwiperProduct_vue_vue_type_style_index_0_lang = "";
const _sfc_main$2 = {
  __name: "HeroSwiperProduct",
  __ssrInlineRender: true,
  setup(__props) {
    const addRed = (e) => {
      e.target.firstChild.setAttribute("fill", "red");
    };
    const removeRed = (e) => {
      e.target.firstChild.removeAttribute("fill");
      e.target.firstChild.setAttribute("fill", "white");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconLikeRed = _sfc_main$3;
      _push(ssrRenderComponent(unref(Swiper), mergeProps({
        spaceBetween: 31,
        slidesPerView: 4,
        centeredSlides: false,
        autoplay: {
          delay: 3500,
          disableOnInteraction: false
        },
        class: "pb-3 w-full",
        modules: [unref(Autoplay), unref(Pagination), unref(Navigation)],
        navigation: true,
        mousewheel: true,
        keyboard: true
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(7, (item) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), {
                key: item,
                style: { "width": "22% !important", "height": "95% !important" },
                class: "group relative mx-2 mb-3 hover:shadow-hero hover:bg-[#D9D9D940] border border-[#00000040] transition-all ease-in-out duration-200 rounded-xl flex flex-col justify-center items-center cursor-pointer"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="rounded-xl mb-3 text-center mt-6 border"${_scopeId2}><img class="border border-[#e6e6e6]"${ssrRenderAttr("src", `/product/iron-${item}.png`)} alt="" height="262" loading="lazy"${_scopeId2}><div class="text-3xl font-alatsi text-[#3C4242] mt-3 mb-1"${_scopeId2}> Knitted Joggers </div></div><div class="group/edit group is-published absolute z-10 top-2.5 right-2.5 w-11 h-11 flex items-center justify-center rounded-full border border-[#44A4DB] text-[#44A4DB] hover:text-red-700"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_IconLikeRed, {
                      onClick: () => {
                      },
                      class: "w-6 h-6 mx-auto"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "rounded-xl mb-3 text-center mt-6 border" }, [
                        createVNode("img", {
                          class: "border border-[#e6e6e6]",
                          src: `/product/iron-${item}.png`,
                          alt: "",
                          height: "262",
                          loading: "lazy"
                        }, null, 8, ["src"]),
                        createVNode("div", { class: "text-3xl font-alatsi text-[#3C4242] mt-3 mb-1" }, " Knitted Joggers ")
                      ]),
                      createVNode("div", {
                        onMouseenter: addRed,
                        onMouseleave: removeRed,
                        class: "group/edit group is-published absolute z-10 top-2.5 right-2.5 w-11 h-11 flex items-center justify-center rounded-full border border-[#44A4DB] text-[#44A4DB] hover:text-red-700"
                      }, [
                        createVNode(_component_IconLikeRed, {
                          onClick: () => {
                          },
                          class: "w-6 h-6 mx-auto"
                        }, null, 8, ["onClick"])
                      ], 32)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(7, (item) => {
                return createVNode(unref(SwiperSlide), {
                  key: item,
                  style: { "width": "22% !important", "height": "95% !important" },
                  class: "group relative mx-2 mb-3 hover:shadow-hero hover:bg-[#D9D9D940] border border-[#00000040] transition-all ease-in-out duration-200 rounded-xl flex flex-col justify-center items-center cursor-pointer"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "rounded-xl mb-3 text-center mt-6 border" }, [
                      createVNode("img", {
                        class: "border border-[#e6e6e6]",
                        src: `/product/iron-${item}.png`,
                        alt: "",
                        height: "262",
                        loading: "lazy"
                      }, null, 8, ["src"]),
                      createVNode("div", { class: "text-3xl font-alatsi text-[#3C4242] mt-3 mb-1" }, " Knitted Joggers ")
                    ]),
                    createVNode("div", {
                      onMouseenter: addRed,
                      onMouseleave: removeRed,
                      class: "group/edit group is-published absolute z-10 top-2.5 right-2.5 w-11 h-11 flex items-center justify-center rounded-full border border-[#44A4DB] text-[#44A4DB] hover:text-red-700"
                    }, [
                      createVNode(_component_IconLikeRed, {
                        onClick: () => {
                        },
                        class: "w-6 h-6 mx-auto"
                      }, null, 8, ["onClick"])
                    ], 32)
                  ]),
                  _: 2
                }, 1024);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroSwiperProduct.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _imports_0$1 = "" + __publicAssetsURL("special/spec-1.png");
const _imports_1$1 = "" + __publicAssetsURL("special/spec-2.png");
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "block" }, _attrs))}><div class="flex gap-5"><!--[-->`);
  ssrRenderList(3, (item) => {
    _push(`<img class="cursor-pointer hover:shadow-hero rounded-xl"${ssrRenderAttr("src", _imports_0$1)} alt="">`);
  });
  _push(`<!--]--></div><div class="flex gap-5 mt-5"><!--[-->`);
  ssrRenderList(2, (item) => {
    _push(`<img class="cursor-pointer hover:shadow-hero rounded-xl"${ssrRenderAttr("src", _imports_1$1)} alt="">`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroSpecials.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _imports_0 = "" + __buildAssetsURL("chevron-right.d0c96202.svg");
const _imports_1 = "" + __publicAssetsURL("logo1.png");
const _imports_2 = "" + __publicAssetsURL("logo2.jpg");
const _imports_3 = "" + __publicAssetsURL("logo3.png");
const _imports_4 = "" + __publicAssetsURL("logo4.png");
const _imports_5 = "" + __publicAssetsURL("logo5.png");
const _imports_6 = "" + __publicAssetsURL("logo-1.png");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    ref(null);
    ref(null);
    useUserStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MainSwiper = _sfc_main$6;
      const _component_HeroSwiper = _sfc_main$5;
      const _component_MainInfo = __nuxt_component_2;
      const _component_HeroSwiperProduct = _sfc_main$2;
      const _component_HeroSpecials = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="w-[1448px] h-[544px] mx-auto">`);
      _push(ssrRenderComponent(_component_MainSwiper, null, null, _parent));
      _push(`</div><div class="block w-[1238px] mx-auto mt-[92px]"><div class="flex justify-between"><p class="font-alatsi text-4xl text-[#3C4242] border-l-[6px] border-[#8A33FD] pl-[14px]"> Categories </p><div class="flex cursor-pointer items-center"><p class="font-alatsi inline text-3xl text-[#3C4242]">View All</p><img class="inline h-[34px]" height=""${ssrRenderAttr("src", _imports_0)} alt=""></div></div><div class="h-[358px] mt-7">`);
      _push(ssrRenderComponent(_component_HeroSwiper, { class: "" }, null, _parent));
      _push(`</div></div><div class="block w-[1238px] mx-auto mt-[100px]">`);
      _push(ssrRenderComponent(_component_MainInfo, null, null, _parent));
      _push(`</div><div class="block w-[1238px] mx-auto mt-[92px]"><div class="flex justify-between"><p class="font-alatsi text-4xl text-[#3C4242] border-l-[6px] border-[#44A4DB] pl-[14px]"> Categories </p><div class="flex cursor-pointer items-center"><p class="font-alatsi inline text-3xl text-[#3C4242]">View All</p><img class="inline h-[34px]" height=""${ssrRenderAttr("src", _imports_0)} alt=""></div></div><div class="h-[358px] mt-7">`);
      _push(ssrRenderComponent(_component_HeroSwiperProduct, { class: "" }, null, _parent));
      _push(`</div></div><div class="block h-auto w-[1238px] mx-auto mt-[92px]"><div class="flex justify-center"><p class="font-alatsi text-4xl text-[#3C4242] border-l-[6px] border-[#8A33FD] pl-[14px]"> Specials </p></div><div class="h-auto mt-7">`);
      _push(ssrRenderComponent(_component_HeroSpecials, { class: "" }, null, _parent));
      _push(`</div></div><div class="block w-[1238px] mx-auto mt-[92px]"><div class="flex justify-between"><p class="font-alatsi text-4xl text-[#3C4242] border-l-[6px] border-[#44A4DB] pl-[14px]"> Trending Products </p><div class="flex cursor-pointer items-center"><p class="font-alatsi inline text-3xl text-[#3C4242]">View All</p><img class="inline h-[34px]" height=""${ssrRenderAttr("src", _imports_0)} alt=""></div></div><div class="h-[358px] mt-7">`);
      _push(ssrRenderComponent(_component_HeroSwiperProduct, { class: "" }, null, _parent));
      _push(`</div></div><div class="flex items-center w-[1440px] mx-auto mt-[92px] h-[125px]"><div class="flex w-full justify-between"><img class="grayscale hover:grayscale-0 transition-all duration-75 cursor-pointer min-h-[80px] max-h-[80px]"${ssrRenderAttr("src", _imports_1)} alt=""><img class="grayscale hover:grayscale-0 transition-all duration-75 cursor-pointer min-h-[80px] max-h-[80px]"${ssrRenderAttr("src", _imports_2)} alt=""><img class="grayscale bg-gray-500 hover:grayscale-0 transition-all duration-75 cursor-pointer min-h-[80px] max-h-[80px]"${ssrRenderAttr("src", _imports_3)} alt=""><img class="grayscale hover:grayscale-0 transition-all duration-75 cursor-pointer min-h-[80px] max-h-[80px]"${ssrRenderAttr("src", _imports_4)} alt=""><img class="grayscale hover:grayscale-0 transition-all duration-75 cursor-pointer min-h-[80px] max-h-[80px]"${ssrRenderAttr("src", _imports_5)} alt=""><img class="text-black grayscale hover:grayscale-0 transition-all duration-75 cursor-pointer min-h-[80px] max-h-[80px]"${ssrRenderAttr("src", _imports_6)} alt=""></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-104e2199.js.map
