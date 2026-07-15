import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
export default defineConfig({
    plugins: [react(), tailwindcss()],
    build: {
        cssCodeSplit: true,
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes("node_modules/react") || id.includes("node_modules/react-dom") || id.includes("node_modules/react-router-dom")) {
                        return "react";
                    }
                    if (id.includes("node_modules/framer-motion")) {
                        return "motion";
                    }
                    return undefined;
                },
            },
        },
    },
});
