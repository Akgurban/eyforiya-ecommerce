<template>
  <div class="w-[1200px] mx-auto z-50">
    <div class="flex gap-4">
      <admin-sidebar></admin-sidebar>
      <div class="w-[900px]">
        <admin-header></admin-header>
        <div class="h-[96vh] overflow-auto">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
