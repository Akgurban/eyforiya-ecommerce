<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "primary",
  },
});
</script>
<template>
  <button
    class="sm:px-6 px-4 sm:py-2 py-1 transition-all duration-150"
    :class="{
      'bg-secondary rounded-[0.1857rem] hover:bg-[#f5db17]':
        props.type === 'secondary',
      'bg-primary text-white': props.type === 'primary',
      'bg-danger text-white': props.type === 'danger',
      'bg-[#f4f4f4] text-c-black hover:bg-[#c0bebe] hover:text-white':
        props.type === 'gray',
    }"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<style>
/* .test {
  color: #f8c646;
} */
</style>
