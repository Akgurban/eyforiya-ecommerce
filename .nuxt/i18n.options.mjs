export const localeCodes = ["tk","en","ru"]

export const localeMessages = {
  "tk": [{ key: "../lang/tk.json", load: () => import("../lang/tk.json" /* webpackChunkName: "lang_tk_json_tk_json" */) }],
  "en": [{ key: "../lang/en.json", load: () => import("../lang/en.json" /* webpackChunkName: "lang_en_json_en_json" */) }],
  "ru": [{ key: "../lang/ru.json", load: () => import("../lang/ru.json" /* webpackChunkName: "lang_ru_json_ru_json" */) }],
}

export const additionalMessages = Object({"tk":[],"en":[],"ru":[],})

export const resolveNuxtI18nOptions = async (context) => {
  const nuxtI18nOptions = Object({})
  nuxtI18nOptions.experimental = Object({"jsTsFormatResource":false})
  nuxtI18nOptions.compilation = Object({"strictMessage":true,"escapeHtml":false})
 const vueI18nConfigLoader = async (loader) => {
            const config = await loader().then(r => r.default || r)
            return typeof config === 'object'
              ? config
              : typeof config === 'function'
                ? await config()
                : {}
          }
  nuxtI18nOptions.vueI18n = Object({})
  nuxtI18nOptions.locales = [Object({"code":"tk","file":"tk.json","hash":"23bc93a6","type":"static"}),Object({"code":"en","file":"en.json","hash":"38175145","type":"static"}),Object({"code":"ru","file":"ru.json","hash":"fb4504ec","type":"static"})]
  nuxtI18nOptions.defaultLocale = "tk"
  nuxtI18nOptions.defaultDirection = "ltr"
  nuxtI18nOptions.routesNameSeparator = "___"
  nuxtI18nOptions.trailingSlash = false
  nuxtI18nOptions.defaultLocaleRouteNameSuffix = "default"
  nuxtI18nOptions.strategy = "prefix_except_default"
  nuxtI18nOptions.lazy = true
  nuxtI18nOptions.langDir = "lang/"
  nuxtI18nOptions.rootRedirect = null
  nuxtI18nOptions.detectBrowserLanguage = Object({"alwaysRedirect":false,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","redirectOn":"root","useCookie":true})
  nuxtI18nOptions.differentDomains = false
  nuxtI18nOptions.baseUrl = ""
  nuxtI18nOptions.dynamicRouteParams = false
  nuxtI18nOptions.customRoutes = "page"
  nuxtI18nOptions.pages = Object({})
  nuxtI18nOptions.skipSettingLocaleOnNavigate = false
  nuxtI18nOptions.types = "composition"
  nuxtI18nOptions.debug = false
  return nuxtI18nOptions
}

export const nuxtI18nOptionsDefault = Object({experimental: Object({"jsTsFormatResource":false}),compilation: Object({"strictMessage":true,"escapeHtml":false}),vueI18n: "",locales: [],defaultLocale: "",defaultDirection: "ltr",routesNameSeparator: "___",trailingSlash: false,defaultLocaleRouteNameSuffix: "default",strategy: "prefix_except_default",lazy: false,langDir: null,rootRedirect: null,detectBrowserLanguage: Object({"alwaysRedirect":false,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","redirectOn":"root","useCookie":true}),differentDomains: false,baseUrl: "",dynamicRouteParams: false,customRoutes: "page",pages: Object({}),skipSettingLocaleOnNavigate: false,types: "composition",debug: false})

export const nuxtI18nInternalOptions = Object({__normalizedLocales: [Object({"code":"tk","file":"tk.json","hash":"23bc93a6","type":"static"}),Object({"code":"en","file":"en.json","hash":"38175145","type":"static"}),Object({"code":"ru","file":"ru.json","hash":"fb4504ec","type":"static"})]})
export const NUXT_I18N_MODULE_ID = "@nuxtjs/i18n"
export const isSSG = false
