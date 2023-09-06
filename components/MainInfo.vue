<template>
  <div
    ref="observe"
    class="flex md:w-full w-screen flex-wrap justify-between md:justify-between border-y border-[#00000026] md:py-8 py-2 px-6"
  >
    <div
      v-for="item in icons"
      :key="item.name"
      class="flex items-center my-2 md:flex-row flex-col"
    >
      <img :src="item.img" alt="" />
      <div class="text-center ml-3">
        <p
          :data-target="item.name"
          class="counters font-alatsi md:text-[45px] font-bold text-2xl text-[#3C4242] leading-[33px]"
        >
          0
        </p>
        <p class="font-alatsi font-medium text-base text-[#000] mt-2 w-[150px]">
          {{ $t(item.desc) }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const observe = ref();
const props = defineProps({
  rating: {
    type: Object,
    default: {},
  },
});
const icons = ref([
  { name: "40358", desc: "visit_web", img: "/visit.png" },
  { name: "403", desc: "items_sold", img: "/sold.png" },
  { name: "15", desc: "our_partners", img: "/brand.png" },
  { name: "2232", desc: "products_website", img: "/products.png" },
]);
icons.value[0].name = props.rating.users;
icons.value[1].name = props.rating.solved;
icons.value[2].name = props.rating.brands;
icons.value[3].name = props.rating.products;

const updateCount = () => {
  const counters = document.querySelectorAll(".counters");
  const speed = 50;
  counters.forEach((counter) => {
    const update = () => {
      let target = +counter.getAttribute("data-target");
      let count = +counter.innerText;
      let inc = target / speed;
      if (count < target) {
        counter.innerText = Math.ceil(count + inc);
        setTimeout(update, 25);
      } else {
        counter.innerText = target;
      }
    };
    counter.innerText = 0;
    update();
  });
};

onMounted(() => {
  const options =
    {
      rootMargin: "0px",
      threshold: 1.0,
    } || {};
  const observer = new IntersectionObserver(([entry]) => {
    if (entry && entry.isIntersecting) {
      console.log(entry, "saaa");
      updateCount();
    }
  }, options);

  observer.observe(observe.value);
});
</script>

<style lang="scss" scoped></style>
