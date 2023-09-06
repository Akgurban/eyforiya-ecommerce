import { _ as _sfc_main$1 } from "./base-select-520e7f36.js";
import { _ as _sfc_main$2 } from "./base-button-598d851d.js";
import { _ as __nuxt_component_3 } from "./base-paginate-a6d60b6d.js";
import { ref, withAsyncContext, watch, unref, isRef, withCtx, createTextVNode, useSSRContext } from "vue";
import "hookable";
import { d as useToast, a as useRouter } from "../server.mjs";
import "destr";
import "devalue";
import "klona";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { u as useUserStore } from "./user-2db9475d.js";
import "./chevron-left-454043cf.js";
import "./_plugin-vue_export-helper-cc2b3d55.js";
import "./chevron-right-0f6a5ea3.js";
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
import "./fetch-ba2ed0c4.js";
import "./adminStore-ee8c4b80.js";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const userStore = useUserStore();
    const $toast = useToast();
    const count = ref(1);
    const totalItems = ref(1);
    const orders = ref(null);
    useRouter();
    const statusValue = ref({ name: `garashylyar` });
    try {
      const { data } = ([__temp, __restore] = withAsyncContext(() => userStore.getOrders({
        limit: 25,
        offset: 0,
        status: statusValue.value.name == `tassyklanan` ? true : false
      })), __temp = await __temp, __restore(), __temp);
      orders.value = data.value.data.orders;
    } catch (error) {
      console.log(error);
    }
    const getCategoriesr = async () => {
      var _a;
      try {
        const { data } = await userStore.getOrders({
          limit: 15,
          offset: count.value - 1,
          status: statusValue.value.name == `tassyklanan` ? true : false
        });
        orders.value = data.value.data.orders;
        totalItems.value = (_a = data.value.data) == null ? void 0 : _a.count;
      } catch (error) {
        console.log(error);
      }
    };
    const deleteCategory = async (e) => {
      try {
        const { data, status } = await userStore.deleteOrders(e.order_id);
        if (status) {
          $toast.success("order deleted!");
        }
        await getCategoriesr();
      } catch (error) {
        console.log(error);
      }
    };
    const setStatus = async (e) => {
      try {
        const { data, status } = await userStore.updateOrder({
          status: statusValue.value.name !== `tassyklanan` ? true : false,
          uuid: e.order_id
        });
        if (status) {
          $toast.success("Status uytgedi!");
        }
        await getCategoriesr();
      } catch (error) {
        console.log(error);
      }
    };
    watch(statusValue, async () => {
      await getCategoriesr();
    });
    watch(count, async () => {
      await getCategoriesr();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseSelect = _sfc_main$1;
      const _component_BaseButton = _sfc_main$2;
      const _component_BasePaginate = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="w-80 flex gap-2 items-center ml-auto"><div class="${ssrRenderClass([
        unref(statusValue).name == `tassyklanan` ? "text-green-700" : "text-red-500",
        "text-xl font-bold"
      ])}"> Yagdayy: </div>`);
      _push(ssrRenderComponent(_component_BaseSelect, {
        modelValue: unref(statusValue),
        "onUpdate:modelValue": ($event) => isRef(statusValue) ? statusValue.value = $event : null,
        options: [{ name: `tassyklanan` }, { name: `garashylyar` }]
      }, null, _parent));
      _push(`</div><div class="rounded-md p-2 m-1 flex justify-between"><p class="font-bold">Zakazlar</p>`);
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
      ssrRenderList(unref(orders), (item) => {
        _push(`<div class="bg-gray-200 cursor-pointer text-lg font-bold rounded-md p-2 m-1"><div class="bg-gray-200 cursor-pointer flex justify-between items-center text-lg font-bold rounded-md p-2 m-1"><p>name: ${ssrInterpolate(item.username)}</p><p>+993 ${ssrInterpolate(item.string)}</p><div class="flex gap-3">`);
        _push(ssrRenderComponent(_component_BaseButton, {
          onClick: ($event) => setStatus(item),
          type: "primary"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Status uytget`);
            } else {
              return [
                createTextVNode("Status uytget")
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
        _push(`</div></div><ul class="pl-10"><!--[-->`);
        ssrRenderList(item.products, (small) => {
          _push(`<li class="mt-2 odd:bg-gray-50 even:bg-gray-100 cursor-pointer flex justify-between items-center text-lg font-bold rounded-md p-2 m-1"><img${ssrRenderAttr("src", `http://duypbaha.com.tm/api/v1/uploads/images/${small == null ? void 0 : small.img_path}`)} alt="" class="h-10 w-15"><p>${ssrInterpolate(small.product_name)}</p><p>${ssrInterpolate(small.price)} TMT</p><p>count: ${ssrInterpolate(small.count)}</p></li>`);
        });
        _push(`<!--]--></ul></div>`);
      });
      _push(`<!--]-->`);
      _push(ssrRenderComponent(_component_BasePaginate, {
        modelValue: unref(count),
        "onUpdate:modelValue": ($event) => isRef(count) ? count.value = $event : null,
        "total-items": unref(totalItems)
      }, null, _parent));
      _push(`</ul></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/orders/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-d812c168.js.map
