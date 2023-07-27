<template>
  <div class="2xl:w-[1440px] xl:screen mx-auto">
    <div class="flex justify-between">
      <div></div>
      <BaseButton
        @click="toggleFilter"
        class="self-end lg:hidden block"
        type="secondary"
        >{{ showFilter ? "CloseFilter" : " ShowFilter" }}</BaseButton
      >
    </div>

    <div class="lead flex gap-5">
      <Transition name="slide-fade">
        <div
          class="lg:relative absolute h-auto px-2 py-2 lg:block w-[50%] z-30 2xl:w-[25%] lg:w-[28%] pb-10 bg-slate-100 rounded-md p-4"
          :class="showFilter ? 'block' : 'hidden'"
        >
          <div class="mt-5">
            <div class="text-2xl font-alatsi mb-2">Kategoriya saylan</div>
            <div class="ml-5">
              <p
                v-for="item in categories.data"
                @click="
                  useRouter().push(
                    localePath({
                      path: `/filtered-product/${item?.uuid}`,
                      query: { filter: '[]' },
                    })
                  )
                "
                class="font-alatsi hover:text-[#44A4DB] cursor-auto md:cursor-pointer"
              >
                {{ item?.name }}
              </p>
            </div>
          </div>
        </div>
      </Transition>

      <div
        style="
          width: 96% !important;
          height: auto !important;
          user-select: none !important;
          padding-bottom: 20px !important;
        "
        class="flex flex-wrap gap-3 mx-auto justify-between mt-5"
      >
        <div
          v-for="(item, index) in all_products.data.products"
          :key="item"
          draggable="true"
          class="group relative md:w-[266px] w-[176px] product_item mb-3 hover:shadow-none md:hover:shadow-hero hover:bg-[#D9D9D940] transition-all ease-in-out duration-200 rounded-xl flex flex-col justify-between items-center"
        >
          <BaseProduct :item="item"></BaseProduct>
        </div>
        <div
          v-if="!all_products.data.products"
          class="mt-20 text-center w-full text-6xl text-gray-500 font-alatsi font-bold"
        >
          Hic hili Haryt tapylmady!
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useFavStore } from "~~/stores/favourite";
const { locale } = useI18n();
const count = ref(1);
const showFilter = ref(false);

const { data: all_products } = await useMyFetch(
  `/api/v1/client/products/all-products?limit=15&offset=${count.value}&lang=${locale.value}`
);
const toggleFilter = () => {
  showFilter.value = !showFilter.value;
};
const fav = useFavStore();
fav.wish_items?.map((e) => (e.isLiked = true));

const { data: categories } = await useMyFetch(
  `/api/v1/client/products/categories?lang=${locale.value}`
);
</script>

<style lang="scss" scoped></style>
