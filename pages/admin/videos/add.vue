<template>
  <div>
    <div class="my-4 font-bold bg-slate-300 p-2">Banner gosun</div>

    <div class="flex justify-between mt-3 items-end">
      <div class="w-[400px]">
        <BaseVideoUpload v-model="category_img" />
      </div>

      <BaseButton @click="addCategory" class="" type="secondary">
        <button>Add Category</button>
      </BaseButton>
    </div>
  </div>
</template>

<script setup>
import { useToast } from "vue-toastification";

definePageMeta({
  layout: "admin",
});
import axios from "~/plugins/axios";
import { useUserStore } from "~~/stores/user";
import { useLoaderStore } from "~~/stores/loader";
const loaderStore = useLoaderStore();

const userStore = useUserStore();

const image = ref(null);
const category_tm = ref(null);
const category_ru = ref(null);
const category_en = ref(null);
const category_img = ref(null);
const $toast = useToast();

const description = ref(null);
const route = useRouter();
watch(image, () => {
  console.log(image);
});
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
    console.log(!category_tm.value);
    if (!category_img.value) {
      $toast.error("Maglumatlary doly giriziň!");
      throw "Maglumatlary doly giriziň!";
    }
    const form = new FormData();

    form.append("video", category_img.value);
    loaderStore.startLoading();
    const { data, pending } = await userStore.addVideos(form);

    console.log(pending.value, "pending.value");
    if (!pending.value) {
      loaderStore.endLoading();
    }
    console.log(pending.value, "pending.value");
    useRouter().push("/admin/videos");
  } catch (error) {
    console.log(error);
  }
};
</script>

<style scoped></style>
