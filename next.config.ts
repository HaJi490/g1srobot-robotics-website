import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',  // sanity 이미지 서버주소 추가
        port: '',
      }
    ]
  }
};

export default nextConfig;
