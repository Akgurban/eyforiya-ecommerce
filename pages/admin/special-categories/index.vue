<template>
  <div>
    <NuxtLink
      class="bg-green-700 block rounded-md hover:bg-green-600 p-2 text-white font-bold text-center mt-3 cursor-pointer"
      @click="addPost"
    >
      Goshmak +
    </NuxtLink>
    <div class="rounded-md p-2 m-1 flex justify-between">
      <p class="font-bold">Yorite kategoriyanyn ady</p>
      <BaseButton type="">Pozmak</BaseButton>
    </div>
    <ul>
      <div
        class="bg-gray-200 flex justify-between items-center text-lg font-bold rounded-md p-2 m-1"
        v-for="item in categories"
        :key="item.uuid"
      >
        <img
          :src="`http://duypbaha.com.tm/api/v1/uploads/special_categories/${item?.img_path}`"
          alt=""
          class="h-10 w-15"
        />
        <p>
          {{ item.name }}
        </p>
        <div class="flex gap-3">
          <BaseButton
            @click="
              useRouter().push(`/admin/special-categories/edit/${item.uuid}`)
            "
            type="secondary"
            >uytget</BaseButton
          >
          <BaseButton @click="deleteCategory(item)" type="danger"
            >Pozmak</BaseButton
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
const categories = ref(null);

try {
  const { data } = await userStore.getSpecialCategories();
  categories.value = data.value.data;
} catch (error) {
  console.log(error);
}

const getCategoriesr = async () => {
  try {
    const { data } = await userStore.getSpecialCategories();
    categories.value = data.value.data;
  } catch (error) {
    console.log(error);
  }
};
const deleteCategory = async (e) => {
  try {
    const { data } = await userStore.deleteSpecialCategories({ uuid: e.uuid });
    await getCategoriesr();
  } catch (error) {
    console.log(error);
  }
};
const addPost = () => {
  if (categories.value?.length >= 5) {
    alert("maximum 5 sany special categoriya");
  } else {
    useRouter().push("/admin/special-categories/add");
  }
};
</script>

<style lang="scss" scoped></style>
