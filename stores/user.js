import { defineStore } from "pinia";
import axios from "~~/plugins/axios";

const $axios = axios().provide.axios;

export const useUserStore = defineStore("user", {
  state: () => ({
    id: "",
    theme_id: "",
    name: "",
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
      return await useMyFetch("/api/v1/admin/products/categories");
    },
    async addCategories(data) {
      return await useMyFetch("/api/v1/admin/products/category/create", {
        method: "POST",
        body: data,
      });
    },
    async getOneCategories(data) {
      return await useMyFetch(`/api/v1/admin/products/categories/${data}`);
    },
    async editCategories(data) {
      return await useMyFetch("/api/v1/admin/products/category/update", {
        method: "POST",
        body: data,
      });
    },
    async deleteCategories(data) {
      return await useMyFetch(
        `/api/v1/admin/products/category/delete/${data.uuid}`,
        {
          method: "POST",
        }
      );
    },

    // special category
    async getSpecialCategories() {
      return await useMyFetch("/api/v1/admin/products/special-categories");
    },
    async addSpecialCategories(data) {
      return await useMyFetch(
        "/api/v1/admin/products/special-category/create",
        {
          method: "POST",
          body: data,
        }
      );
    },
    async deleteSpecialCategories(data) {
      return await useMyFetch(
        `/api/v1/admin/products/special-category/delete/${data.uuid}`,
        {
          method: "POST",
        }
      );
    },
    async OneSpecialCategories(uuid) {
      return await useMyFetch(
        `/api/v1/admin/products/special-category/${uuid}`
      );
    },

    // sub category
    async getSubCategories() {
      return await useMyFetch("/api/v1/admin/products/sub-categories");
    },
    async addSubCategories(data) {
      return await useMyFetch("/api/v1/admin/products/subcategory/create", {
        method: "POST",
        body: data,
      });
    },
    async editSubCategories(data) {
      return await useMyFetch("/api/v1/admin/products/sub-category/update", {
        method: "POST",
        body: data,
      });
    },
    async deleteSubCategories(data) {
      return await useMyFetch(
        `/api/v1/admin/products/sub-category/delete/${data.uuid}`,
        {
          method: "POST",
        }
      );
    },
    async OneSubCategory(uuid) {
      return await useMyFetch(`/api/v1/admin/products/sub-category/${uuid}`);
    },

    // Banner
    async addBanner(data) {
      return await useMyFetch("/api/v1/admin/products/banner/create", {
        method: "POST",
        body: data,
      });
    },
    async editBanner(data) {
      return await useMyFetch("/api/v1/admin/products/banner/update", {
        method: "POST",
        body: data,
      });
    },
    async getBanner() {
      return await useMyFetch("/api/v1/admin/products/banners");
    },
    async OneBanner(uuid) {
      return await useMyFetch(`/api/v1/admin/products/banner/${uuid}`);
    },
    async deleteBanner(data) {
      return await useMyFetch(
        `/api/v1/admin/products/banner/delete/${data.uuid}`,
        {
          method: "POST",
        }
      );
    },

    // Brand
    async addBrand(data) {
      return await useMyFetch("/api/v1/admin/products/brand/create", {
        method: "POST",
        body: data,
      });
    },
    async editBrand(data) {
      return await useMyFetch("/api/v1/admin/products/brand/update", {
        method: "POST",
        body: data,
      });
    },
    async getBrand() {
      return await useMyFetch("/api/v1/admin/products/brands");
    },
    async OneBrand(uuid) {
      return await useMyFetch(`/api/v1/admin/products/brand/${uuid}`);
    },
    async deleteBrand(data) {
      return await useMyFetch(
        `/api/v1/admin/products/brand/delete/${data.uuid}`,
        {
          method: "POST",
        }
      );
    },

    // product
    async addProduct(data) {
      return await useMyFetch("/api/v1/admin/products/product/create", {
        method: "POST",
        body: data,
      });
    },
    async addProductImage(data) {
      return await useMyFetch("/api/v1/admin/products/image/create", {
        method: "POST",
        body: data,
      });
    },
    async editProduct(data) {
      return await useMyFetch("/api/v1/admin/products/product/update", {
        method: "POST",
        body: data,
      });
    },
    async getProduct() {
      return await useMyFetch(
        "/api/v1/admin/products/products?limit=100&offset=0"
      );
    },
    async OneProduct(uuid) {
      return await useMyFetch(`/api/v1/admin/products/product/${uuid}`);
    },
    async deleteProduct(data) {
      return await useMyFetch(
        `/api/v1/admin/products/product/delete/${data.uuid}`,
        {
          method: "POST",
        }
      );
    },
    async deleteProductImage(data) {
      return await useMyFetch(`/api/v1/admin/products/image/delete/${data}`, {
        method: "POST",
      });
    },

    // video
    async addVideos(data) {
      return await useMyFetch("/api/v1/admin/products/video/create", {
        method: "POST",
        body: data,
      });
    },
    async getVideos() {
      return await useMyFetch("/api/v1/client/products/videos");
    },

    //orders
    async getOrders() {
      return await useMyFetch(
        "/api/v1/admin/products/orders?offset=0&status=false&limit=15"
      );
    },
    async deleteOrders(data) {
      return await useMyFetch(`/api/v1/admin/products/order/delete/${data}`, {
        method: "POST",
      });
    },
    async updateOrder(data) {
      return await useMyFetch("/api/v1/admin/products/orders/update", {
        method: "POST",
        body: data,
      });
    },
  },
  persist: true,
});
