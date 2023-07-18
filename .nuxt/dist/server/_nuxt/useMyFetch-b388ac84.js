import { _ as __nuxt_component_3 } from "./trash-d8d1b74e.js";
import { ref, toRef, getCurrentInstance, onServerPrefetch, unref, computed, reactive, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { h as useNuxtApp, c as createError, i as useRequestFetch, j as useRuntimeConfig } from "../server.mjs";
import { hash } from "ohash";
import "destr";
import "devalue";
import "klona";
import { u as useAuthStore } from "./authStore-a41c077e.js";
const getDefault = () => null;
function useAsyncData(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  let [key, handler, options = {}] = args;
  if (typeof key !== "string") {
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  }
  if (typeof handler !== "function") {
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  }
  options.server = options.server ?? true;
  options.default = options.default ?? getDefault;
  options.lazy = options.lazy ?? false;
  options.immediate = options.immediate ?? true;
  const nuxt = useNuxtApp();
  const getCachedData = () => nuxt.isHydrating ? nuxt.payload.data[key] : nuxt.static.data[key];
  const hasCachedData = () => getCachedData() !== void 0;
  if (!nuxt._asyncData[key]) {
    nuxt._asyncData[key] = {
      data: ref(getCachedData() ?? options.default()),
      pending: ref(!hasCachedData()),
      error: toRef(nuxt.payload._errors, key),
      status: ref("idle")
    };
  }
  const asyncData = { ...nuxt._asyncData[key] };
  asyncData.refresh = asyncData.execute = (opts = {}) => {
    if (nuxt._asyncDataPromises[key]) {
      if (opts.dedupe === false) {
        return nuxt._asyncDataPromises[key];
      }
      nuxt._asyncDataPromises[key].cancelled = true;
    }
    if ((opts._initial || nuxt.isHydrating && opts._initial !== false) && hasCachedData()) {
      return getCachedData();
    }
    asyncData.pending.value = true;
    asyncData.status.value = "pending";
    const promise = new Promise(
      (resolve, reject) => {
        try {
          resolve(handler(nuxt));
        } catch (err) {
          reject(err);
        }
      }
    ).then((_result) => {
      if (promise.cancelled) {
        return nuxt._asyncDataPromises[key];
      }
      let result = _result;
      if (options.transform) {
        result = options.transform(_result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      asyncData.data.value = result;
      asyncData.error.value = null;
      asyncData.status.value = "success";
    }).catch((error) => {
      if (promise.cancelled) {
        return nuxt._asyncDataPromises[key];
      }
      asyncData.error.value = error;
      asyncData.data.value = unref(options.default());
      asyncData.status.value = "error";
    }).finally(() => {
      if (promise.cancelled) {
        return;
      }
      asyncData.pending.value = false;
      nuxt.payload.data[key] = asyncData.data.value;
      if (asyncData.error.value) {
        nuxt.payload._errors[key] = createError(asyncData.error.value);
      }
      delete nuxt._asyncDataPromises[key];
    });
    nuxt._asyncDataPromises[key] = promise;
    return nuxt._asyncDataPromises[key];
  };
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxt.payload.serverRendered;
  if (fetchOnServer && options.immediate) {
    const promise = initialFetch();
    if (getCurrentInstance()) {
      onServerPrefetch(() => promise);
    } else {
      nuxt.hook("app:created", () => promise);
    }
  }
  const asyncDataPromise = Promise.resolve(nuxt._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
function useFetch(request, arg1, arg2) {
  const [opts = {}, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
  const _key = opts.key || hash([autoKey, unref(opts.baseURL), typeof request === "string" ? request : "", unref(opts.params || opts.query)]);
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useFetch] key must be a string: " + _key);
  }
  if (!request) {
    throw new Error("[nuxt] [useFetch] request is missing.");
  }
  const key = _key === autoKey ? "$f" + _key : _key;
  const _request = computed(() => {
    let r = request;
    if (typeof r === "function") {
      r = r();
    }
    return unref(r);
  });
  if (!opts.baseURL && typeof _request.value === "string" && _request.value.startsWith("//")) {
    throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
  }
  const {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick: pick2,
    watch,
    immediate,
    ...fetchOptions
  } = opts;
  const _fetchOptions = reactive({
    ...fetchOptions,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  });
  const _asyncDataOptions = {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick: pick2,
    immediate,
    watch: watch === false ? [] : [_fetchOptions, _request, ...watch || []]
  };
  let controller;
  const asyncData = useAsyncData(key, () => {
    var _a;
    (_a = controller == null ? void 0 : controller.abort) == null ? void 0 : _a.call(controller);
    controller = typeof AbortController !== "undefined" ? new AbortController() : {};
    const isLocalFetch = typeof _request.value === "string" && _request.value.startsWith("/");
    let _$fetch = opts.$fetch || globalThis.$fetch;
    if (!opts.$fetch && isLocalFetch) {
      _$fetch = useRequestFetch();
    }
    return _$fetch(_request.value, { signal: controller.signal, ..._fetchOptions });
  }, _asyncDataOptions);
  return asyncData;
}
const _imports_0 = "" + __buildAssetsURL("add_cart.803e3000.svg");
const _sfc_main = {
  __name: "TrashButtonAndCounter",
  __ssrInlineRender: true,
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const count = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconTrash = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(count) == 0) {
        _push(`<div class="relative select-none mt-5 mb-[30px] md:mb-[30px] hover:scale-95 transition-transform duration-150"><img class="mx-auto h-9 md:h-10 touch-pan-y"${ssrRenderAttr("src", _imports_0)} alt=""><div class="absolute top-0 right-1/2 translate-x-1/2 flex items-center gap-3 text-white h-fit"><div class="md:text-2xl text-lg font-alatsi whitespace-nowrap"> Sebede goş </div>`);
        _push(ssrRenderComponent(_component_IconTrash, {
          draggable: "false",
          class: "inline pointer-events-none mt-1 md:w-9 w-6 md:h-9 h-6"
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(count) != 0) {
        _push(`<div class="w-[80%] mt-3 z-50 h-19"><div class="w-full font-bold justify-evenly flex gap-2 px-6 py-1 md:py-2 rounded-xl bg-[#F6F6F6]"><div class="cursor-pointer text-2xl text-[#3C4242] px-2 select-none"> - </div><div class="cursor-pointer text-2xl w-7 text-center">${ssrInterpolate(unref(count))}</div><div class="cursor-pointer text-2xl text-[#3C4242] px-2 select-none"> + </div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TrashButtonAndCounter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const useMyFetch = (request, opts) => {
  const config = /* @__PURE__ */ useRuntimeConfig();
  const authStore = useAuthStore();
  console.log(authStore, "authStoress");
  return useFetch(request, {
    baseURL: config.public.baseURL,
    ...opts,
    onRequest({ request: request2, options }) {
      options.headers = options.headers || {};
      options.headers.authorization = authStore;
    }
  }, "$pLJOpmWEpt");
};
export {
  _sfc_main as _,
  useMyFetch as u
};
//# sourceMappingURL=useMyFetch-b388ac84.js.map
