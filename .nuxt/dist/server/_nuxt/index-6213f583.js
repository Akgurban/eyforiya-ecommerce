import { useSSRContext, unref, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, ref } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderAttrs } from "vue/server-renderer";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";
/* empty css                     */import "hookable";
import "destr";
import "devalue";
import "klona";
import { _ as _export_sfc } from "../server.mjs";
import { _ as __nuxt_component_3$1 } from "./trash-d8d1b74e.js";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "vue-router";
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
const MainSwiper_vue_vue_type_style_index_0_lang = "";
const _sfc_main$4 = {
  __name: "MainSwiper",
  __ssrInlineRender: true,
  setup(__props) {
    const renderBullet = (index, className) => {
      return '<span class="' + className + '"> </span>';
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Swiper), mergeProps({
        spaceBetween: 29,
        slidesPerView: 1,
        effect: "fade",
        loop: true,
        centeredSlides: false,
        autoplay: {
          delay: 3500,
          disableOnInteraction: false
        },
        modules: [unref(Autoplay), unref(Pagination), unref(Navigation), unref(EffectFade)],
        navigation: true,
        pagination: { clickable: true, renderBullet },
        style: { "width": "100% !important", "height": "100% !important", "user-select": "none !important" },
        mousewheel: true,
        keyboard: true,
        class: "mb-5 w-full h-full select-none"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(5, (item) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), {
                key: item,
                style: { "width": "100% !important", "height": "100% !important" },
                class: "select-none group w-full h-full cursor-pointer"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="select-none rounded-xl w-full h-full"${_scopeId2}><img class="border select-none pointer-events-none border-[#e6e6e6] object-cover w-full h-full transition-all ease-in-out duration-200"${ssrRenderAttr("src", `/banner/banner_${item}.png`)} alt="" loading="lazy"${_scopeId2}></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "select-none rounded-xl w-full h-full" }, [
                        createVNode("img", {
                          class: "border select-none pointer-events-none border-[#e6e6e6] object-cover w-full h-full transition-all ease-in-out duration-200",
                          src: `/banner/banner_${item}.png`,
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
              (openBlock(), createBlock(Fragment, null, renderList(5, (item) => {
                return createVNode(unref(SwiperSlide), {
                  key: item,
                  style: { "width": "100% !important", "height": "100% !important" },
                  class: "select-none group w-full h-full cursor-pointer"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "select-none rounded-xl w-full h-full" }, [
                      createVNode("img", {
                        class: "border select-none pointer-events-none border-[#e6e6e6] object-cover w-full h-full transition-all ease-in-out duration-200",
                        src: `/banner/banner_${item}.png`,
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MainSwiper.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const HeroSwiperCategory_vue_vue_type_style_index_0_scoped_daf5e8e5_lang = "";
const _sfc_main$3 = {
  __name: "HeroSwiperCategory",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Swiper), mergeProps({
        spaceBetween: 5,
        slidesPerView: _ctx.$width.value == "desktop" ? 4 : 2,
        loop: true,
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
        style: { "width": "98% !important", "padding-bottom": "10px !important" }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(6, (item) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), {
                key: item,
                class: "group mx-2 mb-3 hover:shadow-hero hover:bg-[#D9D9D940] transition-all ease-in-out duration-200 rounded-xl flex flex-col justify-center items-center cursor-pointer"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="rounded-xl mb-3 text-center mt-6" data-v-daf5e8e5${_scopeId2}><img class="border border-[#e6e6e6]"${ssrRenderAttr("src", `/categories/cat-${item}.png`)} alt="" height="262" loading="lazy" data-v-daf5e8e5${_scopeId2}><div class="md:text-3xl text-base font-alatsi text-[#3C4242] mt-3 mb-1" data-v-daf5e8e5${_scopeId2}>${ssrInterpolate(_ctx.$width)}</div></div>`);
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
                        createVNode("div", { class: "md:text-3xl text-base font-alatsi text-[#3C4242] mt-3 mb-1" }, toDisplayString(_ctx.$width), 1)
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
                      createVNode("div", { class: "md:text-3xl text-base font-alatsi text-[#3C4242] mt-3 mb-1" }, toDisplayString(_ctx.$width), 1)
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroSwiperCategory.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-daf5e8e5"]]);
const _sfc_main$2 = {
  __name: "MainInfo",
  __ssrInlineRender: true,
  setup(__props) {
    const icons = ref([
      { name: "40358", desc: "visits to our vebsite", img: "visit.png" },
      { name: "403", desc: "items sold so far", img: "sold.png" },
      { name: "15", desc: "our global partners", img: "brand.png" },
      { name: "2232", desc: "products in the website", img: "products.png" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex md:w-full w-screen flex-wrap justify-between md:justify-between border-y border-[#00000026] md:py-8 py-2 px-6" }, _attrs))}><!--[-->`);
      ssrRenderList(unref(icons), (item) => {
        _push(`<div class="flex items-center my-2 md:flex-row flex-col"><img${ssrRenderAttr("src", item.img)} alt=""><div class="text-center ml-3"><p class="font-alatsi md:text-[45px] text-2xl text-[#3C4242] leading-[33px]">${ssrInterpolate(item.name)}</p><p class="font-alatsi mtext-base text-[#000] mt-2">${ssrInterpolate(item.desc)}</p></div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MainInfo.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _imports_0$1 = "" + __buildAssetsURL("add_cart.59b43ee5.svg");
const HeroSwiperProduct_vue_vue_type_style_index_0_scoped_9e73fc12_lang = "";
const _sfc_main$1 = {
  __name: "HeroSwiperProduct",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconTrash = __nuxt_component_3$1;
      _push(ssrRenderComponent(unref(Swiper), mergeProps({
        spaceBetween: 5,
        slidesPerView: _ctx.$width.value == "desktop" ? 4 : 2,
        loop: true,
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
        style: { "width": "98% !important", "height": "auto !important", "padding-bottom": "20px !important" }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(6, (item) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), {
                key: item,
                style: { "height": "fit-content !important" },
                class: "group mx-2 mb-3 hover:shadow-hero hover:bg-[#D9D9D940] transition-all ease-in-out duration-200 rounded-xl flex flex-col justify-center items-center cursor-pointer"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="rounded-xl mb-3 text-center mt-6" data-v-9e73fc12${_scopeId2}><img class="border border-[#e6e6e6]"${ssrRenderAttr("src", `/categories/cat-${item}.png`)} alt="" height="262" loading="lazy" data-v-9e73fc12${_scopeId2}><div class="w-fit mx-auto md:text-3xl text-base font-alatsi text-[#3C4242] mt-3 mb-1" data-v-9e73fc12${_scopeId2}> Raf-utuk-r126 </div><div class="mx-auto text-[#48BC4E] text-3xl font-alatsi w-fit pb-1 border-b border-[#44A4DB]" data-v-9e73fc12${_scopeId2}> 158 TMT </div><div class="relative mt-5 mb-3" data-v-9e73fc12${_scopeId2}><img class="mx-auto"${ssrRenderAttr("src", _imports_0$1)} alt="" data-v-9e73fc12${_scopeId2}><div class="absolute top-0 right-1/2 translate-x-1/2 flex items-center gap-3 text-white h-fit" data-v-9e73fc12${_scopeId2}><div class="md:text-2xl text-lg font-alatsi whitespace-nowrap" data-v-9e73fc12${_scopeId2}> Sebede goş </div>`);
                    _push3(ssrRenderComponent(_component_IconTrash, { class: "inline mt-1 md:w-9 w-6 md:h-9 h-6" }, null, _parent3, _scopeId2));
                    _push3(`</div></div></div>`);
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
                        createVNode("div", { class: "w-fit mx-auto md:text-3xl text-base font-alatsi text-[#3C4242] mt-3 mb-1" }, " Raf-utuk-r126 "),
                        createVNode("div", { class: "mx-auto text-[#48BC4E] text-3xl font-alatsi w-fit pb-1 border-b border-[#44A4DB]" }, " 158 TMT "),
                        createVNode("div", { class: "relative mt-5 mb-3" }, [
                          createVNode("img", {
                            class: "mx-auto",
                            src: _imports_0$1,
                            alt: ""
                          }),
                          createVNode("div", { class: "absolute top-0 right-1/2 translate-x-1/2 flex items-center gap-3 text-white h-fit" }, [
                            createVNode("div", { class: "md:text-2xl text-lg font-alatsi whitespace-nowrap" }, " Sebede goş "),
                            createVNode(_component_IconTrash, { class: "inline mt-1 md:w-9 w-6 md:h-9 h-6" })
                          ])
                        ])
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
                  style: { "height": "fit-content !important" },
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
                      createVNode("div", { class: "w-fit mx-auto md:text-3xl text-base font-alatsi text-[#3C4242] mt-3 mb-1" }, " Raf-utuk-r126 "),
                      createVNode("div", { class: "mx-auto text-[#48BC4E] text-3xl font-alatsi w-fit pb-1 border-b border-[#44A4DB]" }, " 158 TMT "),
                      createVNode("div", { class: "relative mt-5 mb-3" }, [
                        createVNode("img", {
                          class: "mx-auto",
                          src: _imports_0$1,
                          alt: ""
                        }),
                        createVNode("div", { class: "absolute top-0 right-1/2 translate-x-1/2 flex items-center gap-3 text-white h-fit" }, [
                          createVNode("div", { class: "md:text-2xl text-lg font-alatsi whitespace-nowrap" }, " Sebede goş "),
                          createVNode(_component_IconTrash, { class: "inline mt-1 md:w-9 w-6 md:h-9 h-6" })
                        ])
                      ])
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroSwiperProduct.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-9e73fc12"]]);
const _imports_0 = "" + __buildAssetsURL("chevron-right.d0c96202.svg");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    ref(null);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MainSwiper = _sfc_main$4;
      const _component_HeroSwiperCategory = __nuxt_component_1;
      const _component_MainInfo = _sfc_main$2;
      const _component_HeroSwiperProduct = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="xl:w-[1196px] rounded-md overflow-hidden select-none w-full aspect-[21/10] mx-auto">`);
      _push(ssrRenderComponent(_component_MainSwiper, null, null, _parent));
      _push(`</div><div class="block xl:w-[1238px] w-full mx-auto md:mt-[92px] mt-4"><div class="flex justify-between"><p class="font-alatsi md:text-4xl text-xl text-[#3C4242] border-l-[6px] border-[#8A33FD] pl-[14px]"> Categories </p><div class="flex cursor-pointer items-center"><p class="font-alatsi inline md:text-3xl text-lg text-[#3C4242]"> View All </p><img class="inline h-[34px]" height=""${ssrRenderAttr("src", _imports_0)} alt=""></div></div><div class="md:h-[358px] h-[250px] md:mt-7 mt-1">`);
      _push(ssrRenderComponent(_component_HeroSwiperCategory, { class: "" }, null, _parent));
      _push(`</div></div><div class="block xl:w-[1238px] md:w-full w-full mx-auto mt-4 md:mt-[100px]">`);
      _push(ssrRenderComponent(_component_MainInfo, null, null, _parent));
      _push(`</div><div class="block xl:w-[1238px] w-full mx-auto md:mt-[92px] mt-4"><div class="flex justify-between"><p class="font-alatsi md:text-4xl text-xl text-[#3C4242] border-l-[6px] border-[#8A33FD] pl-[14px]"> Latest products </p><div class="flex cursor-pointer items-center"><p class="font-alatsi inline md:text-3xl text-lg text-[#3C4242]"> View All </p><img class="inline h-[34px]" height=""${ssrRenderAttr("src", _imports_0)} alt=""></div></div><div class="block md:h-auto h-auto md:mt-7 mt-1">`);
      _push(ssrRenderComponent(_component_HeroSwiperProduct, { class: "" }, null, _parent));
      _push(`</div></div></div>`);
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
//# sourceMappingURL=index-6213f583.js.map
