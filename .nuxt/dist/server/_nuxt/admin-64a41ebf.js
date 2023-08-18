import { _ as __nuxt_component_0$1 } from "./nuxt-link-744fccd2.js";
import { useSSRContext, ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString } from "vue";
import "hookable";
import { b as useRoute } from "../server.mjs";
import "destr";
import "devalue";
import "klona";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
import { _ as _imports_0 } from "./logo-83323d70.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import { u as useAdminStore } from "./adminStore-ee8c4b80.js";
import { _ as _imports_0$1 } from "./loader-dc53e791.js";
import { u as useLoaderStore } from "./loader-4a144fcb.js";
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
const sidebar_vue_vue_type_style_index_0_scoped_da525477_lang = "";
const _sfc_main$3 = {
  __name: "sidebar",
  __ssrInlineRender: true,
  setup(__props) {
    const posts = ref([
      { name: "Kategoriyalar", path: "/admin/categories" },
      { name: "Kici kategoriyalar", path: "/admin/sub-categories" },
      { name: "Mahabat", path: "/admin/banners" },
      { name: "Yorite Kategoriyalar", path: "/admin/special-categories" },
      { name: "Brendlar", path: "/admin/brands" },
      { name: "Wideolar", path: "/admin/videos" },
      { name: "Harytlar", path: "/admin/products" },
      { name: "Teswirler", path: "/admin/comments" },
      { name: "Zakazlar", path: "/admin/orders" }
    ]);
    ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-[300px] h-screen bg-slate-200 p-4 shadow-md font-bold text-2xl" }, _attrs))} data-v-da525477><img class="mx-auto md:cursor-pointer cursor-auto"${ssrRenderAttr("src", _imports_0)} alt="" data-v-da525477><ul class="m-5" data-v-da525477><!--[-->`);
      ssrRenderList(unref(posts), (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: item.name,
          to: item.path,
          class: [{ active: ("useRoute" in _ctx ? _ctx.useRoute : unref(useRoute))().path.includes(item.path) }, "admin-links bg-slate-300 hover:bg-slate-500 hover:text-slate-50 my-2 p-2 text-xl hover:underline cursor-pointer flex flex-col"]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></ul></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/sidebar.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-da525477"]]);
const _sfc_main$2 = {
  __name: "header",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    useAdminStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="bg-gray-200 cursor-pointer w-full p-2 text-base font-semibold flex justify-between"><div>Admin Panel</div><div class="group relative flex gap-2 font-bold"><p class="text-white p-1 rounded-md bg-red-700">Ulgamdan Cyk</p></div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "base-loader",
  __ssrInlineRender: true,
  setup(__props) {
    const userStore = useLoaderStore();
    ref(null);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(userStore).getLoading) {
        _push(`<div class="fixed opacity-75 text-3xl font-bold z-10 no-scrollbar overflow-hidden top-0 w-screen h-screen flex items-center justify-center bg-slate-500 text-white"><img${ssrRenderAttr("src", _imports_0$1)} alt=""></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/base-loader.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_admin_sidebar = __nuxt_component_0;
  const _component_admin_header = _sfc_main$2;
  const _component_BaseLoader = _sfc_main$1;
  _push(`<!--[--><div class="w-[1200px] mx-auto z-50"><div class="flex gap-4">`);
  _push(ssrRenderComponent(_component_admin_sidebar, null, null, _parent));
  _push(`<div class="w-[900px]">`);
  _push(ssrRenderComponent(_component_admin_header, null, null, _parent));
  _push(`<div class="h-[96vh] overflow-auto">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div></div></div>`);
  _push(ssrRenderComponent(_component_BaseLoader, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/admin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const admin = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  admin as default
};
//# sourceMappingURL=admin-64a41ebf.js.map
