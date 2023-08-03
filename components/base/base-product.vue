<template>
  <NuxtLink
    :to="localePath(`/product/${item?.uuid}`)"
    class="rounded-xl w-full text-center"
  >
    <img
      class="border w-full aspect-square select-none rounded-md md:rounded-lg border-[#e6e6e6]"
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
  <div class="absolute top-5 right-5">
    <IconLike
      fill="none"
      @click="toggleFav(propItem)"
      :class="item.isLiked ? 'fill-red-600 text-red-600' : ' text-white'"
      class="hover:text-red-600 w-7"
    ></IconLike>
  </div>
  <TrashButtonAndCounter class="pt-5" :item="propItem" v-model="countProduct" />
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
const user = useAuthStore();

propItem.value = props.item;

favStore.wish_items?.forEach(async (e) => {
  if (e.uuid == props.item.uuid) {
    propItem.value.isLiked = true;
  } else {
    propItem.isLiked == false;
  }
});
const toggleFav = async (e) => {
  if (user.userToken?.uuid) {
    const { data: wish_user } = await useMyFetch(
      `/api/v1/client/wish-list?lang=tm&user_id=${user.userToken?.uuid}`
    );
    if (wish_user.value?.status) {
      wish_user.value.data?.filter((e) => {
        e.images = e.img_path;
      });
      favStore.wish_items = wish_user.value.data;
    }
  }
  if (e.isLiked) {
    e.isLiked = false;

    favStore.removeLocalStorage(e);
    if (user.userToken?.uuid) {
      const { data } = await useMyFetch(
        `/api/v1/client/wish-list/delete/${user.userToken?.uuid}/${e.uuid}`,
        {
          method: "POST",
        }
      );
    }
  } else {
    e.isLiked = true;
    if (user.userToken?.uuid) {
      const { data } = useMyFetch(`/api/v1/client/wish-list/create`, {
        method: "POST",
        body: {
          product_id: e.uuid,
          user_id: user.userToken?.uuid,
        },
      });
    }
    favStore.setLocalStorage(e);
  }
};

const countProduct = ref(null);
watch(countProduct, () => {});
</script>

<style scoped></style>
