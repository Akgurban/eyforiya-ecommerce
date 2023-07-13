<script setup>
const { $hello } = useNuxtApp();
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const renderBullet = (index, className) => {
  return '<span class="' + className + '">' + (index + 1) + "</span>";
};
</script>
<template>
  <swiper
    :spaceBetween="5"
    :slidesPerView="$width.value == 'desktop' ? 4 : 2"
    :loop="true"
    :centeredSlides="false"
    :autoplay="{
      delay: 3500,
      disableOnInteraction: false,
    }"
    class="pb-3"
    :modules="[Autoplay, Pagination, Navigation]"
    :navigation="true"
    :mousewheel="true"
    :keyboard="true"
    style="width: 98% !important; padding-bottom: 10px !important"
  >
    <swiper-slide
      v-for="item in 6"
      :key="item"
      class="group mx-2 mb-3 hover:shadow-hero hover:bg-[#D9D9D940] transition-all ease-in-out duration-200 rounded-xl flex flex-col justify-center items-center cursor-pointer"
    >
      <div class="rounded-xl mb-3 text-center mt-6">
        <img
          class="border border-[#e6e6e6]"
          :src="`/categories/cat-${item}.png`"
          alt=""
          height="262"
          loading="lazy"
        />
        <div class="md:text-3xl text-base font-alatsi text-[#3C4242] mt-3 mb-1">
          {{ $width }}
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

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
</style>
