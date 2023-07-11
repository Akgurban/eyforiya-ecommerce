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
        v-for="item in posts"
        :key="item.uuid"
      >
        <img
          :src="`http://192.168.1.126:3000/api/v1/uploads/news/${item.img_path}`"
          alt=""
          class="h-10 w-15"
        />
        <p>
          {{ item.title }}
        </p>
        <p>
          {{ item.description }}
        </p>
        <BaseButton @click="deletePosts(item)" type="danger">delete</BaseButton>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useUserStore } from "~~/stores/user";
definePageMeta({
  layout: "admin",
});
const posts = ref(null);
const userStore = useUserStore();
const getPosts = async () => {
  try {
    const { data } = await userStore.getPosts({
      limit: 10,
      offset: 0,
    });
    console.log(data, "data");
    posts.value = data.data.services;
  } catch (error) {
    console.log(error);
  }
};
await getPosts();

const deletePosts = async (e) => {
  try {
    const { data } = await userStore.deletePosts(e);
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
