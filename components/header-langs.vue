<template>
  <div class="flex gap-3">
    <!-- :to="switchLocalePath(locale.code)" -->
    <NuxtLink
      v-for="locale in locales"
      @click="changeLang(locale)"
      class="group flex flex-col justify-between hover:text-white items-center cursor-pointer hover:bg-[#44A4DB] md:p-3 p-1 rounded-lg"
      :class="
        locale.code === activeLocale
          ? 'bg-[#44A4DB] text-white'
          : 'bg-[#fff] text-[#807D7E]'
      "
    >
      <img class="md:w-10 w-7" :src="`/${locale.code}.png`" alt="" />
      <p class="mt-[6px] md:block hidden">
        {{
          locale.code == "tm"
            ? "Turkmen"
            : locale.code == "en"
            ? "English"
            : "Русский"
        }}
      </p>
    </NuxtLink>
  </div>
</template>

<script setup>
const { locale: activeLocale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const route = useRoute();
const router = useRouter();

const props = defineProps({
  text: { type: String, default: "text" },
});

const changeLang = async (e) => {
  // route.fullPath.replace("/ru", "/en");
  await nextTick();
  if (e.code == "tm") {
    if (route.fullPath.includes("/ru")) {
      if (route.fullPath == "/ru") {
        router.push(route.fullPath.replace("/ru", "/"));
      } else {
        router.push(route.fullPath.replace("/ru", "/").substring(1));
      }
    } else if (route.fullPath.includes("/en")) {
      if (route.fullPath == "/en") {
        router.push(route.fullPath.replace("/en", "/"));
      } else {
        router.push(route.fullPath.replace("/en", "/").substring(1));
      }
    }
  }
  if (e.code == "en") {
    if (route.fullPath.includes("/ru")) {
      router.push(route.fullPath.replace("/ru", "/en"));
    } else if (route.fullPath.includes("/en")) {
      router.push(route.fullPath.replace("/en", "/en"));
    } else {
      router.push("/en" + route.fullPath);
    }
  }
  if (e.code == "ru") {
    if (route.fullPath.includes("/ru")) {
      router.push(route.fullPath.replace("/ru", "/ru"));
    } else if (route.fullPath.includes("/en")) {
      router.push(route.fullPath.replace("/en", "/ru"));
    } else {
      router.push("/ru" + route.fullPath);
    }
  }
};
</script>

<style scoped></style>
