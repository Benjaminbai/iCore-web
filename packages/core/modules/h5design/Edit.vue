<template>
  <Row :gutter="10">
    <Col flex="250px">
      <Tabs v-model:activeKey="activeKey" tabPosition="left">
        <TabPane :key="1">
          <template #tab>
            <AppstoreOutlined />
          </template>
          <Pull />
        </TabPane>
        <TabPane :key="2">
          <template #tab>
            <PlayCircleOutlined />
          </template>
          2
        </TabPane>
      </Tabs>
    </Col>
    <Col flex="auto" class="panel">
      <Card class="panel-phone">
        <Put />
      </Card>
    </Col>
    <Col flex="300px" id="panel-wrapper"></Col>
  </Row>
</template>

<script setup>
import { ref } from "vue";
import { Tabs, TabPane, Col, Row, Card } from "ant-design-vue";
import { AppstoreOutlined, PlayCircleOutlined } from "@ant-design/icons-vue";

import Pull from "./Pull.vue";
import Put from "./Put.vue";

const activeKey = ref(1);
</script>

<style scoped>
.panel {
  background-color: #f5f5f5;
  height: 676px;
  display: flex;
  justify-content: center;
  align-items: center;
  .panel-phone {
    width: 345px;
    height: 656px;
  }
}
:deep(.panel-phone .ant-card-body) {
  padding: 0;
  height: 100%;
}
</style>
