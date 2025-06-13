import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@/static": path.resolve(__dirname, "static"),
      "@/router": path.resolve(__dirname, "router"),
      "@/modules": path.resolve(__dirname, "modules"),
      "@/libs": path.resolve(__dirname, "libs"),
      "@/axios": path.resolve(__dirname, "axios"),
      "@/i18n": path.resolve(__dirname, "i18n"),
    },
  },
  build: {
    sourcemap: true,
    lib: {
      entry: "./index.js", // 你的核心入口文件
      name: "Core",
      formats: ["es"],
      fileName: (format) => `core.${format}.js`,
    },
    rollupOptions: {
      external: [
        "axios",
        "ant-design-vue",
        "vue",
        "vue-router",
        "@ant-design/icons-vue",

        // 待优化
        "@tinymce/tinymce-vue",
        "tinymce",
        "vue-codemirror",
        "vuedraggable",
        "vue-color",
        "vue-i18n",
      ],
      output: {
        assetFileNames: "index.css",
        globals: {
          axios: "axios",
          "ant-design-vue": "ant-design-vue",
          vue: "vue",
          "vue-router": "vue-router",
          "@ant-design/icons-vue": "@ant-design/icons-vue",

          // 待优化
          "@tinymce/tinymce-vue": "@tinymce/tinymce-vue",
          tinymce: "tinymce",
          "vue-codemirror": "vue-codemirror",
          vuedraggable: "vuedraggable",
          "vue-color": "vue-color",
          "vue-i18n": "vue-i18n",
        },
      },
    },
  },
});
