<template>
  <div>
    <div
      class="aspect-[video] w-screen 2xl:w-[1428px] mx-auto flex justify-between items-start px-4 sm:flex-row flex-col"
    >
      <div class="sm:w-[35%] w-full">
        <img
          :src="`http://duypbaha.com.tm/api/v1/uploads/images/${selectedImg.img_path}`"
          class="w-full one_img rounded-md aspect-square"
          alt=""
        />
        <div class="w-full mt-5 flex justify-start">
          <img
            v-for="item in oneProduct.images"
            :key="item.img_path"
            :src="`http://duypbaha.com.tm/api/v1/uploads/images/${item.img_path}`"
            @click.native="selectedImg = item"
            class="w-[19%] rounded-md aspect-square mr-2"
            alt=""
          />
        </div>
      </div>
      <div class="w-[60%] sm:ml-6 ml-0 mt-6">
        <div>
          <div
            class="one_prod w-fit cursor-pointer transition-all duration-100 hover:text-[#44A4DB] md:text-5xl text-2xl mb-1 font-semibold font-inter"
          >
            {{ oneProduct.name }}
          </div>
          <div
            class="sm:pt-1.5 pt-0 pb-1.5 md:text-xl text-lg sm:font-normal font-medium"
          >
            Çaga egin-eşikleri üçin ýumşadyjy konsentrat Bingo "Oğluşum" 1440 ml
          </div>

          <div
            class="flex items-center flex-wrap sm:px-4 px-1 py-2 border-t border-b border-gray-200"
          >
            <div
              class="text-white cursor-pointer rounded-md text-2xl px-4 py-3 bg-[#44A4DB]"
            >
              {{ oneProduct.price }} TMT
            </div>
          </div>
          <div class="w-fit md:ml-5 ml-1">
            <TrashButtonAndCounter v-model="count_product" />
          </div>
        </div>
      </div>
    </div>

    <div
      class="mt-8 px-10 cursor-pointer transition-all duration-100 md:text-4xl text-2xl mb-1 font-semibold font-inter"
    >
      {{ $t("similar_products") }}
    </div>
    <div
      style="
        width: 97% !important;
        height: auto !important;
        user-select: none !important;
        padding-bottom: 20px !important;
      "
      class="flex flex-wrap gap-3 px-2 md:px-10"
    >
      <NuxtLink
        v-for="(item, index) in similarProducts"
        :key="item"
        :to="localePath(`/product/${item.uuid}`)"
        draggable="true"
        class="group md:w-auto w-[176px] product_item mb-3 hover:shadow-none md:hover:shadow-hero bg-[#D9D9D940] hover:bg-[#D9D9D940] transition-all ease-in-out duration-200 rounded-xl flex flex-col justify-between items-center"
      >
        <div class="rounded-xl text-center mt-6">
          <img
            class="border select-none border-[#e6e6e6] w-[90%] md:w-[245px] mx-3 aspect-square"
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
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const { locale } = useI18n();

const oneProduct = ref(null);
const similarProducts = ref(null);
const selectedImg = ref(null);

const router = useRouter();
const route = useRoute();

const { data, status } = await useMyFetch(
  `/api/v1/client/products/product/${route.params.id}?lang=${locale.value}`
);
if (status) {
  console.log(data.value.data, "ssd");
  oneProduct.value = data.value.data.one_products;
  selectedImg.value = data.value.data.one_products.images[0];
  similarProducts.value = data.value.data.products;
}

console.log(route.query.s);
</script>

<style scoped>
.one_prod {
  view-transition-name: title;
}
.one_img {
  view-transition-name: selected-img;
}
</style>
