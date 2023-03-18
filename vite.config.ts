import vue from "@vitejs/plugin-vue";

// Utilities
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  define: { "process.env": {} },
  server: {
    port: 3000,
    open: true,
    cors: true,
  },
  base: "./",
});
