import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx'
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects () {
    return [
      {
        source: '/(docs|docs/getting-started)',
        destination: '/docs/overview/getting-started',
        permanent: true
      }
    ]
  }
}

export default withNextra(nextConfig)
