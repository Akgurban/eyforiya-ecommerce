<template>
  <div>
    <div
      v-if="count == 0"
      @click="increment"
      class="relative select-none mb-[20px] hover:scale-95 transition-transform duration-150"
    >
      <img
        class="mx-auto h-9 md:h-10 md:mt-5 mt-1"
        src="@/assets/images/add_cart.svg"
        alt=""
      />
      <div
        class="absolute top-0 right-1/2 translate-x-1/2 flex items-center gap-3 text-white h-fit"
      >
        <div
          class="md:text-xl text-lg font-alatsi font-semibold uppercase whitespace-nowrap mt-1 md:mt-0"
        >
          {{ $t("add_to") }}
        </div>
        <IconTrash
          draggable="false"
          class="inline pointer-events-none mt-1 md:w-9 w-6 md:h-9 h-6"
        ></IconTrash>
      </div>
    </div>

    <div
      v-if="count != 0"
      class="w-[80%] mx-auto text-center z-50 md:h-17.5 h-13"
    >
      <div
        class="w-full font-bold border border-gray-600 justify-evenly flex gap-2 px-6 py-1 md:py-1 rounded-xl bg-[#F6F6F6]"
      >
        <div
          @click="decrement"
          class="cursor-pointer text-2xl md:text-3xl font-bold text-[#3C4242] px-2 select-none"
        >
          -
        </div>
        <div
          class="cursor-pointer text-2xl md:text-3xl font-bold w-7 text-center"
        >
          {{ count }}
        </div>
        <div
          @click="increment"
          class="cursor-pointer text-2xl md:text-3xl font-bold text-[#3C4242] px-2 select-none"
        >
          +
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTrashStore } from "~~/stores/trash";
import { useAuthStore } from "@/stores/authStore";
const authStore = useAuthStore();
const trash = useTrashStore();
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  count: {
    type: Number,
    default: 0,
  },
});
const count = ref(0);
if (props.count > 0) {
  count.value = props.count;
}

const emit = defineEmits(["update:modelValue"]);
trash.trash_items.products?.forEach((item, index) => {
  if (item?.uuid == props.item?.uuid) {
    count.value = item.count;
  }
});

const increment = async () => {
  count.value += 1;
  trash.setLocalStorage(props.item, count.value);

  if (authStore.userToken) {
    const { data } = await useMyFetch("/api/v1/client/trash/create", {
      body: {
        user_id: authStore.userToken?.uuid,
        product_id: props.item.uuid,
        count: count.value,
      },
      method: "POST",
    });
  }
};

const decrement = async () => {
  count.value -= 1;
  trash.removeLocalStorage(props.item, count.value);

  if (authStore.userToken) {
    const { data } = await useMyFetch("/api/v1/client/trash/create", {
      body: {
        user_id: authStore.userToken?.uuid,
        product_id: props.item.uuid,
        count: count.value,
      },
      method: "POST",
    });
  }
};
</script>
<style scoped></style>
