<template>
  <div>
    <div class="">
      <div
        class="sticky shadow-md top-0 left-0 z-40 bg-white w-screen mx-auto md:px-8 px-4"
      >
        <div
          class="sticky top-0 left-0 z-40 bg-white 2xl:w-[1428px] w-full mx-auto md:px-8 px-4"
        >
          <MainHeader class=""></MainHeader>
        </div>
      </div>

      <div>
        <ul
          class="justify-center font-semibold font-inter my-2 flex text-[#474747] md:text-[20px] text-base md:gap-[23px] gap-3"
        >
          <NuxtLink
            v-for="item in links"
            :key="item.name"
            @click="
              useRouter().push(
                localePath({
                  path: item?.path,
                  query: item?.query,
                })
              )
            "
            class="hover:text-lg md:hover:text-2xl select-none whitespace-nowrap md:px-2 flex items-center transition-all duration-75 h-10 cursor-pointer md:mx-2 hover:underline hover:text-[#44A4DB]"
            :class="
              route.path.includes(item.path) && item.path !== '/'
                ? 'text-[#44A4DB]'
                : 'text-[#474747]'
            "
            >{{ $t(item.name) }}</NuxtLink
          >
        </ul>
      </div>
      <slot></slot>
    </div>
    <div class="w-screen bg-[#44A4DB]">
      <div class="mx-auto 2xl:w-[1440px] w-full mt-10">
        <MainFooter />
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const links = ref([
  { name: "main", path: "/" },
  { name: "brands", path: "/brands" },
  { name: "products", path: "/all-products", query: { p: 1 } },
  { name: "about_us", path: "/about-us" },
]);
</script>

<style lang="scss" scoped></style>
