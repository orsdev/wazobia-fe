/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    CLOUDINARY_ENDPOINT: process.env.CLOUDINARY_ENDPOINT,
    CLOUDINARY_PRESET: process.env.CLOUDINARY_PRESET,
  },
};

module.exports = nextConfig;
