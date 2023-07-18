<template>
  <div class="2xl:w-[1440px] xl:screen mx-auto">
    <div class="lead flex gap-5">
      <filtered-sidebar
        :brands="incomedDatas.brands"
        :sub_categories="incomedDatas.sub_categories"
        @someChange="(e) => testFunc(e)"
      />
      <div
        style="
          width: 97% !important;
          height: auto !important;
          user-select: none !important;
          padding-bottom: 20px !important;
        "
        class="flex flex-wrap gap-3"
      >
        <div
          v-for="(item, index) in incomedDatas.products"
          :key="item"
          draggable="true"
          class="group md:w-auto w-[176px] product_item mb-3 hover:shadow-none md:hover:shadow-hero hover:bg-[#D9D9D940] transition-all ease-in-out duration-200 rounded-xl flex flex-col justify-between items-center"
        >
          <div class="rounded-xl text-center mt-6">
            <img
              class="border pointer-events-none select-none border-[#e6e6e6] w-[90%] md:w-[245px] mx-3 aspect-square"
              :src="`http://duypbaha.com.tm/api/v1/uploads/images/${item.images}`"
              alt=""
              loading="lazy"
            />
            <div
              class="w-fit mx-auto md:text-3xl text-base font-alatsi text-[#3C4242] mt-3 mb-1"
            >
              {{ item.name }}
            </div>
            <div
              class="mx-auto text-[#48BC4E] text-3xl font-alatsi w-fit pb-1 border-b border-[#44A4DB]"
            >
              {{ item.price }} TMT
            </div>
          </div>

          <TrashButtonAndCounter />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const router = useRouter();
const route = useRoute();
const incomedDatas = ref("");

async function testFunc(e) {
  console.log("pp");
  router.push({
    path: `/filtered-product/${route.params.id}`,
    query: { filter: JSON.stringify(e.brnd), order: e.ord, catId: e.sub },
  });
}

const refetch = async () => {
  let dataForm = {
    category_id: route.params.id,
    lang: "tm",
    limit: 10,
    offset: 0,
  };

  if (JSON.parse(route.query.filter).length) {
    dataForm.brand_id = JSON.parse(route.query.filter);
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
  if (route.query.filter) {
  }
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
    console.log("refetch");
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

<style scoped></style>
