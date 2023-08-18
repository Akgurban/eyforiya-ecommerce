<template>
  <div>
    <div class="w-80 flex gap-2 items-center ml-auto">
      <div
        class="text-xl font-bold"
        :class="
          statusValue.name == `tassyklanan` ? 'text-green-700' : 'text-red-500'
        "
      >
        Yagdayy:
      </div>
      <BaseSelect
        v-model="statusValue"
        class=""
        :options="[{ name: `tassyklanan` }, { name: `garashylyar` }]"
      ></BaseSelect>
    </div>
    <div class="rounded-md p-2 m-1 flex justify-between">
      <p class="font-bold">Ulanyjy ady</p>
      <p class="font-bold">harydyn ady</p>
      <p class="font-bold">teswir</p>
      <p class="font-bold">status uytgetmek</p>
      <p class="font-bold">Pozmak</p>
    </div>
    <ul>
      <div
        class="bg-gray-200 cursor-pointer flex justify-between items-center text-lg font-bold rounded-md p-2 m-1"
        v-for="item in comments"
        :key="item.uuid"
      >
        <p>
          {{ item.user_name }}
        </p>
        <p>
          {{ item.product_name }}
        </p>
        <p class="w-50 text-sm">
          {{ item.content }}
        </p>
        <div class="flex gap-3">
          <BaseButton @click="updateComments(item)" type="secondary"
            >Status uytget</BaseButton
          >
          <BaseButton @click="deleteCategory(item)" type="danger"
            >Pozmak</BaseButton
          >
        </div>
      </div>
    </ul>
    <BasePaginate v-model="count" :total-items="totalItems" />
  </div>
</template>

<script setup>
import { useUserStore } from "~~/stores/user";
const userStore = useUserStore();
definePageMeta({
  layout: "admin",
  middleware: ["auth"],
});
const comments = ref(null);
const count = ref(1);
const totalItems = ref(10);
const statusValue = ref({ name: `tassyklanan` });
const router = useRouter();
try {
  const { data } = await userStore.getComments({
    status: statusValue.value.name == `tassyklanan` ? true : false,
    limit: 15,
    offset: count.value-1,
  });
  comments.value = data.value.data.comments;
  totalItems.value = data.value.data?.count;
} catch (error) {
  console.log(error);
}

const getCategoriesr = async () => {
  try {
    const { data } = await userStore.getComments({
      status: statusValue.value.name == `tassyklanan` ? true : false,
      limit: 15,
      offset: count.value - 1,
    });
    comments.value = data.value.data.comments;
    totalItems.value = data.value.data?.count;
  } catch (error) {
    console.log(error);
  }
};
const deleteCategory = async (e) => {
  try {
    const { data } = await userStore.deleteComment(e.uuid);
    await getCategoriesr();
  } catch (error) {
    console.log(error);
  }
};
const updateComments = async (e) => {
  try {
    const { data } = await userStore.updateComment({
      status: statusValue.value.name !== `tassyklanan` ? true : false,
      uuid: e.uuid,
    });
    await getCategoriesr();
  } catch (error) {
    console.log(error);
  }
};
watch(statusValue, async () => {
  await getCategoriesr();
});
watch(count, async () => {
  await getCategoriesr();
});
</script>

<style lang="scss" scoped></style>
