import { _ as __nuxt_component_0 } from "./nuxt-link-563b35af.js";
import { _ as _sfc_main$1 } from "./base-button-598d851d.js";
import { ref, withAsyncContext, withCtx, createTextVNode, unref, useSSRContext } from "vue";
import "hookable";
import { b as useRouter } from "../server.mjs";
import "destr";
import "devalue";
import "klona";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { u as useUserStore } from "./user-d05e8fdd.js";
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
    const router = useRouter();
    const categories = ref(null);
    try {
      const { data } = ([__temp, __restore] = withAsyncContext(() => userStore.getSubCategories()), __temp = await __temp, __restore(), __temp);
      console.log(data, "data");
      categories.value = data.data;
    } catch (error) {
      console.log(error);
    }
    const getCategoriesr = async () => {
      try {
        const { data } = await userStore.getSubCategories();
        console.log(data, "data");
        categories.value = data.data;
      } catch (error) {
        console.log(error);
      }
    };
    const deleteSubCategory = async (e) => {
      try {
        const { data } = await userStore.deleteSubCategories({ uuid: e.uuid });
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
        to: "/admin/sub-categories/add"
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
        _push(`<div class="bg-gray-200 flex justify-between items-center text-lg font-bold rounded-md p-2 m-1"><p>${ssrInterpolate(item.name)}</p><div class="flex gap-3">`);
        _push(ssrRenderComponent(_component_BaseButton, {
          onClick: ($event) => unref(router).push(`/admin/sub-categories/edit/${item.uuid}`),
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
          onClick: ($event) => deleteSubCategory(item),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/sub-categories/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-6b2e7b20.js.map
