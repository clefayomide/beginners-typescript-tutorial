import { config } from "process";
import { defineConfig } from "vite";

interface Config {
  test: Array<{include: Array<string>; setupFiles: Array<string>; passWithNoTests: boolean; teardownTimeout: number}>
}

export default defineConfig({
  test: {
    include: ["src/**/*.ts"],
    setupFiles: ["scripts/setup.ts"],
    passWithNoTests: true,
    teardownTimeout: 5000,
  },
},)
