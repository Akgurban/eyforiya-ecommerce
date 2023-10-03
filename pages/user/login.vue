<script setup>
import { useAuthStore } from "@/stores/authStore";
import { useLoaderStore } from "~~/stores/loader";
import { useFavStore } from "~~/stores/favourite";

import { useTrashStore } from "~~/stores/trash";
import { useToast } from "vue-toastification";
const $toast = useToast();

const favStore = useFavStore();
const trash = useTrashStore();

const loaderStore = useLoaderStore();
definePageMeta({
  layout: "default",
  // middleware: ["redirect"],
});
const user = ref("");
const password = ref("");
const err_valid = ref("user_exist");
const pendings = ref(false);
const isValid = ref(true);
const authStore = useAuthStore();
const router = useRouter();

async function signUp() {
  try {
    // simple data validation
    if (!user.value || !password.value) {
      // isValid.value = false;
      user.value = "";
      password.value = "";
      return;
      // throw new Error("Please fill all fields");
    }
    pendings.value = true;

    const { data, pending, status, error } = await useFetch(
      "http://duypbaha.com.tm/api/v1/client/user-register",
      {
        method: "POST",
        body: {
          username: user.value,
          password: password.value,
        },
      }
    );
    console.log(error);
    if (error.value?.fatal == false) {
      pendings.value = false;
      err_valid.value = "user_exist";
      isValid.value = false;

      return;
      // return $toast.error(`username exist`);
    }
    if (data.value?.status) {
      await login();
    }
    if (pending) {
      pendings.value = true;
    }
    pendings.value = false;
  } catch (error) {
    throw error;
  }
}
async function login() {
  try {
    // simple data validation
    if (!user.value || !password.value) {
      // isValid.value = false;
      user.value = "";
      password.value = "";
      return;
    }

    pendings.value = true;
    const { data, pending, status, error } = await useFetch(
      "http://duypbaha.com.tm/api/v1/client/user/login",
      {
        method: "POST",
        body: {
          username: user.value,
          password: password.value,
        },
      }
    );
    authStore.userToken = data.value?.auth;
    if (!data.value.status) {
      isValid.value = false;

      err_valid.value = "not_correct_data";
      // $toast.error(data.value.message);
    }
    pendings.value = false;
  } catch (err) {
    console.log(err);
  }

  try {
    if (authStore.userToken?.uuid) {
      var {
        data: wish_user,
        error: wishErr,
        status,
      } = await useMyFetch(
        `/api/v1/client/wish-list?lang=tm&user_id=${authStore.userToken?.uuid}`
      );
    }
    if (wish_user.value.status && wish_user.value?.data?.length) {
      favStore.wish_items = [];
      wish_user.value.data?.filter((e) => {
        e.images = e.img_path;
        favStore.setLocalStorage(e);
      });

      // favStore.wish_items = wish_user.value.data;
    } else if (!wish_user.value?.data?.length) {
      favStore.wish_items = [];
    }
  } catch (err) {
    console.log(err);
  }

  try {
    if (authStore.userToken?.uuid) {
      var { data: user_trash } = await useMyFetch(
        `/api/v1/client/trash?user_id=${authStore.userToken?.uuid}&lang=tm`
      );
    }
    if (user_trash.value?.status && user_trash.value?.data?.length) {
      user_trash.value?.data?.filter((e) => {
        e.images = e.img_path;
      });

      trash.trash_items.products = user_trash.value?.data;
    }
    router.push("/");
  } catch (e) {
    console.log(e);
  }
}
const logout = () => {
  authStore.userToken = "";
  router.push("/");
};
</script>

<template>
  <div
    class="flex justify-center pt-34 md:pt-40 h-[110vh] absolute top-0 bg-slate-300 z-40 w-full"
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
            :label="$t('username')"
            id="username"
            name="username"
            type="text"
            placeholder="aman@example.com"
            v-model="user"
          />
        </div>
        <div class="mb-6">
          <BaseInput
            :label="$t('password')"
            id="password"
            name="password"
            type="password"
            placeholder="···········"
            v-model="password"
          />
        </div>
        <p class="text-xs text-gray-400 mb-3">{{ $t("alert_login") }}</p>
        <p class="text-red-500 text-sm inter font-bold mb-4" v-if="!isValid">
          {{ $t(err_valid) }}
        </p>
        <div class="flex w-full gap-5 items-center justify-between">
          <button
            class="bg-blue-700 rounded-2xl w-1/2 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
            type="button"
            @click="login"
          >
            {{ $t("signin") }}
          </button>
          <p class="p-2 rounded-md text-white font-bold" v-if="pendings">
            <img src="@/assets/images/loader.gif" alt="" />
          </p>
          <button
            class="text-blue-700 border-blue-700 border-2 rounded-2xl w-1/2 font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
            type="button"
            @click="signUp"
          >
            {{ $t("signup") }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
