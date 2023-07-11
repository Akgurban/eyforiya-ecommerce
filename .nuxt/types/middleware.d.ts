import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = "auth" | "redirect"
declare module "C:/Users/User/Desktop/eyforiya/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}