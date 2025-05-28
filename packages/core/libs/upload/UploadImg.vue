<template>
  <Upload
    v-model:file-list="fileList"
    list-type="picture-card"
    class="avatar-uploader"
    :headers="headers"
    :action="uploadUrl"
    :before-upload="beforeUpload"
    @change="handleChange"
    @preview="handlePreview"
    :max-count="1"
  >
    <div>
      <LoadingOutlined v-if="loading" />
      <PlusOutlined v-else />
      <div class="ant-upload-text">Upload</div>
    </div>
  </Upload>

  <Modal
    :open="previewVisible"
    :title="previewTitle"
    :footer="null"
    @cancel="previewVisible = false"
  >
    <img :src="previewImage" />
  </Modal>
</template>

<script setup>
import { ref } from "vue";
import { Upload, message, Modal } from "ant-design-vue";
import { PlusOutlined, LoadingOutlined } from "@ant-design/icons-vue";
import Axios from "@/axios/Axios";

const urlPrefix = Axios.defaults.baseURL;
const uploadUrl = urlPrefix + "/sys/common/upload";
const downloadUrl = urlPrefix + "/sys/common/static/";
const token = JSON.parse(localStorage.getItem("LOCALINFO") || "{}")?.token;
const headers = { "X-Access-Token": token };

const { modelValue } = defineProps(["modelValue"]);
const $emit = defineEmits(["update:modelValue"]);

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}
const fileList = ref([]);
const loading = ref(false);
const previewVisible = ref(false);
const previewImage = ref("");
const previewTitle = ref("");

const handleChange = (info) => {
  if (info.file.status === "uploading") {
    loading.value = true;
    return;
  }
  if (info.file.status === "done") {
    getBase64(info.file.originFileObj, (base64Url) => {
      previewImage.value = base64Url;
      fileList.value = fileList.value.map((file) => {
        if (file.response) {
          file.url = downloadUrl + file.response.message;
        }
        return file;
      });
      loading.value = false;
      $emit("update:modelValue", fileList.value[0].url);
    });
  }
  if (info.file.status === "error") {
    loading.value = false;
    message.error("upload error");
  }
};
const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

const handlePreview = (file) => {
  if (!file.url && !file.preview) {
    file.preview = getBase64(file.originFileObj);
  }
  previewImage.value = file.url || file.preview;
  previewVisible.value = true;
  previewTitle.value =
    file.name || file.url.substring(file.url.lastIndexOf("/") + 1);
};
</script>

<style scoped>
:deep(.ant-upload) {
  overflow: hidden !important;
}
.avatar-uploader {
  .inner-img {
    width: 100%;
    height: 100%;
  }
}
</style>
