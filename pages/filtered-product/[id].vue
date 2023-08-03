<template>
  <div class="2xl:w-[1440px] xl:screen mx-auto">
    <div class="flex justify-between">
      <div></div>
      <BaseButton
        @click="toggleFilter"
        class="self-end w-32 lg:hidden flex justify-between"
        type="secondary"
        ><p>
          {{ !showFilter ? $t("close_filter") : $t("show_filter") }}
        </p>
        <img src="@/assets/images/filter.png" class="inline w-5" alt=""
      /></BaseButton>
    </div>
    <div class="flex justify-between gap-5">
      <div class="md:block hidden w-full 2xl:w-[25%] lg:w-[28%]">
        <filtered-sidebar
          :show_filter="!showFilter"
          :brands="incomedDatas?.brands"
          :sub_categories="incomedDatas?.sub_categories"
          @someChange="(e) => emittedFromSidebar(e)"
        />
      </div>
      <div class="block md:hidden absolute w-full 2xl:w-[25%] lg:w-[28%]">
        <filtered-sidebar
          :show_filter="showFilter"
          :brands="incomedDatas?.brands"
          :sub_categories="incomedDatas?.sub_categories"
          @someChange="(e) => emittedFromSidebar(e)"
        />
      </div>

      <div class="w-full">
        <div class="flex flex-wrap gap-3 justify-between mx-auto mt-5 px-2">
          <div
            v-for="(item, index) in incomedDatas?.products"
            :key="item"
            draggable="true"
            class="group relative md:w-[266px] w-[176px] product_item mb-3 hover:shadow-none md:hover:shadow-hero hover:bg-[#D9D9D940] transition-all ease-in-out duration-200 rounded-xl flex flex-col justify-between items-center"
          >
            <BaseProduct :item="item"></BaseProduct>
          </div>
          <div
            v-if="!incomedDatas?.products"
            class="mt-20 text-center w-full text-6xl text-gray-500 font-alatsi font-bold"
          >
            {{ $t("no_product") }}
          </div>
        </div>
        <div class="" v-if="!(count == 1)">
          <BasePaginate :total-items="totalItems" v-model="count" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { locale, locales } = useI18n();

const router = useRouter();
const route = useRoute();
const incomedDatas = ref("");
const count = ref(1);
const totalItems = ref(15);
const showFilter = ref(true);

const toggleFilter = () => {
  showFilter.value = !showFilter.value;
};

const active = useState();
async function emittedFromSidebar(e) {
  console.log(locale, locales);
  locales.value.forEach((a) => {
    if (a.code == locale.value) {
      console.log(a.code, locale.value);
      router.push({
        path: `${a.code2}/filtered-product/${route.params.id}`,
        query: { filter: JSON.stringify(e.brnd), order: e.ord, catId: e.sub },
      });
    }
  });
}

const refetch = async () => {
  let dataForm = {
    category_id: route.params.id,
    lang: locale.value,
    limit: 15,
    offset: count.value - 1,
  };

  if (route.query?.filter && JSON.parse(route.query?.filter)?.length) {
    dataForm.brand_id = JSON.parse(route.query?.filter);
  }
  if (route.query.order) {
    dataForm.order = route.query.order;
  }
  if (route.query.catId) {
    dataForm.sub_category_id = route.query.catId;
  }

  const { data, status } = await useMyFetch(
    () => `/api/v1/client/products/product`,
    {
      method: "POST",
      body: dataForm,
    }
  );
  if (status) {
    incomedDatas.value = data.value?.data;
    console.log(data.value, "[]");
    totalItems.value = data.value?.data?.product_count;
  }
};
await refetch();

if (incomedDatas.value) {
  incomedDatas.value?.brands?.forEach((e) => {
    JSON.parse(route.query.filter)?.forEach((item) => {
      if (item == e.uuid) {
        e.selected = true;
      }
    });
  });
}

watch(
  () => route.query,
  async () => {
    await refetch();
    incomedDatas.value?.brands?.forEach((e) => {
      JSON.parse(route.query?.filter)?.forEach((item) => {
        if (item == e.uuid) {
          e.selected = true;
        }
      });
    });
  }
);
watch(count, async () => {
  await refetch();
});
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.2s ease-in;
}

.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}

.prod_name.active {
  view-transition-name: title;
}
img.active {
  view-transition-name: selected-img;
  contain: layout;
}
</style>
<style>
:view-transition-old(title),
:view-transition-new(title) {
  width: auto;
}
</style>
