import { _ as __nuxt_component_0 } from "./nuxt-link-744fccd2.js";
import { _ as _sfc_main$1 } from "./base-button-598d851d.js";
import { useSSRContext, ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString } from "vue";
import "hookable";
import { a as useRouter, b as useRoute } from "../server.mjs";
import "destr";
import "devalue";
import "klona";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { u as useAuthStore } from "./authStore-4fa9ef0d.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const profilSidebar_vue_vue_type_style_index_0_scoped_7bbac8b6_lang = "";
const _sfc_main = {
  __name: "profil-sidebar",
  __ssrInlineRender: true,
  setup(__props) {
    const authStore = useAuthStore();
    const router = useRouter();
    const posts = ref([
      { name: "history", path: "/profil/order" },
      { name: "password", path: "/profil/password" },
      { name: "username", path: "/profil/username" }
    ]);
    ref(true);
    const logout = () => {
      authStore.userToken = "";
      router.push("/");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_BaseButton = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "md:w-[400px] w-full md:h-screen h-auto md:sticky md:mb-10 bottom-0 bg-blue-50 shadow-md font-bold text-xl" }, _attrs))} data-v-7bbac8b6><ul class="md:m-5 flex md:flex-col flex-row gap-1 md:gap-3 mt-3 justify-between md:justify-start" data-v-7bbac8b6><!--[-->`);
      ssrRenderList(unref(posts), (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: item.name,
          to: _ctx.localePath(item.path),
          class: [{ active: ("useRoute" in _ctx ? _ctx.useRoute : unref(useRoute))().path.includes(item.path) }, "admin-links gap-1 md:gap-3 text-sm md:text-xl md:first:mt-10 rounded-md hover:bg-slate-500 hover:text-slate-50 p-2 my-2 md:my-0"]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t(item.name))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t(item.name)), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]-->`);
      _push(ssrRenderComponent(_component_BaseButton, {
        onClick: logout,
        class: "admin-links gap-1 md:gap-3 text-sm md:text-2xl rounded-md hover:bg-slate-500 hover:text-slate-50 p-2 my-2 md:my-0",
        type: "danger"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Logout`);
          } else {
            return [
              createTextVNode("Logout")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</ul></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/profil-sidebar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7bbac8b6"]]);
export {
  __nuxt_component_2 as _
};
//# sourceMappingURL=profil-sidebar-204585ef.js.map
