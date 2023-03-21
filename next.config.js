/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, //rendering in strict mode can cause problems with third party libraries( react-wysiwyg),
  env: {
    CLOUDINARY_ENDPOINT: process.env.CLOUDINARY_ENDPOINT,
    CLOUDINARY_PRESET: process.env.CLOUDINARY_PRESET,
  },
};

module.exports = nextConfig;
