<template>
  <swiper
    :spaceBetween="5"
    :slidesPerView="$width.value == 'desktop' ? 4 : 2"
    :loop="true"
    :autoplay="{
      delay: 377500,
      disableOnInteraction: false,
    }"
    class="pb-3"
    :modules="[Autoplay, Pagination, Navigation]"
    :navigation="true"
    :mousewheel="true"
    :keyboard="true"
    style="
      width: 97% !important;
      height: auto !important;
      user-select: none !important;
      padding-bottom: 20px !important;
    "
  >
    <swiper-slide
      v-for="(item, index) in products"
      :key="item"
      class="group product_item mb-3 hover:shadow-none md:hover:shadow-hero hover:bg-[#D9D9D940] transition-all ease-in-out duration-200 rounded-xl flex flex-col justify-center items-center"
    >
      <BaseProduct :item="item"></BaseProduct>
    </swiper-slide>
  </swiper>
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
const props = defineProps({
  products: {
    type: Array,
    default: [],
  },
});

const count = ref(0);
const trash = useTrashStore();
const setStore = () => {
  trash.setLocalStorage(count.value);
  console.log(trash.trash_items);
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
  border-radius: 12px !important;
}
</style>
