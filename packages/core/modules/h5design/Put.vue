<template>
  <Draggable
    :list="metaData"
    group="iqvia"
    item-key="id"
    animation="200"
    @choose="onChoose"
    class="put"
  >
    <template #item="{ element, index }">
      <div>
        <Teleport to="#panel-wrapper" defer>
          <component :is="element.panel" :index="index" />
        </Teleport>
        <component :is="element.component" v-bind="element.props">
          {{ element.props.text }}
        </component>
      </div>
    </template>
  </Draggable>
</template>

<script setup>
import { inject } from "vue";
import Draggable from "vuedraggable";

const metaData = inject("metaData");

const onChoose = () => {};
</script>

<style scoped>
.put {
  width: 100%;
  height: 100%;
}
</style>
