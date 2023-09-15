import { _ as _sfc_main$1 } from "./base-input-997484dd.js";
import { _ as _sfc_main$2 } from "./base-img-upload-a92bf46a.js";
import { _ as _sfc_main$3 } from "./base-button-598d851d.js";
import { ref, withAsyncContext, unref, isRef, withCtx, createVNode, useSSRContext } from "vue";
import "hookable";
import { a as useRouter, b as useRoute } from "../server.mjs";
import "destr";
import "devalue";
import "klona";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { u as useUserStore } from "./user-f924bdcb.js";
import "uuid";
import "./plus-92a16e2a.js";
import "./_plugin-vue_export-helper-cc2b3d55.js";
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
import "vue-awesome-paginate";
import "defu";
import "./useAdminFetch-44f703d5.js";
import "./fetch-ba2ed0c4.js";
import "./adminStore-92ba1257.js";
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a, _b;
    let __temp, __restore;
    const userStore = useUserStore();
    useRouter();
    const route = useRoute();
    ref(null);
    const category_tm = ref(null);
    ref(null);
    ref(null);
    const category_img = ref(null);
    const selectedImg = ref(null);
    try {
      const { data } = ([__temp, __restore] = withAsyncContext(() => {
        var _a2;
        return userStore.OneBanner((_a2 = route.params) == null ? void 0 : _a2.id);
      }), __temp = await __temp, __restore(), __temp);
      category_tm.value = data.value.data.name;
      selectedImg.value = (_b = (_a = data.value) == null ? void 0 : _a.data) == null ? void 0 : _b.img_path;
    } catch (error) {
      console.log(error);
    }
    const val_tm = (e) => {
      if (e === "") {
        return "dogry dolduryn";
      }
    };
    const addCategory = async () => {
      try {
        if (!category_tm.value) {
          val_tm(category_tm.value);
          alert("Maglumatlary doly giriziň!");
          throw "Maglumatlary doly giriziň!";
        }
        const form = new FormData();
        form.append("name", category_tm.value);
        form.append("uuid", route.params.id);
        if (category_img.value) {
          form.append("img", category_img.value);
        }
        const { data } = await userStore.editBanner(form);
        if (data.status) {
          alert("Banner Gosuldy");
        }
        useRouter().push("/admin/banners");
      } catch (error) {
        console.log(error);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseInput = _sfc_main$1;
      const _component_BaseImgUpload = _sfc_main$2;
      const _component_BaseButton = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="my-4 font-bold bg-slate-300 p-2">Banner gosun</div><div class="flex gap-4 justify-between w-full"><div class="flex flex-col justify-between">`);
      _push(ssrRenderComponent(_component_BaseInput, {
        validate: val_tm,
        name: "Categoriya Turkmen",
        label: "Categoriya Turkmen",
        placeholder: "Categoriya Turkmen",
        modelValue: unref(category_tm),
        "onUpdate:modelValue": ($event) => isRef(category_tm) ? category_tm.value = $event : null
      }, null, _parent));
      _push(`</div></div><div class="flex justify-between mt-3"><div class="w-[400px]">`);
      _push(ssrRenderComponent(_component_BaseImgUpload, {
        currentImg: `http://duypbaha.com.tm/api/v1/uploads/banners/${unref(selectedImg)}`,
        modelValue: unref(category_img),
        "onUpdate:modelValue": ($event) => isRef(category_img) ? category_img.value = $event : null
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_BaseButton, {
        onClick: addCategory,
        class: "",
        type: "secondary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button${_scopeId}>Kategoriya uytgetmek</button>`);
          } else {
            return [
              createVNode("button", null, "Kategoriya uytgetmek")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/banners/edit/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_id_-8ab37c85.js.map
