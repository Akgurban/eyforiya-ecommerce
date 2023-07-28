<template>
  <div
    style="
      width: 97% !important;
      height: auto !important;
      user-select: none !important;
      padding-bottom: 20px !important;
    "
  >
    <div
      v-for="(item, index) in 6"
      :key="item"
      style=""
      class="group product_item mb-3 hover:shadow-none md:hover:shadow-hero hover:bg-[#D9D9D940] transition-all ease-in-out duration-200 rounded-xl flex flex-col justify-center items-center cursor-pointer"
    >
      <div
        @click="useRouter().push('/trash')"
        class="rounded-xl text-center mt-6"
      >
        <img
          class="border pointer-events-none select-none border-[#e6e6e6]"
          :src="`/categories/cat-${item}.png`"
          alt=""
          height="262"
          loading="lazy"
        />
        <div
          class="w-fit mx-auto md:text-3xl text-base font-alatsi text-[#3C4242] mt-3 mb-1"
        >
          Raf-utuk-r126
        </div>
        <div
          class="mx-auto text-[#48BC4E] text-3xl font-alatsi w-fit pb-1 border-b border-[#44A4DB]"
        >
          158 TMT
        </div>
      </div>

      <div
        v-if="index == 1"
        @click="useRouter().push('/trashs')"
        class="relative pointer-events-auto select-none mt-5 mb-3 hover:scale-95 transition-transform duration-150"
      >
        <img
          class="mx-auto h-9 md:h-10 pointer-events-none touch-pan-y"
          src="@/assets/images/add_cart.svg"
          alt=""
        />
        <div
          class="absolute pointer-events-auto top-0 right-1/2 translate-x-1/2 flex items-center gap-3 text-white h-fit"
        >
          <div class="md:text-2xl text-lg font-alatsi whitespace-nowrap">
            {{ $t("add_to") }}
          </div>
          <IconTrash
            draggable="false"
            class="inline pointer-events-none mt-1 md:w-9 w-6 md:h-9 h-6"
          ></IconTrash>
        </div>
      </div>
      <div v-if="index != 1" class="w-[80%] mt-3">
        <BaseCounter @click="setStore" v-model="count"></BaseCounter>
      </div>
    </div>
  </div>
</template>

<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { useTrashStore } from "~~/stores/trash";

import "swiper/css/navigation";
const { $width } = useNuxtApp();

const count = ref(0);
const trash = useTrashStore();
const setStore = () => {
  trash.setLocalStorage(count.value);
};

const renderBullet = (index, className) => {
  return '<span class="' + className + '">' + (index + 1) + "</span>";
};
</script>
<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: start;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-button-prev:after {
  color: #000 !important;
  content: url("@/assets/images/chevron.svg") !important;
  background: linear-gradient(
    to right,
    #fffefe,
    rgba(255, 255, 255, 0.522)
  ) !important;
  display: flex;
  align-items: center;
  height: 120px !important;
  /* background-image: url("@/assets/chevron.svg"); */
}
.swiper-button-next:after {
  color: #000 !important;
  content: url("@/assets/images/chevron-right.svg") !important;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.499),
    rgb(255, 255, 255)
  ) !important;
  display: flex;
  align-items: center;
  height: 120px !important;
}
.swiper-button-next.swiper-button-disabled,
.swiper-button-prev.swiper-button-disabled {
  opacity: 0.4 !important;
  cursor: auto;
}

.swiper-pagination-bullet {
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  font-size: 12px;
  color: #000;
  opacity: 1;
  background: rgba(0, 0, 0, 0.2);
}

.swiper-pagination-bullet-active {
  color: #fff;
  background: #007aff;
}
.swiper_slide_cat {
  width: 24% !important;
}
@media screen and (max-width: 640px) {
  .swiper_slide_cat {
    width: 48% !important;
  }
}
.product_item {
  height: fit-content !important;
  user-select: none !important;
  touch-action: pan-y !important;
  border-radius: 12px !important;
}
</style>
