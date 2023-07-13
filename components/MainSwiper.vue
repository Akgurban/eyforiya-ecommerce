<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const renderBullet = (index, className) => {
  return '<span class="' + className + '">' + " " + "</span>";
};
</script>
<template>
  <swiper
    :spaceBetween="29"
    :slidesPerView="1"
    :effect="'fade'"
    :loop="true"
    :centeredSlides="false"
    :autoplay="{
      delay: 3500,
      disableOnInteraction: false,
    }"
    :modules="[Autoplay, Pagination, Navigation, EffectFade]"
    :navigation="true"
    :pagination="{ clickable: true, renderBullet }"
    style="
      width: 100% !important;
      height: 100% !important;
      user-select: none !important;
    "
    :mousewheel="true"
    :keyboard="true"
    class="mb-5 w-full h-full select-none"
  >
    <swiper-slide
      v-for="item in 5"
      :key="item"
      style="width: 100% !important; height: 100% !important"
      class="select-none group w-full h-full cursor-pointer"
    >
      <div class="select-none rounded-xl w-full h-full">
        <img
          class="border select-none pointer-events-none border-[#e6e6e6] object-cover w-full h-full transition-all ease-in-out duration-200"
          :src="`/banner/banner_${item}.png`"
          alt=""
          loading="lazy"
        />
      </div>
    </swiper-slide>
  </swiper>
</template>

<style>
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
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0)
  ) !important;
  display: flex;
  align-items: center;
  height: 120px !important;
  background-image: url("@/assets/chevron.svg");
}
.swiper-button-next:after {
  color: #000 !important;
  content: url("@/assets/images/chevron-right.svg") !important;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.7)
  ) !important;
  display: flex;
  align-items: center;
  height: 120px !important;
}
@media screen and (max-width: 600px) {
  .swiper-button-next:after,
  .swiper-button-prev:after {
    height: 60px !important;
    width: 37px !important;
    display: flex;
    justify-content: start;
  }

  .swiper-pagination-bullet {
    max-width: 13px !important;
    max-height: 13px;
  }
}
.swiper-button-next.swiper-button-disabled,
.swiper-button-prev.swiper-button-disabled {
  opacity: 0.2 !important;
}

.swiper-pagination-bullet {
  width: 23px !important;
  height: 20px;
  text-align: center;
  line-height: 20px;
  font-size: 12px;
  color: #0f0f0f;
  opacity: 1;
  background: white !important;
}

.swiper-pagination-bullet-active {
  color: #fff;
  background: #007aff !important;
}
</style>
