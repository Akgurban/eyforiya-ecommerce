<template>
  <div class="2xl:w-[1440px] xl:screen mx-auto">
    <div class="flex justify-between">
      <div></div>
      <BaseButton
        @click="toggleFilter"
        class="self-end w-32 lg:hidden flex justify-between"
        type="secondary"
      >
        <p>
          {{ showFilter ? $t("close_filter") : $t("show_filter") }}
        </p>
        <img src="@/assets/images/filter.png" class="inline w-5" alt="" />
      </BaseButton>
    </div>

    <div class="lead flex gap-5">
      <div class="md:block hidden w-full 2xl:w-[25%] lg:w-[28%] z-20">
        <filtered-sidebar
          :brands="incomedDatas?.brands"
          :show_cat="false"
          :sub_categories="incomedDatas?.sub_categories"
          @someChange="(e) => emittedFromSidebar(e)"
        />
      </div>
      <div class="md:hidden absolute block w-full 2xl:w-[25%] lg:w-[28%]">
        <filtered-sidebar
          :show_filter="showFilter"
          :brands="incomedDatas?.brands"
          :show_cat="false"
          :sub_categories="incomedDatas?.sub_categories"
          @someChange="(e) => emittedFromSidebar(e)"
        />
      </div>
      <div ref="listEl" class="w-full h-[80vh] overflow-auto mt-3">
        <div
          class="grid md:grid-cols-3 grid-cols-2 mx-auto w-fit gap-2 lg:grid-cols-4 px-2"
        >
          <div
            v-for="(item, index) in incomedDatas?.products"
            :key="item"
            draggable="true"
            class="group relative w-full product_item mb-3 hover:shadow-none md:hover:shadow-hero hover:bg-[#D9D9D940] transition-all ease-in-out duration-200 rounded-xl flex flex-col justify-between items-center"
          >
            <BaseProduct :item="item"></BaseProduct>
          </div>
          <br />
        </div>
        <div v-if="ShowLoader" class="w-full">
          <img src="@/assets/images/loader.gif" class="mx-auto" alt="" />
        </div>
        <div
          v-if="!incomedDatas?.products"
          class="mt-20 text-center w-full text-6xl text-gray-500 font-alatsi font-bold"
        >
          {{ $t("no_product") }}
        </div>
        <!-- <BasePaginate
          :total-items="incomedDatas.product_count"
          v-model="count"
        /> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { useInfiniteScroll } from "@vueuse/core";
const { $width } = useNuxtApp();
const { locale, locales } = useI18n();

const router = useRouter();
const route = useRoute();
const incomedDatas = ref("");
const listEl = ref(null);
const totalItems = ref(15);
const count = ref(1);
const limit = ref(28);
const showFilter = ref(true);
const ShowLoader = ref(false);
const order = ref("");
// const total = Math.floor(incomedDatas.value?.product_count / limit.value) + 1
!ShowLoader.value
  ? useInfiniteScroll(
      listEl,
      async () => {
        if (
          count.value <=
          Math.floor(incomedDatas.value?.product_count / limit.value)
        ) {
          count.value += 1;
          var dataForm = {
            lang: locale.value,
            //  / "brand_id":["73fbbb62-c863-47e5-a80b-a7cbd67589f4"	,"031a90c5-a29c-4d38-9f49-10f52c37eb76"],
            order: route.query.order,
            limit: limit.value,
            offset: count.value - 1,
            criteria: route.params.id,
          };

          if (route.query?.filter && JSON.parse(route.query?.filter)?.length) {
            dataForm.brand_id = JSON.parse(route.query?.filter);
          }
          if (route.params.id) {
          }
          if (route.query.catId) {
            dataForm.sub_category_id = route.query.catId;
          }
          ShowLoader.value = true;
          const { data, status } = await useMyFetch(
            () => `/api/v1/client/products/product/search`,
            {
              method: "POST",
              body: dataForm,
            }
          );
          if (status) {
            ShowLoader.value = false;
            console.log(
              count.value,
              Math.floor(incomedDatas.value?.product_count / limit.value) + 1
            );
            data.value?.data.products.forEach((e) =>
              incomedDatas.value.products.push(e)
            );
          }
        }
      },
      // setTimeout(async() => {
      {
        distance: 500,
      }
    )
  : null;
const active = useState();
async function emittedFromSidebar(e) {
  locales.value.forEach((a) => {
    if (a.code == locale.value) {
      router.push({
        path: `${a.code2}/search/${route.params.id}`,
        query: { filter: JSON.stringify(e.brnd), order: e.ord },
      });
    }
  });
}

const toggleFilter = () => {
  showFilter.value = !showFilter.value;
};
const refetch = async () => {
  var dataForm = {
    lang: locale.value,
    //  / "brand_id":["73fbbb62-c863-47e5-a80b-a7cbd67589f4"	,"031a90c5-a29c-4d38-9f49-10f52c37eb76"],
    order: route.query.order,
    limit: limit.value,
    offset: count.value - 1,
    criteria: route.params.id,
  };

  if (route.query?.filter && JSON.parse(route.query?.filter)?.length) {
    dataForm.brand_id = JSON.parse(route.query?.filter);
  }
  if (route.params.id) {
  }
  if (route.query.catId) {
    dataForm.sub_category_id = route.query.catId;
  }

  const { data, status } = await useMyFetch(
    () => `/api/v1/client/products/product/search`,
    {
      method: "POST",
      body: dataForm,
    }
  );
  if (status) {
    incomedDatas.value = data.value?.data;
  }
};
await refetch();

if (route.query?.filter && incomedDatas.value) {
  incomedDatas.value?.brands?.forEach((e) => {
    JSON.parse(route.query?.filter)?.forEach((item) => {
      if (item == e.uuid) {
        e.selected = true;
      }
    });
  });
}

watch(
  () => route.query,
  async () => {
    await refetch();
    incomedDatas.value?.brands?.forEach((e) => {
      JSON.parse(route.query?.filter)?.forEach((item) => {
        if (item == e.uuid) {
          e.selected = true;
        }
      });
    });
  }
);
// watch(count, async () => {
//   await refetch();
// });
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.2s ease-in;
}

.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}

.prod_name.active {
  view-transition-name: title;
}

img.active {
  view-transition-name: selected-img;
  contain: layout;
}
</style>
<style>
:view-transition-old(title),
:view-transition-new(title) {
  width: auto;
}
</style>
