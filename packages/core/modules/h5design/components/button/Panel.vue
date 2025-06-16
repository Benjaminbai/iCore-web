<template>
  <Form :model="formState" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
    <FormItem label="按钮文本">
      <Input v-model:value="formState.text" />
    </FormItem>
  </Form>
</template>

<script setup>
import { inject } from "vue";
import { Form, FormItem, Input } from "ant-design-vue";

const metaData = inject("metaData");
const { index } = defineProps(["index"]);
const formState = metaData[index].props;
</script>
