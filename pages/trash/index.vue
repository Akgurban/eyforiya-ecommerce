<template>
  <div class="2xl:w-[1424px] xl:w-[900px] w-screen mx-auto">
    <div
      class="2xl:w-[1424px] xl:w-[900px] w-screen flex gap-3 items-center pl-10"
    >
      <NuxtLink to="/" class="cursor-pointer hover:font-bold">Home</NuxtLink>
      <IconChevronRight class="h-3" />
      <p class="cursor-pointer hover:font-bold">Add to cart</p>
    </div>
    <div class="w-full">
      <div
        class="bg-[#3C4242] text-white p-2 md:p-[26px] flex justify-between mt-10 px-3 md:px-10 w-full"
      >
        <div></div>
        <div class="flex justify-between w-full md:text-xl text-[10px]">
          <p class="uppercase">Product Details</p>
          <p class="uppercase">Quantity</p>
          <p class="uppercase">Price</p>
          <p class="uppercase">Delete</p>
        </div>
      </div>
      <div
        class="mt-20 text-center w-full text-6xl text-gray-500 font-alatsi font-bold"
        v-if="!trash.trash_items.products.length"
      >
        SebediNiz Bosh
      </div>
      <div
        v-for="item in trash.trash_items.products"
        :key="item"
        class="py-12 p-[26px] flex items-center justify-between px-10"
      >
        <div>
          <div class="flex md:flex-row flex-col items-center md:gap-10 gap-5">
            <img
              :src="`http://duypbaha.com.tm/api/v1/uploads/images/${item.images}`"
              alt=""
              class="w-35 rounded-md aspect-square"
            />
            <p class="font-alatsi text-2xl w-[100px]">{{ item.name }}</p>
          </div>
        </div>
        <div
          class="flex items-center w-full justify-end gap-6 md:gap-10 md:flex-row flex-row"
        >
          <div
            class="w-[150px] md:w-[400px] flex md:flex-row flex-col items-center justify-between ml-5"
          >
            <p class="uppercase md:w-[200px] w-[150px]">
              <TrashButtonAndCounter :count="item.count" :item="item" />
            </p>
            <p
              class="uppercase font-bold text-lg md:w-[150px] flex flex-nowrap w-[150px]"
            >
              {{ item?.price }} TMT
            </p>
          </div>
          <div class="block cursor-pointer">
            <img class="m-1 w-4" src="@/assets/images/deletecon.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const count = ref(0);
import { useTrashStore } from "~~/stores/trash";
const trash = useTrashStore();
console.log(trash.trash_items.products, "saplop");
const setStore = () => {
  trash.setLocalStorage(count.value);
};
</script>

<style lang="scss" scoped></style>
