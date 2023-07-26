<template>
  <div>
    <NuxtLink
      class="bg-green-700 block rounded-md hover:bg-green-600 p-2 text-white font-bold text-center mt-3 cursor-pointer"
      to="/admin/sub-categories/add"
    >
      Add +
    </NuxtLink>
    <div class="rounded-md p-2 m-1 flex justify-between">
      <p class="font-bold">Name</p>
      <BaseButton type="">Delete</BaseButton>
    </div>
    <ul>
      <div
        class="bg-gray-200 flex justify-between items-center text-lg font-bold rounded-md p-2 m-1"
        v-for="item in categories"
        :key="item.uuid"
      >
        <p>
          {{ item.name }}
        </p>
        <div class="flex gap-3">
          <BaseButton
            @click="router.push(`/admin/sub-categories/edit/${item.uuid}`)"
            type="primary"
            >edit</BaseButton
          >
          <BaseButton @click="deleteSubCategory(item)" type="danger"
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
  middleware: ["auth"],
});
const router = useRouter();

const categories = ref(null);
try {
  const { data } = await userStore.getSubCategories();
  categories.value = data.value.data;
} catch (error) {
  console.log(error);
}

const getCategoriesr = async () => {
  try {
    const { data } = await userStore.getSubCategories();
    categories.value = data.value.data;
  } catch (error) {
    console.log(error);
  }
};
const deleteSubCategory = async (e) => {
  try {
    const { data } = await userStore.deleteSubCategories({ uuid: e.uuid });
    await getCategoriesr();
  } catch (error) {
    console.log(error);
  }
};
</script>

<style lang="scss" scoped></style>
