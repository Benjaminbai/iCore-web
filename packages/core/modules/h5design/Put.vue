<template>
  <Draggable
    :list="metaData"
    group="iqvia"
    item-key="id"
    animation="200"
    class="put"
  >
    <template #item="{ element, index }">
      <div class="put-item">
        <Teleport to="#panel-wrapper" v-if="element.chosen" defer>
          <component :is="element.panel" :index="index" />
        </Teleport>
        <component
          :is="element.component"
          v-bind="element.props"
          :class="{ chosen: element.chosen }"
          @click="onChoose(element, index)"
        >
          {{ element.props.text }}
        </component>
        <div class="tool-box" @click="metaData.splice(index, 1)">
          <MinusOutlined />
        </div>
      </div>
    </template>
  </Draggable>
</template>

<script setup>
import { inject, ref } from "vue";
import Draggable from "vuedraggable";
import { MinusOutlined } from "@ant-design/icons-vue";

const metaData = inject("metaData");

const layoutRef = ref(null);

const onChoose = (target, index) => {
  metaData.value.forEach((element) => {
    element.chosen = false;
  });
  target.chosen = true;
};
</script>

<style>
.put {
  width: 100%;
  height: 100%;
  .chosen {
    border: 1px dashed red !important;
    border-radius: 4px;
  }
  .put-item {
    position: relative;
    .tool-box {
      display: inline-block;
      border-radius: 50%;
      background-color: #e95974;
      position: absolute;
      right: -25px;
      top: 50%;
      transform: translateY(-50%);
      text-align: center;
      color: #fff;
      width: 20px;
      height: 20px;
      line-height: 20px;
      z-index: 1;
    }
  }
}
</style>
