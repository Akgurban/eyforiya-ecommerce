<template>
  <div
    class="md:w-[400px] w-full md:h-screen h-auto md:relative md:mb-10 bottom-0 bg-blue-50 shadow-md font-bold text-xl"
  >
    <ul
      class="md:m-5 flex md:flex-col flex-row gap-3 mt-3 justify-between md:justify-start"
    >
      <NuxtLink
        v-for="item in posts"
        :key="item.name"
        :to="localePath(item.path)"
        :class="{ active: useRoute().path.includes(item.path) }"
        class="admin-links gap-1 md:gap-3 text-sm md:text-xl md:first:mt-10 rounded-md hover:bg-slate-500 hover:text-slate-50 p-2 my-2 md:my-0"
        >{{ $t(item.name) }}</NuxtLink
      >
      <BaseButton
        @click="logout"
        class="admin-links gap-1 md:gap-3 text-sm md:text-2xl rounded-md hover:bg-slate-500 hover:text-slate-50 p-2 my-2 md:my-0"
        type="danger"
        >Logout</BaseButton
      >
    </ul>
  </div>
</template>

<script setup>
import { useAuthStore } from "@/stores/authStore";
const authStore = useAuthStore();
const router = useRouter();
const posts = ref([
  { name: "history", path: "/profil/order" },
  { name: "password", path: "/profil/password" },
  { name: "username", path: "/profil/username" },
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
