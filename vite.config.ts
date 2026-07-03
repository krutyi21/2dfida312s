import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // GitHub Pages serves this custom domain from the domain root.
  base: "/",
  plugins: [react(), tailwindcss()],
});
