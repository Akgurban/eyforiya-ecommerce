<template>
  <div>
    <div class="my-4 font-bold bg-slate-300 p-2">Habar gosun</div>
    <div class="flex gap-4 justify-between w-full">
      <div class="w-[400px] flex flex-col gap-3">
        <BaseInput
          name="Turkmenca ady"
          label="Turkmenca ady"
          placeholder="Turkmenca ady"
          v-model="name_tm"
        />
        <BaseInput
          name="Rusca ady"
          label="Rusca ady"
          placeholder="Rusca ady"
          v-model="name_ru"
        />
        <BaseInput
          name="inlisce ady"
          label="inlisce ady"
          placeholder="inlisce ady"
          v-model="name_en"
        />
      </div>
      <div class="flex flex-col justify-between gap-3 w-[400px]">
        <BaseSelect
          v-model="selectedSpec"
          label="Select Special category"
          :options="spec_categories"
        >
        </BaseSelect>
        <BaseSelect
          v-model="selectedSub"
          label="Select Sub Category"
          :options="sub_categories"
        >
        </BaseSelect>
        <BaseSelect
          v-model="selectedBrand"
          label="Select Brand"
          :options="brands"
        >
        </BaseSelect>
      </div>
    </div>
    <div class="flex gap-3">
      <BaseTextarea
        name="Turkmence Dusundiris"
        label="Turkmence Dusundiris"
        placeholder="Turkmence Dusundiris "
        v-model="description_tm"
        class="mt-4"
      />
      <BaseTextarea
        name="Rusca Dusundiris"
        label="Rusca Dusundiris"
        placeholder="Rusca Dusundiris "
        v-model="description_ru"
        class="mt-4"
      />
      <BaseTextarea
        name="English Dusundiris"
        label="English Dusundiris"
        placeholder="English Dusundiris "
        v-model="description_en"
        class="mt-4"
      />
    </div>
    <div class="flex gap-3 my-5">
      <div
        v-for="(item, index) in 5"
        :key="index"
        class="flex flex-col w-[200px] gap-2"
      >
        <BaseImgUpload
          v-if="image.length >= index"
          class="w-[200px]"
          v-model="image[index]"
        />
      </div>
    </div>
  </div>

  <div class="flex justify-between mb-30">
    <BaseInput
      name="baha"
      placeholder="Harydyn bahasy Manatda"
      v-model="price"
    />
    <BaseButton @click="addPosts" class="" type="secondary">
      <button>Harydy Gosh</button>
    </BaseButton>
  </div>
</template>

<script setup>
import { useUserStore } from "~~/stores/user";
definePageMeta({
  layout: "admin",
});
const userStore = useUserStore();

const image = ref([]);

const description_tm = ref(null);
const description_en = ref(null);
const description_ru = ref(null);

const route = useRouter();
const name_tm = ref(null);
const name_en = ref(null);
const name_ru = ref(null);

const sub_categories = ref(null);
const spec_categories = ref(null);
const brands = ref(null);
const price = ref(null);

const selectedSpec = ref(null);
const selectedSub = ref(null);
const selectedBrand = ref(null);

try {
  const { data: sub } = await userStore.getSubCategories();
  const { data: spec } = await userStore.getSpecialCategories();
  const { data: brand } = await userStore.getBrand();

  console.log(sub, spec, "sub Categories");
  sub_categories.value = sub.data;
  spec_categories.value = spec.data;
  brands.value = brand.data;
} catch (error) {
  console.log(error);
}

const addPosts = async () => {
  try {
    const { data } = await userStore.addProduct({
      sub_category_id: selectedSub.value?.uuid || null,
      name_tm: name_tm.value,
      name_ru: name_ru.value,
      name_en: name_en.value,
      description_tm: description_tm.value,
      description_en: description_en.value,
      description_ru: description_ru.value,
      price: price.value,
      brand_id: selectedBrand.value?.uuid || null,
      special_category_id: selectedSpec.value?.uuid || null,
    });
    console.log(data, "data");
    if (data.status) {
      alert("habar Ustunlikli goshuldy");
    }
  } catch (error) {
    console.log(error);
  }
};
watch(image.value, () => {
  console.log(image.value, image.value.length, "images wath");
});
</script>

<style scoped></style>
