<template>
  <div class="block w-full overflow-hidden">
    <div class="flex w-full">
      <NuxtLink
        v-for="item in specials.slice(0, 3)"
        @click="
          useRouter().push(
            localePath({
              path: `/filtered-product/${item?.uuid}`,
              query: { filter: '[]' },
            })
          )
        "
        class="p-1 md:p-3 md:w-1/3 w-1/2 md:last:block last:hidden"
      >
        <img
          class="cursor-pointer object-cover hover:shadow-hero rounded-xl w-full aspect-[16/9]"
          :src="`http://duypbaha.com.tm/api/v1/uploads/special_categories/${item?.img_path}`"
          alt=""
        />
      </NuxtLink>
    </div>
    <div class="flex w-full">
      <NuxtLink
        v-for="item in specials.slice(3, 5)"
        @click="
          useRouter().push(
            localePath({
              path: `/filtered-product/${item?.uuid}`,
              query: { filter: '[]' },
            })
          )
        "
        class="p-1 md:p-3 md:w-1/2 w-full md:last:block last:hidden"
      >
        <img
          class="cursor-pointer object-cover hover:shadow-hero rounded-xl aspect-[16/7]"
          :src="`http://duypbaha.com.tm/api/v1/uploads/special_categories/${item?.img_path}`"
          alt=""
        />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  specials: {
    type: Array,
    default: [],
  },
});
</script>

<style lang="scss" scoped></style>
