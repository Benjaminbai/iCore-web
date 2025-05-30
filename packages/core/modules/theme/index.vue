<template>
  <Card title="主题设计" :bordered="false">
    <template #extra>
      <Button type="primary">保存</Button>
    </template>
    <Row>
      <Col :span="11">
        <div class="theme-box">
          <Divider orientation="left">登录页设置</Divider>
          <Form :model="theme" v-bind="layout">
            <FormItem label="主标题">
              <Input v-model:value="theme.login_title" />
            </FormItem>
            <FormItem label="副标题">
              <Input v-model:value="theme.login_sub_title" />
            </FormItem>
            <FormItem label="主标题颜色">
              <ColorPicker v-model="theme.login_title_color" />
            </FormItem>
            <FormItem label="副标题颜色">
              <ColorPicker v-model="theme.login_sub_title_color" />
            </FormItem>
            <FormItem label="登录框位置">
              <Select v-model:value="theme.login_box_position">
                <SelectOption value="left">左</SelectOption>
                <SelectOption value="right">右</SelectOption>
              </Select>
            </FormItem>
            <FormItem label="登录框背景色">
              <ColorPicker v-model="theme.login_box_bg_color" />
            </FormItem>
            <FormItem label="登录框背透明度">
              <Slider
                v-model:value="theme.login_box_opacity"
                :min="0"
                :max="1"
                :step="0.01"
              />
            </FormItem>
            <FormItem label="登录页背景图">
              <UploadImg v-model="theme.login_bg_image" />
            </FormItem>
          </Form>
        </div>

        <div class="theme-box">
          <Divider orientation="left">品牌设置</Divider>
          <Form :model="theme" v-bind="layout">
            <FormItem label="主标题">
              <Input v-model:value="theme.brand_title" />
            </FormItem>
            <FormItem label="副标题">
              <Input v-model:value="theme.brand_sub_title" />
            </FormItem>
            <FormItem label="主标题颜色">
              <ColorPicker v-model="theme.brand_title_color" />
            </FormItem>
            <FormItem label="副标题颜色">
              <ColorPicker v-model="theme.brand_sub_title_color" />
            </FormItem>
            <FormItem label="logo图片">
              <UploadImg v-model="theme.brand_logo_image" />
            </FormItem>
            <FormItem label="favicon图片">
              <UploadImg v-model="theme.brand_logo_favicon" />
            </FormItem>
            <!-- <FormItem label="系统背景图片">
              <UploadImg v-model="theme.brand_sys_bg_image" />
            </FormItem> -->
          </Form>
        </div>
      </Col>
      <Col :span="2" class="divider-box">
        <Divider type="vertical" />
      </Col>
      <Col :span="11">
        <div class="theme-box">
          <Divider orientation="left">风格设置</Divider>
          <Form :model="theme" v-bind="layout">
            <FormItem label="预设算法">
              <Select v-model:value="theme.theme_dark_light_algorithm">
                <SelectOption value="defaultAlgorithm">默认</SelectOption>
                <SelectOption value="darkAlgorithm">暗色</SelectOption>
              </Select>
            </FormItem>
            <FormItem label="紧凑算法">
              <Switch v-model:checked="theme.theme_compact_algorithm" />
            </FormItem>
            <FormItem label="主题色">
              <ColorPicker v-model="theme.theme_color" />
            </FormItem>
            <FormItem label="渐变色">
              <ColorPicker v-model="theme.theme_header_gradient" />
            </FormItem>
            <FormItem label="圆角">
              <Slider
                v-model:value="theme.theme_radius"
                :min="0"
                :max="20"
                :step="1"
              />
            </FormItem>
          </Form>
        </div>
        <!-- <div class="theme-box">
          <Divider orientation="left">导航设置</Divider>
          <Form :model="theme" v-bind="layout">
            <FormItem label="面包屑是否展示">
              <Switch v-model:checked="theme.navi_breadcrumb_show" />
            </FormItem>
            <FormItem label="面包屑对齐方式">
              <Select v-model:value="theme.navi_breadcrumb_position">
                <SelectOption value="left">左</SelectOption>
                <SelectOption value="right">右</SelectOption>
                <SelectOption value="center">居中</SelectOption>
              </Select>
            </FormItem>
          </Form>
        </div> -->

        <div class="theme-box">
          <Divider orientation="left">组件设置</Divider>
          <Form :model="theme" v-bind="layout"> </Form>
        </div>
      </Col>
    </Row>
  </Card>
</template>

<script setup>
import { inject } from "vue";
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
  Button,
  Switch,
} from "ant-design-vue";
import { ColorPicker, UploadImg } from "@/libs";

const theme = inject("theme");

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
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
