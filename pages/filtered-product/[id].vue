<template>
  <div class="2xl:w-[1440px] xl:screen mx-auto">
    <div class="lead">
      <filtered-sidebar />
      {{ data }}
    </div>
  </div>
</template>

<script setup>
const { data } = await useMyFetch(
  () => `/api/v1/client/products/categories?lang=ru`
);
console.log(data, "Fetchj");
</script>

<style scoped></style>
