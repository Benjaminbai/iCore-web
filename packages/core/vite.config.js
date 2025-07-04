import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
// import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    vue(),
    // visualizer({
    //   open: false,
    //   gzipSize: true,
    //   brotliSize: true,
    // }),
  ],
  resolve: {
    alias: {
      "@/static": path.resolve(__dirname, "static"),
      "@/router": path.resolve(__dirname, "router"),
      "@/modules": path.resolve(__dirname, "modules"),
      "@/libs": path.resolve(__dirname, "libs"),
      "@/axios": path.resolve(__dirname, "axios"),
      "@/i18n": path.resolve(__dirname, "i18n"),
    }
  },
  build: {
    sourcemap: true,
    lib: {
      entry: "./index.js",
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

        "@tinymce/tinymce-vue",
        "tinymce",
        "tinymce/tinymce",
        "tinymce/themes/silver",
        "tinymce/icons/default/icons",
        "tinymce/models/dom",
        "tinymce/plugins/fullscreen",
        "tinymce/plugins/link",
        "tinymce/plugins/lists",
        "tinymce/plugins/preview",
        "tinymce/plugins/image",

        "vue-codemirror",
        "vuedraggable",
        "vue-color",
        "vue-i18n",
        "vue3-json-viewer",
      ],
      output: {
        assetFileNames: "index.css",
        globals: {
          axios: "axios",
          "ant-design-vue": "ant-design-vue",
          vue: "vue",
          "vue-router": "vue-router",
          "@ant-design/icons-vue": "@ant-design/icons-vue",

          "@tinymce/tinymce-vue": "@tinymce/tinymce-vue",
          tinymce: "tinymce",
          "tinymce/tinymce": "tinymce/tinymce",
          "tinymce/themes/silver": "tinymce/themes/silver",
          "tinymce/icons/default/icons": "tinymce/icons/default/icons",
          "tinymce/models/dom": "tinymce/models/dom",
          "tinymce/plugins/fullscreen": "tinymce/plugins/fullscreen",
          "tinymce/plugins/link": "tinymce/plugins/link",
          "tinymce/plugins/lists": "tinymce/plugins/lists",
          "tinymce/plugins/preview": "tinymce/plugins/preview",
          "tinymce/plugins/image": "tinymce/plugins/image",

          "vue-codemirror": "vue-codemirror",
          vuedraggable: "vuedraggable",
          "vue-color": "vue-color",
          "vue-i18n": "vue-i18n",
          "vue3-json-viewer": "vue3-json-viewer",
        },
      },
    },
  },
});
