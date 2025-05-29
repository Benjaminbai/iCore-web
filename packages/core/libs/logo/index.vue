<template>
  <div class="logo-wrapper">
    <img :src="resource || logo" alt="logo" />
  </div>
</template>

<script setup>
import { logo } from "@/static";

const { resource } = defineProps(["resource"]);
</script>

<style scoped>
.logo-wrapper {
  max-width: 200px;
  height: 64px;
  padding: 8px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
