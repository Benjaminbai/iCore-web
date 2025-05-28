<template>
  <div class="color-picker-wrapper" ref="pickerContainer">
    <Input
      v-model:value="_color"
      @input="$emit('update:modelValue', $event.target.value)"
      @focus="showPicker = true"
    />
    <ChromePicker
      class="color-picker"
      v-show="showPicker"
      v-model="_color"
      @update:modelValue="$emit('update:modelValue', _color)"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { Input } from "ant-design-vue";
import { ChromePicker } from "vue-color";
import "vue-color/style.css";

const { modelValue } = defineProps(["modelValue"]);
const _color = ref(modelValue);
const showPicker = ref(false);
const pickerContainer = ref(null);

const handleClickOutside = (event) => {
  if (pickerContainer.value && !pickerContainer.value?.contains(event.target)) {
    showPicker.value = false;
  }
};
onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style scoped>
.color-picker-wrapper {
  display: relative;
  .color-picker {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1000;
  }
}
</style>
