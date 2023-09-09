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
        class="admin-links bg-slate-300 hover:bg-slate-500 hover:text-slate-50 my-2 p-2 text-xl hover:underline cursor-pointer flex flex-col"
        >{{ item.name }}</NuxtLink
      >
    </ul>
  </div>
</template>

<script setup>
const posts = ref([
  { name: "Kategoriyalar", path: "/admin/categories" },
  { name: "Kici kategoriyalar", path: "/admin/sub-categories" },
  { name: "Mahabat", path: "/admin/banners" },
  { name: "Yorite Kategoriyalar", path: "/admin/special-categories" },
  { name: "Brendlar", path: "/admin/brands" },
  { name: "Wideolar", path: "/admin/videos" },
  { name: "Harytlar", path: "/admin/products" },
  { name: "Teswirler", path: "/admin/comments" },
  { name: "Zakazlar", path: "/admin/orders" },
  { name: "Reset Password", path: "/admin/reset-password" },
]);
const isRouteActive = ref(true);
</script>

<style scoped>
.admin-links.active {
  color: rgb(235, 231, 255);
  background-color: rgb(29, 29, 62);
}
</style>
