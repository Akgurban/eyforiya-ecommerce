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
      </div>
    </div>

    <div class="flex justify-between mt-3">
      <div class="w-[400px]">
        <BaseImgUpload
          :currentImg="`http://duypbaha.com.tm/api/v1/uploads/banners/${selectedImg}`"
          v-model="category_img"
        />
      </div>

      <BaseButton @click="addCategory" class="" type="secondary">
        <button>Kategoriya uytgetmek</button>
      </BaseButton>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "admin",
  middleware: ["auth"],
});
import { useUserStore } from "~~/stores/user";
const userStore = useUserStore();
const router = useRouter();
const route = useRoute();

const image = ref(null);
const category_tm = ref(null);
const category_ru = ref(null);
const category_en = ref(null);
const category_img = ref(null);
const selectedImg = ref(null);
try {
  const { data } = await userStore.OneBanner(route.params?.id);
  category_tm.value = data.value.data.name;
  selectedImg.value = data.value?.data?.img_path;
  //   useRouter().push("/admin/categories");
} catch (error) {
  console.log(error);
}

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
    if (!category_tm.value) {
      val_tm(category_tm.value);
      alert("Maglumatlary doly giriziň!");
      throw "Maglumatlary doly giriziň!";
    }
    const form = new FormData();
    form.append("name", category_tm.value);
    form.append("uuid", route.params.id);
    if (category_img.value) {
      form.append("img", category_img.value);
    }
    const { data } = await userStore.editBanner(form);

    if (data.status) {
      alert("Banner Gosuldy");
    }
    useRouter().push("/admin/banners");
  } catch (error) {
    console.log(error);
  }
};
</script>

<style scoped></style>
