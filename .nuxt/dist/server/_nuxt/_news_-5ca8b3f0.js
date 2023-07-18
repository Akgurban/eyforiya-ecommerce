import { unref, useSSRContext } from "vue";
import "hookable";
import { _ as _export_sfc, a as useRoute } from "../server.mjs";
import "destr";
import "devalue";
import "klona";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
import "ofetch";
import "#internal/nitro";
import "unctx";
/* empty css                     */import "vue-router";
import "h3";
import "ufo";
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
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}>${ssrInterpolate(("useRoute" in _ctx ? _ctx.useRoute : unref(useRoute))().query.name)}</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[news].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _news_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  _news_ as default
};
//# sourceMappingURL=_news_-5ca8b3f0.js.map
