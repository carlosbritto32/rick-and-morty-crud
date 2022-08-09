import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://carlosbritto32.github.io/rick-and-morty-crud/",
  plugins: [react()],
});
