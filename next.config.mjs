/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dailyspin.id",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "kaleoz-media.seagmcdn.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.static-src.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
