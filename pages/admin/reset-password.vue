<template>
  <div class="w-screen px-3 md:w-full mx-auto z-20">
    <div class="flex md:flex-row flex-col gap-4 mt-3">
      <div class=""></div>
      <div class="md:w-[900px] w-full">
        <div class="h-[96vh] overflow-auto">
          <div class="text-2xl md:text-4xl font-bold mt-6 text-blue-900">
            {{ $t("pass_rec") }}
          </div>
          <form @submit.prevent="submit" class="md:mt-20 mt-10">
            <div class="pl-2 md:pl-10 w-[70%]">
              <p class="text-blue-800 font-bold">Admin Ady Tazele</p>
              <input
                v-model="password"
                type="text"
                class="border-2 border-blue-800 rounded-full p-2"
              />
              <BaseButton
                v-if="pending1"
                type="danger"
                class="m-6 inline rounded-full"
                >Pending...</BaseButton
              >
            </div>
            <div class="pl-2 md:pl-10 w-[70%] mt-8">
              <p class="text-blue-800 font-bold">Admin Parol Tazele</p>
              <input
                v-model="password2"
                type="text"
                label="passwordy tazele"
                class="border-2 border-gray-700 rounded-xl p-2"
              />

              <BaseButton
                v-if="pending1"
                type="danger"
                class="m-6 inline rounded-full"
                >Pending...</BaseButton
              >
            </div>
            <div class="mt-5 ml-12 text-xs text-red-300">
              Gizlin kodunyzy yatdan chykarman!!!
            </div>
            <div class="mt-5 w-fit">
              <BaseButton
                @click.prevent="submit"
                type="danger"
                class="m-6 inline rounded-full ml-12"
                >Dowam et</BaseButton
              >
            </div>
            <!-- <BasePaginate v-model="count" :total-items="history.length" /> -->
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from "@/stores/authStore";
import { useToast } from "vue-toastification";
definePageMeta({
  layout: "admin",
  middleware: ["auth"],
});
const $toast = useToast();

const authStore = useAuthStore();
const orders = ref([]);
const pending1 = ref(false);
const password = ref("");
const password2 = ref("");

const submit = async () => {
  const {
    data: history,
    status,
    pending,
  } = await useAdminFetch(`/api/v1/admin/update/password`, {
    body: {
      user: password.value,
      password: password2.value,
    },
    method: "POST",
  });
  if (status) {
    password.value = "";
    password2.value = "";

    $toast.success("password changed");
  }
  pending1.value = false;
  // orders.value = history.value.data.orders;
};
</script>

<style lang="scss" scoped></style>
