import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTypescript,
  {
    files: ["components/three/**/*.tsx"],
    rules: {
      // React Three Fiber animation loops intentionally mutate Three.js objects.
      "react-hooks/immutability": "off",
    },
  },
  globalIgnores([
    ".next/**",
    "dist/**",
    ".wrangler/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);
