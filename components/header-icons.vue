<template>
  <div class="flex gap-3">
    <NuxtLink
      :to="localePath('/user/login')"
      :class="
        route.path == '/login' ||
        route.path == '/en/login' ||
        route.path == '/ru/login' ||
        !!authStore.userToken
          ? 'bg-[#44A4DB] text-white'
          : ' text-[#807D7E] bg-[#F6F6F6]'
      "
      class="group relative cursor-pointer hover:bg-[#44A4DB] bg-[#F6F6F6] p-3 w-fit rounded-lg"
    >
      <IconUser
        v-if="!authStore.userToken"
        class="group-hover:text-white"
      ></IconUser>
      <div
        v-else
        class="text-[#807D7E] group-hover:text-white font-bold font-inter w-5 text-center"
      >
        {{ authStore.userToken.username.slice(0, 1).toUpperCase() }}
      </div>
    </NuxtLink>

    <NuxtLink
      :to="localePath('/favourite')"
      :class="
        route.path == '/favourite' ||
        route.path == '/en/favourite' ||
        route.path == '/ru/favourite' ||
        fav.wish_items.length > 0
          ? 'bg-[#44A4DB] text-white '
          : 'bg-[#F6F6F6] text-[#807D7E]'
      "
      class="group relative cursor-pointer hover:bg-[#44A4DB] p-3 w-fit rounded-lg"
    >
      <div
        v-if="fav.wish_items.length !== 0"
        class="absolute -top-4 left-0 rounded-full bg-[#F35528] text-white w-7 h-7 flex justify-center items-center"
      >
        {{ fav.wish_items.length }}
      </div>
      <IconLike class="group-hover:text-white w-5"></IconLike>
    </NuxtLink>
    <NuxtLink
      :to="localePath('/trash')"
      :class="
        route.path == '/trash' ||
        route.path == '/en/trash' ||
        route.path == '/ru/trash' ||
        trash_count !== 0
          ? 'bg-[#44A4DB] text-white '
          : 'bg-[#F6F6F6] text-[#807D7E]'
      "
      class="group relative cursor-pointer hover:bg-[#44A4DB] p-3 w-fit rounded-lg"
    >
      <IconTrash class="group-hover:text-white w-5"></IconTrash>
      <div
        v-if="trash_count !== 0"
        class="absolute -top-4 left-0 rounded-full bg-[#F35528] text-white w-7 h-7 flex justify-center items-center"
      >
        {{ trash_count }}
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
import { useFavStore } from "~~/stores/favourite";
import { useTrashStore } from "~~/stores/trash";
import { useAuthStore } from "@/stores/authStore";
const authStore = useAuthStore();
const trash = useTrashStore();
const fav = useFavStore();
const { locale: activeLocale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const props = defineProps({
  image: { type: String, required: true },
  text: { type: String, default: "text" },
});
const route = useRoute();
const trash_count = ref(0);

trash.trash_items.products?.filter((e) => {
  trash_count.value += e.count;
});
watch(trash.trash_items, () => {
  trash_count.value = 0;

  trash.trash_items.products?.filter((e) => {
    trash_count.value += e.count;
  });
});

console.log(route);
const path = route.path;
</script>

<style lang="scss" scoped></style>
