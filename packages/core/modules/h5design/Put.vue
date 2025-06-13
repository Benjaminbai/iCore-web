<template>
  <Draggable
    :list="list"
    group="iqvia"
    item-key="id"
    animation="200"
    @choose="onChoose"
    class="put"
  >
    <template #item="{ element, index }">
      <component :is="element.component" />
    </template>
  </Draggable>
</template>

<script setup>
import { ref } from "vue";
import Draggable from "vuedraggable";

const list = ref([]);

const onChoose = () => {};
</script>

<style scoped>
.put {
  width: 100%;
  height: 100%;
}
</style>
