<template>
  <div
    class="relative px-2 py-2 lg:block hidden 2xl:w-[25%] lg:w-[28%] pb-10 bg-slate-100 rounded-md p-4"
  >
    <div>
      <div class="text-2xl font-alatsi mb-2">Tertip</div>
      <div>
        <div class="flex items-center gap-2">
          <BaseInput
            heightFull
            class="w-5 h-5"
            type="radio"
            name="price-filter"
            checked
          />
          <div class="font-alatsi text-base">Hic hili</div>
        </div>
        <div class="flex items-center gap-2">
          <BaseInput
            heightFull
            class="w-5 h-5"
            type="radio"
            name="price-filter"
          />
          <div class="font-alatsi text-base">Arzandan gymmada</div>
        </div>
        <div class="flex items-center gap-2">
          <BaseInput
            heightFull
            class="w-5 h-5"
            type="radio"
            name="price-filter"
          />
          <div class="font-alatsi text-base">Gymmatdan arzana</div>
        </div>
      </div>
    </div>

    <div class="mt-5">
      <div class="text-2xl font-alatsi mb-2">Icki kategoriya saylan</div>
      <div class="ml-5">
        <p
          v-for="item in sub_categories"
          @click="selectedSub = item"
          class="font-alatsi hover:text-[#44A4DB] cursor-auto md:cursor-pointer"
        >
          {{ item.uuid }}
        </p>
      </div>
    </div>

    <div class="relative mt-5">
      <div class="text-2xl font-alatsi mb-2">Brend</div>

      <div>
        <div
          class="right-0 border-t-2 h-auto duration-250 ease-in-out z-10 w-full"
        >
          <ul
            @click="checkBrands(option)"
            v-for="(option, index) in brands"
            :key="index"
          >
            <li class="py-2 px-5 hover:bg-gray-100 cursor-pointer">
              <div class="flex items-center justify-start gap-2">
                <div class="h-4 w-4">
                  <input v-model="option.selected" type="checkbox" />
                </div>
                <div
                  class="font-alatsi text-base hover:text-[#44A4DB] cursor-auto md:cursor-pointer"
                >
                  {{ option.uuid }}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(["update:modelValue", "changeValue"]);
const props = defineProps({
  brands: {
    type: Array,
    default: [],
  },
  sub_categories: {
    type: Array,
    default: [],
  },
});

const order = ref("desc");
const selectedBrands = ref([]);
const selectedSub = ref({});
const checkBrands = async (e) => {
  // emit("changeValue", e);
  if (e.selected) {
    e.selected = false;
    selectedBrands.value.filter((item, index) => {
      if (item.uuid == e.uuid) {
        selectedBrands.value.splice(index, 1);
      }
    });
  } else {
    e.selected = true;
    selectedBrands.value.push(e);
  }

  emit("update:modelValue", {
    sub: selectedSub.value,
    ord: order.value,
    brnd: selectedBrands.value,
  });
};
watch(order, () => {
  emit("update:modelValue", {
    sub: selectedSub.value,
    ord: order.value,
    brnd: selectedBrands.value,
  });
});
watch(selectedSub, () => {
  emit("update:modelValue", {
    sub: selectedSub.value,
    ord: order.value,
    brnd: selectedBrands.value,
  });
});
watch(selectedBrands, () => {
  emit("update:modelValue", {
    sub: selectedSub.value,
    ord: order.value,
    brnd: selectedBrands.value,
  });
});
</script>

<style scoped></style>
