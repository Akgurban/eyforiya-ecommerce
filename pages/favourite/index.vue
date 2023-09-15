<template>
  <div class="2xl:w-[1424px] xl:w-[1230px] w-screen mx-auto">
    <div
      class="2xl:w-[1424px] xl:w-[1230px] w-screen flex gap-3 items-center pl-10"
    >
      <NuxtLink to="/" class="cursor-pointer hover:font-bold">{{
        $t("home")
      }}</NuxtLink>
      <IconChevronRight class="h-3" />
      <p class="cursor-pointer font-bold">{{ $t("favourites") }}</p>
    </div>
    <div
      class="w-full flex gap-3 flex-wrap my-5 md:justify-start justify-start px-3"
    >
      <div
        class="mt-20 text-center w-full text-6xl text-gray-500 font-alatsi font-bold"
        v-if="!fav.wish_items?.length"
      >
        {{ $t("favourites_none") }}
      </div>
      <div
        v-for="item in fav.wish_items"
        :key="item"
        class="group relative md:w-[272px] w-[176px] product_item mb-3 hover:shadow-none md:hover:shadow-hero bg-[#D9D9D940] hover:bg-[#D9D9D940] transition-all ease-in-out duration-200 rounded-xl flex flex-col justify-between items-center"
      >
        <BaseProduct :item="item"> </BaseProduct>
      </div>
    </div>
  </div>
</template>

<script setup>
const count = ref(0);
import { useFavStore } from "~~/stores/favourite";
import { useAuthStore } from "@/stores/authStore";
const favStore = useFavStore();
const user = useAuthStore();

const fav = useFavStore();
fav.wish_items?.map((e) => (e.isLiked = true));
if (user.userToken?.uuid) {
  const { data: wish_user } = await useMyFetch(
    `/api/v1/client/wish-list?lang=tm&user_id=${user.userToken?.uuid}`
  );
  if (wish_user.value?.status) {
    wish_user.value.data?.filter((e) => {
      e.images = e.img_path;
    });
    favStore.wish_items = wish_user.value.data;
  }
}
</script>

<style lang="scss" scoped></style>
