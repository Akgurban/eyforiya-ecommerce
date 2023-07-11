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
const addRed = (e) => {
  e.target.firstChild.setAttribute("fill", "red");
};
const removeRed = (e) => {
  e.target.firstChild.removeAttribute("fill");
  e.target.firstChild.setAttribute("fill", "white");
};
</script>
<template>
  <swiper
    :spaceBetween="31"
    :slidesPerView="4"
    :centeredSlides="false"
    :autoplay="{
      delay: 3500,
      disableOnInteraction: false,
    }"
    class="pb-3 w-full"
    :modules="[Autoplay, Pagination, Navigation]"
    :navigation="true"
    :mousewheel="true"
    :keyboard="true"
  >
    <swiper-slide
      v-for="item in 7"
      :key="item"
      style="width: 22% !important; height: 95% !important"
      class="group relative mx-2 mb-3 hover:shadow-hero hover:bg-[#D9D9D940] border border-[#00000040] transition-all ease-in-out duration-200 rounded-xl flex flex-col justify-center items-center cursor-pointer"
    >
      <div class="rounded-xl mb-3 text-center mt-6 border">
        <img
          class="border border-[#e6e6e6]"
          :src="`/product/iron-${item}.png`"
          alt=""
          height="262"
          loading="lazy"
        />
        <div class="text-3xl font-alatsi text-[#3C4242] mt-3 mb-1">
          Knitted Joggers
        </div>
      </div>
      <div
        @mouseenter="addRed"
        @mouseleave="removeRed"
        class="group/edit group is-published absolute z-10 top-2.5 right-2.5 w-11 h-11 flex items-center justify-center rounded-full border border-[#44A4DB] text-[#44A4DB] hover:text-red-700"
      >
        <IconLikeRed @click="" class="w-6 h-6 mx-auto" />
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
