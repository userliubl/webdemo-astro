import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  output: "static",
  base: "/astro",
  trailingSlash: "always",
  integrations: [tailwind({ applyBaseStyles: false })],
});
