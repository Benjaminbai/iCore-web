<template>
  <Card title="H5 Design" :bordered="false">
    <Card hoverable class="card-item">
      <template #cover>
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      </template>
      <template #actions>
        <EditOutlined @click="openEdit = true" />
        <DeleteOutlined />
      </template>
      <CardMeta title="Card title" description="This is the description">
      </CardMeta>
    </Card>
  </Card>
  <FullModal v-model:open="openEdit">
    <template #title>
      <Row :gutter="10">
        <Col flex="250px">Edit Card</Col>
        <Col flex="auto" class="algin-center">
          <Space size="large">
            <Tooltip>
              <template #title>Save</template>
              <Button type="link"><SaveOutlined /></Button>
            </Tooltip>
            <Tooltip>
              <template #title>JSON</template>
              <Button type="link" @click="openJson = true">
                <PartitionOutlined />
              </Button>
            </Tooltip>
          </Space>
        </Col>
        <Col flex="300px"></Col>
      </Row>
    </template>
    <Edit />
  </FullModal>
  <FullModal v-model:open="openJson">
    <JsonViewer
      :value="metaData"
      copyable
      boxed
      sort
      theme="light"
      class="json-viewer"
    />
  </FullModal>
</template>

<script setup>
import { ref, provide } from "vue";
import {
  Card,
  CardMeta,
  Col,
  Row,
  Space,
  Button,
  Tooltip,
} from "ant-design-vue";
import {
  EditOutlined,
  DeleteOutlined,
  SaveOutlined,
  PartitionOutlined,
} from "@ant-design/icons-vue";
import { JsonViewer } from "vue3-json-viewer";
import "vue3-json-viewer/dist/vue3-json-viewer.css";

import { FullModal } from "@/libs";
import Edit from "./Edit.vue";
import metaData from "./state/metaData";

provide("metaData", metaData);

const openEdit = ref(false);
const openJson = ref(false);
</script>

<style scoped>
.card-item {
  width: 300px;
}
.algin-center {
  text-align: center;
}

.json-viewer {
  .jv-container .jv-code.boxed {
    height: auto;
  }
}
</style>
