<template>
  <label :for="id">{{ label }}</label>
  <div
    class="px-5 py-[10px] w-full rounded-lg bg-[#f6f6f6] flex border hover:border-black"
  >
    <img
      width="20"
      height="20"
      class="mr-3"
      src="@/assets/images/search.svg"
      alt=""
    />
    <input
      :id="id"
      :name="name"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="handleInput"
      class="bg-[#f6f6f6] text-base text-black font-alatsi w-full focus:outline-none placeholder:text-[#807D7E]"
    />
    <div v-if="error" class="error">{{ error }}</div>
  </div>
</template>

<script setup>
import { v4 as uuidv4 } from "uuid";

const props = defineProps({
  name: { type: String, required: true },
  type: { type: String, default: "text" },
  modelValue: { type: [String, Number], default: "" },
  placeholder: { type: String, default: "" },
  validate: { type: Function },
});
const emit = defineEmits(["update:modelValue"]);
const error = ref("");
const id = uuidv4();
function handleInput(event) {
  emit("update:modelValue", event.target.value);
  if (props.validate) {
    error.value = props.validate(event.target.value);
  }
}
</script>

<style>
.error {
  color: red;
  font-size: 0.8rem;
  margin-top: 0.5rem;
}
</style>
