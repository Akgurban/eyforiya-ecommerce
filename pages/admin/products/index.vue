<template>
  <div>
    <NuxtLink
      class="bg-green-700 block rounded-md hover:bg-green-600 p-2 text-white font-bold text-center mt-3 cursor-pointer"
      to="/admin/products/add"
    >
      Add +
    </NuxtLink>
    <div class="rounded-md p-2 m-1 flex justify-between">
      <p class="font-bold">Image</p>
      <p class="font-bold">Title</p>
      <p class="font-bold">Description</p>
      <p class="font-bold">Delete</p>
    </div>
    <ul>
      <li
        class="bg-gray-200 flex justify-between items-center text-lg font-bold rounded-md p-2 m-1"
        v-for="item in products"
        :key="item.uuid"
      >
        <img
          :src="`http://216.250.9.21:2000/api/v1/uploads/images/${item?.images[0]}`"
          alt=""
          class="h-10 w-15"
        />
        <p>
          {{ item.name }}
        </p>
        <p>
          {{ item.description }}
        </p>
        <div class="flex gap-3">
          <BaseButton
            @click="useRouter().push(`/admin/products/edit/${item.uuid}`)"
            type="primary"
            >edit</BaseButton
          >
          <BaseButton @click="deletePosts(item)" type="danger"
            >delete</BaseButton
          >
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useUserStore } from "~~/stores/user";
definePageMeta({
  layout: "admin",
});
const products = ref(null);
const userStore = useUserStore();
const getPosts = async () => {
  try {
    const { data } = await userStore.getProduct({
      limit: 10,
      offset: 0,
    });
    console.log(data, "data");
    products.value = data.data.products;
  } catch (error) {
    console.log(error);
  }
};
await getPosts();

const deletePosts = async (e) => {
  try {
    const { data } = await userStore.deleteProduct(e);
    console.log(data, "data");
    if (data.status) {
      await getPosts();
    }
  } catch (error) {
    console.log(error);
  }
};
</script>

<style lang="scss" scoped></style>
