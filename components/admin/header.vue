<template>
  <div>
    <div
      class="bg-gray-200 cursor-pointer w-full p-2 text-base font-semibold flex justify-between"
    >
      <div>Admin Panel</div>
      <div class="group relative flex gap-2 font-bold">
        <p>User</p>

        <div
          class="absolute group-hover:block hidden top-6 -right-1/2 text-white h-10 w-[150px]"
        >
          <div class="relative w-full h-full mt-4">
            <div
              class="items-center relative z-50 justify-center flex h-full text-sm bg-gray-600 rounded-md"
            >
              Hasapdan Cyk
              <img
                class="inline w-4 ml-2"
                src="~/assets/images/logout.svg"
                alt=""
              />
            </div>

            <div
              class="absolute w-4 h-4 rotate-45 rounded-sm -top-2 translate-x-1/2 right-1/2 bg-gray-600"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
</script>

<style lang="scss" scoped></style>
