<template>
  <div>
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
          class="flex flex-col w-[200px] gap-2 relative"
        >
          <BaseImgUpload
            v-if="image.length >= index || addedImages.length >= index"
            class="w-[200px]"
            :currentImg="
              addedImages[index]?.img_path
                ? `http://duypbaha.com.tm/api/v1/uploads/images/${addedImages[index].img_path}`
                : null
            "
            :isChangable="addedImages[index]?.img_path ? false : true"
            v-model="image[index]"
          />
          <div
            @click="deleteOneImg(addedImages[index].img_uuid)"
            v-if="addedImages[index]?.img_path"
            class="text-white cursor-pointer hover:bg-red-500 px-2 w-full bg-red-600 mt-auto absolute -bottom-5"
          >
            Delete
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-between mb-30">
      <BaseInput
        name="baha"
        type="number"
        placeholder="Harydyn bahasy Manatda"
        v-model="price"
      />
      <BaseButton @click="addPosts" class="" type="secondary">
        <button>Harydy Gosh</button>
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
import { useLoaderStore } from "~~/stores/loader";

const userStore = useUserStore();
const loaderStore = useLoaderStore();
const router = useRouter();
const route = useRoute();

const image = ref([]);
const addedImages = ref([]);

const description_tm = ref(null);
const description_en = ref(null);
const description_ru = ref(null);

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

const getOneProductData = async () => {
  try {
    const { data: sub } = await userStore.getSubCategories();
    const { data: spec } = await userStore.getSpecialCategories();
    const { data: brand } = await userStore.getBrand();
    const { data: product_id } = await userStore.OneProduct(route.params.id);

    sub_categories.value = sub.value.data;
    spec_categories.value = spec.value.data;
    brands.value = brand.value.data;
    loaderStore.endLoading();

    (addedImages.value = product_id.value.data.images),
      (name_tm.value = product_id.value.data.name_tm),
      (name_ru.value = product_id.value.data.name_ru),
      (name_en.value = product_id.value.data.name_en),
      (description_tm.value = product_id.value.data.description_tm),
      (description_en.value = product_id.value.data.description_en),
      (description_ru.value = product_id.value.data.description_ru),
      (price.value = +product_id.value.data.price),
      (selectedBrand.value = {
        name: product_id.value.data.brand_name,
        uuid: product_id.value.data.brand_id,
      }),
      (selectedSpec.value = {
        name: product_id.value.data.special_categ_name,
        uuid: product_id.value.data.special_categ_id,
      });
    selectedSub.value = {
      name: product_id.value.data.sub_category_name,
      uuid: product_id.value.data.sub_category_id,
    };
  } catch (error) {
    console.log(error);
  }
};

const addPosts = async () => {
  try {
    const { data: onlyProduct, status } = await userStore.editProduct({
      sub_category_id: selectedSub.value?.uuid,
      name_tm: name_tm.value,
      name_ru: name_ru.value,
      name_en: name_en.value,
      description_tm: description_tm.value,
      description_en: description_en.value,
      description_ru: description_ru.value,
      price: +price.value,
      brand_id: selectedBrand.value?.uuid || null,
      special_category_id: selectedSpec.value?.uuid || null,
      uuid: route.params.id,
    });
    if (onlyProduct.value.status) {
      image.value?.forEach(async (e, index) => {
        const form = new FormData();
        form.append("product_id", onlyProduct.value.data);
        form.append("img", image.value[index]);
        const { data, status } = await userStore.addProductImage(form);
        if (status) {
        }
      });
      router.push("/admin/products");
    }
  } catch (error) {
    console.log(error);
  }
};
const deleteOneImg = async (e) => {
  try {
    loaderStore.startLoading();
    const { data, status } = await userStore.deleteProductImage(e);
    if (status) {
      await getOneProductData();
      loaderStore.endLoading();
    }
  } catch (error) {
    console.log(error);
  }
};
await getOneProductData();
</script>

<style scoped></style>
