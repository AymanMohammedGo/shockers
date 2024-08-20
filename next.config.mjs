/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "different-basket-1b92bf9f28.media.strapiapp.com",
        port: "", // يمكنك ترك هذا الحقل فارغًا إذا لم يكن هناك منفذ معين
        pathname: "/**", // هذا النمط يسمح بجلب الصور من جميع المسارات ضمن هذا النطاق
      },
    ],
  },
};

export default nextConfig;
