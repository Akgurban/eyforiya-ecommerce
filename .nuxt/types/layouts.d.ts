import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "admin" | "default" | "login"
declare module "C:/Users/User/Desktop/eyforiya-ecommerce/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}