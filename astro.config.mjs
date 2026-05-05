import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  output: "static",
  base: process.env.ASTRO_BASE || "/",
  trailingSlash: "always",
  integrations: [tailwind({ applyBaseStyles: false })],
});
