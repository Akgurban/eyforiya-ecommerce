import { _ as _sfc_main$2 } from "./like-a54ff78c.js";
import { _ as _sfc_main$3 } from "./TrashButtonAndCounter-bd6226e8.js";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext, ref, withAsyncContext, unref, isRef } from "vue";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import { _ as _sfc_main$4 } from "./base-product-aed4d765.js";
import { d as useToast, h as useI18n, a as useRouter, b as useRoute, c as createError, u as useHead } from "../server.mjs";
import "hookable";
import "./index-e12b288f.js";
import "destr";
import "devalue";
import "klona";
import { b as useSessionStorage, S as StorageSerializers } from "./trash-4c7dc6a3.js";
import { u as useMyFetch } from "./useMyFetch-4be3eef7.js";
import { u as useAuthStore } from "./authStore-4fa9ef0d.js";
import { u as useFavStore } from "./favourite-ff026b63.js";
import "./trash-68d2590c.js";
import "./nuxt-link-744fccd2.js";
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
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48" fill="currentColor"><path d="M120-160v-640l760 320-760 320Zm60-93 544-227-544-230v168l242 62-242 60v167Zm0 0v-457 457Z"></path></svg></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icon/send.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _id__vue_vue_type_style_index_0_scoped_6194d592_lang = "";
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a, _b, _c;
    let __temp, __restore;
    const favStore = useFavStore();
    const $toast = useToast();
    const user = useAuthStore();
    const { locale } = useI18n();
    const oneProduct = ref(null);
    const similarProducts = ref([]);
    const selectedImg = ref(null);
    const comment = ref(null);
    const oneCountProduct = ref(0);
    const changedOneProduct = ref(null);
    useRouter();
    const route = useRoute();
    const url = `/api/v1/client/products/product/${route.params.id}?lang=${locale.value}`;
    const lesson = useSessionStorage(url, null, {
      serializer: StorageSerializers.object
    });
    const sendComment = async () => {
      var _a2, _b2, _c2, _d;
      if (!((_a2 = comment.value) == null ? void 0 : _a2.length)) {
        return $toast.error("kommentariya bosh bolmaly dal");
      }
      if (!((_b2 = user.userToken) == null ? void 0 : _b2.uuid)) {
        return $toast.error("Ulgama girin");
      }
      const { data } = await useMyFetch(`/api/v1/client/comment/create`, {
        method: "POST",
        body: {
          product_id: oneProduct.value.uuid,
          user_id: (_c2 = user.userToken) == null ? void 0 : _c2.uuid,
          content: comment.value
        }
      });
      if ((_d = data.value) == null ? void 0 : _d.status) {
        comment.value = null;
        $toast.success("Habarynyz garasylyar");
      }
    };
    const { data: comments } = ([__temp, __restore] = withAsyncContext(() => useMyFetch(
      `/api/v1/client/products/product-comment?product_id=${route.params.id}&offset=0&limit=100`
    )), __temp = await __temp, __restore(), __temp);
    console.log(lesson.value, "lesson.value");
    if (!lesson.value) {
      console.log(lesson.value, "lesson.value");
      const { data, error, status } = ([__temp, __restore] = withAsyncContext(() => useMyFetch(url)), __temp = await __temp, __restore(), __temp);
      if (error.value) {
        throw createError({
          ...error.value,
          statusMessage: `Could not fetch lesson`
        });
      }
      lesson.value = data.value;
      if (status.value) {
        oneProduct.value = data.value.data.one_products;
        changedOneProduct.value = data.value.data.one_products;
        selectedImg.value = data.value.data.one_products.images[0];
        data.value.data.products.filter((e, index) => {
          var _a2, _b2, _c2, _d;
          if (data.value.data.one_products.uuid !== e.uuid) {
            similarProducts.value.push(e);
          } else {
            changedOneProduct.value = {
              name: (_a2 = data.value.data.one_products) == null ? void 0 : _a2.name,
              uuid: (_b2 = data.value.data.one_products) == null ? void 0 : _b2.uuid,
              images: (_c2 = data.value.data.one_products) == null ? void 0 : _c2.images[0].img_path,
              price: (_d = data.value.data.one_products) == null ? void 0 : _d.price
            };
          }
        });
      }
    } else {
      oneProduct.value = lesson.value.data.one_products;
      changedOneProduct.value = lesson.value.data.one_products;
      selectedImg.value = lesson.value.data.one_products.images[0];
      lesson.value.data.products.filter((e, index) => {
        var _a2, _b2, _c2, _d;
        if (lesson.value.data.one_products.uuid !== e.uuid) {
          similarProducts.value.push(e);
        } else {
          changedOneProduct.value = {
            name: (_a2 = lesson.value.data.one_products) == null ? void 0 : _a2.name,
            uuid: (_b2 = lesson.value.data.one_products) == null ? void 0 : _b2.uuid,
            images: (_c2 = lesson.value.data.one_products) == null ? void 0 : _c2.images[0].img_path,
            price: (_d = lesson.value.data.one_products) == null ? void 0 : _d.price
          };
        }
      });
      console.log(`getting from cache`);
    }
    (_a = favStore.wish_items) == null ? void 0 : _a.forEach(async (e) => {
      if (e.uuid == oneProduct.value.uuid) {
        oneProduct.value.isLiked = true;
      } else {
        oneProduct.value.isLiked == false;
      }
    });
    const toggleFav = async (e) => {
      var _a2, _b2, _c2, _d;
      if (e.isLiked) {
        e.isLiked = false;
        changedOneProduct.value = {
          name: e == null ? void 0 : e.name,
          uuid: e == null ? void 0 : e.uuid,
          images: e == null ? void 0 : e.images[0].img_path,
          price: e == null ? void 0 : e.price
        };
        favStore.removeLocalStorage(changedOneProduct.value);
        if ((_a2 = user.userToken) == null ? void 0 : _a2.uuid) {
          await useMyFetch(
            `/api/v1/client/wish-list/delete/${(_b2 = user.userToken) == null ? void 0 : _b2.uuid}/${e.uuid}`,
            {
              method: "POST"
            }
          );
        }
      } else {
        e.isLiked = true;
        changedOneProduct.value = {
          name: e == null ? void 0 : e.name,
          uuid: e == null ? void 0 : e.uuid,
          images: e == null ? void 0 : e.images[0].img_path,
          price: e == null ? void 0 : e.price
        };
        if ((_c2 = user.userToken) == null ? void 0 : _c2.uuid) {
          useMyFetch(`/api/v1/client/wish-list/create`, {
            method: "POST",
            body: {
              product_id: e.uuid,
              user_id: (_d = user.userToken) == null ? void 0 : _d.uuid
            }
          });
        }
        favStore.setLocalStorage(changedOneProduct.value);
      }
    };
    useHead({
      title: (_b = oneProduct.value) == null ? void 0 : _b.name,
      meta: [
        { name: "description", content: (_c = oneProduct.value) == null ? void 0 : _c.description }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      const _component_IconLike = _sfc_main$2;
      const _component_TrashButtonAndCounter = _sfc_main$3;
      const _component_IconSend = __nuxt_component_2;
      const _component_BaseProduct = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-6194d592><div class="aspect-[video] w-screen 2xl:w-[1428px] mx-auto flex justify-between items-start px-4 sm:flex-row flex-col" data-v-6194d592><div class="sm:w-[35%] w-full relative" data-v-6194d592><img${ssrRenderAttr("src", `http://duypbaha.com.tm/api/v1/uploads/images/${(_a2 = unref(selectedImg)) == null ? void 0 : _a2.img_path}`)} class="w-full one_img rounded-md aspect-square" alt="" data-v-6194d592><div class="absolute top-5 right-5" data-v-6194d592>`);
      _push(ssrRenderComponent(_component_IconLike, {
        fill: "none",
        onClick: ($event) => toggleFav(unref(oneProduct)),
        class: [
          unref(oneProduct).isLiked ? "fill-red-600 text-red-600" : " text-white",
          "hover:text-red-600 w-7"
        ]
      }, null, _parent));
      _push(`</div><div class="w-full relative mt-5 flex justify-start" data-v-6194d592><!--[-->`);
      ssrRenderList(unref(oneProduct).images, (item) => {
        _push(`<img${ssrRenderAttr("src", `http://duypbaha.com.tm/api/v1/uploads/images/${item == null ? void 0 : item.img_path}`)} class="w-[19%] rounded-md aspect-square mr-2 border border-blue-200" alt="" data-v-6194d592>`);
      });
      _push(`<!--]--></div></div><div class="w-[60%] sm:ml-6 ml-0 mt-6" data-v-6194d592><div data-v-6194d592><div class="one_prod w-fit cursor-pointer transition-all duration-100 hover:text-[#44A4DB] md:text-5xl text-2xl mb-1 font-semibold font-inter" data-v-6194d592>${ssrInterpolate(unref(oneProduct).name)}</div><div class="sm:pt-1.5 pt-0 pb-1.5 md:text-xl text-lg sm:font-normal font-medium" data-v-6194d592>${ssrInterpolate(unref(oneProduct).description)}</div><div class="flex items-center flex-wrap sm:px-4 px-1 py-2 border-t border-b border-gray-200" data-v-6194d592><div class="text-white cursor-pointer rounded-md text-2xl px-4 py-3 bg-[#44A4DB]" data-v-6194d592>${ssrInterpolate(unref(oneProduct).price)} TMT </div></div><div class="w-fit md:ml-5 ml-1 pt-3" data-v-6194d592>`);
      _push(ssrRenderComponent(_component_TrashButtonAndCounter, {
        item: unref(changedOneProduct),
        modelValue: unref(oneCountProduct),
        "onUpdate:modelValue": ($event) => isRef(oneCountProduct) ? oneCountProduct.value = $event : null
      }, null, _parent));
      _push(`</div><div data-v-6194d592><p data-v-6194d592>Kommentariya</p><div class="min-w-[300px] w-auto flex gap-4" data-v-6194d592><textarea class="border border-[#44A4DB] p-2" type="text" data-v-6194d592>${ssrInterpolate(unref(comment))}</textarea>`);
      _push(ssrRenderComponent(_component_IconSend, {
        onClick: sendComment,
        class: "md:cursor-pointer self-end cursor-auto text-[#44A4DB] fill-[#44A4DB]"
      }, null, _parent));
      _push(`</div></div></div></div></div><div class="w-screen 2xl:w-[1428px] mx-auto px-4 sm:flex-row flex-col" data-v-6194d592><div class="bg-teal-100 mt-6" data-v-6194d592><p class="font-alatsi font-bold p-2" data-v-6194d592>Kommentariyalar</p><ul data-v-6194d592><!--[-->`);
      ssrRenderList(unref(comments).data.comments, (item, index) => {
        _push(`<li class="odd:bg-teal-50 even:bg-teal-100 p-2 font-inter" data-v-6194d592>${ssrInterpolate(index + 1)}: ${ssrInterpolate(item.content)}</li>`);
      });
      _push(`<!--]--></ul></div><div class="mt-8 px-0 md:px-10 cursor-pointer transition-all duration-100 md:text-4xl text-2xl mb-1 font-semibold font-inter" data-v-6194d592>${ssrInterpolate(_ctx.$t("similar_products"))}</div><div style="${ssrRenderStyle({})}" class="flex flex-wrap justify-between md:px-1 mt-2" data-v-6194d592><!--[-->`);
      ssrRenderList(unref(similarProducts), (item, index) => {
        _push(`<div class="group relative md:w-[276px] w-[176px] product_item mb-3 hover:shadow-none md:hover:shadow-hero bg-[#D9D9D940] hover:bg-[#D9D9D940] transition-all ease-in-out duration-200 rounded-xl flex flex-col justify-between items-center" data-v-6194d592>`);
        _push(ssrRenderComponent(_component_BaseProduct, { item }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/product/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6194d592"]]);
export {
  _id_ as default
};
//# sourceMappingURL=_id_-916dec47.js.map
