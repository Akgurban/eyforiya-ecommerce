<template>
  <div class="2xl:w-[1440px] xl:screen w-[90%] mx-auto">
    <div
      style="padding-bottom: 20px !important"
      class="flex flex-wrap gap-6 justify-center"
    >
      <NuxtLink
        v-for="(item, index) in categories.data"
        :key="item.uuid"
        draggable="true"
        @click="
          useRouter().push(
            localePath({
              path: `/filtered-product/${item?.uuid}`,
              query: { filter: '[]', p: '1' },
            })
          )
        "
        class="group md:w-[346px] gap-3 md:gap-6 w-[96px] product_item mb-3 hover:shadow-none md:hover:shadow-hero hover:bg-[#D9D9D940] transition-all ease-in-out duration-200 rounded-xl flex flex-col justify-between items-center"
      >
        <img
          class="text-black rounded-md w-full aspect-square object-cover mx-5 hover:grayscale-0 transition-all duration-75 cursor-pointer"
          :src="`http://duypbaha.com.tm/api/v1/uploads/categories/${item?.img_path}`"
          alt=""
        />
        <p class="md:text-2xl text-sm font-bold font-inter pb-4">
          {{ item.name }}
        </p>
      </NuxtLink>
      <div
        v-if="!categories.data"
        class="mt-20 text-center w-full text-6xl text-gray-500 font-alatsi font-bold"
      >
        {{ $t("no_product") }}
      </div>
    </div>
  </div>
</template>

<script setup>
const { locale } = useI18n();

const { data: categories } = await useMyFetch(
  `/api/v1/client/products/categories?lang=${locale.value}`
);
</script>

<style scoped></style>
