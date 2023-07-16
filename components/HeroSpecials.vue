<template>
  <div class="block w-full overflow-hidden">
    <div class="flex w-full">
      <div
        v-for="item in 3"
        class="p-1 md:p-3 md:w-1/3 w-1/2 md:last:block last:hidden"
      >
        <img
          class="cursor-pointer hover:shadow-hero rounded-xl"
          src="/special/spec-1.png"
          alt=""
        />
      </div>
    </div>
    <div class="flex w-full">
      <div
        v-for="item in 2"
        class="p-1 md:p-3 md:w-1/2 w-full md:last:block last:hidden"
      >
        <img
          class="cursor-pointer hover:shadow-hero rounded-xl"
          src="/special/spec-2.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
