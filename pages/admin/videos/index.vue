<template>
  <div>
    <NuxtLink
      class="bg-green-700 block rounded-md hover:bg-green-600 p-2 text-white font-bold text-center mt-3 cursor-pointer"
      to="/admin/videos/add"
    >
      Add +
    </NuxtLink>
    <div class="rounded-md p-2 m-1 flex justify-between">
      <p class="font-bold">Name category</p>
      <BaseButton type="">Delete</BaseButton>
    </div>
    <ul>
      <div
        class="bg-gray-200 cursor-pointer flex justify-between items-center text-lg font-bold rounded-md p-2 m-1"
        v-for="item in categories"
        :key="item.uuid"
      >
        <video
          class="w-40 aspect-video object-cover z-[1]"
          controls
          autoplay
          loop
          muted
          ref="img"
        >
          <source
            :src="`http://duypbaha.com.tm/api/v1/uploads/videos/${item?.video_path}`"
            ref="img"
            alt=""
          />
        </video>

        <p>
          {{ item.name }}
        </p>
        <div class="flex gap-3">
          <BaseButton @click="deleteCategory(item)" type="danger"
            >delete</BaseButton
          >
        </div>
      </div>
    </ul>
  </div>
</template>

<script setup>
import { useUserStore } from "~~/stores/user";

import { useLoaderStore } from "~~/stores/loader";

import { useToast } from "vue-toastification";
const $toast = useToast();

const loaderStore = useLoaderStore();

const userStore = useUserStore();
definePageMeta({
  layout: "admin",
  middleware: ["auth"],
});
const categories = ref(null);
const router = useRouter();
try {
  const { data } = await userStore.getVideos();
  categories.value = data.value.data;
  loaderStore.endLoading();
} catch (error) {
  console.log(error);
}

const getCategoriesr = async () => {
  try {
    const { data } = await userStore.getVideos();
    categories.value = data.value.data;
  } catch (error) {
    console.log(error);
  }
};
const deleteCategory = async (e) => {
  try {
    const form = new FormData();
    form.append("uuid", e.uuid);
    const { data } = await userStore.addVideos(form);
    await getCategoriesr();
  } catch (error) {
    console.log(error);
  }
};
</script>

<style lang="scss" scoped></style>
