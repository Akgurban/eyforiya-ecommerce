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
          class="font-alatsi hover:text-[#44A4DB] cursor-auto md:cursor-pointer"
        >
          balak
        </p>
        <p
          class="font-alatsi hover:text-[#44A4DB] cursor-auto md:cursor-pointer"
        >
          koynek
        </p>
        <p
          class="font-alatsi hover:text-[#44A4DB] cursor-auto md:cursor-pointer"
        >
          jinsi
        </p>
      </div>
    </div>

    <div class="relative mt-5">
      <div class="text-2xl font-alatsi mb-2">Brend</div>

      <div>
        <div
          class="right-0 border-t-2 h-auto duration-250 ease-in-out z-10 w-full"
        >
          <ul v-for="(option, index) in options" :key="index">
            <li
              @click="$emit('update:modelValue', option)"
              class="py-2 px-5 hover:bg-gray-100 cursor-pointer"
            >
              <div class="flex items-center justify-start gap-2">
                <div class="h-4 w-4">
                  <BaseInput heightFull type="checkbox"></BaseInput>
                </div>
                <div
                  class="font-alatsi text-base hover:text-[#44A4DB] cursor-auto md:cursor-pointer"
                >
                  {{ option.name }}
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
const checkbox = ref(true);
const checkbox1 = ref(false);
const options = ref([
  { name: "wtf" },
  { name: "nike" },
  { name: "puma" },
  { name: "adidas" },
  { name: "uzyn" },
]);
</script>

<style scoped></style>
