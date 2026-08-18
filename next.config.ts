import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

import path from "path";

const nextConfig: NextConfig = {
  output: "standalone",
  turbopack: {
    root: path.resolve(__dirname),
  },
};

const withNextIntl = createNextIntlPlugin(
  './app/i18n/request.ts'
);
export default withNextIntl(nextConfig);
