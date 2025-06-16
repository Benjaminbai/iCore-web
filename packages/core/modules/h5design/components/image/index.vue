<template>
  <Image v-bind="props" />
</template>

<script>
import { LoginBg } from "@/static";
const defaultProps = {
  src: LoginBg,
};
</script>

<script setup>
import { Image } from "@nutui/nutui";
import "@nutui/nutui/dist/packages/image/index.css";

import Panel from "./Panel.vue";

defineOptions({
  name: "图片组件",
  component: "NutImage",
  _props: defaultProps,
  panel: Panel,
});

const props = defineProps();
</script>
