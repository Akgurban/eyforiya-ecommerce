<template>
  <div>
    <div
      class="aspect-[video] w-screen 2xl:w-[1428px] mx-auto flex justify-between items-start px-4 sm:flex-row flex-col"
    >
      <img
        src="/special/spec-1.png"
        class="sm:w-[40%] w-full rounded-md aspect-square"
        alt=""
      />
      <div class="w-[60%] sm:ml-6 ml-0 mt-6">
        <div
          class="cursor-pointer transition-all duration-100 hover:text-[#44A4DB] md:text-6xl text-2xl mb-1 font-semibold font-inter"
        >
          Bingo
        </div>
        <div
          class="sm:pt-1.5 pt-0 pb-1.5 md:text-xl text-lg sm:font-normal font-medium"
        >
          Çaga egin-eşikleri üçin ýumşadyjy konsentrat Bingo "Oğluşum" 1440 ml
        </div>

        <div
          class="flex items-center flex-wrap sm:px-4 px-1 py-2 border-t border-b border-gray-200"
        >
          <div
            class="text-white cursor-pointer rounded-md text-2xl px-4 py-3 bg-[#44A4DB]"
            @click="useRouter().push({ path: '/product/s', query: { s: 7 } })"
          >
            199 TMT
          </div>
        </div>
        <div class="w-fit ml-5">
          <TrashButtonAndCounter v-model="count_product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const count_product = ref(0);
const route = useRoute();
watch(route.query.s, async () => {
  console.log("route uyth=ef");
});
console.log(route.query.s);
</script>

<style lang="scss" scoped></style>
