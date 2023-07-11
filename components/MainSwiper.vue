<script setup>
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
    :spaceBetween="29"
    :slidesPerView="1"
    :centeredSlides="false"
    :autoplay="{
      delay: 3500,
      disableOnInteraction: false,
    }"
    :modules="[Autoplay, Pagination, Navigation]"
    :navigation="true"
    :pagination="{ clickable: true, renderBullet }"
    :mousewheel="true"
    :keyboard="true"
    class="mb-5"
  >
    <swiper-slide
      v-for="item in 2"
      :key="item"
      style="width: 100% !important; margin-right: 0 !important"
      class="group cursor-pointer mt-6"
    >
      <div class="rounded-xl">
        <img
          class="border border-[#e6e6e6] w-full transition-all ease-in-out duration-200"
          :src="`/banner/banner-${item}.png`"
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
  opacity: 0 !important;
  cursor: auto;
  pointer-events: none;
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
</style>
