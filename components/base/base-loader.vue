<template>
  <div>
    <div
      v-if="userStore.getLoading"
      class="fixed opacity-75 text-3xl font-bold z-10 no-scrollbar overflow-hidden top-0 w-screen h-screen flex items-center justify-center bg-slate-500 text-white"
    >
      Loading...
    </div>
  </div>
</template>

<script setup>
import { useLoaderStore } from "~~/stores/loader";

const userStore = useLoaderStore();

const posts = ref(null);
const categories = ref(null);
</script>

<style lang="scss" scoped></style>
