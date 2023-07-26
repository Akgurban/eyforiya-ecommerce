<template>
  <div class="2xl:w-[1440px] xl:screen w-[90%] mx-auto">
    <div
      style="
        height: auto !important;
        user-select: none !important;
        padding-bottom: 20px !important;
      "
      class="flex flex-wrap gap-6 justify-start"
    >
      <NuxtLink
        v-for="(item, index) in brands.data"
        :key="item"
        :to="item.brand_name"
        draggable="true"
        @click="
          useRouter().push(
            localePath({
              path: `/brand_id/${item?.uuid}`,
              query: { filter: JSON.stringify([`${item?.uuid}`]) },
            })
          )
        "
        class="group md:w-[146px] gap-3 md:gap-6 w-[96px] product_item mb-3 hover:shadow-none md:hover:shadow-hero hover:bg-[#D9D9D940] transition-all ease-in-out duration-200 rounded-xl flex flex-col justify-between items-center"
      >
        <img
          class="text-black w-full aspect-square object-contain mx-5 hover:grayscale-0 transition-all duration-75 cursor-pointer"
          :src="`http://duypbaha.com.tm/api/v1/uploads/brands/${item?.img_path}`"
          alt=""
        />
      </NuxtLink>
      <div
        v-if="!brands.data"
        class="mt-20 text-center w-full text-6xl text-gray-500 font-alatsi font-bold"
      >
        Hic hili Haryt tapylmady!
      </div>
    </div>
  </div>
</template>

<script setup>
const { locale } = useI18n();

const { data: brands } = await useMyFetch(
  `/api/v1/client/products/brands?lang=${locale.value}`
);
</script>

<style scoped></style>
