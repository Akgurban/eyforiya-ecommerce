<template>
  <div class="h-full">
    <label :for="id">{{ label }}</label>
    <input
      :id="id"
      :name="name"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      :checked="checked"
      @input="handleInput"
      :class="heightFull ? 'h-full' : 'h-[50px]'"
      class="bg-white w-full sm:px-6 px-4 border border-black focus:outline-none placeholder:text-[#7f7777]"
    />
    <div v-if="error" class="error">{{ error }}</div>
  </div>
</template>

<script setup>
import { v4 as uuidv4 } from "uuid";

const props = defineProps({
  name: { type: String, required: true },
  checked: { type: Boolean, default: false },
  type: { type: String, default: "text" },
  label: { type: String, required: true },
  modelValue: { type: [String, Number], default: 0 },
  heightFull: { type: Boolean, default: false },
  placeholder: { type: String, default: "" },
  validate: { type: Function },
});
const emit = defineEmits(["update:modelValue"]);
const error = ref("");
const valueInput = ref(null);
const id = uuidv4();
function handleInput(event) {
  emit("update:modelValue", event.target.value);
  if (props.validate) {
    error.value = props.validate(event.target.value);
  }
}
watch(valueInput, () => {
  emit("update:modelValue", valueInput.value);
  if (props.validate) {
    error.value = props.validate(valueInput.value);
  }
});
</script>

<style>
.error {
  color: red;
  font-size: 0.8rem;
  margin-top: 0.5rem;
}
</style>
