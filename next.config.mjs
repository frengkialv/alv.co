// import withPlaiceholder from "@plaiceholder/next";
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: "standalone",
};

// export default withPlaiceholder(nextConfig);
export default nextConfig;
