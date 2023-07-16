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
        class="bg-[#3C4242] text-white p-[26px] flex justify-between mt-10 px-10 w-full"
      >
        <div>
          <p class="uppercase">Product Details</p>
        </div>
        <div class="flex justify-between w-full">
          <p class="uppercase">Price</p>
          <p class="uppercase">Quantity</p>
          <p class="uppercase">shipping</p>
          <p class="uppercase">subtotal</p>
          <p class="uppercase">action</p>
        </div>
      </div>

      <div
        v-for="item in 3"
        :key="item"
        class="py-12 p-[26px] flex items-center justify-between px-10"
      >
        <div>
          <div class="flex md:flex-row flex-col items-center gap-5">
            <img src="/trash.png" alt="" />
            <div>
              <p class="font-alatsi text-lg">Blue Flower Print Crop Top</p>
            </div>
          </div>
        </div>
        <div class="flex items-center w-full justify-around">
          <p class="uppercase">$29.00</p>
          <p class="uppercase w-[100px] md:w-[200px]">
            <BaseCounter @click="setStore" v-model="count"></BaseCounter>
          </p>
          <p class="uppercase"></p>
          <p class="uppercase"></p>
          <p class="block cursor-pointer">
            <img class="m-1" src="@/assets/images/deletecon.svg" alt="" />
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const count = ref(0);
import { useTrashStore } from "~~/stores/trash";
const trash = useTrashStore();
const setStore = () => {
  trash.setLocalStorage(count.value);
  console.log(trash.trash_items);
};
</script>

<style lang="scss" scoped></style>
