import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsConfgigPaths from "vite-tsconfig-paths";
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig(() => {
  const isPerfEnv = process.env.NODE_ENV === "performance";

  return {
    plugins: [tsConfgigPaths(), react()],
    resolve: {
      alias: !isPerfEnv
        ? undefined
        : {
            "react-dom$": "react-dom/profiling",
            "scheduler/tracing": "scheduler/tracing-profiling",
          },
    },
    test: {
      environment: "happy-dom",
      setupFiles: [path.relative(__dirname, "./test/setup.ts")],
    },
  };
});
