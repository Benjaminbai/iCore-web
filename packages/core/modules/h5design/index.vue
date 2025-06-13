<template>
  <Card title="H5 Design" :bordered="false">
    <Card hoverable style="width: 300px">
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
  <NutButton>123</NutButton>
  <FullModal v-model:open="openEdit" title="Basic Modal">
    <Edit />
  </FullModal>
</template>

<script setup>
import { ref } from "vue";
import { Card, CardMeta } from "ant-design-vue";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons-vue";

import { NutButton } from "./components";

import { FullModal } from "@/libs";
import Edit from "./Edit.vue";

const openEdit = ref(false);
</script>
