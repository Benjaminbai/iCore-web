<template>
  <Form
    :model="metaData[index]['props']"
    :label-col="{ span: 6 }"
    :wrapper-col="{ span: 18 }"
  >
    <FormItem label="图片链接">
      <Input v-model:value="metaData[index]['props'].src" />
    </FormItem>
  </Form>
</template>

<script setup>
import { inject } from "vue";
import { Form, FormItem, Input } from "ant-design-vue";

const metaData = inject("metaData");
const { index } = defineProps(["index"]);
</script>
