import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";

// Derive the repo name from the GitHub Actions env var so GitHub Pages assets resolve correctly.
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1];

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? `/${repoName ?? ""}/` : "/",
  plugins: [react(), TanStackRouterVite()],
  assetsInclude: ["**/*.HEIC"],
});