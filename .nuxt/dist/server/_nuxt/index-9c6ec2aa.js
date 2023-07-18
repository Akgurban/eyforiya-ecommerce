import { _ as __nuxt_component_0 } from "./nuxt-link-563b35af.js";
import { u as useUserStore, _ as _sfc_main$1 } from "./user-aa827d4b.js";
import { ref, withAsyncContext, withCtx, createTextVNode, unref, useSSRContext } from "vue";
import "hookable";
import { b as useRouter } from "../server.mjs";
import "destr";
import "devalue";
import "klona";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
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
    let __temp, __restore;
    const userStore = useUserStore();
    const categories = ref(null);
    const router = useRouter();
    try {
      const { data } = ([__temp, __restore] = withAsyncContext(() => userStore.getCategories()), __temp = await __temp, __restore(), __temp);
      console.log(data, "data");
      categories.value = data.data;
    } catch (error) {
      console.log(error);
    }
    const getCategoriesr = async () => {
      try {
        const { data } = await userStore.getCategories();
        console.log(data, "data");
        categories.value = data.data;
      } catch (error) {
        console.log(error);
      }
    };
    const deleteCategory = async (e) => {
      try {
        const { data } = await userStore.deleteCategories({ uuid: e.uuid });
        console.log(data, "data");
        await getCategoriesr();
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
        to: "/admin/categories/add"
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
      _push(`<div class="rounded-md p-2 m-1 flex justify-between"><p class="font-bold">Name category</p>`);
      _push(ssrRenderComponent(_component_BaseButton, { type: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Delete`);
          } else {
            return [
              createTextVNode("Delete")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><ul><!--[-->`);
      ssrRenderList(unref(categories), (item) => {
        _push(`<div class="bg-gray-200 cursor-pointer flex justify-between items-center text-lg font-bold rounded-md p-2 m-1"><img${ssrRenderAttr("src", `http://duypbaha.com.tm/api/v1/uploads/categories/${item == null ? void 0 : item.img_path}`)} alt="" class="h-10 w-15"><p>${ssrInterpolate(item.name)}</p><div class="flex gap-3">`);
        _push(ssrRenderComponent(_component_BaseButton, {
          onClick: ($event) => unref(router).push(`/admin/categories/edit/${item.uuid}`),
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
          onClick: ($event) => deleteCategory(item),
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
        _push(`</div></div>`);
      });
      _push(`<!--]--></ul></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/categories/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-9c6ec2aa.js.map
