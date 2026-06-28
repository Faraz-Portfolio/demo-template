import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { name } from "./package.json";

export default defineConfig({
  plugins: [tailwindcss(), react(), tsconfigPaths()],
  base: `/${name}/`,
});
