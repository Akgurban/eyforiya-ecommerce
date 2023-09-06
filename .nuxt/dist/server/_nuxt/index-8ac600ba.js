import { _ as __nuxt_component_0 } from "./nuxt-link-744fccd2.js";
import { _ as _sfc_main$1 } from "./base-button-598d851d.js";
import { _ as __nuxt_component_3 } from "./base-paginate-5caaa8e9.js";
import { ref, withAsyncContext, watch, withCtx, createTextVNode, unref, isRef, useSSRContext } from "vue";
import "hookable";
import { d as useToast, a as useRouter } from "../server.mjs";
import "destr";
import "devalue";
import "klona";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { u as useUserStore } from "./user-2db9475d.js";
import { u as useLoaderStore } from "./loader-4a144fcb.js";
import "ufo";
import "./chevron-left-454043cf.js";
import "./_plugin-vue_export-helper-cc2b3d55.js";
import "./chevron-right-0f6a5ea3.js";
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
import "./adminStore-ee8c4b80.js";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const loaderStore = useLoaderStore();
    useToast();
    const products = ref(null);
    const count = ref(1);
    const totalItems = ref(10);
    const userStore = useUserStore();
    const getPosts = async () => {
      var _a, _b;
      try {
        const { data } = await userStore.getProduct({
          limit: 15,
          offset: count.value
        });
        if (data == null ? void 0 : data.value.status) {
          products.value = (_a = data.value.data) == null ? void 0 : _a.products;
          totalItems.value = (_b = data.value.data) == null ? void 0 : _b.count;
        }
      } catch (error) {
        console.log(error);
      }
    };
    [__temp, __restore] = withAsyncContext(() => getPosts()), await __temp, __restore();
    watch(count, async () => {
      console.log("xsa");
      await getPosts();
    });
    const deletePosts = async (e) => {
      try {
        const { data } = await userStore.deleteProduct(e);
        if (data.value.status) {
          await getPosts();
        }
      } catch (error) {
        console.log(error);
      }
    };
    loaderStore.endLoading();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_BaseButton = _sfc_main$1;
      const _component_BasePaginate = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "bg-green-700 block rounded-md hover:bg-green-600 p-2 text-white font-bold text-center mt-3 cursor-pointer",
        to: "/admin/products/add"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Goshmak + `);
          } else {
            return [
              createTextVNode(" Goshmak + ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="rounded-md p-2 m-1 flex justify-between"><p class="font-bold">Image</p><p class="font-bold">Title</p><p class="font-bold">Description</p><p class="font-bold">Pozmak</p></div><ul><!--[-->`);
      ssrRenderList(unref(products), (item) => {
        _push(`<li class="bg-gray-200 flex justify-between items-center text-lg font-bold rounded-md p-2 m-1"><img${ssrRenderAttr("src", `http://duypbaha.com.tm/api/v1/uploads/images/${item == null ? void 0 : item.images[0]}`)} alt="" class="h-10 w-15"><p>${ssrInterpolate(item == null ? void 0 : item.name)}</p><p class="text-xs w-1/3">${ssrInterpolate(item == null ? void 0 : item.description)}</p><div class="flex gap-3">`);
        _push(ssrRenderComponent(_component_BaseButton, {
          onClick: ($event) => ("useRouter" in _ctx ? _ctx.useRouter : unref(useRouter))().push(`/admin/products/edit/${item == null ? void 0 : item.uuid}`),
          type: "primary"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`uytget`);
            } else {
              return [
                createTextVNode("uytget")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(_component_BaseButton, {
          onClick: ($event) => deletePosts(item),
          type: "danger"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Pozmak`);
            } else {
              return [
                createTextVNode("Pozmak")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></li>`);
      });
      _push(`<!--]-->`);
      _push(ssrRenderComponent(_component_BasePaginate, {
        "total-items": unref(totalItems),
        modelValue: unref(count),
        "onUpdate:modelValue": ($event) => isRef(count) ? count.value = $event : null
      }, null, _parent));
      _push(`</ul></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/products/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-8ac600ba.js.map
