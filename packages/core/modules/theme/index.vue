<template>
  <Card title="主题设计" :bordered="false">
    <Row>
      <Col :span="11">
        <div class="theme-box">
          <Divider orientation="left">登录页设置</Divider>
          <Form :model="formState" v-bind="layout">
            <FormItem label="主标题">
              <Input v-model:value="formState.login_title" />
            </FormItem>
            <FormItem label="副标题">
              <Input v-model:value="formState.login_sub_title" />
            </FormItem>
            <FormItem label="主标题颜色">
              <ColorPicker v-model="formState.login_title_color" />
            </FormItem>
            <FormItem label="副标题颜色">
              <ColorPicker v-model="formState.login_sub_title_color" />
            </FormItem>
            <FormItem label="登录框位置">
              <Select v-model:value="formState.login_box_position">
                <SelectOption value="left">左</SelectOption>
                <SelectOption value="right">右</SelectOption>
              </Select>
            </FormItem>
            <FormItem label="登录框背景色">
              <ColorPicker v-model="formState.login_box_bg_color" />
            </FormItem>
            <FormItem label="登录框背透明度">
              <Slider
                v-model:value="formState.login_box_opacity"
                :min="0"
                :max="1"
                :step="0.01"
              />
            </FormItem>
            <FormItem label="登录页背景图">
              <UploadImg v-model="formState.login_bg_image" />
            </FormItem>
          </Form>
        </div>

        <div class="theme-box">
          <Divider orientation="left">品牌设置</Divider>
          <Form :model="formState" v-bind="layout">
            <FormItem label="主标题">
              <Input v-model:value="formState.brand_title" />
            </FormItem>
            <FormItem label="副标题">
              <Input v-model:value="formState.brand_sub_title" />
            </FormItem>
            <FormItem label="主标题颜色">
              <ColorPicker v-model="formState.brand_title_color" />
            </FormItem>
            <FormItem label="副标题颜色">
              <ColorPicker v-model="formState.brand_sub_title_color" />
            </FormItem>
            <FormItem label="头部渐变色">
              <ColorPicker v-model="formState.brand_header_gradient" />
            </FormItem>
            <FormItem label="logo图片">
              <UploadImg v-model="formState.brand_logo_image" />
            </FormItem>
            <FormItem label="favicon图片">
              <UploadImg v-model="formState.brand_logo_favicon" />
            </FormItem>
            <FormItem label="系统背景图片">
              <UploadImg v-model="formState.brand_sys_bg_image" />
            </FormItem>
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
              <ColorPicker v-model="formState.theme_color" />
            </FormItem>
          </Form>
        </div>
        <!-- <div class="theme-box">
          <Divider orientation="left">导航设置</Divider>
          <Form :model="formState" v-bind="layout">
            <FormItem label="面包屑是否展示">
              <Switch v-model:checked="formState.navi_breadcrumb_show" />
            </FormItem>
            <FormItem label="面包屑对齐方式">
              <Select v-model:value="formState.navi_breadcrumb_position">
                <SelectOption value="left">左</SelectOption>
                <SelectOption value="right">右</SelectOption>
                <SelectOption value="center">居中</SelectOption>
              </Select>
            </FormItem>
          </Form>
        </div> -->

        <div class="theme-box">
          <Divider orientation="left">组件设置</Divider>
          <Form :model="formState" v-bind="layout">
            <FormItem label="按钮圆角">
              <Input v-model:value="formState.components_btn_radius" />
            </FormItem>
          </Form>
        </div>
      </Col>
    </Row>

    <FloatButton
      shape="square"
      type="primary"
      :style="{
        right: '40px',
        bottom: '100px',
      }"
    >
      <template #icon>
        <SaveOutlined />
      </template>
    </FloatButton>

    <FloatButton
      shape="square"
      type="primary"
      :style="{
        right: '100px',
        bottom: '100px',
      }"
      @click="previewHandler"
    >
      <template #icon>
        <EyeOutlined />
      </template>
    </FloatButton>
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
  FloatButton,
} from "ant-design-vue";
import { EyeOutlined, SaveOutlined } from "@ant-design/icons-vue";
import { ref } from "vue";
import { ColorPicker, UploadImg } from "@/libs";
import defaultTheme from "./default";

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
};
const formState = ref(defaultTheme);

const previewHandler = () => {
  console.log(11111, formState.value);
};
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
