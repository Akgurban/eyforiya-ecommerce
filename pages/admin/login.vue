<script setup>
import { useAuthStore } from "@/stores/authStore";
definePageMeta({
  layout: "login",
  // middleware: ["redirect"],
});
const user = ref("");
const password = ref("");
const isValid = ref(true);
const authStore = useAuthStore();
const router = useRouter();
async function login() {
  try {
    // simple data validation
    if (!user.value || !password.value) {
      isValid.value = false;
      return;
      // throw new Error("Please fill all fields");
    }
    const { data, error } = await useFetch("/api/v1/admin/login", {
      method: "POST",
      body: JSON.stringify({
        user: user.value,
        password: password.value,
      }),
    });
    authStore.userToken = data.value.data;
    router.push("/admin/news");
  } catch (error) {
    throw error;
  }
}
</script>

<template>
  <div class="flex justify-center items-center h-screen">
    <div class="w-full max-w-md">
      <h1 class="text-3xl font-bold text-center mb-6">Login</h1>
      <form class="bg-c-gray shadow-lg rounded px-8 pt-6 pb-8 mb-4">
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
        <div class="flex items-center justify-between">
          <button
            class="bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            @click="login"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
