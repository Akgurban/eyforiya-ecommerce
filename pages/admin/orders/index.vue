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
        :options="[{ name: `tassyklanan` }, { name: `garashylyar` }]"
      ></BaseSelect>
    </div>
    <div class="rounded-md p-2 m-1 flex justify-between">
      <p class="font-bold">Zakazlar</p>
      <BaseButton type="">Pozmak</BaseButton>
    </div>
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
              >Pozmak</BaseButton
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
            <p>{{ small.price }} TMT</p>
            <p>count: {{ small.count }}</p>
          </li>
        </ul>
      </div>
      <BasePaginate v-model="count" :total-items="totalItems" />
    </ul>
  </div>
</template>

<script setup>
import { useUserStore } from "~~/stores/user";
import { useToast } from "vue-toastification";

definePageMeta({
  layout: "admin",
  middleware: ["auth"],
});
const userStore = useUserStore();
const $toast = useToast();
const count = ref(1);
const totalItems = ref(1);
const orders = ref(null);
const router = useRouter();
const statusValue = ref({ name: `garashylyar` });

try {
  const { data } = await userStore.getOrders({
    limit: 25,
    offset: 0,
    status: statusValue.value.name == `tassyklanan` ? true : false,
  });
  // categories.value = data.value.data;
  orders.value = data.value.data.orders;
} catch (error) {
  console.log(error);
}

const getCategoriesr = async () => {
  try {
    const { data } = await userStore.getOrders({
      limit: 15,
      offset: count.value - 1,
      status: statusValue.value.name == `tassyklanan` ? true : false,
    });
    orders.value = data.value.data.orders;
    totalItems.value = data.value.data?.count;
  } catch (error) {
    console.log(error);
  }
};
const deleteCategory = async (e) => {
  try {
    const { data, status } = await userStore.deleteOrders(e.order_id);
    if (status) {
      $toast.success("order deleted!");
    }
    await getCategoriesr();
  } catch (error) {
    console.log(error);
  }
};
const setStatus = async (e) => {
  try {
    const { data, status } = await userStore.updateOrder({
      status: statusValue.value.name !== `tassyklanan` ? true : false,
      uuid: e.order_id,
    });
    if (status) {
      $toast.success("Status uytgedi!");
    }
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
