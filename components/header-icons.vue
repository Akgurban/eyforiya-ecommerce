<template>
  <div class="flex gap-3">
    <div
      class="group cursor-pointer hover:bg-[#44A4DB] bg-[#F6F6F6] p-3 w-fit rounded-lg"
    >
      <IconUser class="group-hover:text-white text-[#807D7E]"></IconUser>
    </div>
    <div
      class="group cursor-pointer hover:bg-[#44A4DB] bg-[#F6F6F6] p-3 w-fit rounded-lg"
    >
      <IconLike class="group-hover:text-white text-[#807D7E] w-5"></IconLike>
    </div>
    <NuxtLink
      :to="localePath('/trash')"
      :class="
        route.path == '/trash' ||
        route.path == '/en/trash' ||
        route.path == '/ru/trash'
          ? 'bg-[#44A4DB] text-white '
          : 'bg-[#F6F6F6] text-[#807D7E]'
      "
      class="group cursor-pointer hover:bg-[#44A4DB] p-3 w-fit rounded-lg"
    >
      <IconTrash class="group-hover:text-white w-5"></IconTrash>
    </NuxtLink>
  </div>
</template>

<script setup>
const { locale: activeLocale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const props = defineProps({
  image: { type: String, required: true },
  text: { type: String, default: "text" },
});
const route = useRoute();
console.log(route);
const path = route.path;
</script>

<style lang="scss" scoped></style>
