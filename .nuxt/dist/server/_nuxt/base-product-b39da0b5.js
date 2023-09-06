import { _ as __nuxt_component_0 } from "./nuxt-link-744fccd2.js";
import { _ as _sfc_main$1 } from "./like-a54ff78c.js";
import { _ as __nuxt_component_2 } from "./TrashButtonAndCounter-f0e42777.js";
import { useSSRContext, ref, watch, withCtx, unref, createVNode, toDisplayString, isRef } from "vue";
import { u as useMyFetch } from "./useMyFetch-4be3eef7.js";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { u as useFavStore } from "./favourite-d4e45d0f.js";
import { u as useAuthStore } from "./authStore-4fa9ef0d.js";
const _imports_0 = "" + __buildAssetsURL("new.2353a627.png");
const _sfc_main = {
  __name: "base-product",
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      default: {}
    }
  },
  setup(__props) {
    var _a;
    const props = __props;
    const favStore = useFavStore();
    const propItem = ref({});
    const user = useAuthStore();
    propItem.value = props.item;
    (_a = favStore.wish_items) == null ? void 0 : _a.forEach(async (e) => {
      if (e.uuid == props.item.uuid) {
        propItem.value.isLiked = true;
      } else {
        propItem.isLiked == false;
      }
    });
    const toggleFav = async (e) => {
      var _a2, _b, _c, _d, _e, _f, _g, _h;
      if ((_a2 = user.userToken) == null ? void 0 : _a2.uuid) {
        const { data: wish_user } = await useMyFetch(
          `/api/v1/client/wish-list?lang=tm&user_id=${(_b = user.userToken) == null ? void 0 : _b.uuid}`
        );
        if ((_c = wish_user.value) == null ? void 0 : _c.status) {
          (_d = wish_user.value.data) == null ? void 0 : _d.filter((e2) => {
            e2.images = e2.img_path;
          });
          favStore.wish_items = wish_user.value.data;
        }
      }
      if (e.isLiked) {
        e.isLiked = false;
        favStore.removeLocalStorage(e);
        if ((_e = user.userToken) == null ? void 0 : _e.uuid) {
          await useMyFetch(
            `/api/v1/client/wish-list/delete/${(_f = user.userToken) == null ? void 0 : _f.uuid}/${e.uuid}`,
            {
              method: "POST"
            }
          );
        }
      } else {
        e.isLiked = true;
        if ((_g = user.userToken) == null ? void 0 : _g.uuid) {
          useMyFetch(`/api/v1/client/wish-list/create`, {
            method: "POST",
            body: {
              product_id: e.uuid,
              user_id: (_h = user.userToken) == null ? void 0 : _h.uuid
            }
          });
        }
        favStore.setLocalStorage(e);
      }
    };
    const countProduct = ref(null);
    watch(countProduct, () => {
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_IconLike = _sfc_main$1;
      const _component_TrashButtonAndCounter = __nuxt_component_2;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: _ctx.localePath(`/product/${(_a2 = __props.item) == null ? void 0 : _a2.uuid}`),
        class: "group rounded-xl w-full text-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a3, _b, _c, _d, _e, _f;
          if (_push2) {
            _push2(`<img class="border w-full aspect-square select-none rounded-md md:rounded-lg border-[#e6e6e6]"${ssrRenderAttr("src", `http://duypbaha.com.tm/api/v1/uploads/images/${(_a3 = unref(propItem)) == null ? void 0 : _a3.images}`)} alt="" height="262" loading="lazy"${_scopeId}><div class="w-fit mx-auto font-medium md:text-3xl text-base font-alatsi text-[#3C4242] mt-3 mb-1"${_scopeId}>${ssrInterpolate((_b = unref(propItem)) == null ? void 0 : _b.name)}</div><div class="mx-auto font-semibold text-[#48BC4E] text-3xl font-alatsi w-fit pb-1 border-b border-[#44A4DB]"${_scopeId}>${ssrInterpolate((_c = unref(propItem)) == null ? void 0 : _c.price)} TMT </div>`);
          } else {
            return [
              createVNode("img", {
                class: "border w-full aspect-square select-none rounded-md md:rounded-lg border-[#e6e6e6]",
                src: `http://duypbaha.com.tm/api/v1/uploads/images/${(_d = unref(propItem)) == null ? void 0 : _d.images}`,
                alt: "",
                height: "262",
                loading: "lazy"
              }, null, 8, ["src"]),
              createVNode("div", { class: "w-fit mx-auto font-medium md:text-3xl text-base font-alatsi text-[#3C4242] mt-3 mb-1" }, toDisplayString((_e = unref(propItem)) == null ? void 0 : _e.name), 1),
              createVNode("div", { class: "mx-auto font-semibold text-[#48BC4E] text-3xl font-alatsi w-fit pb-1 border-b border-[#44A4DB]" }, toDisplayString((_f = unref(propItem)) == null ? void 0 : _f.price) + " TMT ", 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(propItem).status) {
        _push(`<div class="absolute -top-[10px] -left-[11px]"><img class="md:w-25 w-18"${ssrRenderAttr("src", _imports_0)} alt=""></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="absolute top-5 right-5">`);
      _push(ssrRenderComponent(_component_IconLike, {
        fill: "none",
        onClick: ($event) => toggleFav(unref(propItem)),
        class: [__props.item.isLiked ? "fill-red-600 text-red-600" : " text-gray-400", "group-hover:text-red-600 w-7"]
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_TrashButtonAndCounter, {
        class: "pt-5",
        item: unref(propItem),
        modelValue: unref(countProduct),
        "onUpdate:modelValue": ($event) => isRef(countProduct) ? countProduct.value = $event : null
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/base-product.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _,
  _imports_0 as a
};
//# sourceMappingURL=base-product-b39da0b5.js.map
