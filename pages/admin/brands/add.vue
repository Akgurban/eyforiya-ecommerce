<template>
  <div>
    <div class="my-4 font-bold bg-slate-300 p-2">Brand gosun</div>
    <div class="flex gap-4 justify-between w-full">
      <div class="flex flex-col justify-between">
        <BaseInput
          :validate="val_tm"
          name="Brand"
          label="Brand"
          placeholder="Brand"
          v-model="category_tm"
        />
      </div>
    </div>

    <div class="flex justify-between mt-3">
      <div class="w-[400px]">
        <BaseImgUpload v-model="category_img" />
      </div>

      <BaseButton @click="addCategory" class="" type="secondary">
        <button>Brand goshmak</button>
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

const image = ref(null);
const category_tm = ref(null);
const category_img = ref(null);
const route = useRouter();
const val_tm = (e) => {
  if (e === "") {
    return "dogry dolduryn";
  }
};

const addCategory = async () => {
  try {
    if (!category_tm.value || !category_img.value) {
      val_tm(category_tm.value);
      alert("Maglumatlary doly giriziň!");
      throw "Maglumatlary doly giriziň!";
    }
    const form = new FormData();
    form.append("name", category_tm.value);
    form.append("img", category_img.value);
    const { data } = await userStore.addBrand(form);

    if (data.status) {
      alert("Banner Gosuldy");
    }
    useRouter().push("/admin/brands");
  } catch (error) {
    console.log(error);
  }
};
</script>

<style scoped></style>
