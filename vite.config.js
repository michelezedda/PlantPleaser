import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "import.meta.env.VITE_SOME_KEY": JSON.stringify(
      process.env.VITE_SOME_KEY || "c999bc765be4b6fbe04290c62df9d3c"
    ),
  },
});
