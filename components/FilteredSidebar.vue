<template>
  <div
    class="relative px-2 py-2 lg:block hidden 2xl:w-[25%] lg:w-[28%] pb-10 bg-slate-100 rounded-md p-4"
  >
    <div>
      <div class="text-2xl font-alatsi mb-2">Tertip</div>
      <div>
        <div v-for="item in orderList" class="flex items-center gap-2">
          <BaseInput
            @change="test(item)"
            heightFull
            class="w-5 h-5"
            type="radio"
            name="price-filter"
            :checked="item.code == order"
          />
          <div class="font-alatsi text-base">{{ item.name }}</div>
        </div>
      </div>
    </div>

    <div class="mt-5">
      <div class="text-2xl font-alatsi mb-2">Icki kategoriya saylan</div>
      <div class="ml-5" v-if="!route.query.catId">
        <p
          v-for="item in sub_categories"
          @click="selectedSub = item.name"
          class="font-alatsi hover:text-[#44A4DB] cursor-auto md:cursor-pointer"
        >
          {{ item.uuid }}
        </p>
      </div>
      <div
        v-else
        @click="selectedSub = null"
        class="text-[#44A4DB] md:cursor-pointer cursor-auto font-alatsi ml-5"
      >
        <IconChevronLeft class="inline text-[#44A4DB]" /> = yza Cyk
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
                  {{ option.brand_name }}
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
const route = useRoute();
const emit = defineEmits(["someChange"]);
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
if (route.query.order) {
  order.value = route.query.order;
}
const orderList = ref([
  { code: "desc", name: "Hic hili" },
  { code: 1, name: "Arzandan gymmada" },
  { code: 2, name: "Gymmatdan arzana" },
]);
const selectedBrands = ref([]);
const selectedSub = ref("");

props.brands?.forEach((e) => {
  JSON.parse(route.query.filter)?.forEach((item) => {
    if (item == e.uuid) {
      e.selected = true;
      selectedBrands.value.push(e.uuid);
    }
  });
});

const checkBrands = async (e) => {
  if (e.selected) {
    e.selected = false;
    selectedBrands.value.filter((item, index) => {
      if (item == e.uuid) {
        selectedBrands.value.splice(index, 1);
      }
    });
  } else {
    e.selected = true;
    selectedBrands.value.push(e.uuid);
  }

  emit("someChange", {
    sub: selectedSub.value,
    ord: order.value,
    brnd: selectedBrands.value,
  });
};
function test(e) {
  order.value = e.code;
  emit("someChange", {
    sub: selectedSub.value,
    ord: order.value,
    brnd: selectedBrands.value,
  });
}

watch(selectedSub, () => {
  emit("someChange", {
    sub: selectedSub.value,
    ord: order.value,
    brnd: selectedBrands.value,
  });
});
watch(selectedBrands, () => {
  emit("someChange", {
    sub: selectedSub.value,
    ord: order.value,
    brnd: selectedBrands.value,
  });
});
</script>

<style scoped></style>
