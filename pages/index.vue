<template>
  <div>
    <div class="w-[1448px] h-[544px] mx-auto">
      <MainSwiper></MainSwiper>
    </div>
    <div class="block w-[1238px] mx-auto mt-[92px]">
      <div class="flex justify-between">
        <p
          class="font-alatsi text-4xl text-[#3C4242] border-l-[6px] border-[#8A33FD] pl-[14px]"
        >
          Categories
        </p>
        <div class="flex cursor-pointer items-center">
          <p class="font-alatsi inline text-3xl text-[#3C4242]">View All</p>
          <img
            class="inline h-[34px]"
            height=""
            src="@/assets/images/chevron-right.svg"
            alt=""
          />
        </div>
      </div>
      <div class="h-[358px] mt-7">
        <HeroSwiper class=""></HeroSwiper>
      </div>
    </div>
    <div class="block w-[1238px] mx-auto mt-[100px]">
      <MainInfo />
    </div>
    <div class="block w-[1238px] mx-auto mt-[92px]">
      <div class="flex justify-between">
        <p
          class="font-alatsi text-4xl text-[#3C4242] border-l-[6px] border-[#44A4DB] pl-[14px]"
        >
          Categories
        </p>
        <div class="flex cursor-pointer items-center">
          <p class="font-alatsi inline text-3xl text-[#3C4242]">View All</p>
          <img
            class="inline h-[34px]"
            height=""
            src="@/assets/images/chevron-right.svg"
            alt=""
          />
        </div>
      </div>
      <div class="h-[358px] mt-7">
        <HeroSwiperProduct class=""></HeroSwiperProduct>
      </div>
    </div>

    <!-- specials -->
    <div class="block h-auto w-[1238px] mx-auto mt-[92px]">
      <div class="flex justify-center">
        <p
          class="font-alatsi text-4xl text-[#3C4242] border-l-[6px] border-[#8A33FD] pl-[14px]"
        >
          Specials
        </p>
      </div>
      <div class="h-auto mt-7">
        <HeroSpecials class=""></HeroSpecials>
      </div>
    </div>

    <!-- Trending -->
    <div class="block w-[1238px] mx-auto mt-[92px]">
      <div class="flex justify-between">
        <p
          class="font-alatsi text-4xl text-[#3C4242] border-l-[6px] border-[#44A4DB] pl-[14px]"
        >
          Trending Products
        </p>
        <div class="flex cursor-pointer items-center">
          <p class="font-alatsi inline text-3xl text-[#3C4242]">View All</p>
          <img
            class="inline h-[34px]"
            height=""
            src="@/assets/images/chevron-right.svg"
            alt=""
          />
        </div>
      </div>
      <div class="h-[358px] mt-7">
        <HeroSwiperProduct class=""></HeroSwiperProduct>
      </div>
    </div>

    <!-- Logos -->
    <div class="flex items-center w-[1440px] mx-auto mt-[92px] h-[125px]">
      <div class="flex w-full justify-between">
        <img
          class="grayscale hover:grayscale-0 transition-all duration-75 cursor-pointer min-h-[80px] max-h-[80px]"
          src="/logo1.png"
          alt=""
        />
        <img
          class="grayscale hover:grayscale-0 transition-all duration-75 cursor-pointer min-h-[80px] max-h-[80px]"
          src="/logo2.jpg"
          alt=""
        />
        <img
          class="grayscale bg-gray-500 hover:grayscale-0 transition-all duration-75 cursor-pointer min-h-[80px] max-h-[80px]"
          src="/logo3.png"
          alt=""
        />
        <img
          class="grayscale hover:grayscale-0 transition-all duration-75 cursor-pointer min-h-[80px] max-h-[80px]"
          src="/logo4.png"
          alt=""
        />
        <img
          class="grayscale hover:grayscale-0 transition-all duration-75 cursor-pointer min-h-[80px] max-h-[80px]"
          src="/logo5.png"
          alt=""
        />
        <img
          class="text-black grayscale hover:grayscale-0 transition-all duration-75 cursor-pointer min-h-[80px] max-h-[80px]"
          src="/logo-1.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "~~/stores/user";

const posts = ref(null);
const categories = ref(null);
const userStore = useUserStore();

// try {
//   const { data } = await userStore.getCategories();
//   console.log(data, "data");
//   categories.value = data.data;
// } catch (error) {
//   console.log(error);
// }

// const getPosts = async () => {
//   try {
//     const { data } = await userStore.getPosts({
//       limit: 10,
//       offset: 0,
//     });
//     console.log(data, "data");
//     posts.value = data.data.services;
//   } catch (error) {
//     console.log(error);
//   }
// };
// await getPosts();
</script>

<style lang="scss" scoped></style>
