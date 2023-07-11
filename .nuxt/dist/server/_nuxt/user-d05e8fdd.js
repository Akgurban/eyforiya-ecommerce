import { d as axios, e as defineStore } from "../server.mjs";
const $axios = axios().provide.axios;
const useUserStore = defineStore("user", {
  state: () => ({
    id: "",
    theme_id: "",
    name: ""
  }),
  actions: {
    hidePageOverflow(val, id) {
      if (val) {
        document.body.style.overflow = "hidden";
        if (id) {
          document.getElementById(id).style.overflow = "hidden";
        }
        return;
      }
      document.body.style.overflow = "visible";
      if (id) {
        document.getElementById(id).style.overflow = "visible";
      }
    },
    allLowerCaseNoCaps(str) {
      return str.split(" ").join("").toLowerCase();
    },
    async getTokens() {
      await $axios.get("/sanctum/csrf-cookie");
    },
    // category
    async getCategories() {
      return await $axios.get("/api/v1/admin/products/categories");
    },
    async addCategories(data) {
      return await $axios.post("/api/v1/admin/products/category/create", data);
    },
    async getOneCategories(data) {
      return await $axios.get(`/api/v1/admin/products/categories/${data}`);
    },
    async editCategories(data) {
      return await $axios.post("/api/v1/admin/products/category/update", data);
    },
    async deleteCategories(data) {
      return await $axios.post(
        `/api/v1/admin/products/category/delete/${data.uuid}`
      );
    },
    // special category
    async getSpecialCategories() {
      return await $axios.get("/api/v1/admin/products/special-categories");
    },
    async addSpecialCategories(data) {
      return await $axios.post(
        "/api/v1/admin/products/special-category/create",
        data
      );
    },
    async deleteSpecialCategories(data) {
      return await $axios.post(
        `/api/v1/admin/products/special-category/delete/${data.uuid}`
      );
    },
    async OneSpecialCategories(uuid) {
      return await $axios.get(`/api/v1/admin/products/sub-category/${uuid}`);
    },
    // sub category
    async getSubCategories() {
      return await $axios.get("/api/v1/admin/products/sub-categories");
    },
    async addSubCategories(data) {
      return await $axios.post(
        "/api/v1/admin/products/subcategory/create",
        data
      );
    },
    async editSubCategories(data) {
      return await $axios.post(
        "/api/v1/admin/products/sub-category/update",
        data
      );
    },
    async deleteSubCategories(data) {
      return await $axios.post(
        `/api/v1/admin/products/sub-category/delete/${data.uuid}`
      );
    },
    async OneSubCategory(uuid) {
      return await $axios.get(`/api/v1/admin/products/sub-category/${uuid}`);
    },
    // Banner
    async addBanner(data) {
      return await $axios.post("/api/v1/admin/products/banner/create", data);
    },
    async editBanner(data) {
      return await $axios.post("/api/v1/admin/products/banner/update", data);
    },
    async getBanner() {
      return await $axios.get("/api/v1/admin/products/banners");
    },
    async OneBanner(uuid) {
      return await $axios.get(`/api/v1/admin/products/banner/${uuid}`);
    },
    async deleteBanner(data) {
      return await $axios.post(
        `/api/v1/admin/products/banner/delete/${data.uuid}`
      );
    },
    // Brand
    async addBrand(data) {
      return await $axios.post("/api/v1/admin/products/brand/create", data);
    },
    async editBrand(data) {
      return await $axios.post("/api/v1/admin/products/brand/update", data);
    },
    async getBrand() {
      return await $axios.get("/api/v1/admin/products/brands");
    },
    async OneBrand(uuid) {
      return await $axios.get(`/api/v1/admin/products/brand/${uuid}`);
    },
    async deleteBrand(data) {
      return await $axios.post(
        `/api/v1/admin/products/brand/delete/${data.uuid}`
      );
    }
  },
  persist: true
});
export {
  useUserStore as u
};
//# sourceMappingURL=user-d05e8fdd.js.map
