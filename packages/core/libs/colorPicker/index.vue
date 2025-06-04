<template>
  <div class="color-picker-wrapper" ref="pickerContainer">
    <Input
      v-model:value="_color"
      @input="$emit('update:modelValue', $event.target.value)"
      @focus="showPicker = true"
    >
      <template #suffix>
        <SkinFilled
          v-if="_color"
          :style="{ fontSize: '20px', color: _color }"
        />
      </template>
    </Input>
    <ChromePicker
      class="color-picker"
      v-show="showPicker"
      v-model:tinyColor="tinyColor"
      @update:tinyColor="
        $emit('update:modelValue', (_color = tinyColor.toHex8String()))
      "
    />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watchEffect } from "vue";
import { Input } from "ant-design-vue";
import { SkinFilled } from "@ant-design/icons-vue";
import { ChromePicker, tinycolor } from "vue-color";
import "vue-color/style.css";

const { modelValue } = defineProps(["modelValue"]);
const _color = ref(modelValue);
const tinyColor = ref(tinycolor(modelValue));
const showPicker = ref(false);
const pickerContainer = ref(null);

watchEffect(() => {
  _color.value = modelValue;
  tinyColor.value = tinycolor(modelValue);
});

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
