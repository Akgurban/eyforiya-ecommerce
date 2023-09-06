<template>
  <div>
    <div
      class="xl:w-[1196px] rounded-md overflow-hidden select-none w-full aspect-[21/10] mx-auto"
    >
      <MainSwiper></MainSwiper>
    </div>
    <div class="block xl:w-[1238px] w-full mx-auto md:mt-[92px] mt-4">
      <div class="flex justify-between items-center">
        <p
          class="font-alatsi font-semibold md:text-2xl text-base text-[#3C4242] border-l-[6px] border-[#8A33FD] pl-[6px]"
        >
          {{ $t("categories") }}
        </p>
        <div class="flex cursor-pointer items-center">
          <p
            class="font-alatsi font-semibold inline md:text-2xl text-base text-[#3C4242]"
            @click="useRouter().push('/categories')"
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
        <div class="block md:hidden">
          <HeroSwiperCategory :count="2"></HeroSwiperCategory>
        </div>
        <div class="md:block hidden">
          <HeroSwiperCategory class="hidden" :count="4"></HeroSwiperCategory>
        </div>
      </div>
    </div>

    <div
      class="block xl:w-[1238px] md:w-full w-full mx-auto mt-4 md:mt-[100px]"
    >
      <MainInfo :rating="rating?.data" />
    </div>

    <div class="block xl:w-[1238px] w-full mx-auto md:mt-[92px] mt-4">
      <div class="flex justify-between items-center">
        <p
          class="font-alatsi font-semibold md:text-2xl text-base text-[#3C4242] border-l-[6px] border-[#8A33FD] pl-[6px]"
        >
          {{ $t("latest_products") }}
        </p>
        <div class="flex cursor-pointer items-center">
          <p
            class="font-alatsi font-semibold inline md:text-2xl text-base text-[#3C4242]"
            @click="useRouter().push('/all-products?p=1')"
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
      <div class="block md:h-auto h-auto md:mt-7 mt-3">
        <div class="md:block hidden">
          <HeroSwiperProduct
            :products="latest.data"
            count="4"
          ></HeroSwiperProduct>
        </div>
        <div class="block md:hidden">
          <HeroSwiperProduct
            :products="latest.data"
            count="2"
          ></HeroSwiperProduct>
        </div>
      </div>
    </div>

    <div class="block h-auto xl:w-[1238px] w-screen mx-auto md:mt-[92px]">
      <div class="flex justify-center">
        <p
          class="font-alatsi font-semibold md:text-2xl text-base text-[#3C4242] border-l-[6px] border-[#8A33FD] pl-[6px]"
        >
          {{ $t("specials") }}
        </p>
      </div>
      <div class="h-auto w-full md:mt-7 mt-3">
        <HeroSpecials
          :specials="special_categories.data"
          class=""
        ></HeroSpecials>
      </div>
    </div>

    <div class="block xl:w-[1238px] w-full mx-auto md:mt-[92px] mt-4">
      <div class="flex justify-between items-center">
        <p
          class="font-alatsi font-semibold md:text-2xl text-base text-[#3C4242] border-l-[6px] border-[#8A33FD] pl-[6px]"
        >
          {{ $t("special_products") }}
        </p>
        <div class="flex cursor-pointer items-center">
          <p
            class="font-alatsi font-semibold inline md:text-2xl text-base text-[#3C4242]"
            @click="useRouter().push('/all-products?p=1')"
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
        <div class="md:block hidden">
          <HeroSwiperProduct
            :products="special_latest.data"
            :count="4"
          ></HeroSwiperProduct>
        </div>
        <div class="block md:hidden">
          <HeroSwiperProduct
            :products="special_latest.data"
            :count="2"
          ></HeroSwiperProduct>
        </div>
      </div>
    </div>

    <div
      class="flex items-center gap-7 md:gap-14 2xl:w-[1440px] w-screen overflow-hidden mx-auto mt-4 md:mt-[92px] h-[125px]"
    >
      <div
        class="flex justify-around md:min-w-full w-fit gap-7 md:gap-14 animation_brands"
      >
        <NuxtLink
          v-for="item in main_brands.data"
          @click="
            useRouter().push(
              localePath({
                path: `/brand_id/${item?.uuid}`,
                query: { filter: JSON.stringify([`${item?.uuid}`]) },
              })
            )
          "
        >
          <img
            class="text-black aspect-auto object-cover hover:grayscale-0 transition-all duration-75 cursor-pointer h-[90px] min-w-[80px] rounded-md"
            :src="`http://duypbaha.com.tm/api/v1/uploads/brands/${item?.img_path}`"
            alt=""
          />
        </NuxtLink>
      </div>
      <div
        class="flex justify-around md:min-w-full w-fit gap-7 md:gap-14 animation_brands"
      >
        <NuxtLink
          v-for="item in main_brands.data"
          @click="
            useRouter().push(
              localePath({
                path: `/brand_id/${item?.uuid}`,
                query: { filter: JSON.stringify([`${item?.uuid}`]) },
              })
            )
          "
        >
          <img
            class="text-black aspect-auto object-cover hover:grayscale-0 transition-all duration-75 cursor-pointer h-[90px] min-w-[80px] rounded-md"
            :src="`http://duypbaha.com.tm/api/v1/uploads/brands/${item?.img_path}`"
            alt=""
          />
        </NuxtLink>
      </div>
    </div>
    <div
      class="xl:w-[1196px] mt-10 rounded-md overflow-hidden select-none w-full aspect-[21/10] mx-auto"
    >
      <HeroSwiperVideo></HeroSwiperVideo>
    </div>
  </div>
</template>

<script setup>
const { locale } = useI18n();
useHead({
  title: `Online Söwda`,
  meta: [{ name: "description", content: "Internet Magazin" }],
});
const { data: rating } = await useMyFetch(`/api/v1/client/products/rating`);

const { data: latest } = await useMyFetch(
  `/api/v1/client/products/latest/products?lang=${locale.value}`
);
const { data: special_latest } = await useMyFetch(
  `/api/v1/client/products/special-categ-products?lang=${locale.value}`
);
const { data: main_brands } = await useMyFetch(
  `/api/v1/client/products/brands?lang=${locale.value}`
);
const { data: special_categories } = await useMyFetch(
  `/api/v1/client/products/special-categories?lang=${locale.value}`
);
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
