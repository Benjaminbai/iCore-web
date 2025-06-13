<template>
  <Button v-bind="props">
    <template v-for="slot in Object.keys(slots)" #[slot]="scope">
      <slot :name="slot" v-bind="scope || {}"></slot>
    </template>
  </Button>
</template>

<script setup>
import { useSlots } from "vue";
import { Button } from "@nutui/nutui";
import "@nutui/nutui/dist/packages/button/index.css";

defineOptions({
  name: "按钮组件",
  component: "NutButton",
});

const props = defineProps();
const slots = useSlots();
</script>
