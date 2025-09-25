import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { checker } from "vite-plugin-checker";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ mode }) => {
  const isDev = mode === "development";

  return {
    build: {
      sourcemap: true,
    },
    plugins: [
      react(),
      tailwindcss(),
      svgr(),
      tsconfigPaths(),
      isDev &&
        checker({
          eslint: {
            lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
            useFlatConfig: true,
          },
          overlay: {
            initialIsOpen: false,
          },
          typescript: true,
        }),
    ],
    server: {
      proxy: {
        "/api": {
          secure: false,
          target: "https://api-stage-swissborg.galactica.com",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
          configure: (proxy, _options) => {
            proxy.on("error", (err, _req, _res) => {
              console.log("proxy error", err);
            });
            proxy.on("proxyReq", (_proxyReq, req, _res) => {
              console.log(
                "Sending Request to the Target:",
                req.method,
                req.url
              );
            });
            proxy.on("proxyRes", (proxyRes, req, _res) => {
              console.log(
                "Received Response from the Target:",
                proxyRes.statusCode,
                req.url
              );
            });
          },
        },
      },
    },
  };
});
