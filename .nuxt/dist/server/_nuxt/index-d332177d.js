import { _ as __nuxt_component_0 } from "./nuxt-link-744fccd2.js";
import { u as useMyFetch } from "./useMyFetch-a8a165b0.js";
import { useSSRContext, withAsyncContext, unref, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, ref } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderAttrs } from "vue/server-renderer";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";
/* empty css                     */import { h as useI18n, a as useRouter, u as useHead } from "../server.mjs";
import "hookable";
import "destr";
import "devalue";
import "klona";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import { _ as _sfc_main$7 } from "./base-product-da75b566.js";
import { a as useTrashStore } from "./trash-594b124b.js";
import "./index-e12b288f.js";
import "ufo";
import "./fetch-ba2ed0c4.js";
import "ohash";
import "./authStore-0ffe80fc.js";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "vue-router";
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
import "vue-awesome-paginate";
import "defu";
import "./like-a54ff78c.js";
import "./TrashButtonAndCounter-1ad512d4.js";
import "./trash-68d2590c.js";
import "./favourite-8f2b0c65.js";
const MainSwiper_vue_vue_type_style_index_0_lang = "";
const _sfc_main$6 = {
  __name: "MainSwiper",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const renderBullet = (index2, className) => {
      return '<span class="' + className + '"> </span>';
    };
    const { data: banners } = ([__temp, __restore] = withAsyncContext(() => useMyFetch(`/api/v1/client/products/banners`)), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
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
          var _a, _b;
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList((_a = unref(banners)) == null ? void 0 : _a.data, (item) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), {
                key: item.uuid,
                style: { "width": "100% !important", "height": "100% !important", "user-select": "none !important" },
                class: "group w-full h-full cursor-pointer"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_NuxtLink, {
                      to: item == null ? void 0 : item.brand_name,
                      class: "rounded-xl w-full h-full"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<img class="border border-[#e6e6e6] object-cover w-full h-full transition-all ease-in-out duration-200"${ssrRenderAttr("src", `http://duypbaha.com.tm/api/v1/uploads/banners/${item == null ? void 0 : item.img_path}`)} alt="" lazy="true"${_scopeId3}>`);
                        } else {
                          return [
                            createVNode("img", {
                              class: "border border-[#e6e6e6] object-cover w-full h-full transition-all ease-in-out duration-200",
                              src: `http://duypbaha.com.tm/api/v1/uploads/banners/${item == null ? void 0 : item.img_path}`,
                              alt: "",
                              lazy: "true"
                            }, null, 8, ["src"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_NuxtLink, {
                        to: item == null ? void 0 : item.brand_name,
                        class: "rounded-xl w-full h-full"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "border border-[#e6e6e6] object-cover w-full h-full transition-all ease-in-out duration-200",
                            src: `http://duypbaha.com.tm/api/v1/uploads/banners/${item == null ? void 0 : item.img_path}`,
                            alt: "",
                            lazy: "true"
                          }, null, 8, ["src"])
                        ]),
                        _: 2
                      }, 1032, ["to"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList((_b = unref(banners)) == null ? void 0 : _b.data, (item) => {
                return openBlock(), createBlock(unref(SwiperSlide), {
                  key: item.uuid,
                  style: { "width": "100% !important", "height": "100% !important", "user-select": "none !important" },
                  class: "group w-full h-full cursor-pointer"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_NuxtLink, {
                      to: item == null ? void 0 : item.brand_name,
                      class: "rounded-xl w-full h-full"
                    }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          class: "border border-[#e6e6e6] object-cover w-full h-full transition-all ease-in-out duration-200",
                          src: `http://duypbaha.com.tm/api/v1/uploads/banners/${item == null ? void 0 : item.img_path}`,
                          alt: "",
                          lazy: "true"
                        }, null, 8, ["src"])
                      ]),
                      _: 2
                    }, 1032, ["to"])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
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
const HeroSwiperCategory_vue_vue_type_style_index_0_scoped_4eca57bb_lang = "";
const _sfc_main$5 = {
  __name: "HeroSwiperCategory",
  __ssrInlineRender: true,
  props: {
    count: { type: Number, default: 2 }
  },
  async setup(__props) {
    let __temp, __restore;
    const { locale } = useI18n();
    const { data: categories } = ([__temp, __restore] = withAsyncContext(() => useMyFetch(
      `/api/v1/client/products/categories?lang=${locale.value}`
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Swiper), mergeProps({
        spaceBetween: 5,
        slidesPerView: __props.count || 2,
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
                onClick: ($event) => ("useRouter" in _ctx ? _ctx.useRouter : unref(useRouter))().push(
                  _ctx.localePath({
                    path: `/filtered-product/${item == null ? void 0 : item.uuid}`,
                    query: { filter: "[]", p: 1 }
                  })
                ),
                class: "group mb-3 hover:shadow-hero rounded-md hover:bg-[#D9D9D940] transition-all ease-in-out duration-200 flex flex-col justify-center items-center cursor-pointer"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="rounded-xl mb-3 text-center mt-6" data-v-4eca57bb${_scopeId2}><img class="border rounded-md md:rounded-lg border-[#e6e6e6] w-[262px] h-[210px] md:h-[262px] object-cover"${ssrRenderAttr("src", `http://duypbaha.com.tm/api/v1/uploads/categories/${item.img_path}`)} alt="" loading="lazy" data-v-4eca57bb${_scopeId2}><div class="md:text-xl text-base font-semibold font-alatsi text-[#3C4242] mt-0 md:mt-3 mb-1" data-v-4eca57bb${_scopeId2}>${ssrInterpolate(item.name)}</div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "rounded-xl mb-3 text-center mt-6" }, [
                        createVNode("img", {
                          class: "border rounded-md md:rounded-lg border-[#e6e6e6] w-[262px] h-[210px] md:h-[262px] object-cover",
                          src: `http://duypbaha.com.tm/api/v1/uploads/categories/${item.img_path}`,
                          alt: "",
                          loading: "lazy"
                        }, null, 8, ["src"]),
                        createVNode("div", { class: "md:text-xl text-base font-semibold font-alatsi text-[#3C4242] mt-0 md:mt-3 mb-1" }, toDisplayString(item.name), 1)
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
                  onClick: ($event) => ("useRouter" in _ctx ? _ctx.useRouter : unref(useRouter))().push(
                    _ctx.localePath({
                      path: `/filtered-product/${item == null ? void 0 : item.uuid}`,
                      query: { filter: "[]", p: 1 }
                    })
                  ),
                  class: "group mb-3 hover:shadow-hero rounded-md hover:bg-[#D9D9D940] transition-all ease-in-out duration-200 flex flex-col justify-center items-center cursor-pointer"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "rounded-xl mb-3 text-center mt-6" }, [
                      createVNode("img", {
                        class: "border rounded-md md:rounded-lg border-[#e6e6e6] w-[262px] h-[210px] md:h-[262px] object-cover",
                        src: `http://duypbaha.com.tm/api/v1/uploads/categories/${item.img_path}`,
                        alt: "",
                        loading: "lazy"
                      }, null, 8, ["src"]),
                      createVNode("div", { class: "md:text-xl text-base font-semibold font-alatsi text-[#3C4242] mt-0 md:mt-3 mb-1" }, toDisplayString(item.name), 1)
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroSwiperCategory.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-4eca57bb"]]);
const _sfc_main$4 = {
  __name: "MainInfo",
  __ssrInlineRender: true,
  props: {
    rating: {
      type: Object,
      default: {}
    }
  },
  setup(__props) {
    const props = __props;
    const observe = ref();
    const icons = ref([
      { name: "40358", desc: "visit_web", img: "/visit.png" },
      { name: "403", desc: "items_sold", img: "/sold.png" },
      { name: "15", desc: "our_partners", img: "/brand.png" },
      { name: "2232", desc: "products_website", img: "/products.png" }
    ]);
    icons.value[0].name = props.rating.users;
    icons.value[1].name = props.rating.solved;
    icons.value[2].name = props.rating.brands;
    icons.value[3].name = props.rating.products;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "observe",
        ref: observe,
        class: "flex md:w-full w-screen flex-wrap justify-between md:justify-between border-y border-[#00000026] md:py-8 py-2 px-6"
      }, _attrs))}><!--[-->`);
      ssrRenderList(unref(icons), (item) => {
        _push(`<div class="flex items-center my-2 md:flex-row flex-col"><img${ssrRenderAttr("src", item.img)} alt=""><div class="text-center ml-3"><p${ssrRenderAttr("data-target", item.name)} class="counters font-alatsi md:text-[45px] font-bold text-2xl text-[#3C4242] leading-[33px]"> 0 </p><p class="font-alatsi font-medium text-base text-[#000] mt-2 w-[150px]">${ssrInterpolate(_ctx.$t(item.desc))}</p></div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MainInfo.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const HeroSwiperProduct_vue_vue_type_style_index_0_scoped_1ded2803_lang = "";
const _sfc_main$3 = {
  __name: "HeroSwiperProduct",
  __ssrInlineRender: true,
  props: {
    products: {
      type: Array,
      default: []
    },
    count: {
      type: Number,
      default: 4
    }
  },
  setup(__props) {
    const props = __props;
    ref(0);
    useTrashStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseProduct = _sfc_main$7;
      _push(ssrRenderComponent(unref(Swiper), mergeProps({
        spaceBetween: 5,
        slidesPerView: props.count,
        autoplay: {
          delay: 3500,
          disableOnInteraction: false
        },
        class: "pb-3",
        modules: [unref(Autoplay), unref(Pagination), unref(Navigation)],
        navigation: true,
        mousewheel: true,
        keyboard: true,
        style: { "width": "97% !important", "height": "auto !important", "padding-bottom": "20px !important" }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(__props.products, (item, index2) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), {
                key: item,
                class: "group product_item mb-3 mt-3 hover:shadow-none md:hover:shadow-hero hover:bg-[#D9D9D940] transition-all ease-in-out duration-200 rounded-xl flex flex-col justify-center items-center"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_BaseProduct, { item }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_BaseProduct, { item }, null, 8, ["item"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(__props.products, (item, index2) => {
                return openBlock(), createBlock(unref(SwiperSlide), {
                  key: item,
                  class: "group product_item mb-3 mt-3 hover:shadow-none md:hover:shadow-hero hover:bg-[#D9D9D940] transition-all ease-in-out duration-200 rounded-xl flex flex-col justify-center items-center"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_BaseProduct, { item }, null, 8, ["item"])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroSwiperProduct.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-1ded2803"]]);
const _sfc_main$2 = {
  __name: "HeroSpecials",
  __ssrInlineRender: true,
  props: {
    specials: {
      type: Array,
      default: []
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="item_5 md:block hidden w-full overflow-hidden"><div class="flex w-full"><!--[-->`);
      ssrRenderList((_a = __props.specials) == null ? void 0 : _a.slice(0, 3), (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          onClick: ($event) => ("useRouter" in _ctx ? _ctx.useRouter : unref(useRouter))().push(
            _ctx.localePath({
              path: `/special-products/${item == null ? void 0 : item.uuid}`
            })
          ),
          class: "p-1 md:p-3 w-1/3"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img class="cursor-pointer object-cover hover:shadow-hero rounded-xl w-full aspect-[16/9]"${ssrRenderAttr("src", `http://duypbaha.com.tm/api/v1/uploads/special_categories/${item == null ? void 0 : item.img_path}`)} alt=""${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  class: "cursor-pointer object-cover hover:shadow-hero rounded-xl w-full aspect-[16/9]",
                  src: `http://duypbaha.com.tm/api/v1/uploads/special_categories/${item == null ? void 0 : item.img_path}`,
                  alt: ""
                }, null, 8, ["src"])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><div class="flex w-full"><!--[-->`);
      ssrRenderList((_b = __props.specials) == null ? void 0 : _b.slice(3, 5), (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          onClick: ($event) => ("useRouter" in _ctx ? _ctx.useRouter : unref(useRouter))().push(
            _ctx.localePath({
              path: `/special-products/${item == null ? void 0 : item.uuid}`
            })
          ),
          class: "p-1 md:p-3 w-1/2"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img class="cursor-pointer object-cover hover:shadow-hero rounded-xl aspect-[16/7]"${ssrRenderAttr("src", `http://duypbaha.com.tm/api/v1/uploads/special_categories/${item == null ? void 0 : item.img_path}`)} alt=""${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  class: "cursor-pointer object-cover hover:shadow-hero rounded-xl aspect-[16/7]",
                  src: `http://duypbaha.com.tm/api/v1/uploads/special_categories/${item == null ? void 0 : item.img_path}`,
                  alt: ""
                }, null, 8, ["src"])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div><div class="item_mob md:hidden block w-full overflow-hidden"><div class="flex w-full"><!--[-->`);
      ssrRenderList((_c = __props.specials) == null ? void 0 : _c.slice(2, 4), (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          onClick: ($event) => ("useRouter" in _ctx ? _ctx.useRouter : unref(useRouter))().push(
            _ctx.localePath({
              path: `/special-products/${item == null ? void 0 : item.uuid}`
            })
          ),
          class: "p-1 md:p-3 w-1/2"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img class="cursor-pointer object-cover hover:shadow-hero rounded-xl w-full aspect-[16/9]"${ssrRenderAttr("src", `http://duypbaha.com.tm/api/v1/uploads/special_categories/${item == null ? void 0 : item.img_path}`)} alt=""${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  class: "cursor-pointer object-cover hover:shadow-hero rounded-xl w-full aspect-[16/9]",
                  src: `http://duypbaha.com.tm/api/v1/uploads/special_categories/${item == null ? void 0 : item.img_path}`,
                  alt: ""
                }, null, 8, ["src"])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><div class="flex w-full"><!--[-->`);
      ssrRenderList((_d = __props.specials) == null ? void 0 : _d.slice(4, 5), (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          onClick: ($event) => ("useRouter" in _ctx ? _ctx.useRouter : unref(useRouter))().push(
            _ctx.localePath({
              path: `/special-products/${item == null ? void 0 : item.uuid}`
            })
          ),
          class: "p-1 md:p-3 w-full"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img class="cursor-pointer object-cover hover:shadow-hero rounded-xl aspect-[16/7]"${ssrRenderAttr("src", `http://duypbaha.com.tm/api/v1/uploads/special_categories/${item == null ? void 0 : item.img_path}`)} alt=""${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  class: "cursor-pointer object-cover hover:shadow-hero rounded-xl aspect-[16/7]",
                  src: `http://duypbaha.com.tm/api/v1/uploads/special_categories/${item == null ? void 0 : item.img_path}`,
                  alt: ""
                }, null, 8, ["src"])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><div class="flex w-full"><!--[-->`);
      ssrRenderList((_e = __props.specials) == null ? void 0 : _e.slice(0, 2), (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          onClick: ($event) => ("useRouter" in _ctx ? _ctx.useRouter : unref(useRouter))().push(
            _ctx.localePath({
              path: `/special-products/${item == null ? void 0 : item.uuid}`
            })
          ),
          class: "p-1 md:p-3 w-1/2"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img class="cursor-pointer object-cover hover:shadow-hero rounded-xl w-full aspect-[16/9]"${ssrRenderAttr("src", `http://duypbaha.com.tm/api/v1/uploads/special_categories/${item == null ? void 0 : item.img_path}`)} alt=""${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  class: "cursor-pointer object-cover hover:shadow-hero rounded-xl w-full aspect-[16/9]",
                  src: `http://duypbaha.com.tm/api/v1/uploads/special_categories/${item == null ? void 0 : item.img_path}`,
                  alt: ""
                }, null, 8, ["src"])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroSpecials.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const HeroSwiperVideo_vue_vue_type_style_index_0_scoped_5b23b15e_lang = "";
const _sfc_main$1 = {
  __name: "HeroSwiperVideo",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useI18n();
    const { data: video } = ([__temp, __restore] = withAsyncContext(() => useMyFetch(`/api/v1/client/products/videos`)), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Swiper), mergeProps({
        spaceBetween: 29,
        slidesPerView: 1,
        loop: true,
        centeredSlides: false,
        autoplay: {
          delay: 1e4,
          disableOnInteraction: false
        },
        modules: [unref(Autoplay), unref(Pagination), unref(Navigation)],
        navigation: true,
        style: { "width": "100% !important", "height": "100% !important" },
        mousewheel: true,
        keyboard: true,
        class: "mb-5 w-full h-full select-none"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(video).data, (item) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), {
                key: item,
                class: "group overflow-hidden w-full mb-3 hover:shadow-hero rounded-md hover:bg-[#D9D9D940] transition-all ease-in-out duration-200 flex flex-col justify-center items-center cursor-pointer"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<video class="w-full h-full object-cover z-[1]" autoplay loop muted data-v-5b23b15e${_scopeId2}><source${ssrRenderAttr("src", `http://duypbaha.com.tm/api/v1/uploads/videos/${item == null ? void 0 : item.video_path}`)} alt="" data-v-5b23b15e${_scopeId2}></video>`);
                  } else {
                    return [
                      createVNode("video", {
                        class: "w-full h-full object-cover z-[1]",
                        autoplay: "",
                        loop: "",
                        muted: ""
                      }, [
                        createVNode("source", {
                          src: `http://duypbaha.com.tm/api/v1/uploads/videos/${item == null ? void 0 : item.video_path}`,
                          ref_for: true,
                          ref: "img",
                          alt: ""
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
              (openBlock(true), createBlock(Fragment, null, renderList(unref(video).data, (item) => {
                return openBlock(), createBlock(unref(SwiperSlide), {
                  key: item,
                  class: "group overflow-hidden w-full mb-3 hover:shadow-hero rounded-md hover:bg-[#D9D9D940] transition-all ease-in-out duration-200 flex flex-col justify-center items-center cursor-pointer"
                }, {
                  default: withCtx(() => [
                    createVNode("video", {
                      class: "w-full h-full object-cover z-[1]",
                      autoplay: "",
                      loop: "",
                      muted: ""
                    }, [
                      createVNode("source", {
                        src: `http://duypbaha.com.tm/api/v1/uploads/videos/${item == null ? void 0 : item.video_path}`,
                        ref_for: true,
                        ref: "img",
                        alt: ""
                      }, null, 8, ["src"])
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroSwiperVideo.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-5b23b15e"]]);
const _imports_0 = "" + __buildAssetsURL("chevron-right.d0c96202.svg");
const index_vue_vue_type_style_index_0_scoped_d6fe6c67_lang = "";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { locale } = useI18n();
    useHead({
      title: `Online Söwda`,
      meta: [{ name: "description", content: "Internet Magazin" }]
    });
    const { data: rating } = ([__temp, __restore] = withAsyncContext(() => useMyFetch(`/api/v1/client/products/rating`)), __temp = await __temp, __restore(), __temp);
    const { data: latest } = ([__temp, __restore] = withAsyncContext(() => useMyFetch(
      `/api/v1/client/products/latest/products?lang=${locale.value}`
    )), __temp = await __temp, __restore(), __temp);
    const { data: special_latest } = ([__temp, __restore] = withAsyncContext(() => useMyFetch(
      `/api/v1/client/products/special-categ-products?lang=${locale.value}`
    )), __temp = await __temp, __restore(), __temp);
    const { data: main_brands } = ([__temp, __restore] = withAsyncContext(() => useMyFetch(
      `/api/v1/client/products/brands?lang=${locale.value}`
    )), __temp = await __temp, __restore(), __temp);
    const { data: special_categories } = ([__temp, __restore] = withAsyncContext(() => useMyFetch(
      `/api/v1/client/products/special-categories?lang=${locale.value}`
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_MainSwiper = _sfc_main$6;
      const _component_HeroSwiperCategory = __nuxt_component_1;
      const _component_MainInfo = _sfc_main$4;
      const _component_HeroSwiperProduct = __nuxt_component_3;
      const _component_HeroSpecials = _sfc_main$2;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_HeroSwiperVideo = __nuxt_component_6;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-d6fe6c67><div class="xl:w-[1196px] rounded-md overflow-hidden select-none w-full aspect-[21/10] mx-auto" data-v-d6fe6c67>`);
      _push(ssrRenderComponent(_component_MainSwiper, null, null, _parent));
      _push(`</div><div class="block xl:w-[1238px] w-full mx-auto md:mt-[92px] mt-4" data-v-d6fe6c67><div class="flex justify-between items-center" data-v-d6fe6c67><p class="font-alatsi font-semibold md:text-2xl text-base text-[#3C4242] border-l-[6px] border-[#8A33FD] pl-[6px]" data-v-d6fe6c67>${ssrInterpolate(_ctx.$t("categories"))}</p><div class="flex cursor-pointer items-center" data-v-d6fe6c67><p class="font-alatsi font-semibold inline md:text-2xl text-base text-[#3C4242]" data-v-d6fe6c67>${ssrInterpolate(_ctx.$t("view_all"))}</p><img class="inline h-[34px]" height=""${ssrRenderAttr("src", _imports_0)} alt="" data-v-d6fe6c67></div></div><div class="md:h-[358px] h-[250px] md:mt-7 mt-1" data-v-d6fe6c67><div class="block md:hidden" data-v-d6fe6c67>`);
      _push(ssrRenderComponent(_component_HeroSwiperCategory, { count: 2 }, null, _parent));
      _push(`</div><div class="md:block hidden" data-v-d6fe6c67>`);
      _push(ssrRenderComponent(_component_HeroSwiperCategory, {
        class: "hidden",
        count: 4
      }, null, _parent));
      _push(`</div></div></div><div class="block xl:w-[1238px] md:w-full w-full mx-auto mt-4 md:mt-[100px]" data-v-d6fe6c67>`);
      _push(ssrRenderComponent(_component_MainInfo, {
        rating: (_a = unref(rating)) == null ? void 0 : _a.data
      }, null, _parent));
      _push(`</div><div class="block xl:w-[1238px] w-full mx-auto md:mt-[92px] mt-4" data-v-d6fe6c67><div class="flex justify-between items-center" data-v-d6fe6c67><p class="font-alatsi font-semibold md:text-2xl text-base text-[#3C4242] border-l-[6px] border-[#8A33FD] pl-[6px]" data-v-d6fe6c67>${ssrInterpolate(_ctx.$t("latest_products"))}</p><div class="flex cursor-pointer items-center" data-v-d6fe6c67><p class="font-alatsi font-semibold inline md:text-2xl text-base text-[#3C4242]" data-v-d6fe6c67>${ssrInterpolate(_ctx.$t("view_all"))}</p><img class="inline h-[34px]" height=""${ssrRenderAttr("src", _imports_0)} alt="" data-v-d6fe6c67></div></div><div class="block md:h-auto h-auto md:mt-7 mt-3" data-v-d6fe6c67><div class="md:block hidden" data-v-d6fe6c67>`);
      _push(ssrRenderComponent(_component_HeroSwiperProduct, {
        products: unref(latest).data,
        count: 4
      }, null, _parent));
      _push(`</div><div class="block md:hidden" data-v-d6fe6c67>`);
      _push(ssrRenderComponent(_component_HeroSwiperProduct, {
        products: unref(latest).data,
        count: 2
      }, null, _parent));
      _push(`</div></div></div><div class="block h-auto xl:w-[1238px] w-screen mx-auto md:mt-[92px]" data-v-d6fe6c67><div class="flex justify-center" data-v-d6fe6c67><p class="font-alatsi font-semibold md:text-2xl text-base text-[#3C4242] border-l-[6px] border-[#8A33FD] pl-[6px]" data-v-d6fe6c67>${ssrInterpolate(_ctx.$t("specials"))}</p></div><div class="h-auto w-full md:mt-7 mt-3" data-v-d6fe6c67>`);
      _push(ssrRenderComponent(_component_HeroSpecials, {
        specials: unref(special_categories).data,
        class: ""
      }, null, _parent));
      _push(`</div></div><div class="block xl:w-[1238px] w-full mx-auto md:mt-[92px] mt-4" data-v-d6fe6c67><div class="flex justify-between items-center" data-v-d6fe6c67><p class="font-alatsi font-semibold md:text-2xl text-base text-[#3C4242] border-l-[6px] border-[#8A33FD] pl-[6px]" data-v-d6fe6c67>${ssrInterpolate(_ctx.$t("special_products"))}</p><div class="flex cursor-pointer items-center" data-v-d6fe6c67><p class="font-alatsi font-semibold inline md:text-2xl text-base text-[#3C4242]" data-v-d6fe6c67>${ssrInterpolate(_ctx.$t("view_all"))}</p><img class="inline h-[34px]" height=""${ssrRenderAttr("src", _imports_0)} alt="" data-v-d6fe6c67></div></div><div class="block md:h-auto h-auto md:mt-7 mt-1" data-v-d6fe6c67><div class="md:block hidden" data-v-d6fe6c67>`);
      _push(ssrRenderComponent(_component_HeroSwiperProduct, {
        products: unref(special_latest).data,
        count: 4
      }, null, _parent));
      _push(`</div><div class="block md:hidden" data-v-d6fe6c67>`);
      _push(ssrRenderComponent(_component_HeroSwiperProduct, {
        products: unref(special_latest).data,
        count: 2
      }, null, _parent));
      _push(`</div></div></div><div class="flex items-center gap-7 md:gap-14 2xl:w-[1440px] w-screen overflow-hidden mx-auto mt-4 md:mt-[92px] h-[125px]" data-v-d6fe6c67><div class="flex justify-around md:min-w-full w-fit gap-7 md:gap-14 animation_brands" data-v-d6fe6c67><!--[-->`);
      ssrRenderList(unref(main_brands).data, (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          onClick: ($event) => ("useRouter" in _ctx ? _ctx.useRouter : unref(useRouter))().push(
            _ctx.localePath({
              path: `/brand_id/${item == null ? void 0 : item.uuid}`,
              query: { p: "1", filter: JSON.stringify([`${item == null ? void 0 : item.uuid}`]) }
            })
          )
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img class="text-black aspect-auto object-cover hover:grayscale-0 transition-all duration-75 cursor-pointer h-[90px] min-w-[80px] rounded-md"${ssrRenderAttr("src", `http://duypbaha.com.tm/api/v1/uploads/brands/${item == null ? void 0 : item.img_path}`)} alt="" data-v-d6fe6c67${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  class: "text-black aspect-auto object-cover hover:grayscale-0 transition-all duration-75 cursor-pointer h-[90px] min-w-[80px] rounded-md",
                  src: `http://duypbaha.com.tm/api/v1/uploads/brands/${item == null ? void 0 : item.img_path}`,
                  alt: ""
                }, null, 8, ["src"])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><div class="flex justify-around md:min-w-full w-fit gap-7 md:gap-14 animation_brands" data-v-d6fe6c67><!--[-->`);
      ssrRenderList(unref(main_brands).data, (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          onClick: ($event) => ("useRouter" in _ctx ? _ctx.useRouter : unref(useRouter))().push(
            _ctx.localePath({
              path: `/brand_id/${item == null ? void 0 : item.uuid}`,
              query: { p: "1", filter: JSON.stringify([`${item == null ? void 0 : item.uuid}`]) }
            })
          )
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img class="text-black aspect-auto object-cover hover:grayscale-0 transition-all duration-75 cursor-pointer h-[90px] min-w-[80px] rounded-md"${ssrRenderAttr("src", `http://duypbaha.com.tm/api/v1/uploads/brands/${item == null ? void 0 : item.img_path}`)} alt="" data-v-d6fe6c67${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  class: "text-black aspect-auto object-cover hover:grayscale-0 transition-all duration-75 cursor-pointer h-[90px] min-w-[80px] rounded-md",
                  src: `http://duypbaha.com.tm/api/v1/uploads/brands/${item == null ? void 0 : item.img_path}`,
                  alt: ""
                }, null, 8, ["src"])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div><div class="xl:w-[1196px] mt-10 rounded-md overflow-hidden select-none w-full aspect-[21/10] mx-auto" data-v-d6fe6c67>`);
      _push(ssrRenderComponent(_component_HeroSwiperVideo, null, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d6fe6c67"]]);
export {
  index as default
};
//# sourceMappingURL=index-d332177d.js.map
