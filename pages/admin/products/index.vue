<template>
  <div>
    <NuxtLink
      class="bg-green-700 block rounded-md hover:bg-green-600 p-2 text-white font-bold text-center mt-3 cursor-pointer"
      to="/admin/products/add"
    >
      Goshmak +
    </NuxtLink>
    <div class="rounded-md p-2 m-1 flex justify-between">
      <p class="font-bold">Image</p>
      <p class="font-bold">Title</p>
      <p class="font-bold">Description</p>
      <p class="font-bold">Pozmak</p>
    </div>
    <ul>
      <li
        class="bg-gray-200 flex justify-between items-center text-lg font-bold rounded-md p-2 m-1"
        v-for="item in products"
        :key="item?.uuid"
      >
        <img
          :src="`http://duypbaha.com.tm/api/v1/uploads/images/${item?.images[0]}`"
          alt=""
          class="h-10 w-15"
        />
        <p>
          {{ item?.name }}
        </p>
        <p class="text-xs w-1/3">
          {{ item?.description }}
        </p>
        <div class="flex gap-3">
          <BaseButton
            @click="useRouter().push(`/admin/products/edit/${item?.uuid}`)"
            type="primary"
            >uytget</BaseButton
          >
          <BaseButton @click="deletePosts(item)" type="danger"
            >Pozmak</BaseButton
          >
        </div>
      </li>
      <BasePaginate :total-items="totalItems" v-model="count" />
    </ul>
  </div>
</template>

<script setup>
import { useToast } from "vue-toastification";

import { useUserStore } from "~~/stores/user";
import { useLoaderStore } from "~~/stores/loader";

definePageMeta({
  layout: "admin",
  middleware: ["auth"],
});
const loaderStore = useLoaderStore();
const $toast = useToast();
const products = ref(null);
const count = ref(1);
const totalItems = ref(10);
const userStore = useUserStore();

const getPosts = async () => {
  try {
    const { data } = await userStore.getProduct({
      limit: 15,
      offset: count.value,
    });
    if (data?.value.status) {
      products.value = data.value.data?.products;
      totalItems.value = data.value.data?.count;
    }
  } catch (error) {
    console.log(error);
  }
};

await getPosts();

watch(count, async () => {
  await getPosts();
});
const deletePosts = async (e) => {
  try {
    const { data } = await userStore.deleteProduct(e);
    if (data.value.status) {
      await getPosts();
    }
  } catch (error) {
    console.log(error);
  }
};
loaderStore.endLoading();
</script>
<style></style>
