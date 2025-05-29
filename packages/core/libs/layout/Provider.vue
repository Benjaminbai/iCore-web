<template>
  <ConfigProvider
    :theme="{
      algorithm: [
        antDesignTheme[theme.theme_dark_light_algorithm],
        theme.theme_compact_algorithm
          ? antDesignTheme.compactAlgorithm
          : antDesignTheme[theme.theme_dark_light_algorithm],
      ],
      token: {
        colorPrimary: theme.theme_color,
      },
    }"
  >
    <BlankLayout v-if="route.meta.layout === 'blank'" />
    <component v-else :is="layoutMap[theme.theme_layout]"></component>
  </ConfigProvider>
</template>

<script setup>
import { provide } from "vue";
import { useRoute } from "vue-router";
import { ConfigProvider, theme as antDesignTheme } from "ant-design-vue";
import theme from "@/modules/theme/state";
import BlankLayout from "./BlankLayout.vue";
import HscfLayout from "./HscfLayout.vue";

provide("theme", theme);

const route = useRoute();

const { token } = antDesignTheme.useToken();

const layoutMap = {
  blank: BlankLayout,
  hscf: HscfLayout,
};
</script>

<style scoped></style>
