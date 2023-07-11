<template>
  <div>
    <NuxtLink
      class="bg-green-700 block rounded-md hover:bg-green-600 p-2 text-white font-bold text-center mt-3 cursor-pointer"
      to="/admin/banners/add"
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
        <img
          :src="`http://192.168.1.126:2000/api/v1/uploads/banners/${item?.img_path}`"
          alt=""
          class="h-10 w-15"
        />
        <p>
          {{ item.name }}
        </p>
        <div class="flex gap-3">
          <BaseButton
            @click="router.push(`/admin/banners/edit/${item.uuid}`)"
            type="primary"
            >edit</BaseButton
          >
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
const userStore = useUserStore();
definePageMeta({
  layout: "admin",
});
const categories = ref(null);
const router = useRouter();
try {
  const { data } = await userStore.getBanner();
  console.log(data, "data");
  categories.value = data.data;
} catch (error) {
  console.log(error);
}

const getCategoriesr = async () => {
  try {
    const { data } = await userStore.getBanner();
    console.log(data, "data");
    categories.value = data.data;
  } catch (error) {
    console.log(error);
  }
};
const deleteCategory = async (e) => {
  try {
    const { data } = await userStore.deleteBanner({ uuid: e.uuid });
    console.log(data, "data");
    await getCategoriesr();
  } catch (error) {
    console.log(error);
  }
};
</script>

<style lang="scss" scoped></style>
