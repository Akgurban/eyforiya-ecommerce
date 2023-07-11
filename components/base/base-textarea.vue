<template>
  <div>
    <label :for="id">{{ label }}</label>
    <textarea
      :id="id"
      :name="name"
      :placeholder="placeholder"
      :value="modelValue"
      @input="handleInput"
      class="bg-white w-full sm:px-6 border border-black px-4 py-4 h-50 focus:outline-none mt-1 placeholder:text-[#B7B7B7]"
    />
    <div v-if="error" class="error">{{ error }}</div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { v4 as uuidv4 } from "uuid";

const props = defineProps({
  name: { type: String, required: true },
  type: { type: String, default: "text" },
  label: { type: String, required: true },
  value: { type: [String, Number], default: "" },
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
