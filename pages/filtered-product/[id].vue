<template>
  <div class="2xl:w-[1440px] xl:screen mx-auto">
    <div class="lead flex gap-5">
      <filtered-sidebar
        :brands="data.data.brands"
        :sub_categories="data.data.sub_categories"
        @filterChange="filter_items"
      />
      {{ filter_items }}
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
          v-for="(item, index) in data.data.products"
          :key="item"
          draggable="true"
          class="group md:w-auto w-[176px] product_item mb-3 hover:shadow-none md:hover:shadow-hero hover:bg-[#D9D9D940] transition-all ease-in-out duration-200 rounded-xl flex flex-col justify-center items-center"
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
const filter_items = ref(null);
console.log(filter_items.value?.brnd, "filter uytgedi");
console.log(route);
watch(filter_items, () => {
  alert("hjk");
  // router.push(
  //   `/filtered-product/${route.params.id}?filter=%7B"brandIds"%3A%5B"3d923a80-75ac-432a-ab81-4a45ad50112f"%5D%7D}`
  // );
});

const filteredProducts = ref({
  category_id: route.params.id,
  lang: "tm",
  limit: 10,
  offset: 0,
});
const { data } = await useMyFetch(() => `/api/v1/client/products/product`, {
  method: "POST",
  body: filteredProducts.value,
});
</script>

<style scoped></style>
