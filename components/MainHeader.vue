<template>
  <div
    class="lg:mt-0 mt-2 flex lg:flex-row flex-col items-center w-full pb-2 border-b-2 border-[#f6f6f6] justify-between"
  >
    <div class="flex justify-between items-center w-full lg:mt-3 mt-0">
      <img
        @click="useRouter().push('/')"
        src="@/assets/images/logo.png"
        alt=""
        draggable="false"
        style=""
        class="cursor-pointer select-none lg:h-[64px] h-[42px]"
      />
      <div class="lg:hidden block">
        <HeaderLangs></HeaderLangs>
      </div>
    </div>
    <div
      class="flex items-center justify-between w-full lg:my-0 lg:mt-3 mt-3 gap-4"
    >
      <div class="h-fit lg:w-[200px] xl:w-[386px] w-full lg:mr-[14px] mr-auto">
        <BaseSearch :placeholder="$t('search')"></BaseSearch>
      </div>
      <div class="flex items-center gap-[44px]">
        <HeaderIcons class="h-fit"></HeaderIcons>
        <div class="lg:block hidden">
          <HeaderLangs></HeaderLangs>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
