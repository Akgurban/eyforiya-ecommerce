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
        route.path == '/ru/trash' ||
        trash.trash_items.totalCount !== 0
          ? 'bg-[#44A4DB] text-white '
          : 'bg-[#F6F6F6] text-[#807D7E]'
      "
      class="group relative cursor-pointer hover:bg-[#44A4DB] p-3 w-fit rounded-lg"
    >
      <IconTrash class="group-hover:text-white w-5"></IconTrash>
      <div
        v-if="trash.trash_items.totalCount !== 0"
        class="absolute -top-4 left-0 rounded-full bg-[#F35528] text-white w-7 h-7 flex justify-center items-center"
      >
        {{ trash.trash_items.totalCount }}
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
import { useTrashStore } from "~~/stores/trash";
const trash = useTrashStore();
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
