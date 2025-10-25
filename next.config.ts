import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    rules: {
      // File transformation rules
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
    resolveAlias: {
      // Path aliases
      "@": "./src",
      components: "./src/components",
    },
    resolveExtensions: [".mdx", ".tsx", ".ts", ".jsx", ".js"],
  },
};

export default withPayload(nextConfig);
