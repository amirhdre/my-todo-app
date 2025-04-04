import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Replace with your actual GitHub repo name
const repoName = "my-todo-app"; // ⬅️ customize this

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`, // 👈 this is critical for GitHub Pages
});
