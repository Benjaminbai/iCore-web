<template>
  <Card title="主题设计" :bordered="false">
    <Row>
      <Col :span="11">
        <div class="theme-box">
          <Divider orientation="left">登录页设置</Divider>
          <Form :model="formState" v-bind="layout">
            <FormItem label="主标题">
              <Input v-model:value="formState.name" />
            </FormItem>
            <FormItem label="副标题">
              <Input v-model:value="formState.name" />
            </FormItem>
            <FormItem label="主标题颜色">
              <ColorPicker v-model="formState.name" />
            </FormItem>
            <FormItem label="副标题颜色">
              <ColorPicker v-model="formState.name" />
            </FormItem>
            <FormItem label="登录框位置">
              <Select v-model:value="formState.name">
                <SelectOption value="left">左</SelectOption>
                <SelectOption value="right">右</SelectOption>
              </Select>
            </FormItem>
            <FormItem label="登录框背景色">
              <ColorPicker v-model="formState.name" />
            </FormItem>
            <FormItem label="登录框背透明度">
              <Slider
                v-model:value="formState.name"
                :min="0"
                :max="1"
                :step="0.01"
              />
            </FormItem>
            <FormItem label="登录页背景图">
              <UploadImg />
            </FormItem>
          </Form>
        </div>

        <div class="theme-box">
          <Divider orientation="left">品牌设置</Divider>
          <Form :model="formState" v-bind="layout">
            <FormItem label="主标题">
              <Input v-model:value="formState.name" />
            </FormItem>
            <FormItem label="副标题">
              <Input v-model:value="formState.name" />
            </FormItem>
            <FormItem label="主标题颜色">
              <ColorPicker v-model="formState.name" />
            </FormItem>
            <FormItem label="副标题颜色">
              <ColorPicker v-model="formState.name" />
            </FormItem>
            <FormItem label="头部渐变色">
              <ColorPicker v-model="formState.name" />
            </FormItem>
            <FormItem label="LOGO图片"> </FormItem>
            <FormItem label="favicon图片"> </FormItem>
            <FormItem label="系统背景图片"> </FormItem>
          </Form>
        </div>
      </Col>
      <Col :span="2" class="divider-box">
        <Divider type="vertical" />
      </Col>
      <Col :span="11">
        <div class="theme-box">
          <Divider orientation="left">风格设置</Divider>
          <Form :model="formState" v-bind="layout">
            <FormItem label="主题色">
              <ColorPicker v-model="formState.name" />
            </FormItem>
          </Form>
        </div>
        <div class="theme-box">
          <Divider orientation="left">导航设置</Divider>
          <Form :model="formState" v-bind="layout">
            <FormItem label="面包屑是否展示">
              <Switch v-model:checked="formState.name" />
            </FormItem>
            <FormItem label="面包屑对齐方式">
              <Select v-model:value="formState.name">
                <SelectOption value="left">左</SelectOption>
                <SelectOption value="right">右</SelectOption>
                <SelectOption value="center">居中</SelectOption>
              </Select>
            </FormItem>
          </Form>
        </div>

        <div class="theme-box">
          <Divider orientation="left">组件设置</Divider>
          <Form :model="formState" v-bind="layout">
            <FormItem label="按钮圆角">
              <Input v-model:value="formState.name" />
            </FormItem>
          </Form>
        </div>
      </Col>
    </Row>
  </Card>
</template>

<script setup>
import {
  Card,
  Form,
  FormItem,
  Input,
  Divider,
  Row,
  Col,
  Select,
  SelectOption,
  Slider,
  Switch,
} from "ant-design-vue";
import { ref } from "vue";
import { ColorPicker, UploadImg } from "@/libs";

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
};
const formState = ref({
  name: "rgb(50, 168, 82)",
});
</script>

<style scoped>
.divider-box {
  text-align: center;
  .ant-divider {
    height: 100%;
  }
}

.theme-box {
  padding-bottom: 0.5px;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
</style>
