<template>
  <context-holder />
  <div class="login-wrapper">
    <Card class="login-container">
      <Row
        :style="{
          background: `url(${theme.login_bg_image || LoginBg}) no-repeat`,
          backgroundSize: 'cover',
          height: '100%',
        }"
      >
        <Col
          :span="14"
          class="login-form"
          :push="theme.login_box_position === 'left' ? 0 : 10"
          :style="{ background: theme.login_box_bg_color }"
        >
          <div style="width: 60%">
            <h2 :style="{ color: theme.login_title_color }">
              {{ theme.login_title }}
            </h2>
            <p :style="{ color: theme.login_sub_title_color }">
              {{ theme.login_sub_title }}
            </p>
            <Form
              ref="formRef"
              :model="formState"
              name="basic"
              :rules="rules"
              :disabled="disabled"
            >
              <FormItem name="username">
                <Input
                  v-model:value="formState.username"
                  :bordered="false"
                  class="login-input"
                  size="large"
                />
              </FormItem>

              <FormItem name="password">
                <InputPassword
                  v-model:value="formState.password"
                  :bordered="false"
                  class="login-input"
                  size="large"
                />
              </FormItem>
              <FormItem name="captcha">
                <Row :gutter="20">
                  <Col :span="14">
                    <Input
                      v-model:value="formState.captcha"
                      :bordered="false"
                      class="login-input"
                      size="large"
                    />
                  </Col>
                  <Col :span="10">
                    <img
                      class="check-code"
                      :src="randCodeData.randCodeImage"
                      @click="handleChangeCheckCode"
                    />
                  </Col>
                </Row>
                <Space> </Space>
              </FormItem>

              <FormItem name="remember">
                <Flex justify="space-between" align="center">
                  <Checkbox v-model:checked="formState.remember"
                    >Remember me</Checkbox
                  >
                  <Button type="link" style="padding-right: 0"
                    >Forgot password?</Button
                  >
                </Flex>
              </FormItem>

              <FormItem :wrapper-col="{ offset: 0, span: 12 }">
                <Button
                  type="primary"
                  html-type="submit"
                  block
                  shape="round"
                  @click="onSubmit"
                  :loading="loading"
                  >Submit</Button
                >
              </FormItem>
            </Form>
          </div>
        </Col>
        <Col
          :span="10"
          :pull="theme.login_box_position === 'left' ? 0 : 14"
          class="login-image"
        />
      </Row>
    </Card>
  </div>
</template>

<script setup>
import {
  Row,
  Col,
  Form,
  FormItem,
  Input,
  InputPassword,
  Button,
  Checkbox,
  Flex,
  Space,
  message,
  Card,
} from "ant-design-vue";
import { reactive, onMounted, toRaw, ref, inject } from "vue";
import { useRouter } from "vue-router";

import { LoginBg } from "@/static";
import { getInputCodeApi, loginApi } from "./api";
import { getUserPermissionByToken } from "@/router/dynamic";

const theme = inject("theme");

const [messageApi, contextHolder] = message.useMessage();

const { disabled } = defineProps(["disabled"]);

const rules = {
  username: [
    {
      required: true,
      message: "请输入用户名",
      trigger: "change",
    },
  ],
  password: [
    {
      required: true,
      message: "请输入密码",
      trigger: "change",
    },
  ],
  captcha: [
    {
      required: true,
      message: "请输入验证码",
      trigger: "change",
    },
  ],
};

const router = useRouter();

const formRef = ref();
const loading = ref(false);
let formState = reactive({
  username: "",
  password: "",
  remember: true,
  captcha: "",
});
let randCodeData = reactive({
  randCodeImage: "",
  requestCodeSuccess: false,
  checkKey: null,
});

onMounted(() => {
  handleChangeCheckCode();
});

const handleChangeCheckCode = () => {
  formState.captcha = "";
  randCodeData.checkKey = 1629428467008;
  getInputCodeApi(randCodeData.checkKey).then((res) => {
    randCodeData.randCodeImage = res.result;
    randCodeData.requestCodeSuccess = true;
  });
};

const onSubmit = () => {
  formRef.value
    .validate()
    .then(async () => {
      loading.value = true;
      const res = await loginApi({
        ...toRaw(formState),
        checkKey: randCodeData.checkKey,
      });
      if (res.code === 200) {
        localStorage.setItem("LOCALINFO", JSON.stringify(res.result));
        await getUserPermissionByToken();
        router.push("/home");
      } else {
        messageApi.error(res.message);
      }
    })
    .catch((error) => {
      console.log("error", error);
    })
    .finally(() => {
      loading.value = false;
    });
};
</script>

<style scoped>
.login-wrapper {
  height: 100%;
  background-color: #e0e5ec;
  display: flex;
  justify-content: center;
  align-items: center;
  :deep(.ant-card-body) {
    padding: 0;
    height: 100%;
  }
  .login-container {
    width: 65%;
    height: 70%;
    overflow: hidden;

    .login-form {
      display: flex;
      justify-content: center;
      align-items: center;

      .login-input {
        background-color: #f7f8fb;
      }
    }
  }
}
</style>
