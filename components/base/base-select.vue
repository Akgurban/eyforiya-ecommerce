<script setup>
defineProps({
  options: {
    type: Array,
    required: true,
  },
  label: {
    type: String,
    default: "",
  },
  modelValue: {
    type: Object,
    required: true,
  },
});
const emit = defineEmits(["update:modelValue"]);
const showDropdown = ref(false);
const dropdownMenu = ref();

onMounted(() => {
  window.addEventListener("click", (e) => {
    if (dropdownMenu.value != null) {
      if (!dropdownMenu.value.contains(e.target) && showDropdown.value) {
        showDropdown.value = false;
      }
    }
  });
});
</script>

<template>
  <div class="relative">
    <div class="text-black">{{ label }}</div>
    <div
      @click.stop="showDropdown = !showDropdown"
      class="bg-white border border-black w-full h-[50px] flex items-center justify-between sm:px-6 px-4 mt-1 text-sm shadow-sm cursor-pointer"
    >
      <p class="font-bold">
        {{ modelValue?.name }}
      </p>

      <span
        :class="showDropdown ? 'rotate-90' : '-rotate-90'"
        class="transition-all duration-150 -rotate-90"
        ><img src="~/assets/images/chevron.svg" alt=""
      /></span>
    </div>
    <div ref="dropdownMenu">
      <div
        v-if="showDropdown"
        class="absolute right-0 bg-white border-t-2 h-auto duration-250 ease-in-out z-10 shadow-lg w-full"
      >
        <ul v-for="(option, index) in options" :key="index">
          <li
            @click="
              showDropdown = false;
              $emit('update:modelValue', option);
            "
            class="py-2 px-7 hover:bg-gray-100 cursor-pointer"
          >
            {{ option.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
