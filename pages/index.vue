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
          class="font-alatsi font-medium md:text-4xl text-xl text-[#3C4242] border-l-[6px] border-[#8A33FD] pl-[14px]"
        >
          {{ $t("categories") }}
        </p>
        <div class="flex cursor-pointer items-center">
          <p
            class="font-alatsi font-medium inline md:text-3xl text-lg text-[#3C4242]"
          >
            {{ $t("view_all") }}
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
          class="font-alatsi font-medium md:text-4xl text-xl text-[#3C4242] border-l-[6px] border-[#8A33FD] pl-[14px]"
        >
          {{ $t("latest_products") }}
        </p>
        <div class="flex cursor-pointer items-center">
          <p
            class="font-alatsi font-medium inline md:text-3xl text-lg text-[#3C4242]"
          >
            {{ $t("view_all") }}
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
        <HeroSwiperProduct :products="latest" class=""></HeroSwiperProduct>
      </div>
    </div>

    <div class="block h-auto xl:w-[1238px] w-screen mx-auto md:mt-[92px] mt-4">
      <div class="flex justify-center">
        <p
          class="font-alatsi font-medium md:text-4xl text-xl text-[#3C4242] border-l-[6px] border-[#8A33FD] pl-[14px]"
        >
          {{ $t("specials") }}
        </p>
      </div>
      <div class="h-auto w-full mt-7">
        <HeroSpecials :specials="spec_categories" class=""></HeroSpecials>
      </div>
    </div>

    <div class="block xl:w-[1238px] w-full mx-auto md:mt-[92px] mt-4">
      <div class="flex justify-between">
        <p
          class="font-alatsi font-medium md:text-4xl text-xl text-[#3C4242] border-l-[6px] border-[#8A33FD] pl-[14px]"
        >
          {{ $t("latest_products") }}
        </p>
        <div class="flex cursor-pointer items-center">
          <p
            class="font-alatsi font-medium inline md:text-3xl text-lg text-[#3C4242]"
          >
            {{ $t("view_all") }}
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
        <HeroSwiperProduct
          :products="special_latest"
          class=""
        ></HeroSwiperProduct>
      </div>
    </div>

    <div
      class="flex items-center gap-7 md:gap-14 2xl:w-[1440px] w-screen overflow-hidden mx-auto mt-4 md:mt-[92px] h-[125px]"
    >
      <div
        class="flex justify-around md:min-w-full w-fit gap-7 md:gap-14 animation_brands"
      >
        <a class="" v-for="item in main_brands">
          <img
            class="text-black grayscale aspect-auto object-cover hover:grayscale-0 transition-all duration-75 cursor-pointer h-[90px] min-w-[80px] rounded-md"
            :src="`http://duypbaha.com.tm/api/v1/uploads/brands/${item?.img_path}`"
            alt=""
          />
        </a>
      </div>
      <div
        class="flex justify-around md:min-w-full w-fit gap-7 md:gap-14 animation_brands"
      >
        <a class="" v-for="item in main_brands">
          <img
            class="text-black grayscale aspect-auto object-cover hover:grayscale-0 transition-all duration-75 cursor-pointer h-[90px] min-w-[80px] rounded-md"
            :src="`http://duypbaha.com.tm/api/v1/uploads/brands/${item?.img_path}`"
            alt=""
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const { locale } = useI18n();

const posts = ref(null);
const categories = ref(null);
const latest = ref(null);
const spec_categories = ref(null);
const special_latest = ref(null);
const main_brands = ref(null);

const { data: products } = await useMyFetch(
  `/api/v1/client/products/latest/products?lang=${locale.value}`
);
if (products.value.status) {
  latest.value = products.value?.data;
  console.log("latest.value", products.value);
}
const { data: spec_latest } = await useMyFetch(
  `/api/v1/client/products/special-categ-products?lang=${locale.value}`
);
if (spec_latest.value.status) {
  special_latest.value = spec_latest.value?.data;
}
const { data: brands } = await useMyFetch(
  `/api/v1/client/products/brands?lang=${locale.value}`
);
if (brands.value.status) {
  main_brands.value = brands.value?.data;
  console.log(main_brands.value, "sfghj");
}
const { data: special_categories } = await useMyFetch(
  `/api/v1/client/products/special-categories?lang=${locale.value}`
);
if (special_categories.value.status) {
  spec_categories.value = special_categories.value?.data;
}
</script>

<style scoped>
.animation_brands {
  animation-duration: 15s;
  animation-name: marquee;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
@keyframes marquee {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-100%, 0);
  }
}
</style>
