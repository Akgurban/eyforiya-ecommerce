<template>
  <div class="2xl:w-[1424px] xl:w-[900px] w-screen mx-auto">
    <div
      class="2xl:w-[1424px] xl:w-[900px] w-screen flex gap-3 items-center pl-10"
    >
      <NuxtLink to="/" class="cursor-pointer hover:font-bold">Home</NuxtLink>
      <IconChevronRight class="h-3" />
      <p class="cursor-pointer font-bold">Add to cart</p>
    </div>
    <div class="w-full">
      <div class="w-full">
        <div
          class="bg-[#3C4242] text-white p-2 md:p-[26px] flex justify-between mt-10 px-3 md:px-10 w-full"
        >
          <div></div>
          <div class="flex justify-between w-full md:text-xl text-[10px]">
            <p class="uppercase">Product Details</p>
            <p class="uppercase">Quantity</p>
            <p class="uppercase">Price</p>
            <p class="uppercase">Pozmak</p>
          </div>
        </div>
        <div
          class="mt-20 text-center w-full text-6xl text-gray-500 font-alatsi font-bold"
          v-if="!trash.trash_items.products?.length"
        >
          SebediNiz Bosh
        </div>
        <div
          v-for="item in trash.trash_items.products"
          :key="item"
          class="py-12 p-[26px] flex items-center justify-between px-10"
        >
          <div>
            <div class="flex md:flex-row flex-col items-center md:gap-10 gap-5">
              <img
                @click="useRouter().push(`/product/${item?.uuid}`)"
                :src="`http://duypbaha.com.tm/api/v1/uploads/images/${item.images}`"
                alt=""
                class="w-35 rounded-md aspect-square object-cover"
              />
              <p class="font-alatsi md:text-2xl text-lg w-[100px]">
                {{ item.name }}
              </p>
            </div>
          </div>
          <div
            class="flex items-start w-full justify-end gap-1 md:gap-10 md:flex-row flex-row"
          >
            <div
              class="w-[150px] md:w-[400px] flex md:flex-row flex-col items-center justify-start ml-0"
            >
              <p class="uppercase md:w-[200px] w-[150px]">
                <TrashButtonAndCounter :count="item.count" :item="item" />
              </p>
              <p
                class="uppercase font-bold text-lg md:w-[150px] flex flex-nowrap w-[150px]"
              >
                {{ item?.count * item?.price }} TMT
              </p>
            </div>
            <div @click="deleteUserProduct(item)" class="block cursor-pointer">
              <img class="m-1 w-4" src="@/assets/images/deletecon.svg" alt="" />
            </div>
          </div>
        </div>
        <div
          class="bg-[#3C4242] text-white py-3 flex md:flex-row flex-col gap-y-4 justify-between w-full md:text-xl px-5 text-[10px]"
        >
          <div class="">
            <p class="uppercase font-bold font-alatsi">Total Price:</p>
            <p class="uppercase font-bold font-inter text-lg">
              {{ totalPrice }} TMT
            </p>
          </div>

          <div>
            <p class="uppercase font-bold font-alatsi">Phone number:</p>
            <div
              class="flex h-12 items-center justify-center text-black relative bg-white rounded-lg"
            >
              <div class="h-full flex text-lg items-center mx-2">+993</div>
              <input
                class="text-black text-lg bg-white outline-0 border-white"
                type="text"
                v-model="phone"
                placeholder="6522222"
              />
            </div>
          </div>
          <BaseButton
            @click="makeOrder"
            class="rounded-lg text-lg"
            type="secondary"
            >Sargydy tayyarlamak</BaseButton
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const count = ref(0);
import { useTrashStore } from "~~/stores/trash";
import { useAuthStore } from "~~/stores/authStore";
import { useToast } from "vue-toastification";

const { locale } = useI18n();
const $toast = useToast();

const trash = useTrashStore();
const user = useAuthStore();
const totalPrice = ref(0);
const phone = ref(null);
const calcTotal = () => {
  totalPrice.value = 0;
  trash.trash_items.products?.filter((e) => {
    totalPrice.value += e.price * e.count;
  });
};
calcTotal();
watch(trash.trash_items, calcTotal);

const deleteUserProduct = async (e) => {
  trash.removeLocalStorage(e, 0);

  if (user.userToken) {
    const { data, status } = await useMyFetch("/api/v1/client/trash/create", {
      body: {
        user_id: user.userToken?.uuid,
        product_id: e?.uuid,
        count: 0,
      },
      method: "POST",
    });
    if (status) {
      if (user.userToken?.uuid) {
        const { data: user_trash } = await useMyFetch(
          `/api/v1/client/trash?user_id=${user.userToken.uuid}&lang=${locale.value}`
        );
        if (user_trash.value.status && user_trash.value?.data?.length) {
          trash.trash_items.products = [];
          user_trash.value?.data?.filter((e) => {
            e.images = e.img_path;
          });
          trash.trash_items.products = user_trash.value?.data;
        }
      }
    }
  }
};
const setStore = () => {
  trash.setLocalStorage(count.value);
};

if (user.userToken?.uuid) {
  const { data: user_trash } = await useMyFetch(
    `/api/v1/client/trash?user_id=${user.userToken.uuid}&lang=${locale.value}`
  );
  if (user_trash.value.status && user_trash.value?.data?.length) {
    trash.trash_items.products = [];
    user_trash.value?.data?.filter((e) => {
      e.images = e.img_path;
    });
    trash.trash_items.products = user_trash.value?.data;
  }
}

const makeOrder = async () => {
  const making_products = [];
  trash.trash_items.products?.filter((e) => {
    making_products.push({
      product_id: e.uuid,
      count: `${e.count}`,
    });
  });
  if (phone.value?.length == 8) {
    const { data: make_order } = await useMyFetch(
      `/api/v1/client/products/order/create`,
      {
        method: "POST",
        body: {
          user_id: user.userToken?.uuid || null,
          phone: `${phone.value}`,
          products: making_products,
        },
      }
    );
    if (make_order.value?.status) {
      trash.trash_items.products = [];
      $toast.success("Habarynyz ustunlikli kabul edildi");
      phone.value = "";
      useRouter().push("/");
    }
  } else {
    $toast.error("Telefonynyzy dogry dolduryn");
  }
};
</script>

<style lang="scss" scoped></style>
