<template>
  <div>
    <NuxtLink
      class="bg-green-700 block rounded-md hover:bg-green-600 p-2 text-white font-bold text-center mt-3 cursor-pointer"
      to="/admin/categories/add"
    >
      Add +
    </NuxtLink>
    <div class="rounded-md p-2 m-1 flex justify-between">
      <p class="font-bold">Name category</p>
      <BaseButton type="">Delete</BaseButton>
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
              >kabul edildi</BaseButton
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
    </ul>
  </div>
</template>

<script setup>
import { useUserStore } from "~~/stores/user";
import { useToast } from "vue-toastification";

definePageMeta({
  layout: "admin",
});
const userStore = useUserStore();
const $toast = useToast();
const orders = ref(null);
const router = useRouter();
try {
  const { data } = await userStore.getOrders();
  console.log(data, "orders");
  // categories.value = data.value.data;
  orders.value = data.value.data.orders;
} catch (error) {
  console.log(error);
}

const getCategoriesr = async () => {
  try {
    const { data } = await userStore.getOrders();
    orders.value = data.value.data.orders;
    console.log(data, "orders");
  } catch (error) {
    console.log(error);
  }
};
const deleteCategory = async (e) => {
  try {
    const { data, status } = await userStore.deleteOrders(e.order_id);
    console.log(data, "data");
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
      status: true,
      uuid: e.order_id,
    });
    console.log(data, "data");
    if (status) {
      $toast.success("Sargyt kabul edildi!");
    }
    await getCategoriesr();
  } catch (error) {
    console.log(error);
  }
};
</script>

<style lang="scss" scoped></style>
