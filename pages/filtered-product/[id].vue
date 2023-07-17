<template>
  <div class="2xl:w-[1440px] xl:screen mx-auto">
    <div class="lead">
      <filtered-sidebar />
      {{ data }}
    </div>
  </div>
</template>

<script setup>
const route = useRoute();

console.log(route.params);
const filteredProducts = ref({
  category_id: route.params.id,
  lang: "tm",
});
const { data } = await useMyFetch(() => `/api/v1/client/products/product`, {
  method: "POST",
  body: filteredProducts.value,
});
console.log(data, "Fetchj");
</script>

<style scoped></style>
