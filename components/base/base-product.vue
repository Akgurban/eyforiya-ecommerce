<template>
  <NuxtLink
    :to="localePath(`/product/${item?.uuid}`)"
    class="rounded-xl w-full text-center mt-6"
  >
    <img
      class="border w-full aspect-square p-3 select-none border-[#e6e6e6]"
      :src="`http://duypbaha.com.tm/api/v1/uploads/images/${propItem?.images}`"
      alt=""
      height="262"
      loading="lazy"
    />
    <div
      class="w-fit mx-auto md:text-3xl text-base font-alatsi text-[#3C4242] mt-3 mb-1"
    >
      {{ propItem?.name }}
    </div>
    <div
      class="mx-auto text-[#48BC4E] text-3xl font-alatsi w-fit pb-1 border-b border-[#44A4DB]"
    >
      {{ propItem?.price }} TMT
    </div>
  </NuxtLink>
  <div class="absolute top-11 right-5">
    <IconLike
      fill="none"
      @click="toggleFav(propItem)"
      :class="item.isLiked ? 'fill-red-600 text-red-600' : ' text-white'"
      class="hover:text-red-600 w-7"
    ></IconLike>
  </div>
  <TrashButtonAndCounter :item="propItem" v-model="countProduct" />
</template>

<script setup>
import { useFavStore } from "~~/stores/favourite";
import { useAuthStore } from "@/stores/authStore";
const props = defineProps({
  item: {
    type: Object,
    default: {},
  },
});
const favStore = useFavStore();
const propItem = ref({});
propItem.value = props.item;

favStore.wish_items?.forEach(async (e) => {
  if (e.uuid == props.item.uuid) {
    propItem.value.isLiked = true;
  } else {
    propItem.isLiked == false;
  }
});
const toggleFav = (e) => {
  if (e.isLiked) {
    e.isLiked = false;
    favStore.removeLocalStorage(e);

    console.log(e, "true");
  } else {
    e.isLiked = true;
    favStore.setLocalStorage(e);

    console.log(e, "false");
  }
};
const countProduct = ref(null);
watch(countProduct, () => {
  console.log(countProduct, "countProduct");
});
</script>

<style scoped></style>
