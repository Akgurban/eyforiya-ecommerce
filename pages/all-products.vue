<template>
  <div class="2xl:w-[1424px] xl:w-[1230px] w-screen mx-auto">
    <div
      class="2xl:w-[1424px] xl:w-[1230px] w-screen flex gap-3 items-center pl-10"
    >
      <NuxtLink to="/" class="cursor-pointer hover:font-bold">Home</NuxtLink>
      <IconChevronRight class="h-3" />
      <p class="cursor-pointer font-bold">all-products</p>
    </div>
    <div class="w-full flex gap-2 flex-wrap mt-4">
      <div
        class="mt-20 text-center w-full text-6xl text-gray-500 font-alatsi font-bold"
        v-if="!all_products.data.products.length"
      >
        Haryt Yok
      </div>
      <div
        v-for="item in all_products.data.products"
        :key="item"
        class="group relative md:w-[276px] w-[176px] product_item mb-3 hover:shadow-none md:hover:shadow-hero bg-[#D9D9D940] hover:bg-[#D9D9D940] transition-all ease-in-out duration-200 rounded-xl flex flex-col justify-between items-center"
      >
        <BaseProduct :item="item"> </BaseProduct>
      </div>
    </div>
    <BasePaginate v-model="count" :total-items="all_products.data.count" />
  </div>
</template>

<script setup>
const count = ref(1);

import { useFavStore } from "~~/stores/favourite";

const { data: all_products } = await useMyFetch(
  `/api/v1/client/products/all-products?limit=15&offset=${count.value}&lang=tm`
);
console.log(all_products.value.data);
const fav = useFavStore();
fav.wish_items.map((e) => (e.isLiked = true));
console.log(all_products, "fav");
</script>

<style lang="scss" scoped></style>
