<template>
  <div
    class="blur-load"
    style="
      background-image: url(../../assets/images/placeholder.png);
      background-size: contain;
    "
  >
    <img
      class="load border transition duration-150 ease-in aspect-square w-full select-none rounded-md md:rounded-lg border-[#e6e6e6]"
      :src="props.src_img"
      :data-src="props.src_img"
      alt=""
      loading="lazy"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  src_img: {
    type: String,
    default: "",
  },
});

onMounted(() => {
  var lazyImages = [].slice.call(document.querySelectorAll("img.load"));

  if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver(function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.classList.add("loaded");
          lazyImage.classList.remove("load");
          lazyImageObserver.unobserve(lazyImage);
          console.log("p");
        }
      });
    });

    lazyImages.forEach((lazyImage) => {
      lazyImageObserver.observe(lazyImage);
    });
  } else {
    // Possibly fall back to event handlers here
  }
});
</script>

<style scoped>
.blur-load > img.loaded {
  opacity: 1;
}
.blur-load > img.load {
  opacity: 0;
  transition: opacity 200ms ease-in-out;
}
</style>
