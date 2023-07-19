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
        <filtered-sidebar
          :show_filter="showFilter"
          :brands="incomedDatas.brands"
          :sub_categories="incomedDatas.sub_categories"
          @someChange="(e) => emittedFromSidebar(e)"
          v-if="showFilter"
        />
      </Transition>

      <div
        style="
          width: 100% !important;
          height: auto !important;
          user-select: none !important;
          padding-bottom: 20px !important;
        "
        class="flex flex-wrap gap-3 justify-between"
      >
        <div
          v-for="(item, index) in incomedDatas.products"
          :key="item"
          draggable="true"
          class="group md:w-[266px] w-[176px] product_item mb-3 hover:shadow-none md:hover:shadow-hero hover:bg-[#D9D9D940] transition-all ease-in-out duration-200 rounded-xl flex flex-col justify-between items-center"
        >
          <BaseProduct :item="item"></BaseProduct>
        </div>
        <div
          v-if="!incomedDatas.products"
          class="mt-20 text-center w-full text-6xl text-gray-500 font-alatsi font-bold"
        >
          Hic hili Haryt tapylmady!
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { $width } = useNuxtApp();
const { locale } = useI18n();

const router = useRouter();
const route = useRoute();
const incomedDatas = ref("");
const showFilter = ref(true);

const active = useState();
async function emittedFromSidebar(e) {
  router.push({
    path: `/filtered-product/${route.params.id}`,
    query: { filter: JSON.stringify(e.brnd), order: e.ord, catId: e.sub },
  });
}

const toggleFilter = () => {
  showFilter.value = !showFilter.value;
};
const refetch = async () => {
  let dataForm = {
    category_id: route.params.id,
    lang: "tm",
    limit: 10,
    offset: 0,
  };

  if (JSON.parse(route.query?.filter).length) {
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
  incomedDatas.value = data.value.data;
  if (status) {
    console.log(data.value.data, "geldi========");
  }
};
await refetch();

incomedDatas.value.brands?.forEach((e) => {
  JSON.parse(route.query.filter).forEach((item) => {
    if (item == e.uuid) {
      e.selected = true;
    }
  });
});

watch(
  () => route.query,
  async () => {
    await refetch();
    incomedDatas.value.brands.forEach((e) => {
      JSON.parse(route.query.filter).forEach((item) => {
        if (item == e.uuid) {
          e.selected = true;
        }
      });
    });
  }
);
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
