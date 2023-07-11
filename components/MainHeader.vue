<template>
  <div>
    <div
      class="mt-5 flex items-center w-full pb-2 border-b-2 border-[#f6f6f6] justify-between"
    >
      <img
        @click="useRouter().push('/')"
        src="@/assets/images/logo.png"
        alt=""
        class="cursor-pointer"
      />
      <div class="flex items-center">
        <div class="h-fit mr-[14px]">
          <BaseSearch placeholder="Search"></BaseSearch>
        </div>
        <div class="flex items-center gap-[44px]">
          <HeaderIcons class="h-fit"></HeaderIcons>
          <HeaderLangs></HeaderLangs>
        </div>
      </div>
    </div>
    <div>
      <ul
        class="justify-center font-inter my-2 flex text-[#474747] text-[20px] gap-[23px]"
      >
        <NuxtLink
          class="hover:text-2xl px-2 flex items-center transition-all duration-75 h-10 cursor-pointer mx-2 hover:underline hover:text-[#44A4DB]"
          >Main</NuxtLink
        >
        <NuxtLink
          class="hover:text-2xl px-2 flex items-center transition-all duration-75 h-10 cursor-pointer mx-2 hover:underline hover:text-[#44A4DB]"
          >Brands</NuxtLink
        >
        <NuxtLink
          class="hover:text-2xl px-2 flex items-center transition-all duration-75 h-10 cursor-pointer mx-2 hover:underline hover:text-[#44A4DB]"
          >Shops</NuxtLink
        >
        <NuxtLink
          class="hover:text-2xl px-2 flex items-center transition-all duration-75 h-10 cursor-pointer mx-2 hover:underline hover:text-[#44A4DB]"
          >About us</NuxtLink
        >
        <NuxtLink
          class="hover:text-2xl px-2 flex items-center transition-all duration-75 h-10 cursor-pointer mx-2 hover:underline hover:text-[#44A4DB]"
          >Contact</NuxtLink
        >
      </ul>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
