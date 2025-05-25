// next.config.ts
import withPWA from 'next-pwa'
import type { NextConfig } from 'next'

const isDev = process.env.NODE_ENV === 'development'

const baseConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
      allowedOrigins: [
        'https://visionairy.vercel.app',
        'https://aida-prod.vercel.app',
        'https://localhost:3000',
      ],
    },
  },
}

// Only PWA-specific config goes here
const withPwa = withPWA({
  dest: 'public',
  disable: isDev, // disable SW during development
  register: true,
  skipWaiting: true,
})

// Export the final config
export default withPwa(baseConfig)
