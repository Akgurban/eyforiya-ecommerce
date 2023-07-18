<template>
  <div
    class="flex md:w-full w-screen flex-wrap justify-between md:justify-between border-y border-[#00000026] md:py-8 py-2 px-6"
  >
    <div
      v-for="item in icons"
      :key="item.name"
      class="flex items-center my-2 md:flex-row flex-col"
    >
      <img :src="item.img" alt="" />
      <div class="text-center ml-3">
        <p
          class="font-alatsi md:text-[45px] text-2xl text-[#3C4242] leading-[33px]"
        >
          {{ item.name }}
        </p>
        <p class="font-alatsi font-medium text-base text-[#000] mt-2 w-[150px]">
          {{ $t(item.desc) }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const icons = ref([
  { name: "40358", desc: "visit_web", img: "visit.png" },
  { name: "403", desc: "items_sold", img: "sold.png" },
  { name: "15", desc: "our_partners", img: "brand.png" },
  { name: "2232", desc: "products_website", img: "products.png" },
]);
</script>

<style lang="scss" scoped></style>
