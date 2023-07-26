<template>
  <div class="flex gap-3">
    <NuxtLink
      :to="localePath('/user/login')"
      :class="
        route.path == '/login' ||
        route.path == '/en/login' ||
        route.path == '/ru/login' ||
        authStore.userToken
          ? 'bg-[#44A4DB] text-white'
          : ' text-[#807D7E] bg-[#F6F6F6]'
      "
      class="group relative cursor-pointer hover:bg-[#44A4DB] p-3 w-fit rounded-lg"
    >
      <IconUser
        v-if="!authStore.userToken"
        class="group-hover:text-white"
      ></IconUser>
      <div
        v-else
        class="group-hover:text-white font-bold font-inter w-5 text-center"
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
        favStore.wish_items?.length > 0
          ? 'bg-[#44A4DB] text-white '
          : 'bg-[#F6F6F6] text-[#807D7E]'
      "
      class="group relative cursor-pointer hover:bg-[#44A4DB] p-3 w-fit rounded-lg"
    >
      <div
        v-if="favStore.wish_items?.length"
        class="absolute -top-4 left-0 rounded-full bg-[#F35528] text-white w-7 h-7 flex justify-center items-center"
      >
        {{ favStore.wish_items?.length }}
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
        {{ trash.trash_items.products?.length }}
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
import { useFavStore } from "~~/stores/favourite";
import { useTrashStore } from "~~/stores/trash";
import { useAuthStore } from "@/stores/authStore";

const favStore = useFavStore();
const user = useAuthStore();

const authStore = useAuthStore();
const trash = useTrashStore();
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
watch(favStore.wish_items, () => {
  trash_count.value = favStore.wish_items.length;
  console.log(favStore.wish_items, "favStore.wish_items");
});

if (user.userToken?.uuid) {
  const { data: wish_user } = await useMyFetch(
    `/api/v1/client/wish-list?lang=tm&user_id=${user.userToken?.uuid}`
  );
  if (wish_user.value?.status) {
    console.log(wish_user.value.data, "wish_user.value.data");
    wish_user.value.data?.filter((e) => {
      e.images = e.img_path;
    });
    favStore.wish_items = wish_user.value.data;
  }
}
const path = route.path;
</script>

<style lang="scss" scoped></style>
