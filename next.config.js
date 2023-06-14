/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "tailwindui.com",
      "images.unsplash.com",
      "res.cloudinary.com",
      "images.kabum.com.br",
      "www.nuuvem.com",
      "assets.nuuvem.com",
    ],
  },
};

module.exports = nextConfig;
