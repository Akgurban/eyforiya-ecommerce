import { useSSRContext, unref, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, withAsyncContext, toDisplayString, ref } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderAttrs } from "vue/server-renderer";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";
/* empty css                     */import { _ as _export_sfc, f as useI18n, b as useRouter } from "../server.mjs";
import { u as useMyFetch, _ as _sfc_main$6 } from "./useMyFetch-b388ac84.js";
import "hookable";
import "destr";
import "devalue";
import "klona";
import { u as useTrashStore } from "./trash-78aab052.js";
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
import "./trash-d8d1b74e.js";
import "./authStore-a41c077e.js";
const MainSwiper_vue_vue_type_style_index_0_lang = "";
const _sfc_main$5 = {
  __name: "MainSwiper",
  __ssrInlineRender: true,
  setup(__props) {
    const renderBullet = (index2, className) => {
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
                style: { "width": "100% !important", "height": "100% !important", "user-select": "none !important", "pointer-events": "none !important" },
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
                  style: { "width": "100% !important", "height": "100% !important", "user-select": "none !important", "pointer-events": "none !important" },
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MainSwiper.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const HeroSwiperCategory_vue_vue_type_style_index_0_scoped_4dbea5a7_lang = "";
const _sfc_main$4 = {
  __name: "HeroSwiperCategory",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { locale } = useI18n();
    const { data: categories } = ([__temp, __restore] = withAsyncContext(() => useMyFetch(
      `/api/v1/client/products/categories?lang=${locale.value}`
    )), __temp = await __temp, __restore(), __temp);
    console.log(categories, "data");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Swiper), mergeProps({
        spaceBetween: 5,
        slidesPerView: _ctx.$width.value == "desktop" ? 4 : 2,
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
            ssrRenderList(unref(categories).data, (item) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), {
                key: item,
                onClick: ($event) => ("useRouter" in _ctx ? _ctx.useRouter : unref(useRouter))().push(`filtered-product/${item.uuid}?filter=[]`),
                class: "group mb-3 hover:shadow-hero hover:bg-[#D9D9D940] transition-all ease-in-out duration-200 rounded-xl flex flex-col justify-center items-center cursor-pointer"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="rounded-xl mb-3 text-center mt-6" data-v-4dbea5a7${_scopeId2}><img class="border border-[#e6e6e6] w-[262px] h-[210px] md:h-[262px] object-cover"${ssrRenderAttr("src", `http://duypbaha.com.tm/api/v1/uploads/categories/${item.img_path}`)} alt="" loading="lazy" data-v-4dbea5a7${_scopeId2}><div class="md:text-3xl text-lg font-alatsi text-[#3C4242] mt-0 md:mt-3 mb-1" data-v-4dbea5a7${_scopeId2}>${ssrInterpolate(item.name)}</div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "rounded-xl mb-3 text-center mt-6" }, [
                        createVNode("img", {
                          class: "border border-[#e6e6e6] w-[262px] h-[210px] md:h-[262px] object-cover",
                          src: `http://duypbaha.com.tm/api/v1/uploads/categories/${item.img_path}`,
                          alt: "",
                          loading: "lazy"
                        }, null, 8, ["src"]),
                        createVNode("div", { class: "md:text-3xl text-lg font-alatsi text-[#3C4242] mt-0 md:mt-3 mb-1" }, toDisplayString(item.name), 1)
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
              (openBlock(true), createBlock(Fragment, null, renderList(unref(categories).data, (item) => {
                return openBlock(), createBlock(unref(SwiperSlide), {
                  key: item,
                  onClick: ($event) => ("useRouter" in _ctx ? _ctx.useRouter : unref(useRouter))().push(`filtered-product/${item.uuid}?filter=[]`),
                  class: "group mb-3 hover:shadow-hero hover:bg-[#D9D9D940] transition-all ease-in-out duration-200 rounded-xl flex flex-col justify-center items-center cursor-pointer"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "rounded-xl mb-3 text-center mt-6" }, [
                      createVNode("img", {
                        class: "border border-[#e6e6e6] w-[262px] h-[210px] md:h-[262px] object-cover",
                        src: `http://duypbaha.com.tm/api/v1/uploads/categories/${item.img_path}`,
                        alt: "",
                        loading: "lazy"
                      }, null, 8, ["src"]),
                      createVNode("div", { class: "md:text-3xl text-lg font-alatsi text-[#3C4242] mt-0 md:mt-3 mb-1" }, toDisplayString(item.name), 1)
                    ])
                  ]),
                  _: 2
                }, 1032, ["onClick"]);
              }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroSwiperCategory.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-4dbea5a7"]]);
const _sfc_main$3 = {
  __name: "MainInfo",
  __ssrInlineRender: true,
  setup(__props) {
    const icons = ref([
      { name: "40358", desc: "visit_web", img: "visit.png" },
      { name: "403", desc: "items_sold", img: "sold.png" },
      { name: "15", desc: "our_partners", img: "brand.png" },
      { name: "2232", desc: "products_website", img: "products.png" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex md:w-full w-screen flex-wrap justify-between md:justify-between border-y border-[#00000026] md:py-8 py-2 px-6" }, _attrs))}><!--[-->`);
      ssrRenderList(unref(icons), (item) => {
        _push(`<div class="flex items-center my-2 md:flex-row flex-col"><img${ssrRenderAttr("src", item.img)} alt=""><div class="text-center ml-3"><p class="font-alatsi md:text-[45px] text-2xl text-[#3C4242] leading-[33px]">${ssrInterpolate(item.name)}</p><p class="font-alatsi font-medium text-base text-[#000] mt-2 w-[150px]">${ssrInterpolate(_ctx.$t(item.desc))}</p></div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MainInfo.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const HeroSwiperProduct_vue_vue_type_style_index_0_scoped_293588b4_lang = "";
const _sfc_main$2 = {
  __name: "HeroSwiperProduct",
  __ssrInlineRender: true,
  setup(__props) {
    ref(0);
    useTrashStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TrashButtonAndCounter = _sfc_main$6;
      _push(ssrRenderComponent(unref(Swiper), mergeProps({
        spaceBetween: 5,
        slidesPerView: _ctx.$width.value == "desktop" ? 4 : 2,
        loop: true,
        autoplay: {
          delay: 377500,
          disableOnInteraction: false
        },
        class: "pb-3",
        modules: [unref(Autoplay), unref(Pagination), unref(Navigation)],
        navigation: true,
        mousewheel: true,
        keyboard: true,
        style: { "width": "97% !important", "height": "auto !important", "user-select": "none !important", "padding-bottom": "20px !important" }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(6, (item, index2) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), {
                key: item,
                draggable: "true",
                class: "group product_item mb-3 hover:shadow-none md:hover:shadow-hero hover:bg-[#D9D9D940] transition-all ease-in-out duration-200 rounded-xl flex flex-col justify-center items-center"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="rounded-xl text-center mt-6" data-v-293588b4${_scopeId2}><img class="border pointer-events-none select-none border-[#e6e6e6]"${ssrRenderAttr("src", `/categories/cat-${item}.png`)} alt="" height="262" loading="lazy" data-v-293588b4${_scopeId2}><div class="w-fit mx-auto md:text-3xl text-base font-alatsi text-[#3C4242] mt-3 mb-1" data-v-293588b4${_scopeId2}> Raf-utuk-r126 </div><div class="mx-auto text-[#48BC4E] text-3xl font-alatsi w-fit pb-1 border-b border-[#44A4DB]" data-v-293588b4${_scopeId2}> 158 TMT </div></div>`);
                    _push3(ssrRenderComponent(_component_TrashButtonAndCounter, null, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode("div", { class: "rounded-xl text-center mt-6" }, [
                        createVNode("img", {
                          class: "border pointer-events-none select-none border-[#e6e6e6]",
                          src: `/categories/cat-${item}.png`,
                          alt: "",
                          height: "262",
                          loading: "lazy"
                        }, null, 8, ["src"]),
                        createVNode("div", { class: "w-fit mx-auto md:text-3xl text-base font-alatsi text-[#3C4242] mt-3 mb-1" }, " Raf-utuk-r126 "),
                        createVNode("div", { class: "mx-auto text-[#48BC4E] text-3xl font-alatsi w-fit pb-1 border-b border-[#44A4DB]" }, " 158 TMT ")
                      ]),
                      createVNode(_component_TrashButtonAndCounter)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(6, (item, index2) => {
                return createVNode(unref(SwiperSlide), {
                  key: item,
                  draggable: "true",
                  class: "group product_item mb-3 hover:shadow-none md:hover:shadow-hero hover:bg-[#D9D9D940] transition-all ease-in-out duration-200 rounded-xl flex flex-col justify-center items-center"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "rounded-xl text-center mt-6" }, [
                      createVNode("img", {
                        class: "border pointer-events-none select-none border-[#e6e6e6]",
                        src: `/categories/cat-${item}.png`,
                        alt: "",
                        height: "262",
                        loading: "lazy"
                      }, null, 8, ["src"]),
                      createVNode("div", { class: "w-fit mx-auto md:text-3xl text-base font-alatsi text-[#3C4242] mt-3 mb-1" }, " Raf-utuk-r126 "),
                      createVNode("div", { class: "mx-auto text-[#48BC4E] text-3xl font-alatsi w-fit pb-1 border-b border-[#44A4DB]" }, " 158 TMT ")
                    ]),
                    createVNode(_component_TrashButtonAndCounter)
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
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-293588b4"]]);
const _imports_0$1 = "" + __publicAssetsURL("special/spec-1.png");
const _imports_1$1 = "" + __publicAssetsURL("special/spec-2.png");
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "block w-full overflow-hidden" }, _attrs))}><div class="flex w-full"><!--[-->`);
  ssrRenderList(3, (item) => {
    _push(`<div class="p-1 md:p-3 md:w-1/3 w-1/2 md:last:block last:hidden"><img class="cursor-pointer hover:shadow-hero rounded-xl"${ssrRenderAttr("src", _imports_0$1)} alt=""></div>`);
  });
  _push(`<!--]--></div><div class="flex w-full"><!--[-->`);
  ssrRenderList(2, (item) => {
    _push(`<div class="p-1 md:p-3 md:w-1/2 w-full md:last:block last:hidden"><img class="cursor-pointer hover:shadow-hero rounded-xl"${ssrRenderAttr("src", _imports_1$1)} alt=""></div>`);
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
const index_vue_vue_type_style_index_0_scoped_b52d2140_lang = "";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    ref(null);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MainSwiper = _sfc_main$5;
      const _component_HeroSwiperCategory = __nuxt_component_1;
      const _component_MainInfo = _sfc_main$3;
      const _component_HeroSwiperProduct = __nuxt_component_3;
      const _component_HeroSpecials = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-b52d2140><div class="xl:w-[1196px] rounded-md overflow-hidden select-none w-full aspect-[21/10] mx-auto" data-v-b52d2140>`);
      _push(ssrRenderComponent(_component_MainSwiper, null, null, _parent));
      _push(`</div><div class="block xl:w-[1238px] w-full mx-auto md:mt-[92px] mt-4" data-v-b52d2140><div class="flex justify-between" data-v-b52d2140><p class="font-alatsi font-medium md:text-4xl text-xl text-[#3C4242] border-l-[6px] border-[#8A33FD] pl-[14px]" data-v-b52d2140>${ssrInterpolate(_ctx.$t("categories"))}</p><div class="flex cursor-pointer items-center" data-v-b52d2140><p class="font-alatsi font-medium inline md:text-3xl text-lg text-[#3C4242]" data-v-b52d2140>${ssrInterpolate(_ctx.$t("view_all"))}</p><img class="inline h-[34px]" height=""${ssrRenderAttr("src", _imports_0)} alt="" data-v-b52d2140></div></div><div class="md:h-[358px] h-[250px] md:mt-7 mt-1" data-v-b52d2140>`);
      _push(ssrRenderComponent(_component_HeroSwiperCategory, { class: "" }, null, _parent));
      _push(`</div></div><div class="block xl:w-[1238px] md:w-full w-full mx-auto mt-4 md:mt-[100px]" data-v-b52d2140>`);
      _push(ssrRenderComponent(_component_MainInfo, null, null, _parent));
      _push(`</div><div class="block xl:w-[1238px] w-full mx-auto md:mt-[92px] mt-4" data-v-b52d2140><div class="flex justify-between" data-v-b52d2140><p class="font-alatsi font-medium md:text-4xl text-xl text-[#3C4242] border-l-[6px] border-[#8A33FD] pl-[14px]" data-v-b52d2140>${ssrInterpolate(_ctx.$t("latest_products"))}</p><div class="flex cursor-pointer items-center" data-v-b52d2140><p class="font-alatsi font-medium inline md:text-3xl text-lg text-[#3C4242]" data-v-b52d2140>${ssrInterpolate(_ctx.$t("view_all"))}</p><img class="inline h-[34px]" height=""${ssrRenderAttr("src", _imports_0)} alt="" data-v-b52d2140></div></div><div class="block md:h-auto h-auto md:mt-7 mt-1" data-v-b52d2140>`);
      _push(ssrRenderComponent(_component_HeroSwiperProduct, { class: "" }, null, _parent));
      _push(`</div></div><div class="block h-auto xl:w-[1238px] w-screen mx-auto md:mt-[92px] mt-4" data-v-b52d2140><div class="flex justify-center" data-v-b52d2140><p class="font-alatsi font-medium md:text-4xl text-xl text-[#3C4242] border-l-[6px] border-[#8A33FD] pl-[14px]" data-v-b52d2140>${ssrInterpolate(_ctx.$t("specials"))}</p></div><div class="h-auto w-full mt-7" data-v-b52d2140>`);
      _push(ssrRenderComponent(_component_HeroSpecials, { class: "" }, null, _parent));
      _push(`</div></div><div class="block xl:w-[1238px] w-full mx-auto md:mt-[92px] mt-4" data-v-b52d2140><div class="flex justify-between" data-v-b52d2140><p class="font-alatsi font-medium md:text-4xl text-xl text-[#3C4242] border-l-[6px] border-[#8A33FD] pl-[14px]" data-v-b52d2140>${ssrInterpolate(_ctx.$t("latest_products"))}</p><div class="flex cursor-pointer items-center" data-v-b52d2140><p class="font-alatsi font-medium inline md:text-3xl text-lg text-[#3C4242]" data-v-b52d2140>${ssrInterpolate(_ctx.$t("view_all"))}</p><img class="inline h-[34px]" height=""${ssrRenderAttr("src", _imports_0)} alt="" data-v-b52d2140></div></div><div class="block md:h-auto h-auto md:mt-7 mt-1" data-v-b52d2140>`);
      _push(ssrRenderComponent(_component_HeroSwiperProduct, { class: "" }, null, _parent));
      _push(`</div></div><div class="flex items-center 2xl:w-[1440px] w-screen overflow-hidden mx-auto mt-4 md:mt-[92px] h-[125px]" data-v-b52d2140><div class="flex justify-around md:min-w-full min-w-[800px] animation_brands" data-v-b52d2140><img class="grayscale mx-5 hover:grayscale-0 transition-all duration-75 cursor-pointer min-h-[80px] max-h-[80px]"${ssrRenderAttr("src", _imports_1)} alt="" data-v-b52d2140><img class="grayscale mx-5 hover:grayscale-0 transition-all duration-75 cursor-pointer min-h-[80px] max-h-[80px]"${ssrRenderAttr("src", _imports_2)} alt="" data-v-b52d2140><img class="grayscale mx-5 bg-gray-500 hover:grayscale-0 transition-all duration-75 cursor-pointer min-h-[80px] max-h-[80px]"${ssrRenderAttr("src", _imports_3)} alt="" data-v-b52d2140><img class="grayscale mx-5 hover:grayscale-0 transition-all duration-75 cursor-pointer min-h-[80px] max-h-[80px]"${ssrRenderAttr("src", _imports_4)} alt="" data-v-b52d2140><img class="grayscale mx-5 hover:grayscale-0 transition-all duration-75 cursor-pointer min-h-[80px] max-h-[80px]"${ssrRenderAttr("src", _imports_5)} alt="" data-v-b52d2140><img class="text-black grayscale mx-5 hover:grayscale-0 transition-all duration-75 cursor-pointer min-h-[80px] max-h-[80px]"${ssrRenderAttr("src", _imports_6)} alt="" data-v-b52d2140></div><div class="flex md:min-w-full min-w-[800px] justify-around animation_brands" data-v-b52d2140><img class="grayscale mx-5 hover:grayscale-0 transition-all duration-75 cursor-pointer min-h-[80px] max-h-[80px]"${ssrRenderAttr("src", _imports_1)} alt="" data-v-b52d2140><img class="grayscale mx-5 hover:grayscale-0 transition-all duration-75 cursor-pointer min-h-[80px] max-h-[80px]"${ssrRenderAttr("src", _imports_2)} alt="" data-v-b52d2140><img class="grayscale mx-5 bg-gray-500 hover:grayscale-0 transition-all duration-75 cursor-pointer min-h-[80px] max-h-[80px]"${ssrRenderAttr("src", _imports_3)} alt="" data-v-b52d2140><img class="grayscale mx-5 hover:grayscale-0 transition-all duration-75 cursor-pointer min-h-[80px] max-h-[80px]"${ssrRenderAttr("src", _imports_4)} alt="" data-v-b52d2140><img class="grayscale mx-5 hover:grayscale-0 transition-all duration-75 cursor-pointer min-h-[80px] max-h-[80px]"${ssrRenderAttr("src", _imports_5)} alt="" data-v-b52d2140><img class="text-black grayscale mx-5 hover:grayscale-0 transition-all duration-75 cursor-pointer min-h-[80px] max-h-[80px]"${ssrRenderAttr("src", _imports_6)} alt="" data-v-b52d2140></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b52d2140"]]);
export {
  index as default
};
//# sourceMappingURL=index-369b3031.js.map
