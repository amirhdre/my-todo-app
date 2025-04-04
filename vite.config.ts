import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const repoName = "my-todo-app";

export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`,
});
