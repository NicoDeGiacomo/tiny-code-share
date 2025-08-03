import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize bundle size with granular chunking strategy
  webpack: (config) => {
    // Modify chunking strategy to create smaller, more efficient bundles
    config.optimization.splitChunks = {
      chunks: 'all',
      cacheGroups: {
        // Bundle core dependencies separately
        framework: {
          name: 'framework',
          test: /[\\/]node_modules[\\/](@react|react|react-dom|next)[\\/]/,
          priority: 40,
          chunks: 'all'
        },
        // Bundle Monaco editor separately since it's large
        monaco: {
          name: 'monaco-editor-chunk',
          test: /[\\/]node_modules[\\/]@monaco-editor[\\/]/,
          priority: 30,
          chunks: 'all'
        },
        // Bundle highlight.js separately
        highlightjs: {
          name: 'highlightjs-chunk',
          test: /[\\/]node_modules[\\/]highlight\.js[\\/]/,
          priority: 20,
          chunks: 'all'
        },
        // Bundle other libs
        lib: {
          name: 'lib',
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          chunks: 'all'
        }
      }
    };
    return config;
  },
  
  // Optimize images for better loading
  images: {
    minimumCacheTTL: 60,
  },
  
  // Enable compression for faster delivery
  compress: true,
  
  // Configure production build optimizations
  productionBrowserSourceMaps: false,
};

export default nextConfig;
