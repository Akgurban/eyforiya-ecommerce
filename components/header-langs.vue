<template>
  <div class="flex gap-3">
    <NuxtLink
      v-for="locale in locales"
      :to="switchLocalePath(locale.code)"
      class="group flex flex-col justify-between hover:text-white items-center cursor-pointer hover:bg-[#44A4DB] p-3 rounded-lg"
      :class="
        locale.code === activeLocale
          ? 'bg-[#44A4DB] text-white'
          : 'bg-[#fff] text-[#807D7E]'
      "
    >
      <img :src="`/${locale.code}.png`" alt="" />
      <p class="mt-[6px]">
        {{
          locale.code == "tk"
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

const props = defineProps({
  image: { type: String, required: true },
  text: { type: String, default: "text" },
});
</script>

<style lang="scss" scoped></style>
