import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _imports_0 = "" + __publicAssetsURL("special/spec-1.png");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "container mx-auto mt-8 px-4" }, _attrs))}><div class="flex flex-wrap font-bold font-alatsi text-3xl mb-4"> Duypbaha HJ </div><div class="flex items-start gap-4 md:flex-row flex-col"><img${ssrRenderAttr("src", _imports_0)} alt=""><div class="mb-4"><p>${ssrInterpolate(_ctx.$t("about_page"))}</p><ul class="list-disc ml-6"><li class="font-bold">TMCARS-DÜÝPBAHA</li><li class="font-bold">IMO ID: duypbaha; imo id_PTJhpq7xWC</li><li class="font-bold">Instagram: zemin_lux; duypbaha</li><li class="font-bold">Tik-tok:@dunyatekedurdyeva</li><li class="font-bold">Start:vitallomay</li><li class="font-bold">Link:duypbaha</li><li class="font-bold"> E-mail: <a href="mailto:info@duypbaha.com"> info@duypbaha.com </a>   <a href="mailto:vepa.tekedurdyyev@mail.ru"> vepa.tekedurdyyev@mail.ru </a></li></ul></div></div></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about-us.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const aboutUs = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  aboutUs as default
};
//# sourceMappingURL=about-us-e5bd7d9d.js.map
