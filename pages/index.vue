<template>
  <div>
    <div
      class="xl:w-[1196px] rounded-md overflow-hidden select-none w-full aspect-[21/10] mx-auto"
    >
      <MainSwiper></MainSwiper>
    </div>
    <div class="block xl:w-[1238px] w-full mx-auto md:mt-[92px] mt-4">
      <div class="flex justify-between">
        <p
          class="font-alatsi md:text-4xl text-xl text-[#3C4242] border-l-[6px] border-[#8A33FD] pl-[14px]"
        >
          Categories
        </p>
        <div class="flex cursor-pointer items-center">
          <p class="font-alatsi inline md:text-3xl text-lg text-[#3C4242]">
            View All
          </p>
          <img
            class="inline h-[34px]"
            height=""
            src="@/assets/images/chevron-right.svg"
            alt=""
          />
        </div>
      </div>
      <div class="md:h-[358px] h-[250px] md:mt-7 mt-1">
        <HeroSwiperCategory class=""></HeroSwiperCategory>
      </div>
    </div>

    <div
      class="block xl:w-[1238px] md:w-full w-full mx-auto mt-4 md:mt-[100px]"
    >
      <MainInfo />
    </div>
    <div class="block xl:w-[1238px] w-full mx-auto md:mt-[92px] mt-4">
      <div class="flex justify-between">
        <p
          class="font-alatsi md:text-4xl text-xl text-[#3C4242] border-l-[6px] border-[#8A33FD] pl-[14px]"
        >
          Latest products
        </p>
        <div class="flex cursor-pointer items-center">
          <p class="font-alatsi inline md:text-3xl text-lg text-[#3C4242]">
            View All
          </p>
          <img
            class="inline h-[34px]"
            height=""
            src="@/assets/images/chevron-right.svg"
            alt=""
          />
        </div>
      </div>
      <div class="block md:h-auto h-auto md:mt-7 mt-1">
        <HeroSwiperProduct class=""></HeroSwiperProduct>
      </div>
    </div>
    <!--

    
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
    </div> -->
  </div>
</template>

<script setup>
const posts = ref(null);
const categories = ref(null);

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
