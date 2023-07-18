import { _ as __nuxt_component_0 } from "./nuxt-link-563b35af.js";
import { u as useUserStore, _ as _sfc_main$1 } from "./user-aa827d4b.js";
import { ref, withAsyncContext, withCtx, createTextVNode, unref, useSSRContext } from "vue";
import "hookable";
import { b as useRouter } from "../server.mjs";
import "destr";
import "devalue";
import "klona";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { u as useLoaderStore } from "./loader-7453264c.js";
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
import "js-cookie";
import "is-https";
import "ohash";
import "pinia-plugin-persistedstate";
import "axios";
import "defu";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a;
    let __temp, __restore;
    const loaderStore = useLoaderStore();
    const products = ref();
    const userStore = useUserStore();
    const getPosts = async () => {
      var _a2;
      try {
        const { data } = await userStore.getProduct({
          limit: 10,
          offset: 0
        });
        if (data == null ? void 0 : data.status) {
          console.log(data, "datass");
          products.value = (_a2 = data == null ? void 0 : data.data) == null ? void 0 : _a2.products;
        }
      } catch (error) {
        console.log(error);
      }
    };
    loaderStore.startLoading();
    try {
      const { data } = ([__temp, __restore] = withAsyncContext(() => userStore.getProduct({
        limit: 10,
        offset: 0
      })), __temp = await __temp, __restore(), __temp);
      if (data.status) {
        console.log(data, "datass");
        products.value = (_a = data == null ? void 0 : data.data) == null ? void 0 : _a.products;
      }
    } catch (error) {
      console.log(error);
    }
    const deletePosts = async (e) => {
      try {
        const { data } = await userStore.deleteProduct(e);
        console.log(data, "data");
        if (data == null ? void 0 : data.status) {
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
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "bg-green-700 block rounded-md hover:bg-green-600 p-2 text-white font-bold text-center mt-3 cursor-pointer",
        to: "/admin/products/add"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Add + `);
          } else {
            return [
              createTextVNode(" Add + ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="rounded-md p-2 m-1 flex justify-between"><p class="font-bold">Image</p><p class="font-bold">Title</p><p class="font-bold">Description</p><p class="font-bold">Delete</p></div><ul><!--[-->`);
      ssrRenderList(unref(products), (item) => {
        _push(`<li class="bg-gray-200 flex justify-between items-center text-lg font-bold rounded-md p-2 m-1"><img${ssrRenderAttr("src", `http://duypbaha.com.tm/api/v1/uploads/images/${item == null ? void 0 : item.images[0]}`)} alt="" class="h-10 w-15"><p>${ssrInterpolate(item == null ? void 0 : item.name)}</p><p class="text-xs w-1/3">${ssrInterpolate(item == null ? void 0 : item.description)}</p><div class="flex gap-3">`);
        _push(ssrRenderComponent(_component_BaseButton, {
          onClick: ($event) => ("useRouter" in _ctx ? _ctx.useRouter : unref(useRouter))().push(`/admin/products/edit/${item == null ? void 0 : item.uuid}`),
          type: "primary"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`edit`);
            } else {
              return [
                createTextVNode("edit")
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
              _push2(`delete`);
            } else {
              return [
                createTextVNode("delete")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></li>`);
      });
      _push(`<!--]--></ul></div>`);
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
//# sourceMappingURL=index-0bcc32f3.js.map
