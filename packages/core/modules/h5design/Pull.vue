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
      <!-- <component :is="element.component" v-bind="element.props">
        {{ element.name }}
      </component> -->
      <NutButton class="pull-item">{{ element.name }}</NutButton>
    </template>
  </Draggable>
</template>

<script setup>
import { ref, markRaw } from "vue";
import Draggable from "vuedraggable";
import * as NutComponents from "./components";
import NutButton from "./components/button/index.vue";

const arr = [];
Object.entries(NutComponents).forEach(([name, component]) => {
  arr.push({
    name: component.name,
    component: markRaw(component),
    props: component._props,
    panel: markRaw(component.panel),
  });
});

const list = ref(arr);

const cloneDog = (props) => {
  return {
    ...props,
    props: ref({ ...props.props }),
    id: Math.random(),
  };
};
</script>

<style scoped>
.pull {
  width: 100%;
  height: 100%;
}

.pull-item {
  margin-bottom: 10px;
  width: 88%;
}
</style>
