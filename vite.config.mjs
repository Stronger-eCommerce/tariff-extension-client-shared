import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import gadget from "@gadgetinc/vite-plugin-gadget";

export default defineConfig({
  plugins: [react(), gadget()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./web"),
    },
  },
});