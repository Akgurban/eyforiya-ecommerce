<template>
  <div
    class="w-full font-bold justify-evenly flex gap-2 px-6 py-1 md:py-2 my-2 rounded-xl bg-[#F6F6F6]"
  >
    <div
      @click="decrement"
      class="cursor-pointer text-2xl text-[#3C4242] px-2 select-none"
    >
      -
    </div>
    <div class="cursor-pointer text-2xl w-7 text-center">{{ count }}</div>
    <div
      @click="increment"
      class="cursor-pointer text-2xl text-[#3C4242] px-2 select-none"
    >
      +
    </div>
  </div>
</template>

<script setup>
const count = ref(1);
const emit = defineEmits(["update:modelValue"]);

const increment = () => {
  count.value += 1;
  emit("update:modelValue", count.value);
};

const decrement = () => {
  if (count.value > 0) {
    count.value -= 1;

    emit("update:modelValue", count.value);
  }
};
</script>

<style lang="scss" scoped></style>
