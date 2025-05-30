<template>
  <ConfigProvider :theme="globalConfig">
    <BlankLayout v-if="route.meta.layout === 'blank'" />
    <component v-else :is="layoutMap[theme.theme_layout]"></component>
  </ConfigProvider>
</template>

<script setup>
import { computed, provide } from "vue";
import { useRoute } from "vue-router";
import { ConfigProvider, theme as antDesignTheme } from "ant-design-vue";
import theme from "@/modules/theme/state";
import BlankLayout from "./BlankLayout.vue";
import HscfLayout from "./HscfLayout.vue";

provide("theme", theme);

const route = useRoute();

// const { token } = antDesignTheme.useToken();

const globalConfig = computed(() => {
  return {
    algorithm: [
      antDesignTheme[theme.value.theme_dark_light_algorithm],
      theme.value.theme_compact_algorithm
        ? antDesignTheme.compactAlgorithm
        : antDesignTheme[theme.value.theme_dark_light_algorithm],
    ],
    token: {
      colorPrimary: theme.value.theme_color,
      borderRadius: theme.value.theme_radius,
    },
  };
});

const layoutMap = {
  blank: BlankLayout,
  hscf: HscfLayout,
};
</script>

<style scoped></style>
