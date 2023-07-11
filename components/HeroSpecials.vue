<template>
  <div class="block">
    <div class="flex gap-5">
      <img
        class="cursor-pointer hover:shadow-hero rounded-xl"
        v-for="item in 3"
        src="/special/spec-1.png"
        alt=""
      />
    </div>
    <div class="flex gap-5 mt-5">
      <img
        class="cursor-pointer hover:shadow-hero rounded-xl"
        v-for="item in 2"
        src="/special/spec-2.png"
        alt=""
      />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
