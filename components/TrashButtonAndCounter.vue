<template>
  <div>
    <div
      v-if="count == 0"
      @click="increment"
      class="relative pointer-events-auto select-none mt-5 mb-[30px] md:mb-[30px] hover:scale-95 transition-transform duration-150"
    >
      <img
        class="mx-auto h-9 md:h-10 pointer-events-none touch-pan-y"
        src="@/assets/images/add_cart.svg"
        alt=""
      />
      <div
        class="absolute pointer-events-auto top-0 right-1/2 translate-x-1/2 flex items-center gap-3 text-white h-fit"
      >
        <div class="md:text-2xl text-lg font-alatsi whitespace-nowrap">
          Sebede goş
        </div>
        <IconTrash
          draggable="false"
          class="inline pointer-events-none mt-1 md:w-9 w-6 md:h-9 h-6"
        ></IconTrash>
      </div>
    </div>

    <div v-if="count != 0" class="w-[80%] mt-3 z-50 h-20">
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
    </div>
  </div>
</template>

<script setup>
const count = ref(0);
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

<style scoped></style>
