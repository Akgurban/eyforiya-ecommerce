<template>
  <div class="w-[300px] h-screen bg-slate-200 p-4 shadow-md font-bold text-2xl">
    <img
      class="mx-auto md:cursor-pointer cursor-auto"
      @click="useRouter().push(localePath('/'))"
      src="~/assets/images/logo.png"
      alt=""
    />
    <ul class="m-5">
      <NuxtLink
        v-for="item in posts"
        :key="item.name"
        :to="item.path"
        :class="{ active: useRoute().path.includes(item.path) }"
        class="admin-links bg-slate-300 hover:bg-slate-500 hover:text-slate-50 my-2 p-2 text-2xl hover:underline cursor-pointer flex flex-col"
        >{{ item.name }}</NuxtLink
      >
    </ul>
  </div>
</template>

<script setup>
const posts = ref([
  { name: "Categories", path: "/admin/categories" },
  { name: "Sub Categories", path: "/admin/sub-categories" },
  { name: "Banners", path: "/admin/banners" },
  { name: "Specials", path: "/admin/special-categories" },
  { name: "Brands", path: "/admin/brands" },
  { name: "Videos", path: "/admin/videos" },
  { name: "Products", path: "/admin/products" },
  { name: "Comments", path: "/admin/comments" },
]);
const isRouteActive = ref(true);

console.log(useRoute());
</script>

<style scoped>
.admin-links.active {
  color: rgb(235, 231, 255);
  background-color: rgb(29, 29, 62);
}
</style>
