<template>
  <div class="w-screen px-3 md:w-[1200px] mx-auto z-20">
    <div
      class="2xl:w-[1424px] xl:w-[1230px] w-full flex gap-3 items-center pl-0 md:pl-10"
    >
      <NuxtLink to="/" class="cursor-pointer hover:font-bold">{{
        $t("home")
      }}</NuxtLink>
      <IconChevronRight class="h-3" />
      <p class="cursor-pointer">{{ $t("profile") }}</p>

      <IconChevronRight class="h-3" />
      <p class="cursor-pointer">{{ $t("history") }}</p>
    </div>

    <div class="flex md:flex-row flex-col gap-4 mt-3">
      <div class="">
        <profil-sidebar></profil-sidebar>
      </div>

      <div class="md:w-[900px] w-full">
        <div
          v-if="!orders"
          class="w-full h-auto mt-30 flex font-bold items-center justify-center text-6xl font-alatsi"
        >
          {{ $t("noorder") }}
        </div>
        <div class="overflow-auto">
          <ul>
            <div
              class="bg-gray-200 cursor-pointer text-lg font-bold rounded-md p-2 m-1"
              v-for="item in orders"
              :key="item.uuid"
            >
              <div
                class="bg-gray-200 cursor-pointer flex justify-between items-center text-lg font-bold rounded-md p-2 m-1"
              >
                <p>{{ item.username }}</p>
                <p>+993 {{ item.string }}</p>
                <!-- <p>status: {{ item.status }}</p> -->
              </div>
              <ul class="pl-0 md:pl-10">
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
                  <p>{{ small.count }} x</p>
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
}
</script>

<style lang="scss" scoped></style>
