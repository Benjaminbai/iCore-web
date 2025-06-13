<template>
  <Draggable
    :list="list"
    :group="{ name: 'iqvia', pull: 'clone', put: false }"
    :clone="cloneDog"
    item-key="name"
    :sort="false"
    class="pull"
    chosenClass="sortable-chosen"
  >
    <template #item="{ element }">
      <component :is="element.component" />
    </template>
  </Draggable>
</template>

<script setup>
import { ref, markRaw } from "vue";
import Draggable from "vuedraggable";
import * as NutComponents from "./components";

const arr = [];
Object.entries(NutComponents).forEach(([name, component]) => {
  arr.push({ name: component.name, component: markRaw(component) });
});

const list = ref(arr);

const cloneDog = (props) => {
  return {
    ...props,
    id: Math.random(),
  };
};
</script>

<style scoped>
.pull {
  width: 100%;
  height: 100%;
}
</style>
