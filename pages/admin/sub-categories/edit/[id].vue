<template>
  <div>
    <div class="my-4 font-bold bg-slate-300 p-2">Banner gosun</div>
    <div class="flex gap-4 justify-between w-full">
      <div class="flex flex-col justify-between">
        <BaseInput
          :validate="val_tm"
          name="Sub Categoriya Turkmen"
          label="Sub Categoriya Turkmen"
          placeholder="Sub Categoriya Turkmen"
          v-model="category_tm"
        />
        <BaseInput
          :validate="val_ru"
          name="Sub Categoriya Rus"
          label="Sub Categoriya Rus"
          placeholder="Sub Categoriya Rus"
          v-model="category_ru"
        />
        <BaseInput
          :validate="val_en"
          name="Sub Categoriya English"
          label="Sub Categoriya English"
          placeholder="Sub Categoriya English"
          v-model="category_en"
        />
      </div>
      <BaseSelect
        v-model="selectedCategory"
        label="Select Category"
        :options="categories"
        class="w-100"
      >
      </BaseSelect>
    </div>

    <div class="flex justify-between mt-3">
      <BaseButton @click="addSubCategory" class="" type="secondary">
        <button>Update Category</button>
      </BaseButton>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "admin",
});
import axios from "~/plugins/axios";
import { useUserStore } from "~~/stores/user";
const userStore = useUserStore();

const router = useRouter();

const image = ref(null);
const category_tm = ref(null);
const category_ru = ref(null);
const category_en = ref(null);
const categories = ref(null);
const uuid = ref(null);
const selectedCategory = ref(null);
const route = useRoute();
const val_tm = (e) => {
  if (e === "") {
    return "dogry dolduryn";
  }
};
const val_ru = (e) => {
  if (e === "") {
    return "dogry dolduryn";
  }
};
const val_en = (e) => {
  if (e === "") {
    return "dogry dolduryn";
  }
};
try {
  const { data } = await userStore.OneSubCategory(route?.params?.id);
  console.log(data, "dai");
  category_tm.value = data.value.data.name_tm;
  category_en.value = data.value.data.name_en;
  category_ru.value = data.value.data.name_ru;
  selectedCategory.value = {
    name: data.value?.data?.category_name,
    uuid: data.value?.data?.category_id,
  };
  //   useRouter().push("/admin/categories");
} catch (error) {
  console.log(error);
}

const getCategoriesr = async () => {
  try {
    const { data } = await userStore.getCategories();
    categories.value = data.value.data;
  } catch (error) {
    console.log(error);
  }
};
await getCategoriesr();
const addSubCategory = async () => {
  try {
    console.log(!category_tm.value);
    if (!category_tm.value || !category_en.value || !category_ru.value) {
      alert("Maglumatlary doly giriziň!");
      throw "Maglumatlary doly giriziň!";
    }
    const { data } = await userStore.editSubCategories({
      name_tm: category_tm.value,
      name_en: category_en.value,
      name_ru: category_ru.value,
      uuid: route.params.id,
      category_id: selectedCategory.value.uuid,
    });

    if (data.status) {
      alert("Sub Category Updated");
    }
    useRouter().push("/admin/sub-categories");
  } catch (error) {
    console.log(error);
  }
};
</script>

<style scoped></style>
