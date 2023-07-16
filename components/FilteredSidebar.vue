<template>
  <div
    class="relative px-2 py-2 lg:block hidden 2xl:w-[25%] lg:w-[28%] pb-10 bg-slate-400"
  >
    <div>
      <BaseInput class="w-7 h-7" type="radio" name="price-filter" checked />
      <BaseInput class="w-7 h-7" type="radio" name="price-filter" />
    </div>
  </div>
</template>

<script setup>
const checkbox = ref(true);
const checkbox1 = ref(false);
</script>

<style scoped></style>
