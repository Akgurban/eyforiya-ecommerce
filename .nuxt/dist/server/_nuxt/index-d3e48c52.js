import { _ as __nuxt_component_0 } from "./nuxt-link-744fccd2.js";
import { _ as _sfc_main$1 } from "./base-button-598d851d.js";
import { ref, withAsyncContext, withCtx, createTextVNode, unref, useSSRContext } from "vue";
import "hookable";
import { a as useRouter } from "../server.mjs";
import "destr";
import "devalue";
import "klona";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { u as useUserStore } from "./user-2db9475d.js";
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
import "vue-awesome-paginate";
import "defu";
import "./fetch-ba2ed0c4.js";
import "./adminStore-ee8c4b80.js";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const userStore = useUserStore();
    const categories = ref(null);
    try {
      const { data } = ([__temp, __restore] = withAsyncContext(() => userStore.getSpecialCategories()), __temp = await __temp, __restore(), __temp);
      categories.value = data.value.data;
    } catch (error) {
      console.log(error);
    }
    const getCategoriesr = async () => {
      try {
        const { data } = await userStore.getSpecialCategories();
        categories.value = data.value.data;
      } catch (error) {
        console.log(error);
      }
    };
    const deleteCategory = async (e) => {
      try {
        const { data } = await userStore.deleteSpecialCategories({ uuid: e.uuid });
        await getCategoriesr();
      } catch (error) {
        console.log(error);
      }
    };
    const addPost = () => {
      var _a;
      if (((_a = categories.value) == null ? void 0 : _a.length) >= 5) {
        alert("maximum 5 sany special categoriya");
      } else {
        useRouter().push("/admin/special-categories/add");
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_BaseButton = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "bg-green-700 block rounded-md hover:bg-green-600 p-2 text-white font-bold text-center mt-3 cursor-pointer",
        onClick: addPost
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
      _push(`<div class="rounded-md p-2 m-1 flex justify-between"><p class="font-bold">Yorite kategoriyanyn ady</p>`);
      _push(ssrRenderComponent(_component_BaseButton, { type: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Pozmak`);
          } else {
            return [
              createTextVNode("Pozmak")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><ul><!--[-->`);
      ssrRenderList(unref(categories), (item) => {
        _push(`<div class="bg-gray-200 flex justify-between items-center text-lg font-bold rounded-md p-2 m-1"><img${ssrRenderAttr("src", `http://duypbaha.com.tm/api/v1/uploads/special_categories/${item == null ? void 0 : item.img_path}`)} alt="" class="h-10 w-15"><p>${ssrInterpolate(item.name)}</p><div class="flex gap-3">`);
        _push(ssrRenderComponent(_component_BaseButton, {
          onClick: ($event) => ("useRouter" in _ctx ? _ctx.useRouter : unref(useRouter))().push(`/admin/special-categories/edit/${item.uuid}`),
          type: "secondary"
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
          onClick: ($event) => deleteCategory(item),
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
        _push(`</div></div>`);
      });
      _push(`<!--]--></ul></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/special-categories/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-d3e48c52.js.map
