import { defineConfig } from "astro/config"
import svelte from "@astrojs/svelte"
import tailwind from "@astrojs/tailwind"

// https://astro.build/config
export default defineConfig({
    integrations: [
        svelte(),
        tailwind({
            config: {
                applyBaseStyles: false,
            },
        }),
    ],
    // trailingSlash: "always",
    site: "https://uplionsserve.org",
    base: "/childhood-cancer",
    output: "static",
    outDir: "./dist/childhood-cancer",
})
