import { createContentlayerPlugin } from "next-contentlayer2";

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  swcMinify: true,
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

const withContentlayer = createContentlayerPlugin({
  // Additional Contentlayer config options
});

export default withContentlayer(nextConfig);
