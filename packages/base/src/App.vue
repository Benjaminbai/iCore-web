<template>
  <RouterView v-if="route.path === '/login'" />
  <HscfLayout v-else />
</template>

<script setup>
import { RouterView, useRoute } from "vue-router";
import { HscfLayout } from "@icore/core";

const route = useRoute();
</script>
