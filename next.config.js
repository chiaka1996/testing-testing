/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    viewTransitions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admin.dododesign.africa",
        pathname: "/wp-content/uploads/**",
        search: "",
      },
    ],
  },
  headers: async () => [
    {
      source: "/_next/image",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=31536000, immutable",
        },
      ],
    },
  ],
};

module.exports = nextConfig;