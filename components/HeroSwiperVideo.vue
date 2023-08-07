<script setup>
const { locale } = useI18n();

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const renderBullet = (index, className) => {
  return '<span class="' + className + '">' + "" + "</span>";
};

const { data: video } = await useMyFetch(`/api/v1/client/products/videos`);
</script>
<template>
  <swiper
    :spaceBetween="29"
    :slidesPerView="1"
    :loop="true"
    :centeredSlides="false"
    :autoplay="{
      delay: 10000,
      disableOnInteraction: false,
    }"
    :modules="[Autoplay, Pagination, Navigation]"
    :navigation="true"
    style="width: 100% !important; height: 100% !important"
    :mousewheel="true"
    :keyboard="true"
    class="mb-5 w-full h-full select-none"
  >
    <swiper-slide
      v-for="item in video.data"
      :key="item"
      class="group overflow-hidden w-full mb-3 hover:shadow-hero rounded-md hover:bg-[#D9D9D940] transition-all ease-in-out duration-200 flex flex-col justify-center items-center cursor-pointer"
    >
      <!-- @click="
        useRouter().push(
          localePath({
            path: `/filtered-product/${video.data}`,
            query: { filter: '[]' },
          })
        )
      " -->
      <video
        class="w-full h-full object-cover z-[1]"
        autoplay
        controls
        loop
        muted
      >
        <source
          :src="`http://duypbaha.com.tm/api/v1/uploads/videos/${item?.video_path}`"
          ref="img"
          alt=""
        />
      </video>
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
