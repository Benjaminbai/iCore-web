import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 5174,
    cors: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      // "@icore/web": path.resolve(__dirname, "core/dist"),
    },
  },
});
