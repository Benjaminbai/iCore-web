<template>
  <Layout class="layout-wrapper">
    <LayoutSider
      class="layout-sider"
      v-model:collapsed="collapsed"
      collapsible
      :theme="mode"
    >
      <Logo :resource="theme.brand_logo_image" />
      <Menu :theme="mode" />
    </LayoutSider>
    <Layout>
      <LayoutHeader class="layout-header">
        <Row class="header-row">
          <Col :span="21" class="title-box">
            <span
              class="brand-title"
              :style="{ color: theme.brand_title_color }"
              >{{ theme.brand_title }}</span
            >
            <span
              v-if="theme.brand_sub_title"
              class="brand-sub-title"
              :style="{ color: theme.brand_sub_title_color }"
              >{{ theme.brand_sub_title }}</span
            >
          </Col>
          <Col :span="3" class="user-info-box"><UserInfo /></Col>
        </Row>
      </LayoutHeader>
      <Layout>
        <LayoutContent class="layout-content">
          <RouterView />
        </LayoutContent>
        <LayoutFooter class="layout-footer">
          Copyright © 2025 - 2026 IQVIA
        </LayoutFooter>
      </Layout>
    </Layout>
  </Layout>
</template>
<script setup>
import {
  Layout,
  LayoutHeader,
  LayoutSider,
  LayoutContent,
  LayoutFooter,
  Row,
  Col,
} from "ant-design-vue";
import { ref, inject, computed } from "vue";
import { RouterView } from "vue-router";
import { Logo, Menu, UserInfo } from "@/libs";

const theme = inject("theme");

const collapsed = ref(false);

const mode = computed(() =>
  theme.value.theme_dark_light_algorithm === "defaultAlgorithm"
    ? "light"
    : "dark"
);
</script>
<style scoped>
:deep(.ant-layout-sider.ant-layout-sider-light) {
  background: linear-gradient(
    to bottom,
    v-bind("theme.theme_color"),
    v-bind("theme.theme_header_gradient")
  );
}

:deep(.ant-layout-sider-trigger) {
  position: relative;
  background: transparent !important;
}

:deep(.ant-layout-header) {
  padding-inline: 20px;
  line-height: normal;
  background: linear-gradient(
    to right,
    v-bind("mode === 'light' ? theme.theme_color: ''"),
    v-bind("theme.theme_header_gradient")
  );
}
.layout-wrapper {
  height: 100%;

  .layout-sider {
    width: 200px;
  }

  .layout-content {
    padding: 20px;
    height: 100%;
    overflow: auto;
  }

  .layout-footer {
    text-align: center;
  }

  .header-row {
    height: 100%;
  }

  .user-info-box {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .title-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .brand-title {
    font-size: 18px;
    font-weight: 600;
  }
  .brand-sub-title {
    font-size: 11px;
    margin-top: 5px;
    line-height: -64px;
  }
}
</style>
