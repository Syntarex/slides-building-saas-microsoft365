import alpine from "@astrojs/alpinejs";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import https from "@vitejs/plugin-basic-ssl";
import { defineConfig } from "astro/config";

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
});
