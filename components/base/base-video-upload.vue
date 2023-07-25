<script setup>
const fileInput = ref(null);
const img = ref(null);
const fileChoosen = ref(false);

const props = defineProps({
  banner: {
    type: Boolean,
    default: false,
  },
  currentImg: {
    type: String,
    default: "",
  },
  isChangable: {
    type: Boolean,
    default: true,
  },
});

onMounted(() => {
  if (!!props.currentImg) {
    img.value.src = props.currentImg;
  }
});
// watch props.currentImg and remove img if it is null
watch(
  () => props.currentImg,
  (val) => {
    if (!val) {
      img.value.src = "";
    }
  }
);

const emit = defineEmits(["update:modelValue"]);

function showFileUpload() {
  if (props.isChangable) {
    fileInput.value.click();
  }
}

function setImg(event) {
  emit("update:modelValue", event.target.files[0]);
  // read file and set image to img tag
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = (e) => {
    img.value.src = e.target.result;
  };
  reader.readAsDataURL(file);
  fileChoosen.value = true;
}
</script>
<template>
  <div>
    <video
      class="w-full aspect-video object-cover z-[1]"
      controls
      autoplay
      loop
      muted
      ref="img"
      v-if="fileChoosen"
    >
      <source ref="img" alt="" />
    </video>
    <div
      @click="showFileUpload"
      class="group cursor-pointer border-dashed border-2 flex justify-center items-center bg-white hover:bg-white/50 text-[#ddd] w-full relative"
      :class="banner ? 'h-[25rem]' : 'pt-[56.25%]'"
      v-bind="$attrs"
    >
      <span
        class="w-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <IconPlus />
      </span>
      <div
        v-if="fileChoosen"
        class="group-hover:block hidden overlay absolute top-0 left-0 bg-black/30 w-full h-full z-[2]"
      >
        <span
          class="w-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <IconPlus />
        </span>
        <p
          class="absolute top-[70%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-white text-lg"
          v-if="banner"
        >
          Täze surat goýmak üçin basyň
        </p>
      </div>

      <input
        @input="setImg"
        ref="fileInput"
        accept="video/*"
        type="file"
        class="hidden"
      />
    </div>
  </div>
</template>
