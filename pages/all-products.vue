<template>
  <div class="2xl:w-[1440px] xl:screen mx-auto">
    <div class="flex justify-between">
      <div></div>
      <BaseButton
        @click="toggleFilter"
        class="self-end w-32 lg:hidden flex justify-between"
        type="secondary"
        ><p>
          {{ showFilter ? $t("close_filter") : $t("show_filter") }}
        </p>
        <img src="@/assets/images/filter.png" class="inline w-5" alt="" />
      </BaseButton>
    </div>

    <div class="lead flex gap-5">
      <div class="md:relative absolute w-[50%] 2xl:w-[25%] lg:w-[28%]">
        <div
          class="md:block hidden shadow-2xl top-0 z-30 h-screen px-2 py-2 pb-10 bg-slate-100 rounded-md p-4"
        >
          <div class="mt-5">
            <div
              class="md:text-2xl text-xl uppercase text-[#44A4DB] font-alatsi mb-2"
            >
              {{ $t("category_select") }}
            </div>
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
        <!-- xas -->
        <Transition name="slide-fade">
          <div
            class="md:hidden block fixed w-[50%] 2xl:w-[25%] lg:w-[28%] shadow-2xl top-0 z-40 h-screen px-2 py-2 pb-10 bg-slate-100 rounded-md p-4"
            v-if="showFilter"
          >
            <div class="mt-5">
              <div
                class="md:text-2xl text-xl w-min uppercase text-[#44A4DB] font-alatsi mb-2"
              >
                {{ $t("category_select") }}
              </div>
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
      </div>

      <div class="w-full">
        <div
          style="padding-bottom: 20px !important"
          class="flex w-full flex-wrap gap-3 mx-auto justify-start mt-5"
        >
          <div
            v-for="(item, index) in all_products?.products"
            :key="item"
            draggable="true"
            class="group relative md:w-[266px] w-[176px] product_item mb-3 hover:shadow-none md:hover:shadow-hero hover:bg-[#D9D9D940] transition-all ease-in-out duration-200 rounded-xl flex flex-col justify-start gap-y-4 items-center"
          >
            <BaseProduct :item="item"></BaseProduct>
          </div>
          <div
            v-if="!all_products"
            class="mt-20 text-center w-full text-6xl text-gray-500 font-alatsi font-bold"
          >
            {{ $t("no_product") }}
          </div>
        </div>
        <BasePaginate v-model="count" :total-items="all_products.count" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useFavStore } from "~~/stores/favourite";
const { locale } = useI18n();
const count = ref(1);
const showFilter = ref(false);
const all_products = ref(null);
const refetch = async () => {
  const { data: all } = await useMyFetch(
    `/api/v1/client/products/all-products?limit=15&offset=${
      count.value - 1
    }&lang=${locale.value}`
  );
  console.log(all);
  all_products.value = all.value.data;
};
await refetch();
const toggleFilter = () => {
  showFilter.value = !showFilter.value;
};
const fav = useFavStore();
fav.wish_items?.map((e) => (e.isLiked = true));

const { data: categories } = await useMyFetch(
  `/api/v1/client/products/categories?lang=${locale.value}`
);
watch(count, async () => {
  await refetch();
});
</script>

<style lang="scss" scoped></style>
