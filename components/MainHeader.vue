<template>
  <div>
    <div
      class="md:mt-5 mt-2 flex md:flex-row flex-col items-center w-full pb-2 border-b-2 border-[#f6f6f6] justify-between"
    >
      <div class="flex justify-between items-center w-full">
        <img
          @click="useRouter().push('/')"
          src="@/assets/images/logo.png"
          alt=""
          draggable="false"
          style=""
          class="cursor-pointer select-none md:h-[64px] h-[42px]"
        />
        <div class="md:hidden block">
          <HeaderLangs></HeaderLangs>
        </div>
      </div>
      <div
        class="flex items-center justify-between w-full md:my-0 md:mt-5 mt-3 gap-4"
      >
        <div class="h-fit md:w-[386px] w-full md:mr-[14px] mr-auto">
          <BaseSearch placeholder="Search"></BaseSearch>
        </div>
        <div class="flex items-center gap-[44px]">
          <HeaderIcons class="h-fit"></HeaderIcons>
          <div class="md:block hidden">
            <HeaderLangs></HeaderLangs>
          </div>
        </div>
      </div>
    </div>
    <div>
      <ul
        class="justify-center font-semibold font-inter my-2 flex text-[#474747] md:text-[20px] text-base md:gap-[23px] gap-3"
      >
        <NuxtLink
          v-for="item in links"
          :key="item.name"
          class="hover:text-2xl select-none whitespace-nowrap md:px-2 flex items-center transition-all duration-75 h-10 cursor-pointer md:mx-2 hover:underline hover:text-[#44A4DB]"
          >{{ item.name }}</NuxtLink
        >
      </ul>
    </div>
  </div>
</template>

<script setup>
const links = ref([
  { name: "Main" },
  { name: "Brands" },
  { name: "Shops" },
  { name: "About us" },
  { name: "Contact" },
]);
</script>

<style lang="scss" scoped></style>
