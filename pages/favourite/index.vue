<template>
  <div class="2xl:w-[1424px] xl:w-[1230px] w-screen mx-auto">
    <div
      class="2xl:w-[1424px] xl:w-[1230px] w-screen flex gap-3 items-center pl-10"
    >
      <NuxtLink to="/" class="cursor-pointer hover:font-bold">Home</NuxtLink>
      <IconChevronRight class="h-3" />
      <p class="cursor-pointer font-bold">favourites</p>
    </div>
    <div class="w-full flex gap-5 flex-wrap my-5">
      <div
        class="mt-20 text-center w-full text-6xl text-gray-500 font-alatsi font-bold"
        v-if="!fav.wish_items.length"
      >
        Halanlarynyz bosh
      </div>
      <div
        v-for="item in fav.wish_items"
        :key="item"
        class="group relative md:w-[276px] w-[176px] product_item mb-3 hover:shadow-none md:hover:shadow-hero bg-[#D9D9D940] hover:bg-[#D9D9D940] transition-all ease-in-out duration-200 rounded-xl flex flex-col justify-between items-center"
      >
        <BaseProduct :item="item"> </BaseProduct>
      </div>
    </div>
  </div>
</template>

<script setup>
const count = ref(0);
import { useFavStore } from "~~/stores/favourite";

const fav = useFavStore();
fav.wish_items.map((e) => (e.isLiked = true));
console.log(fav, "fav");
</script>

<style lang="scss" scoped></style>
