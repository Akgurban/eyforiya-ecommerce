import { _ as __nuxt_component_1 } from "./chevron-left-454043cf.js";
import { _ as __nuxt_component_1$1 } from "./chevron-right-0f6a5ea3.js";
import { useSSRContext, resolveComponent, mergeProps, withCtx, createVNode } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const basePaginate_vue_vue_type_style_index_0_scopeds_true_lang = "";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_vue_awesome_paginate = resolveComponent("vue-awesome-paginate");
  const _component_IconChevronLeft = __nuxt_component_1;
  const _component_IconChevronRight = __nuxt_component_1$1;
  _push(ssrRenderComponent(_component_vue_awesome_paginate, mergeProps({
    "items-per-page": 24,
    "max-pages-shown": 5,
    "paginate-buttons-class": "btn",
    "active-page-class": "btn-active",
    "back-button-class": "back-btn",
    "next-button-class": "next-btn"
  }, _attrs), {
    "prev-button": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>`);
        _push2(ssrRenderComponent(_component_IconChevronLeft, { class: "m-auto" }, null, _parent2, _scopeId));
        _push2(`</span>`);
      } else {
        return [
          createVNode("span", null, [
            createVNode(_component_IconChevronLeft, { class: "m-auto" })
          ])
        ];
      }
    }),
    "next-button": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>`);
        _push2(ssrRenderComponent(_component_IconChevronRight, { class: "m-auto" }, null, _parent2, _scopeId));
        _push2(`</span>`);
      } else {
        return [
          createVNode("span", null, [
            createVNode(_component_IconChevronRight, { class: "m-auto" })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/base-paginate.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __nuxt_component_3 as _
};
//# sourceMappingURL=base-paginate-a6d60b6d.js.map
