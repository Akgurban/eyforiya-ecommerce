<template>
  <div>
    <div
      class="aspect-[video] w-screen 2xl:w-[1428px] mx-auto flex justify-between items-start px-4 sm:flex-row flex-col"
    >
      <div class="sm:w-[35%] w-full relative">
        <img
          :src="`http://duypbaha.com.tm/api/v1/uploads/images/${selectedImg?.img_path}`"
          class="w-full one_img rounded-md aspect-square"
          alt=""
        />
        <div class="absolute top-5 right-5">
          <IconLike
            fill="none"
            @click="toggleFav(oneProduct)"
            :class="
              oneProduct.isLiked ? 'fill-red-600 text-red-600' : ' text-white'
            "
            class="hover:text-red-600 w-7"
          ></IconLike>
        </div>
        <div class="w-full relative mt-5 flex justify-start">
          <img
            v-for="item in oneProduct.images"
            :key="item.img_path"
            :src="`http://duypbaha.com.tm/api/v1/uploads/images/${item?.img_path}`"
            @click.native="selectedImg = item"
            class="w-[19%] rounded-md aspect-square mr-2 border border-blue-200"
            alt=""
          />
        </div>
      </div>
      <div class="w-[60%] sm:ml-6 ml-0 mt-6">
        <div>
          <div
            class="one_prod w-fit cursor-pointer transition-all duration-100 hover:text-[#44A4DB] md:text-5xl text-2xl mb-1 font-semibold font-inter"
          >
            {{ oneProduct.name }}
          </div>
          <div
            class="sm:pt-1.5 pt-0 pb-1.5 md:text-xl text-lg sm:font-normal font-medium"
          >
            {{ oneProduct.description }}
          </div>

          <div
            class="flex items-center flex-wrap sm:px-4 px-1 py-2 border-t border-b border-gray-200"
          >
            <div
              class="text-white cursor-pointer rounded-md text-2xl px-4 py-3 bg-[#44A4DB]"
            >
              {{ oneProduct.price }} TMT
            </div>
          </div>
          <div class="w-fit md:ml-5 ml-1 pt-3">
            <TrashButtonAndCounter
              :item="changedOneProduct"
              v-model="oneCountProduct"
            />
          </div>
          <div>
            <p>Kommentariya</p>
            <div class="min-w-[300px] w-auto flex gap-4">
              <textarea
                class="border border-[#44A4DB] p-2"
                type="text"
                v-model="comment"
              />
              <IconSend
                @click="sendComment"
                class="md:cursor-pointer self-end cursor-auto text-[#44A4DB] fill-[#44A4DB]"
              ></IconSend>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-screen 2xl:w-[1428px] mx-auto px-4 sm:flex-row flex-col">
      <div class="bg-teal-100 mt-6">
        <p class="font-alatsi font-bold p-2">Kommentariyalar</p>
        <ul>
          <li
            v-for="(item, index) in comments.data.comments"
            class="odd:bg-teal-50 even:bg-teal-100 p-2 font-inter"
          >
            {{ index + 1 }}: {{ item.content }}
          </li>
        </ul>
      </div>
      <div
        class="mt-8 px-0 md:px-10 cursor-pointer transition-all duration-100 md:text-4xl text-2xl mb-1 font-semibold font-inter"
      >
        {{ $t("similar_products") }}
      </div>

      <div style="" class="flex flex-wrap justify-between md:px-1 mt-2">
        <div
          v-for="(item, index) in similarProducts"
          :key="item?.uuid"
          class="group relative md:w-[276px] w-[176px] product_item mb-3 hover:shadow-none md:hover:shadow-hero bg-[#D9D9D940] hover:bg-[#D9D9D940] transition-all ease-in-out duration-200 rounded-xl flex flex-col justify-between items-center"
        >
          <BaseProduct :item="item"></BaseProduct>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from "~~/stores/authStore";
import { useToast } from "vue-toastification";
import { useFavStore } from "~~/stores/favourite";
const favStore = useFavStore();

const $toast = useToast();

const user = useAuthStore();

const { locale } = useI18n();

const oneProduct = ref(null);
const similarProducts = ref([]);
const selectedImg = ref(null);
const comment = ref(null);
const oneCountProduct = ref(0);
const changedOneProduct = ref(null);

const router = useRouter();
const route = useRoute();
const sendComment = async () => {
  if (!comment.value?.length) {
    return $toast.error("kommentariya bosh bolmaly dal");
  }
  if (!user.userToken?.uuid) {
    return $toast.error("Ulgama girin");
  }
  const { data } = await useMyFetch(`/api/v1/client/comment/create`, {
    method: "POST",
    body: {
      product_id: oneProduct.value.uuid,
      user_id: user.userToken?.uuid,
      content: comment.value,
    },
  });
  if (data.value?.status) {
    comment.value = null;
    $toast.success("Habarynyz garasylyar");
  }
};

const { data: comments } = await useMyFetch(
  `/api/v1/client/products/product-comment?product_id=${route.params.id}&offset=0&limit=100`
);
const { data, status } = await useMyFetch(
  `/api/v1/client/products/product/${route.params.id}?lang=${locale.value}`
);

if (status) {
  oneProduct.value = data.value.data.one_products;
  changedOneProduct.value = data.value.data.one_products;
  selectedImg.value = data.value.data.one_products.images[0];
  data.value.data.products.filter((e, index) => {
    if (data.value.data.one_products.uuid !== e.uuid) {
      similarProducts.value.push(e);
    } else {
      changedOneProduct.value = {
        name: data.value.data.one_products?.name,
        uuid: data.value.data.one_products?.uuid,
        images: data.value.data.one_products?.images[0].img_path,
        price: data.value.data.one_products?.price,
      };
    }
  });
}

favStore.wish_items?.forEach(async (e) => {
  if (e.uuid == oneProduct.value.uuid) {
    oneProduct.value.isLiked = true;
  } else {
    oneProduct.value.isLiked == false;
  }
});
const toggleFav = async (e) => {
  // if (user.userToken?.uuid) {
  //   const { data: wish_user } = await useMyFetch(
  //     `/api/v1/client/wish-list?lang=tm&user_id=${user.userToken?.uuid}`
  //   );
  //   if (wish_user.value?.status) {
  //     wish_user.value.data?.filter((e) => {
  //       e.images = e.img_path;
  //     });
  //     favStore.wish_items = wish_user.value.data;
  //   }
  // }

  if (e.isLiked) {
    e.isLiked = false;
    changedOneProduct.value = {
      name: e?.name,
      uuid: e?.uuid,
      images: e?.images[0].img_path,
      price: e?.price,
    };

    favStore.removeLocalStorage(changedOneProduct.value);
    if (user.userToken?.uuid) {
      const { data } = await useMyFetch(
        `/api/v1/client/wish-list/delete/${user.userToken?.uuid}/${e.uuid}`,
        {
          method: "POST",
        }
      );
    }
  } else {
    e.isLiked = true;

    changedOneProduct.value = {
      name: e?.name,
      uuid: e?.uuid,
      images: e?.images[0].img_path,
      price: e?.price,
    };

    if (user.userToken?.uuid) {
      const { data } = useMyFetch(`/api/v1/client/wish-list/create`, {
        method: "POST",
        body: {
          product_id: e.uuid,
          user_id: user.userToken?.uuid,
        },
      });
    }
    favStore.setLocalStorage(changedOneProduct.value);
  }
};
</script>

<style scoped>
.one_prod {
  view-transition-name: title;
}
.one_img {
  view-transition-name: selected-img;
}
</style>
