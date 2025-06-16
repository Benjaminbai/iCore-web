<template>
  <Button v-bind="props">
    <template v-for="slot in Object.keys(slots)" #[slot]="scope">
      <slot :name="slot" v-bind="scope || {}"></slot>
    </template>
  </Button>
</template>

<script>
const defaultProps = {
  type: "default",
  size: "normal",
  shape: "round",
  color: "",
  plain: false,
  disabled: false,
  block: false,
  loading: false,
  text: "按钮组件",
};
</script>
<script setup>
import { useSlots } from "vue";
import { Button } from "@nutui/nutui";
import "@nutui/nutui/dist/packages/button/index.css";

import Panel from "./Panel.vue";

defineOptions({
  name: "按钮组件",
  component: "NutButton",
  _props: defaultProps,
  panel: Panel,
});

const props = defineProps();
const slots = useSlots();
</script>
