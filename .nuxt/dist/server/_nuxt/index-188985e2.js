import { _ as __nuxt_component_0 } from "./nuxt-link-563b35af.js";
import { _ as _sfc_main$1 } from "./base-button-598d851d.js";
import { ref, withAsyncContext, withCtx, createTextVNode, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { u as useUserStore } from "./user-d05e8fdd.js";
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
import "defu";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const posts = ref(null);
    const userStore = useUserStore();
    const getPosts = async () => {
      try {
        const { data } = await userStore.getPosts({
          limit: 10,
          offset: 0
        });
        console.log(data, "data");
        posts.value = data.data.services;
      } catch (error) {
        console.log(error);
      }
    };
    [__temp, __restore] = withAsyncContext(() => getPosts()), await __temp, __restore();
    const deletePosts = async (e) => {
      try {
        const { data } = await userStore.deletePosts(e);
        console.log(data, "data");
        if (data.status) {
          await getPosts();
        }
      } catch (error) {
        console.log(error);
      }
    };
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
      ssrRenderList(unref(posts), (item) => {
        _push(`<li class="bg-gray-200 flex justify-between items-center text-lg font-bold rounded-md p-2 m-1"><img${ssrRenderAttr("src", `http://192.168.1.126:3000/api/v1/uploads/news/${item.img_path}`)} alt="" class="h-10 w-15"><p>${ssrInterpolate(item.title)}</p><p>${ssrInterpolate(item.description)}</p>`);
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
        _push(`</li>`);
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
//# sourceMappingURL=index-188985e2.js.map
