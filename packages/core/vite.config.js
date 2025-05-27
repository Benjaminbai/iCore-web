import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  build: {
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
        },
      },
    },
    minify: "terser",
    terserOptions: {
      compress: {
        reassign_const: false, // 关键！
      },
    },
  },
});
