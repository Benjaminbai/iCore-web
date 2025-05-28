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
        "@tinymce/tinymce-vue",
        "tinymce",
        "vue-codemirror",
        "vue-router",
        "vuedraggable",
        "@ant-design/icons-vue",
        // "vue-color",
      ],
      output: {
        assetFileNames: "index.css",
        globals: {
          axios: "axios",
          "ant-design-vue": "ant-design-vue",
          vue: "vue",
          "@tinymce/tinymce-vue": "@tinymce/tinymce-vue",
          tinymce: "tinymce",
          "vue-codemirror": "vue-codemirror",
          "vue-router": "vue-router",
          vuedraggable: "vuedraggable",
          "@ant-design/icons-vue": "@ant-design/icons-vue",
          // "vue-color": "vue-color",
        },
      },
    },
  },
});
