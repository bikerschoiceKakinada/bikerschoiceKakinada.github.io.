import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/",       // DO NOT CHANGE THIS
  plugins: [react()],
  build: {
    outDir: "dist",
  },
});
