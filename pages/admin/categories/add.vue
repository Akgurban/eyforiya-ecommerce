<template>
  <div>
    <div class="my-4 font-bold bg-slate-300 p-2">Banner gosun</div>
    <div class="flex gap-4 justify-between w-full">
      <div class="flex flex-col justify-between">
        <BaseInput
          :validate="val_tm"
          name="Categoriya Turkmen"
          label="Categoriya Turkmen"
          placeholder="Categoriya Turkmen"
          v-model="category_tm"
        />
        <BaseInput
          :validate="val_ru"
          name="Categoriya Rus"
          label="Categoriya Rus"
          placeholder="Categoriya Rus"
          v-model="category_ru"
        />
        <BaseInput
          :validate="val_en"
          name="Categoriya English"
          label="Categoriya English"
          placeholder="Categoriya English"
          v-model="category_en"
        />
      </div>
    </div>

    <div class="flex justify-between mt-3">
      <div class="w-[400px]">
        <BaseImgUpload v-model="category_img" />
      </div>

      <BaseButton @click="addCategory" class="" type="secondary">
        <button>Add Category</button>
      </BaseButton>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "admin",
  middleware: ["auth"],
});
import axios from "~/plugins/axios";
import { useUserStore } from "~~/stores/user";
const userStore = useUserStore();

const router = useRouter();

const image = ref(null);
const category_tm = ref(null);
const category_ru = ref(null);
const category_en = ref(null);
const category_img = ref(null);
const description = ref(null);
const route = useRouter();
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
const addCategory = async () => {
  try {
    if (
      !category_tm.value ||
      !category_en.value ||
      !category_ru.value ||
      !category_img.value
    ) {
      val_tm(category_tm.value);
      val_en(category_en.value);
      val_ru(category_ru.value);
      alert("Maglumatlary doly giriziň!");
      throw "Maglumatlary doly giriziň!";
    }
    const form = new FormData();
    form.append("name_tm", category_tm.value);
    form.append("name_ru", category_ru.value);
    form.append("name_en", category_en.value);
    form.append("img", category_img.value);
    const { data } = await userStore.addCategories(form);

    if (data.status) {
      alert("Categoriya Gosuldy");
    }
    useRouter().push("/admin/categories");
  } catch (error) {
    console.log(error);
  }
};
</script>

<style scoped></style>
