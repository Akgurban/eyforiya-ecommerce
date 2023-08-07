<template>
  <div>
    <div
      class="bg-gray-200 cursor-pointer w-full p-2 text-base font-semibold flex justify-between"
    >
      <div>Admin Panel</div>
      <div @click="logout" class="group relative flex gap-2 font-bold">
        <p class="text-white p-1 rounded-md bg-red-700">Ulgamdan Cyk</p>

        <!-- <div
          class="absolute group-hover:block hidden top-6 -right-1/2 text-white h-10 w-[150px]"
        >
          <div class="relative w-full h-full mt-4">
            <div
              class="items-center relative z-50 justify-center flex h-full text-sm bg-gray-600 rounded-md"
            >
              Hasapdan Cyk
            </div>

            <div
              class="absolute w-4 h-4 rotate-45 rounded-sm -top-2 translate-x-1/2 right-1/2 bg-gray-600"
            ></div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAdminStore } from "@/stores/adminStore";
const route = useRoute();
const admin_store = useAdminStore();
const logout = () => {
  admin_store.adminToken = "";
  useRouter().push("/");
};
</script>

<style lang="scss" scoped></style>
