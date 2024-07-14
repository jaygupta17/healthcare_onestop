const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination:
            process.env.NODE_ENV === 'development'
              ? 'http://localhost:8000/api/:path*'
              : '', // Ensure this is your Flask app's URL
        },
      ];
    },
  };
  
  export default nextConfig;