<template>
  <div class="w-[1200px] mx-auto z-50">
    <div
      class="2xl:w-[1424px] xl:w-[1230px] w-screen flex gap-3 items-center pl-10"
    >
      <NuxtLink to="/" class="cursor-pointer hover:font-bold">Home</NuxtLink>
      <IconChevronRight class="h-3" />
      <p class="cursor-pointer">licny kabinet</p>
      <IconChevronRight class="h-3" />
      <p class="cursor-pointer font-bold">history</p>
    </div>

    <div class="flex gap-4 mt-3">
      <profil-sidebar></profil-sidebar>
      <div class="w-[900px]">
        <div class="h-screen overflow-auto">
          <ul>
            <div
              class="bg-gray-200 cursor-pointer text-lg font-bold rounded-md p-2 m-1"
              v-for="item in orders"
              :key="item.uuid"
            >
              <div
                class="bg-gray-200 cursor-pointer flex justify-between items-center text-lg font-bold rounded-md p-2 m-1"
              >
                <p>name: {{ item.username }}</p>
                <p>+993 {{ item.string }}</p>
                <!-- <p>status: {{ item.status }}</p> -->
                <div class="flex gap-3">
                  <BaseButton @click="setStatus(item)" type="primary"
                    >Status uytget</BaseButton
                  >
                  <BaseButton @click="deleteCategory(item)" type="danger"
                    >delete</BaseButton
                  >
                </div>
              </div>
              <ul class="pl-10">
                <li
                  class="mt-2 odd:bg-gray-50 even:bg-gray-100 cursor-pointer flex justify-between items-center text-lg font-bold rounded-md p-2 m-1"
                  v-for="small in item.products"
                  :key="small.uuid"
                >
                  <img
                    :src="`http://duypbaha.com.tm/api/v1/uploads/images/${small?.img_path}`"
                    alt=""
                    class="h-10 w-15"
                  />
                  <p>
                    {{ small.product_name }}
                  </p>
                  <p>count: {{ small.count }}</p>
                </li>
              </ul>
            </div>
            <!-- <BasePaginate v-model="count" :total-items="history.length" /> -->
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from "@/stores/authStore";
const authStore = useAuthStore();
const orders = ref([]);
if (authStore.userToken?.uuid) {
  const { data: history } = await useMyFetch(
    `/api/v1/client/orders?limit=100&offset=0&lang=tm&user_id=${authStore.userToken?.uuid}`
  );
  orders.value = history.value.data.orders;
  console.log(history.value.data.orders, "history");
}
</script>

<style lang="scss" scoped></style>
