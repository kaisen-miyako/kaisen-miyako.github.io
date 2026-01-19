import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";

// Handle both project pages (/repo-name/) and user/org pages (/<user>.github.io -> base "/").
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isGhActions = Boolean(process.env.GITHUB_ACTIONS);
const isUserPage = repoName?.endsWith(".github.io");
const base = isGhActions ? (isUserPage ? "/" : `/${repoName ?? ""}/`) : "/";

// https://vitejs.dev/config/
export default defineConfig({
  base,
  plugins: [react(), TanStackRouterVite()],
  assetsInclude: ["**/*.HEIC"],
});