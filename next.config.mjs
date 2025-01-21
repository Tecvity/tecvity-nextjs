import createMDX from '@next/mdx'
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
};

const withMDX = createMDX({
  // markdown plugins here
})
 
// Merge Next.js config with MDX
export default withMDX(nextConfig)