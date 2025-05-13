import alpine from "@astrojs/alpinejs";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import https from "@vitejs/plugin-basic-ssl";
import { defineConfig, fontProviders } from "astro/config";

/** @type {import('astro').AstroConfig} */
export default defineConfig({
    integrations: [
        react({
            babel: {
                plugins: [["babel-plugin-react-compiler"]],
            },
        }),
        alpine({ entrypoint: "./src/ui/alpine.config.mjs" }),
    ],
    vite: {
        plugins: [https(), tailwindcss()],
        server: {
            https: import.meta.env.DEV, // Enables https for local development
        },
    },
    experimental: {
        fonts: [
            {
                provider: fontProviders.google(),
                name: "Syncopate",
                cssVariable: "--font-syncopate",
                fallbacks: [
                    "Segoe UI",
                    "Segoe UI Web (West European)",
                    "-apple-system",
                    "BlinkMacSystemFont",
                    "Helvetica Neue",
                    "sans-serif",
                ],
                weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
            },
        ],
    },
});
