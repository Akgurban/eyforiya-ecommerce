<template>
  <div class="w-screen px-3 md:w-[1200px] mx-auto z-20">
    <div
      class="2xl:w-[1424px] xl:w-[1230px] w-full flex gap-3 items-center pl-0 md:pl-10"
    >
      <NuxtLink
        to="/"
        class="cursor-pointer hover:font-bold"
        >{{ $t("home") }}</NuxtLink
      >
      <IconChevronRight class="h-3" />
      <p class="cursor-pointer">{{ $t("profile") }}</p>

      <IconChevronRight class="h-3" />
      <p class="cursor-pointer">{{ $t("username") }}</p>
    </div>

    <div class="flex md:flex-row flex-col gap-4 mt-3">
      <div class="">
        <profil-sidebar></profil-sidebar>
      </div>
      <div class="md:w-[900px] w-full">
        <div class="h-[96vh] overflow-auto">
          <div class="text-2xl md:text-4xl font-bold mt-6 text-blue-900">
            {{$t('email_rec')}}
          </div>
          <form @submit.prevent="submit" class="mt-10 md:mt-20">
            <div class="pl-2 md:pl-10 w-[70%]">
              <p class="text-blue-800 font-bold">{{ $t('new_email') }}</p>
              <input
                v-model="password"
                type="primary"
                label="passwordy tazele"
                class="border-2 border-blue-800 rounded-full p-2"
              />
            </div>
            <div class="pl-2 md:pl-10 w-[70%] mt-8">
              <p class="text-blue-800 font-bold">{{ $t('rew_email') }}</p>
              <input
                v-model="password2"
                type="primary"
                label="passwordy tazele"
                class="border-2 border-blue-800 rounded-full p-2"
              />
            </div>
            <div class="mt-5 ml-auto w-fit">
              <BaseButton @click.prevent="submit" type="secondary"
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
const $toast = useToast();

const authStore = useAuthStore();
const orders = ref([]);
const password = ref("");
const password2 = ref("");

const submit = async () => {
  if (authStore.userToken?.uuid) {
    if (password.value !== password2.value) {
      $toast.error("tazeden girizyan password yalnysh");
    } else {
      const { data: history, status } = await useMyFetch(
        `/api/v1/client/user/update`,
        {
          body: {
            username: password.value,
            uuid: authStore.userToken?.uuid,
          },
          method: "POST",
        }
      );
      if (status) {
        $toast.success("username changed");
        authStore.userToken.username = password.value;
        password.value = "";
        password2.value = "";
      }
      console.log();
      // orders.value = history.value.data.orders;
    }
  }
};
</script>

<style lang="scss" scoped></style>
