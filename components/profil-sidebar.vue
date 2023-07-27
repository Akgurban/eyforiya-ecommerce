<template>
  <div class="w-[400px] h-screen bg-blue-50 shadow-md font-bold text-xl">
    <ul class="m-5">
      <NuxtLink
        v-for="item in posts"
        :key="item.name"
        :to="item.path"
        :class="{ active: useRoute().path.includes(item.path) }"
        class="admin-links hover:bg-slate-500 hover:text-slate-50 my-2 p-2 text-2xl hover:underline cursor-pointer flex flex-col"
        >{{ item.name }}</NuxtLink
      >
    </ul>
    <BaseButton @click="logout" class="m-6 mt-10 w-[320px]" type="danger"
      >Logout</BaseButton
    >
  </div>
</template>

<script setup>
import { useAuthStore } from "@/stores/authStore";
const authStore = useAuthStore();
const router = useRouter();
const posts = ref([
  { name: "zakazlaryn istoriyasy", path: "/profil/order" },
  { name: "password calyshmak", path: "/profil/password" },
  { name: "username calysmak", path: "/profil/username" },
]);
const isRouteActive = ref(true);
const logout = () => {
  authStore.userToken = "";
  router.push("/");
};
</script>

<style scoped>
.admin-links.active {
  color: rgb(235, 231, 255);
  background-color: rgb(29, 29, 62);
}
</style>
