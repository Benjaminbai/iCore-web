<template>
  <Dropdown>
    <a class="ant-dropdown-link" @click.prevent>
      {{ langList.find((item) => item.value === locale).label }}
      <DownOutlined />
    </a>
    <template #overlay>
      <Menu @click="handleSelect">
        <MenuItem v-for="item in langList" :key="item.value">
          <a href="javascript:;">{{ item.label }}</a>
        </MenuItem>
      </Menu>
    </template>
  </Dropdown>
</template>

<script setup>
import { Dropdown, Menu, MenuItem } from "ant-design-vue";
import { DownOutlined } from "@ant-design/icons-vue";

import { t, locale } from "@/i18n";

const langList = [
  { label: t("lang.zhCN"), value: "zh-CN" },
  { label: t("lang.en"), value: "en" },
];

const handleSelect = (value) => {
  locale.value = value.key;
};
</script>
