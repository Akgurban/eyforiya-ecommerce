<script setup>
import { useAdminStore } from "@/stores/adminStore";
import { useLoaderStore } from "~~/stores/loader";
import { useToast } from "vue-toastification";
const loaderStore = useLoaderStore();
const $toast = useToast();
definePageMeta({
  layout: "default",
  // middleware: ["redirect"],
});
const user = ref("");
const password = ref("");
const pendings = ref(false);
const isValid = ref(true);
const admin_store = useAdminStore();
const router = useRouter();

async function login() {
  try {
    // simple data validation
    if (!user.value || !password.value) {
      isValid.value = false;
      return;
    }

    pendings.value = true;
    const { data, pending, status, error } = await useFetch(
      "http://duypbaha.com.tm/api/v1/admin/login",
      {
        method: "POST",
        body: {
          user: user.value,
          password: password.value,
        },
      }
    );
    if (data.value.data) {
      admin_store.adminToken = data.value.data;
      router.push("/admin/categories");
    } else if (status) {
      $toast.error("kodunyz yalnys :(");
    }
    pendings.value = false;
  } catch (error) {
    throw error;
  }
}
const logout = () => {
  admin_store.adminToken = "";
  router.push("/");
};
</script>

<template>
  <div
    class="flex justify-center pt-34 md:pt-40 h-[110vh] absolute top-0 bg-slate-300 z-40 w-full"
  >
    <BaseButton @click="logout" class="absolute top-0 left-0" type="danger"
      >Logout</BaseButton
    >
    <div class="w-full max-w-md">
      <div
        class="text-3xl font-bold text-center mb-6 flex w-full justify-between"
      ></div>
      <form class="bg-c-gray shadow-lg rounded px-8 pt-6 pb-8 mb-4">
        <img
          class="mx-auto md:cursor-pointer cursor-auto"
          @click="router.push(localePath('/'))"
          src="~/assets/images/logo.png"
          alt=""
        />

        <div class="mb-4">
          <BaseInput
            label="Username"
            id="username"
            name="username"
            type="text"
            placeholder="Username"
            v-model="user"
          />
        </div>
        <div class="mb-6">
          <BaseInput
            label="Password"
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            v-model="password"
          />
        </div>
        <p class="text-red-500 text-sm inter font-bold mb-4" v-if="!isValid">
          Please fill all the forms
        </p>
        <div class="flex w-full gap-5 items-center justify-between">
          <button
            class="bg-blue-700 w-auto text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            @click="login"
          >
            Sign In
          </button>
          <p class="p-2 rounded-md text-white font-bold" v-if="pendings">
            <img src="@/assets/images/loader.gif" alt="" />
          </p>
        </div>
      </form>
    </div>
  </div>
</template>
