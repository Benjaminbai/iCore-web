<template>
  <Draggable
    :list="list"
    :group="{ name: 'iqvia', pull: 'clone', put: false }"
    :clone="cloneDog"
    item-key="id"
    :sort="false"
    class="pull"
    chosenClass="sortable-chosen"
  >
    <template #item="{ element }">
      <div class="component-item">
        <ToolOutlined class="component-icon" />
        <span class="component-name">{{ element.name }}</span>
      </div>
    </template>
  </Draggable>
</template>

<script setup>
import { ref } from "vue";
import Draggable from "vuedraggable";

const list = ref([
  { id: 1, name: "组件1" },
  { id: 2, name: "组件2" },
  { id: 3, name: "组件3" },
]);

const cloneDog = (props) => {
  const componentObj = {
    ...props,
    id: Math.random(),
  };
  return componentObj;
};
</script>

<style scoped>
.pull {
  width: 100%;
  height: 100%;
}
</style>
