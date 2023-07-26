<template>
  <div class="2xl:w-[1440px] xl:screen mx-auto">
    <div class="flex justify-between px-3">
      <div></div>
      <BaseButton
        @click="toggleFilter"
        class="self-end lg:hidden block"
        type="secondary"
        >{{ !showFilter ? "CloseFilter" : " ShowFilter" }}</BaseButton
      >
    </div>

    <div class="lead flex gap-5">
      <Transition name="slide-fade">
        <filtered-sidebar
          :show_filter="showFilter"
          :brands="brands.data"
          :show_cat="false"
          @someChange="(e) => emittedFromSidebar(e)"
        />
      </Transition>

      <div
        style="
          width: 92% !important;
          height: auto !important;
          user-select: none !important;
          padding-bottom: 20px !important;
        "
        class="flex flex-wrap gap-3 justify-between mx-auto"
      >
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
const order = ref("");

const orderList = ref([
  { code: "", name: "Hic hili" },
  { code: "asc", name: "Arzandan gymmada" },
  { code: "desc", name: "Gymmatdan arzana" },
]);

const active = useState();
async function emittedFromSidebar(e) {
  console.log(e);
  if (e.brnd.length) {
    router.push({
      path: `/brand_id/${e.brnd[e.brnd.length - 1]}`,
      query: {
        filter: JSON.stringify([`${e.brnd[e.brnd.length - 1]}`]),
        order: e.ord,
      },
    });
  }
}

const toggleFilter = () => {
  showFilter.value = !showFilter.value;
};
const refetch = async () => {
  let dataForm = {
    lang: "tm",
    //  / "brand_id":["73fbbb62-c863-47e5-a80b-a7cbd67589f4"	,"031a90c5-a29c-4d38-9f49-10f52c37eb76"],
    order: route.query.order,
    limit: 20,
    offset: 0,
    criteria: route.params.id,
  };

  if (route.query?.filter && JSON.parse(route.query?.filter)?.length) {
    dataForm.brand_id = JSON.parse(route.query?.filter);
  }
  if (route.params.id) {
  }
  if (route.query.catId) {
    dataForm.sub_category_id = route.query.catId;
  }

  const { data, status } = await useMyFetch(
    () => `/api/v1/client/products/brand-products`,
    {
      query: {
        brand_id: route.params.id,
        limit: 10,
        offset: 0,
        lang: "tm",
        order: route.query.order,
      },
      // ?brand_id=${route.params.id}&limit=10&offset=0&lang=tm&order=${route.query.order}
    }
  );
  if (status) {
    console.log(data.value, "poo");
    incomedDatas.value = data.value?.data;
  }
  var { data: brands } = await useMyFetch(
    `/api/v1/client/products/brands?lang=${locale.value}`
  );
};
await refetch();

if (route.query?.filter && incomedDatas.value) {
  incomedDatas.value?.brands?.forEach((e) => {
    JSON.parse(route.query?.filter)?.forEach((item) => {
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
    brands.value.data?.forEach((e) => {
      JSON.parse(route.query?.filter)?.forEach((item) => {
        if (item == e.uuid) {
          e.selected = true;
        }
      });
    });
  }
);

const { data: brands } = await useMyFetch(
  `/api/v1/client/products/brands?lang=${locale.value}`
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
