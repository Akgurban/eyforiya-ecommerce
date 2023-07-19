<template>
  <NuxtLink
    :to="localePath(`/product/${item?.uuid}`)"
    class="rounded-xl w-full text-center mt-6"
  >
    <img
      class="border w-full aspect-square p-3 select-none border-[#e6e6e6]"
      :src="`http://duypbaha.com.tm/api/v1/uploads/images/${item?.images}`"
      alt=""
      height="262"
      loading="lazy"
    />
    <div
      class="w-fit mx-auto md:text-3xl text-base font-alatsi text-[#3C4242] mt-3 mb-1"
    >
      {{ item?.name }}
    </div>
    <div
      class="mx-auto text-[#48BC4E] text-3xl font-alatsi w-fit pb-1 border-b border-[#44A4DB]"
    >
      {{ item?.price }} TMT
    </div>
  </NuxtLink>
  <TrashButtonAndCounter :item="item" v-model="countProduct" />
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    default: {},
  },
});
const countProduct = ref(null);
watch(countProduct, () => {
  console.log(countProduct, "countProduct");
});
</script>

<style scoped></style>
