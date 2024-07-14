const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination:
            process.env.NODE_ENV === 'development'
              ? 'http://localhost:8000/api/:path*'
              : 'https://mediflask.vercel.app',
        },
      ];
    },
  };
  
  export default nextConfig;