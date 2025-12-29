/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Dynamic Mode로 변경 (API 사용을 위해)
  images: {
    // 이미지 최적화 활성화 (WebP/AVIF 자동 변환)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i1.sndcdn.com', // 팀원 아바타 이미지
      },
    ],
  },
  trailingSlash: true,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          }
        ],
      },
    ]
  },
}

module.exports = nextConfig

